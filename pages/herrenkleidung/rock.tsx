import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Rock } from '../../components/Articles/de/kleidung/Rock'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Herrenkleidung - Rock"
      description="Rock – das lange Gewand des Mittelalters"
    />
    <Container>
      <Row>
        <Col className="text">
          <Rock />
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
    dest: { cs: '/muzsky-odev/sukne', en: '/mens-clothing/gown' },
  },
})

export default Page
