import { Col, Row } from 'reactstrap'
import React from 'react'
import { PUBLICATIONS } from '../../../shared/constants'
import { Qt } from '../../Quote/Qt'
import { ImageWithTitle } from '../../ImageWithTitle'

export const HansHarsdorfer = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="hans-harsdorfer" />
        <h4>Hans (II.) Harsdorfer (asi 1450 - 1511)</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Hans Harsdorfer pocházel z Norimberského patricijského rodu
          Harsdorferů, jehož počátek spadá do roku 1377, kdy se dva bratři
          Harsdorferové, Jindřich a Fridrich, přestěhovali ze svých panství do
          Norimberka, kde získali občanství a začali podnikat v hornictví a
          hutnictví. Stali se tak tzv. erbovními měšťany, o to významnějšími, že
          s erbem již do města přišli. Tento erb, který zobrazuje na červeném
          poli stříbrnou věž na kopci se třemi vrcholy, jim údajně udělil již v
          roce 1203 římský král Filip Švábský, když se rodoví předci vyznamenali
          při Filipově tažení do Itálie, kde dobyli jakousi věž na návrší.
          <Qt publication={PUBLICATIONS.VONHARSDORF} />
        </p>
        <p>
          Hansův otec Antonín Harsdorfer se oženil s plzeňskou měšťankou
          Barborou Fritzovou, se kterou měl dvě děti, Hanse a Kateřinu. Antonín
          se zakoupil na Malesickém zboží, které bylo zcizeno kladrubskému
          klášteru během husitských válek. Antonín Harsdorfer zemřel{' '}
          <b>12. března 1462</b> a byl pohřben v chrámu sv. Bartoloměje v Plzni.
          Malesice zdědily jeho dvě děti, přičemž Kateřina odprodala svůj díl
          Malesic bratru Hansovi 30. března 1474 za 1000 zlatých.
          <Qt
            publication={PUBLICATIONS.ENCYKLOPEDIEPLZEN}
            href="https://encyklopedie.plzen.eu/home-mup/?acc=profil_osobnosti&load=4600"
          />
        </p>
      </Col>
      <ImageWithTitle
        src="wappen_4.png"
        width={550}
        height={432}
        title="Erb rodu podle J.A.Siebmachera (1605)"
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="hans-harsdorffer.jpg"
        width={800}
        height={986}
        title="Portrét Hanse Harsdorfera, pravděpodobně od Michaela Wolgemuta, 1484"
      />
      <Col>
        <p>
          Hans Harsdorfer se narodil někdy mezi lety 1450{' '}
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          až 1460{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          buď v Malesicích nebo v Plzni. Jak již bylo řečeno, v roce 1474 se
          stal jediným majitelem Malesic, po kterých se i psal.{' '}
          <b>11. září 1481</b> se oženil s Margaretou z norimberské erbovní
          patricijské rodiny Nützelů. Byl horním a hutním podnikatelem rodinné
          společnosti, činné od roku 1460. Nejdříve jen obchodoval s rudami,
          dováženými z českých dolů. Diplomatické styky s českým králem
          Vladislavem II. Jagellonským mu po vzpourách kutnohorských horníků a
          odhalení finančních podvodů v mincovně v roce 1496 vynesly post
          nejvyššího mincmistra i účast na pražském zemském sněmu v roce 1497.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />
        </p>
        <p>
          Nechal nákladně vybavit, mj. třemi bohatě zdobenými oltáři, které
          zřejmě objednal v malířské dílně přímo v Norimberku, kapli sv. Václava
          a Ladislava ve Vlašském dvoře, která byla (znovu)vysvěcena{' '}
          <b>20. července 1497</b> u příležitosti návštěvy krále Vladislava II.
          <Qt publication={PUBLICATIONS.VONHARSDORF} /> Během svého působení v
          Kutné Hoře nechal také nákladně přestavět mincmistrův dům a pořídil si
          i luxusní zlatnické váhy uložené v ozdobně malovaném pouzdře, na jehož
          svrchní straně víka je zobrazen souboj divých mužů a na vnitřní straně
          dva ozbrojenci drží erby jeho a jeho ženy Margarety.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          Rovněž kapli daroval spolu s manželkou kazuli (ornát) zdobenou
          výšivkou scén z Mariina života a Kristova dětství. V období baroka
          byla výšivka vystřižena, našita na nový podklad a zlatě orámována.
          <Qt
            publication={PUBLICATIONS.CMSKH}
            href="https://www.cms-kh.cz/textil-a-odevy"
          />{' '}
          Roku 1499 požádal krále o uvolnění z úřadu, aby se mohl cele věnovat
          podnikání, protože po smrti strýce Endrese Harsdörffera zdědil jeho
          léna a statky, hrad Eschenbach, měďnářskou huť a hamr v Enzendorfu
          (nyní místní části Hartensteinu v dolních Frankách).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          Vladislav tomuto přání vyhověl a dokumentem z listopadu 1499 mu
          zaručil ochranu veškerého majetku na území Českého království.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="oltar_kaple_ceskych_kralu.jpg"
        width={1706}
        height={1280}
        title="Levý oltář v kapli sv. Václava a Ladislava - Panna Marie mezi apoštoly"
      />
      <ImageWithTitle
        src="kh_kaple.jpg"
        width={640}
        height={480}
        title="Pravý oltář v kapli sv. Václava a Ladislava "
      />
      <ImageWithTitle
        src="goldwage.jpg"
        width={550}
        height={394}
        title="Zlaté váhy Hanse Harsdorfera"
      />
      <ImageWithTitle
        src="mincmistruvdum.jpeg"
        width={600}
        height={800}
        title="Mincmistrův dům v areálu Vlašského dvora v Kutné Hoře"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Tak Hans Harsdorfer <b>5. dubna 1499</b> odešel z Kutné Hory,
          <Qt publication={PUBLICATIONS.VONHARSDORF} /> přesídlil do Norimberka
          a roku 1501 vstoupil do městské rady (v níž dědičně zasedali členové
          rodin jeho tchána Nützela a jeho švagra Stromera) a roku 1505 byl
          zvolen starším purkmistrem.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />
          Svoje zájmy v Čechách však nespustil nikdy ze zřetele. V roce 1502
          obstarával pro Petra z Rožmberka čtyři houfnice a při soudním sporu v
          Norimberku z března 1512 je zmíněno, že pro Jana z Valdštejna nechal
          vyrobit zbroj pro padesát peších bojovníků a dvacet rytířů na koních,
          což byla značná vojenská zakázka. Pro Plzeň pracoval jako finanční
          expert a mj. radil, jak dál s financemi po požáru města v roce 1507.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          Městská rada jej vysílala na diplomatické mise ke králi Vladislavovi,{' '}
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          pro kterého za 45 zlatých zakoupil obraz Madony od Albrechta Durera a
          dovezl ho roku 1504 králi jako oficiální dar města Norimberka. Zdá se,
          že k Durerovi jej pojilo osobní přátelství, když jej Durrer ve svém
          dopise ze <b>7. února 1506</b> nechal jako svého přítele co
          nejsrdečněji pozdravovat.
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          Ve válce o dědictví landshutské se stal jedním ze tří polních velitelů
          Norimberka. Zemřel bez potomků <b>14. ledna 1511</b> v Norimberku
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          a podle svého přání byl pochován v Plzni, v chrámu sv. Bartoloměje.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />
        </p>
        <p>
          Kromě výše zmíněných děl stál Hans Harsdorfer za vznikem dalších
          uměleckých předmětů, jako tzv. Rabská archa, u které některé zdroje
          uvádějí, že byla přímo zamýšlena jako dar pro Půtu Švihovského z
          Rýzmberka
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          a jiné, že byla původně zhotovena pro kostel sv. Jiří v Malesicích
          spolu s monstrancí.
          <Qt
            publication={PUBLICATIONS.ENCYKLOPEDIEPLZEN}
            href="https://encyklopedie.plzen.eu/home-mup/?acc=profil_osobnosti&load=4601"
          />
          Zakoupil také liturgické předměty a textilie pro kapli v Cáchách, kde
          měl český král patronátní právo a jeho prostřednictvím obdržel
          královský dvorní umělec, řezbář Hanuš (pravděpodobně člen Spiessovy
          huti Hans Scholler z Norimberka), značnou finanční částku, která
          zřejmě sloužila k úhradě nádherného oltáře pro kapli na hradě
          Křivoklátě, což byla nejreprezentativnější zakázka, jakou v Čechách
          nechal pořídit Vladislav II. Jagellonský v prvních letech své vlády.
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="rabska-archa.jpg"
        width={1744}
        height={1200}
        title="Oltář sv. Jiří z hradního kostela Nejsvětější Trojce v Rabí, tzv. Rabská archa"
      />
      <ImageWithTitle
        src="oltar-krivoklat.jpg"
        width={2333}
        height={3500}
        title="Křivoklátský oltář, 1480 - 1490"
      />
    </Row>
  </>
)
