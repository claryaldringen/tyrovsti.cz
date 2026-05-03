import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { RakouskyBratrovrazednaValka } from '../../components/Articles/cz/akce/RakouskyBratrovrazednaValka'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Rakouská bratrovražedná válka"
      description="Spor Fridricha III. s bratrem Albrechtem VI. (1458–1463)"
    />
    <Container>
      <Row>
        <Col className="text">
          <RakouskyBratrovrazednaValka />
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
