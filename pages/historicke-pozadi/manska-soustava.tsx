import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { ManskaSoustava } from '../../components/Articles/cz/manstvi/ManskaSoustava'
import { KrivoklatskaManskaSoustava } from '../../components/Articles/cz/manstvi/KrivoklatskaManskaSoustava'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Manská soustava"
      image="Krivoklat_19_stol.jpg"
      description="Manská soustava v Čechách – feudální systém služebních povinností ve středověku"
    />
    <Container>
      <Row>
        <Col className="text">
          <ManskaSoustava />
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
      en: '/historical-background/feudal-system',
      de: '/historischer-hintergrund/lehnswesen',
      it: '/sfondo-storico/sistema-feudale',
    },
  },
})

export default Page
