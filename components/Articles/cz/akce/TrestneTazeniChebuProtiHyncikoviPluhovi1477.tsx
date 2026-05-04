import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const TrestneTazeniChebuProtiHyncikoviPluhovi1477 = ({
  draft,
}: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="trestne-tazeni-chebu-proti-hyncikovi-pluhovi-1477"
        />
        <h4>
          Trestné tažení Chebu proti Hynčíkovi Pluhovi (1477)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Trestná výprava říšského města Chebu (něm. <i>Eger</i>) proti{' '}
          <b>Hynčíkovi Pluhovi z&nbsp;Rabštejna</b> v&nbsp;roce <b>1477</b>{' '}
          představuje jeden z&nbsp;nejlépe doložených případů kolektivního
          zákroku městské obce proti záštnému šlechtici česko-bavorského pomezí.
          Hynčík Pluh, příslušník významného západočeského rodu Pluhů
          z&nbsp;Rabštejna, byl ve své době proslulou postavou pohraničního
          žoldnéřství, jíž česká i&nbsp;německá tradice připisuje řadu drobných
          válečných akcí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Pluhov%C3%A9_z_Rab%C5%A1tejna"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Pluhové z&nbsp;Rabštejna patřili k&nbsp;významným západočeským rodům
          se sídlem na hradě Rabštejně nad Střelou a&nbsp;na řadě menších
          panství v&nbsp;okolí Plzně, Tachova a&nbsp;Chebska. Hynčík (zdrobnělé
          jméno z&nbsp;německého Heinrich) působil v&nbsp;70. letech 15. století
          jako činný záštník proti chebským měšťanům i&nbsp;dalším říšským
          městům. Cheb byl tehdy říšskou zástavou v&nbsp;rukou českých králů,
          ale jako říšský útvar zachovával vlastní městské zřízení
          a&nbsp;rozsáhlou autonomii. V&nbsp;čele jeho ozbrojených sil stáli
          městský purkmistr a&nbsp;volený hejtman zemské hotovosti chebského
          kraje. V&nbsp;polovině 70. let se chebští dostali s&nbsp;Hynčíkem
          Pluhem do opakovaných sporů o&nbsp;vyrovnání starých dluhů, výpalné
          z&nbsp;přepadených povozů a&nbsp;o&nbsp;práva na pomezí.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1htkmhN17KhsciZ9R-qxmrVyUIjWSKfi7/view"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          V&nbsp;roce <b>1477</b>, po sérii nájezdů Hynčíkových oddílů na
          chebské kupce a&nbsp;poddanské vsi, se chebská rada rozhodla pro
          vlastní ozbrojený zákrok. Vyhlásila zemskou hotovost chebského kraje
          a&nbsp;pod vedením městského hejtmana shromáždila oddíl pěších
          měšťanů, jezdců manské služby chebského zboží a&nbsp;najatých
          žoldnéřů. Cílem výpravy byly Hynčíkovy opěrné body na pomezí — drobné
          tvrze a&nbsp;hospodářské dvory, z&nbsp;nichž organizoval své záští.
          Chebské vojsko několik z&nbsp;těchto pevnůstek dobylo a&nbsp;pobořilo,
          k&nbsp;přímému střetu se silami Hynčíka Pluha však ve velkém rozsahu
          nedošlo, neboť ten se vyhnul polní bitvě a&nbsp;ustoupil na opevněný
          rabštejnský hrad.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1htkmhN17KhsciZ9R-qxmrVyUIjWSKfi7/view"
          />
        </p>
        <h5>Účastníci a důsledky</h5>
        <p>
          Trestná výprava 1477 oslabila Hynčíkovo postavení v&nbsp;chebské
          oblasti, ale rod Pluhů z&nbsp;Rabštejna jako celek zůstal mocný
          a&nbsp;v&nbsp;dalších letech se objevují i&nbsp;další záštní akce jeho
          příslušníků. Pro Cheb znamenala kampaň upevnění pozice silného
          městského spolku schopného hájit zájmy obchodníků na úkor okolní
          šlechty. Tažení zapadá do širšího vzorce protizáštních akcí
          královských a&nbsp;říšských měst v&nbsp;letech 1473–1478, kdy se
          vlastní městské hotovosti staly hlavním nástrojem zemského míru
          v&nbsp;západních Čechách. Detail tažení vyžaduje primární prameny —
          Jánský 2003, sv.&nbsp;III věnuje chebsko-pluhovským sporům samostatný
          oddíl.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1htkmhN17KhsciZ9R-qxmrVyUIjWSKfi7/view"
          />
        </p>
      </Col>
    </Row>
  </>
)
