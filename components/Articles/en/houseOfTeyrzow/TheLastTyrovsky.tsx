import { Col, Row } from 'reactstrap'
import React from 'react'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'

export const TheLastTyrovsky = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="the-last-tyrovsky" />
        <h4>The last Týřovský (1701–1771)</h4>
        <p>
          Kočka&apos;s genealogy ends with the sale of Chříč and the death of
          Michal Antonín in 1705. The fortunes of the last generation of the
          family were traced by August Sedláček in his entry in Otto&apos;s
          Encyclopaedia, on which this chapter is based.
        </p>
        <p>
          Vojtěch Ignác&apos;s widow, Kateřina Magdalena, held Trnová in
          1696–1697, bought Malá Chyška in 1703 and died on 31 July 1708. Of the
          daughters, Polyxena Lidmila married Václav Popovský of Šarfenbach at
          Oblajovice in 1710.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="p. 154"
          />
        </p>
        <p>
          The eldest of the three brothers, Jan Vilém, held Dolní Nerestce and
          Krsice and left an only daughter, Josefa Anna; his widow, née
          Příchovská, remarried in 1713. František Pavel first had Myskovice and
          from 1704 Vlčkovice and Bořetice. From 1703 he was married to Anna
          Markéta Hrobčická, the widowed Malovcová of Chýnov, and died around
          1717 without children.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="p. 154"
          />
        </p>
        <p>
          Michal Antonín, to whom Chříč and Kožlany fell in the division,
          married on 1 November 1700 Marie Konstancie, Countess of Sporck, lady
          of Radenín. He died as early as 14 February 1705 at the age of
          twenty-eight; the widow remarried Karel Josef Voračický of Paběnice
          and died in 1735. The marriage produced the daughters Marie Konstancie
          (1701–1722) and Marie Anna (born 1704, married in 1755 to Jan
          František, Baron of Fünfkirchen) and the posthumous son Jan Michal.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="p. 154"
          />
        </p>
        <p>
          Jan Michal, the last male descendant of the family, inherited
          Vlčkovice from his uncle František and bought Neustupov in 1729. In
          the same year he became a councillor of the court of appeal and soon
          afterwards a judge of the land court; in 1737 he is listed as{' '}
          <Cit>
            Herr auf Boretic, Neu-Stupov und Vlckovic, kais. Rath,
            Hoflehnrechts-Beisitzer und königl. Hauptmann des Bechiner Kreises
          </Cit>{' '}
          (lord of Bořetice, Neustupov and Vlčkovice, imperial councillor,
          assessor of the court feudal law and royal captain of the Bechyně
          district), and he still figures in the calendar of St Adalbert in
          1768.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="p. 154"
          />
          <Qt publication={PUBLICATIONS.MERAVIGLIA} note="p. 39–40" />
          Around 1759 he{' '}
          <Cit>
            upadl v hypochondrickou nemoc, pro kterou byl pod poručenstvím
          </Cit>{' '}
          (fell into a hypochondriac illness, on account of which he was placed
          under guardianship); his estates were sold in the same year. His wife
          Antonie Josefa, Countess of Millesimo, died on 29 November 1771.{' '}
          <Cit>Kdy Jan, poslední po meči, zemřel, není známo.</Cit> (When Jan,
          the last of the male line, died is not known.)
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="p. 154"
          />
        </p>
        <p>
          The blood of the family, however, lived on in the female line.
          Kateřina, according to Sedláček perhaps a sister of Jan at Chříč, was
          married to Kryštof Jindřich Krakovský of Kolovrat, and Lidmila
          Týřovská to his grandson Bernart Alexandr Krakovský; both were, as
          Sedláček wrote in 1906, <Cit>prabáby nynějších hrabat z Kolovrat</Cit>{' '}
          (great-grandmothers of the present counts of Kolovrat).
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="p. 154"
          />
        </p>
      </Col>
    </Row>
  </>
)
