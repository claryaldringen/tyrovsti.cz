import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BiancheriaIntima = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="biancheria-intima" />
        <h3>Biancheria intima{draft && <DraftBadge />}</h3>
        <p>
          La biancheria intima assolveva diverse funzioni. Dato che la
          stragrande maggioranza degli indumenti esterni era realizzata in
          materiali di lana, essa impediva alla lana di sfregare direttamente
          sulla pelle nuda, evitando così irritazioni. Gli indumenti esterni
          erano anche molto difficili da pulire, poiché il lavaggio medievale
          impiegava metodi meccanici che danneggiavano il tessuto. Pertanto, gli
          indumenti non potevano essere lavati troppo frequentemente. Lavare la
          biancheria intima, prevalentemente in lino, non era altrettanto
          difficile. Essa assorbiva il sudore e, se si sporcava, il costo di
          confezionare un altro capo di ricambio non era neanche lontanamente
          paragonabile a quello di un indumento di lana.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Camicia maschile</h4>
        <p>
          La camicia, chiamata <i>rubáš</i> o <i>rubáč</i> in antico ceco, era
          il capo fondamentale della biancheria intima maschile. Le camicie
          avevano un taglio semplice, che ricordava la lettera T, e di solito
          arrivavano all&apos;altezza delle ginocchia. I tasselli delle spalle a
          quest&apos;epoca erano ancora realizzati senza plissettatura. La
          camicia poteva avere un semplice scollo ovale, un&apos;apertura a V
          sul petto o uno spacco per tutta la sua lunghezza.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
        <p>
          Sembra che la differenza tra <i>košile</i> (camicia) e <i>rubáš</i>{' '}
          risiedesse principalmente nella lunghezza, poiché un&apos;eredità di
          Litomyšl del 1510 lega <Cit>košile tři a rubáč dlouhý</Cit> (tre
          camicie e un rubáš lungo).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:72e460f0-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Ciò collocherebbe il <i>rubáš</i> maggiormente, seppure non
          esclusivamente, nel guardaroba femminile. Lo suggeriscono anche altri
          testamenti di cittadine di Litomyšl: la moglie del giudice Tisovská
          possedeva due <i>rubáče</i> di lino nel 1497; Marta, sorella della
          moglie del burgravio, lasciò in eredità nel 1499{' '}
          <i>
            &bdquo;Mandě písařce dva rubáče, jeden žemniový a druhý lněný&ldquo;
          </i>{' '}
          (due <i>rubáče</i> alla scrivana Manda, uno di canapa e l&apos;altro
          di lino).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:724e6280-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Kateřina, cittadina della Città Nuova di Praga, lasciò in eredità nel
          1483 <Cit>tři rubáše sváteční a tři košile všední</Cit> (tre{' '}
          <i>rubáše</i> festivi e tre camicie quotidiane).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:7212e020-fe2a-11e6-97b4-5ef3fc9ae867"
          />
        </p>
        <p>
          La biancheria intima era per lo più bianca o del colore naturale del
          materiale, ma quando abbiamo testimonianze di biancheria intima
          colorata, per qualche ragione era più spesso blu. Per le camicie, ciò
          è documentato sia per iscritto dagli Annali cechi antichi, che
          riferiscono come nella Battaglia di Vyšehrad{' '}
          <i>
            &bdquo;čeští a moravští páni byli zbiti a všeho odění a rúcha až do
            modré košile obnaženi&ldquo;
          </i>{' '}
          (i signori cechi e moravi furono uccisi e spogliati di tutte le
          armature e vesti fino alla camicia blu), sia iconograficamente nelle
          miniature della Vita di San Francesco del 1500.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:71b15f30-fe2a-11e6-97b4-5ef3fc9ae867"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kosile_rajhrad.jpg"
        width={300}
        height={400}
        title="Una camicia che arriva sotto le ginocchia con scollo a V, estratto dalla tavola Portacroce sulla Pala di Rajhrad, intorno al 1440."
      />
      <ImageWithTitle
        md={4}
        src="kosile_nove_sady.jpg"
        width={300}
        height={400}
        title="Una camicia che arriva alle ginocchia con spacco per tutta la lunghezza e brache corte a taglio semplice, estratto dalla tavola Crocifissione di Nové Sady sulla Pala di Rajhrad, intorno al 1440."
      />
      <ImageWithTitle
        md={4}
        src="kosile_jk.jpg"
        width={640}
        height={480}
        title="Lazzaro in una camicia con spacco per tutta la lunghezza, estratto dal Codice di Jena (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Ricostruzione</h5>
        <p>
          Per la ricostruzione abbiamo scelto la camicia dalla tavola
          Crocifissione di Nové Sady sulla Pala di Rajhrad. Una è stata lasciata
          con lo spacco come nell&apos;originale, mentre l&apos;altra è stata
          ricostruita senza spacco. Entrambe le camicie sono cucite a mano in
          fine tela di lino. La ricostruzione è stata realizzata da Daria
          Litvinova.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="shirt/kosile1.jpeg"
        width={1536}
        height={2048}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile2.jpeg"
        width={1536}
        height={2048}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile3.jpeg"
        width={1536}
        height={2048}
        title=""
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="shirt/kosile4.jpeg"
        width={1536}
        height={2048}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile5.jpeg"
        width={1536}
        height={2048}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile7.jpeg"
        width={1536}
        height={2048}
        title=""
      />
    </Row>
    <Row>
      <Col>
        <h4>Camicia femminile</h4>
        <p>
          Rispetto alla biancheria intima maschile, le testimonianze delle
          controparti femminili sono considerevolmente minori. Le donne
          indossavano sotto gli indumenti esterni semplici camicie lunghe con
          bretelle. Le incontriamo più frequentemente nelle miniature che
          raffigurano inservienti di bagni, che le indossavano persino come
          abito da lavoro, e anche le donne al lavoro vi sono raffigurate.
          Inoltre, si possono trovare in scene intime che raffigurano interni di
          camere da letto. Uno dei più antichi ritrovamenti archeologici di una
          camicia femminile risale al XIV secolo dal Castello di Ranis in
          Germania.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
          Questa camicia è cucita da due pannelli, anteriore e posteriore.
          Un&apos;altra tipologia è composta da tre pannelli. I primi due
          formano essenzialmente il corpetto anteriore e posteriore, mentre il
          terzo è inserito in vita per formare una gonna plissettata. Sul
          fianco, questo tipo di camicia aveva un&apos;allacciatura per una
          migliore vestibilità,
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> successivamente il
          taglio del corpetto poteva essere esteso per includere coppe per il
          seno, come è evidente da quattro ritrovamenti dal Castello di Lengberg
          nel Tirolo orientale, datati agli anni ottanta del XV secolo.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="lazebnice.jpg"
        width={764}
        height={1200}
        title="Inservienti di bagni in camicie, Codice di Jena, 1490-1510."
      />
      <ImageWithTitle
        md={4}
        src="Die_Hefneryn.jpg"
        width={327}
        height={460}
        title="Una vasaia ceca in camicia al lavoro, una carta da gioco dal mazzo Hofämterspiel commissionato da Ladislao Postumo, anni cinquanta del XV secolo."
      />
      <ImageWithTitle
        md={4}
        src="lengbergshirt.jpg"
        width={564}
        height={743}
        title="Ritrovamento di una camicia dal Castello di Lengberg nel Tirolo orientale con coppe per il seno, anni settanta-ottanta del XV secolo."
      />
    </Row>
    <Row>
      <Col>
        <h4>Brache</h4>
        <p>
          Il secondo capo fondamentale della biancheria intima maschile erano le
          brache, in antico ceco note come <i>hace</i> (prima della perdita
          della jotazione nel XIV secolo pronunciate <i>hácě</i>), attestate
          anche come <i>hacze</i>, antico ceco <i>rúšce</i>, latino{' '}
          <i>bragas</i> o <i>bracca</i>. In epoche anteriori arrivavano alle
          ginocchia o al di sotto. Queste brache più lunghe scomparvero
          gradualmente e dopo la metà del XV secolo non si incontrano più.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
        <p>
          In seguito, le brache venivano indicate nelle fonti scritte più spesso
          con il neologismo latino <i>femoralia</i>, tradotto letteralmente come{' '}
          <i>nábedrnie</i> (copricoscia). Così le chiama anche Vavřinec di
          Březová nella sua cronaca, descrivendo la Battaglia di Vyšehrad. Dopo
          la battaglia, i cavalieri caduti sarebbero stati spogliati delle loro
          armature fino a restare con le sole brache:{' '}
          <Cit>
            ... baronibus et militibus sunt velut porci crudeliter interempti et
            statim omnibus armis et vestibus usque femoralia denudaci.
          </Cit>
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
        <p>
          Le brache erano realizzate in sottile tela di lino, come testimonia la
          Bibbia di Kladruby del 1471:{' '}
          <Cit>
            Učiníš i rúčce lněné, aby přikryly mrzkosti tvé od ledví až po bedr.
          </Cit>
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> Il tipo più semplice
          consisteva in una striscia di tessuto più o meno sagomata che passava
          tra le gambe ed era tenuta in posizione ai fianchi da un cordone
          annodato su uno o entrambi i lati. Tali brache sono note sia da varie
          raffigurazioni d&apos;epoca sia da ritrovamenti archeologici presso il
          Castello di Lengberg nel Tirolo orientale. Un&apos;altra variante
          poteva avere un taglio in cui il cordone ai fianchi era sostituito da
          un canale con un laccio scorrevole, le cui estremità venivano fatte
          uscire sul davanti. Tirando e annodando, si formava una sorta di
          sacchetto per i genitali nella parte anteriore delle brache. Mentre le
          brache più antiche (con gambe corte) si trovano nelle raffigurazioni
          solo in bianco, quelle a taglio semplice si possono trovare anche in
          raffigurazioni blu o persino nere.
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 26" />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="spodky-dlouhe.jpg"
        width={556}
        height={784}
        title="Brache (ancora con gambe corte), Libro giuridico di Brno di Václav di Jihlava, 1446."
      />
      <ImageWithTitle
        md={6}
        src="krteni.jpg"
        width={1038}
        height={894}
        title="Scena di battesimo in cui le figure indossano brache blu a taglio semplice. Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        src="svroch-detail.jpg"
        width={489}
        height={488}
        title="Nel dipinto di San Rocco del 1480, di provenienza italiana, è visibile che le brache a taglio semplice erano praticamente identiche in tutta Europa all'epoca. In questo caso si tratta del secondo tipo con laccio scorrevole annodato al centro."
        href="svroch.jpeg"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={6}
        src="lengberg_underpants.gif"
        width={709}
        height={543}
        title="Brache dal Castello di Lengberg nel Tirolo orientale, datate agli anni ottanta del XV secolo."
      />
      <ImageWithTitle
        md={6}
        src="boj_o_kalhoty.jpg"
        width={1920}
        height={1375}
        title={
          <>
            Vari tipi di brache nell&apos;incisione <Cit>Boj o kalhoty</Cit> (La
            lotta per i pantaloni) del Monogrammista E.S., Germania, 1440-1467.
          </>
        }
      />
    </Row>
    <Row>
      <Col>
        <p>
          Mentre per un uomo nel XV secolo era considerato un grave insulto{' '}
          <Cit>bez hacz choditi</Cit> (andare senza brache)
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 27" />, se anche le
          donne indossassero brache (<i>femoralia</i>) è attualmente oggetto di
          un vivace dibattito, innescato dai suddetti ritrovamenti tessili
          presso il Castello di Lengberg. Non è possibile dimostrare con
          certezza se le brache sopra menzionate e raffigurate appartenessero a
          un uomo o a una donna. Tuttavia, è interessante notare che nel
          contesto ceco esse sono documentate per nome già nel 1455 nel{' '}
          <i>Dizionario Clementino</i>, specificamente nella loro variante
          femminile <i>feminale</i>.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA2} note="Str. 69" />
          Nel contesto italiano, le brache femminili sono documentate con
          certezza a cavallo tra il XVI e il XVII secolo.
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 28" />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Sia le brache che le camicie erano considerate indumenti intimi che
          era sconveniente mostrare in pubblico. La graduale esibizione della
          camicia iniziò nella seconda metà del XV secolo in connessione con la
          penetrazione della moda rinascimentale attraverso la Germania, ma ad
          esempio nel moralistico Codice di Jena, le parti visibili della
          camicia appaiono solo su figure in qualche modo peccaminose.
        </p>
      </Col>
    </Row>
  </>
)
