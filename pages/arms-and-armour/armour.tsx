import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Armour } from '../../components/Articles/en/armour/Armour'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Arms and armour - Armour"
      description="Development of armour – from mail to plate armour in the Middle Ages"
    />
    <Container>
      <Row>
        <Col className="text">
          <Armour />
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
      cs: '/vyzbroj-a-vystroj/zbroj',
      de: '/waffen-und-ruestung/ruestung',
    },
  },
})

export default Page
