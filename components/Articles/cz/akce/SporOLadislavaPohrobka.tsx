import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const SporOLadislavaPohrobka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="spor-o-ladislava-pohrobka" />
        <h4>
          Spor o korunu sv. Štěpána a Ladislava Pohrobka (1452–1457)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Spor o vydání mladého Ladislava Pohrobka, korunovaného uherského
          krále, jehož v poručnictví držel jeho strýc Fridrich III. Habsburský,
          se v letech 1452–1457 stal jedním z hlavních mocenských uzlů
          středoevropské politiky. Vyústil v ozbrojené povstání rakouských stavů
          (mailberský svaz) v září 1452, ve vydání Pohrobka, v jeho symbolickou
          intronizaci v Uhrách v lednu 1453 a v českou korunovaci v říjnu 1453.
          Definitivním ukončením celého sporu však byla až náhlá smrt Ladislava
          Pohrobka v Praze dne <b>23. listopadu 1457</b>, jež otevřela cestu
          volbám Jiřího z Poděbrad českým a Matyáše Korvína uherským králem.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ladislav_Pohrobek"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra a mailberský svaz</h5>
        <p>
          Po neúspěchu Hunyadiho tažení 1446 a po sjednání prešpurského příměří
          dne 22. října 1450 měl Pohrobek zůstat v péči Fridricha III. až do
          svých osmnácti let. Tato dohoda byla pro uherské, rakouské i české
          stavy nepřijatelná. Dne <b>14. října 1451</b> uzavřelo na zámku
          Mailberg ve Weinviertelu pod vedením Ulricha z Eyczingu 39 rakouských
          pánů, rytířů a měst tzv. mailberský svaz (něm. <i>Mailberger Bund</i>)
          namířený proti Fridrichovi III. K němu se postupně připojili uherští
          stoupenci Hunyadiho a kališničtí čeští páni v čele s Jiřím z Poděbrad,
          jejichž společným cílem bylo vydání Pohrobka.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Ladislaus_Postumus"
          />
        </p>
        <h5>Vydání Pohrobka (září 1452)</h5>
        <p>
          V průběhu léta 1452 zorganizoval mailberský svaz polní vojsko, které
          oblehlo Fridricha III. ve Vídeňském Novém Městě (Wiener Neustadt), kde
          Habsburkův dvůr s Pohrobkem přebýval. Podle uherských kronikářských
          údajů obklíčilo Fridrichovo sídlo až 16 000 ozbrojenců. Tlak donutil
          Fridricha k vydání. Dne <b>4. září 1452</b> předal Habsburk
          dvanáctiletého Ladislava do rukou hraběte Oldřicha II. Cellského
          (Ulrich von Cilli), jenž se fakticky stal jeho dvorním poručníkem.
          Slavnostní vjezd Pohrobka do Vídně proběhl <b>6. září 1452</b>.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Ladislaus_Postumus"
          />
        </p>
        <h5>Korunovace v Uhrách (1453)</h5>
        <p>
          Dne <b>1. ledna 1453</b> složil János Hunyadi v rukou dvanáctiletého
          Ladislava svůj dosavadní úřad zemského správce (regenta) Uher. Stalo
          se tak symbolicky, neboť reálnou výkonnou moc Hunyadi nadále fakticky
          vykonával. Dne <b>11. listopadu 1452</b> přitom Pohrobek poprvé
          předsedal stavovskému sněmu ve Vídni, kde se sešly rakouské, uherské a
          české stavy mimo území uherské koruny — což byl precedent. K uherské
          korunovaci svatoštěpánskou korunou v této fázi formálně nedošlo
          (Pohrobek byl korunován již v roce 1440 jako kojenec); v letech
          1453–1455 však byly slavnostně potvrzeny jeho regalia v Bratislavě a v
          Budíně.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/V._L%C3%A1szl%C3%B3_magyar_kir%C3%A1ly"
          />
        </p>
        <h5>Korunovace v Čechách (28. října 1453)</h5>
        <p>
          Po složitých jednáních s českými stavy v čele s Jiřím z Poděbrad
          předal Oldřich Cellský Pohrobka do Prahy. Dne <b>28. října 1453</b>{' '}
          byl třináctiletý Ladislav v pražské katedrále sv. Víta korunován
          českým králem. Reálnou výkonnou moc si v Čechách podržel zemský
          správce Jiří z Poděbrad. Dvojí instituce krále a správce představovala
          kompromis přijatelný pro českou kališnickou většinu i pro mezinárodní
          katolické prostředí, jež Pohrobka uznávalo.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ladislav_Pohrobek"
          />
        </p>
        <h5>Boj o vliv u dvora a smrt Cellského (1456)</h5>
        <p>
          Mezi Hunyadiovskou stranou a Cellskými propukl ostrý mocenský boj o
          vliv na mladého krále. Dne <b>9. listopadu 1456</b> byl v Bělehradě
          (Nándorfehérvár) zavražděn Oldřich II. Cellský — vrahem byl Ladislav
          Hunyadi, syn nedávno zesnulého Jánose Hunyadiho. Pohrobek poté nechal
          v březnu 1457 Ladislava Hunyadiho v Budíně popravit a jeho mladšího
          bratra Matyáše uvěznit. Politické napětí v Uhrách i v Čechách dosáhlo
          vrcholu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/V._L%C3%A1szl%C3%B3_magyar_kir%C3%A1ly"
          />
        </p>
        <h5>Smrt v Praze a konec sporu (23. listopadu 1457)</h5>
        <p>
          Pohrobek odjel po popravách z Uher do Prahy, kde se měl ženit s
          Magdalenou Francouzskou. Dne <b>23. listopadu 1457</b> však po tří- až
          čtyřdenní akutní nemoci zemřel ve věku sedmnácti let a devíti měsíců,
          krátce před plánovanou svatbou. Dobové prameny pojednávaly o otravě,
          novodobá medicínská analýza ostatků (publikace M. Hájka a kol. 1985)
          však uzavírá, že příčinou byla akutní leukémie. Pohrobkova smrt
          definitivně ukončila třicetiletou krizi habsbursko-uhersko-českých
          vztahů a otevřela cestu k volbě Jiřího z Poděbrad (2. března 1458)
          českým králem a Matyáše Korvína (24. ledna 1458) uherským králem.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ladislav_Pohrobek"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          <b>Aeneas Silvius</b> v{' '}
          <i>De rebus gestis Friderici III imperatoris commentarii</i> (kniha
          II, kap. I–XII) podal pohled bezprostředního účastníka. Aeneas, jenž v
          roce 1452 osobně doprovázel Fridricha III. do Říma na korunovaci,
          zachytil obležení Wiener Neustadtu mailberským svazem, vydání Pohrobka
          4. září 1452, vjezd do Vídně 6. září i následná jednání s českými,
          uherskými a rakouskými stavy. Latinský text dostupný v digi20 BSB je
          primárním pramenem dvorské diplomacie.
          <Qt
            publication={PUBLICATIONS.AENEAS_BOHEMICA}
            href="https://www.digitale-sammlungen.de/de/search?query=aeneas+silvius+de+rebus+gestis+friderici"
          />
        </p>
        <p>
          <b>Antonio Bonfini</b> v <i>Rerum Hungaricarum decades</i> (decas III,
          libri V–VII) líčí uherský průběh sporu — Hunyadiho rezignaci na
          regentství 1. ledna 1453, svatoštěpánské stavovské sjezdy v Bratislavě
          a v Budíně 1453–1455, vraždu Oldřicha II. Cellského v Bělehradě 9.
          listopadu 1456 i popravu Ladislava Hunyadiho v březnu 1457. Bonfini
          čerpal z dvorních kronikářů a archivů Korvínova dvora; jeho text je
          dostupný v digi20 BSB.
          <Qt
            publication={PUBLICATIONS.BONFINI}
            href="https://www.digitale-sammlungen.de/de/search?query=bonfini+rerum+hungaricarum"
          />
        </p>
        <p>
          <b>Staří letopisové čeští</b> ad annum 1453 zaznamenávají příjezd
          Pohrobka do Prahy v říjnu, jeho korunovaci 28. října v katedrále sv.
          Víta a obsah privilegií, jež české stavy obdržely. Záznam ad annum
          1457 přináší podrobný popis Pohrobkovy náhlé nemoci a smrti 23.
          listopadu — letopis se přiklání k podezření z otravy, novodobá
          medicínská analýza ostatků (Hájek a kol. 1985) však diagnostikovala
          akutní leukémii. Edice FRB, digitalizace archive.org.
          <Qt
            publication={PUBLICATIONS.STARI_LETOPISOVE}
            href="https://archive.org/details/scriptorumrerum02unkngoog"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Spor o Ladislava Pohrobka byl primárně politickou krizí; přímá polní
          účast českých žoldnéřských kontingentů v jeho ozbrojených fázích
          (zejména při obklíčení Wiener Neustadtu v září 1452) je pravděpodobná,
          ale doložená pouze nepřímo — Jiří z Poděbrad uzavřel s mailberským
          svazem dílčí dohody a v dolnorakouském prostoru operovaly oddíly
          českých kališnických pánů. V uherské části sporu hrál nepřímou úlohu
          Jan Jiskra z Brandýsa, jenž formálně hájil Pohrobkovu legitimitu, a v
          opozici proti Hunyadiho straně tedy stál na straně Habsburků. Po smrti
          Pohrobka v roce 1457 se mnozí čeští kondotiéři, kteří v období sporu
          sloužili rakouským i uherským pánům, nacházeli v dynastickém vakuu —
          část z nich přešla do nově se utvářejících armád Jiřího z Poděbrad,
          část do služeb Matyáše Korvína. Konflikt jako celek je proto klíčovým
          rámcovým úsekem časové osy: vysvětluje strukturu středoevropské
          politiky, na jejímž pozadí se v padesátých a šedesátých letech 15.
          století odehrávala mobilita českého žoldnéřství.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Ladislaus_Postumus"
          />
        </p>
      </Col>
    </Row>
  </>
)
