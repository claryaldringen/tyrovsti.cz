import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Image from 'next/image'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_CS } from '../shared/constants'
import { ImageWithTitle } from '../components/ImageWithTitle/ImageWithTitle'

const Page = () => {
  return (
    <>
      <HeadExtended lang={LANG_CS} title="Obuv" />
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
                  svršek se vkládal pásek kůže, tzv. okolek. Cílem konstrukce
                  středověkké boty bylo schovat všechny důležité švy uvnitř.
                  Zatímco v Německu již začíná móda bot s kulatou špičkou, která
                  vyvrcholila v 1. polovině 16. století botami zvanými
                  &quot;kravská tlama&quot;, v Čechách se ještě na počátku 16.
                  století drží na obuvi konzervativní mírná špička.
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
                  Kromě svršku, podešve a okolku obsahovala bota zpravidla ještě
                  několik částí - opatek, obrubu a nějakou variantu zapínání či
                  šněrování.
                </p>
                <h3>Zapínání</h3>
                <h4>Zapínání s přesahem</h4>
                <p>
                  Zapínání s přesahem znamená, že část kůže na svršku překrývá
                  otevřenou část boty a je sepnuta po straně na knoflík nebo
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
              <ImageWithTitle
                src="fig16.png"
                width={400}
                height={360}
                title="Criblet, Fribourg, Švýcarsko. Bota se zapínáním pomocí přesahu a
                s přezkami. 14. až 15. století (Volken & Bourgarel 2001)"
              />
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
              <ImageWithTitle
                md={4}
                src="fig6.png"
                width={540}
                height={800}
                title="Dordrecht, Nizozemí. Kotníková bota se záhybem na zapínání,
                zobrazená rozepnutá a zapnutá. 15. století. (Goubitz)"
              />
              <ImageWithTitle
                md={4}
                src="fig7.png"
                width={520}
                height={466}
                title="Vevey, Švýcarsko. Bota se zapínáním pomocí záhybu. 14. - 15.
                století. (Goubitz)"
              />
              <ImageWithTitle
                md={4}
                src="fig14.png"
                width={520}
                height={466}
                title="Coventry, Anglie, 15. století. (Goubitz)"
              />
            </Row>
            <Row>
              <ImageWithTitle
                md={3}
                src="zahyb-jensky.jpg"
                width={600}
                height={800}
                title="Vysoká jezdecká bota se zapínáním na záhyb, výřez z Jenského
                kodexu (1490-1510)"
              />
              <ImageWithTitle
                md={3}
                src="zahyb-richental1.jpg"
                width={600}
                height={800}
                title="Vysoká jezdecká bota se zapínáním na záhyb, výřez z Richentalovy
                kroniky (1470-1480)"
              />
              <ImageWithTitle
                md={3}
                src="zahyb-richental2.jpg"
                width={600}
                height={800}
                title="Kotníková bota se zapínáním na záhyb, výřez z Richentalovy
                      kroniky (1470-1480)"
              />
              <ImageWithTitle
                md={3}
                src="zahyb-durer.jpg"
                width={600}
                height={800}
                title="Vysoká jezdecká bota se zapínáním na záhyb, výřez z
                Paumgartnerova oltáře (1500)"
              />
            </Row>
            <Row>
              <Col>
                <h4>Zapínání na nártový pásek u otevřených bot</h4>
                <p>
                  Toto zapínání se vyskytuje u nízkých otevřených bot (střevíců)
                  od 14. do 16. století. Je charakteristické páskem, který vede
                  přes nárt a spíná se na knoflík, přezku nebo se váže do
                  uzlíku.
                </p>
              </Col>
            </Row>
            <Row>
              <ImageWithTitle
                md={6}
                src="fig5abc.png"
                width={400}
                height={720}
                title={
                  <>
                    <br />
                    Tři příklady střevíců s páskem přes nárt spínaným přezkou z
                    15. století.
                    <br />
                    Nahoře: Dordrecht, Nizozemí. (Goubitz, 2001)
                    <br />
                    Uprostřed: Šlesvik, Německo. (Schnack, 1992)
                    <br />
                    Dole: Londýn, Anglie. (Grew &amp; De&nbsp;Neergaard, 1988)
                  </>
                }
              />
              <ImageWithTitle
                md={6}
                src="reminek-nart-durer.jpg"
                width={1200}
                height={1600}
                title="Tato kotníková bota, sice přesně neodpovídá popsanému typu,
                neboť se nejedná o otevřený střevíc, ale princip zapínání na
                nártový řemínek s přezkou je zde dobře patrný. Výřez pochází z
                obrazu Albrechta Dürera Lot a jeho dcery (1496-1499)."
              />
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
              <ImageWithTitle
                md={4}
                src="fig11fig12.png"
                width={480}
                height={864}
                title={
                  <>
                    {' '}
                    Nahoře: Dordrecht, Nizozemí. Velmi zvláštní model s bočním
                    šněrováním a páskem s přezkou přes nárt. Pozdní středověk.
                    (Goubitz)
                    <br />
                    Dole: Oslo, Norsko. Bota s potky na šněrování. Pozdní
                    středověk. (Schia, 1977)
                  </>
                }
              />
              <ImageWithTitle
                md={4}
                src="fig17.png"
                width={520}
                height={468}
                title="Oud-Turnhout, Belgie. Bota s diagonálním bočním zavazováním. 15.
                století. (Goubitz)"
              />
              <ImageWithTitle
                md={4}
                src="bocni-richental.jpg"
                width={390}
                height={520}
                title="Střevíc s bočním zavazováním na výřezu z Richentalovy kroniky
                (1470-1480)"
              />
            </Row>
            <Row>
              <Col>
                <h4>Zavazování na tkaničky</h4>
                <p>
                  Tento typ obuvi je na přední straně opatřen jednou, dvěma nebo
                  třemi dvojcemi dírek, kterými se provlékala tkanice podobně
                  jako u doubletu. Některé kusy však mohou být zavazovány jednou
                  dlouhou tkanicí, což je obdobné jako u současné obuvi.
                  Nalezené kusy jsou vesměs datovány mezi roky 1350 až 1530.
                </p>
              </Col>
            </Row>
            <Row>
              <ImageWithTitle
                md={4}
                src="fig7a.png"
                width={520}
                height={720}
                title={
                  <>
                    {' '}
                    Nahoře: Dordrecht, Nizozemí. Bota s jazykem, jímž na obou
                    stranách prochází tkaničky. 14. století. (Goubitz)
                    <br />
                    Dole: Delft, Nizozemí. Bota se dvěma bočními a jedním zadním
                    švem. Jazyk chybí. 15. století. (Goubitz)
                  </>
                }
              />
              <ImageWithTitle
                md={4}
                src="fig7fig8.png"
                width={480}
                height={540}
                title={
                  <>
                    {' '}
                    Nahoře: Dordrecht, Nizozemí. Střevíc s páry tkaniček. Pozdní
                    středověk. (Goubitz)
                    <br />
                    Dole: Dordrecht, Nizozemí. Střevíc se třemi páry dírek na
                    jednu průchozí tkaničku, tak jak známe dnes. Pozdní
                    středověk. (Goubitz)
                  </>
                }
              />
              <ImageWithTitle
                md={4}
                src="fig5ab.png"
                width={520}
                height={540}
                title={
                  <>
                    {' '}
                    Nahoře: Tiel, Nizozemí. Kotníková bota se zakřivenými
                    bočními švy. Pozdní středověk. (Goubitz)
                    <br />
                    Dole: Delft, Nizozemí. Střevíc s módní špičkou a šikmým švem
                    na patě. Pozdní středověk. (Goubitz)
                  </>
                }
              />
            </Row>
            <Row>
              <ImageWithTitle
                md={4}
                src="fig6bolsward.png"
                width={480}
                height={360}
                title="Bolsward, Nizozemí. Střevíc módního střihu s jedním párem dírek
                na tkaničky. Pozdní středověk. (Goubitz)"
              />
              <ImageWithTitle
                md={4}
                src="fig8leiden.png"
                width={600}
                height={540}
                title="Leiden, Nizozemí. Bota s tkaničkami vázanými po párech, podobně
                jako u doubletů. 15. století. (Goubitz)"
              />
              <ImageWithTitle
                md={4}
                src="fig9.png"
                width={400}
                height={360}
                title="Dokkum, Nizozemí. Střevíc velmi módního střihu se třemi páry
                dírek na tkaničky. Pozdní středověk. (Goubitz)"
              />
            </Row>
            <Row>
              <ImageWithTitle
                md={4}
                src="tkanicky-jensky1.jpg"
                width={600}
                height={800}
                title="Kotníková bota se zavazováním na tkaničky nebo na knoflíky s
                ocáskem, výřez z Jenského kodexu (1490-1510)"
              />
              <ImageWithTitle
                md={4}
                src="tkanicky-jensky2.jpg"
                width={600}
                height={800}
                title="Kotníková bota se zavazováním na tkaničky nebo na knoflíky s
                ocáskem, výřez z Jenského kodexu (1490-1510)"
              />
              <ImageWithTitle
                md={4}
                src="tkanicky-jensky3.jpg"
                width={600}
                height={800}
                title="Kotníková bota se zavazováním na tkaničky nebo na knoflíky s
                ocáskem, výřez z Jenského kodexu (1490-1510)"
              />
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
              <ImageWithTitle
                md={4}
                src="fig1.png"
                width={400}
                height={396}
                title="Konstrukce knoflíku s ocáskem. (Goubitz)"
              />
              <ImageWithTitle
                md={4}
                src="fig8ddt674.png"
                width={520}
                height={396}
                title="Dordrecht, Nizozemí. Kotníková bota u které bylo nahrazeno
                šněrování na tkaničky třemi knoflíky s ocáskem. 14. - 15.
                století. (Goubitz)"
              />

              <ImageWithTitle
                md={4}
                src="fig4.png"
                width={400}
                height={360}
                title="Dordrecht, Nizozemí. Kotníková bota. 14. - 15. století.
                      (Goubitz)"
              />
            </Row>
            <Row>
              <ImageWithTitle
                md={4}
                src="fig7addt1031.png"
                width={400}
                height={602}
                title={
                  <>
                    Nahoře: Gent, Belgie. Bota se dvěma knoflíky s ocáskem a
                    jazykem. 14. - 15. století. (Goubitz)
                    <br />
                    Dole: Dordrecht, Nizozemí. Dětská bota se čtyřmi knoflíky s
                    ocáskem. 14. - 15. století. (Goubitz)
                  </>
                }
              />
              <ImageWithTitle
                md={4}
                src="fig9a.png"
                width={400}
                height={648}
                title={
                  <>
                    Nahoře: Dordrecht, Nizozemí. Bota se dvěma knoflíky s
                    ocáskem a dvěma knoflíky, vytvořenými rolováním. 14. - 15.
                    století. (Goubitz)
                    <br />
                    Dole: Bota s kombinovným zapínáním - první dvě dírky na
                    nártu se zavazují na tkaničku, zbytek se zapíná na knoflík s
                    ocáskem. 14. - 15. století. (Goubitz)
                  </>
                }
              />
              <ImageWithTitle
                md={4}
                src="fig10ab.png"
                width={440}
                height={648}
                title={
                  <>
                    Nahoře: Dordrecht, Nizozemí. Bota s pásky, jejichž jeden
                    konec je uvázán do knoflíku s ocáskem a ve druhém konci je
                    díra na sepnutí tohoto knoflíku. 14. - 15. století.
                    (Goubitz)
                    <br />
                    Dole: Nijkerk, Nizozemí. Bota s chlopní zapínanou na
                    knoflíky s ocáskem. 14. - 15. století. (Goubitz)
                  </>
                }
              />
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
                Dordrecht, Nizozemí. Dětské boty ze 14. - 15. století. (Goubitz)
                <br />
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
                ocáskem. 14. - 15. století. (Goubitz)
              </Col>
            </Row>
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
              <ImageWithTitle
                md={3}
                src="fig18.png"
                width={480}
                height={360}
                title="Edam, Nizozemí. Střevíc s límcem. Asi 1480. (Van Heeringen &
                Meffert 1996)"
              />
              <ImageWithTitle
                md={3}
                src="limec-jensky.jpg"
                width={300}
                height={400}
                title="Střevíce s límcem, výřez z Jenského kodexu (1490-1510)"
              />
              <ImageWithTitle
                md={3}
                src="limec-hasplirska.jpg"
                width={600}
                height={800}
                title="Střevíce s límcem, freska v Hašplířské kapli v chrámu sv.
                Barbory v Kutné Hoře. (konec 15. století)"
              />
              <ImageWithTitle
                md={3}
                src="limec-richental.jpg"
                width={600}
                height={800}
                title="Střevíce s límcem na výřezu z Richentalovy kroniky (1470-1480)"
              />
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
