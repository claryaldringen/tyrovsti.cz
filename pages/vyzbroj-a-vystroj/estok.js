import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Estok } from '../../components/Articles/cz/zbroj/Estok'

const Page = () => (
  <>
    <HeadExtended title="Výzbroj a výstroj - Estok" image="estoc0.jpg" />
    <Container>
      <Row>
        <Col className="text">
          <Estok />
          <Sources />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
