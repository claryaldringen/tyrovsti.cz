import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { GuerraBavarese } from '../../components/Articles/it/campagne/GuerraBavarese'
import { LANG_IT } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="La guerra bavarese"
      image="LudvikIX.jpg"
      description="La guerra bavarese (1504) – la guerra di successione di Landshut"
    />
    <Container>
      <Row>
        <Col className="text">
          <GuerraBavarese />
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
      cs: '/prehled-vojenskych-akci/bavorska-valka',
      en: '/military-campaigns/bavarian-war',
      de: '/feldzuege/bayerischer-krieg',
    },
  },
})

export default Page
