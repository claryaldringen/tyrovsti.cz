import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { ValkaJirihoProtiStrakonickeJednote } from '../../components/Articles/cz/akce/ValkaJirihoProtiStrakonickeJednote'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Válka Jiřího z Poděbrad proti Strakonické jednotě"
      description="Vnitročeský konflikt utrakvistů a katolíků (1450–1452)"
    />
    <Container>
      <Row>
        <Col className="text">
          <ValkaJirihoProtiStrakonickeJednote />
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
