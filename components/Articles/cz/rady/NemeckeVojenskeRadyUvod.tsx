import React from 'react'
import { Col, Row } from 'reactstrap'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const NemeckeVojenskeRadyUvod = () => (
  <Row>
    <Col>
      <p>
        Protivníci husitů se jejich způsobu boje učili přímo ve válce. Podle
        Maxe Jähnse k tomu byli nuceni: kdo chtěl postavit proti dělostřelectvu
        vlastní dělostřelectvo, potřeboval vozy, a kdo chtěl dobýt nepřátelskou
        vozovou hradbu, musel hlavní tíhu boje svěřit pěchotě.
        <Qt
          publication={PUBLICATIONS.JAHNS1889}
          href="https://archive.org/details/geschichtederkr00jhgoog/page/303/mode/1up"
        />{' '}
        Vozová hradba se tak v německých zemích spojila s vojskem natolik, že se
        slovem <i>Wagenburg</i> často označovalo vojsko vůbec. Dobové řády
        vozové hradby (<i>Wagenburgordnungen</i>) jsou proto většinou zároveň
        řády vojskové (<i>Heerordnungen</i>).
        <Qt
          publication={PUBLICATIONS.JAHNS1889}
          href="https://archive.org/details/geschichtederkr00jhgoog/page/304/mode/1up"
        />{' '}
        Zmínky o vozech vyzbrojených po husitském způsobu se podle Tomana
        objevují v usneseních stavů okolních zemí od porážky u Ústí nad Labem v
        roce 1426. Zprvu jsou ale velmi stručné a jen vyjmenovávají, co se má k
        vozům vzít do pole.
        <Qt
          publication={PUBLICATIONS.TOMAN}
          href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:175a8bf2-68d6-4f59-b376-5f0d3fe627ee"
        />
      </p>
      <p>
        Vozová hradba ale nebyla jediným tématem. Z porad říšských sněmů vzešly
        za husitských válek podle Tomana tři obecné vojenské řády pro chystané
        výpravy do Čech. Řeší přípravu tažení, kázeň ve vojsku a rozvrh střelby.
        Návrhy kurfiřtů z roku 1426 jsou podle něj jen chudým pokusem,
        frankfurtské usnesení z roku 1427 už tvoří ucelený řád o 48 článcích a
        třetí řád vydal norimberský sněm roku 1431.
        <Qt
          publication={PUBLICATIONS.TOMAN}
          href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:8b817ac0-57b2-408e-83e4-6a2585b6ccc2"
        />
        <Qt
          publication={PUBLICATIONS.TOMAN}
          href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:b20c2763-1196-4237-b865-63d45ed3cb7c"
        />
      </p>
      <p>
        Maximilian von Wulf si všímá, že řády z let 1428–1450 se, pokud jde o
        vozovou hradbu, omezují na výbavu vozů. Norimberské usnesení z roku 1428
        podle něj obsahuje vůbec nejstarší ustanovení o válečných vozech
        říšských hotovostí. Až z pozdější doby se dochovaly podrobnější řády,
        které popisují i pochod a táboření vozové hradby.
        <Qt
          publication={PUBLICATIONS.WULF1889}
          href="https://www.digitale-sammlungen.de/de/view/bsb11551340?page=12"
        />{' '}
        Nejživější obraz vozové hradby na pochodu i v táboře podle Wulfa
        podávají řády markrabího Albrechta Achilla.
        <Qt
          publication={PUBLICATIONS.WULF1889}
          href="https://www.digitale-sammlungen.de/de/view/bsb11551340?page=13"
        />
      </p>
      <p>
        Jako pramen k husitskému válečnictví berou oba autoři mladší řády s
        rezervou. Toman považuje řády z první poloviny století za přímé prameny.
        U mladších upozorňuje, že se do nich promítly změny poslední čtvrtiny
        století – zdokonalené dělostřelectvo a švýcarské a nizozemské vzory v
        užívání pěchoty. Přesto v nich nachází mnoho cenného, co vychází ze
        starých tradic, hlavně o manévrování s vozy a o technických pomůckách, o
        nichž starší prameny mlčí.
        <Qt
          publication={PUBLICATIONS.TOMAN}
          href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:93623095-6ff0-44b0-b4cd-e22e76c52925"
        />{' '}
        Wulf jde ještě dál: mladším řádům podle něj chybí nutná souvislost s
        husitským vzorem. Mohou proto sloužit jen k potvrzení a vysvětlení
        skromných přímých zpráv o husitském válečnictví, ne jako důkaz.
        <Qt
          publication={PUBLICATIONS.WULF1889}
          href="https://www.digitale-sammlungen.de/de/view/bsb11551340?page=13"
        />
      </p>
      <p>&nbsp;</p>
    </Col>
  </Row>
)
