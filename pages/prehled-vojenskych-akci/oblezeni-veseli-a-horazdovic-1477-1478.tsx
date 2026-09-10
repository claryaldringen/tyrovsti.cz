import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { OblezeniVeseliAHorazdovic14771478 } from '../../components/Articles/cz/akce/OblezeniVeseliAHorazdovic14771478'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Záští Racka Kocovského a obležení Veselí a Horažďovic"
      description="Vnitročeské záští Racka Kocovského a obležení Veselí a Horažďovic (1477–1478)"
    />
    <Container>
      <Row>
        <Col className="text">
          <OblezeniVeseliAHorazdovic14771478 />
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
