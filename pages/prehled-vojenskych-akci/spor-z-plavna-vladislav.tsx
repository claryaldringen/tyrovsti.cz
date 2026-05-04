import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { SporZPlavnaVladislav } from '../../components/Articles/cz/akce/SporZPlavnaVladislav'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Spory pánů z Plavna"
      description="Spory plavenských pánů o Plavno, Bečov a Kynžvart za vlády Vladislava II. Jagellonského (1481+)"
    />
    <Container>
      <Row>
        <Col className="text">
          <SporZPlavnaVladislav />
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
