import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { ValkaSeSliky1501 } from '../../components/Articles/cz/akce/ValkaSeSliky1501'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Válka českých stavů se Šliky o Loket"
      description="Spor Vladislava II. Jagellonského a rodu Šliků o loketskou enklávu (1501–1505)"
    />
    <Container>
      <Row>
        <Col className="text">
          <ValkaSeSliky1501 />
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
