import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const OblehaniSionu = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="oblehani-sionu" />
        <h4>
          Obležení hradu Sion a&nbsp;poslední odboj Jana Roháče z&nbsp;Dubé
          (1437)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Obležení hradu Sion v&nbsp;létě roku 1437 představuje symbolický konec
          husitské revoluce. Hejtman <b>Jan Roháč z&nbsp;Dubé</b>, jeden
          z&nbsp;nejvěrnějších stoupenců Jana Žižky a&nbsp;táborský radikál,
          odmítl po porážce u&nbsp;Lipan a&nbsp;po nástupu Zikmunda
          Lucemburského na český trůn jihlavská kompaktáta a&nbsp;v&nbsp;ústraní
          držel poslední ozbrojený odpor proti králi. Kapitulace Sionu
          a&nbsp;poprava Roháče s&nbsp;jeho družinou v&nbsp;Praze{' '}
          <b>9. září 1437</b> uzavřela husitské období.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Obl%C3%A9h%C3%A1n%C3%AD_hradu_Sion"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Roháč patřil ke staré husitské generaci — sloužil pod Žižkou,
          v&nbsp;letech po jeho smrti vedl polní vojska sirotčího svazu
          a&nbsp;po Lipanech (<b>30. května 1434</b>) zůstal jedním z&nbsp;mála
          předních hejtmanů, kteří odmítli příměří mezi husitskou koalicí
          a&nbsp;Zikmundem. Po jihlavském sněmu roku 1436, který přijal
          kompaktáta a&nbsp;uznal Zikmunda českým králem, byl Roháč postaven
          mimo zákon. Jako útočiště zvolil nově postavený hrad Sion u&nbsp;Kutné
          Hory, který nechal vybudovat krátce předtím jako svou rezidenci
          a&nbsp;zároveň jako pevnost.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Roh%C3%A1%C4%8D_z_Dub%C3%A9"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Roháč na Sionu shromáždil malou družinu věrných — táborské
          a&nbsp;sirotčí veterány, část svého původního panstva
          a&nbsp;žoldnéřsky najaté drobné šlechtice. Z&nbsp;hradu pravděpodobně
          ve&nbsp;spojení s&nbsp;dalšími nesmířenými husity podnikal výpady do
          okolí. Zikmund Lucemburský zareagoval povoláním zemské hotovosti pod
          velením <b>Hynce Ptáčka z&nbsp;Pirkštejna</b> a&nbsp;dalších
          královských hejtmanů; obležení Sionu začalo na jaře 1437. Hrad držel
          přes čtyři měsíce navzdory tomu, že obléhatelé měli početní převahu
          a&nbsp;těžké dělostřelectvo. Kapituloval teprve po vyčerpání
          a&nbsp;ztrátě naděje na vnější pomoc; v&nbsp;září 1437 byl dobyt.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Obl%C3%A9h%C3%A1n%C3%AD_hradu_Sion"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Roháč byl spolu s&nbsp;přibližně padesáti zajatými druhy odveden do
          Prahy, souzen pro velezradu a&nbsp;<b>9. září 1437</b> popraven
          oběšením ve&nbsp;Starém Městě pražském; podle pramenů byl coby
          šlechtic věšen na zlaceném provaze, ale ve&nbsp;společnosti svých
          kumpánů, což mělo zdůraznit jeho ponížení. Sion byl pobořen
          a&nbsp;v&nbsp;následujících letech zanikl, takže se z&nbsp;něj
          dochovaly jen torzovité zříceniny. Roháčova poprava se stala
          symbolickým ukončením husitské revoluce — Zikmund Lucemburský zemřel
          jen tři měsíce po popravě (<b>9. prosince 1437</b>) a&nbsp;Čechy se
          vzápětí ponořily do bezvládí a&nbsp;bojů o&nbsp;trůn po jeho smrti.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Roh%C3%A1%C4%8D_z_Dub%C3%A9"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          <b>Bartošek z&nbsp;Drahonic</b> ve své <i>Cronica</i> (Fontes Rerum
          Bohemicarum, sv.&nbsp;V) k&nbsp;roku 1437 popisuje královské tažení
          proti Sionu, jméno hejtmana Hynce Ptáčka z&nbsp;Pirkštejna i&nbsp;dobu
          obléhání. Bartoškova kronika sahá do roku 1443 a&nbsp;pro zánik
          Roháčova odboje představuje nejbližší soudobé latinské svědectví.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Barto%C5%A1ek_z_Drahonic"
          />
        </p>
        <p>
          <b>Staří letopisové čeští</b> ad annum 1437 zachovávají podrobnosti
          o&nbsp;dobytí hradu 6. září 1437, o&nbsp;převozu zajatců do Prahy
          a&nbsp;o&nbsp;popravě Roháče s&nbsp;druhy 9. září téhož roku. Text
          výslovně zmiňuje trojpatrovou šibenici a&nbsp;zlacený provaz, jenž měl
          zdůraznit jak Roháčovu šlechtickou důstojnost, tak královo pohrdání.
          Edice ve&nbsp;Fontes Rerum Bohemicarum (FRB), digitalizace
          archive.org.
          <Qt
            publication={PUBLICATIONS.STARI_LETOPISOVE}
            href="https://archive.org/details/staricesti"
          />
        </p>
        <p>
          Soubor pokračování <i>Pulkavovy kroniky</i> (zejm. tzv. anonymní
          pokračování, FRB sv.&nbsp;V) doplňuje datace obléhání a&nbsp;přináší
          stručný výčet Roháčových druhů. Pro mladší recepci je důležitý také
          krátký výklad <b>Aenea Silvia</b> v&nbsp;<i>Historia Bohemica</i>
          (kap.&nbsp;LIII), kde Roháčův pád interpretuje jako definitivní konec
          husitského ozbrojeného odporu.
          <Qt
            publication={PUBLICATIONS.AENEAS_BOHEMICA}
            href="https://www.digitale-sammlungen.de/de/search?query=aeneas+silvius+historia+bohemica"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Z&nbsp;hlediska tématu žoldnéřských kariér českých rytířů jde
          o&nbsp;okrajovou událost — obě strany tvořili Češi a&nbsp;konflikt
          probíhal na českém území. Význam pro pozdější žoldnéřskou tradici však
          spočívá v&nbsp;tom, že Sionem skončila éra organizovaných husitských
          polních vojsk a&nbsp;jejich veteráni se rozptýlili po Evropě: část se
          objevuje v&nbsp;Jiskrově armádě v&nbsp;Horních Uhrách, část
          v&nbsp;bratřických družinách na pomezí Slezska a&nbsp;Polska, další
          pak v&nbsp;říšských službách. Roháčův Sion je tak posledním momentem,
          kdy lze mluvit o&nbsp;husitském polním vojsku jako o&nbsp;samostatné
          instituci; po roce 1437 se z&nbsp;husitské tradice stává žoldnéřská
          tradice.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Roh%C3%A1%C4%8D_z_Dub%C3%A9"
          />
        </p>
      </Col>
    </Row>
  </>
)
