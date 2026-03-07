import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { GuerraDiWaldshut } from '../../components/Articles/it/campagne/GuerraDiWaldshut'
import { LANG_IT } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="La guerra di Waldshut"
      image="cesi-waldshuterkrieg.jpg"
      description="La guerra di Waldshut (1468) – guerra tra gli Asburgo e la Confederazione Svizzera"
    />
    <Container>
      <Row>
        <Col className="text">
          <GuerraDiWaldshut />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_IT,
    dest: {
      cs: '/prehled-vojenskych-akci/waldshuterkrieg',
      en: '/military-campaigns/waldshut-war',
      de: '/feldzuege/waldshuterkrieg',
    },
  },
})

export default Page
