import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { OsmanskeTazeniDoSedmihradska1438 } from '../../components/Articles/cz/akce/OsmanskeTazeniDoSedmihradska1438'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Osmanské tažení do Sedmihradska 1438"
      description="Velký nájezd Murada II. na sedmihradská sasská města (1438)"
    />
    <Container>
      <Row>
        <Col className="text">
          <OsmanskeTazeniDoSedmihradska1438 />
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
