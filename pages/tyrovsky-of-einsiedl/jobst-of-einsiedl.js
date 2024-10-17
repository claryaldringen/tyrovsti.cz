import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { JobstOfEinsiedl } from '../../components/Articles/en/houseOfTeyrzow/JobstOfEinsiedl'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended title="Jobst of Einsiedl" image="erb.png" />
    <Container>
      <Row>
        <Col className="text">
          <JobstOfEinsiedl />
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
    dest: '/tyrovsti-z-einsiedlu/jost-z-einsiedlu',
  },
})

export default Page
