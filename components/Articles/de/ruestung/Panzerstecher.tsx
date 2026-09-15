import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'

export const Panzerstecher = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="estoc" />
        <h4>Panzerstecher (Harnischkampfschwert)</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Der Panzerstecher (polnisch <i>estok</i>, englisch und französisch{' '}
          <i>estoc</i>) ist ein Schwert mit einer sehr schmalen und steifen
          Klinge, das dafür konzipiert wurde, eine Lücke in der Plattenrüstung
          zu durchdringen und anschließend durch das darunter liegende
          Kettenhemd zu stoßen. Er unterscheidet sich vom ähnlichen Konzert
          (polnisch <i>koncerz</i>) vor allem durch seinen beidhändigen Griff
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Estok"
          />{' '}
          obwohl beide Schwerttypen in der Literatur häufig verwechselt werden.
          Im Deutschen fallen sowohl der Konzert als auch der Panzerstecher in
          die Kategorie der <i>Panzerbrecher</i>-Schwerter, aber für die
          Variante des Panzerstechers, die im <i>Harnischfechten</i> (Fechten in
          Rüstung) verwendet wurde, gibt es den Begriff{' '}
          <i>Harnischkampfschwert</i>. Um die Sache noch verwirrender zu machen,
          wird der Begriff <i>Harnischkampfschwert</i> für alle Schwerter
          verwendet, die zum <i>Harnischfechten</i> bestimmt waren,
          einschließlich Übungsschwerter mit einer eingezogenen Klinge für den
          Griff, genannt <i>Halbschwert</i>
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Panzerbrecher"
          />
          , die jedoch keine so schmale Klinge wie Panzerstecher haben. Dieser
          Artikel befasst sich jedoch mit einer besonderen Kategorie von
          Panzerstechern (Harnischkampfschwertern), die in irgendeiner Weise für
          das Führen von Schlägen modifiziert sind, insbesondere den bekannten{' '}
          <i>Mortschlag</i>. Solche Panzerstecher, an der Grenze zwischen
          Schwert und Streithammer, haben sich erhalten — vermutlich drei.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="estoc14.jpg"
        width={530}
        height={1200}
        title="Ein klassischer Panzerstecher mit beidhändigem Griff aus dem frühen 16. Jahrhundert."
      />
      <ImageWithTitle
        md={3}
        src="estoc15.jpg"
        width={960}
        height={1200}
        title="Ein Konzert mit einhändigem Griff aus dem Metropolitan Museum of Art in New York, spätes 16. Jahrhundert."
      />
      <ImageWithTitle
        md={3}
        src="estoc16.jpg"
        width={760}
        height={2218}
        title={
          <>
            Ein Übungs-<i>Harnischkampfschwert</i> aus dem Kunsthistorischen
            Museum in Wien, das kein Panzerstecher ist.
          </>
        }
      />
      <ImageWithTitle
        md={3}
        src="harnischkampfschwertes.jpeg"
        width={784}
        height={1200}
        title="Harnischkampfschwerter (die ersten beiden; das dritte ist für den Kampf mit Schild bestimmt) in einer Illumination aus der Handschrift von Hans Talhoffer, 1459."
      />
    </Row>
    <Row>
      <Col>
        <h5>
          Der sogenannte <Cit>Deutschordensstecher</Cit>
        </h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="estoc1.png" width={1920} height={310} title="" />
    </Row>
    <Row>
      <ImageWithTitle
        src="estoc2.png"
        width={1920}
        height={310}
        title="Abb. 1"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Dieser Panzerstecher ist Teil des Bestands des Czartoryski-Fürsten-
          Museums, der heute in der Waffenkammer des Königlichen Wawel-Schlosses
          in Krakau unter der Inventarnummer MNK XIV-49 aufbewahrt wird. Er wird
          ungefähr in das 14. oder 15. Jahrhundert datiert. Er besitzt eine
          vollständig erhaltene dicke Stahlklinge von rechteckigem, nahezu
          quadratischem Querschnitt, die sich zu einer leicht abgerundeten
          Spitze verjüngt. Weder die Kanten noch die Spitze zeigen Anzeichen
          einer Schärfung. Die Parierstange hat die Form eines einfachen Kreuzes
          aus dicken Stahlstäben, die sich zu abgerundeten Spitzen verjüngen und
          ebenfalls einen nahezu quadratischen Querschnitt aufweisen (Abb. 3 und
          4). Der Angel ist dick und von quadratischem Querschnitt (Abb. 3), in
          der Ebene der Parierstange abgeflacht. Auf dem Griff ist genügend
          Platz für ungefähr anderthalb durchschnittliche Männerhände. Eine
          provisorische Holzverkleidung wurde auf den Angel aufgesetzt. Sie ist
          in der Mitte etwas breiter (Abb. 1). Sie bedeckt jedoch nur eine Seite
          und ist vermutlich wesentlich jünger als das Artefakt selbst, an dem
          sie nur durch eine silberne Plakette mit der Inschrift{' '}
          <Cit>Teutonisch aus der königlichen Schatzkammer</Cit> gehalten wird,
          die Mitte des 19. Jahrhunderts angebracht wurde. Der Knauf ist groß
          und massiv, geformt als unregelmäßiger Tetrakaidekader mit vier
          konkaven Seiten (Abb. 5). Die gesamte Waffe ist 1586 mm lang und wiegt
          4050 g. Ihr Schwerpunkt liegt auf der Klinge, 230 mm von der unteren
          Kante der Parierstange entfernt.
          <Qt publication={PUBLICATIONS.TALAGA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={7}
        src="estoc3.png"
        width={1040}
        height={570}
        title="Abb. 3"
      />
      <ImageWithTitle
        md={5}
        src="estoc4.png"
        width={734}
        height={570}
        title="Abb. 4"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="estoc5.png"
        width={958}
        height={702}
        title="Abb. 5"
      />
      <ImageWithTitle
        md={4}
        src="estoc9.png"
        width={756}
        height={848}
        title="Abb. 8"
      />
    </Row>
    <Row>
      <Col>
        <h6>Klinge</h6>
        <p>
          Die Klinge besteht aus Stahl und ist gut erhalten (Abb. 1). Die Kanten
          und die Spitze der Klinge sind leicht abgerundet. Die Klinge ist in
          der Ebene senkrecht zur Ebene der Parierstange leicht verbogen. Die
          Biegung ist bei etwa drei Vierteln der Klingenlänge sichtbar, näher
          zur Spitze, und überschreitet 1 mm von der Längsachse der Klinge
          nicht. Wir können bisher nicht bestimmen, wann oder unter welchen
          Umständen diese Verformung auftrat. Auf allen vier Flächen der Klinge
          befinden sich Schwertschmiedezeichen in Form eines fünfzackigen Sterns
          und einer Mondsichel, jeweils mit einem Durchmesser von 5 bis 6 mm
          (Abb. 8). Zwei Marken auf gegenüberliegenden Seiten der Klinge sind 45
          mm von der unteren Kante der Parierstange entfernt angebracht, während
          die anderen beiden 53 mm entfernt sind. Die Klinge ist 1346 mm lang.
          An der Parierstange beträgt ihre Breite 29,5 mm und ihre Dicke 25,5
          mm.
          <Qt publication={PUBLICATIONS.TALAGA} />
        </p>
        <h6>Parierstange, Griff und Knauf</h6>
        <p>
          Der Knauf ist groß und massiv (Abb. 5, 6 und 7). Auf seinen zwölf
          Flächen befinden sich kreisförmige Vertiefungen mit einem Durchmesser
          von 2 bis 4 mm und einer Tiefe von bis zu 2 mm (Abb. 5 und 6).
          Zusätzlich wurden drei Schwertschmiedezeichen darauf eingraviert,
          analog zu denen auf der Klinge, von denen eines vollständig erhalten
          ist. Das vollständige Zeichen hat eine kreisförmige Form und sein
          Durchmesser beträgt 4 mm. Die Durchmesser der übrigen Zeichen sind
          kleiner, ungefähr 3 mm. Der Angel ist dick und robust, entsprechend
          der Größe des Knaufs und der Klinge (Abb. 3). Doch ein ungewöhnliches
          Detail fällt auf. Die Spitze des Angels ragt nicht im Geringsten über
          den oberen Teil des Knaufs hinaus und zeigt keinerlei Anzeichen einer
          Vernietung (Abb. 3 und 7). Außerdem ist sie von einem dunklen,
          deutlichen Fleck umgeben, der möglicherweise auf einen fehlenden Niet
          hindeutet (Abb. 7). Die Parierstange ist robust (Abb. 3 und 4). Ihre
          Arme haben abgerundete Spitzen und weisen, wie die Klinge, einen
          nahezu quadratischen Querschnitt mit einer Diagonale von 13 mm auf.
          Die Parierstange ist 208 mm lang. Auf beiden Seiten befinden sich
          einige kleinere Kratzer und Abschürfungen oder Dellen, aber generell
          sind mit bloßem Auge keine Gebrauchsspuren oder Abnutzung sichtbar.
          Der Griff ist gut erhalten. Alle Elemente bestehen aus Stahl, aber da
          keine chemische Analyse durchgeführt wurde, bleibt die Qualität
          unbekannt. Die Maße des Knaufs sind: Höhe 63 mm, Breite 84 mm, Dicke
          85 mm.
          <Qt publication={PUBLICATIONS.TALAGA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={6}
        src="estoc6.png"
        width={1648}
        height={724}
        title="Abb. 6"
      />
      <ImageWithTitle
        md={6}
        src="estoc7.png"
        width={1640}
        height={818}
        title="Abb. 7"
      />
    </Row>
    <Row>
      <Col>
        <h5>Panzerstecher aus Vilnius</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="estoc10.png" width={1920} height={414} title="" />
    </Row>
    <Row>
      <p>
        Dieser Panzerstecher wird im Litauischen Nationalmuseum in Vilnius
        aufbewahrt (registriert als &apos;Zweihänder&apos;, Inventarnummer
        IM-839). Leider stammen die einzigen verfügbaren Fotografien aus dem
        1979 veröffentlichten Sammlungskatalog des Museums. Sie zeigen eine
        Waffe, die einem Panzerstecher ähnelt, mit einer Klinge von rechteckigem
        Querschnitt, einem beidhändigen Griff, scharfen Spitzen der Parierstange
        und einem runden, spitzen Knauf. Die schriftliche Beschreibung stimmt
        mit diesen Beobachtungen überein. Die bekannten Maße des Artefakts sind:
        Gesamtlänge der Waffe 135 cm und Klingenlänge 99 cm. Er wird zwischen
        das 14. und 16. Jahrhundert datiert und stellt die engste bekannte
        Analogie zum oben erwähnten Krakauer Panzerstecher dar. Leider
        betrachtet das Museumspersonal in Vilnius ihn als eine Fälschung des 19.
        Jahrhunderts, was im genannten Katalog nicht vermerkt war. Es scheint
        jedoch, dass es derzeit keine entscheidenden Beweise für diese Annahme
        gibt. Darüber hinaus ist die Waffe den in dem Kompendium von Paulus
        Hector Mair abgebildeten Schwertern sehr ähnlich.
        <Qt publication={PUBLICATIONS.TALAGA} />
      </p>
    </Row>
    <Row>
      <Col>
        <h5>Panzerstecher kombiniert mit einer Handfeuerwaffe</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="estoc13.jpg" width={1920} height={469} title="" />
    </Row>
    <Row>
      <p>
        Diese Waffe befindet sich in den Sammlungen der Royal Armouries in
        Großbritannien unter der Inventarnummer XIV.10. Sie vereint einen
        Panzerstecher mit einer Handfeuerwaffe. Sie wird auf etwa 1520 datiert
        und soll einst dem berüchtigten König Heinrich VIII. gehört haben. Sie
        hat eine Panzerstecherklinge und eine robuste, spitze Parierstange,
        während statt eines Griffs und Knaufs ein Handfeuerrohr vorhanden ist,
        das am Angel befestigt ist, der in einer Schraube endet.
        <Qt publication={PUBLICATIONS.TALAGA} /> Die Waffe ist 195 cm lang.
        <Qt
          publication={PUBLICATIONS.RA}
          href="https://royalarmouries.org/collection/object/object-1294"
        />{' '}
        Leider wurde bisher nichts Genaueres darüber veröffentlicht.
        <Qt publication={PUBLICATIONS.TALAGA} />
      </p>
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="estoc11.jpg"
        width={1920}
        height={503}
        title=""
      />
      <ImageWithTitle
        md={4}
        src="estoc12.jpg"
        width={1256}
        height={1920}
        title=""
      />
    </Row>
  </>
)
