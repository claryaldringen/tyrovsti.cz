import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { OsmanskoUherskaValka15211526 } from '../../components/Articles/cz/akce/OsmanskoUherskaValka15211526'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Osmansko-uherská válka Sulejmana I."
      description="Pád Bělehradu, Rhodu a bitva u Moháče (1521–1526)"
    />
    <Container>
      <Row>
        <Col className="text">
          <OsmanskoUherskaValka15211526 />
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
