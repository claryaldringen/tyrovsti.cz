import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { SonsOfHenry } from '../../components/Articles/en/houseOfTeyrzow/SonsOfHenry'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Henry's sons of Einsiedl"
      image="erb.png"
      description="The sons of Jindřich Týřovský of Einsiedl and the division of the family, 1556–1578"
    />
    <Container>
      <Row>
        <Col className="text">
          <SonsOfHenry />
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
      cs: '/tyrovsti-z-einsiedlu/synove-jindrichovi',
      de: '/tyrovsky-von-einsiedl/soehne-heinrichs',
      it: '/tyrovsky-di-einsiedl/figli-di-enrico',
    },
  },
})

export default Page
