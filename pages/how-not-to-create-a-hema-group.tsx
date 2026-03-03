import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_EN } from '../shared/constants'
import { HowNotToCreateAGroup } from '../components/Articles/en/HowNotToCreateAGroup'

const Page = () => (
  <>
    <HeadExtended
      title="How (Not) to Create a HEMA Group"
      description="How not to create a historical fencing group – a satirical guide"
    />
    <Container>
      <Row>
        <Col className="text">
          <HowNotToCreateAGroup />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: {
      cs: '/kterak-nevytvorit-skupinu-historickeho-sermu',
      de: '/fechtgruppen-leitfaden',
    },
  },
})

export default Page
