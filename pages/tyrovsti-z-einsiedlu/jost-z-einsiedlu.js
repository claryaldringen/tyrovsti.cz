import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { JostTyrovsky } from '../../components/Articles/cz/tyrovsti/JostTyrovsky'

const Page = () => (
  <>
    <HeadExtended lang={LANG_CS} title="Jošt z Einsiedlu" />
    <Container>
      <Row>
        <Col className="text">
          <JostTyrovsky />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
