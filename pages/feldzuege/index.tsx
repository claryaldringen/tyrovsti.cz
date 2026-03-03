import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BayerischerKrieg } from '../../components/Articles/de/feldzuege/BayerischerKrieg'
import { Waldshuterkrieg } from '../../components/Articles/de/feldzuege/Waldshuterkrieg'
import { LANG_DE } from '../../shared/constants'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Übersicht der Feldzüge 1434–1525"
        image="orsha.jpg"
        description="Übersicht der Feldzüge – Schlachten und Feldzüge im 15. Jahrhundert"
      />
      <Container>
        <Row>
          <Col className="text">
            <h1>Übersicht der Feldzüge 1434–1525</h1>
            <BayerischerKrieg />
            <Waldshuterkrieg />
            <Sources />
            <Payment />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: { cs: '/prehled-vojenskych-akci', en: '/military-campaigns' },
  },
})

export default Page
