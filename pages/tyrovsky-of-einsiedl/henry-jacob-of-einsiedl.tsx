import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HenryJacobOfEinsiedl } from '../../components/Articles/en/houseOfTeyrzow/HenryJacobOfEinsiedl'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Jindřich Jakub (Henry Jacob) Týřovský of Einsiedl"
      image="erb.png"
      description="Jindřich Jakub Týřovský of Einsiedl – captain of the Rakovník district, died in 1618"
    />
    <Container>
      <Row>
        <Col className="text">
          <HenryJacobOfEinsiedl />
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
      cs: '/tyrovsti-z-einsiedlu/jindrich-jakub-tyrovsky-z-einsiedlu',
      de: '/tyrovsky-von-einsiedl/heinrich-jakob-von-einsiedl',
      it: '/tyrovsky-di-einsiedl/enrico-giacomo-di-einsiedl',
    },
  },
})

export default Page
