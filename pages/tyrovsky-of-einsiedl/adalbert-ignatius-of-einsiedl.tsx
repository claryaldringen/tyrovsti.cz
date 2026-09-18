import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { AdalbertIgnatiusOfEinsiedl } from '../../components/Articles/en/houseOfTeyrzow/AdalbertIgnatiusOfEinsiedl'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Vojtěch Ignác (Adalbert Ignatius) Týřovský of Einsiedl"
      image="erb.png"
      description="Vojtěch Ignác Týřovský of Einsiedl and the end of the family at Chříč (1695–1701)"
    />
    <Container>
      <Row>
        <Col className="text">
          <AdalbertIgnatiusOfEinsiedl />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: {
      cs: '/tyrovsti-z-einsiedlu/vojtech-ignac-tyrovsky-z-einsiedlu',
      de: '/tyrovsky-von-einsiedl/adalbert-ignaz-von-einsiedl',
      it: '/tyrovsky-di-einsiedl/adalberto-ignazio-di-einsiedl',
    },
  },
})

export default Page
