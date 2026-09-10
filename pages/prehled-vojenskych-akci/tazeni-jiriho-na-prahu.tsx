import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { TazeniJirihoNaPrahu } from '../../components/Articles/cz/akce/TazeniJirihoNaPrahu'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Tažení Jiřího z Poděbrad na Prahu"
      description="Noční dobytí Starého Města pražského (3. září 1448)"
    />
    <Container>
      <Row>
        <Col className="text">
          <TazeniJirihoNaPrahu />
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
