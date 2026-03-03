import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { Footwork } from '../components/Articles/en/Footwork'
import { LANG_EN } from '../shared/constants'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Mounted Combat (Rossfechten)"
        image=""
        description="Equestrian fencing – the art of mounted combat in the Middle Ages"
      />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h2>Mounted Combat, or Rossfechten</h2>
              </Col>
            </Row>
            <Footwork />
            <Row>
              <Col>
                <h3>Bibliography:</h3>
                <ul>
                  <li>
                    Apollonia Zawmstricker:&nbsp;
                    <i>Rossfechten Footwork</i>, Lauchröden 2023
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: { cs: '/jezdecky-serm', de: '/reiterkampf' },
  },
})
