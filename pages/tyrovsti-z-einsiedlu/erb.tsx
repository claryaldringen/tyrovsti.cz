import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Erb } from '../../components/Articles/cz/tyrovsti/Erb'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Erb Týřovských z Einsiedlu"
      image="erb.png"
      description="Erb Týřovských z Einsiedlu – heraldický rozbor rodového znaku"
    />
    <Container>
      <Row>
        <Col className="text">
          <Erb />
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
      en: '/tyrovsky-of-einsiedl/coat-of-arms',
      de: '/tyrovsky-von-einsiedl/wappen',
    },
  },
})

export default Page
