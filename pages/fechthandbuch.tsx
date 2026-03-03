import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_DE } from '../shared/constants'
import { Fechthandbuch } from '../components/Articles/de/Fechthandbuch'

const Page = () => (
  <>
    <HeadExtended
      title="Joachim Meyer, Fechtbuch (MS Bibl. 2465)"
      image="fechtbuch/MS_Bibl._2465_108v.jpg"
      description="Fechtbuch – Fechthandbücher und die Handschrift MS Bibl. 2465 von Joachim Meyer"
    />
    <Container>
      <Row>
        <Col className="text">
          <Fechthandbuch />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: { cs: '/fechtbuch', en: '/fencing-manual' },
  },
})

export default Page
