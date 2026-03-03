import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Kabat } from '../../components/Articles/cz/odev/Kabat'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Mužský oděv - Kabát"
      image="kabat2.jpg"
      description="Kabát (doublet) – střih a rekonstrukce středověkého kabátu 15. století"
    />
    <Container>
      <Row>
        <Col className="text">
          <Kabat />
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
    dest: '/mens-clothing/doublet',
  },
})

export default Page
