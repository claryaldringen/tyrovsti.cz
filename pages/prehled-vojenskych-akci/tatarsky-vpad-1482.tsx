import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { TatarskyVpad1482 } from '../../components/Articles/cz/akce/TatarskyVpad1482'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Vpád krymských Tatarů Mengli Gireje na Kyjevsko 1482"
      description="Vyplenění Kyjeva krymským chánem Mengli I. Girejem v rámci litevsko-tatarských konfliktů (1482)"
    />
    <Container>
      <Row>
        <Col className="text">
          <TatarskyVpad1482 />
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
