import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Farsetto } from '../../components/Articles/it/abbigliamento/Farsetto'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Abbigliamento maschile - Farsetto"
      image="kabat2.jpg"
      description="Farsetto - taglio e ricostruzione di un indumento del XV secolo"
    />
    <Container>
      <Row>
        <Col className="text">
          <Farsetto />
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
      cs: '/muzsky-odev/kabat',
      en: '/mens-clothing/doublet',
      de: '/herrenkleidung/wams',
    },
  },
})

export default Page
