import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Waldshuterkrieg } from '../../components/Articles/de/feldzuege/Waldshuterkrieg'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Waldshuterkrieg"
      description="Der Waldshuterkrieg – ein Grenzkonflikt im 15. Jahrhundert"
    />
    <Container>
      <Row>
        <Col className="text">
          <Waldshuterkrieg />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: {
      cs: '/prehled-vojenskych-akci/waldshuterkrieg',
      en: '/military-campaigns/waldshut-war',
      it: '/campagne-militari/guerra-di-waldshut',
    },
  },
})

export default Page
