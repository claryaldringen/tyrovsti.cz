import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { KrivoklaterLehnswesen } from '../../components/Articles/de/lehnswesen/KrivoklaterLehnswesen'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Křivoklát Lehnswesen"
      description="Das Lehnswesen der Burg Křivoklát – Vasallenstruktur einer böhmischen Königsburg"
    />
    <Container>
      <Row>
        <Col className="text">
          <KrivoklaterLehnswesen />
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
      cs: '/historicke-pozadi/krivokladska-manska-soustava',
      en: '/historical-background/krivoklat-feudal-system',
      it: '/sfondo-storico/sistema-feudale-di-krivoklat',
    },
  },
})

export default Page
