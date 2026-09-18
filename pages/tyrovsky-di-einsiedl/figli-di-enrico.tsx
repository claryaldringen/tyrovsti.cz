import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { FigliDiEnrico } from '../../components/Articles/it/casaTyrovsky/FigliDiEnrico'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="I figli di Enrico di Einsiedl"
      image="erb.png"
      description="I figli di Jindřich Týřovský di Einsiedl e la divisione della famiglia, 1556–1578"
    />
    <Container>
      <Row>
        <Col className="text">
          <FigliDiEnrico />
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
      cs: '/tyrovsti-z-einsiedlu/synove-jindrichovi',
      en: '/tyrovsky-of-einsiedl/sons-of-henry',
      de: '/tyrovsky-von-einsiedl/soehne-heinrichs',
    },
  },
})

export default Page
