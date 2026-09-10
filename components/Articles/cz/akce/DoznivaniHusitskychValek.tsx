import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const DoznivaniHusitskychValek = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="doznivani-husitskych-valek" />
        <h4>Doznívání husitských válek (1434–1437){draft && <DraftBadge />}</h4>
        <p>
          Tříletým obdobím od bitvy u Lipan <b>30. května 1434</b> do smrti
          krále Zikmunda Lucemburského <b>9. prosince 1437</b> definitivně
          skončila husitská revoluce. Je to čas zákulisních jednání mezi panskou
          jednotou, Bazilejským koncilem a Zikmundem Lucemburským, jež vyústila
          v <i>Jihlavská kompaktáta</i> a v&nbsp;přijetí Zikmunda za českého
          krále. Současně to však byla doba posledního ozbrojeného odporu
          radikálního křídla, ztělesněného Janem Roháčem z Dubé na hradě Sion.
          Po vojenské stránce je toto období významné tím, že v něm dochází k
          přechodu velké části bývalých husitských profesionálů z polních obcí
          do služeb domácí panské šlechty, do polských a litevských služeb a —
          pro českou žoldnéřskou tradici nejdůležitější — do služeb v Horních
          Uhrách.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Husitsk%C3%A9_v%C3%A1lky"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Bezprostředně po Lipanech (léto a podzim 1434)</h5>
        <p>
          V polovině roku 1434 se panská jednota stala dominantní silou v
          Čechách, ale plná konsolidace si vyžádala další měsíce. Pražská města
          se postupně podřídila kompromisní linii pražského arcibiskupa Jana
          Rokycany; Tábor a Hradec Králové (centrum sirotků) zůstaly formálně
          samostatnými polními obcemi, ale přijaly defenzivní postoj. V létě
          1434 začala nová etapa jednání s Bazilejským koncilem; první poselstvo
          přijelo do Prahy v <b>říjnu 1434</b> v čele s Janem Palomarem a
          Filibertem z Coutance. Současně Zikmund Lucemburský, dosud držitel
          pouze nominálního titulu českého krále, zahájil ze Stoličného
          Bělehradu (kde se jeho dvůr usadil) systematické jednání s českou
          panskou jednotou.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Husitsk%C3%A9_v%C3%A1lky"
          />
        </p>
        <h5>Brno, Stoličný Bělehrad a Jihlava (1435–1436)</h5>
        <p>
          V průběhu roku 1435 probíhala paralelně dvě jednání: česko-bazilejské
          o textu kompaktát a česko-zikmundovské o podmínkách přijetí krále.
          Zikmundova jednání s Čechy se odehrávala ve Stoličném Bělehradě
          (Székesfehérvár), v Brně (kde se jednalo v červenci a srpnu 1435) a
          posléze v Jihlavě. Hlavními českými vyjednavači byli Aleš Vřešťovský z
          Rýzmburka, Hynek Ptáček z Pirkštejna, mistr Jan Rokycana a Menhart z
          Hradce. Klíčový spor se točil kolem osoby Rokycany jako budoucího
          arcibiskupa pražského a kolem rozsahu konfiskací církevního majetku,
          k&nbsp;nimž došlo v průběhu husitských válek.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Husitsk%C3%A9_v%C3%A1lky"
          />
        </p>
        <h5>Jihlavská kompaktáta (5. července 1436)</h5>
        <p>
          Slavnostní vyhlášení <i>Jihlavských kompaktát</i> proběhlo na sněmu v
          Jihlavě <b>5. července 1436</b>. Dokument schválil čtyři pražské
          artikuly v omezené podobě: 1) přijímání pod obojí způsobou bylo
          povoleno na územích, kde se již tradičně tak děje, 2) potrestání
          smrtelných hříchů bez ohledu na stav, 3) svobodné kázání slova Božího,
          4) omezení nadměrného světského majetku duchovenstva. Kompaktáta byla
          s Bazilejským koncilem vyjednána již v Praze v listopadu 1433 a v Brně
          1435; jihlavské vyhlášení mělo charakter slavnostního přijetí. Papež
          kompaktáta nikdy formálně nepotvrdil a Pius II. je v <b>roce 1462</b>{' '}
          jednostranně zrušil, ale české země je uznávaly jako platný zákonný
          dokument až do roku 1567.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jihlavsk%C3%A1_kompakt%C3%A1ta"
          />
        </p>
        <h5>Zikmund Lucemburský českým králem</h5>
        <p>
          Bezprostředně po vyhlášení kompaktát uznali čeští stavové Zikmunda
          Lucemburského za řádného českého krále. Slavnostní vstup do Prahy se
          uskutečnil <b>23. srpna 1436</b> a Zikmund vydal několik privilegií,
          jimiž stvrdil dosavadní rozdělení panství v zemi a uznal většinu
          husitských konfiskací. V následujícím roce se však nedokázal plně
          vyrovnat s odporem radikálního křídla pod vedením Jana Roháče z Dubé,
          jenž odmítl kompromis i krále. Zikmundova vláda v Čechách trvala
          fakticky jen rok a několik měsíců — zemřel ve Znojmě{' '}
          <b>9. prosince 1437</b> ve věku 69 let, na cestě z Prahy do Uher.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Husitsk%C3%A9_v%C3%A1lky"
          />
        </p>
        <h5>Povstání Jana Roháče z Dubé</h5>
        <p>
          Jan Roháč z Dubé patřil k nejvýraznějším radikálním hejtmanům
          husitských válek; bojoval pod Žižkou i Prokopem Holým a u Lipan unikl
          obklíčení. V polovině roku 1436 odmítl kompaktáta i Zikmunda jako
          krále a opevnil se na hradě Sion u Kutné Hory. Jeho odboj se v
          uvedeném okamžiku zdál spíše symbolický než reálná hrozba — jeho
          posádka čítala kolem 50 až 60 mužů. Přesto Zikmund vyslal proti Sionu
          zemská vojska pod vedením Hynka Ptáčka z Pirkštejna a Mikuláše Sokola
          z Lamberka. Obléhání Sionu trvalo od jara 1437; hrad padl{' '}
          <b>6. září 1437</b> po dlouhém ostřelování a po vyhloubení podkopu.
          Roháč a deset jeho předních druhů byli zajati a převezeni do Prahy.{' '}
          <b>9. září 1437</b> byl Jan Roháč v Praze popraven oběšením na
          symbolicky nejvyšší šibenici, opatřené třemi patry, na nichž vedle něj
          viseli jeho hejtmani. Šibenice měla zdůraznit pohrdání jak královo,
          tak i pražské stavovské reprezentace.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Husitsk%C3%A9_v%C3%A1lky"
          />
        </p>
        <h5>Smrt Zikmunda Lucemburského</h5>
        <p>
          Po popravě Jana Roháče vyrazil Zikmund Lucemburský z Prahy přes Znojmo
          zpět do Uher; cestou jej zastihla smrtelná nemoc (gangréna v noze,
          kterou si vlekl už od jara). Zemřel ve Znojmě <b>9. prosince 1437</b>.
          Jeho dědicem v českých i uherských zemích se stal jeho zeť Albrecht
          II. Habsburský, manžel Zikmundovy dcery Alžběty Lucemburské. Albrecht
          byl však přijat jen částí české šlechty a v Uhrách se setkal s
          odporem; jeho předčasnou smrtí <b>27. října 1439</b> nastoupila éra
          interregna a uherské občanské války, která otevřela českému
          žoldnéřství dveře do severních Uher.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Husitsk%C3%A9_v%C3%A1lky"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Klíčovým latinským pramenem pro období 1434–1437 je{' '}
          <b>Bartošek z Drahonic</b> a jeho <i>Cronica</i>, dovedená do roku
          1443; autor nestranně referuje o jednáních v Brně, ve Stoličném
          Bělehradě a v Jihlavě, o vstupu Zikmunda do Prahy 23. srpna 1436 i o
          pádu Sionu a popravě Jana Roháče. Edici ve Fontes Rerum Bohemicarum,
          sv. V, digitalizoval archive.org.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Barto%C5%A1ek_z_Drahonic"
          />
        </p>
        <p>
          <b>Aeneas Silvius</b> v <i>Historia Bohemica</i> věnuje kompaktátům a
          Zikmundově korunovaci samostatnou kapitolu (kap. LI–LIII v edici BSB)
          a zachycuje pohled koncilového diplomata, jenž se v roce 1432 osobně
          účastnil chebských jednání. Pius II. v roce 1462 jednostranně zrušil
          kompaktáta a tato kontinuita propůjčuje jeho výkladu zvláštní váhu.
          <Qt
            publication={PUBLICATIONS.AENEAS_BOHEMICA}
            href="https://www.digitale-sammlungen.de/de/search?query=aeneas+silvius+historia+bohemica"
          />
        </p>
        <p>
          <b>Staří letopisové čeští</b> ad annum 1436 přinášejí podrobný popis
          Zikmundova vstupu do Prahy včetně listu privilegií a slavnostního
          přijetí na Hradčanech; ad annum 1437 zaznamenávají pád Sionu a
          symbolickou trojpatrovou šibenici Jana Roháče. Latinský text
          jihlavských kompaktát z 5. července 1436 byl publikován v edici
          <i>Archivu českého</i> Františka Palackého (sv. III).
          <Qt
            publication={PUBLICATIONS.STARI_LETOPISOVE}
            href="https://archive.org/details/scriptorumrerum02unkngoog"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Doznívání husitských válek je samo o sobě domácí česká záležitost —
          obě strany konfliktu byly české a žoldnéřství v užším slova smyslu
          (cizí kontingenty na cizí službě) zde nehraje roli. Klíčový je však
          přesun bývalého husitského válečného personálu do nového postavení. Po
          pádu Sionu v září 1437 byla v Čechách rozpuštěna poslední velká
          ozbrojená radikální skupina; tisíce zkušených bojovníků zůstaly bez
          stálé zemské služby. Část jich přešla do služeb domácí panské šlechty
          (zejména Hynka Ptáčka z Pirkštejna, Aleše Vřešťovského a později
          Jiřího z Poděbrad). Jiní odešli do Polska, do Slezska, do Bavorska.
          Pro tematiku Tyrovských a obecně českých žoldnéřů 15. století je
          nejdůležitější skupinou ta, která — bezprostředně po uherském
          interregnu od roku 1440 — přešla do služeb Jana Jiskry z Brandýsa v
          Horních Uhrách. Lipany, kompaktáta a Zikmundova smrt tvoří dohromady
          událostní rámec, z něhož v krátké době vznikla nová a trvalá česká
          vojenská identita: profesionální polní voják pro najímatele kdekoliv
          ve střední Evropě.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci"
          />
        </p>
      </Col>
    </Row>
  </>
)
