import { Sukne } from '../../components/Articles/cz/odev/Sukne'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Page = () => (
  <>
    <HeadExtended lang={LANG_CS} title="Mužský oděv - Sukně" />
    <Container>
      <Row>
        <Col className="text">
          <Sukne />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
