import { HeadExtended } from '../components/HeadExtended'
import { LANG_EN } from '../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Tactics } from '../components/Articles/en/Tactics'

const Page = () => (
  <>
    <HeadExtended
      title="Tactics"
      description="Medieval tactics – the development of infantry and cavalry tactics from Falkirk to Mohács"
    />
    <Container>
      <Row>
        <Col className="text">
          <Tactics />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: { cs: '/taktika', de: '/taktik', it: '/tattica' },
  },
})

export default Page
