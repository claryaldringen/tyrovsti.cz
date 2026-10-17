// Krajina kolem pochodu (Martin 2026-10-17): louka, za ní se terén vlní a zvedá do zalesněných kopců a končí horami
// (pole Martin zrušil – krajina byla moc velká a zabíjela pochod; kopce a hory se o pás polí přiblížily). Nekonečná
// smyčka – díl krajiny dlouhý L se opakuje (tři kopie kolem kamery; výšky i rozmístění stromů jsou periodické v x),
// hory jsou zvláštní pás s vlastním opakováním a nepatrnou paralaxou. Stromy, keře, tráva, kameny a textury terénu
// z 0 A.D. (© Wildfire Games, CC BY-SA 3.0; krajina_0ad_stahni.py,
// krajina_0ad_glb.py). Souřadnice three.js: pochod jde k +x, divák stojí na straně −z, „do dáli“ je +z.
import * as THREE from "three";

export const L = 1600;                 // délka dílu krajiny (m)
const VOLNO = 30;                      // |z| < VOLNO bez stromů a keřů – pochod (vozy ±12 m, houfy ±16 m)
const HORY_P = 6000;                   // perioda hor (m)
// prostředí mírného pásma z 0 A.D. (maps/random/rmbiome/generic/temperate.json): slunce, okolní světlo, mlha, úprava
// obrazu a obloha (art/textures/skies/sunny). 0 A.D. počítá světlo v gama prostoru (barva × (slunce · N·L + okolí)) –
// barvy se proto zadávají jako sRGB a three.js je převede do lineárního prostoru, výsledek pak odpovídá hře.
export const PROSTREDI_0AD = {
  slunce: [1.032, 0.99, 0.866], vyskaSlunce: 0.846,          // rad (48,5°); natočení je v 0 A.D. vůči mapě – tady zleva zepředu
  okoli: [0.364706, 0.376471, 0.419608],
  mlha: [0.894118, 0.894118, 0.894118], hustotaMlhy: 0.0024, // exp², hustota pro herní mapu ~1 km – krajina je větší
  postproc: { kontrast: 1.05, sytost: 0.95 },                 // + HDR a bloom 0,16 (bez nich)
  obloha: "sunny",
};
const HORY_PARALAXA = 0.04;            // hory se vůči kameře posouvají o 4 % – působí vzdáleněji než kopce

