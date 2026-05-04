import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const TazeniWaldekaraNaKlatovsko1473 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="tazeni-waldekara-na-klatovsko-1473" />
        <h4>
          Tažení Wolfganga Waldekara na Klatovsko (1473)
          {draft && <DraftBadge />}
        </h4>
        <p>
          V&nbsp;průběhu roku <b>1473</b> podnikl bavorský pán{' '}
          <b>Wolfgang Waldekar</b> (psáno též <i>Waldecker</i>) odvetné tažení
          přes Šumavu na české Klatovsko. Šlo o&nbsp;reakci na klatovskou
          výpravu proti Pušperku a&nbsp;na sérii drobných pohraničních půtek,
          jejichž společným jmenovatelem byl spor o&nbsp;vyrovnání starých škod
          z&nbsp;dob bavorské války a&nbsp;bocklerských konfliktů.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Wolfgang Waldekar pocházel z&nbsp;rodu drobných říšských rytířů
          usedlých v&nbsp;Bavorském lese; mezi své záštné protivníky postupně
          počítal jak český zemský mír, tak některá švábská a&nbsp;franská
          města. V&nbsp;jeho oddílech sloužili jak bavorští, tak čeští žoldnéři,
          a&nbsp;jeho příbuzenské vazby ho spojovaly s&nbsp;klatovským
          a&nbsp;domažlickým pomezím. Jako řada drobných šlechticů využíval
          institut záští k&nbsp;legalizaci nájezdů přes hranici. V&nbsp;letech
          1472–1473 doznívaly v&nbsp;zemském uspořádání jihozápadních Čech ještě
          dozvuky protičeské křížové výpravy z&nbsp;roku 1467 a&nbsp;Klatovsko
          patřilo k&nbsp;ohroženým krajům.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Klatovy"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Waldekarův oddíl, čítající podle dobového odhadu několik set jezdců
          a&nbsp;pěších, vtrhl přes pomezí v&nbsp;okolí Nýrska a&nbsp;Železné
          Rudy do klatovského kraje. Vypálil několik vsí a&nbsp;přepadl kupecký
          povoz směřující z&nbsp;Bavorska. Klatovští se uchýlili za hradby
          a&nbsp;žádali o&nbsp;pomoc sousední Domažlice; zemská hotovost se
          shromažďovala teprve ve chvíli, kdy se nájezdníci stahovali zpět.
          K&nbsp;velké polní bitvě nedošlo — Waldekar vedl typickou{' '}
          <i>fehde-akci</i>: rychlý vpád, vypálení vsí, nabrání kořisti
          a&nbsp;zajetí kupců, vše do několika dnů a&nbsp;s&nbsp;ústupem před
          příchodem zemské hotovosti.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view"
          />
        </p>
        <h5>Účastníci a důsledky</h5>
        <p>
          Klatovští se po Waldekarově odchodu obrátili na zemský soud a&nbsp;na
          krále Vladislava se stížností na opětované nájezdy z&nbsp;bavorské
          strany. Wolfgang Waldekar pokračoval v&nbsp;dalších letech jako
          záštník proti říšským městům a&nbsp;v&nbsp;70.&nbsp;letech ho
          zaměstnávaly i&nbsp;spory s&nbsp;Norimberkem. Tažení 1473 zapadá do
          série pohraničních záští let 1471–1478, kdy se na česko-bavorském
          pomezí střídaly nájezdy oběma směry a&nbsp;královská i&nbsp;vévodská
          autorita měla jen omezené nástroje k&nbsp;jejich zastavení. Detail
          tažení vyžaduje primární prameny — Jánský 2003, sv.&nbsp;III pojednává
          waldekarské epizody v&nbsp;rámci kapitoly o&nbsp;pohraničních záštích.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view"
          />
        </p>
      </Col>
    </Row>
  </>
)
