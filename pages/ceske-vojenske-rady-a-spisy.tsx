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
import { Sources } from '../components/Quote/Sources'
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
            <Sources />
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
      it: '/ordinanze-militari-ceche',
    },
  },
})

export default Page
