import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import { Payment } from '../../components/Payment'
import { Sources } from '../../components/Quote/Sources'
import { SfondoStorico } from '../../components/Articles/it/SfondoStorico'
import { HansHarsdorfer } from '../../components/Articles/it/HansHarsdorfer'

const Page = () => (
  <>
    <HeadExtended
      title="Sfondo storico"
      image="m921.033ra.jpg"
      description="Sfondo storico dell'era di Giorgio di Poděbrady e delle guerre boemo-ungheresi"
    />
    <Container>
      <Row>
        <Col className="text">
          <SfondoStorico />
          <Row>
            <Col>
              <h2>Personaggi illustri</h2>
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
    lang: LANG_IT,
    dest: {
      cs: '/historicke-pozadi',
      en: '/historical-background',
      de: '/historischer-hintergrund',
    },
  },
})

export default Page
