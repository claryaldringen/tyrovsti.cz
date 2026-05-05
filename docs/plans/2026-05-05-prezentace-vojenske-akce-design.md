# Prezentace: Vojenské akce s českou účastí 1434–1526 — návrh

**Status:** schválený design, čeká na slide-level outline a výrobu
**Kontext:** konferenční přednáška, slot 60–120 min (cílíme ~100 min + Q&A)
**Publikum:** smíšené — šermíři / reenactoři, akademici, laici
**Jazyk:** čeština
**Datum vytvoření:** 5. 5. 2026
**Sběrný soubor pro úpravy webu vyplývající z prezentace:** `2026-05-05-prezentace-followups-na-web.md`

## Smysl

Konferenční přednáška, která využije obsah z branche `feature/casova-osa-konfliktu` (časová osa + 86 článků o konfliktech 1434–1526) jako podklad pro analytické vyprávění o vojenských akcích s českou účastí.

Hlavní pointa: **české vojenské řemeslo bylo v tomto období nadprůměrně rozšířenou, ekonomicky významnou a takticky koherentní silou ve středoevropském prostoru.** Klíčové teze:

- ≈ 50 % konfliktů v okolních zemích a ≈ 70 % konfliktů v Říši v tomto období mělo doloženou účast českých žoldnéřů.
- Husitské taktické dědictví (pěchota s palnou zbraní, role jízdy, vozová hradba v reziduálních formách) se transformuje, ale nemizí — stopy až do Moháče.
- Vůči Švýcarům, konkurenční „značce" pěchoty, drží Češi jiný profil (víc střelců, jiná organizační logika).

## Tři analytická témata

1. **Organizace** — žoldnéřský trh vs. zemská hotovost.
2. **Taktika** — vývoj od pozdně-husitského tvaru přes Černou rotu k landsknechtské / orševské pěchotě.
3. **Srovnání se Švýcary** — co dělali Češi jinak, kde se potkali, paralely a rozdíly.

Témata nejsou samostatné sekce — vinou se jako leitmotiv chronologickým obloukem a explicitně se vrací v závěrečné syntéze.

## Struktura prezentace

Chronologický oblouk od Lipan po Moháč. ≈ 105 min mluveného obsahu + 5–15 min rezerva na Q&A.

```
Sekce                                            Délka     Slidy
───────────────────────────────────────────────  ────────  ─────
1. Intro (rámec + dvě časové osy + statistika)    10 min   4–5
2. Doznívání husitských válek                     15 min   6–8
   (Lipany 1434, Řevničov, Želenice 1438)
3. Soestská zášť 1444–1449                        12 min   5–6
4. Waldshuterkrieg 1468                           10 min   4–5
5. Černá rota Matyáše Korvína                     15 min   6–8
6. Zemská hotovost                                10 min   4–5
7. Bitva u Schönbergu / Wenzenbachu 1504          10 min   4–5
8. Bitva u Orše 1514                              10 min   4–5
9. Bitva u Moháče 1526                             8 min   3–4
10. Syntéza                                        5 min   2–3
───────────────────────────────────────────────  ────────  ─────
                                          Celkem ~105 min  42–54
```

### Sekce a co v nich

#### 1. Intro (10 min)

