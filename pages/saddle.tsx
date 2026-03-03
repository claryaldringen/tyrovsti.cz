import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_EN } from '../shared/constants'
import { Saddle } from '../components/Articles/en/Saddle'

const Page = () => (
  <>
    <HeadExtended
      title="Saddle"
      description="Saddler's guild articles – bilingual Czech-English medieval source text"
    />
    <Container>
      <Row>
        <Col className="text">
          <Saddle />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: { de: '/sattel' },
  },
})

export default Page
