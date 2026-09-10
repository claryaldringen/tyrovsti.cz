import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BitvaUNyrska1468 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="bitva-u-nyrska-1468" />
        <h4>
          Bitva u&nbsp;Nýrska — porážka křižáků a&nbsp;smrt Albrechta Nothafta
          (1468){draft && <DraftBadge />}
        </h4>
        <p>
          V&nbsp;<b>roce 1468</b> proběhlo u&nbsp;Nýrska další pohraniční
          střetnutí, jež navázalo na slavnou bitvu z&nbsp;<b>22. září 1467</b>.
          Zatímco první nýrská bitva rozprášila křižácký kontingent vedený
          rytířem Kyvolfem, druhá poznamenala bavorskou stranu ztrátou
          významného falckého šlechtice <b>Albrechta Nothafta</b>{' '}
          z&nbsp;Wernbergu. Bitva potvrdila, že česká pohraniční obrana pod
          klatovským hejtmanstvím dokáže opakovaně zlomit drobné křižácké výpady
          přes Šumavu.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Po vítězství Racka Janovského z&nbsp;Janovic v&nbsp;září 1467 se
          bavorská strana pokusila opětovně využít Šumavské průsmyky pro vstup
          do Klatovska. Bocklerský odpor proti vévodovi Albrechtovi IV.
          v&nbsp;Bavorsku odčerpával značnou část sil mnichovské zemské
          hotovosti, takže akci proti Čechám organizovaly především drobné
          falcké rody, jejichž panství ležela na pomezí Horní Falce
          a&nbsp;Šumavy. Mezi nimi vystoupil rod{' '}
          <b>Nothaftů z&nbsp;Wernbergu</b>, který kontroloval rozsáhlý prostor
          mezi Wernbergem a&nbsp;Falknovem (dnešním Sokolovem)
          a&nbsp;v&nbsp;jehož službách stáli mimo jiné čeští žoldnéři
          z&nbsp;loketského a&nbsp;ašského pomezí.
        </p>
        <h5>Průběh</h5>
        <p>
          Křižácký kontingent vedený <b>Albrechtem Nothaftem</b> se v&nbsp;roce
          1468 pokusil zopakovat tažení svých předchůdců přes Železnou Rudu
          a&nbsp;Nýrsko směrem na Klatovsko. Klatovský hejtman a&nbsp;královská
          posádka Pajreka zachytili vetřelce v&nbsp;úzkém terénu šumavského
          předhůří. Polní střetnutí mělo opět povahu rychlé jezdecké srážky:
          české oddíly využily zkušenosti z&nbsp;předchozího roku
          a&nbsp;rozhodným úderem rozprášily nepřítele. V&nbsp;průběhu boje padl
          sám <b>Albrecht Nothaft</b> — pro falckou stranu šlo o&nbsp;těžkou
          ztrátu na úrovni rodového vůdce, srovnatelnou se ztrátou Kyvolfa
          o&nbsp;rok dříve.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <h5>Účastníci a&nbsp;důsledky</h5>
        <p>
          Z&nbsp;české strany bojovaly kontingenty klatovské a&nbsp;domažlické
          měšťanské hotovosti, manská jízda Janoviců a&nbsp;královští žoldnéři.
          Racek Janovský z&nbsp;Janovic, hrdina nýrské bitvy 1467, v&nbsp;tu
          dobu ještě úřadoval jako klatovský hejtman; jeho přesný osobní podíl
          na boji 1468 prameny popisují odlišně — některé jej zmiňují jako
          velitele, jiné uvádějí, že velení převzal jiný královský hejtman.
          Z&nbsp;bavorsko-falcké strany bojoval Nothaftův rodový kontingent
          posílený o&nbsp;říšské dobrovolníky a&nbsp;žoldnéře z&nbsp;okolí
          Wernbergu a&nbsp;Falknova.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Bitva_u_N%C3%BDrska"
          />
        </p>
        <p>
          Pro česko-bavorské pomezí měla druhá nýrská bitva zásadní symbolický
          význam: po dvou drtivých porážkách v&nbsp;rozmezí jednoho roku
          přestala bavorsko-falcká strana organizovat samostatná tažení přes
          Šumavu na Klatovsko. Hlavní těžiště dalších akcí proti Jiřímu
          z&nbsp;Poděbrad se přesunulo na sever k&nbsp;Tachovsku a&nbsp;Plzeňsku
          (tažení Šebestiána Pluha) a&nbsp;k&nbsp;Vimperku (pasovské tažení).
          Nothaftův rod si musel obnovovat své postavení dlouhá léta
          a&nbsp;definitivní vyrovnání ztrát z&nbsp;roku 1468 se rodu podařilo
          až za další generace.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
      </Col>
    </Row>
  </>
)
