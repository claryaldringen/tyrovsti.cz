import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BocklerskaValka } from '../../components/Articles/cz/akce/BocklerskaValka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Bocklerská válka"
      description="Bavorský rytířský spolek Jednorožce vs. Albrecht IV. (1467–1472)"
    />
    <Container>
      <Row>
        <Col className="text">
          <BocklerskaValka />
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
