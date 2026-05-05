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
