import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { JobstOfEinsiedl } from '../../components/Articles/en/houseOfTeyrzow/JobstOfEinsiedl'

const Page = () => (
  <>
    <HeadExtended lang={LANG_EN} title="Jobst of Einsiedl" image="erb.png" />
    <Container>
      <Row>
        <Col className="text">
          <JobstOfEinsiedl />
          <Sources />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
