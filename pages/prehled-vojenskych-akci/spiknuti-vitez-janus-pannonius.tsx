import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { SpiknutiVitezJanusPannonius } from '../../components/Articles/cz/akce/SpiknutiVitezJanusPannonius'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Spiknutí Jana Vitéze a Januse Pannonia proti Matyášovi"
      description="Spiknutí ostřihomského arcibiskupa a pětikostelského biskupa proti Matyáši Korvínovi (1471–1472)"
    />
    <Container>
      <Row>
        <Col className="text">
          <SpiknutiVitezJanusPannonius />
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
