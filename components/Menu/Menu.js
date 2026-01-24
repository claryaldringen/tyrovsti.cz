import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Menu.module.scss'
import { menuCs, menuEn } from '../../shared/sitemap'
import { LANG_CS, LANG_EN } from '../../shared/constants'
import { useLanguage } from '../Language'
import { useRouter } from 'next/router'
import { AboutProject } from '../Articles/en/AboutProject'
import { OProjektu } from '../Articles/cz/OProjektu'
import classNames from 'classnames'
import { MenuOverlay } from './MenuOverlay'

const LangToggler = ({ lang, destination }) => {
  const router = useRouter()

  return (
    <div className={styles.langToggler}>
      <Link href={lang === LANG_CS ? router.asPath : destination}>
        <Image
          src="/images/icons8-czech-republic-48.png"
          width={32}
          height={32}
          alt="Czech language"
        />
      </Link>
      <Link href={lang === LANG_EN ? router.asPath : destination}>
        <Image
          src="/images/icons8-great-britain-48.png"
          width={32}
          height={32}
          alt="English language"
        />
      </Link>
    </div>
  )
}

export const Menu = () => {
  const { lang, dest } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const onHamburgerKeyDown = (event) => {
    if (event.key === 'Escape') setIsOpen(false)
    if (event.key === 'Enter') setIsOpen(true)
  }

  const close = () => setIsOpen(false)

  return (
    <>
      <div className={styles.menu}>
        <Row>
          <Col xs={9} md={2}>
            <div
              className={classNames('w-auto', styles.menuButton)}
              onClick={() => setIsOpen((v) => !v)}
              onKeyDown={onHamburgerKeyDown}
              role="button"
              tabIndex={0}
            >
              <div className={styles.hamburger}>
                <hr />
                <hr />
                <hr />
              </div>
              <span className="d-none d-md-inline-block">MENU</span>
              {lang === 'en' ? (
                <span className="d-md-none xiberonne">
                  Jobst&nbsp;von&nbsp;Einsiedl&nbsp;and&nbsp;Tyrzow
                </span>
              ) : (
                <span className="d-md-none xiberonne">
                  Jošt&nbsp;z&nbsp;Einsiedlu&nbsp;a&nbsp;na&nbsp;Týřově
                </span>
              )}
            </div>
          </Col>
          <Col md={8} className="d-none d-md-block text-center">
            {lang === 'en' ? (
              <Link
                href="/en"
                className={classNames(styles.brand, 'xiberonne')}
              >
                Jobst&nbsp;von&nbsp;Einsiedl,&nbsp;knight&nbsp;of&nbsp;Tyrzow
              </Link>
            ) : (
              <Link href="/" className={classNames(styles.brand, 'xiberonne')}>
                Jošt&nbsp;z&nbsp;Einsiedlu&nbsp;a&nbsp;na&nbsp;Týřově
              </Link>
            )}
          </Col>
          <Col xs={3} md={2} className="text-right">
            <LangToggler destination={dest} lang={lang} />
          </Col>
        </Row>
      </div>
      <div className={styles.menuShadow} aria-hidden="true" />
      <MenuOverlay open={isOpen} onClose={close}>
        <Row className={styles.menuContent}>
          <Col md={4} className={styles.leftCol}>
            <ul className={styles.menuList}>
              {(lang === LANG_EN ? menuEn : menuCs).map(({ href, title }) => (
                <li key={`menu_${href}`}>
                  <div>
                    <Link href={href} onClick={close}>
                      {title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </Col>

          <Col md={8}>
            {lang === LANG_EN ? <AboutProject /> : <OProjektu />}
          </Col>
        </Row>
      </MenuOverlay>
    </>
  )
}
