import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const GlatzskaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="glatzska-valka" />
        <h4>
          Kladská válka — spor o Kladsko (1501–1503){draft && <DraftBadge />}
        </h4>
        <p>
          Kladská válka (něm. <i>Glatzer Krieg</i>) byla ozbrojeným sporem mezi
          českým a uherským králem Vladislavem II. Jagellonským a rodem
          münsterberských knížat z české větve Poděbradů o držbu kladského
          hrabství. Konflikt vyplynul ze složité majetkové situace, kterou v
          Kladsku zanechal Jiří z Poděbrad: hrabství bylo rozděleno mezi několik
          dědiců a královskou komoru, přičemž synové Jindřicha staršího z
          Münsterberka — Albrecht, Jiří a Karel — usilovali o jeho ucelené
          držení.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Kladsko"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Po smrti Jiřího z Poděbrad roku 1471 zůstalo Kladsko v rukou jeho
          synů, kteří je drželi jako říšské hrabství. Část území však byla
          zastavena nebo prodána a v posledních letech 15. století o jednotlivé
          části usiloval i král Vladislav II. Jagellonský prostřednictvím své
          komory. Spor vyhrotily neuspořádané majetkoprávní poměry a osobní
          ambice mladších münsterberských knížat, zejména Karla I. z
          Münsterberka, který prosazoval ucelené dědictví bez královských
          zásahů.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Grafschaft_Glatz"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Od roku <b>1501</b> přerostly spory v otevřené ozbrojené střety.
          Münsterberkové si na obranu svých nároků najali polní oddíly z řad
          slezské a české drobné šlechty, část posádek tvořili veteráni
          předchozích bavorských a švábských válek. Královská strana proti nim
          stavěla zemskou hotovost a žoldnéřské oddíly placené z české komory.
          Boje měly převážně podobu obléhání kladských hradů a tvrzí (Kladsko,
          Homole, Frankenstein) a drobných polních šarvátek; k rozsáhlé polní
          bitvě v této válce nedošlo.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Grafschaft_Glatz"
          />
        </p>
        <p>
          V průběhu let <b>1501–1502</b> probíhalo paralelně intenzivní
          vyjednávání. Vladislav II. nemohl ohrozit pozici münsterberského rodu
          přímou konfiskací — Karel I. byl jeho stoupencem a příbuzným královy
          tchyně Kunhuty z Šternberka — a tak postupoval cestou kompromisu.
          Zprostředkování se ujali zemští úředníci a páni českého království,
          mezi nimi i Vilém z Pernštejna a Zdeněk Lev z Rožmitálu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Karel_I._Minsterbersk%C3%BD"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Konflikt byl ukončen v roce <b>1503</b> dohodou, podle níž Karel I. z
          Münsterberka odkoupil hrabství Kladsko od Vladislava II. za 70 000
          uherských zlatých a sjednotil je s knížectvím münsterberským. Tímto
          aktem skončila třicet let trvající nejistota o osudu Kladska: hrabství
          zůstalo v rukou českých Poděbradů jako autonomní říšské panství až do
          počátku 17. století. Pro krále znamenala dohoda ekonomicky výhodné
          řešení, které mu umožnilo splatit část jagellonských dluhů, aniž by
          musel pokračovat v nákladné drobné válce.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Grafschaft_Glatz"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Kladská válka byla výhradně vnitročeskou záležitostí — boje probíhaly
          na území Koruny české a obě strany sporu se opíraly o domácí branné
          zdroje. Münsterberkové verbovali oddíly ze Slezska a východních Čech,
          královská strana využívala zemskou hotovost a komorní žoldnéře. V
          řadách obou táborů sloužila řada profesionálních hejtmanů, kteří
          prošli landshutskou a švábskou válkou a kteří se po roce 1503 vraceli
          do říšských služeb. Konflikt potvrdil, že čeští velitelé a posádky
          byli na přelomu 15. a 16. století stále schopni vést dlouhodobé
          obléhací operace — i když rozsah Kladské války zdaleka nedosahoval
          velkých říšských záští předchozí generace.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Karel_I._Minsterbersk%C3%BD"
          />
        </p>
      </Col>
    </Row>
  </>
)
