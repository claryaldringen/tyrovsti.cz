import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'

import { Payment } from '../../components/Payment'
import { BavorskaValka } from '../../components/Articles/cz/akce/BavorskaValka'

const Page = () => (
  <>
    <HeadExtended
      lang={LANG_CS}
      title="Waldshuterkrieg"
      image="cesi-waldshuterkrieg.jpg"
    />
    <Container>
      <Row>
        <Col className="text">
          <BavorskaValka />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
