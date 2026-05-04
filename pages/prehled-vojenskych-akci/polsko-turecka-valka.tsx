import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { PolskoTureckaValka } from '../../components/Articles/cz/akce/PolskoTureckaValka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Polsko-turecká válka o černomořské porty"
      description="Polsko-osmanský konflikt o moldavské přístavy Kilii a Akermán a bukovinská výprava 1497 (1485–1503)"
    />
    <Container>
      <Row>
        <Col className="text">
          <PolskoTureckaValka />
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
