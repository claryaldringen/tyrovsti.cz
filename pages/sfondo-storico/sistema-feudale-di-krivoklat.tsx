import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { SistemaFeudaleDiKrivoklat } from '../../components/Articles/it/feudo/SistemaFeudaleDiKrivoklat'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Il sistema feudale di Křivoklat"
      image="Krivoklat_19_stol.jpg"
      description="Il sistema feudale di Křivoklat - struttura e funzionamento del sistema vassallatico al castello di Křivoklat"
    />
    <Container>
      <Row>
        <Col className="text">
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
      cs: '/historicke-pozadi/krivokladska-manska-soustava',
      en: '/historical-background/krivoklat-feudal-system',
      de: '/historischer-hintergrund/krivoklater-lehnswesen',
    },
  },
})

export default Page
