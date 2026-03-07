import { Col, Row } from 'reactstrap'
import { Cit } from '../../../Citation'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { ImageWithTitle } from '../../../ImageWithTitle'

export const Veste = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="veste" />
        <h4>Veste</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          La veste era un tipo fondamentale di indumento esterno. Era realizzata
          più comunemente in tessuto di lana, che in ceco si chiama <i>sukno</i>,
          motivo per cui questo tipo di indumento era chiamato <i>sukně</i> in
          antico ceco, termine che nel ceco contemporaneo significa{' '}
          <i>gonna</i>. Poteva avere lunghezze diverse. La versione lunga
          probabilmente poteva essere chiamata <i>reverenda</i>, come indica una
          registrazione del 1478 secondo cui il maltatore praghese Rameš era
          solito indossare una <Cit>reverendě nové barvy</Cit> (reverenda di
          colore nuovo).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6a7087a0-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Le vesti potevano essere foderate con tessuto, pelliccia o lasciate
          senza fodera. A ciò fa riferimento nel 1425 Tomášek di Hlohovice al
          fratello: <Cit>sukni s beránčím kožichem</Cit> (la veste con
          pelliccia d&apos;agnello) e{' '}
          <Cit>sukni parvířku s liščím kožichem</Cit> (la veste{' '}
          <Cit>parvířka</Cit> con pelliccia di volpe). Lo stesso Tomášek,
          tuttavia, possedeva anche una{' '}
          <Cit>sukni modrú nepodšitú</Cit> (veste blu senza fodera).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6b7d8ad0-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Il cittadino di Plzeň Jan Chudoba lasciò in eredità dal suo guardaroba
          nel 1432 una{' '}
          <Cit>knězi Šimanovi sukni černú svú s liščím kožichem</Cit> (veste
          nera con pelliccia di volpe al sacerdote Šiman). Il maestro Petr,
          anch&apos;egli di Plzeň, menziona nel 1492 una{' '}
          <Cit>harasovú suknici krátkú podšitú</Cit> (veste corta foderata in
          lana haras).
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 67" /> Il maltatore
          praghese Duchek, morto nel 1437, possedeva tra l&apos;altro tre vesti,
          una <Cit>šerú s beránčím kožichem črným</Cit> (grigia con pelliccia
          d&apos;agnello nera), un&apos;altra <Cit>s liškami</Cit> (con volpi) e
          un&apos;altra <Cit>s plátnem</Cit> (con tela)
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6b7d8ad0-fe2a-11e6-97b4-5ef3fc9ae867"
          />
          , cioè foderata con tessuto di lino (tela a quell&apos;epoca non
          significava necessariamente tela a intreccio piano, ma si riferiva al
          tessuto di lino).
        </p>
        <p>
          Alla fine del XV e all&apos;inizio del XVI secolo, troviamo nelle fonti
          scritte vesti guarnite di pelliccia. Ad esempio, nei registri di
          Jindřichův Hradec del 1496, si fa menzione di una{' '}
          <Cit>červená, lasicí opremovaná</Cit> (rossa, guarnita di martora),
          che costava 2 sessantine di grossi. Nel 1503, un servitore rubò anche
          alla nobildonna Barbora di Vrchlabí una{' '}
          <Cit>
            sukni atlasovou zelenou, kožichem podšitou a lasičkami opremovanou
          </Cit>{' '}
          (veste di velluto verde, foderata di pelliccia e guarnita di martora).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:657e33f0-fe2a-11e6-97b4-5ef3fc9ae867"
          />
        </p>
        <p>
          Nelle terre ceche è possibile rintracciare tre varianti più comuni:
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Veste semplice</h5>
        <p>
          Una veste con un taglio più o meno simile a una camicia, di varie
          lunghezze, con maniche strette o larghe. Il termine
          &ldquo;semplice&rdquo; non si riferisce al materiale, che poteva
          essere anche lussuoso, ma alla relativa semplicità del taglio. Poteva
          essere decorata con le pieghe o i drappeggi allora in voga.
          Nell&apos;iconografia ceca, le figure più solenni (ad esempio anziani,
          santi, angeli ecc.) hanno tipicamente vesti molto semplici, ma anche
          molto lunghe.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="Jensky_kodex_Zizka.jpg"
        width={640}
        height={921}
        title="Jan Žižka in una veste semplice con maniche strette e un portabandiera in una veste semplice con maniche larghe.
  Estratto dal Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="sv-sebestian-jenikov.jpg"
        width={221}
        height={482}
        title="San Sebastiano in un'elegante veste corta verde foderata di pelliccia marrone, con maniche larghe, spacchi laterali sui pantaloni corti
  e drappeggio, sulla pala d'altare di Jeníkov, intorno al 1460."
      />
      <ImageWithTitle
        md={4}
        src="kutnohorska1.jpg"
        width={524}
        height={520}
        title="Un uomo in una veste semplice e un mantello, estratto dalla Bibbia di Kutná Hora, 1489."
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="andel-kutna-hora.jpg"
        width={499}
        height={548}
        title="Un angelo in una lunga veste semplice con maniche rastremate e colletto rialzato nell'affresco della Cappella del Maestro di Zecca, Chiesa di Santa Barbara, Kutná Hora (1460-1470)"
      />
      <ImageWithTitle
        md={4}
        src="andel2.jpg"
        width={325}
        height={381}
        title="Un angelo in una lunga veste semplice con maniche rastremate e colletto rialzato in un affresco della Cappella del Maestro di Zecca, Chiesa di Santa Barbara, Kutná Hora (1460-1470)."
      />
      <ImageWithTitle
        md={4}
        src="apostolove-jensky.jpg"
        width={622}
        height={955}
        title="Apostoli in vesti semplici in un estratto dal Codice di Jena (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <h5>
          Veste di tipo <i>vestina</i>
        </h5>
        <p>
          La veste, chiamata <Cit>vestina</Cit> dagli italiani, è
          caratterizzata da un corpetto aderente, che veniva allacciato, e da una
          gonna più o meno drappeggiata di varie lunghezze, generalmente non
          oltre il ginocchio.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat5.jpg"
        width={466}
        height={512}
        title={
          <>
            Un pregéř (il coniatore) vestito con una vecchia veste rosa di tipo{' '}
            <i>vestina</i>. Dettaglio dall&apos;affresco nella Cappella dei
            Coniatori della Cattedrale di Santa Barbara a Kutná Hora (1460-1470).
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="Zasedani.jpg"
        width={399}
        height={356}
        title={
          <>
            Una riunione del consiglio cittadino raffigurata nell&apos;iniziale
            del Libro giuridico di Brno di Václav di Jihlava (1446). I
            consiglieri, rivolti di spalle all&apos;osservatore, uno in blu e
            l&apos;altro in nero, indossano vesti di tipo <i>vestina</i>.
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="vestina3.jpg"
        width={649}
        height={475}
        title={
          <>
            David, indossando una veste di tipo <i>vestina</i>, uccide Golia.
            Xilografia dalla Bibbia di Kutná Hora (1489).
          </>
        }
      />
    </Row>
    <Row>
      <Col>
        <h5>Veste arricciata con maniche a sacco</h5>
        <p>
          Questo tipo di veste è caratterizzato da maniche a sacco e ricche
          arricciature per tutta la sua lunghezza. La versione ceca si
          differenzia dalle controparti dell&apos;Europa occidentale, in
          particolare nella costruzione delle maniche. Sembra che in Boemia si
          mantenesse un&apos;attaccatura profonda della manica, la cosiddetta{' '}
          <i>grande assiette</i>, che conferiva alle vesti ceche di questo tipo
          un aspetto alquanto appiattito, in contrasto con la forma più squadrata
          tipica dell&apos;Europa occidentale. Ciò diventa particolarmente
          evidente quando combinato con soprabiti privi di spalle imbottite, come
          era comune in Borgogna e in Francia. In Occidente, questo tipo di
          manica aveva di solito due aperture per inserire la mano: una al polso,
          come è consueto per le maniche normali, e l&apos;altra
          approssimativamente all&apos;altezza del gomito. Sebbene raffigurazioni
          di tali maniche si possano trovare, ad esempio, nella Bibbia di Kutná
          Hora, altre raffigurazioni ceche coeve suggeriscono che le maniche
          ceche fossero tipicamente più squadrate e avessero una sola apertura
          per la mano, circa all&apos;altezza del gomito. Questa costruzione
          della manica può essere confermata indirettamente da alcune fonti
          scritte. Ad esempio, in un libro giudiziario di Rakovník del 1486 si
          trova una registrazione:
          <Cit>
            Poručil jsem, aby kladl peníze do truhly, a on kladl do rukáva sukně
            své.
          </Cit>{' '}
          (Gli ordinai di mettere il denaro nella cassa, e lui lo mise nella
          manica della sua veste.) Altrove si può leggere:{' '}
          <Cit>
            Vyňal peníze s měchýřem, dosti pěkný uzlík, a vložil je do rukáva.
          </Cit>{' '}
          (Tirò fuori il denaro, un bel sacchetto, e lo mise nella manica.)
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6b068610-fe2a-11e6-97b4-5ef3fc9ae867"
          />
        </p>
        <p>Questo tipo di veste era più spesso foderato di pelliccia.</p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="sukne-pytle1.jpg"
        width={1140}
        height={1631}
        title="Un esempio tipico di veste dell'Europa occidentale con maniche a sacco, raffigurata nell'estratto dal dipinto Esumazione di Sant'Uberto di Rogier van der Weyden, 1430."
      />
      <ImageWithTitle
        md={4}
        src="sukne-pytel2.jpg"
        width={259}
        height={375}
        title="Un altro esempio tipico di veste dell'Europa occidentale con maniche a sacco, raffigurata nell'estratto dal trittico per Alessandro Sforza, ancora di Rogier van der Weyden, 1460."
      />
      <ImageWithTitle
        md={4}
        src="sukne-pytel4.jpg"
        width={494}
        height={831}
        title="Due vesti con maniche a sacco raffigurate nelle Croniques abregies di David Aubert, 1471. Particolarmente interessante è la veste verde, la cui manica non si restringe verso il polso e rimane larga. Una veste simile si può trovare nelle illustrazioni del Libro commemorativo di Olomouc."
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="saul-pomazani.jpg"
        width={1058}
        height={504}
        title="L'uomo a sinistra indossa una veste con maniche a sacco e due aperture per le mani, come era consuetudine nell'Europa occidentale, nella xilografia raffigurante l'unzione del re Saul, Bibbia di Kutná Hora (1489)."
      />
      <ImageWithTitle
        md={4}
        src="klobouk-richental.jpg"
        width={240}
        height={320}
        title="Uomo in una veste con maniche a sacco e due aperture per le mani nell'estratto dalla Cronaca di Richental (1470-1480)."
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="zasedaniradyolomouc.jpg"
        width={974}
        height={1622}
        title="Riunione del consiglio municipale nella raffigurazione del Libro commemorativo di Olomouc (1430-1492). Lo scrivano Václav di Jihlava (in basso a sinistra) indossa una veste blu, foderata di pelliccia, con una manica a sacco squadrata e una sola apertura per la mano. Il consigliere in blu sopra di lui ha una veste con manica a sacco, ma con estremità libera, similmente all'uomo in verde della miniatura nelle Cronache abbreviate di David Aubert. Si nota anche come le vesti ceche appaiano alquanto appiattite rispetto alle controparti occidentali."
      />
      <ImageWithTitle
        md={4}
        src="vaclav-z-jihlavy.jpg"
        width={240}
        height={320}
        title="Václav di Jihlava in una veste viola foderata di pelliccia con maniche a sacco. Estratto dal Libro giuridico di Brno di Václav di Jihlava (1446)."
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="sukne-pytel5.jpg"
        width={632}
        height={972}
        title="Uomo facoltoso in una lunga veste foderata di pelliccia con manica a sacco squadrata, in una pagina del Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        md={5}
        src="sukne-pytel6.jpg"
        width={1224}
        height={1742}
        title="Sacerdote in una lunga veste foderata di pelliccia con manica a sacco squadrata, in un ritaglio dal Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="sukne-pytel7.jpg"
        width={382}
        height={872}
        title="Uomo facoltoso in una lunga veste foderata di pelliccia con manica a sacco squadrata, in un ritaglio dal Codice di Jena (1490-1510)."
      />
    </Row>
  </>
)
