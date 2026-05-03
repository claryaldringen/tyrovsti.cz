import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const RakouskyBratrovrazednaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="rakousky-bratrovrazedny-valka" />
        <h4>
          Rakouská bratrovražedná válka (1458–1463){draft && <DraftBadge />}
        </h4>
        <p>
          Rakouská bratrovražedná válka (něm.{' '}
          <i>Österreichischer Bruderzwist</i>) byl dynastický spor mezi císařem
          Fridrichem III. a jeho mladším bratrem arcivévodou Albrechtem VI. o
          rakouské dědictví uvolněné po smrti Ladislava Pohrobka roku 1457.
          Konflikt vyvrcholil obležením císaře ve vídeňském Hofburgu na podzim
          1462, Korneuburskou smlouvou ze 2. prosince 1462 a skončil teprve
          Albrechtovou náhlou smrtí přesně o rok později.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/%C3%96sterreichischer_Bruderzwist"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Po smrti Ladislava Pohrobka roku 1457 zůstaly habsburské země
          rozděleny mezi tři příslušníky rodu — císaře Fridricha III., jeho
          bratra Albrechta VI. a tyrolského vévodu Zikmunda. Albrecht VI., který
          do té doby vládl v Předních Rakousích, vznesl nárok na podíl na
          Dolních a Horních Rakousích a opakovaně si stěžoval na nedostatečné
          finanční zabezpečení. Roku 1458 byl při sporném dělení uznán jeho
          podíl na Horních Rakousích, ale spor o Dolní Rakousy a o samotnou
          Vídeň pokračoval.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/%C3%96sterreichischer_Bruderzwist"
          />
        </p>
        <p>
          Albrecht VI. se postupně sblížil s wittelsbašskou opozicí proti císaři
          a v létě 1461 zahájil otevřenou válku. Jeho vojenská spojenecká pomoc
          ze strany vévody Ludvíka IX. Bavorsko-landshutského poskytla císaři
          záminku k vyhlášení říšské války proti Wittelsbachům, čímž se rakouský
          spor propojil s bavorskou válkou markraběte Albrechta III. Achilla a
          mohučským sporem. Pasovský biskup Oldřich z Nußdorfu, císařův kancléř
          a zároveň důvěrník vévody Ludvíka IX., balancoval mezi stranami a od
          roku 1460 hrál významnou roli v habsbursko-bavorských jednáních.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00163.html"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Albrecht VI. získal v Dolních Rakousích postupně podporu části šlechty
          a stavů, mimo jiné kvůli neoblíbenosti císařské finanční politiky a
          pokračující turecké hrozbě. V říjnu 1462 vypukla ve Vídni vzpoura
          podporující Albrechta. Císař Fridrich III. byl s manželkou Eleonorou
          Portugalskou a tříletým synem Maxmiliánem obležen ve vídeňském
          Hofburgu, zatímco vídeňští měšťané vedení purkmistrem Wolfgangem
          Holzerem a Albrechtovi žoldnéři ovládli město. Obléhání trvalo více
          než dva měsíce a císařská rodina trpěla nedostatkem zásob.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/%C3%96sterreichischer_Bruderzwist"
          />
        </p>
        <p>
          Z obležení Hofburgu císaře vysvobodilo až vojsko českého krále Jiřího
          z Poděbrad pod vedením jeho syna Viktorina, které dorazilo počátkem
          prosince 1462. Po krátkých bojích a vyjednávání byla{' '}
          <b>2. prosince 1462</b> uzavřena Korneuburská smlouva, podle které
          Fridrich III. souhlasil přenechat bratrovi na osm let správu Dolních
          Rakous a Vídně výměnou za roční rentu 4 000 dukátů. Spor však tím
          nebyl ukončen a vzájemná nedůvěra přetrvávala — Fridrich okamžitě
          poté, co Albrecht jeho podmínky nedodržel, obnovil nepřátelství.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Friedrich_III._(HRR)"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Spor ukončila až náhlá smrt Albrechta VI. <b>2. prosince 1463</b> ve
          Vídni — přesně rok po podpisu Korneuburské smlouvy. Bezdětný
          čtyřiačtyřicetiletý arcivévoda zemřel za nejasných okolností (podrobné
          dochované svědectví podal jeho komorník Hanns Hierszmann) a Fridrich
          III. získal zpět nedělenou vládu nad Dolními a Horními Rakousy.
          Albrecht byl pohřben v katedrále sv. Štěpána ve Vídni. Habsburské země
          zůstaly nadále rozdělené pouze mezi císařskou (vídeňskou) a tyrolskou
          linií, což trvalo až do roku 1490, kdy se po rezignaci Zikmunda
          Tyrolského sjednotily do rukou Maxmiliána I.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Albrecht_VI._(%C3%96sterreich)"
          />
        </p>
        <h5>Vzpoura purkmistra Wolfganga Holzera</h5>
        <p>
          Klíčovou osobností vídeňské vzpoury byl purkmistr Wolfgang Holzer,
          který se původně jako Albrechtův spojenec podílel na obléhání
          Hofburgu, ale následně po Korneuburské smlouvě přešel na císařovu
          stranu a pokusil se Vídeň vrátit Fridrichovi III. Pokus selhal, Holzer
          byl zajat Albrechtovými lidmi a <b>15. dubna 1463</b> ve Vídni veřejně
          rozčtvrcen. Holzerova poprava patří k nejznámějším exemplům krutosti
          vídeňského patriciátu této doby a ilustruje hloubku rozpolcení
          vídeňských stavů.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/%C3%96sterreichischer_Bruderzwist"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Rozhodující úlohu sehráli čeští žoldnéři na obou stranách konfliktu.
          Vídeňský Hofburg vysvobodilo z obležení vojsko Jiřího z Poděbrad v
          síle několika tisíc mužů pod velením Viktorina z Poděbrad, mladšího
          syna českého krále. Jiří tím podpořil císaře, získal jeho vděk a
          přislíbený titul — později zúročený při vyjednávání Pražského míru z
          22.–23. srpna 1463 — a zároveň obratným zprostředkováním Korneuburské
          smlouvy demonstroval svou pozici hlavního arbitra střední Evropy.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00163.html"
          />
        </p>
        <p>
          Na druhé straně sloužily v armádách Albrechta VI. a jeho
          wittelsbašských spojenců významné kontingenty českých žoldnéřů, mezi
          jejichž veliteli vynikali Dobrohost z Ronšperka, Racek z Janovic a na
          Rýzmberku či Mikuláš Kaplíř ze Sulevic na Vimperku. Tresp dokládá, že
          Kaplíř v té době velel u vévody Ludvíka IX. samostatnému kontingentu
          okolo 900 mužů. Konflikt tak opakovaně stavěl Čechy proti Čechům —
          typický rys říšských válek tohoto období, kdy česká žoldnéřská
          kondotta dodávala muže prakticky každé větší straně. Pro panování
          Jiřího z Poděbrad bylo paradoxně přínosné, že wittelsbašská strana
          měla přístup k týmž žoldnéřským zdrojům jako on sám — vyjednávací páka
          spočívala v možnosti tyto kontingenty kdykoliv zablokovat.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00164.html"
          />
        </p>
      </Col>
    </Row>
  </>
)
