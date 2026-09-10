import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const VpadyBratriku = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="vpady-bratriku" />
        <h4>
          Vpády bratříků na Moravu a do Slezska (1440–1467)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Bratříci (něm. <i>Bratrici</i>, lat. <i>fratres</i>) byli vojenské
          oddíly složené převážně z bývalých husitských bojovníků a jejich žáků,
          které od počátku čtyřicátých let 15. století působily v Horních Uhrách
          (na dnešním Slovensku), na Moravě a ve Slezsku. Zpočátku tvořily jádro
          vojska Jana Jiskry z Brandýsa ve službách královny vdovy Alžběty a
          krále Ladislava Pohrobka, postupně se však osamostatnily v
          polonezávislé žoldnéřské společenství žijící z plenění a sjednaného
          žoldu. Ve své pozdější fázi pod Petrem Aksamitem z Kosova fungovaly
          jako jedna z nejmocnějších polních sil ve střední Evropě, dokud nebyly
          mezi lety 1458 a 1467 postupně rozdrceny vojsky Matyáše Korvína.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext a vznik hnutí</h5>
        <p>
          Po smrti krále Albrechta II. v říjnu 1439 najala jeho vdova Alžběta
          Lucemburská v Horních Uhrách Jana Jiskru z Brandýsa, jenž od roku 1440
          budoval v severouherském prostoru síť hradů a polních oddílů složených
          z českých a moravských žoldnéřů. Jádrem jeho vojska byli husitští
          veteráni, mnozí z nich přímí žáci Jana Žižky a Prokopa Holého. V
          průběhu čtyřicátých a padesátých let se z této vojenské sítě postupně
          vyčlenila polosamostatná složka, která se začala označovat jako
          bratříci a žít ze žoldu, kontribucí a kořistnických výprav.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci"
          />
        </p>
        <h5>Petr Aksamit z Kosova a osamostatnění</h5>
        <p>
          Klíčovou postavou bratřického hnutí se stal Petr Aksamit z Kosova,
          původně Jiskrův hejtman. V roce 1453, kdy se Jiskra dostal do obtížné
          politické situace po přijetí Ladislava Pohrobka za krále, se Aksamit s
          částí bratříků osamostatnil a zřídil si hlavní sídlo na hradě Plaveč
          na Spiši. Pod jeho vedením se bratříci proměnili z královské zálohy ve
          svébytnou žoldnéřskou organizaci, která sama pronajímala své služby
          tomu, kdo nabídl víc — uherským pánům, polským velmožům i dílčím
          skupinám slezské šlechty.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci"
          />
        </p>
        <h5>Vpády na Moravu a do Slezska</h5>
        <p>
          Bratřické oddíly v průběhu padesátých a šedesátých let opakovaně
          podnikaly výpady přes karpatskou hranici na Moravu a do Slezska.
          Jejich pohyb provázelo plenění klášterů, vesnic a měst, vybírání
          výpalného od poddaných i městských rad, ale také pravidelné námezdní
          služby pro znesvářené šlechtické strany. V Uhrách stáli bratříci
          opakovaně proti vojskům Jánose Hunyadiho a po roce 1458 proti vojskům
          Matyáše Korvína; v moravsko-slezském prostoru pak ohrožovali olomoucké
          biskupství, opavské knížectví a okrajové državy Jiřího z Poděbrad.
          Síla bratřických polních sborů se v letech 1458–1460 odhaduje na 15
          000 až 20 000 mužů rozmístěných ve zhruba 36 táborech a opevněných
          stanovištích.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci"
          />
        </p>
        <h5>Ladislav Hunyadi a Matyáš Korvín</h5>
        <p>
          První vážná uherská vojenská akce proti bratříkům proběhla v roce
          1454, kdy proti nim vytáhl Ladislav Hunyadi. Tažení skončilo příměřím
          a nepřineslo trvalý úspěch. Po nástupu Matyáše Korvína v lednu 1458
          však uherský král přijal odstranění bratříků za prioritní úkol. V roce
          1458 utrpěli bratříci porážku v bitvě u Blatného Potoka (něm.{' '}
          <i>Sárospatak</i>), kde padl jejich hlavní velitel Petr Aksamit z
          Kosova. Hnutí přesto pokračovalo pod novými veliteli, mezi nimiž
          vynikli Jan Švehla a Jindřich Šmikouský.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci"
          />
        </p>
        <h5>Definitivní zánik u Veľkých Kostoľan (1467)</h5>
        <p>
          V průběhu šedesátých let se bratříci postupně stahovali, ale dílčí
          oddíly nadále ovládaly opěrné body v severozápadním Uhersku. V roce
          1465 zemřel Jindřich Šmikouský, jeden z posledních významných
          velitelů. Definitivní konec bratrického hnutí přinesla bitva u Veľkých
          Kostoľan roku <b>1467</b>, v níž vojska Matyáše Korvína rozdrtila
          zbytkovou polní sílu pod Janem Švehlou. Švehla byl po bitvě zajat a
          popraven, čímž skončilo přibližně dvacetisedmileté působení bratříků
          jako samostatné polní síly.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          <b>Antonio Bonfini</b> v <i>Rerum Hungaricarum decades</i> (decas III,
          libri VIII–X) podal nejúplnější uherský narativ bratrického hnutí.
          Bonfini popsal porážku u Blatného Potoka 1458, smrt Petra Aksamita z
          Kosova, postupné dobývání bratrických opěrných bodů na Spiši a v
          Šariši i bitvu u Veľkých Kostoľan 1467, kde Matyáš Korvín dorazil
          poslední polní sbor pod Janem Švehlou. Dílo dokončené roku 1497
          čerpalo z dvorních archivů a dnes je dostupné v digitalizaci BSB
          (digi20).
          <Qt
            publication={PUBLICATIONS.BONFINI}
            href="https://www.digitale-sammlungen.de/de/search?query=bonfini+rerum+hungaricarum"
          />
        </p>
        <p>
          <b>Jan z Thurócze</b> v <i>Chronica Hungarorum</i> (Brno 1488, editio
          princeps) zachycuje bratřické hnutí z perspektivy uherského dvořana a
          v kapitolách o vládě Ladislava Pohrobka a Matyáše Korvína přináší
          jména českých hejtmanů — Aksamita, Talafúse, Švehly, Šmikouského.
          Brněnský prvotisk je digitalizován v Národní knihovně ČR (Kramerius).
          <Qt
            publication={PUBLICATIONS.THUROCZY}
            href="https://kramerius5.nkp.cz"
          />
        </p>
        <p>
          <b>Jan Długosz</b> v{' '}
          <i>Annales seu cronicae incliti regni Poloniae</i> (kniha XII, k letům
          1452–1467) připomíná bratrické vpády do Malopolska a do oblasti
          severouherského pomezí; Długoszova chronologie je z polské perspektivy
          obvykle přesnější, neboť autor čerpal z dvorské kanceláře Kazimíra
          Jagellonského. Latinská edice dostupná v digi20 BSB i v Krameriovi NK
          ČR.
          <Qt
            publication={PUBLICATIONS.DLUGOSZ}
            href="https://www.digitale-sammlungen.de/de/search?query=dlugossius+annales+poloniae"
          />
        </p>
        <p>
          <b>Staří letopisové čeští</b> ad anna 1453, 1458 a 1467 zaznamenávají
          z české strany jednotlivé fáze hnutí — odchod Aksamita od Jiskry,
          bitvu u Blatného Potoka i bitvu u Veľkých Kostoľan. České letopisy
          dokládají, že do bratrických družin vstupovali synové husitských
          veteránů z Čech, Moravy a Slezska. Edice FRB, digitalizace
          archive.org.
          <Qt
            publication={PUBLICATIONS.STARI_LETOPISOVE}
            href="https://archive.org/details/scriptorumrerum02unkngoog"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Bratříci jsou doloženě a v jádru českým a moravským žoldnéřským
          fenoménem. Jejich personální základ tvořili veteráni husitských válek,
          jejich přímí žáci a synové z Čech, Moravy a Slezska, kteří po skončení
          husitských bojů hledali obživu v Horních Uhrách. Vazba na Jiskrovo
          vojsko a kontinuita s husitskou polní taktikou (vozová hradba,
          kombinace pěchoty s palnými zbraněmi a jezdectvem) dělají z bratříků
          klíčový spojovací článek mezi husitskými vojsky a polovinou 15.
          století. Jména Petra Aksamita z Kosova, Jana Talafúse z Ostrova, Jana
          Švehly či Jindřicha Šmikouského patří mezi nejdůležitější jména
          českého žoldnéřského prostředí poloviny století. Konflikt jako celek
          je proto plnoprávnou součástí časové osy — představuje obě strany
          pomyslné mince: jak český žoldnéřský potenciál pronikal do okolního
          prostoru, tak i to, jak se z něho mohli stát autonomní ozbrojení
          aktéři dlouho po skončení mateřské války.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci"
          />
        </p>
      </Col>
    </Row>
  </>
)
