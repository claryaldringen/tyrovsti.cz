import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { CernaArmada } from '../../components/Articles/cz/akce/CernaArmada'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Černá armáda Matyáše Korvína"
      description="Černá armáda (Fekete sereg) – stálé žoldnéřské vojsko Matyáše Korvína s velkou českou účastí"
    />
    <Container>
      <Row>
        <Col className="text">
          <CernaArmada />
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
