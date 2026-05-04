import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { DobytiVimperkaVlachovaBreziBudkova1468 } from '../../components/Articles/cz/akce/DobytiVimperkaVlachovaBreziBudkova1468'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Dobytí Vimperka, Vlachova Březí a Budkova 1468"
      description="Pasovsko-bavorské tažení proti Kaplířům ze Sulevic na jižní Šumavě a vyplenění tří jejich opěrných bodů v září 1468"
    />
    <Container>
      <Row>
        <Col className="text">
          <DobytiVimperkaVlachovaBreziBudkova1468 />
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
