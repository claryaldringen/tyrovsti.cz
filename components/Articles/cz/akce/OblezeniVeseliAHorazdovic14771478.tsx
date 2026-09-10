import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const OblezeniVeseliAHorazdovic14771478 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="oblezeni-veseli-a-horazdovic-1477-1478" />
        <h4>
          Záští Racka Kocovského a&nbsp;obležení Veselí a&nbsp;Horažďovic
          (1477–1478)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Po doznění záští proti pasovskému biskupovi (1475–1476) se{' '}
          <b>Racek Kocovský z&nbsp;Kocova</b> dostal do nového sporu — tentokrát
          uvnitř českého království, s&nbsp;pány ze Šternberka
          a&nbsp;s&nbsp;dalšími jihočeskými rody, jejichž panství obléhaly jeho
          oddíly v&nbsp;letech <b>1477</b> a&nbsp;<b>1478</b>. Spor se
          soustředil na města a&nbsp;tvrze v&nbsp;povodí Otavy — zejména na{' '}
          <b>Veselí nad Lužnicí</b> a&nbsp;<b>Horažďovice</b>.
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
          Racek Kocovský patřil k&nbsp;významným postavám česko-bavorského
          žoldnéřského prostředí druhé poloviny 15. století. Jeho rod držel tvrz
          Kocov a&nbsp;menší panství v&nbsp;jihozápadních Čechách a&nbsp;jeho
          vojenská kariéra zahrnovala zkušenost z&nbsp;bavorské války 1459–1463,
          z&nbsp;bocklerské války 1467–1469 a&nbsp;ze záští proti pasovskému
          biskupovi 1475–1476 (společně s&nbsp;Břeňkem z&nbsp;Ronšperka).
          V&nbsp;polovině 70. let se zaměřil na vlastní mocenské zájmy
          v&nbsp;jižních Čechách, kde vstoupil do sporu s&nbsp;držiteli
          některých opevněných měst v&nbsp;povodí Otavy a&nbsp;Lužnice. Důvodem
          byly nesplacené dluhy, sporné statky a&nbsp;starší rodové nároky;
          Racek si svůj nárok podpořil vyhlášením formálního záští.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Hora%C5%BE%C4%8Fovice"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          V&nbsp;průběhu roku <b>1477</b> oblehl Rackův oddíl <b>Veselí</b> nad
          Lužnicí — opevněné poddanské městečko se starou vodní tvrzí na soutoku
          Lužnice a&nbsp;Nežárky. Obležení nebylo systematické dobývání, ale
          spíše dlouhotrvající blokáda doprovázená vypalováním okolních vsí
          a&nbsp;přepadáním kupců. Současně Rackovi spojenci nahodilými výpady
          ohrožovali povodí Otavy, kudy procházela cesta z&nbsp;Plzně do jižních
          Čech. V&nbsp;roce <b>1478</b> se hlavní tlak přesunul proti{' '}
          <b>Horažďovicům</b> — opevněnému městu ve správě pánů ze Šternberka —,
          kde Rackovo vojsko obléhalo městské hradby a&nbsp;přilehlé tvrze.
          K&nbsp;přímému dobytí Horažďovic však nedošlo: město disponovalo
          silným kamenným opevněním a&nbsp;dostatečnou posádkou.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1htkmhN17KhsciZ9R-qxmrVyUIjWSKfi7/view"
          />
        </p>
        <h5>Účastníci a důsledky</h5>
        <p>
          Záští bylo urovnáno až intervencí krále Vladislava II. Jagellonského
          a&nbsp;jeho zemských úředníků v&nbsp;průběhu roku <b>1478</b>. Racek
          Kocovský musel ustoupit a&nbsp;vrátit část kořisti, podržel si však
          rodové statky i&nbsp;své postavení žoldnéřského kondotiéra. Spor
          poukazuje na obtížnost prosazování zemského míru ve vnitrozemí Čech
          v&nbsp;přechodné fázi Vladislavovy vlády a&nbsp;na trvalou aktivitu
          Kocovského jako jednoho z&nbsp;nejvýraznějších záštníků tohoto období.
          Po roce 1478 se Racek vrátil do bavorských služeb a&nbsp;v&nbsp;letech
          1503–1505 se v&nbsp;jeho rodě objevují další účastníci landshutské
          dědické války. Detail obležení vyžaduje primární prameny — Jánský
          2003, sv.&nbsp;III pojednává Rackovy akce v&nbsp;samostatné kapitole.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1htkmhN17KhsciZ9R-qxmrVyUIjWSKfi7/view"
          />
        </p>
      </Col>
    </Row>
  </>
)
