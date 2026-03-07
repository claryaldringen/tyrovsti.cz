import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BavorskaValka } from '../../components/Articles/cz/akce/BavorskaValka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Bavorská válka"
      image="LudvikIX.jpg"
      description="Bavorská válka (1504) – vojenský konflikt o landshutské dědictví"
    />
    <Container>
      <Row>
        <Col className="text">
          <BavorskaValka />
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
      en: '/military-campaigns/bavarian-war',
      de: '/feldzuege/bayerischer-krieg',
      it: '/campagne-militari/guerra-bavarese',
    },
  },
})

export default Page
