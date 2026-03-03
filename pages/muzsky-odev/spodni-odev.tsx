import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { SpodniOdev } from '../../components/Articles/cz/odev/SpodniOdev'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Mužský oděv - Spodní odev"
      image="kosile_rajhrad.jpg"
      description="Spodní oděv – košile a spodky v 15. století"
    />
    <Container>
      <Row>
        <Col className="text">
          <SpodniOdev />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: {
      en: '/mens-clothing/undergarments',
      de: '/herrenkleidung/unterkleidung',
    },
  },
})

export default Page
