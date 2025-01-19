import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { HansHarsdorfer } from '../../components/Articles/cz/HansHarsdorfer'

const Page = () => (
  <>
    <HeadExtended
      lang={LANG_CS}
      title="Hans Harsdorfer"
      image="hans-harsdorffer.jpg"
    />
    <Container>
      <Row>
        <Col className="text">
          <HansHarsdorfer />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
