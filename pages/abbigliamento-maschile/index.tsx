import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import { Sources } from '../../components/Quote/Sources'
import { BiancheriaIntima } from '../../components/Articles/it/abbigliamento/BiancheriaIntima'
import { Farsetto } from '../../components/Articles/it/abbigliamento/Farsetto'
import { Veste } from '../../components/Articles/it/abbigliamento/Veste'
import { Mantello } from '../../components/Articles/it/abbigliamento/Mantello'
import { Calzature } from '../../components/Articles/it/abbigliamento/Calzature'
import { Copricapo } from '../../components/Articles/it/abbigliamento/Copricapo'
import { Payment } from '../../components/Payment'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Abbigliamento maschile"
        image="knez.jpg"
        description="Abbigliamento maschile nel XV secolo - panoramica degli indumenti medievali in Boemia"
      />
      <Container>
        <Row>
          <Col className="text">
            <h1>Abbigliamento maschile</h1>
            <BiancheriaIntima />
            <Row>
              <Col>
                <h3>Indumenti esterni</h3>
              </Col>
            </Row>
            <Farsetto />
            <Veste />
            <Mantello />
            <Calzature />
            <Copricapo />
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
    dest: { cs: '/muzsky-odev', en: '/mens-clothing', de: '/herrenkleidung' },
  },
})

export default Page
