import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { OdbojPodebradskychVsKorvin } from '../../components/Articles/cz/akce/OdbojPodebradskychVsKorvin'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Odboj Hynka a Jindřicha z Poděbrad proti Korvínovi"
      description="Synové krále Jiřího v opozici a ztráta minsterberského vévodství (1471–1490)"
    />
    <Container>
      <Row>
        <Col className="text">
          <OdbojPodebradskychVsKorvin />
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
