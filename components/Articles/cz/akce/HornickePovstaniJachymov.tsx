import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const HornickePovstaniJachymov = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="hornicke-povstani-jachymov" />
        <h4>Hornické povstání v Jáchymově (1525){draft && <DraftBadge />}</h4>
        <p>
          Hornické povstání v Jáchymově (něm. <i>Joachimsthal</i>) na jaře 1525
          bylo ozbrojeným protestem stříbrokopů a horníků jednoho z
          nejvýznamnějších rudných center pozdně středověké Evropy. Vzpoura byla
          ohlasem soudobé německé selské války, hutmanské krize cen stříbra a
          sporu se zeměpanskou vrchností hraběcího rodu Šliků, kterému Jáchymov
          patřil. Povstání bylo potlačeno mírovou cestou, ale dlouhodobě
          poznamenalo vztah hornické obce ke šlikovské správě a předznamenalo
          přechod jáchymovských dolů do královských rukou v polovině 16.
          století.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/J%C3%A1chymov"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Jáchymov byl založen Šliky v letech 1516–1520 jako horní město na
          krušnohorské stříbrné žíle Geyer–Schlettau–Joachimsthal. Během deseti
          let vyrostl na druhé největší město království po Praze; počet
          obyvatel přesáhl 18 000 a tamní mincovna razila proslulé
          guldengroschen — tzv. <i>Joachimsthaler</i>, později jen <i>tolar</i>.{' '}
          Šlikovská správa prosazovala přísnou hornickou zřízenost (něm.{' '}
          <i>Bergordnung</i>) z let 1518 a 1521; ta upravovala mzdy, pracovní
          dobu i podíly horníků na výtěžku, ovšem ve prospěch těžařů. V první
          polovině 20. let došlo na evropském trhu se stříbrem k poklesu cen, a
          Šlikové reagovali snížením podílů a tlakem na mzdové škrty.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Joachimsthal"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Vzpoura propukla na jaře 1525, ve stejné době, kdy v Sasku a Frankách
          vrcholila selská válka. Jáchymovští horníci, organizovaní v silných
          cechovních strukturách <i>Knappschaftu</i>, vystoupili proti snižování
          mezd a proti šlikovským zástavním poplatkům. Vzbouřenci ovládli na
          několik týdnů sídlo radnice a požadovali obnovení starších,
          výhodnějších podmínek hornické zřízenosti. Šlikové jednali s povstalci
          přes ústní dohody — vzpoura neeskalovala v ozbrojené střetnutí, ale v
          urputné stávce a v opakovaných shromážděních horníků. Stávkové výpady
          se odehrávaly u nejedné šachty a krušnohorské hutě.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/J%C3%A1chymov"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Šlikovská správa pod tlakem horní obce přistoupila na revizi hornické
          zřízenosti — nová verze z roku 1525 obsahovala dílčí ústupky ve
          prospěch horníků (zvýšení podílů, omezení nedělní práce, lepší
          pracovní bezpečnost). Stávkové akce po několika týdnech ustaly. Z
          politického hlediska však vzpoura odhalila slabost soukromé šlikovské
          vrchnosti vůči nejmocnějšímu hornímu městu království a posílila zájem
          panovníka o přímou královskou správu jáchymovských dolů. K úplnému
          převzetí Jáchymova královskou komorou došlo postupně po roce 1528 a
          definitivně roku 1545; ve stejné době zaniklo právo Šliků razit
          vlastní mince.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Joachimsthal"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Pro hornické povstání v Jáchymově jsou nezastupitelné{' '}
          <b>jáchymovské městské knihy</b> a <i>Bergordnungy</i> šlikovské
          správy z let 1518, 1521 a 1525, které dnes uchovává Státní okresní
          archiv Karlovy Vary (fond Jáchymov) a Státní oblastní archiv v Plzni.
          Dílčí texty hornických řádů byly vydány v 19. století ve sbírce{' '}
          <i>Codex iuris bohemici</i> Hermenegildem Jirečkem.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://kramerius.lib.cas.cz/search/?q=codex+iuris+bohemici"
          />
        </p>
        <p>
          Klíčový pramen pro každodenní život jáchymovské hornické obce a ohlas
          povstání 1525 je <b>Johannes Mathesius</b> (1504–1565), evangelický
          farář v Jáchymově, autor sbírky kázání{' '}
          <i>Sarepta oder Bergpostille</i> (Norimberk 1562, dříve datovaná též
          1551–1562). Mathesius v šestnácté kazatelské knize popisuje vzpomínky
          pamětníků na konflikt se Šliky a podává podrobný obraz horního stavu,
          mezd, řemeslnické obce i sociálních napětí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://archive.org/details/saraptaoderbergp00math"
          />
        </p>
        <p>
          Šlikovské edikty a mincovní patenty z let 1519–1528 jsou částečně
          digitalizovány v <i>digi20</i> Bavorské státní knihovny (BSB,
          Mnichov). Dějiny rodu a jáchymovských dolů zpracoval v 19. století{' '}
          <b>August Sedláček</b> v <i>Hradech a zámcích</i> (sv. XIII) a v
          regionální produkci shrnul roku 1923 Karel Kuča v{' '}
          <i>Městech a městečkách v Čechách, na Moravě a ve Slezsku</i>.
          <Qt
            publication={PUBLICATIONS.SEDLACEK1}
            href="https://kramerius.lib.cas.cz/search/?q=sedl%C3%A1%C4%8Dek+hrady"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Vzpoura v Jáchymově byla regionální vnitřní událostí Českého
          království, vyřešená vyjednáváním a nikoliv vojenskou exekucí. Žádné
          polní oddíly, ani české žoldnéřské roty, k ní nebyly povolány.
          Hornická obec sama disponovala silným ozbrojeným potenciálem —
          krušnohorští horníci 16. století byli vesměs vycvičeni v používání
          střelných zbraní, formovali milici a v době války je zeměpán povolával
          jako pěchotu (mimo jiné u Moháče 1526 padl Štěpán Šlik v čele oddílu,
          v jehož řadách byli i jáchymovští horníci). Po skončení vzpoury
          sloužili jáchymovští horníci jako součást Šlikových kontingentů v
          uherské mobilizaci 1526.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/J%C3%A1chymov"
          />
        </p>
      </Col>
    </Row>
  </>
)
