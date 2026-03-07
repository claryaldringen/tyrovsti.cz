import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import { Sources } from '../../components/Quote/Sources'
import { Targe } from '../../components/Articles/en/armour/Targe'
import { Payment } from '../../components/Payment'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Targe"
        image="Malba.JPG"
        description="Targe – a type of shield used in the 15th century"
      />
      <Container>
        <Row>
          <Col className="text">
            <Targe />
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
      cs: '/vyzbroj-a-vystroj/tarce',
      de: '/waffen-und-ruestung/tartsche',
      it: '/armi-e-armature/targa',
    },
  },
})

export default Page
