import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle/ImageWithTitle'

export const Mantel = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="cloak" />
        <h4>Mantel</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Der Mantel war ein sehr beliebter Typ der Herren- und
          Damenoberbekleidung. Sein Schnitt variierte stark und die
          Bezeichnungen einzelner Schnitttypen überlappten sich beträchtlich,
          was es heute recht schwierig macht zu unterscheiden, welcher
          spezifische Kleidungstyp gemeint war. Uns begegnen Bezeichnungen wie{' '}
          <i>plášček</i>, <i>pláščík</i>; in der Luxemburger Zeit begann man ihn{' '}
          <i>klok</i>, <i>kloček</i> zu nennen, von der französischen Form{' '}
          <i>cloque</i>, lateinisch <i>clanis</i>, ferner lateinisch{' '}
          <i>pelicio</i>, deutsch <i>tasselmantel</i>, <i>mantl</i> und{' '}
          <i>mantlík</i>. Am häufigsten begegnen uns Mäntel mit
          halbkreisförmigem Schnitt, aber auch ein Dreiviertelkreis-Schnitt
          wurde getragen. Die Länge des Mantels variierte, und er konnte in
          einer ganzen Farbpalette vorkommen, wobei Blau, Grün, Rosa und Grau
          deutlich vorherrschten.
        </p>
        <p>
          Der Mantel wurde am häufigsten an der Brust unter dem Kinn
          verschlossen. Dazu konnte eine Schmuckspange namens <i>Agrafe</i>{' '}
          dienen; deren Form, Farbe und Verzierung hatten religiöse Bedeutung,
          weshalb wir häufig einer rautenförmigen Agrafe begegnen, die mit
          Edelsteinen in Kreuzform verziert ist, oder deren Spitzen mit Perlen
          abgeschlossen sein konnten, die einer Lilie ähnelten. Ein
          halbkreisförmiger Mantel, mit einer Agrafe verschlossen, findet sich
          am häufigsten in Darstellungen der Jungfrau Maria. Darüber hinaus
          wurden Mäntel mit einer Kordel oder einem Riemen, mit einem
          dekorativen Band quer darüber oder auch, insbesondere bei kürzeren
          Mänteln, mit drei Knöpfen unter dem Kinn oder häufiger auf der
          Schulter verschlossen.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="agrafa.jpg"
        width={234}
        height={558}
        title="Ein langer Mantel, mit einer Agrafe verschlossen, in einem Ausschnitt aus der Kreuzigung von Nové Sady, 1440."
      />
      <ImageWithTitle
        md={4}
        src="plastspruhem.jpg"
        width={408}
        height={840}
        title="Lange Mäntel, mit einem Stoffband verschlossen, Křivoklát-Altar, vermutlich 1483."
      />
      <ImageWithTitle
        md={4}
        src="plast-knofliky.jpg"
        width={487}
        height={423}
        title="Ein kürzerer Mantel, vorne mit drei Knöpfen verschlossen, auf dem Gemälde des Heiligen Rochus italienischer Herkunft, 1480."
        href="svroch.jpeg"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="plast-rameno-jensky1.jpg"
        width={414}
        height={738}
        title="Ein kürzerer Mantel, auf der Schulter verschlossen, Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="plast-rameno-jensky2.jpg"
        width={342}
        height={742}
        title="Ein kürzerer Mantel, auf der Schulter verschlossen, Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="plast-rameno-richental.jpg"
        width={386}
        height={756}
        title="Ein Mantel, mit Knöpfen auf der Schulter verschlossen, Ausschnitt aus der Richental-Chronik (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Eine weitere Gruppe von Mänteln umfasst Mäntel, die von manchen
          Forschern heute mit dem Kunstbegriff <i>Mantel-Tunika</i> bezeichnet
          werden. Zwei Manteltypen fallen in diese Kategorie: der erste, der in
          seiner Form dem italienischen Kleidungsstück <i>giornea</i> ähnelt,
          und der zweite, der Schlitze für die Hände hat und eher einem{' '}
          <i>Rock</i> oder der westeuropäischen <i>houppelande</i> nahesteht.
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
            Der Nürnberger Schneider Hans Frumann legt Falten an einem Mantel
            vom Typ <i>giornea</i>, eine Seite aus dem Hausbuch der Nürnberger
            Zwölfbrüderstiftung, 1446.
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
            Ein Mantel vom Typ <i>giornea</i>, Ausschnitt aus der
            Richental-Chronik (1470-1480).
          </>
        }
      />
      <ImageWithTitle
        md={3}
        src="pltunika2.jpg"
        width={626}
        height={1048}
        title="Ein Mantel mit Schlitzen für die Hände, Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="pltunika1.jpg"
        width={420}
        height={1008}
        title="Ein Mantel mit Schlitzen für die Hände, Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
    </Row>
  </>
)
