import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../ImageWithTitle/ImageWithTitle'

export const Fussarbeit = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="footwork-or-manoeuvres" />
        <h4>Fußarbeit, oder Manöver</h4>
        <p>
          Der Zweck dieses kurzen Artikels ist es, einen Überblick über die
          Fußarbeit zu geben, d. h. die Manöver, die für ein sicheres und
          erfolgreiches Engagement mit einem Gegner im berittenen Kampf (
          <i>Rossfechten</i>) unerlässlich sind. Die hier beschriebene Fußarbeit
          basiert auf zeitgenössischen Reithandschriften und der logischen
          Anwendung der Biomechanik auf die Kunst des berittenen Kampfes.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Manöver</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle md={2} src="haunches-in.png" width={512} height={960} />
      <Col>
        <h6>Travers (Kruppe herein)</h6>
        <p>
          Das Pferd wird mit der Hinterhand nach innen gebogen. Das Pferd wird
          von der äußeren Hinterhand gelenkt. Dies ermöglicht eine größere
          seitliche Beweglichkeit und Distanzeinschätzung. Es ist eine Position
          sowohl für die Annäherung als auch für den Angriff. Es ist zudem die
          am wenigsten bedrohliche Annäherung an andere Pferde und hilft,
          unerwünschte Aggression zwischen den Pferden zu vermeiden.
        </p>
        <p>
          Hinweis: Dein Pferd sollte immer in Richtung deines Gegners gebogen
          sein.
        </p>
      </Col>
      <ImageWithTitle src="travers-in-to-attck.png" width={832} height={712} />
    </Row>
    <Row>
      <ImageWithTitle md={2} src="shoulder-in.png" width={512} height={960} />
      <Col>
        <h6>Schulterherein</h6>
        <p>
          In dieser Position ist das Pferd immer noch in dieselbe Richtung
          gebogen (zu deinem Gegner hin), bewegt sich aber auf der inneren
          Hinterhand. Dieses Manöver wird in der Verteidigung eingesetzt, um
          einen Schlag abzuwehren oder dem Ziel des Gegners auszuweichen.
        </p>
        <p>
          Hinweis: Dein Pferd sollte immer in Richtung deines Gegners gebogen
          sein.
        </p>
      </Col>
      <ImageWithTitle src="shoulder-in-to-evade.png" width={884} height={758} />
    </Row>
    <Row>
      <ImageWithTitle src="volte.png" width={602} height={666} />
      <Col>
        <h6>Pirouette</h6>
        <p>
          Aus dem Travers verlangsamt das Pferd die Vorwärtsbewegung der
          Hinterhand und bewegt die Schulter in einem engen Kreis herum. Dies
          ist ideal, um die richtige Position einzunehmen oder ein Begegnen zu
          wiederholen.
        </p>
      </Col>
    </Row>
  </>
)
