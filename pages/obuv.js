import { Menu } from '../components/Menu'
import { Col, Container, Row } from 'reactstrap'
import Image from 'next/image'
import Head from 'next/head'

const Page = () => {
  return (
    <>
      <Head>
        <title>Jošt z Einsiedle a na Týřově - Spodní oděv</title>
      </Head>
      <Menu />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h2>Obuv</h2>
                <p>
                  Obuv v Čechách ve 2. polovině 15. století můžeme rozdělit na
                  nízkou, polovysokou a vysokou. Obuv byla nejčastěji zhotovena
                  z kůže tak, že se sešila podešev se svrškem a bota se
                  převrátila naruby (tzv. převracená obuv). Mezi podešev a
                  svršek se vkládal pásek kůže, tzv. rám. Na tento rám se v
                  západní Evropě zhruba od roku 1500 začala našívat druhá
                  podešev a vznikla tak rámová obuv, což je konstrukce, která se
                  u společenské obuvi používá dodnes. Cílem konstrukce
                  středověkké boty bylo schovat všechny důležité švy uvnitř. V
                  Čechách se až do začátku 16. století používala na obuvi
                  umírněná špička.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="image-wrapper">
                <a href="/images/fig5g.png" target="_blank">
                  <Image src="/images/fig5g.png" width={400} height={360} />
                </a>
                <br />
                Způsob přišití svršku a podešve v 15. století (Goubitz)
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Kromě svršku, podešve a rámu obsahovala bota zpravidla ještě
                  několik částí - opatek, obrubu a nějakou variantu zapínání či
                  šněrování.
                </p>
                <h3>Zapínání</h3>
                <h4>Zapínání s přesahem</h4>
                <p>
                  Zapínání s přesahem znamená, že část kůže na svršku překrývá
                  otevřenou část boty a je sepnuta po straně kolíčkem nebo
                  přezkou. Funkce je velmi podobná jako u zapínání pomocí
                  chlopně, hlavním rozdílem však je, že chlopeň je k botě
                  přišitá zlvášť. Přesto není jednoduché tyto dva typy v
                  nálezech a na vyobrazeních rozlišit a často splývají
                  dohromady. Tento typ zpínání byl nejpopulárnější mezi 8. a 13.
                  stoletím, v 15. století se již vyskytuje velmi sporadicky
                  (např. nález z Fribourgu ve Švýcarsku, kde je přesah opatřen
                  dvěma pásky, které se v oblasti kotníků spínají pomocí dvou
                  přezek).
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="image-wrapper">
                <a href="/images/fig16.png" target="_blank">
                  <Image src="/images/fig16.png" width={400} height={360} />
                </a>
                <br />
                Criblet, Fribourg, Švýcarsko. Bota se zapínáním pomocí přesahu a
                s přezkami. 14. až 15. století (Volgen & Bourgarel 2001)
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Zapínání pomocí záhybu</h4>
                <p>
                  Princip zapínání je velmi podobný, jako u zapínání s přesahem,
                  ale botě úplně chybí otevřená část na nártu. Místo ní je zde
                  velký záhyb, který se pomocí knoflíků, přezek nebo háčků sepne
                  po straně. Tento typ zapínání byl velice populární ve 14., 15.
                  a 16. století, zejména u vysokých bot.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig6.png" target="_blank">
                  <Image src="/images/fig6.png" width={540} height={800} />
                </a>
                <br />
                Dordrecht, Nizozemí. Kotníková bota se záhybem na zapínání,
                zobrazená rozepnutá a zapnutá. 15. století.
              </Col>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig7.png" target="_blank">
                  <Image src="/images/fig7.png" width={520} height={466} />
                </a>
                <br />
                Vevey, Švýcarsko. Bota se zapínáním pomocí záhybu. 14. - 15.
                století.
              </Col>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig14.png" target="_blank">
                  <Image src="/images/fig14.png" width={520} height={466} />
                </a>
                <br />
                Coventry, Anglie, 15. století.
              </Col>
            </Row>
            <Row>
              <Col md={3} className="image-wrapper">
                <a href="/images/zahyb-jensky.jpg" target="_blank">
                  <Image
                    src="/images/zahyb-jensky.jpg"
                    width={600}
                    height={800}
                  />
                </a>
                <br />
                Vysoká jezdecká bota se zapínáním na záhyb, výřez z Jenského
                kodexu (1490-1510)
              </Col>
              <Col md={3} className="image-wrapper">
                <a href="/images/zahyb-richental1.jpg" target="_blank">
                  <Image
                    src="/images/zahyb-richental1.jpg"
                    width={600}
                    height={800}
                  />
                </a>
                <br />
                Vysoká jezdecká bota se zapínáním na záhyb, výřez z Richentalovy
                kroniky (1470-1480)
              </Col>
              <Col md={3} className="image-wrapper">
                <a href="/images/zahyb-richental2.jpg" target="_blank">
                  <Image
                    src="/images/zahyb-richental2.jpg"
                    width={600}
                    height={800}
                  />
                </a>
                <br />
                Kotníková bota se zapínáním na záhyb, výřez z Richentalovy
                kroniky (1470-1480)
              </Col>
              <Col md={3} className="image-wrapper">
                <a href="/images/zahyb-durer.jpg" target="_blank">
                  <Image
                    src="/images/zahyb-durer.jpg"
                    width={600}
                    height={800}
                  />
                </a>
                <br />
                Vysoká jezdecká bota se zapínáním na záhyb, výřez z
                Paumgartnerova oltáře (1500)
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Zapínání na nártový pásek u otevřených bot</h4>
                <p>
                  Toto zapínání se vyskytuje u nízkých otevřených bot (střevíců)
                  od 14. do 16. století. Je charakteristické páskem, který vede
                  přes nárt a spíná se na kolíček, přezku nebo se váže do
                  uzlíku.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="image-wrapper">
                <a href="/images/fig5abc.png" target="_blank">
                  <Image src="/images/fig5abc.png" width={400} height={720} />
                </a>
                <br />
                Tři příklady střevíců s páskem přes nárt spínaným přezkou z 15.
                století.
                <br />
                Nahoře: Dordrecht, Nizozemí.
                <br />
                Uprostřed: Šlesvik, Německo.
                <br />
                Dole: Londýn, Anglie.
              </Col>
              <Col md={6} className="image-wrapper">
                <a href="/images/reminek-nart-durer.jpg" target="_blank">
                  <Image
                    src="/images/reminek-nart-durer.jpg"
                    width={1200}
                    height={1600}
                  />
                </a>
                <br />
                Tato kotníková bota, sice přesně neodpovídá popsanému typu,
                neboť se nejedná o otevřený střevíc, ale princip zapínání na
                nártový řemínek s přezkou je zde dobře patrný. Výřez pochází z
                obrazu Albrechta Dürera Lot a jeho dcery (1496-1499).
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Zapínání s bočním šněrováním</h4>
                <p>
                  Tento typ má rozparek na boku boty, který se šněruje pomocí
                  tkanice či koženého pásku. Vyskytuje se u nízkých a
                  kotníkových bot v průběhu 13. až 15. století. Může být
                  kombinováno se zapínáním na nártový pásek.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig11fig12.png" target="_blank">
                  <Image
                    src="/images/fig11fig12.png"
                    width={480}
                    height={864}
                  />
                </a>
                <br />
                Nahoře: Dordrecht, Nizozemí. Velmi zvláštní model s bočním
                šněrováním a páskem s přezkou přes nárt. Pozdní středověk.
                <br />
                Dole: Oslo, Norsko. Bota s potky na šněrování. Pozdní středověk.
              </Col>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig17.png" target="_blank">
                  <Image src="/images/fig17.png" width={520} height={468} />
                </a>
                <br />
                Oud-Turnhout, Belgie. Bota s diagonálním bočním zavazováním. 15.
                století.
              </Col>
              <Col md={4} className="image-wrapper">
                <a href="/images/bocni-richental.jpg" target="_blank">
                  <Image
                    src="/images/bocni-richental.jpg"
                    width={390}
                    height={520}
                  />
                </a>
                <br />
                Střevíc s bočním zavazováním na výřezu z Richentalovy kroniky
                (1470-1480)
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Zavazování na tkaničky</h4>
                <p>
                  Vypadá téměř stejně, jako zavazování současné obuvi, ovšem
                  ovykle neobsahuje jazyk. Rovněž je možno botu zavazovat
                  několika kratšími tkanicemi procházejícími dvěma páry dírek
                  (podobně jako např. u doubletu) místo jedné dlouhé. Nalezené
                  kusy jsou vesměs datovány mezi roky 1350 až 1530.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig7a.png" target="_blank">
                  <Image src="/images/fig7a.png" width={520} height={720} />
                </a>
                <br />
                Nahoře: Dordrecht, Nizozemí. Bota s jazykem, jímž na obou
                stranách prochází tkaničky. 14. století.
                <br />
                Dole: Delft, Nizozemí. Bota se dvěma bočními a jedním zadním
                švem. Jazyk chybí. 15. století.
              </Col>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig7fig8.png" target="_blank">
                  <Image src="/images/fig7fig8.png" width={480} height={540} />
                </a>
                <br />
                Nahoře: Dordrecht, Nizozemí. Střevíc s páry tkaniček. Pozdní
                středověk.
                <br />
                Dole: Dordrecht, Nizozemí. Střevíc se třemi páry dírek na jednu
                průchozí tkaničku, tak jak známe dnes. Pozdní středověk.
              </Col>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig5ab.png" target="_blank">
                  <Image src="/images/fig5ab.png" width={520} height={540} />
                </a>
                <br />
                Nahoře: Tiel, Nizozemí. Kotníková bota se zakřivenými bočními
                švy. Pozdní středověk. <br />
                Dole: Delft, Nizozemí. Střevíc s módní špičkou a šikmým švem na
                patě. Pozdní středověk.
              </Col>
            </Row>
            <Row>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig6bolsward.png" target="_blank">
                  <Image
                    src="/images/fig6bolsward.png"
                    width={480}
                    height={360}
                  />
                </a>
                <br />
                Bolsward, Nizozemí. Střevíc módního střihu s jedním párem dírek
                na tkaničky. Pozdní středověk.
              </Col>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig8leiden.png" target="_blank">
                  <Image
                    src="/images/fig8leiden.png"
                    width={600}
                    height={540}
                  />
                </a>
                <br />
                Leiden, Nizozemí. Bota s tkaničkami vázanými po párech, podobně
                jako u doubletů. 15. století.
              </Col>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig9.png" target="_blank">
                  <Image src="/images/fig9.png" width={400} height={360} />
                </a>
                <br />
                Dokkum, Nizozemí. Střevíc velmi módního střihu se třemi páry
                dírek na tkaničky. Pozdní středověk.
              </Col>
            </Row>
            <Row>
              <Col md={4} className="image-wrapper">
                <a href="/images/tkanicky-jensky1.jpg" target="_blank">
                  <Image
                    src="/images/tkanicky-jensky1.jpg"
                    width={600}
                    height={800}
                  />
                </a>
                <br />
                Kotníková bota se zavazpváním na tkaničky neb na knoflíky s
                ocáskem, výřez z Jenského kodexu (1490-1510)
              </Col>
              <Col md={4} className="image-wrapper">
                <a href="/images/tkanicky-jensky2.jpg" target="_blank">
                  <Image
                    src="/images/tkanicky-jensky2.jpg"
                    width={600}
                    height={800}
                  />
                </a>
                <br />
                Kotníková bota se zavazpváním na tkaničky neb na knoflíky s
                ocáskem, výřez z Jenského kodexu (1490-1510)
              </Col>
              <Col md={4} className="image-wrapper">
                <a href="/images/tkanicky-jensky3.jpg" target="_blank">
                  <Image
                    src="/images/tkanicky-jensky3.jpg"
                    width={600}
                    height={800}
                  />
                </a>
                <br />
                Kotníková bota se zavazpváním na tkaničky neb na knoflíky s
                ocáskem, výřez z Jenského kodexu (1490-1510)
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Zapínání na knoflíky s ocáskem</h4>
                <p>
                  U tohoto typu je rozparek zapínání vepředu na nártu. Z jedné
                  strany jsou tzv. knoflíky s ocáskem. Ty jsou vytvořeny tak, že
                  se na kožené tkanici udělá uzlík. Ten potoom slouží jako
                  knoflík a provléká se protijdoucími otvory. Tento typ zapínání
                  se používal ve 14. a 15. století a vrcholu dosáhl mezi lety
                  1350 až 1450.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig1.png" target="_blank">
                  <Image src="/images/fig1.png" width={400} height={396} />
                </a>
                <br />
                Konstrukce knoflíku s ocáskem.
              </Col>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig8ddt674.png" target="_blank">
                  <Image
                    src="/images/fig8ddt674.png"
                    width={520}
                    height={396}
                  />
                </a>
                <br />
                Dordrecht, Nizozemí. Kotníková bota u které bylo nahrazeno
                šněrování na tkaničky třemi knoflíky s ocáskem. 14. - 15.
                století.
              </Col>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig4.png" target="_blank">
                  <Image src="/images/fig4.png" width={400} height={360} />
                </a>
                <br />
                Dordrecht, Nizozemí. Kotníková bota. 14. - 15. století.
              </Col>
            </Row>
            <Row>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig7addt1031.png" target="_blank">
                  <Image
                    src="/images/fig7addt1031.png"
                    width={400}
                    height={602}
                  />
                </a>
                <br />
                Nahoře: Gent, Belgie. Bota se dvěma knoflíky s ocáskem a
                jazykem. 14. - 15. století. <br />
                Dole: Dordrecht, Nizozemí. Dětská bota se čtyřmi knoflíky s
                ocáskem. 14. - 15. století.
              </Col>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig9a.png" target="_blank">
                  <Image src="/images/fig9a.png" width={400} height={648} />
                </a>
                <br />
                Nahoře: Dordrecht, Nizozemí. Bota se dvěma knoflíky s ocáskem a
                dvěma knoflíky, vytvořenými rolováním. 14. - 15. století. <br />
                Dole: Bota s kombinovným zapínáním - první dvě dírky na nártu se
                zavazují na tkaničku, zbytek se zapíná na knoflík s ocáskem. 14.
                - 15. století.
              </Col>
              <Col md={4} className="image-wrapper">
                <a href="/images/fig10ab.png" target="_blank">
                  <Image src="/images/fig10ab.png" width={440} height={648} />
                </a>
                <br />
                Nahoře: Dordrecht, Nizozemí. Bota s pásky, jejichž jeden konec
                je uvázán do knoflíku s ocáskem a ve druhém konci je díra na
                sepnutí tohoto knoflíku. 14. - 15. století.
                <br />
                Dole: Nijkerk, Nizozemí. Bota s chlopní zapínanou na knoflíky s
                ocáskem. 14. - 15. století.
              </Col>
            </Row>
            <Row>
              <Col className="image-wrapper">
                <a href="/images/fig5abddt535.png" target="_blank">
                  <Image
                    src="/images/fig5abddt535.png"
                    width={400}
                    height={466}
                  />
                </a>
                <br />
                Dordrecht, Nizozemí. Dětské boty ze 14. - 15. století. <br />
                Nahoře: Dětská bota. <br />
                Dole: Bota pro batole. <br />
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Zapínání na chlopeň</h4>
                <p>
                  Je principiálně stejně jako výše popsané zapínání s přesahem,
                  ale chlopeň není integrální součástí boty, nýbrž je našitá
                  dodatečně. Toto zapínání se nejčastěji nalézá na obuvi ze 14.
                  a 15. století.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="image-wrapper">
                <a href="/images/fig10b.png" target="_blank">
                  <Image src="/images/fig10b.png" width={400} height={360} />
                </a>
                <br />
                Nijkerk, Nizozemí. Bota s chlopní zapínanou na knoflíky s
                ocáskem. 14. - 15. století.
              </Col>
            </Row>
            <Row></Row>
            <Row>
              <Col>
                <h4>Střevíce s límcem</h4>
                <p>
                  Tyto střevíce mají místo obruby kožený límec. Ten se po nazutí
                  ohrne dolů, čímž se bota kolem kotníku mírně uzavře. Tento typ
                  střevíců byl populární na přelomu 15. a 16. století.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={3} className="image-wrapper">
                <a href="/images/fig18.png" target="_blank">
                  <Image src="/images/fig18.png" width={480} height={360} />
                </a>
                <br />
                Edam, Nizozemí. Střevíc s límcem. Asi 1480. (Van Heeringen &
                Meffert 1996)
              </Col>
              <Col md={3} className="image-wrapper">
                <a href="/images/limec-jensky.jpg" target="_blank">
                  <Image
                    src="/images/limec-jensky.jpg"
                    width={300}
                    height={400}
                  />
                </a>
                <br />
                Střevíce s límcem, výřez z Jenského kodexu (1490-1510)
              </Col>
              <Col md={3} className="image-wrapper">
                <a href="/images/limec-hasplirska.jpg" target="_blank">
                  <Image
                    src="/images/limec-hasplirska.jpg"
                    width={600}
                    height={800}
                  />
                </a>
                <br />
                Střevíce s límcem, freska v Hašplířské kapli v chrámu sv.
                Barbory v Kutné Hoře. (konec 15. století)
              </Col>
              <Col md={3} className="image-wrapper">
                <a href="/images/limec-richental.jpg" target="_blank">
                  <Image
                    src="/images/limec-richental.jpg"
                    width={600}
                    height={800}
                  />
                </a>
                <br />
                Střevíce s límcem na výřezu z Richentalovy kroniky (1470-1480)
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Zapínání na řemínky</h4>
                <p>
                  Velice archaické zapínání, kdy noha byla nad kotníkem kolem
                  dokola obvázaná jedním nebo více řemínky. Tento typ můžeme
                  rozdělit na dva podtypy:
                  <ol>
                    <li>
                      Řemínek, který obepíná nohu, je veden vodorvně a protažen
                      několika dvojcemi svislých průřezů vytvořenými přímo ve
                      svršku boty. Užíváno zejména mezi lety 600 - 1000.
                    </li>
                    <li>
                      Řemínek, který obepíná nohu, je veden vodorvně a protažen
                      očky, která jsou vytvořena protažením jiného řemínku
                      svisle dvojcemi vodorovných průřezů ve svršku boty.
                      Užíváno zejména mezi lety 1000 - 1300.
                    </li>
                  </ol>
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="image-wrapper">
                <a href="/images/all-richental.jpg" target="_blank">
                  <Image
                    src="/images/all-richental.jpg"
                    width={900}
                    height={1200}
                  />
                </a>
                <div className="image-description">
                  Několik typů obuvi. Z popředí do pozadí:
                  <ul>
                    <li>Boty se zapínáním na řemínky obtočené nad kotníky.</li>
                    <li>Střevíce s ohrnovacím límcem.</li>
                    <li>Nohavice s koženou podrážkou.</li>
                    <li>Vysoké jezdecké boty se zapínáním pomocí záhybu.</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
