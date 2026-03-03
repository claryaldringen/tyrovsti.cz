import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_EN } from '../shared/constants'
import { Bibliography } from '../components/Articles/en/Bibliography'

const Page = () => (
  <>
    <HeadExtended
      title="Sources"
      description="Sources and references – bibliography for the history of 15th century warfare and clothing"
    />
    <Container>
      <Row>
        <Col className="text">
          <Bibliography />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: '/zdroje',
  },
})

export default Page
