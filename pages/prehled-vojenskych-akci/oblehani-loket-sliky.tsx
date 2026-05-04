import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { OblehaniLoketSliky } from '../../components/Articles/cz/akce/OblehaniLoketSliky'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Vpád Šliků do Lokte"
      description="Vpád Šliků do města Lokte a vypálení podhradí (1471)"
    />
    <Container>
      <Row>
        <Col className="text">
          <OblehaniLoketSliky />
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
