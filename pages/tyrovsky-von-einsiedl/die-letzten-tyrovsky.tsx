import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { DieLetztenTyrovsky } from '../../components/Articles/de/hausTyrovsky/DieLetztenTyrovsky'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Die letzten Týřovský"
      image="erb.png"
      description="Die letzte Generation des Geschlechts Týřovský von Einsiedl nach dem Verkauf von Chříč – Jan Vilém, Michal Antonín, František Pavel und Jan Michal, der Letzte im Mannesstamm (1701–1771)"
    />
    <Container>
      <Row>
        <Col className="text">
          <DieLetztenTyrovsky />
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
      cs: '/tyrovsti-z-einsiedlu/posledni-tyrovsti',
      en: '/tyrovsky-of-einsiedl/the-last-tyrovsky',
      it: '/tyrovsky-di-einsiedl/gli-ultimi-tyrovsky',
    },
  },
})

export default Page
