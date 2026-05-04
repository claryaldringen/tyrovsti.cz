import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { OblehaniSmedereva1439 } from '../../components/Articles/cz/akce/OblehaniSmedereva1439'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Obléhání Smedereva 1439"
      description="Osmanské dobytí hlavní srbské pevnosti a pád despotace (1439)"
    />
    <Container>
      <Row>
        <Col className="text">
          <OblehaniSmedereva1439 />
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
