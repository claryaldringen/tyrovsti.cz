import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const TretiLitevskoMoskevska = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="treti-litevsko-moskevska" />
        <h4>
          Třetí litevsko-moskevská válka a vzpoura Glinského (1507–1508)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Třetí litevsko-moskevská válka (pol.{' '}
          <i>wojna litewsko-moskiewska 1507–1508</i>) byla ozbrojeným konfliktem
          mezi Litevským velkoknížectvím v čele se Zikmundem I. Starým a
          Moskevským velkoknížectvím vedeným Vasilijem III. Konflikt je úzce
          spjat s tzv. vzpourou knížete Michaela Glinského, který v reakci na
          ztrátu vlivu u nového velkoknížete přešel s rodovou družinou na stranu
          Moskvy a stal se jedním z hlavních moskevských velitelů na litevské
          frontě.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_litewsko-moskiewska_(1507%E2%80%931508)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Po smrti velkoknížete Alexandra Jagellonského <b>19. srpna 1506</b>{' '}
          nastoupil na litevský a polský trůn jeho bratr Zikmund I. Starý.
          Michael Glinski, do té doby všemocný maršálek dvora a vítěz nad Tatary
          u Kleckého, ztratil pozici a jeho dlouholetý protivník Jan
          Zaberezinski jej obvinil ze zrady a snahy o uchopení trůnu. Zikmund I.
          sice obvinění formálně zamítl, ale pozice Glinského a jeho rodiny byla
          nadále pod tlakem; když na počátku roku 1507 Zikmund odepřel potvrdit
          Glinskému jeho vladařské úřady, rozhodl se kníže pro otevřenou
          vzpouru.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Muscovite%E2%80%93Lithuanian_Wars"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Stav války mezi Litvou a Moskvou byl konstatován usnesením litevského
          sejmu <b>2. února 1507</b>; Vasilij III. odmítl uznat Zikmundovu vládu
          a požadoval navrácení území ztracených v předchozích válkách. Hlavní
          bojiště se rozprostřela na horním Dněpru a v okolí Smolenska.{' '}
          <b>2. února 1508</b> propukla otevřená vzpoura Glinského: ten zaútočil
          na sídlo Jana Zaberezinského v Grodně a soka osobně zabil. Současně se
          zmocnil opevněných měst Mozyr, Klecký a Turov a žádal, aby mu Vasilij
          III. potvrdil držbu jako moskevské léno. Moskevské vojsko vstoupilo do
          Litvy několika proudy: hlavní oddíl pod velením Vasilije Šemjačiče
          směřoval k Minsku, druhý k Smolensku, třetí měl podpořit Glinského
          povstání v jihozápadní Litvě.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_litewsko-moskiewska_(1507%E2%80%931508)"
          />
        </p>
        <p>
          Litevská odpověď přišla rychle. Velkohejtman litevský kníže Konstantin
          Ostrožský, který se na jaře 1507 vrátil z moskevského zajetí, převzal
          vrchní velení polního vojska. Glinski neuspěl při obléhání Minska ani
          Slucku, byl odražen u Orši a ztratil iniciativu. Polské pomocné sbory
          pod vedením hejtmana Mikuláše Kamieneckého a Stanislava z Khodecz
          dorazily na frontu v polovině roku 1508 a umožnily společnému
          polsko-litevskému vojsku v síle asi 16 000 mužů přejít do protiútoku.
          Moskevská vojska byla zatlačena z Litvy a Glinski s rodinou ustoupil
          za hranice s asi 700 muži vlastní družiny.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Russisch-Litauische_Kriege"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Mírovou smlouvou uzavřenou v Moskvě <b>8. října 1508</b> bylo
          potvrzeno teritoriální status quo z roku 1503: Moskva si ponechala
          dobytí ze Druhé litevsko-moskevské války, ale neexpandovala dál.
          Glinski byl uznán moskevským poddaným, obdržel rozsáhlé statky kolem
          Maloluska a stal se důvěrníkem velkoknížete Vasilije III.; do litevské
          služby se však už nikdy nevrátil. Pro Litvu znamenala válka potvrzení
          faktu, že obrana proti Moskvě je závislá na polských vojenských
          zdrojích — což přímo motivovalo další jagellonské reformy a dlouhodobé
          sblížení obou států vedoucí k Lublinské unii roku 1569.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Muscovite%E2%80%93Lithuanian_Wars"
          />
        </p>
        <h5>Primární prameny / Pohled starších kronik</h5>
        <p>
          Hlavním kronikářským zdrojem pro Glinského vzpouru je{' '}
          <i>Bychowiecova kronika</i> (Kronika Bychowca), litevská kompilace ze
          16. století vydaná v <i>Polnoye Sobranie Russkikh Letopisey</i> (sv.
          32 a 35). Bychowiec uvádí Glinského zradu, vraždu Jana Zaberezinského
          v Grodně <b>2. února 1508</b> i podrobnosti o tatarských pomocných
          oddílech, jež vzbouřence doprovázely. Maciej Stryjkowski v{' '}
          <i>Kronice polské, litewské, żmudzké</i> (1582, kn. XXIII) rozšiřuje
          Bychowcův text o polské hejtmany Mikuláše Kamieneckého a Stanislava z
          Khodecz a popisuje Ostrožského návrat z moskevského zajetí.
          <Qt
            publication={PUBLICATIONS.BYCHOWIEC}
            href="https://en.wikipedia.org/wiki/Bychowiec_Chronicle"
          />
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://polona.pl/item/kronika-polska-litewska-zmodzka-i-wszystkiej-rusi,NzkzNTk3MTM/"
          />
        </p>
        <p>
          Polskou stranu reprezentuje{' '}
          <i>De origine et rebus gestis Polonorum libri XXX</i> Marcina Kromera
          (lib. XXX), který přejímá Długoszovu metodu a doplňuje vzpouru
          Glinského o detaily mírových jednání v Moskvě <b>8. října 1508</b>.
          Soudobé úřední listiny — Glinského korespondence s Vasilijem III. a
          mírové instrukce Zikmunda I. — jsou dochovány v Litevské metrice (
          <i>Lietuvos Metrika</i>), která byla z velké části zpřístupněna ve
          vilenských vydáních 19. století.
          <Qt
            publication={PUBLICATIONS.KROMER}
            href="https://www.bsb-muenchen-digital.de/~web/web1008/bsb10080831/images/index.html"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Přímá účast českých a moravských žoldnéřů byla v této válce
          pravděpodobně okrajová. V polských pomocných sborech hejtmanů
          Kamieneckého a Khodeckého se tradičně objevují jednotlivci ze
          slezských a moravských zemí, ale jejich podíl na celkové síle
          litevsko-polského vojska byl minimální. Glinského soukromé moskevské
          okolí naopak zahrnovalo několik šlechticů z okruhu jeho dřívějších
          kontaktů z pobytu v Brně a v tamních lázních; ti však ve válce nehráli
          vojenskou roli. Význam konfliktu pro českou kondotiérskou tradici je
          spíš nepřímý — tažení 1507–1508 ukázala, že polský model najímání
          drobné šlechty pro krátká pohraniční tažení mohl efektivně doplnit
          klasickou žoldnéřskou rotu kontinentálního typu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_litewsko-moskiewska_(1507%E2%80%931508)"
          />
        </p>
      </Col>
    </Row>
  </>
)
