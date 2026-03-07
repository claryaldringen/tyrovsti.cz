import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { JostTyrovsky } from '../../components/Articles/cz/tyrovsti/JostTyrovsky'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Jošt z Einsiedlu"
      image="erb.png"
      description="Jošt z Einsiedlu a na Týřově – životopis křivoklátského mana a válečníka 15. století"
    />
    <Container>
      <Row>
        <Col className="text">
          <JostTyrovsky />
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
      en: '/tyrovsky-of-einsiedl/jobst-of-einsiedl',
      de: '/tyrovsky-von-einsiedl/jobst-von-einsiedl',
      it: '/tyrovsky-di-einsiedl/jobst-di-einsiedl',
    },
  },
})

export default Page
