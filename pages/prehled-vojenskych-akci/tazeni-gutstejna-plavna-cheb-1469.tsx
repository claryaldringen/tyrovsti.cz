import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { TazeniGutstejnaPlavnaCheb1469 } from '../../components/Articles/cz/akce/TazeniGutstejnaPlavnaCheb1469'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Tažení Gutštejna a Plavna proti Chebu (1469)"
      description="Společné tažení Buriana z Gutštejna a Jindřicha z Plavna proti Chebu a klášteru Waldsassen v roce 1469"
    />
    <Container>
      <Row>
        <Col className="text">
          <TazeniGutstejnaPlavnaCheb1469 />
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
