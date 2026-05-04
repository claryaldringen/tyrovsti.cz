import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BojOLenoOstrohSeeberg14741475 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="boj-o-leno-ostroh-seeberg-1474-1475" />
        <h4>
          Boj o&nbsp;léno Ostroh/Seeberg na Chebsku (1474–1475)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Spor o&nbsp;chebský hrad <b>Ostroh</b> (něm. <i>Seeberg</i>), ležící
          několik kilometrů severovýchodně od Chebu nad rybníkem Ostroh, byl
          v&nbsp;letech <b>1474–1475</b> jedním z&nbsp;posledních výrazných
          záští v&nbsp;sérii pohraničních konfliktů, které propukly
          v&nbsp;období bezvládí po smrti Jiřího z&nbsp;Poděbrad. Šlo
          o&nbsp;klasický spor o&nbsp;držbu zástavního léna, do něhož se
          promítaly mocenské zájmy chebské městské obce, českého krále
          Vladislava&nbsp;II.&nbsp;Jagellonského a&nbsp;západočeské&nbsp;
          šlechty.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ostroh_(hrad)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Ostroh/Seeberg byl ve středověku pohraničním hradem chebského území;
          držely jej různé&nbsp;rody jako české zástavní léno. Hrad měl
          strategický význam pro kontrolu cesty z&nbsp;Chebu na sever do
          Vogtlandu a&nbsp;jeho příslušenství zahrnovalo několik vesnic
          v&nbsp;okolí. V&nbsp;první polovině 15. století procházel hrad
          rychlými změnami držitelů, což odráželo nestabilní poměry chebského
          území v&nbsp;období husitských válek a&nbsp;po nich. V&nbsp;první
          polovině 70. let 15. století se otázka aktuálního zástavního pána
          stala znovu předmětem sporu mezi několika nárokujícími si rody
          z&nbsp;chebsko-vogtlandského pomezí.
        </p>
        <p>
          Spor zapadá do širší linie chebských pohraničních konfliktů. Po útoku
          kolovratsko-volfštejnského klanu z&nbsp;roku 1471 a&nbsp;po souběžných
          záštích Elsenbergů, Nothaftů a&nbsp;Viršperků byl chebský okruh
          vyčerpaný a&nbsp;každá nová záminka k&nbsp;rozsáhlejšímu střetu vedla
          k&nbsp;dalšímu kolu nájezdů. Léno Ostroh poskytovalo právě takovou
          záminku.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          V&nbsp;průběhu let <b>1474</b> a&nbsp;<b>1475</b> probíhaly mezi
          stranami sporu jak diplomatická jednání u&nbsp;královského dvora
          a&nbsp;u&nbsp;chebské rady, tak menší ozbrojené akce v&nbsp;okolí
          hradu. Šlo o&nbsp;typické záštní podnikání: zajímání osob
          z&nbsp;protivných držav, výpalné z&nbsp;blízkých vsí a&nbsp;přepady
          chebských kupců. Cílem nebylo dobýt vlastní hrad (na to neměla žádná
          ze stran dostatečné prostředky), nýbrž donutit protistranu
          i&nbsp;zástavní pány k&nbsp;jednání o&nbsp;převodu léna. Detailní
          průběh jednotlivých výpadů a&nbsp;přesné jméno vítěze sporu vyžadují
          práci s&nbsp;chebským archivem (Jánský 2003).
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <p>
          Vladislav&nbsp;II. Jagellonský se spor pokusil utlumit obvyklou
          jagellonskou cestou: kombinací zástavního potvrzení vítězné strany
          a&nbsp;mírových úmluv s&nbsp;chebskou obcí. Záští&nbsp;bylo formálně
          urovnáno v&nbsp;průběhu roku 1475, byť dílčí spory o&nbsp;menší
          vesnice a&nbsp;mýta v&nbsp;okolí Ostrohu pokračovaly ještě
          v&nbsp;dalších letech.
        </p>
        <h5>Účastníci a&nbsp;důsledky</h5>
        <p>
          Boj o&nbsp;Ostroh ukazuje typický mechanismus pozdně středověkého léna
          jako mocenského instrumentu: zástavní právo bylo dostatečně vágní, aby
          umožňovalo více současných nároků, a&nbsp;ozbrojený tlak se stal
          legitimní formou jejich vymáhání. Pro chebskou obec představoval spor
          další z&nbsp;řady zatížení, kterému se však podařilo skrze diplomacii
          a&nbsp;královskou autoritu vyhnout rozsáhlejším škodám. Hrad Ostroh
          přežil 15. století a&nbsp;v&nbsp;novověku ho převzaly šlikovské,
          schönburské a&nbsp;další&nbsp;rody; do dnešní podoby zámku jej
          přebudovali Wilhelmingerové&nbsp;a&nbsp;Trautenbergové. Pro
          česko-bavorské pohraniční dějiny patří záští mezi epizody, kterými se
          uzavírala první vlna pojagellonského pohraničního
          napětí&nbsp;a&nbsp;jež uvolnila prostor pro pozdější
          landshutskou&nbsp;dědickou&nbsp;válku.
        </p>
      </Col>
    </Row>
  </>
)
