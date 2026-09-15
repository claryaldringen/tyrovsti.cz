import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const AccordoDiGrottkau = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="accordo-di-grottkau" />
        <h4>
          Accordo dei principi, dei vassalli e delle città slesiane a Grottkau
          (1421 o 1427)
          {draft && <DraftBadge />}
        </h4>
        <p>Traduzione provvisoria, non ancora revisionata.</p>
        <p>
          L&apos;accordo contro gli hussiti fu concluso dai principi slesiani
          insieme alle terre e alle città di Breslavia e di Schweidnitz-Jauer.
          Regola il presidio dei castelli di confine con la cavalleria,
          l&apos;azione comune in caso di invasione della Slesia,
          l&apos;equipaggiamento dei carri e la ripartizione delle bocche da
          fuoco, e infine elenca ciò che si deve portare con sé nella
          spedizione. Il documento non reca l&apos;anno; è datato soltanto{' '}
          <Cit>il giovedì delle Tempora prima di San Michele</Cit>. Palacký lo
          pubblicò, sulla base dell&apos;edizione di Grünhagen, sotto il 18
          settembre 1421.
          <Qt
            publication={PUBLICATIONS.PALACKY_UB1}
            href="https://archive.org/details/urkundlichebeitr01pala/page/149/mode/1up"
          />{' '}
          Grünhagen lo collega all&apos;assemblea dei principi a Grottkau di
          quello stesso giorno e ne sottolinea il carattere spiccatamente
          difensivo.
          <Qt
            publication={PUBLICATIONS.GRUNHAGEN1872}
            href="https://archive.org/details/bub_gb_s0kJAAAAQAAJ/page/n69/mode/1up"
          />{' '}
          Toman ritiene invece che il documento appartenga a un&apos;epoca
          successiva, forse al 1427. Lo considera piuttosto un&apos;attuazione
          più dettagliata della lega degli stessi principati del 14 febbraio
          1427, e un numero così elevato di bocche da fuoco gli appare del tutto
          improbabile per il 1421.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:175a8bf2-68d6-4f59-b376-5f0d3fe627ee"
            note="pp. 185–186"
          />
        </p>
        <p>
          Note di traduzione: interpreto le parole oscure secondo la parafrasi
          del documento in tedesco moderno fatta da Grünhagen.
          <Qt
            publication={PUBLICATIONS.GRUNHAGEN1872}
            href="https://archive.org/details/bub_gb_s0kJAAAAQAAJ/page/n70/mode/1up"
          />{' '}
          Secondo lui la catena <Cit>landzocht</Cit> collegava le due metà del
          carro, i <Cit>czoë</Cit> sono forconi e le <Cit>pisschullen</Cit> armi
          da fuoco portatili. Spiega le <Cit>tarrasssteinbüchsen</Cit> come
          bocche da fuoco che per sparare vengono appoggiate, a differenza delle
          armi portatili; le traduco come tarasnice. Da Grünhagen riprendo anche
          l&apos;identificazione dei principi: il duca Kaske è Casimiro di
          Oświęcim, Bernhard è Bernardo di Falkenberg e Przemek è Přemek di
          Opava.
          <Qt
            publication={PUBLICATIONS.GRUNHAGEN1872}
            href="https://archive.org/details/bub_gb_s0kJAAAAQAAJ/page/n69/mode/1up"
          />{' '}
          Lascio non tradotte le parole <Cit>kriptücher</Cit>,{' '}
          <Cit>lythische schilde</Cit>, <Cit>poffeysen</Cit> e{' '}
          <Cit>fusseysen</Cit>. Grünhagen le rende soltanto in tedesco moderno (
          <i>Halstragseln, lüttische Schilde (?), Puffeisen, Fußeisen</i>) e il
          loro significato è incerto.
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
            note="N. 140, pp. 149–151"
          />
        </p>
      </Col>
      <Col md={6}>
        <p>Accordo dei vassalli e delle città e dei principi in Slesia.</p>
        <p>
          All&apos;assemblea di Grottkau i principi e le terre e le città di
          Breslavia, Schweidnitz e Jauer si sono concordemente accordati e hanno
          deliberato contro gli eretici in Boemia, come è scritto qui di
          seguito:
        </p>
        <p>
          Anzitutto, presidiare le fortezze ai confini per la difesa del paese,
          e cioè: il duca Giovanni di Münsterberg e le terre e le città di
          Breslavia, Schweidnitz e Jauer devono stanziare 230 cavalli a
          Schmiedeberg (Kowary), a Schatzlar (Žacléř), a Schwarzwaldau (Czarny
          Bór) e a Konradswaldau presso Grüssau. Inoltre il vescovo 70 cavalli.
          Il duca Ruperto di Lüben e Ludovico suo fratello 35 cavalli, il duca
          Ludovico di Brieg 60 cavalli e il duca Corrado il Kantner 60 cavalli
          devono stanziarli a Braunau (Broumov). Inoltre quelli di Ratibor
          devono presidiare Jägerndorf (Krnov) da sé con 50 cavalli. Inoltre il
          duca Bolko di Teschen 30 cavalli e il giovane duca Bolko 25 cavalli
          devono stanziarli a Ostrau (Ostrava). Il duca Bernardo con 30 cavalli,
          il duca Kaske con 20 cavalli e il duca Corrado il Bianco con 20
          cavalli devono aiutare il duca Przemek là dove avrà più bisogno di
          aiuto, per un quarto d&apos;anno. Inoltre, contro quale dei castelli
          presidiati muovessero gli eretici, gli altri castelli presidiati
          devono accorrere in suo aiuto. Inoltre, se fossero deboli e
          chiedessero per iscritto aiuto ai principi, ogni principe deve
          mettersi in marcia con tutte le forze che può radunare tra giovani e
          vecchi e affrontare gli eretici in campo; lo stesso devono fare i
          vassalli e le città. Inoltre ogni principe deve contribuire in modo
          che da parte sua non manchi nulla, secondo il tenore della lega, e
          così pure le terre e le città.
        </p>
        <p>
          Inoltre, se accadesse che un principe o una terra o una città volesse
          sottrarre le proprie forze agli altri e rompere la lega, gli altri lo
          accuseranno davanti al papa, davanti al cardinale e davanti al re dei
          Romani, e si consiglieranno su come indurlo ad aiutarli e a mantenere
          la lega in vigore.
        </p>
        <p>
          Inoltre, se gli eretici entrassero in Slesia, ogni principe, terra e
          città che si trovi nel paese deve mettersi in marcia con tutte le sue
          forze, secondo come ciascuno è insediato, andare loro incontro e
          affrontarli in campo, tanto dalle terre quanto dalle città, ecc.
          Inoltre ogni principe deve disporre nelle sue terre e città che ogni
          10 contadini abbiano un carro con le loro armi e viveri per tre mesi.
          Cioè ogni carro deve avere una catena che si chiama landzocht, due
          assi, due vanghe, una pala, due forconi, una zappa o due. E ciascuno
          deve portare con sé la sua arma migliore, cioè lance, balestre e
          altrimenti ciò che meglio può. Lo stesso devono fare le terre e le
          città sopra nominate. Inoltre ogni principe deve ordinare alle sue
          città di portare armi come meglio possono, e così pure alla campagna.
          Inoltre ogni principe deve portare con sé bocche da fuoco secondo
          quanto gli è stato assegnato. Inoltre la terra e le città di
          Schweidnitz devono portare con sé una grande bombarda, 15 tarasnice e
          100 pisschullen. Inoltre anche gli altri principi, terre e città
          porteranno le loro, ciascuno secondo la propria quota. Totale delle
          bocche da fuoco: 20 grandi bombarde con cui si possono abbattere le
          mura, 300 tarasnice, 2000 pisschullen.
        </p>
        <p>
          Equipaggiamento e attrezzatura da avere nella spedizione: un
          cappellano con un paramento, messale, candele, calice, vino,
          ampolline, pietra d&apos;altare. Denaro, vino, birra, carne, lardo,
          pancetta, strutto, pesce, burro, formaggi boemi, formaggi piccoli,
          sale, tovaglie, asciugamani, caldaie, treppiedi, spezie, candele di
          sego, candele di cera, lance, asce, vanghe, uncini, madie, pale,
          mazze, kriptücher, pali, tirelle, corde per il foraggio, una tenda con
          pali e i suoi accessori, sacchi per il foraggio, avena e una misura
          per essa, brocche di legno, recipienti di rame per bere, lythische
          schilde, padelle, boccali, graticole, alari, maestri dei tiratori,
          barbieri, carpentieri, bombardieri, bocche da fuoco, polvere,
          poffeysen, palle, fusseysen, correggiati di ferro, piselli, verdure.
        </p>
        <p>Il giovedì delle Tempora prima di San Michele.</p>
      </Col>
    </Row>
  </>
)
