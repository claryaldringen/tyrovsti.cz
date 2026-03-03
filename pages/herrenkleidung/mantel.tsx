import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Mantel } from '../../components/Articles/de/kleidung/Mantel'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Herrenkleidung - Mantel"
      description="Mantel – der mittelalterliche Umhang im 15. Jahrhundert"
    />
    <Container>
      <Row>
        <Col className="text">
          <Mantel />
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
    dest: { cs: '/muzsky-odev/plast', en: '/mens-clothing/cloak' },
  },
})

export default Page
