import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { FamilyTree } from '../../components/Articles/en/houseOfTeyrzow/FamilyTree'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Týřovský of Einsiedl - Family Tree"
      description="Family tree of the Týřovský of Einsiedl family – genealogy and branches"
    />
    <Container>
      <Row>
        <Col className="text">
          <FamilyTree />
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
      cs: '/tyrovsti-z-einsiedlu/rozrod',
      de: '/tyrovsky-von-einsiedl/stammbaum',
    },
  },
})

export default Page
