import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { HansHarsdorfer } from '../../components/Articles/cz/HansHarsdorfer'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Hans Harsdorfer"
      image="hans-harsdorffer.jpg"
      description="Hans Harsdörfer – norimberský výrobce zbroje a jeho dodávky pro české pány"
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
    lang: LANG_CS,
    dest: {
      en: '/historical-background/hans-harsdorfer',
      de: '/historischer-hintergrund/hans-harsdorfer',
      it: '/sfondo-storico/hans-harsdorfer',
    },
  },
})

export default Page
