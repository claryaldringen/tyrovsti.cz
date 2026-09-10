import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const ZastiVolfstejnaNaTrebli = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="zasti-volfstejna-na-trebli" />
        <h4>
          Záští Viléma z&nbsp;Volfštejna na Třebli proti Chebu (1469–1470)
          {draft && <DraftBadge />}
        </h4>
        <p>
          <b>Vilém z&nbsp;Volfštejna na Třebli</b> patřil k&nbsp;tachovsko-
          chebsko-pomezní šlechtě, která ve druhé polovině 15. století
          zajišťovala permanentní pohraniční tlak na říšské město Cheb
          a&nbsp;jeho hospodářské zázemí. Záští z&nbsp;let <b>1469–1470</b> bylo
          paralelní a&nbsp;úzce provázané s&nbsp;tažením Buriana
          z&nbsp;Gutštejna a&nbsp;Jindřicha z&nbsp;Plavna proti Chebu
          a&nbsp;klášteru ve Waldsassen, jen vedené z&nbsp;jiného opěrného bodu
          a&nbsp;jiným, menším oddílem.
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
          Volfštejnové (něm. <i>Wolfstein</i>) byli rod původně bavorského
          ministeriálního původu, jehož česká větev se v&nbsp;první polovině 15.
          století usadila na Tachovsku a&nbsp;Tepelsku. Sídlem Vilémovým byl
          hrad <b>Třebel</b> u&nbsp;Černošína, opevněné panské sídlo
          s&nbsp;přímým výhledem na chebsko-tachovskou cestu. Volfštejnové byli
          skrze sňatkovou politiku spojeni s&nbsp;rodem Kolovratů
          a&nbsp;s&nbsp;Gutštejny – dohromady tvořili tzv.
          kolovratsko-volfštejnský klan, jehož příslušníci se opakovaně
          objevovali v&nbsp;chebských záštích konce 60. a&nbsp;celých 70. let
          15. století.
        </p>
        <p>
          Bezprostřední záminkou k&nbsp;Vilémově opovědi byly nezaplacené škody
          z&nbsp;dřívějších pohraničních akcí a&nbsp;chebská podpora křížové
          výpravy proti Jiřímu z&nbsp;Poděbrad v&nbsp;letech 1467–1469.
          Třebelské panství leželo v&nbsp;těsném sousedství chebského území
          a&nbsp;jeho geografická poloha umožňovala rychlé výpady proti obchodu
          na chebsko-tachovské trase i&nbsp;proti vesnicím v&nbsp;okolí
          Františkových Lázní a&nbsp;Lokte.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Vilém z&nbsp;Volfštejna oficiálně vyhlásil opověď chebské obci
          a&nbsp;zahájil sérii nájezdů přes letní a&nbsp;podzimní měsíce roku{' '}
          <b>1469</b> a&nbsp;v&nbsp;průběhu jara <b>1470</b>. Akce probíhaly
          v&nbsp;klasické podobě záští: zajímání chebských kupců na cestách,
          výpalné z&nbsp;menších vsí a&nbsp;přepady transportů. Třebelská
          družina čítala podle dochovaných zpráv řádově desítky jezdců
          a&nbsp;pěších, doplňovaná příležitostně oddíly spřízněných pánů
          z&nbsp;Volfštejnova klanu. Chebská rada odpovídala vlastními výpady,
          stížnostmi u&nbsp;markraběte Albrechta Achilla a&nbsp;snahou získat
          proti Volfštejnově straně intervenci českého krále.
        </p>
        <p>
          Konflikt byl postupně utlumen mírovými jednáními zprostředkovanými
          chebsko-tachovskou porotou a&nbsp;po ukončení velkého
          poděbradsko-plavenského sporu v&nbsp;roce 1470. Vilém však zůstal
          aktivním aktérem dalších záští v&nbsp;rámci kolovratsko-volfštejnské
          skupiny v&nbsp;roce <b>1471</b>; podrobné rekonstrukce jednotlivých
          výpadů vyžadují primární prameny (Jánský 2003).
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <h5>Účastníci a&nbsp;důsledky</h5>
        <p>
          Záští je typickým příkladem fungování pozdně středověké pohraniční
          šlechty na chebsko-tachovském pomezí: malé jádrové sídlo (hrad
          Třebel), klanová síť přesahující česko-říšskou hranici (Kolovraté,
          Gutštejnové, Volfštejnové) a&nbsp;legitimní záminka v&nbsp;podobě
          starých škod a&nbsp;politických rozporů. Z&nbsp;hlediska velkých
          říšských dějin epizoda zapadá do přechodového období mezi bocklerskou
          válkou (1467–1469) a&nbsp;dobou jagellonských záští 70. let; pro
          chebskou obec představovala další z&nbsp;řady ztrát, které ji
          v&nbsp;celém poděbradsko-jagellonském období oslabovaly. Vilém
          z&nbsp;Volfštejna udržel třebelské panství v&nbsp;rodových rukou
          a&nbsp;jeho potomstvo se v&nbsp;dalších generacích podílelo na
          chebských sporech až do počátku 16. století.
        </p>
      </Col>
    </Row>
  </>
)
