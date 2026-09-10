import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { OsmanskoUherskaValka14631483 } from '../../components/Articles/cz/akce/OsmanskoUherskaValka14631483'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Osmansko-uherská válka Matyáše Korvína"
      description="Boje o Bosnu a jižní hranici Uher v letech 1463–1483"
    />
    <Container>
      <Row>
        <Col className="text">
          <OsmanskoUherskaValka14631483 />
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
