import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const LitevskaObcanskaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="litevska-obcanska-valka" />
        <h4>Litevská občanská válka (1432–1438){draft && <DraftBadge />}</h4>
        <p>
          Litevská občanská válka (pol. <i>Wojna domowa na Litwie</i>, lit.{' '}
          <i>Lietuvos pilietinis karas</i>) byla dynastickým a mocenským zápasem
          o velkoknížecí stolec ve Velkoknížectví litevském mezi Svidrigailem
          (Švitrigailou) Olgerdovičem na jedné straně a Zikmundem Kejstutovičem
          (Žygimantasem Kęstutaitisem), bratrem zesnulého velkoknížete Vytauta
          Velikého, na straně druhé. Konflikt vypukl po nočním převratu z{' '}
          <b>31. srpna na 1. září 1432</b>, který sesadil Svidrigaila, a
          rozhořel se v rozsáhlou válku o sféry vlivu mezi Polským královstvím,
          Řádem německých rytířů, Livonským řádem a vnitřně rozdělenou litevskou
          šlechtou. Pro českého čtenáře je tato válka zásadní z toho důvodu, že
          v&nbsp;čele Svidrigailových vojsk stál Zikmund Korybutovič
          (Korybutowicz), zkušený husitský velitel z bitvy u Ústí nad Labem, a
          jejich jádro tvořili čeští žoldnéři.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Lithuanian_Civil_War_(1432%E2%80%931438)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Smrtí velkoknížete Vytauta Velikého <b>27. října 1430</b> bez mužského
          dědice se otevřela mocenská otázka nástupnictví ve Velkoknížectví
          litevském. Litevská šlechta zvolila velkoknížetem Vytautova bratrance
          Svidrigaila Olgerdoviče, čímž porušila ujednání Hrodelské unie
          z&nbsp;roku 1413, podle něhož měl být budoucí velkokníže schvalován
          polským králem Vladislavem II. Jagellem. Svidrigailo se opíral o
          ruskou pravoslavnou šlechtu litevsko-ruských území a o spojenectví s
          Řádem německých rytířů; usiloval o obnovu plné suverenity Litvy mimo
          personální unii s Polskem. Polská strana proti němu postavila
          kandidaturu Zikmunda Kejstutoviče, mladšího bratra Vytautova.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Lithuanian_Civil_War_(1432%E2%80%931438)"
          />
        </p>
        <p>
          V noci z <b>31. srpna na 1. září 1432</b> byl Svidrigailo přepaden ve
          svém polním ležení u Ašmjany v dnešním Bělorusku skupinou Zikmundových
          stoupenců a sotva uprchl do Polocku. Zikmund Kejstutovič byl{' '}
          <b>15. října 1432</b> v Hrodně oficiálně prohlášen velkoknížetem.
          Svidrigailo si zachoval kontrolu nad rozsáhlými východními a jižními
          oblastmi velkoknížectví — Polockem, Vitebskem, Smolenskem, Kyjevem a
          Volyní — a zahájil otevřenou válku.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Lithuanian_Civil_War_(1432%E2%80%931438)"
          />
        </p>
        <h5>Spojenecké systémy</h5>
        <p>
          Svidrigailo vytvořil rozsáhlou koalici. Klíčovým partnerem se stal
          Livonský řád pod velmistrem Frankem Kerskorffem; spojenecká smlouva
          s&nbsp;ním byla uzavřena <b>15. května 1433</b>. Dalšími spojenci byli
          Tatarská zlatá horda, moldavský vévoda Štěpán II. a část ruské
          pravoslavné šlechty. Vojenskou špičku tvořil Zikmund Korybutovič,
          synovec Vladislava Jagella a zkušený husitský vojevůdce; přivedl
          s&nbsp;sebou kontingent českých husitských žoldnéřů, který se osvědčil
          v bojích husitských válek a tvořil jádro Svidrigailovy pěchoty.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Sigismund_Korybut"
          />
        </p>
        <p>
          Zikmund Kejstutovič se opíral o Polské království krále Vladislava II.
          Jagella, který mu poskytl pomocná vojska pod velením polských
          velitelů, mimo jiné Jakuba Kobylańského. Na jeho straně bojoval i jeho
          syn Michael Žygimantaitis. Polské pomocné sbory čítaly v rozhodujícím
          okamžiku roku 1435 zhruba 4 000 mužů.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Pabaiskas"
          />
        </p>
        <h5>Průběh do roku 1435</h5>
        <p>
          První roky války probíhaly jako řada vzájemných nájezdů a obléhání v
          litevsko-ruském pohraničí. V roce 1433 Svidrigailovo vojsko spolu s
          livonskými oddíly opakovaně vpadlo na vlastní litevská území, ale
          chybělo mu rozhodující polní vítězství. Polská strana podnikla v
          letech 1432–1433 protitažení do volyňských a podolských území a dobyla
          několik důležitých pevností. V roce 1434 začala intenzivnější jednání
          mezi Svidrigailem a Bazilejským koncilem o&nbsp;případné církevní unii
          východního obřadu, která měla posílit jeho legitimitu, ale výsledkem
          zůstaly jen nezávazné přípisy.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Lithuanian_Civil_War_(1432%E2%80%931438)"
          />
        </p>
        <h5>Bitva u Pabaisku (Wiłkomierze) — 1. září 1435</h5>
        <p>
          Rozhodující střetnutí celé války proběhlo <b>1. září 1435</b> u
          městečka Pabaiskas (pol. <i>Wiłkomierz</i>, něm. <i>Wilkomir</i>) na
          řece Sventoji ve&nbsp;střední Litvě. Svidrigailovo vojsko vedené
          Zikmundem Korybutovičem a livonským velmistrem Frankem Kerskorffem
          čítalo podle dobových odhadů kolem 11 000 mužů (současné kroniky
          uvádějí přehnaných 30 000), z čehož významnou část tvořili Livonští
          rytíři a čeští husitští žoldnéři. Vojsko Zikmunda Kejstutoviče pod
          velením jeho syna Michaela Žygimantaitise mělo asi 9 500 vlastních
          mužů a 4 000 polských pomocných sborů Jakuba Kobylańského.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Pabaiskas"
          />
        </p>
        <p>
          První dva dny zůstaly armády na opačných březích bažinatého potoka a k
          boji nedošlo. Když Svidrigailovo vojsko začalo přesouvat tábor
          severním směrem k&nbsp;Vilkmergė a oddíly se rozdělily přes vodní tok,
          Michael Žygimantaitis využil situace a udeřil. Bitva se rozpadla v
          chaotický boj na obou březích; livonští rytíři byli rozdrceni, mnoho
          jich utonulo v řece. Velmistr Kerskorff padl, většina velitelů
          Livonského řádu byla pobita nebo zajata. Zikmund Korybutovič byl těžce
          raněn a zajat. Sám Svidrigailo unikl s asi třiceti družiníky. Bitva u
          Pabaisku bývá označována za vůbec největší ránu, jakou Livonský řád ve
          svých dějinách utrpěl.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Pabaiskas"
          />
        </p>
        <h5>Závěr války a její doznívání</h5>
        <p>
          Po porážce u Pabaisku se Svidrigailova mocenská základna rychle
          rozpadla. Většina ruských knížat se postupně podrobila Zikmundu
          Kejstutovičovi nebo polskému králi. Boje se však táhly ještě tři roky
          jako řada lokálních střetů a obléhání hradů na Volyni a v Kyjevsku. Za
          definitivní konec války bývá obvykle označován rok <b>1438</b>, kdy
          Svidrigailo přijal kompromisní mír a stáhl se na Volyň jako udělené
          knížectví. Zikmund Kejstutovič si však vítězství dlouho neužil — byl{' '}
          <b>20. března 1440</b> zavražděn na hradě Trakai skupinou spiklenců.
          Velkoknížecí stolec po něm zaujal Kazimír IV. Jagellonský, mladší syn
          Vladislava II., a personální polsko-litevská unie tak byla obnovena.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Lithuanian_Civil_War_(1432%E2%80%931438)"
          />
        </p>
        <h5>Primární prameny / Pohled starších kronik</h5>
        <p>
          Hlavním vyprávěcím pramenem o průběhu Svidrigailovy války jsou{' '}
          <i>Annales seu cronicae incliti Regni Poloniae</i> Jana Długosze, jenž
          zachytil události v knihách XI a XII <i>ad annos</i> 1432–1438.
          Długosz líčí noční převrat v Ašmjany, bitvu u Pabaisku (
          <i>Wiłkomierz</i>) i smrt Zikmunda Korybutoviče s detaily, jež
          následně převzala celá polská i litevská tradice.
          <Qt
            publication={PUBLICATIONS.DLUGOSZ}
            href="https://www.dbc.wroc.pl/dlibra/publication/8128"
          />
        </p>
        <p>
          Litevskou perspektivu zachycuje tzv. <i>Bychowiecova kronika</i>{' '}
          (Kronika Bychowca) ze 16. století, kompilace starších litevských
          letopisů; její text byl vydán v rámci{' '}
          <i>Polnoye Sobranie Russkikh Letopisey</i> (PSRL, sv. 32 a 35).
          Bychowiec klade větší důraz na vnitřní spory mezi Olgerdoviči a na
          osobnost Zikmunda Kejstutoviče. Latinský pohled doplňuje{' '}
          <i>Historia Bohemica</i> Eneáše Silvia Piccolominiho (cap. XLVI), kde
          autor připomíná Korybutovičovo husitské pražské období jako pozadí
          jeho litevské kariéry.
          <Qt
            publication={PUBLICATIONS.BYCHOWIEC}
            href="https://en.wikipedia.org/wiki/Bychowiec_Chronicle"
          />
          <Qt
            publication={PUBLICATIONS.AENEAS_BOHEMICA}
            href="https://archive.org/details/bub_gb_qLpCAAAAcAAJ"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Účast Čechů ve službách Svidrigailových je doložená a poměrně dobře
          identifikovatelná. Zikmund Korybutovič, synovec polského krále a od
          roku 1422 Vytautův zástupce v Praze, vedl od roku 1432 ve
          Svidrigailových vojscích kontingent českých husitských žoldnéřů. Byl
          dříve polním velitelem husitských vojsk a spoluvítězem v bitvě u Ústí
          nad Labem (16. června 1426); v Praze byl ovšem v roce 1427 zajat
          táborskou stranou jako podezřelý z přípravy převratu, roku 1428
          propuštěn a vrátil se do Litvy. Je pravděpodobné, že s&nbsp;ním do
          Litvy odešla část jeho někdejších bojovníků a že právě jejich husitský
          výcvik dával Svidrigailově pěchotě technologickou převahu — zejména ve
          využití palných zbraní a vozové hradby.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Sigismund_Korybut"
          />
        </p>
        <p>
          V bitvě u Pabaisku byl Korybutovič těžce raněn a upadl do zajetí; o
          jeho dalším osudu kolují tři verze — že zemřel během několika dnů na
          následky zranění, že byl utopen, anebo otráven. Většina moderních
          historiků se přiklání ke smrti na infekci ran. S jeho pádem ztratila
          husitská přítomnost ve Velkoknížectví litevském svého nejvýznamnějšího
          patrona; jednotliví čeští žoldnéři, kteří přežili, se zřejmě
          rozptýlili do služeb polské nebo livonské strany. Litevská občanská
          válka představuje vůbec první doložené nasazení rozsáhlejšího
          husitského kontingentu v severovýchodní Evropě a je důležitým mezníkem
          ve formování české žoldnéřské tradice 15. století.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Sigismund_Korybut"
          />
        </p>
      </Col>
    </Row>
  </>
)
