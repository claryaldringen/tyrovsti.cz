import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const Undergarments = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="undergarments" />
        <h3>Undergarments{draft && <DraftBadge />}</h3>
        <p>
          Undergarments served several functions. Given that the vast majority
          of outer garments were made from woolen materials, they prevented the
          wool from directly chafing against bare skin, which would otherwise
          cause irritation. Outer garments were also very difficult to clean, as
          medieval washing employed mechanical methods that damaged the fabric.
          Therefore, garments could not be cleaned too frequently. Washing
          undergarments, which were predominantly made of linen, was not as
          difficult. They absorbed sweat, and if they became soiled, the cost of
          making another piece for changing was not nearly as expensive as it
          would have been for a woolen garment.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Men&apos;s Shirt</h4>
        <p>
          The shirt, called <i>rubáš</i> or <i>rubáč</i> in Old Czech, was the
          basic piece of men&apos;s undergarment. Shirts were of a simple cut,
          resembling the letter T, and usually reached to the knee area.
          Shoulder gussets at this time were still made without pleating. The
          shirt could have a simple oval neckline, a V-shaped opening on the
          chest, or a slit along its entire length.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
        <p>
          It seems that the difference between <i>košile</i> (shirt) and{' '}
          <i>rubáš</i> lay primarily in length, as one inheritance from Litomyšl
          from 1510 bequeaths <Cit>košile tři a rubáč dlouhý</Cit> (three shirts
          and a long rubáš).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:72e460f0-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          This would place the <i>rubáš</i> more, though not exclusively, in the
          women&apos;s wardrobe. This is also suggested by other testaments of
          Litomyšl townswomen: the judge&apos;s wife Tisovská had two linen{' '}
          <i>rubáče</i> in 1497; Marta, sister of the burgrave&apos;s wife,
          bequeathed in 1499{' '}
          <i>
            &bdquo;Mandě písařce dva rubáče, jeden žemniový a druhý lněný&ldquo;
          </i>{' '}
          (two <i>rubáče</i> to the scribe Manda, one of hemp and the other of
          linen).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:724e6280-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Kateřina, a townswoman from Prague&apos;s New Town, bequeathed in 1483{' '}
          <Cit>tři rubáše sváteční a tři košile všední</Cit> (three festive{' '}
          <i>rubáše</i> and three everyday shirts).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:7212e020-fe2a-11e6-97b4-5ef3fc9ae867"
          />
        </p>
        <p>
          Undergarments were mostly white or in the natural color of the
          material, but when we do have evidence of colored undergarments, for
          some reason they are most often blue. For shirts, this is documented
          both in writing from the Old Czech Annals, which state that at the
          Battle of Vyšehrad{' '}
          <i>
            &bdquo;čeští a moravští páni byli zbiti a všeho odění a rúcha až do
            modré košile obnaženi&ldquo;
          </i>{' '}
          (Czech and Moravian lords were slain and stripped of all their
          clothing and garments down to their blue shirts), and iconographically
          in the miniatures of the Life of St. Francis from 1500.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:71b15f30-fe2a-11e6-97b4-5ef3fc9ae867"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kosile_rajhrad.jpg"
        width={300}
        height={400}
        title="A shirt reaching below the knees with a V-shaped neckline, excerpt from the panel painting Carrying of the Cross on the Rajhrad Altarpiece, around 1440."
      />
      <ImageWithTitle
        md={4}
        src="kosile_nove_sady.jpg"
        width={300}
        height={400}
        title="A shirt reaching to the knees with a full-length slit and short slip-cut braies, excerpt from the panel painting Crucifixion from Nové Sady on the Rajhrad Altarpiece, around 1440."
      />
      <ImageWithTitle
        md={4}
        src="kosile_jk.jpg"
        width={640}
        height={480}
        title="Lazarus in a shirt with a full-length slit, excerpt from the Codex of Jena (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Reconstruction</h5>
        <p>
          For the reconstruction, we chose the shirt from the panel painting
          Crucifixion from Nové Sady on the Rajhrad Altarpiece. One was left
          with a slit as shown in the original, while the other was
          reconstructed without a slit. Both shirts are hand-sewn from fine
          linen cloth. The reconstruction was made by Daria Litvinova.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="shirt/kosile1.jpeg"
        width={1536}
        height={2048}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile2.jpeg"
        width={1536}
        height={2048}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile3.jpeg"
        width={1536}
        height={2048}
        title=""
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="shirt/kosile4.jpeg"
        width={1536}
        height={2048}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile5.jpeg"
        width={1536}
        height={2048}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile7.jpeg"
        width={1536}
        height={2048}
        title=""
      />
    </Row>
    <Row>
      <Col>
        <h4>Women&apos;s Chemise</h4>
        <p>
          Compared to men&apos;s undergarments, there is considerably less
          evidence of their female counterparts. Women wore simple long chemises
          with shoulder straps under their outer clothes. We encounter them most
          frequently in illuminations depicting bath attendants, who even wore
          them as work clothing, and working women are also depicted in them.
          Furthermore, they can be found in intimate scenes depicting bedroom
          interiors. One of the oldest archaeological finds of a women&apos;s
          chemise dates to the 14th century from Ranis Castle in Germany.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
          This chemise is sewn from two panels, front and back. Another type
          consists of three panels. The first two essentially form the front and
          back bodice, while the third is inserted at the waist to form a
          pleated skirt. At the side, this type of chemise had lacing for a
          better fit,
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> later the bodice cut
          could be extended to include breast cups, as is evident from four
          finds from Lengberg Castle in East Tyrol, dated to the 1480s.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="lazebnice.jpg"
        width={764}
        height={1200}
        title="Bath attendants in chemises, Codex of Jena, 1490-1510."
      />
      <ImageWithTitle
        md={4}
        src="Die_Hefneryn.jpg"
        width={327}
        height={460}
        title="A Czech potter in a chemise at work, a playing card from the Hofämterspiel deck commissioned by Ladislaus Posthumus, 1450s."
      />
      <ImageWithTitle
        md={4}
        src="lengbergshirt.jpg"
        width={564}
        height={743}
        title="A chemise find from Lengberg Castle in East Tyrol with breast cups, 1470s-1480s."
      />
    </Row>
    <Row>
      <Col>
        <h4>Braies</h4>
        <p>
          The second basic piece of men&apos;s undergarment were braies, in Old
          Czech known as <i>hace</i> (before the loss of jotation in the 14th
          century pronounced <i>hácě</i>), also found in records as <i>hacze</i>
          , Old Czech <i>rúšce</i>, Latin <i>bragas</i> or <i>bracca</i>. In
          earlier times, they reached to or below the knees. These longer braies
          gradually disappeared and after the mid-15th century are no longer
          encountered.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
        <p>
          Later, braies were referred to in written sources more often by the
          new Latin neologism <i>femoralia</i>, literally translated as{' '}
          <i>nábedrnie</i> (thigh coverings). This is also what Vavřinec of
          Březová calls them in his chronicle, when describing the Battle of
          Vyšehrad. After the battle, fallen knights were reportedly stripped of
          their armour until they were left wearing only braies:{' '}
          <Cit>
            ... baronibus et militibus sunt velut porci crudeliter interempti et
            statim omnibus armis et vestibus usque femoralia denudaci.
          </Cit>
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
        <p>
          Braies were made of thin linen cloth, as evidenced by the Kladruby
          Bible of 1471:{' '}
          <Cit>
            Učiníš i rúčce lněné, aby přikryly mrzkosti tvé od ledví až po bedr.
          </Cit>
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> The simplest type
          consisted of a more or less shaped strip of fabric that passed between
          the legs and was held in place at the sides by a cord that was tied on
          one or both sides. Such braies are known both from various period
          depictions and from archaeological finds at Lengberg Castle in East
          Tyrol. Another variant could have a cut where the cord at the sides
          was replaced by a channel with a drawstring, whose ends were brought
          out at the front. When pulled and tied, a sort of pouch for the
          genitals was formed at the front of the braies. While older braies
          (with short legs) are found in depictions only in white, the slip-cut
          braies can also be found in blue or even black depictions.
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 26" />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="spodky-dlouhe.jpg"
        width={556}
        height={784}
        title="Braies (still with short legs), Brno Legal Book of Václav of Jihlava, 1446."
      />
      <ImageWithTitle
        md={6}
        src="krteni.jpg"
        width={1038}
        height={894}
        title="Baptism scene where the figures are wearing blue slip-cut braies. Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        src="svroch-detail.jpg"
        width={489}
        height={488}
        title="On the painting of St. Roch from 1480, of Italian provenance, it is visible that slip-cut braies were practically identical throughout Europe at the time. In this case, it is the second type with a drawstring tied in the middle."
        href="svroch.jpeg"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={6}
        src="lengberg_underpants.gif"
        width={709}
        height={543}
        title="Braies from Lengberg Castle in East Tyrol, dated to the 1480s."
      />
      <ImageWithTitle
        md={6}
        src="boj_o_kalhoty.jpg"
        width={1920}
        height={1375}
        title={
          <>
            Various types of braies in the engraving <Cit>Boj o kalhoty</Cit>{' '}
            (Fight for the Trousers) by Monogrammist E.S., Germany, 1440-1467.
          </>
        }
      />
    </Row>
    <Row>
      <Col>
        <p>
          While for a man in the 15th century it was considered a grave insult
          to <Cit>bez hacz choditi</Cit> (go without braies)
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 27" />, whether women
          also wore braies (<i>femoralia</i>) is currently the subject of a
          lively debate, sparked by the aforementioned textile finds at Lengberg
          Castle. It is not possible to clearly prove whether the
          above-mentioned and depicted braies belonged to a man or a woman.
          However, it is interesting that for the Czech context, they are
          documented by name as early as 1455 in the{' '}
          <i>Clementinum Dictionary</i>, specifically as their feminine variant{' '}
          <i>feminale</i>.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA2} note="Str. 69" />
          For the Italian context, braies for women are securely documented at
          the turn of the 16th and 17th centuries.
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 28" />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Both braies and shirts were considered intimate garments that were
          improper to show in public. The gradual revealing of the shirt began
          in the second half of the 15th century in connection with the
          penetration of Renaissance fashion through Germany, but for example in
          the moralistic Codex of Jena, visible parts of the shirt appear only
          on figures who are in some way sinful.
        </p>
      </Col>
    </Row>
  </>
)
