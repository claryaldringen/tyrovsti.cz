import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { PokryvkyHlavy } from '../../components/Articles/cz/odev/PokryvkyHlavy'
import { Payment } from '../../components/Payment'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Mužský oděv - Pokrývky hlavy"
      image="hans-harsdorffer.jpg"
      description="Pokrývky hlavy – čepice, klobouky a kapuce ve středověku"
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

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: {
      en: '/mens-clothing/headwear',
      de: '/herrenkleidung/kopfbedeckungen',
      it: '/abbigliamento-maschile/copricapo',
    },
  },
})

export default Page
