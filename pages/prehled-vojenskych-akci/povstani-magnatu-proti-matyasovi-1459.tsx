import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { PovstaniMagnatuProtiMatyasovi1459 } from '../../components/Articles/cz/akce/PovstaniMagnatuProtiMatyasovi1459'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Povstání magnátů proti Matyášovi"
      description="Volba Fridricha III. uherským králem (1459)"
    />
    <Container>
      <Row>
        <Col className="text">
          <PovstaniMagnatuProtiMatyasovi1459 />
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
