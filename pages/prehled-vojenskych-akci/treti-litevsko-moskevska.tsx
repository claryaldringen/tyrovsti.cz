import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { TretiLitevskoMoskevska } from '../../components/Articles/cz/akce/TretiLitevskoMoskevska'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Třetí litevsko-moskevská válka"
      description="Vzpoura Glinského a moskevské tažení (1507–1508)"
    />
    <Container>
      <Row>
        <Col className="text">
          <TretiLitevskoMoskevska />
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
