import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_CS } from '../shared/constants'
import { Fechtbuch } from '../components/Articles/cz/Fechtbuch'

const Page = () => (
  <>
    <HeadExtended
      title="Joachim Meyer, fechtbuch (MS Bibl. 2465)"
      image="fechtbuch/MS_Bibl._2465_108v.jpg"
      description="Fechtbuch – šermířské příručky a rukopis MS Bibl. 2465 Joachima Meyera"
    />
    <Container>
      <Row>
        <Col className="text">
          <Fechtbuch />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: '/fencing-manual',
  },
})

export default Page
