import React from 'react'
import Head from 'next/head'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import styles from './cesti-zoldneri-v-risi.module.scss'

const TITLE = 'Čeští žoldnéři v Říši 1434–1526'
const DESCRIPTION =
  'Konferenční přednáška Martina Zadražila pro Harnischfechten Workshop Lipnice 2026 — vícejazyčný rozcestník'

const Page = () => {
  return (
    <>
      <HeadExtended title={TITLE} description={DESCRIPTION} />
      <Head>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <Container>
        <Row>
          <Col>
            <div className={styles.wrapper}>
              <div className={styles.subtitle}>
                Harnischfechten Workshop · Lipnice 2026
              </div>
              <h1 className={styles.heading}>Čeští žoldnéři v Říši</h1>
              <div className={styles.subtitle}>1434 — 1526</div>
              <div className={styles.author}>
                Martin Zadražil · <em>tyrovsti.cz</em>
              </div>

              <div className={styles.cards}>
                <a
                  href="/prezentace/cesti-zoldneri-v-risi/cs"
                  className={`${styles.card} ${styles.cardActive}`}
                  hrefLang="cs"
                >
                  <div className={styles.flag} aria-hidden="true">
                    🇨🇿
                  </div>
                  <div className={styles.lang}>Česky</div>
                  <div className={styles.langStatus}>Otevřít</div>
                </a>

                <a
                  href="/prezentace/cesti-zoldneri-v-risi/en"
                  className={`${styles.card} ${styles.cardActive}`}
                  hrefLang="en"
                >
                  <div className={styles.flag} aria-hidden="true">
                    🇬🇧
                  </div>
                  <div className={styles.lang}>English</div>
                  <div className={styles.langStatus}>Open</div>
                </a>

                <a
                  href="/prezentace/cesti-zoldneri-v-risi/de"
                  className={`${styles.card} ${styles.cardActive}`}
                  hrefLang="de"
                >
                  <div className={styles.flag} aria-hidden="true">
                    🇩🇪
                  </div>
                  <div className={styles.lang}>Deutsch</div>
                  <div className={styles.langStatus}>Öffnen</div>
                </a>

                <a
                  href="/prezentace/cesti-zoldneri-v-risi/it"
                  className={`${styles.card} ${styles.cardActive}`}
                  hrefLang="it"
                >
                  <div className={styles.flag} aria-hidden="true">
                    🇮🇹
                  </div>
                  <div className={styles.lang}>Italiano</div>
                  <div className={styles.langStatus}>Apri</div>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: {},
  },
})
