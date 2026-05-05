import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const HusitskeVpadySpis = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="husitske-vpady-spis" />
        <h4>
          Husitské vpády na Spiš a Slovensko (1434–1444)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Husitské a později <i>bratřické</i> vpády na Spiš a do dalších částí
          Horních Uher (dnešního Slovenska) představují souvislou sérii
          žoldnéřských a kořistnických tažení, jež bezprostředně navázala na
          velká husitská polní vojska po jejich rozkladu v Čechách. Pro českou
          žoldnéřskou tradici 15. století má tato éra mimořádný význam — právě
          spišské a hornouherské pomezí se stalo prostředím, v němž se
          z&nbsp;rozprášených táborských a sirotčích veteránů zformovala
          vojenská komunita známá pod jménem <i>bratříci</i>. Bratříci tvořili
          po desetiletí jádro česky mluvícího žoldnéřského trhu ve střední
          Evropě a stali se přímým personálním zázemím pro vojska Jana Jiskry z
          Brandýsa.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra a kontext</h5>
        <p>
          První husitská tažení na Slovensko proběhla už během dvacátých let 15.
          století — Žižkovo tažení do Uher v zimě 1423–1424 a opakovaná tažení
          Prokopa Holého v letech 1428–1433. Ta měla převážně
          strategicko-spanilou povahu (tlak na Zikmunda Lucemburského, kořist,
          výběr výpalného) a opírala se o velká polní vojska. Po porážce u Lipan{' '}
          <b>30. května 1434</b> se táborské a sirotčí oddíly v Čechách
          rozpadly, ale jejich profesionální jádro se neztratilo — část mužů
          přešla do služby zemským pánům, část odešla do Polska, do Slezska a
          především do Horních Uher, kde nestabilní situace po smrti krále
          Albrechta II. Habsburského (<b>27. října 1439</b>) otevřela široký
          žoldnéřský trh.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci"
          />
        </p>
        <h5>Vlna let 1434–1440</h5>
        <p>
          V letech bezprostředně po Lipanech docházelo na Spiši k řadě dílčích
          vpádů, vedených zejména menšími hejtmany táborského a sirotčího
          původu. Cílem byly bohaté hornické osady a královská města (Levoča,
          Kežmarok, Bardejov, Krupina), klášterní zboží a zemské stezky.
          Útočníci si vybírali jak kořist, tak výpalné a mnohde se dlouhodobě
          usazovali v opevněných polních táborech. Postavení Spiše bylo
          komplikováno také nárokem polské koruny — část spišských měst byla od
          roku 1412 v polské zástavě (tzv. <i>Spišská zástava</i>), což
          oslabovalo uherskou obranu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci"
          />
        </p>
        <h5>Občanská válka v Uhrách 1440–1442</h5>
        <p>
          Klíčovým momentem se stala uherská občanská válka mezi stranou
          královny vdovy Alžběty Lucemburské (matky Ladislava Pohrobka) a
          stranou polského krále Vladislava III. Jagellonského. Alžběta najala
          jako velitele svých severouherských posádek Jana Jiskru z Brandýsa,
          který od roku <b>1440</b> systematicky budoval síť pevností a polních
          rot složených převážně z bývalých husitských veteránů. Pro pochopení
          spišských vpádů je tato chronologie zásadní: dosavadní toulavé
          žoldnéřské skupiny získaly v Jiskrově službě institucionalizovanou
          formu a opěrné body. Mnozí ze známých českých kondotiérů 15. století
          (Petr Aksamit z Kosova, Jan Talafús z Ostrova, Jan Šárovec, Martin
          Brcál z Dobré) prošli právě tímto prostředím.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Jan_Jiskra_of_Brand%C3%BDs"
          />
        </p>
        <h5>Boje let 1441–1444</h5>
        <p>
          V letech 1441–1444 se střídala dílčí střetnutí mezi Jiskrovými silami
          a vojsky polsko-uherského krále Vladislava III. Polní oddíly ovládaly
          značnou část území severních Uher; Jiskra držel klíčová města Košice,
          Levoču, Bardejov, Prešov, Kežmarok, Krupinu, Zvolen a hornická centra
          Kremnici, Banskou Bystrici a Banskou Štiavnici. Boje fakticky ustaly
          až po smrti Vladislava III. v bitvě u Varny <b>10. listopadu 1444</b>,
          kdy byla Alžbětina linie nakonec uznána a Jiskra potvrzen ve své
          správě severních Uher jménem nezletilého Ladislava Pohrobka.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Jan_Jiskra_of_Brand%C3%BDs"
          />
        </p>
        <h5>Bratříci jako trvalý fenomén</h5>
        <p>
          Bratříci jako organizovaný vojenský útvar se z Jiskrových rot
          osamostatnili teprve po roce 1453, kdy Petr Aksamit z Kosova vyvedl
          část mužstva ze služby a vytvořil samostatnou polní obec se sídlem na
          hradě Plaveč. Do roku <b>1458</b> ovládali bratříci podle dobových
          odhadů asi 36 táborů a opevněných stanovišť na východním a středním
          Slovensku o&nbsp;síle kolem 15 až 20 tisíc bojovníků. Tito muži si i
          přes formální rozpad vojenské služby zachovávali řadu husitských rysů
          — vojenskou demokracii (volené hejtmany), rovnostářské dělení kořisti,
          používání husitské taktiky vozové hradby a palných zbraní a využívání
          kališnické symboliky.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci"
          />
        </p>
        <h5>Závěr a postupné zničení</h5>
        <p>
          Definitivní zánik bratříků jako vojenské síly přišel až s nástupem
          Matyáše Korvína. V bitvě u Blatného Potoka roku <b>1458</b> padl
          jejich vůdce Petr Aksamit; v následujících letech Korvínovo Černé
          vojsko postupně dobývalo bratřické tábory jeden po druhém. Konečnou
          porážku bratříků zpečetila bitva u Veľkých Kostoľan <b>roku 1467</b>,
          kde byl rozdrcen poslední velký bratřický oddíl pod velením Jindřicha
          Šmikouského ze Žďáru. Část přeživších přešla do polských služeb (Jan
          Talafús z Ostrova), část byla zařazena do Korvínova Černého vojska —
          kde paradoxně tvořili profesionální páteř uherské pěchoty po další tři
          desetiletí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci"
          />
        </p>
        <h5>Primární prameny / Pohled starších kronik</h5>
        <p>
          Pro spišská a hornouherská tažení čtyřicátých let 15. století zůstává
          klíčovým narativním pramenem <i>Chronica Hungarorum</i> Jánoše
          Thuróczyho (Brno–Augsburg 1488). Thuróczy ve své kronice popisuje
          Jiskrovu vojenskou činnost v severních Uhrách a opakovaně zmiňuje{' '}
          <i>Bohemos</i> (Čechy) jako klíčový žoldnéřský prvek posádek Košic,
          Levoče a Kremnice; zajímavé je, že jejich husitskou minulost komentuje
          převážně neutrálně, jako vojenskou kvalifikaci, nikoli kacířství.
          <Qt
            publication={PUBLICATIONS.THUROCZY}
            href="https://en.wikipedia.org/wiki/J%C3%A1nos_Thur%C3%B3czy"
          />
        </p>
        <p>
          Antonio Bonfini ve své <i>Rerum Hungaricarum decades</i> (decades III,
          libri VI–VIII), psaných na dvoře Matyáše Korvína v 80. letech 15.
          století, převzal podstatnou část Thuróczyho údajů a doplnil je o
          humanistický rétorický rámec; pro období Jiskrova kapitanátu Horních
          Uher (1440–1462) Bonfini hovoří o <i>Bohemicis stipendiariis</i> a
          jejich obávaných vozových hradbách.
          <Qt
            publication={PUBLICATIONS.BONFINI}
            href="https://en.wikipedia.org/wiki/Antonio_Bonfini"
          />
        </p>
        <p>
          Z české strany doplňují obraz <i>Staří letopisové čeští</i>, kteří k
          letům 1434–1453 zaznamenávají odchody pohusitských oddílů do Uher i
          Polska a podávají jména některých kondotiérů.
          <Qt
            publication={PUBLICATIONS.STARI_LETOPISOVE}
            href="https://cs.wikipedia.org/wiki/Star%C3%A9_letopisy_%C4%8Desk%C3%A9"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Spišské a hornouherské vpády let 1434–1444 jsou zcela mimořádným
          případem, kdy jádro útočících sil tvořili sami čeští žoldnéři. Nejde
          tedy o konflikt, jehož bychom se účastnili nepřímo nebo okrajově —
          čeští a moravští bojovníci byli přímými hybateli celé éry. Hlavními
          jmenovitě doloženými veliteli byli Jan Jiskra z Brandýsa (od roku 1440
          jako královský kapitán Horních Uher), Petr Aksamit z Kosova, Jan
          Talafús z Ostrova, Martin Brcál z Dobré, Jan Šárovec, Jan Čapek ze Sán
          (zachráněný uprchlík od Lipan, později v Jiskrových službách) a další.
          Z hlediska české vojenské tradice je toto období klíčové, neboť
          v&nbsp;něm husitská polní taktika a husitské profesionální žoldnéřství
          získaly novou trvalou základnu mimo Čechy a vytvořily přímou
          personální linku k pozdějším českým kondotiérům 15. století, jejichž
          jména provázejí celou dobu poděbradskou a jagellonskou.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Jan_Jiskra_of_Brand%C3%BDs"
          />
        </p>
      </Col>
    </Row>
  </>
)
