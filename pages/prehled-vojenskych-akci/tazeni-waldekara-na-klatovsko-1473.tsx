import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { TazeniWaldekaraNaKlatovsko1473 } from '../../components/Articles/cz/akce/TazeniWaldekaraNaKlatovsko1473'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Tažení Wolfganga Waldekara na Klatovsko"
      description="Bavorský vpád Wolfganga Waldekara na Klatovsko (1473)"
    />
    <Container>
      <Row>
        <Col className="text">
          <TazeniWaldekaraNaKlatovsko1473 />
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
