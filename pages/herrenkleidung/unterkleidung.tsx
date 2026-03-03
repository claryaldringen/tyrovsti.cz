import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Unterkleidung } from '../../components/Articles/de/kleidung/Unterkleidung'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Herrenkleidung - Unterkleidung"
      description="Unterkleidung – mittelalterliche Unterwäsche im 15. Jahrhundert"
    />
    <Container>
      <Row>
        <Col className="text">
          <Unterkleidung />
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
      cs: '/muzsky-odev/spodni-odev',
      en: '/mens-clothing/undergarments',
    },
  },
})

export default Page
