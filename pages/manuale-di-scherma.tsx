import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_IT } from '../shared/constants'
import { ManualeDiScherma } from '../components/Articles/it/ManualeDiScherma'

const Page = () => (
  <>
    <HeadExtended
      title="Joachim Meyer, Fechtbuch (MS Bibl. 2465)"
      image="fechtbuch/MS_Bibl._2465_108v.jpg"
      description="Fechtbuch – manuali di scherma e il manoscritto MS Bibl. 2465 di Joachim Meyer"
    />
    <Container>
      <Row>
        <Col className="text">
          <ManualeDiScherma />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_IT,
    dest: { cs: '/fechtbuch', en: '/fencing-manual', de: '/fechthandbuch' },
  },
})

export default Page
