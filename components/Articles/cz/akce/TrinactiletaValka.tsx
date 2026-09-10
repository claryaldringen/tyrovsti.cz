import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const TrinactiletaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="trinactileta-valka" />
        <h4>Třináctiletá válka (1454–1466){draft && <DraftBadge />}</h4>
        <p>
          Třináctiletá válka byla rozsáhlým konfliktem mezi Polským královstvím
          a&nbsp;Pruským spolkem na jedné straně a&nbsp;Řádem německých rytířů
          na straně druhé. Vedla k&nbsp;rozpadu řádového státu, ke vzniku tzv.
          Královského Pruska pod polskou korunou a&nbsp;k proměně Řádu
          v&nbsp;polského lenníka. Konflikt byl charakteristický masivním
          využitím žoldnéřských vojsk na obou stranách, mezi nimiž tvořili Češi,
          Moravané a&nbsp;Slezané jednu z&nbsp;nejpočetnějších složek.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Thirteen_Years%27_War_(1454%E2%80%931466)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Napětí mezi pruskými městy a&nbsp;šlechtou na jedné straně
          a&nbsp;Řádem na straně druhé narůstalo již od poloviny 14. století.
          Tvrdá daňová a&nbsp;hospodářská politika Řádu vedla v&nbsp;roce 1440
          k&nbsp;založení <i>Pruského spolku</i> (Preußischer Bund), který
          sdružoval města a&nbsp;šlechtu nespokojenou s&nbsp;poměry pod vládou
          velmistra Konráda z&nbsp;Erlichshausenu. <b>4. února 1454</b> spolek
          formálně vypověděl Řádu poslušnost a&nbsp;jeho poselstvo
          v&nbsp;čele&nbsp;s Janem z&nbsp;Bażyna (Hans von Baysen) požádalo
          polského krále Kazimíra IV. Jagellonského o&nbsp;připojení
          k&nbsp;polské koruně. Král návrh přijal aktem inkorporace z&nbsp;
          <b>6. března 1454</b> a&nbsp;krátce nato vyhlásil Řádu válku.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_trzynastoletnia"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Počáteční fáze války byla pro Polsko nepříznivá. Polská zemská
          hotovost utrpěla <b>18. září 1454</b> u&nbsp;Chojnic těžkou porážku.
          Kazimír IV. zde nasadil přibližně 16&nbsp;000 jezdců, několik tisíc
          čeledínů a&nbsp;jen několik set pěších, proti řádovému žoldnéřskému
          vojsku zhruba 9&nbsp;000 jezdců a&nbsp;6&nbsp;000 pěších, vedenému
          moravským kondotiérem <b>Bernardem ze Šumberka</b> (Bernhard von
          Zinnenberg) a&nbsp;žaganským vévodou Rudolfem. Polská těžká jízda sice
          zpočátku pronikla do řádové sestavy, výpad obránců Chojnic v&nbsp;týle
          a&nbsp;účinné bránění z&nbsp;vozové hradby však zlomily polský útok.
          Polské ztráty se odhadují na více než 3&nbsp;000 padlých a&nbsp;300
          zajatých, řádové na pouhou stovku padlých.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Chojnice_(1454)"
          />
        </p>
        <p>
          Porážka u&nbsp;Chojnic Kazimíra IV. donutila opustit zemskou hotovost
          a&nbsp;trvale přejít na systém placených profesionálních vojsk
          a&nbsp;sahat po žoldnéřích ze zahraničí, zejména z&nbsp;Čech, Moravy
          a&nbsp;Slezska. <b>V&nbsp;červnu 1457</b> získalo Polsko
          prostřednictvím jednání s&nbsp;žoldnéři klíčový hrad Malbork
          (Marienburg) – velmistr Ludvík z&nbsp;Erlichshausenu nedokázal
          zaplatit svým českým a&nbsp;slezským najatým posádkám, a&nbsp;ty hrad
          za 190&nbsp;000 uherských zlatých prodaly polskému králi. Vyjednávání
          i&nbsp;převzetí řídil český velitel řádové posádky{' '}
          <b>Oldřich Červenka z&nbsp;Ledče</b>, který zároveň přešel do polských
          služeb a&nbsp;stal se prvním královským starostou Malborku.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Thirteen_Years%27_War_(1454%E2%80%931466)"
          />
        </p>
        <p>
          Klíčový obrat přišel <b>17. září 1462</b> v&nbsp;bitvě u&nbsp;Świecina
          (Schwetzin) v&nbsp;Pomořanech. Polské vojsko vedené Piotrem Duninem
          v&nbsp;síle asi 2&nbsp;000 mužů (1&nbsp;000 jezdců včetně 112 těžkých
          kopiníků a&nbsp;1&nbsp;000 pěších) z&nbsp;velké části tvořených
          žoldnéři najatými polským králem zde porazilo 2&nbsp;700 mužů řádového
          velitele <b>Fritze Ravenecka</b> a&nbsp;Kaspara Nostyce. Bitva
          proběhla z&nbsp;polské strany v&nbsp;defenzivní pozici za vozovou
          hradbou postavenou husitským způsobem – vozy spojenými řetězy
          a&nbsp;obklopenými hlubokým příkopem, s&nbsp;křídlem opřeným
          o&nbsp;jezero. Řád ztratil přes 1&nbsp;000 padlých včetně samotného
          Ravenecka a&nbsp;50 zajatých, polské ztráty činily asi 250 mužů
          (z&nbsp;toho 100 padlých přímo a&nbsp;150 zemřelých později na
          zranění). Bitva přinesla rozhodující obrat ve válce ve prospěch polské
          koruny.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_%C5%9Awiecino"
          />
        </p>
        <p>
          Druhým rozhodujícím vítězstvím byla námořní bitva ve Viselském zálivu{' '}
          <b>15. září 1463</b>, kde flotila gdaňských a&nbsp;elbląžských měšťanů
          v&nbsp;síle 30 plavidel zničila řádovou flotilu o&nbsp;44 lodích. Po
          dalších třech letech vyčerpávající drobné války byla
          <b> 19. října 1466</b> uzavřena druhá toruňská smlouva. Jednání za Řád
          vedl Bernard ze Šumberka, který v&nbsp;tomto roce přijal pověření
          velmistra ke smlouvě o&nbsp;mír.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Thirteen_Years%27_War_(1454%E2%80%931466)"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Druhý toruňský mír rozdělil dosavadní řádové území. Západní část se
          stala přímou součástí polské koruny jako tzv. Královské Prusko se
          zachováním samosprávy měst a&nbsp;stavů, včetně Gdaňsku, Toruně,
          Elblągu, Malborku a&nbsp;Warmie. Východní část (pozdější Východní
          Prusko s&nbsp;Královcem) zůstala Řádu, ten se však stal polským
          lenníkem a&nbsp;velmistr získal v&nbsp;polské Senátorské radě pevné
          křeslo. Řád ztratil status suverénního státu a&nbsp;v&nbsp;dalším
          století postupně směřoval k&nbsp;sekularizaci dovršené roku 1525
          vznikem světského Pruského vévodství.
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Češi, Moravané a&nbsp;Slezané sloužili v&nbsp;průběhu války na obou
          stranách konfliktu. Na polské straně získal nejvyšší věhlas{' '}
          <b>Oldřich Červenka z&nbsp;Ledče</b>, bývalý hejtman bratříků
          z&nbsp;Horních Uher a&nbsp;původně velitel řádové posádky Malborku.
          V&nbsp;roce 1457 přešel do polských služeb a&nbsp;jako královský
          starosta Malborku se účastnil rozhodujících bojů včetně bitvy
          u&nbsp;Świecina, kde velel jednomu z&nbsp;žoldnéřských oddílů,
          a&nbsp;později obrany hradu proti pokusům řádu o&nbsp;jeho
          znovuzískání. Po válce zůstal v&nbsp;polských službách až do své
          smrti.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_trzynastoletnia"
          />
        </p>
        <p>
          Mezi další významné české velitele v&nbsp;polských službách patřili{' '}
          <b>Jan Skalský</b> z&nbsp;rodu Valdštejnů, vystupující jako jeden
          z&nbsp;žoldnéřských kapitánů, a&nbsp;<b>Jan Kolda ze Žampachu</b>,
          v&nbsp;poválečné fázi využitý také jako diplomatický prostředník mezi
          polským králem a&nbsp;českou stranou. České a&nbsp;slezské žoldnéřské
          oddíly tvořily v&nbsp;polském vojsku až do konce války jádro lehké
          i&nbsp;těžké jízdy a&nbsp;profesionální pěchoty obsluhující střelné
          zbraně a&nbsp;vozové hradby.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_trzynastoletnia"
          />
        </p>
        <p>
          Na řádové straně sloužil mimo jiné moravský kondotiér{' '}
          <b>Bernard ze Šumberka</b> (Bernhard von Zinnenberg), který velel
          řádovému vojsku v&nbsp;bitvě u&nbsp;Chojnic 1454, v&nbsp;letech 1457
          dobyl Chełmno, 1458 obléhal Toruň a&nbsp;1460 dobyl Golub-Dobrzyń.
          V&nbsp;letech 1466–1470 figuroval jako řádový vyjednavač
          s&nbsp;polskou stranou při uzavření druhého toruňského míru a&nbsp;byl
          odměněn správou chełmiského území. Podle Jana Długosze byl{' '}
          <b>7. ledna 1470</b> v&nbsp;Chełmnu otráven jedním z&nbsp;tamních
          měšťanů. Vedle něj působily v&nbsp;řádových službách další české
          a&nbsp;slezské žoldnéřské oddíly, mezi nimi i&nbsp;jezdci žaganského
          vévody Rudolfa. Po skončení války se část Červenkových mužů vrátila do
          Čech, část přešla do služeb uherského krále Matyáše Korvína nebo
          zůstala v&nbsp;polských službách. České žoldnéřské oddíly
          v&nbsp;průběhu války výrazně přispěly k&nbsp;přenosu husitských
          vojenských zkušeností, zejména taktiky vozové hradby, do polského
          a&nbsp;baltského prostoru.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_%C5%9Awiecino"
          />
        </p>
      </Col>
    </Row>
  </>
)
