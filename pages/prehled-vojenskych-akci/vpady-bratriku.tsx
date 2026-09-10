import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { VpadyBratriku } from '../../components/Articles/cz/akce/VpadyBratriku'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Vpády bratříků na Moravu a do Slezska"
      description="Bratřické polní oddíly mezi husitstvím a Matyášem Korvínem (1440–1467)"
    />
    <Container>
      <Row>
        <Col className="text">
          <VpadyBratriku />
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
