import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { LandshutskaDedickaValka } from '../../components/Articles/cz/akce/LandshutskaDedickaValka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Landshutská dědická válka"
      description="Bavorský dědický spor a bitva u Wenzenbachu (1503–1505)"
    />
    <Container>
      <Row>
        <Col className="text">
          <LandshutskaDedickaValka />
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
