import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Erb } from '../../components/Articles/cz/tyrovsti/Erb'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      lang={LANG_CS}
      title="Erb Týřovských z Einsiedlu"
      image="erb.png"
    />
    <Container>
      <Row>
        <Col className="text">
          <Erb />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
