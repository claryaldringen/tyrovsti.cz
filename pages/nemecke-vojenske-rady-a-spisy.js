import React from 'react'
import { Menu } from '../components/Menu'
import { Col, Container, Row } from 'reactstrap'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { UsneseniNorimberske } from '../components/Articles/UsneseniNorimberske'
import { RadVozovyRytiruNemeckych } from '../components/Articles/RadVozovyRytiruNemeckych'
import { VozovyRadFrankfurtsky } from '../components/Articles/VozovyRadFrankfurtsky'
import { NorimberskyRadVozovy } from '../components/Articles/NorimberskyRadVozovy'

const Page = () => {
  return (
    <>
      <Head>
        <title>
          Jošt z Einsiedle a na Týřově - Německé vojenské řády a spisy
        </title>
      </Head>
      <Menu />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h2>Německé vojenské řády a spisy</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>&nbsp;</p>
                <Link href="/images/husite.jpg" target="_blank">
                  <Image src="/images/husite.jpg" width={1994} height={1458} />
                </Link>
                <p>&nbsp;</p>
              </Col>
            </Row>
            <UsneseniNorimberske />
            <RadVozovyRytiruNemeckych />
            <VozovyRadFrankfurtsky />
            <NorimberskyRadVozovy />
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
