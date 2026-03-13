import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const Stocco = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="stocco" />
        <h4>Stocco (Harnischkampfschwert){draft && <DraftBadge />}</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Lo stocco (in polacco <i>estok</i>, in inglese e francese <i>estoc</i>
          ) è una spada con una lama molto stretta e rigida, progettata per
          penetrare in una fessura dell&apos;armatura a piastre e
          successivamente attraverso la maglia sottostante. Si differenzia dal
          simile koncerz (in polacco <i>koncerz</i>) principalmente per
          l&apos;impugnatura a due mani
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Estok"
          />{' '}
          sebbene entrambi i tipi di spade siano spesso confusi nella
          letteratura. In tedesco, sia il koncerz che lo stocco rientrano nella
          categoria delle spade <i>Panzerbrecher</i> (perforatori di armatura),
          ma per la variante dello stocco utilizzata nell&apos;
          <i>Harnischfechten</i> (scherma in armatura), i tedeschi usano il
          termine <i>Harnischkampfschwert</i>. Per rendere le cose ancora più
          complesse, il termine <i>Harnischkampfschwert</i> è utilizzato per
          tutte le spade destinate all&apos;<i>Harnischfechten</i>, incluse le
          spade da esercitazione con una lama rientrante per l&apos;impugnatura
          chiamata <i>Halbschwert</i>
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Panzerbrecher"
          />
          , che tuttavia non presentano una lama altrettanto stretta quanto gli
          stocchi. Questo articolo, tuttavia, tratterà una categoria speciale di
          stocchi (harnischkampfschwert) che sono modificati in qualche modo per
          sferrare colpi, in particolare il celebre <i>Mortschlag</i>. Di tali
          stocchi, al confine tra una spada e un martello da guerra, ne sono
          sopravvissuti — probabilmente tre.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="estoc14.jpg"
        width={530}
        height={1200}
        title="Uno stocco classico con impugnatura a due mani dell'inizio del XVI secolo."
      />
      <ImageWithTitle
        md={3}
        src="estoc15.jpg"
        width={960}
        height={1200}
        title="Un koncerz con impugnatura a una mano dal Metropolitan Museum of Art di New York, fine XVI secolo."
      />
      <ImageWithTitle
        md={3}
        src="estoc16.jpg"
        width={760}
        height={2218}
        title={
          <>
            Un <i>Harnischkampfschwert</i> da esercitazione dal
            Kunsthistorisches Museum di Vienna, che non è uno stocco.
          </>
        }
      />
      <ImageWithTitle
        md={3}
        src="harnischkampfschwertes.jpeg"
        width={784}
        height={1200}
        title="Harnischkampfschwert (i primi due; il terzo è destinato al combattimento con scudo) in un'illustrazione dal manoscritto di Hans Talhoffer, 1459."
      />
    </Row>
    <Row>
      <Col>
        <h5>
          Il cosiddetto <Cit>stocco teutonico</Cit>
        </h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="estoc1.png" width={1920} height={310} title="" />
    </Row>
    <Row>
      <ImageWithTitle
        src="estoc2.png"
        width={1920}
        height={310}
        title="Fig. 1"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Questo stocco fa parte del deposito del Museo dei Principi
          Czartoryski, attualmente conservato nell&apos;armeria del Castello
          Reale del Wawel a Cracovia, con numero di inventario MNK XIV-49. È
          datato approssimativamente al XIV o XV secolo. Presenta una lama in
          acciaio spessa completamente conservata, di sezione rettangolare quasi
          quadrata, che si assottiglia verso una punta leggermente arrotondata.
          Né i bordi né la punta mostrano segni di affilatura. La guardia ha la
          forma di una semplice croce composta da robusti tondini di acciaio che
          si assottigliano verso punte arrotondate e hanno anch&apos;essi una
          sezione quasi quadrata (fig. 3 e 4). Il codolo è spesso e di sezione
          quadrata (fig. 3), appiattito nel piano della guardia.
          Sull&apos;impugnatura c&apos;è spazio sufficiente per circa una mano e
          mezza di un uomo adulto medio. Sul codolo è stato collocato un
          rivestimento provvisorio in legno. È leggermente più largo al centro
          (fig. 1). Tuttavia, copre un solo lato ed è probabilmente molto più
          recente dell&apos;artefatto stesso, sul quale è trattenuto solo da una
          targa d&apos;argento recante l&apos;iscrizione{' '}
          <Cit>Teutonico dal tesoro reale</Cit>, apposta a metà del XIX secolo.
          Il pomolo è grande e massiccio, a forma di tetracaidecaedro irregolare
          con quattro lati concavi (fig. 5). L&apos;arma complessiva misura 1586
          mm di lunghezza e pesa 4050 g. Il suo baricentro si trova sulla lama,
          a 230 mm dal bordo inferiore della guardia.
          <Qt publication={PUBLICATIONS.TALAGA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={7}
        src="estoc3.png"
        width={1040}
        height={570}
        title="Fig. 3"
      />
      <ImageWithTitle
        md={5}
        src="estoc4.png"
        width={734}
        height={570}
        title="Fig. 4"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="estoc5.png"
        width={958}
        height={702}
        title="Fig. 5"
      />
      <ImageWithTitle
        md={4}
        src="estoc9.png"
        width={756}
        height={848}
        title="Fig. 8"
      />
    </Row>
    <Row>
      <Col>
        <h6>Lama</h6>
        <p>
          La lama è in acciaio e ben conservata (fig. 1). I bordi e la punta
          della lama sono leggermente arrotondati. La lama è leggermente piegata
          nel piano perpendicolare al piano della guardia. La curvatura è
          visibile a circa tre quarti della lunghezza della lama, più vicino
          alla punta, e non supera 1 mm dall&apos;asse longitudinale della lama.
          Non siamo ancora in grado di determinare quando o in quali circostanze
          si sia verificata questa deformazione. Su tutte e quattro le superfici
          della lama sono presenti marchi di spadaio a forma di stella a cinque
          punte e di mezzaluna, ciascuno con un diametro da 5 a 6 mm (fig. 8).
          Due marchi su lati opposti della lama sono posti a 45 mm dal bordo
          inferiore della guardia, mentre gli altri due distano 53 mm. La lama è
          lunga 1346 mm. Alla guardia, la sua larghezza è di 29,5 mm e il suo
          spessore è di 25,5 mm.
          <Qt publication={PUBLICATIONS.TALAGA} />
        </p>
        <h6>Guardia, impugnatura e pomolo</h6>
        <p>
          Il pomolo è grande e massiccio (fig. 5, 6 e 7). Sulle sue dodici facce
          sono presenti fossette circolari con un diametro da 2 a 4 mm e una
          profondità fino a 2 mm (fig. 5 e 6). Inoltre, vi sono stati incisi tre
          marchi di spadaio, analoghi a quelli sulla lama, di cui uno è
          completamente conservato. Il marchio completo ha forma circolare e un
          diametro di 4 mm. I diametri dei marchi rimanenti sono minori, circa 3
          mm. Il codolo è spesso e robusto, corrispondente alle dimensioni del
          pomolo e della lama (fig. 3). Ma un dettaglio insolito attira
          l&apos;attenzione. La punta del codolo non sporge minimamente sopra la
          parte superiore del pomolo e non mostra alcun segno di ribattitura
          (fig. 3 e 7). Inoltre, è circondato da una macchia scura e
          caratteristica, che forse indica un rivetto mancante (fig. 7). La
          guardia è robusta (fig. 3 e 4). Le sue braccia hanno punte arrotondate
          e, come la lama, presentano una sezione quasi quadrata con una
          diagonale di 13 mm. La guardia è lunga 208 mm. Su entrambi i lati si
          trovano alcuni graffi e abrasioni o ammaccature minori, ma in generale
          a occhio nudo non sono visibili tracce di uso o usura.
          L&apos;impugnatura è ben conservata. Tutti gli elementi sono in
          acciaio, ma poiché non è stata effettuata alcuna analisi chimica, la
          sua qualità resta ignota. Le dimensioni del pomolo sono: altezza 63
          mm, larghezza 84 mm, spessore 85 mm.
          <Qt publication={PUBLICATIONS.TALAGA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={6}
        src="estoc6.png"
        width={1648}
        height={724}
        title="Fig. 6"
      />
      <ImageWithTitle
        md={6}
        src="estoc7.png"
        width={1640}
        height={818}
        title="Fig. 7"
      />
    </Row>
    <Row>
      <Col>
        <h5>Stocco di Vilnius</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="estoc10.png" width={1920} height={414} title="" />
    </Row>
    <Row>
      <p>
        Questo stocco è conservato nel Museo Nazionale Lituano a Vilnius
        (registrato come &apos;spada a due mani&apos;, numero di inventario
        IM-839). Purtroppo, le uniche fotografie disponibili provengono dal
        catalogo della collezione del museo pubblicato nel 1979. Mostrano
        un&apos;arma somigliante a uno stocco con una lama a sezione
        rettangolare, un&apos;impugnatura a due mani, punte della guardia
        affilate e un pomolo rotondo e appuntito. La sua descrizione scritta è
        coerente con queste osservazioni. Le dimensioni note dell&apos;artefatto
        sono: lunghezza totale dell&apos;arma 135 cm e lunghezza della lama 99
        cm. È datato tra il XIV e il XVI secolo e costituisce l&apos;analogia
        più prossima nota al suddetto stocco di Cracovia. Purtroppo, il
        personale del museo di Vilnius lo considera un falso del XIX secolo,
        dato che non era stato registrato nel suddetto catalogo. Tuttavia,
        sembra che attualmente non vi siano prove decisive a sostegno di tale
        ipotesi. Inoltre, l&apos;arma è molto simile alle spade raffigurate nel
        compendio di Paulus Hector Mair.
        <Qt publication={PUBLICATIONS.TALAGA} />
      </p>
    </Row>
    <Row>
      <Col>
        <h5>Stocco combinato con un&apos;arma da fuoco portatile</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="estoc13.jpg" width={1920} height={469} title="" />
    </Row>
    <Row>
      <p>
        Quest&apos;arma si trova nelle collezioni delle Royal Armouries in Gran
        Bretagna con numero di inventario XIV.10. Combina uno stocco con
        un&apos;arma da fuoco portatile. È datata intorno al 1520 e si ritiene
        sia appartenuta un tempo al famigerato re Enrico VIII. Presenta una lama
        da stocco e una guardia robusta e appuntita, mentre al posto
        dell&apos;impugnatura e del pomolo ha una canna di arma da fuoco
        portatile, fissata al codolo che termina con una vite.
        <Qt publication={PUBLICATIONS.TALAGA} /> L&apos;arma è lunga 195 cm.
        <Qt
          publication={PUBLICATIONS.RA}
          href="https://royalarmouries.org/collection/object/object-1294"
        />{' '}
        Purtroppo, finora non è stato pubblicato nulla di più dettagliato al
        riguardo.
        <Qt publication={PUBLICATIONS.TALAGA} />
      </p>
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="estoc11.jpg"
        width={1920}
        height={503}
        title=""
      />
      <ImageWithTitle
        md={4}
        src="estoc12.jpg"
        width={1256}
        height={1920}
        title=""
      />
    </Row>
  </>
)
