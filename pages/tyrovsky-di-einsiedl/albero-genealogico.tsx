import { HeadExtended } from '../../components/HeadExtended'
import { LANG_IT } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { AlberoGenealogico } from '../../components/Articles/it/casaTyrovsky/AlberoGenealogico'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Tyrovsky di Einsiedl - Albero genealogico"
      description="Albero genealogico della famiglia Tyrovsky di Einsiedl - genealogia e rami"
    />
    <Container>
      <Row>
        <Col className="text">
          <AlberoGenealogico />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_IT,
    dest: {
      cs: '/tyrovsti-z-einsiedlu/rozrod',
      en: '/tyrovsky-of-einsiedl/family-tree',
      de: '/tyrovsky-von-einsiedl/stammbaum',
    },
  },
})

export default Page
