import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { JindrichJakubTyrovsky } from '../../components/Articles/cz/tyrovsti/JindrichJakubTyrovsky'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Jindřich Jakub Týřovský z Einsiedlu"
      image="erb.png"
      description="Jindřich Jakub Týřovský z Einsiedlu – hejtman rakovnického kraje, zemřel roku 1618"
    />
    <Container>
      <Row>
        <Col className="text">
          <JindrichJakubTyrovsky />
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
      en: '/tyrovsky-of-einsiedl/henry-jacob-of-einsiedl',
      de: '/tyrovsky-von-einsiedl/heinrich-jakob-von-einsiedl',
      it: '/tyrovsky-di-einsiedl/enrico-giacomo-di-einsiedl',
    },
  },
})

export default Page
