import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_DE } from '../shared/constants'
import { WieManKeineFechtgruppeGruendet } from '../components/Articles/de/WieManKeineFechtgruppeGruendet'

const Page = () => (
  <>
    <HeadExtended
      title="Wie man (keine) Fechtgruppe gründet"
      description="Wie man keine historische Fechtgruppe gründet – ein satirischer Leitfaden"
    />
    <Container>
      <Row>
        <Col className="text">
          <WieManKeineFechtgruppeGruendet />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: {
      cs: '/kterak-nevytvorit-skupinu-historickeho-sermu',
      en: '/how-not-to-create-a-hema-group',
    },
  },
})

export default Page
