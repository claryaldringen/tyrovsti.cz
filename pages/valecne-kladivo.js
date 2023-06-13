import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { LANG_CS } from '../shared/constants'
import { HeadExtended } from '../components/HeadExtended'
import { ImageWithTitle } from '../components/ImageWithTitle/ImageWithTitle'

const Page = () => {
  return (
    <>
      <HeadExtended
        lang={LANG_CS}
        title="Válečné kladivo"
        image="145159907_2454233381550561_6076649610687634798_n.jpg"
      />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h1>Válečné kladivo</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Úvod</h4>
                <p>
                  S vývojem plátové zbroje a nástupem pěchoty coby hlavní bojové
                  síly v průběhu 14. a 15. století se také vyvíjel design
                  pěchotních dřevcových zbraní, v českém prostředí zvaných kúsy,
                  různě kombinující možnost bodných, sečných či drtivých úderů.
                </p>
                <p>
                  Válečná kladiva poloviny kolem poloviny 15. století jsou
                  relativně jednoduchého tvaru, s krátkým mohutným zobanem
                  (bec-de-corbin) a také krátkým mohutným hrotem ve srovnání s
                  pozdějšími kladivy, například lucernským. Rovněž středový nýt
                  ještě nebývá vytažen do hrotů.
                </p>
              </Col>
            </Row>
            <Row>
              <ImageWithTitle
                md={4}
                src="DP7063.jpeg"
                width={665}
                height={1130}
                title="Obr. 1: Obouruční válečné kladivo pro pěší boj, Německo, kolem roku 1440"
              />
              <ImageWithTitle
                md={4}
                src="DP-15647-026.jpg"
                width={1376}
                height={1920}
                title="Obr. 2: Jednoruční válečné kladivo, Francie, kolem roku 1450"
              />
              <ImageWithTitle
                md={4}
                src="1977-167-466-pma2017.jpg"
                width={3072}
                height={4096}
                title="Obr. 3: Lucernské kladivo, Svýcarsko, 1500"
              />
            </Row>
            <Row>
              <Col md={4}>
                Obrázek 1: Obouruční kladivo z muzea umění ve Worcestru,
                Německo, kolem roku 1440.
                <table>
                  <tbody>
                    <tr>
                      <th>Délka dochované části:&nbsp;</th>
                      <td>105,4 cm</td>
                    </tr>
                    <tr>
                      <th>Hmotnost:&nbsp;</th>
                      <td>2041,1 g</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <br />
              </Col>
              <Col md={4}>
                Obrázek 2: Jednoruční kladivo z Metropolitního muzea umění v New
                Yorku, Francie, kolem roku 1450.
                <table>
                  <tbody>
                    <tr>
                      <th>Délka:&nbsp;</th>
                      <td>65,5 cm</td>
                    </tr>
                    <tr>
                      <th>Hmotnost:&nbsp;</th>
                      <td>1474,2 g</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <br />
              </Col>
              <Col md={4}>
                Obrázek 3: Lucernské kladivo z Filadelfského muzea umění,
                Švýcarsko, 1500.
                <table>
                  <tbody>
                    <tr>
                      <th>Výška hlavice:&nbsp;</th>
                      <td>48,6 cm</td>
                    </tr>
                    <tr>
                      <th>Délka hlavice:&nbsp;</th>
                      <td>21,3 cm</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Rekonstrukce</h4>
                <p>
                  Pro rekonstrukci jsme vzhledem k jeho dataci vybrali kladivo z
                  Worcestru. Zajimavostí tohoto kladiva je, že jeho hlavice je k
                  řapu připevněna nikoli nýty, ale dvojcemi šroubů s hranatou
                  hlavou. Hmotnost repliky je 2847 g. Repliku zhotovil Vojtěch
                  Jelínek.
                </p>
              </Col>
              <Row>
                <ImageWithTitle
                  src="145352114_2454233218217244_1239154704725255175_n.jpg"
                  width={1885}
                  height={1414}
                  title=""
                />
                <ImageWithTitle
                  src="144900516_2454233258217240_4835566531118336875_n.jpg"
                  width={2016}
                  height={1512}
                  title=""
                />
                <ImageWithTitle
                  src="144989261_2454233191550580_7533405486375892515_n.jpg"
                  width={1724}
                  height={1293}
                  title=""
                />
              </Row>
              <Row>
                <ImageWithTitle
                  src="145095620_2454233278217238_3303663509323734164_n.jpg"
                  width={2016}
                  height={1512}
                  title=""
                />
                <ImageWithTitle
                  src="145159907_2454233381550561_6076649610687634798_n.jpg"
                  width={2016}
                  height={1512}
                  title=""
                />
                <ImageWithTitle
                  src="145234376_2454233334883899_8417551400168761453_n.jpg"
                  width={2016}
                  height={1512}
                  title=""
                />
              </Row>
              <Row>
                <ImageWithTitle
                  src="145239776_2454233311550568_8570324239103713777_n.jpg"
                  width={2016}
                  height={1512}
                  title=""
                />
                <ImageWithTitle
                  src="145323233_2454233174883915_8456973728614592166_n.jpg"
                  width={2016}
                  height={1512}
                  title=""
                />
                <ImageWithTitle
                  src="145347606_2454233238217242_4854487319947455893_n.jpg"
                  width={2016}
                  height={1512}
                  title=""
                />
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
