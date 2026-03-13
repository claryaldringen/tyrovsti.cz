import { Col, Row } from 'reactstrap'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const NuernbergerWagenordnung = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="nuremberg-wagon-order" />
        <h4>Nürnberger Wagenordnung von 1450{draft && <DraftBadge />}</h4>
        <p>Übersetzt von PhDr. Zdeňka Kopková.</p>
        <p>
          Sie wurde in den <i>Chroniken der deutschen Städte</i>, Nürnberg, II,
          auf den Seiten 252 bis 254 gedruckt. Sie erwähnt den Feldzug nach
          Spalt, der im Juni 1450 endete.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <b>Von dem zeug der wagenburg.</b>
        <ol>
          <li>
            Item darnach steht geschrieben, was man wägen und karren mitgenommen
            hat, die zu der wagenburg gehören, wenn man ausgezogen ist.
          </li>
          <li>
            Item man hat zu dem ersten mitgenommen 2 wagenpüchsen, die
            Widersteinin genannt, darzu 50 stein, die hat man geladen auf 3
            wägen, und{' '}
            <span className="note" title="In the original tamsail">
              darmseil
            </span>{' '}
            darzu; und an die zween püchsenwägen 16 pferd, und an ein jeden
            steinwagen 4 pferd.
          </li>
          <li>
            Item mer hat mitgenommen 3 wägen, darauf da lagen 3 püchsen mit
            einem kreuz, und auf jedlichem wagen 15 stein; an jedlichem wagen 4
            pferd.
          </li>
          <li>
            Item mer hat mitgenommen 2 karrenpüchsen mit zweien kreuzen, an
            einem karren 3 pferd, und zu jedlicher püchsen 25 stein, die soll
            man besunder legen auf einen wagen und 3 pferd daran.
          </li>
          <li>
            Item mer hat mitgenommen 7 karrenpüchsen mit einem kreuz, und an ein
            jedlichem karren pferd, und zu jedlicher püchsen 25 stein, die soll
            man besunder legen auf ein wagen und 4 pferd daran.
          </li>
          <li>
            Item mer hat mitgeführt 2 schermpüchsen auf karren, zu jedli- chem
            karren 20 pleikugeln, gezeichnet mit zwei strolen, die kugeln in
            ihrem trüchlein; an jedem karren 3 pferd.
          </li>
          <li>
            Item mer 4 karren mit pleipüchsen, die schiessen pleikugeln als die
            taubeneier; an jedlichem karren 2 pferd.
          </li>
          <li>
            Item wer aber, dass man her reisen wollt mit brennen oder feld zu
            slahen, so hat man nit als viel zeugs genommen als vor; sunder der
            püchsen soll man dester minner mit nehmen, ob es an ein treffen
            gieng, als vor <i>Spalt</i>, aber der stein hat man am halbteil
            genug.
          </li>
          <li>
            Item zum ersten hat man mitgenommen 2 wägen mit pulver und hauspfeil
            und feuerpfeil und feuerkugeln, an einem wagen 4 pferd.
          </li>
          <li>Item ein wagen mit pafesen und daran 4 pferd.</li>
          <li>
            Item zween wagen mit leitern, lang und kurz, bei 7, und an eim wagen
            4 pferd.
          </li>
          <li>Item zwei wägen mit mauerbanken, an einem wagen 4 pferd.</li>
          <li>
            Item man hat auch einem jedlichen geschrieben wagen geben ein ketten
            bei 1½ kloftern lang, ob man wollt ein wagenburg schliessen; und die
            ketten beschreib man, wenn man sie leiht, dass man sie wiss an ihm
            zu fordern.
          </li>
          <li>
            Item man hat auch einem jedlichen viertelmeister hie heim ge- sendt
            von der stadt zeug 25 spiess und 25 helmparten, dass sie die ihren
            hauptleuten antworteten oder liehen, ob man auszug, dass einer eim
            ein wehr liehe, der keine hätt oder gehaben möcht, als vor
            geschrieben ist.
          </li>
          <li>
            Item mer was bestellt zu einem jeden wagen ein grosse plahen, und
            wenn man auszohe, dass man die mitführet, ob sein not geschehe, dass
            man darein lüde.
          </li>
          <li>
            Item mer hat man bestellt zu jedem wagen, der an dem sold war, ein
            grosse lagelen; und wenn man auszohe, so musst sie der wagen- mann
            füllen mit wasser und auf den wagen legen, wann der wein was gar
            teuer; auch was bei einem jeden wagen ein haue und ein schaufel.
          </li>
          <li>Item dieselben wägen sammten sich am markt und den bott auf</li>
          <li>
            Item mer hätt bestellt bretter, und wenn man auszoch, so mussten sie
            die bretter an die wägen hängen, und welcher sie nicht anhieng, dem
            gab man dieselben wochen kein sold.
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <b>Über die Ausrüstung der Wagenburg.</b>
        <ol>
          <li>
            Im Folgenden steht geschrieben, welche Wagen und Karren mitgenommen
            wurden, die zur Wagenburg gehören, als man auszog.
          </li>
          <li>
            Zunächst nahm man 2 Wagengeschütze mit, genannt <i>Widersteinin</i>,
            dazu 50 Steine, die auf drei Wagen geladen wurden, sowie Darmseil
            dazu; und für beide Geschützwagen 16 Pferde, und für jeden
            Steinwagen vier Pferde.
          </li>
          <li>
            Weiterhin nahm man drei Wagen mit, auf denen drei Geschütze mit
            einem Kreuz lagen, und auf jedem Wagen 15 Steine; für jeden Wagen 4
            Pferde.
          </li>
          <li>
            Weiterhin nahm man zwei Karrengeschütze mit zwei Kreuzen mit, für
            jeden Karren 3 Pferde, und zu jedem Geschütz 25 Steine, die
            gesondert auf einen Wagen zu laden sind, mit 3 Pferden davor.
          </li>
          <li>
            Weiterhin nahm man sieben Karrengeschütze mit einem Kreuz mit, und
            für jeden Karren ein Pferd, und zu jedem Geschütz 25 Steine, die
            gesondert auf einen Wagen zu laden sind, mit 4 Pferden davor.
          </li>
          <li>
            Weiterhin wurden 2 Schirmgeschütze auf Karren mitgeführt, zu jedem
            Karren 20 Bleikugeln, mit zwei Streifen gekennzeichnet, die Kugeln
            in ihrem Kistchen; für jeden Karren drei Pferde.
          </li>
          <li>
            Weiterhin 4 Karren mit Bleigeschützen, die Bleikugeln in der Größe
            von Taubeneiern schießen; für jeden Karren zwei Pferde.
          </li>
          <li>
            Wenn man jedoch mit Brand oder Feldschlacht herziehen wollte, nahm
            man nicht so viel Ausrüstung mit wie zuvor; vielmehr sollte man
            weniger Geschütze mitnehmen, falls es zu einem Gefecht käme wie vor
            Spalt, doch an Steinen reicht die Hälfte aus.
          </li>
          <li>
            Zunächst nahm man zwei Wagen mit Pulver, Armbrustbolzen,
            Brandpfeilen und Feuerkugeln mit, für jeden Wagen vier Pferde.
          </li>
          <li>Einen Wagen mit Pavesen und vier Pferde dafür.</li>
          <li>
            Zwei Wagen mit Leitern, langen und kurzen, etwa 7 Stück, und für
            jeden Wagen vier Pferde.
          </li>
          <li>
            Zwei Wagen mit hölzernen Seitenbrettern, für jeden Wagen vier
            Pferde.
          </li>
          <li>
            Jedem eingetragenen Wagen wurde auch eine Kette von etwa 1&frac12;
            Klaftern (ca. 2,6 m) Länge gegeben, falls man die Wagenburg
            schließen wollte; und die Ketten wurden beim Verleihen
            aufgezeichnet, damit man wusste, von wem sie zurückzufordern waren.
          </li>
          <li>
            Jedem Viertelmeister wurden auch von der Stadt 25 Spieße und 25
            Hellebarden zugesandt, die sie ihren Hauptleuten aushändigen oder
            verleihen sollten, wenn man auszog, damit ein Mann einem anderen
            eine Waffe leihen konnte, der keine hatte oder keine beschaffen
            konnte, wie oben geschrieben steht.
          </li>
          <li>
            Weiterhin wurde für jeden Wagen eine große Plane bestellt, die beim
            Ausmarsch mitzuführen war, um bei Bedarf Güter darauf zu laden.
          </li>
          <li>
            Weiterhin wurde für jeden im Sold stehenden Wagen ein großes Fass
            bestellt; und beim Ausmarsch musste der Fuhrmann es mit Wasser
            füllen und auf den Wagen laden, da der Wein sehr teuer war; auch
            hatte jeder Wagen eine Haue und eine Schaufel.
          </li>
          <li>
            Dieselben Wagen versammelten sich auf dem Marktplatz und wurden
            aufgeboten (wir wissen nicht von wem, der Name fehlt).
          </li>
          <li>
            Weiterhin wurden Bretter bestellt, und beim Ausmarsch mussten sie
            die Bretter an die Wagen hängen, und wer sie nicht anhängte, erhielt
            in derselben Woche keinen Sold.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
