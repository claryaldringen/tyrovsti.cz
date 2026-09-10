import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { HlohovskyDedickySpor } from '../../components/Articles/cz/akce/HlohovskyDedickySpor'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Hlohovský dědický spor"
      description="Spor o slezské Hlohovské knížectví mezi Janem II. Hlohovským, Hohenzollerny a Matyášem Korvínem (1476–1488)"
    />
    <Container>
      <Row>
        <Col className="text">
          <HlohovskyDedickySpor />
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
