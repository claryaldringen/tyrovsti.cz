# Follow-upy na web z přípravy prezentace 1434–1526

Sběrný soubor pro úpravy webu, které se vynoří během přípravy konferenční prezentace o vojenských akcích s českou účastí 1434–1526. **Nejde o úpravy prezentace samotné** — ty patří do `2026-05-05-prezentace-vojenske-akce-design.md`. Tyto věci se řeší samostatnými PR po prezentaci.

Formát zápisu: datum, krátký název, popis, případně dotčené soubory. Vyplývá z dialogu, ze kterého poznámka pochází (žádný PR/issue link tu být nemusí).

---

## 2026-05-05 — Sjednotit „Doznívání husitských válek"

Lipany a Želenice patří strukturně dovnitř článku „Doznívání husitských válek" jako pod-bitvy, ne jako samostatné body.

- **Lipany 1434** — momentálně samostatný článek `components/Articles/cz/akce/BitvaULipan.tsx` a samostatná položka v `casovaOsaData.ts`. Přesunout obsah do sekce uvnitř `DoznivaniHusitskychValek.tsx`, samostatný článek a jeho stránku odstranit, položku z časové osy odebrat.
- **Bitva u Želenic 1438** — chybí ve článcích i v datech. Doplnit jako sekci v `DoznivaniHusitskychValek.tsx`, vyzdvihnout taktickou paralelu s Lipany (předstíraný ústup pěchoty + úder jízdy). Zdroj: cs.wikipedia.org/wiki/Bitva_u_Želenic + sekundárka.

V `casovaOsaData.ts` rozšířit `doznivani-husitskych-valek` z 1434–1437 minimálně na 1434–1438 (kvůli Želenicím).

Vyplývá z: brainstormingu prezentace 5. 5. 2026.

## 2026-05-05 — Doplnit Waldshuterkrieg do CZECH_MERCENARIES

V `casovaOsaData.ts` chybí klíč `'waldshuterkrieg'` v setu `CZECH_MERCENARIES`, ačkoli článek `Waldshuterkrieg.tsx` obsahuje doslovnou citaci Diebolda Schillinga: „bylo z říše od vévody posláno asi šestnáct set Čechů" — tj. doložená účast 1 600 českých žoldnéřů na straně Habsburků (poslal je bavorský vévoda Ludvík IX.).

Přidat:

```ts
'waldshuterkrieg': {
  confirmed: true,
  sources: [
    'https://cs.wikipedia.org/wiki/Waldshutsk%C3%A1_v%C3%A1lka',
    // + odkaz na Schillingovu kroniku, primární pramen
  ],
},
```

Po přidání se přepočítá podíl Říše ze 7/21 (33 %) na 8/21 (38 %) a celkový počet doložených konfliktů s českou účastí z 22 na 23.

Vyplývá z: kontroly statistik pro slide 5 prezentace, 5. 5. 2026.

## 2026-05-05 — Doplnit chybějící uherské konflikty do CZECH_MERCENARIES

Set `CZECH_MERCENARIES` v `casovaOsaData.ts` je pro uherský prostor výrazně podhodnocen. Po projití článků na branchi je **u devíti dalších konfliktů česká účast explicitně doložena přímo v textu článku** (citace pramenů, jména českých velitelů, vozové hradby), ale klíč v setu chybí.

Přidat tyto klíče (s primárními zdroji, které článek uvádí):

```ts
'husitske-vpady-spis': { confirmed: true, sources: [
  'https://en.wikipedia.org/wiki/Jan_Jiskra_of_Brand%C3%BDs',
  'https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci',
] },
'hunyadiho-dlouhe-tazeni': { confirmed: true, sources: [
  'https://en.wikipedia.org/wiki/Long_campaign',
] },
'druha-bitva-na-kosove-poli': { confirmed: true, sources: [
  'https://en.wikipedia.org/wiki/Second_Battle_of_Kosovo',
  'https://cs.wikipedia.org/wiki/Druh%C3%A1_bitva_na_Kosov%C4%9B_poli',
] },
'oblehani-belehradu-1456': { confirmed: true, sources: [
  'https://en.wikipedia.org/wiki/Siege_of_Belgrade_(1456)',
  'https://en.wikipedia.org/wiki/Black_Army_of_Hungary',
] },
'povstani-magnatu-proti-matyasovi-1459': { confirmed: true, sources: [
  'https://en.wikipedia.org/wiki/Jan_Jiskra_of_Brand%C3%BDs',
] },
'osmansko-uherska-valka-1463-1483': { confirmed: true, sources: [
  'https://en.wikipedia.org/wiki/Black_Army_of_Hungary',
  'https://en.wikipedia.org/wiki/Ottoman%E2%80%93Hungarian_wars',
] },
'valka-o-uhersky-trun-1490-1492': { confirmed: true, sources: [
  'https://en.wikipedia.org/wiki/Vladislaus_II_of_Hungary',
  'https://en.wikipedia.org/wiki/Black_Army_of_Hungary',
] },
'osmansko-uherska-valka-1492-1495': { confirmed: true, sources: [
  'https://en.wikipedia.org/wiki/Ottoman%E2%80%93Hungarian_wars',
  'https://en.wikipedia.org/wiki/Black_Army_of_Hungary',
] },
'osmansko-uherska-valka-1521-1526': { confirmed: true, sources: [
  'https://en.wikipedia.org/wiki/Ottoman%E2%80%93Hungarian_wars',
] },
```

