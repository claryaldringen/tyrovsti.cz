import { Menu } from '../../components/Menu'
import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import { SpodniOdev } from '../../components/Articles/cz/odev/SpodniOdev'
import { Source, Sources } from '../../components/Sources'
import { Obuv } from '../../components/Articles/cz/odev/Obuv'
import { PokryvkyHlavy } from '../../components/Articles/cz/odev/PokryvkyHlavy'
import { Plast } from '../../components/Articles/cz/odev/Plast'
import { Kabat } from '../../components/Articles/cz/odev/Kabat'
import { Sukne } from '../../components/Articles/cz/odev/Sukne'

const Page = () => {
  return (
    <>
      <HeadExtended lang={LANG_CS} title="Mužský oděv" />
      <Menu />
      <Container>
        <Row>
          <Col className="text">
            <h1>Mužský oděv</h1>
            <SpodniOdev />
            <Row>
              <Col>
                <h3>Svrchní oděv</h3>
              </Col>
            </Row>
            <Kabat />
            <Sukne />
            <Plast />
            <Obuv />
            <PokryvkyHlavy />
            <Sources>
              <Source
                name="Proměna stylu odívání v průběhu husitských válek"
                author="Monika Feyfrlíková"
                city="Praha"
                year={2017}
              />
              <Source
                name="Stepping Through Time: Archaeological Footwear from Prehistoric Times until 1800"
                author="Olaf Goubitz"
                city="Zwolle"
                year={2007}
              />
              <Source
                name="Dějiny kroje v zemích českých od počátku století 15. až po dobu Bělohorské bitvy"
                author="Zikmund Winter"
                city="Praha"
                year={1893}
              />{' '}
              <Source
                name="Oděv v západních Čechách 15. až 17. století"
                author="Veronika Pilná"
                city="Plzeň"
                year={2018}
              />
              <Source
                name="Europa Militaria Special No 8 - Medieval Military Costume Recreated in Colour Photographs"
                author="Gerry Embleton"
                city="Ramsbury"
                year={2000}
              />
            </Sources>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
