import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Doublet } from '../../components/Articles/en/garment/Doublet'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Men's clothing - Doublet"
      image="kabat2.jpg"
      description="Doublet – cut and reconstruction of a 15th century garment"
    />
    <Container>
      <Row>
        <Col className="text">
          <Doublet />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: { cs: '/muzsky-odev/kabat', de: '/herrenkleidung/wams', it: '/abbigliamento-maschile/farsetto' },
  },
})

export default Page
