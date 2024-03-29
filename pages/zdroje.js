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
                <h2>Původní</h2>
                <h3>České</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.trinity-art.cz/_pracovni/mestske_knihy_kodex_VJ.pdf"
                      target="_blank"
                    >
                      Památná kniha olomoucká
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://upload.wikimedia.org/wikipedia/commons/d/d9/Freska_v_chr%C3%A1mu_sv._Barbory%28Kutn%C3%A1_Hora%29_1.JPG"
                      target="_blank"
                    >
                      Freska z Mincířské kaple, chrám sv. Barbory, Kutná Hora
                    </a>
                  </li>
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
                <h3>Německé</h3>
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
            <Row>
              <Col>
                <h2>Nepůvodní</h2>
                <ul>
                  <li>
                    <a
                      href="https://is.muni.cz/th/lch5n/disertace_text.pdf"
                      target="_blank"
                    >
                      Kožedělná výroba v českých zemích ve středověku
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dspace.cuni.cz/bitstream/handle/20.500.11956/92944/DPTX_2014_2_11210_0_436502_0_166872.pdf?sequence=1&isAllowed=y"
                      target="_blank"
                    >
                      Proměna stylu odívání v průběhu husitských válek
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dspace.cuni.cz/bitstream/handle/20.500.11956/44950/BPTX_2011_1__0_286060_0_115140.pdf?sequence=1&isAllowed=y"
                      target="_blank"
                    >
                      Rakovnický oltář
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=10&bookid=821&page=438"
                      target="_blank"
                    >
                      Artikule cechů pražských
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://theses.cz/id/x0mt06/Bakalsk_prce_Severov.pdf"
                      target="_blank"
                    >
                      Fresková výmalba zámku v Žirovnici
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
