import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { AdamJindrichTyrovsky } from '../../components/Articles/cz/tyrovsti/AdamJindrichTyrovsky'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Adam Jindřich Týřovský z Einsiedlu"
      image="erb.png"
      description="Adam Jindřich Týřovský z Einsiedlu – osudy rodu za třicetileté války, zemřel roku 1652"
    />
    <Container>
      <Row>
        <Col className="text">
          <AdamJindrichTyrovsky />
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
      en: '/tyrovsky-of-einsiedl/adam-henry-of-einsiedl',
      de: '/tyrovsky-von-einsiedl/adam-heinrich-von-einsiedl',
      it: '/tyrovsky-di-einsiedl/adamo-enrico-di-einsiedl',
    },
  },
})

export default Page
