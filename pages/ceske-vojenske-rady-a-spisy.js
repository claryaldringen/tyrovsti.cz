import React from 'react'
import { Menu } from '../components/Menu/Menu'
import { Col, Container, Row } from 'reactstrap'
import Head from 'next/head'
import { KtozJsuBoziBojovnici } from '../components/Articles/KtozJsuBoziBojovnici'
import { NauceniKuKraliVladislavovi } from '../components/Articles/NauceniKuKraliVladislavovi'
import { SnemovniZapisOHotovostiVerejne } from '../components/Articles/SnemovniZapisOHotovostiVerejne'

const Page = () => {
  return (
    <>
      <Head>
        <title>
          Jošt z Einsiedle a na Týřově - České vojenské řády a spisy
        </title>
      </Head>
      <Menu />
      <Container>
        <Row>
          <Col className="text">
            <KtozJsuBoziBojovnici />
            <SnemovniZapisOHotovostiVerejne />
            <NauceniKuKraliVladislavovi />
            <Row>
              <Col>
                <h3>Použitá literatura:</h3>
                <ul>
                  <li>
                    Hugo Toman:{' '}
                    <i>Husitské válečnictví za doby Žižkovy a Prokopovy</i>,
                    Praha 1898
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
