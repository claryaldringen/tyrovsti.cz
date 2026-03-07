import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_IT } from '../shared/constants'
import { Sella } from '../components/Articles/it/Sella'

const Page = () => (
  <>
    <HeadExtended
      title="Sella"
      description="Articoli della corporazione dei sellai – testo medievale bilingue ceco-italiano"
    />
    <Container>
      <Row>
        <Col className="text">
          <Sella />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_IT,
    dest: { en: '/saddle', de: '/sattel' },
  },
})

export default Page
