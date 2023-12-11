import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Kabat } from '../../components/Articles/cz/odev/Kabat'

const Page = () => (
  <>
    <HeadExtended
      lang={LANG_CS}
      title="Mužský oděv - Kabát"
      image="kabat2.jpg"
    />
    <Container>
      <Row>
        <Col className="text">
          <Kabat />
          <Sources />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
