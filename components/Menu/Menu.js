import React, { useCallback, useState } from 'react'
import { Col, Row } from 'reactstrap'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Menu.module.scss'
import { menuCs, menuEn } from '../../shared/sitemap'
import { LANG_EN } from '../../shared/constants'

const LINKS = [
  'https://www.rattenschwanz.cz/',
  'https://www.facebook.com/PragaJagellonica1471/',
  'https://slanskarota.cz/',
]

const LangToggler = () => (
  <div className={styles.langToggler}>
    <Link href="/cs">
      <a>
        <Image
          src="/images/icons8-czech-republic-48.png"
          width={48}
          height={48}
        />
      </a>
    </Link>
    <Link href="/en">
      <a>
        <Image
          src="/images/icons8-great-britain-48.png"
          width={48}
          height={48}
        />
      </a>
    </Link>
  </div>
)

const Cs = () => (
  <>
    <h2>O projektu</h2>
    <p>
      Zabýváme se rekonstrukcí (tzv. reenactment) dvora a družiny&nbsp;
      <Link href="/jost-z-einsidle-a-na-tyrove">Jošta z Einsiedle</Link>,
      osobního sekretáře krále Jiřího z Poděbrad, datačně přibližně mezi lety
      1450 - 1470.
    </p>
    <p>
      Naším cílem je představit domácí laické veřejnosti různé aspekty života v
      Čechách 15. století a vyvracet různé mýty a pověry, které se bohužel ještě
      pořád prezentují na českých školách, hradech a zámcích, či jsou posilovány
      kulturními stereotypy. Na evropské úrovni pak chceme prezentovat svébytný
      kulturně-historický vývoj v Čechách po husitských válkách.
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
  </>
)

const En = () => (
  <>
    <h2>About the project</h2>
    <p>
      We are engaged in the reconstruction (so-called reenactment) of the
      courtyard and the companion&nbsp;
      <Link href="/jost-z-einsidle-a-na-tyrove">Jobst of Einsiedl</Link>,
      personal secretary to King George of Poděbrady, dated approximately
      between the years 1450 - 1470.
    </p>
    <p>
      Our aim is to introduce the general public to various aspects of life in
      second half of 15th century Bohemia and present the unique cultural and
      historical development in Bohemia after the Hussite wars.
    </p>
    <p>
      The reconstructions are based on the available written, iconographic and
      archaeological sources, especially from western Bohemia. We strive for
      maximum historical fidelity with regard to the technology used and the
      information available. We try to stick as much as possible to the
      materials and crops available and used at the time. All our garments and
      shoes are handmade, some of them from handwoven fabrics. The weapon parts
      and clothing accessories we use are also handmade replicas of surviving
      originals.
    </p>
    <p>
      We also cooperate with other societies that are similarly focused in terms
      of dates. Among them are&nbsp;
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
      et al.
    </p>
  </>
)

export const Menu = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = useCallback(() => {
    if (window.innerWidth < 576) {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0
    }
    setIsOpen(!isOpen)
  }, [setIsOpen, isOpen])

  const closeNavbar = useCallback(
    (event) => {
      if (event.key == 'Escape') {
        setIsOpen(false)
      }
      if (event.key == 'Enter') {
        setIsOpen(true)
      }
    },
    [setIsOpen]
  )

  return (
    <div className={`menu ${isOpen && 'absolute'}`}>
      {lang === 'en' ? (
        <Link href="/en">
          <a className="brand">
            Jobst&nbsp;of&nbsp;Einsiedl&nbsp;and&nbsp;Tyrzow
          </a>
        </Link>
      ) : (
        <Link href="/">
          <a className="brand">
            Jošt&nbsp;z&nbsp;Einsiedlu&nbsp;a&nbsp;na&nbsp;Týřově
          </a>
        </Link>
      )}
      <div
        className="menu-button"
        onClick={toggleNavbar}
        onKeyDown={closeNavbar}
        role="button"
        tabIndex={0}
      >
        <div className="hamburger">
          <hr />
          <hr />
          <hr />
        </div>
        <span>Menu</span>
      </div>
      {isOpen && (
        <div className="menu-dropdown">
          <Row>
            <Col md={6}>
              <ul className="menu-list">
                {(lang === LANG_EN ? menuEn : menuCs).map(({ href, title }) => (
                  <li key={`menu_${href}`}>
                    <div>
                      <Link href={href}>{title}</Link>
                    </div>
                  </li>
                ))}
              </ul>
              <LangToggler />
            </Col>
            <Col md={6}>{lang === LANG_EN ? <En /> : <Cs />}</Col>
          </Row>
        </div>
      )}
    </div>
  )
}
