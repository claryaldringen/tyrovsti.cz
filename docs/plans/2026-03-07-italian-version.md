# Italian Version Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add complete Italian language version of tyrovsti.cz — all articles, pages, and infrastructure.

**Architecture:** Extend existing manual i18n system (no library). Add `'it'` to Language type, create Italian article components in `components/Articles/it/`, Italian pages in `pages/` with native Italian URL slugs, and update all existing pages' `dest` props to cross-link to Italian.

**Tech Stack:** Next.js 15 (Pages Router), React 19, TypeScript, Reactstrap 9

---

## URL Mapping Reference

This table maps all pages across languages. Use it throughout implementation.

| Czech (cs) | English (en) | German (de) | Italian (it) |
|---|---|---|---|
| `/` | `/en` | `/de` | `/it` |
| `/historicke-pozadi` | `/historical-background` | `/historischer-hintergrund` | `/sfondo-storico` |
| `/historicke-pozadi/hans-harsdorfer` | `/historical-background/hans-harsdorfer` | `/historischer-hintergrund/hans-harsdorfer` | `/sfondo-storico/hans-harsdorfer` |
| `/historicke-pozadi/manska-soustava` | `/historical-background/feudal-system` | `/historischer-hintergrund/lehnswesen` | `/sfondo-storico/sistema-feudale` |
| `/historicke-pozadi/krivokladska-manska-soustava` | `/historical-background/krivoklat-feudal-system` | `/historischer-hintergrund/krivoklater-lehnswesen` | `/sfondo-storico/sistema-feudale-di-krivoklat` |
| `/tyrovsti-z-einsiedlu` | `/tyrovsky-of-einsiedl` | `/tyrovsky-von-einsiedl` | `/tyrovsky-di-einsiedl` |
| `/tyrovsti-z-einsiedlu/jost-z-einsiedlu` | `/tyrovsky-of-einsiedl/jobst-of-einsiedl` | `/tyrovsky-von-einsiedl/jobst-von-einsiedl` | `/tyrovsky-di-einsiedl/jobst-di-einsiedl` |
| `/tyrovsti-z-einsiedlu/jindrich-tyrovsky-z-einsiedlu` | `/tyrovsky-of-einsiedl/henry-of-einsiedl` | `/tyrovsky-von-einsiedl/heinrich-von-einsiedl` | `/tyrovsky-di-einsiedl/enrico-di-einsiedl` |
| `/tyrovsti-z-einsiedlu/erb` | `/tyrovsky-of-einsiedl/coat-of-arms` | `/tyrovsky-von-einsiedl/wappen` | `/tyrovsky-di-einsiedl/stemma` |
| `/tyrovsti-z-einsiedlu/rozrod` | `/tyrovsky-of-einsiedl/family-tree` | `/tyrovsky-von-einsiedl/stammbaum` | `/tyrovsky-di-einsiedl/albero-genealogico` |
| `/muzsky-odev` | `/mens-clothing` | `/herrenkleidung` | `/abbigliamento-maschile` |
| `/muzsky-odev/kabat` | `/mens-clothing/doublet` | `/herrenkleidung/wams` | `/abbigliamento-maschile/farsetto` |
| `/muzsky-odev/sukne` | `/mens-clothing/gown` | `/herrenkleidung/rock` | `/abbigliamento-maschile/veste` |
| `/muzsky-odev/spodni-odev` | `/mens-clothing/undergarments` | `/herrenkleidung/unterkleidung` | `/abbigliamento-maschile/biancheria-intima` |
| `/muzsky-odev/pokryvky-hlavy` | `/mens-clothing/headwear` | `/herrenkleidung/kopfbedeckungen` | `/abbigliamento-maschile/copricapo` |
| `/muzsky-odev/obuv` | `/mens-clothing/footwear` | `/herrenkleidung/schuhwerk` | `/abbigliamento-maschile/calzature` |
| `/muzsky-odev/plast` | `/mens-clothing/cloak` | `/herrenkleidung/mantel` | `/abbigliamento-maschile/mantello` |
| `/vyzbroj-a-vystroj` | `/arms-and-armour` | `/waffen-und-ruestung` | `/armi-e-armature` |
| `/vyzbroj-a-vystroj/estok` | `/arms-and-armour/estoc` | `/waffen-und-ruestung/panzerstecher` | `/armi-e-armature/stocco` |
| `/vyzbroj-a-vystroj/tarce` | `/arms-and-armour/targe` | `/waffen-und-ruestung/tartsche` | `/armi-e-armature/targa` |
| `/vyzbroj-a-vystroj/valecne-kladivo` | `/arms-and-armour/war-hammer` | `/waffen-und-ruestung/streithammer` | `/armi-e-armature/martello-da-guerra` |
| `/vyzbroj-a-vystroj/zbroj` | `/arms-and-armour/armour` | `/waffen-und-ruestung/ruestung` | `/armi-e-armature/armatura` |
| `/ceske-vojenske-rady-a-spisy` | `/czech-military-orders-and-writings` | `/boehmische-militaerordnungen` | `/ordinanze-militari-ceche` |
| `/nemecke-vojenske-rady-a-spisy` | `/german-military-orders-and-writings` | `/deutsche-militaerordnungen` | `/ordinanze-militari-tedesche` |
| `/prehled-vojenskych-akci` | `/military-campaigns` | `/feldzuege` | `/campagne-militari` |
| `/prehled-vojenskych-akci/bavorska-valka` | `/military-campaigns/bavarian-war` | `/feldzuege/bayerischer-krieg` | `/campagne-militari/guerra-bavarese` |
| `/prehled-vojenskych-akci/waldshuterkrieg` | `/military-campaigns/waldshut-war` | `/feldzuege/waldshuterkrieg` | `/campagne-militari/guerra-di-waldshut` |
| `/taktika` | `/tactics` | `/taktik` | `/tattica` |
| `/fechtbuch` | `/fencing-manual` | `/fechthandbuch` | `/manuale-di-scherma` |
| `/jezdecky-serm` | `/equestrian-fencing` | `/reiterkampf` | `/scherma-equestre` |
| `/kterak-nevytvorit-skupinu-historickeho-sermu` | `/how-not-to-create-a-hema-group` | `/fechtgruppen-leitfaden` | `/come-non-creare-un-gruppo-hema` |
| `/zdroje` | `/bibliography` | `/bibliographie` | `/bibliografia` |
| (n/a) | `/saddle` | `/sattel` | `/sella` |