Po doplnění nové statistiky:

| Region | Před | Po |
|---|---|---|
| Říše (s Waldshutem) | 7/21 = 33 % | **8/21 = 38 %** |
| Uhry | 7/24 = 29 % | **16/24 = 67 %** |
| Rakousy | 2/4 = 50 % | **3/4 = 75 %** |
| Osmani | 2/14 = 14 % | **8/14 = 57 %** |
| Polsko-Litva | 3/20 = 15 % | 3/20 = 15 % |
| **Celkem** | 22/115 = 19 % | **32/115 = 28 %** |

Vyplývá z: kontroly statistik pro slide 5 prezentace, 5. 5. 2026, doplněno subagentem po průchodu uherských článků.

## 2026-05-05 — Pohltit Bitvu u Moháče do Osmansko-uherské 1521–1526

`bitva-u-mohace` (1526) je v `casovaOsaData.ts` jako samostatný `Conflict`, ale logicky patří **dovnitř** `osmansko-uherska-valka-1521-1526` jako vrcholná bitva tažení (paralela: Schönberg je pod Landshutskou dědickou, Orša pod Čtvrtou litevsko-moskevskou — neexistují jako samostatné položky časové osy).

Návrh:

- Odebrat `bitva-u-mohace` z pole `CONFLICTS`.
- Odpovídající stránku `pages/prehled-vojenskych-akci/bitva-u-mohace.tsx` ponechat / nebo přesměrovat redirectem na `osmansko-uherska-valka-1521-1526` v `next.config.js`.
- Obsah `BitvaUMohace.tsx` integrovat do `OsmanskoUherskaValka15211526.tsx` jako samostatnou H3 sekci „Bitva u Moháče 29. srpna 1526".
- Klíč `'bitva-u-mohace'` z `CZECH_MERCENARIES` odebrat (česká účast u Moháče je pak součástí klíče `'osmansko-uherska-valka-1521-1526'`, který má být přidán — viz výše).

Vyplývá z: kontroly konzistence časové osy — Mohács by neměl trčet samostatně, když jiné velké bitvy tohoto typu jsou „uvnitř" svých válek.

## 2026-05-05 — Sloučit region `osmani` do `uhry`

V `casovaOsaData.ts` je v `Region` typu i v `REGION_LABELS` / `REGION_COLORS` samostatný region `'osmani'`. V tomto historickém období ale veškeré osmanské vojenské aktivity v středoevropském prostoru spadají do **uherského kontextu** (uhersko-osmanské války, obrana uherské hranice) — `'osmani'` jako samostatný region není analyticky užitečný a tříští statistiky.

Návrh:

- Z `Region` typu odebrat `'osmani'`.
- Z `REGION_LABELS`, `REGION_COLORS` odebrat odpovídající záznamy.
- V `CONFLICTS` projít všechny položky a v `regions` nahradit `'osmani'` za `'uhry'` (s deduplikací, pokud už `uhry` v poli je).
- Přepočítat / aktualizovat legendu na frontend Gantt komponentě.

Po sloučení Uhry pohlcují 5 osmani-only konfliktů (např. Osmanské tažení do Sedmihradska 1438, Osmanské dobytí Bosny atd.) → Uhry mají 28 konfliktů, z toho 15 s českou účastí (54 %).

Vyplývá z: kontroly statistik pro slide 5 prezentace, 5. 5. 2026.

## 2026-05-05 — Přejmenovat „Soesterská záští" na „Soestské záští"

V `casovaOsaData.ts` figuruje konflikt jako „Soesterská záští", v článku `SoesterskaZasti.tsx` je v textu obvykle „Soesterská zášť". Správný český tvar je **Soestské záští** (rod střední; viz cs.wikipedia.org/wiki/Soestské_záští). Německý ekvivalent je **Soesterfehde**.

Návrh:

- V `casovaOsaData.ts` přejmenovat `name: 'Soesterská záští'` → `'Soestské záští'`.
- V `SoesterskaZasti.tsx` přejmenovat nadpis článku, projít text a sjednotit na „Soestské záští".
- ID konfliktu (`'soester-fehde'` v `CZECH_MERCENARIES`) ponechat, je nezávislé na názvu.
- Případně přidat do nadpisu i německou variantu jako podtitul: „Soestské záští · Soesterfehde".

Vyplývá z: konzultace s Martinem 5. 5. 2026.
