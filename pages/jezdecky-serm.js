import React from 'react'
import { Menu } from '../components/Menu'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { PraceNohou } from '../components/Articles/cz/PraceNohou'

const Page = () => {
  return (
    <>
      <HeadExtended title="Šerm na koni (Rossfechten)" image="" />
      <Menu />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h2>šerm na koni, tzv. Rossfechten</h2>
              </Col>
            </Row>
            <PraceNohou />
            <Row>
              <Col>
                <h3>Použitá literatura:</h3>
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
