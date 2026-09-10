import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { CtvrtaLitevskoMoskevska } from '../../components/Articles/cz/akce/CtvrtaLitevskoMoskevska'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Čtvrtá litevsko-moskevská válka"
      description="Polsko-litevsko-moskevská válka 1512–1522 a bitva u Orši"
    />
    <Container>
      <Row>
        <Col className="text">
          <CtvrtaLitevskoMoskevska />
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
