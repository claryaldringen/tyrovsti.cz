import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_EN } from '../shared/constants'
import { FencingManual } from '../components/Articles/en/FencingManual'

const Page = () => (
  <>
    <HeadExtended
      title="Joachim Meyer, Fechtbuch (MS Bibl. 2465)"
      image="fechtbuch/MS_Bibl._2465_108v.jpg"
      description="Fechtbuch – fencing manuals and the manuscript MS Bibl. 2465 by Joachim Meyer"
    />
    <Container>
      <Row>
        <Col className="text">
          <FencingManual />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: { cs: '/fechtbuch', de: '/fechthandbuch', it: '/manuale-di-scherma' },
  },
})

export default Page
