import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import { Zbroj } from '../../components/Articles/cz/zbroj/uvod'

const Page = () => {
  return (
    <>
      <HeadExtended lang={LANG_CS} title="Výzbroj a vástroj" />
      <Container>
        <Row>
          <Col className="text">
            <h1>Výzbroj a výstroj</h1>
            <Zbroj />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
