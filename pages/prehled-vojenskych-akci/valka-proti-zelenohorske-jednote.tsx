import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { ValkaProtiZelenohorskeJednote } from '../../components/Articles/cz/akce/ValkaProtiZelenohorskeJednote'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Válka Jiřího z Poděbrad proti Zelenohorské jednotě"
      description="Domácí válka katolické šlechty proti králi a její přerod v česko-uherský konflikt (1465–1471)"
    />
    <Container>
      <Row>
        <Col className="text">
          <ValkaProtiZelenohorskeJednote />
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
