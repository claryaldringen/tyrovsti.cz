import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const ValkaSeSliky1501 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="valka-se-sliky-1501" />
        <h4>
          Válka českých stavů se Šliky o&nbsp;loketskou enklávu (1501–1505)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Spor mezi českým králem Vladislavem&nbsp;II. Jagellonským a&nbsp;rodem{' '}
          <b>Šliků</b> o&nbsp;loketskou zástavu představuje jeden
          z&nbsp;nejdůležitějších západočeských konfliktů přelomu 15. a&nbsp;16.
          století. Hrad Loket s&nbsp;celou loketskou krajinou byl od počátku 15.
          století v&nbsp;rukou různých zástavních pánů; rod Šliků si ji od
          poloviny 15. století udržoval díky stříbrnému a&nbsp;cínovému
          bohatství Krušnohoří. Vladislavův pokus Loket vykoupit a&nbsp;vrátit
          do královských rukou narazil na šlikovský odpor a&nbsp;vyústil
          v&nbsp;sérii ozbrojených i&nbsp;právních střetů, které skončily teprve
          roku 1505 vrácením Lokte koruně.
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
          Šlikové získali loketskou zástavu jako odměnu za politické
          a&nbsp;finanční služby císaři Zikmundovi Lucemburskému. Ve druhé
          polovině 15. století se z&nbsp;chebské měšťanské rodiny stali jedním
          z&nbsp;nejbohatších rodů Krušnohoří díky stříbrnému dolování
          v&nbsp;Jáchymově a&nbsp;okolí. Loketské léno fakticky fungovalo jako
          šlikovská enkláva v&nbsp;západních Čechách; rod si držel vlastní
          mincovnu (jáchymovský tolar — etymologický základ slova „dolar&ldquo;)
          a&nbsp;téměř svrchovanou pozici. Vladislavovo vykoupení zástavy bylo
          součástí širšího pokusu jagellonské vlády obnovit zemský majetek
          narušený husitskou a&nbsp;poděbradskou érou.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/%C5%A0likov%C3%A9"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Konflikt vypukl v&nbsp;roce 1501 a&nbsp;vedl k&nbsp;ozbrojeným střetům
          mezi šlikovskými družinami a&nbsp;královskou hotovostí v&nbsp;loketské
          krajině. Šlikové se opírali o&nbsp;zemské stavy v&nbsp;západních
          Čechách a&nbsp;o&nbsp;své krušnohorské finanční zdroje, koruna
          o&nbsp;právní nárok a&nbsp;sněmovní podporu. Detailní rekonstrukce
          jednotlivých vojenských akcí vyžaduje práci s&nbsp;regionálními
          prameny a&nbsp;loketskou městskou kronikou; rámcový obraz podává
          portál města Lokte a&nbsp;wiki, primární prameny pro detailní vojenský
          průběh jsme do tohoto přehledu nezpracovali. Spor probíhal paralelně
          s&nbsp;přípravami landshutské dědické války a&nbsp;v&nbsp;západočeském
          prostoru se obě záležitosti fakticky překrývaly.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Loket_(hrad)"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          V&nbsp;roce 1505 byl Loket vrácen do královských rukou; král
          Vladislav&nbsp;II. jej získal výkupem a&nbsp;loketská krajina se opět
          stala bezprostředně královským majetkem. Šlikové si však udrželi
          jáchymovské doly a&nbsp;stříbrné výnosy, na nichž stála jejich
          pozdější moc — ve&nbsp;dvacátých letech 16. století se rod stal
          hlavním finančníkem habsburského dvora v&nbsp;saském regionu
          a&nbsp;jeho mincovna v&nbsp;Jáchymově se stala jednou
          z&nbsp;nejvýznamnějších v&nbsp;Říši.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/%C5%A0likov%C3%A9"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Pro spor mezi korunou a Šliky o Loket jsou klíčovým pramenem{' '}
          <b>
            listiny vydané v Palackého <i>Archivu českém</i>
          </b>{' '}
          (sv. V–VII) — královská napomenutí Vladislava II., šlikovské ohrazení
          a sněmovní usnesení z let 1501–1505. Edice Sněmů českých (kramerius NK
          ČR, díl I, Praha 1877) obsahuje sněmovní řeči k loketské otázce a
          vyúčtování výkupu zástavy.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://kramerius.lib.cas.cz/search/?q=sn%C4%9Bmy+%C4%8Desk%C3%A9"
          />
        </p>
        <p>
          Loketský archiv (dnes ve Státním okresním archivu v Sokolově) uchovává
          městské knihy, kopiáře a listiny šlikovské doby; část byla publikována
          v regionální edici loketských pamětí. Pro genealogii a majetkové
          poměry rodu Šliků je nezastupitelné dílo <b>Augusta Sedláčka</b>,
          zejména <i>Hrady a zámky</i> (sv. XIII pro Loketsko) a{' '}
          <i>Místopisný slovník historický</i>.
          <Qt
            publication={PUBLICATIONS.SEDLACEK1}
            href="https://kramerius.lib.cas.cz/search/?q=sedl%C3%A1%C4%8Dek+hrady"
          />
        </p>
        <p>
          Šlikovské listiny a dvorské diplomy z přelomu 15. a 16. století jsou
          zčásti digitalizovány v <i>digi20</i> Bavorské státní knihovny (BSB) —
          v mnichovských sbírkách jsou zastoupeny šlikovské mincovní patenty a
          léna pro krušnohorské doly. <b>Staří letopisové čeští</b> spor
          zaznamenávají velmi stručně, akcent kladou až na uzavření výkupu roku
          1505.
          <Qt
            publication={PUBLICATIONS.STARI_LETOPISOVE}
            href="https://archive.org/details/scriptorumrerum02unkngoog"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Konflikt byl vnitřní zemskou záležitostí; obě strany mobilizovaly
          družiny převážně z&nbsp;českého šlechtického prostředí.
          Z&nbsp;hlediska tématu žoldnéřských kariér je však zajímavý časový
          souběh s&nbsp;přípravou landshutské dědické války — tytéž západočeské
          rody, které v&nbsp;letech 1501–1505 stály na obou stranách loketského
          sporu, vstoupily v&nbsp;letech 1503–1505 do říšské služby na obou
          stranách landshutské války. Šlikovský konflikt tak fungoval jako
          pohraniční „rozcvičení&ldquo; před hlavní říšskou kampaní; část
          mužstva, které se v&nbsp;Loketsku objevuje, najdeme později
          v&nbsp;Bavorsku, jiní v&nbsp;palatinátské službě.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/%C5%A0likov%C3%A9"
          />
        </p>
      </Col>
    </Row>
  </>
)
