import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Headwear } from '../../components/Articles/en/garment/Headwear'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Men's clothing - Headwear"
      image="knez.jpg"
      description="Headwear in the 15th century – hoods, hats and berets in medieval Bohemia"
    />
    <Container>
      <Row>
        <Col className="text">
          <Headwear />
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
      cs: '/muzsky-odev/pokryvky-hlavy',
      de: '/herrenkleidung/kopfbedeckungen',
    },
  },
})

export default Page
