import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { RazieAlbrechtaIvNaLupice1470 } from '../../components/Articles/cz/akce/RazieAlbrechtaIvNaLupice1470'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Razie Albrechta IV. na lupiče (1470)"
      description="Razie bavorského vévody Albrechta IV. na družiny Petra Gewolfa z Degenbergu a Hanse Nussbergera v roce 1470"
    />
    <Container>
      <Row>
        <Col className="text">
          <RazieAlbrechtaIvNaLupice1470 />
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
