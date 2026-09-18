import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { JohnOfEinsiedl } from '../../components/Articles/en/houseOfTeyrzow/JohnOfEinsiedl'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Jan (John) Týřovský of Einsiedl"
      image="erb.png"
      description="Jan Týřovský of Einsiedl – lord of Chříč and Kožlany, died in 1609"
    />
    <Container>
      <Row>
        <Col className="text">
          <JohnOfEinsiedl />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: {
      cs: '/tyrovsti-z-einsiedlu/jan-tyrovsky-z-einsiedlu',
      de: '/tyrovsky-von-einsiedl/johann-von-einsiedl',
      it: '/tyrovsky-di-einsiedl/giovanni-di-einsiedl',
    },
  },
})

export default Page