---

## Phase 1: Infrastructure

### Task 1: Update type system

**Files:**
- Modify: `types/index.ts`

**Step 1:** Update `Language` type to include `'it'`:
```ts
export type Language = 'cs' | 'en' | 'de' | 'it'
```

**Step 2:** Update `LocalizedString` to include `it`:
```ts
export type LocalizedString = { cs: string; en: string; de: string; it: string }
```

**Step 3:** Run `yarn build` to see what breaks — this will reveal all places where `LocalizedString` objects need an `it` field. Note: build WILL fail at this point because `PUBLICATIONS` city objects are missing `it`. That's expected.

---

### Task 2: Add LANG_IT constant and update PUBLICATIONS

**Files:**
- Modify: `shared/constants.ts`

**Step 1:** Add after `LANG_DE`:
```ts
export const LANG_IT: Language = 'it'
```

**Step 2:** Update every `PUBLICATIONS` entry that has a `LocalizedString` city. Add `it` field to each. Use these Italian city names:

| cs | en | de | it |
|---|---|---|---|
| Praha | Prague | Prag | Praga |
| Vídeň | Vienna | Wien | Vienna |
| Londýn | London | London | Londra |
| Mnichov | Munich | Munchen | Monaco di Baviera |
| Berlín | Berlin | Berlin | Berlino |
| Kolín nad Rýnem | Cologne | Koln | Colonia |
| Lipsko | Leipzig | Leipzig | Lipsia |
| Norimberk | Nuremberg | Nurnberg | Norimberga |
| Vratislav | Wroclaw | Breslau | Breslavia |

For cities that are just plain strings (not LocalizedString), leave them as-is — they're Czech-only academic references where the city name stays unchanged.

**Step 3:** Run `yarn build` — should pass now (no pages reference LANG_IT yet).

**Step 4:** Commit: `feat: add Italian language type and constants`

---

### Task 3: Add Italian flag icon

**Files:**
- Create: `public/images/icons8-italy-48.png`

**Step 1:** Download or create an Italian flag icon matching the existing style (icons8, 48x48 PNG). Check existing flags for reference:
- `public/images/icons8-czech-republic-48.png`
- `public/images/icons8-great-britain-48.png`
- `public/images/icons8-germany-48.png`

Use WebFetch to download from icons8 or find a matching free Italian flag PNG.

---

## Phase 2: UI Shell

### Task 4: Update HeadExtended for Italian

**Files:**
- Modify: `components/HeadExtended/HeadExtended.tsx`

**Step 1:** Add Italian constants after the German ones:
```ts
const TITLE_IT = 'Jobst von Einsiedl di Týřov'
const SITE_NAME_IT = 'Jobst von Einsiedl di Týřov'
const FALLBACK_DESCRIPTION_IT =
  'Jobst von Einsiedl di Týřov – documentazione storica sulla guerra, l\'abbigliamento e le armature nella Boemia del XV secolo'
```

**Step 2:** Import `LANG_IT` from constants.

**Step 3:** Update `titleSuffix` — change the ternary chain to handle 4 languages:
```ts
const titleSuffix =
  lang === LANG_IT ? TITLE_IT : lang === LANG_DE ? TITLE_DE : lang === LANG_EN ? TITLE_EN : TITLE_CS
```

**Step 4:** Update `metaDescription` similarly with `LANG_IT` check first.

**Step 5:** Update `ogLocale`:
```ts
const ogLocale =
  lang === LANG_IT ? 'it_IT' : lang === LANG_DE ? 'de_DE' : lang === LANG_EN ? 'en_GB' : 'cs_CZ'
```

**Step 6:** Update `siteName` similarly.

**Step 7:** Add `itPath` and hreflang link:
```ts
const itPath = lang === LANG_IT ? canonicalPath : dest?.it

// In JSX, after dePath link:
{itPath && (
  <link rel="alternate" hrefLang="it" href={`${BASE_URL}${itPath}`} />
)}
```

---

### Task 5: Update Menu for Italian

**Files:**
- Modify: `components/Menu/Menu.tsx`

**Step 1:** Import `LANG_IT` and `menuIt` (will be created in Task 7).

**Step 2:** Create `components/Articles/it/InfoSulProgetto.tsx` — Italian "About the project" component. Translate from `components/Articles/en/AboutProject.tsx`.

**Step 3:** Import `InfoSulProgetto` in Menu.tsx.

**Step 4:** Update `LangToggler` — add Italian flag after German:
```tsx
{dest?.it && (
  <Link href={dest.it}>
    <Image
      src="/images/icons8-italy-48.png"
      width={32}
      height={32}
      alt="Italian language"
    />
  </Link>
)}
```

**Step 5:** Update mobile brand text (the `<span className="d-md-none">` section) — add `LANG_IT` check:
```tsx
lang === LANG_IT ? (
  <span className="d-md-none xiberonne">
    Jobst&nbsp;von&nbsp;Einsiedl&nbsp;di&nbsp;Týřov
  </span>
) : lang === LANG_DE ? (
  // ... existing
```

**Step 6:** Update desktop brand `<Link>` section similarly — add Italian case linking to `/it`.

