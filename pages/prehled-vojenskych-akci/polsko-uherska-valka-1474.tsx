import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { PolskoUherskaValka1474 } from '../../components/Articles/cz/akce/PolskoUherskaValka1474'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Vpád Kazimíra Jagellonského do Uher a obležení Vratislavi 1474"
      description="Společné polsko-jagellonské tažení proti Matyáši Korvínovi a obležení Vratislavi (1474)"
    />
    <Container>
      <Row>
        <Col className="text">
          <PolskoUherskaValka1474 />
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
