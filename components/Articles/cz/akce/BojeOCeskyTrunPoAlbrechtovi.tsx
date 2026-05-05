import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BojeOCeskyTrunPoAlbrechtovi = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="boje-o-cesky-trun-po-albrechtovi" />
        <h4>
          Boje o český trůn po Albrechtovi II. (1440–1453)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Po smrti krále Albrechta II. Habsburského dne <b>27. října 1439</b>{' '}
          zůstaly České země bez panovníka. Albrechtova vdova Alžběta
          Lucemburská porodila <b>22. února 1440</b> ve Vídni pohrobka
          Ladislava, jehož právní nárok na český a uherský trůn však narážel na
          praktickou nemožnost vlády nezletilého dítěte. Po více než deset let
          probíhalo v Čechách bezvládí a souboj zemských landfrýdů, husitských
          (kališnických) a katolických jednot, který nakonec vyústil v převahu
          kališnické strany pod vedením Jiřího z Poděbrad a v přijetí Ladislava
          Pohrobka za krále roku 1453.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ladislav_Pohrobek"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra a zemský sněm 1440</h5>
        <p>
          Na počátku roku 1440 přijal v Čechách stavovský sněm v Čáslavi
          rozhodnutí o ustavení čtyř východočeských landfrýdů (krajských spolků
          na obranu zemského míru). Hlavou této kališnické jednoty se stal Hynek
          Ptáček z Pirkštejna, jenž sjednotil čáslavský, hradecký, chrudimský a
          kouřimský kraj. Souběžně vznikla také jednota strakonická
          soustřeďující katolickou stranu pod vedením Oldřicha II. z Rožmberka a
          Menharta z Hradce. Dne <b>20. června 1440</b> rozhodlo 46 volitelů na
          pražské volbě o nabídnutí české koruny bavorskému vévodovi Albrechtovi
          III., jenž ji však po dlouhém rozvažování odmítl, čímž zůstal trůn
          fakticky neobsazen.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Hynek_Pt%C3%A1%C4%8Dek_z_Pirk%C5%A1tejna"
          />
        </p>
        <h5>Hejtmanství Hynka Ptáčka z Pirkštejna</h5>
        <p>
          Hynek Ptáček z Pirkštejna se v letech 1440–1444 stal vůdčí osobností
          kališnické politiky. Sjednotil východočeské kraje, na sjezdu v Kutné
          Hoře řídil jednání o budoucnosti země a v lednu 1444 prosadil v Kutné
          Hoře odsouzení radikálního táborského kněžského učení, čímž posílil
          pozici Jana Rokycany jako duchovního vůdce kališníků. Ptáček se cíleně
          chystal k jednání s katolickou stranou o přijetí Ladislava Pohrobka,
          ale tato jednání nestihl. Zemřel <b>27. srpna 1444</b> na Ratajích nad
          Sázavou na následky náhlé nemoci, pravděpodobně mrtvice, již utrpěl
          při cestě k jednáním do Dobříše.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Hynek_Pt%C3%A1%C4%8Dek_z_Pirk%C5%A1tejna"
          />
        </p>
        <h5>Nástup Jiřího z Poděbrad</h5>
        <p>
          Po Ptáčkově smrti převzal vedení kališnické (poděbradské) jednoty
          dvaadvacetiletý Jiří z Poděbrad. Jeho zvolení v Kutné Hoře nemá pevně
          doložené jediné datum, ale již v Kutné Hoře v roce 1444 a poté na
          sjezdu téhož roku byl uznán hejtmanem východočeského svazu. Jiří
          obratně pokračoval v Ptáčkově linii — usiloval o uznání Ladislava
          Pohrobka jako krále, ale s přechodným zemským správcovstvím v rukou
          kališníků. V letech 1445–1448 narůstalo napětí mezi poděbradskou a
          strakonickou jednotou, neboť Pražané pod Menhartem z Hradce a další
          katoličtí páni odmítali jakákoliv vážná jednání s kališnickou stranou.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ji%C5%99%C3%AD_z_Pod%C4%9Bbrad"
          />
        </p>
        <h5>Dobytí Prahy (3. září 1448)</h5>
        <p>
          Vyhrocení sporů přimělo Jiřího k ráznému kroku. Shromáždil v
          severovýchodních Čechách polní vojsko o síle přibližně 9 000 mužů a v
          noci na <b>3. září 1448</b> nečekaně překvapil Staré Město pražské.
          Pražská posádka katolického nejvyššího purkrabího Menharta z Hradce
          byla zaskočena a Praha padla téměř bez odporu, údajně se ztrátou
          jediného Jiřího bojovníka. Menhart z Hradce byl zajat a převezen na
          hrad Poděbrady jako rukojmí; následujícího roku v zajetí zemřel. Tímto
          úderem se Jiří z Poděbrad fakticky stal pánem Prahy a pánem situace v
          zemi.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Georg_von_Podiebrad"
          />
        </p>
        <h5>Bitva u Rokycan a porážka Strakonické jednoty (1450)</h5>
        <p>
          Strakonická jednota se nehodlala s ovládnutím Prahy smířit. V roce
          1449 vypukly na západě Čech otevřené boje mezi oběma jednotami, které
          vyvrcholily polním střetnutím u Rokycan dne <b>4. června 1450</b>, v
          němž Jiří z Poděbrad přemohl ozbrojence Oldřicha z Rožmberka. Porážka
          katolické strany na Plzeňsku definitivně potvrdila vojenskou převahu
          poděbradské jednoty a otevřela cestu k Jiřího uznání jako reálné
          výkonné moci v zemi.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ji%C5%99%C3%AD_z_Pod%C4%9Bbrad"
          />
        </p>
        <h5>Zemské správcovství a přijetí Ladislava (1452–1453)</h5>
        <p>
          Na svatojiřském sněmu v Praze dne <b>27. dubna 1452</b> byl Jiří z
          Poděbrad zvolen zemským správcem na dva roky, čímž stavové fakticky
          legalizovali jeho vládu. V roce 1453 došlo k jednáním mezi českými
          stavy a císařem Fridrichem III., jejichž výsledkem bylo vydání
          dvanáctiletého Ladislava Pohrobka. Dne <b>28. října 1453</b> byl
          Ladislav v pražské katedrále sv. Víta korunován českým králem, přičemž
          faktickou výkonnou moc si nadále podržel zemský správce Jiří z
          Poděbrad. Tím skončila třináctiletá perioda interregna a otevřela se
          nová etapa česko-rakouských vztahů, neboť Ladislav byl zároveň králem
          uherským a vévodou rakouským.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ladislav_Pohrobek"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          <b>Aeneas Silvius</b> v{' '}
          <i>De rebus gestis Friderici III imperatoris commentarii</i> (kniha I,
          kap. XV–XXVIII) zachycuje české interregnum z pohledu císařského
          diplomata. Aeneas se účastnil jednání s českými stavy o vydání
          Pohrobka a v De rebus zachoval rozsáhlé pasáže o vzestupu Jiřího z
          Poděbrad, o čáslavském sněmu 1440, o nabídnutí koruny bavorskému
          Albrechtovi III. i o pražském převratu 1448. Dílo tištěné v Římě 1551
          je digitalizováno v Bayerische Staatsbibliothek.
          <Qt
            publication={PUBLICATIONS.AENEAS_BOHEMICA}
            href="https://www.digitale-sammlungen.de/de/search?query=aeneas+silvius+de+rebus+gestis+friderici"
          />
        </p>
        <p>
          <b>Staří letopisové čeští</b> ad anna 1440–1453 sledují klíčové
          události interregna: smrt Hynce Ptáčka v srpnu 1444, vzestup Jiřího z
          Poděbrad, dobytí Prahy v noci na 3. září 1448, smrt Menharta z Hradce
          v zajetí, bitvu u Rokycan 4. června 1450 i svatojiřský sněm 27. dubna
          1452, na němž byl Jiří potvrzen zemským správcem. Letopisné záznamy
          obsahují také přesná data příjezdu Pohrobka do Prahy a jeho korunovace
          28. října 1453. Edice ve Fontes Rerum Bohemicarum, digitalizace
          archive.org.
          <Qt
            publication={PUBLICATIONS.STARI_LETOPISOVE}
            href="https://archive.org/details/scriptorumrerum02unkngoog"
          />
        </p>
        <p>
          <b>Peter Eschenloer</b>, městský písař vratislavský, ve své německy
          psané <i>Geschichte der Stadt Breslau</i> (1438–1479) zachoval slezský
          pohled na české interregnum. Eschenloer popisuje stálá jednání
          slezských stavů s rakouskými Habsburky a s Jiřím z Poděbrad a v textu
          jsou citovány doslovné výňatky z listů mezi Vratislaví, Vídní a
          Prahou. Edice J. G. Kunisch (Breslau 1827–1828) je digitalizována na
          archive.org. Doslovné texty diplomatické korespondence z let 1440–1453
          publikoval též František Palacký v <i>Archivu českém</i>, sv. I–IV
          (Kramerius NK ČR).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Peter_Eschenloer"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Boje o český trůn byly ze své povahy vnitročeským konfliktem, na němž
          se podíleli téměř výhradně čeští bojovníci obou stran — kališníci pod
          Hynkem Ptáčkem a Jiřím z Poděbrad i katolíci pod Oldřichem z
          Rožmberka, Menhartem z Hradce a posléze Zdeňkem ze Šternberka. V
          poděbradských posádkách sloužily zkušené roty husitských veteránů,
          mnozí z nich pak po Jiřího nástupu hledali službu nadále v zahraničí —
          u uherského Jana Jiskry z Brandýsa, u bavorských Wittelsbachů a
          později v polských válkách s Řádem. Z konfliktu proto vyšel polní
          žoldnéřský potenciál českého stavu posílený, nikoli oslabený, a stal
          se v polovině 15. století mezinárodně poptávaným zbožím. Pro časovou
          osu konfliktů, v nichž čeští žoldnéři působili, je toto interregnum
          zásadním zdrojovým prostředím — armády, jež se tu utvářely, později
          zasáhly do dění od Slezska až po Bavorsko.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ji%C5%99%C3%AD_z_Pod%C4%9Bbrad"
          />
        </p>
      </Col>
    </Row>
  </>
)
