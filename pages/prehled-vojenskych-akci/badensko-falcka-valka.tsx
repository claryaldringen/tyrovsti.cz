import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BadenskoFalckaValka } from '../../components/Articles/cz/akce/BadenskoFalckaValka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Badensko-falcká válka"
      description="Konflikt Fridricha I. Falckého s Karlem I. Bádenským (1461–1462)"
    />
    <Container>
      <Row>
        <Col className="text">
          <BadenskoFalckaValka />
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
