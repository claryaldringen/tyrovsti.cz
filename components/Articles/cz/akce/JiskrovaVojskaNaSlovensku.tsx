import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const JiskrovaVojskaNaSlovensku = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="jiskrova-vojska-na-slovensku" />
        <h4>
          Působení Jana Jiskry z Brandýsa v Horních Uhrách (1440 – 1462)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Jan Jiskra z Brandýsa, český šlechtic a zkušený žoldnéřský velitel,
          působil od roku 1440 v Horních Uhrách (dnešní Slovensko) ve službách
          královny vdovy Alžběty Lucemburské a jejího syna Ladislava Pohrobka.
          Po více než dvě desetiletí ovládal značnou část území severních Uher
          se sítí pevností a polními oddíly složenými převážně z českých a
          moravských žoldnéřů.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00001.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Po smrti krále Albrechta II. Habsburského dne 27. října 1439 zůstala
          jeho manželka Alžběta Lucemburská těhotná; 22. února 1440 ve Vídni
          porodila syna Ladislava (zvaného později Pohrobek). Ten byl 15. května
          1440 ve Stoličném Bělehradě korunován svatoštěpánskou korunou, kterou
          předtím Alžbětina dvorní dáma Helena Kottannerová ukradla z koruního
          pokladu na Visegrádě. Část uherské šlechty však odmítla čekat na
          nezletilého panovníka a v obavě z osmanské hrozby zvolila králem
          polského Vladislava III. Jagellonského. Alžběta hájila nároky svého
          syna a najala Jana Jiskru, aby pro ni udržel Horní Uhry s hornickými
          městy a královskými hrady.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Hungarian_Civil_War_(1440%E2%80%931442)"
          />
        </p>
        <h5>Vojenská kariéra a opory</h5>
        <p>
          Jiskra se po výcviku v Itálii a po službách u Albrechta II. v polovině
          roku 1440 vrátil do středoevropského prostoru. V krátké době ovládl
          klíčová města Košice, Levoča, Bardejov, Prešov, Kežmarok, Krupinu,
          Zvolen a hornická centra Kremnici, Banskou Bystrici a Banskou
          Štiavnici. Jeho síť čítala desítky pevností; opěrnými body byly hrady
          Šariš, Spišský hrad, Trenčín, Zvolen, Saris a Strečno. Příjmy z těžby
          drahých kovů a z mincovny v Kremnici mu umožnily průběžně financovat
          rozsáhlé žoldnéřské oddíly.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00001.html"
          />
        </p>
        <h5>Hejtmani a struktura vojska</h5>
        <p>
          Jádro Jiskrových vojsk tvořili Češi a Moravané, často veteráni
          husitských válek a jejich přímí žáci. Pod Jiskrovým velením sloužili
          hejtmani jako Petr Aksamit z Kosova, Jan Talafús z Ostrova, Jan Čapek
          ze Sán, Martin Brcál z Dobré, Jan Šárovec, Petr Komorovský a další. V
          Jiskrově dopise z 8. srpna 1451 jsou jako jeho přímí spojenci
          jmenovitě uvedeni Brcál z Dobré, Čapek ze Sán a Talafús z Ostrova.
          Posádky hornouherských měst a hradů čítaly stovky až několik tisíc
          mužů, organizovaných do polních rot kombinujících pěchotu, jezdectvo a
          vozovou hradbu po husitském vzoru.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00001.html"
          />
        </p>
        <h5>Bitva u Lučence (7. září 1451)</h5>
        <p>
          Nejvýznamnější polní střetnutí Jiskrovy kariéry. János Hunyadi dorazil
          k Lučenci nejpozději 10. srpna 1451 a zahájil obléhání tamního
          minoritského kláštera sv. Štěpána, který bránila malá Jiskrova
          posádka. Podle Jana Długosze měl Hunyadi přibližně 16 000 mužů, kdežto
          obránci kláštera čítali asi 500 mužů. Jiskra dorazil 7. září v čele
          asi 4 000 bojovníků a Hunyadiho vojsko ve dvoudenním střetnutí
          rozdrtil. Bitva u Lučence byla jediným osobním měřením sil mezi oběma
          vojevůdci a stala se vrcholem Jiskrovy vojenské kariéry.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Lu%C4%8Denec"
          />
        </p>
        <h5>Smlouvy a přerušování bojů</h5>
        <p>
          V roce 1450 sjednal Jiskra s Hunyadim 28. března smlouvu z
          Mezőkövesdu, která stvrzovala jeho držbu hornouherských území; pod
          listinou bylo osm pečetí předních šlechticů obou stran. Po porážce u
          Lučence pokračoval konflikt dílčími šarvátkami; další pokusy o
          vytlačení Jiskrových oddílů, mimo jiné u Plešivce roku 1453, opět
          selhaly.
        </p>
        <h5>Závěr služby a předání území Matyáši Korvínovi</h5>
        <p>
          Po smrti Ladislava Pohrobka v listopadu 1457 a nástupu Matyáše Korvína
          v lednu 1458 ztratil Jiskra svou hlavní politickou oporu. Konflikt s
          Korvínem se táhl několik dalších let; teprve v roce 1462 Jiskra po
          jednáních ve Vacově (Vácu) odevzdal své pozice v Horních Uhrách
          Matyáši Korvínovi a přešel do jeho služeb. V dohodě obdržel panství
          Solymos a Lippa v jižních Uhrách a sumu 25 000 zlatých jako finanční
          vyrovnání. V Korvínových službách pak zemřel kolem roku 1469.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00001.html"
          />
        </p>
        <h5>Bratříci po roce 1462</h5>
        <p>
          Část Jiskrových bývalých vojáků odmítla dohodu z Vacova a pokračovala
          v boji jako tzv. <i>bratříci</i>. V roce 1458 podle dobových odhadů
          ovládali tito muži pod vedením Petra Aksamita z Kosova zhruba 36
          táborů a opevněných stanovišť na Slovensku se silou kolem 15 až 20
          tisíc bojovníků. Jejich pohyb končil postupnými porážkami od vojsk
          Matyáše Korvína: u Blatného Potoka roku 1458 padl Petr Aksamit;
          definitivní zánik bratřických oddílů přinesla bitva u Veľkých Kostoľan
          roku 1467. Jan Talafús z Ostrova přešel ještě před tím do služeb
          polských.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Brat%C5%99%C3%ADci"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Jiskrovo více než dvacetileté působení udrželo severní Uhry dlouho
          mimo přímou kontrolu uherských králů, posílilo postavení
          hornouherských měst a zanechalo v oblasti silný český a moravský vliv
          – jazykový, vojenský i organizační. Jiskrovy posádky a polní oddíly
          přenesly do hornouherského prostoru husitskou taktiku vozové hradby a
          polní fortifikace; tradice bojových vozů a střelných zbraní jako
          pěchotní páteře přežila v zemi celé desetiletí po Jiskrově odchodu.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00001.html"
          />
        </p>
      </Col>
    </Row>
  </>
)
