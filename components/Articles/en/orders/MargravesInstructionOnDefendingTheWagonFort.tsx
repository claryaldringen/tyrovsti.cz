import { Col, Row } from 'reactstrap'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const MargravesInstructionOnDefendingTheWagonFort = ({
  draft,
}: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="margraves-instruction-on-defending-the-wagon-fort"
        />
        <h4>
          Instruction of Margrave Albrecht of 15 May 1475 on Defending the Wagon
          Fort
          {draft && <DraftBadge />}
        </h4>
        <p>Translated by PhDr. Zdeňka Kopková</p>

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
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <ol>
          <li>
            It is necessary to improve the ditch and fortification (bastion)
            around the wagon fort; distribute cannons and other projectiles to
            the four sides, and remove the horses from the outer row.
          </li>
          <li>
            Assign six men on foot to each wagon; one quarter of the cavalry
            shall remain in front of the wagons, the rest shall be sent to the
            wagon fort for distribution.
          </li>
          <li>
            To each of the two gates, 1,000 infantrymen with several horsemen
            shall report. To each outer corner of the wagon fort, 500
            infantrymen, who shall stand ready for defence on both sides where
            needed, up to the other corner that serves opposite them above.
          </li>
          <li>
            Two thousand shall remain with the other troops in the middle of the
            square inside the wagon fort and from there rush to aid wherever
            there is need.
          </li>
          <li>The sentries shall not engage in any skirmish with the enemy.</li>
          <li>
            When one quarter of the handgunners and crossbowmen has fired, the
            other quarter shall wait until the first has reloaded or respanned
            the crossbow.
          </li>
          <li>
            The supreme commander and the four captains assigned to him shall
            ride around at the earliest opportunity and, where there is need,
            bring the men to defence.
          </li>
          <li>
            (Special detachments are designated for the pursuit of the repelled
            enemy.)
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
