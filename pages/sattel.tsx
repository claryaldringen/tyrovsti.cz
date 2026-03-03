import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_DE } from '../shared/constants'
import { Sattel } from '../components/Articles/de/Sattel'

const Page = () => (
  <>
    <HeadExtended
      title="Sattel"
      description="Sattlerzunft-Artikel – zweisprachiger tschechisch-deutscher mittelalterlicher Quellentext"
    />
    <Container>
      <Row>
        <Col className="text">
          <Sattel />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: { en: '/saddle' },
  },
})

export default Page
