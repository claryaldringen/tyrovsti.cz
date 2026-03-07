import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { LANG_CS } from '../../shared/constants'
import { HeadExtended } from '../../components/HeadExtended'
import { ValecneKladivo } from '../../components/Articles/cz/zbroj/ValecneKladivo'

const Page = () => (
  <>
    <HeadExtended
      title="Válečné kladivo"
      image="145159907_2454233381550561_6076649610687634798_n.jpg"
      description="Válečné kladivo – úderná zbraň proti zbroji ve středověku"
    />
    <Container>
      <Row>
        <Col className="text">
          <ValecneKladivo />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: {
      en: '/arms-and-armour/war-hammer',
      de: '/waffen-und-ruestung/streithammer',
      it: '/armi-e-armature/martello-da-guerra',
    },
  },
})

export default Page
