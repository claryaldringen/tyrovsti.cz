import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { HeinrichVonEinsiedl } from '../../components/Articles/de/hausTyrovsky/HeinrichVonEinsiedl'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Heinrich von Einsiedl"
      image="erb.png"
      description="Heinrich Tyrovsky von Einsiedl – Biografie eines böhmischen Ritters im 15. Jahrhundert"
    />
    <Container>
      <Row>
        <Col className="text">
          <HeinrichVonEinsiedl />
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
      cs: '/tyrovsti-z-einsiedlu/jindrich-tyrovsky-z-einsiedlu',
      en: '/tyrovsky-of-einsiedl/henry-of-einsiedl',
    },
  },
})

export default Page
