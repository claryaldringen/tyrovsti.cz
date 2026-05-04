import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const DobytiPusperka1473 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="dobyti-pusperka-1473" />
        <h4>
          Dobytí hradu Pušperka klatovským vojskem (1473)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Dobytí hradu <b>Pušperka</b> (něm. <i>Buschberg</i>) v&nbsp;červenci
          roku <b>1473</b> patří k&nbsp;protizáštním akcím královských měst
          v&nbsp;jihozápadních Čechách v&nbsp;první polovině 70. let 15.
          století. Klatovští měšťané, jejichž území v&nbsp;předchozích letech
          opakovaně poškodily nájezdy z&nbsp;bavorské strany i&nbsp;ze zemských
          záští, přistoupili k&nbsp;důslednému postupu proti loupežným hnízdům
          na pomezí, mezi něž byl Pušperk počítán.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Pu%C5%A1perk"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Hrad Pušperk stál nad obcí Pocinovice na západní hranici Klatovska,
          nedaleko cesty z&nbsp;Klatov do Bavorska přes Brod nad Lesy. Založen
          ve 13. století pány z&nbsp;Velhartic, prošel v&nbsp;15. století
          několika držiteli. Za husitských válek zůstával v&nbsp;rukou katolické
          šlechty a&nbsp;jeho posádka se za vlády Jiřího z&nbsp;Poděbrad dostala
          do sporu se zelenohorskou jednotou. V&nbsp;letech po smrti krále
          Jiřího byl hrad používán jako základna pro drobné nájezdy proti
          klatovskému okolí — kupeckým povozům, vesnickým statkům
          i&nbsp;poddanským vsím. Klatovští se opakovaně dovolávali zákroku,
          neboť Pušperk se v&nbsp;dobových pramenech objevuje jako tzv.{' '}
          <i>raubschloss</i>.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          V&nbsp;létě roku <b>1473</b> svolali klatovští měšťané se souhlasem
          královského hejtmana zemskou hotovost klatovského kraje
          a&nbsp;společně s&nbsp;oddíly z&nbsp;Domažlic a&nbsp;Sušice vyrazili
          proti Pušperku. Vojsko vedl klatovský purkmistr s&nbsp;královskými
          žoldnéři za podpory dělostřelby. Hrad byl po několikadenním obléhání
          dobyt — krátké obléhání vypovídá o&nbsp;omezené hradní posádce
          a&nbsp;nedostatečném opevnění proti palným zbraním poslední generace.
          Po dobytí byl Pušperk z&nbsp;rozhodnutí klatovských pobořen, aby již
          nemohl sloužit jako útočiště loupežníků. Trosky hradu zůstaly opuštěny
          a&nbsp;hrad již nebyl obnoven.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Pu%C5%A1perk"
          />
        </p>
        <h5>Účastníci a důsledky</h5>
        <p>
          Akce z&nbsp;roku 1473 je dokladem rostoucí role královských měst
          v&nbsp;udržování zemského míru v&nbsp;jihozápadních Čechách
          v&nbsp;době slabé centrální moci. Pušperk patří do širší skupiny
          západočeských hradů — vedle Pajreka, Příkopů či Rabštejna — jejichž
          vojenský význam končí v&nbsp;70.&nbsp;letech 15. století, kdy starší
          kamenné fortifikace přestávaly stačit modernímu dělostřelectvu
          zemských hotovostí a&nbsp;městských oddílů. Pro Klatovy šlo
          o&nbsp;úspěch, který doplňoval jejich politiku mírnění pohraničních
          záští. Detailní průběh akce vyžaduje primární prameny — Jánský 2003,
          sv.&nbsp;III shrnuje protiloupežné výpravy klatovských
          v&nbsp;samostatném oddíle.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view"
          />
        </p>
      </Col>
    </Row>
  </>
)
