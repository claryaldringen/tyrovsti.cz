import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BojOLenoOstrohSeeberg14741475 } from '../../components/Articles/cz/akce/BojOLenoOstrohSeeberg14741475'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Boj o léno Ostroh/Seeberg na Chebsku (1474–1475)"
      description="Spor o chebský zástavní hrad Ostroh (Seeberg) v letech 1474 až 1475 a jeho urovnání za Vladislava II. Jagellonského"
    />
    <Container>
      <Row>
        <Col className="text">
          <BojOLenoOstrohSeeberg14741475 />
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