**Step 7:** Update menu items selection:
```tsx
(lang === LANG_IT
  ? menuIt
  : lang === LANG_DE
    ? menuDe
    : lang === LANG_EN
      ? menuEn
      : menuCs
).map(...)
```

**Step 8:** Update about project section:
```tsx
{lang === LANG_IT ? (
  <InfoSulProgetto />
) : lang === LANG_DE ? (
  // ... existing
```

---

### Task 6: Update Cit component for Italian quotation marks

**Files:**
- Modify: `components/Citation/Cit.tsx`

Read the file first. Add Italian guillemets. Italian uses `«` and `»` (caporali). Add a `LANG_IT` check:
```tsx
if (lang === LANG_IT) {
  return <>&laquo;{children}&raquo;</>
}
```

---

### Task 7: Add Italian sitemap entries

**Files:**
- Modify: `shared/sitemap.ts`

**Step 1:** Add `menuIt` array:
```ts
export const menuIt: MenuItem[] = [
  { href: '/sfondo-storico', title: 'Sfondo storico' },
  { href: '/tyrovsky-di-einsiedl', title: 'Týřovský di Einsiedl' },
  { href: '/abbigliamento-maschile', title: 'Abbigliamento maschile' },
  { href: '/armi-e-armature', title: 'Armi e armature' },
  { href: '/ordinanze-militari-ceche', title: 'Ordinanze militari ceche' },
  { href: '/ordinanze-militari-tedesche', title: 'Ordinanze militari tedesche' },
  { href: '/campagne-militari', title: 'Campagne militari' },
]
```

**Step 2:** Add `otherIt` array with all Italian sub-page paths (refer to URL mapping table above):
```ts
export const otherIt: MenuItem[] = [
  { href: '/it' },
  { href: '/sfondo-storico/hans-harsdorfer' },
  { href: '/sfondo-storico/sistema-feudale' },
  { href: '/sfondo-storico/sistema-feudale-di-krivoklat' },
  { href: '/tyrovsky-di-einsiedl/jobst-di-einsiedl' },
  { href: '/tyrovsky-di-einsiedl/enrico-di-einsiedl' },
  { href: '/tyrovsky-di-einsiedl/stemma' },
  { href: '/tyrovsky-di-einsiedl/albero-genealogico' },
  { href: '/abbigliamento-maschile/farsetto' },
  { href: '/abbigliamento-maschile/veste' },
  { href: '/abbigliamento-maschile/biancheria-intima' },
  { href: '/abbigliamento-maschile/mantello' },
  { href: '/abbigliamento-maschile/calzature' },
  { href: '/abbigliamento-maschile/copricapo' },
  { href: '/armi-e-armature/stocco' },
  { href: '/armi-e-armature/targa' },
  { href: '/armi-e-armature/martello-da-guerra' },
  { href: '/armi-e-armature/armatura' },
  { href: '/campagne-militari/guerra-bavarese' },
  { href: '/campagne-militari/guerra-di-waldshut' },
  { href: '/tattica' },
  { href: '/manuale-di-scherma' },
  { href: '/scherma-equestre' },
  { href: '/come-non-creare-un-gruppo-hema' },
  { href: '/bibliografia' },
  { href: '/sella' },
]
```

---

### Task 8: Update sitemap.xml generation

**Files:**
- Modify: `pages/sitemap.xml.tsx`

Import `menuIt` and `otherIt`, add them to the concatenation:
```ts
menuCs.concat(menuEn, menuDe, menuIt, otherCs, otherEn, otherDe, otherIt)
```

**Step:** Commit: `feat: Italian language UI shell — HeadExtended, Menu, Cit, sitemap`

---

## Phase 3: Italian Article Components

Create all Italian article components. Each component should be a translation of its Czech/English counterpart. Use the English version as primary translation source (more accessible), cross-referencing the Czech original for accuracy.

