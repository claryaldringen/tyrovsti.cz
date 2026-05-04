import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { ZastiElsenberguNothaftuProtiVirspekum1471 } from '../../components/Articles/cz/akce/ZastiElsenberguNothaftuProtiVirspekum1471'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Záští Elsenbergů a Nothaftů proti Viršperkům (1471)"
      description="Záští horno-falcké koalice Elsenbergů, Nothaftů, Wallenfelsů a Wildensteinerů proti Viršperkům a Cedvicům v roce 1471"
    />
    <Container>
      <Row>
        <Col className="text">
          <ZastiElsenberguNothaftuProtiVirspekum1471 />
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
