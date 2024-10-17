import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { JostTyrovsky } from '../../components/Articles/cz/tyrovsti/JostTyrovsky'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended title="Jošt z Einsiedlu" image="erb.png" />
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
    dest: '/tyrovsky-of-einsiedl/jobst-of-einsiedl',
  },
})

export default Page
