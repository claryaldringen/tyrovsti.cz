import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const PopravaJanaSmirickeho = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="poprava-jana-smirickeho" />
        <h4>
          Pád Jana Smiřického a&nbsp;boj o&nbsp;jeho dědictví (1453)
          {draft && <DraftBadge />}
        </h4>
        <p>
          <b>Jan Smiřický ze&nbsp;Smiřic</b> patřil k&nbsp;nejvlivnějším
          příslušníkům utrakvistické šlechty 40. a&nbsp;počátku 50. let 15.
          století — kališnický hejtman, jeden z&nbsp;předních partnerů Jiřího
          z&nbsp;Poděbrad v&nbsp;době pražského převratu 1448 a&nbsp;držitel
          rozsáhlé hradové soustavy v&nbsp;severních a&nbsp;středních Čechách.
          Po obratu zemské politiky byl však <b>7. září 1453</b> v&nbsp;Praze
          popraven; pád jeho rodu otevřel desetiletí sporů o&nbsp;jeho dědictví,
          které poznamenaly mocenský obraz severovýchodních Čech.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Smi%C5%99ick%C3%BD_ze_Smi%C5%99ic"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Smiřický byl pražským hejtmanem v&nbsp;době, kdy Jiří z&nbsp;Poděbrad
          převzal v&nbsp;září 1448 ozbrojeným úderem Prahu a&nbsp;připravil si
          tak pozici zemského správce. Smiřický byl jeho věrným spojencem
          a&nbsp;v&nbsp;dalších letech vystupoval jako jeden
          z&nbsp;nejmocnějších příslušníků kališnické strany. Příčiny zlomu jeho
          vztahu s&nbsp;Jiřím nebyly nikdy jednoznačně objasněny — soudobé
          a&nbsp;pozdější prameny zmiňují Smiřického ambice, údajné kontakty
          se&nbsp;saskou stranou a&nbsp;především obavu z&nbsp;jeho rostoucí
          moci, jež ohrožovala Jiřího vlastní pozici.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Smi%C5%99ick%C3%BD_ze_Smi%C5%99ic"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Na začátku září 1453, krátce před příjezdem mladého krále Ladislava
          Pohrobka do Prahy, byl Jan Smiřický zatčen, narychlo souzen a&nbsp;
          <b>7. září 1453</b> sťat ve&nbsp;Staroměstské radnici. Soudobé prameny
          formulují obvinění z&nbsp;velezrady a&nbsp;úkladů proti zemskému
          správci, skutečné důvody však jsou opakovaně diskutovány — od osobních
          ambicí Smiřického přes mocenskou hru Jiřího z&nbsp;Poděbrad až po
          vnější tlak ze saské strany. Po popravě byly Smiřického hrady postupně
          přepadány a&nbsp;obsazovány — jeho vdova a&nbsp;synové bojovali
          o&nbsp;dědictví celé následující desetiletí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Smi%C5%99ick%C3%BD_ze_Smi%C5%99ic"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Pád Jana Smiřického otevřel boj o&nbsp;jeho dědictví, jenž se táhl po
          další generaci. Smiřický rod si nakonec udržel jen část původního
          majetku, hlavní hrad Smiřice a&nbsp;Kostelec nad Černými lesy přešly
          do jiných rukou a&nbsp;teprve počátkem 16. století se rod opět
          konsolidoval. Pro Jiřího z&nbsp;Poděbrad znamenala poprava odstranění
          nejsilnějšího potenciálního rivala z&nbsp;kališnického tábora
          a&nbsp;upevnění pozice před formálním převzetím královské moci
          v&nbsp;listopadu 1453.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ji%C5%99%C3%AD_z_Pod%C4%9Bbrad"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          <b>Staří letopisové čeští</b> ad annum 1453 zaznamenávají Smiřického
          zatčení, narychlo vedený proces a&nbsp;popravu mečem na Staroměstské
          radnici dne 7. září. Letopisné svědectví je sice úsporné, udává však
          den popravy, jména spojenců, kteří byli rovněž stíháni,
          a&nbsp;poznamenává, že obvinění z&nbsp;velezrady souviselo se
          Smiřického údajným zrádným porozuměním se&nbsp;saskou stranou. Edice
          ve&nbsp;Fontes Rerum Bohemicarum, digitalizace archive.org.
          <Qt
            publication={PUBLICATIONS.STARI_LETOPISOVE}
            href="https://archive.org/details/scriptorumrerum02unkngoog"
          />
        </p>
        <p>
          <b>August Sedláček</b> v&nbsp;<i>Zbytcích register královských</i>
          (Praha 1914) zveřejnil řadu zápisů ze zemských a&nbsp;dvorských desk
          týkajících se konfiskovaných smiřických hradů Kostelec nad Černými
          lesy, Smiřice a&nbsp;Hostinné — přerozdělení dědictví v&nbsp;letech
          1453–1456 osvětluje skutečný politický motiv exekuce a&nbsp;ukazuje,
          jak Jiří z&nbsp;Poděbrad rozdělil panství mezi své věrné. Sedláčkův
          svazek je digitalizován v&nbsp;Krameriovi NK&nbsp;ČR.
          <Qt
            publication={PUBLICATIONS.SEDLACEK1}
            href="https://kramerius5.nkp.cz"
          />
        </p>
        <p>
          <b>Aeneas Silvius</b> v&nbsp;<i>De rebus gestis Friderici III</i>
          (kniha I, kap.&nbsp;XXVIII) Smiřického popravu zmiňuje jako příklad
          tvrdé politiky Jiřího z&nbsp;Poděbrad, jíž si zajistil nerušený nástup
          Ladislava Pohrobka do Prahy. Aeneas tehdy působil jako císařský
          diplomat a&nbsp;jeho výklad odráží pohled vídeňského dvora. Latinská
          edice je dostupná v&nbsp;digi20 BSB.
          <Qt
            publication={PUBLICATIONS.AENEAS_BOHEMICA}
            href="https://www.digitale-sammlungen.de/de/search?query=aeneas+silvius+de+rebus+gestis+friderici"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Pro téma žoldnéřské služby českých rytířů jde o&nbsp;okrajovou
          vnitropolitickou událost. Zařazení do osy je opodstatněné spíše
          z&nbsp;hlediska širších souvislostí: pád Smiřického a&nbsp;následné
          rozdělení jeho majetku zasáhly do mocenské struktury, z&nbsp;níž se
          rekrutovali budoucí čeští hejtmani působící v&nbsp;říšských
          a&nbsp;uherských službách. Hradové soustavy zaniklého panství se
          v&nbsp;dalších desetiletích staly mocenskou základnou pro další
          utrakvistické rody. Konkrétní žoldnéři ani družiny zde však doloženi
          nejsou; akce má v&nbsp;ose význam primárně jako vnitropolitický
          mezník.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Smi%C5%99ick%C3%BD_ze_Smi%C5%99ic"
          />
        </p>
      </Col>
    </Row>
  </>
)
