import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { JanTyrovsky } from '../../components/Articles/cz/tyrovsti/JanTyrovsky'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Jan Týřovský z Einsiedlu"
      image="erb.png"
      description="Jan Týřovský z Einsiedlu – pán na Chříči a Kožlanech, zemřel roku 1609"
    />
    <Container>
      <Row>
        <Col className="text">
          <JanTyrovsky />
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
      en: '/tyrovsky-of-einsiedl/john-of-einsiedl',
      de: '/tyrovsky-von-einsiedl/johann-von-einsiedl',
      it: '/tyrovsky-di-einsiedl/giovanni-di-einsiedl',
    },
  },
})

export default Page
