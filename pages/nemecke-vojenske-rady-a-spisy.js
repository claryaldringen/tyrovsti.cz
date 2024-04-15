import React from 'react'
import { Menu } from '../components/Menu'
import { Col, Container, Row } from 'reactstrap'
import { UsneseniNorimberske } from '../components/Articles/cz/rady/UsneseniNorimberske'
import { RadVozovyRytiruNemeckych } from '../components/Articles/cz/rady/RadVozovyRytiruNemeckych'
import { VozovyRadFrankfurtsky } from '../components/Articles/cz/rady/VozovyRadFrankfurtsky'
import { NorimberskyRadVozovy } from '../components/Articles/cz/rady/NorimberskyRadVozovy'
import { InstrukceMarkrabiAlbrechtaOHajeniVozovehoSiku } from '../components/Articles/cz/rady/InstrukceMarkrabiAlbrechtaOHajeniVozovehoSiku'
import { InstrukceMarkrabiAlbrechtaOSikovaniVozu } from '../components/Articles/cz/rady/InstrukceMarkrabiAlbrechtaOSikovaniVozu'
import { RadMarkrabiAlbrechta } from '../components/Articles/cz/rady/RadMarkrabiAlbrechta'
import { FilipaSeldeneckaRadVozovy } from '../components/Articles/cz/rady/FilipaSeldeneckaRadVozovy'
import { HeadExtended } from '../components/HeadExtended'
import { ImageWithTitle } from '../components/ImageWithTitle/ImageWithTitle'

const Page = () => {
  return (
    <>
      <HeadExtended title="Německé vojenské řády a spisy" image="husite.jpg" />
      <Menu />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h2>Německé vojenské řády a spisy</h2>
              </Col>
            </Row>
            <Row>
              <ImageWithTitle src="husite.jpg" width={1994} height={1458} />
            </Row>
            <UsneseniNorimberske />
            <RadVozovyRytiruNemeckych />
            <VozovyRadFrankfurtsky />
            <NorimberskyRadVozovy />
            <InstrukceMarkrabiAlbrechtaOHajeniVozovehoSiku />
            <InstrukceMarkrabiAlbrechtaOSikovaniVozu />
            <RadMarkrabiAlbrechta />
            <FilipaSeldeneckaRadVozovy />
            <Row>
              <Col>
                <h3>Použitá literatura:</h3>
                <ul>
                  <li>
                    Hugo Toman:{' '}
                    <i>Husitské válečnictví za doby Žižkovy a Prokopovy</i>,
                    Praha 1898
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
