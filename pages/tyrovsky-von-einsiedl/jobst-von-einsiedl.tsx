import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { JobstVonEinsiedl } from '../../components/Articles/de/hausTyrovsky/JobstVonEinsiedl'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Jobst von Einsiedl"
      image="erb.png"
      description="Jobst von Einsiedl auf Burg Tyrzow – Biografie eines böhmischen Vasallen und Kriegers im 15. Jahrhundert"
    />
    <Container>
      <Row>
        <Col className="text">
          <JobstVonEinsiedl />
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
      cs: '/tyrovsti-z-einsiedlu/jost-z-einsiedlu',
      en: '/tyrovsky-of-einsiedl/jobst-of-einsiedl',
    },
  },
})

export default Page
