import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const OsmanskeDobytiBosny = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="osmanske-dobyti-bosny" />
        <h4>Osmanské dobytí Bosny (1463){draft && <DraftBadge />}</h4>
        <p>
          Osmanské dobytí Bosenského království (něm.{' '}
          <i>Osmanische Eroberung Bosniens</i>, maď.{' '}
          <i>Bosznia oszmán meghódítása</i>) bylo bleskovým tažením sultána
          Mehmeda II. Dobyvatele v jarních měsících roku <b>1463</b>, jež během
          několika týdnů ukončilo existenci samostatného bosenského státu.
          Tažení vyvrcholilo zajetím a popravou posledního krále{' '}
          <b>Štěpána Tomaševiće</b> u Klíče a přechodem rozhodující části země
          pod přímou osmanskou správu jako sandžak Bosna. Záhy poté přišlo z
          Uher protitažení Matyáše Korvína, jež obnovilo držbu severních
          pevností v čele s pevností Jajce.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Ottoman_conquest_of_Bosnia_(1463)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Bosenské království bylo od počátku 15. století klínem mezi rostoucí
          osmanskou mocností na jihu a uherským vlivem na severu. Po smrti krále
          Štěpána Tomaše roku 1461 nastoupil na trůn jeho syn Štěpán Tomašević,
          který se pokusil o sblížení s Římem a Budínem; přijal královskou
          korunu od papeže Pia II. a hledal politickou oporu v Uhrách. Tento
          obrat byl pro Mehmeda II. záminkou — bosenský král navíc zastavil
          placení každoročního tributu Vysoké Portě, k němuž byl smluvně vázán
          již od dob svého otce.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/Bosznia_oszm%C3%A1n_megh%C3%B3d%C3%ADt%C3%A1sa"
          />
        </p>
        <p>
          V předvečer osmanského vpádu byla Bosna vnitřně rozdělená. Velmožské
          rody Kosača a Pavlovićů držely vlastní polosamostatná území v
          Hercegovině a vůči ústřední moci se chovaly nepřátelsky. Královský
          dvůr měl k dispozici jen omezený počet pevností a polních sil; klíčové
          hrady na řece Bosně a Vrbasu (Bobovac, Jajce, Klíč, Travnik) tvořily
          skutečnou páteř obrany.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/K%C3%B6nigreich_Bosnien"
          />
        </p>
        <h5>Průběh tažení</h5>
        <p>
          Mehmed II. vytáhl z Drinopole na jaře <b>1463</b> v čele rozsáhlé
          armády, jejíž jádro tvořili janičáři, sipáhíové a akindžíové; dobové
          odhady hovoří o 100 000 mužích, novější bádání spíše o 70 000 až 80
          000. Hlavní voj postupoval údolím Driny a Bosny, předvoj pod velením
          velkovezíra <b>Mahmuda Paši Andželoviće</b> rychle pronikl do nitra
          země. Klíčovým úderem bylo dobytí korunovační pevnosti <b>Bobovac</b>,
          jež padla po pouhých několika dnech obléhání zradou velitele{' '}
          <i>Radaka</i> — událost, kterou bosenské prameny dlouho připomínaly
          jako symbol vnitřního rozkladu království.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Ottoman_conquest_of_Bosnia_(1463)"
          />
        </p>
        <p>
          Štěpán Tomašević uprchl z Bobovace na hrad <b>Klíč</b> u řeky Sany,
          kde se jej snažil bránit s nevelkou družinou. Po krátkém obléhání byl
          přinucen k jednání a vydal se Mahmudu Pašovi výměnou za příslib
          milosti. Sultán však tento závazek nedodržel: na základě <i>fatvy</i>{' '}
          perského učence Aliho al-Bistámího byla Mahmudova přísaha prohlášena
          za nezávaznou a Štěpán Tomašević byl spolu se strýcem Radivojem
          popraven u Jajce, pravděpodobně v polovině června <b>1463</b>. Pádem
          krále se zhroutil i centrální mocenský aparát a během několika týdnů
          přešla do osmanských rukou většina hradů středu a severozápadu země.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/Bosznia_oszm%C3%A1n_megh%C3%B3d%C3%ADt%C3%A1sa"
          />
        </p>
        <h5>Matyášovo protitažení</h5>
        <p>
          Pád Bosny vnímal uherský dvůr jako bezprostřední ohrožení vlastní
          jižní hranice. Matyáš Korvín shromáždil polní vojsko a v podzimních
          měsících <b>1463</b> vytáhl proti opouštěným osmanským posádkám.
          Klíčovým úspěchem bylo obležení a dobytí pevnosti <b>Jajce</b> ve
          dnech mezi koncem listopadu a <b>25. prosincem 1463</b>; po
          dvouměsíčním obléhání získala uherská strana strategický opěrný bod,
          kolem nějž byl ustaven <i>jajecký banát</i>. Matyáš poté obsadil i
          řadu dalších hradů na řece Vrbasu (Banja Luka, Komotin, Greben,
          Sokol). Jeho úspěch byl však jen částečný — větší část někdejšího
          království zůstala v osmanské držbě.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Ottoman_conquest_of_Bosnia_(1463)"
          />
        </p>
        <p>
          Na jaře <b>1464</b> vytáhl Mehmed II. znovu, aby Jajce dobyl zpět;
          obléhání pevnosti však po několika týdnech selhalo a sultán se musel
          vrátit do Edirne. Matyáš poté ještě v létě téhož roku táhl podruhé do
          Bosny a obsadil hrad <b>Sokol</b>, opětovné dobytí klíčových
          středobosenských pevností (Zvornik, Srebrenica) se mu však již
          nezdařilo.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/Bosznia_oszm%C3%A1n_megh%C3%B3d%C3%ADt%C3%A1sa"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Bosenské království zaniklo jako samostatný politický útvar a největší
          část jeho území byla začleněna do osmanského sandžaku Bosna se sídlem
          v Sarajevu. Severozápadní pás země s pevnostmi Jajce, Banja Luka a
          Sokol vytvořil obrannou linii uherských <i>banátů</i>, jež po více než
          šedesát let bránila osmanskému postupu k Sávě a Drávě. Hercegovina si
          pod Štěpánem Vukčićem Kosačou udržela polonezávislé postavení až do
          roku <b>1482</b>, kdy padla pevnost Herceg-Novi. Pád Bosny byl v
          západní Evropě vnímán jako další výrazný úspěch osmanského tlaku po
          pádu Cařihradu (1453) a stal se jedním z impulsů snah Pia II. o novou
          křížovou výpravu, která však zůstala jen na papíře.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/K%C3%B6nigreich_Bosnien"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Tažení očima osmanské strany líčí <b>Konstantin z Ostrovice</b> v{' '}
          <i>Pamiętnikach janczara</i> (kapitoly XXVIII–XXX), který se osobně
          účastnil sultánova vojska v Bosně 1463 a podává unikátní popis pádu
          Bobovace, Klíče i popravy Štěpána Tomaševiće u Jajce.
          <Qt
            publication={PUBLICATIONS.KONSTANTIN_OSTROVICE}
            href="https://polona.pl/preview/3a6f7b27-01a6-4d68-9614-5e0f4c4b6dd9"
          />
        </p>
        <p>
          Uherský pohled na Korvínovo protitažení a obležení Jajce zachycuje{' '}
          <b>Antonio Bonfini</b> v <i>Rerum Ungaricarum decades</i> (decas III,
          lib. X). Dalším důležitým raně novověkým pramenem je{' '}
          <b>Ludovicus Tubero</b> ve svých <i>Commentarii de temporibus suis</i>{' '}
          (1522), jenž navazuje na ústní tradici dalmatských a bosenských
          uprchlíků.
          <Qt
            publication={PUBLICATIONS.BONFINI}
            href="https://archive.org/details/antoniibonfiniir00bonf"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Přímá účast českých a moravských žoldnéřů ve vlastním osmanském tažení
          v <b>1463</b> není doložena — krátkost a překotnost kampaně neumožnila
          mobilizaci západních kontingentů. V Matyášově protitažení a obléhání{' '}
          <b>Jajce</b> však již čeští a moravští bojovníci pravděpodobně
          figurovali. Část někdejších bratřických oddílů přešla po smlouvě z
          Vacova roku 1462 do královských služeb a tvořila páteř Korvínovy polní
          armády. Konkrétní jména pro tažení 1463–1464 jsou v pramenech vzácná,
          ale ve světle struktury královských sil — zejména přítomnosti vozové
          hradby a střelců s ručnicemi — lze přítomnost českých veteránů
          předpokládat. Plné rozvinutí česko-moravských kontingentů přišlo až s
          institucionalizací <i>Černé armády</i> v 70. letech 15. století.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Ottoman_conquest_of_Bosnia_(1463)"
          />
        </p>
      </Col>
    </Row>
  </>
)
