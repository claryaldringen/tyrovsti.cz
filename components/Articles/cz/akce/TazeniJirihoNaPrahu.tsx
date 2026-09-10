import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const TazeniJirihoNaPrahu = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="tazeni-jiriho-na-prahu" />
        <h4>
          Tažení Jiřího z Poděbrad na Prahu (3. září 1448)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Tažení Jiřího z Poděbrad na Prahu v noci na <b>3. září 1448</b> bylo
          rychlou vojenskou akcí mladého hejtmana východočeské poděbradské
          jednoty, jejímž cílem bylo odstranění katolického vedení Starého Města
          pražského a předání pražského sídelního prostoru do rukou kališníků.
          Tato během jediného dne provedená operace, často nazývaná „dobytím
          Prahy“, ukončila několikaleté patové soupeření mezi poděbradskou a
          strakonickou jednotou ve prospěch kališnické strany a fakticky
          předznamenala Jiřího nástup k zemskému správcovství v roce 1452.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ji%C5%99%C3%AD_z_Pod%C4%9Bbrad"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Od smrti Hynka Ptáčka z Pirkštejna v srpnu 1444 byl vůdcem poděbradské
          (kališnické) jednoty mladý Jiří z Poděbrad. Praha v této době
          zůstávala v rukou katolické strany pod nejvyšším purkrabím Menhartem z
          Hradce, jenž byl jedním z hlavních politiků strakonické jednoty
          Oldřicha II. z Rožmberka. Pražská univerzita a rokycanovští kněží však
          zůstávali věrní Janu Rokycanovi a kališnickému vedení; Pražané se
          necítili spjati s katolickou linií, jakou Menhart razil. Jednání mezi
          oběma jednotami v letech 1446–1447 nepřinesla výsledek a poděbradská
          strana se rozhodla vyřešit věc silou.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ji%C5%99%C3%AD_z_Pod%C4%9Bbrad"
          />
        </p>
        <h5>Příprava vojska</h5>
        <p>
          Jiří z Poděbrad shromáždil vojsko v severovýchodních Čechách, kde se
          opíral o své poděbradské državy a o věrné východočeské landfrýdní
          kraje. Síla polního sboru bývá v dobových odhadech uváděna kolem
          devíti tisíc mužů; jádro tvořili zkušení husitští veteráni, polní
          jezdectvo a vozová hradba podle husitského vzoru. Jiří vyrazil
          vojensky na pochod z Kutné Hory na Prahu na konci srpna 1448, aniž by
          záměr byl předem prozrazen.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Georg_von_Podiebrad"
          />
        </p>
        <h5>Noční přepad (3. září 1448)</h5>
        <p>
          V noci z 2. na <b>3. září 1448</b> dorazilo Jiřího vojsko před Staré
          Město pražské. Útok byl veden překvapivě, brány byly otevřeny
          příznivci Jana Rokycany a kališnických radních uvnitř města. Pražská
          posádka Menharta z Hradce byla zaskočena, dílčí potyčky se odehrály na
          Staroměstském náměstí a v okolí Týnského chrámu. Boj však netrval
          dlouho — podle staročeských kronikářů byl Jiří pánem Prahy do
          dopoledních hodin a se ztrátou jediného svého bojovníka. Menhart z
          Hradce byl zatčen a převezen na Jiřího hrad Poděbrady, kde byl držen
          jako rukojmí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Georg_von_Podiebrad"
          />
        </p>
        <h5>Bezprostřední následky</h5>
        <p>
          Pražská městská rada byla přeobsazena ve prospěch poděbradské strany;
          Jan Rokycana se vrátil do Týnského chrámu, kde mohl znovu plně
          uplatňovat své postavení utrakvistického arcibiskupa. Menhart z Hradce
          v poděbradském zajetí <b>3. února 1449</b> zemřel za nevyjasněných
          okolností; jeho smrt obratem zvedla nové ozbrojené odpory strakonické
          jednoty, jež vyústily v polní tažení a v bitvu u Rokycan dne{' '}
          <b>4. června 1450</b>. V té Jiří definitivně porazil Oldřichovy
          oddíly.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ji%C5%99%C3%AD_z_Pod%C4%9Bbrad"
          />
        </p>
        <h5>Význam akce</h5>
        <p>
          Dobytí Prahy nebylo z hlediska polní vojny velkou bitvou — jednalo se
          o překvapivý zásah omezeného rozsahu, jehož skutečný význam byl
          politický a symbolický. Praha jako hlavní město byla od roku 1437
          klíčovou pákou každé zemské politiky a její faktické ovládnutí Jiřím
          změnilo poměr sil v zemi. Jiří získal kontrolu nad zemskou kanceláří,
          mincovnou, archivem i městskou pokladnou; obnovil královský dvůr v
          Praze a otevřel cestu k vlastnímu zvolení zemským správcem v roce
          1452.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ji%C5%99%C3%AD_z_Pod%C4%9Bbrad"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          <b>Staří letopisové čeští</b> ad annum 1448 podávají nejúplnější
          domácí svědectví o nočním přepadu Starého Města pražského. Letopisné
          zápisy uvádějí, že Jiří vyrazil z Kutné Hory s vojskem o devíti
          tisících mužích, že brány Starého Města byly otevřeny zevnitř
          příznivci Jana Rokycany a že celá akce stála jediného Jiřího
          bojovníka. Letopisy rovněž zaznamenávají zatčení Menharta z Hradce a
          jeho převoz do Poděbrad, kde 3. února 1449 zemřel za nevyjasněných
          okolností. Edice ve Fontes Rerum Bohemicarum, digitalizace
          archive.org.
          <Qt
            publication={PUBLICATIONS.STARI_LETOPISOVE}
            href="https://archive.org/details/scriptorumrerum02unkngoog"
          />
        </p>
        <p>
          <b>Aeneas Silvius</b> v <i>Historia Bohemica</i> (kap. LX–LXI) přinesl
          výklad pražského převratu z pohledu papežského sekretáře, jenž si v
          Římě udržoval kontakty s rožmberským dvorem. Aeneas vysvětluje úspěch
          Jiřího jako důsledek slabé katolické organizace v Praze a souznění
          většiny pražského obyvatelstva s utrakvistickou stranou. Latinský text
          dostupný v digi20 Bayerische Staatsbibliothek.
          <Qt
            publication={PUBLICATIONS.AENEAS_BOHEMICA}
            href="https://www.digitale-sammlungen.de/de/search?query=aeneas+silvius+historia+bohemica"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Tažení na Prahu bylo doloženě a výhradně českou vnitřní záležitostí.
          Jádro Jiřího vojska tvořili poddaní jeho východočeských statků,
          městské oddíly poděbradských landfrýdních krajů (Hradec, Chrudim,
          Čáslav, Kouřim) a najatí žoldnéřští veteráni husitských válek.
          Pravděpodobně se v Jiřího armádě nacházeli muži, kteří v předchozích
          letech sloužili u Jana Jiskry v Horních Uhrách a dočasně se vrátili do
          mateřských krajů — přesné personální údaje však chybí. Účast cizích
          kontingentů (bavorských, saských, slezských) není doložena. Akce sama
          o sobě ukazuje, jak silný byl v tomto období domácí polní potenciál —
          Jiří dokázal v krátkém čase shromáždit a vyslat do pole
          několikatisícové vojsko bez potřeby zahraničního žoldnéřského náboru.
          Pro časovou osu má akce hodnotu signálu: čeští žoldnéři, kteří v této
          době dosahovali svého mezinárodního maxima, vycházeli z domácího
          zemského prostředí, jež dokázalo provést sofistikovanou polní operaci
          s minimálními ztrátami.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ji%C5%99%C3%AD_z_Pod%C4%9Bbrad"
          />
        </p>
      </Col>
    </Row>
  </>
)
