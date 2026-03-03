import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Stammbaum } from '../../components/Articles/de/hausTyrovsky/Stammbaum'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Stammbaum"
      image="erb.png"
      description="Stammbaum der Familie Tyrovsky von Einsiedl"
    />
    <Container>
      <Row>
        <Col className="text">
          <Stammbaum />
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
      cs: '/tyrovsti-z-einsiedlu/rozrod',
      en: '/tyrovsky-of-einsiedl/family-tree',
    },
  },
})

export default Page
