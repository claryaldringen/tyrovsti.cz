import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { JindrichTyrovsky } from '../../components/Articles/cz/tyrovsti/JindrichTyrovsky'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Jindřich Týřovský z Einsiedlu"
      image="erb.png"
      description="Jindřich Týřovský z Einsiedlu – životopis a působení v 15. století"
    />
    <Container>
      <Row>
        <Col className="text">
          <JindrichTyrovsky />
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
      en: '/tyrovsky-of-einsiedl/henry-of-einsiedl',
      de: '/tyrovsky-von-einsiedl/heinrich-von-einsiedl',
    },
  },
})

export default Page
