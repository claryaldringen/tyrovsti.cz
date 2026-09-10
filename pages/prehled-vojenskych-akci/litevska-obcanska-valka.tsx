import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { LitevskaObcanskaValka } from '../../components/Articles/cz/akce/LitevskaObcanskaValka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Litevská občanská válka"
      description="Svidrigailo proti Zikmundu Kejstutovičovi a husitští žoldnéři u Pabaisku (1432–1438)"
    />
    <Container>
      <Row>
        <Col className="text">
          <LitevskaObcanskaValka />
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
