import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Cloak } from '../../components/Articles/en/garment/Cloak'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Men's clothing - Cloak"
      image="agrafa.jpg"
      description="Cloak – outer protective garment in the late Middle Ages"
    />
    <Container>
      <Row>
        <Col className="text">
          <Cloak />
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
    dest: '/muzsky-odev/plast',
  },
})

export default Page
