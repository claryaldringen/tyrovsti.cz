import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { TatarskeVpady1500 } from '../../components/Articles/cz/akce/TatarskeVpady1500'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Vpády krymských Tatarů na Polsko a Litvu (od 1500)"
      description="Krymsko-tatarské nájezdy na jagellonské země v období Mengliho I. Gireje"
    />
    <Container>
      <Row>
        <Col className="text">
          <TatarskeVpady1500 />
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
