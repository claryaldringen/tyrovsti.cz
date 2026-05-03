# Časová osa konfliktů 1434–1526 — návrh

**Status:** schválený design, čeká na implementační plán
**Cíl stránky:** `pages/prehled-vojenskych-akci/index.tsx` (CZ varianta)

## Smysl

Úvodní orientační článek pro přehled vojenských akcí, který v jediné Gantt-styl tabulce zobrazí všechny vojenské konflikty od bitvy u Lipan (1434) po bitvu u Moháče (1526) v Čechách a okolí. Hlavní hodnota: čtenář na první pohled vidí **souběhy a překryvy** konfliktů, kterých je v období mnoho. Slouží jako rozcestník pro budoucí podrobné články o jednotlivých konfliktech a jako základ pro pozdější filtrování podle prokázané účasti českých žoldnéřů.

## Rozsah

### Časový

- 1434 (Lipany) až 1526 (Mohács) = 92 let
- Datová osa: 1434 → 1526 včetně, tj. 93 ročních sloupců

### Geografický

Středoevropský prostor:
- České země (Čechy, Morava, Slezsko, obojí Lužice)
- Svatá říše římská — především Bavorsko, Sasko, Franky, Rakousy, Švábsko
- Uhry
- Polsko-Litva
- Stát řádu německých rytířů
- Osmanské tažení do středoevropského prostoru (Uhry, Bělehrad)

Vyřazené: Burgundské války a dál na západ, italské války pokud nejsou středoevropskou aférou, francouzsko-anglické konflikty.

### Tematický

Všechny ozbrojené konflikty, jak velké války, tak významné samostatné bitvy a tažení, dynastické střety a místní záští v rámci uvedeného prostoru. **Bez** rozlišování účasti českých žoldnéřů — to přijde v dalším kole.

## Zdroje pro sběr dat

Wikipedie v jazyce primárního zdroje období:
- **Primárně:** německá, maďarská, polská a česká Wikipedie (mají hustší detail pro středoevropské konflikty)
- **Sekundárně:** anglická Wikipedie pro doplnění, ověření datace a jmen
- Datace ověřit minimálně dvěma jazykovými verzemi tam, kde se zdroje rozcházejí

