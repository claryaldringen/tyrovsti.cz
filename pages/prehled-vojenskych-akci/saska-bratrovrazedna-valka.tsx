import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { SaskaBratrovrazednaValka } from '../../components/Articles/cz/akce/SaskaBratrovrazednaValka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Saská bratrovražedná válka"
      description="Saská bratrovražedná válka (1446–1451) – spor wettinských bratří Friedricha II. a Viléma III. s mohutnou účastí českých žoldnéřů"
    />
    <Container>
      <Row>
        <Col className="text">
          <SaskaBratrovrazednaValka />
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
