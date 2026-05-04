import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { TatarskyVpadLopuszno } from '../../components/Articles/cz/akce/TatarskyVpadLopuszno'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Tatarský vpád na Volyň a bitva u Lopuszna"
      description="Vítězství Konstantina Ostrožského nad krymskými Tatary (1512)"
    />
    <Container>
      <Row>
        <Col className="text">
          <TatarskyVpadLopuszno />
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
