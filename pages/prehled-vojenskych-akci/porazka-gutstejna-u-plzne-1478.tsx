import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { PorazkaGutstejnaUPlzne1478 } from '../../components/Articles/cz/akce/PorazkaGutstejnaUPlzne1478'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Porážka Buriana z Gutštejna u Plzně"
      description="Porážka Buriana z Gutštejna u Plzně a tažení Jana Planknára proti Chebsku (1478)"
    />
    <Container>
      <Row>
        <Col className="text">
          <PorazkaGutstejnaUPlzne1478 />
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
