import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { WaldshutWar } from '../../components/Articles/en/campaigns/WaldshutWar'
import { LANG_EN } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="The Waldshut War"
      image="cesi-waldshuterkrieg.jpg"
      description="The Waldshut War (1468) – war between the Habsburgs and the Swiss Confederacy"
    />
    <Container>
      <Row>
        <Col className="text">
          <WaldshutWar />
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
    dest: '/prehled-vojenskych-akci/waldshuterkrieg',
  },
})

export default Page
