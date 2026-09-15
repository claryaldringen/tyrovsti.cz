import { Col, Row } from 'reactstrap'
import React from 'react'
import { PUBLICATIONS } from '../../../shared/constants'
import { Qt } from '../../Quote/Qt'
import { ImageWithTitle } from '../../ImageWithTitle'

export const HansHarsdorfer = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="hans-harsdorfer" />
        <h4>Hans (II) Harsdorfer (c. 1450–1511)</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Hans Harsdorfer came from the Nuremberg patrician family of the
          Harsdorfers, whose origins date back to 1377, when two brothers,
          Heinrich and Friedrich Harsdorfer, moved from their estates to
          Nuremberg, where they obtained citizenship and began doing business in
          mining and metallurgy. They thus became so-called armorial burghers,
          all the more notable for having brought their coat of arms with them
          to the city. This coat of arms, which depicts a silver tower on a
          three-peaked hill on a red field, was allegedly granted to them as
          early as 1203 by the Roman King Philip of Swabia, when the family
          ancestors distinguished themselves during Philip&apos;s campaign to
          Italy, where they captured a tower on a hilltop.
          <Qt publication={PUBLICATIONS.VONHARSDORF} />
        </p>
        <p>
          Hans&apos;s father, Anton Harsdorfer, married Barbara Fritz, a
          burgheress of Plzeň, with whom he had two children, Hans and Kateřina.
          Anton purchased the Malesice estate, which had been alienated from the
          Kladruby monastery during the Hussite Wars. Anton Harsdorfer died on{' '}
          <b>12 March 1462</b> and was buried in the Cathedral of St Bartholomew
          in Plzeň. Malesice was inherited by his two children, with Kateřina
          selling her share to her brother Hans on 30 March 1474 for 1,000
          florins.
          <Qt
            publication={PUBLICATIONS.ENCYKLOPEDIEPLZEN}
            href="https://encyklopedie.plzen.eu/home-mup/?acc=profil_osobnosti&load=4600"
          />
        </p>
      </Col>
      <ImageWithTitle
        src="wappen_4.png"
        width={550}
        height={432}
        title="Coat of arms of the family according to J. A. Siebmacher (1605)"
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="hans-harsdorffer.jpg"
        width={800}
        height={986}
        title="Portrait of Hans Harsdorfer, probably by Michael Wolgemut, 1484"
      />
      <Col>
        <p>
          Hans Harsdorfer was born sometime between 1450{' '}
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          and 1460{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          either in Malesice or in Plzeň. As mentioned above, in 1474 he became
          the sole owner of Malesice, after which he also styled himself. On{' '}
          <b>11 September 1481</b> he married Margareta from the Nuremberg
          armorial patrician family of the Nützels. He was a mining and
          metallurgical entrepreneur of the family company, active since 1460.
          Initially, he only traded in ores imported from Bohemian mines.
          Diplomatic contacts with the Bohemian King Vladislaus II Jagiellon,
          following the revolts of the Kutná Hora miners and the uncovering of
          financial fraud at the mint in 1496, earned him the post of Supreme
          Mint Master as well as participation in the Prague Diet of 1497.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />
        </p>
        <p>
          He had the Chapel of St Wenceslas and Ladislaus in the Italian Court
          lavishly furnished, including three richly decorated altarpieces,
          which he apparently commissioned from a painting workshop directly in
          Nuremberg. The chapel was (re)consecrated on <b>20 July 1497</b> on
          the occasion of King Vladislaus II&apos;s visit.
          <Qt publication={PUBLICATIONS.VONHARSDORF} /> During his time in Kutná
          Hora he also had the Mint Master&apos;s house expensively rebuilt and
          acquired luxury goldsmith&apos;s scales housed in a decoratively
          painted case, the outer lid of which depicts a battle of wild men and
          the inner side shows two armed men holding the coats of arms of
          himself and his wife Margareta.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          He and his wife also donated to the chapel a chasuble adorned with
          embroidery of scenes from the Life of the Virgin and the Childhood of
          Christ. During the Baroque era, the embroidery was cut out, sewn onto
          a new backing and framed in gold.
          <Qt
            publication={PUBLICATIONS.CMSKH}
            href="https://www.cms-kh.cz/textil-a-odevy"
          />{' '}
          In 1499 he asked the king to be released from his office in order to
          devote himself entirely to business, as following the death of his
          uncle Endres Harsdörffer he had inherited his fiefs and estates,
          Eschenbach Castle, a copperworks and a hammer mill in Enzendorf (now
          part of Hartenstein in Lower Franconia).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          Vladislaus granted this request and in a document of November 1499
          guaranteed him protection of all his property within the territory of
          the Bohemian Crown.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="oltar_kaple_ceskych_kralu.jpg"
        width={1706}
        height={1280}
        title="Left altarpiece in the Chapel of St Wenceslas and Ladislaus – the Virgin Mary among the Apostles"
      />
      <ImageWithTitle
        src="kh_kaple.jpg"
        width={640}
        height={480}
        title="Right altarpiece in the Chapel of St Wenceslas and Ladislaus"
      />
      <ImageWithTitle
        src="goldwage.jpg"
        width={550}
        height={394}
        title="Goldsmith's scales of Hans Harsdorfer"
      />
      <ImageWithTitle
        src="mincmistruvdum.jpeg"
        width={600}
        height={800}
        title="The Mint Master's house in the Italian Court complex in Kutná Hora"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Thus Hans Harsdorfer left Kutná Hora on <b>5 April 1499</b>,
          <Qt publication={PUBLICATIONS.VONHARSDORF} /> moved to Nuremberg, and
          in 1501 joined the city council (in which members of the families of
          his father-in-law Nützel and his brother-in-law Stromer hereditably
          served), and in 1505 was elected senior mayor.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />
          However, he never lost sight of his interests in Bohemia. In 1502 he
          procured four howitzers for Petr of Rožmberk, and in a lawsuit in
          Nuremberg in March 1512 it is mentioned that he had armour
          manufactured for Jan of Valdštejn for fifty foot soldiers and twenty
          mounted knights, which was a considerable military commission. For
          Plzeň he worked as a financial expert and, among other things, advised
          on how to handle finances after the city fire of 1507.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          The city council sent him on diplomatic missions to King Vladislaus,{' '}
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          for whom he purchased a painting of the Madonna by Albrecht Dürer for
          45 florins and delivered it to the king in 1504 as an official gift
          from the city of Nuremberg. It seems that he was bound to Dürer by a
          personal friendship, as Dürer in his letter of <b>7 February 1506</b>{' '}
          had him greeted most warmly as his friend.
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          In the War of the Landshut Succession he became one of
          Nuremberg&apos;s three field commanders. He died without issue on{' '}
          <b>14 January 1511</b> in Nuremberg
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          and, in accordance with his wish, was buried in Plzeň, in the
          Cathedral of St Bartholomew.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />
        </p>
        <p>
          In addition to the above-mentioned works, Hans Harsdorfer was behind
          the creation of other works of art, such as the so-called Rábí Ark
          altarpiece, which some sources state was directly intended as a gift
          for Půta Švihovský of Rýzmberk
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          and others that it was originally made for the Church of St George in
          Malesice together with a monstrance.
          <Qt
            publication={PUBLICATIONS.ENCYKLOPEDIEPLZEN}
            href="https://encyklopedie.plzen.eu/home-mup/?acc=profil_osobnosti&load=4601"
          />
          He also purchased liturgical objects and textiles for the chapel in
          Aachen, where the Bohemian king had patronage rights, and through his
          mediation the royal court artist, the woodcarver Hanuš (probably a
          member of the Spiess workshop, Hans Scholler of Nuremberg), received a
          considerable sum of money, which apparently served to pay for the
          magnificent altarpiece for the chapel at Křivoklát Castle — the most
          representative commission that Vladislaus II Jagiellon had made in
          Bohemia in the early years of his reign.
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="rabska-archa.jpg"
        width={1744}
        height={1200}
        title="Altarpiece of St George from the castle church of the Holy Trinity in Rábí, the so-called Rábí Ark"
      />
      <ImageWithTitle
        src="oltar-krivoklat.jpg"
        width={1600}
        height={2400}
        title="The Křivoklát altarpiece, 1480–1490"
      />
    </Row>
  </>
)
