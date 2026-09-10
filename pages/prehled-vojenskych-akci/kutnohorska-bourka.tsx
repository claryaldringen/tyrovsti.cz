import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { KutnohorskaBourka } from '../../components/Articles/cz/akce/KutnohorskaBourka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Kutnohorská hornická bouře 1494–1496"
      description="Povstání kutnohorských horníků proti novému rejstříku za Vladislava II."
    />
    <Container>
      <Row>
        <Col className="text">
          <KutnohorskaBourka />
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
