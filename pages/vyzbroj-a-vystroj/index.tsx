import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import { Zbroj } from '../../components/Articles/cz/zbroj/uvod'
import { Sources } from '../../components/Quote/Sources'
import { Tarce } from '../../components/Articles/cz/zbroj/Tarce'
import { Payment } from '../../components/Payment'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Výzbroj a výstroj"
        description="Výzbroj a výstroj – přehled zbraní a zbroje v 15. století v Čechách"
      />
      <Container>
        <Row>
          <Col className="text">
            <h1>Výzbroj a výstroj</h1>
            <Tarce />
            <Zbroj />
            <Sources />
            <Payment />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: { en: '/arms-and-armour', de: '/waffen-und-ruestung' },
  },
})

export default Page
