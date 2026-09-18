import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { KonecRodu } from '../../components/Articles/cz/tyrovsti/KonecRodu'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Poslední Týřovští"
      image="erb.png"
      description="Poslední generace rodu Týřovských z Einsiedlu po prodeji Chříče – Jan Vilém, Michal Antonín, František Pavel a Jan Michal, poslední po meči (1701–1771)"
    />
    <Container>
      <Row>
        <Col className="text">
          <KonecRodu />
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
      en: '/tyrovsky-of-einsiedl/the-last-tyrovsky',
      de: '/tyrovsky-von-einsiedl/die-letzten-tyrovsky',
      it: '/tyrovsky-di-einsiedl/gli-ultimi-tyrovsky',
    },
  },
})

export default Page
