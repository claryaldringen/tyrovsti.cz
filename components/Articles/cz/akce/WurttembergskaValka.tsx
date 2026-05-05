import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const WurttembergskaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="wurttemberska-valka" />
        <h4>Württemberská válka (1519){draft && <DraftBadge />}</h4>
        <p>
          Württemberská válka (něm. <i>Württembergischer Krieg</i>) byla
          vojenská exekuce Švábského spolku (něm. <i>Schwäbischer Bund</i>)
          proti vévodovi Ulrichovi Württemberskému na jaře a v létě roku 1519.
          Konflikt vyústil ve vyhnání Ulricha z dědičného vévodství a v prodej
          země do rukou Habsburků; Württembersko se na patnáct let stalo
          rakouskou državou. Tažení je významnou demonstrací moci a finanční
          síly Švábského spolku v posledních letech jeho existence a zároveň
          prvním velkým ozbrojeným úspěchem mladého arcivévody Ferdinanda I.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Schw%C3%A4bischer_Bund"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Vévoda Ulrich Württemberský byl od mládí proslulý prchlivou povahou,
          rozmařilým hospodařením a konflikty s říšskou šlechtou. Otevřený
          rozchod s císařskou stranou způsobil tzv. <i>Tübinger Vertrag</i> z
          roku 1514, jímž si zemské stavy vynutily ústupky výměnou za převzetí
          vévodských dluhů. Roku 1515 dal Ulrich při lovu zavraždit svého
          dvořana Hanse von Hutten, což vyvolalo otevřené nepřátelství s rodem
          Hutten i s říšským rytířstvem; Ulrich von Hutten od té doby vedl proti
          vévodovi propagační kampaň. Vévoda navíc v roce 1518 vyhnal vlastní
          manželku Sabinu Bavorskou, sestru bavorského vévody Viléma IV., což
          učinilo z Wittelsbachů nesmiřitelné nepřátele.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Ulrich_(W%C3%BCrttemberg)"
          />
        </p>
        <p>
          Bezprostřední záminkou války byl Ulrichův útok na svobodné říšské
          město Reutlingen <b>28. ledna 1519</b>; vévoda obsadil město jako
          odplatu za zabití svého fojta v potyčce. Reutlingen byl členem
          Švábského spolku, a zábor tedy spustil mechanismus spolkové pomoci.
          Spolek pod velením Viléma IV. Bavorského a Jiřího Truchsesse z
          Waldburgu, zvaného <i>Bauernjörg</i>, vyhlásil Ulrichovi válku.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Ulrich,_Duke_of_W%C3%BCrttemberg"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Spolkové vojsko čítající podle dobových odhadů kolem 12 000 pěších a 1
          800 jezdců překročilo württemberskou hranici v březnu 1519. Reutlingen
          byl bez boje osvobozen <b>10. března 1519</b>. Ulrich spoléhal na
          švýcarské žoldnéřské oddíly, ale ty se po smrti císaře Maxmiliána I.{' '}
          <b>12. ledna 1519</b> stáhly, neboť spřízněné kantony odmítly
          podporovat ofenzivu proti říšskému městu. Bez švýcarské opory ztratil
          Ulrich během několika týdnů takřka všechna svá města — Tübingen,
          Stuttgart i hlavní pevnosti otevřely brány. Sám vévoda uprchl{' '}
          <b>5. dubna 1519</b> přes Mömpelgard do Švýcarska a později do exilu v
          Hesensku.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Schw%C3%A4bischer_Bund"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Švábský spolek držel zemi ve své správě jen krátce; náklady tažení
          dosáhly takřka 800 000 zlatých a spolek hledal kupce.{' '}
          <b>6. února 1520</b> prodal vévodství císaři Karlu V. za 220 000
          zlatých. Württembersko se tak stalo dědičnou državou habsburské linie
          a správu převzal arcivévoda Ferdinand I. Tento stav vydržel až do roku
          1534, kdy hesenský lankrabě Filip I. vojensky vrátil Ulricha na trůn.
          Württemberská válka byla významným precedentem říšské exekuce —
          ozbrojeného zákroku Spolku proti vlastnímu členu — a předznamenala
          pozdější postup proti vzbouřeným rytířům i selským oddílům.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Ulrich,_Duke_of_W%C3%BCrttemberg"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Württemberskou domácí perspektivu zachytil v 16. století právník a
          archivář <b>Oswald Gabelkofer</b> (1539–1616) ve svých{' '}
          <i>Historische Collectanea</i>, jež soustředily korespondenci a
          listiny z vévodské kanceláře z období Ulrichova exilu. Tištěné výpisy
          obsahuje také <b>Sebastian Münster</b> v <i>Cosmographia</i> (Basilej
          1544, kniha III), kde podává shrnutí pádu Stuttgartu 1519.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://www.digitale-sammlungen.de/de/details/bsb00012641"
          />
        </p>
        <p>
          Ozbrojené stránky tažení dokumentují akta a vyúčtování Švábského
          spolku v <i>Reichstagsakten Mittlere Reihe</i> (sněmovní materiály
          augšpurského sněmu 1518 a wormského 1521), digitalizováno v rámci
          dMGH; obsahují i text spolkové smlouvy o exekuci proti Ulrichovi.
          <Qt publication={PUBLICATIONS.WIKI} href="https://www.dmgh.de/" />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Přímá účast českých žoldnéřských oddílů ve württemberské válce není v
          dochovaných pramenech doložena. Švábský spolek se v roce 1519 opíral
          především o jihoněmecké městské kontingenty a o jezdectvo spolkové
          šlechty; cizí pěchotu tvořili převážně landsknechti rekrutovaní v
          Bavorsku, Frankách a Švábsku. České země byly v této době zaměstnány
          domácími jagellonskými spory a válkou na uherské hranici, takže
          systematický nábor v Čechách neproběhl. Drobné účasti jednotlivých
          českých kondotiérů a zemanů ve žoldnéřských rotách ovšem nelze
          vyloučit — landsknechtské kompanie byly národnostně smíšené a české
          osoby v matrikách spolkových oddílů se občas objevují.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Schw%C3%A4bischer_Bund"
          />
        </p>
      </Col>
    </Row>
  </>
)
