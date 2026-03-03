import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { Waldshuterkrieg } from '../../components/Articles/cz/akce/Waldshuterkrieg'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Waldshuterkrieg"
      image="cesi-waldshuterkrieg.jpg"
      description="Waldshuterkrieg (1468) – válka mezi Habsburky a Švýcarským spříseženstvím"
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
    lang: LANG_CS,
    dest: '/military-campaigns/waldshut-war',
  },
})

export default Page