**Directory structure:**
```
components/Articles/it/
  InfoSulProgetto.tsx          (from en/AboutProject.tsx)
  Bibliografia.tsx             (from en/Bibliography.tsx)
  ManualeDiScherma.tsx         (from en/FencingManual.tsx)
  LavoroDiPiedi.tsx            (from en/Footwork.tsx)
  HansHarsdorfer.tsx           (from en/HansHarsdorfer.tsx)
  SfondoStorico.tsx            (from en/HistoricalBackground.tsx)
  ComeNonCreareUnGruppo.tsx    (from en/HowNotToCreateAGroup.tsx)
  Sella.tsx                    (from en/Saddle.tsx)
  Tattica.tsx                  (from en/Tactics.tsx)
  armi/
    Armatura.tsx               (from en/armour/Armour.tsx)
    Stocco.tsx                 (from en/armour/Estoc.tsx)
    Targa.tsx                  (from en/armour/Targe.tsx)
    MartelloDaGuerra.tsx       (from en/armour/WarHammer.tsx)
    IntroduzioneArmi.tsx       (from en/armour/... or cz/zbroj/uvod.tsx)
  campagne/
    GuerraBavarese.tsx         (from en/campaigns/BavarianWar.tsx)
    GuerraDiWaldshut.tsx       (from en/campaigns/WaldshutWar.tsx)
  feudo/
    SistemaFeudale.tsx         (from en/feudalSystem/FeudalSystem.tsx)
    SistemaFeudaleDiKrivoklat.tsx (from en/feudalSystem/KrivoklatFeudalSystem.tsx)
  abbigliamento/
    Farsetto.tsx               (from en/garment/Doublet.tsx)
    Veste.tsx                  (from en/garment/Gown.tsx)
    BiancheriaIntima.tsx       (from en/garment/Undergarments.tsx)
    Mantello.tsx               (from en/garment/Cloak.tsx)
    Calzature.tsx              (from en/garment/Footwear.tsx)
    Copricapo.tsx              (from en/garment/Headwear.tsx)
  casaTyrovsky/
    IntroduzioneTyrovsky.tsx   (from en/houseOfTeyrzow/TyrovskyOfEinsiedlIntro.tsx)
    JobstDiEinsiedl.tsx        (from en/houseOfTeyrzow/JobstOfEinsiedl.tsx)
    EnricoDiEinsiedl.tsx       (from en/houseOfTeyrzow/HenryOfEinsiedl.tsx)
    Stemma.tsx                 (from en/houseOfTeyrzow/CoatOfArms.tsx)
    AlberoGenealogico.tsx      (from en/houseOfTeyrzow/FamilyTree.tsx)
  ordinanze/
    IntroduzioneOrdinanzeCeche.tsx  (from en/orders/CzechMilitaryOrdersIntro.tsx)
    OrdinanzaDiZizka.tsx            (from en/orders/ZizkasOrder.tsx)
    VoiCheSieteGuerrieriDiDio.tsx   (from en/orders/YeWhoAreWarriorsOfGod.tsx)
    OrdinanzaDiHodetin.tsx          (from en/orders/HodetinsOrder.tsx)
    CampagnaDiZizkaInUngheria.tsx   (from en/orders/ZizkasMilitaryCampaignToHungary.tsx)
    ProtocolloDellaDietaBoema.tsx   (from en/orders/TheBohemianDietsProtocol.tsx)
    ManualeVaclavVlcek.tsx          (from en/orders/VaclavVlcekOfCenovHandbook.tsx)
    OrdinanzaDelMargravioAlbrecht.tsx (from en/orders/MargraveAlbrechtsOrder.tsx)
    IstruzioneFormazioneCarri.tsx   (from en/orders/MargravesInstructionOnWagonFormation.tsx)
    IstruzioneDifesaCarri.tsx       (from en/orders/MargravesInstructionOnDefendingTheWagonFort.tsx)
    RisoluzioneNorimberga.tsx       (from en/orders/NurembergResolution.tsx)
    OrdinanzaCarriNorimberga.tsx    (from en/orders/NurembergWagonOrder.tsx)
    OrdinanzaCarriCavalieriTedeschi.tsx (from en/orders/WagonOrderOfGermanKnights.tsx)
    OrdinanzaCarriFrancoforte.tsx   (from en/orders/FrankfurtWagonOrder.tsx)
    OrdinanzaCarriSeldeneck.tsx     (from en/orders/PhilipOfSeldenecksWagonOrder.tsx)
```

### Task 9: Create Italian article components — Standalone articles

Create these files by translating from their English counterparts:

| Create | Translate from |
|---|---|
| `components/Articles/it/InfoSulProgetto.tsx` | `components/Articles/en/AboutProject.tsx` |
| `components/Articles/it/Bibliografia.tsx` | `components/Articles/en/Bibliography.tsx` |
| `components/Articles/it/ManualeDiScherma.tsx` | `components/Articles/en/FencingManual.tsx` |
| `components/Articles/it/LavoroDiPiedi.tsx` | `components/Articles/en/Footwork.tsx` |
| `components/Articles/it/HansHarsdorfer.tsx` | `components/Articles/en/HansHarsdorfer.tsx` |
| `components/Articles/it/SfondoStorico.tsx` | `components/Articles/en/HistoricalBackground.tsx` |
| `components/Articles/it/ComeNonCreareUnGruppo.tsx` | `components/Articles/en/HowNotToCreateAGroup.tsx` |
| `components/Articles/it/Sella.tsx` | `components/Articles/en/Saddle.tsx` |
| `components/Articles/it/Tattica.tsx` | `components/Articles/en/Tactics.tsx` |

**Pattern:** Read each English source, translate all text content to Italian, keep JSX structure identical (same components, same `Qt` citations, same images). Export with Italian component name.

**Commit:** `feat: Italian standalone article components`

---

### Task 10: Create Italian article components — Arms & Armour

| Create | Translate from |
|---|---|
| `components/Articles/it/armi/IntroduzioneArmi.tsx` | `components/Articles/cz/zbroj/uvod.tsx` |
| `components/Articles/it/armi/Stocco.tsx` | `components/Articles/en/armour/Estoc.tsx` |
| `components/Articles/it/armi/Targa.tsx` | `components/Articles/en/armour/Targe.tsx` |
| `components/Articles/it/armi/MartelloDaGuerra.tsx` | `components/Articles/en/armour/WarHammer.tsx` |
| `components/Articles/it/armi/Armatura.tsx` | `components/Articles/en/armour/Armour.tsx` |

**Commit:** `feat: Italian arms & armour article components`

---

### Task 11: Create Italian article components — Clothing

| Create | Translate from |
|---|---|
| `components/Articles/it/abbigliamento/Farsetto.tsx` | `components/Articles/en/garment/Doublet.tsx` |
| `components/Articles/it/abbigliamento/Veste.tsx` | `components/Articles/en/garment/Gown.tsx` |
| `components/Articles/it/abbigliamento/BiancheriaIntima.tsx` | `components/Articles/en/garment/Undergarments.tsx` |
| `components/Articles/it/abbigliamento/Mantello.tsx` | `components/Articles/en/garment/Cloak.tsx` |
| `components/Articles/it/abbigliamento/Calzature.tsx` | `components/Articles/en/garment/Footwear.tsx` |
| `components/Articles/it/abbigliamento/Copricapo.tsx` | `components/Articles/en/garment/Headwear.tsx` |

**Commit:** `feat: Italian clothing article components`

---

### Task 12: Create Italian article components — House of Tyrovsky

