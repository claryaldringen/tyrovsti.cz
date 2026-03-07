import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { RuestungEinfuehrung } from '../../components/Articles/de/ruestung/RuestungEinfuehrung'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Rüstung"
      description="Rüstung – Plattenrüstung und Rüstungsentwicklung im 15. Jahrhundert"
    />
    <Container>
      <Row>
        <Col className="text">
          <RuestungEinfuehrung />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: {
      cs: '/vyzbroj-a-vystroj/zbroj',
      en: '/arms-and-armour/armour',
      it: '/armi-e-armature/armatura',
    },
  },
})

export default Page
