import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { HunyadihoDlouheTazeni } from '../../components/Articles/cz/akce/HunyadihoDlouheTazeni'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Dlouhé tažení Jánose Hunyadiho"
      description="Hunyadiho protiosmanské tažení na Balkán (1443–1444)"
    />
    <Container>
      <Row>
        <Col className="text">
          <HunyadihoDlouheTazeni />
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
