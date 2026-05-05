import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const OdbojPodebradskychVsKorvin = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="odboj-podebradskych-vs-korvin" />
        <h4>
          Odboj Hynka a&nbsp;Jindřicha z&nbsp;Poděbrad proti Korvínovi ve
          Slezsku (1471–1490)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Po smrti krále <b>Jiřího z&nbsp;Poděbrad</b> (<b>22. března 1471</b>)
          zdědili jeho synové <b>Hynek z&nbsp;Poděbrad</b>,{' '}
          <b>Jindřich starší</b> a&nbsp;<b>Viktorin</b> minsterberské vévodství
          ve Slezsku a&nbsp;rodové statky v&nbsp;Čechách. Z&nbsp;jejich pozice
          slezských knížat se však po nástupu Vladislava&nbsp;II. Jagellonského
          a&nbsp;po vleklé válce mezi Vladislavem a&nbsp;Matyášem Korvínem stala
          jednou z&nbsp;nejtěžších: Korvín jako fakticky vládnoucí pán Slezska
          a&nbsp;Moravy systematicky tlačil na minsterberské Poděbrady, dokud je
          z&nbsp;velké části nezbavil rodového dědictví.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Minsterberkov%C3%A9"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Po olomouckém smíru roku 1479 zůstaly Slezsko, Morava a&nbsp;Lužice
          v&nbsp;držení Matyáše Korvína (do jeho smrti), zatímco
          Vladislav&nbsp;II. Jagellonský ovládl vlastní České království. Synové
          Jiřího z&nbsp;Poděbrad se ocitli mezi dvěma králi: jako čeští páni
          byli vázáni na Vladislava, jako slezská knížata byli pod přímou
          Korvínovou vrchnostenskou správou. Korvín, který si nikdy plně
          neodpustil, že byl Jiřího politickým protivníkem, využíval každé
          příležitosti k&nbsp;vyvíjení tlaku na minsterberské Poděbrady — od
          finančních pohledávek přes obvinění z&nbsp;velezrady až po ozbrojené
          zákroky.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Hynek_z_Pod%C4%9Bbrad"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Hynek z&nbsp;Poděbrad — vzdělaný, literárně činný kníže, autor
          erotických <i>frašek</i> ve&nbsp;stylu Boccaccia — se snažil
          v&nbsp;Korvínových službách udržet minsterberské vévodství
          manévrováním a&nbsp;diplomacií. Jindřich starší, jeho mladší bratr,
          byl pragmatičtější a&nbsp;pokoušel se s&nbsp;Korvínem dohodnout.
          V&nbsp;průběhu 80. let však byli oba bratři opakovaně nuceni
          k&nbsp;ústupkům — prodej částí minsterberského území, finanční
          vyrovnání, ztráta dílčích lén. Korvín systematicky kupoval či zabíral
          části panství a&nbsp;poděbradské knížecí postavení ve Slezsku se
          rozkládalo. Detailní průběh jednotlivých sporů a&nbsp;vojenských
          střetů nebyl v&nbsp;češtině souborně zpracován; rámcový obraz podává
          Wikipedie a&nbsp;regionální slezská literatura.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Minsterberkov%C3%A9"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Po Korvínově smrti (<b>6. dubna 1490</b>) se sice poměry uvolnily, ale
          minsterberská držení se podařilo udržet jen v&nbsp;omezené míře. Hynek
          z&nbsp;Poděbrad zemřel <b>11. července 1492</b> bez mužských dědiců,
          Jindřich starší pokračoval v&nbsp;sjednávání rodového majetku
          a&nbsp;teprve jeho potomci získali v&nbsp;první polovině 16. století
          zpět část minsterberského území. Ztráta minsterberského vévodství
          představuje konec pokusu Poděbradů udržet si knížecí postavení
          v&nbsp;říšském rámci a&nbsp;jejich definitivní redukci na status české
          panské rodiny.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Minsterberkov%C3%A9"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Pro slezskou stránku odboje minsterberských Poděbradů je klíčový{' '}
          <b>Peter Eschenloer</b> a jeho <i>Geschichte der Stadt Breslau</i>{' '}
          (knihy XIV–XV, ad annos 1474–1483), který coby vratislavský kancléř
          evidoval správní akty Matyáše Korvína vůči knížecím lénům v zemi
          včetně tlaku na Hynka a Jindřicha. Pokračování slezských zpráv najdeme
          ve vratislavských městských knihách a v{' '}
          <i>Sigismundovi Rosicz Chronica</i> (vydané Markgrafem v sérii{' '}
          <i>Scriptores Rerum Silesiacarum</i>).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://archive.org/details/diestadtnrnberg00schugoog"
          />
        </p>
        <p>
          <b>Antonio Bonfini</b> ve <i>Decades</i> IV (kniha 5–6) zachycuje
          Korvínovu slezskou politiku z budínského pohledu — pro Bonfiniho jsou
          spory s minsterberskými Poděbrady jen okrajovou epizodou, ale podává
          obraz Korvína jako rozhodného vladaře. České listiny týkající se
          minsterberského dědictví jsou vydány v Palackého <i>Archivu českém</i>{' '}
          (sv. IV–VI), zejména korespondence Hynka z Poděbrad s vratislavskou
          kapitulou a olomouckým biskupstvím.
          <Qt
            publication={PUBLICATIONS.BONFINI}
            href="https://mek.oszk.hu/04200/04231/"
          />
        </p>
        <p>
          Záznamy <b>Starých letopisů českých</b> ad annos 1471–1492 zmiňují
          jednotlivé akty — smrt Hynka 11. července 1492, vyrovnání Jindřicha
          staršího se Slezskou kanceláří — stručně a obvykle bez datace
          jednotlivých vojenských střetů; pro detailnější rekonstrukci je třeba
          sáhnout do vratislavských a olomouckých kapitulních akt.
          <Qt
            publication={PUBLICATIONS.STARI_LETOPISOVE}
            href="https://archive.org/details/scriptorumrerum02unkngoog"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Akce nemá výrazný žoldnéřský rozměr — šlo o&nbsp;dlouhý řetěz dílčích
          sporů, vyrovnání a&nbsp;dílčích ozbrojených zákroků, nikoli
          o&nbsp;polní tažení. Pro téma osy je relevantní především v&nbsp;tom,
          že poděbradské družiny — vycvičené ještě v&nbsp;době Jiřího královské
          vlády — se v&nbsp;důsledku úpadku minsterberského dvora rozptýlily.
          Část jejich příslušníků se objevuje v&nbsp;dalších letech
          v&nbsp;žoldnéřských službách u&nbsp;Wittelsbachů a&nbsp;v&nbsp;jiných
          říšských konfliktech, a&nbsp;to nezřídka jako protivníci uherských
          vojsk Korvína a&nbsp;jeho černé armády — čímž se odboj minsterberských
          Poděbradů nepřímo přetavil do žoldnéřské tradice.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Hynek_z_Pod%C4%9Bbrad"
          />
        </p>
      </Col>
    </Row>
  </>
)
