import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { FalckaValkaFridrichaVitezneho } from '../../components/Articles/cz/akce/FalckaValkaFridrichaVitezneho'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Falcká válka Fridricha Vítězného"
      description="Pokračování bádensko-falcké rivality kolem wormského sněmu (1471)"
    />
    <Container>
      <Row>
        <Col className="text">
          <FalckaValkaFridrichaVitezneho />
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
