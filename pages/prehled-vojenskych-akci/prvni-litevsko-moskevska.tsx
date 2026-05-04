import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { PrvniLitevskoMoskevska } from '../../components/Articles/cz/akce/PrvniLitevskoMoskevska'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="První litevsko-moskevská válka"
      description="Litevsko-moskevský konflikt 1492–1494 po smrti Kazimíra IV. Jagellonského"
    />
    <Container>
      <Row>
        <Col className="text">
          <PrvniLitevskoMoskevska />
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
