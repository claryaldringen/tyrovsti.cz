import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BojeOUherskyTrun1440 } from '../../components/Articles/cz/akce/BojeOUherskyTrun1440'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Boje o uherský trůn"
      description="Boje o uherský trůn mezi Vladislavem I. a Habsburky (1440–1442)"
    />
    <Container>
      <Row>
        <Col className="text">
          <BojeOUherskyTrun1440 />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: {
      en: '/military-campaigns',
      de: '/feldzuege',
      it: '/campagne-militari',
    },
  },
})

export default Page
