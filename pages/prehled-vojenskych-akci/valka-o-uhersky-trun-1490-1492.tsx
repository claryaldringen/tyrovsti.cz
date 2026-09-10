import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { ValkaOUherskyTrun14901492 } from '../../components/Articles/cz/akce/ValkaOUherskyTrun14901492'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Válka o uherský trůn 1490–1492"
      description="Boj o nástupnictví po Matyáši Korvínovi, bitva u Košic 1492 a Prešpurský mír"
    />
    <Container>
      <Row>
        <Col className="text">
          <ValkaOUherskyTrun14901492 />
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
      en: '/military-campaigns',
      de: '/feldzuege',
      it: '/campagne-militari',
    },
  },
})

export default Page
