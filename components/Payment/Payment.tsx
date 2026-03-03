import React from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { Col, Row } from 'reactstrap'
import { useLanguage } from '../Language'
import { LANG_CS } from '../../shared/constants'
import styles from './Payment.module.scss'

export const Payment = () => {
  const iban = 'CZ2220100000002700111675'
  const bic = 'FIOBCZPPXXX'

  const paymentString = `SPD*1.0*ACC:${iban}+${bic}`

  const { lang } = useLanguage()

  return (
    <Row className={styles.main}>
      <Col md={8}>
        {lang === LANG_CS ? (
          <>
            <p>
              Pokud se vám tento článek líbil, zvažte prosím drobný finanční
              příspěvek. Psaní článků je časově značně náročné a děláme je ve
              svém volném čase.
            </p>
            <p>
              Číslo účtu: <b>2302111610/2010</b>
            </p>
          </>
        ) : (
          <>
            <p>
              If you enjoyed this article, please consider making a small
              financial contribution. Writing articles is very time consuming
              and we do it in our free time.
            </p>
            <p>
              IBAN: <b>CZ46 2010 0000 0023 0211 1610</b>
            </p>
            <p>
              BIC/SWIFT: <b>FIOBCZPPXXX</b>
            </p>
          </>
        )}
      </Col>
      <Col md={4}>
        <QRCodeSVG
          value={paymentString}
          size={128}
          level={'H'}
          marginSize={1}
        />
      </Col>
    </Row>
  )
}
