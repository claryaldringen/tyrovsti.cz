import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Copricapo } from '../../components/Articles/it/abbigliamento/Copricapo'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Abbigliamento maschile - Copricapo"
      image="knez.jpg"
      description="Copricapi nel XV secolo - cappucci, cappelli e berretti nella Boemia medievale"
    />
    <Container>
      <Row>
        <Col className="text">
          <Copricapo />
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
      cs: '/muzsky-odev/pokryvky-hlavy',
      en: '/mens-clothing/headwear',
      de: '/herrenkleidung/kopfbedeckungen',
    },
  },
})

export default Page
