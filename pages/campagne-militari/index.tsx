import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { GuerraBavarese } from '../../components/Articles/it/campagne/GuerraBavarese'
import { GuerraDiWaldshut } from '../../components/Articles/it/campagne/GuerraDiWaldshut'
import { LANG_IT } from '../../shared/constants'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Panoramica delle campagne militari 1434–1525"
        image="orsha.jpg"
        description="Panoramica delle campagne militari – battaglie e campagne nel XV secolo"
      />
      <Container>
        <Row>
          <Col className="text">
            <h1>Panoramica delle campagne militari 1434–1525</h1>
            <GuerraBavarese />
            <GuerraDiWaldshut />
            <Sources />
            <Payment />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_IT,
    dest: {
      cs: '/prehled-vojenskych-akci',
      en: '/military-campaigns',
      de: '/feldzuege',
    },
  },
})

export default Page
