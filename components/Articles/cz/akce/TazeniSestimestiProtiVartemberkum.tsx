import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const TazeniSestimestiProtiVartemberkum = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="tazeni-sestimesti-proti-vartemberkum" />
        <h4>
          Tažení Lužického šestiměstí proti Vartemberkům (1444–1450)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Série polních tažení a&nbsp;obléhání, jimiž se{' '}
          <b>Lužické šestiměstí</b> (Žitava, Budyšín, Görlitz, Löbau, Kamenec
          a&nbsp;Lubaň) v&nbsp;čele s&nbsp;hejtmany Hertvíkem z&nbsp;Rusinova
          a&nbsp;Albrechtem ze Schreibersdorfu pokoušelo zlomit pohraniční
          loupeživé záští <b>Bohuslava ze Vartemberka</b> a&nbsp;jeho příbuzných
          v&nbsp;severních Čechách a&nbsp;na pomezí Horní Lužice. Po letech
          pohraničních bojů se městům podařilo dobýt vartemberský hrad Tolštejn
          a&nbsp;dočasně zlomit moc rodu na hornolužicko-českém pomezí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Lu%C5%BEick%C3%A9_%C5%A0estim%C4%9Bst%C3%AD"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Lužické šestiměstí vzniklo jako obranný spolek proti loupeživému
          rytířstvu už roku 1346 a&nbsp;v&nbsp;době interregna po smrti
          Albrechta II. Habsburského (1439) získalo na samostatnosti — bez krále
          musela města zajišťovat zemský mír sama. Ústředním protivníkem se stal
          rod Vartemberků, jehož severočeské hrady (Tolštejn, Krásná Lípa,
          Sloup) ležely na obchodních cestách z&nbsp;hornolužických měst do
          Čech. Bohuslav ze Vartemberka a&nbsp;jeho příbuzní z&nbsp;těchto
          pevností přepadávali kupce ze&nbsp;Žitavy, Budyšína a&nbsp;Görlitz
          a&nbsp;jejich akce nabývaly rozměrů otevřené pohraniční války.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Lu%C5%BEick%C3%A9_%C5%A0estim%C4%9Bst%C3%AD"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Šestiměstí postavilo městská polní vojska se žoldnéřskými hejtmany
          a&nbsp;vlastním dělostřelectvem. Postupně oblehlo a&nbsp;dobylo
          několik vartemberských pevností; korunou tažení bylo dobytí{' '}
          <b>Tolštejna</b> v&nbsp;roce 1444. Boje pokračovaly po další roky
          v&nbsp;podobě výpadů a&nbsp;protiakcí; vartemberské družiny opakovaně
          obnovovaly nájezdy a&nbsp;města musela znovu mobilizovat. Definitivně
          se podařilo loupeživé záští utlumit teprve kolem roku 1450, kdy se
          obecná situace stabilizovala a&nbsp;v&nbsp;Čechách rostla autorita
          zemského správce Jiřího z&nbsp;Poděbrad.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Lu%C5%BEick%C3%A9_%C5%A0estim%C4%9Bst%C3%AD"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Vartemberská severočeská pozice byla výrazně oslabena, část dobytých
          hradů zůstala v&nbsp;rukou Šestiměstí nebo byla rozbořena. Šestiměstí
          si tažením potvrdilo roli reálné regionální mocnosti, schopné vést
          samostatnou polní operaci proti šlechtickému protivníkovi. Detailní
          rekonstrukce jednotlivých tažení vyžaduje práci s&nbsp;hornolužickými
          městskými archivy; Wikipedie podává pouze rámcový obraz a&nbsp;rozsah
          českých pramenů je omezený.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Lu%C5%BEick%C3%A9_%C5%A0estim%C4%9Bst%C3%AD"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Klíčovým narativním pramenem k&nbsp;tažení Šestiměstí jsou{' '}
          <b>hornolužické městské anály</b> — zejména žitavská kronika Johanna
          z&nbsp;Gubenu (<i>Annales Zittavienses</i>) a&nbsp;görlitzské městské
          knihy, jež zaznamenávají vyhlášení záští, počet vyzbrojených městských
          oddílů a&nbsp;dělostřelectva i&nbsp;průběh obléhání Tolštejna roku
          1444. Edice hornolužických pramenů vyšly v&nbsp;řadě{' '}
          <i>Scriptores Rerum Lusaticarum</i> (Görlitz, 19. století) a&nbsp;jsou
          dostupné v&nbsp;digitalizovaných svazcích Bayerische Staatsbibliothek
          (digi20).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Lu%C5%BEick%C3%A9_%C5%A0estim%C4%9Bst%C3%AD"
          />
        </p>
        <p>
          Pro českou rovinu konfliktu je nepostradatelný <b>August Sedláček</b>,
          jehož <i>Hrady, zámky a&nbsp;tvrze Království českého</i>,
          sv.&nbsp;XIV (Litoměřicko), zachycuje severočeské vartemberské državy
          včetně chronologických dokladů obléhání Tolštejna a&nbsp;Krásné Lípy
          s&nbsp;odkazy na původní listinné prameny v&nbsp;archivech Žitavy
          a&nbsp;Görlitz. Sedláčkova kompilace zůstává nejúplnější českou
          monografií k&nbsp;hradům severočeského pomezí a&nbsp;svazek je
          digitalizován na archive.org.
          <Qt
            publication={PUBLICATIONS.SEDLACEK1}
            href="https://archive.org/details/hrady-zamky-tvrze-1-chrudimsko"
          />
        </p>
        <p>
          Listinný materiál šestiměstí — opovědní listy, výpovědní vzkazy
          a&nbsp;zápisy o&nbsp;žoldu městských kontingentů — byl publikován v
          edici <i>Codex diplomaticus Lusatiae superioris</i> (Görlitz, 1856).
          Detailní rekonstrukce jednotlivých tažení by si vyžádala práci přímo
          s&nbsp;hornolužickými městskými archivy, jež nejsou v&nbsp;úplnosti
          digitalizovány.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Sechsst%C3%A4dtebund"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Z&nbsp;hlediska tématu žoldnéřské služby českých rytířů jde
          o&nbsp;periferní událost — obě strany konfliktu však byly tvořeny
          převážně Čechy. Šestiměstí najímalo městské žoldnéře včetně husitských
          veteránů, kteří se po Lipanech rozptýlili do pohraničí a&nbsp;hledali
          zaměstnání u&nbsp;říšských stavů. Vartemberské družiny rovněž čerpaly
          z&nbsp;rezervoáru rozptýlených husitských a&nbsp;katolických
          bojovníků. V&nbsp;tomto smyslu se akce řadí mezi drobná pohraniční
          záští, která v&nbsp;letech 1437–1450 fungovala jako přechodový mostek
          mezi husitskými polními vojsky a&nbsp;pozdějším systémem říšské
          žoldnéřské služby — žádný z&nbsp;významných hejtmanů, které sledujeme
          jinde, zde však doložen není.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Lu%C5%BEick%C3%A9_%C5%A0estim%C4%9Bst%C3%AD"
          />
        </p>
      </Col>
    </Row>
  </>
)
