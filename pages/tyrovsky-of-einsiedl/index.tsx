import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { Sources } from '../../components/Quote/Sources'
import { LANG_EN } from '../../shared/constants'
import { JobstOfEinsiedl } from '../../components/Articles/en/houseOfTeyrzow/JobstOfEinsiedl'
import { HenryOfEinsiedl } from '../../components/Articles/en/houseOfTeyrzow/HenryOfEinsiedl'
import { CoatOfArms } from '../../components/Articles/en/houseOfTeyrzow/CoatOfArms'
import { FamilyTree } from '../../components/Articles/en/houseOfTeyrzow/FamilyTree'
import { Payment } from '../../components/Payment'
import { TyrovskyOfEinsiedlIntro } from '../../components/Articles/en/houseOfTeyrzow/TyrovskyOfEinsiedlIntro'

const Page = () => (
  <>
    <HeadExtended
      title="Týřovský of Einsiedl"
      image="erb.png"
      description="House of Týřovský of Einsiedl – a noble family connected to Týřov castle in central Bohemia"
    />
    <Container>
      <Row>
        <Col className="text">
          <TyrovskyOfEinsiedlIntro />
          <JobstOfEinsiedl />
          <HenryOfEinsiedl />
          <CoatOfArms />
          <FamilyTree />
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
      cs: '/tyrovsti-z-einsiedlu',
      de: '/tyrovsky-von-einsiedl',
      it: '/tyrovsky-di-einsiedl',
    },
  },
})

export default Page
