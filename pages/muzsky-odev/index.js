import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import { SpodniOdev } from '../../components/Articles/cz/odev/SpodniOdev'
import { Obuv } from '../../components/Articles/cz/odev/Obuv'
import { PokryvkyHlavy } from '../../components/Articles/cz/odev/PokryvkyHlavy'
import { Plast } from '../../components/Articles/cz/odev/Plast'
import { Kabat } from '../../components/Articles/cz/odev/Kabat'
import { Sukne } from '../../components/Articles/cz/odev/Sukne'
import { Sources } from '../../components/Quote/Sources'

const Page = () => {
  return (
    <>
      <HeadExtended lang={LANG_CS} title="Mužský oděv" />
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
            <Sources />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
