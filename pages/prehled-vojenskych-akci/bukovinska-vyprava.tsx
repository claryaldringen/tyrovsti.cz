import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BukovinskaVyprava } from '../../components/Articles/cz/akce/BukovinskaVyprava'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Bukovinská výprava 1497"
      description="Polská výprava Jana Olbrachta do Moldávie a porážka v Bukovině"
    />
    <Container>
      <Row>
        <Col className="text">
          <BukovinskaVyprava />
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
