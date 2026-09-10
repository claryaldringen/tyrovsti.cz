import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const PorazkaGutstejnaUPlzne1478 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="porazka-gutstejna-u-plzne-1478" />
        <h4>
          Porážka Buriana z&nbsp;Gutštejna u&nbsp;Plzně a&nbsp;tažení Jana
          Planknára proti Chebsku (1478)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Roku <b>1478</b> vyvrcholily dvě paralelní akce
          v&nbsp;západočesko-chebském pomezí, jež společně tvoří jeden
          z&nbsp;mezníků pohraničních záští druhé poloviny 70. let 15. století.
          <b> Burian z&nbsp;Gutštejna</b>, hlava jednoho z&nbsp;nejmocnějších
          rodů západních Čech, se po sérii sporů s&nbsp;královským městem Plzní
          dostal do otevřeného konfliktu, jenž skončil polní porážkou jeho
          oddílů v&nbsp;blízkosti města. V&nbsp;téže době vedl chebský
          žoldnéřský velitel <b>Jan Planknár</b> odvetné tažení proti záštníkům
          v&nbsp;chebsko-pluhovském okruhu.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1htkmhN17KhsciZ9R-qxmrVyUIjWSKfi7/view"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Páni z&nbsp;<b>Gutštejna</b> patřili k&nbsp;předním rodům
          západočeského pomezí, jejichž doménová síť pokrývala oblast Tachovska,
          Stříbrska a&nbsp;okolí Plzně. Burian z&nbsp;Gutštejna, klíčová postava
          rodu v&nbsp;poslední třetině 15. století, byl současně účastníkem
          řezenských záští 1475–1479 a&nbsp;dalších drobných sporů
          s&nbsp;říšskými městy. V&nbsp;roce 1478 se však dostal do otevřeného
          konfliktu s&nbsp;královskou Plzní, jejíž rada se cítila ohrožena jeho
          rostoucí mocí a&nbsp;přepady kupců na cestě do Norimberka. Plzeňští
          povolali zemskou hotovost plzeňského kraje a&nbsp;najali žoldnéřský
          oddíl. Souběžně chebská obec, povzbuzená úspěchem trestného tažení
          proti Hynčíkovi Pluhovi v&nbsp;roce 1477, podpořila Jana Planknára
          v&nbsp;dalších výpravách proti záštníkům.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Gut%C5%A1tejnov%C3%A9"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          K&nbsp;rozhodujícímu střetu mezi plzeňskými a&nbsp;Burianem
          z&nbsp;Gutštejna došlo v&nbsp;průběhu roku <b>1478</b>{' '}
          v&nbsp;blízkosti Plzně. Plzeňský oddíl, posílený o&nbsp;sousední
          městské kontingenty a&nbsp;dělostřelectvo, donutil Burianovo vojsko
          k&nbsp;polnímu střetnutí, v&nbsp;němž bylo gutštejnské vojsko
          poraženo. Burian sám se zachránil ústupem na rodové hrady, část jeho
          jezdců padla nebo se dostala do plzeňského zajetí. Porážka oslabila
          gutštejnskou pozici a&nbsp;přinutila rod ke smíru s&nbsp;Plzní
          vykoupenému majetkovými ústupky. Souběžně vedl <b>Jan Planknár</b>{' '}
          z&nbsp;chebské strany odvetné tažení proti záštníkům — zejména proti
          zbylým opěrným bodům Hynčíka Pluha a&nbsp;jeho příbuzných
          v&nbsp;chebsko-rabštejnské oblasti. Planknárovo tažení mělo charakter
          série drobných výpadů a&nbsp;dobytí několika drobných tvrzí.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1htkmhN17KhsciZ9R-qxmrVyUIjWSKfi7/view"
          />
        </p>
        <h5>Účastníci a důsledky</h5>
        <p>
          Plzeňské vítězství i&nbsp;Planknárovo chebské tažení v&nbsp;roce 1478
          představují vyvrcholení protizáštních aktivit královských
          a&nbsp;říšských měst v&nbsp;západních Čechách. Drobná pohraniční záští
          let 1471–1478 tím sice nevymizela — i&nbsp;v&nbsp;80.&nbsp;letech se
          objevují nové konflikty —, ale prokazatelně se zúžil prostor,
          v&nbsp;němž mohli záštníci typu Buriana z&nbsp;Gutštejna nebo Hynčíka
          Pluha efektivně operovat. Burian si však zachoval značnou rodovou moc
          a&nbsp;Gutštejnové zůstali jednou z&nbsp;předních rodin západních Čech
          ještě v&nbsp;první polovině 16. století. Detail polního střetu
          a&nbsp;chebského tažení vyžaduje primární prameny — Jánský 2003,
          sv.&nbsp;III věnuje rokům 1477–1478 v&nbsp;západočesko-chebské oblasti
          samostatnou kapitolu.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1htkmhN17KhsciZ9R-qxmrVyUIjWSKfi7/view"
          />
        </p>
      </Col>
    </Row>
  </>
)