| Create | Translate from |
|---|---|
| `components/Articles/it/casaTyrovsky/IntroduzioneTyrovsky.tsx` | `components/Articles/en/houseOfTeyrzow/TyrovskyOfEinsiedlIntro.tsx` |
| `components/Articles/it/casaTyrovsky/JobstDiEinsiedl.tsx` | `components/Articles/en/houseOfTeyrzow/JobstOfEinsiedl.tsx` |
| `components/Articles/it/casaTyrovsky/EnricoDiEinsiedl.tsx` | `components/Articles/en/houseOfTeyrzow/HenryOfEinsiedl.tsx` |
| `components/Articles/it/casaTyrovsky/Stemma.tsx` | `components/Articles/en/houseOfTeyrzow/CoatOfArms.tsx` |
| `components/Articles/it/casaTyrovsky/AlberoGenealogico.tsx` | `components/Articles/en/houseOfTeyrzow/FamilyTree.tsx` |

**Commit:** `feat: Italian House of Tyrovsky article components`

---

### Task 13: Create Italian article components — Feudal System

| Create | Translate from |
|---|---|
| `components/Articles/it/feudo/SistemaFeudale.tsx` | `components/Articles/en/feudalSystem/FeudalSystem.tsx` |
| `components/Articles/it/feudo/SistemaFeudaleDiKrivoklat.tsx` | `components/Articles/en/feudalSystem/KrivoklatFeudalSystem.tsx` |

**Commit:** `feat: Italian feudal system article components`

---

### Task 14: Create Italian article components — Military Campaigns

| Create | Translate from |
|---|---|
| `components/Articles/it/campagne/GuerraBavarese.tsx` | `components/Articles/en/campaigns/BavarianWar.tsx` |
| `components/Articles/it/campagne/GuerraDiWaldshut.tsx` | `components/Articles/en/campaigns/WaldshutWar.tsx` |

**Commit:** `feat: Italian military campaigns article components`

---

### Task 15: Create Italian article components — Czech Military Orders

| Create | Translate from |
|---|---|
| `components/Articles/it/ordinanze/IntroduzioneOrdinanzeCeche.tsx` | `components/Articles/en/orders/CzechMilitaryOrdersIntro.tsx` |
| `components/Articles/it/ordinanze/OrdinanzaDiZizka.tsx` | `components/Articles/en/orders/ZizkasOrder.tsx` |
| `components/Articles/it/ordinanze/VoiCheSieteGuerrieriDiDio.tsx` | `components/Articles/en/orders/YeWhoAreWarriorsOfGod.tsx` |
| `components/Articles/it/ordinanze/OrdinanzaDiHodetin.tsx` | `components/Articles/en/orders/HodetinsOrder.tsx` |
| `components/Articles/it/ordinanze/CampagnaDiZizkaInUngheria.tsx` | `components/Articles/en/orders/ZizkasMilitaryCampaignToHungary.tsx` |
| `components/Articles/it/ordinanze/ProtocolloDellaDietaBoema.tsx` | `components/Articles/en/orders/TheBohemianDietsProtocol.tsx` |
| `components/Articles/it/ordinanze/ManualeVaclavVlcek.tsx` | `components/Articles/en/orders/VaclavVlcekOfCenovHandbook.tsx` |
| `components/Articles/it/ordinanze/OrdinanzaDelMargravioAlbrecht.tsx` | `components/Articles/en/orders/MargraveAlbrechtsOrder.tsx` |
| `components/Articles/it/ordinanze/IstruzioneFormazioneCarri.tsx` | `components/Articles/en/orders/MargravesInstructionOnWagonFormation.tsx` |
| `components/Articles/it/ordinanze/IstruzioneDifesaCarri.tsx` | `components/Articles/en/orders/MargravesInstructionOnDefendingTheWagonFort.tsx` |

**Commit:** `feat: Italian Czech military orders article components`

---

### Task 16: Create Italian article components — German Military Orders

| Create | Translate from |
|---|---|
| `components/Articles/it/ordinanze/RisoluzioneNorimberga.tsx` | `components/Articles/en/orders/NurembergResolution.tsx` |
| `components/Articles/it/ordinanze/OrdinanzaCarriNorimberga.tsx` | `components/Articles/en/orders/NurembergWagonOrder.tsx` |
| `components/Articles/it/ordinanze/OrdinanzaCarriCavalieriTedeschi.tsx` | `components/Articles/en/orders/WagonOrderOfGermanKnights.tsx` |
| `components/Articles/it/ordinanze/OrdinanzaCarriFrancoforte.tsx` | `components/Articles/en/orders/FrankfurtWagonOrder.tsx` |
| `components/Articles/it/ordinanze/OrdinanzaCarriSeldeneck.tsx` | `components/Articles/en/orders/PhilipOfSeldenecksWagonOrder.tsx` |

**Commit:** `feat: Italian German military orders article components`

---

## Phase 4: Italian Pages

### Task 17: Create Italian homepage

**Files:**
- Create: `pages/it.tsx`

```tsx
import React from 'react'
import { Container } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { BACKGROUND_IMAGES, LANG_IT } from '../shared/constants'
import { HeroBackground } from '../components/HeroBackground'

const Page = () => {
  return (
    <>
      <HeadExtended description="Jobst von Einsiedl di Týřov – documentazione storica sulla guerra, l'abbigliamento e le armature nella Boemia del XV secolo" />
      <HeroBackground images={BACKGROUND_IMAGES}>
        <Container fluid />
      </HeroBackground>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_IT,
    dest: { cs: '/', en: '/en', de: '/de' },
  },
})

export default Page
```

---

### Task 18: Create Italian pages — Historical Background section

Create pages following the pattern from Task 17. Each page:
1. Imports `LANG_IT`
2. Has `getStaticProps` returning `{ lang: LANG_IT, dest: { cs, en, de } }` — use URL mapping table
3. Renders `HeadExtended` + article component + `Sources` + `Payment`

**Pages to create:**

