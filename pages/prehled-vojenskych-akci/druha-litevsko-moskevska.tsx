import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { DruhaLitevskoMoskevska } from '../../components/Articles/cz/akce/DruhaLitevskoMoskevska'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Druhá litevsko-moskevská válka"
      description="Válka o Severii 1500–1503, bitva na Vedroši a územní ztráty Litvy"
    />
    <Container>
      <Row>
        <Col className="text">
          <DruhaLitevskoMoskevska />
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
