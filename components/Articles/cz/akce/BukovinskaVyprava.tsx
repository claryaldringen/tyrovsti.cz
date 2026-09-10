import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BukovinskaVyprava = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="bukovinska-vyprava" />
        <h4>
          Bukovinská výprava Jana Olbrachta (1497){draft && <DraftBadge />}
        </h4>
        <p>
          Bukovinská výprava polského krále Jana I. Olbrachta proti Moldavskému
          knížectví v roce 1497 patří k nejhůře skončeným polským vojenským
          podnikům pozdního středověku. Po neúspěšném obléhání Sučavy se polská
          armáda na ústupu dostala do léčky v bukovinských lesích, kde
          <b> 26. října 1497</b> v bitvě v lese Kozmin (rumunsky{' '}
          <i>Codrii Cosminului</i>) utrpěla těžké ztráty. Z této pohromy pochází
          polské rčení <i>„za króla Olbrachta wyginęła szlachta&ldquo;</i> (za
          krále Olbrachta vyhynula šlechta).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wyprawa_bukowi%C5%84ska"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Politické cíle výpravy zůstávají sporné. Oficiálně byla výprava
          ohlášena jako protiosmanské tažení, jehož cílem mělo být vytlačení
          Turků z Kilije a Bilhorodu (Akkerman) na pobřeží Černého moře, jež
          ovládli roku 1484. Ve skutečnosti měl král Jan Olbracht v úmyslu
          sesadit moldavského hospodara Štěpána Velikého a dosadit na moldavský
          stolec svého bratra, kardinála Fridricha Jagellonského. Tento záměr
          dráždil zájmy uherského krále Vladislava II. Jagellonského, který
          Štěpána Velikého považoval za uherského vazala.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Polish%E2%80%93Ottoman_War_(1485%E2%80%931503)"
          />
        </p>
        <p>
          Polská armáda shromážděná u Lvova čítala podle pramenů 40 000 mužů
          (kronikář Maciej z Miechova, autor díla <i>Chronica Polonorum</i> z
          roku 1519, uvádí až 80 000) s 200 děly, šlo o jednu z největších
          polských armád té doby. Pochodovala do Moldavska v srpnu 1497.{' '}
          <b>Bernard Wapowski</b> ve své kronice <i>Dzieje Korony Polskiej</i>{' '}
          dokumentuje, že armáda zahrnovala královskou korouhev, šlechtické
          pospolité hotovosti (<i>pospolite ruszenie</i>), žoldnéřské oddíly a
          značný vozový tábor. Tadeusz Grabarczyk ve studii{' '}
          <i>The Polish court banner in the Moldavian expedition in 1497</i>{' '}
          (2017) na základě výplatních listin rekonstruuje strukturu nejméně
          tisícihlavé dvorní gardy.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Maciej_Miechowita"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Průběh</h5>
        <p>
          Po vstupu do Moldavska Jan Olbracht opustil deklarovaný protiosmanský
          směr a obrátil se proti Sučavě, hlavnímu městu Štěpána Velikého.
          Obléhání zahájené <b>24. září 1497</b> trvalo tři týdny a skončilo
          neúspěšně — silná pevnost odolávala a polský tábor sužovaly nemoci a
          nedostatek zásob. Pod tlakem zprostředkování uherského krále
          Vladislava II., který v té době vyslal pod velením sedmihradského
          vojvody Bartoloměje Drágffyho dvanácti­tisícový pomocný sbor přímo k
          Sučavě, uzavřel Olbracht <b>19. října</b> příměří a začal ústup.
        </p>
        <p>
          Štěpán Veliký uzavřené dohody nedodržel. Posílen oddíly osmanských
          spojenců — sultán Bayezid II. mu poslal pět až šest set janičářů pod
          velením Bali Bega — sledoval ustupující polskou armádu a nechal ji
          vlákat do bukovinských lesů u Kozminu. <b>26. října 1497</b> tam
          moldavské vojsko zaútočilo na rozvinuté polské kolony. V hustém lese
          ztratila polská těžká jízda svou hlavní výhodu a stala se snadným
          cílem moldavských útoků z úkrytu. Ústřední taktickou novinkou bitvy
          bylo systematické předem připravené podťatí mohutných buků a smrků,
          které v okamžiku průchodu polských vozů a kolon padaly přímo na
          pochodující vojsko a rozdělily je na izolované skupiny.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_the_Cosmin_Forest"
          />
        </p>
        <p>
          Polské ztráty byly značné — moderní odhady (Marek Plewczyński, Si
          Sheppard) hovoří o pěti až deseti tisících padlých a obrovských
          materiálních ztrátách včetně dělostřelectva a vozové výzbroje. Padli
          mimo jiné podkomoří královský Mikolaj Chrząstowski a řada šlechticů z
          Malopolska. Král Jan Olbracht s troskami armády ustoupil zpět do
          Polska, kde se málem dostal do dalšího moldavského zajetí — na cestě
          přes Sniatyn jej krylo zadní vojsko, které utrpělo další citelné
          ztráty.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/John_I_Albert"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Výsledek</h5>
        <p>
          Bukovinská katastrofa otevřela polské jihovýchodní hranice osmanským a
          tatarským nájezdům, které následujících několik let plenily Halič a
          Podolí. Moldavský hospodar Štěpán Veliký provedl v zimě 1498 odvetné
          výpravy, při nichž jeho oddíly i osmanští spojenci vyplenili Lvov,
          Javorov a Přemyšl. Štěpán se definitivně přiklonil ke smluvním vztahům
          s Osmany, čímž oslabil polský vliv v Podunají. Mírová smlouva z{' '}
          <b>Hârlău (12. července 1499)</b> formálně ukončila konflikt — Jan
          Olbracht byl nucen uznat Štěpána za rovnocenného partnera, nikoli za
          vazala. Jagellonský plán dosadit Fridricha do Moldavska nebyl nikdy
          uskutečněn.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Polská armáda Jana Olbrachta zahrnovala vedle korunní jízdy a
          šlechtické obrany také žoldnéřské oddíly najímané v Polsku, ve Slezsku
          a v Čechách. Čeští a moravští pěšáci s dlouhými píkami a hákovnicemi
          tvořili část pěchoty, jejíž stopa je v pramenech doložena spíše jen
          souhrnně. Vladislav II. Jagellonský, bratr Jana Olbrachta a tehdy
          zároveň uherský i český král, oficiálně vystupoval jako prostředník,
          ale ve skutečnosti zájmům výpravy vyloženě bránil — což omezilo příliv
          dalších českých žoldnéřských kontingentů, které jinak hojně sloužily v
          jagellonských armádách té doby.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wyprawa_bukowi%C5%84ska"
          />
        </p>
        <p>
          Studie Tadeusze Grabarczyka rekonstruuje účast několika rot pěchoty
          najatých prostřednictvím slezských verbířů (zejména Vratislav,
          Olomouc), jejichž součástí byli rotmistři s českými jmény. Tyto oddíly
          tvořily ochranu vozového tábora a jejich osud při přepadu v lese
          Kozmin je v pramenech popsán jako obzvláště krvavý — vozová hradba se
          v hustém porostu nedala použít a pěchota byla bita po oddílech. Po
          katastrofě se přeživší žoldnéři přesouvali především do služeb
          uherského Vladislava II., kde tvořili součást jádra jižní obranné
          linie proti Osmanům.
        </p>
      </Col>
    </Row>
  </>
)
