import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import { Sources } from '../../components/Quote/Sources'
import { Tartsche } from '../../components/Articles/de/ruestung/Tartsche'
import { RuestungEinfuehrung } from '../../components/Articles/de/ruestung/RuestungEinfuehrung'
import { Payment } from '../../components/Payment'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Waffen und Rüstung"
        description="Waffen und Rüstung – Überblick über Waffen und Rüstungen im Böhmen des 15. Jahrhunderts"
      />
      <Container>
        <Row>
          <Col className="text">
            <h1>Waffen und Rüstung</h1>
            <Tartsche />
            <RuestungEinfuehrung />
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
    lang: LANG_DE,
    dest: { cs: '/vyzbroj-a-vystroj', en: '/arms-and-armour' },
  },
})

export default Page
