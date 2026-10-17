// Společné části prohlížeče Heerzugu (index.html, jezdec.html): srst koní, otěže stálé délky, sdílený kůň + jezdec.
import * as THREE from "three";

// kun.SRSTI (lineární RGB): barva těla, tmavost nohou 0–1, barva hřívy a ohonu
export const SRSTI = {
  "hnědák": [[0.16, 0.065, 0.028], 0.92, [0.012, 0.01, 0.009]],
  "tmavý hnědák": [[0.075, 0.035, 0.018], 0.92, [0.01, 0.009, 0.008]],
  "ryzák": [[0.28, 0.095, 0.03], 0.15, [0.24, 0.08, 0.028]],
  "vraník": [[0.016, 0.014, 0.013], 0.0, [0.01, 0.009, 0.008]],
  "bělouš": [[0.5, 0.49, 0.46], 0.35, [0.42, 0.41, 0.39]],
  "sivák": [[0.2, 0.195, 0.185], 0.6, [0.06, 0.058, 0.055]],
  "plavák": [[0.36, 0.25, 0.13], 0.85, [0.015, 0.012, 0.01]],
};
export const SRSTI_VAHY = { "hnědák": 34, "tmavý hnědák": 20, "ryzák": 14, "vraník": 10, "bělouš": 8, "sivák": 8, "plavák": 6 };
export function nahodnaSrst(r) {                     // r ∈ [0, 1) → srst podle běžnosti (jako scena.kone_vozu)
  const celkem = Object.values(SRSTI_VAHY).reduce((a, b) => a + b, 0);
  let x = r * celkem;
  for (const [k, v] of Object.entries(SRSTI_VAHY)) { if ((x -= v) < 0) return k; }
  return "hnědák";
}

// Srst: kód v průhlednosti barvy vrcholů (web_export.web_materialy) – 0,2–0,3 srst těla (0,2 = spodek nohou),
// 0,4 žíně; ostatní (kopyta, řemení, sedlo) beze změny. Průhlednost sama nic nezakrývá.
// Zapečené odstíny srsti (stínování, světlejší břicho, kresba srsti z Blenderu) zůstávají: barva vrcholu se při
// prvním přebarvení převede na poměr jasu k průměru vrcholů se stejným kódem (tmavé nohy zdrojového koně se tím
// vyruší) a shader ho násobí cílovou barvou srsti. Uloženo jako poloviční šedá (poměr 0–2).
const _variace = new WeakSet();
function variaceSrsti(geom) {
  const c = geom.attributes.color;
  if (_variace.has(geom) || !c || c.itemSize < 4) return;
  _variace.add(geom);
  const kod = (a) => (a > 0.18 && a < 0.32 ? Math.round((a - 0.2) * 100) : a > 0.36 && a < 0.44 ? 100 : -1);
  const jas = (i) => 0.2126 * c.getX(i) + 0.7152 * c.getY(i) + 0.0722 * c.getZ(i);
  const soucet = new Map(), pocet = new Map();
  for (let i = 0; i < c.count; i++) {
    const k = kod(c.getW(i));
    if (k < 0) continue;
    soucet.set(k, (soucet.get(k) || 0) + jas(i));
    pocet.set(k, (pocet.get(k) || 0) + 1);
  }
  for (let i = 0; i < c.count; i++) {
    const k = kod(c.getW(i));
    if (k < 0) continue;
    const v = Math.min(1.9, Math.max(0.3, jas(i) / Math.max(1e-4, soucet.get(k) / pocet.get(k))));
    c.setXYZ(i, v / 2, v / 2, v / 2);
  }
  c.needsUpdate = true;
}
export function konskyMaterial(m, srst, jas = 0) {
  const [telo, nohy, hriva] = SRSTI[srst] || SRSTI["hnědák"];
  const n = m.clone();
  n.userData.puvodni = m.userData.puvodni || m;
  n.userData.srst = [srst, jas];
  n.onBeforeCompile = (sh) => {
    sh.uniforms.uTelo = { value: new THREE.Vector3(...telo.map((c) => c * (1 + jas))) };
    sh.uniforms.uNohy = { value: nohy };
    sh.uniforms.uHriva = { value: new THREE.Vector3(...hriva) };
    sh.fragmentShader = "uniform vec3 uTelo;\nuniform float uNohy;\nuniform vec3 uHriva;\n" + sh.fragmentShader.replace(
      "#include <color_fragment>",
      `#include <color_fragment>
#ifdef USE_COLOR_ALPHA
if (vColor.a > 0.18 && vColor.a < 0.32) {
  float noha = clamp((0.3 - vColor.a) / 0.1, 0.0, 1.0);
  diffuseColor.rgb = 2.0 * vColor.rgb * mix(uTelo, vec3(0.012, 0.01, 0.009), noha * uNohy);
} else if (vColor.a > 0.36 && vColor.a < 0.44) diffuseColor.rgb = 2.0 * vColor.rgb * uHriva;
#endif
diffuseColor.a = opacity;`);
  };
  n.customProgramCacheKey = () => "srst_" + m.type;
  return n;
}
export function obarvitKone(koren, srst, jas = 0) {
  koren.traverse((o) => {
    if (!o.isMesh || !o.material.vertexColors) return;
    variaceSrsti(o.geometry);                        // sdílená geometrie klonů – převede se jednou
    o.material = konskyMaterial(o.material, srst, jas);
  });
}

