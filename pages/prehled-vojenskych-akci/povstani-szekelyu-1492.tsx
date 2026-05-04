import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { PovstaniSzekelyu1492 } from '../../components/Articles/cz/akce/PovstaniSzekelyu1492'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Povstání Sikulů 1492"
      description="Povstání Sikulů (Székelyů) v Sedmihradsku po smrti Matyáše Korvína"
    />
    <Container>
      <Row>
        <Col className="text">
          <PovstaniSzekelyu1492 />
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
