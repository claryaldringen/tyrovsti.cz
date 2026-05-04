import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { PovstaniSlovenskychHornichMest } from '../../components/Articles/cz/akce/PovstaniSlovenskychHornichMest'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Povstání slovenských horníků v Banské Bystrici"
      description="Hornická vzpoura v hornouherských horních městech (1525–1526)"
    />
    <Container>
      <Row>
        <Col className="text">
          <PovstaniSlovenskychHornichMest />
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
