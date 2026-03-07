import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BavarianWar } from '../../components/Articles/en/campaigns/BavarianWar'
import { LANG_EN } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="The Bavarian War"
      image="LudvikIX.jpg"
      description="The Bavarian War (1504) – the War of the Landshut Succession"
    />
    <Container>
      <Row>
        <Col className="text">
          <BavarianWar />
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
      cs: '/prehled-vojenskych-akci/bavorska-valka',
      de: '/feldzuege/bayerischer-krieg',
      it: '/campagne-militari/guerra-bavarese',
    },
  },
})

export default Page
