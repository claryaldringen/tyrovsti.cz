import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import { Sources } from '../../components/Quote/Sources'
import { Tarce } from '../../components/Articles/cz/zbroj/Tarce'

const Page = () => {
  return (
    <>
      <HeadExtended title="Tarče" />
      <Container>
        <Row>
          <Col className="text">
            <Tarce />
            <Sources />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: '/arms-and-armour/targe',
  },
})

export default Page
