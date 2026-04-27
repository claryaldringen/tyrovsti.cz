import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const JobstDiEinsiedl = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="jobst-di-einsiedl" />
        <h4>Jobst von Einsiedl (circa 1420 – 1474){draft && <DraftBadge />}</h4>
        <h5>Famiglia e gioventù</h5>
        <p>
          Jobst nacque in una famiglia borghese nella piccola città di Einsiedl,
          l&apos;odierna Mnichov nel distretto di Cheb, presumibilmente intorno
          al 1420; la città apparteneva allora al monastero di Teplá.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 80" /> Con grande
          probabilità proveniva dalla famiglia dei Tullinger. In un documento
          datato <b>16 giugno 1346</b>, l&apos;abate di Teplá Beneda e
          l&apos;intero convento donano a Elisabetta e ai suoi fratelli Oldřich
          e Bohuslav, discendenti di Heinrich Tullinger, i beni ricaduti al
          monastero dopo la morte del giudice di Teplá Jan Puchelberger, in
          particolare le miniere di stagno tra il fiume Ouša e il torrente
          chiamato Goltwasser.
          <Qt publication={PUBLICATIONS.NOVOTNA} /> In un documento del{' '}
          <b>25 maggio 1397</b>, l&apos;abate di Teplá Bohuš e il servitore del
          monastero Bohuslav Tullinger di Mnichov si accordano sulle miniere di
          stagno presso Mnichov. Nel dispositivo entrambi gli emittenti
          stabiliscono che Bohuslav Tullinger detenga tutti i diritti sul
          villaggio di Mnichov e che gli spetti ogni terzo soldo (orig.
          „pfannig&ldquo;) del metallo estratto.
          <Qt publication={PUBLICATIONS.NOVOTNA} /> Se si tratti dello stesso
          Bohuslav menzionato nel primo documento non posso dirlo. Allo stesso
          modo non posso dedurre se si tratti del padre di Jobst, del nonno o se
          la relazione di parentela sia di altro tipo; tuttavia il suo segno
          araldico (tre piume) è noto anche dal successivo stemma di Jobst.{' '}
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 80" /> Aveva uno
          stretto legame con la città di Cheb e ci appare come parente delle
          stimate famiglie di Cheb degli Schmidel e dei Puchelberger, in quanto
          chiamava Jorg Schmidel suo fratello e Clement Puchelberger suo zio;
          Puchelberger fu in seguito borgomastro di Cheb.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 81" /> Jobst stesso
          afferma che, quando in seguito soggiornava a Cheb, alloggiava nella
          casa di suo fratello Jorg. La parentela tra i Tullinger e i
          Puchelberger è del resto suggerita anche dal documento sopra
          menzionato.
        </p>
        <p>
          Jobst poté ricevere la sua istruzione o presso la scuola di Cheb o,
          più probabilmente, nel monastero di Teplá. Proprio lì poté imparare a
          leggere e scrivere in ceco, tedesco e latino, cosa che lo rese uno dei
          pochi scrivani multilingui nella Boemia tardomedievale.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 81" />
        </p>
        <h5>Inizi della carriera</h5>
        <p>
          Grazie alla sua formazione, era particolarmente adatto a servire come
          segretario e scrivano, soprattutto durante l&apos;interregno (1439 –
          1453), quando i signori boemi conducevano la politica in modo
          indipendente. Gli scrivani che comprendevano entrambe le lingue del
          paese erano particolarmente raccomandati a quei signori boemi che non
          parlavano tedesco, benché non potessero farne a meno durante i loro
          frequenti contatti con le vicine regioni tedesche. Ad esempio, il
          signore Jan di Házmburk si scusò per la sua lettera alla città di Cheb
          scritta in ceco, affermando che al momento non aveva a disposizione il
          suo scrivano tedesco. In questa veste, Jobst appare effettivamente al
          servizio dei signori Aleš e Petr Holický di Šternberk, che
          all&apos;epoca possedevano la vicina Bečov nad Teplou.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=4"
          />
        </p>
        <p>
          Nel febbraio 1447, il duca Guglielmo di Sassonia si rivolse a Petr
          Holický di Šternberk per reclutare un esercito in Boemia per la guerra
          fratricida sassone (1446 – 1451). L&apos;esercito doveva radunarsi
          presso Cheb, e a Jobst furono affidate le questioni amministrative e
          organizzative. In una lettera datata 13 febbraio 1447, il duca
          Guglielmo scrisse:
          <Cit>
            Wir bedorffen wol eins endlichen diners, der dutschs und behemisch
            kan, uff den wir glauben gesetzen (...), dorzu uns Jobst, uwer
            diener, wol fuglich were.
          </Cit>{' '}
          (Abbiamo assolutamente bisogno di un servitore che sappia parlare
          tedesco e ceco, di cui possiamo fidarci (...), per questo Jobst, il
          vostro servitore, sarebbe probabilmente adatto.)
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00258.html?context=%22Jobst+von+Einsiedl%22&leftTab=PER_ent"
          />
        </p>
        <p>
          Questi mercenari boemi, a causa di una tregua sopravvenuta, non
          poterono partecipare alla guerra fratricida sassone e passarono senza
          soluzione di continuità al servizio dell&apos;arcivescovo di Colonia,
          Dietrich II, nella faida di Soest. Poiché Petr Holický di Šternberk
          era il comandante in capo dell&apos;intero corpo boemo, si presume che
          Jobst abbia partecipato all&apos;intera campagna di Soest come braccio
          destro di Petr.
        </p>
        <p>
          Il successivo importante coinvolgimento di Jobst avvenne nel 1450,
          quando Giorgio di Poděbrady, dopo aver sconfitto l&apos;Unione di
          Strakonice nella battaglia di Mýto il <b>4 giugno 1450</b>
          <Qt
            publication={PUBLICATIONS.MACEK}
            href="https://www.vhu.cz/exhibit/macek-josef-jiri-z-podebrad/"
          />{' '}
          condusse la sua campagna contro i loro alleati, in particolare il duca
          Federico di Sassonia, con la conseguente conquista della città di
          Gera. Il giorno seguente, il <b>23 ottobre 1450</b> (alcune fonti
          indicano il <b>16 ottobre 1450</b>), fu conclusa una tregua. Jobst von
          Einsiedl, che partecipò a questa campagna nel seguito del signore Petr
          Holický di Šternberk, scrisse la sua lettera il <b>25 ottobre 1450</b>{' '}
          dal campo presso Salza, vicino a Plavno, la prima lettera conservata
          alla città di Cheb.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=5"
          />{' '}
          Cheb era minacciata dall&apos;esercito boemo di ritorno, poiché nel
          marzo 1450 il consiglio di Cheb aveva rifiutato di ammettere in città
          Giorgio di Poděbrady e i suoi partigiani per i negoziati con i
          principi tedeschi, che dovettero tenersi a Wunsiedel. Nella lettera,
          Jobst avvertì i cittadini e li esortò a cercare un accordo. La
          mediazione fu intrapresa da Aleš e Petr Holický di Šternberk, che, con
          il loro segretario Jobst von Einsiedl, garantirono il salvacondotto
          agli inviati di Cheb. I negoziati si tennero al castello di Skalná
          (Vildštejn). Tuttavia, lungo il cammino verso l&apos;incontro, i
          diplomatici di Cheb, che portavano doni per Giorgio di Poděbrady,
          furono attaccati e derubati. Anche Jobst von Einsiedl fu aggredito, ma
          salvò la vita promettendo di non rivelare l&apos;identità degli
          aggressori.
          <Qt publication={PUBLICATIONS.JANSKY} />
        </p>
        <p>
          In seguito ai negoziati a Vildštejn, la città alla fine si riscattò
          con 1000 fiorini d&apos;oro:{' '}
          <Cit>
            Item wir haben geben vnd ausgerichthern Girziken tousent guldein,
            die jn der rat zu pranttschaczgeben musst.
          </Cit>{' '}
          (Abbiamo dato al signore Giorgio 1000 fiorini d&apos;oro, che devono
          essere dati dal consiglio come riscatto.)
          <br />
          Petr di Šternberk ricevette 200 fiorini d&apos;oro per aver mediato
          l&apos;accordo, e anche altri mediatori ricevettero ricompense:{' '}
          <Cit>
            Geben dem Endresen I schock XXIII gr. zerung fur Hans von Kocza vnd
            fur den Jobst des von Sternbergs schreiber, als er zwischen eyn rat
            vnd den Behmen teidigat.
          </Cit>{' '}
          (Si diano al suddetto 1 sexagena e 23 grossi a Hans di Kotzau e a
          Jobst, lo scrivano degli Šternberk, che partecipò ai negoziati tra il
          consiglio e i boemi.)
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=5"
          />
        </p>
        <p>
          Nel 1452 Jobst compare in relazione alle dispute tra la borghese
          norimberghese Margareta Vogel e Aleš Holický di Šternberk, quando
          scrisse ai norimberghesi una lettera di ringraziamento per la
          risoluzione della questione. Federico III aveva apparentemente
          sollecitato la fine della disputa già dall&apos;inizio dell&apos;anno
          precedente.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 82" /> Nella
          cosiddetta Borschengrüner Fehde (<i>faida di Borschengrün</i>), la
          guerra tra Cheb e i balivi di Plavno negli anni 1452–1454, si
          impegnarono in modo significativo alcuni rappresentanti della nobiltà
          boema, compresi gli Holický di Šternberk. Ad Aleš Holický dispiaceva
          che Federico di Sassonia si fosse proposto come mediatore tra Cheb e i
          Plaveniani; dopo l&apos;esperienza della guerra di Soest, la
          maggioranza dei nobili boemi lo considerava un nemico del paese. Aleš
          esercitava anche pressioni su Mates Šlik per convincere Cheb a
          smettere di combattere contro i Plaveniani. Durante questo conflitto
          Aleš si servì spesso di Jobst come suo negoziatore con gli Šlik e con
          Cheb. Al servizio degli Šternberk Jobst rimase fino alla fine del 1453
          o all&apos;inizio del 1454, dopodiché entrò al servizio di Giorgio di
          Poděbrady.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 82" />
        </p>
        <h5>Al servizio di Giorgio di Poděbrady</h5>
        <p>
          Jobst von Einsiedl rimase con i signori di Šternberk fino alla fine
          del 1453 o forse l&apos;inizio del 1454, poiché il{' '}
          <b>24 giugno 1453</b> Jobst scriveva ancora sotto il comando del
          signore Aleš di Šternberk. Entrò poi al servizio del governatore
          Giorgio di Poděbrady, forse motivato da legami familiari con la
          famiglia Šternberk. Il <b>28 ottobre 1454</b>, in qualità di
          segretario di Giorgio, indirizzò allo scrivano di Görlitz una lettera
          che annunciava l&apos;imminente arrivo del governatore con il re
          Ladislao e sollecitava la prenotazione degli alloggi necessari. Di
          conseguenza, il rescritto di Giorgio al borgomastro e al consiglio di
          Cheb, datato <b>30 gennaio 1455</b> a Breslavia, è già redatto da
          Jobst.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=6"
          />
        </p>
        <p>
          In questo periodo, Jobst von Einsiedl ricevette uno stemma dal re
          Ladislao il Postumo, che fu nobilitato dall&apos;imperatore Federico
          III il <b>23 novembre 1455</b>.
          <Qt publication={PUBLICATIONS.PELANT} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="polepseni.jpg"
        width={1920}
        height={1252}
        title="Documento originale in latino del miglioramento dello stemma di Jobst, redatto il 23 novembre 1455 a Graz."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Al servizio del governatore, si aprì a Jobst un ampio e significativo
          campo d&apos;attività. Poiché Giorgio non parlava affatto tedesco, si
          avvaleva del bilinguismo di Jobst soprattutto nei rapporti con le
          città prevalentemente di lingua tedesca. Sebbene lo stesso Giorgio
          inviasse a Cheb, salvo rare eccezioni, lettere in ceco, dei tempi
          successivi si sono conservate esclusivamente lettere in tedesco,
          dietro le quali si può intuire l&apos;attività del suo nuovo
          servitore.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 83" /> Giorgio teneva
          in alta considerazione i servizi di Jobst, ed è quindi probabile che
          presso il re Ladislao avesse intercesso per la concessione di un feudo
          — il villaggio di Jeschedorf, oggi Jaśkowice Legnickie — nel gennaio
          1455, che Jobst possedeva insieme a Hynec Dehraw, oppure che fosse
          dietro la nobilitazione dello stemma di Jobst da parte di Federico III
          il <b>23 novembre</b> dello stesso anno.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 83" /> Come suo
          segretario segreto gli era letteralmente indispensabile. Pertanto, se
          non era assente per qualche missione, era sempre al fianco del
          governatore del paese, accompagnandolo nelle sue principali campagne
          in Moravia, Slesia e Austria, spesso dedicandosi al commercio, come a
          Brno, e informando i suoi amici di Cheb con evidente soddisfazione sui
          successi del governatore. Sebbene cattolico e incondizionatamente
          devoto alla Chiesa romana, mantenne una lealtà incrollabile verso il
          suo signore utraquista in ogni momento — una rarità per l&apos;epoca —
          essendo capace di separare giustamente le convinzioni religiose dalla
          fedeltà al servizio. Pertanto, godeva anche della piena fiducia e del
          favore di Giorgio e gli venivano spesso affidati compiti che
          richiedevano particolare cura e affidabilità.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=7"
          />
        </p>
        <p>
          Jobst accompagnò Giorgio anche in lunghi viaggi, come ad esempio in
          Ungheria nel 1456, di cui non esitò a informare i suoi parenti di
          Cheb.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 83" />
        </p>

        <p>
          Dopo la morte del re Ladislao il Postumo il <b>23 novembre 1457</b>,
          iniziarono a diffondersi voci secondo cui il giovane re era stato
          avvelenato da Giorgio di Poděbrady. All&apos;assemblea di Vienna il{' '}
          <b>21 gennaio 1458</b>, Jobst von Einsiedl si difese con vigore da
          queste accuse. Jobst argomentò che non era mai accaduto nella storia
          che i boemi avessero avvelenato un re. Secondo lui, i boemi erano
          sudditi leali del re e si erano sottomessi volontariamente a lui in
          tutto ciò che i re Sigismondo e Alberto avevano cercato di conquistare
          con la forza (restituzione dei beni regi, tributi, aiuti contro i
          turchi). Alla fine, sulla base degli argomenti di Jobst,
          l&apos;assemblea riconobbe che il re era deceduto per volontà di Dio.
          <Qt publication={PUBLICATIONS.PAPAJIK} note="page 224" />
        </p>
        <p>
          Come già menzionato, a Jobst venivano spesso affidati compiti che
          richiedevano particolare cura e affidabilità. Una tale situazione si
          presentò subito dopo l&apos;elezione di Giorgio a re. Alla grande
          assemblea elettorale di Praga il <b>1° marzo 1458</b>, i
          rappresentanti del duca Guglielmo di Sassonia fecero riferimento a
          vecchi documenti conservati a Karlštejn per meglio comprovare le
          pretese di sua moglie alla successione boema. Il governatore inviò
          immediatamente il suo ciambellano e Jobst von Einsiedl, il suo
          scrivano, con un adeguato seguito a Karlštejn per recuperare i
          documenti pertinenti, che furono presentati agli stati riuniti il
          giorno seguente. Quando Giorgio di Poděbrady fu proclamato re quello
          stesso giorno, Jobst accolse questo importante evento con gioia
          manifesta e lo comunicò immediatamente a Cheb, dove la notizia fu
          ricevuta con giubilo (è conservata solo la risposta di Cheb). Poiché
          Giorgio si era già reso celebre negli anni precedenti per i suoi
          zelanti sforzi di mantenere la pace, la sua elezione era
          particolarmente auspicabile per una città come Cheb, situata ai
          confini di varie regioni e dedita a vivaci commerci. Inoltre, Jobst
          assicurò ai cittadini di Cheb il favore del re e li esortò a non
          prestare attenzione alle calunnie e alle minacce dei vicini, ma a
          rimanere fermi e saldi. Per Jobst stesso, l&apos;elezione di Giorgio
          ebbe un&apos;altra conseguenza: il nuovo re lo elevò allo status di
          cavaliere quell&apos;estate, come testimoniano le congratulazioni
          degli abitanti di Cheb il <b>29 luglio 1458</b>
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=7"
          />{' '}
          ovvero un transunto della bolla di papa Pio II del marzo 1459, che
          nomina Jobst come <Cit>Jodocus de Eynsedil, milites Pragensis</Cit>.
          <Qt publication={PUBLICATIONS.BOUKAL1} /> Gli abitanti di Cheb furono
          informati dell&apos;elezione in via non ufficiale già da una lettera
          di Jobst; ufficialmente vennero avvisati da un grande documento con
          numerosi sigilli, il cui autore potrebbe essere stato anch&apos;esso
          Jobst.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 84" />
        </p>
        <p>
          Durante il viaggio d&apos;omaggio di Giorgio di Poděbrady, Jobst
          accompagnò il suo re, come testimoniano i suoi resoconti inviati a
          Cheb. Un ruolo particolare lo svolse soprattutto a Brno, che aveva
          chiuso le proprie porte prima dell&apos;arrivo di Giorgio, e Jobst fu
          inviato come negoziatore con i rappresentanti della città.
          Nell&apos;autunno del 1458 Jobst accompagnò Giorgio durante la sua
          campagna in Austria.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 84" />
        </p>
        <p>
          Insieme all&apos;elevazione allo status cavalleresco, ricevette
          un&apos;eredità del valore di 500 sexagene di grossi nella tenuta di
          Makotrasy. In quel periodo acquisì anche i villaggi di Skryje e Tytry.
          Tuttavia, per consentire al re di ripagare il suo debito verso il
          burgravio di Praga Zdeněk di Šternberk, Jobst restituì la suddetta
          eredità e prestò inoltre 500 sexagene di grossi in contanti, per i
          quali il re gli registrò il <b>2 luglio 1460</b> il castello di Týřov
          con la città di Kožlany, i villaggi di Mlečice, Chmelištná, Zavidov,
          Týřovice, Broumy, Kouřimec, Újezdec, Hudlice con tutti i benefici e le
          tasse di Novosedly. Fu stabilito che Jobst non dovesse essere
          rimborsato fino alla sua morte, e dopo la sua morte solo il re stesso
          poteva riacquistare le proprietà per 600 sexagene di grossi. Secondo
          la disposizione, il castello di Týřov doveva rimanere aperto in ogni
          momento e se il re avesse dovuto spendervi a causa di guerre, ciò non
          sarebbe stato a danno di Jobst. Con le foreste, né Jobst né i suoi
          eredi avevano nulla a che fare né potevano vendere legname, ma solo
          prenderlo senza impedimento per il combustibile e le riparazioni del
          castello. Nella caccia di piccola selvaggina e uccelli, Jobst era
          libero, mentre gli era consentito cacciare 3 cervi e 10 caprioli
          all&apos;anno con la conoscenza del burgravio di Křivoklát, che era
          obbligato a prestargli cani e cuccioli. Poiché il castello necessitava
          di riparazioni alle mura, ai sottofondi e agli edifici, il re aggiunse
          100 sexagene di grossi per le riparazioni a favore di Jobst. Se il
          castello fosse stato conquistato da altri, i re erano obbligati ad
          aiutarlo a riconquistarlo o a risarcirlo entro due anni.
          <Qt publication={PUBLICATIONS.KOCKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="tyrov.jpg"
        width={797}
        height={600}
        title="Rovine di Týřov, incisione di Václav A. Berger (1800) da un disegno di F. K. Wolf (1797)"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Come segretario reale, Jobst ebbe l&apos;opportunità di rendere molti
          servizi alla città di Cheb attraverso consigli o intercessioni presso
          il re. Ciò risultava evidente dai rescritti regi a Cheb, molti dei
          quali sono contrassegnati{' '}
          <Cit>ad relationem Jodoci de Eynsedel secr.</Cit> La città, a causa
          della sua posizione esposta, era frequentemente accusata da un lato o
          dall&apos;altro. Aveva frequenti dispute con altri territori, e anche
          con i propri sudditi che volevano sciogliere i loro vincoli giuridici
          con la città, nonché problemi con l&apos;abate di Waldsassen sulla
          giurisdizione di diversi villaggi, tra cui Albenreuth (oggi Mýtina,
          parte del comune di Lipová), che erano abitati sia da sudditi
          monastici che cittadini. A Jobst veniva spesso chiesta la sua
          intercessione. Era disposto a fornire informazioni, a meno che non si
          trattasse di segreti ufficiali, che manteneva sempre rigorosamente.
          Tuttavia, agiva sempre con grande cautela, e sebbene ciò sia
          anch&apos; esso encomiabile, sorprende spiacevolmente il lettore
          quando, ad esempio, nel mezzo di una lettera interessante, si legge:
          <Cit>
            Sebbene voi stessi vogliate apprendere il motivo di questa
            questione, potete inviare uno degli amici del consiglio a me noto, e
            apprenderete l&apos;intera faccenda a fondo.
          </Cit>
          Al contrario, la città non lesinava in segni di riconoscenza. In varie
          occasioni, faceva al suo amico un dono in denaro, come testimonia il
          libro delle spese di Cheb. Ad esempio a Natale del 1458:
          <Cit>
            Item so haben wir desmals durch Paul Ruduschen hern Jobst von
            Aynsidel awszgericht XII guldein, damit jn der rat vereret.
          </Cit>{' '}
          (Così noi allora, tramite Pavel Ruduschen, consegnammo al signore
          Jobst von Einsiedl XII fiorini d&apos;oro, per onorarlo.) E anche
          l&apos;anno seguente:{' '}
          <Cit>
            Item geben hern Jobsten von Aynsidel X gulde. r. damit jn unser hern
            verereten, als er jn das wortt redt ken vnsern hern konig von des
            abtes von Waltsassen wegen.
          </Cit>{' '}
          (Inoltre furono dati al signore Jobst von Einsiedl dieci fiorini
          d&apos;oro, affinché i nostri signori potessero onorarlo, poiché egli
          parlò a nome del nostro signore il re riguardo alle questioni con
          l&apos;abate di Waldsassen.) E quando il consiglio cittadino omaggiò
          il re con diversi barili del popolare idromele di Cheb, una botte andò
          anche a Jobst con l&apos;augurio che{' '}
          <Cit>
            es mit seiner Gemalin in Fröhlichkeit und Gesundheit auszutrinken
          </Cit>{' '}
          (lo possa bere con la sua consorte in allegria e salute).
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=8"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Jobst fu attivamente coinvolto nell&apos;organizzazione
          dell&apos;assemblea di Cheb nella primavera del 1459, volta a
          risolvere le dispute tra Boemia e Sassonia attraverso la mediazione
          del politicamente astuto margravio Alberto di Brandeburgo. Jobst
          giunse a Cheb per Pasqua, il <b>25 marzo 1459</b>, per annunciare
          l&apos;arrivo del re l&apos;
          <b>8 aprile 1459</b>, e informò il consiglio su tutti i dettagli, i
          requisiti e le altre questioni relative alla visita. Ciò diede alla
          città ampio tempo per prepararsi in anticipo. Il re Giorgio giunse a
          Cheb il <b>7 aprile 1459</b>, con la moglie Johana di Rožmitál, il
          figlio Viktorin e la figlia Zdena, accompagnato da un grande seguito
          che comprendeva numerosi servitori e importanti rappresentanti della
          nobiltà boema e morava. Il suo corteo includeva 43 nobili e 16
          cavalieri, per un totale di circa 900 cavalieri e 100 carri, tra cui
          diverse figure di spicco della nobiltà boema.
          <Qt publication={PUBLICATIONS.POSPISIL} />
        </p>
      </Col>
      <ImageWithTitle
        src="spalicek.jpg"
        width={516}
        height={568}
        title="La piazza di Cheb in una raffigurazione del 1472"
      />
    </Row>
    <Row>
      <Col>
        <p>
          All&apos;ingresso in città, gli abitanti prepararono
          un&apos;accoglienza cerimoniale per il re e lo scortarono, con un
          baldacchino sopra la testa, fino a una casa direttamente sulla piazza,
          dove fu alloggiato. Il proprietario della casa sulla piazza dove il re
          fu ospitato era il consigliere Kašpar Junker, che era una delle figure
          più eminenti del patriziato cittadino dell&apos;epoca ed era stato
          eletto borgomastro più volte consecutivamente. Dato che Giorgio di
          Poděbrady fu alloggiato nella sua casa, si può presumere che questa
          fosse tra le meglio attrezzate della città.
          <Qt publication={PUBLICATIONS.POSPISIL} />
        </p>

        <p>
          L&apos;
          <b>8 aprile 1459</b>, giunsero a Cheb anche i rappresentanti della
          nobiltà imperiale: Alberto di Brandeburgo arrivò un giorno dopo
          Giorgio, dunque l&apos;8 aprile, e l&apos;elettore Federico del
          Palatinato il 9 aprile. Erano accompagnati da altri nobili signori e
          vari consiglieri. (Tra i consiglieri va menzionato inequivocabilmente
          il diplomatico di fama internazionale Martin Mayer.) In seguito
          giunsero anche quattro duchi dalla Sassonia, ovvero l&apos;elettore
          sassone-misniense Federico con entrambi i figli, Ernesto e Alberto, e
          suo fratello Guglielmo di Sassonia. Insieme a loro giunsero altri 13
          conti imperiali con le rispettive consorti. Inoltre arrivarono il duca
          bavarese Ottone, l&apos;arcivescovo di Magdeburgo, i consiglieri del
          duca Ludovico di Landshut, gli inviati del vescovo di Würzburg, i
          consiglieri del duca di Monaco Alberto e i consiglieri del duca
          austriaco Alberto. Ciascuno di loro giunse con un seguito molto
          numeroso, composto da decine fino a centinaia di membri.
          <Qt publication={PUBLICATIONS.POSPISIL} />
        </p>
        <p>
          I negoziati, che iniziarono ufficialmente il <b>10 aprile 1459</b>
          <Qt publication={PUBLICATIONS.POSPISIL} />, videro Jobst profondamente
          coinvolto, poiché incontrava spesso il margravio Alberto di
          Brandeburgo su mandato e direttiva del re. Trattò con il margravio il{' '}
          <b>9 aprile 1459</b>, a tarda sera, e in quell&apos;occasione
          caldeggiò con fervore un accordo con la Sassonia, sostenendo che se la
          questione fosse stata deferita all&apos;imperatore o agli elettori, la
          fine sarebbe stata <Cit>nowhere in sight</Cit> (irraggiungibile). Il
          giorno seguente, quando il margravio si presentò con i consiglieri
          sassoni alla residenza del re nella casa di Kašpar Junker per
          discutere ulteriormente la questione, Jobst von Einsiedl fungeva da
          interprete. Quando i negoziati si conclusero e stavano lasciando Cheb,
          ricevette dalla città un dono di 100 sexagene di grossi per il re:{' '}
          <Cit>
            Item wir haben awszgericht vnserm hern konygk au newen groschen 1
            <sup>e</sup>
            schok gr., domit jn der rat vererat - hub auf her Jobst von Aynsidel
          </Cit>{' '}
          (Così abbiamo di nuovo presentato al nostro signore il re 100 sexagene
          di grossi, come segno di rispetto da parte del consiglio — consegnati
          al signore Jobst von Einsiedl).
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=9"
          />
        </p>

        <div className="anchor" id="1" />
        <p>
          Jobst ebbe probabilmente un ruolo simile all&apos;assemblea tenutasi
          sempre a Cheb alla Candelora del 1461. Ancora una volta, a Jobst fu
          probabilmente assegnato un ruolo importante, come testimonia la sua
          lettera del <b>14 dicembre 1460</b> al borgomastro e al consiglio di
          Cheb, nella quale chiede:
          <Cit>
            di procurargli un alloggio presso suo fratello (Jorg Smidel), poiché
            necessita di un luogo confortevole per riposare, soprattutto perché
            non potrà dormire molto, avendo molto lavoro e dovendo restare
            vicino al re.
          </Cit>
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=9"
          />
          Durante questa assemblea, fornì anche servizi legali nella disputa tra
          Cheb e l&apos;abate di Waldsassen per Albenreuth. Per questo e altri
          servizi, gli furono dati, oltre a dieci fiorini d&apos;oro, un
          archibugio e quattro cannoni a mano, tutti fabbricati a Norimberga.
          <Qt publication={PUBLICATIONS.JANSKY} />
        </p>
        <p>
          Alla fine di febbraio 1461 Jobst fu inviato come accompagnatore di
          Zbyněk Zajíc di Hazmburk alla dieta imperiale a Norimberga.
          Nell&apos;estate dello stesso anno partì come membro di
          un&apos;ambasceria boema a Vienna. Per i meriti acquisiti nel 1461 a
          favore della città di Görlitz, ricevette dagli abitanti del luogo 6
          sexagene e 21 grossi.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 87" />{' '}
          All&apos;inizio di settembre 1461, presso Laxenburg, Zbyněk Zajíc di
          Hazmburk, Vilém di Rýzmberk, Burian Trčka di Lípa e Jobst di Einsiedl
          conclusero una tregua con Alberto d&apos;Austria fino al giugno 1462.
          Jobst partecipò poi a ulteriori trattative a Leoben tra la fine di
          settembre e l&apos;inizio di ottobre, da dove proseguì per Wiener
          Neustadt presso l&apos;imperatrice Eleonora, per concordarvi un
          incontro tra Giorgio e Federico III.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 87" />
        </p>
        <p>
          Nel novembre 1462 Jobst comparve con l&apos;esercito di Giorgio presso
          Vienna, dove i borghesi locali si erano sollevati contro Federico III
          e avevano chiamato in aiuto i nemici di Federico — compreso Alberto
          d&apos;Austria. Federico, assediato nel castello di Vienna, chiese a
          Giorgio di rompere l&apos;assedio; tuttavia l&apos;attacco boemo a
          Wiener Neustadt non ebbe successo, cosicché poco dopo Federico si
          arrese ai suoi assedianti e concluse con loro un trattato di pace a
          condizioni svantaggiose.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 87-88" />
        </p>
        <p>
          Poiché l&apos;imperatore Federico III elevò i figli di Giorgio,
          Viktorin, Jindřich e Hynek, allo status di principi imperiali il{' '}
          <b>7 dicembre 1462</b>, a Korneuburg, Jobst, Zdeněk di Šternberk e
          Prokop di Rabštejn furono inviati dall&apos;imperatore per riportare i
          mantelli e i cappelli principeschi, che furono formalmente presentati
          alla Corte Reale di Praga il <b>21 febbraio 1463</b>.
          <Qt publication={PUBLICATIONS.FELCMAN} />
        </p>
        <p>
          Nel marzo 1463, su incarico di Giorgio di Poděbrady, Jobst si impegnò
          nella questione dell&apos;ammissione degli ebrei Smahel, Gumprecht,
          Joseph e Sara con i loro figli a Cheb per sei anni in cambio di un
          canone annuo di 150 fiorini renani. In questa faccenda Jobst trattò
          con i borghesi di Cheb Kašpar Junker, Pavel Ruduš e Franz Scheller.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 88" />{' '}
          All&apos;inizio dell&apos;estate 1463 Giorgio incaricò Jobst di
          trattative con Hilario di Litoměřice. Il loro risultato fu, l&apos;
          <b>11 giugno</b>, la vidimazione del precedente accordo di Giorgio con
          la principessa Edvige di Legnica riguardante Legnica.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 88" /> Nell&apos;
          agosto 1463 Giorgio ammonì per iscritto le città regie alla perenne
          fedeltà. L&apos;autore di questo testo, tuttavia, potrebbe essere
          stato, come argomenta Urbánek, proprio Jobst.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 88" />
        </p>
        <p>
          Come risultato di questa attività diplomatica, Jobst von Einsiedl
          acquisì una considerevole influenza e mantenne una corrispondenza
          scritta con principi stranieri, in particolare con il margravio
          Alberto di Brandeburgo. Segnatamente, nel 1463, il margravio inviò a
          Jobst una lettera confidenziale informandolo degli sforzi del legato
          papale contro il re. <Cit>Dast wollest</Cit> (Voi potete), prosegue la
          lettera,{' '}
          <Cit>
            in grosser geheim vnnsern herrn dem konig sagen, dann es warlich
            also ist
          </Cit>{' '}
          (dire al nostro signore il re in grande segretezza, poiché è davvero
          così). Jobst trasmetteva anche ripetutamente notizie dalla corte boema
          al margravio (si conservano una lettera del <b>4 luglio 1464</b> e tre
          lettere del 1469). L&apos;influenza del segretario reale si
          manifestava in varie occasioni. Da lontano si cercava la sua
          intercessione, come all&apos;inizio del 1463 da parte della città di
          Zgorzelec. Nel 1464, Jobst, insieme al cancelliere Prokop di Rabštejn
          e Enrico, signore di Gera, mediò una disputa tra Enrico di Plavna e
          Günter di Bünau per ordine del re. Nel frattempo, quando
          un&apos;associazione nobiliare di nuova costituzione sollevò
          nuovamente la questione di chi dovesse esattamente custodire le
          insegne imperiali, diversi signori e cavalieri, tra cui Jobst von
          Einsiedl di Týřov, furono incaricati di trasferire i documenti di
          stato conservati a Karlštejn a Praga e della loro supervisione. Uno
          dei sintomi delle dispute sempre più aspre in campo religioso e
          politico fu la confusione religiosa che portò all&apos;emergere di
          molte sette. Jobst ne aveva una in mente nella sua interessante
          lettera del <b>17 settembre 1466</b>. Questa era legata ai nomi di
          Liwin e Janek di Wirsberg, predicatori apocalittici francescani attivi
          nella regione di Cheb e influenzati dalle prediche di Giovanni da
          Capistrano e dalla predicazione di Jan Rokycana a Cheb nel 1451.
          Temendo un interdetto e anche perché il re Giorgio si era pronunciato
          contro gli insegnamenti dei Wirsberg, il consiglio cittadino bandì i
          Wirsberg dalla città. Jobst appare nella sua lettera come un fervente
          cattolico e dalle sue interessanti espressioni riconosciamo un laico
          dogmatizzante, come ve ne erano molti all&apos;epoca, specialmente in
          Boemia. Prendeva molto a cuore il declino della fede e lo faceva
          culminare in un lamento:{' '}
          <Cit>
            das die werlt so falscher list ime mer ist, vnd nicht ansicht vnd
            betracht den gemein rechten cristen glawben
          </Cit>{' '}
          (che il mondo va sempre peggio e la vera fede non è generalmente
          osservata) — un lamento condiviso dalle anime contemplative del suo
          tempo. Tuttavia, gli eventi si succedettero poi in una sequenza
          inarrestabile, facendo estinguere la stella calante di Giorgio. La
          maledizione che lo colpì inghiottì anche i suoi fedeli, e intere
          regioni gemettero sotto il peso dell&apos;interdetto. Persino la città
          di Cheb, che aveva mantenuto una lodevole lealtà verso il suo re
          (avendo giurato fedeltà il <b>4 settembre 1461</b>), fu decisamente
          influenzata da ragioni politiche. Dal 1315, la città di Cheb e il suo
          territorio erano proprietà in pegno della corona di Boemia. Facendo
          affidamento sui propri privilegi, che delineavano un favorevole status
          speciale, si teneva in disparte da tutti i movimenti in Boemia e
          giurava alleanza e omaggio solo al re incoronato. Rendere omaggio a un
          re come Mattia, che mancava di una corona, avrebbe potuto facilmente
          creare un pericoloso precedente. Pertanto, la città, nonostante le
          ripetute ammonizioni, rifiutò l&apos;omaggio al re usurpatore e
          preferì che le fosse dichiarato l&apos;interdetto. Che Jobst non
          vacillasse è facilmente comprensibile dopo tutto ciò che è stato
          detto. Come uomo di coscienza e di carattere, mantenne la lealtà verso
          il suo re senza violare minimamente l&apos;umiliante obbedienza alla
          chiesa punitrice. Sebbene le sue labbra non pronunciassero una parola
          di rimprovero, dovette sopportare tutte le difficoltà; come cattolico,
          aveva gli utraquisti come nemici e come sostenitore del re
          scomunicato, i propri sovrani, dalla cui comunità la chiesa lo aveva
          escluso. I suoi possedimenti furono devastati, i villaggi dei suoi
          sudditi incendiati e distrutti (egli quantificò le sue perdite in 300
          sexagene di grossi). Il re Giorgio riconobbe il danno e nel 1466 gli
          accreditò 100 sexagene di grossi per la costruzione di stagni e gli
          concesse la grazia che suo figlio Jindřich non potesse essere
          riscattato da Týřov fino alla sua morte. Di fronte a questa
          devastazione, Jobst combatté una dura battaglia con sé stesso, poiché
          coscienza e fede, comandamenti ecclesiastici e lealtà giurata erano in
          costante conflitto: la feroce battaglia che agitava l&apos;intera
          epoca si riflette nel petto di quest&apos;uomo, che aderì
          risolutamente a ciò che nella sua anima semplice riconosceva come
          giusto e buono. Alla fine, scelse l&apos;obbedienza sofferente, perché
          si trattava della fede, che non voleva indebolire con la resistenza —{' '}
          <Cit>nicht schwächen helfen</Cit> (contribuire a indebolire). Così,
          condivise lo stesso destino della città alleata di Cheb, che cercò di
          consolare e rafforzare nell&apos;obbedienza. Solo quando vide che i
          suoi avversari si curavano meno della fede che del saccheggio, impugnò
          la spada per assicurare la pace.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=12"
          />
        </p>

        <p>
          Dopo la morte del re Giorgio di Poděbrady il <b>22 marzo 1471</b>,
          all&apos;inizio di maggio 1471, Jobst si impegnò con successo nella
          composizione di una disputa tra Cheb e il più alto burgravio di Praga,
          Jan Jenc di Janovice a Petršpurk. Il signore di Janovice aveva del
          resto molte altre preoccupazioni che non quella di combattere contro
          Cheb, dato che era più tormentato dalla lotta con il presidio di
          Ostromeč tenuto dagli Šternberk. Nel corso dello stesso anno Jobst
          cercò inoltre di aiutare i borghesi di Cheb nelle trattative di pace
          con Vilém di Volfštejn e Beneš di Kolovrat, ma senza risultati di
          rilievo.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 90" /> Dopo
          l&apos;ascesa al trono di Vladislao II Jagellone il{' '}
          <b>27 maggio 1471</b>, Jobst rimase nella carica di segretario.
          <Qt publication={PUBLICATIONS.JANSKY} />
        </p>
        <p>
          Nel 1472, Jobst ottenne dal re Vladislao gli stessi diritti comunali
          per Kožlany di cui godeva Rakovník, compreso uno stemma e il permesso
          di costruire un birrificio a Kožlany. Dal giugno 1472, discusse anche
          una controversia giudiziaria tra sé stesso e Friedrich di Šumburk.
          Jobst accusò i servitori di Friedrich di Šumburk di aver rubato le sue
          mucche, successivamente ritrovate{' '}
          <Cit>na jeho páně Šumburkuov zámek</Cit> (nel castello del suo signore
          Šumburk). Se Šumburk non si fosse presentato in tribunale contro
          Jobst, avrebbe dovuto risarcirlo per le mucche rubate.
          <Qt publication={PUBLICATIONS.KOCKA} />
        </p>
        <p>
          Continuò a servire gli abitanti di Cheb come loro informatore sugli
          eventi del regno. Dalla fine del 1464 alla primavera del 1465, ad
          esempio, si occupò del caso del bestiame confiscato, che era stato
          dichiarato in modo improprio e che il nobile Jenec di Janovice a
          Petršpurk aveva sottratto al borghese di Cheb Jobst Lochner.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 88" /> Tra le
          missioni significative cui Jobst partecipò al servizio di Vladislao vi
          furono ad esempio i negoziati con Federico III negli anni 1473–1474,
          ai quali partecipò insieme a Burian II di Gutštejn e Beneš Libštejnský
          di Kolovrat. I negoziati, tenutisi a Norimberga e ad Augusta, furono
          preceduti da diversi altri incontri con Alberto di Brandeburgo, il cui
          principale risultato fu il riconoscimento di Vladislao come legittimo
          re di Boemia. Si giunse inoltre a un accordo su operazioni militari in
          Austria allo scopo di combattere contro il Corvino e la nobiltà
          austriaca ribelle. Nel luglio 1474 Jobst è attestato come assessore
          del tribunale camerale.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 90" />
          <Qt publication={PUBLICATIONS.JANSKY} />
        </p>
        <p>
          Nel 1473, il re Vladislao concesse a Jobst il diritto di manomorta
          sulla tenuta di Hlince, e quello stesso anno confermò tutti i
          privilegi concessigli dal re Giorgio, e in aggiunta gli permise di
          uccidere fino a quattro cervi o cerve nelle foreste e gli stanziò
          specificamente 50 sexagene di grossi per le riparazioni del castello.
          Tuttavia, Jobst morì l&apos;anno seguente. L&apos;
          <b>11 luglio 1474</b>, era ancora presente al tribunale camerale, ma
          nel 1476 non era più in vita, come annotato in una lettera del{' '}
          <b>17 aprile 1476</b>:{' '}
          <Cit>Wie etwen herre Jobst vom Eynsidel, demegot gnade</Cit> (Che Dio
          abbia pietà del signore Jobst von Einsiedl).
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=12"
          />
          <Qt publication={PUBLICATIONS.KOCKA} /> Jobst lasciò un testamento che
          fu iscritto nelle tavole del paese. La sua formulazione purtroppo non
          ci è pervenuta; sappiamo tuttavia che fu invalidato, in quanto era
          stato redatto <Cit>po smrti pečetín</Cit> (sigillato dopo la morte).
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 90" />
        </p>
      </Col>
    </Row>
  </>
)
