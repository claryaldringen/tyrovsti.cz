import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const InstruktionVerteidigung = () => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="margraves-instruction-on-defending-the-wagon-fort"
        />
        <h4>
          Instruktion des Markgrafen Albrecht vom 15. Mai 1475 zur Verteidigung
          der Wagenburg
        </h4>
        <p>Übersetzt von PhDr. Zdeňka Kopková</p>
        <p>
          Die Instruktion stammt aus der Zeit, als das Reichsheer dem vom
          burgundischen Herzog Karl dem Kühnen belagerten Neuss zu Hilfe zog;
          Markgraf Albrecht Achilles gehörte zu seinen führenden Befehlshabern.
          Der Text auf dieser Seite folgt Toman, der ihn von Joseph Würdinger
          übernahm. Würdinger datierte die Instruktion unter Berufung auf das
          Nürnberger Archiv auf den 15. Mai 1475 und gibt sie nicht im
          ursprünglichen Wortlaut wieder, sondern in einer Nacherzählung im
          Deutsch des 19. Jahrhunderts.
          <Qt
            publication={PUBLICATIONS.WURDINGER2}
            href="https://www.digitale-sammlungen.de/de/view/bsb11684126?page=411"
          />{' '}
          Den ursprünglichen Wortlaut desselben Befehls veröffentlichte Felix
          Priebatsch unter den Schriftstücken zum Kriegsrat vom 25. April 1475
          nach einer Abschrift im Straßburger Stadtarchiv. Markgraf Albrecht
          wird darin in der dritten Person genannt, als Wagenburgmeister werden
          Lutz Schott und Köckeritz angeführt, und der Befehl rechnet auch mit
          Beschuss aus der Stadt Zons am Rhein.
          <Qt
            publication={PUBLICATIONS.PRIEBATSCH2}
            href="https://archive.org/details/politischecorres02albr/page/143/mode/1up"
          />
        </p>

        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <ol>
          <li>
            Man soll Graben und Bollwerk um die Wagenburg bessern, Büchsen und
            andere Geschoss an die vier Seiten vertheilen, die Pferde aus der
            äusseren Zeile entfernen.
          </li>
          <li>
            Zu jedem Wagen sechs Mann zu Fuss bestellen, von dem reisigen Zeug
            soll ein Viertheil vor den Wagen bleiben, die übrigen zur
            Vertheilung in die Wagenburg geschickt werden.
          </li>
          <li>
            An jegliches der zwei Thore kommen 1000 Mann Fussvolk mit einigen
            Reitern. An jedes äussere Eck der Wagenburg 500 Fussknecht, die da
            auf beiden Seiten, wo es Not wird, zur Wehre sind bis auf das andere
            Eck, das gegen sie herauf dient.
          </li>
          <li>
            Zwei tausend sollen mitten auf dem Platz in der Wagenburg mit den
            andern Haufen bleiben, und von da aus, wo es Not thut, zu Hilfe
            eilen.
          </li>
          <li>
            Die Wartleut sollen sich mit dem Feind in kein Scharmützel
            einlassen.
          </li>
          <li>
            Hat ein Viertheil der Büchsen- und Armbrustschützen abge- schossen,
            soll das andere warten, bis das erste wieder geladen, oder die Armst
            gespannt hat.
          </li>
          <li>
            Der Obersthauptmann und die ihm zugegebenen vier Hauptleut sollen
            mit dem frühesten herumreiten, und wo es Not thut, die Leute zur
            Wehr bringen.
          </li>
          <li>
            (Zur Verfolgung des abgetriebenen Feindes werden besondere
            Abtheilungen bestimmt.)
            <Qt
              publication={PUBLICATIONS.TOMAN}
              href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:d9b9294a-9488-4e4f-961e-1984eba3e4fd"
            />
            <Qt
              publication={PUBLICATIONS.WURDINGER2}
              href="https://www.digitale-sammlungen.de/de/view/bsb11684126?page=411"
            />
            <Qt
              publication={PUBLICATIONS.PRIEBATSCH2}
              href="https://archive.org/details/politischecorres02albr/page/143/mode/1up"
            />
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <ol>
          <li>
            Es ist notwendig, den Graben und die Befestigung (Bastion) um die
            Wagenburg zu verbessern; Kanonen und andere Geschosse auf die vier
            Seiten zu verteilen und die Pferde aus der äußeren Reihe zu
            entfernen.
          </li>
          <li>
            Jedem Wagen sind sechs Mann zu Fuß zuzuweisen; ein Viertel der
            Reiterei soll vor den Wagen verbleiben, der Rest soll zur Verteilung
            in die Wagenburg geschickt werden.
          </li>
          <li>
            An jedes der beiden Tore sollen 1.000 Fußsoldaten mit einigen
            Reitern treten. An jede äußere Ecke der Wagenburg 500 Fußknechte,
            die auf beiden Seiten zur Verteidigung bereitstehen sollen, wo es
            nötig ist, bis hin zur gegenüberliegenden Ecke.
          </li>
          <li>
            Zweitausend sollen mit den übrigen Truppen in der Mitte des Platzes
            innerhalb der Wagenburg verbleiben und von dort dorthin eilen, wo
            Hilfe benötigt wird.
          </li>
          <li>
            Die Wachen sollen sich auf kein Scharmützel mit dem Feind einlassen.
          </li>
          <li>
            Wenn ein Viertel der Büchsen- und Armbrustschützen geschossen hat,
            soll das andere Viertel warten, bis das erste nachgeladen oder die
            Armbrust neu gespannt hat.
          </li>
          <li>
            Der Oberbefehlshaber und die ihm zugewiesenen vier Hauptleute sollen
            bei nächster Gelegenheit herumreiten und, wo es nötig ist, die
            Mannschaft zur Verteidigung bringen.
          </li>
          <li>
            (Besondere Abteilungen werden für die Verfolgung des
            zurückgeschlagenen Feindes bestimmt.)
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
