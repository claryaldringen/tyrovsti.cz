import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { DobytiDegenberga1468 } from '../../components/Articles/cz/akce/DobytiDegenberga1468'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Dobytí Degenberga 1468"
      description="Pád rodového hradu Hanse z Degenbergu a konfiskace furthského Winkelu vévodou Albrechtem IV. v rámci bocklerské války (1468)"
    />
    <Container>
      <Row>
        <Col className="text">
          <DobytiDegenberga1468 />
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
