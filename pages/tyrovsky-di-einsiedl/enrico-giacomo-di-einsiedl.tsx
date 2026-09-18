import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { EnricoGiacomoDiEinsiedl } from '../../components/Articles/it/casaTyrovsky/EnricoGiacomoDiEinsiedl'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Jindřich Jakub (Enrico Giacomo) Týřovský di Einsiedl"
      image="erb.png"
      description="Jindřich Jakub Týřovský di Einsiedl – capitano del distretto di Rakovník, morto nel 1618"
    />
    <Container>
      <Row>
        <Col className="text">
          <EnricoGiacomoDiEinsiedl />
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
      cs: '/tyrovsti-z-einsiedlu/jindrich-jakub-tyrovsky-z-einsiedlu',
      en: '/tyrovsky-of-einsiedl/henry-jacob-of-einsiedl',
      de: '/tyrovsky-von-einsiedl/heinrich-jakob-von-einsiedl',
    },
  },
})

export default Page
