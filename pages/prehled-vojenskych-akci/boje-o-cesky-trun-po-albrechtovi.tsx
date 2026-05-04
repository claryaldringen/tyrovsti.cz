import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BojeOCeskyTrunPoAlbrechtovi } from '../../components/Articles/cz/akce/BojeOCeskyTrunPoAlbrechtovi'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Boje o český trůn po Albrechtovi II."
      description="Bezvládí v Českém království a souboj zemských jednot (1440–1453)"
    />
    <Container>
      <Row>
        <Col className="text">
          <BojeOCeskyTrunPoAlbrechtovi />
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
