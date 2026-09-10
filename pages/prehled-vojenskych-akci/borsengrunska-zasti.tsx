import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BorsengrunskaZasti } from '../../components/Articles/cz/akce/BorsengrunskaZasti'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Boršengrýnská záští"
      description="Pohraniční záští mezi Plavny, Gutštejny a Chebem (1450–1454)"
    />
    <Container>
      <Row>
        <Col className="text">
          <BorsengrunskaZasti />
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
