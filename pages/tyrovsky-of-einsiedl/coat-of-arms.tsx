import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { CoatOfArms } from '../../components/Articles/en/houseOfTeyrzow/CoatOfArms'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Týřovský of Einsiedl - Coat of Arms"
      image="erb-cranach.jpg"
      description="Coat of arms of the Týřovský of Einsiedl family – heraldic analysis"
    />
    <Container>
      <Row>
        <Col className="text">
          <CoatOfArms />
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
    dest: '/tyrovsti-z-einsiedlu/erb',
  },
})

export default Page
