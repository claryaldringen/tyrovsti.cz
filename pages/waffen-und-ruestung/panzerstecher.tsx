import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Panzerstecher } from '../../components/Articles/de/ruestung/Panzerstecher'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Panzerstecher"
      description="Panzerstecher – eine Stichwaffe zum Durchdringen von Rüstungen im 15. Jahrhundert"
    />
    <Container>
      <Row>
        <Col className="text">
          <Panzerstecher />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: {
      cs: '/vyzbroj-a-vystroj/estok',
      en: '/arms-and-armour/estoc',
      it: '/armi-e-armature/stocco',
    },
  },
})

export default Page
