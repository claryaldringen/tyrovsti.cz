import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { TrestneTazeniVevoduProtiBocklerum } from '../../components/Articles/cz/akce/TrestneTazeniVevoduProtiBocklerum'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Trestné tažení vévodů proti bocklerům 1468"
      description="Rozhodující tažení vévodů Albrechta IV. a Ludvíka IX. proti bocklerským hradům Falkenfels, Kollnburg, Saldenburg a klášteru Rinchnach (listopad 1468 — leden 1469)"
    />
    <Container>
      <Row>
        <Col className="text">
          <TrestneTazeniVevoduProtiBocklerum />
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
