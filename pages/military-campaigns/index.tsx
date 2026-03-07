import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BavarianWar } from '../../components/Articles/en/campaigns/BavarianWar'
import { WaldshutWar } from '../../components/Articles/en/campaigns/WaldshutWar'
import { LANG_EN } from '../../shared/constants'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Overview of Military Campaigns 1434–1525"
        image="orsha.jpg"
        description="Overview of military campaigns – battles and campaigns in the 15th century"
      />
      <Container>
        <Row>
          <Col className="text">
            <h1>Overview of Military Campaigns 1434–1525</h1>
            <BavarianWar />
            <WaldshutWar />
            <Sources />
            <Payment />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: {
      cs: '/prehled-vojenskych-akci',
      de: '/feldzuege',
      it: '/campagne-militari',
    },
  },
})

export default Page
