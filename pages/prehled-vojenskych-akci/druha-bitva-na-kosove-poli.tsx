import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { DruhaBitvaNaKosovePoli } from '../../components/Articles/cz/akce/DruhaBitvaNaKosovePoli'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Druhá bitva na Kosově poli"
      description="Druhá bitva na Kosově poli (1448) – Hunyadiho porážka od Osmanů"
    />
    <Container>
      <Row>
        <Col className="text">
          <DruhaBitvaNaKosovePoli />
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
