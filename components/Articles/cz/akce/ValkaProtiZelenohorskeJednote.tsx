import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const ValkaProtiZelenohorskeJednote = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="valka-proti-zelenohorske-jednote" />
        <h4>
          Válka Jiřího z Poděbrad proti Zelenohorské jednotě (1465–1471)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Válka krále Jiřího z Poděbrad proti tzv. <b>Zelenohorské jednotě</b> v
          letech <b>1465–1471</b> byla závěrečnou domácí kapitolou
          husitsko-katolického zápasu v Čechách 15. století. Spojení katolické
          části české panské obce, podpořené diplomatickou aktivitou kurie, a
          konfrontace s polským a uherským dvorem vyústily do otevřené ozbrojené
          srážky, která se po roce <b>1468</b> proměnila v rozsáhlou{' '}
          <i>česko-uherskou válku</i> mezi Jiřím a Matyášem Korvínem.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Zelenohorsk%C3%A1_jednota"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Po nástupu Jiřího z Poděbrad na český trůn roku 1458 se postupně
          prohlubovalo napětí mezi králem a katolickou částí české šlechty.
          Klíčový zlom přinesla papežská politika: <b>31. března 1462</b> Pius
          II. oficiálně zrušil <i>basilejská kompaktáta</i>, čímž Jiřímu odňal
          legitimní oporu jeho konfesního programu. Reakcí na rostoucí tlak
          kurie byl Jiřího mírový projekt evropského sněmu (1463–1464) a
          diplomatická mise <b>Lva z Rožmitálu</b> po dvorech západní Evropy.
          Pavel II., který nastoupil po Piovi II. roku 1464, pokračoval v tvrdém
          kurzu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Ji%C5%99%C3%AD_z_Pod%C4%9Bbrad"
          />
        </p>
        <h5>Vznik Zelenohorské jednoty (1465)</h5>
        <p>
          Dne <b>28. listopadu 1465</b> se na hradě <b>Zelená Hora</b> u
          Nepomuku sjelo asi šestnáct předních katolických pánů a zformulovalo
          tzv. <i>Zelenohorský zápis</i> — odbojnou jednotu proti králi. V čele
          stáli <b>Zdeněk Konopišťský ze Šternberka</b> (někdejší nejvyšší
          purkrabí pražský a blízký Jiřího spolupracovník), Jindřich IV. z
          Hradce, bratři Zajícové z Hazmburka, Bohuslav Krušina ze Švamberka,
          Vilém z Ilburka a další. Jednota formálně setrvávala na pozicích
          loajality vůči Říši a kurii a vyzývala krále k <i>nápravě</i> v
          náboženských věcech; ve skutečnosti se však stala politickou základnou
          pro otevřenou válku proti králi.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Zelenohorsk%C3%A1_jednota"
          />
        </p>
        <h5>Exkomunikace a otevřená válka (1466–1467)</h5>
        <p>
          Pavel II. <b>23. prosince 1466</b> Jiřího sesadil z trůnu, zbavil
          poddané slibu věrnosti vůči němu a uvalil na něj klatbu. Hned poté se
          členové jednoty veřejně postavili proti králi a zahájili nepřátelské
          akce na jihu a západě Čech. Roku <b>1467</b> dobyl Jiří se synem
          Viktorínem klíčové opěrné body jednoty: pevnost <b>Konopiště</b>{' '}
          (sídlo Šternberků) se vzdala po několikatýdenním obléhání, padly i
          hrady Vlašim, Český Šternberk a Roudnice. Vojenská převaha krále byla
          v této fázi jednoznačná.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Zelenohorsk%C3%A1_jednota"
          />
        </p>
        <h5>Vstup Matyáše Korvína (1468)</h5>
        <p>
          Vojenská situace se zvrátila roku <b>1468</b>, kdy do války jako
          spojenec jednoty a kurie vstoupil uherský král Matyáš Korvín. Ten po
          prohlášení křížové výpravy proti českému králi vpadl na jaře{' '}
          <b>1468</b> na Moravu a obsadil Špilberk, Olomouc, Brno a další opěrné
          body. Boje na Moravě, na česko-rakouské hranici a na západě Čech se
          vlekly. Klíčovou situací byla bitva u <b>Vilémova</b> (Vilémovský
          úskok) <b>26. února 1469</b>, kde Jiří obklíčil Matyášovu armádu v
          terénu, ale propustil ji po dvorních jednáních — rozhodnutí, jež
          vyvolávalo dobové i pozdější kontroverze.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/%C4%8Cesko-uhersk%C3%A9_v%C3%A1lky"
          />
        </p>
        <p>
          Dne <b>3. května 1469</b> nechala Zelenohorská jednota a pánové z
          Korvínovy strany v Olomouci provolat Matyáše Korvína českým králem —
          šlo o tzv. <i>olomouckou volbu</i>. Jiří odpověděl symbolickým
          zvolením polského královiče Vladislava Jagellonského svým nástupcem (
          <b>1471</b>). Bojové operace na Moravě, ve Slezsku a v Lužici se táhly
          dál. Klíčovým mezníkem byla v zimě 1469–1470 obrana Uherského Hradiště
          a defenzivní úspěchy královských sil na Moravě, kde se osvědčili
          velitelé Václav Vlček z Čenova, Jan Zajímač z Kunštátu a Viktorín z
          Poděbrad.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/%C4%8Cesko-uhersk%C3%A9_v%C3%A1lky"
          />
        </p>
        <h5>Smrt Jiřího a první fáze konfliktu (1471)</h5>
        <p>
          Jiří z Poděbrad zemřel <b>22. března 1471</b>. Tím první fáze
          česko-uherských válek ztratila hlavního protagonistu na české straně.
          Český sněm <b>27. května 1471</b> v Kutné Hoře zvolil novým králem{' '}
          <b>Vladislava II. Jagellonského</b>, který přijal korunu{' '}
          <b>22. srpna 1471</b>. Boje s Matyášem Korvínem však pokračovaly v
          dalších letech a uzavřeny byly až <b>olomouckými smlouvami</b> roku{' '}
          <b>1479</b>; podle nich si oba králové ponechali titul, Vladislav
          spravoval Čechy, Matyáš Moravu, Slezsko a Lužici.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/%C4%8Cesko-uhersk%C3%A9_v%C3%A1lky"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Zelenohorská jednota svého politického cíle — sesazení Jiřího —
          fakticky dosáhla jen prostřednictvím Matyáše Korvína a za cenu
          dvacetiletého rozdělení korunních zemí. Jednota se rozpadla v 70.
          letech, část jejích členů (Šternberkové) zůstala loajální Korvínovi,
          jiní se postupně smiřovali s Vladislavem. Konflikt vyčerpal českou
          společnost, ekonomicky postihl řadu regionů (zejména Moravu) a přispěl
          k oslabení královské moci ve prospěch stavů.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Zelenohorsk%C3%A1_jednota"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Vratislavský kancléř <b>Peter Eschenloer</b> ve své{' '}
          <i>Geschichte der Stadt Breslau</i> (kniha XII–XIII, ad annum
          1465–1471) zachycuje konflikt z perspektivy slezského města věrného
          kurii a Korvínovi: podrobně líčí jednání papežského legáta Rudolfa z
          Rüdesheimu, vyhlášení křížové výpravy proti Jiřímu i sám Matyášův vpád
          na Moravu na jaře 1468.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://archive.org/details/diestadtnrnberg00schugoog"
          />
        </p>
        <p>
          Českou perspektivu zachycují <b>Staří letopisové čeští</b> v záznamech
          k letům 1465–1471, kteří otevřeně straní Jiřímu z Poděbrad a líčí
          Zelenohorskou jednotu jako „zradu&ldquo; pánů. Pro vilémovský úskok
          27. února 1469 podávají dramatickou scénu, již později rozšířil Václav
          Hájek z Libočan v <i>Kronice české</i> (1541).
          <Qt
            publication={PUBLICATIONS.STARI_LETOPISOVE}
            href="https://archive.org/details/scriptorumrerum02unkngoog"
          />
        </p>
        <p>
          Antonio <b>Bonfini</b> ve <i>Decades</i> IV (kniha 1–3) popisuje
          Korvínův vstup do války z budínského dvorského pohledu — ospravedlňuje
          křížovou výpravu, vyzdvihuje vilémovské obklíčení i Matyášovu osobní
          statečnost. Galeotto Marzio v{' '}
          <i>De egregie ... dictis ac factis regis Mathiae</i> přidává
          anekdotický materiál o Matyášově diplomatickém manévru s Jiřím.
          <Qt
            publication={PUBLICATIONS.BONFINI}
            href="https://mek.oszk.hu/04200/04231/"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Účast českých a moravských žoldnéřů byla rozsáhlá a mnohdy obousměrná
          — šlo o ryze domácí konflikt, v němž stáli Češi proti Čechům. Na
          straně krále Jiřího bojovali přední polní velitelé husitské tradice:{' '}
          <b>Václav Vlček z Čenova</b>, <b>Jan Zajímač z Kunštátu</b>, Beneš ze
          Strážnice, Hertvík z Rušinova a králův syn <b>Viktorín z Poděbrad</b>.
          Vojsko se opíralo o tradiční vozovou hradbu a ručnice; klíčovou roli
          sehrály oddíly z hornické a východočeské oblasti. Na straně
          Zelenohorské jednoty a Matyáše Korvína působili katoličtí čeští páni s
          vlastními družinami — Šternberkové, páni z Hradce a další; navíc zde
          sloužili i čeští žoldnéři, kteří přešli do služeb Korvína po smlouvě z
          Vacova (1462), např. František z Háje. Konflikt byl tak laboratoří, v
          níž se broušily polní techniky pozdější Černé armády.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Zelenohorsk%C3%A1_jednota"
          />
        </p>
      </Col>
    </Row>
  </>
)
