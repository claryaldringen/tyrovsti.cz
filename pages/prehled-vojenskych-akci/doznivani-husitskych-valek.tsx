import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { DoznivaniHusitskychValek } from '../../components/Articles/cz/akce/DoznivaniHusitskychValek'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Doznívání husitských válek"
      description="Jihlavská kompaktáta, přijetí Zikmunda a povstání Jana Roháče (1434–1437)"
    />
    <Container>
      <Row>
        <Col className="text">
          <DoznivaniHusitskychValek />
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