- Titulní slide (název, autor, akce, datum)
- Časová osa **českých** vojenských akcí 1434–1526 (export z webu — `CasovaOsa.tsx` filtrované na region `cechy`, případně screenshot)
- Časová osa **zahraničních** akcí s českou účastí (ručně vyfiltrovaný subset — flag „česká účast" na webu zatím není, viz follow-up)
- Statistický slide: „50 % okolí, 70 % Říše" + zdroj odhadu
- Vodicí otázka přednášky („Co dělalo z českých žoldnéřů žádanou komoditu?")

#### 2. Doznívání husitských válek (15 min)

Pointa: **kontinuita jízdy a husitského dědictví** + nástup žoldnéřského režimu po rozpadu polních obcí.

- **Lipany 1434** — bratrstva proti sobě, vozová hradba, jezdecký proti-úder. Zdroj: `BitvaULipan.tsx`, `DoznivaniHusitskychValek.tsx`.
- **Bitva u Řevničova** — jízda. *Off-web zdroj* (Martin doplní sekundárku).
- **Želenice 1438** — polsko-husitské vojsko vs. Albrecht II. *Off-web zdroj*: cs.wikipedia.org/wiki/Bitva_u_Želenic.

#### 3. Soestská zášť 1444–1449 (12 min)

Pointa: **trh / organizace** — nejkomplexnější doložený pohled na český žoldnéřský trh (kdo, kým, kolik, za co, jak dlouho). Zdroj: `SoesterskaZasti.tsx` (~861 řádků, jeden z nejbohatších článků na branchi).

#### 4. Waldshuterkrieg 1468 (10 min)

Pointa: **první přímé setkání Čechů se Švýcary v terénu**. Stav švýcarské pěchoty 1468 vs. český profil. Zdroj: `Waldshuterkrieg.tsx` (na `main`).

#### 5. Černá rota Matyáše Korvína (15 min)

Pointa: **výzbroj, výstroj, taktika** — nejlepší doložený soubor popisů toho, jak byli čeští vojáci ozbrojení a vybavení. Zdroj: `CernaArmada.tsx` (~634 řádků).

#### 6. Zemská hotovost (10 min)

Pointa: **alternativní organizační model** — kdy se nesahá po žoldnéřích a mobilizuje se země. Zdroj: **kniha v Google Docs** (Martin dodá bibliografický zápis). Web na toto téma článek zatím nemá.

#### 7. Bitva u Schönbergu / Wenzenbachu 1504 (10 min)

Pointa: **milník** — bitva, kterou historiografie považuje za první otevřený doklad kvality českého kontingentu v cizích službách proti pokročilým protivníkům. Postava: Matyáš Libák z Radovesic jako polní hejtman. Zdroj: `LandshutskaDedickaValka.tsx` (~734 řádků), sekce „Bitva u Schönbergu 12. září 1504".

#### 8. Bitva u Orše 1514 (10 min)

Pointa: **Vlčkova taktika** — typický pěchotní útvar doložený dobovým vyobrazením; vrchol české pěchotní syntézy. Zdroj: `CtvrtaLitevskoMoskevska.tsx` (článek o Čtvrté litevsko-moskevské válce).

#### 9. Bitva u Moháče 1526 (8 min)

Pointa: **konec éry** — co se z českého žoldnéřského řemesla v této bitvě ještě uplatnilo, kde už éra skončila. Zdroj: `BitvaUMohace.tsx`.

#### 10. Syntéza (5 min)

Návrat ke třem analytickým tématům — bez nových faktů, jen rekapitulace přes case studies.

- Organizace: trh + zemská hotovost paralelně, s vývojem.
- Taktika: kontinuita s husitstvím i transformace.
- Srovnání se Švýcary: jiný profil, ne nutně horší.

## Vizuální koncept

- **Barevná paleta:** odvozená z webu tyrovsti.cz (tmavá červená, béžová, černá) — žádný Google default.
- **Fonty:** serif pro nadpisy (historická patina), sans-serif pro popisky a tabulky (čitelnost).
- **Časová osa jako rekurentní prvek:** v patičce každého case-study slidu drobná mini-osa, která ukazuje, kde v čase právě jsme.
- **Mapy:** každá bitva má geografickou mapku (kde to je) + pokud existuje, taktickou mapku.
- **Dobová vyobrazení:** klíčové vizuální doklady, zejména pro Oršu (pěchotní útvar) a Černou rotu (výzbroj).
- **Srovnávací tabulky:** zejména pro Černou rotu (výzbroj / výstroj) a Schönberg (organizace kontingentu).

## Mechanika výroby

Tři cesty k finální Google Slides prezentaci, k vyřešení v navazujícím plánu:

1. **Apps Script generátor** — `.gs` skript spuštěný v Google Slides editoru vygeneruje strukturu, texty a placeholdery pro obrázky.
   *Plus:* programatický full control, jednorázové spuštění. *Mínus:* vizuální polish ruční.
2. **PPTX export + import do Slides** — vygenerovat `.pptx` (např. python-pptx), Martin nahraje do Slides.
   *Plus:* přesnější vizuální výstup. *Mínus:* layouty se při importu mohou rozbít.
3. **Manuální skript** — slide-by-slide spec (titulek, body, vizuál, zdroj), Martin klepe ručně.
   *Plus:* 100 % vizuální kontrola. *Mínus:* pomalé.

**Předběžné doporučení:** kombinace 1 + 3 — Apps Script vyrobí strukturu, texty a placeholdery; obrázky a vizuální polish doplní Martin podle slide-by-slide specu. Definitivní rozhodnutí padne v implementačním plánu.

## Mimo scope

- Úprava webu (Lipany / Řevničov / Želenice do „Doznívání husitských válek") — viz `2026-05-05-prezentace-followups-na-web.md`.
- Filtr „česká účast" v časové ose na webu — pro slidy uděláme ruční výběr.
- Anglická verze prezentace — konference je česká; případný překlad jako pozdější follow-up.

## Akceptační kritéria

1. Prezentace má všech 10 sekcí ve schválené struktuře, ≈ 100 min mluveného obsahu.
2. Každá case-study sekce má alespoň: titulní slide, hlavní pointu, vizuál (mapa / vyobrazení), klíčové faktografické body.
3. Citace zdrojů (článek na webu, Wikipedie, kniha) je viditelná aspoň v poznámkách k slidu.
4. Tři analytická témata (organizace / taktika / Švýcaři) se explicitně vrací v syntéze.
5. Časová osa je v intru a opakující se pruh v patičce každé case-study sekce.

## Otevřené body

- Bibliografický záznam pro „Bitvu u Řevničova" — Martin doplní.
- Bibliografický záznam pro knihu o zemské hotovosti — Martin doplní.
- Volba mechaniky výroby (Apps Script vs. PPTX vs. manuál) — řeší se v navazujícím plánu.
- Konkrétní seznam vyobrazení a map — projde se ve slide-by-slide outlinu.
- Identifikace konkrétní akce (název konference, datum) pro titulní slide.
