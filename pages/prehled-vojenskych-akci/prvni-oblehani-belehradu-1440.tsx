import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { PrvniOblehaniBelehradu1440 } from '../../components/Articles/cz/akce/PrvniOblehaniBelehradu1440'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="První obléhání Bělehradu 1440"
      description="Neúspěšný útok Murada II. na uherský Bělehrad (1440)"
    />
    <Container>
      <Row>
        <Col className="text">
          <PrvniOblehaniBelehradu1440 />
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
