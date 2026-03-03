import { HeadExtended } from '../components/HeadExtended'
import { LANG_CS } from '../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Taktika } from '../components/Articles/cz/Taktika'

const Page = () => (
  <>
    <HeadExtended
      title="Jošt z Einsiedle a na Týřově - Taktika"
      description="Středověká taktika – vývoj pěchotní a jezdecké taktiky od Falkirku po Moháč"
    />
    <Container>
      <Row>
        <Col className="text">
          <Taktika />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: '/tactics',
  },
})

export default Page
