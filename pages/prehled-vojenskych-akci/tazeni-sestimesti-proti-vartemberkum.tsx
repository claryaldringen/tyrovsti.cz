import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { TazeniSestimestiProtiVartemberkum } from '../../components/Articles/cz/akce/TazeniSestimestiProtiVartemberkum'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Tažení Lužického šestiměstí proti Vartemberkům"
      description="Tažení hornolužických měst proti loupežnickému záští Bohuslava ze Vartemberka (1444–1450)"
    />
    <Container>
      <Row>
        <Col className="text">
          <TazeniSestimestiProtiVartemberkum />
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
