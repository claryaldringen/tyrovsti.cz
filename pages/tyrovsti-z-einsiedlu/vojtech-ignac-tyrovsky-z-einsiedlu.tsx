import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { VojtechIgnacTyrovsky } from '../../components/Articles/cz/tyrovsti/VojtechIgnacTyrovsky'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Vojtěch Ignác Týřovský z Einsiedlu"
      image="erb.png"
      description="Vojtěch Ignác Týřovský z Einsiedlu a konec rodu na Chříči (1695–1701)"
    />
    <Container>
      <Row>
        <Col className="text">
          <VojtechIgnacTyrovsky />
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
      en: '/tyrovsky-of-einsiedl/adalbert-ignatius-of-einsiedl',
      de: '/tyrovsky-von-einsiedl/adalbert-ignaz-von-einsiedl',
      it: '/tyrovsky-di-einsiedl/adalberto-ignazio-di-einsiedl',
    },
  },
})

export default Page
