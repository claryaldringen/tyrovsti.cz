import { Col, Row } from 'reactstrap'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const FrankfurtWagonOrder = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="frankfurt-wagon-order" />
        <h4>
          The So-Called Frankfurt Wagon Order of 1444{draft && <DraftBadge />}
        </h4>
        <p>Translated by PhDr. Zdeňka Kopková, corrections by Daniel Burger.</p>
        <p>
          Although this text is traditionally referred to as the Frankfurt wagon
          order, it is not an ordinance of the city of Frankfurt. It is an
          enclosure to a circular letter of Louis&nbsp;IV, Count Palatine of the
          Rhine, whom the Roman King Frederick&nbsp;III had appointed supreme
          imperial captain against the Armagnacs. He issued the circular in
          Heidelberg on 13 October 1444 and sent the same enclosure to other
          imperial cities as well, including Cologne, St. Gallen and Nördlingen.
          Frankfurt was only one of the recipients.
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
          And we have arranged and enlisted men with the wagon fort to resist
          the enemy, and there shall be a thousand wagons, each with two strong
          servants who can drive well, and four strong draught stallions, well
          maned and formed, with ladders, fencing, reinforced braces, half
          covered with linen cloth, and below between the two axles on the
          longitudinal side a strong board shall hang on chains, arranged so
          that it can be attached and removed whenever one wishes; and every two
          wagons shall have one chain, eight ells long, with a ring and a hook,
          so that it can be attached and removed whenever one wishes; and to
          each wagon two handguns, and to each handgun at least sixty lead
          bullets, and to every two wagons one chamber gun and at least thirty
          stones the size of a head, and to each wagon two flails that are
          iron-clad and attached with chains, two glaives with hooks on them,
          three set pavises with boards and stakes at the back, one shovel, one
          mattock, and one pick; so therefore equip your wagons thus, and also
          bring stones, powder, lead, and bolts as much as you can carry with
          you.
        </p>
      </Col>
    </Row>
  </>
)
