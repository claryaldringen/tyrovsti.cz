import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'

import { Payment } from '../../components/Payment'
import { Waldshuterkrieg } from '../../components/Articles/cz/akce/Waldshuterkrieg'

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
          <Waldshuterkrieg />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
