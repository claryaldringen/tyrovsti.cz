import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const SoesterskaZasti = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="soesterska-zasti" />
        <h4>Soesterská záští{draft && <DraftBadge />}</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Soesterská záští (něm. <i>Soester Fehde</i>) v&nbsp;letech 1444 až
          1449 představuje jeden z&nbsp;nejvýznamnějších městských konfliktů
          pozdně středověké Říše. Bohaté vestfálské hanzovní město Soest se
          v&nbsp;něm úspěšně postavilo svému dosavadnímu zeměpánovi, mocnému
          kolínskému arcibiskupovi Dietrichovi II. von Moers, a přijalo za
          nového ochránce vévodu Jana I. z&nbsp;Kleve. Pětiletá válka, která se
          rozhořela napříč Vestfálskem a porýnskou oblastí, do sebe vtáhla
          říšská knížata, hanzovní města i burgundský dvůr. Pro vojenské dějiny
          střední Evropy je však klíčová především{' '}
          <b>masivní účast českých žoldnéřů</b> v&nbsp;arcibiskupově vojsku –
          letní tažení roku 1447, vedené saským vévodou Vilémem III. a opírající
          se o&nbsp;více než šest tisíc Čechů, představuje vůbec nejrozsáhlejší
          doloženou námezdní akci českých bojovníků v&nbsp;západní části Říše
          ve&nbsp;druhé čtvrtině 15. století.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Soester_Fehde"
          />
        </p>
        <p>
          Soest patřil v&nbsp;první polovině 15. století k&nbsp;předním městům
          vestfálského hanzovního okruhu. Jeho obchodní a finanční váha, opřená
          o dálkový obchod, se odrážela i v&nbsp;jeho právním postavení – tzv.{' '}
          <i>Soester Stadtrecht</i> patří k&nbsp;nejstarším písemně doloženým
          městským právům v&nbsp;německy mluvícím prostoru a stalo se vzorem pro
          řadu dalších městských obcí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Soest"
          />{' '}
          Od staletí byl Soest formálně součástí kolínského kurfiřtství, ovšem
          jeho měšťané si dlouhodobě hájili rozsáhlou samosprávu, vlastní
          soudnictví i svobodu hospodářské politiky. Kolínský arcibiskup nad
          městem fakticky vládl jen velmi volně.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra a vyhlášení záští</h5>
        <p>
          Konflikt vyrůstal z&nbsp;dlouhodobého napětí mezi snahou arcibiskupa
          Dietricha II. von Moers prosadit pevnější zeměpanskou kontrolu nad
          bohatým Soestem a obrannou politikou městské rady, která se naopak
          snažila své svobody dále rozšiřovat. Dietrich II., příslušník mocného
          porýnského hraběcího rodu Moers, patřil k&nbsp;nejaktivnějším
          teritoriálním politikům své doby – kromě kolínské arcidiecéze ovládali
          jeho příbuzní biskupské stolce v&nbsp;Münsteru a Paderbornu a
          usilovali o&nbsp;další expanzi v&nbsp;severozápadní Říši. Tato
          koncentrace moci stála proti sobě s&nbsp;rostoucí ambicí domu
          Kleve-Mark, jehož mladý vévoda Jan I. budoval na Dolním Rýně vlastní
          mocenský blok.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Dietrich_II._von_Moers"
          />
        </p>
        <p>
          Spor vyvrcholil na jaře a v&nbsp;létě <b>1444</b>. Soestská rada
          využila příležitosti a po vleklých jednáních ohlásila vystoupení
          z&nbsp;arcibiskupské svrchovanosti. Dne <b>5. června 1444</b> přijali
          soestští občané za svého nového zeměpána Jana I. z&nbsp;Kleve, který
          výslovně potvrdil veškerá staré výsady města a zaručil mu i&nbsp;práva
          nová. Necelé tři týdny nato, <b>25. června 1444</b>, vyhlásilo město
          arcibiskupovi formální záští (<i>Fehdebrief</i>); arcibiskupská strana
          takový krok nemohla přijmout, neboť v&nbsp;jejích očích šlo o&nbsp;
          otevřenou vzpouru proti církevní vrchnosti i o&nbsp;hrubé porušení
          říšského práva. Císař Friedrich III. nakonec stranil Kolínu a uvalil
          na Soest říšskou klatbu – ovšem bez praktického vojenského dopadu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Soest_Feud"
          />
        </p>
        <p>
          Konflikt tak měl od počátku dvojí povahu: na jedné straně šlo o
          vnitřní spor mezi zeměpánem a městem, na straně druhé o mocenské
          střetnutí mezi dvěma porýnsko-vestfálskými dynastiemi – Moersy a
          Klevsko-Marky. Brzy se k&nbsp;Soestu připojila biskupská města Münster
          a Paderborn (kde tamní kapituly v&nbsp; téže době svrhly Moersovy
          příbuzné), zatímco Dietrich získal podporu Dortmundu a
          sasko-durynských Wettinů.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Průběh záští v letech 1444–1446</h5>
        <p>
          První tři roky záští probíhaly převážně v&nbsp;režimu vyčerpávající
          partyzánské války. Žádná ze stran nedisponovala dostatečnými
          prostředky na trvalé polní vojsko, takže boje měly podobu řetězce
          drobných výpadů, plenění hellwegské oblasti a šarvátek
          o&nbsp;jednotlivé opěrné body. V&nbsp;březnu <b>1445</b> se kolínské
          oddíly pokusily o&nbsp;překvapivý úder na <b>Duisburg</b> na Dolním
          Rýně, který se však nezdařil a obránci je odrazili. Hlavní pohraniční
          válka se přesunula do prostoru kolem hradů <b>Bilstein</b> a{' '}
          <b>Fredeburg</b> v&nbsp;sauerlandské části kolínského teritoria, na
          něž si nárokovala klevská strana, a do oblasti Hellwegu mezi Soestem,
          Werlem a&nbsp;Dortmundem.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Soester_Fehde"
          />
        </p>
        <p>
          Arcibiskupské oddíly se snažily odříznout Soest od jeho zázemí
          a&nbsp;systematicky pleníly vesnice v&nbsp;okruhu Sassendorfu, Lohne,
          Erwitte, Geseke a Salzkotten. Klevská strana vedla protivýpady proti
          kolínskému teritoriu na Dolním Rýně a v&nbsp;okolí Bochumu,
          Wattenscheidu a&nbsp;Steele. Z&nbsp;menších měst byl těžce postižen
          zejména <b>Blomberg</b> v&nbsp;Lippské krajině, který byl roku 1447
          v&nbsp;průběhu hlavního saského tažení téměř úplně zničen. Hlavní
          oporou arcibiskupových operací ve Vestfálsku byl jeho maršálek{' '}
          <b>Johann von Spiegel</b>, doplněný arnsberským amtmanem{' '}
          <b>Johannem von Schädigen</b>; přímo v&nbsp;poli však Dietrich
          potřeboval profesionální námezdní vojsko, jehož sehnání se stalo
          ústředním tématem let 1445–1446.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00140.html"
          />
        </p>
        <p>
          První pokusy získat saskou pomoc spadají již do roku <b>1445</b>:
          arcibiskup Dietrich opakovaně apeloval na kurfiřta Friedricha II.
          Saského a snažil se přes wettinský dvůr otevřít cestu k&nbsp;náboru
          českých žoldnéřů. V&nbsp;průběhu roku <b>1446</b> své požadavky
          opakoval; v&nbsp;jedné fázi žádal jen poměrně skromných pět set jezdců
          a poprvé získal příslib od mladého durynského vévody{' '}
          <b>Viléma III. Saského</b>. Saský kurfiřt jeho prosby nakonec odmítl –
          Friedrich II. v&nbsp;téže době spěl k&nbsp;otevřenému konfliktu
          s&nbsp;vlastním bratrem, který přerostl v&nbsp;tzv.{' '}
          <i>Saskou bratrovražednou válku</i> (<i>Sächsischer Bruderkrieg</i>,
          1446–1451). Veškerá saská hotovost byla vázána doma a o&nbsp;velké
          tažení do Vestfálska nemohlo být řeči.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00140.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Klíčovým rysem Soesterské záští se stala mohutná účast{' '}
          <b>českých žoldnéřů</b> ve vojsku kolínského arcibiskupa. Dietrich II.
          si dobře uvědomoval, že vlastní zeměbrana ani kontingenty spojeneckých
          knížat na dobytí dobře opevněného Soestu nestačí. Sáhl proto po
          námezdních silách, jejichž věhlas v&nbsp;tehdejší Říši rychle rostl:
          po veteránech husitských a poděbradských válek, kteří se po skončení
          velkých domácích konfliktů nabízeli za žold v&nbsp;celé střední
          Evropě.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Dietrich_II._von_Moers"
          />
        </p>
        <p>
          Příchod Čechů na západoříšské bojiště byl zákonitým důsledkem poměrů
          v&nbsp;tehdejších Čechách. Po smrti císaře Zikmunda v&nbsp;roce 1437 a
          po pádu projektu Albrechta II. Habsburského se země ocitla
          v&nbsp;dlouhém bezvládí (<i>interregnum</i> 1439–1453). Mladičký
          Ladislav Pohrobek pobýval pod Friedrichovou poručnickou rukou, zatímco
          správu země fakticky drželi zemští hejtmani v&nbsp;čele s&nbsp;Jiřím
          z&nbsp;Poděbrad. Vojenské družiny bývalých husitů, sirotků a táboritů
          – nyní nazývané spíše <i>bratři</i>, případně <i>polní obce</i> – byly
          jen těžko vstřebatelné do mírové ekonomiky a hledaly živobytí
          v&nbsp;námezdné službě za hranicemi.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00133.html"
          />
        </p>
        <p>
          Ústřední epizoda českého angažmá v&nbsp;Soesterské záští spadá až do
          roku <b>1447</b>. Vlastní rekrutace začala v&nbsp;
          <b>lednu 1447</b>, kdy s&nbsp;ní vévoda Vilém III. Saský – tehdy
          shánějící posily proti vlastnímu bratrovi v&nbsp;saské bratrovražedné
          válce – zahájil jednání s&nbsp;celou řadou českých vojenských
          podnikatelů. Hlavními naverbovači v&nbsp;Čechách se stali burkrabě{' '}
          <b>Bedřich z&nbsp;Donína</b> (Friedrich von Dohna) a{' '}
          <b>Petr Holický ze&nbsp;Šternberka</b>, kteří v&nbsp;průběhu
          dubna&nbsp;1447 svolávali vojsko v&nbsp;Čechách. Již v&nbsp;
          <b>květnu 1447</b> bylo v&nbsp;Durynsku rozloženo přibližně{' '}
          <b>2&nbsp;500 mužů a více než 200 vozů</b>, dalších několik tisíc
          bojovníků se v&nbsp;téže době soustřeďovalo v&nbsp;západních Čechách
          a&nbsp;v&nbsp;Chebu.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00139.html"
          />
        </p>
        <p>
          Současně s&nbsp;náborem se však rozjela i diplomatická hra. Mohutná
          česká hotovost ve službách vévody Viléma přiměla kurfiřta Friedricha
          II. k&nbsp;jednání: koncem <b>dubna 1447</b> se oba bratři sešli
          v&nbsp;Naumburku, kde uzavřeli příměří v&nbsp;saské bratrovražedné
          válce. Vévoda Vilém tak měl naverbované české vojsko – ale doma již
          neměl, kde je nasadit. Právě v&nbsp;tu chvíli se otevřel prostor pro
          dohodu s&nbsp;arcibiskupem Dietrichem o&nbsp;přesměrování celé té
          žoldnéřské mašinerie do Vestfálska.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00139.html"
          />
        </p>
        <p>
          Naumburské pobratrské příměří přerostlo bezprostředně v&nbsp;jednání
          mezi vévodou a vyslanci kolínského arcibiskupa, kterými byli{' '}
          <b>Georg Spiegel</b> a&nbsp;<b>Apel Vitzthum</b> – nejvlivnější
          poradce Vilémův. Smlouva, uzavřená v&nbsp;
          <b>květnu 1447 v&nbsp;Naumburku</b>, fakticky odprodávala česky najaté
          vojsko za přesně stanovených finančních podmínek: arcibiskup se
          zavázal vést do Vestfálska <b>přibližně 12&nbsp;000 mužů</b> a platit
          za ně <b>1 rýnský zlatý týdně na hlavu</b>, vévodovi osobně přislíbil
          paušál <b>50&nbsp;000 zlatých</b> a&nbsp;třetinu kořisti
          a&nbsp;výkupného. Z&nbsp;těchto podmínek plynul Vilémovi mimořádný
          zisk – vlastním jezdcům totiž platil pouhých 20 grošů a&nbsp;pěšákům
          jen 10 grošů týdně, zatímco od arcibiskupa pobíral plný zlatý (24
          grošů). Marže vojensko-podnikatelské činnosti tak činila 4 grošů
          u&nbsp;jezdce, resp. 14 grošů u&nbsp;pěšáka týdně z&nbsp;každé hlavy.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00141.html"
          />
        </p>
        <p>
          Skutečný počet českých žoldnéřů, který se nakonec u&nbsp;Výmaru
          shromáždil, byl výrazně nižší než smlouvou slibovaných dvanáct tisíc
          mužů: ke koni i&nbsp;k&nbsp;noze jich jejich počet je doložen na{' '}
          <b>něco málo přes 6&nbsp;000</b>. Doplnily je menší durynské
          a&nbsp;saské oddíly, takže celková síla vojska Viléma III. se
          pohybovala kolem osmi tisíc bojovníků. České jádro však zůstávalo
          nepřehlédnutelné a&nbsp;v&nbsp;dobových pramenech se objevuje souhrnně
          jako <Cit>böhmische Söldner</Cit> nebo přímo{' '}
          <Cit>Hussitenkrieger</Cit>.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00142.html"
          />
        </p>
        <p>
          Vojensky přinášeli Češi do Vestfálska to, co tehdy nikde jinde
          v&nbsp;Říši nebylo dostupné v&nbsp;takové míře: zkušenost husitské
          polní války. Jejich charakteristickým prvkem zůstávala{' '}
          <i>vozová hradba</i>, taktická kombinace pavéznické a sudličné pěchoty
          s&nbsp;ručními palnými zbraněmi a lehkou jízdou, schopnost rychlého
          přesunu na velké vzdálenosti i tvrdá disciplína při pleněních. Právě
          tyto vlastnosti byly důvodem, proč po nich tolik říšských knížat
          sahalo, ač zároveň hluboce nedůvěřovalo jejich konfesijní a sociální
          nespolehlivosti – v&nbsp;očích katolických Vestfálců byli
          českobratrští bojovníci nadále kacíři, byť bojovali za arcibiskupa.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00112.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Patnáct českých kondotiérů Vilémova vojska</h5>
        <p>
          Patnáct českých kondotiérů, kteří se v&nbsp;
          <b>posledních dnech května 1447</b> shromáždili u&nbsp;Výmaru se svými
          oddíly, jsou doloženy v&nbsp;saských účetních knih jmenovitě – a tato
          pasáž představuje jeden z&nbsp;nejdetailnějších dochovaných seznamů
          české žoldnéřské velitelské vrstvy poloviny 15. století. Šestitisícové
          české vojsko se dělilo mezi následující kapitány:
        </p>
        <ul>
          <li>
            <b>Jan Calta z&nbsp;Kamenné Hory</b> (Hans Calta
            von&nbsp;Rabenstein) – přes 1&nbsp;200 mužů, největší jednotlivý
            oddíl
          </li>
          <li>
            <b>Jindřich Čeček z&nbsp;Pakoměřic</b> – 600–700 mužů
          </li>
          <li>
            <b>Jan Sádlo ze&nbsp;Smilkova</b> (na&nbsp;Lestně) – 600–700 mužů
          </li>
          <li>
            <b>Dobeš Vrš z&nbsp;Modřejovic</b> (na&nbsp;Radyni) – 600–700 mužů
          </li>
          <li>
            <b>Hynek Krušina ze&nbsp;Švamberka</b> (na&nbsp;Boru) – cca 520 mužů
          </li>
          <li>
            <b>Ješek Svojanovský z&nbsp;Boskovic</b> – 300–400 mužů
          </li>
          <li>
            <b>Petr Holický ze&nbsp;Šternberka</b> – 300–400 mužů
          </li>
          <li>
            <b>Vilém z&nbsp;Ilburka</b> – 300–400 mužů
          </li>
          <li>
            <b>Jindřich Libštejnský z&nbsp;Kolovrat</b> – 300–400 mužů
          </li>
          <li>
            <b>Jetřich Chlumecký z&nbsp;Janovic</b> – cca 200 mužů
          </li>
          <li>
            <b>Petr Kdulinec z&nbsp;Ostroměře</b> – cca 200 mužů
          </li>
          <li>
            <b>Bedřich z&nbsp;Donína</b> (Friedrich von&nbsp;Dohna) – cca 200
            mužů
          </li>
          <li>
            <b>Jan z&nbsp;Mosnova</b> – cca 200 mužů
          </li>
          <li>
            <b>Albrecht Krakovský z&nbsp;Kolovrat</b> – pod 100 mužů
          </li>
          <li>
            <b>Jan Zajíc z&nbsp;Hazmburka</b> (Hasenburg) – pod 100 mužů
          </li>
        </ul>
        <p>
          K&nbsp;hlavnímu jádru se připojila ještě skupina vedená{' '}
          <b>Janem Kolúchem z&nbsp;Falkenberka</b> (zastávajícím funkci
          <i> wagenburgmistra</i>) a&nbsp;od <b>10. července 1447</b> také
          oddíly <b>Jana Holuba ze&nbsp;Stojkova</b> a&nbsp;
          <b>Viléma ze&nbsp;Štropčic</b> v&nbsp;síle asi padesáti mužů.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00144.html"
          />
        </p>
        <p>
          Vrchní velení nad českým sborem převzal v&nbsp;táboře{' '}
          <b>Petr Holický ze&nbsp;Šternberka</b> jako kapitán českého vojska
          (jmenoval ho sám vévoda Vilém jako muže, jemuž důvěřoval), zatímco
          logistiku vozové hradby řídil Jan Kolúch z&nbsp;Falkenberka. Vojsko
          vyrazilo z&nbsp;Výmaru <b>30. května nebo 1. června 1447</b>;
          u&nbsp;Frankenhausenu (Strausburgu) překročilo Unstrut a&nbsp;
          <b>2. června</b> tábořilo u&nbsp;Körneru – posledního místa na území
          vévodství Viléma III. Právě v&nbsp;Körneru nechal vévoda vyhlásit
          podrobný vojenský řád upravující chování na pochodu
          i&nbsp;v&nbsp;táboře a&nbsp;důsledně oddělující české oddíly od
          německých. Již na samém začátku tažení přitom musel vévoda zápasit
          s&nbsp;neochotou některých českých kapitánů, kteří se zdráhali vyrazit
          do daleké a nejasné kampaně proti neznámým nepřátelům – část
          z&nbsp;nich se nechala k&nbsp;účasti dotlačit jen sliby dalších
          plateb.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00145.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Profily klíčových kondotiérů</h5>
        <p>
          <b>Jan Calta z&nbsp;Kamenné Hory</b> (asi 1426–1465) byl synem rytíře{' '}
          <b>Buška z&nbsp;Kamenné Hory</b>, který zemřel již roku 1433
          a&nbsp;byl pohřben v&nbsp;rabštejnském kostele. Calta představuje typ
          pozdněstředověkého válečnického podnikatele, jemuž žoldnéřská kariéra
          otevřela cestu do nejvyšších zemských úřadů. Sídlem rodu byl{' '}
          <b>Rabštejn nad Střelou</b>; v&nbsp;roce <b>1448</b> získal Calta
          v&nbsp;zástavě Žihli, roku <b>1453</b> mu král Ladislav Pohrobek
          udělil Přívozec a&nbsp;o&nbsp;dva roky později – v&nbsp;roce{' '}
          <b>1455</b> – přikoupil Chomutov a&nbsp;Blatno; k&nbsp;rabštejnskému
          panství dále připojil Chyše a&nbsp;Řepany. Jeho první ženou byla
          pravděpodobně sestra Jiřího z&nbsp;Poděbrad, druhou Kunhuta
          z&nbsp;Ronova; ze tří doložených dcer byly dvě provdány do rodů
          Kunštátů a&nbsp;Švamberků a&nbsp;třetí, Bonuše, za Beneše
          z&nbsp;Veitmile.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Calta_z_Kamenn%C3%A9_Hory"
          />
        </p>
        <p>
          Pod vestfálským tažením 1447 verboval Calta a&nbsp;vedl největší
          jednotlivý oddíl šestitisícového vojska – přibližně{' '}
          <b>1&nbsp;200 mužů</b> – a&nbsp;za rekrutaci si od vévody Viléma III.
          naúčtoval přes <b>17&nbsp;000 rýnských zlatých</b>, které mu však
          Vilém nikdy nevyplatil v&nbsp;plné výši a&nbsp;jejichž část musela být
          dodatečně vyrovnávána ještě o&nbsp;mnoho let později. V&nbsp;roce 1460
          přivedl do Bavorska zhruba 1&nbsp;500 mužů jako součást pětitisícového
          českého sboru, najatého vévodou Ludvíkem IX. Bavorsko-landshutským za{' '}
          <b>13&nbsp;500 rýnských zlatých</b>, 3&nbsp;000 bavorských hřiven
          a&nbsp;3&nbsp;000 uherských dukátů. Doma se mezitím prosadil jako
          diplomat: od roku 1454 zasedal mezi nižšešlechtickými přísedícími
          zemského soudu, v&nbsp;roce 1455 se stal radou a&nbsp;komorníkem krále
          Ladislava Pohrobka a&nbsp;v&nbsp;letech 1457–1458 zastával úřad
          nejvyššího mincmistra. Jeho životopis je názorným příkladem toho, jak
          se v&nbsp;poděbradských Čechách dal žoldnéřský kapitál proměnit
          v&nbsp;trvalý sociální vzestup.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00144.html"
          />
        </p>
        <p>
          <b>Petr Holický ze&nbsp;Šternberka</b> (†&nbsp;1454) byl synem Aleše
          Holického, nejvyššího zemského komorníka a&nbsp;jednoho ze čtyř
          hlavních katolicky orientovaných politiků poděbradské éry. Manželkou
          si vzal Annu ze&nbsp;Seinsheimu, ze&nbsp;starobylého rodu předků
          Schwarzenberků, a&nbsp;k&nbsp;rodovému majetku přidal panství kolem
          Českého Šternberka. Z&nbsp;hlediska Soesterské záští je klíčové, že
          vévoda Vilém III. svěřil právě Petrovi vrchní velení nad celým českým
          sborem – byl jmenován „kapitánem českého vojska&ldquo;
          a&nbsp;v&nbsp;tomto postavení zodpovídal za organizaci pochodu
          i&nbsp;za jednání s&nbsp;ostatními kondotiéry. Současně vedl vlastní
          oddíl o&nbsp;síle 300–400 mužů a&nbsp;společně s&nbsp;Bedřichem
          z&nbsp;Donína na jaře 1447 organizoval vlastní nábor v&nbsp;Čechách.
          Zemřel necelý rok před svým otcem a&nbsp;po smrti dědečka roku 1455
          přešlo poručnictví nad jeho synem Petrem II. na Zdeňka Konopišťského
          ze&nbsp;Šternberka.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ale%C5%A1_Holick%C3%BD_ze_%C5%A0ternberka"
          />
        </p>
        <p>
          <b>Aleš Holický ze&nbsp;Šternberka</b> (asi 1390–19. března 1455) sám
          do Vestfálska netáhl, ale ve sporu o&nbsp;žold pro vlastního syna
          a&nbsp;pro ostatní české kapitány hrál po roce 1448 ústřední smírčí
          roli. Patřil mezi nejvlivnější české politiky první poloviny 15.
          století: v&nbsp;listopadu 1420 ho Zikmund jmenoval jedním
          z&nbsp;dvanácti krajských správců, v&nbsp;letech 1422–1453 držel hrady
          Křivoklát, Týřov a&nbsp;Bečov, od ledna 1437 zastával úřad nejvyššího
          zemského komorníka (s&nbsp;přerušením po husitských bouřích
          nepřetržitě 1439–1455) a&nbsp;v&nbsp;září 1444 v&nbsp;Kutné Hoře
          patřil k&nbsp;hlavním tvůrcům volby Jiřího z&nbsp;Poděbrad zemským
          správcem. Právě tato kombinace – otcovský vztah ke kapitánovi vojska
          a&nbsp;pevné postavení v&nbsp;poděbradském táboře – z&nbsp;něj učinila
          přirozeného prostředníka pozdějšího vyrovnání. Pohřben byl
          v&nbsp;klášteře Sázavském.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ale%C5%A1_Holick%C3%BD_ze_%C5%A0ternberka"
          />
          <Qt publication={PUBLICATIONS.HOLICKI_THESIS} />
        </p>
        <p>
          <b>Hynek Krušina ze&nbsp;Švamberka</b> (†&nbsp;po roce 1454) byl
          bratrem slavného husitského hejtmana Bohuslava&nbsp;V., sám však
          patřil k&nbsp;čelným představitelům katolické strany v&nbsp;západních
          Čechách. Hrad Krasíkov získal kolem roku 1425/1426 za podpory císaře
          Zikmunda za 700&nbsp;kop pražských grošů s&nbsp;povinností tam
          udržovat sto koní pro obranu; jeho druhé velké sídlo Bor bylo dočasně
          dobyto husity, takže přesídlil do Manětína. Jako hejtman Plzeňského
          kraje podporoval v&nbsp;letech 1431 a&nbsp;1434 obležené Plzeňany
          proti Prokopovi Holému, v&nbsp;roce 1437 válčil s&nbsp;Bavory
          a&nbsp;v&nbsp;roce 1441 vedl vojsko, které dobylo hrad Skálu. Při
          Vilémově tažení 1447 přivedl do Výmaru oddíl asi 520 mužů – tedy jednu
          z&nbsp;největších českých jednotek. Jeho účast je z&nbsp;hlediska
          konfesijního vývoje pozoruhodná: Krušina, dříve katolický nepřítel
          husitů, nyní velel vojsku, jehož jádro tvořili veteráni právě těch
          husitských polních obcí, proti kterým před deseti lety bojoval.
          <Qt
            publication={PUBLICATIONS.PAYNE}
            href="https://www.payne.cz/3xS43787/KrusinovezeSvamberka.htm"
          />
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00144.html"
          />
        </p>
        <p>
          <b>Vilém z&nbsp;Ilburka</b> (asi 1415–11. září 1489) byl synem Půty
          z&nbsp;Ilburka, zástavního pána královského hradu Lokte
          a&nbsp;předního zikmundovce. Sám pocházel z&nbsp;rodu původně
          míšeňského, který držel statky i&nbsp;v&nbsp;Horní a&nbsp;Dolní Lužici
          – právě tato středoporýnsko-saská orientace rodu z&nbsp;něj činila pro
          Wettiny přirozeného partnera. Krátce před Soesterským tažením, roku
          1444, zasáhl ve prospěch Vartemberků v&nbsp;sérii bojů
          s&nbsp;lužickými vojsky a&nbsp;při šarvátce na předměstí Žitavy byl
          těžce raněn. Do Výmaru přivedl roku 1447 oddíl 300–400 mužů. Po roce
          1447 patřil mezi blízké spojence Jiřího z&nbsp;Poděbrad, ale roku 1465
          přešel k&nbsp;protipoděbradské Zelenohorské jednotě a&nbsp;po nástupu
          Matyáše Korvína se stal nejvyšším podkomořím. Trvale držel Mšené,
          Stvolínky a&nbsp;hrady Himlštejn a&nbsp;Ronov, dočasně řadu dalších –
          Borek, Kalich, Týřov, Sloup, Šumburk, Hauenštejn a&nbsp;Helfenburk.
          Pohřben je v&nbsp;charvateckém kostele.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Vil%C3%A9m_z_Ilburka"
          />
        </p>
        <p>
          <b>Bedřich z&nbsp;Donína</b> (Friedrich von&nbsp;Dohna) byl jedním
          z&nbsp;potomků míšeňských purkrabí, kteří po prohrané dohnaiské válce
          roku 1402 ztratili své původní rodové sídlo a&nbsp;přesídlili do Čech.
          Jeho rodová orientace mu otevírala dvojí svět – byl mu blízký jak dvůr
          českých Wettinů, tak prostředí české husitsko-poděbradské šlechty.
          Právě proto ho vévoda Vilém III. použil jako jednoho ze dvou hlavních
          verbířů: na jaře 1447 svolával Bedřich – společně s&nbsp;Petrem
          Holickým – v&nbsp;Čechách žoldnéřské oddíly a&nbsp;sám pak do Výmaru
          přivedl jednotku o&nbsp;síle asi 200 mužů. Jeho rolí tedy bylo nejen
          velení v&nbsp; poli, ale i&nbsp;překládání mezi saskou politikou
          a&nbsp;českým žoldnéřským trhem; bez tohoto jazykově a&nbsp;sociálně
          dvojího prostředníka by se nábor v&nbsp;tak krátkém čase pravděpodobně
          nezdařil.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/P%C3%A1ni_z_Don%C3%ADna"
          />
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00139.html"
          />
        </p>
        <p>
          <b>Apel Vitzthum starší ze&nbsp;Roßly</b> (asi 1400–asi 1470) nebyl
          český kondotiér, ale wettinský dvořan, jehož rolí stojí a&nbsp;padá
          celá organizace náboru. Od roku 1437 sloužil jako hofmistr kurfiřta
          Friedricha II. Pokojného, na přelomu let 1444/1445 přešel ke svému
          mladšímu bratru Vilémovi III. a&nbsp;ujal se hofmistrovské funkce na
          jeho durynském dvoře. Spolu s&nbsp;bratrem Bussem Vitzthumem
          a&nbsp;rytíři Friedrichem von&nbsp;Witzleben a&nbsp;Bernhardem
          von&nbsp;Kochberg patřil k&nbsp;jádru pánů, kteří vévodu Viléma
          vehnali do otevřeného konfliktu s&nbsp;Friedrichem II. – pro tuto roli
          mu pozdější tradice vynesla přízvisko „Brandmeister
          von&nbsp;Thüringen&ldquo;. V&nbsp;Naumburku v&nbsp;květnu 1447 stál
          Apel společně s&nbsp;Georgem Spiegelem v&nbsp;čele vévodova
          vyjednávacího týmu, jenž s&nbsp;arcibiskupem Dietrichem dohodl
          odprodej česky najatého vojska do Vestfálska, a&nbsp;právě roku 1447
          obdržel coburgskou pflege jako kompenzaci za své durynské statky
          zničené ve&nbsp;válce. Po Vilémově vzpamatování v&nbsp;roce 1450
          a&nbsp;po vojenském tažení proti bratřím Vitzthumům 1451–1452 přišel
          o&nbsp;všechny své državy a&nbsp;byl roku 1452 vypovězen; útočiště
          nakonec našel v&nbsp;Čechách, kde sloužil jako královský rada.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Apel_Vitzthum_der_%C3%84ltere_zu_Ro%C3%9Fla"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Tažení do Vestfálska v létě 1447</h5>
        <p>
          Po překročení Eichsfeldu a&nbsp;průchodu jižním Saskem, kde tažení
          zdržela místní jednání mezi knížaty a&nbsp;městy, postupovalo vojsko
          mezi <b>Göttingenem</b> a&nbsp;<b>Einbeckem</b> přibližně týden.
          Einbeck byl přinucen zaplatit mimořádný výpalný ve výši{' '}
          <b>10&nbsp;000 zlatých</b> a&nbsp;dodávat proviant. Ve dnech{' '}
          <b>11.–12. června 1447</b> přešlo vojsko Vesseru u&nbsp;
          <b>Holzmindenu</b> a&nbsp;u&nbsp;<b>Höxteru</b> převzal vrchní velení
          sám arcibiskup Dietrich II.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00146.html"
          />
        </p>
        <p>
          Vstup do Lippské krajiny provázelo systematické plenění. Dne{' '}
          <b>14. června 1447</b> bylo dobyto a vypáleno město i hrad{' '}
          <b>Blomberg</b>, dále byly těžce postiženy <b>Hörn, Lemgo, Detmold</b>{' '}
          a&nbsp;<b>Herford</b>. Zásobování tisícihlavého vojska se však stalo
          téměř neřešitelným problémem: místní obyvatelstvo se v&nbsp;davech
          utíkalo do opevněných měst, kraj se vyprazdňoval a&nbsp;arcibiskup,
          navzdory smlouvě uzavřené v&nbsp;Naumburku, nebyl schopen zajistit ani
          pravidelný žold, ani řádný proviant. Hladovějící české oddíly přešly
          k&nbsp;samostatným loupežným výpravám, plenily kostely a&nbsp;kláštery
          a&nbsp;jejich pověst v&nbsp;katolickém Vestfálsku se rychle zhoršovala
          – byť šlo o&nbsp;přímý důsledek arcibiskupova selhání jako vrchního
          velitele.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00146.html"
          />
        </p>
        <p>
          Po přechodu Teutoburského lesa u&nbsp;<b>Bielefeldu</b> dorazilo
          vojsko k&nbsp;<b>Lippstadtu</b>, který obléhalo ve dnech{' '}
          <b>20.–29. června 1447</b>. Pevně opevněné město se ubránilo, avšak
          okolí bylo zpustošeno. Hlavní úder pak směřoval na samotný{' '}
          <b>Soest</b>: obléhání bylo zahájeno <b>30. června 1447</b>.
          Strategickou výhodu si české oddíly vydobyly obsazením klášterа&nbsp;
          <b>sv. Walburgy</b> v&nbsp;předpolí města, odkud bylo možné vést
          dělostřelbu z&nbsp;<i>Büchsen</i> (děl) přímo na hradby. Ve{' '}
          <i>Schermutzelu</i> – drobném kavalerijním střetnutí – se Čechům
          dokonce podařilo úspěšně přepadnout vyjíždějící soestské jezdce.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00147.html"
          />
        </p>
        <p>
          Soest se však opíral o&nbsp;mimořádně silné středověké opevnění
          s&nbsp;dvojitým hradebním pásem, mohutnými baštami a&nbsp;četnými
          parkány – jedním z&nbsp;nejlépe vystavěných v&nbsp;celé severozápadní
          Říši. Posádka, posílená klevsko-mareckými oddíly i&nbsp;najatými
          žoldnéři městské rady, dokázala všechny útoky odrazit. Velký
          rozhodující útok celého vojska byl podniknut <b>19. července 1447</b>:
          obránci však ovládli vyšší pozice na hradbách, ztečové žebříky padly
          a&nbsp;ztráty obléhatelů byly značné. Útok skončil neúspěchem.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00149.html"
          />
        </p>
        <p>
          Morálka v&nbsp;obléhacím táboře poté prudce klesla. Soestští si toho
          všimli a&nbsp;přešli k&nbsp;ráznější protiakci – výpadům na obléhací
          pozice, přerušování zásobovacích cest a&nbsp;blokádě obchodu
          z&nbsp;dolního Porýní a&nbsp;Vestfálska, který měl arcibiskupské
          vojsko zásobit. Sliby Dietricha a&nbsp;jeho spojence vévody{' '}
          <b>Arnošta Saského</b>, že vyplatí žold a&nbsp;zajistí proviant proti
          zástavnímu listu na sedm durynských hradů a&nbsp;měst, zůstaly na
          papíře. Pod tlakem chybějících peněz a&nbsp;rostoucích ztrát byla část
          vojska rozpuštěna a&nbsp;<b>21. července 1447</b> – pouhé dva dny po
          neúspěšném velkém útoku – musel Vilém III. obléhání Soestu ukončit
          a&nbsp;zavelet k&nbsp;ústupu.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00149.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Ústup vojska a rozpad armády</h5>
        <p>
          Ústup probíhal jižnější trasou podél řeky Werry směrem ke Coburgu.
          Tento postup byl pečlivě zkoordinován s&nbsp;markrabětem{' '}
          <b>Albrechtem Braniborským</b>, který udržoval s&nbsp;Vilémem III.
          během průchodu Hesenskem do Eichsfeldu úzký kontakt, protože měl na
          takovém směrování vlastní zájem. Cílem bylo nepoškodit území
          würzburského biskupství.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00150.html"
          />
        </p>
        <p>
          Klíčový zlom přišel v&nbsp;táboře u&nbsp;<b>Hülfensbergu</b>{' '}
          v&nbsp;Eichsfeldu <b>29. července 1447</b>. Zde musel vévoda Vilém
          českým vojenským podnikatelům odhalit své záměry – že povede vojsko
          podél Werry, nikoli kratší trasou přes Mühlhausen k&nbsp;Výmaru. Mezi
          vévodou a&nbsp;Čechy, ale i&nbsp;mezi samotnými českými kapitány
          vypukly ostré spory o&nbsp;trasu pochodu a&nbsp;o&nbsp;to, kde
          a&nbsp;kdy budou vyplaceny zbývající nedoplatky žoldu. Skupina vedená{' '}
          <b>Jindřichem Libštejnským z&nbsp;Kolovrat</b> a&nbsp;
          <b>Janem Čaltou z&nbsp;Kamenné Hory</b> si nakonec vzala volnost
          vrátit se domů známou cestou na vlastní pěst. Ráno{' '}
          <b>30. července 1447</b> se polovina českých oddílů od vévody oddělila
          a&nbsp;pod velením Kolovrata a&nbsp;Čalty zamířila přes Mühlhausen,
          Výmar a&nbsp;Hof do Chebu, zatímco zbylé české jednotky pokračovaly
          s&nbsp;Vilémem přes Eisenach, Meiningen a&nbsp;Hildburghausen.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00150.html"
          />
        </p>
        <p>
          Cesta zpět nebyla snadná. Místní představitelé v&nbsp;Durynsku se –
          aniž by Čechy přímo napadali – stavěli žoldnéřským oddílům do cesty,
          kdykoli se odchýlili z&nbsp;nejkratší trasy, aby plenili nebo
          odpočívali. Hladovějící a&nbsp;ztrátami oslabené vojsko dorazilo do{' '}
          <b>Chebu</b> kolem <b>3.–4. srpna 1447</b> a&nbsp;čekalo zde na
          vyslance vévody Viléma. Vilém sám započal vyplácet poslední splátky{' '}
          <b>4. srpna 1447 v&nbsp;Coburgu</b>; jeho durynští úředníci dorazili
          do Chebu však až <b>9. srpna</b> – v&nbsp;době, kdy už byli Kolovrat
          a&nbsp;Calta se svými lidmi pryč. Úředníci v&nbsp;Chebu vyplatili část
          škod a&nbsp;na zbytek vystavili dlužní listy, čímž otevřeli mnohaletý
          spor o&nbsp;konečné vyrovnání.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00151.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Burgundská intervence a soestská obrana</h5>
        <p>
          Pro Soest bylo zásadní, že nezůstal v&nbsp;konfliktu sám. Vévoda Jan
          I. z&nbsp;Kleve byl synovcem burgundského vévody <b>Filipa Dobrého</b>{' '}
          (Philippe le Bon, 1396–1467), jednoho z&nbsp;nejmocnějších a
          nejbohatších panovníků tehdejší západní Evropy. Pro Burgundsko šlo
          nejen o&nbsp;dynastickou solidaritu, ale i o&nbsp;strategický zájem:
          oslabení Kolína a posílení klevské pozice na Dolním Rýně přesně
          zapadalo do dlouhodobé burgundské politiky pronikání do severoporýnské
          a vestfálské oblasti. Kolínský arcibiskup a&nbsp;wettinští vévodové
          měli na západě Říše „<i>gleichgelagerte Interessen</i>&ldquo; – tedy
          souběžné zájmy proti burgundské hegemonii, a právě proto Wilhelm III.
          tak ochotně přijal Dietrichovu nabídku na západní tažení.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00140.html"
          />
        </p>
        <p>
          Filip Dobrý poskytl klevsko-soestské straně finanční podporu,
          žoldnéřské oddíly i diplomatické krytí. V&nbsp;některých starších i
          populárních pracích se v&nbsp;této souvislosti zmiňuje i mladý{' '}
          <b>Karel Smělý</b> (tehdy ještě hrabě z&nbsp;Charolais, narozený
          1433), jehož první vojenské zkušenosti se měly odehrávat právě
          v&nbsp;rámci burgundských intervencí na pomoc Soestu; vzhledem
          k&nbsp;jeho mládí však šlo spíše o&nbsp;symbolickou účast v&nbsp;rámci
          otcovy politiky než o&nbsp;samostatné velení. Reálnou tíhu burgundské
          pomoci nesli zkušení velitelé Filipovy družiny a najatí pikardští a
          flanderští bojovníci, kteří doplnili řady obránců města a jeho
          spojenců.
        </p>
        <p>
          Vedle burgundské pomoci hrála na soestské straně roli i solidarita
          hanzovního prostředí. Ostatní vestfálská hanzovní města, byť oficiálně
          neutrální, propouštěla zbraně, sůl, obilí a peníze pro obleženou
          metropoli a pomáhala udržovat obchodní kontakty navzdory říšské
          klatbě. Dietrich II. se tak ocitl v&nbsp;situaci, kdy mu chybí jak
          prostředky na další najímání žoldnéřů, tak i politická legitimita:
          jeho válka proti vlastnímu městu, vedená navíc obávanými
          &bdquo;husity&ldquo; v&nbsp;jeho službách, mu na cti v&nbsp;Říši
          nepřidávala.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Maastrichtský arbitrážní mír 1449</h5>
        <p>
          Vyčerpání obou stran – Soestu i kolínského arcibiskupa – otevřelo
          cestu k&nbsp;vyjednávání. Po sérii dílčích příměří, opakovaně
          obnovovaných během zimy <b>1447/48</b>, byly boje definitivně
          zastaveny v&nbsp;<b>dubnu 1449</b>. K&nbsp;vlastnímu mírovému jednání
          došlo v&nbsp;<b>Maastrichtu</b> pod patronací burgundského vévody
          Filipa Dobrého a&nbsp;dvou vyslanců papežské stolice – kardinála{' '}
          <b>Mikuláše Kusánského</b> (Nikolaus von&nbsp;Kues) a&nbsp;{' '}
          <b>Juana Carvajala</b>. Smlouva byla uzavřena <b>27. dubna 1449</b>.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Soester_Fehde"
          />
        </p>
        <p>
          Maastrichtský mír v&nbsp;jádru potvrdil status quo, který si Soest
          vybojoval. Město zůstalo trvale součástí vévodství Kleve-Mark, jehož
          svrchovanost nad ním byla obecně uznána, a&nbsp;mohlo si ponechat
          veškeré své staré i&nbsp;nově potvrzené výsady. Současně klevská
          strana získala drobnější územní zisky – mj. <b>Xanten</b> přešel do
          klevského držení. Kolínský arcibiskup naopak musel rezignovat na
          obnovení své přímé vlády a&nbsp;spokojit se s&nbsp;udržením menších
          okolních hradů – předně <b>Bilstein</b>, <b>Fredeburg</b>{' '}
          a&nbsp;pevnosti <b>Kaiserswerth</b>. Šlo o&nbsp;jednoznačné politické
          a&nbsp;symbolické vítězství městské obce nad církevním zeměpánem,
          které navíc přispělo k&nbsp;rozpadu vestfálského městského svazu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Dietrich_II._von_Moers"
          />
        </p>
        <p>
          Paradoxně však toto vítězství zároveň zasadilo Soestu dlouhodobou
          ránu. Vystoupením z&nbsp;kolínského svazku se stalo malou enklávou
          téměř obklopenou kolínským územím, ztratilo přirozené spojení se svým
          někdejším hospodářským zázemím a postupně začalo upadat z&nbsp;pozice
          jednoho z&nbsp;předních hanzovních měst. Poslední místní hanzovní
          shromáždění se v&nbsp;Soestu konalo až roku 1604, ale jeho váha
          v&nbsp;Hanze už nikdy nedosáhla předválečné úrovně.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Soest"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Finanční dohra: spor o žold do roku 1492</h5>
        <p>
          Pro hospodářské dějiny saského a&nbsp;kolínského dvora měl spor
          o&nbsp;žold pro vojsko z&nbsp;roku 1447 dohru, která trvala téměř
          devět desetiletí a&nbsp;patří k&nbsp;nejlépe doloženým vyúčtováním
          žoldnéřského podnikání 15. století vůbec. Celkové náklady, které
          vévoda Vilém III. vyúčtoval arcibiskupovi za české vojsko, dosáhly{' '}
          <b>156&nbsp;351 rýnských zlatých a&nbsp;23 grošů</b>; připočtou-li se
          k&nbsp;tomu náklady na německé oddíly, stravování a&nbsp;náhrady škod,
          předložili durynští vyslanci arcibiskupovi celkový nárok ve výši{' '}
          <b>242&nbsp;093 zlatých a&nbsp;23 grošů</b>. Po odečtení již
          vyplacených záloh ve výši 11&nbsp;674 zlatých zbývalo doplatit{' '}
          <b>230&nbsp;419 zlatých a&nbsp;23 grošů</b> – nebo jako alternativu
          byla požadována zástava arcibiskupských statků <b>Bonn</b> a&nbsp;
          <b>Poppelsdorf</b>.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00153.html"
          />
        </p>
        <p>
          Arcibiskup Dietrich II. neměl prostředky takovou částku splatit.
          Argumentoval naopak nedisciplinovaností českých žoldnéřů, kterou mu
          Vilém přivedl, a&nbsp;snažil se odpovědnost za neúspěch obrátit proti
          vlastnímu vojevůdci. Spor mezi Saskem a&nbsp;Kolínem se postupně
          transformoval v&nbsp;trvalý problém říšské diplomacie: ještě{' '}
          <b>v&nbsp;květnu 1462</b> musel landkrabě <b>Ludvík Hesenský</b>{' '}
          zorganizovat v&nbsp;Kasselu společnou schůzku vyslanců obou stran.
          Dohoda dlouho nebyla v&nbsp;dohledu – původní pohledávka 235&nbsp;457
          zlatých se postupně snižovala: <b>v&nbsp;roce 1487</b> drážďanští
          vévodové přistoupili na 100&nbsp;000 zlatých, definitivně se{' '}
          <b>roku 1492</b> domluvili na pouhých <b>31&nbsp;000 zlatých</b>{' '}
          splatných v&nbsp;ročních splátkách po 2&nbsp;000 zlatých. Ani tato
          dohoda nebyla beze zbytku splněna – ještě v&nbsp;30.&nbsp;letech 16.
          století vznášel kurfiřt <b>Jan Fridrich Saský</b> nároky vůči
          kolínskému arcibiskupovi z&nbsp;dluhů, jejichž kořeny sahaly ke
          kampani roku 1447.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00155.html"
          />
        </p>
        <p>
          Souběžně probíhal vlastní spor mezi vévodou Vilémem III. a&nbsp;jeho
          českými vojenskými podnikateli, jejichž zbývající žold a&nbsp;náhrady
          za škody vzniklé při pochodu skrze Sasko dlouho zůstávaly nezaplaceny.{' '}
          <b>V&nbsp;březnu 1448</b> uznal smírčí soud část jejich nároků za dobu
          vlastní služby, další požadavky však zamítl. Skutečný průlom přinesla
          až teprve intervence <b>Jiřího z&nbsp;Poděbrad</b>, od roku 1458
          českého krále – právě jeho diplomatickým prostřednictvím se podařilo
          české vojenské podnikatele přimět ke snížení jejich nároků. Zbývající
          dluhy byly poté vyplaceny ve dvou splátkách:{' '}
          <b>v&nbsp;prosinci 1460 v&nbsp;Chebu</b> a&nbsp;
          <b>v&nbsp;červenci 1462 v&nbsp;Mostě</b>. Ke smírnému řešení vedlo již
          dříve zprostředkování významných českých šlechticů – jmenovitě{' '}
          <b>Aleše Holického ze&nbsp;Šternberka</b> (otce hejtmana Petra
          Holického) a&nbsp;samotného Jiřího z&nbsp;Poděbrad ještě v&nbsp;jeho
          hejtmanské fázi.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00152.html"
          />
        </p>
      </Col>
    </Row>
  </>
)
