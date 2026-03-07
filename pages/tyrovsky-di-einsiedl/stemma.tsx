import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Stemma } from '../../components/Articles/it/casaTyrovsky/Stemma'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Tyrovsky di Einsiedl - Stemma"
      image="erb-cranach.jpg"
      description="Stemma della famiglia Tyrovsky di Einsiedl - analisi araldica"
    />
    <Container>
      <Row>
        <Col className="text">
          <Stemma />
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
      cs: '/tyrovsti-z-einsiedlu/erb',
      en: '/tyrovsky-of-einsiedl/coat-of-arms',
      de: '/tyrovsky-von-einsiedl/wappen',
    },
  },
})

export default Page
