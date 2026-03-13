import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const Estoc = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="estoc" />
        <h4>Estoc (Harnischkampfschwert){draft && <DraftBadge />}</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          The estoc (Polish <i>estok</i>, English and French <i>estoc</i>) is a
          sword with a very narrow and rigid blade, designed to penetrate a gap
          in plate armour and subsequently through the mail armour beneath. It
          differs from the similar koncerz (Polish <i>koncerz</i>) primarily in
          its two-handed grip
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Estok"
          />{' '}
          although both types of swords are often confused in the literature. In
          German, both the koncerz and the estoc fall into the category of{' '}
          <i>Panzerbrecher</i> (armour piercer) swords, but for the variant of
          the estoc used in <i>Harnischfechten</i> (fencing in armour), the
          Germans have the term <i>Harnischkampfschwert</i>. To make matters
          even more confusing, the term <i>Harnischkampfschwert</i> is used for
          all swords intended for <i>Harnischfechten</i>, including practice
          swords with a recessed blade for the grip called <i>Halbschwert</i>
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Panzerbrecher"
          />
          , which however do not have as narrow a blade as estocs. This article,
          however, will deal with a special category of estocs
          (harnischkampfschwerts) that are modified in some way for delivering
          strikes, especially the well-known <i>Mortschlag</i>. Such estocs, on
          the borderline between a sword and a war hammer, have survived —
          probably three.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="estoc14.jpg"
        width={530}
        height={1200}
        title="A classic estoc with a two-handed grip from the early 16th century."
      />
      <ImageWithTitle
        md={3}
        src="estoc15.jpg"
        width={960}
        height={1200}
        title="A koncerz with a one-handed grip from the Metropolitan Museum of Art in New York, late 16th century."
      />
      <ImageWithTitle
        md={3}
        src="estoc16.jpg"
        width={760}
        height={2218}
        title={
          <>
            A practice <i>Harnischkampfschwert</i> from the Kunsthistorisches
            Museum in Vienna, which is not an estoc.
          </>
        }
      />
      <ImageWithTitle
        md={3}
        src="harnischkampfschwertes.jpeg"
        width={784}
        height={1200}
        title="Harnischkampfschwerts (the first two; the third is intended for combat with a shield) in an illumination from the manuscript of Hans Talhoffer, 1459."
      />
    </Row>
    <Row>
      <Col>
        <h5>
          The so-called <Cit>Teutonic estoc</Cit>
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
        title="Fig. 1"
      />
    </Row>
    <Row>
      <Col>
        <p>
          This estoc is part of the deposit of the Czartoryski Princes Museum,
          now kept in the armoury of the Royal Wawel Castle in Kraków, under
          inventory number MNK XIV-49. It is dated approximately to the 14th or
          15th century. It has a completely preserved thick steel blade of
          rectangular, almost square cross-section, which tapers to a slightly
          rounded tip. Neither the edges nor the tip show any signs of
          sharpening. The guard has the shape of a simple cross made of thick
          steel rods that taper to rounded points and are also of an almost
          square cross-section (fig. 3 and 4). The tang is thick and of square
          cross-section (fig. 3), flattened in the plane of the guard. There is
          enough room on the grip for approximately one and a half average male
          hands. A provisional wooden covering has been placed on the tang. It
          is slightly wider in the middle (fig. 1). However, it covers only one
          side and is probably much younger than the artefact itself, on which
          it is held only by a silver plaque bearing the inscription{' '}
          <Cit>Teutonic from the royal treasury</Cit>, affixed in the mid-19th
          century. The pommel is large and massive, shaped as an irregular
          tetrakaidecahedron with four concave sides (fig. 5). The entire weapon
          is 1586 mm long and weighs 4050 g. Its centre of gravity is on the
          blade, 230 mm from the lower edge of the guard.
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
        title="Fig. 3"
      />
      <ImageWithTitle
        md={5}
        src="estoc4.png"
        width={734}
        height={570}
        title="Fig. 4"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="estoc5.png"
        width={958}
        height={702}
        title="Fig. 5"
      />
      <ImageWithTitle
        md={4}
        src="estoc9.png"
        width={756}
        height={848}
        title="Fig. 8"
      />
    </Row>
    <Row>
      <Col>
        <h6>Blade</h6>
        <p>
          The blade is made of steel and is well preserved (fig. 1). The edges
          and the tip of the blade are slightly rounded. The blade is slightly
          bent in the plane perpendicular to the plane of the guard. The bend is
          visible at about three quarters of the blade length, closer to the
          tip, and does not exceed 1 mm from the long axis of the blade. We are
          not yet able to determine when or under what circumstances this
          deformation occurred. On all four surfaces of the blade there are
          swordsmith&apos;s marks in the form of a five-pointed star and a
          crescent, each with a diameter of 5 to 6 mm (fig. 8). Two marks on
          opposite sides of the blade are placed 45 mm from the lower edge of
          the guard, while the other two are 53 mm away. The blade is 1346 mm
          long. At the guard, its width is 29.5 mm and its thickness is 25.5 mm.
          <Qt publication={PUBLICATIONS.TALAGA} />
        </p>
        <h6>Guard, Hilt and Pommel</h6>
        <p>
          The pommel is large and massive (fig. 5, 6 and 7). On its twelve faces
          there are circular dimples with a diameter of 2 to 4 mm and a depth of
          up to 2 mm (fig. 5 and 6). In addition, three swordsmith&apos;s marks
          were engraved on it, analogous to those on the blade, of which one is
          completely preserved. The complete mark has a circular shape and its
          diameter is 4 mm. The diameters of the remaining marks are smaller,
          approximately 3 mm. The tang is thick and robust, corresponding to the
          size of the pommel and the blade (fig. 3). But one unusual detail
          draws attention. The tip of the tang does not protrude above the upper
          part of the pommel in the slightest and shows no signs of peening
          (fig. 3 and 7). Moreover, it is surrounded by a dark distinctive
          stain, which perhaps indicates a missing rivet (fig. 7). The guard is
          robust (fig. 3 and 4). Its arms have rounded tips and, like the blade,
          have an almost square cross-section with a diagonal of 13 mm. The
          guard is 208 mm long. On both sides there are some minor scratches and
          abrasions or dents, but generally no traces of use or wear are visible
          to the naked eye. The hilt is well preserved. All elements are made of
          steel, but since no chemical analysis has been performed, its quality
          remains unknown. The dimensions of the pommel are: height 63 mm, width
          84 mm, thickness 85 mm.
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
        title="Fig. 6"
      />
      <ImageWithTitle
        md={6}
        src="estoc7.png"
        width={1640}
        height={818}
        title="Fig. 7"
      />
    </Row>
    <Row>
      <Col>
        <h5>Estoc from Vilnius</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="estoc10.png" width={1920} height={414} title="" />
    </Row>
    <Row>
      <p>
        This estoc is kept in the Lithuanian National Museum in Vilnius
        (registered as a &apos;two-handed sword&apos;, inventory number IM-839).
        Unfortunately, the only available photographs come from the
        museum&apos;s collection catalogue published in 1979. They show a weapon
        resembling an estoc with a blade of rectangular cross-section, a
        two-handed grip, sharp guard tips and a round, pointed pommel. Its
        written description is consistent with these observations. The known
        dimensions of the artefact are: total weapon length 135 cm and blade
        length 99 cm. It is dated between the 14th and 16th centuries and
        provides the closest known analogy to the above-mentioned Kraków estoc.
        Unfortunately, the museum staff in Vilnius consider it a 19th-century
        forgery, which was not recorded in the aforementioned catalogue.
        However, it seems that there is currently no decisive evidence for this
        notion. Moreover, the weapon is very similar to swords depicted in the
        compendium of Paulus Hector Mair.
        <Qt publication={PUBLICATIONS.TALAGA} />
      </p>
    </Row>
    <Row>
      <Col>
        <h5>Estoc Combined with a Handgun</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="estoc13.jpg" width={1920} height={469} title="" />
    </Row>
    <Row>
      <p>
        This weapon is in the collections of the Royal Armouries in Great
        Britain under inventory number XIV.10. It combines an estoc with a
        handgun. It is dated to around 1520 and is believed to have once
        belonged to the notorious King Henry VIII. It has an estoc blade and a
        robust, pointed guard, while instead of a hilt and pommel it has a
        handgun barrel, which is attached to the tang terminating in a screw.
        <Qt publication={PUBLICATIONS.TALAGA} /> The weapon is 195 cm long.
        <Qt
          publication={PUBLICATIONS.RA}
          href="https://royalarmouries.org/collection/object/object-1294"
        />{' '}
        Unfortunately, nothing more detailed about it has been published so far.
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
