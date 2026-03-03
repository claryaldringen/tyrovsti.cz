# CLAUDE.md

Tento soubor slouží jako průvodce pro Claude Code (claude.ai/code) při práci s tímto repozitářem.

## Komunikace

Komunikuj se mnou vždy v češtině a tykej mi, jako kdybych byl tvůj kolega. Já jsem Martin.

## Přehled projektu

Webová stránka o historické dokumentaci Jošta z Einsiedlu a vojenské historii 15. století v Čechách. Dvojjazyčný obsah (čeština/angličtina) s akademickými citacemi. Žádné CMS ani databáze — veškerý obsah je přímo v React komponentách.

## Příkazy

- **Dev server:** `npm run dev` (běží na portu 3005)
- **Build:** `npm run build`
- **Lint:** `npx eslint .` (ESLint + Prettier nakonfigurované v package.json)
- **Verze Node:** 22 LTS (viz `.nvmrc`)

Žádný testovací framework není nakonfigurován.

## Technologie

- Next.js 15 (Pages Router) s React 19
- Reactstrap 9 (Bootstrap 5) pro layout
- CSS Modules s SCSS pro stylování komponent
- Prettier 3: bez středníků, jednoduché uvozovky, trailing commas (es5), 2 mezery
- ESLint 8 s @typescript-eslint v7
- TypeScript 5.9

## Architektura

### Routing a lokalizace

- Souborový routing v `/pages/`. České cesty na rootu (`/muzsky-odev`), anglické s prefixem (`/arms-and-armour`, `/en`).
- Žádná i18n knihovna. Jazyk se řeší ručně: každá stránka exportuje `getStaticProps` vracející `{ lang, dest }`. `lang` je `LANG_CS` nebo `LANG_EN` (z `shared/constants.ts`), `dest` je URL alternativní jazykové verze.
- `LanguageProvider` a `QuoteProvider` obalují aplikaci v `_app.tsx`.
- `_document.tsx` nastavuje dynamicky `<html lang>` atribut podle `pageProps.lang`.

### SEO

- `HeadExtended` generuje: meta description, canonical URL, hreflang tagy (cs/en/x-default), og:url, og:description, twitter cards.
- Každá stránka má vlastní `description` prop.
- Homepage (`/`) používá `getStaticProps` + klientský redirect přes `useEffect` (ne server-side), aby Google viděl český obsah.
- Sitemap pokrývá všech ~45 stránek.

### Vzor struktury stránky

Stránky skládají článkové komponenty, `HeadExtended` pro SEO/meta a sdílené patičkové komponenty:

```tsx
<HeadExtended title="..." image="..." description="..." />
<Container>
  <Row><Col>
    <h1>Titulek</h1>
    <ArticleComponent />
    <Sources />
    <Payment />
  </Col></Row>
</Container>
```

### Klíčové adresáře

- `components/Articles/cz/` a `components/Articles/en/` — obsah článků rozdělený podle jazyka a tématu (odev, zbroj, akce, rady atd.)
- `components/Quote/` — citační systém: `Qt` vykresluje inline citace, `QuoteProvider` sleduje použité publikace přes `useReducer`, `Sources` vykresluje bibliografii
- `components/HeadExtended/` — obaluje Next.js `<Head>` s SEO meta tagy a komponentou `Menu`
- `components/HeroBackground/` — celoobrazovkový karusel obrázků s fade přechody řízenými CSS proměnnými
- `shared/constants.ts` — jazykové konstanty a objekt `PUBLICATIONS` (70+ akademických zdrojů)
- `shared/sitemap.ts` — pole struktury menu (`menuCs`, `menuEn`, `otherCs`, `otherEn`)

### Citační systém

`PUBLICATIONS` v `shared/constants.ts` je klíčován podle ID. Komponenta `Qt` dispatchuje `ADD_PUBLICATION` do kontextu `QuoteProvider`. Na konci stránky `Sources` vykreslí pouze publikace použité na dané stránce.

### Přesměrování

Přesměrování starých rout jsou definována v `next.config.js` jako permanentní (301) redirecty.

## Nasazení

Nasazeno na Vercel. Optimalizace obrázků formáty AVIF a WebP (konfigurace v `next.config.js`).
