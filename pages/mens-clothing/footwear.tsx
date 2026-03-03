import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Footwear } from '../../components/Articles/en/garment/Footwear'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Men's clothing - Footwear"
      image="bota7.jpg"
      description="Footwear in the 15th century – types and construction of medieval shoes in Bohemia"
    />
    <Container>
      <Row>
        <Col className="text">
          <Footwear />
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
    dest: { cs: '/muzsky-odev/obuv', de: '/herrenkleidung/schuhwerk' },
  },
})

export default Page
