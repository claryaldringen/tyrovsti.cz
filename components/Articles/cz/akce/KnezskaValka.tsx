import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const KnezskaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="knezska-valka" />
        <h4>
          Kněžská válka (Pfaffenkrieg) o varmijské biskupství (1467–1479)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Kněžská válka (pol. <i>wojna księża</i>, něm. <i>Pfaffenkrieg</i>,
          lat. <i>bellum sacerdotale</i>) byla ozbrojeným sporem let{' '}
          <b>1467–1479</b> o obsazení biskupského stolce ve <b>Varmii</b> (něm.{' '}
          <i>Ermland</i>, pol. <i>Warmia</i>). Konflikt rozpoutala otázka, kdo
          má právo volit a potvrzovat biskupa po připojení Varmie k polské
          Koruně na základě <b>druhého toruňského míru</b> (1466), jenž ukončil
          třináctiletou válku Polska s Řádem německých rytířů. V boji se střetli
          polský král <b>Kazimír IV. Jagellonský</b>, kapitula varmijské diecéze
          a Řád německých rytířů; spor prodloužil postoj papežů Pavla II. a
          Sixta IV. i císaře Fridricha III.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_ksi%C4%99%C5%BCa"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Druhý toruňský mír z <b>19. října 1466</b> rozdělil pruské území Řádu
          na <i>královské Prusy</i> (Polské Prusy), které přešly pod přímou
          polskou svrchovanost, a <i>řádové Prusy</i> s centrem v Královci, jež
          zůstaly v rukou Řádu jako polské léno. Varmijské biskupství si
          vyjednalo zvláštní postavení — uznávalo polskou svrchovanost, ale
          uchovalo si autonomii v duchovních věcech, včetně práva kapituly volit
          biskupa. Kazimír IV. usiloval o uplatnění královského patronátu při
          potvrzování volby; varmijská kapitula naopak hájila svou nezávislost.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_ksi%C4%99%C5%BCa"
          />
        </p>
        <p>
          Spor propukl po smrti biskupa <b>Pavla Legendorfa</b>{' '}
          <b>23. července 1467</b>. Kapitula bez konzultace s králem zvolila{' '}
          <b>Mikuláše Tüngena</b>, exponovaného přívržence Řádu úzce spjatého s
          velmistrovým dvorem. Kazimír volbu odmítl uznat a na biskupský stolec
          doporučil svého kandidáta — kaplana a sekretáře{' '}
          <b>Vincence Kełbasu</b>; papež Pavel II. však potvrdil Tüngena.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Preu%C3%9Fischer_Pfaffenkrieg"
          />
        </p>
        <h5>Průběh sporu</h5>
        <p>
          V letech <b>1467–1472</b> probíhal spor převážně diplomaticky. Kazimír
          blokoval Tüngenovo dosazení na biskupství, kapitula odmítala přijmout
          královského kandidáta. Polská strana obsadila část biskupských statků,
          což vyvolávalo drobné šarvátky. Velmistr Heinrich Reuß von Plauen se
          otevřeně k Tüngenovi nepřihlásil, ale jeho neutralita byla pro polskou
          stranu dostatečně podezřelá.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_ksi%C4%99%C5%BCa"
          />
        </p>
        <p>
          Otevřená vojenská fáze započala kolem let <b>1472–1473</b>. Tüngen po
          opakovaném odmítnutí ze strany Kazimíra opustil Varmii, uchýlil se do
          Říše a začal kolem sebe shromažďovat ozbrojené síly. Roku <b>1476</b>{' '}
          se vrátil do Varmie se žoldnéřskými oddíly, mimo jiné s podporou{' '}
          <b>Matyáše Korvína</b> a uherských zájmů, jež směřovaly k oslabení
          Jagellonců. Korvín, který vedl vlastní spor s Vladislavem o české
          země, viděl ve varmijském konfliktu příležitost angažovat se proti
          Polsku v severním předpolí. Boj se vedl v podobě plenivých nájezdů,
          dobývání jednotlivých biskupských hradů (Lidzbark Warmiński, Reszel,
          Orneta) a dílčích polních střetnutí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Preu%C3%9Fischer_Pfaffenkrieg"
          />
        </p>
        <h5>Smlouva v Piotrkowě (1479)</h5>
        <p>
          Konflikt skončil kompromisní dohodou v <b>Piotrkowě</b> dne{' '}
          <b>15. července 1479</b> (tzv. <i>piotrkowské vyrovnání</i>, něm.{' '}
          <i>Petrikauer Vertrag</i>). Mikuláš Tüngen byl uznán biskupem
          varmijským, avšak za podmínky, že napříště bude každá volba biskupa
          probíhat se souhlasem polského krále — kapitula musela napříště
          předkládat kandidáty schválené králem. Tüngen složil polskému králi
          přísahu věrnosti. Tímto kompromisem byl položen základ pozdějšího
          systému, podle něhož byl varmijský biskup volen z předem schválených
          kandidátů — tzv. <i>indygenat</i>.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_ksi%C4%99%C5%BCa"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Polská Koruna získala faktickou kontrolu nad obsazováním varmijského
          stolce a posílila tak svou pozici v Polských Prusech. Varmijská
          kapitula si zachovala formální právo volby, jež se však odehrávala v
          rámci stanoveném králem. Řád německých rytířů utrpěl další oslabení
          své politické pozice v severním Pobaltí. Konflikt představoval jeden z
          důležitých prvků jagellonské konsolidace severních zemí Koruny a
          předznamenal pozdější diplomatické zápasy o biskupské stolce v 16.
          století.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Preu%C3%9Fischer_Pfaffenkrieg"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Polskou stranu sporu vylíčil <b>Jan Długosz</b> v dvanácté a třinácté
          knize <i>Annales seu Cronicae incliti Regni Poloniae</i> (sepsáno
          1455–1480), kde podává podrobný komentář k volbě Tüngena, k Tüngenově
          uherské opoře i k jednáním vedoucím k piotrkowské dohodě 1479.
          <Qt
            publication={PUBLICATIONS.DLUGOSZ}
            href="https://www.dbc.wroc.pl/dlibra/publication/3520"
          />
        </p>
        <p>
          Vedle Długosze tvoří jádro pramenné základny{' '}
          <i>Akta Stanów Prus Królewskich</i> (něm.{' '}
          <i>Akten der Ständetage Preußens</i>, edice K. Górski a M. Biskup,
          Toruň 1955–1965) a varmijské diplomatické listiny v{' '}
          <i>Codex diplomaticus Warmiensis</i>, sv. III–IV (Mainz 1874–1935).
          Doplňující kronikářský pohled poskytují řádové letopisy{' '}
          <i>Annales Toruniensis</i> a kronika kapitulního děkana Brunsberga.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://archive.org/search?query=codex+diplomaticus+silesiae"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Přímá účast českých a moravských žoldnéřů ve varmijské válce není
          pramenně doložena a vzhledem ke geografii i charakteru konfliktu byla
          pravděpodobně minimální. Hlavní bojovou silou na obou stranách byly
          polské, pruské a německé oddíly, doplňované Sasy a lehkou jízdou z
          Mazovska. Nepřímou stopu by mohly představovat Korvínovy subvence
          Tüngenovi, jež plynuly z prostředků Černé armády (v níž čeští žoldnéři
          tvořili silný kontingent), avšak vlastní česká přítomnost ve Varmii
          prokázána nebyla. Ve světle Korvínova zájmu oslabit Polsko lze hovořit
          spíše o <i>finančním</i> a politickém, nikoli žoldnéřském angažmá
          českého rezervoáru.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_ksi%C4%99%C5%BCa"
          />
        </p>
      </Col>
    </Row>
  </>
)
