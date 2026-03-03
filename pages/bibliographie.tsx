import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_DE } from '../shared/constants'
import { Bibliographie } from '../components/Articles/de/Bibliographie'

const Page = () => (
  <>
    <HeadExtended
      title="Quellen"
      description="Quellen und Literatur – Bibliografie zur Geschichte des Kriegswesens und der Kleidung im 15. Jahrhundert"
    />
    <Container>
      <Row>
        <Col className="text">
          <Bibliographie />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: { cs: '/zdroje', en: '/bibliography' },
  },
})

export default Page