| Page file | Italian article component | dest.cs | dest.en | dest.de |
|---|---|---|---|---|
| `pages/sfondo-storico/index.tsx` | `SfondoStorico` | `/historicke-pozadi` | `/historical-background` | `/historischer-hintergrund` |
| `pages/sfondo-storico/hans-harsdorfer.tsx` | `HansHarsdorfer` | `/historicke-pozadi/hans-harsdorfer` | `/historical-background/hans-harsdorfer` | `/historischer-hintergrund/hans-harsdorfer` |
| `pages/sfondo-storico/sistema-feudale.tsx` | `SistemaFeudale` | `/historicke-pozadi/manska-soustava` | `/historical-background/feudal-system` | `/historischer-hintergrund/lehnswesen` |
| `pages/sfondo-storico/sistema-feudale-di-krivoklat.tsx` | `SistemaFeudaleDiKrivoklat` | `/historicke-pozadi/krivokladska-manska-soustava` | `/historical-background/krivoklat-feudal-system` | `/historischer-hintergrund/krivoklater-lehnswesen` |

**Commit:** `feat: Italian historical background pages`

---

### Task 19: Create Italian pages — House of Tyrovsky section

| Page file | Italian article component | dest.cs | dest.en | dest.de |
|---|---|---|---|---|
| `pages/tyrovsky-di-einsiedl/index.tsx` | `IntroduzioneTyrovsky` | `/tyrovsti-z-einsiedlu` | `/tyrovsky-of-einsiedl` | `/tyrovsky-von-einsiedl` |
| `pages/tyrovsky-di-einsiedl/jobst-di-einsiedl.tsx` | `JobstDiEinsiedl` | `/tyrovsti-z-einsiedlu/jost-z-einsiedlu` | `/tyrovsky-of-einsiedl/jobst-of-einsiedl` | `/tyrovsky-von-einsiedl/jobst-von-einsiedl` |
| `pages/tyrovsky-di-einsiedl/enrico-di-einsiedl.tsx` | `EnricoDiEinsiedl` | `/tyrovsti-z-einsiedlu/jindrich-tyrovsky-z-einsiedlu` | `/tyrovsky-of-einsiedl/henry-of-einsiedl` | `/tyrovsky-von-einsiedl/heinrich-von-einsiedl` |
| `pages/tyrovsky-di-einsiedl/stemma.tsx` | `Stemma` | `/tyrovsti-z-einsiedlu/erb` | `/tyrovsky-of-einsiedl/coat-of-arms` | `/tyrovsky-von-einsiedl/wappen` |
| `pages/tyrovsky-di-einsiedl/albero-genealogico.tsx` | `AlberoGenealogico` | `/tyrovsti-z-einsiedlu/rozrod` | `/tyrovsky-of-einsiedl/family-tree` | `/tyrovsky-von-einsiedl/stammbaum` |

**Commit:** `feat: Italian House of Tyrovsky pages`

---

### Task 20: Create Italian pages — Clothing section

| Page file | Italian article component | dest.cs | dest.en | dest.de |
|---|---|---|---|---|
| `pages/abbigliamento-maschile/index.tsx` | (overview — check CZ/EN pattern) | `/muzsky-odev` | `/mens-clothing` | `/herrenkleidung` |
| `pages/abbigliamento-maschile/farsetto.tsx` | `Farsetto` | `/muzsky-odev/kabat` | `/mens-clothing/doublet` | `/herrenkleidung/wams` |
| `pages/abbigliamento-maschile/veste.tsx` | `Veste` | `/muzsky-odev/sukne` | `/mens-clothing/gown` | `/herrenkleidung/rock` |
| `pages/abbigliamento-maschile/biancheria-intima.tsx` | `BiancheriaIntima` | `/muzsky-odev/spodni-odev` | `/mens-clothing/undergarments` | `/herrenkleidung/unterkleidung` |
| `pages/abbigliamento-maschile/copricapo.tsx` | `Copricapo` | `/muzsky-odev/pokryvky-hlavy` | `/mens-clothing/headwear` | `/herrenkleidung/kopfbedeckungen` |
| `pages/abbigliamento-maschile/calzature.tsx` | `Calzature` | `/muzsky-odev/obuv` | `/mens-clothing/footwear` | `/herrenkleidung/schuhwerk` |
| `pages/abbigliamento-maschile/mantello.tsx` | `Mantello` | `/muzsky-odev/plast` | `/mens-clothing/cloak` | `/herrenkleidung/mantel` |

**Commit:** `feat: Italian clothing pages`

---

### Task 21: Create Italian pages — Arms & Armour section

| Page file | Italian article component | dest.cs | dest.en | dest.de |
|---|---|---|---|---|
| `pages/armi-e-armature/index.tsx` | `IntroduzioneArmi` | `/vyzbroj-a-vystroj` | `/arms-and-armour` | `/waffen-und-ruestung` |
| `pages/armi-e-armature/stocco.tsx` | `Stocco` | `/vyzbroj-a-vystroj/estok` | `/arms-and-armour/estoc` | `/waffen-und-ruestung/panzerstecher` |
| `pages/armi-e-armature/targa.tsx` | `Targa` | `/vyzbroj-a-vystroj/tarce` | `/arms-and-armour/targe` | `/waffen-und-ruestung/tartsche` |
| `pages/armi-e-armature/martello-da-guerra.tsx` | `MartelloDaGuerra` | `/vyzbroj-a-vystroj/valecne-kladivo` | `/arms-and-armour/war-hammer` | `/waffen-und-ruestung/streithammer` |
| `pages/armi-e-armature/armatura.tsx` | `Armatura` | `/vyzbroj-a-vystroj/zbroj` | `/arms-and-armour/armour` | `/waffen-und-ruestung/ruestung` |

**Commit:** `feat: Italian arms & armour pages`

---

### Task 22: Create Italian pages — Military Orders overview pages

