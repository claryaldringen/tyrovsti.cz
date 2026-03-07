# Italska verze tyrovsti.cz — Design

## Rozsah

Kompletni zrcadlo vsech existujicich jazykovych verzi (CZ/EN/DE) do italstiny. Cca 40+ clanku, 27+ stranek.

## Rozhodnuti

- **Preklad**: Claude prelozi vsechny clanky z cestiny/anglictiny
- **URL cesty**: Nativni italske (napr. `/abbigliamento-maschile/giubbone`)
- **Branding**: "Jobst von Einsiedl di Tyrov"
- **Vlajka**: icons8 italska vlajka, 48px PNG, stejny styl jako ostatni
- **Publikace**: Rozsirit `LocalizedString` o `it`, doplnit italske nazvy mest (Praga, Vienna atd.)
- **Uvozovky**: Italske caporali guillemets `<<` `>>`

## Technicke zmeny

### 1. Typovy system (`types/index.ts`)

- `Language` -> `'cs' | 'en' | 'de' | 'it'`
- `LocalizedString` -> pridat pole `it: string`

### 2. Konstanty (`shared/constants.ts`)

- Pridat `LANG_IT: Language = 'it'`
- Rozsirit vsechna `city` pole v `PUBLICATIONS` o italske varianty

### 3. Sitemap (`shared/sitemap.ts`)

- Pridat `menuIt: MenuItem[]` a `otherIt: MenuItem[]`

### 4. HeadExtended (`components/HeadExtended/HeadExtended.tsx`)

- `TITLE_IT = 'Jobst von Einsiedl di Tyrov'`
- `SITE_NAME_IT = 'Jobst von Einsiedl di Tyrov'`
- `FALLBACK_DESCRIPTION_IT` — italsky popis
- `ogLocale: 'it_IT'`
- Pridat `hreflang="it"` alternativni link

### 5. Menu (`components/Menu/Menu.tsx`)

- Pridat italsky brand text
- Importovat `InfoSulProgetto` komponentu (italsky About)
- Pridat italskou vlajku do `LangToggler`

### 6. Stranky (`pages/`)

- `pages/it.tsx` — italska homepage
- ~27+ novych page souboru s italskymi cestami
- Kazda s `getStaticProps` vracejicim `{ lang: LANG_IT, dest: { cs, en, de } }`

### 7. Clanky (`components/Articles/it/`)

- ~40+ novych komponent — kompletni preklad
- Adresare: `it/abbigliamento/`, `it/armi/`, `it/casaTyrovsky/`, `it/ordinanze/`, `it/campagne/`, `it/feudo/`

### 8. Aktualizace existujicich stranek

- Vsechny CZ/EN/DE stranky — pridat `it: '/italska-cesta'` do `dest`

### 9. Citacni system (`components/Citation/Cit.tsx`)

- Pridat italske uvozovky: guillemets `<<` `>>`

## Odhad rozsahu

- ~10 souboru infrastruktura
- ~27 novych stranek
- ~40 novych clanku
- ~80+ uprav existujicich stranek (dest)
