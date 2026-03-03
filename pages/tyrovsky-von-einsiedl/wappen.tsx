import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Wappen } from '../../components/Articles/de/hausTyrovsky/Wappen'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Wappen"
      image="erb.png"
      description="Das Wappen der Familie Tyrovsky von Einsiedl"
    />
    <Container>
      <Row>
        <Col className="text">
          <Wappen />
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
      cs: '/tyrovsti-z-einsiedlu/erb',
      en: '/tyrovsky-of-einsiedl/coat-of-arms',
    },
  },
})

export default Page
