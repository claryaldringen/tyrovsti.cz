import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_IT } from '../shared/constants'
import { ComeNonCreareUnGruppo } from '../components/Articles/it/ComeNonCreareUnGruppo'

const Page = () => (
  <>
    <HeadExtended
      title="Come (non) creare un gruppo HEMA"
      description="Come non creare un gruppo di scherma storica – una guida satirica"
    />
    <Container>
      <Row>
        <Col className="text">
          <ComeNonCreareUnGruppo />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_IT,
    dest: {
      cs: '/kterak-nevytvorit-skupinu-historickeho-sermu',
      en: '/how-not-to-create-a-hema-group',
      de: '/fechtgruppen-leitfaden',
    },
  },
})

export default Page
