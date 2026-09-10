import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const SekularizacePruska = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="sekularizace-pruska" />
        <h4>
          Krakovská smlouva — sekularizace řádového státu (1525)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Krakovský pruský hold (pol. <i>Hołd pruski</i>, něm.{' '}
          <i>Krakauer Vertrag</i>, <i>Preußische Huldigung</i>) ze{' '}
          <b>8. dubna 1525</b> a slavnostní lenní akt z <b>10. dubna 1525</b> na
          krakovském Rynku byl mezník v dějinách střední Evropy. Velmistr Řádu
          německých rytířů Albrecht Hohenzollern přijal radu Martina Luthera,
          sekularizoval řádový stát, přijal lenní knížecí titul a stal se prvním
          evangelickým knížetem v dějinách. Z někdejšího řádového Pruska se
          stalo dědičné světské vévodství v polském lénu — Pruské vévodství.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Ho%C5%82d_pruski"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Řád německých rytířů vyšel z poslední polsko-řádové války 1519–1521
          zcela vyčerpán; toruňské příměří z roku 1521 jen oddálilo otázku
          lenního holdu. Velmistr Albrecht Hohenzollern, synovec polského krále
          Zikmunda I., hledal cestu z politické slepé uličky. V roce 1523 se v
          Norimberku setkal s Martinem Lutherem, který mu doporučil sekularizaci
          — proměnu řádového území na světské knížectví v lénu polské koruny.
          Albrecht souhlasil a po dvou letech jednání s polskou stranou byly
          podmínky finálně dohodnuty na sněmu v Krakově na jaře 1525.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Preu%C3%9Fische_Huldigung"
          />
        </p>
        <h5>Průběh aktu</h5>
        <p>
          Krakovská smlouva byla podepsána <b>8. dubna 1525</b>. Albrechtovi a
          jeho dědicům v mužské linii bylo přiznáno vévodství Pruské jako
          dědičné polské léno; Řád ztratil v Prusku veškerou pravomoc.
          Slavnostní lenní hold se konal <b>10. dubna 1525</b> na krakovském
          Rynku — Albrecht poklekl před králem Zikmundem I. a přijal modrý lenní
          prapor s pruským orlem doplněným o písmeno „S&ldquo; (Sigismundus) a
          královskou korunu. Spolu s ním složili hold jeho bratři Jiří
          Braniborsko-Ansbašský a Jindřich. Akt zachytil Jan Matejko slavným
          obrazem z roku 1882, který je dnes v Národním muzeu v Krakově.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Prussian_Homage"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Sekularizace řádového Pruska měla několik dalekosáhlých důsledků. V
          církevní rovině šlo o první sekularizaci celého řádového státu a
          založení prvního evangelického knížectví v Říši; mnoho rytířů však
          výsledek odmítlo a zbylé řádové komendy v Říši pokračovaly pod novým
          velmistrem Walterem von Cronberg s císařskou podporou. V politické
          rovině přivedla sekularizace Hohenzollerny natrvalo k pruskému
          dědictví — od roku 1618 spojeno s braniborským kurfiřtstvím — a
          zformovala dlouhodobý mocenský konflikt mezi Polskem a touto
          braniborsko-pruskou linií. Řád ztratil své někdejší jádro a zachoval
          si pouze mistrovství v Říši a v Livonsku, které pak padlo o necelé
          čtyři desetiletí později.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Ho%C5%82d_pruski"
          />
        </p>
        <h5>Primární prameny / Pohled starších kronik</h5>
        <p>
          Text krakovské smlouvy z <b>8. dubna 1525</b> i protokoly slavnostního
          lenního aktu z <b>10. dubna 1525</b> jsou dochovány v polské Korunní
          metrice (<i>Metryka Koronna</i>) a v královeckém kancelářském archivu.
          Klíčovou kritickou edici provedl Johann Voigt v{' '}
          <i>
            Geschichte Preussens von den ältesten Zeiten bis zum Untergange der
            Herrschaft des Deutschen Ordens
          </i>{' '}
          (Königsberg 1827–1839, sv. IX a X), kde je rovněž otištěna celá
          Albrechtova korespondence s Lutherem z let 1523–1525 a popisy
          slavnostního aktu očima dvořanů Zikmunda I.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://archive.org/details/voigt-geschichte-preussens.-bd.-9-1839"
          />
        </p>
        <p>
          Polský narativ podali Marcin Bielski v <i>Kronice polské</i> (Kraków
          1551, kn. V), která zachycuje obraznou stránku holdu na Rynku, a
          Marcin Kromer v <i>De origine et rebus gestis Polonorum libri XXX</i>{' '}
          (lib. XXX), jenž zařadil sekularizaci do dlouhodobé linie
          jagellonsko-řádových vztahů od druhého toruňského míru. Albrechtův
          osobní listový archiv vydal v 19. století Konstanty Górski (
          <i>Materyały do dziejów wojny pruskiej i hołdu pruskiego</i>); jeho
          svazek dokumentuje finanční pozadí krakovského aktu a obsahuje smluvní
          instrukce knížete Jiřího Braniborsko-Ansbašského.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://polona.pl/item/kronika-marcina-bielskiego,NzM5MzcwMzc/"
          />
          <Qt
            publication={PUBLICATIONS.KROMER}
            href="https://www.bsb-muenchen-digital.de/~web/web1008/bsb10080831/images/index.html"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Krakovský akt sám nebyl vojenskou operací, ale byl přímým důsledkem
          předchozí poslední polsko-řádové války, ve které čeští žoldnéři
          působili na obou stranách (viz <i>Reiterkrieg</i>). Slavnost
          krakovského holdu zajišťovala polská korunní hotovost, jíž rotmistři z
          českých zemí v té době sloužili — především jako součást těžkého
          jezdectva v družině velkohejtmana korunního Mikołaje Firleje. Dílčí
          české kontingenty se mohly vyskytovat i v Albrechtově ozbrojené
          družině, která ho na hold doprovázela; přímé prameny ovšem chybí. Z
          hlediska české vojenské historie je významné spíše dlouhodobé
          spojenecké schéma — od krakovské smlouvy se Pruské vévodství stává
          jedním z míst, kam evropští žoldnéři české provenience směřují, a v
          16. století je tato osa silnější než vazba na zaniklý řádový stát.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Ho%C5%82d_pruski"
          />
        </p>
      </Col>
    </Row>
  </>
)
