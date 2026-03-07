import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Schuhwerk } from '../../components/Articles/de/kleidung/Schuhwerk'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Herrenkleidung - Schuhwerk"
      description="Schuhwerk – mittelalterliche Schuhe und Stiefel im 15. Jahrhundert"
    />
    <Container>
      <Row>
        <Col className="text">
          <Schuhwerk />
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
      cs: '/muzsky-odev/obuv',
      en: '/mens-clothing/footwear',
      it: '/abbigliamento-maschile/calzature',
    },
  },
})

export default Page
