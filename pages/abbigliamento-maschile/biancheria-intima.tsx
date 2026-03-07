import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { BiancheriaIntima } from '../../components/Articles/it/abbigliamento/BiancheriaIntima'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Abbigliamento maschile - Biancheria intima"
      image="kosile_rajhrad.jpg"
      description="Biancheria intima nel XV secolo - camicie, camiciole e braghette nella Boemia medievale"
    />
    <Container>
      <Row>
        <Col className="text">
          <BiancheriaIntima />
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
      cs: '/muzsky-odev/spodni-odev',
      en: '/mens-clothing/undergarments',
      de: '/herrenkleidung/unterkleidung',
    },
  },
})

export default Page
