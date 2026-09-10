import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { DobytiNovehoHerstejna1475 } from '../../components/Articles/cz/akce/DobytiNovehoHerstejna1475'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Dobytí Nového Herštejna (1475)"
      description="Dobytí pohraničního hradu Nový Herštejn u Kdyně a smíření Hanse z Degenbergu s Albrechtem IV. Bavorským v roce 1475"
    />
    <Container>
      <Row>
        <Col className="text">
          <DobytiNovehoHerstejna1475 />
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
