import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { WarHammer } from '../../components/Articles/en/armour/WarHammer'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Arms and armour - War Hammer"
      image="DP7063.jpeg"
      description="War hammer – a crushing weapon against armour in the Middle Ages"
    />
    <Container>
      <Row>
        <Col className="text">
          <WarHammer />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: {
      cs: '/vyzbroj-a-vystroj/valecne-kladivo',
      de: '/waffen-und-ruestung/streithammer',
      it: '/armi-e-armature/martello-da-guerra',
    },
  },
})

export default Page
