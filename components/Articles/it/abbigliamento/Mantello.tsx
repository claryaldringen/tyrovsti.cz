import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle/ImageWithTitle'

export const Mantello = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="mantello" />
        <h4>Mantello</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Il mantello era un tipo di indumento esterno molto popolare sia
          maschile che femminile. Il suo taglio variava notevolmente e i nomi
          dei singoli tipi di taglio si sovrapponevano considerevolmente,
          rendendo oggi piuttosto difficile distinguere quale specifico tipo di
          indumento si intendesse. Possiamo incontrare termini come{' '}
          <i>plášček</i>, <i>pláščík</i>; nel periodo lussemburghese iniziò a
          essere chiamato <i>klok</i>, <i>kloček</i>, dalla forma francese{' '}
          <i>cloque</i>, latino <i>clanis</i>, inoltre latino <i>pelicio</i>,
          tedesco <i>tasselmantel</i>, <i>mantl</i> e <i>mantlík</i>. Più
          comunemente si incontravano mantelli con taglio semicircolare, ma si
          indossava anche il taglio a tre quarti di cerchio. La lunghezza del
          mantello variava e poteva presentarsi in un&apos;intera gamma di
          colori, ma il blu, il verde, il rosa e il grigio predominavano
          nettamente.
        </p>
        <p>
          Il mantello era più spesso allacciato sul petto, sotto il mento. A
          questo scopo poteva servire una spilla ornamentale chiamata{' '}
          <i>agrafa</i>; la sua forma, il colore e la decorazione avevano un
          significato religioso, motivo per cui incontriamo spesso
          un&apos;agrafa a forma di losanga decorata con pietre preziose
          disposte a forma di croce, oppure i suoi vertici potevano essere
          rifiniti con perle che ricordavano un giglio. Un mantello
          semicircolare allacciato con un&apos;agrafa si trova più
          frequentemente nelle raffigurazioni della Vergine Maria. Inoltre, i
          mantelli venivano allacciati con un cordone o una cinghia, oppure con
          una fascia decorativa posta trasversalmente, e anche, specialmente per
          i mantelli più corti, con tre bottoni sotto il mento o più spesso
          sulla spalla.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="agrafa.jpg"
        width={234}
        height={558}
        title="Un mantello lungo allacciato con un'agrafa in un estratto dalla Crocifissione di Nové Sady, 1440."
      />
      <ImageWithTitle
        md={4}
        src="plastspruhem.jpg"
        width={408}
        height={840}
        title="Mantelli lunghi allacciati con una fascia di tessuto, Pala d'altare di Křivoklát, probabilmente 1483."
      />
      <ImageWithTitle
        md={4}
        src="plast-knofliky.jpg"
        width={487}
        height={423}
        title="Un mantello più corto allacciato con tre bottoni sul davanti nel dipinto di San Rocco di provenienza italiana, 1480."
        href="svroch.jpeg"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="plast-rameno-jensky1.jpg"
        width={414}
        height={738}
        title="Un mantello più corto allacciato sulla spalla, estratto dal Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="plast-rameno-jensky2.jpg"
        width={342}
        height={742}
        title="Un mantello più corto allacciato sulla spalla, estratto dal Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="plast-rameno-richental.jpg"
        width={386}
        height={756}
        title="Un mantello allacciato con bottoni sulla spalla, estratto dalla Cronaca di Richental (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Un altro gruppo di mantelli comprende mantelli che alcuni studiosi
          oggi indicano con il termine artificiale <i>mantello-tunica</i>. Due
          tipi di mantelli rientrano in questa categoria: il primo, che nella
          sua forma ricorda l&apos;indumento italiano <i>giornea</i>, e il
          secondo, che presenta aperture per le mani e si avvicina più a una{' '}
          <i>veste</i> o all&apos;<i>houppelande</i> dell&apos;Europa
          occidentale.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="giornea1.jpg"
        width={1400}
        height={1908}
        title={
          <>
            Il sarto norimberghese Hans Frumann crea pieghe su un mantello di
            tipo <i>giornea</i>, una pagina dal Libro della Casa della
            Fondazione dei Dodici Fratelli di Norimberga, 1446.
          </>
        }
      />
      <ImageWithTitle
        md={3}
        src="bocni-richental.jpg"
        width={390}
        height={520}
        title={
          <>
            Un mantello di tipo <i>giornea</i>, estratto dalla Cronaca di
            Richental (1470-1480).
          </>
        }
      />
      <ImageWithTitle
        md={3}
        src="pltunika2.jpg"
        width={626}
        height={1048}
        title="Un mantello con aperture per le mani, estratto dal Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="pltunika1.jpg"
        width={420}
        height={1008}
        title="Un mantello con aperture per le mani, estratto dal Codice di Jena (1490-1510)."
      />
    </Row>
  </>
)
