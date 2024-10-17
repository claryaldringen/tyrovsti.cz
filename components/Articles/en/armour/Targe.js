import React from 'react'
import { Col, Row } from 'reactstrap'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'

export const Targe = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="targe" />
        <h3>The targe</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          The targe is a late development of the cavalry shield, used throughout
          the 15th century. In principle, it can be said that the more
          complicated the shape, the later the dating of the targe. It was
          typically made of lime wood, covered with parchment, linen or a
          combination of both. The gesso (a mixture of finely ground chalk and
          glue) was applied to the coating to form a base for painting with
          tempera paints.
        </p>
        <p>
          Targies, like other shields, were most often made by specialized
          craftsmen called shield-makers, who had close ties to painters. In
          1348, painters and shield-makers of the Prague towns founded the
          Brotherhood of St. Luke
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="p. 20" /> and also
          included related craftsmen, such as glaziers, bookbinders, carvers,
          parchment makers, goldsmiths, illuminators, copper engravers, and
          others.
          <Qt
            publication={PUBLICATIONS.WINTER2}
            href="https://kramerius5.nkp.cz/view/uuid:660b7500-029f-11e4-9789-005056827e52?page=uuid:6e11f0e0-1d56-11e4-8413-5ef3fc9ae867"
          />
          However, disputes arose early on within the Brotherhood between
          painters and shield-makers, as evidenced by privileges granted by
          Charles IV and Wenceslas IV. Shield-makers crafted shields, as well as
          some saddlery pieces and house signs, including their painted
          decorations. Painters (magistri pictoriae artis, spiritual painters,
          geistliche Maler) painted images and altars, but sometimes took over
          the shield-makers&apos; work and prevented them from displaying and
          selling their products at the markets in the Old Town (Prague), as
          shield-makers were based below the New Town (Prague) walls and towers
          and were supposed to carry out and sell their work there.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="p. 20" />
        </p>
        <p>
          The dispute was resolved by a privilege granted by Charles IV on{' '}
          <b>January 16, 1365</b>: shield-makers, settled on the towers of the
          New Town walls, were – like shooters – exempted along with their
          servants from all taxes, services, and levies, but were required to
          serve the king or his marshal when needed (for city defense).
          Therefore, they were allowed to carry a sword, knife, and armor
          (harnisch) like the shooters, to defend the city walls. In the dispute
          with <Cit>spiritual painters</Cit>, who did not want to tolerate the
          shield-makers (i.e., bear their obligations to the city), it was
          decided that painters were not allowed to paint shields. Only
          shield-makers were allowed to make targies and shields (tarczschen und
          stechschilt). However, anyone making shield work (schiltwerk) and
          living in the towers could not sell their work elsewhere than below
          the towers. The privilege was reaffirmed by Wenceslas IV on{' '}
          <b>January 6, 1380</b>.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="p. 21" />
        </p>
        <p>
          The agreements apparently were not observed, and in 1392 the
          shield-makers again approached the king with a complaint that
          spiritual painters were still taking their work and painting shield
          work (schiltwerk), which belonged to the shield-makers and not the
          painters. Wenceslas IV, by a privilege dated <b>March 30, 1392</b>,
          reaffirmed the shield-makers&apos; privileges and decreed that
          painters were not allowed to paint shields, and shield-makers could
          sell their images (ire bylde) and house shields (ire helme und schilte
          an den hewsern in derselben stat zu Prage) at the markets of the Great
          Town of Prague. This clearly resolved the protracted disagreements in
          favor of the shield-makers, who were now protected in their trade from
          painter competition and additionally gained freedom to sell their
          products on the public market.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="p. 22" />
        </p>
        <p>
          During the 15th century, the original Brotherhood split into the Old
          Town guild (which included the Castle, Hradčany, and Lesser Town) and
          the New Town guild. Some common matters were handled in the{' '}
          <Cit>full guild</Cit>, where masters from <Cit>both Prague towns</Cit>{' '}
          were represented. Despite internal disagreements between shield-makers
          and painters, all work related to painting fell within the guild’s
          interest. This is best characterized by the privilege of King Louis
          from 1523, contained in a confirmation document of Rudolph II from
          1595: that no foreign master was allowed to make items belonging to
          the Prague guild of painters and glaziers, that is,
          <Cit>
            tabulí, arch, korouhví, praporcův, dekův, svíc pozlacených a
            dřevěných, dříví jezdeckého malého neb velkého, pavez, terčí i
            jiných věcí všech, kteréž se barvami dělají
          </Cit>{' '}
          (tables, arches, banners, flags, gilded candles and wooden ones, small
          or large horse equipment, pavises, targies, and other items that were
          made with colors) .
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="p. 22" />
        </p>
        <p>
          The fact that this was the case already in the 14th century is
          evidenced by entries in the first book of the Prague painters&apos;
          brotherhood, both names and accounts of the shield-makers and a record
          of <Cit>malovaném dříví</Cit> (painted wood), although incomplete. The
          term <Cit>malované dříví</Cit>(painted wood) refers to horse jousting
          equipment, i.e., jousting lances (dřevce) intended for tournaments, as
          mentioned in the privileges of both Charles IV (stechgezewge) and King
          Louis <Cit>dříví jezdecké malé nebo velké</Cit> (small or large horse
          equipment), which, due to the demanding craftsmanship, was not
          ordinary saddler&apos;s work and belonged to painted goods. Within the
          guild in the 14th century, it was probably the work of shield-makers
          rather than masters of <Cit>pictoriae artis</Cit>.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="p. 22" />
        </p>
        <p>
          During the 15th century, the shield-makers and painters merged
          entirely within the shared guild. Evidence includes an agreement from
          1445 between Master Šícha and Jan, son of Master Štefánek, in which
          Šícha pledged to teach him the art of painting, not only shield-making
          but also painting pictures. Apprentices were thus introduced to
          knowledge of both craft branches. Over time, shield-making as an
          independent trade gradually disappeared. Its painting aspect became
          the domain of painters – they took over the artistic part of the
          shield-makers&apos; trade, painting pavises, targies, and jousting
          equipment, while the craft side of the old shield-making trade
          remained with other crafts, particularly saddlers and bridlers. By the
          end of the 14th century, shield-makers (for example, in the privileges
          of Wenceslas IV from 1380 and 1392) began disappearing from the
          guild&apos;s title, and instead of shield-makers, glassmakers began to
          be mentioned alongside painters, whose significance grew with the
          development of medieval production and culture. However, records in
          the guild book indicate that some painters continued to specialize in
          making painted pavises. An example is the &quot;targe dues&quot; and
          the way painters fulfilled their duty to provide a certain number of
          shields to the city annually, which has an interesting history.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="p. 22" />
        </p>
        <p>
          According to the preamble in the 1458 privilege, the Old Town masters
          of the painting and glass-making crafts were
          <Cit>
            listy a právy starodávnými vyňati a zproštěni z vojen i ze všech
            lozunkuov a poplatkuov městských
          </Cit>{' '}
          (exempted by ancient letters and rights from military service and all
          city levies and taxes), but
          <Cit>
            povinni byli každý rok tři štíty nebo pláště branné stojaté veliké k
            městu udělati ... a k tomu oděncuov branných devět na věže městské
            nebo k městským branám vydávati.
          </Cit>{' '}
          (they were obliged to make each year three large standing shields or
          protective cloaks for the city ... and provide nine armored men for
          the city walls or gates.)
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="p. 22" />
        </p>
        <p>
          These <Cit>ancient letters</Cit> are more precisely dated in the next
          sentence of this preamble:
          <Cit>
            To my važiece a rozumějíce, že město Nové tehdáž nebylo ještě
            ohrazeno, a skrze to oděnci takoví byli sú, již toho se potřebie
            nezdá; a místo plášťov již každý rok dělají k městu pavézy.
          </Cit>{' '}
          (We consider and understand that the New Town was not yet fortified at
          that time, and thus such soldiers were necessary; instead of cloaks,
          they now make pavises for the city each year). The founding charter
          from 1348 set the guidelines for fortifying the New Town, regarding
          layout, communication network, and gate locations. The fortifications
          themselves were built between 1348-1350. During this time, the walls
          between the Old and New Towns lost importance, along with the
          painters&apos; duty to place nine guards at the towers and gates
          according to the ancient letters, which therefore must have been
          issued sometime before the mid-14th century.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="p. 23" />
        </p>
        <p>
          However, the Old Town masters only provided the three large standing
          shields or protective cloaks in the 14th century. At an unknown time,
          no later than before the Hussite Wars, the arrangement changed so that
          instead of the three large protective cloaks, they had to provide 10
          pavises to the city. This is evident from a record in the Old Town
          land books dated <b>February 7, 1430</b>, when another change took
          place. The masters petitioned the Old Town council for relief from
          this obligation due to poverty and hardship suffered during the war
          and unrest. The council granted their request and reduced the required
          number of shields (alias pavises) by two, so henceforth they were
          obliged to provide only eight shields annually. This was meant to be a
          temporary measure until they again profited more abundantly from their
          trade.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="p. 23" />
        </p>
        <p>
          Despite this reservation, the relief remained long in place for the
          Old Town masters. When they presented all their privileges to the city
          for confirmation in 1458, the privileges included not only the
          aforementioned <Cit>ancient rights</Cit> from the first half of the
          14th century but also{' '}
          <Cit>jiné kusy popsané, jim a řemeslóm jich příhodné a potřebné</Cit>{' '}
          (other articles described, suitable and necessary to them and their
          trades). Among these, certainly included was the relief from 1430. The
          resolution of the Old Town council from <b>November 13, 1458</b> was
          therefore a confirmation of the cumulative privileges, both old and
          new. Thus, it should be understood as the resolution of the Old Town
          council from <b>November 13, 1458</b>:
          <Cit>
            ... protož my při těch milostech a práviech i svobodách je
            zuostavujíc, oděncuov těch je zprošťujem, tak aby miesto plášťuov
            těch velikých, o nichžto svrchu zmienka jest, každý rok vždy o
            svatém Havle osm pavez malovaných a dobře žilovaných a s obú stranú
            kožovaných i připravených k městu udělajíc, na rathúz přinesli
          </Cit>{' '}
          (... therefore we leave them in these graces and rights and freedoms,
          exempting them from the guards so that instead of the large cloaks
          mentioned above, they shall always provide eight painted, well-veined,
          and leather-covered pavises to the city each year on St. Gall&apos;s
          day, and bring them to the town hall).
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="p. 23" />
        </p>
        <p>
          Shield-makers and painters of the New Town also had a similar
          obligation to the city. Although records about their guild appear only
          in the 15th century, it is possible that it existed soon after the
          founding of the New Town and that it was endowed with privileges under
          Charles IV. In a dispute involving the shooter Jan Božek, who was
          accused by New Town painters and shield-makers in 1454 of encroaching
          upon their trade, the New Town council ruled to protect the rights of
          painters and shield-makers
          <Cit>
            from the glorious memory of Emperor Charles and King Wenceslas
          </Cit>
          . It is unclear, however, whether these rights include the
          shield-makers and painters’ privileges from 1365, 1380, and 1392,
          which may have related to a shared guild of Old Town and New Town
          masters, or whether the New Town masters had their privileges already
          in the 14th century. In any case, shield-makers were already settled
          in the New Town by the 14th century, as evidenced by the
          aforementioned agreement between the Old Town and New Town
          shield-makers and painters from 1387. By the early 16th century, the
          size of the New Town guild was comparable to that of the Old Town
          guild, as evidenced by a reconciliation in 1511, which named eight Old
          Town masters and seven New Town masters.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="p. 25" />
        </p>
        <p>
          In the 14th century, however, the productive capacity of the New Town
          shield-makers and painters was significantly weaker than the scope of
          production in the Old Town. This is evidenced by records of their
          annual obligatory supply to the city. In the 1380s, an agreement
          between them and the New Town council settled longstanding disputes
          over levies and taxes, stipulating that shield-makers
          <Cit>kteříž pod věžemi sedí</Cit> (sitting below the towers) without
          prejudice to their rights{' '}
          <Cit>
            každé léto po vánocech k novému letu dávali počty, jednu pavézu
            pánuom a městu ku potřebě a ke cti i k kráse, tak dlúho, jakožby jim
            a nám se líbilo a dobré zdálo a jim a městu našemu líbezné se bude
            zdáti
          </Cit>{' '}
          (shall annually, after Christmas, present accounts, giving one pavise
          to the lord and city for use, honor, and beauty, for as long as it
          pleases both them and us, and as seems fitting and pleasing to them
          and our city). The pavise given by the New Town painters and
          shield-makers was to be adorned on the front side with a painted
          decoration as fine as the eight
          <Cit>malovaných, dobře žilovaných a kožovaných</Cit> (painted,
          well-veined and leather-covered) pavises of the Old Town.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="p. 25" />
        </p>
        <p>
          The delivery of obligatory pavises to the Old Town and New Town
          councils was thus an ancient duty of Prague painters and
          shield-makers, maintained until the early 16th century. This
          obligation was apportioned among guild members, who contributed to the
          shields by paying a fee called <Cit>targe dues</Cit>. Such
          contributions can be found in the oldest guild book. An entry from the
          late 14th century mentions{' '}
          <Cit>half a schock per shield (or for shields)</Cit>. In a member list
          from around 1410-1420, there is a note:{' '}
          <Cit>Mykesch ostawa dluzen u pawessy</Cit> (Mykesch remains in debt
          for the pavise), which is interpreted as a record of overdue{' '}
          <Cit>targe dues</Cit> on pavises.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="p. 26" />
        </p>
        <p>
          As is evident, Czech historical scholarship has focused,
          understandably, on pavises, while targies remain largely overlooked
          and, if discussed, it is mainly concerning their possible influence on
          the development of pavises. However, it can be assumed that Czech
          targies from the second half of the 15th century did not differ
          significantly from targies in neighboring areas of the Empire. A
          common motif on targies from the German-speaking regions is a lady
          holding a full coat of arms, including the heraldic shield, helmet,
          crest, and mantling, as seen in the following examples from the
          Metropolitan Museum of Art. In two cases, the lady is accompanied by a
          ribbon with a motto, which has no heraldic significance and is more of
          a humorous pun.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="DT768.jpg"
        width={2978}
        height={3722}
        title="Fig. 1: Targe, Germany, around 1450"
      />
      <ImageWithTitle
        md={4}
        src="sfsb25.26.2s1.jpg"
        width={2131}
        height={2260}
        title="Fig. 2: Targe, Germany, 15th century"
      />
      <ImageWithTitle
        md={4}
        src="267737.jpg"
        width={1244}
        height={1524}
        title="Fig. 3: Targe, Germany, 1450 - 1500"
      />
    </Row>
    <Row>
      <Col md={4}>
        On the first targe (Fig. 1) is painted a coat of arms belonging either
        to the Gottsmann family or to a relative of the Türriegel family, both
        from the Franks. The female figure on the side holds a banderole
        (scroll, ribbon) with a partially German-written motto: HAB MYCH ALS ICH
        BIN... (Take me as I am...). The decoration, with its vibrant colours on
        a silvery foil ground, is remarkably well preserved, having been hidden
        for centuries under layers of later paint. On the leather-covered back
        of the shield there are traces of the painted figure of Saint
        Christopher, whose image was meant to protect him from sudden death.
        <table>
          <tbody>
            <tr>
              <th>Height:&nbsp;</th>
              <td>55,88 cm</td>
            </tr>
            <tr>
              <th>Width:&nbsp;</th>
              <td>40,64 cm</td>
            </tr>
          </tbody>
        </table>
      </Col>
      <Col md={4}>
        Although the middle targe (Fig. 2) is damaged by use and age, it is one
        of the most beautifully painted examples of a fifteenth-century targe.
        The surviving face depicts a woman in a feathered turban holding a
        banderole (scroll, ribbon) with the inscription in German &ldquo;FAHR
        MIT FREUDEN&rdquo; (go with joy). The heraldic shield on the right
        formerly bore the coat of arms of the owner, which is now illegible. The
        surrounding surfaces are finely painted with a decoration of scrolling
        leaves and &ldquo;cloud bands&rdquo; in opaque colours and translucent
        glazes on a polished silver-leaf ground.
        <table>
          <tbody>
            <tr>
              <th>Height:&nbsp;</th>
              <td>48,3 cm</td>
            </tr>
            <tr>
              <th>Width:&nbsp;</th>
              <td>42,5 cm</td>
            </tr>
            <tr>
              <th>Weight:&nbsp;</th>
              <td>1704 g</td>
            </tr>
          </tbody>
        </table>
      </Col>
      <Col md={4}>
        The surface of the third targe (Fig. 3.) is painted with a fine silver
        decoration of coiled leaves (now darkened) on a black ground. During its
        working life, the shield was secondarily painted with two shields
        bearing the emblems of the Nuremberg patrician families of Ketzel (on a
        black ground a silver monkey holding a golden ball) and Igelbrecht (on a
        silver ground a black hedgehog with three golden apples on its back).
        These secondary coats of arms may have been added in the late 15th
        century by the Ketzel family in memory of Heinrich Ketzel the Elder
        (died 1438), burgess of Nuremberg in 1435-36, and his wife Anna
        Igelbrecht, who married him in 1391.
        <table>
          <tbody>
            <tr>
              <th>Height:&nbsp;</th>
              <td>53,3 cm</td>
            </tr>
            <tr>
              <th>Width:&nbsp;</th>
              <td>45,7 cm</td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Reconstruction</h4>
        <p>
          Since we have not been able to find any surviving targe from the Czech
          territory, I chose for reconstruction the following targe from 1440 -
          1460, probably from Nuremberg, which is now in the Philadelphia Museum
          of Art. As we know, Bohemia had a strong trade relationship with
          Nuremberg, and Jošt himself owned firearms made in Nuremberg. A targe
          with similarly stylized scroll-like edges is depicted by Jan van Eyck
          in his painting &ldquo;The Knights of Christ&rdquo;, which is part of
          the left panel of the Ghent Altarpiece of 1432. The shield was first
          repainted around 1500 and its current appearance is the result of a
          17th-century Baroque repainting, when it was painted for funerary
          purposes and bearing the coats of arms of the Nuremberg patrician
          families Haller and Imhof. The original shield is 55.6 cm high, 52 cm
          wide and has a bend of 23 cm. It weighs 2880 grams.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="1977-167-742v2-pma.jpg"
        width={3397}
        height={4096}
        title="Targe, Nuremberg - Germany, 1440 - 1460"
      />
      <ImageWithTitle
        md={4}
        src="1977-167-742v3-pma.jpg"
        width={3067}
        height={4096}
        title="Targe, Nuremberg - Germany, 1440 - 1460"
      />
      <ImageWithTitle
        md={4}
        src="1425-30.jpg"
        width={813}
        height={1400}
        title="Cutout from the left wing of the Ghent Altarpiece, 1432"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Since the original painting of the targe has not survived, we decided
          to create an original but period-appropriate motif for it. The
          background of the shield is black, with a decoration of silver
          scrolled leaves, as on the German shield from fig. 3. St. Dorothy from
          the left wing of the altar from Jeníkov, dated to 1460, was chosen as
          the model for the lady. The coat of arms she holds on the shield is
          based on the oldest known depiction of the Týřovský coat of arms from
          the tombstone of the church in Jince. The armorial figures are
          stylized according to the Book of Arms (Wappenbuch), which was created
          and donated to Emperor Frederick III by the patrician Konrad
          Grünenberg of Konstanz in 1483. The heraldic shield, divided into
          quarters, shows a black imperial eagle (i.e. with two heads) with
          golden armour (talons and beak) on a silver background in the 1st and
          4th fields, while in the 2nd and 3rd fields there are three white
          quills joined together by spikes on a blue field. The left leaning
          shield is surmounted above the right corner by a helmet, the same as
          that on the targe in Fig. 1, and bearing, in addition to the jewel and
          red coverts with silver lining, also a gold crown. In the jewel is a
          red Tartar hat with silver lining and black lips. The banderole with
          the inscription <Cit>Pomny na mye ma myla wyerna pany</Cit> (Remember
          me my dear faithful lady), which is taken from a contemporary spur, is
          placed in the same way as on the tarche of Fig. 2. On the inside is a
          simplified drawing of Saint Christopher, who was supposed to protect
          against sudden death.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Corpus</h5>
        <p>
          The corpus, like most shields of the time, is made of lime slats glued
          together with bone glue. This block is then shaped with tools until it
          is final. The author of the body is František Poch.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="korpus1.jpg" width={2048} height={1531} title="" />
      <ImageWithTitle src="korpus2.jpg" width={2048} height={1531} title="" />
      <ImageWithTitle src="korpus3.jpg" width={2048} height={1531} title="" />
    </Row>
    <Row>
      <ImageWithTitle src="korpus7.jpg" width={2048} height={1531} title="" />
      <ImageWithTitle src="korpus4.jpg" width={1531} height={2048} title="" />
      <ImageWithTitle src="korpus6.jpg" width={2048} height={1531} title="" />
    </Row>
    <Row>
      <Col>
        <h5>Cover</h5>
        <p>
          The corpus is covered with linen using bone glue. Before coating, it
          needed to be finely caulked. The finishing and coating of the corpus
          was done by Zdeněk Sedláček and Daniel Richter.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="IMG_3066.jpg" width={960} height={1289} title="" />
      <ImageWithTitle src="IMG_3076.jpg" width={960} height={1289} title="" />
      <ImageWithTitle src="IMG_3130.jpg" width={960} height={1289} title="" />
      <ImageWithTitle src="IMG_3139.jpg" width={960} height={1289} title="" />
    </Row>
    <Row>
      <Col>
        <h5>Painting</h5>
        <p>
          The coated corpus was then painted with gesso, a mixture of glue and
          crushed Bologna chalk, which had to be carefully sanded. This created
          a smooth white surface, onto which a material called bolus could be
          applied in the areas intended for future silvering and gilding. Red
          bolus is used under gold, and black bolus under silver. Here, due to
          the small extent of gilded areas, only black bolus was used. Leaf gold
          and silver were then applied to the bolus. The final painting was done
          with egg tempera. The painting was executed by Mgr. Markéta
          Poskočilová.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="Potah.jpg"
        width={2917}
        height={3239}
        title="Coated corpus"
      />
      <ImageWithTitle
        src="Gesso.JPG"
        width={3374}
        height={3374}
        title="Corpus painted with gesso and polished"
      />
      <ImageWithTitle
        src="bolus.jpg"
        width={1900}
        height={1658}
        title="Corpus after application of Armenian bolus and polished again"
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="Stribro.JPG"
        width={1946}
        height={2048}
        title="Corpus after application of leaf silver and gold"
      />
      <ImageWithTitle
        src="SvKrystof.JPG"
        width={1866}
        height={2048}
        title="Drawing of St. Christopher on the back"
      />
      <ImageWithTitle
        src="Malba.JPG"
        width={1978}
        height={2048}
        title="Finished targe"
      />
    </Row>
  </>
)
