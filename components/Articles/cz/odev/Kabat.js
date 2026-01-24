import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import Link from 'next/link'

export const Kabat = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="kabat" />
        <h4>Kabát</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Kabát či kabátec se od 14. století používal pro označení kratšího a
          vypasovaného oděvu a jako synonymum německého <i>wams</i>,{' '}
          <i>jacke</i>, <i>schecke</i> či <i>rock</i>, francouzského{' '}
          <i>pourpoint</i>, <i>rochet</i>, <i>roquette</i> či anglického{' '}
          <i>jacket</i>, <i>rocket</i>
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:50711a90-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          a <i>doublet</i>, z italského <i>giubbetta</i>.
          <Qt
            publication={PUBLICATIONS.WEDGWOOD}
            href="https://babel.hathitrust.org/cgi/pt?id=uc1.b3924121&view=1up&seq=82"
          />
        </p>
        <p>
          Slova <i>kabát</i>, <i>rock (waffenrock)</i>,{' '}
          <i>doublet (arming doublet)</i> či <i>pourpoint</i> označovala rovněž
          typ prošívanice a v i češtině je první užití slova <i>kabát</i> na
          přelomu 13. a 14. století spojeno právě s označením prošívanice v
          Alexandreidě <Qt publication={PUBLICATIONS.ALEX} note="Str. 43" /> a
          udrželo se minimálně po celé 15. století, když v{' '}
          <i>Kronice velmi pěkné o Janu Žižkovi</i> můžeme číst:{' '}
          <Cit>
            Tiem jest polniem vojskem vládl kněz Prokop Holý. Pak ten jest býval
            k bitvě na špici v tlustém kabátě.
          </Cit>
          <Qt publication={PUBLICATIONS.KRONIKAPEKNA} /> Je otázkou, zda české
          slovo <i>kabát</i> vzniklo ze staroněmeckého <i>gewæte</i>
          <Qt publication={PUBLICATIONS.GEBAUER} /> či je rovněž odvozeno z
          italského <i>giubbetta</i>.
        </p>
        <p>
          Aby byla situace ještě nepřehlednější, může se pod označením kabát
          skrývat ještě suknice typu <i>cottehardie</i>, která byla těsně
          vypracovaná v oblasti hrudníku a pasu a nošena od 2. poloviny 14.
          století.
          <Qt publication={PUBLICATIONS.PILNA} /> I když kabát sloužil k
          přivazování nohavic i dříve, jak je patrné z úvazů nohavic na
          pourpointu Charlese de Blois, kombinace kabátu a k němu přivázaných
          nohavic se v Čechách široce rozšířila až kolem poloviny 15. století,
          čímž se z kabátu stala funkční část oděvu na pomezí mezi spodním a
          svrchním oděvem, čemuž by odpovídalo také ustavení samostatného
          kabátnického cechu roku 1441.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:5988fc10-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          S tím, jak se z nohavic postupně stávají kalhoty a zvyšuje se jim pas,
          zkracují se i kabátce a koncem 15. století se z nich opět stává
          plnohodnotný svrchní oděv. Zběžný nástin vývoje kabátu lze vidět ná
          následujících obrázcích.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat1.jpg"
        width={375}
        height={323}
        title="Ranný kabát se širokými rukávy, nošený jako svrchní oděv, na výřezu z Bible Václava IV. (1389-1395)."
      />
      <ImageWithTitle
        md={4}
        src="kabat2.jpg"
        width={500}
        height={500}
        title="Pregéř, který je při práci svlečen pouze do nohavic a kabátu. Druhý pregéř na stejné fresce má přes kabát oblečenou sukni typu vestina. Výřez z fresky v Mincířské kapli katedrály sv. Barbory v Kutné Hoře (1460-1470)."
      />
      <ImageWithTitle
        md={4}
        src="kabat3.jpg"
        width={1643}
        height={1643}
        title="Zápasníci v krátkých kabátech módního střihu a barev na fresce z Červené bašty na hradě Švihov, kolem roku 1500."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Jak již bylo řečeno výše, v poděbradském období byl kabát jakýmsi
          mezistupněm mezi spodním a svrchnim oděvem a to nejen v Čechách. Tělo
          kabátu tak mohlo být zhotoveno z levnější, např. nebarvené látky. Tomu
          by také odpovídal testament kotláře Martina z nynější Spálené ulice v
          Praze, který roku 1477 zanechává{' '}
          <Cit>dva rukávy aksamitové od kabáta</Cit>
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6c9674e0-fe2a-11e6-97b4-5ef3fc9ae867"
          />
          . Vzhledem k tomu, že kabát tvořil s nohavicemi jeden celek, bylo
          módní mít nohavice i kabát, popřípadě jen jeho viditelné části, ve
          stejné barvě, nejlépe kontrastní ke svrchní sukni či plášti.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat4.jpg"
        width={1920}
        height={1579}
        title="Kabát s nebarveným trupem na illuminaci z fechtbuchu Hanse Talhofera, Německo, 1459."
      />
      <ImageWithTitle
        md={4}
        src="vaclav-z-jihlavy.jpg"
        width={249}
        height={320}
        title="Kabát a nohavice ve stejné (černé) barvě. Výřez z Brněnské právní knihy Václava z Jihlavy (1446)."
      />
      <ImageWithTitle
        md={4}
        src="tkanicky-jensky2.jpg"
        width={600}
        height={800}
        title="Kabát a nohavice ve stejné (červené) barvě. Výřez z Jenského kodexu (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Nedostatek českých obrazových pramenů a fakt, že kabát byl v
          poděbradské době mezivrstvou mezi košilí a svrchníkem, značně
          znesnadňují badatelskou činnost. Přesto lze vysledovat některé detaily
          a odlišnosti oproti jiným oblastem. Rukávy českých kabátů jsou buď
          úzké nebo široké, stažené krátkou manžetou u zápěstí. Naopak se
          nevyskytují ramení vycpávky podle burgundské módy, či nabírání horní
          poloviny rukávu jako u italské módy.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="kabat5.jpg"
        width={466}
        height={512}
        title="Pregéř v kabátu s úzkými rukávy. Výřez z fresky v Mincířské kapli katedrály sv. Barbory v Kutné Hoře(1460-1470)."
      />
      <ImageWithTitle
        md={3}
        src="kabat6.jpg"
        width={600}
        height={600}
        title="Kněz v kabátu se širokými rukávy, staženými manžetou na zápěstí. Výřez z Jenského kodexu (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="kabat7.jpg"
        width={230}
        height={273}
        title={
          <>
            Kabát s vycpanými rameny podle burgundské módy. Výřez z obrazu{' '}
            <i>Poprava nevinného hraběte</i> malíře Dieric Boutse, Nizozemí,
            1460.
          </>
        }
      />
      <ImageWithTitle
        md={3}
        src="kabat8.jpg"
        width={667}
        height={864}
        title="Kabát s nabíranou horní polovinou rukávů, výřez z fresky Paola di Stefana Badaloniho, Florencie, 1460"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Při srovnání kabátu z fresky v Mincířské kapli chrámu sv. Barbory v
          Kutné Hoře se soudobými německými vzory se zdá, že české kabáty byly
          poněkud archaičtějšího rázu, tj. s dlouhým šorcem pevně obepínajícím
          břicho a vazaným na jednu tkanici a velmi klenutým, pravděpodobně
          vycpaným hrudníkem, který již ale nemusí být tak pevně sepnut jako
          břišní část a proto je buď zapínán knoflíky či několika tkanicemi
          procházejícími proti sobě postavenými dvojcemi dírek.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat9.jpg"
        width={464}
        height={692}
        title="Kabát s dlouhým šorcem pevně utaženým na jednu tkanici. Hrudník již nemusí být tak pevně stažen a je sepnut několika tkanicemi procházejícími proti sobě postavenými dvojcemi dírek. Výřez z Königsegg Treatise, Německo, (1446-1459)."
      />
      <ImageWithTitle
        md={4}
        src="kabat2.jpg"
        width={500}
        height={500}
        title="Ačkoli by měl být tento kabát vzhledem ke své dataci podobný německému kabátu na následujícím obrázku, zachovává si archaický tvar s pevně utaženým šorcem na jednu tkanici a volnějším hrudníkem spínaným na knoflíky. Výřez z fresky v Mincířské kapli katedrály sv. Barbory v Kutné Hoře(1460-1470)."
      />
      <ImageWithTitle
        md={4}
        src="kabat10.jpg"
        width={1780}
        height={1678}
        title="Mladší typ kabátů s krátkým šorcem, nošených tou dobou v Německu. Stránka z fechtbuchu Hanse Talhofera, Německo, (1459)."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Do konstrukce kabátů dávají nahlédnout některé artikuly novoměstského
          kabátnického cechu, které byly potvrzeny <b>16. srpna 1448</b>:
        </p>
        <p>
          <Cit>
            Třetie, aby byly dělány barchanové kabáty v prostředku plátnem
            novým, a bavlna aby byla v prsy, a vespod aby bylo plátno nové nebo
            cvilink bez přimiešenie vetchého; a v kožené kabáty aby bylo vetché
            plátno v prostředek, a vespod nové bez přimiešenie vetchého. Také
            aby vetché plátno nebylo děláno pod barchanové kabáty ani kožené ani
            cvilinkové, nebo pod rukávy aby žádného vetchého mandlovaného na trh
            nedělali.
          </Cit>
        </p>
        <p>
          <Cit>
            Desáté a poslednie, v harasové kabáty aby bylo děláno dvuoje plátno
            v prsy svrchnie, a v pokošinové též, pod pokutami svrchupsanými.
          </Cit>
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=10&bookid=821&page=458"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Zatímco v západní Evropě byly tkanice, kterými byly nohavice přivázány
          ke kabátu, vázány viditelně na jednu kličku, ve střední Evropě bylo
          zvykem nosit tyto tkanice skrytě, jak je patrno z následujících
          obrázků.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        width={564}
        height={988}
        src="memling.jpg"
        title="Kabát přivázaný ke kalhotám s viditelnými uzlíky na tkanicích. Výřez z oltáře sv. Jana od Hanse Memlinga, 1479."
      />
      <ImageWithTitle
        md={3}
        width={373}
        height={480}
        src="stetisvjiri.jpg"
        title="Kabát přivázaný ke kalhotám s viditelnými uzlíky na tkanicích. Stětí sv. Jiří, Friedrich Herlin, 1462 - 1465."
      />
      <ImageWithTitle
        md={3}
        width={978}
        height={1188}
        src="talhofer1.jpg"
        title="Tkanice mezi nohavicemi a kabátem jsou zde pouze naznačeny, protože uzlík je skryt na vnitřní straně. Stránka z fechtbuchu Hanse Talhofera, Německo, (1459)."
        href="talhofer2.jpg"
      />
      <ImageWithTitle
        md={3}
        src="kabat2.jpg"
        width={500}
        height={500}
        title="V českém prostředí jsou tkanice, kterými je spojen kabát s nohavicemi, skryté natolik, že na rozdíl od tkanice na břiše, nejsou ani naznačeny. Výřez z fresky v Mincířské kapli katedrály sv. Barbory v Kutné Hoře(1460-1470)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Rekonstrukce</h5>
        <p>
          Volnou inspirací k této rekonstrukci bylo vyobrazení z{' '}
          <Link
            href="https://digital.slub-dresden.de/werkansicht/dlf/14388%2F95%2F"
            target="_blank"
          >
            Bayerische Fürstengenealogie
          </Link>
          , avšak snažili jsme se zároveň držet artikulů novoměstského
          kabátnického cechu. Tělo kabátu je tak zhotovené z černého barchetu (
          <Cit>... aby byly dělány barchanové kabáty</Cit>) a hrudník je vycpaný
          surovou bavlnou (<Cit>... a bavlna aby byla v prsy</Cit>). Tvar včetně
          zapínání je převzatý z vyobrazení kabátu v Mincířské kapli v katedrále
          sv. Barbory v Kutné Hoře.
        </p>
        <p>
          Rukávy jsou zhotoveny z výrazně dražší látky, jak je vidět na mnohých
          dobových vyobrazeních a je zmíněno v testamentu kotláře Martina z roku
          1477: <Cit>dva rukávy aksamitové od kabáta</Cit>. Místo zmíněného
          hedvábného sametu (aksamitu) jsme použili ručně tkaný, zlatem
          vytkávaný hedvábný brokát s motivem Pelikána, jehož předlohou byl
          fragment textilie nalezený v Německu.{' '}
        </p>
        <p>
          Celý kabát je kompletně šitý ručně. Rekonstrukci provedl Pavel Houfek.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="doublet/1.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle src="doublet/3.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle src="doublet/4.jpg" width={1600} height={1200} title="" />
    </Row>
    <Row>
      <ImageWithTitle src="doublet/2.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle
        src="doublet/4a.jpg"
        width={1600}
        height={1200}
        title=""
      />
      <ImageWithTitle src="doublet/5.jpg" width={1600} height={1200} title="" />
    </Row>
    <Row>
      <ImageWithTitle
        src="doublet/5a.jpg"
        width={1600}
        height={1200}
        title=""
      />
      <ImageWithTitle src="doublet/6.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle src="doublet/7.jpg" width={1600} height={1200} title="" />
    </Row>
    <Row>
      <ImageWithTitle src="doublet/8.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle src="doublet/9.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle
        src="doublet/10.jpg"
        width={1600}
        height={1200}
        title=""
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="doublet/11.jpg"
        width={1600}
        height={1200}
        title=""
      />
      <ImageWithTitle
        src="doublet/12.jpg"
        width={1600}
        height={1200}
        title=""
      />
      <ImageWithTitle
        src="doublet/14.jpg"
        width={1600}
        height={1200}
        title=""
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="doublet/13.jpg"
        width={1200}
        height={1600}
        title=""
      />
      <ImageWithTitle
        src="doublet/15.jpg"
        width={1200}
        height={1600}
        title=""
      />
      <ImageWithTitle
        src="doublet/16.jpg"
        width={1200}
        height={1600}
        title=""
      />
    </Row>
  </>
)
