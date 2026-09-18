import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { TheLastTyrovsky } from '../../components/Articles/en/houseOfTeyrzow/TheLastTyrovsky'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="The last Týřovský"
      image="erb.png"
      description="The last generation of the Týřovský of Einsiedl family after the sale of Chříč – Jan Vilém, Michal Antonín, František Pavel and Jan Michal, the last of the male line (1701–1771)"
    />
    <Container>
      <Row>
        <Col className="text">
          <TheLastTyrovsky />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: {
      cs: '/tyrovsti-z-einsiedlu/posledni-tyrovsti',
      de: '/tyrovsky-von-einsiedl/die-letzten-tyrovsky',
      it: '/tyrovsky-di-einsiedl/gli-ultimi-tyrovsky',
    },
  },
})

export default Page
