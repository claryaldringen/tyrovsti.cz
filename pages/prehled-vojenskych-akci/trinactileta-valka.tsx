import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { TrinactiletaValka } from '../../components/Articles/cz/akce/TrinactiletaValka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Třináctiletá válka"
      description="Polsko-řádová válka 1454–1466 a Toruňský mír"
    />
    <Container>
      <Row>
        <Col className="text">
          <TrinactiletaValka />
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
