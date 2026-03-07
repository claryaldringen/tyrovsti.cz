import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { EnricoDiEinsiedl } from '../../components/Articles/it/casaTyrovsky/EnricoDiEinsiedl'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Tyrovsky di Einsiedl - Enrico (Jindřich)"
      image="nahrobek.jpg"
      description="Jindřich (Enrico) Tyrovsky di Einsiedl - biografia e attivita nel XV-XVI secolo"
    />
    <Container>
      <Row>
        <Col className="text">
          <EnricoDiEinsiedl />
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
      cs: '/tyrovsti-z-einsiedlu/jindrich-tyrovsky-z-einsiedlu',
      en: '/tyrovsky-of-einsiedl/henry-of-einsiedl',
      de: '/tyrovsky-von-einsiedl/heinrich-von-einsiedl',
    },
  },
})

export default Page
