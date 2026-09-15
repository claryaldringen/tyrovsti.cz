import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const UmluvaVGrotkove = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="umluva-v-grotkove" />
        <h4>
          Úmluva slezských knížat, manů a měst v Grotkově (1421, nebo 1427)
          {draft && <DraftBadge />}
        </h4>
        <p>Pracovní překlad, zatím bez odborné korektury.</p>
        <p>
          Úmluvu proti husitům uzavřela slezská knížata spolu s vratislavskou a
          svídnicko-javorskou zemí a jejich městy. Upravuje obsazení
          pohraničních hradů jízdou, společný postup při vpádu do Slezska,
          výbavu vozů a rozpis pušek a nakonec vyjmenovává, co se má vzít s
          sebou na vojenskou výpravu. Listina nemá rok, je datována jen{' '}
          <Cit>ve čtvrtek o suchých dnech před svatým Michalem</Cit>. Palacký ji
          podle Grünhagenovy edice otiskl k 18.&nbsp;září 1421.
          <Qt
            publication={PUBLICATIONS.PALACKY_UB1}
            href="https://archive.org/details/urkundlichebeitr01pala/page/149/mode/1up"
          />{' '}
          Grünhagen ji spojuje se sjezdem knížat v Grotkově téhož dne a
          zdůrazňuje její výrazně obranný ráz.
          <Qt
            publication={PUBLICATIONS.GRUNHAGEN1872}
            href="https://archive.org/details/bub_gb_s0kJAAAAQAAJ/page/n69/mode/1up"
          />{' '}
          Toman naproti tomu soudí, že listina patří až do pozdější doby, snad
          do roku 1427. Pokládá ji spíše za podrobnější provedení svazu týchž
          knížectví ze 14.&nbsp;února 1427 a tak velký počet pušek mu pro rok
          1421 připadá zcela nepravděpodobný.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:175a8bf2-68d6-4f59-b376-5f0d3fe627ee"
            note="Str. 185–186"
          />
        </p>
        <p>
          Poznámky k překladu: Nejasná slova vykládám podle Grünhagenova
          převyprávění listiny do moderní němčiny.
          <Qt
            publication={PUBLICATIONS.GRUNHAGEN1872}
            href="https://archive.org/details/bub_gb_s0kJAAAAQAAJ/page/n70/mode/1up"
          />{' '}
          Řetěz <Cit>landzocht</Cit> podle něj spojoval obě poloviny vozu,{' '}
          <Cit>czoë</Cit> jsou vidle a <Cit>pisschullen</Cit> ruční palné
          zbraně, tedy píšťaly. <Cit>Tarrasssteinbüchsen</Cit> jsou podle něj
          děla, která se při střelbě na něco pokládají, na rozdíl od ručních
          zbraní; překládám je jako tarasnice. Od Grünhagena přebírám i
          identifikaci knížat: vévoda Kaske je Kazimír Osvětimský, Bernard je
          Bernard Falkenberský a Přemek je Přemek Opavský.
          <Qt
            publication={PUBLICATIONS.GRUNHAGEN1872}
            href="https://archive.org/details/bub_gb_s0kJAAAAQAAJ/page/n69/mode/1up"
          />{' '}
          Slova <Cit>kriptücher</Cit>, <Cit>lythische schilde</Cit>,{' '}
          <Cit>poffeysen</Cit> a <Cit>fusseysen</Cit> nechávám nepřeložená.
          Grünhagen je jen přepisuje do moderní němčiny (
          <i>Halstragseln, lüttische Schilde (?), Puffeisen, Fußeisen</i>) a
          jejich význam je nejistý.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <p>Einigung mann vnd stete vnd der fürsten in der Slesia.</p>
        <p>
          Off den tag zue Grottkaw haben sich die fürsten und lande u. stete
          Breslaw Swednitz u. Jawer sich eyntrechtiglich geeynet u. beslossen
          wider die kätzer in Behem, also hienoch stehet geschreben:
        </p>
        <p>
          Zum irsten die festen an den grentzen vff eine landwer zu besetzen,
          also: Item hertzog Johannes von Monsterberg u. land u. stete Breslaw,
          Swidnitz und Jawer sullen 230 pferde legen uff das Smedewerg
          (Schmiedeberg), off den Schetzler (Schatzler), vf Swartzenwalde
          (Schwarzwaldau) u. vf Conradswalde (bei Grüssau). Item der bischof 70
          pferde. Hertz. Ruprecht von Löbin vnd Ludwig sein bruder 35 pferdt, h.
          Ludwig vom Brige 60 pferdt und h. Conrad Canthner 60 pferdt sullen sie
          kein Brawnaw legen. Item so sullen die von Ratibor Jegerdorff selbir
          mit 50 pferden besetzen. Item h. Bolcke von Teschen 30 pf. und der
          junge h. Bolco 25 pf. in die Ostra legen. H. Bernhard mit 30 pf., h.
          Kaske mit 20 pf., und der weisse h. Conrad mit 20 pf. sollen h.
          Przemken helfen, wo her der helfe am notlichsten dann wird bedürfen,
          uff 1/4 jar. Item zu welchen vnder den besatzten slossen die ketzer
          zuziehen würden, den sullen die andern von den besatzten slossen zur
          hulffe kommen. Item ap sie swach weren vnd den fürsten hinder sich
          schreiben wörden, so hat iglich furste vff sein mit gantzer macht, die
          her vor jugent vnd von alder vffbrengen mag, ein feld wieder die
          ketzer zu machen, dass sullen auch thun mann vnd stete. Item dozu sol
          iglich furste in das schicken, das is an im nicht dorffe gebrechen,
          nach des bundes lawt und auch land vnd stete.
        </p>
        <p>
          Item ap es sich geburte, welch furste odir land adir stad seine macht
          dem andern entzihn vnd den bund brechen welde, den wellen die andern
          vorclagen vor dem bobiste, vor dem cardinal vnd vor dem römischen
          konige, vnd werde zurathe, wie sie es an jm gehaben konnen, en zu
          holffen vnd den bunden in seinen würden zu halden.
        </p>
        <p>
          Item ap die kätzer in die Slesie zien werden, so sal iglich furste
          land vnd stete, die im lande sein, mit gantzer macht vff sein, sam
          jederman gesessin ist, vnd en enkegen zien, ein feld zu machen, beide
          aus landen vnd steten etc. Item iglich furste sal bestellen in seinen
          landen vnd steten, das 10 gebawer einen waijn haben mit irer were vnd
          speise vff drei monden. Nemlich itzlich waijn sol haben eine kethe,
          die man nennt eine landzocht, zwey brethe, zwey grabescheit, eine
          schauffel, zwu czoë, eine haue adir zwu. Vnd itzlicher sal seine beste
          were mit jm nemen, also spisse, armbroste vnd suste so er beste mag.
          Das sullen auch tun die obgenante lande vnd stete. Item itzlicher
          furste sal seine stete heissen mete nemen weren so sie beste mögen vnd
          ouch die lannt. Item itzlich furste sal mit jm nemen bochsen, nachdeme
          also es im ist angeslagen. Item die Sweidnitzer land vnd stete sullen
          mit jn nemen eine grosse bochse, 15 tarrasssteinbüchsen vnd 100
          pisschullen. Item die andern fursten vnd land vnd stete werden och
          mete nemen iglicher nach seinem anslage. Summa summarum der bochsen,
          20 grosse bochsen, domete man mawren fellen mag, 300
          tarrasssteinbüchsen, 2000 pisschullen.
        </p>
        <p>
          Ussrichtung vnd gerethe in die herfart zu habin: capelan mit eynem
          ornat, messebuch, lichte, kelich, wein, ampullen alterstein. Gelt,
          wein, byr, fleisch, speck, seitenfleisch, schmaltz, fysche, putter,
          behmische kese, cleine kese, saltz, tyschlag, hant tücher, kessel,
          dreifuss, würze, vnsletlichte, wichsinne stöckel, spisse, exsse,
          grabescheit, haulkin, muldin, schauffeln, schlegel, kriptücher, pfele,
          strenge, futterstricke, getzelt mit stangen vnd sinem gerethe,
          futtersecke, hobir vnd ein moss dorzu, hulzyne kannen, kopperinne
          tringgefese, lythische schilde, pfannen, tringtoppen, roste,
          brantreithe, schutzemeister, balbirer, czymmerleuthe, bochsenmeister,
          bochsen, pulver, poffeysen, kawlin, fusseysen, eiserne flegel, erbis,
          zugemüse.
        </p>
        <p>
          Am dornstage in der quatertempora vor Michaelis.
          <Qt
            publication={PUBLICATIONS.PALACKY_UB1}
            href="https://archive.org/details/urkundlichebeitr01pala/page/149/mode/1up"
            note="Č. 140, str. 149–151"
          />
        </p>
      </Col>
      <Col md={6}>
        <p>Úmluva manů a měst a knížat ve Slezsku.</p>
        <p>
          Na sjezdu v Grotkově se knížata a země a města Vratislav, Svídnice a
          Javor svorně sjednotila a usnesla proti kacířům v Čechách, jak je dále
          psáno:
        </p>
        <p>
          Předně obsadit pevnosti na hranicích k zemské obraně, a to takto:
          Vévoda Jan Minstrberský a země a města Vratislav, Svídnice a Javor
          mají položit 230 koní do Kowar (Schmiedeberg), na Žacléř, do Czarného
          Boru (Schwarzwaldau) a do Konradswaldau u Křesoboru. Dále biskup 70
          koní. Vévoda Ruprecht Lubinský a Ludvík, jeho bratr, 35 koní, vévoda
          Ludvík Břežský 60 koní a vévoda Konrád Kantner 60 koní mají položit do
          Broumova. Dále ti z Ratiboře mají sami obsadit Krnov 50 koni. Dále
          vévoda Bolek Těšínský 30 koní a mladý vévoda Bolek 25 koní mají
          položit do Ostravy. Vévoda Bernard s 30 koni, vévoda Kaske s 20 koni a
          bílý vévoda Konrád s 20 koni mají pomáhat vévodovi Přemkovi, kde bude
          pomoci nejvíce potřebovat, na čtvrt roku. Dále ke kterému z obsazených
          hradů by kacíři táhli, tomu mají ostatní z obsazených hradů přijít na
          pomoc. Dále kdyby byli slabí a obrátili se o pomoc na knížata, má
          každý kníže vytáhnout s celou mocí, kterou může sebrat od mladých i
          starých, a postavit se kacířům v poli; totéž mají učinit i manové a
          města. Dále k tomu má každý kníže přispět tak, aby se u něho nic
          nedostávalo, podle znění svazu, a také země a města.
        </p>
        <p>
          Dále kdyby se stalo, že by některý kníže nebo země nebo město chtěli
          ostatním odepřít svou moc a porušit svaz, toho chtějí ostatní
          obžalovat u papeže, u kardinála a u římského krále a poradí se, jak by
          ho mohli přimět, aby jim pomáhal a zachoval svaz v jeho platnosti.
        </p>
        <p>
          Dále kdyby kacíři táhli do Slezska, má každý kníže, země a města,
          kteří jsou v zemi, vytáhnout s celou mocí, jak je kdo usedlý, táhnout
          jim vstříc a postavit se jim v poli, jak ze zemí, tak z měst atd. Dále
          má každý kníže ve svých zemích a městech zařídit, aby 10 sedláků mělo
          jeden vůz se svými zbraněmi a jídlem na tři měsíce. Totiž každý vůz má
          mít řetěz, kterému se říká landzocht, dvě prkna, dva rýče, jednu
          lopatu, dvoje vidle, jednu motyku nebo dvě. A každý si má vzít s sebou
          svou nejlepší zbraň, totiž kopí, kuše a jinak, co nejlépe může. Totéž
          mají učinit výše jmenované země a města. Dále má každý kníže svým
          městům nařídit, aby vzala zbraně, jak nejlépe mohou, a také venkov.
          Dále má každý kníže vzít s sebou pušky podle toho, jak je mu to
          rozvrženo. Dále Svídnická země a města mají vzít s sebou jednu velkou
          pušku, 15 tarasnic a 100 píšťal. Dále ostatní knížata a země a města
          vezmou také každý podle svého rozvrhu. Úhrnem pušek: 20 velkých pušek,
          kterými lze bořit zdi, 300 tarasnic, 2000 píšťal.
        </p>
        <p>
          Výbava a potřeby, které je třeba mít na vojenskou výpravu: kaplan s
          ornátem, mešní kniha, svíce, kalich, víno, konvičky, oltářní kámen.
          Peníze, víno, pivo, maso, slanina, boční maso, sádlo, ryby, máslo,
          české sýry, malé sýry, sůl, ubrusy, ručníky, kotle, trojnožky, koření,
          lojové svíčky, voskové svíce, kopí, sekery, rýče, háky, díže, lopaty,
          palice, kriptücher, kůly, postraňky, provazy na píci, stan s tyčemi a
          jeho příslušenstvím, pytle na píci, oves a k tomu míra, dřevěné
          konvice, měděné nádoby na pití, lythische schilde, pánve, hrnky na
          pití, rošty, kozlíky na oheň, mistři střelců, lazebníci, tesaři,
          puškaři, pušky, prach, poffeysen, koule, fusseysen, železné cepy,
          hrách, zelenina.
        </p>
        <p>Ve čtvrtek o suchých dnech před svatým Michalem.</p>
      </Col>
    </Row>
  </>
)
