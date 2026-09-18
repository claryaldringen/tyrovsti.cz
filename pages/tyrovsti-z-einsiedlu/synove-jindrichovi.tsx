import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { SynoveJindrichovi } from '../../components/Articles/cz/tyrovsti/SynoveJindrichovi'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Jindřichovi synové"
      image="erb.png"
      description="Jindřichovi synové a rozdělení rodu Týřovských z Einsiedlu v letech 1556–1578"
    />
    <Container>
      <Row>
        <Col className="text">
          <SynoveJindrichovi />
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
      en: '/tyrovsky-of-einsiedl/sons-of-henry',
      de: '/tyrovsky-von-einsiedl/soehne-heinrichs',
      it: '/tyrovsky-di-einsiedl/figli-di-enrico',
    },
  },
})

export default Page
