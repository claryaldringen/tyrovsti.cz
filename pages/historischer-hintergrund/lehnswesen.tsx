import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Lehnswesen } from '../../components/Articles/de/lehnswesen/Lehnswesen'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="Lehnswesen"
      description="Das Lehnswesen in Böhmen – feudale Strukturen im Mittelalter"
    />
    <Container>
      <Row>
        <Col className="text">
          <Lehnswesen />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: {
      cs: '/historicke-pozadi/manska-soustava',
      en: '/historical-background/feudal-system',
    },
  },
})

export default Page
