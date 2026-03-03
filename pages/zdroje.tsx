import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_CS } from '../shared/constants'
import { Zdroje } from '../components/Articles/cz/Zdroje'

const Page = () => (
  <>
    <HeadExtended
      title="Zdroje"
      description="Zdroje a literatura – bibliografie k historii vojenství a odívání 15. století"
    />
    <Container>
      <Row>
        <Col className="text">
          <Zdroje />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: { en: '/bibliography', de: '/bibliographie' },
  },
})

export default Page
