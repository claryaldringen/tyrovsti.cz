import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const SaskaBratrovrazednaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="sasky-bratrovrazedny-valka" />
        <h4>Saská bratrovražedná válka{draft && <DraftBadge />}</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Úvod</h5>
        <p>
          Saská bratrovražedná válka (něm. <i>Sächsischer Bruderkrieg</i>)
          v&nbsp;letech <b>1446–1451</b> patří k&nbsp;nejzávažnějším dynastickým
          konfliktům pozdně středověké Říše. Na obou stranách stáli rodní bratři
          z&nbsp;wettinského domu – <b>kurfiřt Friedrich II. Saský</b>{' '}
          (přezdívaný <i>Sanftmütige</i>, Mírný) a&nbsp;mladší{' '}
          <b>vévoda Vilém III. Saský</b>, vládnoucí Durynsku z&nbsp;Výmaru.
          Jablkem sváru se stal <b>halský dělební výnos</b> z&nbsp;prosince
          1445, který měl rozdělit otcovské dědictví po Friedrichovi I.
          Bojovném, ale jeho ustanovení obě strany interpretovaly opačně. Spor
          přerostl ze soudních pří přes vzájemné záští až v&nbsp;otevřenou polní
          válku, jež po pět let pustošila Sasko, Durynsko, Vogtland
          a&nbsp;přilehlé pomezí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/S%C3%A4chsischer_Bruderkrieg"
          />
        </p>
        <p>
          Pro vojenské dějiny pozdně středověkých Čech má tato válka výjimečný
          význam: vévoda Vilém III. <b>už v&nbsp;lednu 1447</b> vyslal své
          rekrutéry – Bedřicha z&nbsp;Donína a&nbsp;Petra Holického ze&nbsp;
          Šternberka – do Čech, aby pro spor s&nbsp;bratrem najali husitské
          žoldnéřské sbory. Do poloviny května se v&nbsp;Durynsku shromáždilo
          asi 2&nbsp;500 Čechů s&nbsp;více než 200 vozy a&nbsp;několik tisíc
          dalších se sbíralo v&nbsp;západních Čechách a&nbsp;v&nbsp;Chebu –
          právě tato vojenská síla přiměla kurfiřta Friedricha k&nbsp;jednání
          a&nbsp;vyústila v&nbsp;<b>naumburské příměří 12. května 1447</b>.
          Shodou okolností se v&nbsp;té době v&nbsp;Sasku zdržoval vyslanec
          kolínského arcibiskupa Dietricha II. von Moers, který tam měl rovněž
          najímat Čechy – pro{' '}
          <a href="/prehled-vojenskych-akci/soesterska-zasti">
            Soesterské záští
          </a>
          . Když v&nbsp;Naumburku potkal Viléma s&nbsp;jeho čerstvě shromážděnou
          polní obcí, vznikl plán{' '}
          <b>převzít celý kontingent jako celek do služeb arcibiskupa</b>; Vilém
          zůstal jeho vrchním velitelem a&nbsp;vrcholem kooperace bylo, že
          kurfiřt Friedrich
          <b> 1. července 1447 v&nbsp;Eislebenu</b> uzavřel spojenectví na
          ochranu Durynska před návratem Čechů – v&nbsp;době, kdy už české
          vojsko stálo ve Vestfálsku. Tytéž oddíly v&nbsp;létě 1447 odsloužily
          slavné tažení proti Soestu, vrátily se v&nbsp;srpnu zpět ke Chebu –
          a&nbsp;po obnovení sporu mezi wettinskými bratry zamířily znovu do
          Durynska. Jména Čalty z&nbsp;Kamenné Hory, Vrše z&nbsp;Modřejovic,
          Krušiny ze Švamberka, Boskoviců, Holických ze Šternberka, Ilburků,
          Kolovratů, Janoviců i&nbsp;Donínů se v&nbsp;saských účetních knihách
          objevují dál – některá nepřetržitě až do uzavření míru v&nbsp;roce
          1451.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00138.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Wettinské dědictví a halský dělební výnos 1445</h5>
        <p>
          Wettinská doména patřila v&nbsp;první polovině 15. století
          k&nbsp;největším a&nbsp;nejbohatším územním celkům Říše. Sahala od
          saského kurfiřtství s&nbsp;Wittenbergem na severu, přes markrabství
          míšeňské s&nbsp;Drážďany a&nbsp;Lipskem, po&nbsp;celé Durynsko
          s&nbsp;Výmarem, Erfurtskou enklávou, krajinou kolem Eisenachu
          a&nbsp;franských pomezí. Po smrti <b>Friedricha I. Bojovného</b>{' '}
          v&nbsp;roce 1428 zůstali jeho synové zpočátku ve společné vládě, ale
          již ve čtyřicátých letech rostl tlak Viléma III. na osamostatnění –
          mladší bratr cítil, že ho starší kurfiřt vytlačuje z&nbsp;rozhodování
          o&nbsp;společné politice i&nbsp;z&nbsp;rozdělení důchodů.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Wilhelm_III._(Sachsen)"
          />
        </p>
        <p>
          V&nbsp;<b>prosinci 1445</b> uzavřeli oba bratři v&nbsp;Halle nad Sálou
          tzv.&nbsp;<b>halský dělební výnos</b> (<i>Hallescher Machtspruch</i>).
          Princip dělby byl přitom typicky středověký: starší bratr měl jen
          vytyčit dvě poloviny otcovského dědictví a&nbsp;mladší si měl jednu
          z&nbsp;nich vybrat. Friedrich rozdělil panství na{' '}
          <b>míšeňsko-saský</b> a&nbsp;
          <b>durynsko-osterlandský</b> díl. Vilém zvolil druhou variantu –
          získal Durynsko s&nbsp;celou pomezní krajinou na východ od Sály
          (Osterland kolem Altenburku, Plavna a&nbsp;Cvikova) i&nbsp;právo
          spoluúčasti na franských enklávách.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Hallescher_Machtspruch"
          />
        </p>
        <p>
          Halská dohoda však zůstala v&nbsp;několika klíčových bodech nejasná.
          Sporné bylo zejména{' '}
          <b>postavení Friedrichova syna a&nbsp;dědice Arnošta</b>, rozdělení
          důchodů ze stříbrných hor v&nbsp;Krušnohoří, otázka společných lén
          a&nbsp;právo vrchního dozoru nad městem Erfurtem. Friedrich II. trval
          na tom, že kurfiřtská hodnost a&nbsp;s&nbsp;ní spojené vrchní
          zeměpanské pravomoci se na Viléma nevztahují a&nbsp;že durynský díl má
          pouze charakter užívacího panství. Vilém naopak požadoval plnou
          suverenitu. Otevřený spor propukl v&nbsp;<b>průběhu roku 1446</b>, kdy
          Vilém začal vlastní jmenovat úředníky v&nbsp;hraničních úřadech
          a&nbsp;vybírat berně z&nbsp;území, na něž si dělal nárok i&nbsp;jeho
          bratr.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00138.html"
          />
        </p>
        <p>
          Na podzim 1446 oba bratři už otevřeně mobilizovali. Friedrich se
          opíral o&nbsp;hornosaská knížectví, biskupská města Naumburk
          a&nbsp;Merseburk, část lipské městské obce a&nbsp;hospodářsky mocné
          kurfiřtské hrady v&nbsp;Krušnohoří. Vilém naopak vsadil na dva trumfy:
          na vlastní durynské městské svazy s&nbsp;Erfurtem v&nbsp;čele
          a&nbsp;na <b>najmutí cizího polního vojska</b>. Pro tu druhou
          strategii se rozhodl velmi rychle: přes své rádce – především svého
          hofmistra <b>Apela Vitzthuma staršího ze&nbsp;Roßly</b> – v&nbsp;
          <b>lednu 1447</b> rozjel velkou náborovou akci v&nbsp;Čechách.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00138.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>
          Čeští žoldnéři: nábor 1447, vestfálská mezihra a návrat do Durynska
        </h5>
        <p>
          Vilémův český nábor začal již v&nbsp;<b>lednu 1447</b> a&nbsp;
          směřoval výhradně do připravované Saské bratrovražedné války proti
          vlastnímu bratru kurfiřtovi Friedrichovi II. Hlavními verbíři byli
          burkrabě <b>Bedřich z&nbsp;Donína</b> (Friedrich von Dohna) a&nbsp;
          <b>Petr Holický ze&nbsp;Šternberka</b>, jednající v&nbsp;Čechách
          jménem Viléma III. Do <b>poloviny května 1447</b> přišlo do Durynska
          asi <b>2&nbsp;500 mužů a&nbsp;přes 200 vozů</b>, a&nbsp;několik tisíc
          dalších se ještě sbíralo v&nbsp;západních Čechách a&nbsp;v&nbsp;Chebu
          – celkem mělo Vilémovo české vojsko dosáhnout zhruba šesti tisíc
          bojovníků. Právě tato vojenská síla přiměla kurfiřta Friedricha
          k&nbsp;jednání.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00138.html"
          />
        </p>
        <p>
          Naumburská jednání koncem dubna 1447 vyústila v&nbsp;překvapivý{' '}
          <b>waffenstillstand z&nbsp;12. května 1447</b>, který náhle zbavil
          Vilémovo čerstvě shromážděné žoldnéřské vojsko bezprostředního úkolu.
          V&nbsp;té době se v&nbsp;Sasku zdržoval vyslanec kolínského
          arcibiskupa Dietricha II. von Moers, <b>Georg Spiegel</b>, kterého
          arcibiskup vyslal s&nbsp;tím, aby s&nbsp;pomocí saského kurfiřta
          najímal Čechy pro <i>Soester Fehde</i>. Když Spiegel následoval
          kurfiřta Friedricha do Naumburku, dostal se zde přímo ke styku
          s&nbsp;Vilémem a&nbsp;jeho čerstvě shromážděnou českou polní obcí.
          Vznikl plán, jenž zapojil všechny tři strany: arcibiskup{' '}
          <b>převezme celý Vilémův český kontingent jako celek</b> do svých
          služeb, Vilém zůstane jeho vrchním velitelem a&nbsp;Soldunternehmerem,
          kurfiřt celé operaci napomůže nepřímo. Z&nbsp;Naumburku odjeli Spiegel
          a&nbsp;Vilémův hofmistr <b>Apel Vitzthum starší ze&nbsp;Roßly</b>{' '}
          rovnou do Kolína vyjednat smluvní podmínky.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00139.html"
          />
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00141.html"
          />
        </p>
        <p>
          Pro samotné české velitele to znamenalo náhlou a&nbsp;
          <b>nečekanou změnu úkolu</b>: očekávali službu v&nbsp;dosahu domova
          v&nbsp;Durynsku či Osterlandu, místo toho měli táhnout přes celou Říši
          až do Vestfálska. Vilémův příslib arcibiskupovi zněl na 12&nbsp; 000
          mužů, ale samotných Čechů – i&nbsp;s&nbsp;těmi, kteří byli teprve
          očekáváni – bylo jen něco málo přes 6&nbsp;000; vévoda proto musel
          dorekrutovat zbytek z&nbsp;durynského zázemí. Soldforderang
          arcibiskupovi byl 1&nbsp;rýnský zlatý týdně za hlavu, zatímco vlastním
          jezdcům platil Vilém jen 20 grošů a&nbsp;trabantům 10 – marže
          z&nbsp;celé operace tak mohla činit 4 až 14 grošů týdně na muže.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00142.html"
          />
        </p>
        <p>
          Dne <b>1. července 1447</b>, kdy už české žoldnéřské vojsko dávno
          stálo ve Vestfálsku, uzavřel kurfiřt Friedrich II. v&nbsp;
          <b>Eislebenu</b> spojenectví s&nbsp;hornosaskými biskupy
          z&nbsp;Naumburku a&nbsp;Merseburku, hrabaty z&nbsp;Mansfeldu
          a&nbsp;s&nbsp;městem <b>Erfurt</b>. <i>Eislebenský pakt</i> tentokrát
          nesměřoval proti bratru a&nbsp;jeho rádcům, ale výslovně k&nbsp;
          <b>ochraně Durynska před obávaným návratem českých žoldnéřů</b>{' '}
          a&nbsp;jím působenými škodami v&nbsp;zemi. Kurfiřt zde tedy vystupoval
          jako ochránce Durynska v&nbsp;zastoupení svého bratra, jenž měl
          mezitím dbát na to, aby cizí žoldnéřské vojsko zůstalo mimo zem. Tato
          situace je jasným dokladem cílené spolupráce wettinských bratří na
          uskutečnění velkého soldgeschäftu s&nbsp;arcibiskupem kolínským.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00143.html"
          />
        </p>
        <p>
          Ústup českého vojska z&nbsp;Vestfálska v&nbsp;první srpnové dekádě{' '}
          <b>1447</b> tak nebyl koncem epizody, ale přechodem k&nbsp;jejímu
          druhému dějství. Velká skupina kondotiérů – jmenovitě{' '}
          <b>Jindřich Libštejnský z&nbsp;Kolovrat</b> a&nbsp;
          <b>Jan Calta z&nbsp;Kamenné Hory</b> – se sice oddělila a&nbsp;vrátila
          domů přes Mühlhausen do Chebu, ale řada dalších oddílů zůstala
          v&nbsp;Durynsku a&nbsp;přijala další smlouvy přímo s&nbsp;Vilémem nebo
          s&nbsp;jeho úředníky. Jména jako{' '}
          <b>Petr Holický ze&nbsp;Šternberka</b>,{' '}
          <b>Hynek Krušina ze&nbsp;Švamberka</b>,{' '}
          <b>Dobeš Vrš z&nbsp;Modřejovic</b>,{' '}
          <b>Ješek Svojanovský z&nbsp;Boskovic</b>, <b>Vilém z&nbsp;Ilburka</b>{' '}
          nebo <b>Bedřich z&nbsp;Donína</b> se v&nbsp;saských účetních pramenech
          objevují průběžně <b>v&nbsp;letech 1448–1450</b>, vesměs jako velitelé
          menších, ale akceschopných oddílů o&nbsp;100–400 mužích. Hlavními
          shromaždišti pro ně zůstávaly <b>Cheb</b>, <b>Plavno</b> a&nbsp;
          <b>Altenburk</b>, odkud bylo možné vojsko rychle přepravit jak na
          franskou, tak na saskou stranu konfliktu.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00155.html"
          />
        </p>
        <p>
          Vilémovi tedy z&nbsp;velké části zůstal stejný personální fond, jaký
          si vybudoval pro vestfálské tažení. To ovšem přinášelo i&nbsp;tytéž
          problémy: nedostatek hotovosti na pravidelný žold, vleklou nedůvěru
          českých kapitánů, kteří už jednou zažili Vilémovu nedochvilnost při
          placení, a&nbsp; nutnost vždy znovu zástavou panství zajišťovat dluhy.
          Většina Vilémových válečných nákladů v&nbsp;letech 1448–1451 byla
          financována <b>zástavami durynských měst a&nbsp;hradů</b>,
          z&nbsp;čehož pak po válce vyrostla mnohaletá dluhová krize jeho dvora.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00156.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Vyhlášení války a první tažení 1448–1449</h5>
        <p>
          Naumburské příměří z&nbsp;dubna 1447 bylo z&nbsp;povahy věci dočasné.
          Žádný z&nbsp;ústředních sporných bodů – kurfiřtské pravomoci nad
          durynským dílem, dělba krušnohorských důchodů, spoluúčast na Erfurtu –
          nebyl vyřešen. Návrat českých žoldnéřských oddílů z&nbsp;Vestfálska
          v&nbsp;srpnu 1447 navíc dramaticky změnil rovnováhu: Vilém měl
          k&nbsp;dispozici zkušený, byť unavený polní sbor a&nbsp;své pohledávky
          z&nbsp;dělby začal vymáhat ráznější rétorikou.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00154.html"
          />
        </p>
        <p>
          K&nbsp;formálnímu obnovení války došlo v&nbsp;průběhu <b>roku 1448</b>
          . Friedrich II. nejprve vyzval bratra ke spolupráci proti rostoucímu
          vlivu erfurtské městské strany a&nbsp;když narazil na odmítnutí,
          prohlásil část Vilémových opatření za odporující halskému výnosu.{' '}
          <b>Vilém III.</b> odpověděl tím, že koncem 1448 vyhlásil Friedrichovi
          otevřené záští a&nbsp;svolal své vojsko do Výmaru a&nbsp;Erfurtu. Na
          opačné straně se Friedrich opíral o&nbsp;polní obec
          drážďansko-míšeňskou, hornosaská knížata, magdeburského arcibiskupa
          a&nbsp;významnou část lipské patricijské obce.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Saxon_Fratricidal_War"
          />
        </p>
        <p>
          První polní operace zimy a&nbsp;jara <b>1448–1449</b> měly převážně
          charakter pohraniční záští – plenění vesnic, přepady kupeckých
          konvojů, pálení mlýnů, šarvátky o&nbsp; opěrné hrady na Sále, na
          pomezí Krušnohoří a&nbsp;na pomezí severního Vogtlandu. Bratrské
          vojsko Vilémovo vpadlo na Friedrichovo území v&nbsp;okolí Naumburku
          a&nbsp;Merseburku, Friedrich na oplátku táhl proti Altenburku
          a&nbsp;Erfurtu. Žádná z&nbsp;velkých bitev se v&nbsp;tomto roce
          neudála, ale pohraniční oblasti utrpěly značnou škodu – v&nbsp;mnoha
          vesnicích kolem Mostu, Ronneburgu, Crimmitschau a&nbsp;Cvikova ještě
          po desítkách let stály ruiny po českých a&nbsp;saských oddílech.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00156.html"
          />
        </p>
        <p>
          Klíčovým rysem této etapy byla <b>obnovená účast Čechů</b> na obou
          stranách. Většina Vilémových oddílů zůstávala česká, ale
          i&nbsp;Friedrich II. – přes oficiální obrannou rétoriku eislebenského
          paktu – si v&nbsp;průběhu roku 1448 najal drobnější české skupiny,
          převážně přes severočeské pány na rozhraní s&nbsp;Krušnohořím. Dobové
          prameny zaznamenávají v&nbsp;jeho vojsku skupiny vedené šlechtici
          z&nbsp;okruhu Donínů a&nbsp;některých severočeských katolických rodů,
          kteří ovšem nepocházeli z&nbsp;tábora pozdněhusitské polní obce, ale
          spíše z&nbsp;tradičně promíšeňské severočeské šlechty.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00157.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Velké tažení 1450 a obléhání měst</h5>
        <p>
          Rok <b>1450</b> přinesl největší vojenské soustředění celé války. Obě
          strany pochopily, že vleklý pohraniční zápas je nepřivede
          k&nbsp;rozhodnutí, a&nbsp;přikročily k&nbsp; rozhodující kampani.
          Vilém III. shromáždil v&nbsp;Durynsku a&nbsp;v&nbsp;Erfurtu hlavní
          polní vojsko o&nbsp;síle kolem šesti tisíc bojovníků, jehož páteří
          byly stále české oddíly – mj. opět{' '}
          <b>Petr Holický ze&nbsp;Šternberka</b> jako jeden z&nbsp;hlavních
          polních hejtmanů, dále kondotiéři{' '}
          <b>Hynek Krušina ze&nbsp;Švamberka</b>,{' '}
          <b>Dobeš Vrš z&nbsp;Modřejovic</b> a&nbsp;menší oddíly <b>Janoviců</b>
          , <b>Ilburků</b> a&nbsp;<b>Donínů</b>.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00158.html"
          />
        </p>
        <p>
          V&nbsp;průběhu jara a&nbsp;léta 1450 se boje koncentrovaly do tří
          hlavních pásem. První bylo pomezí Sály mezi <b>Naumburkem</b>,{' '}
          <b>Weißenfelsem</b> a&nbsp;<b>Cvikovem</b>; druhé byla durynská
          kotlina kolem <b>Erfurtu</b>, <b>Výmaru</b> a&nbsp;<b>Jeny</b>, kde se
          pohybovaly Vilémovy posádky; třetí pak vogtlandské pomezí na čáře{' '}
          <b>Plavno – Hof – Cheb</b>, klíčové pro přísun českých posil.
          Friedrich II. zde hájil přístupové cesty a&nbsp; pokusil se odříznout
          bratra od českých rezerv. České oddíly z&nbsp;Vilémovy strany pak
          vedly výpady přes Vogtland do <b>osterlandského pomezí</b> –
          v&nbsp;okolí měst <b>Altenburk</b>, <b>Schmölln</b>, <b>Ronneburg</b>{' '}
          a&nbsp;
          <b>Gera</b>.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00159.html"
          />
        </p>
        <p>
          Charakteristickým rysem tažení 1450 byla převaha{' '}
          <b>obléhání a&nbsp;dobývání opevněných měst a&nbsp;hradů</b> nad
          otevřenou polní bitvou. Žádný z&nbsp;wettinských bratří se nemohl
          dovolit ztratit hlavní polní vojsko v&nbsp;jediné rozhodné bitvě,
          takže obě strany volily opatrnější cestu – rychlý úder na klíčové
          opěrné body, jejich obklíčení, dělostřelba z&nbsp;<i>Büchsen</i>,
          výpalné, propůjčení posádek. Mezi nejvážněji postižená místa patřily{' '}
          <b>Gera</b>, <b>Plavno</b>, <b>Crimmitschau</b>, <b>Schmölln</b>, část
          předměstí <b>Cvikova</b> a&nbsp;jednotlivé hrady na pomezí
          Friedrichova a&nbsp;Vilémova teritoria.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00160.html"
          />
        </p>
        <p>
          V&nbsp;hornofranském a&nbsp;vogtlandském pomezí proběhla v&nbsp;létě
          1450 řada dílčích polních srážek a&nbsp;obléhání. Vrcholem tažení bylo{' '}
          <b>dobytí Gery 23. října 1450</b> Jiřím z&nbsp;Poděbrad a&nbsp;jeho
          českým vojskem, které do hry vstoupilo na Vilémově straně (viz níže).
          Po pádu Gery přešel konflikt zpět do podoby vleklého obléhání měst
          a&nbsp;právě v&nbsp;této fázi se otevřel prostor pro{' '}
          <b>vnější intervenci</b> – konkrétně pro vstup českého zemského
          správce do hry.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00160.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Tažení Jiřího z Poděbrad a dobytí Gery 1450</h5>
        <p>
          Do páté kapitoly saské bratrovražedné války vstoupil v&nbsp;
          <b>říjnu 1450</b> český zemský správce <b>Jiří z&nbsp;Poděbrad</b>. Po
          sjednocení strakonické a&nbsp;poděbradské strany v&nbsp; Čechách
          (1448–1450) měl Jiří v&nbsp;rukou dostatečně silnou polní obec
          a&nbsp;mohl si dovolit zasáhnout v&nbsp;říšském konfliktu, jenž se
          přímo dotýkal severozápadních hranic království. Poděbrad podpořil
          Viléma III. – jednak kvůli dlouhodobé spolupráci s&nbsp;Vilémovými
          kondotiéry, jednak z&nbsp;důvodu obavy, aby vítězství kurfiřta
          Friedricha nepřineslo posílení katolického a&nbsp;protihusitského
          tlaku přes saskou hranici. Jeho intervence měla současně mocenskou
          rovinu: podpora Viléma byla zároveň gestem k&nbsp;
          <b>českým žoldnéřským kapitánům ve Vilémových službách</b>, mezi nimiž
          byla řada Jiřímu blízkých mužů.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
        <p>
          Pomocné tažení Jiřího z&nbsp;Poděbrad směřovalo do osterlandského
          pomezí. Zemský správce vedl polní vojsko přes severozápadní Čechy
          a&nbsp;Vogtland a&nbsp;po dílčích potyčkách dobyl{' '}
          <b>23. října 1450</b> město <b>Geru</b> – do té doby důležitý opěrný
          bod Friedrichovy strany. Geru obsadily české jednotky a&nbsp;předaly
          ji Vilémovým úředníkům. Tento úder měl pro celkový průběh kampaně
          významný morální dopad: jasně demonstroval, že kurfiřt Friedrich II.
          ztrácí kontrolu nad osterlandským pomezím, a&nbsp;že proti Vilémovi
          nestojí už jen jeho vlastní vojsko, ale fakticky i&nbsp;Jiří
          z&nbsp;Poděbrad jako reprezentant husitských Čech.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
        <p>
          V&nbsp;Jiřího vojsku, případně v&nbsp;přidružených oddílech Petra
          Holického ze&nbsp;Šternberka, se v&nbsp;roce 1450 u&nbsp; Gery
          objevuje řada mladších českých rytířů, kteří v&nbsp; dalších
          desetiletích sehrají významnou roli na obou stranách české politiky.
          Mezi nimi je z&nbsp;hlediska místních dějin západočeského pomezí
          pozoruhodný <b>Jošt z&nbsp;Einsiedlu</b>, příslušník drobné
          krušnohorské šlechty, který v&nbsp;tomto období sloužil v&nbsp;družině
          Petra Holického.
          <Qt publication={PUBLICATIONS.MACEK} /> Účast Jošta a&nbsp;jemu
          podobných na geranském tažení zapadá do širšího vzorce:
          <i> krušnohorská a&nbsp;chebská šlechta</i> systematicky využívala
          saské bratrovražedné války jako přirozeného rozšíření svého
          politického a&nbsp;hospodářského zázemí na říšskou stranu hranice.
        </p>
        <p>
          Po dobytí Gery operoval český sbor i&nbsp;Vilémova polní obec ještě
          několik týdnů na pomezí, postupně však s&nbsp; příchodem zimy bylo
          nasazení staženo. Pro Friedricha II. znamenala kombinace porážky
          u&nbsp;Gery a&nbsp;vyčerpání obou stran impuls k&nbsp;přijetí mírového
          jednání. Jiří z&nbsp;Poděbrad svým zásahem fakticky donutil kurfiřta
          k&nbsp;ústupu od ozbrojeného řešení a&nbsp;v&nbsp;dalších měsících
          přešel z&nbsp;role spojence Vilémova do role prostředníka mezi oběma
          bratry – role, která ostatně v&nbsp;jeho zahraniční politice 50.
          a&nbsp;60. let zůstane stálicí.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00162.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Naumburský mír 1451</h5>
        <p>
          Mírová jednání, otevřená pod tlakem podzimního obratu 1450, byla
          vedena v&nbsp;několika fázích a&nbsp;na různých místech. Vlastní
          rozhodující diplomatický akt se odehrál opět v&nbsp;<b>Naumburku</b>,
          městě, kde byl uzavřen i&nbsp;přelomový mezikrok z&nbsp;dubna 1447.
          Definitivní mírová smlouva mezi Friedrichem II. a&nbsp;Vilémem III.
          byla uzavřena <b>27. ledna 1451</b> a&nbsp;vstoupila do dějin jako{' '}
          <b>Naumburský mír</b> (něm. <i>Naumburger Frieden</i>). Hlavními
          zprostředkovateli byli arcibiskup magdeburský{' '}
          <b>Friedrich III. von Beichlingen</b>, landkrabě hesenský Ludvík II.
          a&nbsp;braniborský markrabě Friedrich II.; výrazně se uplatnil
          i&nbsp;předchozí diplomatický tlak Jiřího z&nbsp;Poděbrad.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Naumburger_Frieden_(1451)"
          />
        </p>
        <p>
          Smlouva v&nbsp;jádru potvrdila halskou dělbu z&nbsp;roku 1445
          v&nbsp;Vilémově prospěch – durynsko-osterlandský díl zůstal jeho
          samostatným územím a&nbsp;Friedrichova interpretace, podle níž šlo jen
          o&nbsp;užívací léno, byla fakticky odmítnuta. Současně se však bratři
          dohodli na <b>společném dohledu nad krušnohorskými stříbrnými doly</b>
          , na společné obraně proti vnějším nepřátelům a&nbsp;na společném
          vyslanectvu k&nbsp;říšským sněmům. Praktické otázky – mj. právní
          postavení Erfurtu, dělba franských enkláv a&nbsp;rozsah lén v&nbsp;
          severním Vogtlandu – byly odsunuty k&nbsp;dalšímu jednání, jež
          probíhalo s&nbsp;přestávkami až do poloviny padesátých let.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00163.html"
          />
        </p>
        <p>
          Pro Vilémovu stranu měl Naumburský mír především{' '}
          <b>vojenský rozměr</b>: smlouva mu uložila propustit většinu cizích –
          tj. českých – žoldnéřů a&nbsp;dále neudržovat polní obec o&nbsp;síle
          převyšující obvyklou zeměpanskou hotovost. Toto ustanovení bylo plněno
          postupně v&nbsp;průběhu jara a&nbsp;léta 1451: čeští kondotiéři
          dostávali konečné výplaty, někteří uzavírali nové krátkodobé smlouvy
          na obranné posádky a&nbsp;většina se vracela přes Cheb a&nbsp;Plavno
          do Čech. Pro Friedricha mír znamenal definitivní rezignaci na
          sjednocení wettinské domény pod vlastní rukou; pro celé Sasko
          a&nbsp;Durynsko přinesl několikaleté oddechové období, které ovšem
          brzy přerušil další konflikt – tzv. <i>Altenburský princežní únos</i>{' '}
          z&nbsp;roku 1455.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Friedrich_II._(Sachsen)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Finanční dohra a sociální dopad</h5>
        <p>
          Vilémova finanční bilance po pěti letech války byla katastrofální.
          Souhrnné náklady durynského dvora na žold, proviant, zástavy
          a&nbsp;náhrady škod z&nbsp;období 1446–1451 řádově ve{' '}
          <b>statisících rýnských zlatých</b>; přesné vyčíslení komplikuje fakt,
          že část dluhů z&nbsp;vestfálského tažení 1447 (vůči arcibiskupovi
          Dietrichovi) i&nbsp;část dluhů z&nbsp;bratrovražedné války (vůči
          českým kondotiérům) zůstávala v&nbsp;saských účetních knihách
          společně, často jen jako souhrnný <Cit>böhmische Schuld</Cit>.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00164.html"
          />
        </p>
        <p>
          Většinu dluhů musel Vilém řešit zástavami. V&nbsp;průběhu padesátých
          let postupně přeměnil zástavy do trvalých převodů – řada durynských
          hradů, městeček a&nbsp;komorních panství skončila v&nbsp;rukou
          bývalých velitelů jeho vojska nebo bohatých erfurtských
          a&nbsp;norimberských věřitelů. Část pohledávek českých kondotiérů byla
          vyřízena přímo v&nbsp;průběhu mírových let: Doloženy jsou výplaty
          v&nbsp;<b>letech 1452–1454</b> v&nbsp;Chebu a&nbsp; v&nbsp;dalších
          západočeských a&nbsp;chebsko-vogtlandských městech. Definitivně byl
          ovšem dluh vůči části českých velitelů uzavřen až v&nbsp;
          <b>šedesátých letech</b>, v&nbsp;rámci širšího vyrovnání
          zprostředkovaného Jiřím z&nbsp;Poděbrad jako českým králem.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00165.html"
          />
        </p>
        <p>
          Sociální dopady války se táhly napříč celým Sasko-Durynským prostorem.
          Vesnice na pomezí Sály, v&nbsp;Osterlandu a&nbsp;v&nbsp;severním
          Vogtlandu utrpěly dlouhodobý úbytek obyvatelstva, řada drobných sídel
          zpustla a&nbsp; prameny ze druhé poloviny 15. století je řadí mezi
          <i> wüste Dörfer</i>. Zvláštní dopad měla válka i&nbsp;na šlechtu
          pomezních krajů: část drobných rodů, které vsadily vojensky či
          hospodářsky na špatnou stranu, byla po Naumburském míru odsunuta
          z&nbsp;klíčových úřadů, jiná dokázala kombinací vojenských zásluh
          a&nbsp;sňatkové politiky vytvořit nová panství právě ze zástav, jež
          musel Vilém vydat.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00166.html"
          />
        </p>
        <p>
          Pro Erfurt – Vilémovo hlavní spojenecké město – znamenala válka
          vzestup do role samostatného mocenského hráče v&nbsp;regionu
          a&nbsp;právní emancipaci vůči saské kurfiřtské svrchovanosti. Tato
          pozice se však ukázala dlouhodobě neudržitelnou: již v&nbsp;
          <i>Erfurtském záští</i> šedesátých let bude město nuceno přijmout zpět
          část Wettinské pravomoci, a&nbsp;v&nbsp;první třetině 16. století se
          vrátí pod přímý zeměpanský dohled.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Erfurt"
          />
        </p>
      </Col>
    </Row>
  </>
)
