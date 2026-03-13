import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const WagenordnungDerDeutschenRitter = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="wagon-order-of-german-knights" />
        <h4>
          Wagenordnung des Deutschen Ordens vom 19. April 1433
          {draft && <DraftBadge />}
        </h4>
        <p>
          Übersetzungshinweise: Nach reiflicher Überlegung habe ich den Begriff{' '}
          <Cit>fuhrweyn</Cit> als <Cit>Kriegswagen</Cit> übersetzt. Der
          Beschreibung nach handelt es sich um einen robusten Wagen, etwas
          größer als die übrigen.
          <br />
          Der Begriff <Cit>lotbuchse</Cit> wurde bisher nur im Zusammenhang mit
          dem Deutschen Orden gefunden. Er dürfte eine Feuerwaffe bezeichnen,
          die Bleikugeln verschießt, ohne nähere Spezifikation. Sowohl{' '}
          <i>lotbuschen</i>, bei denen es sich um Handwaffen handelt, als auch{' '}
          <i>lotbuchsen</i>, die auf Lafetten montiert sind, werden vermischt.
          Hier habe ich das Äquivalent <i>leichtes Geschütz</i> gewählt, also
          ein kleines lafettiertes Geschütz, es könnte sich aber auch um eine
          Hakenbüchse handeln.
          <br />
          Der Begriff <Cit>warpen</Cit> ist wahrscheinlich eine Abkürzung von{' '}
          <Cit>warpenweyn</Cit>, was im preußischen Deutsch einen Wagen zum
          Transport von Kriegsmaterial bezeichnet.
        </p>
        <p>
          Übersetzt von PhDr. Zdeňka Kopková, Korrekturen von Daniel Burger.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <ol>
          <li>
            Zum ersten einen guten, starken, grossen fuhrweyn mit hohen raden,
            die beslagen sin, und dass der etwas weiter sei, dann andere weyen
            und darzu gute pferde, funfe oder sechse.
          </li>
          <li>
            Item zum weyen zehn manne und vier oder funf gute armbrost mit sin
            pfilen im köcher, und iderman einen guten schild.
          </li>
          <li>Item zum weyen vier gute lange lotbuchsen.</li>
          <li>
            Item zu itzlicher buchsen 4 pfund pulver und zwee schock gelote.
          </li>
          <li>Item zum weyen zwee schock pfeile.</li>
          <li>Item zum weyen zwee glevenien.</li>
          <li>Item zwee stark ketten, als die fuhrleute pflegen zu führen.</li>
          <li>
            Item zu zwenzig weyen eine buchse, die ein stein schiesst alls ein
            gut haupt.
          </li>
          <li>Item zum weyen eine haue, ein spaten und ein schufel.</li>
          <li>
            Item zum weyne unden ein brett zweier guter finger dicke, das da
            reichet an der breite eine spannen von der erden.
          </li>
          <li>
            Item itzlicher gebietiger soll mit seinen leuten und untersassen
            bestellen, dass man von zween oder drien warpen oder speiseweyen
            usrichte einen guten fuhrweyn, und dass die leute zusampen spannen
            und gute vier pferde darzu usrichten.
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <ol>
          <li>
            Erstens einen guten, starken, großen Kriegswagen mit hohen Rädern,
            die beschlagen sind, und der etwas breiter sein soll als die anderen
            Wagen, dazu gute Pferde, fünf oder sechs.
          </li>
          <li>
            Zu jedem Wagen zehn Mann und vier oder fünf gute Armbrüste mit
            Bolzen im Köcher, und jeder Mann mit einem guten Schild.
          </li>
          <li>Zu jedem Wagen vier gute lange leichte Geschütze.</li>
          <li>
            Zu jedem Geschütz vier Pfund Pulver und zwei Schock Bleikugeln.
          </li>
          <li>Zu jedem Wagen zwei Schock Bolzen.</li>
          <li>Zu jedem Wagen zwei Gleven.</li>
          <li>Zwei starke Ketten, wie sie die Fuhrleute zu führen pflegen.</li>
          <li>
            Auf zwanzig Wagen ein Geschütz, das einen Stein von der Größe eines
            guten Kopfes verschießt.
          </li>
          <li>Zu jedem Wagen eine Haue, einen Spaten und eine Schaufel.</li>
          <li>
            Zu jedem Wagen unten ein Brett von zwei guten Fingern Dicke, das in
            der Breite eine Spanne vom Boden reicht.
          </li>
          <li>
            Jeder Gebietiger soll mit seinen Leuten und Untertanen dafür sorgen,
            dass aus zwei oder drei Vorrats- oder Proviantwagen ein guter
            Kriegswagen ausgerüstet wird und dass die Leute zusammenspannen und
            vier gute Pferde dafür bereitstellen.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
