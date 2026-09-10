import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { SoesterskaZasti } from '../../components/Articles/cz/akce/SoesterskaZasti'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Soesterská záští"
      description="Soesterská záští (1444–1449) – válka mezi městem Soest a kolínským arcibiskupem s velkou českou žoldnéřskou účastí"
    />
    <Container>
      <Row>
        <Col className="text">
          <SoesterskaZasti />
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
