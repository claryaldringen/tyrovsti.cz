import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const RezenskaZastiZaunrudaGutstejnaSvamberku14751479 = ({
  draft,
}: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="rezenska-zasti-zaunruda-gutstejna-svamberku-1475-1479"
        />
        <h4>
          Řezenská záští Žeberka, Zaunruda, Gutštejna a&nbsp;Švamberků
          (1475–1479)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Vedle vlastní řezenské války (<i>Regensburger Krieg</i>) se
          v&nbsp;letech <b>1475–1479</b> rozvíjela na pomezí říšského svobodného
          města Řezna paralelní série soukromých záští, jichž se účastnili
          západočeští páni — pánové ze Žeberka, ze Zaunrudu, z&nbsp;Gutštejna
          a&nbsp;ze Švamberka. Tyto drobné konflikty fakticky paralyzovaly
          bezpečnost obchodních cest mezi Bavorskem a&nbsp;západními Čechami
          a&nbsp;v&nbsp;Jánského pojetí představují klasický příklad pozdně
          středověkého <i>fehderechtu</i> využívaného českou pohraniční
          šlechtou.
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
          Říšské svobodné město <b>Řezno</b> (Regensburg) bylo v&nbsp;polovině
          70. let 15. století oslabeno jak vnitřní krizí (přechodné svěření
          města vévodovi Albrechtovi IV. Bavorsko-mnichovskému roku 1486 bylo
          již delší dobu připravováno spory s&nbsp;okolními pány), tak
          finančními potížemi v&nbsp;důsledku poklesu dunajského obchodu.
          Vstřícnost města vůči pohraničním záštím českých pánů byla minimální:
          řezenská rada opakovaně žalovala u&nbsp;císaře Friedricha III.
          a&nbsp;u&nbsp;vévody Albrechta IV. Z&nbsp;české strany byly aktéry
          rody, jejichž panství tvořila západní oblouk Plzeňska a&nbsp;Tachovska
          — zejména páni z&nbsp;<b>Gutštejna</b>, ze <b>Švamberka</b>, ze{' '}
          <b>Žeberka</b> a&nbsp;ze Zaunrudu (Saunsheim).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Reichsstadt_Regensburg"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Záští probíhala v&nbsp;řadě nesouvislých epizod. Páni z&nbsp;Gutštejna
          přepadali kupecké povozy směřující z&nbsp;Řezna do Chebu
          a&nbsp;Norimberka, Švamberkové vyhlásili vlastní opověď proti
          řezenským měšťanům, Žeberkové operovali společně se Zaunrudem
          v&nbsp;okolí dunajských brodů. Ve spektru akcí převažovaly přepady
          obchodních karavan, zajímání kupců pro výkupné a&nbsp;drobné nájezdy
          proti vesnickým statkům, jež patřily řezenským rodinám
          a&nbsp;klášterům. Řezno odpovídalo nasazením městských oddílů
          a&nbsp;najímáním vlastních žoldnéřů, ale účinně zasáhnout přes hranici
          se mu nepodařilo.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1htkmhN17KhsciZ9R-qxmrVyUIjWSKfi7/view"
          />
        </p>
        <p>
          Konflikt s&nbsp;Řeznem se splétal s&nbsp;širším českým záštním
          prostředím — někteří aktéři, zejména Burian z&nbsp;Gutštejna, byli
          souběžně zapleteni do sporů s&nbsp;Plzní a&nbsp;s&nbsp;chebskými.
          Řezenští se v&nbsp;letech 1477–1478 obrátili rovněž na český zemský
          sněm a&nbsp;na krále Vladislava II. Jagellonského s&nbsp;žádostí
          o&nbsp;diplomatické zastavení nájezdů.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1htkmhN17KhsciZ9R-qxmrVyUIjWSKfi7/view"
          />
        </p>
        <h5>Účastníci a důsledky</h5>
        <p>
          Záští byla utlumena postupně mezi <b>1478</b> a&nbsp;<b>1479</b>{' '}
          kombinací diplomatických jednání, vzájemných kompenzací
          a&nbsp;narůstající moci vévody Albrechta IV. nad Řeznem. Pro českou
          stranu šlo o&nbsp;klasický doklad fungování záští jako legitimní formy
          hospodářského tlaku na sousední říšské město; rody Gutštejnů,
          Švamberků, Žeberků a&nbsp;Zaunrudů z&nbsp;těchto akcí těžily nejen
          materiálně, ale i&nbsp;upevněním pozice na česko-bavorském pomezí.
          Detail jednotlivých epizod vyžaduje primární prameny — Jánský 2003,
          sv.&nbsp;III věnuje řezenským záštím samostatnou kapitolu.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1htkmhN17KhsciZ9R-qxmrVyUIjWSKfi7/view"
          />
        </p>
      </Col>
    </Row>
  </>
)
