import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { AdamHenryOfEinsiedl } from '../../components/Articles/en/houseOfTeyrzow/AdamHenryOfEinsiedl'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Adam Jindřich (Adam Henry) Týřovský of Einsiedl"
      image="erb.png"
      description="Adam Jindřich Týřovský of Einsiedl – the family during the Thirty Years' War, died in 1652"
    />
    <Container>
      <Row>
        <Col className="text">
          <AdamHenryOfEinsiedl />
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
      cs: '/tyrovsti-z-einsiedlu/adam-jindrich-tyrovsky-z-einsiedlu',
      de: '/tyrovsky-von-einsiedl/adam-heinrich-von-einsiedl',
      it: '/tyrovsky-di-einsiedl/adamo-enrico-di-einsiedl',
    },
  },
})

export default Page
