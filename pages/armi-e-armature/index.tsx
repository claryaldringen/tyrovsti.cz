import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import { Sources } from '../../components/Quote/Sources'
import { IntroduzioneArmi } from '../../components/Articles/it/armi/IntroduzioneArmi'
import { Payment } from '../../components/Payment'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Armi e armature"
        description="Armi e armature – panoramica delle armi e delle armature nella Boemia del XV secolo"
      />
      <Container>
        <Row>
          <Col className="text">
            <h1>Armi e armature</h1>
            <IntroduzioneArmi />
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
      cs: '/vyzbroj-a-vystroj',
      en: '/arms-and-armour',
      de: '/waffen-und-ruestung',
    },
  },
})

export default Page
