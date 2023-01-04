import React from 'react'
import { Menu } from '../components/Menu'
import { Col, Container, Row } from 'reactstrap'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

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
            <Row>
              <Col>
                <h4>Usnesení norimberské ze dne 23. dubna 1428</h4>
                <p>Přeložila PhDr. Zdeňka Kopková.</p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <ol>
                  <li>Item einen streitwagen zu bestellen.</li>
                  <li>Item in den städten 10 mann zu einem wagen.</li>
                  <li>Item auf den dörfern 20 mann zu einem wagen.</li>
                  <li>
                    Item zu iglichem wagen zween büchsenschützen mit pulver und
                    bleis genug.
                  </li>
                  <li>
                    Item zween schützen mit armbrust, iglicher schütz 2 schock
                    pfeil.
                  </li>
                  <li>Item 2 mann mit drischeln.</li>
                  <li>
                    Item 2 mann mit spiessen, die hinden an der tülle ein eisen
                    schneidende haken haben.
                  </li>
                  <li>Item 2 mann mit stabschleudern.</li>
                  <li>Item vier starker pferde zu einem wagen.</li>
                  <li>Item 2 stark fuhrmann, die ihre wehre haben.</li>
                  <li>Item ein kurb uf den wagen, da man stein einlist.</li>
                  <li>
                    Item 1 eisene schaufeln, 1 hauen, 1 mulden, 1 axt, 1 stein-
                    pickel.
                  </li>
                  <li>
                    Item ein wagenketten, die als lang sei, als sunst ander drei
                    sind.
                  </li>
                </ol>
              </Col>
              <Col md={6}>
                <ol>
                  <li>Vybavit válečný vůz.</li>
                  <li>Ve městech 10 mužů k jednomu vozu.</li>
                  <li>Na vesnicích 20 mužů k jednomu vozu.</li>
                  <li>
                    Ke každému vozu dva střelce z ručnic s dostatečným množstvím
                    prachu a olova.
                  </li>
                  <li>Dva střelce z kuší, každý střelec 2 kopy šipek.</li>
                  <li>Dva muži s cepy.</li>
                  <li>
                    Dva muži s kopími, která mají vzadu na tuleji želený řezný
                    hák.
                  </li>
                  <li>Dva muži s praky na dřevěné násadě.</li>
                  <li>Čtyři silné koně ke každému vozu.</li>
                  <li>Dva silné vozataje, kteří mají své zbraně.</li>
                  <li>Jeden koš na jeden vůz, aby se naložil kámen.</li>
                  <li>
                    Jedna železná lopata, 1 motyka, 1 díže, 1 sekyra, 1 krumpáč
                    na kamení.
                  </li>
                  <li>
                    Jeden vozový řetěz, který ať je tak dlouhý, jako jinak tři
                    ostatní.
                  </li>
                </ol>
              </Col>
            </Row>

            <Row>
              <Col>
                <h4>Řád vozový rytířů Německých ze dne 19. dubna 1433</h4>
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
                    Každý hejtman musí nařídit svými lidem a poddaným, aby byl
                    každý takový válečný vůz vybaven dvěma nebo třemi vozy s
                    proviantem nebo vojenským materiálem a aby lidé společně
                    zapřahali a k tomu použili čtyři dobré koně.
                  </li>
                </ol>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Vozový řád frankfurtský z roku 1444</h4>
                <p>Přeložila PhDr. Zdeňka Kopková.</p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <p>
                  Ouch haben wir fürgenommen und lüte bestallt mit der
                  wagenburge dem volk zu widerstehn, und sollen tusent wagen,
                  iglicher mit zwein starken knechten, die wohl gefahren können,
                  und vier starken wagen- hengsten, wohl gemähnet und gestallt,
                  mit leitern, zäunen, starken lüssen [leisten], halb mit leinem
                  tuch gedeckt, und unden zwischen den zwein achsen an der
                  langwide ein stark brett an ketten hangen, gestalt, dass man
                  das anhenken und abthun möge, wann man will; und sollen je
                  zween wagen ein ketten haben, die acht ellen lang sei, mit
                  einem ring und einem hacken, dass man die an und abthün möge,
                  wann man will; und sollen zu iglichen wagen zwo handbüchsen,
                  und zu iglicher handbüchsen zum minsten sechzig bleiklötz, und
                  zu zwein wagen ein kammerbüchs und darzu zum minsten dreissig
                  stein, als gross als ein haupt ist, und zu iglichem wagen
                  zween flegel, die beslagen und mit ketten angehenkt sind, zwoo
                  gleen [gleven] und hacken daran, drei setztartschen von borten
                  mit stecken hinden daran, ein schufel, ein haue und ein bickel
                  gehören, und darumb so wollent uwer wagen also zustellen, und
                  auch stein, pulver, blei und pfeil, so ihr meiste mögent mit
                  uch bringen. <br />
                  Dat. ut supra.
                </p>
              </Col>
              <Col md={6}>
                <p>
                  Také máme přijatou objednávku s vozovou hradbou, aby čelila
                  lidem, a musí být postaveno tisíc vozů, každý s dvěma silnými
                  pacholky, které mohou jet, a čtyřmi silnými tažnými hřebci, s
                  žebřinami, bedněním, zesílenými líšněmi (vzpěry u vozu), z
                  poloviny zakrytý lněným plátnem a dole mezi dvěma osami na
                  podélné straně je třeba pověsit silnou desku na řetězy tak,
                  aby se dala zavěsit a sundat, kdykoli člověk chce; a vždy dva
                  vozy musí mít jeden řetěz, který je dlouhý dva lokte, s jedním
                  kruhem a jedním hákem, které lze nasadit a sundat, kdykoli
                  člověk chce; a ke každému vozu musí patřit dvě ručnice a ke
                  každé ručnici nejméně šedesát olověných kulí a ke dvěma vozům
                  jedna komorová puška (rychlice) a k tomu nejméně třicet kamenů
                  velkých jako hlava, a ke každému vozu dva cepy, které jsou
                  okované a ověšené řetězy, dvě glévy (kopí) a na nich háky, tři
                  pavézy s řemeny a holemi vzadu, jedna lopata, jedna motyka,
                  jeden krumpáč; tak tedy chcete svůj vůz vybavit také kameny,
                  prachem, olovem a šipkami, to většinou chcete s sebou přinést.
                </p>
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
