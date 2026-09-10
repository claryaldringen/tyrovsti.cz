import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BadenskoFalckaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="badensko-falcka-valka" />
        <h4>Bádensko-falcká válka (1461–1462){draft && <DraftBadge />}</h4>
        <p>
          Bádensko-falcká válka byla ozbrojený konflikt mezi rýnským
          falckrabětem a kurfiřtem Fridrichem I. Vítězným a koalicí markraběte
          Karla I. Bádenského, hraběte Oldřicha V. Württemberského a metského
          biskupa Jiřího Bádenského. Konflikt vyvrcholil rozhodující bitvou u
          Seckenheimu <b> 30. června 1462</b>, kde Fridrich I. Falcký dosáhl
          drtivého vítězství a všechny tři protivníky zajal. Bitva je považována
          za jeden z prvních významných úspěchů pěchoty užívající v jádru
          švýcarskou taktiku proti těžké obrněné jízdě v jihoněmeckém prostoru.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Badisch-Pf%C3%A4lzischer_Krieg"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Válka přímo navazovala na mohučskou kolegiátní záští. Po sesazení
          Diethera z Isenburgu papežem v srpnu 1461 a po dosazení Adolfa z
          Nassavy podpořil falckrabě Fridrich I. Vítězný Diethera vojensky
          výměnou za zisk měst Lorsch, Heppenheim a Bensheim. Markrabě Karel I.
          Bádenský se po neúspěšných pokusech o zprostředkování postavil na
          stranu svého bratra, metského biskupa Jiřího, a Adolfa z Nassavy. Tato
          koalice byla zároveň součástí širšího protifalckého systému, který
          podporoval císař Fridrich III. a markrabě Albrecht III. Achilles v
          rámci souběžné bavorské války.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Mainzer_Stiftsfehde"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Odpůrci Fridricha I. plánovali vpadnout do Falce z jihu, neboť se
          domnívali, že kurfiřt je se svými vojsky v Bavorsku, kde pomáhá
          vévodovi Ludvíkovi IX. proti Albrechtu III. Achillovi. Poblíž
          Pforzheimu shromáždili armádu o síle asi 10 000 mužů a mezi Rothem a
          St. Leonem zřídili tábor; jejich jízda pálila pole a vesnice v okolí.
          Fridrich I. však nařídil svým vazalům potají dorazit do Leimenu a sám
          tam přijel <b>29. června 1462</b>.
          <Qt
            publication={PUBLICATIONS.SECKENHEIM}
            href="https://www.historisches-seckenheim.de/index.php/ortsgeschichte/123-schlacht-bei-seckenheim"
          />
        </p>
        <p>
          V noci na 30. června Fridrich I. pochodoval s asi 300 jezdci a 2 000
          pěšáky přes Schwetzingenský les k Frohnholzu (dnešní Dossenwald) jižně
          od Seckenheimu. Cestou se k němu připojily další posily — asi 300
          jezdců z kontingentů mohučského arcibiskupa Diethera z Isenburgu a
          hraběte Filipa z Katzenelnbogenu. Aby v ranní mlze rozeznali spojence
          od nepřítele, falčtí měli na oděvu připnuty ořechové listy, bádenští
          naopak trsy ovsa — současné prameny zaznamenaly Seckenheim jako první
          bitvu, kde se obě strany takto vizuálně rozlišily.
          <Qt
            publication={PUBLICATIONS.SECKENHEIM}
            href="https://www.historisches-seckenheim.de/index.php/ortsgeschichte/123-schlacht-bei-seckenheim"
          />
        </p>
        <p>
          Když císařští útočníci ráno 30. června vyrazili ze svého tábora se 700
          až 800 jezdci k Seckenheimu, aby jej vypálili, nečekaně je zezadu
          napadlo 600 jezdců falcké strany. Fridrich I. držel pěchotu o síle
          přibližně 2 000 mužů ukrytou v nedalekém Schwetzingenském lese. Po
          krátké přestřelce a srážce těžké jízdy se z lesa vynořila falcká
          pěchota a obklíčila spojence. Padlo 45 spojeneckých rytířů, do zajetí
          padli markrabě Karel I. Bádenský se 40 šlechtici a 79 muži, hrabě
          Oldřich z Württembergu se 45 šlechtici a 71 muži a biskup Jiří z Met
          se 39 šlechtici a 53 muži. Falcké ztráty činily 12 mrtvých rytířů.
          Nejintenzivnější boje skončily kolem 16. hodiny.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Seckenheim"
          />
        </p>
        <h5>Souboj Hanse z Gemmingenu s hrabětem Württemberským</h5>
        <p>
          Symbolickým momentem bitvy se stal souboj jednatřicetiletého rytíře
          Hanse („Keckhanse&ldquo;) z Gemmingenu s zarputile se bránícím
          hrabětem Oldřichem V. Württemberským (49 let). Když Oldřich odmítal
          padnout do zajetí, vyzval ho Gemmingen slovy{' '}
          <i>„So will ich mein Heil an euer Gnaden versuchen!&ldquo;</i> a
          zápasem ho srazil z koně. Tato epizoda byla popularizovaná pozdějšími
          bádensko-falckými kronikami jako vzor správného rytířského chování v
          okamžiku, kdy už taktická situace zdánlivě vyžadovala bezpodmínečnou
          kapitulaci.
          <Qt
            publication={PUBLICATIONS.SECKENHEIM}
            href="https://www.historisches-seckenheim.de/index.php/ortsgeschichte/123-schlacht-bei-seckenheim"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Vítězství u Seckenheimu rozhodlo bádensko-falckou válku ve prospěch
          Fridricha I. Vítězného. Zajatá knížata byla v průběhu následujícího
          roku vykupována za vysoké částky a územní ústupky — biskup Jiří z Met
          za 45 000 zlatých, markrabě Karel I. Bádenský za 25 000 zlatých (s
          dalšími požadavky souhrnně až 80 000) a hrabě Oldřich Württemberský za
          40 000 zlatých ve čtyřech splátkách. Spolu s vítězstvím vévody Ludvíka
          IX. Bavorsko-landshutského u Giengenu z 19. července 1462 znamenala
          bitva celkový úspěch wittelsbašské strany. Definitivní urovnání všech
          sporů přinesl až tzv. Pražský mír z 22. a 23. srpna 1463
          zprostředkovaný českým králem Jiřím z Poděbrad.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Prager_Frieden_(1463)"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Falcké vojsko Fridricha I. Vítězného mělo dlouhodobé spojení s českou
          žoldnéřskou kondottou prostřednictvím wittelsbašského spolkového
          systému s vévodou Ludvíkem IX. Bavorsko-landshutským. Falcká pěchota,
          která rozhodla bitvu u Seckenheimu obklíčením císařské jízdy, byla z
          části tvořena profesionálními žoldnéři, mezi nimiž působili i
          vysloužilí čeští bojovníci a velitelé navázaní na vévodovu armádu.
          Taktika boje pěchoty proti těžké jízdě navazovala na způsob, jaký se v
          jihoněmeckém prostoru rozšířil mimo jiné prostřednictvím husitských
          veteránů a jejich pokračovatelů ve službách Wittelsbachů.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
        <p>
          Kondotiéři jako Dobrohost z Ronšperka, Racek z Janovic a Mikuláš
          Kaplíř ze Sulevic v téže době sloužili u vévody Ludvíka IX. a vázali
          síly markraběte Albrechta III. Achilla, takže spojenecké vojsko Karla
          I. Bádenského a Oldřicha Württemberského muselo proti falckraběti
          vystoupit bez plné očekávané říšské podpory. Kaplíř velel u Ludvíka
          IX. samostatnému kontingentu okolo 900 mužů — srovnatelnému s celým
          Fridrichovým jezdeckým jádrem u Seckenheimu. Nepřímý vliv české
          žoldnéřské síly na výsledek bitvy u Seckenheimu byl tak značný.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00164.html"
          />
        </p>
      </Col>
    </Row>
  </>
)
