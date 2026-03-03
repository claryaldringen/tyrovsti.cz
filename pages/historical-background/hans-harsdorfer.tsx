import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { HansHarsdorfer } from '../../components/Articles/en/HansHarsdorfer'
import { LANG_EN } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Hans Harsdorfer"
      image="hans-harsdorffer.jpg"
      description="Hans Harsdorfer – Nuremberg patrician, armour manufacturer and royal mint master in Bohemia"
    />
    <Container>
      <Row>
        <Col className="text">
          <HansHarsdorfer />
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
    dest: {
      cs: '/historicke-pozadi/hans-harsdorfer',
      de: '/historischer-hintergrund/hans-harsdorfer',
    },
  },
})

export default Page
