import React from 'react'
import { Menu } from '../components/Menu'
import { Col, Container, Row } from 'reactstrap'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { UsneseniNorimberske } from '../components/Articles/cz/UsneseniNorimberske'
import { RadVozovyRytiruNemeckych } from '../components/Articles/cz/RadVozovyRytiruNemeckych'
import { VozovyRadFrankfurtsky } from '../components/Articles/cz/VozovyRadFrankfurtsky'
import { NorimberskyRadVozovy } from '../components/Articles/cz/NorimberskyRadVozovy'
import { InstrukceMarkrabiAlbrechtaOHajeniVozovehoSiku } from '../components/Articles/cz/InstrukceMarkrabiAlbrechtaOHajeniVozovehoSiku'
import { InstrukceMarkrabiAlbrechtaOSikovaniVozu } from '../components/Articles/cz/InstrukceMarkrabiAlbrechtaOSikovaniVozu'
import { RadMarkrabiAlbrechta } from '../components/Articles/cz/RadMarkrabiAlbrechta'
import { FilipaSeldeneckaRadVozovy } from '../components/Articles/cz/FilipaSeldeneckaRadVozovy'
import { HeadCs } from '../components/HeadCs'

const Page = () => {
  return (
    <>
      <HeadCs title="Německé vojenské řády a spisy" image="husite.jpg" />
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
              <Col>
                <p>&nbsp;</p>
                <Link href="/images/husite.jpg" target="_blank">
                  <Image src="/images/husite.jpg" width={1994} height={1458} />
                </Link>
                <p>&nbsp;</p>
              </Col>
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
