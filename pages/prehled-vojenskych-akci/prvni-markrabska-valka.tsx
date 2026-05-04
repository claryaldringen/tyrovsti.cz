import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { PrvniMarkrabskaValka } from '../../components/Articles/cz/akce/PrvniMarkrabskaValka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="První markraběcí válka"
      description="Konflikt Albrechta III. Achilla s Norimberkem (1449–1453)"
    />
    <Container>
      <Row>
        <Col className="text">
          <PrvniMarkrabskaValka />
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
