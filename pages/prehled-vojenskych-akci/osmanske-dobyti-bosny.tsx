import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { OsmanskeDobytiBosny } from '../../components/Articles/cz/akce/OsmanskeDobytiBosny'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Osmanské dobytí Bosny"
      description="Pád Bosenského království a Matyášovo protitažení (1463)"
    />
    <Container>
      <Row>
        <Col className="text">
          <OsmanskeDobytiBosny />
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