// --- deterministický náhod a periodický šum ---------------------------------------------------------
function rng(seed) {                   // mulberry32
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function hash2(i, j, s) {
  let h = Math.imul(i, 374761393) + Math.imul(j, 668265263) + Math.imul(s, 2147483647);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
const hladce = (t) => t * t * (3 - 2 * t);
// hodnotový šum s buňkou ~`bunka`, v x periodický s periodou `perioda` – buňka se upraví, aby se do periody vešla
// celým počtem (jinak výšky na švu dílů nesedí a terénem prosvítá nebe)
function sum(x, z, bunka, perioda, seed) {
  const nx = Math.max(1, Math.round(perioda / bunka));
  bunka = perioda / nx;
  const fx = x / bunka, fz = z / bunka;
  const ix = Math.floor(fx), iz = Math.floor(fz);
  const tx = hladce(fx - ix), tz = hladce(fz - iz);
  const w = (i) => ((i % nx) + nx) % nx;
  const a = hash2(w(ix), iz, seed), b = hash2(w(ix + 1), iz, seed);
  const c = hash2(w(ix), iz + 1, seed), d = hash2(w(ix + 1), iz + 1, seed);
  return (a + (b - a) * tx) * (1 - tz) + (c + (d - c) * tx) * tz;
}
function fbm(x, z, bunka, perioda, seed, oktav = 4) {
  let s = 0, a = 1, n = 0;
  for (let o = 0; o < oktav; o++) {
    s += a * sum(x, z, bunka, perioda, seed + o * 17);
    n += a;
    a *= 0.5;
    bunka /= 2;
  }
  return s / n;
}
const krok01 = (a, b, x) => hladce(Math.min(1, Math.max(0, (x - a) / (b - a))));

// --- výška terénu (periodická v x s periodou L) -------------------------------------------------------
// rovný pás pochodu do ZVLNENI (vozy, koně a houfy do ±19 m), pak hned mírné vlny (Martin: zvlnění má být vidět už
// v pohledu Celek); daleká strana (+z): kopce stoupají hned za loukou; strana diváka (−z): kopce až za kamerou
export const ZVLNENI = 26;
export function vyska(x, z) {
  const daleko = krok01(45, 2280, z), blizko = krok01(260, 1600, -z);
  const vlny = (fbm(x, z, 150, L, 11, 3) - 0.45) * 2;              // vlny kolem ±6 m, rozteč ~130 m
  let h = krok01(ZVLNENI, ZVLNENI + 70, Math.abs(z)) * 10 * vlny;  // naplno ~100 m od osy
  h += daleko * (Math.pow(daleko, 0.6) * 300 * (0.55 + 0.6 * fbm(x, z, 800, L, 3)) + 90 * (fbm(x, z, 320, L, 7) - 0.4));
  h += blizko * 110 * (0.3 + fbm(x, z, 500, L, 5));
  return h;
}

// --- textury -----------------------------------------------------------------------------------------
const tl = new THREE.TextureLoader();
function tx(soubor, srgb = true) {
  const t = tl.load(`modely/krajina/teren/${soubor}`);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 8;
  return t;
}

const SPOLECNE_GLSL = /* glsl */ `
  float hs(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vsum(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hs(i), hs(i + vec2(1, 0)), f.x), mix(hs(i + vec2(0, 1)), hs(i + vec2(1, 1)), f.x), f.y);
  }
`;

function materialTerenu(kresba) {
  const u = {
    tTrava: { value: tx("temp_grass_long.jpg") }, tTrava2: { value: tx("temp_grass_b.jpg") },
    tPrach: { value: tx("temp_dirt_a.jpg") }, tVysocina: { value: tx("temp_highlands.jpg") }, uKresba: kresba,
  };
  const m = new THREE.MeshStandardMaterial({ roughness: 1, metalness: 0 });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", `#include <common>
        attribute float aLes; attribute float aSkala;
        varying float vLes; varying float vSkala; varying vec3 vPoz; varying vec3 vNormalaSvet;`)
      .replace("#include <begin_vertex>", `#include <begin_vertex>
        vLes = aLes; vSkala = aSkala; vPoz = (modelMatrix * vec4(position, 1.0)).xyz; vNormalaSvet = normal;`);
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", `#include <common>
        uniform sampler2D tTrava, tTrava2, tPrach, tVysocina; uniform float uKresba;
        varying float vLes; varying float vSkala; varying vec3 vPoz; varying vec3 vNormalaSvet;
        ${SPOLECNE_GLSL}
        vec3 tex(sampler2D t, vec2 uv) { return texture2D(t, uv).rgb; }`)
      .replace("#include <map_fragment>", `
        vec2 p = vPoz.xz;
        float vzd = distance(cameraPosition.xz, p);
        vec3 prumer = texture2D(tTrava, vec2(0.5), 14.0).rgb;            // průměr textury = nejmenší mipmapa
        vec3 sucha = texture2D(tTrava2, vec2(0.5), 14.0).rgb;
        vec3 detail = mix(tex(tTrava, p / 9.0), tex(tTrava2, p / 21.0), 0.35);
        detail = mix(prumer, detail, 0.5);                                // 0 A.D. tráva je kontrastní – opakování by tvořilo mozaiku
        vec3 barva = mix(prumer, detail, mix(0.25, 1.0, 1.0 - smoothstep(40.0, 280.0, vzd)));
        barva = mix(vec3(dot(barva, vec3(0.3, 0.55, 0.15))), barva, 0.72) * vec3(0.96, 0.95, 0.86);  // limetková → přirozenější
        barva *= 0.95 + 0.1 * vsum(p / 420.0);                            // jen velké jemné kolísání
        // zdupaný pás pochodu
        float pas = (1.0 - smoothstep(12.0, 26.0, abs(p.y + 0.5))) * 0.4;
        barva = mix(barva, mix(barva, texture2D(tPrach, p / 6.0).rgb, 0.6) , pas);
        // kopce: plynule sušší tráva, skála jen nevýrazně na strmých svazích
        float dal = smoothstep(120.0, 1300.0, abs(p.y));
        barva = mix(barva, sucha * vec3(0.66, 0.68, 0.5) * mix(1.0, 0.92 + 0.16 * vsum(p / 300.0), dal), dal * 0.8);
        vec3 skala = mix(texture2D(tVysocina, vec2(0.5), 14.0).rgb, tex(tVysocina, p / 13.0), 0.45);
        barva = mix(barva, skala, clamp(vSkala, 0.0, 1.0) * 0.7);
        // reliéf: svahy od slunce (zepředu zleva, jako v index.html) tmavší, ke slunci světlejší – jednolitá tráva
        // by vlny pod rozptýleným světlem oblohy zploštila
        vec3 nS = normalize(vNormalaSvet);
        barva *= 0.9 + 0.5 * dot(nS - vec3(0.0, 1.0, 0.0), normalize(vec3(-0.45, 0.0, -0.7))) - 0.25 * (1.0 - nS.y);
        barva = mix(barva, vec3(0.93, 0.89, 0.8) * (0.8 + 0.2 * dot(barva, vec3(0.33))), 0.62 * uKresba);
        diffuseColor.rgb *= barva;`);
  };
  return m;
}

function materialHor(kresba) {
  const u = {
    tSkala: { value: tx("alpine_mountainside.jpg") }, tSut: { value: tx("alpine_cliff_a.jpg") },
    tSnih: { value: tx("alpine_snow_a.jpg") }, tLes: { value: tx("temp_forestfloor_a.jpg") },
    tVysocina: { value: tx("temp_highlands.jpg") }, uKresba: kresba,
  };
  const m = new THREE.MeshStandardMaterial({ roughness: 1, metalness: 0 });
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", `#include <common>
        attribute vec3 aVahy; varying vec3 vVahy; varying vec3 vPoz;`)
      .replace("#include <begin_vertex>", `#include <begin_vertex>
        vVahy = aVahy; vPoz = position;`);
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", `#include <common>
        uniform sampler2D tSkala, tSut, tSnih, tLes, tVysocina; uniform float uKresba;
        varying vec3 vVahy; varying vec3 vPoz;
        ${SPOLECNE_GLSL}`)
      .replace("#include <map_fragment>", `
        vec2 p = vPoz.xz;
        vec3 barva = mix(texture2D(tVysocina, p / 60.0).rgb * 0.62, texture2D(tSkala, p / 90.0).rgb * vec3(0.4, 0.42, 0.46), vVahy.y);
        barva = mix(barva, texture2D(tSut, p / 70.0).rgb * 0.45, vVahy.y * smoothstep(0.4, 0.8, vsum(p / 300.0)));
        barva = mix(barva, texture2D(tLes, p / 50.0).rgb * vec3(0.3, 0.4, 0.27), vVahy.x);
        barva = mix(barva, texture2D(tSnih, p / 80.0).rgb * 0.8, vVahy.z);   // se sluncem z 0 A.D. by sníh přepaloval
        barva = mix(barva, vec3(0.93, 0.89, 0.8) * (0.8 + 0.2 * dot(barva, vec3(0.33))), 0.62 * uKresba);
        diffuseColor.rgb *= barva;`);
  };
  return m;
}

// --- síť terénu jednoho dílu ----------------------------------------------------------------------------
function radkyZ() {
  const z = [];
  for (let v = -1700; v < -400; v += 50) z.push(v);
  for (let v = -400; v < -130; v += 10) z.push(v);
  for (let v = -130; v < 130; v += 5) z.push(v);
  for (let v = 130; v < 600; v += 10) z.push(v);
  for (let v = 600; v < 1400; v += 20) z.push(v);
  for (let v = 1400; v <= 3000; v += 40) z.push(v);
  return z;
}
function sitTerenu() {
  const KX = 8, nx = L / KX + 1, zs = radkyZ(), nz = zs.length;
  const pos = new Float32Array(nx * nz * 3), nor = new Float32Array(nx * nz * 3);
  const les = new Float32Array(nx * nz), skala = new Float32Array(nx * nz);
  const d = 1.5;
  for (let j = 0; j < nz; j++) {
    for (let i = 0; i < nx; i++) {
      const x = i * KX, z = zs[j], k = j * nx + i;
      const h = vyska(x, z);
      pos.set([x, h, z], k * 3);
      const hx = vyska(x + d, z) - vyska(x - d, z), hz = vyska(x, z + d) - vyska(x, z - d);   // normála z funkce
      const n = new THREE.Vector3(-hx, 2 * d, -hz).normalize();
      nor.set([n.x, n.y, n.z], k * 3);
      les[k] = 0;
      skala[k] = Math.min(1, krok01(0.8, 0.6, n.y) + krok01(160, 420, h) * 0.6 * fbm(x, z, 150, L, 31, 2));
    }
  }
  const idx = [];
  for (let j = 0; j < nz - 1; j++) {
    for (let i = 0; i < nx - 1; i++) {
      const a = j * nx + i, b = a + 1, c = a + nx, e = c + 1;
      idx.push(a, c, b, b, c, e);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("normal", new THREE.BufferAttribute(nor, 3));
  g.setAttribute("aLes", new THREE.BufferAttribute(les, 1));
  g.setAttribute("aSkala", new THREE.BufferAttribute(skala, 1));
  g.setIndex(idx);
  g.computeBoundingSphere();
  return g;
}

// --- hory: pás periodický s HORY_P, tři periody vedle sebe ------------------------------------------------
function vyskaHor(x, z) {
  const t = krok01(3800, 8100, z);
  const hrebeny = 1 - Math.abs(fbm(x, z, 1500, HORY_P, 41, 5) * 2 - 1);   // „ridged“ šum – ostré hřebeny
  return 150 + t * (450 + 1000 * Math.pow(hrebeny, 1.6)) * (0.7 + 0.5 * fbm(x, z, 3000, HORY_P, 43, 2))
    - krok01(12100, 13600, z) * 300;
}
function sitHor() {
  const nx = 3 * HORY_P / 60 + 1, zs = [];
  for (let v = 2600; v <= 13600; v += 80) zs.push(v);
  const nz = zs.length, pos = new Float32Array(nx * nz * 3), vahy = new Float32Array(nx * nz * 3);
  for (let j = 0; j < nz; j++) {
    for (let i = 0; i < nx; i++) {
      const x = -1.5 * HORY_P + i * 60, z = zs[j], k = j * nx + i, h = vyskaHor(x, z);
      pos.set([x, h, z], k * 3);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const idx = [];
  for (let j = 0; j < nz - 1; j++) {
    for (let i = 0; i < nx - 1; i++) {
      const a = j * nx + i, b = a + 1, c = a + nx, e = c + 1;
      idx.push(a, c, b, b, c, e);
    }
  }
  g.setIndex(idx);
  g.computeVertexNormals();
  const nor = g.attributes.normal;
  for (let k = 0; k < nx * nz; k++) {
    const h = pos[k * 3 + 1], ny = nor.getY(k), x = pos[k * 3], z = pos[k * 3 + 2];
    const snih = krok01(1330, 1520, h + 200 * (fbm(x, z, 400, HORY_P, 51, 2) - 0.5)) * krok01(0.5, 0.75, ny);
    const skala = Math.max(krok01(0.85, 0.6, ny), krok01(650, 1100, h));
    const les = krok01(950, 650, h) * krok01(0.55, 0.78, ny) * krok01(0.3, 0.45, fbm(x, z, 500, HORY_P, 53, 3));
    vahy.set([les, skala, snih], k * 3);
  }
  g.setAttribute("aVahy", new THREE.BufferAttribute(vahy, 3));
  g.computeBoundingSphere();
  return g;
}

// --- nebe: skybox z 0 A.D. -----------------------------------------------------------------------------------
// stěny podle SkyManager.cpp (front, back, top, –, right, left = +X, −X, +Y, −Y, +Z, −Z); engine krychli natáčí tak,
// aby stěna „left“ (nejjasnější část oblohy) mířila ke slunci
const NEBE = { mlha: new THREE.Color(...PROSTREDI_0AD.mlha) };
function oblohaZ0AD(smerSlunce) {
  const t = new THREE.CubeTextureLoader().setPath(`modely/krajina/nebe/${PROSTREDI_0AD.obloha}/`)
    .load(["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]);
  t.colorSpace = THREE.SRGBColorSpace;
  // −Z krychle (left) natočit do vodorovného směru ke slunci
  const uhel = Math.atan2(-smerSlunce.x, -smerSlunce.z);
  return { tex: t, rotace: new THREE.Euler(0, uhel, 0) };
}

// --- rozmístění vegetace v jednom dílu ---------------------------------------------------------------------
// výsledek: druh → [x, z, natočení, měřítko, varianta]. Bez stromů (Martin 2026-10-17) – jen keře a kameny na louce.
function rozmistit() {
  const r = rng(7), out = {};
  const dej = (druh, x, z, s = 1, v = null) => {
    (out[druh] ||= []).push([((x % L) + L) % L, z, r() * Math.PI * 2, s * (0.82 + 0.36 * r()), v]);
  };
  const ker = (x, z) => dej(r() < 0.45 ? "ker" : r() < 0.6 ? "ker_velky" : "ker_maly", x, z);
  for (let k = 0; k < 220; k++) ker(r() * L, (r() < 0.5 ? 1 : -1) * (VOLNO + 2 + r() * 260));
  for (let k = 0; k < 9; k++) {                       // skupinky keřů
    const cx = r() * L, cz = (r() < 0.6 ? 1 : -1) * (50 + r() * 150);
    for (let j = 0; j < 8; j++) ker(cx + (r() - 0.5) * 24, cz + (r() - 0.5) * 14);
  }
  for (let k = 0; k < 140; k++) dej("kamen", r() * L, (r() < 0.5 ? 1 : -1) * (VOLNO - 6 + r() * 500), 0.6 + r() * 1.6);
  return out;
}

// tráva u kamery: opakovaná záplata, která jde s kamerou (posouvá se po celých periodách, aby trsy neklouzaly)
const TRAVA_P = 64, TRAVA_Z = 70;
function rozmistitTravu() {
  const r = rng(5), out = { trava: [], kvety: [] };
  for (let k = 0; k < TRAVA_P * 2 * TRAVA_Z * 0.45; k++) {
    const x = r() * TRAVA_P, z = (r() * 2 - 1) * TRAVA_Z;
    const zdupano = Math.abs(z + 0.5) < 18;
    if (zdupano && r() < 0.65) continue;
    if (r() < krok01(40, TRAVA_Z, Math.abs(z))) continue;  // řídne k okraji záplaty – bez viditelné hrany
    if (!zdupano && r() < 0.06) out.kvety.push([x, z, r() * Math.PI * 2, 0.8 + 0.4 * r(), Math.floor(r() * 2)]);
    else out.trava.push([x, z, r() * Math.PI * 2, (zdupano ? 0.6 : 0.85) + 0.4 * r(), Math.floor(r() * 7)]);
  }
  return out;
}

// --- instance -----------------------------------------------------------------------------------------------
function naFloat(g) {            // gltfpack kvantizuje (Int16/Int8 normalizované) – transformace by souřadnice ořízla
  for (const [jm, a] of Object.entries(g.attributes)) {
    if (a.array instanceof Float32Array && !a.normalized && !a.isInterleavedBufferAttribute) continue;
    const n = a.count, k = a.itemSize, arr = new Float32Array(n * k), cti = [a.getX, a.getY, a.getZ, a.getW];
    for (let i = 0; i < n; i++) for (let c = 0; c < k; c++) arr[i * k + c] = cti[c].call(a, i);
    g.setAttribute(jm, new THREE.BufferAttribute(arr, k));
  }
  return g;
}
function nactiDruh(gltf) {        // {varianty: [[{g, klic}]], materialy: klic → materiál}; síť v souřadnicích varianty
  gltf.scene.updateMatrixWorld(true);
  const varianty = [], materialy = new Map();
  gltf.scene.traverse((o) => {
    if (!o.isMesh) return;
    const m = /_(\d+)_(kmen|koruna|celek)/.exec(o.name) || /_(\d+)_(kmen|koruna|celek)/.exec(o.parent?.name || "");
    const g = naFloat(o.geometry.clone()).applyMatrix4(o.matrixWorld);
    for (const jm of Object.keys(g.attributes)) if (!["position", "normal", "uv"].includes(jm)) g.deleteAttribute(jm);
    const klic = o.material.name || o.material.uuid;
    if (!materialy.has(klic)) {
      const mat = o.material;
      if (mat.alphaTest > 0 || mat.transparent) {
        mat.transparent = false;
        mat.alphaTest = 0.42;
        mat.side = THREE.DoubleSide;
      }
      mat.metalness = 0;
      mat.roughness = 1;
      materialy.set(klic, mat);
    }
    (varianty[m ? +m[1] : 0] ||= []).push({ g, klic });
  });
  return { varianty: varianty.filter(Boolean), materialy };
}
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _p = new THREE.Vector3();
const _osa = new THREE.Vector3(0, 1, 0);
function prepocitatVysky(group, posunX) {        // záplata trávy se přesunula – trsy na terén v novém místě
  group.traverse((o) => {
    if (!o.isBatchedMesh) return;
    o.userData.polozky.forEach((p, k) => o.setMatrixAt(k, matice(p, (x, z) => vyska(x + posunX, z))));
    o.computeBoundingSphere();
  });
}
const varianta = (p, n) => (p[4] ?? Math.floor(hash2(Math.floor(p[0] * 7), Math.floor(p[1] * 7), 3) * n)) % n;
function matice([x, z, rot, s], vyskaFn) {
  _p.set(x, vyskaFn(x, z) - 0.15 * s, z);
  _q.setFromAxisAngle(_osa, rot);
  _s.setScalar(s);
  return _m.compose(_p, _q, _s);
}
// druh + položky [[x, z, rot, s, varianta]] → BatchedMesh pro každý materiál druhu (všechny varianty v jedné dávce,
// ořez pohledem i stínů po jednotlivých instancích)
function davka(D, polozky, stin, vyskaFn = vyska) {
  const group = new THREE.Group(), nv = D.varianty.length;
  for (const [klic, mat] of D.materialy) {
    const geom = D.varianty.map((casti) => casti.find((c) => c.klic === klic)?.g || null);
    const pp = polozky.filter((p) => geom[varianta(p, nv)]);
    if (!pp.length) continue;
    let nVrch = 0, nIdx = 0;
    for (const g of geom) if (g) { nVrch += g.attributes.position.count; nIdx += g.index ? g.index.count : g.attributes.position.count; }
    const bm = new THREE.BatchedMesh(pp.length, nVrch, nIdx, mat);
    const id = geom.map((g) => (g ? bm.addGeometry(g) : -1));
    for (const p of pp) bm.setMatrixAt(bm.addInstance(id[varianta(p, nv)]), matice(p, vyskaFn));
    bm.perObjectFrustumCulled = true;
    bm.sortObjects = false;
    bm.castShadow = stin;
    bm.userData.stin = stin;
    bm.receiveShadow = false;
    bm.computeBoundingSphere();
    bm.userData.krajina = true;
    bm.userData.polozky = pp;                       // pro přepočet výšek (tráva u kamery)
    group.add(bm);
  }
  return group;
}
// --- krajina ------------------------------------------------------------------------------------------------
export class Krajina {
  constructor(scene, nacti) {
    this.scene = scene;
    this.nacti = nacti;
    this.kresba = { value: 0 };
    this.koren = new THREE.Group();
    this.koren.name = "krajina";
    scene.add(this.koren);
    this.dily = [];                                  // tři kopie dílu
    this.travy = [];                                 // záplaty trávy u kamery
    this.nebe = null;                                // skybox z 0 A.D. (nastavSlunce)
  }

  async postavit() {
    const sit = sitTerenu(), mat = materialTerenu(this.kresba);
    this.hory = new THREE.Mesh(sitHor(), materialHor(this.kresba));
    this.hory.userData.krajina = true;
    this.koren.add(this.hory);

    const druhy = ["ker", "ker_maly", "ker_velky", "kamen", "trava", "kvety"];
    const gltfy = await Promise.all(druhy.map((d) => this.nacti(`krajina/${d}`)));
    const D = Object.fromEntries(druhy.map((d, i) => [d, gltfy[i] ? nactiDruh(gltfy[i]) : null]));
    // keře všech velikostí mají stejnou texturu → jedna dávka
    if (D.ker && D.ker_maly && D.ker_velky) {
      D.kre = { varianty: [...D.ker_maly.varianty, ...D.ker.varianty, ...D.ker_velky.varianty], materialy: D.ker.materialy };
      for (const v of D.kre.varianty) for (const c of v) c.klic = [...D.ker.materialy.keys()][0];
    }
    this.materialy = new Set(Object.values(D).filter(Boolean).flatMap((d) => [...d.materialy.values()]));

    const polozky = rozmistit();
    if (D.kre) {                                    // keře: varianta podle velikosti (malé, střední, velké)
      const n0 = D.ker_maly.varianty.length, n1 = D.ker.varianty.length, n2 = D.ker_velky.varianty.length;
      const r = rng(3);
      polozky.kre = [
        ...(polozky.ker_maly || []).map((p) => [p[0], p[1], p[2], p[3], Math.floor(r() * n0)]),
        ...(polozky.ker || []).map((p) => [p[0], p[1], p[2], p[3], n0 + Math.floor(r() * n1)]),
        ...(polozky.ker_velky || []).map((p) => [p[0], p[1], p[2], p[3], n0 + n1 + Math.floor(r() * n2)])];
      delete polozky.ker_maly; delete polozky.ker; delete polozky.ker_velky;
    }
    this.pocty = Object.fromEntries(Object.entries(polozky).map(([k, v]) => [k, v.length]));
    for (let i = 0; i < 3; i++) {                    // tři kopie dílu (stejný obsah, posunuté o L)
      const dil = new THREE.Group();
      const teren = new THREE.Mesh(sit, mat);
      teren.receiveShadow = true;
      teren.userData.krajina = true;
      dil.add(teren);
      for (const [druh, pp] of Object.entries(polozky)) {
        if (D[druh]) dil.add(davka(D[druh], pp, !["kamen"].includes(druh)));
      }
      this.koren.add(dil);
      this.dily.push(dil);
    }
    // tráva: záplata TRAVA_P × 2 TRAVA_Z, pět kopií kolem kamery
    const t = rozmistitTravu();
    this.pocty.trava = (t.trava.length + t.kvety.length) * 5;
    for (let i = 0; i < 5; i++) {
      const zaplata = new THREE.Group();
      if (D.trava) zaplata.add(davka(D.trava, t.trava, false));
      if (D.kvety) zaplata.add(davka(D.kvety, t.kvety, false));
      zaplata.userData.posun = 0;
      this.koren.add(zaplata);
      this.travy.push(zaplata);
    }
    let n = 0;
    this.koren.traverse((o) => { if (o.isMesh) n++; });
    this.pocty.siti = n;
  }

  update(cil) {                                       // cíl kamery (x jede s pochodem)
    const k = Math.floor(cil.x / L);
    this.dily.forEach((d, i) => { d.position.x = (k + i - 1) * L; });
    const t = Math.floor(cil.x / TRAVA_P);
    this.travy.forEach((d, i) => {
      const x = (t + i - 2) * TRAVA_P;
      if (d.userData.posun !== x) {                  // přesun záplaty → trsy na terén v novém místě
        d.position.x = d.userData.posun = x;
        prepocitatVysky(d, x);
      }
    });
    if (this.hory) {                                  // hory skoro s kamerou, posun po celých periodách
      const posun = cil.x * HORY_PARALAXA;
      this.hory.position.x = cil.x - posun + Math.round(posun / HORY_P) * HORY_P;
    }
  }

  nastavSlunce(smerSlunce) {                         // směr ke slunci (světové souřadnice) – natočení oblohy
    this.nebe = oblohaZ0AD(smerSlunce);
  }

  nastavStyl(kresba, scene) {
    this.kresba.value = kresba ? 1 : 0;
    scene.background = kresba || !this.nebe ? new THREE.Color(0xf1e8d2) : this.nebe.tex;
    if (this.nebe) scene.backgroundRotation.copy(this.nebe.rotace);
    scene.fog.color.set(kresba ? 0xf1e8d2 : NEBE.mlha);
    for (const m of this.materialy || []) m.color.setScalar(kresba ? 1.25 : 1);
    this.koren.traverse((o) => {
      if (!o.isMesh) return;
      o.material.userData.outlineParameters = { visible: false };   // bez obrysů perem (tisíce stébel a listů)
      if (o.isBatchedMesh) o.castShadow = !kresba && o.userData.stin;
    });
  }
}
