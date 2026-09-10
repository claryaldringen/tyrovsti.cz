import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BitvaUMohace = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="bitva-u-mohace" />
        <h4>Bitva u Moháče (1526){draft && <DraftBadge />}</h4>
        <p>
          Bitva u Moháče svedená <b>29. srpna 1526</b> mezi uherskou armádou
          krále Ludvíka Jagellonského a osmanským vojskem sultána Sulejmana
          Nádherného patří k nejvýznamnějším střetnutím evropských a osmanských
          dějin. Drtivá osmanská porážka uherské armády, smrt mladého krále a
          následné rozdělení Uher zahájily dvě století osmanské nadvlády ve
          velké části Karpatské kotliny.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Moh%C3%A1cs"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Po pádu Bělehradu roku 1521 ležela jižní hranice Uher otevřená.
          Sulejman Nádherný zahájil tažení na jaře 1526 v čele armády, jejíž
          velikost se v moderních odhadech pohybuje mezi 50 000 a 100 000 muži
          se silným dělostřelectvem o 160 až 300 dělech. Uherský král Ludvík
          Jagellonský — současně český král — měl zoufalý problém s mobilizací.
          Zemský sněm dlouho odkládal vyhlášení hotovosti, šlechta váhala s
          výpravou, sliby pomoci od Čechů, Habsburků i polského dvora se
          zpožďovaly nebo zůstaly nesplněny.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Moh%C3%A1cs"
          />
        </p>
        <p>
          Politickou situaci dokumentují podrobně listy papežského nuncia{' '}
          <b>Antonia Giovanniho da Burgio</b>, datované z Budína od podzimu 1525
          do srpna 1526. Burgio v nich vykresluje katastrofickou finanční
          situaci dvora — Ludvík nemá prostředky ani na výplatu stálých posádek,
          palatin Štěpán Bátory čelí stavovské opozici a arcibiskup-vrchní
          velitel Pavel Tomori opakovaně žádá o žold pro jižní pohraniční roty.
          Ze sultánovy strany máme dochovaný <i>Sulejmanův polní deník</i>{' '}
          (turecky <i>Sefer-i Hümâyûn ruznâmesi</i>) z let 1521, 1526, 1529 a
          1532, který vede zápisy denních pochodů, kde 29. srpna stojí strohá
          poznámka o vítězství „nad bezvěrci&ldquo;.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Antonio_Giovanni_da_Burgio"
          />
        </p>
        <p>
          Když Sulejman překročil Drávu a postupoval k Dunaji, soustředila se
          uherská armáda u Moháče. Čítala přibližně 25 000 až 30 000 mužů s 85
          děly. Vrchním velitelem byl arcibiskup kalocký <b>Pavel Tomori</b>{' '}
          spolu s <b>Jurajem Zápolským</b>. Sedmihradský kontingent vojvody Jana
          Zápolského a chorvatská vojska Krištofa Frankopana k armádě nestihly
          dorazit — Zápolský dle pramenů stál okolo 23. srpna v Segedinu, asi
          200 km od bojiště.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Průběh</h5>
        <p>
          Bitva začala odpoledne <b>29. srpna 1526</b> útokem uherské pravé
          jízdy proti osmanské rumelské jízdě, který zpočátku slavil úspěch.
          Postupující uherští rytíři vlákali sebe i další uherské oddíly hluboko
          mezi osmanské linie, kde narazili na hlavní těleso janičářské pěchoty
          a osmanského dělostřelectva, jehož baterie byly připoutány řetězy do
          souvislé linie. Soustředěná střelba osmanských děl a hákovnic
          rozprášila uherský útok. Velkovezír Ibrahim Paša provedl podle
          Kemalpaşazâdeho ústup centra v řízeném oblouku, čímž vytvořil tvar
          půlměsíce, do něhož uherská těžká jízda zajela přímo pod palbu
          janičářských mušket.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Kemalpa%C5%9Fazade"
          />
        </p>
        <p>
          Souběžně osmanská křídla obkroužila uherskou armádu z obou stran.
          Během necelých dvou hodin bylo uherské vojsko zničeno. Jediným
          souvislým očitým svědectvím křesťanské strany je dílo uherského
          královského kancléře Stjepana Brodariće{' '}
          <i>
            De conflictu Hungarorum cum Solymano Turcarum imperatore ad Mohach
            historia verissima
          </i>
          , sepsané v Krakově roku 1527 jako zpráva pro polského krále Zikmunda
          I. Brodarić sám bitvu přežil a podle jeho výpočtu padlo přibližně 14
          000 vojáků a 4 000 jezdců, mimo jiné{' '}
          <b>arcibiskup ostřihomský László Szalkai</b>,{' '}
          <b>arcibiskup kalocký Pavel Tomori</b> a pět dalších biskupů (mezi
          nimi pětikostelský Ferenc Csaholy a vrátský Ferenc Perényi). Do
          osmanského zajetí byly v následujících dnech popraveny přibližně dva
          tisíce zajatců.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Stjepan_Brodari%C4%87"
          />
        </p>
        <p>
          Král Ludvík Jagellonský během útěku z bojiště utonul v rozvodněném
          potoce Csele u Moháče. Brodarić dosvědčuje, že padl pozadu z koně při
          překonávání strmého břehu, váha brnění mu znemožnila vstát ze
          zatopeného koryta. Bylo mu 20 let. Tělo bylo nalezeno až v říjnu a
          slavnostně pochováno ve Stoličném Bělehradě (Székesfehérvár).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Louis_II_of_Hungary"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Výsledek</h5>
        <p>
          Smrt Ludvíka Jagellonského bez dědice ukončila vládu Jagellonců v
          Uhrách a v Čechách. Český a uherský trůn po něm po komplikovaných
          jednáních získal Ferdinand I. Habsburský, manžel Ludvíkovy sestry
          Anny. V Uhrách však proti Ferdinandovi vystoupil Jan Zápolský, což
          vedlo k občanské válce a postupnému trojímu rozdělení Uher na
          královskou (habsburskou) část, osmanský pašalík a sedmihradské
          knížectví. Toto uspořádání trvalo až do konce 17. století.
        </p>
        <p>
          Maďarská i evropská historiografie diskutuje, do jaké míry byla
          porážka u Moháče nevyhnutelná. Géza Perjés ve své monografii{' '}
          <i>
            The Fall of the Medieval Kingdom of Hungary: Mohács 1526 – Buda 1541
          </i>{' '}
          (1989) argumentuje, že Sulejmanovým strategickým cílem nebylo dobytí
          Uher, nýbrž vasalizace, a že Tomoriho rozhodnutí přijmout polní bitvu
          na otevřené pláni místo ústupu k opevněnému městu Budín bylo
          strategickou chybou, která ovšem vyplývala z tlaku stavovských
          předáků. Pál Fodor a Gábor Ágoston naopak poukazují, že vojenská
          asymetrie byla v roce 1526 již natolik výrazná, že žádná uherská polní
          bitva nemohla přinést jiný výsledek.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/G%C3%A1bor_%C3%81goston"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          V uherské armádě u Moháče sloužily české a moravské žoldnéřské oddíly,
          jejichž součtové stavy se v pramenech udávají kolem několika set až
          tisíce mužů — pěchota s palnými zbraněmi a kušemi. Hlavní český
          kontingent vedený Jindřichem z Plavna ovšem k bitvě nestihl dorazit;
          čeští páni a moravští stavové vyhlásili hotovost příliš pozdě a
          královské svolávací listy přišly do Čech jen několik týdnů před
          střetnutím.
        </p>
        <p>
          Mezi padlými u Moháče byli šlechtici z českých zemí v družině krále
          Ludvíka. Brodarić sám — přímý účastník a později autor jediné
          dochované očité zprávy o bitvě — přežil díky tomu, že jako kancléř
          opustil bojiště v doprovodu krále a nevracel se do polního ležení.
          Pohroma u Moháče vedla k tomu, že čeští žoldnéři následně tvořili
          podstatnou součást habsburských posádek na nově vzniklé uherské
          vojenské hranici proti Osmanům. Český sněm poskytoval Ferdinandovi I.
          od roku 1527 každoroční tzv. turecký peníz (
          <i>contributio in Turcam</i>) na žold těchto žoldnéřů.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Moh%C3%A1cs"
          />
        </p>
      </Col>
    </Row>
  </>
)
