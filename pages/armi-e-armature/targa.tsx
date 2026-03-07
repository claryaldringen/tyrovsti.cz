import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import { Sources } from '../../components/Quote/Sources'
import { Targa } from '../../components/Articles/it/armi/Targa'
import { Payment } from '../../components/Payment'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Targa"
        image="Malba.JPG"
        description="Targa – un tipo di scudo usato nel XV secolo"
      />
      <Container>
        <Row>
          <Col className="text">
            <Targa />
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
    lang: LANG_IT,
    dest: {
      cs: '/vyzbroj-a-vystroj/tarce',
      en: '/arms-and-armour/targe',
      de: '/waffen-und-ruestung/tartsche',
    },
  },
})

export default Page
