import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const DobytiTepelskehoKlastera1467 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="dobyti-tepelskeho-klastera-1467" />
        <h4>
          Dobytí a&nbsp;vyloupení tepelského kláštera katolickými pány (1467)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Tepelský premonstrátský klášter — jeden z&nbsp;nejstarších
          a&nbsp;nejbohatších klášterů západních Čech, založený roku 1193{' '}
          <b>Hroznatou z&nbsp;Ovence</b> — byl v&nbsp;<b>roce 1467</b> vypleněn
          katolickými pány Zelenohorské jednoty v&nbsp;rámci širšího tažení
          proti statkům, jež se hlásily ke králi Jiřímu z&nbsp;Poděbrad. Akce
          zapadá do sítě drobných záští, které doprovázely vyhlášení druhé
          křížové výpravy proti Jiřímu a&nbsp;předcházely pádu řady
          západočeských pevností.
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
          Klášter Teplá ležel ve strategickém prostoru mezi Plzeňskem
          a&nbsp;Loketskem na cestě z&nbsp;Bavorska do severních Čech. Po
          vyhlášení papežské klatby nad Jiřím z&nbsp;Poděbrad{' '}
          <b>23. prosince 1466</b> a&nbsp;po formálním zřízení Zelenohorské
          jednoty <b>28. listopadu 1465</b> se západní Čechy rychle
          polarizovaly: část katolické šlechty otevřeně vystoupila proti králi
          a&nbsp;hledala spojení s&nbsp;bavorskými a&nbsp;falckými pány. Klášter
          Teplá sám sice patřil k&nbsp;institucím, jež byly s&nbsp;katolickou
          stranou tradičně spjaté, ale jeho opat se v&nbsp;polovině 60. let
          klonil k&nbsp;umírněnému postoji vůči Jiřímu — dostatečný důvod, aby
          se stal cílem radikálního křídla zelenohorských pánů a&nbsp;jejich
          žoldnéřských oddílů.
        </p>
        <h5>Průběh</h5>
        <p>
          Oddíly katolických pánů zaútočily na klášterní areál, pravděpodobně
          v&nbsp;průběhu jara nebo léta <b>1467</b>. Klášter byl dobyt
          pravděpodobně bez delšího obležení — středověké premonstrátské
          fortifikace nebyly stavěny pro vážnou vojenskou obranu —
          a&nbsp;komunita řeholníků utrpěla těžké škody. Útočníci odnesli
          klášterní pokladnu, liturgické náčiní, část archivu i&nbsp;zásoby.
          Část konventu byla rozptýlena a&nbsp;klášter na řadu let ztratil
          schopnost normální správy svých statků.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <h5>Účastníci a&nbsp;důsledky</h5>
        <p>
          Mezi útočníky byli žoldnéři ve službách katolických pánů
          z&nbsp;Plzeňska a&nbsp;Loketska — rody Šliků, Plavenských, Gutštejnů
          a&nbsp;dalších, jejichž oddíly se v&nbsp;letech 1467–1469 opakovaně
          vyskytují v&nbsp;dokladech bocklerských akcí. Část mužstva tvořili
          veteráni dřívějších záští, kteří později přešli do bavorských služeb —
          a&nbsp;naopak někteří z&nbsp;nich přicházeli z&nbsp;bavorské strany
          jako najatí specialisté na obléhání drobných opevněných sídel.
        </p>
        <p>
          Z&nbsp;hlediska Jiřího z&nbsp;Poděbrad mělo vyloupení tepelského
          kláštera dvojí dopad. Materiálně oslabilo jednu z&nbsp;větších
          západočeských duchovních institucí a&nbsp;ekonomicky destabilizovalo
          celý prostor v&nbsp;okolí Teplé, Bečova a&nbsp;Toužimi. Politicky
          poskytlo zelenohorským pánům propagandistický argument, že
          v&nbsp;západních Čechách je možné beztrestně útočit i&nbsp;na duchovní
          statky — což krátkodobě posílilo jejich pozici, dlouhodobě však
          uškodilo katolickému táboru tím, že část zbylé šlechty se
          z&nbsp;morálních důvodů vrátila k&nbsp;Jiřímu. Klášter Teplá se
          z&nbsp;dopadů roku 1467 zotavoval ještě v&nbsp;jagellonském období.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Klášter_premonstrátů_v_Teplé"
          />
        </p>
      </Col>
    </Row>
  </>
)
