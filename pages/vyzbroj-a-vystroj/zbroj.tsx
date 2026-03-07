import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Zbroj } from '../../components/Articles/cz/zbroj/uvod'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Vývoj zbroje"
      description="Vývoj zbroje – od kroužkové po plátovou zbroj ve středověku"
    />
    <Container>
      <Row>
        <Col className="text">
          <Zbroj />
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
      en: '/arms-and-armour/armour',
      de: '/waffen-und-ruestung/ruestung',
      it: '/armi-e-armature/armatura',
    },
  },
})

export default Page
