import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Calzature } from '../../components/Articles/it/abbigliamento/Calzature'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Abbigliamento maschile - Calzature"
      image="bota7.jpg"
      description="Calzature nel XV secolo - tipi e costruzione delle scarpe medievali in Boemia"
    />
    <Container>
      <Row>
        <Col className="text">
          <Calzature />
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
      cs: '/muzsky-odev/obuv',
      en: '/mens-clothing/footwear',
      de: '/herrenkleidung/schuhwerk',
    },
  },
})

export default Page