| Page file | dest.cs | dest.en | dest.de |
|---|---|---|---|
| `pages/ordinanze-militari-ceche.tsx` | `/ceske-vojenske-rady-a-spisy` | `/czech-military-orders-and-writings` | `/boehmische-militaerordnungen` |
| `pages/ordinanze-militari-tedesche.tsx` | `/nemecke-vojenske-rady-a-spisy` | `/german-military-orders-and-writings` | `/deutsche-militaerordnungen` |

These pages list all orders in their respective category. Follow the pattern from the English/Czech equivalents.

**Commit:** `feat: Italian military orders overview pages`

---

### Task 23: Create Italian pages — Military Campaigns section

| Page file | Italian article component | dest.cs | dest.en | dest.de |
|---|---|---|---|---|
| `pages/campagne-militari/index.tsx` | (overview) | `/prehled-vojenskych-akci` | `/military-campaigns` | `/feldzuege` |
| `pages/campagne-militari/guerra-bavarese.tsx` | `GuerraBavarese` | `/prehled-vojenskych-akci/bavorska-valka` | `/military-campaigns/bavarian-war` | `/feldzuege/bayerischer-krieg` |
| `pages/campagne-militari/guerra-di-waldshut.tsx` | `GuerraDiWaldshut` | `/prehled-vojenskych-akci/waldshuterkrieg` | `/military-campaigns/waldshut-war` | `/feldzuege/waldshuterkrieg` |

**Commit:** `feat: Italian military campaigns pages`

---

### Task 24: Create Italian pages — Standalone pages

| Page file | Italian article component | dest.cs | dest.en | dest.de |
|---|---|---|---|---|
| `pages/tattica.tsx` | `Tattica` | `/taktika` | `/tactics` | `/taktik` |
| `pages/manuale-di-scherma.tsx` | `ManualeDiScherma` | `/fechtbuch` | `/fencing-manual` | `/fechthandbuch` |
| `pages/scherma-equestre.tsx` | `LavoroDiPiedi` | `/jezdecky-serm` | `/equestrian-fencing` | `/reiterkampf` |
| `pages/come-non-creare-un-gruppo-hema.tsx` | `ComeNonCreareUnGruppo` | `/kterak-nevytvorit-skupinu-historickeho-sermu` | `/how-not-to-create-a-hema-group` | `/fechtgruppen-leitfaden` |
| `pages/bibliografia.tsx` | `Bibliografia` | `/zdroje` | `/bibliography` | `/bibliographie` |
| `pages/sella.tsx` | `Sella` | (n/a) | `/saddle` | `/sattel` |

**Note:** `pages/bibliografia.tsx` already exists as German bibliography. Check if it conflicts — German uses `/bibliographie` not `/bibliografia`. If there's a conflict, the German page file is `pages/bibliographie.tsx`, so `pages/bibliografia.tsx` should be free.

**Commit:** `feat: Italian standalone pages`

---

## Phase 5: Update Existing Pages

### Task 25: Update all Czech pages — add `it` to dest

Every Czech page's `getStaticProps` needs `it: '/italian-path'` added to the `dest` object. Use the URL mapping table.

**Files to modify (all in `pages/`):**

1. `index.tsx` — add `it: '/it'`
2. `historicke-pozadi/index.tsx` — add `it: '/sfondo-storico'`
3. `historicke-pozadi/hans-harsdorfer.tsx` — add `it: '/sfondo-storico/hans-harsdorfer'`
4. `historicke-pozadi/manska-soustava.tsx` — add `it: '/sfondo-storico/sistema-feudale'`
5. `historicke-pozadi/krivokladska-manska-soustava.tsx` — add `it: '/sfondo-storico/sistema-feudale-di-krivoklat'`
6. `tyrovsti-z-einsiedlu/index.tsx` — add `it: '/tyrovsky-di-einsiedl'`
7. `tyrovsti-z-einsiedlu/jost-z-einsiedlu.tsx` — add `it: '/tyrovsky-di-einsiedl/jobst-di-einsiedl'`
8. `tyrovsti-z-einsiedlu/jindrich-tyrovsky-z-einsiedlu.tsx` — add `it: '/tyrovsky-di-einsiedl/enrico-di-einsiedl'`
9. `tyrovsti-z-einsiedlu/erb.tsx` — add `it: '/tyrovsky-di-einsiedl/stemma'`
10. `tyrovsti-z-einsiedlu/rozrod.tsx` — add `it: '/tyrovsky-di-einsiedl/albero-genealogico'`
11. `muzsky-odev/index.tsx` — add `it: '/abbigliamento-maschile'`
12. `muzsky-odev/kabat.tsx` — add `it: '/abbigliamento-maschile/farsetto'`
13. `muzsky-odev/sukne.tsx` — add `it: '/abbigliamento-maschile/veste'`
14. `muzsky-odev/spodni-odev.tsx` — add `it: '/abbigliamento-maschile/biancheria-intima'`
15. `muzsky-odev/pokryvky-hlavy.tsx` — add `it: '/abbigliamento-maschile/copricapo'`
16. `muzsky-odev/obuv.tsx` — add `it: '/abbigliamento-maschile/calzature'`
17. `muzsky-odev/plast.tsx` — add `it: '/abbigliamento-maschile/mantello'`
18. `vyzbroj-a-vystroj/index.tsx` — add `it: '/armi-e-armature'`
19. `vyzbroj-a-vystroj/estok.tsx` — add `it: '/armi-e-armature/stocco'`
20. `vyzbroj-a-vystroj/tarce.tsx` — add `it: '/armi-e-armature/targa'`
21. `vyzbroj-a-vystroj/valecne-kladivo.tsx` — add `it: '/armi-e-armature/martello-da-guerra'`
22. `vyzbroj-a-vystroj/zbroj.tsx` — add `it: '/armi-e-armature/armatura'`
23. `ceske-vojenske-rady-a-spisy.tsx` — add `it: '/ordinanze-militari-ceche'`
24. `nemecke-vojenske-rady-a-spisy.tsx` — add `it: '/ordinanze-militari-tedesche'`
25. `prehled-vojenskych-akci/index.tsx` — add `it: '/campagne-militari'`
26. `prehled-vojenskych-akci/bavorska-valka.tsx` — add `it: '/campagne-militari/guerra-bavarese'`
27. `prehled-vojenskych-akci/waldshuterkrieg.tsx` — add `it: '/campagne-militari/guerra-di-waldshut'`
28. `taktika.tsx` — add `it: '/tattica'`
29. `fechtbuch.tsx` — add `it: '/manuale-di-scherma'`
30. `jezdecky-serm.tsx` — add `it: '/scherma-equestre'`
31. `kterak-nevytvorit-skupinu-historickeho-sermu.tsx` — add `it: '/come-non-creare-un-gruppo-hema'`
32. `zdroje.tsx` — add `it: '/bibliografia'`

