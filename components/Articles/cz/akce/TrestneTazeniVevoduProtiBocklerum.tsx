import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const TrestneTazeniVevoduProtiBocklerum = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="trestne-tazeni-vevodu-proti-bocklerum" />
        <h4>
          Trestné tažení bavorských vévodů proti hradům bocklerů (1468)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Mezi listopadem <b>1468</b> a&nbsp;lednem <b>1469</b> provedl
          mnichovský vévoda <b>Albrecht IV.</b> ve spolupráci
          s&nbsp;landshutským vévodou <b>Ludvíkem IX. Bohatým</b> rozhodující
          trestné tažení proti hradům spolku jednorožce — bocklerů.
          V&nbsp;průběhu několika týdnů padla klíčová bocklerská sídla
          v&nbsp;Bavorském lese (<b>Falkenfels</b>,<b> Kollnburg</b>,{' '}
          <b>Saldenburg</b>) i&nbsp;klášter <b>Rinchnach</b>, využívaný spolkem
          jako opora. Tažení definitivně zlomilo bocklerský odpor
          a&nbsp;ukončilo tříletou{' '}
          <a href="/prehled-vojenskych-akci/bocklerska-valka">
            bocklerskou válku
          </a>
          .
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
          Po císařském reskriptu z&nbsp;<b>28. října 1467</b>, který formálně
          rozpustil rytířský spolek, bockleři neuznali jeho legitimitu
          a&nbsp;přešli do otevřené opozice. Jejich opěrnými body byla rozsáhlá
          síť hradů a&nbsp;tvrzí v&nbsp;Bavorském lese, jež držel zejména rod
          <b> Degenbergů</b>. Po dobytí samotného Degenbergu v&nbsp;průběhu roku
          1468 — viz{' '}
          <a href="/prehled-vojenskych-akci/dobyti-degenberga-1468">
            samostatný článek
          </a>{' '}
          — se vévoda Albrecht IV. rozhodl pro koordinovanou ofenzivu, jež měla
          definitivně rozdrtit bocklerský systém. Klíčovou roli hrálo nasazení
          moderního dělostřelectva, jež se ukázalo jako rozhodující prostředek
          proti starým hradním fortifikacím Bavorského lesa.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/B%C3%B6cklerkrieg"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Vévodská armáda zahájila tažení v&nbsp;<b>listopadu 1468</b>. Operace
          měla povahu systematického postupu od jednoho opevněného sídla ke
          druhému, doprovázeného kanónovým ostřelováním kamenných hradeb
          a&nbsp;rychlou kapitulací posádek. Hrad <b>Falkenfels</b> padl jako
          první, následoval <b>Kollnburg</b> a&nbsp;<b>Saldenburg</b>. Klášter{' '}
          <b>Rinchnach</b>, který bockleři využívali jako úkryt
          a&nbsp;zásobovací bázi, byl obsazen vévodskou pěchotou
          a&nbsp;klášterní komunita podrobena vévodské autoritě.{' '}
          <b>Začátkem ledna 1469</b> byly všechny degenberské državy obsazeny
          a&nbsp;celá síť bocklerských opevnění v&nbsp;dolním Bavorsku se
          zhroutila. Hans z&nbsp;Degenbergu, hlavní mluvčí spolku, byl nucen
          přijmout vévodské podmínky.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view"
          />
        </p>
        <h5>Účastníci a&nbsp;důsledky</h5>
        <p>
          Vévodské vojsko tvořilo jádro mnichovských zemských oddílů, dvorského
          žoldnéřského kontingentu a&nbsp;spojeneckých landshutských posil.
          Albrechtovo dělostřelectvo bylo doplněno o&nbsp;specialisty
          z&nbsp;říšského prostoru — slévače, dělmistry a&nbsp;střelmistry — což
          vévodské armádě poskytlo rozhodující taktickou převahu nad tradiční
          rytířskou obranou hradů. V&nbsp;bocklerských řadách bojovali čeští
          žoldnéři z&nbsp;rodů usazených na česko-bavorském pomezí — páni
          z&nbsp;Janovic na Rýzmberku, Ronšperkové, Gutštejnové a&nbsp;další.
          Jejich účast měla převážně partyzánskou povahu: malé jezdecké oddíly
          v&nbsp;síle desítek mužů, přepady transportů a&nbsp;pomocné akce
          v&nbsp;předpolí dobývaných hradů. Skutečnost, že se vévodské
          dělostřelectvo ukázalo jako rozhodující prostředek, znamenala pro
          českou účast novou zkušenost: tradiční drobné záští už nestačilo čelit
          modernizovanému polnímu vojsku knížete.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <p>
          Spolek jednorožce byl počátkem roku 1469 fakticky rozpuštěn
          a&nbsp;jeho členové byli nuceni se podrobit vévodské autoritě.
          Albrecht IV. využil výsledku k&nbsp;dalšímu posílení zemské vlády
          a&nbsp;k&nbsp;omezení rytířské soudní imunity. Pro českou šlechtu
          v&nbsp;pohraničí znamenal výsledek konec snadných možností výnosné
          žoldnéřské služby na bavorské straně. Část velitelů se přesunula do
          jiných říšských konfliktů — do služeb pasovského biskupa, do{' '}
          <a href="/prehled-vojenskych-akci/zasti-bronska-kocovskeho-s-wittelsbachy-1475-1476">
            záští Břeňka z&nbsp;Ronšperka 1475–1476
          </a>{' '}
          a&nbsp;později do{' '}
          <a href="/prehled-vojenskych-akci/landshutska-dedicka-valka">
            landshutské dědické války
          </a>
          . Tradice jednorožského hesla se však v&nbsp;Bavorsku nepřerušila:
          o&nbsp;dvacet let později, v&nbsp;letech 1489–1493, část stejných rodů
          vystoupila znovu jako <i>Löwlerbund</i> proti Albrechtovi IV.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view"
          />
        </p>
      </Col>
    </Row>
  </>
)
