import React from 'react'
import { Menu } from '../components/Menu/Menu'
import { Col, Container, Row } from 'reactstrap'
import Head from 'next/head'
import { KtozJsuBoziBojovnici } from '../components/Articles/KtozJsuBoziBojovnici'
import { NauceniKuKraliVladislavovi } from '../components/Articles/NauceniKuKraliVladislavovi'
import { SnemovniZapisOHotovostiVerejne } from '../components/Articles/SnemovniZapisOHotovostiVerejne'
import { HodetinuvRad } from '../components/Articles/HodetinuvRad'
import { ZizkuvVojenskyRad } from '../components/Articles/ZizkuvVojenskyRad'

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
            <h1>České vojenské řády a spisy</h1>
            <Row>
              <Col>
                <p>
                  Mezi středověké písemnosti, jež nám dávají nahlédnout do
                  poměrů dobového válečnictví, patří tzv. <i>vojenské řády</i>
                  .&nbsp;Byly obvykle sepisovány před nejakým konkrétním tažením
                  a původně se v nich řešily zejména kázeňské a organizační
                  záležitosti. Z doby před 15. stoletím se jich zachovalo
                  poměrně málo. Mezi nejznámější patří{' '}
                  <i>Řád vojenský Fridricha I. Barbarossy</i> z roku 1158.
                  Nejstarším vojenským řádem Švýcarů je pak tzv.{' '}
                  <i>Sempacherbrief</i>, jež byl sepsán v Curychu roku 1393.
                  Tyto dva řády se staly základem a vzorem pro většinu
                  pozdějších písemností tohoto charakteru v německých oblastech.
                  Pokud pomineme spornou dataci tzv. <i>Hodětínova řádu</i>{' '}
                  (různými badateli je kladen mezi roky 1413 až 1431), pak první
                  pokus o zavedení plnohodnotného vojenského řádu učinil Jan
                  Hvězda z Vícemilic v říjnu 1421 v Praze. Tento řád se však
                  nedochoval a zachycujeme jej pouze ve zmínce v Husitské
                  kronice Vavřince z Březové:{' '}
                  <i>
                    aby při výpravách vojenských nikdo bez vůle hejtmanů z
                    vojska se nevracel, aniž z boje, kdyby k němu přišlo, pod
                    ztrátou hrdla a statků žádným obyčejem se nekradl.
                  </i>
                </p>
                <p>
                  Po polovině 15. století vzrůstá počet i kvalita českých i
                  německých vojenských řádů, které se již netýkají pouze
                  kázeňských a organizačních záležitostí, ale zabývají se také
                  vojenskou taktikou a válečným uměním. Vrcholným dílem v tomto
                  směru je bezesporu{' '}
                  <i>
                    Václava Vlčka z Čenova naučení ku králi Vladislavovi, kterak
                    se mají šikovati jízdní, pěší i vozy.
                  </i>
                  , z německých řádů pak stojí za pozornost písemnosti Albrechta
                  III. Achilla.
                </p>
                <p>
                  Zde jsem se pokusil předložit všechny české spisy a zápisy z
                  15. století, týkající se soudobého vojenství.
                </p>
              </Col>
            </Row>
            <KtozJsuBoziBojovnici />
            <ZizkuvVojenskyRad />
            <HodetinuvRad />
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
                  <li>
                    Petr Čornej:{' '}
                    <i>Jan Žižka: Život a doba husitského válečníka</i>, Praha
                    2019
                  </li>
                  <li>
                    Vavřinec z Březové: <i>Husitská kronika</i>, Praha 1979
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
