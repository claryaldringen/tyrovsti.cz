import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import { Payment } from '../../components/Payment'
import { Sources } from '../../components/Quote/Sources'
import { HistoricalBackground } from '../../components/Articles/en/HistoricalBackground'
import { HansHarsdorfer } from '../../components/Articles/en/HansHarsdorfer'

const Page = () => (
  <>
    <HeadExtended
      title="Historical background"
      image="m921.033ra.jpg"
      description="Historical background of the era of George of Poděbrady and Bohemian-Hungarian wars"
    />
    <Container>
      <Row>
        <Col className="text">
          <HistoricalBackground />
          <Row>
            <Col>
              <h2>Notable Persons</h2>
            </Col>
          </Row>
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
    dest: { cs: '/historicke-pozadi', de: '/historischer-hintergrund' },
  },
})

export default Page
