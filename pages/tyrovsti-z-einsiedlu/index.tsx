import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { JindrichTyrovsky } from '../../components/Articles/cz/tyrovsti/JindrichTyrovsky'
import { JostTyrovsky } from '../../components/Articles/cz/tyrovsti/JostTyrovsky'
import { Sources } from '../../components/Quote/Sources'
import { Erb } from '../../components/Articles/cz/tyrovsti/Erb'
import { LANG_CS } from '../../shared/constants'
import { Rozrod } from '../../components/Articles/cz/tyrovsti/Rozrod'
import { SynoveJindrichovi } from '../../components/Articles/cz/tyrovsti/SynoveJindrichovi'
import { JanTyrovsky } from '../../components/Articles/cz/tyrovsti/JanTyrovsky'
import { JindrichJakubTyrovsky } from '../../components/Articles/cz/tyrovsti/JindrichJakubTyrovsky'
import { AdamJindrichTyrovsky } from '../../components/Articles/cz/tyrovsti/AdamJindrichTyrovsky'
import { VojtechIgnacTyrovsky } from '../../components/Articles/cz/tyrovsti/VojtechIgnacTyrovsky'
import { KonecRodu } from '../../components/Articles/cz/tyrovsti/KonecRodu'
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
          <SynoveJindrichovi />
          <JanTyrovsky />
          <JindrichJakubTyrovsky />
          <AdamJindrichTyrovsky />
          <VojtechIgnacTyrovsky />
          <KonecRodu />
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
    dest: {
      en: '/tyrovsky-of-einsiedl',
      de: '/tyrovsky-von-einsiedl',
      it: '/tyrovsky-di-einsiedl',
    },
  },
})

export default Page
