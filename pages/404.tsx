import React from 'react'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_CS } from '../shared/constants'
import { Col, Container, Row } from 'reactstrap'

const Custom404 = () => (
  <>
    <HeadExtended title="404" />
    <Container>
      <Row>
        <Col className="text" style={{ textAlign: 'center' }}>
          <h1>404</h1>
          <p>Stránka nebyla nalezena.</p>
          <p>Page not found.</p>
          <p>Seite nicht gefunden.</p>
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: {},
  },
})

export default Custom404
