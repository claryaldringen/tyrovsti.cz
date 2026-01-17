import React from 'react'
import Link from 'next/link'
import { Col, Row } from 'reactstrap'
import { SocialLinks } from '../../SocialLinks/SocialLinks'

export const LINKS = [
  'https://www.rattenschwanz.cz/',
  'https://www.facebook.com/PragaJagellonica1471/',
  'https://slanskarota.cz/',
]

export const SOCIALS = [
  {
    key: 'facebook',
    href: 'https://www.facebook.com/Tyrovsti/',
    text: 'Tyrovsti',
  },
  {
    key: 'instagram',
    href: 'https://www.instagram.com/claryaldringen/',
    text: '@claryaldringen',
  },
  {
    key: 'x',
    href: 'https://x.com/ClaryAldringen',
    text: '@ClaryAldringen',
  },
]

export const OProjektu = () => (
  <>
    <h2>O projektu</h2>
    <p>
      Zabýváme se rekonstrukcí (tzv. reenactment) dvora a družiny&nbsp;
      <Link href="/tyrovsti-z-einsiedlu/jost-z-einsiedlu">
        Jošta z Einsiedle
      </Link>
      , osobního sekretáře krále Jiřího z Poděbrad, datačně přibližně mezi lety
      1450 - 1470.
    </p>
    <p>
      Naším cílem je představit domácí i zahraniční, laické i odborné veřejnosti
      různé aspekty života v Čechách, hlavně ve 2. polovině 15. století a
      vyvracet různé mýty a pověry, které se bohužel ještě pořád prezentují na
      českých školách, hradech a zámcích, či jsou posilovány kulturními
      stereotypy.
    </p>
    <p>
      Při rekonstrukcích vycházíme z dostupných písemných, ikonografických a
      archeologických pramenů zejména ze západních Čech, popřípadě
      západoevropského okruhu. Snažíme se o maximální historickou věrnost s
      ohledem na použité technologie a dostupné informace. Snažíme se maximálně
      držet dobově dosupných a používaných materiálů a plodin. Všechny naše
      oděvy a obuv jsou šity ručně, některé i z ručně tkaných látek. Zbrojní
      součásti a oděvní doplňky, které používáme jsou rovněž ručně vyráběnými
      replikami dochovaných originálů.
    </p>
    <p>
      Spolupracujeme i s dalšími spolky, které jsou datačně stejně zaměřené.
      Namátkou jsou to&nbsp;
      <a href={LINKS[0]} target="_blank" rel="noreferrer">
        Rattenschwanz
      </a>
      ,&nbsp;
      <a rel="noreferrer" href={LINKS[1]} target="_blank">
        Praga Jagellonica 1471
      </a>
      ,&nbsp;
      <a href={LINKS[2]} rel="noreferrer" target="_blank">
        Slánská rota
      </a>{' '}
      a další.
    </p>
    <h3>Nabízíme</h3>
    <h4>Přednášky a prezentace</h4>
    <p>
      Nabízíme následující prezentace, přednášky a besedy. Délku a obsah umíme
      přizpůsbit požadavkům pořadatele, zpravidla 45 - 90 minut, a publiku od
      školních dětí až po poučenou veřejnost.
    </p>
    <Row>
      <Col xs={12} md={6}>
        <p>
          <h6>Od Nekmíře k Lipanům</h6>
          Prezentace o husitském vojenství.
          <ul>
            <li>Nástin vývoje v Evropě</li>
            <li>Nástin vývoje v Čechách před Husitskou revolucí</li>
            <li>Výzbroj a výstroj husitských bojovníků a jejich protivníků</li>
            <li>Vývoj husitské taktiky a vojenského umění</li>
            <li>Nejdůležitější tažení a bitvy</li>
            <li>Epilog</li>
          </ul>
          Možnost ukázky některých kusů zbroje, zbraní oděvů a doplňků.
        </p>
      </Col>
      <Col xs={12} md={6}>
        <p>
          <h6>Od Lipan k Moháči</h6>
          Prezentace o pohusitském vojenství.
          <ul>
            <li>Nástin vývoje v Evropě</li>
            <li>Nástin vývoje v Čechách před Husitskou revolucí</li>
            <li>Inovace Husitské revoluce</li>
            <li>Vývoj taktiky během poděbradských válek</li>
            <li>Česká účast na válečných podnicích v zahraničí</li>
            <li>Po Moháči - epilog</li>
          </ul>
          Možnost ukázky repliky kompletní zbroje z 2. pol. 15. stol., oděvu a
          některých zbraní. V případě venkovní prezentace je možnost postavit
          dobový stan s kompletním vybavením.
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <p>
          <h6>Vývoj zbroje v průběhu středověku a raného novověku</h6>
          <ul>
            <li>Vývoj kroužkové zbroje od pádu říma do 14. století</li>
            <li>Přechod k plátové zbroji v průběhu 14. století</li>
            <li>Vrcholné formy zbroje v 15. a 16. století</li>
            <li>Úpadek zbroje v 17. a 18. století</li>
            <li>Epilog - jak je to dnes</li>
          </ul>
          Prezentace je doprovázena ukázkou repliky plátové zbroje z roku 1480.
        </p>
      </Col>
      <Col xs={12} md={6}>
        <p>
          <h6>Zbroj ve 2. polovině 15. století</h6>
          <ul>
            <li>Rychlý nástin vývoje</li>
            <li>Vrcholné formy plátové zbroje</li>
            <li>Technologie výroby</li>
            <li>Epilog - platnéřství dnes</li>
          </ul>
          Prezentace je doprovázena ukázkou repliky plátové zbroje z roku 1480.
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <p>
          <h6>Oděv v Čechách ve 2. polovině 15. století</h6>
          <ul>
            <li>Používané materiály</li>
            <li>Rychlý nástin vývoje</li>
            <li>Skladba oděvu</li>
            <li>Porovnání s jinými oblastmi</li>
          </ul>
        </p>
        Prezentace může být doprovázena ukázkami replik některých oděvů.
      </Col>
      <Col xs={12} md={6}>
        <p>
          <h6>Vývoj středověkého oděvu</h6>
          <ul>
            <li>Používané materiály</li>
            <li>Raný středověk a pozdně anitcká tradice</li>
            <li>Vrcholný středověk</li>
            <li>Pozdní středověk</li>
            <li>Landsknechti</li>
          </ul>
          Prezentace může být doprovázena ukázkami replik oděvů z pozdního
          středověku a raného novověku.
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6}>
        <p>
          <h6>Koně a rytíři</h6>
          Prezentace o vývoji jezdectví ve středověku.
          <ul>
            <li>Rychlý nástin historie jezdectví v antice</li>
            <li>Vývoj v raném středověku</li>
            <li>Rufus di Calabria</li>
            <li>Přerod v barokní ježdění</li>
            <li>Nástup anglického stylu</li>
            <li>Epilog - klasické jezdectví dnes</li>
          </ul>
        </p>
      </Col>
    </Row>
    <p>
      Na požádání je možné rovněž připravit prezentaci na jakékoli téma, kterým
      se zabývá tento web. Dotazy
    </p>
    <h4>Zápůjčky replik</h4>
    <p>
      Disponujeme množstvím unikátních a vysoce kvalitních replik artefaktů z 2.
      poloviny 15. století, jako např. zbraně, zbroje, oděvy, vybavení na koně,
      keramika, nábytek a stan, které je možno zapůjčit např. pro účely výstav,
      dekorativní účely či z důvodů natáčení.
    </p>
    <h4>Konzultace</h4>
    <p>
      Pomáháme zájemcům dosáhnout historicky věrné podoby oděvů, výstroje a
      artefaktů a rovněž umíme propjit zájemce s výrobci nejen v Česku, ale po
      celé Evropě.
    </p>
    <h3>Kontakt</h3>
    <Row>
      <Col>
        <p>
          Týřovští z.s.
          <br />
          Karla Čapka 1393 <br />
          266 01 Beroun
          <br />
          IČ: 24090956 <br />
          Email: <a href="mailto:info@tyrovsti.cz">info@tyrovsti.cz</a>
        </p>
      </Col>
      <Col>
        <SocialLinks items={SOCIALS} iconSize={24} />
      </Col>
    </Row>
  </>
)
