import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { AdamoEnricoDiEinsiedl } from '../../components/Articles/it/casaTyrovsky/AdamoEnricoDiEinsiedl'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Adam Jindřich (Adamo Enrico) Týřovský di Einsiedl"
      image="erb.png"
      description="Adam Jindřich Týřovský di Einsiedl – la famiglia durante la Guerra dei Trent'anni, morto nel 1652"
    />
    <Container>
      <Row>
        <Col className="text">
          <AdamoEnricoDiEinsiedl />
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
      cs: '/tyrovsti-z-einsiedlu/adam-jindrich-tyrovsky-z-einsiedlu',
      en: '/tyrovsky-of-einsiedl/adam-henry-of-einsiedl',
      de: '/tyrovsky-von-einsiedl/adam-heinrich-von-einsiedl',
    },
  },
})

export default Page
