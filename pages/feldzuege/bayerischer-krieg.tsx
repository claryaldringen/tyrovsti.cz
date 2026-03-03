import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { BayerischerKrieg } from '../../components/Articles/de/feldzuege/BayerischerKrieg'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Bayerischer Krieg"
      description="Der Bayerische Krieg – ein Feldzug im 15. Jahrhundert"
    />
    <Container>
      <Row>
        <Col className="text">
          <BayerischerKrieg />
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
      cs: '/prehled-vojenskych-akci/bavorska-valka',
      en: '/military-campaigns/bavarian-war',
    },
  },
})

export default Page
