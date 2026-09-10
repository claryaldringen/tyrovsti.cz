import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BerlichingenovaZasti } from '../../components/Articles/cz/akce/BerlichingenovaZasti'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Záští Götze z Berlichingenu"
      description="Série soukromých záští rytíře se železnou rukou (1512–1517)"
    />
    <Container>
      <Row>
        <Col className="text">
          <BerlichingenovaZasti />
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
