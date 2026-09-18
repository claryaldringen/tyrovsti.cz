import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { GiovanniDiEinsiedl } from '../../components/Articles/it/casaTyrovsky/GiovanniDiEinsiedl'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Jan (Giovanni) Týřovský di Einsiedl"
      image="erb.png"
      description="Jan Týřovský di Einsiedl – signore di Chříč e Kožlany, morto nel 1609"
    />
    <Container>
      <Row>
        <Col className="text">
          <GiovanniDiEinsiedl />
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
      cs: '/tyrovsti-z-einsiedlu/jan-tyrovsky-z-einsiedlu',
      en: '/tyrovsky-of-einsiedl/john-of-einsiedl',
      de: '/tyrovsky-von-einsiedl/johann-von-einsiedl',
    },
  },
})

export default Page
