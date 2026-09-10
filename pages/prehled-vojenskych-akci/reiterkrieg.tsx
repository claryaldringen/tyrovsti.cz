import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { Reiterkrieg } from '../../components/Articles/cz/akce/Reiterkrieg'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Reiterkrieg — poslední polsko-řádová válka"
      description="Poslední ozbrojený konflikt mezi Polskem a Řádem německých rytířů (1519–1521)"
    />
    <Container>
      <Row>
        <Col className="text">
          <Reiterkrieg />
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
