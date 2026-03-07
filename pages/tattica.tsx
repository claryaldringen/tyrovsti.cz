import { HeadExtended } from '../components/HeadExtended'
import { LANG_IT } from '../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Tattica } from '../components/Articles/it/Tattica'

const Page = () => (
  <>
    <HeadExtended
      title="Tattica"
      description="Tattica medievale – lo sviluppo della tattica di fanteria e cavalleria da Falkirk a Mohács"
    />
    <Container>
      <Row>
        <Col className="text">
          <Tattica />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_IT,
    dest: { cs: '/taktika', en: '/tactics', de: '/taktik' },
  },
})

export default Page
