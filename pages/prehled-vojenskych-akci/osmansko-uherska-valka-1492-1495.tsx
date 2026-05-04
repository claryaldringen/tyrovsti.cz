import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { OsmanskoUherskaValka14921495 } from '../../components/Articles/cz/akce/OsmanskoUherskaValka14921495'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Osmanské nájezdy do Uher a Chorvatska 1492–1495"
      description="Bitva na Krbavském poli 1493 a obrana jihouherské linie po smrti Matyáše Korvína"
    />
    <Container>
      <Row>
        <Col className="text">
          <OsmanskoUherskaValka14921495 />
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
      en: '/military-campaigns',
      de: '/feldzuege',
      it: '/campagne-militari',
    },
  },
})

export default Page
