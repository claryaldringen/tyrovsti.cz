import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BitvaNaKrbavskemPoli } from '../../components/Articles/cz/akce/BitvaNaKrbavskemPoli'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Bitva na Krbavském poli"
      description="Bitva na Krbavském poli (1493) – porážka chorvatské šlechty od Osmanů"
    />
    <Container>
      <Row>
        <Col className="text">
          <BitvaNaKrbavskemPoli />
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
