import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { ZastiBrenkaKocovskeho } from '../../components/Articles/cz/akce/ZastiBrenkaKocovskeho'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Záští Břeňka z Ronšperka"
      description="Čeští páni v bavorských službách proti pasovskému biskupovi (1475–1476)"
    />
    <Container>
      <Row>
        <Col className="text">
          <ZastiBrenkaKocovskeho />
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
