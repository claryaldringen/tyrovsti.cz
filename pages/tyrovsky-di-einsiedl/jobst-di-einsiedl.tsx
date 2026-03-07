import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { JobstDiEinsiedl } from '../../components/Articles/it/casaTyrovsky/JobstDiEinsiedl'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Jobst di Einsiedl"
      image="erb.png"
      description="Jobst von Einsiedl di Tyrov - biografia di un vassallo e guerriero boemo del XV secolo"
    />
    <Container>
      <Row>
        <Col className="text">
          <JobstDiEinsiedl />
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
      cs: '/tyrovsti-z-einsiedlu/jost-z-einsiedlu',
      en: '/tyrovsky-of-einsiedl/jobst-of-einsiedl',
      de: '/tyrovsky-von-einsiedl/jobst-von-einsiedl',
    },
  },
})

export default Page
