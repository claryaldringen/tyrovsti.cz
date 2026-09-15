import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const InstruktionWagenaufstellung = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="margraves-instruction-on-wagon-formation" />
        <h4>
          Instruktion des Markgrafen Albrecht von 1477 zur Wagenaufstellung
        </h4>
        <p>Übersetzt von PhDr. Zdeňka Kopková</p>
        <p>
          Der Text stammt aus den sogenannten <i>Praeparatoria</i>, den
          Weisungen des Kurfürsten Albrecht Achilles von Brandenburg für die
          Aufstellung und den Dienst eines Heeres, das 1477 für den Krieg gegen
          Herzog Hans von Sagan bestimmt war. Sie sind im Preußischen Geheimen
          Staatsarchiv in Berlin überliefert und wurden 1884 vom Großen
          Generalstab vollständig herausgegeben; Toman druckte daraus nur eine
          Auswahl ab.
          <Qt
            publication={PUBLICATIONS.MOBILMACHUNG1477}
            href="https://www.digitale-sammlungen.de/de/view/bsb11655625?page=7"
          />{' '}
          Der Abschnitt <i>Ordenung eines heerzoges</i> ist von anderer Hand
          geschrieben. Die Herausgeber vermuten, dass es sich um Anweisungen
          handelt, die auf Befehl des Kurfürsten entworfen wurden, seine
          Billigung fanden und dann dem übrigen Text beigefügt wurden.
          <Qt
            publication={PUBLICATIONS.MOBILMACHUNG1477}
            href="https://www.digitale-sammlungen.de/de/view/bsb11655625?page=27"
          />
        </p>
        <p>
          Übersetzungshinweise: Im Deutschen wird der Begriff <i>Wagenberg</i>{' '}
          für die Wagenburg verwendet, was eher der Übersetzung{' '}
          <i>Wagenschloss</i> entspricht. Wenn im Text von der Wagenburg die
          Rede ist, bezieht sich dies auf alle Wagen insgesamt, unabhängig
          davon, ob die Wagenburg im böhmischen Sinne errichtet wurde oder ob
          sich die Wagen in Bewegung befinden, wie im folgenden Text erörtert
          wird.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <ol>
          <li>Zu der macht des heerzugs muss man haben tausend wagen </li>
          <li>
            Item II<sup>m</sup> dort in, ausserhalb der frunt ...
          </li>
          <li>
            Item zu den tausent wagen sollen zu iglichen wagen X mann geordnet
            werden, das macht: X tausend mann, nemlich tausend wagenknecht,
            tausend schäufler, die da graben zu befestigung und notdurft des
            heers und gewinnung der sloss, und VIII<sup>m</sup> guter gerüster
            drabanten; das ist die austeilung der zehner, die zu einem jeden
            wagen gehören, die bleiben halb bei den wagen, und halbe uf den
            platz.
          </li>
          <li>
            Item ein iglicher wagen muss haben zwei schaufel, einen bickel, ein
            beiel und ein hauen.
          </li>
          <li>
            Item zwu zaun gegen einander, und darüber ein höbelen (häub- lein)
            uf das geringst mit einer groben leinwand uberdeckt.
          </li>
          <li>
            Item under den tausent wagen mussen IV<sup>c</sup> wagen sein, die
            zu der äussersten zeil, die man beschliessen muss, dienen; der jeder
            muss haben ein britt, das man of der äusseren seiten anhenkt zu
            notdurft der wagenburg, das zuoberst an den leiterbaum gehenkt
            werden und herabreichen soll bis zu halbem rad, und unden an dem
            wagen zwuschen den rädern ein angehangen britt. Es mussen auch
            dieselben IIII<sup>c</sup> wagen haben: ketten, damit man sie
            zusammen schleusset. Und die andern VI<sup>c</sup> wagen sollen
            haben seil, damit man sie sperret als ander wagen, und mussen alle
            sein nach dem muster, das wir zu Berlin gelassen haben...
          </li>
        </ol>
        <h5>Ordenung eines heerzoges.</h5>
        <p>
          Item es zeihet (ziehet) E. G. mit einer grossen wagenborg, und
          sunderlich wenn die wagenborg im zoge ist, so bestelle E. G. die warte
          gar wohl und vorn, hinder und vordern wagenborg, und blibt mit allem
          volk in der mitte neben der wagenborg, ab sie hindern oder vorn
          angegriffen worden, dass man kan zu holfe kommen. Ein wagenborg kann
          nicht an allen orten ubern wasser, graben, thale, berge und holz in
          ihren IV zeilen, wie sich das geboret, gehen; und also sic IIzeilicht
          gehet, mussen sie sich gar lang erstrecken, daromb kann man zu zeiten
          hinden oder vorn ein rad abgehen, sunderlich als ich gehort, E. F. G.
          habe uber tausend heerwagen, ane (ohne) futterwagen, nechstmals im
          felde gehabt.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:1a5fff7e-12a4-4ef8-9374-71fcfbdf16cd"
          />
          <Qt
            publication={PUBLICATIONS.MOBILMACHUNG1477}
            href="https://www.digitale-sammlungen.de/de/view/bsb11655625?page=31"
          />
        </p>
      </Col>
      <Col md={6}>
        <ol>
          <li>Für die Stärke des Feldzuges muss man tausend Wagen haben...</li>
          <li>Ferner 2000 darin, außerhalb der Front...</li>
          <li>
            Zu den tausend Wagen sollen jedem Wagen X Mann zugewiesen werden,
            das ergibt X tausend Mann, nämlich tausend Wagenknechte, tausend
            Schaufler, die für die Befestigung und die Bedürfnisse des Heeres
            sowie die Eroberung von Burgen graben, und 8000 gut gerüstete
            Trabanten; dies ist die Einteilung in Zehnergruppen, die zu jedem
            Wagen gehören, wobei die Hälfte beim Wagen und die andere Hälfte auf
            dem Platz verbleibt.
          </li>
          <li>
            Jeder Wagen muss zwei Schaufeln, eine Spitzhacke, ein Beil und eine
            Haue haben.
          </li>
          <li>
            Zwei einander gegenüberstehende Zäune und darüber ein Verdeck,
            mindestens mit grobem Leinentuch bedeckt.
          </li>
          <li>
            Unter den tausend Wagen müssen 400 Wagen sein, die für die äußerste
            Reihe bestimmt sind, die geschlossen werden muss; jeder muss ein
            Brett haben, das an der Außenseite für die Bedürfnisse der Wagenburg
            aufgehängt wird, das ganz oben am Leiterbaum befestigt werden und
            bis zur halben Radhöhe herabreichen soll, und unten am Wagen
            zwischen den Rädern ein angehängtes Brett. Diese selben 400 Wagen
            müssen auch Ketten haben, um sie zusammenzuschließen. Und die
            anderen 600 Wagen sollen Seile haben, um sie wie die übrigen Wagen
            zu sperren, und alle müssen nach dem Muster gefertigt sein, das wir
            in Berlin hinterlassen haben...
          </li>
        </ol>
        <h5>Ordnung des Feldzuges</h5>
        <p>
          Eure Gnaden ziehen mit einer großen Wagenburg, und besonders wenn die
          Wagenburg auf dem Marsch ist, soll Eure Gnaden die Wache vorne, hinten
          und vor der Wagenburg sehr gut anordnen und mit dem gesamten Volk in
          der Mitte neben der Wagenburg verbleiben, damit man zu Hilfe kommen
          kann, falls sie von hinten oder vorne angegriffen werden. Eine
          Wagenburg kann nicht an allen Orten über Wasser, Gräben, Täler, Berge
          und Wälder in ihren IV Reihen, wie es sich gehört, fahren; und wenn
          sie in zwei Reihen fährt, muss sie sich sehr lang erstrecken, deshalb
          kann manchmal hinten oder vorne ein Rad abgehen, besonders wie ich
          gehört habe, dass Eure Fürstliche Gnaden beim letzten Mal über tausend
          Heerwagen im Feld gehabt hat, ohne die Futterwagen mitzuzählen.
        </p>
      </Col>
    </Row>
  </>
)
