import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { Sources } from '../../components/Quote/Sources'
import { LANG_IT } from '../../shared/constants'
import { JobstDiEinsiedl } from '../../components/Articles/it/casaTyrovsky/JobstDiEinsiedl'
import { EnricoDiEinsiedl } from '../../components/Articles/it/casaTyrovsky/EnricoDiEinsiedl'
import { Stemma } from '../../components/Articles/it/casaTyrovsky/Stemma'
import { AlberoGenealogico } from '../../components/Articles/it/casaTyrovsky/AlberoGenealogico'
import { Payment } from '../../components/Payment'
import { IntroduzioneTyrovsky } from '../../components/Articles/it/casaTyrovsky/IntroduzioneTyrovsky'

const Page = () => (
  <>
    <HeadExtended
      title="Tyrovsky di Einsiedl"
      image="erb.png"
      description="Casata dei Tyrovsky di Einsiedl - una famiglia nobile legata al castello di Tyrov nella Boemia centrale"
    />
    <Container>
      <Row>
        <Col className="text">
          <IntroduzioneTyrovsky />
          <JobstDiEinsiedl />
          <EnricoDiEinsiedl />
          <Stemma />
          <AlberoGenealogico />
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
      cs: '/tyrovsti-z-einsiedlu',
      en: '/tyrovsky-of-einsiedl',
      de: '/tyrovsky-von-einsiedl',
    },
  },
})

export default Page
