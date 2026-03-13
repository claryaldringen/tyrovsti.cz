import { Col, Row } from 'reactstrap'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const MargraveAlbrechtsOrder = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="margrave-albrechts-military-order" />
        <h4>
          Military Order of Margrave Albrecht of 1478{draft && <DraftBadge />}
        </h4>
        <p>
          This order was issued by Elector Albrecht Achilles of Brandenburg for
          the Pomeranian War. It was first printed in{' '}
          <i>Archiv für die Geschichtskunde des Preussischen Staates I</i> in
          1830.
        </p>
        <p>Translated by PhDr. Zdeňka Kopková.</p>
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
            No one shall harm any friend in body or goods, nor rob them, nor
            commit any mischief against those who are brought into the army.
            Whoever does so shall be punished without mercy by the sword, as the
            law of robbery prescribes.
          </li>
          <li>
            All who start quarrels shall be punished at the discretion of my
            gracious lord and his grace&apos;s councillors, whom his grace
            safely brings to him, and each according to his due.
          </li>
          <li>
            Where quarrels arise, which ought not to happen after the
            announcement of the aforementioned punishment, no one shall, on pain
            of death, run to help the other, except those appointed for that
            purpose, who shall separate the parties and act according to the
            instructions of my gracious lord and the captains. For if it were so
            that everyone ran to help, we would all slay one another; otherwise
            it is easy to control. No one shall show regard for friendship or
            any kinship to the other, but shall seek the common good, for the
            benefit of my gracious lord, the lordship, and the army. And whoever
            refuses punishment shall manfully assist those who are appointed to
            punish and maintain order.
          </li>
          <li>Whoever steals shall be punished without mercy by the rope.</li>
          <li>
            Whoever takes from friends shall be punished without mercy at the
            discretion of my gracious lord or his grace&apos;s captains,
            according to the nature of the matter.
          </li>
          <li>
            No one shall forage except as called for every night, nor march out
            without the business of my gracious lord or the captain. Whoever
            does so shall not be compensated for any loss they may incur.
          </li>
          <li>
            No one shall dig any pit in the army camp that would hinder people
            from riding or walking.
          </li>
          <li>There shall be silence in the army camp.</li>
          <li>
            When foraging, everyone shall wait for the banner and wagon, and all
            shall ride, drive, and walk following the banner; and they shall
            forage where they are directed, together and undivided; and even if
            they cannot all find forage in one place, no one shall ride, drive,
            or walk homeward until all have foraged, and shall then drive on
            together wherever forage may be found; and when all have foraged,
            they shall march home again in the same order as they set out. And
            Nikolassken shall march along with the wagons and attendants, as
            many as can be managed.
          </li>
          <li>
            The foraging captain shall be assigned all the roads from which he
            shall manage the field and guard the people.
          </li>
          <li>
            Wherever one wishes to forage, all roads shall first be inspected in
            advance.
          </li>
          <li>
            Every morning, whether in towns or in the field, servants shall be
            sent out to inspect all things before one marches out to forage or
            for other purposes, and after them shall lock up again until they
            return.
          </li>
          <li>
            Order shall be established and the army divided into eight parts, so
            that each day one part guards the army day and night during foraging
            and wherever there is need. One of these parts shall be assigned to
            the cannons, so that the duty returns to each in eight days.
          </li>
          <li>
            Wherever cannons are placed, a thousand men shall be assigned to
            them, including 200 horsemen with wagon servants and all, who shall
            dig in near the cannons, so that the cannons are always guarded and
            there is no need to rotate every day.
          </li>
          <li>
            No one shall chase from the army or from the towns, but when the
            trumpet sounds, everyone shall move to the assembly place in their
            unit, whether in the army or in the towns, as each is assigned,
            until the captains have inspected things and decided what to do; and
            one may then also conduct secret business.
          </li>
          <li>Sentries shall be posted day and night as needed.</li>
          <li>
            A captain shall be appointed over each row, who shall know every
            night whether his row has decreased or increased, or if any stranger
            has entered it, so he can report it to the captains.
          </li>
          <li>
            Quarter-masters shall be placed in the outer rows of the army, two
            in each quarter, so that it is always known day and night that the
            wagon fort is guarded.
          </li>
          <li>
            Every night, for every 10 wagons, a small fire shall be kept
            burning, a stone&apos;s throw from the wagon fort.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
