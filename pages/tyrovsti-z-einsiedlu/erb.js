import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Erb } from '../../components/Articles/cz/tyrovsti/Erb'

const Page = () => (
  <>
    <HeadExtended lang={LANG_CS} title="Erb Týřovských z Einsiedlu" />
    <Container>
      <Row>
        <Col className="text">
          <Erb />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
