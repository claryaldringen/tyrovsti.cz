import { Col, Row } from 'reactstrap'
import { ImageWithTitle } from '../../../ImageWithTitle/ImageWithTitle'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'
import { PUBLICATIONS } from '../../../../shared/constants'

export const Obuv = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="obuv" />
        <h3>Obuv</h3>
        <p>
          Obuv v Čechách ve 2. polovině 15. století můžeme rozdělit na nízkou,
          polovysokou a vysokou. Obuv byla nejčastěji zhotovena z kůže tak, že
          se sešila podešev se svrškem a bota se převrátila naruby (tzv.
          převracená obuv). Mezi podešev a svršek se vkládal pásek kůže, tzv.
          okolek. Cílem konstrukce středověké boty bylo schovat všechny důležité
          švy uvnitř. Zatímco v Německu již začíná móda bot s kulatou špičkou,
          která vyvrcholila v 1. polovině 16. století botami zvanými
          &quot;kravská tlama&quot;, v Čechách se ještě na počátku 16. století
          drží na obuvi konzervativní mírná špička.
        </p>
        <p>
          Vedle této umírněné špičky se v Praze v 60. letech znovu objevily i
          dlouhé zobáky, jaké se nosily o sto let dříve na střevících typu{' '}
          <i>poulaine</i>. Dne 2. září 1464 nařídil Jiří z Poděbrad purkmistrům
          a radám všech tří pražských měst:{' '}
          <Cit>
            Přikazujem vám, abyste všem ševcuom přikázali, aby špicuov u třevíc
            i u škoren nedělali, a také žádnému svému nedopúštějte v špici
            choditi; v tom naši vuoli naplníte.
          </Cit>
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://kramerius5.nkp.cz/view/uuid:a286ef70-8dd6-11e8-9588-5ef3fc9bb22f?page=uuid:fc3acae9-d484-4432-a28d-24c18c153d79"
            note="Str. 477"
          />{' '}
          Tomek k tomu z pražských knih dodává, že{' '}
          <Cit>
            za času krále Jiřího smyslili si ševci Pražští dělati zase střevíce
            a škorně špičaté jako kdysi o sto let předtím
          </Cit>
          , a soudí, že zákaz <Cit>nejspíš měl svůj účinek</Cit>. Dlouhé zobáky
          se tedy v Čechách vrátily jen nakrátko; o třináct let později, roku
          1477, popisují staroměstští konšelé při sporu ševců už zase jiný trend
          – <Cit>obuv dělala nižší a škorně jezdecké ostřejší než jindy</Cit>
          .
          <Qt
            publication={PUBLICATIONS.TOMEK8}
            href="https://kramerius5.nkp.cz/view/uuid:38c064d0-106f-11dd-b330-000d606f5dc6?page=uuid:5e2a2492-3eef-4067-a1b7-4c6e1f5056e6"
            note="Str. 367, 497"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fig5g.png"
        width={400}
        height={360}
        title="Způsob přišití svršku a podešve v 15. století (Goubitz)"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Kromě svršku, podešve a okolku obsahovala bota zpravidla ještě několik
          částí - opatek, obrubu a nějakou variantu zapínání či šněrování.
        </p>
        <p>
          Ševcovské řemeslo se v pražských městech dělilo na dvě: ševce{' '}
          <i>novinníky</i>, kteří šili obuv novou, a ševce <i>vetešníky</i>,
          kteří ji opravovali. Kde přesně vedla hranice, vyřkli 12. července
          1441 konšelé všech tří měst: vetešníci{' '}
          <Cit>
            nové nártie a podešvy nové k starým ochozeným holenom budú moci
            přišívati a dvoje škorně dobře ochozené do krámu na prodaj každý trh
            vykládati, jakož jich práva svědčie, ale červených ani bielých šáróv
            k vetché obuvi nemají okládati
          </Cit>
          . Z toho je vidět, co se na botě nejdřív ochodilo – nárt a podešev – a
          co si naopak zákazník nechával dělat jen nové: barevné šáry, tedy
          holeně. Novoměstští konšelé výrok roku 1456 obnovili a připojili
          podmínku, že kdo se chce v kterémkoli z obou řemesel usadit za mistra,
          má se{' '}
          <Cit>
            ve věcech slavné svátosti těla a krve pána našeho Jhesu Crista pod
            obojím způsobem
          </Cit>{' '}
          srovnávat s obcí.
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://kramerius5.nkp.cz/view/uuid:a286ef70-8dd6-11e8-9588-5ef3fc9bb22f?page=uuid:002e8c18-a4ee-489d-b0d0-aec88c18c1b5"
            note="Str. 440–441, 470–471"
          />
        </p>
        <p>
          Kůži si ševci sami mazali a černili. Když se roku 1453 přeli s
          podskalskými a vyšehradskými koželuhy, vypověděl koželuh Jakub Kavka,
          že{' '}
          <Cit>
            obojí koželuzi nemazali … ale byli štumfaři; potom se srotili ševci,
            a tak počali mazati, a tak štumfařské řemeslo sešlo
          </Cit>
          , a ševci Beneš a Mařík Lichva dosvědčili, že se koželuzi{' '}
          <Cit>
            naučili mazati od tovařišuov ševcovských zlehka od čtyřidceti let
          </Cit>
          .
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://kramerius5.nkp.cz/view/uuid:a286ef70-8dd6-11e8-9588-5ef3fc9bb22f?page=uuid:8c5aded7-667e-4c4f-8b87-966f49281f28"
            note="Str. 465–466"
          />
        </p>
        <h4>Zapínání s přesahem</h4>
        <p>
          Zapínání s přesahem znamená, že část kůže na svršku překrývá otevřenou
          část boty a je sepnuta po straně na knoflík nebo přezkou. Funkce je
          velmi podobná jako u zapínání pomocí chlopně, hlavním rozdílem však
          je, že chlopeň je k botě přišitá zvlášť. Přesto není jednoduché tyto
          dva typy v nálezech a na vyobrazeních rozlišit a často splývají
          dohromady. Tento typ spínání byl nejpopulárnější mezi 8. a 13.
          stoletím, v 15. století se již vyskytuje velmi sporadicky (např. nález
          z Fribourgu ve Švýcarsku, kde je přesah opatřen dvěma pásky, které se
          v oblasti kotníků spínají pomocí dvou přezek).
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
          Princip zapínání je velmi podobný, jako u zapínání s přesahem, ale
          botě úplně chybí otevřená část na nártu. Místo ní je zde velký záhyb,
          který se pomocí knoflíků, přezek nebo háčků sepne po straně. Tento typ
          zapínání byl velice populární ve 14., 15. a 16. století, zejména u
          vysokých bot.
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
          Toto zapínání se vyskytuje u nízkých otevřených bot (střevíců) od 14.
          do 16. století. Je charakteristické páskem, který vede přes nárt a
          spíná se na knoflík, přezku nebo se váže do uzlíku.
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
            Tři příklady střevíců s páskem přes nárt spínaným přezkou z 15.
            století.
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
          Tento typ má rozparek na boku boty, který se šněruje pomocí tkanice či
          koženého pásku. Vyskytuje se u nízkých a kotníkových bot v průběhu 13.
          až 15. století. Může být kombinováno se zapínáním na nártový pásek.
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
            šněrováním a páskem s přezkou přes nárt. Pozdní středověk. (Goubitz)
            <br />
            Dole: Oslo, Norsko. Bota s potky na šněrování. Pozdní středověk.
            (Schia, 1977)
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
          Tento typ obuvi je na přední straně opatřen jednou, dvěma nebo třemi
          dvojcemi dírek, kterými se provlékala tkanice podobně jako u doubletu.
          Některé kusy však mohou být zavazovány jednou dlouhou tkanicí, což je
          obdobné jako u současné obuvi. Nalezené kusy jsou vesměs datovány mezi
          roky 1350 až 1530.
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
            Nahoře: Dordrecht, Nizozemí. Bota s jazykem, jímž na obou stranách
            prochází tkaničky. 14. století. (Goubitz)
            <br />
            Dole: Delft, Nizozemí. Bota se dvěma bočními a jedním zadním švem.
            Jazyk chybí. 15. století. (Goubitz)
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
            Nahoře: Dordrecht, Nizozemí. Střevíc s páry tkaniček. Pozdní
            středověk. (Goubitz)
            <br />
            Dole: Dordrecht, Nizozemí. Střevíc se třemi páry dírek na jednu
            průchozí tkaničku, tak jak známe dnes. Pozdní středověk. (Goubitz)
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
            Nahoře: Tiel, Nizozemí. Kotníková bota se zakřivenými bočními švy.
            Pozdní středověk. (Goubitz)
            <br />
            Dole: Delft, Nizozemí. Střevíc s módní špičkou a šikmým švem na
            patě. Pozdní středověk. (Goubitz)
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
        <h5>Rekonstrukce</h5>
        <p>
          Pro rekonstrukci byly vybrány kotníkové boty se zavazováním na jednu
          tkanici, podobně, jako je tomu u moderních bot, protože požadavkem
          byla robustní bota, kterou její majitel může nosit k plátovým nohám
          (tzn. část od kotníku nahoru bude překryta plátovým lýtkem) a zároveň
          v ní absolvovat dlouhé pochody. Tento typ bot se široce uplatňuje na
          českých dobových vyobrazeních, viz níže.
        </p>
        <p>
          Co musel běžný český švec umět, říká nejstarší dochovaný popis
          mistrovského kusu, cechovní řád pardubických ševců z 17. prosince
          1515: uchazeč{' '}
          <Cit>
            aby vokázal nejprv škorni příční, druhú škorni telecí, od té škorně
            střevíc zadní, a k tomu také punčoch veliký
          </Cit>{' '}
          – tedy dva druhy vysokých škorní, nízký střevíc a koženou nohavici. Za
          to platil <Cit>čtyři groše bílé a libru vosku</Cit> a strojil cechu
          svačinu <Cit>každý podle svěj možnosti</Cit>.
          <Qt
            publication={PUBLICATIONS.AC17}
            href="https://kramerius5.nkp.cz/view/uuid:2cf61550-8dd7-11e8-9588-5ef3fc9bb22f?page=uuid:c2b13f00-9bb2-11e8-8b19-005056825209"
            note="Str. 226, č. 1011"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat5.jpg"
        width={466}
        height={512}
        title="Pregéř. Zde není možné určit typ zapínání, ale je patrné, že obuv je kotníková. Výřez z fresky v Mincířské kapli katedrály sv. Barbory v Kutné Hoře(1460-1470)."
      />
      <ImageWithTitle
        md={4}
        src="vaclav-z-jihlavy.jpg"
        width={249}
        height={320}
        title="Písař má tmavé kotníkové boty. Typ zapínání nelze určit. Výřez z Brněnské právní knihy Václava z Jihlavy (1446)."
      />
      <ImageWithTitle
        md={4}
        src="tkanicky-jensky2.jpg"
        width={600}
        height={800}
        title="Kotníková bota se zavazováním na tkaničky nebo na knoflíky s
                ocáskem, výřez z Jenského kodexu (1490-1510)"
      />
    </Row>
    <Row>
      <p>
        Při konstrukci repliky byly uplatněny všechny prvky, které se
        uplatňovaly při konstrukci bot v 15. století, tj. obruba, okolek i
        opatek. Bota je ručně šitá a následně převracená, tak aby všechny stehy
        byly schovány uvnitř. Rekonstrukci provedl Josef
        &bdquo;Halflung&ldquo;Novák.
      </p>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="bota0.jpg"
        width={720}
        height={960}
        title="Našitý opatek"
      />
      <ImageWithTitle
        md={4}
        src="bota1.jpg"
        width={720}
        height={960}
        title="Našitá obruba"
      />
      <ImageWithTitle
        md={4}
        src="bota4.jpg"
        width={960}
        height={720}
        title="Svršek a podešev jsou připraveny na sešití"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="bota2.jpg"
        width={960}
        height={720}
        title="Sešití svrchních dílů boty"
      />
      <ImageWithTitle
        md={4}
        src="bota5.jpg"
        width={960}
        height={720}
        title="Našití podešve na svršek"
      />
      <ImageWithTitle
        md={4}
        src="bota9.jpg"
        width={960}
        height={720}
        title="Kompletní sešitá bota"
      />
    </Row>
    <Row>
      <ImageWithTitle md={4} src="bota6.jpg" width={720} height={960} />
      <ImageWithTitle md={4} src="bota7.jpg" width={720} height={960} />
      <ImageWithTitle md={4} src="bota8.jpg" width={720} height={960} />
    </Row>

    <Row>
      <Col>
        <h4>Zapínání na knoflíky s ocáskem</h4>
        <p>
          U tohoto typu je rozparek zapínání vepředu na nártu. Z jedné strany
          jsou tzv. knoflíky s ocáskem. Ty jsou vytvořeny tak, že se na kožené
          tkanici udělá uzlík. Ten potom slouží jako knoflík a provléká se
          protijdoucími otvory. Tento typ zapínání se používal ve 14. a 15.
          století a vrcholu dosáhl mezi lety 1350 až 1450.
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
            Nahoře: Gent, Belgie. Bota se dvěma knoflíky s ocáskem a jazykem.
            14. - 15. století. (Goubitz)
            <br />
            Dole: Dordrecht, Nizozemí. Dětská bota se čtyřmi knoflíky s ocáskem.
            14. - 15. století. (Goubitz)
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
            Nahoře: Dordrecht, Nizozemí. Bota se dvěma knoflíky s ocáskem a
            dvěma knoflíky, vytvořenými rolováním. 14. - 15. století. (Goubitz)
            <br />
            Dole: Bota s kombinovaným zapínáním - první dvě dírky na nártu se
            zavazují na tkaničku, zbytek se zapíná na knoflík s ocáskem. 14. -
            15. století. (Goubitz)
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
            Nahoře: Dordrecht, Nizozemí. Bota s pásky, jejichž jeden konec je
            uvázán do knoflíku s ocáskem a ve druhém konci je díra na sepnutí
            tohoto knoflíku. 14. - 15. století. (Goubitz)
            <br />
            Dole: Nijkerk, Nizozemí. Bota s chlopní zapínanou na knoflíky s
            ocáskem. 14. - 15. století. (Goubitz)
          </>
        }
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="fig5abddt535.png"
        width={400}
        height={466}
        title={
          <>
            Dordrecht, Nizozemí. Dětské boty ze 14. - 15. století. (Goubitz)
            <br />
            Nahoře: Dětská bota. <br />
            Dole: Bota pro batole. <br />
          </>
        }
      />
    </Row>
    <Row>
      <Col>
        <h4>Zapínání na chlopeň</h4>
        <p>
          Je principiálně stejně jako výše popsané zapínání s přesahem, ale
          chlopeň není integrální součástí boty, nýbrž je našitá dodatečně. Toto
          zapínání se nejčastěji nalézá na obuvi ze 14. a 15. století.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fig10b.png"
        width={400}
        height={360}
        title="Nijkerk, Nizozemí. Bota s chlopní zapínanou na knoflíky s ocáskem. 14. -
        15. století. (Goubitz)"
      />
    </Row>
    <Row>
      <Col>
        <h4>Střevíce s límcem</h4>
        <p>
          Tyto střevíce mají místo obruby kožený límec. Ten se po nazutí ohrne
          dolů, čímž se bota kolem kotníku mírně uzavře. Tento typ střevíců byl
          populární na přelomu 15. a 16. století.
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
          Velice archaické zapínání, kdy noha byla nad kotníkem kolem dokola
          obvázaná jedním nebo více řemínky. Tento typ můžeme rozdělit na dva
          podtypy:
        </p>
        <ol>
          <li>
            Řemínek, který obepíná nohu, je veden vodorovně a protažen několika
            dvojcemi svislých průřezů vytvořenými přímo ve svršku boty. Užíváno
            zejména mezi lety 600 - 1000.
          </li>
          <li>
            Řemínek, který obepíná nohu, je veden vodorovně a protažen očky,
            která jsou vytvořena protažením jiného řemínku svisle dvojcemi
            vodorovných průřezů ve svršku boty. Užíváno zejména mezi lety 1000 -
            1300.
          </li>
        </ol>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="all-richental.jpg"
        width={900}
        height={1200}
        title={
          <>
            {' '}
            Několik typů obuvi. Z popředí do pozadí:
            <ul>
              <li>Boty se zapínáním na řemínky obtočené nad kotníky.</li>
              <li>Střevíce s ohrnovacím límcem.</li>
              <li>Nohavice s koženou podrážkou.</li>
              <li>Vysoké jezdecké boty se zapínáním pomocí záhybu.</li>
            </ul>
          </>
        }
      />
    </Row>
  </>
)
