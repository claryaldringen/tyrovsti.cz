import React from 'react'
import { Menu } from '../components/Menu'
import { Col, Container, Row } from 'reactstrap'
import Head from 'next/head'

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
                <h3>Řád vozový rytířů Německých ze dne 19. dubna 1433</h3>
                <p>
                  Poznámky k překladu: Termín <i>&bdquo;fuhrweyn&ldquo;</i> jsem
                  po úvaze přeložil jako <i>&bdquo;válečný vůz&ldquo;</i>. Podle
                  popisu se jedná o bytelný vůz, o něco větší než ostatní.
                  <br />
                  Termín <i>&bdquo;warpen&ldquo;</i> je pravděpodobně
                  zkráceninou <i>&bdquo;warpenweyn&ldquo;</i>, což je v pruské
                  němčině vůz pro přepravu vojenského materiálu.
                </p>
                <p>
                  Přeložila PhDr. Zdeňka Kopková, korekce provedl Daniel Burger.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <ol>
                  <li>
                    Zum ersten einen guten, starken, grossen fuhrweyn mit hohen
                    raden, die beslagen sin, und dass der etwas weiter sei, dann
                    andere weyen und darzu gute pferde, funfe oder sechse.
                  </li>
                  <li>
                    Item zum weyen zehn manne und vier oder funf gute armbrost
                    mit sin pfilen im köcher, und iderman einen guten schild.
                  </li>
                  <li>Item zum weyen vier gute lange lotbuchsen.</li>
                  <li>
                    Item zu itzlicher buchsen 4 pfund pulver und zwee schock
                    gelote.
                  </li>
                  <li>Item zum weyen zwee schock pfeile.</li>
                  <li>Item zum weyen zwee glevenien.</li>
                  <li>
                    Item zwee stark ketten, als die fuhrleute pflegen zu führen.
                  </li>
                  <li>
                    Item zu zwenzig weyen eine buchse, die ein stein schiesst
                    alls ein gut haupt.
                  </li>
                  <li>Item zum weyen eine haue, ein spaten und ein schufel.</li>
                  <li>
                    Item zum weyne unden ein brett zweier guter finger dicke,
                    das da reichet an der breite eine spannen von der erden.
                  </li>
                  <li>
                    Item itzlicher gebietiger soll mit seinen leuten und
                    untersassen bestellen, dass man von zween oder drien warpen
                    oder speiseweyen usrichte einen guten fuhrweyn, und dass die
                    leute zusampen spannen und gute vier pferde darzu usrichten.
                  </li>
                </ol>
              </Col>
              <Col md={6}>
                <ol>
                  <li>
                    Jako první dobrý, silný, velký válečný vůz s vysokými koly,
                    která jsou okovaná, a ať je o něco dále než ostatní vozy,
                    pak ostatní vozy a k tomu dobré koně, pět nebo šest.
                  </li>
                  <li>
                    K vozu deset mužů a čtyři nebo pět dobrých kuší a k nim
                    šipky v toulci a každý s dobrým štítem.
                  </li>
                  <li>K vozu čtyři dobré dlouhé tarasnice.</li>
                  <li>
                    Ke každé tarasnici čtyři libry prachu a dvě kopy olověných
                    kulí.
                  </li>
                  <li>K vozu dvě kopy šipek.</li>
                  <li>K vozu dvě kopí.</li>
                  <li>Dva silné řetězy, jaké vozí vozatajové.</li>
                  <li>
                    Ke dvaceti vozům jedno dělo, které střílí kámen velký jako
                    dobrá hlava.
                  </li>
                  <li>K vozu jedna motyka, jeden rýč a jedna lopata.</li>
                  <li>
                    K vozu dole jedna deska, tlustá dobře na dva prsty, aby
                    dostačovala na šířku jedné pídě od země.
                  </li>
                  <li>
                    Každý hejtman má nařídit svými lidem a poddaným, aby byl
                    každý takový válečný vůz vybaven dvěma nebo třemi vozy s
                    proviantem nebo vojenským materiálem a aby lidé společně
                    zapřahali a k tomu použili čtyři dobré koně.
                  </li>
                </ol>
              </Col>
            </Row>
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
