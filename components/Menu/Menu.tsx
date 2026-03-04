import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Menu.module.scss'
import { menuCs, menuDe, menuEn } from '../../shared/sitemap'
import { LANG_DE, LANG_EN } from '../../shared/constants'
import { useLanguage } from '../Language'
import { AboutProject } from '../Articles/en/AboutProject'
import { OProjektu } from '../Articles/cz/OProjektu'
import { UeberDasProjekt } from '../Articles/de/UeberDasProjekt'
import classNames from 'classnames'
import { MenuOverlay } from './MenuOverlay'
import { LanguageDest } from '../../types'

const LangToggler = ({ dest }: { dest?: LanguageDest }) => {
  return (
    <div className={styles.langToggler}>
      {dest?.cs && (
        <Link href={dest.cs}>
          <Image
            src="/images/icons8-czech-republic-48.png"
            width={32}
            height={32}
            alt="Czech language"
          />
        </Link>
      )}
      {dest?.en && (
        <Link href={dest.en}>
          <Image
            src="/images/icons8-great-britain-48.png"
            width={32}
            height={32}
            alt="English language"
          />
        </Link>
      )}
      {dest?.de && (
        <Link href={dest.de}>
          <Image
            src="/images/icons8-germany-48.png"
            width={32}
            height={32}
            alt="German language"
          />
        </Link>
      )}
    </div>
  )
}

export const Menu = () => {
  const { lang, dest } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const onHamburgerKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') setIsOpen(false)
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsOpen(true)
    }
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
              {lang === LANG_DE ? (
                <span className="d-md-none xiberonne">
                  Jobst&nbsp;von&nbsp;Einsidl,&nbsp;Ritter&nbsp;von&nbsp;Tyrzow
                </span>
              ) : lang === LANG_EN ? (
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
            {lang === LANG_DE ? (
              <Link
                href="/de"
                className={classNames(styles.brand, 'xiberonne')}
              >
                Jobst&nbsp;von&nbsp;Einsidl,&nbsp;Ritter&nbsp;von&nbsp;Tyrzow
              </Link>
            ) : lang === LANG_EN ? (
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
          <Col xs={3} md={2} className="text-end">
            <LangToggler dest={dest} />
          </Col>
        </Row>
      </div>
      <div className={styles.menuShadow} aria-hidden="true" />
      <MenuOverlay open={isOpen} onClose={close}>
        <Row className={styles.menuContent}>
          <Col md={4} className={styles.leftCol}>
            <ul className={styles.menuList}>
              {(lang === LANG_DE
                ? menuDe
                : lang === LANG_EN
                  ? menuEn
                  : menuCs
              ).map(({ href, title }) => (
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
            {lang === LANG_DE ? (
              <UeberDasProjekt />
            ) : lang === LANG_EN ? (
              <AboutProject />
            ) : (
              <OProjektu />
            )}
          </Col>
        </Row>
      </MenuOverlay>
    </>
  )
}