// Dřevo (materiál web_drevo, web_export.drevo_uv): UV se stejným trojrovinným mapováním jako v Blenderu, sdílená
// textura rough_wood (web_drevo_textura.py) – kresba = jas letokruhů / průměr (zisk 0–2 uložený jako 0–1), násobí
// barvu vrcholů (průměrný odstín dílu), proto barva materiálu 2; reliéf jako bump. Textury se načtou jednou.
let TEXTURY_DREVA = null;
function texturyDreva() {
  if (!TEXTURY_DREVA) {
    const tl = new THREE.TextureLoader();
    const t = (f) => {
      const x = tl.load(`modely/${f}`);
      x.wrapS = x.wrapT = THREE.RepeatWrapping;
      x.flipY = false;                               // UV z glTF (v shora), jako u textur v GLTFLoaderu
      x.colorSpace = THREE.NoColorSpace;             // zisk a výška jsou data, ne barva
      x.anisotropy = 8;                              // šikmé pohledy na desky (three omezí na možnosti GPU)
      return x;
    };
    TEXTURY_DREVA = { kresba: t("drevo_kresba.jpg"), relief: t("drevo_relief.jpg") };
  }
  return TEXTURY_DREVA;
}
export function pripravitDrevo(koren) {             // jednou po načtení GLB (klony materiály sdílejí)
  koren.traverse((o) => {
    if (!o.isMesh || o.material.name !== "web_drevo" || o.material.userData.drevo || !o.geometry.attributes.uv) return;
    const m = o.material, tx = texturyDreva();
    m.map = tx.kresba;
    m.bumpMap = tx.relief;
    m.bumpScale = 1.5;
    m.color.setScalar(2);
    m.userData.drevo = true;
    m.needsUpdate = true;
  });
}

// Otěž stálé délky mezi kotvou na hlavě koně (kroužek udidla) a kotvou v pěsti / u chomoutu: ruka drží otěž
// na místě, s kýváním hlavy se otěž napíná a prověšuje. Průvěs paraboly z délky oblouku L ≈ d + 8 s² / (3 d).
const KUZE = new THREE.MeshStandardMaterial({ color: new THREE.Color().setRGB(0.07, 0.04, 0.022), roughness: 0.6, side: THREE.DoubleSide });
const N = 14;
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _t = new THREE.Vector3(), _l = new THREE.Vector3(), _s = new THREE.Vector3(),
  _p = new THREE.Vector3(), _q = new THREE.Vector3();
const NAHORU = new THREE.Vector3(0, 1, 0);
export class Otez {
  constructor(kotvaA, kotvaB, delka, sirka) {
    this.a = kotvaA; this.b = kotvaB; this.delka = delka; this.sirka = sirka;
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array((N + 1) * 2 * 3), 3));
    const idx = [];
    for (let i = 0; i < N; i++) { const k = 2 * i; idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); }
    g.setIndex(idx);
    this.mesh = new THREE.Mesh(g, KUZE);
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = true;
  }
  update() {
    this.a.getWorldPosition(_a);
    this.b.getWorldPosition(_b);
    _t.subVectors(_b, _a);
    const d = _t.length();
    const pruves = Math.sqrt(Math.max(0, 3 * d * (this.delka - d) / 8));
    _t.normalize();
    _l.crossVectors(_t, NAHORU).normalize();          // napříč
    _s.crossVectors(_l, _t).normalize().multiplyScalar(this.sirka / 2);   // šířka řemenu svisle (je vidět z boku)
    const pos = this.mesh.geometry.attributes.position;
    for (let i = 0; i <= N; i++) {
      const u = i / N;
      _p.lerpVectors(_a, _b, u);
      _p.y -= 4 * pruves * u * (1 - u);
      _q.copy(_p).add(_s); pos.setXYZ(2 * i, _q.x, _q.y, _q.z);
      _q.copy(_p).sub(_s); pos.setXYZ(2 * i + 1, _q.x, _q.y, _q.z);
    }
    pos.needsUpdate = true;
    this.mesh.geometry.computeVertexNormals();
    this.mesh.geometry.computeBoundingSphere();
  }
}
// otěže podle popisu z .json (web_export.dynamicke_oteze): kotvy hledá v klonu koně (a_soubor) a jezdce (b_soubor)
export function otezeZPopisu(popisy, klony) {
  const out = [];
  for (const o of popisy || []) {
    const ka = klony[o.a_soubor]?.getObjectByName(o.a), kb = klony[o.b_soubor]?.getObjectByName(o.b);
    if (ka && kb) out.push(new Otez(ka, kb, o.delka, o.sirka));
  }
  return out;
}
