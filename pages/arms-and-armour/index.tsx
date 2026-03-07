import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import { Sources } from '../../components/Quote/Sources'
import { Targe } from '../../components/Articles/en/armour/Targe'
import { Armour } from '../../components/Articles/en/armour/Armour'
import { Payment } from '../../components/Payment'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Arms and armour"
        description="Arms and armour – overview of weapons and armour in 15th century Bohemia"
      />
      <Container>
        <Row>
          <Col className="text">
            <h1>Arms and armour</h1>
            <Targe />
            <Armour />
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
      cs: '/vyzbroj-a-vystroj',
      de: '/waffen-und-ruestung',
      it: '/armi-e-armature',
    },
  },
})

export default Page
