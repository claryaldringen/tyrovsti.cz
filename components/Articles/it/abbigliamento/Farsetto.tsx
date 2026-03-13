import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import Link from 'next/link'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const Farsetto = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="farsetto" />
        <h4>Farsetto{draft && <DraftBadge />}</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Nel ceco medievale, il termine <i>kabát</i> veniva usato per indicare
          il farsetto. Questo termine è in uso dal XIV secolo per designare un
          indumento più corto e aderente e come sinonimo del tedesco <i>wams</i>
          , <i>jacke</i>, <i>schecke</i> o <i>rock</i>, del francese{' '}
          <i>pourpoint</i>, <i>rochet</i>, <i>roquette</i>, o dell&apos;inglese{' '}
          <i>jacket</i>, <i>rocket</i>
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:50711a90-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          e <i>doublet</i>, dall&apos;italiano <i>giubbetta</i>.
          <Qt
            publication={PUBLICATIONS.WEDGWOOD}
            href="https://babel.hathitrust.org/cgi/pt?id=uc1.b3924121&view=1up&seq=82"
          />
        </p>
        <p>
          Le parole <i>kabát</i>, <i>rock (waffenrock)</i>,{' '}
          <i>doublet (arming doublet)</i> e <i>pourpoint</i> indicavano anche un
          tipo di indumento trapuntato, e in ceco il primo uso della parola{' '}
          <i>kabát</i> a cavallo tra il XIII e il XIV secolo è associato
          specificamente al termine per un indumento trapuntato
          nell&apos;Alexandreida{' '}
          <Qt publication={PUBLICATIONS.ALEX} note="Page 43" /> e rimase tale
          almeno per tutto il XV secolo, come possiamo leggere nella{' '}
          <i>Bellissima cronaca di Jan Žižka</i>:{' '}
          <Cit>
            Tiem jest polniem vojskem vládl kněz Prokop Holý. Pak ten jest býval
            k bitvě na špici v tlustém kabátě.
          </Cit>{' '}
          (Con quell&apos;esercito campale comandava il sacerdote Prokop il
          Calvo. E questi soleva stare in prima linea in battaglia con un
          farsetto spesso.)
          <Qt publication={PUBLICATIONS.KRONIKAPEKNA} /> Resta da chiarire se la
          parola ceca <i>kabát</i> derivi dall&apos;antico tedesco <i>gewæte</i>
          <Qt publication={PUBLICATIONS.GEBAUER} /> o se sia anch&apos;essa
          derivata dall&apos;italiano <i>giubbetta</i>.
        </p>

        <p>
          Sebbene i farsetti fossero già utilizzati in precedenza per fissare le
          calze, come evidenziato dai lacci delle calze sul pourpoint di Carlo
          di Blois, la combinazione di farsetto e calze allacciate divenne
          ampiamente popolare in Boemia intorno alla metà del XV secolo, facendo
          del farsetto un elemento funzionale dell&apos;abbigliamento a metà
          strada tra biancheria intima e indumento esterno, il che corrisponde
          anche all&apos;istituzione di una corporazione autonoma dei farsettai
          nel 1441.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:5988fc10-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Man mano che le calze diventavano gradualmente pantaloni e il loro
          punto vita si alzava, anche i farsetti si accorciavano e, alla fine
          del XV secolo, tornarono a essere un vero e proprio indumento esterno.
          Un breve profilo dell&apos;evoluzione del farsetto si può osservare
          nelle immagini seguenti.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat1.jpg"
        width={375}
        height={323}
        title="Farsetto antico con maniche larghe, indossato come indumento esterno, in un ritaglio dalla Bibbia di Venceslao IV (1389-1395)."
      />
      <ImageWithTitle
        md={4}
        src="kabat2.jpg"
        width={500}
        height={500}
        title="Un coniatore che durante il lavoro si è spogliato fino a restare con le sole calze e il farsetto. Il secondo coniatore nello stesso affresco indossa una gonna di tipo vestina sopra il farsetto. Ritaglio da un affresco nella Cappella dei Coniatori della Cattedrale di Santa Barbara a Kutná Hora (1460-1470)."
      />
      <ImageWithTitle
        md={4}
        src="kabat3.jpg"
        width={1643}
        height={1643}
        title="Lottatori in farsetti corti di taglio e colore alla moda su un affresco del Bastione Rosso del Castello di Švihov, intorno al 1500."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Come accennato in precedenza, durante l&apos;epoca del re Giorgio di
          Poděbrady, il farsetto rappresentava una sorta di stadio intermedio
          tra biancheria intima e indumento esterno, non solo in Boemia.
          Pertanto, il corpo del farsetto poteva essere realizzato con tessuto
          più economico, ad esempio non tinto. Ciò si riflette anche nel
          testamento del calderaio Martin dell&apos;attuale via Spálená a Praga,
          che nel 1477 lasciò <Cit>dva rukávy aksamitové od kabáta</Cit> (due
          maniche di velluto di un farsetto)
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6c9674e0-fe2a-11e6-97b4-5ef3fc9ae867"
          />
          . Dato che il farsetto formava un&apos;unica entità con le calze, era
          di moda avere calze e farsetto, o almeno le loro parti visibili, dello
          stesso colore, idealmente in contrasto con la gonna esterna o il
          mantello.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat4.jpg"
        width={1920}
        height={1579}
        title="Un farsetto con corpo non tinto in una miniatura dal libro d'armi di Hans Talhofer, Germania, 1459."
      />
      <ImageWithTitle
        md={4}
        src="vaclav-z-jihlavy.jpg"
        width={249}
        height={320}
        title="Un farsetto e calze dello stesso colore (nero). Ritaglio dal Libro giuridico di Brno di Václav di Jihlava (1446)."
      />
      <ImageWithTitle
        md={4}
        src="tkanicky-jensky2.jpg"
        width={600}
        height={800}
        title="Un farsetto e calze dello stesso colore (rosso). Ritaglio dal Codice di Jena (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <p>
          La scarsità di fonti iconografiche ceche e il fatto che durante
          l&apos;epoca del re Giorgio di Poděbrady il farsetto fosse uno strato
          intermedio tra la biancheria intima e l&apos;indumento esterno
          complica notevolmente le ricerche. Ciononostante, è possibile
          rintracciare alcuni dettagli e differenze rispetto ad altre regioni.
          Le maniche dei farsetti cechi sono strette oppure larghe, strette al
          polso con un breve polsino. Al contrario, non si riscontrano
          imbottiture alle spalle secondo la moda borgognona né arricciature
          della metà superiore della manica come nella moda italiana.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="kabat5.jpg"
        width={466}
        height={512}
        title="Un coniatore in farsetto con maniche strette. Ritaglio da un affresco nella Cappella dei Coniatori della Cattedrale di Santa Barbara a Kutná Hora (1460-1470)."
      />
      <ImageWithTitle
        md={3}
        src="kabat6.jpg"
        width={600}
        height={600}
        title="Un sacerdote che indossa un farsetto con maniche larghe, strette al polso con un polsino. Ritaglio dal Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="kabat7.jpg"
        width={230}
        height={273}
        title={
          <>
            Un farsetto con spalle imbottite secondo la moda borgognona.
            Dettaglio dal dipinto <i>L&apos;esecuzione del conte innocente</i>{' '}
            del pittore Dieric Bouts, Paesi Bassi, 1460.
          </>
        }
      />
      <ImageWithTitle
        md={3}
        src="kabat8.jpg"
        width={667}
        height={864}
        title="Un farsetto con la metà superiore delle maniche arricciata, ritaglio da un affresco di Paolo di Stefano Badaloni, Firenze, 1460"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Confrontando il farsetto dell&apos;affresco nella Cappella dei
          Coniatori della chiesa di Santa Barbara a Kutná Hora con i
          cartamodelli tedeschi coevi, sembra che i farsetti cechi fossero di
          stile alquanto più arcaico, ovvero con una parte lunga che avvolge
          strettamente il ventre ed è allacciata con un singolo laccio, e un
          petto molto arcuato, probabilmente imbottito, che tuttavia potrebbe
          non essere allacciato altrettanto strettamente della parte addominale
          e quindi poteva essere chiuso con bottoni o con diversi lacci passanti
          attraverso coppie opposte di fori.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat9.jpg"
        width={464}
        height={692}
        title="Un farsetto con una lunga parte aderente al ventre, strettamente allacciata con un unico laccio. Il petto non necessita più di essere così strettamente serrato ed è allacciato con diversi lacci passanti attraverso coppie opposte di fori. Ritaglio dal trattato di Königsegg, Germania (1446-1459)."
      />
      <ImageWithTitle
        md={4}
        src="kabat2.jpg"
        width={500}
        height={500}
        title="Sebbene questo farsetto dovrebbe essere di datazione simile a quello tedesco nell'immagine seguente, mantiene la sua forma arcaica con una parte aderente al ventre strettamente allacciata con un singolo laccio e un petto più morbido chiuso con bottoni. Ritaglio da un affresco nella Cappella dei Coniatori della Cattedrale di Santa Barbara a Kutná Hora (1460-1470)."
      />
      <ImageWithTitle
        md={4}
        src="kabat10.jpg"
        width={1780}
        height={1678}
        title="Un tipo più recente di farsetti con parte ventrale corta, indossati in Germania in quel periodo. Pagina dal libro d'armi di Hans Talhofer, Germania (1459)."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Alcune informazioni sulla costruzione dei farsetti si possono ricavare
          da certi articoli della corporazione dei farsettai della Città Nuova,
          confermati il <b>16 agosto 1448</b>:
        </p>

        <p>
          <Cit>
            Třetie, aby byly dělány barchanové kabáty v prostředku plátnem
            novým, a bavlna aby byla v prsy, a vespod aby bylo plátno nové nebo
            cvilink bez přimiešenie vetchého; a v kožené kabáty aby bylo vetché
            plátno v prostředek, a vespod nové bez přimiešenie vetchého. Také
            aby vetché plátno nebylo děláno pod barchanové kabáty ani kožené ani
            cvilinkové, nebo pod rukávy aby žádného vetchého mandlovaného na trh
            nedělali.
          </Cit>{' '}
          (In terzo luogo, che i farsetti di fustagno siano confezionati con
          tela nuova al centro, che cotone grezzo sia nel petto, e che sotto vi
          sia tela nuova o tessuto grossolano di lino senza aggiunta di
          materiale vecchio; e nei farsetti di cuoio vi sia tela vecchia al
          centro e nuova in basso senza aggiunta di vecchia. Inoltre, che tela
          vecchia non venga utilizzata sotto i farsetti di fustagno né di cuoio
          né di tessuto grossolano, né sotto le maniche si lavori per il mercato
          alcun materiale trapuntato vecchio.)
        </p>
        <p>
          <Cit>
            Desáté a poslednie, v harasové kabáty aby bylo děláno dvuoje plátno
            v prsy svrchnie, a v pokošinové též, pod pokutami svrchupsanými.
          </Cit>{' '}
          (Decimo e ultimo, nei farsetti di lana vi siano due strati di tessuto
          nel petto superiore, e lo stesso nei farsetti di (altro tipo di) lana,
          sotto le pene sopra menzionate.)
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=10&bookid=821&page=458"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Mentre nell&apos;Europa occidentale i lacci usati per legare le calze
          al farsetto erano visibilmente annodati a un unico cappio,
          nell&apos;Europa centrale era consuetudine portare questi lacci
          nascosti, come si evince dalle immagini seguenti.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        width={564}
        height={988}
        src="memling.jpg"
        title="Un farsetto legato alle calze con nodi visibili sui lacci. Ritaglio dall'altare di San Giovanni di Hans Memling, 1479."
      />
      <ImageWithTitle
        md={3}
        width={373}
        height={480}
        src="stetisvjiri.jpg"
        title="Un farsetto legato alle calze con nodi visibili sui lacci. Centenario di San Giorgio, Friedrich Herlin, 1462-1465."
      />
      <ImageWithTitle
        md={3}
        width={978}
        height={1188}
        src="talhofer1.jpg"
        title="I lacci tra le calze e il farsetto sono qui solo accennati, poiché il nodo è nascosto all'interno. Pagina dal libro d'armi di Hans Talhofer, Germania (1459)."
        href="talhofer2.jpg"
      />
      <ImageWithTitle
        md={3}
        src="kabat2.jpg"
        width={500}
        height={500}
        title="Nell'ambiente ceco, i lacci che collegano il farsetto alle calze sono così nascosti da non essere nemmeno accennati, a differenza dei lacci sul ventre. Ritaglio da un affresco nella Cappella dei Coniatori della Cattedrale di Santa Barbara a Kutná Hora (1460-1470)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Ricostruzione</h5>
        <p>
          La libera ispirazione per questa ricostruzione è stata
          un&apos;illustrazione della{' '}
          <Link
            href="https://digital.slub-dresden.de/werkansicht/dlf/14388%2F95%2F"
            target="_blank"
          >
            Bayerische Fürstengenealogie
          </Link>
          ; al contempo, si è cercato di attenersi agli articoli della
          corporazione dei farsettai della Città Nuova. Il corpo del farsetto è
          pertanto realizzato in fustagno nero (
          <Cit>… che il farsetto di fustagno sia confezionato</Cit>), e il petto
          è imbottito con cotone grezzo (<Cit>… e cotone sia nel petto</Cit>).
          Il taglio, compresa l&apos;allacciatura, si basa sulla raffigurazione
          di un farsetto nella Cappella dei Coniatori della Cattedrale di Santa
          Barbara a Kutná Hora.
        </p>
        <p>
          Le maniche sono realizzate con un tessuto notevolmente più pregiato,
          come si può osservare in molte raffigurazioni coeve e come menzionato
          nel testamento del calderaio Martin del 1477:{' '}
          <Cit>due maniche di velluto del farsetto.</Cit> Al posto del citato
          velluto di seta, abbiamo utilizzato un broccato di seta tessuto a mano
          e intrecciato con oro, con un motivo a Pellicano, basato su un
          frammento tessile rinvenuto in Germania.
        </p>
        <p>
          L&apos;intero farsetto è cucito interamente a mano. La ricostruzione è
          stata realizzata da Pavel Houfek.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="doublet/1.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle src="doublet/3.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle src="doublet/4.jpg" width={1600} height={1200} title="" />
    </Row>
    <Row>
      <ImageWithTitle src="doublet/2.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle
        src="doublet/4a.jpg"
        width={1600}
        height={1200}
        title=""
      />
      <ImageWithTitle src="doublet/5.jpg" width={1600} height={1200} title="" />
    </Row>
    <Row>
      <ImageWithTitle
        src="doublet/5a.jpg"
        width={1600}
        height={1200}
        title=""
      />
      <ImageWithTitle src="doublet/6.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle src="doublet/7.jpg" width={1600} height={1200} title="" />
    </Row>
    <Row>
      <ImageWithTitle src="doublet/8.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle src="doublet/9.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle
        src="doublet/10.jpg"
        width={1600}
        height={1200}
        title=""
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="doublet/11.jpg"
        width={1600}
        height={1200}
        title=""
      />
      <ImageWithTitle
        src="doublet/12.jpg"
        width={1600}
        height={1200}
        title=""
      />
      <ImageWithTitle
        src="doublet/14.jpg"
        width={1600}
        height={1200}
        title=""
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="doublet/13.jpg"
        width={1200}
        height={1600}
        title=""
      />
      <ImageWithTitle
        src="doublet/15.jpg"
        width={1200}
        height={1600}
        title=""
      />
      <ImageWithTitle
        src="doublet/16.jpg"
        width={1200}
        height={1600}
        title=""
      />
    </Row>
  </>
)
