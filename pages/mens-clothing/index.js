import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import { Sources } from '../../components/Quote/Sources'
import { Doublet } from '../../components/Articles/en/garment/Doublet'
import { Gown } from '../../components/Articles/en/garment/Gown'

const Page = () => {
  return (
    <>
      <HeadExtended title="Men's clothing" image="knez.jpg" />
      <Container>
        <Row>
          <Col className="text">
            <h1>Men&apos;s clothing</h1>
            <Row>
              <Col>
                <h3>Outer garment</h3>
              </Col>
            </Row>
            <Doublet />
            <Gown />
            <Sources />
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
