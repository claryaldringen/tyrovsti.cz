import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const PruskePovstani = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="pruske-povstani" />
        <h4>Pruské povstání proti řádu (1454–){draft && <DraftBadge />}</h4>
        <p>
          Pruské povstání bylo vystoupením Pruského spolku (pol.{' '}
          <i>Związek Pruski</i>, něm. <i>Preußischer Bund</i>) proti vládě řádu
          německých rytířů na počátku roku <b>1454</b>. Po odmítnutí stížností
          řádových stavů u císařského dvora vyhlásil spolek <b>4. února 1454</b>
          řádu vypovězení poslušnosti a obrátil se s nabídkou inkorporace na
          polského krále Kazimíra IV. Jagellonského. Tato událost je dnes
          považována za bezprostřední počátek <i>třináctileté války</i>{' '}
          (1454–1466), v jejímž závěru byl řád německých rytířů zatlačen do
          postavení polského léna.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Zwi%C4%85zek_Pruski"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Pruský spolek vznikl <b>14. března 1440</b> v Kvidzyně (Marienwerder)
          jako sdružení pruských měst (mj. Toruň, Gdaňsk, Elbląg, Královec,
          Braniewo) a šlechty proti vysokým daním a omezování privilegií ze
          strany řádu. Po neúspěšných pokusech o smír probíhal několikaletý spor
          před císařským soudem Fridricha III. Císařský verdikt z roku{' '}
          <b>1453</b> vyzněl proti spolku a nařizoval jeho rozpuštění; spolek to
          odmítl a začal se připravovat na otevřené vystoupení.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Preu%C3%9Fischer_Bund"
          />
        </p>
        <p>
          Tajná jednání s polským dvorem vedla k formulaci nabídky, aby polský
          král přijal Prusy pod svou ochranu. <b>4. února 1454</b> vypověděl
          spolek řádu poslušnost a zahájil otevřené povstání. Během několika
          týdnů obsadily oddíly měst a šlechty na padesát řádových hradů a měst,
          mimo jiné Toruň, Gdaňsk, Elbląg, Královec a zčásti i Mariánský hrad (
          <i>Marienburg</i>). <b>6. března 1454</b> vydal Kazimír IV. v Krakově
          tzv. <i>akt inkorporace</i>, kterým prohlásil pruská území za součást
          Polského království a převzal nad nimi ochranu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Zwi%C4%85zek_Pruski"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Otevřená válka trvala třináct let (<b>1454–1466</b>) a stala se jedním
          z nejdelších a nejnákladnějších konfliktů 15. století ve střední
          Evropě. Polská hotovost utrpěla <b>18. září 1454</b> velkou porážku v
          bitvě u Chojnice, postupem let však získala převahu díky finanční síle
          pruských měst, zejména Gdaňska, a díky soustavnému využívání žoldnéřů.
          Klíčovými vítězstvími polské strany byla bitva u Świecina (
          <b>17. září 1462</b>), v níž polská žoldnéřská armáda pod velením
          Petra Dunina porazila řádové vojsko, a námořní bitva ve Visle u Zalewu
          Wiślaného (<b>15. září 1463</b>). Postupně padly i hlavní řádové
          opory; <i>Marienburg</i> ovládli polští žoldnéři <b>roku 1457</b>,
          když jim jej Češi v řádových službách po nezaplacení žoldu prodali.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Thirteen_Years%27_War_(1454%E2%80%931466)"
          />
        </p>
        <p>
          Žoldnéřský charakter války je pro pochopení účasti Čechů zásadní. Obě
          strany v rozsáhlé míře najímaly cizí kondotiéry, převážně z českých
          zemí, Slezska, Saska a Lužic. Na řádové straně sloužili např. Bernard
          Szumborski (Šumborský z Baboliců), Olbracht Kostka, Fritz Raveneck,
          Kašpar Nostic a další; na polské straně Jan Skalski z Burglinu, Jan
          Czerwonka, Jan Žižka z Boskovic (mladší), Petr Dunin a celá řada
          hejtmanů původem z Čech a Moravy.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_trzynastoletnia"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Konflikt skončil <b>19. října 1466</b> druhým toruňským mírem (
          <i>Pokój toruński</i>). Řád německých rytířů ztratil polovinu svého
          území (Pomořany Gdaňské, Chełmsko, Warmii a Malborské území připadlo
          Polsku jako tzv. Královské Prusy) a zbylé Prusko (s rezidencí v
          Královci) přijal jako léno polské koruny. Pruský spolek rozpoznal
          polskou svrchovanost a získal rozsáhlé městské svobody. Vítězství
          Polska a pruských stavů znamenalo strategický průlom do Baltu, na
          dlouhá staletí změnilo geopolitiku střední Evropy a oslabilo řád na
          podřadnou regionální mocnost.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Second_Peace_of_Thorn_(1466)"
          />
        </p>
        <h5>Primární prameny / Pohled starších kronik</h5>
        <p>
          Hlavním vyprávěcím pramenem o pruském povstání i celé třináctileté
          válce jsou <i>Annales seu cronicae incliti Regni Poloniae</i> Jana
          Długosze, knihy XII a XIII. Długosz byl dvorním kanovníkem a
          diplomatem Kazimíra IV.; psal o událostech z bezprostřední znalosti,
          dochoval texty Pruského spolku, akt inkorporace z{' '}
          <b>6. března 1454</b> i podrobnosti o bitvě u Chojnice. Výpravnou
          tradici doplnil minoritský kronikář <i>Jan z Komorowa</i> ve své{' '}
          <i>Memoriale ordinis fratrum minorum</i> (vyd. v{' '}
          <i>Monumenta Poloniae Historica</i>, sv. V), jenž zachycuje povstání z
          perspektivy pruských klášterů.
          <Qt
            publication={PUBLICATIONS.DLUGOSZ}
            href="https://www.dbc.wroc.pl/dlibra/publication/8128"
          />
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://www.wbc.poznan.pl/dlibra/publication/12781"
          />
        </p>
        <p>
          Řádovou perspektivu uchovaly úřední řádové letopisy a listy velmistra
          Ludvíka z Erlichshausenu, vydané kriticky v{' '}
          <i>Scriptores rerum Prussicarum</i> (sv. III–IV, Lipsko 1866–1870) a v
          Voigtově <i>Geschichte Preussens</i> (Königsberg 1827–1839, sv. VIII).
          Tyto edice obsahují i tzv. <i>Hochmeisterregistranten</i> — řádové
          smluvní spisy s žoldnéřskými hejtmany jako Bernardem Šumborským
          (Szumborski), Fritzem Ravenekem a Oldřichem Czerwonkou, jejichž čeští
          kondotiéři roku <b>1457</b> prodali polské straně Marienburg za 190
          000 uherských zlatých.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://archive.org/search?query=scriptores+rerum+prussicarum"
          />
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://archive.org/details/voigt-geschichte-preussens.-bd.-9-1839"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Účast českých a moravských žoldnéřů ve třináctileté válce byla
          mimořádně rozsáhlá a dobře doložená — patří k nejlépe zdokumentovaným
          působením českých kondotiérů ve 15. století. Na řádové straně sloužilo
          postupně několik velitelů z českých zemí: Bernard Szumborski
          (Šumborský), Olbracht Kostka ze Žleb, Kašpar Nostic, později i Ondřej
          Tegnagel (Týnecký) a Václav Neutek z Pečkova, jejichž jména jsou
          doložena v účetních pramenech řádu i v listinných dokumentech krále
          Kazimíra. Část z nich později přestoupila na polskou stranu nebo ke
          kapitulujícím posádkám: příkladem je obrana Mariánského hradu, jejíž
          česko-moravští žoldnéři pod vedením Oldřicha Czerwonky (
          <i>Czerwonka</i>, Červenka) v roce <b>1457</b> kvůli nezaplacení žoldu
          předali hrad polské straně. Na polské straně byl jedním z
          nejvýznamnějších velitelů Petr Dunin, ale doložené je i působení
          desítek dalších českých a moravských hejtmanů. Třináctiletá válka tak
          představuje vrchol pohusitské tradice českého žoldnéřského umění a
          přímý most mezi husitskou polní rotou a kondotiérskými oddíly poloviny
          15. století.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_trzynastoletnia"
          />
        </p>
      </Col>
    </Row>
  </>
)
