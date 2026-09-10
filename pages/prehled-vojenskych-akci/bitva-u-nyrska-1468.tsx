import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BitvaUNyrska1468 } from '../../components/Articles/cz/akce/BitvaUNyrska1468'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Bitva u Nýrska 1468"
      description="Druhá nýrská bitva, porážka křižáků a smrt falckého šlechtice Albrechta Nothafta z Wernbergu (1468)"
    />
    <Container>
      <Row>
        <Col className="text">
          <BitvaUNyrska1468 />
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
