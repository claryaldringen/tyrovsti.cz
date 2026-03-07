import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import { Payment } from '../../components/Payment'
import { Sources } from '../../components/Quote/Sources'
import { HansHarsdorfer } from '../../components/Articles/cz/HansHarsdorfer'
import { HistorickePozadi } from '../../components/Articles/cz/HistorickePozadi'

const Page = () => (
  <>
    <HeadExtended
      title="Historické pozadí"
      image="m921.033ra.jpg"
      description="Historické pozadí doby Jiřího z Poděbrad a česko-uherských válek v 15. století"
    />
    <Container>
      <Row>
        <Col className="text">
          <HistorickePozadi />
          <Row>
            <Col>
              <h2>Osobnosti</h2>
            </Col>
          </Row>
          <HansHarsdorfer />
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
      en: '/historical-background',
      de: '/historischer-hintergrund',
      it: '/sfondo-storico',
    },
  },
})

export default Page
