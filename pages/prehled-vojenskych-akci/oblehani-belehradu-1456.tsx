import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { OblehaniBelehradu1456 } from '../../components/Articles/cz/akce/OblehaniBelehradu1456'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Obléhání Bělehradu 1456"
      description="Obléhání Bělehradu Osmany (1456) – Hunyadiho slavné vítězství"
    />
    <Container>
      <Row>
        <Col className="text">
          <OblehaniBelehradu1456 />
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
