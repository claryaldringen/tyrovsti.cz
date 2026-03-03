import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle/ImageWithTitle'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'

export const Headwear = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="headwear" />
        <h3>Headwear</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Hood</h4>
        <p>
          <i>Kápě</i>,&nbsp;<i>kapicě</i>,&nbsp;<i>kapicze</i> derives, just
          like <i>čepice</i> (cap), from the Medieval Latin word
          <i> capa</i>,<i> cappa</i>. It was also called <i>kukla</i> or
          <i> kuklička</i>, which originated from the Latin <i>cucalla</i>, and
          in written sources it is further referred to as <i>capucium</i>,
          <i> chuchla</i>,<i> cucala</i>,<i> capye</i>. The hood could be worn
          in various ways — normally on the shoulders, where it could be
          complemented by a hat or a helmet, or it could be placed on the head
          with the face opening turned up, worn like a cap. For post-Hussite
          Bohemia, we can trace three main types of hoods: with a tail, without
          a tail, and a tasseled hood, which was also popular in German lands.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Hood with a Tail</h5>
        <p>
          These hoods were popular especially before the Hussite Wars, as can be
          seen in the <i>Gelnhausen Codex</i> (1400–1408) or the
          <i> Olomouc Bible</i> (1417). Given that a longer tail is primarily
          seen on luxuriously dressed individuals, it may have represented the
          good standing of its owner. This would also correspond to the event
          recorded in the chronicle of Vavřinec of Březová, when the Taborites
          cut the long tails of hoods belonging to Prague craftsmen and
          burghers, which thus symbolized the intemperance and luxury they
          condemned.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> Likewise, in the{' '}
          <i>Codex of Jena</i> (1490–1510), a priest is depicted in a
          magnificent fur coat, with many rings and shoes with long pointed
          toes, wearing a hood with a long, massive tail.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="knez.jpg"
        width={832}
        height={1270}
        title="A priest in a hood with a massive tail. Excerpt from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="kape-cip-jk.jpg"
        width={240}
        height={320}
        title="A hood with a tail placed on the head through the face opening. Excerpt from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="kape-s-cipem-rt.jpg"
        width={360}
        height={480}
        title="A hood with a tail draped over the shoulder. Excerpt from the Richental Chronicle (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Hood without a Tail</h5>
        <p>
          The simple hood without a tail was the most widespread type of hood in
          post-Hussite Bohemia. It could be worn under a helmet or together with
          a hat. One such <Cit>kuklu modrou, kterou míval do vojny</Cit> (blue
          hood, which he used to take to war) was left behind by Zikmund
          Jirconis of Poříč in 1455.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:68f3aba0-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          There are very many depictions of these hoods from both Czech and
          German sources.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="Jensky_kodex_Zizka.jpg"
        width={640}
        height={921}
        title="Simple hoods can be seen on Jan Žižka at the head of the army and on the standard-bearer in the depiction from the Codex of Jena. Jan Žižka's hood is complemented with a hat."
      />
      <ImageWithTitle
        md={3}
        src="kape-rt.jpg"
        width={240}
        height={320}
        title="A simple hood placed on the head through the face opening in an excerpt from the Richental Chronicle (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="zasedani1.jpg"
        width={480}
        height={640}
        title="Simple black hoods placed on the head through the face opening are worn by one of the councillors and the scribe in the excerpt from the Memorial Book of Olomouc (1430-1492)."
      />
      <ImageWithTitle
        md={3}
        src="richenthal1.jpg"
        width={480}
        height={641}
        title="Two of the armed men leading Jan Hus to the stake wear hoods without tails under their iron hats. The soldier in front has a very small hood, while the soldier behind has one with decorative scalloping. Excerpt from the Richental Chronicle (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Tasseled Hood</h5>
        <p>
          This type was popular in German lands, including Bohemia at that time.
          It could also be worn under a helmet, as shown in drawings and
          paintings by the famous painter Albrecht Dürer (1471–1528). At the
          neck, it could be fastened with buttons to achieve a more anatomical
          shape. Its tassels could also be decoratively cut, as can be seen, for
          example, in the portrait of the Kutná Hora mint master Hans Harsdorfer
          from 1484. It is worth noting that Albrecht Dürer and Hans Harsdorfer
          were friends.
          <Qt publication={PUBLICATIONS.PATALA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="kape2-jensky-kodex.jpg"
        width={240}
        height={320}
        title="A tasseled hood worn by a light cavalryman. These hoods are frequently encountered in German depictions of light horsemen. Excerpt from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        title="A luxurious hood with buttons and decoratively cut tassels, placed on the head through the face opening. Portrait of Hans Harsdorfer, Nuremberg, 1484."
        src="hans-harsdorffer.jpg"
        width={800}
        height={986}
      />
      <ImageWithTitle
        md={3}
        title="A tasseled hood placed on the head through the face opening in Albrecht Dürer's self-portrait from 1498."
        src="durer.jpg"
        width={1920}
        height={2424}
      />
      <ImageWithTitle
        md={3}
        title="St. Eustace wears a decorative tasseled hood around his neck. Excerpt from the Paumgartner Altarpiece, 1500."
        src="oltar.jpg"
        width={240}
        height={320}
      />
    </Row>
    <Row>
      <Col>
        <h4>Hat</h4>
        <p>
          <i>Klobúk</i>,<i> klouček</i>,<i> koblúček</i>,<i> kobek</i>,
          <i> kobek</i>,<i> klouček</i>,<i> koláče</i>. Besides denoting
          headwear, the term also referred to a helmet. The most common shape
          was one where the crown naturally followed the head and the brim was
          bent or rolled upward. Depictions of such a hat can be found, for
          example, in the <i>Krumlov Anthology</i> (1420)
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> as well as 70 years
          later in the <i>Codex of Jena</i> (1490–1510), and archaeologically
          confirmed by a find from Ireland.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> The crown could also be
          flattened, conically shaped, or pointed. Likewise, the brim could be
          variously shaped: flat and round, like contemporary hats, rolled up as
          mentioned above, bent upward with one or more slits, or completely
          absent. Unlike hoods, it seems that hats were often lined with
          different fabric or fur.
        </p>
        <p>
          An independent hatmakers&apos; guild was established in Prague&apos;s
          New Town on <b>2 April 1446</b>. From their statutes, one can discern
          that they produced hats made of beaver fur and felt.
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=10&bookid=821&page=453"
          />{' '}
          From the confirmation of the hatmakers&apos; guild articles in the Old
          Town on <b>11 August 1489</b>, one can learn that besides beaver hats,
          a master also had to be able to produce a hare-fur hat{' '}
          <Cit>obú stranú vlasitý</Cit> (furry on both sides), a curly hat, and
          in addition to hats also cobbler&apos;s felt and a boot, presumably
          felted in the manner of valenki.
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=10&bookid=821&page=488"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Hat with a Rounded Crown and Rolled Brim</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={2}
        title="A hat find from Ireland, dated to the 14th–15th century."
        src="klobouk-irsko.jpg"
        width={564}
        height={423}
      />
      <ImageWithTitle
        md={2}
        src="klobouk-krumlovsky-sbornik.jpg"
        width={338}
        height={438}
        title="A hat with a rounded crown and rolled brim in the Krumlov Anthology, around 1420."
      />
      <ImageWithTitle
        md={2}
        src="Jensky_kodex_Zizka.jpg"
        width={640}
        height={920}
        title="A hat with a rounded crown and rolled brim on the head of Jan Žižka, Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={2}
        title="A hat with a rounded crown and rolled brim. Excerpt from the Richental Chronicle (1470-1480)."
        src="klobouk-richental.jpg"
        width={240}
        height={320}
      />
      <ImageWithTitle
        md={2}
        title="A hat with a rounded crown and rolled brim, lined with fur. Excerpt from the Brno Legal Book of Václav of Jihlava (1446)."
        src="vaclav-z-jihlavy.jpg"
        width={240}
        height={320}
      />

      <ImageWithTitle
        md={2}
        title="Meeting of the city council depicted in the initial from the Brno Legal Book of Václav of Jihlava (1446). On the councillors' heads, we can see hats with both rounded and flat crowns, lined with fur."
        src="Zasedani.jpg"
        width={399}
        height={356}
      />
    </Row>
    <Row>
      <Col>
        <h5>Hat with an Upturned Brim without Slits</h5>
        <p>
          Most of these hats have flat crowns in the iconography, though
          exceptions can be found, such as the one in the Codex of Jena, see
          image below.
        </p>
      </Col>
    </Row>
    <Row className="row">
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-richental2.jpg"
        width={240}
        height={320}
        title="A hat with a flat crown and upturned brim without slits, excerpt from the Richental Chronicle (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-jensky-kodex.jpg"
        width={240}
        height={320}
        title="A hat with a rounded crown and upturned brim without slits, excerpt from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-richental.jpg"
        width={240}
        height={320}
        title="Hats with a flat crown and upturned brim without slits, lined with fur, excerpt from the Richental Chronicle (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-jensky-kodex3.jpg"
        width={240}
        height={320}
        title="A hat with a flat crown and upturned brim, lined with fur, excerpt from the Codex of Jena (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Hat with an Upturned Brim with Slits</h5>
        <p>
          It is worth noting that even when a hat has only one slit, this slit
          is never in the centre of the forehead, but rather to the side of the
          head.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-jensky-kodex2.jpg"
        width={240}
        height={319}
        title="Fur-lined hats with an upturned brim with a single slit in an excerpt from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="klobouk-2-jensky.jpg"
        width={239}
        height={320}
        title="A hat with an upturned brim with two slits in an excerpt from the Codex of Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="klobouk-2-richental.jpg"
        width={240}
        height={320}
        title="A hat with an upturned brim with two slits in an excerpt from the Richental Chronicle (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="klobouk-3-richental.jpg"
        width={240}
        height={320}
        title="A hat with an upturned brim with multiple slits in an excerpt from the Richental Chronicle (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Other Types of Hats</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="klobouk-a-rt.jpg"
        width={240}
        height={320}
        title="A hat with a slightly downturned brim, a jewel and a feather ornament in an excerpt from the Richental Chronicle (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        title="A hat with a slightly upturned brim in an excerpt from the Codex of Jena (1490-1510)."
        src="klobouk-b-jk.jpg"
        width={360}
        height={480}
      />

      <ImageWithTitle
        md={3}
        src="klobouk-bez-dynka-jk.jpg"
        width={360}
        height={480}
        title="A hat without a brim in an excerpt from the Codex of Jena (1490-1510)."
      />

      <ImageWithTitle
        md={3}
        title="A hat with a flat crown and an upturned rear section of the brim, decorated with a ribbon. Excerpt from the Richental Chronicle (1470-1480)."
        src="klobouk-c-rt.jpg"
        width={240}
        height={320}
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        title="A hat with a flat crown and an upturned front section of the brim, held in position by a ribbon. Such hats very frequently appear in depictions of St. James, where they are additionally decorated with a St. James's scallop shell. Excerpt from the Richental Chronicle (1470-1480)."
        src="klobouk-d-rt.jpg"
        width={239}
        height={320}
      />
      <ImageWithTitle
        md={4}
        title="A hat with a flat crown and a flat brim in an excerpt from the Memorial Book of Olomouc (1430)."
        src="klobouk-e-opk.jpg"
        width={240}
        height={320}
      />
      <ImageWithTitle
        md={4}
        title="A hat in an excerpt from the Richental Chronicle (1470-1480)."
        src="klobouk-f-rt.jpg"
        width={240}
        height={320}
      />
    </Row>
    <Row>
      <Col>
        <h4>Berets</h4>
        <p>
          One of the most common types of headwear was the beret, which
          constituted approximately a quarter of all headwear
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> and is probably hidden
          under the period name <i>čepice</i> (cap).
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        title="A man with a red beret in an excerpt from the Zátoň Altarpiece (after 1440)."
        src="baret-zaton.jpg"
        width={1440}
        height={1920}
      />
      <ImageWithTitle
        md={3}
        title="A man with a red beret in an excerpt from the Codex of Jena (1490-1510)."
        src="kape-jensky-kodex.jpg"
        width={240}
        height={320}
      />
      <ImageWithTitle
        md={3}
        title="A merchant in a beret in an excerpt from the Codex of Jena (1490-1510)."
        src="baret-jk.jpg"
        width={480}
        height={640}
      />
      <ImageWithTitle
        md={3}
        title="Two men with berets in an excerpt from the Richental Chronicle (1470-1480)."
        src="baret-rt.jpg"
        width={481}
        height={640}
      />
    </Row>
  </>
)
