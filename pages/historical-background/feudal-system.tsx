import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { FeudalSystem } from '../../components/Articles/en/feudalSystem/FeudalSystem'
import { KrivoklatFeudalSystem } from '../../components/Articles/en/feudalSystem/KrivoklatFeudalSystem'
import { LANG_EN } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="The Feudal System"
      image="Krivoklat_19_stol.jpg"
      description="The feudal system in Bohemia – a medieval system of service obligations"
    />
    <Container>
      <Row>
        <Col className="text">
          <FeudalSystem />
          <KrivoklatFeudalSystem />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: {
      cs: '/historicke-pozadi/manska-soustava',
      de: '/historischer-hintergrund/lehnswesen',
      it: '/sfondo-storico/sistema-feudale',
    },
  },
})

export default Page
