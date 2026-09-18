import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { AdalbertoIgnazioDiEinsiedl } from '../../components/Articles/it/casaTyrovsky/AdalbertoIgnazioDiEinsiedl'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Vojtěch Ignác (Adalberto Ignazio) Týřovský di Einsiedl"
      image="erb.png"
      description="Vojtěch Ignác Týřovský di Einsiedl e la fine della famiglia a Chříč (1695–1701)"
    />
    <Container>
      <Row>
        <Col className="text">
          <AdalbertoIgnazioDiEinsiedl />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_IT,
    dest: {
      cs: '/tyrovsti-z-einsiedlu/vojtech-ignac-tyrovsky-z-einsiedlu',
      en: '/tyrovsky-of-einsiedl/adalbert-ignatius-of-einsiedl',
      de: '/tyrovsky-von-einsiedl/adalbert-ignaz-von-einsiedl',
    },
  },
})

export default Page
