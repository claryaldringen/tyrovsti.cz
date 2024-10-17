import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { PokryvkyHlavy } from '../../components/Articles/cz/odev/PokryvkyHlavy'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      lang={LANG_CS}
      title="Mužský oděv - Pokrývky hlavy"
      image="hans-harsdorffer.jpg"
    />
    <Container>
      <Row>
        <Col className="text">
          <PokryvkyHlavy />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
