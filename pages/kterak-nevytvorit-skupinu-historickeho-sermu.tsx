import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_CS } from '../shared/constants'
import { KterakNeVytvoritSkupinu } from '../components/Articles/cz/KterakNeVytvoritSkupinu'

const Page = () => (
  <>
    <HeadExtended
      title="Kterak (ne)vytvořit skupinu historického šermu"
      description="Kterak nevytvořit skupinu historického šermu – satirický průvodce"
    />
    <Container>
      <Row>
        <Col className="text">
          <KterakNeVytvoritSkupinu />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: '/how-not-to-create-a-hema-group',
  },
})

export default Page
