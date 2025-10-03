import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { ManskaSoustava } from '../../components/Articles/cz/manstvi/ManskaSoustava'
import { KrivoklatskaManskaSoustava } from '../../components/Articles/cz/manstvi/KrivoklatskaManskaSoustava'

const Page = () => (
  <>
    <HeadExtended
      lang={LANG_CS}
      title="Manská soustava"
      image="Krivoklat_19_stol.jpg"
    />
    <Container>
      <Row>
        <Col className="text">
          <ManskaSoustava />
          <KrivoklatskaManskaSoustava />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
