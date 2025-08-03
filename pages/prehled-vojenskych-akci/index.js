import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { Waldshuterkrieg } from '../../components/Articles/cz/akce/Waldshuterkrieg'
import { BavorskaValka } from '../../components/Articles/cz/akce/BavorskaValka'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Přehled vojenských akcí 1434 - 1525"
        image="orsha.jpg"
      />
      <Container>
        <Row>
          <Col className="text">
            <h1>Přehled vojenských akcí 1434 - 1525</h1>
            <BavorskaValka />
            <Waldshuterkrieg />
            <Sources />
            <Payment />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
