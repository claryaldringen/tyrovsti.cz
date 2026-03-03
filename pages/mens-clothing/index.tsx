import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import { Sources } from '../../components/Quote/Sources'
import { Undergarments } from '../../components/Articles/en/garment/Undergarments'
import { Doublet } from '../../components/Articles/en/garment/Doublet'
import { Gown } from '../../components/Articles/en/garment/Gown'
import { Cloak } from '../../components/Articles/en/garment/Cloak'
import { Footwear } from '../../components/Articles/en/garment/Footwear'
import { Headwear } from '../../components/Articles/en/garment/Headwear'
import { Payment } from '../../components/Payment'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Men's clothing"
        image="knez.jpg"
        description="Men's clothing in the 15th century – overview of medieval garments in Bohemia"
      />
      <Container>
        <Row>
          <Col className="text">
            <h1>Men&apos;s clothing</h1>
            <Undergarments />
            <Row>
              <Col>
                <h3>Outer garment</h3>
              </Col>
            </Row>
            <Doublet />
            <Gown />
            <Cloak />
            <Footwear />
            <Headwear />
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
    dest: '/muzsky-odev',
  },
})

export default Page
