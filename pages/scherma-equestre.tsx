import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LavoroDiPiedi } from '../components/Articles/it/LavoroDiPiedi'
import { LANG_IT } from '../shared/constants'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Combattimento a cavallo (Rossfechten)"
        image=""
        description="Scherma equestre – l'arte del combattimento a cavallo nel Medioevo"
      />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h2>Combattimento a cavallo, o Rossfechten</h2>
              </Col>
            </Row>
            <LavoroDiPiedi />
            <Row>
              <Col>
                <h3>Bibliografia:</h3>
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
    lang: LANG_IT,
    dest: {
      cs: '/jezdecky-serm',
      en: '/equestrian-fencing',
      de: '/reiterkampf',
    },
  },
})
