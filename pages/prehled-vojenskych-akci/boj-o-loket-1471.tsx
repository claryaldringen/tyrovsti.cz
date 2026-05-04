import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BojOLoket1471 } from '../../components/Articles/cz/akce/BojOLoket1471'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Boj o Loket a záští na bayreuthské hranici (1471)"
      description="Spor o královský hrad Loket mezi Šliky, Gutštejny a markrabětem Albrechtem Achillem v roce 1471"
    />
    <Container>
      <Row>
        <Col className="text">
          <BojOLoket1471 />
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
