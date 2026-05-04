import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { SporOLadislavaPohrobka } from '../../components/Articles/cz/akce/SporOLadislavaPohrobka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Spor o korunu sv. Štěpána a Ladislava Pohrobka"
      description="Vydání Pohrobka, korunovace v Uhrách a Čechách, smrt 1457 (1452–1457)"
    />
    <Container>
      <Row>
        <Col className="text">
          <SporOLadislavaPohrobka />
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
