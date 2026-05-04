import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { TazeniPodebradProtiPlavnu1469 } from '../../components/Articles/cz/akce/TazeniPodebradProtiPlavnu1469'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Tažení Jiřího z Poděbrad proti Plavnu (1469)"
      description="Trestná výprava krále Jiřího z Poděbrad proti západočeským hradům Jindřicha II. z Plavna v roce 1469"
    />
    <Container>
      <Row>
        <Col className="text">
          <TazeniPodebradProtiPlavnu1469 />
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
