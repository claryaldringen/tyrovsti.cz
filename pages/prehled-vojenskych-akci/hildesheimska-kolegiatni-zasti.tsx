import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { HildesheimskaKolegiatniZasti } from '../../components/Articles/cz/akce/HildesheimskaKolegiatniZasti'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Hildesheimská kolegiátní záští"
      description="Záští mezi biskupstvím Hildesheim a welfskými vévody (1519–1523)"
    />
    <Container>
      <Row>
        <Col className="text">
          <HildesheimskaKolegiatniZasti />
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
