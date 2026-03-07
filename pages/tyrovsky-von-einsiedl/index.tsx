import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { Sources } from '../../components/Quote/Sources'
import { LANG_DE } from '../../shared/constants'
import { JobstVonEinsiedl } from '../../components/Articles/de/hausTyrovsky/JobstVonEinsiedl'
import { HeinrichVonEinsiedl } from '../../components/Articles/de/hausTyrovsky/HeinrichVonEinsiedl'
import { Wappen } from '../../components/Articles/de/hausTyrovsky/Wappen'
import { Stammbaum } from '../../components/Articles/de/hausTyrovsky/Stammbaum'
import { Payment } from '../../components/Payment'
import { TyrovskyVonEinsiedlEinfuehrung } from '../../components/Articles/de/hausTyrovsky/TyrovskyVonEinsiedlEinfuehrung'

const Page = () => (
  <>
    <HeadExtended
      title="Tyrovsky von Einsiedl"
      image="erb.png"
      description="Das Haus Tyrovsky von Einsiedl – eine Adelsfamilie verbunden mit der Burg Týřov in Mittelböhmen"
    />
    <Container>
      <Row>
        <Col className="text">
          <TyrovskyVonEinsiedlEinfuehrung />
          <JobstVonEinsiedl />
          <HeinrichVonEinsiedl />
          <Wappen />
          <Stammbaum />
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
      cs: '/tyrovsti-z-einsiedlu',
      en: '/tyrovsky-of-einsiedl',
      it: '/tyrovsky-di-einsiedl',
    },
  },
})

export default Page
