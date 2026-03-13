import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const Stemma = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="stemma" />
        <h4>Stemma{draft && <DraftBadge />}</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Desidero ringraziare Michal Kacl, Jan Škvrňák, Jan Boukal e Markéta
          Poskočilová per il loro aiuto nella ricerca.
        </p>
        <p>
          La descrizione dello stemma dei Týřovský varia considerevolmente tra i
          singoli autori. August Sedláček nella Českomoravská heraldika scrive
          che{' '}
          <Cit>
            z Enzidle Týřovští měli štít křížem rozdělený v 1. a 4. poli napříč
            děleném nahoře černého orla v bílém, ve zpod v bílém tři pruhy
            pošikem, v 2. a 3. poli modrém tři duty bílé špičkami k sobě a na
            tři strany se rozbíhající, nad štítem dvě helmy s přikryvadly
            modrými a bílými s poprsím muže v modrém oděvu se zlatým lemováním,
            levou s přikr. červenými a bílými s vysokým červeným kloboukem s
            bílou ohnutou střechou a (černou) kytou.
          </Cit>{' '}
          (i Týřovský di Einsiedl avevano uno scudo inquartato, nel 1° e 4°
          campo partito in fascia, in capo un&apos;aquila nera in argento, nella
          base in argento tre bande, nel 2° e 3° campo d&apos;azzurro tre penne
          di struzzo bianche rivolte l&apos;una verso l&apos;altra e divergenti
          in tre direzioni, sopra lo scudo due elmi con lambrecchini azzurri e
          bianchi con il busto di un uomo in veste azzurra con bordatura dorata,
          a sinistra con lambrecchini rossi e bianchi con un alto cappello rosso
          con tesa bianca ricurva e un (nero) pennacchio.)
        </p>
        <p>Rudolf Jan Meraviglia-Crivelli nel Der Böhmische Adel afferma:</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          <Cit>
            Wappen: Gespalten und zweimal geteilt; 1. u. 2. in Silber ein
            schwarzer Doppeladler; 2. u. 5. in Blau drei silberne, in Deichsel
            gestellte Straussenfedern; 3. u. 6. in Silber zwei rothe
            Schrägrechtsbalken. - Zwei Helme: I aus der Helmrone, eine
            schwarzgekleidete Jungfrau mit offenen goldenen Haar, welche sich
            mit beiden Händen eine goldene Krone auf das Haupt setzt; Decken:
            blau-silbern - II. hoher, rother Heidenhut mit weissem Stulp und
            oben mit sieben schwarzen Hahnenfedern besteckt; Decken:
            Roth-silbern.
          </Cit>
        </p>
      </Col>
      <Col>
        <p>
          Armi: Spaccato e diviso due volte in fascia; nel 1° e 2° campo
          d&apos;argento un&apos;aquila bicipite di nero; nel 2° e 5° campo
          d&apos;azzurro tre penne di struzzo d&apos;argento disposte a palo;
          nel 3° e 6° campo d&apos;argento due bande di rosso. — Due elmi: I.
          dalla corona dell&apos;elmo, una fanciulla vestita di nero con capelli
          dorati sciolti, che si pone sul capo una corona d&apos;oro con
          entrambe le mani; lambrecchini: d&apos;azzurro e d&apos;argento — II.
          un alto cappello tartaro di rosso con risvolto d&apos;argento e sette
          penne di gallo di nero in cima; lambrecchini: di rosso e
          d&apos;argento.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Dal sigillo di Jobst von Einsiedl e dalla maggior parte degli stemmi
          superstiti della famiglia Týřovský, è evidente che la raffigurazione
          delle bande in un campo separato è piuttosto un&apos;invenzione di chi
          dipinse lo stemma. Appare solo in una singola raffigurazione dello
          stemma dei Týřovský, ossia sullo stemma di Dorota Polyxena Kateřina
          Kokořovská, nata Týřovská, e successivamente solo su raffigurazioni
          create dopo l&apos;estinzione della famiglia. Lo stesso Sedláček nel
          suo blasonamento afferma che lo scudo è diviso in soli 4 campi e al
          contempo che il 1° e il 4° sono secondariamente divisi in fascia.
        </p>
        <p>
          Le aquile non sono mai raffigurate per intero, ma piuttosto che essere
          intenzionale, si tratta di una questione pratica — un&apos;aquila
          intera semplicemente non entra nel campo. Pertanto, l&apos;aquila è
          variamente raffigurata quasi completa, solo senza artigli (lapide di
          Jindřich, sigillo e lapide di Jakub Jindřich, rilievo di Dorota
          Polyxena Kateřina Kokořovská di Kokořov, nata Týřovská) oppure solo il
          suo busto (sigillo di Jobst von Einsiedl, armorial di Lucas Cranach il
          Giovane, stemma sul cartiglio nella chiesa di Milíčov).
        </p>
        <p>
          Dato il numero minimo di raffigurazioni a colori superstiti
          direttamente dall&apos;epoca precedente l&apos;estinzione della
          famiglia Týřovský, la determinazione dei colori dello stemma è
          alquanto più complessa. Iniziamo con l&apos;elmo sinistro e il
          relativo cimiero, che è un cappello tartaro, il cui colore è
          concordemente indicato sia dal blasonamento di Sedláček e
          Meraviglia-Crivelli, sia dalle raffigurazioni di Cranach il Giovane e
          dall&apos;altare di Milíčov. Dalle raffigurazioni di Cranach,
          dall&apos;altare di Milíčov e dal rilievo di Dorota Polyxena Kateřina
          Kokořovská, possiamo concludere che il cappello era inoltre spaccato,
          con solo una metà rossa mentre l&apos;altra era d&apos;argento, il che
          corrisponderebbe anche al colore dei rispettivi lambrecchini, i cui
          colori concordano anche nei blasonamenti e nelle raffigurazioni. I
          blasonamenti e la raffigurazione di Cranach concordano anche sul
          colore argento/bianco dei lambrecchini sull&apos;elmo destro. Dove,
          tuttavia, i blasonamenti (e le raffigurazioni moderne dello stemma)
          discordano dalle raffigurazioni dell&apos;epoca sono i colori delle
          figure sullo scudo. Sembra che il problema sia sorto quando si
          associarono i colori dei lambrecchini alle figure sullo scudo, quando
          lo schema azzurro-argento fu probabilmente assegnato erroneamente alle
          penne nel 2° e 3° campo e lo schema rosso-argento alle bande (fasce)
          nel 1° e 4° campo. Ho deliberatamente non menzionato il cimiero
          sull&apos;elmo destro, che è un uomo in veste azzurra secondo
          Sedláček, o una fanciulla vestita di nero che si pone una corona sul
          capo secondo Meraviglia-Crivelli. Sia dalle raffigurazioni a colori
          che da quelle monocromatiche, è chiaro che l&apos;uomo può essere
          immediatamente escluso. Cranach il Giovane assegnò correttamente la
          fanciulla alle bande, il che significa che la sua fanciulla, le bande
          e i corrispondenti lambrecchini sono dello stesso colore azzurro. È
          possibile che Cranach abbia preso il colore azzurro dalle bande dello
          stemma di Kožlany, che Jobst von Einsiedl ottenne per la città nel
          1472
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:85055638-c5cd-4b57-bd54-93a437e6ce73&fulltext=1472"
          />
          , e che a quanto si dice adottò le sue bande dallo stemma del suo
          signore. <Qt publication={PUBLICATIONS.PELANT} /> Più corretta,
          tuttavia, sarebbe la variante di Milíčov, dove la fanciulla, i
          corrispondenti lambrecchini e le bande sono tutti di nero. È
          interessante notare che questa è anche l&apos;unica raffigurazione
          contemporanea in cui la fanciulla si pone una corona sul capo.
        </p>
        <p>
          Il corretto blasonamento quindi molto probabilmente recita:
          <br />
          Uno scudo inquartato dove il 1° e il 4° campo sono divisi in fascia,
          con un&apos;aquila di nero uscente o saliente su sfondo d&apos;oro in
          capo e due bande di nero su sfondo d&apos;argento nella base. Nel 2° e
          3° campo di rosso vi sono tre penne di struzzo d&apos;argento rivolte
          l&apos;una verso l&apos;altra e divergenti. Sopra lo scudo vi sono due
          elmi con corone; il sinistro con lambrecchini di rosso e
          d&apos;argento, dal quale si erge un alto cappello tartaro spaccato
          con un pennacchio di nero o d&apos;argento, la metà sinistra
          d&apos;argento e la metà destra di rosso. L&apos;elmo destro ha
          lambrecchini di nero e d&apos;oro e nel cimiero una fanciulla vestita
          di nero, coronata o nell&apos;atto di porsi una corona d&apos;oro sul
          capo.
          <Qt publication={PUBLICATIONS.BUBEN} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="nahrobek.jpg"
        width={1062}
        height={1920}
        title="Raffigurazione dello stemma dei Týřovský del 1556 sulla lapide di Jindřich Týřovský nella chiesa di San Nicola a Jince."
      />
      <ImageWithTitle
        md={4}
        src="erb-cranach.jpg"
        width={852}
        height={1057}
        title="Lo stemma dei Týřovský nell'armorial di Lucas Cranach il Giovane del 1565. Sembra che Cranach abbia dipinto lo stemma dalla prospettiva dell'osservatore anziché del portatore, ovvero abbia invertito i lati."
      />
      <ImageWithTitle
        md={4}
        src="erb-pecet.jpg"
        width={655}
        height={652}
        title="Lo stemma dei Týřovský sul sigillo di Jakub (Jindřich) Týřovský del 25 aprile 1616."
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="erb-nahrobek-milicov.jpg"
        width={900}
        height={675}
        title="Lo stemma dei Týřovský sulla lapide di Jakub Jindřich Týřovský di Einsiedl del 1618."
      />
      <ImageWithTitle
        md={4}
        src="erb-stahlavy.jpg"
        width={315}
        height={589}
        title="Lo stemma di Dorota Polyxena Kateřina Kokořovská di Kokořov, nata Týřovská di Einsiedl, sul rilievo nella chiesa di Sant'Adalberto a Šťáhlavy, tra il 1637 e il 1640."
      />
      <ImageWithTitle
        md={4}
        src="erb-oltar-milicov.jpg"
        width={640}
        height={480}
        title="Lo stemma dei Týřovský sul cartiglio dell'altare della chiesa di San Pietro in Vincoli a Milíčov del 1665."
      />
    </Row>
  </>
)
