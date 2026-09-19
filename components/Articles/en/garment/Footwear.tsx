import { Col, Row } from 'reactstrap'
import { ImageWithTitle } from '../../../ImageWithTitle/ImageWithTitle'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'
import { PUBLICATIONS } from '../../../../shared/constants'

export const Footwear = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="footwear" />
        <h3>Footwear</h3>
        <p>
          Footwear in Bohemia in the second half of the 15th century can be
          divided into low, mid-height and tall. Shoes were most commonly made
          of leather by sewing the sole to the upper and then turning the shoe
          inside out (so-called turnshoe construction). A strip of leather,
          called a welt, was inserted between the sole and the upper. The aim of
          constructing a medieval shoe was to hide all important seams inside.
          While in Germany the fashion for round-toed shoes was already
          beginning — a trend that would culminate in the first half of the 16th
          century with shoes called &quot;cow&apos;s mouth&quot; — in Bohemia, a
          conservative moderate pointed toe was still maintained at the
          beginning of the 16th century.
        </p>
        <p>
          Alongside this moderate point, the long beaks once worn a century
          earlier on shoes of the <i>poulaine</i> type reappeared in Prague in
          the 1460s. On 2 September 1464 George of Poděbrady ordered the
          burgomasters and councils of all three Prague towns:{' '}
          <Cit>
            Přikazujem vám, abyste všem ševcuom přikázali, aby špicuov u třevíc
            i u škoren nedělali, a také žádnému svému nedopúštějte v špici
            choditi; v tom naši vuoli naplníte.
          </Cit>
          (We command you to order all shoemakers not to make points on shoes or
          boots, and not to allow any of your people to walk about in points; in
          this you will fulfil our will.)
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://kramerius5.nkp.cz/view/uuid:a286ef70-8dd6-11e8-9588-5ef3fc9bb22f?page=uuid:fc3acae9-d484-4432-a28d-24c18c153d79"
            note="p. 477"
          />{' '}
          Tomek adds from the Prague town books that{' '}
          <Cit>
            za času krále Jiřího smyslili si ševci Pražští dělati zase střevíce
            a škorně špičaté jako kdysi o sto let předtím
          </Cit>{' '}
          (in the time of King George the Prague shoemakers took it into their
          heads to make pointed shoes and boots again, as a hundred years
          before), and judges that the ban <Cit>nejspíš mělo svůj účinek</Cit>{' '}
          (most likely had its effect) . The long beaks thus returned to Bohemia
          only briefly; thirteen years later, in 1477, the Old Town councillors,
          settling a dispute among the shoemakers, already describe a different
          trend –{' '}
          <Cit>obuv dělala nižší a škorně jezdecké ostřejší než jindy</Cit>{' '}
          (footwear was being made lower and riding boots sharper than before).
          <Qt
            publication={PUBLICATIONS.TOMEK8}
            href="https://kramerius5.nkp.cz/view/uuid:38c064d0-106f-11dd-b330-000d606f5dc6?page=uuid:5e2a2492-3eef-4067-a1b7-4c6e1f5056e6"
            note="p. 367, 497"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fig5g.png"
        width={400}
        height={360}
        title="Method of sewing the upper to the sole in the 15th century (Goubitz)."
      />
    </Row>
    <Row>
      <Col>
        <p>
          In addition to the upper, the sole and the welt, a shoe generally
          contained several more parts — a heel stiffener, a binding, and some
          variant of fastening or lacing.
        </p>
        <p>
          In the Prague towns the shoemaker&apos;s trade was divided in two: the{' '}
          <i>novinníci</i>, who made new footwear, and the <i>vetešníci</i>, who
          repaired it. Where exactly the line ran was pronounced on 12 July 1441
          by the councillors of all three towns: the repairers{' '}
          <Cit>
            nové nártie a podešvy nové k starým ochozeným holenom budú moci
            přišívati a dvoje škorně dobře ochozené do krámu na prodaj každý trh
            vykládati, jakož jich práva svědčie, ale červených ani bielých šáróv
            k vetché obuvi nemají okládati
          </Cit>
          (may sew new vamps and new soles onto old worn-down boot legs and put
          out two pairs of well-worn boots for sale in the shop every market
          day, as their rights attest, but they must not fit red or white{' '}
          <i>šáry</i> onto old footwear). This shows what wore out first on a
          boot – the vamp and the sole – and what a customer had made only new:
          the coloured <i>šáry</i>, that is the boot legs. The New Town
          councillors renewed the ruling in 1456 and added the condition that
          whoever wished to settle as a master in either trade must agree with
          the community{' '}
          <Cit>
            ve věcech slavné svátosti těla a krve pána našeho Jhesu Crista pod
            obojím způsobem
          </Cit>{' '}
          (in matters of the glorious sacrament of the body and blood of our
          Lord Jesus Christ under both kinds).
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://kramerius5.nkp.cz/view/uuid:a286ef70-8dd6-11e8-9588-5ef3fc9bb22f?page=uuid:002e8c18-a4ee-489d-b0d0-aec88c18c1b5"
            note="p. 440–441, 470–471"
          />
        </p>
        <p>
          The shoemakers greased and blackened the leather themselves. When they
          quarrelled in 1453 with the tanners of Podskalí and Vyšehrad, the
          tanner Jakub Kavka testified that{' '}
          <Cit>
            obojí koželuzi nemazali … ale byli štumfaři; potom se srotili ševci,
            a tak počali mazati, a tak štumfařské řemeslo sešlo
          </Cit>{' '}
          (neither group of tanners greased … they were <i>štumfaři</i>; then
          the shoemakers banded together and began to grease, and so the trade
          of the <i>štumfaři</i> died out), and the shoemakers Beneš and Mařík
          Lichva confirmed that the tanners had{' '}
          <Cit>
            naučili mazati od tovařišuov ševcovských zlehka od čtyřidceti let
          </Cit>{' '}
          (learned to grease from shoemakers&apos; journeymen some forty years
          ago).
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://kramerius5.nkp.cz/view/uuid:a286ef70-8dd6-11e8-9588-5ef3fc9bb22f?page=uuid:8c5aded7-667e-4c4f-8b87-966f49281f28"
            note="p. 465–466"
          />
        </p>
        <h4>Overlap Fastening</h4>
        <p>
          Overlap fastening means that a part of the leather on the upper
          overlaps the open section of the shoe and is fastened at the side with
          a button or buckle. Its function is very similar to flap fastening;
          however, the main difference is that the flap is sewn onto the shoe
          separately. Nevertheless, it is not easy to distinguish these two
          types in finds and depictions, and they often merge together. This
          type of fastening was most popular between the 8th and 13th centuries;
          by the 15th century it appeared only very sporadically (e.g. a find
          from Fribourg in Switzerland, where the overlap is fitted with two
          straps that fasten at the ankles using two buckles).
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fig16.png"
        width={400}
        height={360}
        title="Criblet, Fribourg, Switzerland. A shoe with overlap fastening and buckles. 14th–15th century (Volken & Bourgarel 2001)."
      />
    </Row>
    <Row>
      <Col>
        <h4>Fold Fastening</h4>
        <p>
          The principle of fastening is very similar to overlap fastening, but
          the shoe completely lacks an open section on the instep. Instead,
          there is a large fold that is fastened at the side using buttons,
          buckles or hooks. This type of fastening was very popular in the 14th,
          15th and 16th centuries, especially for tall boots.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="fig6.png"
        width={540}
        height={800}
        title="Dordrecht, Netherlands. An ankle boot with a fold fastening, shown unfastened and fastened. 15th century. (Goubitz)"
      />
      <ImageWithTitle
        md={4}
        src="fig7.png"
        width={520}
        height={466}
        title="Vevey, Switzerland. A boot with fold fastening. 14th–15th century. (Goubitz)"
      />
      <ImageWithTitle
        md={4}
        src="fig14.png"
        width={520}
        height={466}
        title="Coventry, England, 15th century. (Goubitz)"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="zahyb-jensky.jpg"
        width={600}
        height={800}
        title="A tall riding boot with fold fastening, excerpt from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="zahyb-richental1.jpg"
        width={600}
        height={800}
        title="A tall riding boot with fold fastening, excerpt from the Richental Chronicle (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="zahyb-richental2.jpg"
        width={600}
        height={800}
        title="An ankle boot with fold fastening, excerpt from the Richental Chronicle (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="zahyb-durer.jpg"
        width={600}
        height={800}
        title="A tall riding boot with fold fastening, excerpt from the Paumgartner Altarpiece (1500)."
      />
    </Row>
    <Row>
      <Col>
        <h4>Instep Strap Fastening on Open Shoes</h4>
        <p>
          This type of fastening is found on low, open shoes from the 14th to
          the 16th century. It is characterised by a strap that runs across the
          instep and is fastened with a button, buckle, or tied in a knot.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={6}
        src="fig5abc.png"
        width={400}
        height={720}
        title={
          <>
            <br />
            Three examples of shoes with an instep strap fastened with a buckle
            from the 15th century.
            <br />
            Top: Dordrecht, Netherlands. (Goubitz, 2001)
            <br />
            Middle: Schleswig, Germany. (Schnack, 1992)
            <br />
            Bottom: London, England. (Grew &amp; De&nbsp;Neergaard, 1988)
          </>
        }
      />
      <ImageWithTitle
        md={6}
        src="reminek-nart-durer.jpg"
        width={1200}
        height={1600}
        title="This ankle boot does not exactly correspond to the described type, as it is not an open shoe, but the principle of fastening with an instep strap with a buckle is clearly visible here. The excerpt comes from Albrecht Dürer's painting Lot and His Daughters (1496-1499)."
      />
    </Row>
    <Row>
      <Col>
        <h4>Side Lacing</h4>
        <p>
          This type has a slit on the side of the shoe, which is laced using a
          cord or leather strap. It is found on low and ankle-height shoes from
          the 13th to the 15th century. It can be combined with instep strap
          fastening.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="fig11fig12.png"
        width={480}
        height={864}
        title={
          <>
            {' '}
            Top: Dordrecht, Netherlands. A very unusual model with side lacing
            and an instep strap with a buckle. Late Middle Ages. (Goubitz)
            <br />
            Bottom: Oslo, Norway. A boot with lacing loops. Late Middle Ages.
            (Schia, 1977)
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="fig17.png"
        width={520}
        height={468}
        title="Oud-Turnhout, Belgium. A shoe with diagonal side lacing. 15th century. (Goubitz)"
      />
      <ImageWithTitle
        md={4}
        src="bocni-richental.jpg"
        width={390}
        height={520}
        title="A shoe with side lacing in an excerpt from the Richental Chronicle (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h4>Laces</h4>
        <p>
          This type of footwear has one, two or three pairs of holes on the
          front, through which a lace was threaded, similarly to a doublet. Some
          pieces, however, may have been laced with a single long lace, which is
          similar to modern footwear. The finds are generally dated between 1350
          and 1530.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="fig7a.png"
        width={520}
        height={720}
        title={
          <>
            Top: Dordrecht, Netherlands. A boot with a tongue, through which
            laces pass on both sides. 14th century. (Goubitz)
            <br />
            Bottom: Delft, Netherlands. A boot with two side seams and one rear
            seam. The tongue is missing. 15th century. (Goubitz)
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="fig7fig8.png"
        width={480}
        height={540}
        title={
          <>
            Top: Dordrecht, Netherlands. A shoe with pairs of laces. Late Middle
            Ages. (Goubitz)
            <br />
            Bottom: Dordrecht, Netherlands. A shoe with three pairs of holes for
            a single through-lace, as we know it today. Late Middle Ages.
            (Goubitz)
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="fig5ab.png"
        width={520}
        height={540}
        title={
          <>
            {' '}
            Top: Tiel, Netherlands. An ankle boot with curved side seams. Late
            Middle Ages. (Goubitz)
            <br />
            Bottom: Delft, Netherlands. A shoe with a fashionable pointed toe
            and a diagonal heel seam. Late Middle Ages. (Goubitz)
          </>
        }
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="fig6bolsward.png"
        width={480}
        height={360}
        title="Bolsward, Netherlands. A fashionably cut shoe with one pair of lace holes. Late Middle Ages. (Goubitz)"
      />
      <ImageWithTitle
        md={4}
        src="fig8leiden.png"
        width={600}
        height={540}
        title="Leiden, Netherlands. A boot with laces tied in pairs, similarly to doublets. 15th century. (Goubitz)"
      />
      <ImageWithTitle
        md={4}
        src="fig9.png"
        width={400}
        height={360}
        title="Dokkum, Netherlands. A very fashionably cut shoe with three pairs of lace holes. Late Middle Ages. (Goubitz)"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="tkanicky-jensky1.jpg"
        width={600}
        height={800}
        title="An ankle boot with lace fastening or toggle buttons, excerpt from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="tkanicky-jensky2.jpg"
        width={600}
        height={800}
        title="An ankle boot with lace fastening or toggle buttons, excerpt from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="tkanicky-jensky3.jpg"
        width={600}
        height={800}
        title="An ankle boot with lace fastening or toggle buttons, excerpt from the Codex of Jena (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Reconstruction</h5>
        <p>
          For the reconstruction, ankle boots with a single-lace fastening were
          chosen, similar to modern shoes, because the requirement was for a
          robust boot that the owner could wear with plate leg armour (i.e. the
          part from the ankle upward would be covered by the plate greave) and
          at the same time undertake long marches in. This type of boot is
          widely represented in Czech period depictions, see below.
        </p>
        <p>
          What an ordinary Bohemian shoemaker had to be able to do is stated by
          the earliest surviving description of a masterpiece, the guild
          ordinance of the Pardubice shoemakers of 17 December 1515: the
          candidate{' '}
          <Cit>
            aby vokázal nejprv škorni příční, druhú škorni telecí, od té škorně
            střevíc zadní, a k tomu také punčoch veliký
          </Cit>{' '}
          (is to show first a <i>příčná</i> boot, secondly a calfskin boot, from
          that boot a rear shoe, and also a large <i>punčoch</i>) – that is, two
          kinds of high boots, a low shoe and a leather legging. For that he
          paid <Cit>čtyři groše bílé a libru vosku</Cit> (four white groschen
          and a pound of wax) and laid on a meal for the guild{' '}
          <Cit>každý podle svěj možnosti</Cit> (each according to his means).
          <Qt
            publication={PUBLICATIONS.AC17}
            href="https://kramerius5.nkp.cz/view/uuid:2cf61550-8dd7-11e8-9588-5ef3fc9bb22f?page=uuid:c2b13f00-9bb2-11e8-8b19-005056825209"
            note="p. 226, no. 1011"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat5.jpg"
        width={466}
        height={512}
        title="The coin maker. The type of fastening cannot be determined here, but it is evident that the footwear is ankle-height. Excerpt from the fresco in the Mintmaster's Chapel of St. Barbara's Cathedral in Kutná Hora (1460-1470)."
      />
      <ImageWithTitle
        md={4}
        src="vaclav-z-jihlavy.jpg"
        width={249}
        height={320}
        title="The scribe wears dark ankle boots. The type of fastening cannot be determined. Excerpt from the Brno Legal Book of Václav of Jihlava (1446)."
      />
      <ImageWithTitle
        md={4}
        src="tkanicky-jensky2.jpg"
        width={600}
        height={800}
        title="An ankle boot with lace fastening or toggle buttons, excerpt from the Codex of Jena (1490-1510)."
      />
    </Row>
    <Row>
      <p>
        In the construction of the replica, all elements that were used in the
        construction of shoes in the 15th century were applied, i.e. a binding,
        a welt and a heel stiffener. The shoe is hand-sewn and subsequently
        turned so that all stitches are hidden inside. The reconstruction was
        made by Josef &bdquo;Halflung&ldquo; Novák.
      </p>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="bota0.jpg"
        width={720}
        height={960}
        title="The sewn-on heel stiffener"
      />
      <ImageWithTitle
        md={4}
        src="bota1.jpg"
        width={720}
        height={960}
        title="The sewn-on binding"
      />
      <ImageWithTitle
        md={4}
        src="bota4.jpg"
        width={960}
        height={720}
        title="The upper and sole are prepared for sewing"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="bota2.jpg"
        width={960}
        height={720}
        title="Sewing the upper parts of the boot"
      />
      <ImageWithTitle
        md={4}
        src="bota5.jpg"
        width={960}
        height={720}
        title="Sewing the sole to the upper"
      />
      <ImageWithTitle
        md={4}
        src="bota9.jpg"
        width={960}
        height={720}
        title="The completely sewn boot"
      />
    </Row>
    <Row>
      <ImageWithTitle md={4} src="bota6.jpg" width={720} height={960} />
      <ImageWithTitle md={4} src="bota7.jpg" width={720} height={960} />
      <ImageWithTitle md={4} src="bota8.jpg" width={720} height={960} />
    </Row>

    <Row>
      <Col>
        <h4>Toggle Buttons</h4>
        <p>
          In this type, the fastening slit is at the front on the instep. On one
          side there are so-called toggle buttons. These are created by tying a
          knot in a leather lace. This knot then serves as a button and is
          threaded through the opposing holes. This type of fastening was used
          in the 14th and 15th centuries and reached its peak between 1350 and
          1450.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="fig1.png"
        width={400}
        height={396}
        title="Construction of a toggle button. (Goubitz)"
      />
      <ImageWithTitle
        md={4}
        src="fig8ddt674.png"
        width={520}
        height={396}
        title="Dordrecht, Netherlands. An ankle boot in which the lace fastening was replaced by three toggle buttons. 14th–15th century. (Goubitz)"
      />

      <ImageWithTitle
        md={4}
        src="fig4.png"
        width={400}
        height={360}
        title="Dordrecht, Netherlands. An ankle boot. 14th–15th century. (Goubitz)"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="fig7addt1031.png"
        width={400}
        height={602}
        title={
          <>
            Top: Ghent, Belgium. A boot with two toggle buttons and a tongue.
            14th–15th century. (Goubitz)
            <br />
            Bottom: Dordrecht, Netherlands. A children&apos;s boot with four
            toggle buttons. 14th–15th century. (Goubitz)
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="fig9a.png"
        width={400}
        height={648}
        title={
          <>
            Top: Dordrecht, Netherlands. A boot with two toggle buttons and two
            rolled buttons. 14th–15th century. (Goubitz)
            <br />
            Bottom: A boot with combined fastening — the first two holes on the
            instep are tied with a lace, the rest fastened with toggle buttons.
            14th–15th century. (Goubitz)
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="fig10ab.png"
        width={440}
        height={648}
        title={
          <>
            Top: Dordrecht, Netherlands. A boot with straps, one end of which is
            tied into a toggle button and the other end has a hole for fastening
            this button. 14th–15th century. (Goubitz)
            <br />
            Bottom: Nijkerk, Netherlands. A boot with a flap fastened with
            toggle buttons. 14th–15th century. (Goubitz)
          </>
        }
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="fig5abddt535.png"
        width={400}
        height={466}
        title={
          <>
            Dordrecht, Netherlands. Children&apos;s shoes from the 14th–15th
            century. (Goubitz)
            <br />
            Top: A child&apos;s shoe. <br />
            Bottom: A toddler&apos;s shoe. <br />
          </>
        }
      />
    </Row>
    <Row>
      <Col>
        <h4>Flap Fastening</h4>
        <p>
          It is principally the same as the overlap fastening described above,
          but the flap is not an integral part of the shoe; rather, it is sewn
          on additionally. This type of fastening is most commonly found on
          footwear from the 14th and 15th centuries.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fig10b.png"
        width={400}
        height={360}
        title="Nijkerk, Netherlands. A boot with a flap fastened with toggle buttons. 14th–15th century. (Goubitz)"
      />
    </Row>
    <Row>
      <Col>
        <h4>Collar Shoes</h4>
        <p>
          These shoes have a leather collar instead of a binding. After putting
          the shoe on, the collar is folded down, which slightly closes the shoe
          around the ankle. This type of shoe was popular at the turn of the
          15th and 16th centuries.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="fig18.png"
        width={480}
        height={360}
        title="Edam, Netherlands. A shoe with a collar. Around 1480. (Van Heeringen & Meffert 1996)"
      />
      <ImageWithTitle
        md={3}
        src="limec-jensky.jpg"
        width={300}
        height={400}
        title="Collar shoes, excerpt from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="limec-hasplirska.jpg"
        width={600}
        height={800}
        title="Collar shoes, fresco in the Hašplíř Chapel of St. Barbara's Cathedral in Kutná Hora. (late 15th century)"
      />
      <ImageWithTitle
        md={3}
        src="limec-richental.jpg"
        width={600}
        height={800}
        title="Collar shoes in an excerpt from the Richental Chronicle (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h4>Strap Fastening</h4>
        <p>
          A very archaic type of fastening, where the foot above the ankle was
          wrapped all around with one or more straps. This type can be divided
          into two subtypes:
        </p>
        <ol>
          <li>
            The strap wrapping around the foot runs horizontally and is threaded
            through several pairs of vertical slits made directly in the upper
            of the shoe. Used primarily between 600 and 1000 AD.
          </li>
          <li>
            The strap wrapping around the foot runs horizontally and is threaded
            through loops that are created by threading another strap vertically
            through pairs of horizontal slits in the upper of the shoe. Used
            primarily between 1000 and 1300 AD.
          </li>
        </ol>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="all-richental.jpg"
        width={900}
        height={1200}
        title={
          <>
            {' '}
            Several types of footwear. From foreground to background:
            <ul>
              <li>Boots with strap fastening wrapped above the ankles.</li>
              <li>Shoes with a fold-down collar.</li>
              <li>Hose with a leather sole.</li>
              <li>Tall riding boots with fold fastening.</li>
            </ul>
          </>
        }
      />
    </Row>
  </>
)
