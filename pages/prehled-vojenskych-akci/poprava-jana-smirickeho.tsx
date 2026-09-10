import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { PopravaJanaSmirickeho } from '../../components/Articles/cz/akce/PopravaJanaSmirickeho'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Pád Jana Smiřického"
      description="Poprava Jana Smiřického ze Smiřic a boj o jeho dědictví (1453)"
    />
    <Container>
      <Row>
        <Col className="text">
          <PopravaJanaSmirickeho />
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
