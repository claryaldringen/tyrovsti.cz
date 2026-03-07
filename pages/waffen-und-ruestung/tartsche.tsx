import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Tartsche } from '../../components/Articles/de/ruestung/Tartsche'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Tartsche"
      image="paveza.jpg"
      description="Tartsche – der böhmische Pavesenschild des 15. Jahrhunderts"
    />
    <Container>
      <Row>
        <Col className="text">
          <Tartsche />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: {
      cs: '/vyzbroj-a-vystroj/tarce',
      en: '/arms-and-armour/targe',
      it: '/armi-e-armature/targa',
    },
  },
})

export default Page
