import { Col, Row } from 'reactstrap'
import React from 'react'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'

export const DieLetztenTyrovsky = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="die-letzten-tyrovsky" />
        <h4>Die letzten Týřovský (1701–1771)</h4>
        <p>
          Kočkas Stammtafel endet mit dem Verkauf von Chříč und dem Tod Michal
          Antoníns im Jahr 1705. Die Schicksale der letzten Generation des
          Geschlechts verfolgte August Sedláček in seinem Artikel in Ottos
          Konversationslexikon, auf dem dieses Kapitel beruht.
        </p>
        <p>
          Die Witwe Vojtěch Ignács, Kateřina Magdalena, besaß in den Jahren 1696
          bis 1697 Trnová, kaufte 1703 Malá Chyška und starb am 31. Juli 1708.
          Von den Töchtern heiratete Polyxena Lidmila 1710 Václav Popovský von
          Šarfenbach auf Oblajovice.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="S. 154"
          />
        </p>
        <p>
          Der älteste der drei Brüder, Jan Vilém, besaß Dolní Nerestce und
          Krsice und hinterließ eine einzige Tochter, Josefa Anna; seine Witwe,
          eine geborene Příchovská, heiratete 1713 erneut. František Pavel hatte
          zunächst Myskovice und ab 1704 Vlčkovice und Bořetice. Seit 1703 war
          er mit Anna Markéta Hrobčická, der verwitweten Malovcová von Chýnov,
          verheiratet und starb um 1717 kinderlos.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="S. 154"
          />
        </p>
        <p>
          Michal Antonín, dem bei der Teilung Chříč und Kožlany zugefallen
          waren, heiratete am 1. November 1700 Marie Konstancie Gräfin von
          Sporck, Herrin auf Radenín. Er starb schon am 14. Februar 1705 im
          Alter von achtundzwanzig Jahren; die Witwe heiratete in zweiter Ehe
          Karel Josef Voračický von Paběnice und starb 1735. Aus der Ehe gingen
          die Töchter Marie Konstancie (1701–1722) und Marie Anna (geboren 1704,
          1755 mit Jan František Freiherrn von Fünfkirchen vermählt) sowie der
          nachgeborene Sohn Jan Michal hervor.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="S. 154"
          />
        </p>
        <p>
          Jan Michal, der letzte männliche Nachkomme des Geschlechts, erbte nach
          seinem Oheim František Vlčkovice und kaufte 1729 Neustupov. Im selben
          Jahr wurde er Appellationsrat und bald darauf Beisitzer des
          Landrechts; 1737 wird er als{' '}
          <Cit>
            Herr auf Boretic, Neu-Stupov und Vlckovic, kais. Rath,
            Hoflehnrechts-Beisitzer und königl. Hauptmann des Bechiner Kreises
          </Cit>{' '}
          angeführt, und im St.-Adalberts-Kalender erscheint er noch 1768.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="S. 154"
          />
          <Qt publication={PUBLICATIONS.MERAVIGLIA} note="S. 39–40" /> Um 1759{' '}
          <Cit>
            upadl v hypochondrickou nemoc, pro kterou byl pod poručenstvím
          </Cit>{' '}
          (verfiel er in eine hypochondrische Krankheit, derentwegen er unter
          Vormundschaft stand); seine Güter wurden im selben Jahr verkauft.
          Seine Gemahlin Antonie Josefa Gräfin von Millesimo starb am 29.
          November 1771.{' '}
          <Cit>Kdy Jan, poslední po meči, zemřel, není známo.</Cit> (Wann Jan,
          der Letzte im Mannesstamm, starb, ist nicht bekannt.)
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="S. 154"
          />
        </p>
        <p>
          Das Blut des Geschlechts lebte jedoch in weiblicher Linie fort.
          Kateřina, nach Sedláček wohl eine Schwester Jans auf Chříč, war mit
          Kryštof Jindřich Krakovský von Kolovrat verheiratet und Lidmila
          Týřovská mit dessen Enkel Bernart Alexandr Krakovský; beide waren, wie
          Sedláček 1906 schrieb, <Cit>prabáby nynějších hrabat z Kolovrat</Cit>{' '}
          (Urahninnen der heutigen Grafen von Kolowrat).
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="S. 154"
          />
        </p>
      </Col>
    </Row>
  </>
)
