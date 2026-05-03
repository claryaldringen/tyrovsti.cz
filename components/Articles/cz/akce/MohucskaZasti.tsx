import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const MohucskaZasti = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="mohucska-zasti" />
        <h4>Mohučská kolegiátní záští (1461–1463){draft && <DraftBadge />}</h4>
        <p>
          Mohučská kolegiátní záští (něm. <i>Mainzer Stiftsfehde</i>) byl
          ozbrojený spor o obsazení mohučského arcibiskupského stolce mezi
          Dietherem z Isenburgu a Adolfem II. z Nassavy v letech 1461–1463.
          Konflikt byl úzce spjat s bádensko-falckou válkou a s bavorskou válkou
          markraběte Albrechta III. Achilla a vévody Ludvíka IX.
          Bavorsko-landshutského a stal se jednou z klíčových říšských krizí
          poloviny 15. století. Tradičně bývá zmiňován i jako první konflikt, v
          němž obě strany systematicky využily knihtisku k propagandě — tiskaři
          Johannes Fust a Peter Schöffer v Mohuči vydávali plakáty a letáky pro
          stranu Adolfa z Nassavy.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Mainzer_Stiftsfehde"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Dne <b>18. června 1459</b> byl těsnou většinou hlasů zvolen mohučským
          arcibiskupem Diether z Isenburgu, správce katedrály, proti svému
          protikandidátovi Adolfovi z Nassavy. Cenou za zvolení bylo Dietherovo
          přistoupení k protifalcké alianci, kvůli čemuž byl nucen vytáhnout
          proti falckraběti Fridrichovi I. Vítěznému, ale{' '}
          <b>4. července 1460</b> prohrál rozhodující bitvu u Pfeddersheimu. Po
          porážce uzavřel s falckrabětem <b>4. srpna 1460</b> Hemsbašskou
          smlouvu (něm. <i>Hemsbacher Vertrag</i>), kterou se z někdejšího
          nepřítele stal spojenec. V roce 1461 svolal Diether v Norimberku
          knížecí sněm, kde požadoval císařské a církevní reformy a zrušení
          papežského annátu prostřednictvím všeobecného koncilu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Diether_von_Isenburg"
          />
        </p>
        <p>
          Tento postoj vůči papeži Piovi II. a císaři Fridrichovi III. vedl k
          tomu, že byl Diether <b>21. srpna 1461</b> papežem sesazen a
          exkomunikován. Papež pak <b>1. října 1461</b> dosadil na arcibiskupský
          stolec v Mohuči Adolfa z Nassavy. Diether se však úřadu odmítl vzdát a
          podporu mu poskytlo město Mohuč, jeho bratr Ludvík z Isenburgu a nově
          také jeho bývalý nepřítel Fridrich I. Falcký, který za pomoc obdržel
          městečka Lorsch, Heppenheim a Bensheim. K Dietherovým spojencům patřil
          i hrabě Filip z Katzenelnbogenu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Mainzer_Stiftsfehde"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Adolf z Nassavy se spojil s trevírským arcibiskupem Janem II.
          Bádenským, biskupem Jiřím z Met (Adolfovým a Karlovým bratrem),
          biskupem Janem II. z Hohenecku ze Špýru, lankrabětem Ludvíkem II.
          Dolnohesenským a hrabětem Oldřichem V. Württemberským. Markrabě Karel
          I. Bádenský se zpočátku pokusil zprostředkovávat, ale poté se postavil
          po bok svého bratra biskupa Jiřího z Met na Adolfovu stranu. Tím se
          mohučský spor přelil do souvisejícího ozbrojeného konfliktu —
          bádensko-falcké války.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Mainzer_Stiftsfehde"
          />
        </p>
        <p>
          Klíčovou bitvou byla porážka spojenců Adolfa z Nassavy falckrabětem
          Fridrichem I. v bitvě u Seckenheimu <b>30. června 1462</b>, kde padli
          do falckého zajetí markrabě Karel Bádenský, hrabě Oldřich
          Württemberský i biskup Jiří z Met. Vykoupení zajatců trvalo přes rok a
          stálo astronomické částky — biskup Jiří z Met zaplatil 45 000 zlatých,
          markrabě Karel I. Bádenský 25 000 zlatých (podle dalších pramenů až 80
          000) a hrabě Oldřich Württemberský 40 000 zlatých ve čtyřech
          splátkách. Boje však pokračovaly. V noci na <b>28. října 1462</b> se
          Adolfovi podařilo zradou několika měšťanů proniknout do města Mohuče s
          pěti sty muži přes Gautor a po dvanácti hodinách pouličních bojů město
          dobýt. Asi 400 lidí přišlo o život, město bylo vypleněno a hned{' '}
          <b>30. října 1462</b> mu byly zrušeny městské svobody — z někdejšího
          svobodného říšského města se Mohuč stala součástí přímé arcibiskupské
          správy. Asi 800 měšťanů bylo vypovězeno, z nichž se později vrátila
          pouze polovina.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Mainzer_Stiftsfehde"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Diether z Isenburgu se nakonec <b>5. října 1463</b> Zeilsheimskou
          smlouvou (něm. <i>Zeilsheimer Vertrag</i>) vzdal nároku výměnou za
          přiznání světského panství v Höchstu, Steinheimu a Dieburgu a peněžní
          odškodnění; Adolf z Nassavy zůstal arcibiskupem až do své smrti roku
          1475. Mohuč ztratila status svobodného říšského města a dostala se pod
          přímou správu arcibiskupského vicedoma — důsledek, který ekonomicky a
          politicky poznamenal město na následující staletí. Po Adolfově smrti
          se Diether vrátil na arcibiskupský stolec a držel ho až do roku 1482.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00163.html"
          />
        </p>
        <h5>Knihtisk a propaganda</h5>
        <p>
          Mohučská záští je první říšský konflikt, v němž obě strany
          systematicky využily nově vynalezeného knihtisku k politické
          propagandě. Mohučský patriciát a kruh kolem Adolfa z Nassavy si
          objednával polemické letáky a plakáty u tiskařů Johannese Fusta a
          Petera Schöffera, žáků Johannese Gutenberga. Rozsáhlá ztráta
          mohučských privilegií a vyhnání tiskařů po dobytí města paradoxně
          urychlilo rozšíření knihtisku po celé střední Evropě — z Mohuče
          uprchlí tovaryši zakládali nové dílny v Bambergu, Štrasburku,
          Bazileji, Norimberku a později i v Itálii.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Mainzer_Stiftsfehde"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Čeští žoldnéři se konfliktu účastnili nepřímo prostřednictvím
          wittelsbašského spojeneckého systému. Falckrabě Fridrich I. Vítězný,
          hlavní mocenský patron Diethera z Isenburgu, byl klíčovým spojencem
          vévody Ludvíka IX. Bavorsko-landshutského a profitoval ze stejných
          žoldnéřských zdrojů. Nepřímo tak proti Adolfovi z Nassavy a říšské
          straně bojovali kondotiéři jako Dobrohost z Ronšperka, Racek z Janovic
          a Mikuláš Kaplíř ze Sulevic, jejichž oddíly figurovaly v jihoněmeckém
          prostoru a vázaly část říšských sil. Tresp dokládá, že právě v tomto
          období dosáhly české kontingenty u Ludvíka IX. svého početního maxima
          — odhadem 5 000–7 000 mužů ve všech wittelsbašských službách
          dohromady.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
      </Col>
    </Row>
  </>
)
