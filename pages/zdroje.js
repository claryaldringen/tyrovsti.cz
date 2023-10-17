import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { LANG_CS } from '../shared/constants'
import { HeadExtended } from '../components/HeadExtended'

const Page = () => {
  return (
    <>
      <HeadExtended lang={LANG_CS} title="Zdroje" />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h1>Zdroje</h1>
                <h2>České</h2>
                <ul>
                  <li>
                    <a
                      href="https://www.manuscriptorium.com/apps/index.php?direct=record&pid=AIPDIG-MJ____S_2746______1PETHXE-cs"
                      target="_blank"
                    >
                      Kutnohorská Bible
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.manuscriptorium.com/apps/index.php?direct=record&pid=AIPDIG-NMP___IV_B_24_____3TQMIOE-cs"
                      target="_blank"
                    >
                      Antithesis Christi et Antichristi (Jenský kodex)
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Německé</h2>
                <ul>
                  <li>
                    <a
                      href="https://www.manuscriptorium.com/apps/index.php?direct=record&pid=AIPDIG-NKCR__VII_A_18____4BZSZD5-cs"
                      target="_blank"
                    >
                      Chronicon Concilii Constantiensis (Malá Riechentalova
                      kronika)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.nuernberger-hausbuecher.de/index.php?do=query&mo=3&vo=317&rs=2"
                      target="_blank"
                    >
                      Die Hausbücher der Nürnberger Zwölfbrüderstiftungen
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
