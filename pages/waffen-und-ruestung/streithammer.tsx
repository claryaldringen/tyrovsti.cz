import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Streithammer } from '../../components/Articles/de/ruestung/Streithammer'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Streithammer"
      description="Streithammer – eine mittelalterliche Schlagwaffe"
    />
    <Container>
      <Row>
        <Col className="text">
          <Streithammer />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: {
      cs: '/vyzbroj-a-vystroj/valecne-kladivo',
      en: '/arms-and-armour/war-hammer',
    },
  },
})

export default Page
