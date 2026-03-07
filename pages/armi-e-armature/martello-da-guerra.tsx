import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { MartelloDaGuerra } from '../../components/Articles/it/armi/MartelloDaGuerra'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Armi e armature - Martello da guerra"
      image="DP7063.jpeg"
      description="Martello da guerra – un'arma da impatto contro l'armatura nel Medioevo"
    />
    <Container>
      <Row>
        <Col className="text">
          <MartelloDaGuerra />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_IT,
    dest: {
      cs: '/vyzbroj-a-vystroj/valecne-kladivo',
      en: '/arms-and-armour/war-hammer',
      de: '/waffen-und-ruestung/streithammer',
    },
  },
})

export default Page
