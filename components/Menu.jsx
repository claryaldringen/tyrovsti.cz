import { useCallback, useState } from 'react'

import { Col, Row } from 'reactstrap'
import Link from 'next/link'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = useCallback(() => {
    if (window.innerWidth < 576) {
      document.body.scrollTop = 0 // For Safari
      document.documentElement.scrollTop = 0
    }
    setIsOpen(!isOpen)
  }, [setIsOpen, isOpen])

  return (
    <div className={`menu ${isOpen && 'absolute'}`}>
      <a href="/" className="brand">
        Jošt&nbsp;z&nbsp;Ensiedle&nbsp;a&nbsp;na&nbsp;Týřově
      </a>
      <div className="menu-button" onClick={toggleNavbar}>
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
                <li>
                  <div>
                    <Link href="/historicke-pozadi">Historické pozadí</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href="/jost-z-einsidle-a-na-tyrove">
                      Jošt z Einsidle
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href="/panske-pokryvky-hlavy">
                      Pánské pokrývky hlavy
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href="/obuv">
                      Obuv
                    </Link>
                  </div>
                </li>
                <li>
                  <div>
                    <Link href="/vaclav-vlcek-o-sikovani-vojska">
                      O šikování vojska
                    </Link>
                  </div>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <h2>O projektu</h2>
              <p>
                Zabýváme se rekonstrukcí (tzv. reenactment) dvora a
                družiny&nbsp;
                <Link href="/jost-z-einsiedle-a-na-tyrove">Jošta z Einsiedle</Link>, osobního
                sekretáře krále Jiřího z Poděbrad, datačně přibližně mezi lety
                1450 - 1470.
              </p>
              <p>
                Naším cílem je představit domácí laické veřejnosti různé aspekty
                života v Čechách 15. století a vyvracet různé mýty a pověry,
                které se bohužel ještě pořád prezentují na českých školách,
                hradech a zámcích, či jsou posilovány kulturními stereotypy. Na
                evropské úrovni pak chceme prezentovat svébytný
                kulturně-historický vývoj v Čechách po husitských válkách.
              </p>
              <p>
                Při rekonstrukcích vycházíme z dostupných písemných,
                ikonografických a archeologických pramenů zejména ze západních
                Čech, popřípadě západoevropského okruhu. Snažíme se o maximální
                historickou věrnost s ohledem na použité technologie a dostupné
                informace. Snažíme se maximálně držet dobově dosupných a
                používaných materiálů a plodin. Všechny naše oděvy a obuv jsou
                šity ručně, některé i z ručně tkaných látek. Zbrojní součásti a
                oděvní doplňky, které používáme jsou rovněž ručně vyráběnými
                replikami dochovaných originálů.
              </p>
              <p>
                Spolupracujeme i s dalšími spolky, které jsou datačně stejně
                zaměřené. Namátkou jsou to&nbsp;
                <a href="http://rattenschwanz.cz/" target="_blank">
                  Rattenschwanz
                </a>
                ,&nbsp;
                <a
                  href="https://www.facebook.com/PragaJagellonica1471/"
                  target="_blank"
                >
                  Praga Jagellonica 1471
                </a>
                ,&nbsp;<a href="http://slanskarota.cz/">Slánská rota</a> a
                další.
              </p>
            </Col>
          </Row>
        </div>
      )}
    </div>
  )
}
