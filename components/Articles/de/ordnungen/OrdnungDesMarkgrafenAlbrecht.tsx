import { Col, Row } from 'reactstrap'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const OrdnungDesMarkgrafenAlbrecht = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="margrave-albrechts-military-order" />
        <h4>
          Militärordnung des Markgrafen Albrecht von 1478
          {draft && <DraftBadge />}
        </h4>
        <p>
          Diese Ordnung wurde von Kurfürst Albrecht Achilles von Brandenburg für
          den Pommerischen Krieg erlassen. Sie wurde erstmals 1830 im{' '}
          <i>Archiv für die Geschichtskunde des Preussischen Staates I</i>{' '}
          gedruckt.
        </p>
        <p>Übersetzt von PhDr. Zdeňka Kopková.</p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <ol>
          <li>
            Item bei Leib und Gut soll niemand keinen Freund beschädigen oder
            berauben und keinerlei Unfug treiben mit denen, die im (dem) Heere
            zuführen. Welcher darüber thut, der soll gestraft werden ohne Gnad
            mit dem Schwert, als Raubes Recht ist.
          </li>
          <li>
            Item alle, die Rumor anheben, die sollen gestraft werden nach
            Erkenntnis meines gnädigen Herrn und seiner Gnaden Räthe, die sein
            Gnaden ungefährlich zu ihm nimmt, und ein jeder nach seiner Gebühr.
          </li>
          <li>
            Item wo sich aber Rumor begeben, das doch nicht sein soll nach
            Verliesung der Strafe vor angezeigt, so soll niemand bei Verliesung
            des Leibs dem andern zulaufen, ausserhalb der, die daran geordnet
            sind, die sollen scheiden und darin handeln nach Gebühr bis an
            meinen gnädigen Herrn und Hauptleute. Denn wenn das sollt sein, dass
            jedermann zulief, so erschlügen wir alle cinander; sonst ist es
            leicht zu steuern; und man soll niemand darin ansehen, Freundschaft
            oder einigerlei Verwandnis dem andern, sondern einen gemeinen Nutzen
            darin suchen, zu Nutz meinem gnädigen Herrn, der Herrschaft und dem
            Heer. Und wer sich der Strafung enthielt (weigert), soll männiglich
            den Hilfe thun, die dazu beschieden sind, dass die strafen mögen und
            Ordnung halten.
          </li>
          <li>
            Item wer da stiehlt, der soll ohne Gnade gestraft werden mit dem
            Strang.
          </li>
          <li>
            Item wer den Freunden nehme, der soll ohne Gnade gestraft werden
            nach Erkenntnis meines gnädigen Herrn oder seiner Gnaden Haupt-
            leute nach Gestalt der Sachen.
          </li>
          <li>
            Item es soll niemand futtern, dann wie es alle Nacht beruft wird
            auch nicht ausschlagen (ausziehen) ohne (in) Geschäft meines
            gnädigen Herrn oder des Hauptmanns. Welcher darüber thut, dem will
            man für keinen Schaden stehen, ob man was verlöre.
          </li>
          <li>
            Item dass niemand keine Grube im Heere graben soll, dadurch die
            Leute am Reiten und Gehen verhindert würden.
          </li>
          <li>Item dass man still sei im Heere.</li>
          <li>
            Item so man futtern will, soll jedermann auf das Fähnlein und Wagen
            warten und alles nach dem Fähnlein reiten, fahren und gehen; und
            sollen futtern, da man sie hinzeigt, bei einander, unzertrennt; and
            ob sie an einem Ende nicht alle zu futtern fänden, so soll doch
            keiner heim- fahren, reiten oder gehen, sie haben denn alle
            gefuttert, und ferner mit einander fahren, wo man Futterung findet;
            und sollen dann, so sie alle gefuttert haben, in der Ordnung wieder
            heim ziehen, als sie ausgezogen sind. Und soll der Nicolastkan
            (Nikolassken) mit den Wagen und Tra- banten, so viele man deren
            schafft, mitziehen.
          </li>
          <li>
            Item der Futterhauptmann, dem wird man alle Wege zuordnen, davon er
            die Feld bestellt und die warten, das Volk zu bewahren.
          </li>
          <li>
            Item wo man futtern will, da soll man alle Wege voraus das
            besichtigen lassen.
          </li>
          <li>
            Item alle Morgen, es sei in Städten oder im Feld, soll man
            ausschicken Knechte, den zu verwahren ist, die da besichtigen alle
            Ding, ehe man auszieht zu futtern oder anderes, und nach ihnen
            wieder zu- sperren, bis sie wieder kommen.
          </li>
          <li>
            Item dass man Ordnung mache und das Heer theile in 8 Theile, dass
            alle Tage der Theile eines das Heer Tag und Nacht bewahre in Fut-
            terung und wo es Not ist. Derselbigen Theile einen lege man zu den
            Büchsen, damit kommt es in 8 Tagen wieder an einen.
          </li>
          <li>
            Item wo man Buchsen wird legen, dass man dazu lege tausend, darunter
            200 Reisiger mit Wagenknechten und allem, die sich vergraben bei den
            Büchsen, damit die Büchsen allweg bewahrt sind und man nicht alle
            Tage ab darf wechseln.
          </li>
          <li>
            Item dass niemand jage aus dem Heer oder aus den Städten, sondern
            wenn man auftrummet (trompetet), dass jedermann auf den Platz zu
            Haufen rücke, es sei in dem Heer oder in den Städten, wie jeder ge-
            ordnet sei, so lang, dass die Hauptleute das Ding besichtigen lassen
            und zu Rathe werden, wie man thun will; dass man auch dann heem
            (heimlich) Geschäft handle. durft.
          </li>
          <li>
            Item zu bestellen die Scharwächter Tag und Nacht nach Nothdurft.
          </li>
          <li>
            Item zu ordnen über jegliche Zeile einen Hauptmann, der alle Nacht
            wisse, was sich seine Zeil mindert oder mehrt, oder wer Fremdes
            darin käme, das den Hauptleuten wisse zu entdecken.
          </li>
          <li>
            Item Viertelmeister zu setzen im Heer in den äusseren Zeil, in
            jeglichem Viertel zwei, auf dass man wisse allwege Tag und Nacht,
            dass die Wagenburg bewahrt sei.
          </li>
          <li>
            Item alle Nacht je über 10 Wagen bei der Nacht ein klein Feuer zu
            machen, einen Steinwurf von der Wagenburg.
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <ol>
          <li>
            Niemand soll einem Freund an Leib oder Gut schaden, ihn berauben
            noch irgendeinen Unfug treiben mit denen, die dem Heere zugeführt
            werden. Wer dagegen handelt, soll ohne Gnade mit dem Schwert
            bestraft werden, wie es das Raubrecht vorschreibt.
          </li>
          <li>
            Alle, die Unruhe stiften, sollen nach dem Ermessen meines gnädigen
            Herrn und seiner Gnaden Räte bestraft werden, die seine Gnaden
            sicher zu sich nimmt, und ein jeder nach seinem Verdienst.
          </li>
          <li>
            Wo Unruhe entsteht, was nach der Verkündung der vorgenannten Strafe
            nicht geschehen soll, soll niemand bei Strafe des Leibes dem anderen
            zu Hilfe eilen, außer den dafür Bestimmten, die schlichten und nach
            der Anweisung meines gnädigen Herrn und der Hauptleute handeln
            sollen. Denn wenn jedermann zu Hilfe liefe, erschlügen wir einander;
            sonst ist es leicht zu steuern. Niemand soll darin auf Freundschaft
            oder irgendeine Verwandtschaft mit dem anderen achten, sondern den
            gemeinen Nutzen suchen, zum Vorteil meines gnädigen Herrn, der
            Herrschaft und des Heeres. Und wer sich der Bestrafung widersetzt,
            dem sollen alle Bestimmten mannhaft beistehen, damit sie strafen und
            die Ordnung aufrechterhalten können.
          </li>
          <li>Wer stiehlt, soll ohne Gnade mit dem Strang bestraft werden.</li>
          <li>
            Wer Freunden etwas nimmt, soll ohne Gnade nach dem Ermessen meines
            gnädigen Herrn oder seiner Gnaden Hauptleute bestraft werden, je
            nach Sachlage.
          </li>
          <li>
            Niemand soll fouragieren außer wie es allnächtlich angeordnet wird,
            noch ausrücken ohne Auftrag meines gnädigen Herrn oder des
            Hauptmanns. Wer dagegen handelt, für dessen Schaden wird nicht
            eingestanden.
          </li>
          <li>
            Niemand soll im Heerlager eine Grube graben, die das Reiten und
            Gehen behindern würde.
          </li>
          <li>Es soll Ruhe im Heerlager herrschen.</li>
          <li>
            Wenn fouragiert wird, soll jedermann auf das Fähnlein und den Wagen
            warten und alles nach dem Fähnlein reiten, fahren und gehen; und sie
            sollen dort fouragieren, wohin man sie weist, beisammen und
            ungetrennt; und wenn sie an einem Ort nicht alle Fourage finden,
            soll doch keiner heimfahren, reiten oder gehen, bis alle fouragiert
            haben, und dann gemeinsam weiterfahren, wo sich Fourage findet; und
            wenn alle fouragiert haben, sollen sie in derselben Ordnung
            heimziehen, wie sie ausgezogen sind. Und Nikolassken soll mit den
            Wagen und Trabanten mitziehen, so viele man deren aufbieten kann.
          </li>
          <li>
            Dem Fourage-Hauptmann werden alle Wege zugewiesen, von denen aus er
            das Feld bestellt und die Wachen einteilt, um das Volk zu bewahren.
          </li>
          <li>
            Wo man fouragieren will, sollen stets zuvor alle Wege erkundet
            werden.
          </li>
          <li>
            Jeden Morgen, ob in Städten oder im Feld, sollen Knechte ausgesandt
            werden, die alles erkunden, ehe man zum Fouragieren oder zu anderem
            auszieht, und nach ihnen soll wieder verschlossen werden, bis sie
            zurückkehren.
          </li>
          <li>
            Es soll Ordnung geschaffen und das Heer in acht Teile geteilt
            werden, sodass jeden Tag einer dieser Teile das Heer Tag und Nacht
            beim Fouragieren und wo immer nötig bewacht. Einen dieser Teile
            stelle man zu den Geschützen, sodass die Pflicht in acht Tagen
            wieder auf jeden kommt.
          </li>
          <li>
            Wo Geschütze aufgestellt werden, sollen tausend Mann dazugestellt
            werden, darunter 200 Reisige mit Wagenknechten und allem, die sich
            bei den Geschützen eingraben, damit die Geschütze stets bewacht sind
            und nicht täglich gewechselt werden muss.
          </li>
          <li>
            Niemand soll aus dem Heer oder aus den Städten jagen, sondern wenn
            die Trompete ertönt, soll jedermann auf den Sammelplatz rücken, ob
            im Heer oder in den Städten, wie es einem jeden zugewiesen ist, so
            lange, bis die Hauptleute die Lage erkunden lassen und beraten, was
            zu tun ist; und man mag dann auch geheime Angelegenheiten behandeln.
          </li>
          <li>
            Scharwächter sollen Tag und Nacht nach Bedarf aufgestellt werden.
          </li>
          <li>
            Über jede Reihe soll ein Hauptmann bestellt werden, der jede Nacht
            weiß, ob seine Reihe an Stärke zu- oder abgenommen hat oder ob ein
            Fremder eingedrungen ist, um dies den Hauptleuten zu melden.
          </li>
          <li>
            Viertelmeister sollen in den äußeren Reihen des Heeres aufgestellt
            werden, zwei in jedem Viertel, damit stets Tag und Nacht bekannt
            ist, dass die Wagenburg bewacht wird.
          </li>
          <li>
            Jede Nacht soll bei je zehn Wagen ein kleines Feuer unterhalten
            werden, einen Steinwurf von der Wagenburg entfernt.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
