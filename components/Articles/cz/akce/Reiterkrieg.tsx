import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const Reiterkrieg = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="reiterkrieg" />
        <h4>
          Poslední polsko-řádová válka / Reiterkrieg (1519–1521)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Poslední polsko-řádová válka (pol. <i>Wojna pruska 1519–1521</i>, něm.{' '}
          <i>Reiterkrieg</i>) byl poslední ozbrojený konflikt mezi královstvím
          Polským a Řádem německých rytířů. Začal v prosinci 1519 a skončil v
          dubnu 1521 toruňským příměřím. Válka přivedla Řád na pokraj zhroucení
          a otevřela cestu ke krakovskému aktu z roku 1525, kterým byl řádový
          stát sekularizován a přeměněn na světské Pruské vévodství v polském
          lénu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_pruska_(1519%E2%80%931521)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Mírem v Toruni z roku 1466 byl řádový stát zlomen — západní část
          Pruska připadla Polsku jako královské Prusko, zbylé východní území
          drželi rytíři jako polské léno. Velmistři však opakovaně odmítali
          skládat lenní hold polskému králi. Albrecht Hohenzollern, braniborský
          princ a od roku 1511 velmistr Řádu, vsadil na otevřené spojenectví s
          císařem Maxmiliánem I. a s Moskevským velkoknížetstvím Vasilije III.
          proti Zikmundu I. Polskému. Když Albrecht nadále odmítal hold,
          vyhlásil polský sněm v Toruni v prosinci 1519 válku.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Reiterkrieg"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Polská ofenziva vedená velkým hetmanem korunním Mikołajem Firlejem se
          rozjela koncem roku 1519. Polsko-litevská vojska obsadila Marienwerder
          (Kwidzyn), Holland (Pasłęk) a další pevnosti na západě řádového území;{' '}
          <b>v lednu 1520</b> byl obklíčen samotný Královec (Königsberg).
          Albrecht se opíral o žoldnéřské oddíly najímané v Říši a o spojenectví
          s Dánskem. V průběhu roku 1520 však finanční krize Řádu sílila —
          Albrecht nedokázal pravidelně vyplácet žold a velká část jeho cizích
          jednotek se obrátila proti zaměstnavateli; odtud dobový název
          „Reiterkrieg&ldquo; (válka jezdců, žoldnéřská válka).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Polish%E2%80%93Teutonic_War_(1519%E2%80%931521)"
          />
        </p>
        <p>
          Na jaře 1520 se Albrechtovi přesto podařilo získat výrazné posily ze
          severního Německa pod velením braniborského kondotiéra Wolfa von
          Schönberga; tato žoldnéřská armáda obsadila Braunsberg a vpadla na
          východní Pomořansko. Polské oddíly pod Janem Świerczowským přepadovou
          ofenzivou pronikly hluboko do řádového jádra a v září 1520 oblehly
          Königsberg, jeho dobytí se však nezdařilo. Boje se vyčerpávaly a obě
          strany se přiblížily bankrotu. Zprostředkováním císaře Karla V. a
          uherského krále Ludvíka II. bylo <b>5. dubna 1521</b> v Toruni
          uzavřeno čtyřleté příměří.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_pruska_(1519%E2%80%931521)"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Toruňské příměří zachovávalo dosavadní stav — žádná ze stran neuspěla
          v rozhodujícím vojenském úkolu. Albrecht však vyšel z války finančně i
          morálně vyčerpán; Řád nedokázal nadále vyplácet mzdy ani udržet lenní
          povinnosti. Velmistr během následujících čtyř let hledal politické
          východisko a roku 1525 přijal radu Martina Luthera — sekularizoval
          řádový stát, přijal lenní pruský titul a krakovskou smlouvou se stal
          světským vévodou v polském lénu. Reiterkrieg tak byl poslední fází
          existence řádového Pruska.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Reiterkrieg"
          />
        </p>
        <h5>Primární prameny / Pohled starších kronik</h5>
        <p>
          Polský pohled na válku zachytil ve své <i>Kronice polské</i> (Kraków
          1551, kn. V) Marcin Bielski, jenž podrobně popisuje obležení
          Marienwerderu, blokádu Königsbergu i finanční krizi Řádu, která dala
          konfliktu jeho dobové německé jméno <i>Reiterkrieg</i>. Marcin Kromer
          v <i>De origine et rebus gestis Polonorum libri XXX</i> (lib. XXX)
          líčí válku s důrazem na diplomatické zprostředkování císaře Karla V. a
          uherského krále Ludvíka II., které vedlo k toruňskému příměří{' '}
          <b>5. dubna 1521</b>.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://polona.pl/item/kronika-marcina-bielskiego,NzM5MzcwMzc/"
          />
          <Qt
            publication={PUBLICATIONS.KROMER}
            href="https://www.bsb-muenchen-digital.de/~web/web1008/bsb10080831/images/index.html"
          />
        </p>
        <p>
          Řádovou perspektivu uchovala dobová oficiálnost — listy velmistra
          Albrechta Hohenzollerna a vojenské dispoziční instrukce dochované v
          královeckém archivu, na nichž stojí monumentální{' '}
          <i>
            Geschichte Preussens von den ältesten Zeiten bis zum Untergange der
            Herrschaft des Deutschen Ordens
          </i>{' '}
          Johanna Voigta (Königsberg 1827–1839, sv. IX) — moderní kritická edice
          s rozsáhlými citacemi řádových listin. Mustrolly žoldnéřských kompanií
          Wolfa von Schönberga a polských výplatních rolí (s rotami označenými{' '}
          <i>Czesi</i> a <i>Bohemi</i>) jsou doloženy v Tajném státním archivu
          Pruského kulturního dědictví v Berlíně.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://archive.org/details/geschichtepreuss09voig"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Žoldnéřský charakter konfliktu otevíral pro české kondotiéry a jejich
          oddíly vícenásobné možnosti. Albrecht Hohenzollern najímal jezdectvo i
          pěchotu v Říši, na hranici saské a slezské, a část dochovaných muster
          naznačuje účast slezských a moravských rejtarů ve schönbergovských
          kompaniích. Polský král Zikmund I. naopak najímal cizí pěchotu pro
          obléhací operace; v polských platebních rolích z let 1520–1521 jsou
          doloženy tzv. <i>Czesi</i> a <i>Bohemi</i> — české a moravské
          žoldnéřské roty pod vlastními hejtmany. České kontingenty se tedy ve
          sporu objevily na obou stranách současně, což byl pro pozdně
          středověké žoldnéřské války charakteristický jev. Žádný z těchto
          oddílů však nedosahoval velikosti, kterou české jednotky představovaly
          například v jagellonských uherských válkách.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_pruska_(1519%E2%80%931521)"
          />
        </p>
      </Col>
    </Row>
  </>
)
