import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { KtozJsuBoziBojovnici } from '../components/Articles/cz/rady/KtozJsuBoziBojovnici'
import { NauceniKuKraliVladislavovi } from '../components/Articles/cz/rady/NauceniKuKraliVladislavovi'
import { SnemovniZapisOHotovostiVerejne } from '../components/Articles/cz/rady/SnemovniZapisOHotovostiVerejne'
import { HodetinuvRad } from '../components/Articles/cz/rady/HodetinuvRad'
import { ZizkuvVojenskyRad } from '../components/Articles/cz/rady/ZizkuvVojenskyRad'
import { ZizkovoTazeniDoUher } from '../components/Articles/cz/rady/ZizkovoTazeniDoUher'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_CS } from '../shared/constants'
import { Payment } from '../components/Payment'
import { CeskeVojenskeRadyUvod } from '../components/Articles/cz/rady/CeskeVojenskeRadyUvod'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="České vojenské řády a spisy"
        image="battle_of_orsha.jpg"
        description="České vojenské řády a spisy – husitské a pohusitské vojenské předpisy 15. století"
      />
      <Container>
        <Row>
          <Col className="text">
            <CeskeVojenskeRadyUvod />
            <KtozJsuBoziBojovnici />
            <ZizkuvVojenskyRad />
            <HodetinuvRad />
            <SnemovniZapisOHotovostiVerejne />
            <ZizkovoTazeniDoUher />
            <NauceniKuKraliVladislavovi />
            <Row>
              <Col>
                <h4>Použitá literatura:</h4>
                <ul>
                  <li>
                    Hugo Toman:{' '}
                    <i>Husitské válečnictví za doby Žižkovy a Prokopovy</i>,
                    Praha 1898
                  </li>
                  <li>
                    Petr Čornej:{' '}
                    <i>Jan Žižka: Život a doba husitského válečníka</i>, Praha
                    2019
                  </li>
                  <li>
                    Vavřinec z Březové: <i>Husitská kronika</i>, Praha 1979
                  </li>
                  <li>
                    Karel Jaromír Erben: <i>Wýbor z literatury české</i>, Praha
                    1868
                  </li>
                </ul>
              </Col>
            </Row>
            <Payment />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: {
      en: '/czech-military-orders-and-writings',
      de: '/boehmische-militaerordnungen',
    },
  },
})

export default Page
