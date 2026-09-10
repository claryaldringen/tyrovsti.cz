import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { ZastiVolfstejnaNaTrebli } from '../../components/Articles/cz/akce/ZastiVolfstejnaNaTrebli'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Záští Volfštejna na Třebli proti Chebu (1469–1470)"
      description="Pohraniční záští Viléma z Volfštejna na Třebli proti říšskému městu Cheb v letech 1469 až 1470"
    />
    <Container>
      <Row>
        <Col className="text">
          <ZastiVolfstejnaNaTrebli />
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
