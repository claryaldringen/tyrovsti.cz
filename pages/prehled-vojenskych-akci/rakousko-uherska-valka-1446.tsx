import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { RakouskoUherskaValka1446 } from '../../components/Articles/cz/akce/RakouskoUherskaValka1446'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Tažení Hunyadiho proti Fridrichu III."
      description="Uherský nátlak na vydání Ladislava Pohrobka (1446)"
    />
    <Container>
      <Row>
        <Col className="text">
          <RakouskoUherskaValka1446 />
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
