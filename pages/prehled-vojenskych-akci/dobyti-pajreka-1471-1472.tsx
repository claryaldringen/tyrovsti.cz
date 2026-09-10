import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { DobytiPajreka } from '../../components/Articles/cz/akce/DobytiPajreka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Dobytí hradu Pajreka"
      description="Dobytí bavorského hradu Pajreka v rámci bocklerské války (1471–1472)"
    />
    <Container>
      <Row>
        <Col className="text">
          <DobytiPajreka />
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
