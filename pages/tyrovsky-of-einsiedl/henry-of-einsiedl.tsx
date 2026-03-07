import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HenryOfEinsiedl } from '../../components/Articles/en/houseOfTeyrzow/HenryOfEinsiedl'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Týřovský of Einsiedl - Jindřich (Henry)"
      image="nahrobek.jpg"
      description="Jindřich (Henry) Týřovský of Einsiedl – biography and activities in the 15th–16th century"
    />
    <Container>
      <Row>
        <Col className="text">
          <HenryOfEinsiedl />
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
      cs: '/tyrovsti-z-einsiedlu/jindrich-tyrovsky-z-einsiedlu',
      de: '/tyrovsky-von-einsiedl/heinrich-von-einsiedl',
      it: '/tyrovsky-di-einsiedl/enrico-di-einsiedl',
    },
  },
})

export default Page
