import React from 'react'
import { Col, Row } from 'reactstrap'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const Streithammer = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <h1>Streithammer{draft && <DraftBadge />}</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Einführung</h4>
        <p>
          Mit der Entwicklung der Plattenrüstung und dem Aufstieg der Infanterie
          als Hauptkampfkraft im 14. und 15. Jahrhundert entwickelte sich auch
          die Gestaltung der Stangenwaffen der Infanterie weiter — im
          tschechischen Kontext als <i>kúsy</i> bekannt —, die verschiedene
          Möglichkeiten des Stechens, Hauens oder Schlagens kombinierten.
        </p>
        <p>
          Streithämmer aus der Mitte des 15. Jahrhunderts haben eine relativ
          einfache Form mit einem kurzen, massiven Schnabel (bec-de-corbin) und
          einem ebenfalls kurzen, massiven Dorn im Vergleich zu späteren
          Hämmern, wie dem Luzerner Hammer. Ebenso war der zentrale Niet noch
          nicht zu Spitzen ausgezogen.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="DP7063.jpeg"
        width={665}
        height={1130}
        title="Abb. 1: Zweihändiger Streithammer für den Fußkampf, Deutschland, um 1440."
      />
      <ImageWithTitle
        md={4}
        src="DP-15647-026.jpg"
        width={1376}
        height={1920}
        title="Abb. 2: Einhändiger Streithammer, Frankreich, um 1450."
      />
      <ImageWithTitle
        md={4}
        src="1977-167-466-pma2017.jpg"
        width={1920}
        height={2560}
        title="Abb. 3: Luzerner Hammer, Schweiz, 1500."
      />
    </Row>
    <Row>
      <Col md={4}>
        Abbildung 1: Zweihändiger Hammer aus dem Worcester Art Museum,
        Deutschland, um 1440.
        <table>
          <tbody>
            <tr>
              <th>Länge des erhaltenen Teils:&nbsp;</th>
              <td>105,4 cm</td>
            </tr>
            <tr>
              <th>Gewicht:&nbsp;</th>
              <td>2041,1 g</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </Col>
      <Col md={4}>
        Abbildung 2: Einhändiger Hammer aus dem Metropolitan Museum of Art in
        New York, Frankreich, um 1450.
        <table>
          <tbody>
            <tr>
              <th>Länge:&nbsp;</th>
              <td>65,5 cm</td>
            </tr>
            <tr>
              <th>Gewicht:&nbsp;</th>
              <td>1474,2 g</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </Col>
      <Col md={4}>
        Abbildung 3: Luzerner Hammer aus dem Philadelphia Museum of Art,
        Schweiz, 1500.
        <table>
          <tbody>
            <tr>
              <th>Kopfhöhe:&nbsp;</th>
              <td>48,6 cm</td>
            </tr>
            <tr>
              <th>Kopflänge:&nbsp;</th>
              <td>21,3 cm</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Rekonstruktion</h4>
        <p>
          Für die Rekonstruktion wählten wir den Hammer aus Worcester aufgrund
          seiner Datierung. Ein interessantes Merkmal dieses Hammers ist, dass
          sein Kopf nicht mit Nieten, sondern mit Schraubenpaaren mit
          Vierkantköpfen am Schaft befestigt ist. Die Länge der Replik beträgt
          220 cm und ihr Gewicht 2847 g. Die Replik wurde von Vojtěch Jelínek
          angefertigt.
        </p>
      </Col>
      <Row>
        <ImageWithTitle
          src="145352114_2454233218217244_1239154704725255175_n.jpg"
          width={1885}
          height={1414}
          title=""
        />
        <ImageWithTitle
          src="144900516_2454233258217240_4835566531118336875_n.jpg"
          width={1920}
          height={1440}
          title=""
        />
        <ImageWithTitle
          src="144989261_2454233191550580_7533405486375892515_n.jpg"
          width={1724}
          height={1293}
          title=""
        />
      </Row>
      <Row>
        <ImageWithTitle
          src="145095620_2454233278217238_3303663509323734164_n.jpg"
          width={1920}
          height={1440}
          title=""
        />
        <ImageWithTitle
          src="145159907_2454233381550561_6076649610687634798_n.jpg"
          width={1920}
          height={1440}
          title=""
        />
        <ImageWithTitle
          src="145234376_2454233334883899_8417551400168761453_n.jpg"
          width={1920}
          height={1440}
          title=""
        />
      </Row>
      <Row>
        <ImageWithTitle
          src="145239776_2454233311550568_8570324239103713777_n.jpg"
          width={1920}
          height={1440}
          title=""
        />
        <ImageWithTitle
          src="145323233_2454233174883915_8456973728614592166_n.jpg"
          width={1920}
          height={1440}
          title=""
        />
        <ImageWithTitle
          src="145347606_2454233238217242_4854487319947455893_n.jpg"
          width={1920}
          height={1440}
          title=""
        />
      </Row>
    </Row>
  </>
)
