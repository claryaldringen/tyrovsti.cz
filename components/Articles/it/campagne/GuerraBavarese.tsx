import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import styles from '../../cz/akce/BavorskaValka.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export const GuerraBavarese = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="bavarian-war" />
        <h4>La guerra bavarese</h4>
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <p>
          La guerra bavarese dal 1459 al 1463, nota anche come guerra dei
          principi, fu una conseguenza degli sforzi espansionistici dei
          principati. Il margravio di Brandeburgo, Alberto III Achille della
          casata degli Hohenzollern, che aveva ormai gi&agrave; unificato i
          principati di Bayreuth e Ansbach, si contrapponeva al duca di
          Baviera-Landshut, Ludovico IX, detto il Ricco.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Bayerischer_Krieg_(1459%E2%80%931463)"
          />{' '}
          La cosiddetta <i>Faida diocesana di Magonza</i>, nota anche come{' '}
          <i>guerra del Baden-Palatinato</i>, un conflitto militare per la sede
          dell&apos;arcivescovo di Magonza, &egrave; talvolta considerata parte
          di questo conflitto.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Mainzer_Stiftsfehde"
          />
        </p>
      </Col>
      <ImageWithTitle
        src="LudvikIX.jpg"
        width={1200}
        height={747}
        title="Vittoria nella battaglia di Giengen 1462, dipinto di Hans Werl, circa 1603"
      />
    </Row>
    <Row>
      <Col>
        <h5>Premessa</h5>
        <p>
          Il duca di Baviera-Landshut, Ludovico IX il Ricco (1450&ndash;1479),
          era, insieme all&apos;elettore palatino Federico I, detto il
          Vittorioso (1425&ndash;1476), e al margravio di Brandeburgo, Alberto
          III Achille (1414&ndash;1486), una delle figure pi&ugrave; eminenti
          tra i principi tedeschi nella&nbsp;seconda met&agrave; del XV secolo.
          La sua forza finanziaria, basata su una ricca eredit&agrave; paterna e
          su un&apos;amministrazione territoriale ben funzionante, nonch&eacute;
          la sua generosit&agrave; e la sua magnifica rappresentanza, gli
          valsero una fama di leggendaria ricchezza. Nel&nbsp;campo della
          politica imperiale, egli si appoggiava fondamentalmente al sistema di
          alleanze dei Wittelsbach, creato congiuntamente
          con&nbsp;l&apos;elettore palatino Federico I (entrambi erano
          Wittelsbach). In particolare, l&apos;alleanza della Landfriede
          con&nbsp;il duca Alberto III di Baviera-Monaco (anch&apos;egli
          Wittelsbach) e il conte palatino Federico del <b>17 dicembre 1451</b>{' '}
          esercitava una forte attrazione sui principi, la nobilt&agrave; e le
          citt&agrave; della&nbsp;Germania meridionale. Dopo le citt&agrave;
          imperiali sveve, anche il duca Sigismondo del Tirolo (1455) e il re di
          Boemia Ladislao il Postumo (1457) aderirono in seguito al sistema di
          alleanze dei Wittelsbach. Nel 1458, il duca Ludovico e il conte
          palatino Federico rinnovarono e rafforzarono la loro coalizione
          attraverso un&apos;alleanza a vita.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00159.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="Julius_Zimmermann_-_Ludwig_IX._der_Reiche_(geb._1417,_reg._1450-1479),_Herzog_von_Bayern-Landshut_-_4541_-_Bavarian_State_Painting_Collections.jpg"
        width={574}
        height={768}
        title="Ludovico IX di Baviera, dipinto del pittore tedesco Julius Zimmermann (1824&ndash;1906)"
      />
      <ImageWithTitle
        src="Albrecht_Achilles_auf_der_Predella_des_von_ihm_gestifteten_Schwanenordensaltars.jpg"
        width={1920}
        height={1440}
        title="Raffigurazione di Alberto Achille sulla predella dell'altare dell'Ordine del Cigno da lui donato (1484) nella chiesa di San Gumberto."
      />
      <ImageWithTitle
        md={3}
        src="Friedrich_der_Siegreiche_von_Albrecht_Altdorfer.jpg"
        width={882}
        height={1203}
        title="Federico I del Palatinato, dipinto di Albrecht Altdorfer (1480&ndash;1538)"
      />
    </Row>
    <Row>
      <Col>
        <p>
          In particolare, tuttavia, il rapporto tra l&apos;elettore palatino
          Federico I e&nbsp;l&apos;imperatore Federico III celava un elevato
          potenziale di conflitto, poich&eacute; l&apos;imperatore non riconobbe
          mai il governo del conte palatino, che questi si era appropriato in
          violazione del diritto ereditario della Bolla d&apos;Oro. Inoltre,
          sorse una rivalit&agrave; anche tra il conte palatino e il margravio
          Alberto III Achille.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00159.html"
          />
          Alberto Achille tent&ograve; di espandere la propria giurisdizione e
          con essa la propria influenza sui territori confinanti. Per questo
          motivo, elev&ograve; il Landgericht di Norimberga, dove ricopriva la
          carica di burgravio e aveva quindi questo tribunale a lui subordinato,
          a tribunale imperiale. In questo modo, afferm&ograve; la propria
          pretesa di giurisdizione illimitata attraverso il tribunale di
          Norimberga per l&apos;intero Impero e, in nome dell&apos;imperatore
          quale giudice supremo, rivendic&ograve; il diritto di assumere i
          procedimenti giudiziari da tutte le regioni. Ci&ograve; avrebbe
          significato che egli poteva influenzare la giurisprudenza dei
          principati confinanti e, in qualit&agrave; di tribunale superiore,
          annullare le decisioni dei tribunali subordinati. Dietro gli sforzi di
          Alberto Achille vi era anche l&apos;idea di restaurare la Franconia
          sotto il dominio degli Hohenzollern. In combinazione con la
          dignit&agrave; ducale, questa idea rimase viva a lungo nel principato
          vescovile di W&uuml;rzburg, senza tuttavia mai concretizzarsi
          nuovamente.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Bayerischer_Krieg_(1459%E2%80%931463)"
          />
          Alberto III entr&ograve; cos&igrave; inevitabilmente in conflitto
          con&nbsp;il conte palatino del Reno e&nbsp;a Mosbach, con&nbsp;i
          vescovati franconi, e infine anche con&nbsp;il duca Ludovico IX.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00160.html"
          />
        </p>
        <p>
          D&apos;altra parte, i principi della&nbsp;Germania sud-occidentale,
          che si sentivano anch&apos;essi minacciati dalla politica territoriale
          espansionistica del conte palatino Federico I il Vittorioso, si
          unirono alla politica del margravio. La cosiddetta alleanza
          anti-palatina tra il margravio di Brandeburgo, il duca Guglielmo di
          Sassonia, il margravio Carlo di Baden, il conte Ulrico di
          W&uuml;rttemberg-Stoccarda e l&apos;arcivescovo di Magonza, Diether
          von Isenburg, fu, come la rinnovata alleanza dei Wittelsbach, conclusa
          nel 1458. Ci&ograve; prepar&ograve; il terreno per uno scontro
          decisivo. E il pretesto appropriato per lo scoppio dei conflitti non
          tard&ograve; infatti a presentarsi.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00159.html"
          />
        </p>
        <p>
          Sebbene anche il ducato di Baviera-Landshut fosse colpito dagli
          interventi del tribunale di Norimberga, il buon rapporto personale tra
          il margravio Alberto III Achille e il duca Ludovico IX imped&igrave;
          che la rivalit&agrave; territoriale degenerasse in aperta
          ostilit&agrave; fino al 1458. D&apos;altro canto, il margravio Alberto
          rimase per tutta la vita un fedele difensore degli interessi imperiali
          nell&apos;Impero. Raramente, tuttavia, pot&eacute; trarne qualche
          vantaggio per i propri obiettivi. Fu proprio nel nascente confronto
          tra i Wittelsbach e l&apos;Impero che egli vide
          un&apos;opportunit&agrave; di combinare gli interessi imperiali con i
          suoi piani riguardanti il Landgericht di Norimberga, agendo come
          rappresentante dell&apos;imperatore pur continuando a difendere
          primariamente i propri interessi contro i suoi vicini territoriali
          in&nbsp;Franconia e Baviera.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00160.html"
          />
        </p>
        <p>
          Ci&ograve; divenne chiaramente evidente quando il conflitto con&nbsp;i
          Wittelsbach si concretizz&ograve; effettivamente. Dopo che il duca
          Ludovico IX &ndash; inizialmente ancora con&nbsp;l&apos;aiuto del
          margravio Alberto &ndash; occup&ograve; la libera citt&agrave;
          imperiale di Donauw&ouml;rth, strategicamente importante per il
          controllo del Danubio, nell&apos;ottobre 1458, al fine di incorporarla
          nel suo ducato sulla base di antiche pretese giuridiche,
          l&apos;imperatore Federico III pronunci&ograve; il bando imperiale
          contro di lui il <b>4 giugno 1459</b>. Come suo esecutore,
          nomin&ograve; &ndash; su propria richiesta &ndash; insieme al duca
          Guglielmo di Sassonia, anche il margravio Alberto. Grazie alla sua
          alleanza con&nbsp;gli Asburgo, con l&apos;arciduca Alberto
          d&apos;Austria e con il duca Sigismondo del Tirolo alle spalle, e con
          l&apos;avvio del reclutamento di mercenari in&nbsp;Boemia, Ludovico IX
          si sentiva abbastanza forte per muovere guerra contro l&apos;Impero.
          Un conflitto aperto tra il duca di Landshut e Alberto di Brandeburgo
          sembrava ormai solo questione di tempo. All&apos;improvviso, tuttavia,
          il duca Ludovico fu inaspettatamente privato della prospettiva di
          numerosi mercenari dalla&nbsp;Boemia e con essa della sua speranza per
          una forza d&apos;urto militare decisiva. In seguito
          all&apos;intervento di papa Pio II e a causa di questioni territoriali
          ancora irrisolte con&nbsp;la Baviera, il re di Boemia Giorgio di
          Poděbrady proib&igrave; ai suoi connazionali di servire come mercenari
          per il duca Ludovico. Il <b>16 luglio 1459</b> Ludovico dovette cedere
          Donauw&ouml;rth all&apos;imperatore e comparire davanti&nbsp;al
          tribunale arbitrale dei principi.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00160.html"
          />
        </p>
        <p>
          I cosiddetti &ldquo;verdetti ciechi&rdquo; del tribunale arbitrale,
          che si riunì nel&nbsp;luglio 1459 a&nbsp;Norimberga, furono un
          successo unilaterale della diplomazia del margravio di Brandeburgo
          (127). Nei&nbsp;punti essenziali, la decisione and&ograve; contro gli
          interessi dei Wittelsbach, e anche nella&nbsp;importante questione
          della giurisdizione del tribunale di Norimberga, la formulazione vaga
          del tribunale arbitrale consent&igrave; un&apos;interpretazione nel
          senso del margravio Alberto. La tensione tra le parti nell&apos;Impero
          continu&ograve; dunque, cosicch&eacute; un nuovo scoppio di
          ostilit&agrave; aperte rimase solo una questione di tempo.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00160.html"
          />
        </p>
        <p>
          Per prevenire una situazione simile alla disputa su Donauw&ouml;rth, i
          Wittelsbach cercarono congiuntamente di migliorare le relazioni tra il
          duca Ludovico IX e la Boemia. Tra l&apos;autunno del 1459 e
          l&apos;autunno del 1460, riuscirono effettivamente a progredire da un
          cauto avvicinamento a&nbsp;un legame solido, che fu persino
          corroborato dal fidanzamento tra la figlia del re Giorgio, Ludmila, e
          il figlio del duca Ludovico IX, Giorgio. Lo sfondo era il piano del
          consigliere dei Wittelsbach, Martin Mair, di rendere il re di Boemia
          re di Germania contro la volont&agrave; dell&apos;imperatore,
          accrescendo cos&igrave; la capacit&agrave; d&apos;azione
          dell&apos;Impero. Un piano per il quale il re di Boemia era
          assolutamente entusiasta, ma che alla fine fall&igrave; per la
          mancanza di sostegno da parte dei principi fedeli all&apos;imperatore
          Federico III riuniti attorno al margravio Alberto III di Brandeburgo.
          Questo rifiuto port&ograve; infine il re Giorgio definitivamente dalla
          parte dei Wittelsbach, con i quali concluse un&apos;alleanza
          principalmente contro il margravio Alberto, ma in definitiva anche
          contro l&apos;imperatore.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
        <p>
          Sulla base di questi mutevoli rapporti con&nbsp;Giorgio di Poděbrady,
          i preparativi bellici bavaresi presero rapidamente forma nella
          primavera del 1460. Il duca Ludovico si affid&ograve; nuovamente in
          primo luogo ai mercenari dalla&nbsp;Boemia, di cui almeno 5.000
          entrarono al suo servizio quell&apos;anno. Alcuni condottieri boemi si
          distinsero particolarmente per le dimensioni dei loro contingenti
          mercenari: Dobrohost di Ronsperg e Hor&scaron;ovsk&yacute; T&yacute;n
          portarono pi&ugrave; di 1.300 mercenari al servizio del duca Ludovico,
          Racek di Janovice e R&yacute;zmberk circa 1.000, e
          Mikul&aacute;&scaron; Kapl&iacute;ř di Sulevice e Vimperk era
          rappresentato nell&apos;esercito ducale da circa 900 uomini. Inoltre,
          diversi altri condottieri e comandanti mercenari disponevano di forti
          contingenti fino a diverse centinaia di uomini.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Svolgimento della guerra</h5>
        <p>
          Nel marzo 1460 scoppi&ograve; il conflitto armato aperto, condotto
          secondo le forme tradizionali della faida. Quando il conte Ulrico V di
          W&uuml;rttemberg (regno 1433&ndash;1480) e il conte palatino Ludovico
          del Palatinato-Zweibr&uuml;cken, alleati di Alberto III Achille,
          attaccarono l&apos;Elettorato del Palatinato nell&apos;ambito della
          guerra del Baden-Palatinato, Ludovico il Ricco si schier&ograve; dalla
          parte dell&apos;elettore Federico del Palatinato
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Bayerischer_Krieg_(1459%E2%80%931463)"
          />{' '}
          e, con il pretesto dell&apos;attuazione del trattato di alleanza, fece
          marciare le sue truppe, gi&agrave; da tempo preparate, contro il
          margravio Alberto nella Franconia degli Hohenzollern. L&apos;esercito
          ducale aveva una netta superiorit&agrave; su quello del margravio e
          ottenne alcuni rapidi successi. Dapprima, la direzione principale
          dell&apos;attacco bavarese si rivolse contro il vescovato di
          Eichst&auml;tt, poich&eacute; il vescovo Johann von Eich era alleato
          del margravio Alberto. Dopo un breve assedio, la citt&agrave; di
          Eichst&auml;tt cadde dal <b>7</b> all&apos;<b>11 aprile 1460</b> nelle
          mani del duca, e il vescovo Johann fu costretto a firmare un trattato
          che limitava permanentemente e gravemente l&apos;indipendenza del suo
          vescovato nei confronti della Baviera. A met&agrave; aprile, il duca
          Ludovico prosegu&igrave; la sua campagna in Franconia e march&igrave;
          attraverso Heideck e Hilpoltstein verso la piccola citt&agrave;
          margraviale di Roth, che cominci&ograve; ad assediare il{' '}
          <b>27 aprile 1460</b>. Con una breve interruzione tra il 30 aprile e
          il 3 maggio, causata da difficolt&agrave; di approvvigionamento,
          l&apos;esercito, probabilmente ormai forte di circa 20.000 uomini,
          insedi&ograve; un campo fortificato a Roth, dal quale venivano
          ripetutamente lanciate incursioni di ricognizione da singoli
          contingenti mercenari nel territorio margraviale. Tra l&apos;altro, la
          citt&agrave; di Windsbach fu data alle fiamme e i mercenari boemi del
          duca saccheggiarono il monastero agostiniano di Pillenreuth presso
          Norimberga.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
        <p>
          Il <b>5 maggio 1460</b>, il margravio Alberto comparve davanti a Roth
          con un esercito di circa 10.000 uomini e si accamp&ograve; a una
          &ldquo;distanza di tiro di cannone&rdquo; dal campo militare bavarese.
          Durante le sette settimane successive, non si svolsero grandi
          battaglie che avrebbero potuto essere decisive per l&apos;esito della
          guerra, nonostante gli avversari si trovassero cos&igrave; vicini tra
          loro. Si verificarono invece quasi quotidianamente piccole schermaglie
          tra i campi o reciproci bombardamenti dalla Wagenburg. Allo stesso
          tempo, ulteriori rinforzi arrivarono davanti a Roth, cosicch&eacute;
          gli eserciti continuarono a crescere. Si dice che il duca Ludovico
          avesse alla fine circa 30.000 uomini nel suo esercito, il margravio
          diverse migliaia in meno. Data la situazione drammaticamente tesa
          davanti alla assediata Roth, in cui nessuna delle parti era disposta a
          cedere, una battaglia decisiva avrebbe potuto scoppiare in qualsiasi
          momento. Nel frattempo, tuttavia, gli sforzi diplomatici per una
          risoluzione pacifica del conflitto si intensificavano nuovamente da
          entrambe le parti e portarono presto i primi successi, anche se
          entrambi i principali avversari erano poco propensi alla pace. Il duca
          Ludovico si considerava il vincitore militare della guerra, mentre il
          margravio Alberto esigeva il ritiro dell&apos;esercito bavarese prima
          di essere disposto a negoziare. Solo la minacciata disgregazione del
          suo esercito dovuta alla partenza degli alleati sassoni costrinse
          infine il margravio Alberto a cedere. Il risultato dei negoziati di
          conciliazione fu la cosiddetta <i>Direttiva di Roth</i> del{' '}
          <b>24 giugno 1460</b>, che appare come un completo successo della
          politica dei Wittelsbach. I &ldquo;verdetti ciechi&rdquo;
          di&nbsp;Norimberga furono annullati, la giurisdizione del tribunale di
          Norimberga fu considerevolmente limitata, il vescovato di
          Eichst&auml;tt rimase sotto l&apos;influenza bavarese e il duca
          Ludovico non dovette evacuare i territori margraviali occupati. Per
          quanto riguardava ulteriori questioni controverse, come il
          risarcimento dei costi di guerra o l&apos;evacuazione delle aree
          occupate, il re di Boemia Giorgio di Poděbrady avrebbe dovuto fungere
          da arbitro. Quando il <b>4 luglio 1460</b> anche il conte palatino
          Federico sconfisse i suoi avversari nella battaglia di Pfeddersheim,
          parve che i Wittelsbach e i loro alleati trionfassero su tutta la
          linea.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00162.html"
          />
        </p>
        <p>
          La fragile pace, tuttavia, non era destinata a durare ancora una
          volta. Nei&nbsp;mesi successivi, il margravio Alberto di Brandeburgo
          cerc&ograve; ripetutamente di ripudiare il suo recente riconoscimento
          della <i>Direttiva di Roth</i>. Al contrario, Ludovico di
          Baviera-Landshut insistette sulle sue posizioni territoriali acquisite
          in&nbsp;Franconia senza venire incontro agli sforzi di compromesso dei
          mediatori. Nel frattempo, sapeva che il re di Boemia Giorgio, il quale
          si era definitivamente allontanato dal margravio Alberto a causa del
          rifiuto della proposta riguardante l&apos;elezione di un re di
          Germania, era pi&ugrave; che mai dalla sua parte.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00163.html"
          />
        </p>
        <p>
          Oltre al re Giorgio, un altro importante anello nel sistema di
          alleanze dei Wittelsbach era l&apos;arciduca Alberto VI
          d&apos;Austria, fratello e rivale dinastico dell&apos;imperatore.
          Quando egli lanci&ograve; una guerra aperta contro l&apos;imperatore
          nell&apos;estate del 1461 nella disputa sull&apos;eredit&agrave;
          austriaca di Ladislao il Postumo, morto nel 1457, ci&ograve;
          scaten&ograve; anche un altro ciclo di dispute tra i Wittelsbach e il
          margravio Alberto di Brandeburgo con&nbsp;i rispettivi alleati.
          L&apos;aiuto militare del duca Ludovico all&apos;arciduca Alberto
          forn&igrave; all&apos;imperatore Federico un pretesto per dichiarargli
          guerra nel&nbsp;luglio 1461. Come capitani imperiali, egli
          nomin&ograve; accanto al margravio Carlo di Baden e al conte Ulrico di
          W&uuml;rttemberg anche il margravio Alberto III Achille, il quale vide
          in ci&ograve; un&apos;opportunit&agrave; per rivedere la{' '}
          <i>Direttiva di Roth</i>. Come gi&agrave; nel 1459 nella disputa su
          Donauw&ouml;rth, Alberto combin&ograve; qui la politica imperiale
          con&nbsp;la sua politica egemonica nella&nbsp;Germania meridionale e
          in Austria.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00163.html"
          />
        </p>
        <p>
          Come l&apos;anno precedente, il duca Ludovico era meglio preparato per
          il conflitto imminente rispetto al suo avversario. Gi&agrave;
          all&apos;inizio dell&apos;estate del 1461, egli avvi&ograve; i
          preparativi bellici, che comprendevano nuovamente un efficace
          reclutamento di mercenari in&nbsp;Boemia. Almeno 2.000 boemi entrarono
          al suo servizio a partire da agosto, rafforzando l&apos;esercito
          ducale, che con un totale di 16.000 uomini superava di gran lunga
          l&apos;esercito del margravio Alberto. Racek di Janovice e
          R&yacute;zmberk inviarono circa 500 mercenari, Přib&iacute;k
          &Scaron;atava arriv&ograve; con&nbsp;pi&ugrave; di 400 uomini
          dalla&nbsp;Boemia meridionale, Jan Jenec di Janovice e
          Petr&scaron;purk con&nbsp;circa 250 uomini dalla Boemia occidentale,
          questi essendo i contingenti pi&ugrave; numerosi. Inoltre, un attivo
          supporto militare dal re di Boemia, che dichiar&ograve; faida contro
          il margravio e fece marciare un forte esercito contro i territori
          dell&apos;Alta Franconia degli Hohenzollern, fu anch&apos;esso
          fornito. Anche se il successo militare di questo schieramento rimase
          limitato, esso cion&ograve;ndimeno immobilizz&ograve; importanti forze
          del margravio di cui egli aveva urgente bisogno sul teatro principale
          della guerra nella Franconia centrale.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00164.html"
          />
        </p>
        <p>
          Questa volta, il duca Ludovico avanz&ograve; con il suo esercito
          ancora pi&ugrave; in profondit&agrave; nel territorio margraviale
          rispetto all&apos;anno precedente. Neustadt an der Aisch e Uffenheim
          furono conquistate, Windsbach, Heilsbronn e altri luoghi gravemente
          danneggiati. In totale, proprio all&apos;inizio della campagna, 18
          citt&agrave;, localit&agrave; e castelli margraviali sarebbero caduti
          nelle mani del duca bavarese, il quale, insieme ai&nbsp;contingenti
          dei vescovi franconi alleati e del conte palatino Federico, dominava
          il campo di battaglia. Il margravio Alberto, che attese invano i
          rinforzi promessi dai suoi alleati, dovette limitarsi a tenere Ansbach
          e Schwabach e da l&igrave; lanciare occasionali incursioni contro
          l&apos;esercito ducale. Solo quando nell&apos;ottobre gli alleati
          abbandonarono l&apos;esercito del duca Ludovico per varie ragioni e la
          difficile situazione degli approvvigionamenti, che peggior&ograve;
          ulteriormente con l&apos;arrivo delle intemperie, rivel&ograve; la
          necessit&agrave; di frazionare l&apos;esercito, la situazione
          cambi&ograve; gradualmente. Decisivo, tuttavia, fu il comportamento
          del re di Boemia, che accett&ograve; il ruolo di mediatore offertogli
          dall&apos;imperatore, ritir&ograve; i contingenti boemi dall&apos;Alta
          Franconia e chiam&ograve; il duca Ludovico a liberare anche i
          mercenari boemi al suo servizio. Il margravio Alberto sfrut&ograve;
          immediatamente la conseguente ritirata bavarese riconquistando in
          rapida successione quasi tutti i luoghi occupati dai bavaresi.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00164.html"
          />
        </p>
        <p>
          Quando le parti in conflitto si incontrarono infine nel&nbsp;novembre
          1461 a&nbsp;Praga per discutere le possibilit&agrave; di concludere la
          pace tramite il re Giorgio, le probabilit&agrave; di raggiungere un
          accordo erano dunque appena migliori rispetto a prima dell&apos;inizio
          della guerra. Mentre il duca Ludovico non era disposto a retrocedere
          oltre le disposizioni della <i>Direttiva di Roth</i> e avanzava invece
          richieste sempre pi&ugrave; stravaganti di risarcimento bellico, il
          margravio, dopo i suoi recenti successi, non si sentiva pi&ugrave; la
          parte sconfitta e mostrava quindi scarsa disponibilit&agrave; a
          partecipare persino ai negoziati. Ignor&ograve; il cessate il fuoco
          concluso in&nbsp;dicembre con l&apos;argomento che non aveva
          validit&agrave; per la guerra imperiale ancora in corso contro il duca
          Ludovico. E quando il margravio Alberto ebbe la certezza che
          l&apos;imperatore lo sosteneva, egli riprese effettivamente la guerra
          contro i Wittelsbach nel&nbsp;gennaio 1462.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00165.html"
          />
        </p>
        <p>
          Nel 1462, tuttavia, a differenza dell&apos;anno precedente, gli
          appelli dell&apos;imperatore Federico alle citt&agrave; imperiali per
          combattere contro il duca Ludovico ebbero effetto. I rapporti di forza
          si svilupparono dunque diversamente questa volta rispetto alle
          campagne del 1460 e 1461. Le citt&agrave; sveve, guidate da Augusta e
          Ulma, parteciparono ora attivamente alla guerra contro il duca
          Ludovico, che questa volta spost&ograve; anche il baricentro delle
          operazioni militari maggiormente nell&apos;area sveva. Tuttavia,
          l&apos;esercito imperiale non riusc&igrave; a sfruttare la sua
          superiorit&agrave; iniziale. Il duca Ludovico riusc&igrave;
          relativamente in fretta a radunare nuovamente un forte esercito
          &ndash; ancora una volta con una forte partecipazione di mercenari
          dalla&nbsp;Boemia, il cui numero, tuttavia, non &egrave; determinabile
          per quest&apos;anno. Inoltre, il re di Boemia riprese anche la guerra
          contro le aree margraviali attorno a Wunsiedel. Con due grandi
          successi nell&apos;estate, parve poi che la decisione cadesse
          finalmente a favore dei Wittelsbach. Il <b>30 giugno 1462</b>, il
          conte palatino Federico riusc&igrave; a ottenere una vittoria
          schiacciante sui suoi avversari della Germania sud-occidentale nella
          battaglia di Seckenheim, nella quale il margravio Carlo di Baden e il
          conte Ulrico di W&uuml;rttemberg furono fatti prigionieri dal
          Palatinato. Un simile successo fu ottenuto anche dal duca Ludovico di
          Baviera-Landshut con la sua vittoria sull&apos;esercito imperiale
          guidato dal margravio Alberto il <b>19 luglio 1462</b> a Giengen.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00165.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className={styles.factbox}>
          <h6>La guerra del Baden-Palatinato e la battaglia di Seckenheim</h6>
          <p>
            Essa faceva parte della faida arcivescovile per l&apos;occupazione
            dell&apos;arcidiocesi di Magonza, nota anche come guerra del
            Baden-Palatinato. Nel 1459, l&apos;amministratore capitolare Diether
            von Isenburg fu eletto nuovo arcivescovo di Magonza con una stretta
            maggioranza su Adolf von Nassau. Il prezzo per questa elezione fu
            l&apos;adesione all&apos;alleanza anti-palatina, e Diether fu
            cos&igrave; costretto a marciare contro il conte palatino Federico
            I, ma il <b>4 luglio 1460</b> perse la decisiva battaglia di
            Pfeddersheim. Nel 1461, Diether convoc&ograve; una dieta dei
            principi a Norimberga, dove si fece promotore di riforme imperiali
            ed ecclesiastiche. Chiese con enfasi l&apos;abolizione dei requisiti
            papali di annata attraverso un concilio generale. La sua posizione
            critica verso papa Pio II e l&apos;imperatore Federico III
            port&ograve; alla sua deposizione e scomunica da parte del papa il{' '}
            <b>21 agosto 1461</b>.
            <Qt
              publication={PUBLICATIONS.WIKI}
              href="https://de.wikipedia.org/wiki/Diether_von_Isenburg"
            />{' '}
            Il papa insedi&ograve; quindi il suo rivale Adolf von Nassau sul
            trono arcivescovile di Magonza il <b>1&ordm; ottobre 1461</b>.
            Diether, tuttavia, rifiut&ograve; di rinunciare
            all&apos;arcivescovato, sostenuto dalla citt&agrave; di Magonza, dal
            fratello Ludovico e ora anche dal suo ex nemico Federico I del
            Palatinato, che in cambio del suo aiuto ricevette le citt&agrave; di
            Lorsch, Heppenheim e Bensheim. Adolf si alle&ograve; con
            l&apos;arcivescovo di Treviri, Giovanni II di Baden, il vescovo
            Giorgio di Metz, il vescovo Giovanni II von Hoheneck di Spira e il
            conte Ulrico V di W&uuml;rttemberg. Il margravio Carlo I di Baden
            tent&ograve; inizialmente di mediare tra le fazioni in lotta, ma poi
            si schier&ograve; dalla parte di Adolf insieme al fratello, il
            vescovo Giorgio di Metz, il che port&ograve; alla guerra del
            Baden-Palatinato, un tentativo di conquista forzata della diocesi.
            <Qt
              publication={PUBLICATIONS.WIKI}
              href="https://de.wikipedia.org/wiki/Mainzer_Stiftsfehde"
            />
          </p>
          <p>
            Gli avversari di Federico I intendevano invadere il Palatinato da
            sud, poich&eacute; credevano che l&apos;elettore fosse con le sue
            truppe in Baviera per aiutare il duca Ludovico IX contro Alberto III
            Achille, e pertanto radunarono un esercito di 10.000 uomini presso
            Pforzheim. Fu allestito un campo militare tra Roth e St. Leon, e la
            cavalleria composta da principi e cavalieri bruci&ograve; i campi e
            i villaggi circostanti e massacr&ograve; gli abitanti. Federico I
            ordin&ograve; ai suoi vassalli e ai loro uomini d&apos;arme di
            radunarsi a Leimen, dove pot&eacute; discretamente concentrare le
            sue forze. Egli stesso arriv&ograve; solo il 29 giugno e da
            l&igrave; osserv&ograve; le attivit&agrave; notturne dei suoi
            nemici. Furono inviati corrieri all&apos;arcivescovo di Magonza,
            Diether von Isenburg, ai conti di Leiningen e Katzenelnbogen, che si
            trovavano sulla riva sinistra del Reno ed erano pronti a marciare
            attraverso Altrip verso il Dossenwald Inferiore. Il numero dei
            combattenti che appuntarono foglie di noce ai propri indumenti
            &ndash; i segni distintivi delle forze del Palatinato &ndash;
            aument&ograve; grazie al grande afflusso di contadini della regione.
            Le forze del Baden, d&apos;altro canto, appuntarono ciuffi
            d&apos;avena ai propri indumenti.
            <Qt
              publication={PUBLICATIONS.SECKENHEIM}
              href="https://www.historisches-seckenheim.de/index.php/ortsgeschichte/123-schlacht-bei-seckenheim"
            />
          </p>
          <p>
            Nella notte del 30 giugno, egli march&igrave; con circa 300
            cavalieri e ulteriore fanteria attraverso la Foresta di Schwetzingen
            fino a &ldquo;Frohnholz&rdquo; (l&apos;odierno Dossenwald) a sud di
            Seckenheim, che le forze imperiali intendevano incendiare il giorno
            seguente. Durante la marcia, le forze del Palatinato furono
            rinforzate da ulteriori circa 300 cavalieri e fanteria aggiuntiva
            dai contingenti dell&apos;arcivescovo di Magonza, Diether von
            Isenburg, e del conte Filippo von Katzenelnbogen.
            <Qt
              publication={PUBLICATIONS.SECKENHEIM}
              href="https://www.historisches-seckenheim.de/index.php/ortsgeschichte/123-schlacht-bei-seckenheim"
            />
          </p>
          <p>
            Quando gli attaccanti imperiali si mossero dal loro campo
            fortificato la mattina seguente e avanzarono su Seckenheim con 700-
            800 cavalieri per incendiarla, furono inaspettatamente attaccati
            alle spalle da 600 cavalieri della parte palatina, con il grido di
            battaglia del conte palatino:{' '}
            <Cit>Hut Palatzgraff oder nimmer mee!</Cit> (Tieni duro, conte
            palatino, o mai pi&ugrave;!)
            <Qt
              publication={PUBLICATIONS.SECKENHEIM}
              href="https://www.historisches-seckenheim.de/index.php/ortsgeschichte/123-schlacht-bei-seckenheim"
            />
            , mentre la fanteria di circa 2.000 uomini era tenuta da Federico I
            nascosta in un bosco vicino. La cavalleria meno numerosa di Federico
            adott&ograve; una formazione a scaglione con uomini d&apos;arme al
            centro e due file di arcieri a cavallo sui fianchi. Dopo un breve
            scambio iniziale di colpi, la cavalleria pesante di entrambi gli
            eserciti caric&ograve; l&apos;una contro l&apos;altra, e i cavalieri
            di Federico riuscirono appena a impedire agli uomini d&apos;arme
            alleati di sfondare. Mentre i cavalieri combattevano tra loro, la
            fanteria di Federico emerse dal suo nascondiglio e accerchi&ograve;
            gli alleati imperiali. Un gruppo di circa 300 cavalieri alleati
            riusc&igrave; a compiere una sortita e attacc&ograve; i palafrenieri
            del Palatinato che attendevano i loro uomini d&apos;arme,
            uccidendoli, ma ci&ograve; non cambi&ograve; pi&ugrave; l&apos;esito
            della battaglia.
            <Qt
              publication={PUBLICATIONS.WIKI}
              href="https://en.wikipedia.org/wiki/Battle_of_Seckenheim"
            />
            Ulrico di W&uuml;rttemberg rifiut&ograve; di accettare la sconfitta
            ma fu sfidato a duello da Hans von Gemmingen, che grid&ograve;:{' '}
            <Cit>Zkusím štěstí s Vaší Milostí!</Cit> (Tenter&ograve; la fortuna
            con Vostra Grazia!) e fu sconfitto. 45 cavalieri alleati furono
            uccisi e circa 400 altri cavalieri catturati. I restanti si
            dispersero nelle campagne circostanti e portarono la terribile
            notizia al campo di St. Leon. L&igrave; si misero in marcia per il
            ritorno in preda al panico, temendo la vendetta del conte palatino e
            dei suoi sudditi infuriati. L&apos;esercito palatino ottenne una
            vittoria decisiva, uccidendo 45 cavalieri e catturando 124 nobili e
            204 scudieri, perdendo 12 dei propri cavalieri. Tra i prigionieri vi
            erano tre capi nemici: il margravio Carlo I di Baden con 40 nobili e
            79 scudieri, il conte Ulrico di W&uuml;rttemberg con 45 nobili e 71
            scudieri, e il vescovo Giorgio di Metz con 39 nobili e 53 scudieri.
            Solo Ludovico di Zweibr&uuml;cken sfugg&igrave; alla cattura. Entro
            l&apos;anno seguente, i principi furono riscattati per ingenti somme
            e territori significativi.
            <Qt
              publication={PUBLICATIONS.SECKENHEIM}
              href="https://www.historisches-seckenheim.de/index.php/ortsgeschichte/123-schlacht-bei-seckenheim"
            />
          </p>
          <Link href="/images/Feldplan960.jpg" target="_blank">
            <Image
              src="/images/Feldplan960.jpg"
              width={734}
              height={960}
              alt="Piano della campagna militare del luglio 1462"
              className="fit"
            />
          </Link>
          <p>
            <br />
            La faida diocesana, tuttavia, non era ancora finita. Ulteriori
            combattimenti causarono molte vittime e devastazioni ovunque, e la
            stessa citt&agrave; di Magonza sub&igrave; gravi danni. Nella notte
            del <b>28 ottobre 1462</b>, Adolf von Nassau riusc&igrave; a
            penetrare in citt&agrave; con 500 uomini attraverso la Gautor grazie
            al tradimento di cittadini di Magonza, e dopo 12 ore di
            combattimenti di strada, prese il controllo. 400 persone persero la
            vita e gli uomini di Adolf saccheggiarono e incendiarono la
            citt&agrave;, compreso il monastero domenicano. Come
            &ldquo;punizione&rdquo; per aver sostenuto Diether, Adolf
            priv&ograve; la citt&agrave; dei suoi privilegi di libert&agrave; e
            con essi del suo status di citt&agrave; libera; la citt&agrave;
            pass&ograve; sotto l&apos;amministrazione di un Vicedominus nominato
            dall&apos;arcivescovo. Il giorno seguente, i cittadini furono
            convocati al Dietmarkt. Tutti gli 800 cittadini che si presentarono
            furono espulsi dalla citt&agrave;; circa 400 di loro furono
            riammessi poco dopo e autorizzati a rimanere a Magonza.
            <Qt
              publication={PUBLICATIONS.WIKI}
              href="https://de.wikipedia.org/wiki/Mainzer_Stiftsfehde"
            />
          </p>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Nemmeno questi successi dei Wittelsbach, tuttavia, posero fine alla
          guerra. Al contrario, divenne evidente il pesante onere sulle finanze
          bavaresi derivante dalla conduzione della guerra, principalmente
          attraverso il grande esercito mercenario. Le risorse del duca Ludovico
          il Ricco erano esaurite. Poco dopo il suo trionfo a Giengen, egli si
          vide dunque costretto a congedare la maggior parte dei suoi mercenari,
          il che cambi&ograve; ancora una volta la situazione militare.
          D&apos;ora in poi, la scena nella&nbsp;Germania meridionale fu
          caratterizzata da una incessante piccola guerra con alterni successi.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00165.html"
          />
        </p>
        <p>
          Inoltre, si tennero nuovamente incontri negoziali per risolvere
          finalmente i conflitti. Dopo il cessate il fuoco concluso alla fine di
          agosto 1462 a&nbsp;Norimberga, seguirono ulteriori ardui negoziati.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00166.html"
          />{' '}
          Solo un anno dopo, nel luglio 1463, si tenne un congresso di pace a
          Praga sotto la guida del re di Boemia Giorgio di Poděbrady, che nel
          frattempo si era riconciliato con&nbsp;l&apos;imperatore Federico III.
          Con questa iniziativa, il re utraquista sperava di scongiurare la
          scomunica minacciata da papa Pio II. Dopo complessi negoziati, fu
          concluso un accordo di pace composto da diversi trattati individuali
          il <b>22 e 23 agosto 1463</b>.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Prager_Frieden_(1463)"
          />{' '}
          La cosiddetta <i>Pace di Praga</i> non risolse tutte le questioni
          controverse, ma si rivel&ograve; cionondimeno duratura. Entrambe le
          parti dovettero fare concessioni. Mentre il margravio Alberto III
          Achille dovette abbandonare definitivamente i suoi piani per il
          dominio della Franconia, che aveva cercato di conseguire rafforzando
          il Landgericht di Norimberga, il duca Ludovico IX fu obbligato a
          evacuare i territori margraviali ancora occupati e a regolare tutte le
          richieste di risarcimento con il margravio. Ciononostante, egli
          riusc&igrave; a difendersi, il che nel suo caso pu&ograve; essere
          valutato come un successo. Un successo per il quale egli era
          principalmente debitore al suo forte esercito mercenario, che era in
          larga misura &ndash; probabilmente persino in maggioranza &ndash;
          composto da mercenari boemi.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00166.html"
          />
        </p>
      </Col>
    </Row>
  </>
)
