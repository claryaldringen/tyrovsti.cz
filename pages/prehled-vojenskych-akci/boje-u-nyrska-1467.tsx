import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BojeUNyrska1467 } from '../../components/Articles/cz/akce/BojeUNyrska1467'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Boje u Nýrska 1467"
      description="Drobná válka a polní střetnutí 22. září 1467 mezi klatovským hejtmanem Rackem Janovským z Janovic a bavorsko-falckými křižáky"
    />
    <Container>
      <Row>
        <Col className="text">
          <BojeUNyrska1467 />
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
