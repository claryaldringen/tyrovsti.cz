import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { GliUltimiTyrovsky } from '../../components/Articles/it/casaTyrovsky/GliUltimiTyrovsky'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Gli ultimi Týřovský"
      image="erb.png"
      description="L'ultima generazione della famiglia Týřovský di Einsiedl dopo la vendita di Chříč – Jan Vilém, Michal Antonín, František Pavel e Jan Michal, l'ultimo della linea maschile (1701–1771)"
    />
    <Container>
      <Row>
        <Col className="text">
          <GliUltimiTyrovsky />
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
      cs: '/tyrovsti-z-einsiedlu/posledni-tyrovsti',
      en: '/tyrovsky-of-einsiedl/the-last-tyrovsky',
      de: '/tyrovsky-von-einsiedl/die-letzten-tyrovsky',
    },
  },
})

export default Page
