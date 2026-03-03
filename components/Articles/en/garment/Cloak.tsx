import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle/ImageWithTitle'

export const Cloak = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="cloak" />
        <h4>Cloak</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          The cloak was a very popular type of men&apos;s and women&apos;s outer
          garment. Its cut varied greatly and the names of individual types of
          cuts considerably overlapped, making it quite difficult today to
          distinguish which specific type of garment was meant. We can encounter
          terms such as <i>plášček</i>, <i>pláščík</i>; in the Luxembourg period
          it began to be called <i>klok</i>, <i>kloček</i>, from the French form{' '}
          <i>cloque</i>, Latin <i>clanis</i>, further Latin <i>pelicio</i>,
          German <i>tasselmantel</i>, <i>mantl</i> and <i>mantlík</i>. Most
          commonly, we encounter cloaks of a semi-circular cut, but a
          three-quarter circle cut was also worn. The length of the cloak varied
          and it could come in a whole palette of colours, but blue, green, pink
          and grey clearly predominated.
        </p>
        <p>
          The cloak was most often fastened at the chest under the chin. An
          ornamental brooch called an <i>agrafa</i> could serve this purpose;
          its shape, colour and decoration had religious significance, which is
          why we often encounter a lozenge-shaped agrafa decorated with precious
          stones arranged in the shape of a cross, or its vertices could be
          finished with pearls resembling a lily. A semi-circular cloak fastened
          with an agrafa is most frequently found in depictions of the Virgin
          Mary. Furthermore, cloaks were fastened with a cord or strap, or with
          a decorative band placed across, or also, especially for shorter
          cloaks, with three buttons under the chin or more often on the
          shoulder.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="agrafa.jpg"
        width={234}
        height={558}
        title="A long cloak fastened with an agrafa in an excerpt from the Crucifixion from Nové Sady, 1440."
      />
      <ImageWithTitle
        md={4}
        src="plastspruhem.jpg"
        width={408}
        height={840}
        title="Long cloaks fastened with a band of fabric, Křivoklát Altarpiece, probably 1483."
      />
      <ImageWithTitle
        md={4}
        src="plast-knofliky.jpg"
        width={487}
        height={423}
        title="A shorter cloak fastened with three buttons at the front on the painting of St. Roch of Italian provenance, 1480."
        href="svroch.jpeg"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="plast-rameno-jensky1.jpg"
        width={414}
        height={738}
        title="A shorter cloak fastened at the shoulder, excerpt from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="plast-rameno-jensky2.jpg"
        width={342}
        height={742}
        title="A shorter cloak fastened at the shoulder, excerpt from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="plast-rameno-richental.jpg"
        width={386}
        height={756}
        title="A cloak fastened with buttons at the shoulder, excerpt from the Richental Chronicle (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Another group of cloaks comprises cloaks that some scholars today
          refer to by the artificial term <i>cloak-tunic</i>. Two types of
          cloaks fall into this category: the first, which in its shape
          resembles the Italian garment <i>giornea</i>, and the second, which
          has slits for the hands and is closer to a <i>gown</i> or the Western
          European <i>houppelande</i>.
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
            Nuremberg tailor Hans Frumann creates pleats on a cloak of the{' '}
            <i>giornea</i> type, a page from the House Book of the Nuremberg
            Twelve Brothers Foundation, 1446.
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
            A cloak of the <i>giornea</i> type, excerpt from the Richental
            Chronicle (1470-1480).
          </>
        }
      />
      <ImageWithTitle
        md={3}
        src="pltunika2.jpg"
        width={626}
        height={1048}
        title="A cloak with slits for the hands, excerpt from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="pltunika1.jpg"
        width={420}
        height={1008}
        title="A cloak with slits for the hands, excerpt from the Codex of Jena (1490-1510)."
      />
    </Row>
  </>
)
