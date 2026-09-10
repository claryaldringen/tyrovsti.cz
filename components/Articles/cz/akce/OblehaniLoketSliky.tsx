import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const OblehaniLoketSliky = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="oblehani-loket-sliky-1471" />
        <h4>
          Vpád Šliků do města Lokte a vypálení podhradí (1471)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Záští mezi pány Šliky z&nbsp;Pasounu a&nbsp;Holíče a&nbsp;královským
          městem Loket představuje typický příklad pohraniční rozepře
          v&nbsp;první polovině 70. let 15. století, kdy se po smrti Jiřího
          z&nbsp;Poděbrad <b>22. března 1471</b> a&nbsp;v&nbsp;přechodném
          mezivládí proměňovaly mocenské poměry v&nbsp;západočeském pomezí.
          Šlikové, kteří od roku 1434 drželi loketské lenní panství zástavou od
          císaře Zikmunda, využili oslabené královské autority a&nbsp;pokusili
          se silou podřídit si loketské měšťany.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/%C5%A0likov%C3%A9"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Loket (něm. <i>Elbogen</i>) byl od raného středověku královským městem
          s&nbsp;významnou strategickou polohou na Ohři, na trase mezi Chebem
          a&nbsp;Karlovými Vary. Po smrti Zikmunda Lucemburského získal loketské
          panství v&nbsp;zástavu Kašpar Šlik z&nbsp;Pasounu, císařský kancléř,
          a&nbsp;jeho rod si zde drobnými výkupy a&nbsp;sňatky vystavěl
          rozsáhlou doménu zahrnující kromě hradu Lokte rovněž Bečov, Holíč,
          Ostrov a&nbsp;Sokolov. Loketští měšťané však tvrdě odmítali uznat
          šlikovskou vrchnost a&nbsp;trvali na svém přímém postavení vůči
          českému králi. Po nástupu Vladislava II. Jagellonského v&nbsp;roce
          1471 spor eskaloval, neboť Šlikové předpokládali, že nezkušený mladý
          král jejich nárok potvrdí, zatímco loketští se obrátili na zemské
          úřady se žádostí o&nbsp;ochranu starých privilegií.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Někdy v&nbsp;průběhu roku 1471 zorganizovali bratři Šlikové
          v&nbsp;čele s&nbsp;<b>Mikulášem II. Šlikem</b> ozbrojený vpád proti
          Lokti. Šlikovský oddíl složený z&nbsp;manské jízdy panství, žoldnéřů
          a&nbsp;ozbrojených poddaných z&nbsp;přilehlých vesnic vtrhl do
          předměstí, vypálil podhradí a&nbsp;přilehlou kupeckou čtvrť
          a&nbsp;pokusil se donutit měšťany k&nbsp;poddání. Vlastní opevněné
          město a&nbsp;hrad však dobyt nebyl; loketští se uchýlili za hradby
          a&nbsp;svolali pomoc z&nbsp;okolních královských měst. K&nbsp;přímému
          dobytí Lokte tedy nedošlo, ale škody na podhradí byly značné
          a&nbsp;několik kupeckých rodin bylo nuceno opustit město.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Loket_(m%C4%9Bsto)"
          />
        </p>
        <h5>Účastníci a důsledky</h5>
        <p>
          Loketští měšťané se obrátili přímo na krále Vladislava a&nbsp;na český
          zemský sněm; spor se vlekl několik let a&nbsp;Vladislav postupně
          potvrdil staré loketské výsady. Šlikové však zůstali držiteli většiny
          okolního panství a&nbsp;jejich vliv v&nbsp;západočeském pomezí se
          projevoval ještě v&nbsp;dalších desetiletích. Vpád z&nbsp;roku 1471
          zapadá do širšího vzorce drobných záští let 1471–1478, jež na
          česko-bavorském a&nbsp;chebsko-falckém pomezí dokládají oslabení
          královské moci v&nbsp;přechodném období po smrti Jiřího
          z&nbsp;Poděbrad. Detailní průběh záští vyžaduje primární prameny —
          Jánský 2003, sv.&nbsp;III věnuje šlikovsko-loketským sporům
          samostatnou kapitolu.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view"
          />
        </p>
      </Col>
    </Row>
  </>
)
