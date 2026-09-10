import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { UtokKolovratskoVolfstejnskehoKlanuNaChebsko1471 } from '../../components/Articles/cz/akce/UtokKolovratskoVolfstejnskehoKlanuNaChebsko1471'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Útok kolovratsko-volfštejnského klanu na Chebsko (1471)"
      description="Útok kolovratsko-volfštejnské skupiny na Chebsko a chebská odveta v roce 1471"
    />
    <Container>
      <Row>
        <Col className="text">
          <UtokKolovratskoVolfstejnskehoKlanuNaChebsko1471 />
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
