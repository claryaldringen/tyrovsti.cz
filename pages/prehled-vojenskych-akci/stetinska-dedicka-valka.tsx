import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { StetinskaDedickaValka } from '../../components/Articles/cz/akce/StetinskaDedickaValka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Štětínská dědická válka"
      description="Spor o pomořanské dědictví mezi Greifeny a Hohenzollerny (1464–1472)"
    />
    <Container>
      <Row>
        <Col className="text">
          <StetinskaDedickaValka />
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
