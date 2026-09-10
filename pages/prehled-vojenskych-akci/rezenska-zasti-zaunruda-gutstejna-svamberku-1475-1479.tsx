import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { RezenskaZastiZaunrudaGutstejnaSvamberku14751479 } from '../../components/Articles/cz/akce/RezenskaZastiZaunrudaGutstejnaSvamberku14751479'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Řezenská záští Žeberka, Zaunruda, Gutštejna a Švamberků"
      description="Pohraniční záští českých pánů s říšským městem Řeznem (1475–1479)"
    />
    <Container>
      <Row>
        <Col className="text">
          <RezenskaZastiZaunrudaGutstejnaSvamberku14751479 />
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
