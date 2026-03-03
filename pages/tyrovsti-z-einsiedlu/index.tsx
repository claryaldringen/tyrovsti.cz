import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { JindrichTyrovsky } from '../../components/Articles/cz/tyrovsti/JindrichTyrovsky'
import { JostTyrovsky } from '../../components/Articles/cz/tyrovsti/JostTyrovsky'
import { Sources } from '../../components/Quote/Sources'
import { Erb } from '../../components/Articles/cz/tyrovsti/Erb'
import { LANG_CS } from '../../shared/constants'
import { Rozrod } from '../../components/Articles/cz/tyrovsti/Rozrod'
import { Payment } from '../../components/Payment'
import { TyrovstiUvod } from '../../components/Articles/cz/tyrovsti/TyrovstiUvod'

const Page = () => (
  <>
    <HeadExtended
      title="Týřovští z Einsiedlu"
      image="erb.png"
      description="Rod Týřovských z Einsiedlu – šlechtický rod spjatý s hradem Týřov ve středních Čechách"
    />
    <Container>
      <Row>
        <Col className="text">
          <TyrovstiUvod />
          <Rozrod />
          <JostTyrovsky />
          <JindrichTyrovsky />
          <Erb />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: '/tyrovsky-of-einsiedl',
  },
})

export default Page
