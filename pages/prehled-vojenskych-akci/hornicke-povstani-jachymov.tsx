import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { HornickePovstaniJachymov } from '../../components/Articles/cz/akce/HornickePovstaniJachymov'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Hornické povstání v Jáchymově"
      description="Vzpoura krušnohorských horníků proti šlikovské správě (1525)"
    />
    <Container>
      <Row>
        <Col className="text">
          <HornickePovstaniJachymov />
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
