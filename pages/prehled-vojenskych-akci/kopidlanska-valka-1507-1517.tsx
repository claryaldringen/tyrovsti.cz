import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { KopidlanskaValka15071517 } from '../../components/Articles/cz/akce/KopidlanskaValka15071517'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Soukromá válka Jiřího Kopidlanského proti Praze"
      description="Desetiletá loupežná opověď drobného šlechtice po popravě jeho bratra (1507–1517)"
    />
    <Container>
      <Row>
        <Col className="text">
          <KopidlanskaValka15071517 />
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
