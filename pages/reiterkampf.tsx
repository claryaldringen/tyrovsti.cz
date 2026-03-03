import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { Fussarbeit } from '../components/Articles/de/Fussarbeit'
import { LANG_DE } from '../shared/constants'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Reiterkampf (Rossfechten)"
        image=""
        description="Reiterkampf – die Kunst des berittenen Kampfes im Mittelalter"
      />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h2>Reiterkampf, oder Rossfechten</h2>
              </Col>
            </Row>
            <Fussarbeit />
            <Row>
              <Col>
                <h3>Literaturverzeichnis:</h3>
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
    lang: LANG_DE,
    dest: { cs: '/jezdecky-serm', en: '/equestrian-fencing' },
  },
})
