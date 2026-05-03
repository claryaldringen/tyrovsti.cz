import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const SvabskaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="svabska-valka" />
        <h4>Švábská válka (1499){draft && <DraftBadge />}</h4>
        <p>
          Švábská válka byla posledním velkým konfliktem mezi Habsburky
          v&nbsp;čele s&nbsp;římským králem Maxmiliánem I. a&nbsp;Starou
          švýcarskou konfederací. Trvala necelý rok – od ledna do září 1499 –
          a&nbsp;skončila těžkou porážkou habsburské strany. Bazilejský mír
          z&nbsp;<b>22. září 1499</b> de facto uznal Konfederaci jako územní
          celek vyňatý z&nbsp;říšské jurisdikce a&nbsp;tím připravil cestu
          k&nbsp;jejímu pozdějšímu formálnímu osamostatnění vestfálským mírem
          1648.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Schwabenkrieg"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Bezprostřední záminkou byl spor o&nbsp;tzv. Tří lig (Drei Bünde)
          v&nbsp;Graubündenu, kde se prohabsburští a&nbsp;prošvýcarští páni
          přetahovali o&nbsp;vliv. Hlubší příčinou byl celý balík dlouhodobých
          sporů: odmítání tzv. říšské reformy z&nbsp;Wormsu 1495 ze strany
          Konfederace, otázka říšských daní, příslušnosti k&nbsp;říšským kruhům
          a&nbsp;k&nbsp;Říšskému komornímu soudu (Reichskammergericht).
          Maxmilián I. potřeboval konsolidovat habsburský prostor mezi Tyroly
          a&nbsp;Vorderösterreich a&nbsp;švýcarská expanze tomu stála
          v&nbsp;cestě.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Swabian_War"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Od února do září 1499 došlo k&nbsp;sérii bitev rozprostřených
          v&nbsp;širokém pásu od horního Rýna přes Bodamské jezero až po
          Vorarlbersko a&nbsp;Tyroly. K&nbsp;hlavním střetnutím patřily šarvátky
          u&nbsp;Triesenu a&nbsp;u&nbsp;Hardu (<b>11.–12. února</b>), bitva
          u&nbsp;Bruderholz (<b>22. března</b>), bitva u&nbsp;Schwaderloh (
          <b>11. dubna</b>), bitva u&nbsp;Frastanzu (<b>20. dubna</b>), bitva
          u&nbsp;Calvenu (<b>22. května</b>) a&nbsp;rozhodující bitva
          u&nbsp;Dornachu (<b>22. července</b>).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Schwabenkrieg"
          />
        </p>
        <p>
          U&nbsp;Schwaderloh (Triboltingen) <b>11. dubna 1499</b> stálo proti
          sobě 6&nbsp;000 až 7&nbsp;000 švábských landsknechtů pod velením
          Wolfganga z&nbsp;Fürstenbergu a&nbsp;asi 1&nbsp;500 mužů
          konfederačního vojska, z&nbsp;toho 600 thurgauských zemských pěších.
          Švábský útok byl zlomen překvapivým protiútokem; švábské ztráty
          dosáhly 1&nbsp;300 až 2&nbsp;000 padlých (z&nbsp;toho 130 občanů města
          Kostnice), konfederační straně padlo asi 100 mužů. Konfederace
          ukořistila celý švábský trén, dělostřelectvo a&nbsp;těžkou výzbroj.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Schlacht_bei_Schwaderloh"
          />
        </p>
        <p>
          Pro průběh války byla typická bezohlednost na obou stranách, masakry
          zajatců a&nbsp;rozsáhlé pustošení území. Tagsatzung Konfederace
          <b> 11. března 1499</b> formálně nařídil, že každý, kdo padne živý do
          rukou Konfederátů, musí být <i>abgetan</i> – zlikvidován. Bitvy
          u&nbsp;Frastanzu a&nbsp;Calvenu se proto vyznačovaly téměř úplným
          vyhubením poražených oddílů. Současníci válku vnímali jako mimořádně
          krvavou a&nbsp;Tresp ji řadí mezi nejdrastičtější epizody pozdně
          středověkého válčení v&nbsp;německy mluvícím prostoru.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00200.html"
          />
        </p>
        <p>
          Bitva u&nbsp;Dornachu <b>22. července 1499</b>, kde se konfederační
          pěchota v&nbsp;síle asi 7&nbsp;200 mužů pod velením Benedikta Hugiho,
          Niklause Konrada a&nbsp;Rudolfa z&nbsp;Erlachu střetla s&nbsp;hlavními
          silami Švábského spolku a&nbsp;říšského vojska (asi 10&nbsp;000 mužů,
          mj. nizozemští žoldnéři, říšské oddíly a&nbsp;švábská rytířská
          hotovost), přinesla Maxmiliánovi rozhodující porážku. Habsburský
          velitel hrabě <b>Heinrich VII. z&nbsp;Fürstenbergu</b> padl hned
          v&nbsp;prvních fázích bitvy, švábská sestava se rozpadla. Boj trval
          téměř celý den, definitivně rozhodl příchod 1&nbsp;000 luzernských
          a&nbsp;zugských mužů kolem 19. hodiny. Švábské ztráty dosáhly
          přibližně 3&nbsp;000 padlých plus celé dělostřelectvo, tábor
          a&nbsp;tros, konfederační asi 500 padlých. Maxmilián tím ztratil
          schopnost vést další velké polní tažení v&nbsp;daném roce.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Schlacht_bei_Dornach"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Bazilejský mír z&nbsp;<b>22. září 1499</b> potvrdil status quo:
          Konfederace získala fakticky imunitu vůči říšským reformám
          a&nbsp;říšským daním, územní zisky v&nbsp;Thurgau a&nbsp;rozšíření
          vlivu v&nbsp;Graubündenu. Maxmilián I. přesto zůstal formálně říšským
          pánem konfederačních území. Válka výrazně oslabila prestiž říšské
          reformy a&nbsp;potvrdila dlouhodobý trend osamostatňování Konfederace,
          který byl o&nbsp;více než století později formálně dovršen vestfálským
          mírem 1648.
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Čeští žoldnéři se švábské války účastnili na habsburské a&nbsp;švábské
          straně v&nbsp;rámci říšských a&nbsp;švábských spolkových kontingentů.
          Maxmilián I. opakovaně sahal po českých a&nbsp;moravských oddílech,
          které měly v&nbsp;říšských službách zavedenou pověst od dob bavorské
          války; nábory probíhaly především v&nbsp;Plzeňsku, na Šumavě
          a&nbsp;v&nbsp;západních Čechách. Český král Vladislav II. Jagellonský
          nabídl králi Maxmiliánovi pomoc a&nbsp;část českých pánů vstoupila do
          říšských služeb individuálně, mimo jiné jako velitelé jezdeckých rot
          najatých pro tyrolskou zemskou hotovost.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00200.html"
          />
        </p>
        <p>
          Účast českých oddílů v&nbsp;jednotlivých bitvách je doložena především
          v&nbsp;tyrolské a&nbsp;vorarlberské části fronty (Frastanz, Calven),
          kde Maxmilián stavěl hraniční obranu z&nbsp;jednotek najatých přes
          Innsbruck. Neměli však rozhodující vliv na výsledek tažení, protože
          klíčové bitvy v&nbsp;horním Porýní a&nbsp;u&nbsp;Dornachu probíhaly
          mimo prostor jejich nasazení a&nbsp;jejich počty byly proti velkým
          švábským kontingentům spíše doplňkové. Po porážce u&nbsp;Dornachu
          a&nbsp;po bazilejském míru se část z&nbsp;nich přesunula do služeb
          v&nbsp;dalších habsburských konfliktech, zejména do italských válek
          a&nbsp;brzy nato do landshutské dědické války 1503–1505, kde byli již
          nasazeni v&nbsp;rámcích plnohodnotných žoldnéřských pluků.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00200.html"
          />
        </p>
      </Col>
    </Row>
  </>
)
