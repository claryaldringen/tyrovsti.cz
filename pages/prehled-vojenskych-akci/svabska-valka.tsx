import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { SvabskaValka } from '../../components/Articles/cz/akce/SvabskaValka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Švábská válka"
      description="Habsburkové vs. Stará švýcarská konfederace (1499)"
    />
    <Container>
      <Row>
        <Col className="text">
          <SvabskaValka />
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
