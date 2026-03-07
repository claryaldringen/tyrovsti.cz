import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Mantello } from '../../components/Articles/it/abbigliamento/Mantello'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Abbigliamento maschile - Mantello"
      image="agrafa.jpg"
      description="Mantello - indumento protettivo esterno nel tardo Medioevo"
    />
    <Container>
      <Row>
        <Col className="text">
          <Mantello />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_IT,
    dest: {
      cs: '/muzsky-odev/plast',
      en: '/mens-clothing/cloak',
      de: '/herrenkleidung/mantel',
    },
  },
})

export default Page
