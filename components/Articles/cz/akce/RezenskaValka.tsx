import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const RezenskaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="rezenska-valka" />
        <h4>Řezenská válka (1486–1492){draft && <DraftBadge />}</h4>
        <p>
          Řezenská válka (něm. <i>Regensburger Reichskrieg</i>) byla říšským
          ozbrojeným sporem o postavení svobodného říšského města Řezna mezi
          vévody Bavorska-Mnichova z rodu Wittelsbachů a císařem Fridrichem III.
          spolu s říšskými stavy. Spor začal v polovině osmdesátých let 15.
          století pokusem vévody Albrechta IV. Bavorského připojit Řezno přímo k
          vévodství Bavorsko-Mnichov a vrcholil říšskou válečnou výpravou v
          letech 1491–1492.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Regensburger_Reichskrieg"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Řezno bylo od 13. století svobodným říšským městem, ale procházelo
          opakovanými hospodářskými a politickými krizemi. Vévoda Albrecht IV.
          Bavorský využil jedné z nich a po jednáních s městskou radou byl{' '}
          <b>17. června 1486</b> uznán za městského pána Řezna; v listopadu
          téhož roku přijel do města a převzal jeho správu. Tento akt byl v
          příkrém rozporu s říšskou ústavou, neboť svobodná říšská města
          podléhala přímo císaři. Fridrich III. uvalil na město i vévodu říšskou
          klatbu; jeho syn Maximilián I., zvolený roku 1486 římským králem, pak
          obnovil otázku v plné šíři.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Reichsstadt_Regensburg"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          V letech 1487–1490 probíhala na říšských sněmech v Norimberku,
          Frankfurtu a Kolíně nad Rýnem opakovaná jednání. Vévoda Albrecht IV.
          odmítal Řezno vrátit a v zázemí pokračoval ve vojenských přípravách.
          Maximilián I. mezitím sjednal proti Albrechtovi velkou říšskou
          koalici; do ní vstoupili švábský spolek, falcký kurfiřt Filip Upřímný,
          vévoda Albrecht IV. Saský i braniborský kurfiřt Jan Cicero. Ozbrojený
          konflikt vypukl naplno na jaře <b>1491</b>, kdy říšská a švábská
          vojska začala obkličovat bavorské pozice kolem Řezna a Donau-Wörthu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Regensburger_Reichskrieg"
          />
        </p>
        <p>
          Vévoda Albrecht IV. neměl proti říšské koalici dostatečné síly. Pod
          tlakem švábského spolku a vlastní šlechty, která se obávala ztráty
          stavovské svobody pod silnou centrální mocí, zahájil jednání. Mírové
          podmínky byly stvrzeny smlouvou v Augšpurku <b>30. května 1492</b>.
          Albrecht IV. se vzdal Řezna i Donau-Wörthu, město bylo navráceno
          říšské svrchovanosti a Albrechtovi byly uloženy další územní a
          finanční ústupky. Maximilián I. pak v Řezně osobně potvrdil obnovu
          městských privilegií.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Reichsstadt_Regensburg"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Augšpurský mír z roku 1492 byl jedním z důležitých kroků
          předcházejících velké říšské reformě roku 1495 (něm.{' '}
          <i>Reichsreform</i>). Maximilián I. získal díky úspěchu řezenského
          konfliktu legitimitu pro další zásahy do partikulárních sporů a mohl
          prosadit institut zemského míru (něm. <i>Ewiger Landfriede</i>) a
          říšského komorního soudu. Pro Bavorsko-Mnichov znamenala porážka
          dočasné oslabení; vévoda Albrecht IV. však následně získal výrazné
          zisky v landshutské dědické válce o necelou dekádu později.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Regensburger_Reichskrieg"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Hlavním bavorským narativním pramenem je <b>Veit Arnpeck</b> (asi
          1440–1495) ve svém <i>Chronicon Bavarorum</i> (kniha VII, ad annum
          1486–1492), kde zachycuje řezenskou krizi z perspektivy soudobého
          řezenského kanovníka — popisuje vstup Albrechta IV. do města i jeho
          ústup pod říšskou exekucí. Edice G. Leidinger in{' '}
          <i>Quellen zur bayerischen und deutschen Geschichte</i>, sv. 3
          (Mnichov 1915), digitalizace BSB.
          <Qt
            publication={PUBLICATIONS.ARNPECK}
            href="https://www.digitale-sammlungen.de/de/details/bsb11107725"
          />
        </p>
        <p>
          Pro říšský sněmovní rámec jsou klíčové{' '}
          <i>Reichstagsakten Mittlere Reihe</i> (jednání frankfurtského sněmu
          1489 a norimberského 1491), edice Bavorské akademie věd; obsahují
          texty říšské klatby i augšpurský mírový instrument z 30. května 1492.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://www.dmgh.de/de/fs1/object/display/bsb00000761_meta:titlePage.html"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Bavorští Wittelsbachové měli v 80. a 90. letech 15. století
          dlouhodobou tradici najímání českých a moravských žoldnéřů, která
          navazovala na vrcholnou éru bocklerských a mohučských let. V řezenském
          konfliktu lze předpokládat účast českých kontingentů na straně vévody
          Albrechta IV. — především drobnějších rytířských rot z Plzeňska a
          Chebska, vázaných tradičními kapitulačními smlouvami k bavorskému
          dvoru. Konkrétní počty z pramenů nejsou jasné; v rámci říšské koalice
          naopak působili spíše švábští, franští a hesenští žoldnéři. Konflikt
          tak představuje pozdní ohlas <i>česko-bavorského</i> žoldnéřského
          propojení, které dominovalo jihoněmeckému prostoru o dvě desetiletí
          dříve.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Regensburger_Reichskrieg"
          />
        </p>
      </Col>
    </Row>
  </>
)
