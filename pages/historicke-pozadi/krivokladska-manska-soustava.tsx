import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { KrivoklatskaManskaSoustava } from '../../components/Articles/cz/manstvi/KrivoklatskaManskaSoustava'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Křivoklátská manská soustava"
      image="Krivoklat_19_stol.jpg"
      description="Křivoklátská manská soustava – struktura a fungování manského systému na Křivoklátě"
    />
    <Container>
      <Row>
        <Col className="text">
          <KrivoklatskaManskaSoustava />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: {
      en: '/historical-background/krivoklat-feudal-system',
      de: '/historischer-hintergrund/krivoklater-lehnswesen',
      it: '/sfondo-storico/sistema-feudale-di-krivoklat',
    },
  },
})

export default Page
