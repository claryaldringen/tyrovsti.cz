import { Col, Row } from 'reactstrap'
import { Cit } from '../../Citation'
import { PUBLICATIONS } from '../../../shared/constants'
import { Qt } from '../../Quote/Qt'
import { ImageWithTitle } from '../../ImageWithTitle'

export const Gown = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="gown" />
        <h4>Gown</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          The gown was a fundamental type of outer garment. It was most commonly
          made of woolen fabric, which is called <i>sukno</i> in Czech so this
          type of garment was called <i>sukně</i> in Old Czech, which means{' '}
          <i>skirt</i> in contemporary Czech. It could come in various lengths.
          The long version probably could have been called <i>reverenda</i>, as
          indicated by a record from 1478 stating that Prague maltster Rameš
          used to wear a <Cit>reverendě nové barvy</Cit> (reverenda of a new
          color).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6a7087a0-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          The gowns could be lined with fabric, fur, or left unlined. This is
          referred to in the year 1425 by Tomášek of Hlohovice to his brother
          <Cit>sukni s beránčím kožichem</Cit> (The gown with lamb fur) and{' '}
          <Cit>sukni parvířku s liščím kožichem</Cit> (The gown{' '}
          <Cit>parvířka</Cit> with fox fur). The same Tomášek, however, also had
          a <Cit>sukni modrú nepodšitú</Cit> (blue gown without lining).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6b7d8ad0-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Plzeň citizen Jan Chudoba bequeathed from his wardrobe in 1432 a
          <Cit>knězi Šimanovi sukni černú svú s liščím kožichem</Cit> (black
          gown with fox fur to the priest Šiman). Master Petr, also from Plzeň,
          mentions in 1492 a <Cit>harasovú suknici krátkú podšitú</Cit> (short
          gown lined made from haras).
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 67" /> Prague maltster
          Duchek, who died in 1437, had, among other things, three gowns, one{' '}
          <Cit>šerú s beránčím kožichem črným</Cit> (gray with black lamb fur),
          another <Cit>s liškami</Cit> (with foxes), and another{' '}
          <Cit>s plátnem</Cit> (with canvas)
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6b7d8ad0-fe2a-11e6-97b4-5ef3fc9ae867"
          />
          , that is, lined with linen fabric (canvas at that time does not
          necessarily mean canvas weave but refers to linen fabric).
        </p>
        <p>
          At the end of the 15th and the beginning of the 16th century, we find
          in written sources gowns trimmed with fur. For example, in the
          Jindřichův Hradec books in 1496, there is mention of a{' '}
          <Cit>červená, lasicí opremovaná</Cit> (red, trimmed with marten),
          which cost 2 schocks of groschen. In 1503, a servant also stole from
          the noble lady Barbora of Vrchlabí a{' '}
          <Cit>
            sukni atlasovou zelenou, kožichem podšitou a lasičkami opremovanou
          </Cit>{' '}
          (green velvet gown, lined with fur and trimmed with marten) .
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:657e33f0-fe2a-11e6-97b4-5ef3fc9ae867"
          />
        </p>
        <p>In the Czech lands, we can trace three most common variants:</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Simple Gown</h5>
        <p>
          A gown with a more or less shirt-like cut of various lengths, either
          with narrow or wide sleeves. The term &bdquo;simple&ldquo; does not
          refer to the material, which could indeed be luxurious, but to the
          relative simplicity of the cut. It could be decorated with
          then-fashionable pleats or draping. In Czech iconography, more
          dignified figures (e.g., elders, saints, angels, etc.) typically have
          very simple, but also very long gowns.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="Jensky_kodex_Zizka.jpg"
        width={640}
        height={921}
        title="Jan Žižka in a simple gown with narrow sleeves and a standard-bearer in a simple gown with wide sleeves.
  Excerpt from the  Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="sv-sebestian-jenikov.jpg"
        width={221}
        height={482}
        title="St. Sebastian in a fashionable short green gown lined with brown fur, featuring wide sleeves, side slits on the shorts,
  and draping on the altar panel from Jeníkov, around 1460."
      />
      <ImageWithTitle
        md={4}
        src="kutnohorska1.jpg"
        width={524}
        height={520}
        title="A man in a simple gown and cloak, excerpt from the Kutná Hora Bible, 1489."
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="andel-kutna-hora.jpg"
        width={499}
        height={548}
        title="An angel in a long simple skirt with tapering sleeves and a stand-up collar on the fresco from the Mintmaster's Chapel, St. Barbara's Church, Kutná Hora (1460-1470)"
      />
      <ImageWithTitle
        md={4}
        src="andel2.jpg"
        width={325}
        height={381}
        title="An angel in a long, plain gown with tapered sleeves and a stand-up collar in a fresco from the Mint Chapel, St. Barbara's Church, Kutná Hora (1460-1470)."
      />
      <ImageWithTitle
        md={4}
        src="apostolove-jensky.jpg"
        width={622}
        height={955}
        title="Apostles in simple gowns in an excerpt from the Codex of Jena (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <h5>
          Gown type <i>vestina</i>
        </h5>
        <p>
          Gown, called <Cit>vestina</Cit> by the Italians, is characterized by a
          fitted bodice, which was fastened, and more or less draped shorts of
          various lengths, usually not longer than just below the knees.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat5.jpg"
        width={466}
        height={512}
        title={
          <>
            Pregéř (the coin maker) dressed in an old pink gown of type{' '}
            <i>vestina</i>. Detail from the fresco in the Mincířská Chapel of
            St. Barbara&apos;s Cathedral in Kutná Hora (1460-1470).
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="Zasedani.jpg"
        width={399}
        height={356}
        title={
          <>
            A meeting of the city council depicted in the initial from the Brno
            Legal Book of Václav of Jihlava (1446). Councillors, facing away
            from the observer, one in blue and the other in black, are wearing
            gowns of the type <i>vestina</i>.
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="vestina3.jpg"
        width={649}
        height={475}
        title={
          <>
            David, wearing a gown of the type <i>vestina</i>, slays Goliath.
            Woodcut from the Kutná Hora Bible (1489).
          </>
        }
      />
    </Row>
    <Row>
      <Col>
        <h5>Ruched Gown with Baggy Sleeves</h5>
        <p>
          This type of gown is characterized by baggy sleeves and rich ruching
          along its entire length. The Czech version differs from its Western
          European counterparts, particularly in the construction of the
          sleeves. It seems that in Bohemia, a deep sleeve head, the so-called{' '}
          <i>grande assiette</i>, was maintained, giving Czech gowns of this
          type a somewhat flattened appearance, in contrast to the more square
          shape typical in Western Europe. This becomes especially evident when
          combined with coats that lack padded shoulders, as was common in
          Burgundy and France. In the West, this type of sleeve usually had two
          openings for inserting the hand—one at the wrist, as is usual for
          normal sleeves, and the other roughly at the elbow. Although
          depictions of such sleeves can be found, for example, in the Kutná
          Hora Bible, other Czech contemporary depictions suggest that Czech
          sleeves were typically more square and had only one opening for the
          hand, around the elbow level. This sleeve construction can be
          indirectly confirmed by some written sources. For example, in one
          Rakovník court book from 1486, there is an entry:
          <Cit>
            Poručil jsem, aby kladl peníze do truhly, a on kladl do rukáva sukně
            své.
          </Cit>{' '}
          (I ordered him to put money in the chest, and he put it in the sleeve
          of his gown.) Elsewhere, you can read:{' '}
          <Cit>
            Vyňal peníze s měchýřem, dosti pěkný uzlík, a vložil je do rukáva.
          </Cit>{' '}
          (He pulled out the money, really nice sack, and put it in his sleeve.)
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6b068610-fe2a-11e6-97b4-5ef3fc9ae867"
          />
        </p>
        <p>This type of gown was most often lined with fur.</p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="sukne-pytle1.jpg"
        width={1140}
        height={1631}
        title="A typical example of a Western European gown with baggy sleeves, depicted in the excerpt from the painting Exhumation of St. Hubert by Rogier van der Weyden, 1430."
      />
      <ImageWithTitle
        md={4}
        src="sukne-pytel2.jpg"
        width={259}
        height={375}
        title="Another typical example of a Western European gown with baggy sleeves, depicted in the excerpt from the triptych for Alessandro Sforza, again by Rogier van der Weyden, 1460."
      />
      <ImageWithTitle
        md={4}
        src="sukne-pytel4.jpg"
        width={494}
        height={831}
        title="Two gowns with baggy sleeves depicted in the Croniques abregies by David Aubert, 1471. Particularly interesting is the green gown, whose sleeve does not narrow towards the wrist and remains loose. A similar gown can be found in the illustrations from the Memorial Book of Olomouc"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="saul-pomazani.jpg"
        width={1058}
        height={504}
        title="The man on the left is wearing a gown with baggy sleeves and two hand openings, as is customary in Western Europe, in the woodcut depicting the anointing of King Saul, Kutná Hora Bible (1489)."
      />
      <ImageWithTitle
        md={4}
        src="klobouk-richental.jpg"
        width={240}
        height={320}
        title="Man in a gown with baggy sleeves and two hand openings in the excerpt from the Richental Chronicle (1470-1480)."
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="zasedaniradyolomouc.jpg"
        width={974}
        height={1622}
        title="Meeting of the municipal council in the depiction from the Memorial Book of Olomouc (1430-1492). Scribe Václav from Jihlava (bottom left) wears a blue skirt, lined with fur, with a square baggy sleeve and only one opening for the hand. The councilor in blue above him has a skirt with a baggy sleeve, but with a free end, similarly to the man in green from the illumination in the Shortened Chronicles by David Aubert. It also shows how Czech skirts appear somewhat flattened compared to their Western counterparts."
      />
      <ImageWithTitle
        md={4}
        src="vaclav-z-jihlavy.jpg"
        width={240}
        height={320}
        title="Václav of Jihlava in a purple skirt lined with fur and baggy sleeves. Excerpt from the Brno Legal Book of Václav of Jihlava (1446)."
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="sukne-pytel5.jpg"
        width={632}
        height={972}
        title="Wealthy man in a long fur-lined gown with a square baggy sleeve, on a page from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={5}
        src="sukne-pytel6.jpg"
        width={1224}
        height={1742}
        title="Priest in a long, fur-lined gown with a square baggy sleeve, on a cutout from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="sukne-pytel7.jpg"
        width={382}
        height={872}
        title="Wealthy man in a long, fur-lined gown with a square baggy sleeve, on a cutout from the Codex of Jena (1490-1510)."
      />
    </Row>
  </>
)
