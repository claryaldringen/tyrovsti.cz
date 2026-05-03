import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { KaplirovoZastiPasov } from '../../components/Articles/cz/akce/KaplirovoZastiPasov'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Záští Kaplíře z Vimperka"
      description="Záští Mikuláše Kaplíře z Vimperka s pasovským biskupem (1458–1460)"
    />
    <Container>
      <Row>
        <Col className="text">
          <KaplirovoZastiPasov />
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
