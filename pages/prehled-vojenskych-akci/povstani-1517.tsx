import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { Povstani1517 } from '../../components/Articles/cz/akce/Povstani1517'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Povstání nižší šlechty proti Zikmundu z Lobkovic"
      description="Stavovský konflikt a Svatováclavská smlouva (1517)"
    />
    <Container>
      <Row>
        <Col className="text">
          <Povstani1517 />
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
