import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { KrivoklatFeudalSystem } from '../../components/Articles/en/feudalSystem/KrivoklatFeudalSystem'
import { Payment } from '../../components/Payment'

const Page = () => (
  <>
    <HeadExtended
      title="The Křivoklát Feudal System"
      image="Krivoklat_19_stol.jpg"
      description="The Křivoklát feudal system – structure and operation of the vassal system at Křivoklát Castle"
    />
    <Container>
      <Row>
        <Col className="text">
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
      cs: '/historicke-pozadi/krivokladska-manska-soustava',
      de: '/historischer-hintergrund/krivoklater-lehnswesen',
    },
  },
})

export default Page
