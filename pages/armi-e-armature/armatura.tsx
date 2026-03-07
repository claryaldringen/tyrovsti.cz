import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Armatura } from '../../components/Articles/it/armi/Armatura'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Armi e armature - Armatura"
      description="Sviluppo dell'armatura – dalla cotta di maglia all'armatura a piastre nel Medioevo"
    />
    <Container>
      <Row>
        <Col className="text">
          <Armatura />
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
      cs: '/vyzbroj-a-vystroj/zbroj',
      en: '/arms-and-armour/armour',
      de: '/waffen-und-ruestung/ruestung',
    },
  },
})

export default Page
