import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { HusitskeVpadySpis } from '../../components/Articles/cz/akce/HusitskeVpadySpis'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Husitské vpády na Spiš a Slovensko"
      description="Husitští a bratřičtí žoldnéři v Horních Uhrách (1434–1444)"
    />
    <Container>
      <Row>
        <Col className="text">
          <HusitskeVpadySpis />
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
