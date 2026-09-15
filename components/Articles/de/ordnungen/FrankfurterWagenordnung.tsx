import { Col, Row } from 'reactstrap'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const FrankfurterWagenordnung = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="frankfurt-wagon-order" />
        <h4>
          Die sogenannte Frankfurter Wagenordnung von 1444
          {draft && <DraftBadge />}
        </h4>
        <p>
          Übersetzt von PhDr. Zdeňka Kopková, Korrekturen von Daniel Burger.
        </p>
        <p>
          Obwohl dieser Text traditionell als Frankfurter Wagenordnung
          bezeichnet wird, handelt es sich nicht um eine Ordnung der Stadt
          Frankfurt. Es ist ein eingelegter Zettel zu einem Rundschreiben des
          Pfalzgrafen Ludwig&nbsp;IV., den der römische König
          Friedrich&nbsp;III. zum obersten Reichshauptmann gegen die Armagnaken
          ernannt hatte. Das Rundschreiben erging am 13. Oktober 1444 in
          Heidelberg, und dieselbe Beilage erhielten auch andere Reichsstädte,
          darunter Köln, St. Gallen und Nördlingen. Frankfurt war nur einer der
          Empfänger.
          <Qt
            publication={PUBLICATIONS.DRA17}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&bookid=506&page=567"
          />
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <p>
          Ouch haben wir fürgenommen und lüte bestallt mit der wagenburge dem
          volk zu widerstehn, und sollen tusent wagen, iglicher mit zwein
          starken knechten, die wohl gefahren können, und vier starken wagen-
          hengsten, wohl gemähnet und gestallt, mit leitern, zäunen, starken
          lüssen [leisten], halb mit leinem tuch gedeckt, und unden zwischen den
          zwein achsen an der langwide ein stark brett an ketten hangen,
          gestalt, dass man das anhenken und abthun möge, wann man will; und
          sollen je zween wagen ein ketten haben, die acht ellen lang sei, mit
          einem ring und einem hacken, dass man die an und abthün möge, wann man
          will; und sollen zu iglichen wagen zwo handbüchsen, und zu iglicher
          handbüchsen zum minsten sechzig bleiklötz, und zu zwein wagen ein
          kammerbüchs und darzu zum minsten dreissig stein, als gross als ein
          haupt ist, und zu iglichem wagen zween flegel, die beslagen und mit
          ketten angehenkt sind, zwoo gleen [gleven] und hacken daran, drei
          setztartschen von borten mit stecken hinden daran, ein schufel, ein
          haue und ein bickel gehören, und darumb so wollent uwer wagen also
          zustellen, und auch stein, pulver, blei und pfeil, so ihr meiste
          mögent mit uch bringen. <br />
          Dat. ut supra.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:576e88b9-8260-4b59-8423-a1850108b081"
          />
          <Qt
            publication={PUBLICATIONS.DRA17}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&bookid=506&page=567"
          />
          <Qt
            publication={PUBLICATIONS.WULCKER}
            href="https://archive.org/details/bub_gb_LNVaAAAAcAAJ/page/n55/mode/1up"
          />
        </p>
      </Col>
      <Col md={6}>
        <p>
          Und wir haben angeordnet und Leute mit der Wagenburg angeworben, um
          dem Feind zu widerstehen, und es sollen tausend Wagen sein, jeder mit
          zwei starken Knechten, die gut fahren können, und vier starken
          Zugpferden, gut gemähnt und wohlgestaltet, mit Leitern, Zäunen,
          verstärkten Leisten, halb mit Leinentuch bedeckt, und unten zwischen
          den beiden Achsen an der Langseite ein starkes Brett an Ketten
          hängend, so angebracht, dass man es anhängen und abnehmen kann, wann
          man will; und je zwei Wagen sollen eine Kette haben, acht Ellen lang,
          mit einem Ring und einem Haken, so dass man sie an- und abhängen kann,
          wann man will; und zu jedem Wagen zwei Handbüchsen, und zu jeder
          Handbüchse mindestens sechzig Bleikugeln, und zu je zwei Wagen eine
          Kammerbüchse und dazu mindestens dreißig Steine von der Größe eines
          Kopfes, und zu jedem Wagen zwei Flegel, die beschlagen und mit Ketten
          angehängt sind, zwei Gleven mit Haken daran, drei Setztartschen aus
          Brettern mit Stecken hinten dran, eine Schaufel, eine Haue und eine
          Spitzhacke; darum rüstet eure Wagen entsprechend aus und bringt auch
          Steine, Pulver, Blei und Bolzen mit, so viel ihr tragen könnt.
        </p>
      </Col>
    </Row>
  </>
)
