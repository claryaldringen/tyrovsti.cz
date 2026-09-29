import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BlackArmy } from '../../components/Articles/en/campaigns/BlackArmy'
import { LANG_EN } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="The Black Army of Matthias Corvinus"
      description="The Black Army (Fekete sereg) – the standing mercenary army of Matthias Corvinus with a strong Czech contingent"
    />
    <Container>
      <Row>
        <Col className="text">
          <BlackArmy />
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
      cs: '/prehled-vojenskych-akci/cerne-vojsko',
      de: '/feldzuege',
      it: '/campagne-militari',
    },
  },
})

export default Page
