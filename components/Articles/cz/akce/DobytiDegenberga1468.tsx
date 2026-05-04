import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const DobytiDegenberga1468 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="dobyti-degenberga-1468" />
        <h4>
          Dobytí hradu Degenberga a&nbsp;konfiskace furthského Winkelu (1468)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Tažení proti rodu z&nbsp;Degenbergu v&nbsp;<b>roce 1468</b> patří
          k&nbsp;rozhodujícím epizodám bocklerské války. Hans z&nbsp;Degenbergu
          — hlavní mluvčí spolku jednorožce — držel rozsáhlé panství
          v&nbsp;Bavorském lese, na něž se opírala celá síť bocklerského odporu
          proti vévodovi Albrechtovi IV. Vévodské vojsko v&nbsp;průběhu roku
          dobylo rodový hrad Degenberg a&nbsp;v&nbsp;návaznosti na to získalo
          kontrolu nad furthským Winkelem — pomezním pásem mezi Furthem im Wald,
          Chamem a&nbsp;českou hranicí.
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
          Rod z&nbsp;Degenbergu patřil k&nbsp;nejmocnějším šlechtickým rodům
          Bavorského lesa. Hans z&nbsp;Degenbergu kontroloval rozsáhlou síť
          panství v&nbsp;okolí Bischofsmaisu, Regenu a&nbsp;Viechtachu
          a&nbsp;jako dědičný držitel řady manských statků landshutského
          vévodství měl přirozenou autoritu mezi okolní rytířskou společností.
          Když na turnaji v&nbsp;Řezně <b>30. srpna 1466</b> vznikl rytířský
          spolek <i>Böcklerbund</i>, stal se Hans jeho mluvčím
          a&nbsp;degenberské hrady — zejména samotný <b>Degenberg</b>,{' '}
          <b>Falkenfels</b>, <b>Kollnburg</b> a&nbsp;<b>Saldenburg</b> —
          představovaly opěrnou kostru spolku v&nbsp;dolním Bavorsku. Furthský
          Winkel — úzký pomezní výběžek mezi Bavorskem a&nbsp;Čechami
          v&nbsp;okolí Furthu im Wald — fungoval jako přirozený pomezní prostor,
          kterým proudili čeští žoldnéři do bavorských služeb a&nbsp;naopak.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/B%C3%B6cklerkrieg"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Vévoda Albrecht IV. Mnichovský v&nbsp;průběhu jara a&nbsp;léta{' '}
          <b>1468</b> shromáždil polní vojsko se silnou složkou dělostřelectva,
          posílené o&nbsp;oddíly landshutského vévody Ludvíka IX. Bohatého. Ten
          se sice formálně ke spolku zachoval rezervovaně, ale po císařském
          rozpuštění spolku <b>28. října 1467</b> přešel do otevřené spolupráce
          s&nbsp;mnichovskou stranou, neboť bockleři narušovali stabilitu jeho
          hraniční oblasti. Vévodská armáda postupně dobyla degenberská sídla.
          Vlastní hrad <b>Degenberg</b> padl po krátkém obležení; jeho zdivo
          nestačilo modernímu kamennému dělostřelectvu. Hans z&nbsp;Degenbergu
          byl nucen kapitulovat a&nbsp;přijmout vévodovy podmínky.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <h5>Účastníci a&nbsp;důsledky</h5>
        <p>
          Z&nbsp;české strany se obrany degenberských sídel zúčastnili čeští
          žoldnéři — drobné jezdecké družiny z&nbsp;rodů usazených na pomezí
          (páni z&nbsp;Janovic na Rýzmberku, Ronšperkové, Gutštejnové), které
          sloužily v&nbsp;menších kontingentech jako pomocné oddíly bocklerských
          pevností. Furthský Winkel sloužil jako jejich přirozená přechodová
          zóna. Po pádu Degenbergu vévoda Albrecht IV. formálně konfiskoval řadu
          manských statků v&nbsp;tomto pomezním prostoru a&nbsp;omezil rytířskou
          volnost pohybu mezi Čechami a&nbsp;Bavorskem — pro české žoldnéře to
          znamenalo zúžení tradičního přechodového prostoru.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <p>
          Pád Degenbergu otevřel cestu k&nbsp;hlavnímu vévodovu tažení mezi
          listopadem 1468 a&nbsp;lednem 1469, v&nbsp;jehož průběhu padly
          poslední bocklerské pevnosti — Falkenfels, Kollnburg, Saldenburg
          a&nbsp;klášter Rinchnach — a&nbsp;celý spolek byl fakticky rozpuštěn.
          Pro Hanse z&nbsp;Degenbergu znamenala kapitulace ztrátu politické
          autonomie, byť rod si nakonec udržel většinu svých statků díky
          přímluvě císaře Friedricha III. Pro česko-bavorské pomezí byl výsledek
          jednoznačný: tradiční prostor pro snadné žoldnéřské služby byl zúžen
          a&nbsp;čeští páni byli postupně tlačeni hledat zaměstnání
          v&nbsp;jiných říšských konfliktech.
        </p>
      </Col>
    </Row>
  </>
)
