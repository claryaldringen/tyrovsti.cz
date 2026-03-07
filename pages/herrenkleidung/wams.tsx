import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Wams } from '../../components/Articles/de/kleidung/Wams'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Herrenkleidung - Wams"
      image="kabat2.jpg"
      description="Wams – Schnitt und Rekonstruktion eines Kleidungsstücks aus dem 15. Jahrhundert"
    />
    <Container>
      <Row>
        <Col className="text">
          <Wams />
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
      cs: '/muzsky-odev/kabat',
      en: '/mens-clothing/doublet',
      it: '/abbigliamento-maschile/farsetto',
    },
  },
})

export default Page
