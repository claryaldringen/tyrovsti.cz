import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { SistemaFeudale } from '../../components/Articles/it/feudo/SistemaFeudale'
import { SistemaFeudaleDiKrivoklat } from '../../components/Articles/it/feudo/SistemaFeudaleDiKrivoklat'
import { LANG_IT } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Il sistema feudale"
      image="Krivoklat_19_stol.jpg"
      description="Il sistema feudale in Boemia - un sistema medievale di obblighi di servizio"
    />
    <Container>
      <Row>
        <Col className="text">
          <SistemaFeudale />
          <SistemaFeudaleDiKrivoklat />
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
      cs: '/historicke-pozadi/manska-soustava',
      en: '/historical-background/feudal-system',
      de: '/historischer-hintergrund/lehnswesen',
    },
  },
})

export default Page
