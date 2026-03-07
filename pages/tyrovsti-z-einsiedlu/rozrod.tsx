import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Rozrod } from '../../components/Articles/cz/tyrovsti/Rozrod'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Rozrod Týřovských"
      image="erb.png"
      description="Rozrod Týřovských z Einsiedlu – genealogie a rodové větve"
    />
    <Container>
      <Row>
        <Col className="text">
          <Rozrod />
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
      en: '/tyrovsky-of-einsiedl/family-tree',
      de: '/tyrovsky-von-einsiedl/stammbaum',
      it: '/tyrovsky-di-einsiedl/albero-genealogico',
    },
  },
})

export default Page
