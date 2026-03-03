import { HeadExtended } from '../components/HeadExtended'
import { LANG_DE } from '../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Taktik } from '../components/Articles/de/Taktik'

const Page = () => (
  <>
    <HeadExtended
      title="Taktik"
      description="Mittelalterliche Taktik – die Entwicklung der Infanterie- und Kavallerietaktik von Falkirk bis Mohács"
    />
    <Container>
      <Row>
        <Col className="text">
          <Taktik />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: { cs: '/taktika', en: '/tactics' },
  },
})

export default Page
