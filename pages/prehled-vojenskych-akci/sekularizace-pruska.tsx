import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { SekularizacePruska } from '../../components/Articles/cz/akce/SekularizacePruska'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Sekularizace pruského řádového státu"
      description="Krakovská smlouva a pruský hold Albrechta Hohenzollerna (1525)"
    />
    <Container>
      <Row>
        <Col className="text">
          <SekularizacePruska />
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
