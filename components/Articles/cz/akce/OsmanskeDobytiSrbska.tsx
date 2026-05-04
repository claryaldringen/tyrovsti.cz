import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const OsmanskeDobytiSrbska = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="osmanske-dobyti-srbska" />
        <h4>Osmanské dobytí Srbska (1454–1459){draft && <DraftBadge />}</h4>
        <p>
          Osmanské dobytí Srbska v letech <b>1454–1459</b> uzavřelo více než
          stoletý zápas srbského despotátu (<i>Despotat Serbien</i>) o uchování
          samostatnosti mezi rostoucí osmanskou říší a uherským královstvím. Po
          pádu Konstantinopole roku <b>1453</b> obrátil sultán Mehmed II.
          Dobyvatel pozornost na Balkán a postupně dobyl srbská území; konec
          srbského despotátu znamenalo dobytí Smedereva (něm. <i>Semendria</i>){' '}
          <b>20. června 1459</b>.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Ottoman_conquest_of_Serbia"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Srbsko vstoupilo do 15. století oslabeno bitvou na Kosově poli (1389)
          a jako de facto vazal osmanské říše. Despota Štěpán Lazarević
          (1389–1427) a jeho synovec Jiří Branković (1427–1456) lavírovali mezi
          sultánem a uherským králem Zikmundem Lucemburským. Hlavním opěrným
          bodem despoty bylo Smederevo, mocná pevnost vybudovaná Jiřím
          Brankovićem ve 30. letech 15. století. Po pádu Konstantinopole roku
          <b> 1453</b> Mehmed II. zintenzivnil tlak; <b>roku 1454</b> vpadl
          osobně do Srbska a obsadil hornické město Novo Brdo (<b>1455</b>),
          klíčový zdroj stříbra a mědi pro despotát.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Despotat_Serbien"
          />
        </p>
        <p>
          Uhry pod vedením Jánoše Hunyadiho a od roku 1456 jeho syna Ladislava
          Hunyadiho a Matyáše Korvína vystupovaly jako hlavní vnější obránce
          srbského despotátu. Hunyadiho odražení sultána u Bělehradu{' '}
          <b>22. července 1456</b> bylo zlomovým úspěchem Uherska, ale o dva
          týdny později <b>11. srpna 1456</b> Hunyadi v Zemuni zemřel na mor.
          Brzy nato (24. prosince 1456) zemřel i despota Jiří Branković.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/George_Brankovi%C4%87"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Po smrti Jiřího Brankoviće propukla mezi jeho dědici dynastická krize.
          Krátce vládli Lazar Branković († <b>20. ledna 1458</b>) a po něm jeho
          slepý bratr Štěpán Branković, jehož ze země vyhnala dvorská opozice.{' '}
          <b>1. dubna 1459</b> nastoupil v despotátu Štěpán Tomašević (syn
          bosenského krále Štěpána Tomáše), oženil se s Marií Brankovićovou a
          měl spravovat zbývající území jménem uherského krále. Sultán Mehmed
          II. však proti tomuto kroku obratem zasáhl: v červnu 1459 přitáhl k
          Smederevu s velkou armádou.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Stephen_Tomasevic_of_Bosnia"
          />
        </p>
        <p>
          Smederevo, považované za nejsilnější srbskou pevnost, kapitulovalo{' '}
          <b>20. června 1459</b> bez většího odporu — pravděpodobně po jednání
          posádky se sultánem a v důsledku slabosti Tomaševićovy autority a
          neshod uvnitř obránců. Pádem Smedereva přestal srbský despotát
          existovat a celé jeho území bylo začleněno do osmanského Smederevského
          sandžaku. Štěpán Tomašević uprchl zpět do Bosny, kde po nástupu na
          bosenský trůn (1461) byl již <b>roku 1463</b> po dobytí Bosny popraven
          sultánem.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Smederevo_Fortress"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Pádem Smedereva ztratila křesťanská strana klíčovou předsunutou pozici
          na středním Dunaji. Osmanská říše se posunula k jižním hranicím Uher a
          Bělehrad zůstal po další desetiletí nejdůležitější obrannou pevností
          proti turecké expanzi. Za Matyáše Korvína vznikl systém uherských
          pohraničních vojvodství a banátů, jehož součástí byly i ostatky srbské
          státnosti — tzv. <i>Srbský despotát v Uhrách</i>
          se sídlem v Kupiniku, vedený srbskými emigranty Vukem Brankovićem,
          Pavlem Kinižem a dalšími. Vlastní srbské území zůstalo součástí
          osmanské říše až do první poloviny 19. století.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Ottoman_conquest_of_Serbia"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Klíčovým očitým svědectvím je rukopis <b>Konstantina z Ostrovice</b> (
          <i>Pamiętniki janczara</i>, něm. <i>Memoiren eines Janitscharen</i>),
          srbského janičáře v sultánových službách, který popisuje pád Novo Brda
          1455 i sultánovu kampaň na Smederevo; nejstarší dochovaný rukopis je v
          Bibliotece Kórnické a digitalizován na portále polona.pl.
          <Qt
            publication={PUBLICATIONS.KONSTANTIN_OSTROVICE}
            href="https://polona.pl/preview/3a6f7b27-01a6-4d68-9614-5e0f4c4b6dd9"
          />
        </p>
        <p>
          Západní pohled formuloval <b>Aeneas Silvius Piccolomini</b> (pozdější
          Pius II.) v listech z let 1454–1456 i v <i>Cosmographia Asiae</i>{' '}
          (1461), kde Srbsko a Brankovićovu politiku komentuje z mantovského
          kongresu.
          <Qt
            publication={PUBLICATIONS.AENEAS_BOHEMICA}
            href="https://www.digitale-sammlungen.de/de/details/bsb00076193"
          />
        </p>
        <p>
          Uherský diplomatický rámec a popis bělehradského tažení 1456 podává{' '}
          <b>Antonio Bonfini</b> v <i>Rerum Ungaricarum decades</i> (decas III,
          lib. VIII–X), sepsáno na dvoře Matyáše Korvína kolem 1488–1496.
          <Qt
            publication={PUBLICATIONS.BONFINI}
            href="https://archive.org/details/antoniibonfiniir00bonf"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Přímá účast organizovaných českých žoldnéřských oddílů na obraně
          Srbska v letech 1454–1459 není v dostupných pramenech doložena. Na
          uherské straně, která byla hlavním vnějším spojencem despotátu, však
          sloužila řada Čechů a Moravanů: nejvýznamnější byla úloha oddílů Jana
          Jiskry z Brandýsa v Horních Uhrách (kde však po roce 1455 stál v
          opozici proti Hunyadiho a Korvínovu táboru) a později žoldnéřských
          kontingentů v armádě Matyáše Korvína. Část obránců Bělehradu v roce{' '}
          <b>1456</b> tvořili křižáci shromáždění Janem Kapistránem, mezi nimiž
          jsou doloženi i bojovníci z českých zemí a Slezska — šlo však o
          dobrovolnické a nábožensky motivované oddíly, nikoli o profesionální
          české polní roty. Vzhledem k souběžnému vypuknutí třináctileté pruské
          války (od 1454) směřovala převážná většina českých žoldnéřských
          kontingentů 50. let na sever, do služeb řádu německých rytířů a polské
          koruny, nikoli na uherské jihovýchodní bojiště.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Siege_of_Belgrade_(1456)"
          />
        </p>
      </Col>
    </Row>
  </>
)
