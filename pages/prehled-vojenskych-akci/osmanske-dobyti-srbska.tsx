import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { OsmanskeDobytiSrbska } from '../../components/Articles/cz/akce/OsmanskeDobytiSrbska'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Osmanské dobytí Srbska"
      description="Pád despotátu po obležení Smedereva (1454–1459)"
    />
    <Container>
      <Row>
        <Col className="text">
          <OsmanskeDobytiSrbska />
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
