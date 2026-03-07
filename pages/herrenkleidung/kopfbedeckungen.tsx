import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Kopfbedeckungen } from '../../components/Articles/de/kleidung/Kopfbedeckungen'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Herrenkleidung - Kopfbedeckungen"
      description="Kopfbedeckungen – mittelalterliche Hüte und Hauben im 15. Jahrhundert"
    />
    <Container>
      <Row>
        <Col className="text">
          <Kopfbedeckungen />
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
      cs: '/muzsky-odev/pokryvky-hlavy',
      en: '/mens-clothing/headwear',
      it: '/abbigliamento-maschile/copricapo',
    },
  },
})

export default Page
