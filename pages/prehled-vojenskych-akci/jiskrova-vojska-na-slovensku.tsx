import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { JiskrovaVojskaNaSlovensku } from '../../components/Articles/cz/akce/JiskrovaVojskaNaSlovensku'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Působení Jana Jiskry z Brandýsa v Horních Uhrách"
      description="Jan Jiskra z Brandýsa a jeho husitská vojska v Horních Uhrách (1440–1462)"
    />
    <Container>
      <Row>
        <Col className="text">
          <JiskrovaVojskaNaSlovensku />
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
