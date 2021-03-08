import { Menu } from '../components/Menu'
import { Col, Container, Row } from 'reactstrap'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <>
      <Head>
        <title>Jošt z Einsiedle a na Týřově - Historické pozadí</title>
      </Head>
      <Menu />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h1>Historické pozadí</h1>
                <p>
                  Po smrti císaře Zikmunda <b>9.&nbsp;prosince&nbsp;1437</b> byl
                  v zvolen českým králem jeho zeť Albrecht. Musel čelit silné
                  opozici, která podporovala kandidaturu polského prince
                  Kazimíra na český trůn.
                </p>
                <p>
                  Po Albrechtově smrti <b>27.&nbsp;října&nbsp;1439</b> se
                  situace zkomplikovala. Narodil se mu syn Ladislav, zvaný
                  Pohrobek, jehož poručníkem se stal císař Fridrich III., který
                  Ladislavovy neplnoletosti využíval ke svým politickým cílům. V
                  Čechách v období mezivládí panovala feudální anarchie. Vzrostl
                  význam krajských sjezdů - landfrídů, které fakticky
                  zajišťovaly vládu v jednotlivých krajích země. Šlechta
                  využívala bezvládí k upevňování svých politických pozic na
                  úkor ústřední panovnické moci. V 50. letech 15. století byl
                  nejsilnější silou v zemi svaz landfrídů z východních Čech v
                  čele s ambiciózním Jiřím z Poděbrad. Ten využil politických
                  potíží císaře Fridricha III. a prosadil Ladislava Pohrobka za
                  českého krále. Ladislav (již od roku 1445 uherský král) přišel
                  do Čech v roce 1453 jako volený král, ne tedy z titulu
                  nástupnických práv po otci. To byl důležitý úspěch českých
                  stavů. Jiří vládl za královy nezletilosti v Čechách jako
                  regent. Když král <b>23.&nbsp;listopadu&nbsp;1457</b> zemřel,
                  ocitla se země opět před nutností výběru panovníka . Jiří
                  využil toho, že se opozice nemohla shodnout na kandidátovi.
                  Podařilo se mu „koupit” její nejmocnější představitele Jana z
                  Rožmberka a Zdeňka ze Šternberka, a tak roku 1458 dosáhl svého
                  zvolení za českého krále. V počátečním období vlády se mu
                  celkem dařilo udržovat mocenskou rovnováhu v zemi a zajišťovat
                  si mezinárodní uznání. Obrat nastal ve chvílí, kdy si papežská
                  kurie uvědomila, že Jiří nehodlá provádět rekatolizaci a
                  zůstává tolerantní vůči utrakvistům. Papež Pius II. zrušil v
                  roce 1462 kompaktáta a zahájil akce, které měly vést ke změně
                  na českém trůně. Jiří odpověděl diplomatickou protiofenzívou.
                  Využil hrozby tureckého vpádu do střední Evropy a za pomoci
                  svých rádců vypracoval projekt na vytvoření mezinárodní mírové
                  unie. Rozsáhlá diplomatická akce přinášející myšlenku
                  kolektivního zajištění bezpečnosti však předběhla dobu a
                  bohužel skončila bez adekvátního výsledku.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="image-wrapper">
                <Link href="/images/m921.033ra.jpg" target="_blank">
                  <Image
                    src="/images/m921.033ra.jpg"
                    width={915}
                    height={600}
                  />
                </Link>
                <br />
                Vyobrazení Jiřího z Poděbrad na výřezu z Hodinek, které pro něj nechala zhotovit jeho manželka Johana z Rožmitálu, Praha, 1466
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Mezitím se v zemi aktivizovala opozice z řad katolické
                  šlechty. V roce 1465 vytvořila tzv. Zelenohorskou jednotu a
                  zahájila odpor proti králi. Právně se kryla rozhodnutím
                  papeže, který zprostil poddané českého krále poslušnosti vůči
                  panovníkovi a vyhlásil roku 1466 na Jiřího z Poděbrad klatbu.
                  Domácí opozice neměla dostatek vlivu ke zvrácení poměru sil ve
                  svůj prospěch. Obrat přinesl neuvážený vpád Jiříkova syna
                  Viktorína do Rakous v roce 1468. Fridrich III. požádal o pomoc
                  uherského krále Matyáše, pro něhož to byla vítaná záminka k
                  zásahu do českých záležitostí. Využil podpory papeže a
                  skutečnosti, že Jiřího neuznávala některá moravská města a
                  část Slezska a Lužice, a zahájil válku s cílem získat českou
                  korunu pro sebe. Tato válka trvala až do smrti Jiřího z
                  Poděbrad <b>22.&nbsp;března&nbsp;1471</b>. Jiří se vzdal
                  následnictví svých synů na českém trůně ve prospěch
                  kandidatury polského prince Vladislava. Ten byl v roce 1471
                  zvolen českým králem. Jeho vláda byla vyplněna válkami s
                  Matyášem až do roku 1478, kdy byla uzavřena kompromisní
                  dohoda, podle níž si oba ponechali titul českého krále. K
                  definitivnímu rozuzlení situace došlo v roce 1490, kdy král
                  Matyáš zemřel bez potomků.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
