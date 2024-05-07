import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Doublet } from '../../components/Articles/en/garment/Doublet'

const Page = () => (
  <>
    <HeadExtended title="Men's clothing - Doublet" image="kabat2.jpg" />
    <Container>
      <Row>
        <Col className="text">
          <Doublet />
          <Sources />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: '/muzsky-odev/kabat',
  },
})

export default Page
