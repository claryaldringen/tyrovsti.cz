import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const DobytiNovehoHerstejna1475 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="dobyti-noveho-herstejna-1475" />
        <h4>
          Dobytí Nového Herštejna a&nbsp;smíření Hanse Degenberga
          s&nbsp;Albrechtem&nbsp;IV. (1475){draft && <DraftBadge />}
        </h4>
        <p>
          Dobytí pohraničního hradu <b>Nový Herštejn</b> u&nbsp;Kdyně roku{' '}
          <b>1475</b> a&nbsp;souběžné smíření bývalého bocklerského mluvčího{' '}
          <b>Hanse z&nbsp;Degenbergu</b> s&nbsp;mnichovským vévodou
          <b>Albrechtem&nbsp;IV.</b> uzavírají symbolicky šestiletou éru, která
          začala vítězstvím vévody nad rytířským spolkem jednorožce počátkem
          roku 1469. Nový Herštejn padl jako poslední z&nbsp;menších opěrných
          bodů, na nichž se po skončení bocklerské války ukrývaly drobné družiny
          pohraničního ražení.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Herstejn"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Hrad <b>Nový Herštejn</b> založila ve 14. století větev pánů
          z&nbsp;Herštejna jako pohraniční sídlo nedaleko Kdyně, na české straně
          pomezí s&nbsp;Bavorským lesem. V&nbsp;15. století procházel rychlými
          změnami držitelů a&nbsp;v&nbsp;době bocklerské války
          a&nbsp;následujících záští se stal jedním z&nbsp;opěrných bodů
          drobných oddílů, které operovaly na česko-bavorském pomezí mezi
          Domažlicemi a&nbsp;Cham. Část jeho posádky tvořili veteráni bocklerské
          družiny.
        </p>
        <p>
          Hans z&nbsp;Degenbergu, mluvčí původního bocklerského spolku
          a&nbsp;hlavní iniciátor odporu proti Albrechtovi&nbsp;IV.
          v&nbsp;letech 1466–1469, byl po porážce v&nbsp;lednu 1469 nucen
          kapitulovat a&nbsp;přijmout vévodovy podmínky. V&nbsp;dalších letech
          byl pod přímým dohledem mnichovského dvora, ale jeho rod si nakonec
          udržel významnou část původních panství v&nbsp;Bavorském lese. Smíření
          s&nbsp;vévodou vrcholilo v&nbsp;polovině 70. let a&nbsp;rok 1475
          představoval jeho symbolické&nbsp;naplnění.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          V&nbsp;průběhu roku <b>1475</b> bylo dobyto a&nbsp;vyklizeno panství
          Nového Herštejna. Akce byla vedena s&nbsp;tichou součinností české
          a&nbsp;bavorské strany: zatímco vlastní obléhání proběhlo na české
          půdě a&nbsp;jako záležitost domažlického hejtmana, podpora přicházela
          i&nbsp;ze sousedních bavorských oddílů, zainteresovaných na ukončení
          činnosti pohraničních družin. Posádka Nového Herštejna se po krátkém
          obléhání vzdala; část mužů přešla do legitimní žoldnéřské služby
          u&nbsp;Albrechta&nbsp;IV. nebo u&nbsp;některých západočeských pánů,
          část byla rozprášena.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <p>
          Souběžně probíhala diplomatická jednání mezi Albrechtem&nbsp;IV.
          a&nbsp;Hansem z&nbsp;Degenbergu, jejichž výsledkem bylo formální
          smíření a&nbsp;potvrzení degenberského lenního statusu. Pro vévodu šlo
          o&nbsp;potvrzení vlastní velkorysosti vůči někdejšímu nepříteli, pro
          Degenberga o&nbsp;zajištění rodové kontinuity. Detailní průběh
          obléhání Nového Herštejna a&nbsp;mírových rozhovorů vyžaduje primární
          prameny (Jánský 2003).
        </p>
        <h5>Účastníci a&nbsp;důsledky</h5>
        <p>
          Rok 1475 představuje symbolický předěl v&nbsp;dějinách česko-
          bavorského pohraničí: rytířská opozice z&nbsp;bocklerské éry je
          definitivně neutralizována, vévodská zemská moc v&nbsp;Bavorsku-
          Mnichově je upevněna a&nbsp;velké rytířské spolky se znovu objeví až
          ve formě <i>Löwlerbundu</i> v&nbsp;letech 1489–1493. Hans
          z&nbsp;Degenbergu po roce 1475 zůstal v&nbsp;ústraní; jeho rod však
          přežil ve významné části Bavorského lesa do počátku 17. století. Pro
          českou stranu znamenalo dobytí Nového Herštejna stabilizaci pohraničí
          kolem Domažlic a&nbsp;Kdyně po dvou desetiletích nestability. Současně
          rok 1475 představuje zlomový bod, po němž se těžiště
          česko-bavorské&nbsp;žoldnéřské aktivity přesouvá do nových konfliktů –
          do záští Břeňka z&nbsp;Ronšperka s&nbsp;pasovským biskupem (1475–1476)
          a&nbsp;později do velkých říšských válek konce století.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view"
          />
        </p>
      </Col>
    </Row>
  </>
)