Citace v článku: jen krátká poznámka pod tabulkou („Zpracováno podle Wikipedie") — žádné per-řádek citace. Detaily a primární zdroje budou v podrobných článcích.

## Vizuální řešení

Gantt-styl tabulka postavená na CSS Gridu.

### Layout

- **X-osa (sloupce):** 93 ročních sloupců (1434–1526), výchozí šířka jednoho roku ~14 px (laditelné CSS proměnnou).
- **Hlavička osy:** popisky dekád (1430s, 1440s, 1450s, …, 1520s) zarovnané nad první rok dekády; vizuální oddělovač (svislá linka) každých 10 let.
- **Y-osa (řádky):** každý řádek = jeden konflikt. Pořadí řádků: primárně podle `start` roku, sekundárně podle regionu pro stabilní řazení souběžných konfliktů.
- **Levý fixní sloupec:** název konfliktu + datace (např. „Bavorská válka 1459–1463"). `position: sticky; left: 0` při horizontálním scrollu, neutrální pozadí, dělící hranice vpravo.
- **Bar konfliktu:** barevný blok rozprostřený přes `grid-column: <startYear> / <endYear+1>` v rámci datové oblasti řádku. Minimální vizuální výška, drobný horizontální padding.
- **Barva:** podle regionu konfliktu, 5–6 distinktních barev (viz datový tvar). Legenda nad tabulkou.
- **Detail link:** pokud má konflikt v repu existující podrobný článek (`detailHref`), bar je obalený `<a>` s hover stavem (mírný posun nebo zesvětlení).

### Mobil

- Kontejner tabulky `overflow-x: auto`.
- Levý fixní sloupec zůstává viditelný (sticky).
- Pod tabulkou drobný hint („← → posuňte pro zobrazení celé časové osy") na úzkých viewportech.
- Šířka roku zůstává stejná na všech viewportech — primární UX je horizontální scroll, ne komprese.

### Responsivita

- Desktop: tabulka většinou nepřesahuje šířku Containeru, ale i tak má `overflow-x: auto` pro bezpečnost.
- Tablet/mobil: vždy scroll.

## Komponenty a soubory

```
components/Articles/cz/akce/
├── CasovaOsa.tsx              ← wrapper článku (h2 + intro + tabulka + zdrojová poznámka)
├── CasovaOsa.module.scss      ← styly Gantt tabulky
└── casovaOsaData.ts           ← typovaná data (Conflict[], Region barvy)
```

`CasovaOsa.tsx` se vykreslí v `pages/prehled-vojenskych-akci/index.tsx` jako první článek nad existujícími `BavorskaValka` a `Waldshuterkrieg`.

Struktura článku:
1. `<h2>` — „Časová osa konfliktů 1434–1526"
2. Krátký intro odstavec (2–3 věty: smysl tabulky, geografický rozsah, jak ji číst)
3. Legenda regionů (barva → název)
4. Gantt tabulka
5. Krátká zdrojová poznámka pod tabulkou („Zpracováno podle Wikipedie.")

### Návazná drobnost

Existující H1 stránky zní „Přehled vojenských akcí 1434 - 1525". Konec časové osy je 1526 (Mohács). V rámci tohoto specu **neměníme** text H1 stránky — případnou aktualizaci nadpisu na 1526 řeším samostatně mimo tento spec.

## Datový tvar

```ts
// casovaOsaData.ts

export type Region =
  | 'cechy'
  | 'hrr'
  | 'uhry'
  | 'polsko-litva'
  | 'rakousy'
  | 'osmani'

export const REGION_LABELS: Record<Region, string> = {
  cechy: 'České země',
  hrr: 'Svatá říše římská',
  uhry: 'Uhry',
  'polsko-litva': 'Polsko-Litva',
  rakousy: 'Rakousy / Habsburkové',
  osmani: 'Osmanské tažení',
}

export const REGION_COLORS: Record<Region, string> = {
  cechy: '#...',         // doladí se v implementaci
  hrr: '#...',
  uhry: '#...',
  'polsko-litva': '#...',
  rakousy: '#...',
  osmani: '#...',
}

export type Conflict = {
  id: string            // slug, např. 'bavorska-valka'
  name: string          // 'Bavorská válka'
  start: number         // 1459
  end: number           // 1463 (= konec; jednoroční konflikt má start === end)
  region: Region
  detailHref?: string   // např. '/prehled-vojenskych-akci/bavorska-valka'
}

export const CONFLICTS: Conflict[] = [/* sebráno z research */]

export const TIMELINE_START = 1434
export const TIMELINE_END = 1526
```

## Co článek explicitně NENÍ

- Per-konflikt textové popisy — to budou budoucí podrobné články
- Vizuální flag pro účast českých žoldnéřů — přidá se v dalším kole
- Multilingvní (EN/DE/IT) — propagace až bude obsah stabilní, podle stejného pattern jako Jošt
- Filtrování / interaktivita (řazení, vyhledávání) — statická prezentace stačí pro v1
- Citace per řádek — odkazují se na Wikipedii globálně

## Akceptační kritéria

1. Stránka `/prehled-vojenskych-akci` má nahoře novou Gantt tabulku se všemi posbíranými konflikty 1434–1526.
2. Tabulka jasně ukazuje souběhy — pro libovolný rok lze vizuálně určit, které konflikty zrovna probíhají.
3. Sticky levý sloupec funguje při horizontálním scrollu na desktopu i mobilu.
4. Existující detailní články (`BavorskaValka`, `Waldshuterkrieg`) jsou z baru klikatelné.
5. Build (`yarn build`) a typecheck procházejí bez chyb.
6. Lint (`yarn lint`) bez chyb.
7. Datový soubor `casovaOsaData.ts` obsahuje minimálně 30 konfliktů; cílová hustota 40–60.
