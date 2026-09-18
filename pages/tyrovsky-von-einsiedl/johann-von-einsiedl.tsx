import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { JohannVonEinsiedl } from '../../components/Articles/de/hausTyrovsky/JohannVonEinsiedl'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Jan (Johann) Týřovský von Einsiedl"
      image="erb.png"
      description="Jan Týřovský von Einsiedl – Herr auf Chříč und Kožlany, gestorben 1609"
    />
    <Container>
      <Row>
        <Col className="text">
          <JohannVonEinsiedl />
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
      cs: '/tyrovsti-z-einsiedlu/jan-tyrovsky-z-einsiedlu',
      en: '/tyrovsky-of-einsiedl/john-of-einsiedl',
      it: '/tyrovsky-di-einsiedl/giovanni-di-einsiedl',
    },
  },
})

export default Page
