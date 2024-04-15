import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Gown } from '../../components/Articles/en/Gown'
import { Sources } from '../../components/Quote/Sources'

const Page = () => (
  <>
    <HeadExtended title="Men's clothing - Gown" image="kabat5.jpg" />
    <Container>
      <Row>
        <Col className="text">
          <Gown />
          <Sources />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: '/muzsky-odev/sukne',
  },
})

export default Page
