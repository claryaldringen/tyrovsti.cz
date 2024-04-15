import { Sukne } from '../../components/Articles/cz/odev/Sukne'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'

const Page = () => (
  <>
    <HeadExtended title="Mužský oděv - Sukně" image="kabat5.jpg" />
    <Container>
      <Row>
        <Col className="text">
          <Sukne />
          <Sources />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: '/mens-clothing/gown',
  },
})

export default Page