**Commit:** `feat: add Italian dest links to all Czech pages`

---

### Task 26: Update all English pages — add `it` to dest

Same as Task 25 but for English pages. Modify `getStaticProps` in each:

1. `en.tsx` — add `it: '/it'`
2. `historical-background/index.tsx` — add `it: '/sfondo-storico'`
3. `historical-background/hans-harsdorfer.tsx`
4. `historical-background/feudal-system.tsx`
5. `historical-background/krivoklat-feudal-system.tsx`
6. `tyrovsky-of-einsiedl/index.tsx`
7. `tyrovsky-of-einsiedl/jobst-of-einsiedl.tsx`
8. `tyrovsky-of-einsiedl/henry-of-einsiedl.tsx`
9. `tyrovsky-of-einsiedl/coat-of-arms.tsx`
10. `tyrovsky-of-einsiedl/family-tree.tsx`
11. `mens-clothing/index.tsx`
12. `mens-clothing/doublet.tsx`
13. `mens-clothing/gown.tsx`
14. `mens-clothing/undergarments.tsx`
15. `mens-clothing/headwear.tsx`
16. `mens-clothing/footwear.tsx`
17. `mens-clothing/cloak.tsx`
18. `arms-and-armour/index.tsx`
19. `arms-and-armour/estoc.tsx`
20. `arms-and-armour/targe.tsx`
21. `arms-and-armour/war-hammer.tsx`
22. `arms-and-armour/armour.tsx`
23. `czech-military-orders-and-writings.tsx`
24. `german-military-orders-and-writings.tsx`
25. `military-campaigns/index.tsx`
26. `military-campaigns/bavarian-war.tsx`
27. `military-campaigns/waldshut-war.tsx`
28. `tactics.tsx`
29. `fencing-manual.tsx`
30. `equestrian-fencing.tsx`
31. `how-not-to-create-a-hema-group.tsx`
32. `bibliography.tsx`
33. `saddle.tsx`

**Commit:** `feat: add Italian dest links to all English pages`

---

### Task 27: Update all German pages — add `it` to dest

Same pattern for all German pages:

1. `de.tsx` — add `it: '/it'`
2. `historischer-hintergrund/index.tsx`
3. `historischer-hintergrund/hans-harsdorfer.tsx`
4. `historischer-hintergrund/lehnswesen.tsx`
5. `historischer-hintergrund/krivoklater-lehnswesen.tsx`
6. `tyrovsky-von-einsiedl/index.tsx`
7. `tyrovsky-von-einsiedl/jobst-von-einsiedl.tsx`
8. `tyrovsky-von-einsiedl/heinrich-von-einsiedl.tsx`
9. `tyrovsky-von-einsiedl/wappen.tsx`
10. `tyrovsky-von-einsiedl/stammbaum.tsx`
11. `herrenkleidung/index.tsx`
12. `herrenkleidung/wams.tsx`
13. `herrenkleidung/rock.tsx`
14. `herrenkleidung/unterkleidung.tsx`
15. `herrenkleidung/kopfbedeckungen.tsx`
16. `herrenkleidung/schuhwerk.tsx`
17. `herrenkleidung/mantel.tsx`
18. `waffen-und-ruestung/index.tsx`
19. `waffen-und-ruestung/panzerstecher.tsx`
20. `waffen-und-ruestung/tartsche.tsx`
21. `waffen-und-ruestung/streithammer.tsx`
22. `waffen-und-ruestung/ruestung.tsx`
23. `boehmische-militaerordnungen.tsx`
24. `deutsche-militaerordnungen.tsx`
25. `feldzuege/index.tsx`
26. `feldzuege/bayerischer-krieg.tsx`
27. `feldzuege/waldshuterkrieg.tsx`
28. `taktik.tsx`
29. `fechthandbuch.tsx`
30. `reiterkampf.tsx`
31. `fechtgruppen-leitfaden.tsx`
32. `bibliographie.tsx`
33. `sattel.tsx`

**Commit:** `feat: add Italian dest links to all German pages`

---

## Phase 6: Verification

### Task 28: Build verification

**Step 1:** Run `yarn build` — must complete with zero errors.

**Step 2:** Run `yarn dev` and manually verify:
- `/it` loads Italian homepage
- Language flag switcher shows all 4 flags
- Clicking Italian flag from any CS/EN/DE page navigates to correct Italian page
- Menu shows Italian items when on Italian page
- hreflang tags include `it` variant
- Sitemap includes all Italian URLs

**Step 3:** Run `npx eslint .` — fix any lint issues.

**Commit:** `fix: resolve any build/lint issues from Italian version`

---

### Task 29: Final commit and summary

Review all changes, ensure consistency. Final commit message:

```
feat: complete Italian language version of tyrovsti.cz

- Added 43 Italian article components (full translations)
- Added 27+ Italian pages with native Italian URL slugs
- Updated type system, constants, HeadExtended, Menu, Cit, sitemap
- Cross-linked all existing CS/EN/DE pages to Italian equivalents
- Added Italian flag icon for language switcher
```
