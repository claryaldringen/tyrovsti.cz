import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import { Payment } from '../../components/Payment'
import { Sources } from '../../components/Quote/Sources'
import { HistorischerHintergrund } from '../../components/Articles/de/HistorischerHintergrund'
import { HansHarsdorfer } from '../../components/Articles/de/HansHarsdorfer'

const Page = () => (
  <>
    <HeadExtended
      title="Historischer Hintergrund"
      image="m921.033ra.jpg"
      description="Historischer Hintergrund der Ära Georgs von Podiebrad und der böhmisch-ungarischen Kriege"
    />
    <Container>
      <Row>
        <Col className="text">
          <HistorischerHintergrund />
          <Row>
            <Col>
              <h2>Persönlichkeiten</h2>
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
    lang: LANG_DE,
    dest: {
      cs: '/historicke-pozadi',
      en: '/historical-background',
      it: '/sfondo-storico',
    },
  },
})

export default Page
