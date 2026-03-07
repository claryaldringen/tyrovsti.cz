import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { HansHarsdorfer } from '../../components/Articles/it/HansHarsdorfer'
import { LANG_IT } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Hans Harsdorfer"
      image="hans-harsdorffer.jpg"
      description="Hans Harsdorfer - patrizio di Norimberga, produttore di armature e maestro della zecca reale in Boemia"
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
    lang: LANG_IT,
    dest: {
      cs: '/historicke-pozadi/hans-harsdorfer',
      en: '/historical-background/hans-harsdorfer',
      de: '/historischer-hintergrund/hans-harsdorfer',
    },
  },
})

export default Page
