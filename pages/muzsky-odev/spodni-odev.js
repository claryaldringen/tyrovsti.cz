import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { SpodniOdev } from '../../components/Articles/cz/odev/SpodniOdev'

const Page = () => (
  <>
    <HeadExtended
      lang={LANG_CS}
      title="Mužský oděv - Spodní odev"
      image="kosile_rajhrad.jpg"
    />
    <Container>
      <Row>
        <Col className="text">
          <SpodniOdev />
          <Sources />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
