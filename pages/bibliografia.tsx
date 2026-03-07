import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_IT } from '../shared/constants'
import { Bibliografia } from '../components/Articles/it/Bibliografia'

const Page = () => (
  <>
    <HeadExtended
      title="Fonti"
      description="Fonti e riferimenti – bibliografia per la storia della guerra e dell'abbigliamento nel XV secolo"
    />
    <Container>
      <Row>
        <Col className="text">
          <Bibliografia />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_IT,
    dest: { cs: '/zdroje', en: '/bibliography', de: '/bibliographie' },
  },
})

export default Page
