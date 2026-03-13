import { Col, Row } from 'reactstrap'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const MargravesInstructionOnWagonFormation = ({
  draft,
}: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="margraves-instruction-on-wagon-formation" />
        <h4>
          Instruction of Margrave Albrecht of 1477 on Wagon Formation
          {draft && <DraftBadge />}
        </h4>
        <p>Translated by PhDr. Zdeňka Kopková</p>
        <p>
          Translation notes: In German, the term <i>wagenberg</i> is used for
          the wagon fort, which corresponds more closely to the translation{' '}
          <i>wagon castle</i>. When the text speaks of the wagon fort, it refers
          to all the wagons collectively, regardless of whether the wagon fort,
          as understood in the Czech context, has been established, or whether
          the wagons are in motion, as discussed in the following text.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <ol>
          <li>Zu der macht des heerzugs muss man haben tausend wagen </li>
          <li>Item IIm dort in, ausserhalb der frunt ...</li>
          <li>
            Item zu den tausent wagen sollen zu iglichen wagen X mann geordnet
            werden, das macht: X tausend mann, nemlich tausend wagenknecht,
            tausend schäufler, die da graben zu befestigung und notdurft des
            heers und gewinnung der sloss, und VIII guter gerüster drabanten;
            das ist die austeilung der zehner, die zu einem jeden wagen gehören,
            die bleiben halb bei den wagen, und halbe uf den platz.
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
            Item under den tausent wagen mussen IV wagen sein, die zu der
            äussersten zeil, die man beschliessen muss, dienen; der jeder muss
            haben ein britt, das man of der äusseren seiten anhenkt zu notdurft
            der wagenburg, das zuoberst an den leiterbaum gehenkt werden und
            herabreichen soll bis zu halbem rad, und unden an dem wagen zwuschen
            den rädern ein angehangen britt. Es mussen auch dieselben IIII wagen
            haben: ketten, damit man sie zusammen schleusset. Und die andern VI
            wagen sollen haben seil, damit man sie sperret als ander wagen, und
            mussen alle sein nach dem muster, das wir zu Berlin gelassen
            haben...
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
        </p>
      </Col>
      <Col md={6}>
        <ol>
          <li>
            For the strength of the military campaign, one must have a thousand
            wagons...
          </li>
          <li>There to, outside the front...</li>
          <li>
            To the thousand wagons, X men shall be assigned to each wagon,
            making X thousand men, namely a thousand wagon servants, a thousand
            diggers who dig earth for the fortification and needs of the army
            and the capture of castles, and VIII well-armed attendants; this is
            the division into tens that belong to each wagon, and they remain
            half at the wagon and half at the square.
          </li>
          <li>
            Each wagon must have two shovels, one pick, one axe, and one
            mattock.
          </li>
          <li>
            Two fences facing each other and above them a canopy covered at the
            least with a coarse linen cloth.
          </li>
          <li>
            Among the thousand wagons, there must be IV wagons that serve for
            the outermost row, which must be closed; each must have a board that
            is hung on the outer side for the needs of the wagon fort, which
            shall be hung at the very top of the ladder beam and shall reach
            down to half the wheel, and below the wagon between the wheels a
            hung board. These same IIII wagons must also have chains to lock
            them together. And the other VI wagons shall have ropes to bar them
            like other wagons, and all must be according to the pattern that we
            have left in Berlin...
          </li>
        </ol>
        <h5>Order of the military campaign</h5>
        <p>
          Your Grace marches with a large wagon fort, and especially when the
          wagon fort is on the march, Your Grace shall arrange the watch very
          well at the front, rear, and before the wagon fort, and remain with
          all the men in the middle beside the wagon fort, so that if they are
          attacked from behind or in front, one can come to their aid. A wagon
          fort cannot travel in its IV rows as is proper at all places across
          water, ditches, valleys, hills, and woods; and when it goes in two
          rows, they must stretch very far, therefore one wheel can sometimes
          come off at the back or front, especially as I have heard, Your
          Princely Grace had over a thousand war wagons in the field last time,
          not counting the supply wagons.
        </p>
      </Col>
    </Row>
  </>
)
