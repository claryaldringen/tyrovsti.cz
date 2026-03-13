import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const Armour = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="armour" />
        <h3>Armour{draft && <DraftBadge />}</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Development of Armour</h4>
        <p>
          The earliest evidence of our ancestors&apos; armour is provided,
          alongside sparse archaeological finds, traditionally by written
          sources. References to armour can be found, for example, in Arabic
          sources — Ibn Rusta states of Prince Svatopluk that:{' '}
          <Cit>He has good, strong, precious armour</Cit>. The Annals of Fulda
          describe how in 849, during a German incursion, the Czechs stripped
          armour from defeated Germans:{' '}
          <Cit>
            …For the enemies, having gained the upper hand, slaughtered and
            pursued them to their camp, and stripping the armour from the slain
            before their eyes without care, filled them with such fear that they
            completely lost all hope of escape…
          </Cit>
          . In 936, Widukind describes how the Germans in turn stripped armour
          from fallen Czechs. This well documents one of the favourite methods
          of acquiring equipment and weapons. In the 10th-century Legend of
          Christian, armour is mentioned in connection with a planned revolt
          against Prince Bořivoj — his opponents came to the diet wearing{' '}
          <Cit>cuirasses under their garments</Cit>, but so did his own men.
          Armour is also mentioned by Cosmas in the 11th century and the Monk of
          Sázava in the 12th century. The Canon of Vyšehrad describes how at the
          Battle of Chlumec in 1126, the princely chaplain Vít,{' '}
          <Cit>clad in armour and helmet like Achilles…</Cit>, served as the
          standard-bearer for the Bohemian army. Armour is mentioned by
          Vincentius and other 12th-century authors. From the aforementioned
          sources and reports, the widespread use of quality arms and armour is
          quite evident, at least in the milieu of professional warriors of
          princely retinues.
          <Qt
            publication={PUBLICATIONS.TOMIC}
            href="https://curiavitkov.cz/2004/07/20/cas-valky-vystroj-zbroje/"
          />
        </p>
        <p>
          These earliest armours were most commonly mail (Old Czech <i>brň</i>),
          but scale, lamellar and faleristic armour (rings sewn onto a backing)
          are also assumed. From the end of the 12th century, however, only mail
          armour was used exclusively. Its principle — mutually interlinked
          rings — was known already to the ancient Celts, from whom the Romans
          adopted it, and as spoils of war it often reached far beyond the
          borders of the empire (e.g. to Denmark, where a find of armour from
          Vimose is dated to the 2nd–3rd century AD). After the fall of Rome,
          the technology of producing these armours was practically forgotten in
          the West and survived only in Byzantium and the sphere of Byzantine
          influence, subsequently also in the Arab world. Through trade contacts
          or as spoils of war, it later reached Scandinavia, the Frankish
          Empire, Britain and our lands. The import of finished armours was
          gradually followed by the mail-making technology itself.{' '}
          <Qt
            publication={PUBLICATIONS.TOMIC}
            href="https://curiavitkov.cz/2004/07/20/cas-valky-vystroj-zbroje/"
          />
        </p>
        <p>
          At that time, the only plate-armour work was helmets. The earliest
          conical helmets were riveted from four and later two pieces. In the
          9th century, conical helmets forged from a single piece appeared,
          which was more technologically demanding because a larger intact piece
          of sheet metal was needed for such a helmet. In general, armourers
          throughout history were limited primarily by the size of the starting
          sheet metal material. The most famous such helmet is the so-called{' '}
          <i>Helmet of St. Wenceslas</i>.{' '}
          <Qt
            publication={PUBLICATIONS.TOMIC}
            href="https://curiavitkov.cz/2004/12/19/cas-valky-vystroj-prilby/"
          />
        </p>
        <p>
          During the 13th century, joints began to be covered with anatomically
          shaped metal plates.
        </p>
        <p>
          During the 15th century, the covering of all body parts with
          anatomical plates on heavy cavalry definitively prevailed over mail
          (Old Czech <i>brní</i>), which continued to be used only as a
          supplement. Armour also gradually differentiated according to its
          intended use into field armour, preserving the wearer&apos;s mobility
          to the greatest possible extent, and tournament armour, where the
          emphasis was primarily on passive protection. During this century, the
          use of plate armour (often only partial) spread among urban and
          mercenary infantry, which played an increasingly important role in
          battles. Thanks to disciplined collective fighting methods, it managed
          over the years to defeat even heavy cavalry with increasing frequency.
        </p>
        <p>
          As early as the beginning of the 15th century, the most important
          European centres of armour production emerged in northern Italy
          (Milan), southern Germany (Nuremberg, Augsburg and Landshut) and Tyrol
          (Innsbruck). In these centres of arms production, stylistically
          different forms arose which then dominated the entire century, called
          Italian/Milanese and German armour. In Milan, the Missaglia family
          became famous for armour production. This branching family, originally
          named Negroni, obtained its name from a small town in Lombardy, from
          which the founder of their armouring fame, Pietro, who died before
          1429, apparently came. The greatest renown was achieved by his
          successors Tommaso and especially Antonio (c. 1416–1496), who ran the
          workshop from 1452 until his death. The Missaglias worked in the 15th
          century for leading Italian nobles such as the Visconti, Gonzaga and
          Sforza. Among the famous German armourer dynasties were the
          Helmschmieds of Augsburg and the Seusenhofers of Innsbruck. The former
          were active from the second half of the 15th century to the second
          half of the following century. The first recorded armourer from this
          family was Georg, active approximately between 1438 and 1490. The
          greatest renown was then achieved by his son Lorenz, born probably
          between 1445 and 1450, who worked between 1467 and 1515 and who was
          appointed Imperial Court Armourer by Maximilian I in 1491. Then
          Lorenz&apos;s son Kolman (1471–1532), known for example for armours
          for Charles V, and Lorenz&apos;s grandson Desiderius (1513–1578), who
          worked, among others, for the Spanish King Philip II.
          <Qt publication={PUBLICATIONS.BROZEK} />
        </p>
        <p>
          In Prague, armourers formed an organisation in 1328. In 1329, an
          armourer named Klebel obtained Old Town citizenship, and after him 24
          more masters registered by 1393. One of them, Henricus, came in 1354
          from Italian Como, another from Týnec, Kolín, Beroun or Chrudim. In
          1351, Rudl was recorded as the first armourer among the councillors in
          the Old Town. During the Hussite Wars, the armourer Vůz (1423) and the
          helmetmaker Jakub (1422) are documented among the Old Town
          councillors. By 1526, 26 more armour masters were added, of whom one
          (after 1477) came from Vlašim. In the town books, armourers are not
          rare and are always found among wealthy burghers, but only 4 from both
          Prague towns came to take the oath in 1524. We thus have the following
          armourers documented by name:{' '}
        </p>
        <ul>
          <li>
            From 1439: Henricus Hemrle, who had a house in Ostrožnická
            (Platnéřská) Street.
          </li>
          <li>
            From the mid-15th century: thorifex Kříž, whose property became an
            escheat in 1463.
          </li>
          <li>From 1454: Janek Legát.</li>
          <li>From 1463: armourer Vocásek.</li>
          <li>From 1464: armourer Smetana.</li>
          <li>From 1472: armourer Škoda.</li>
          <li>From 1473: armourer Duchek Popel.</li>
          <li>
            From 1477: Havel Kabela (Cabela), who jointly with Duchek had
            purchased an anvil.
          </li>
          <li>From 1479: armourer Pivce Václav and Jan Dúbek.</li>
          <li>From 1483: armourer Sladký.</li>
          <li>From 1516: armourer Jan Pivce, perhaps Václav&apos;s son.</li>
        </ul>
        <p>
          Among armourers who were non-resident inhabitants of the city, Jan
          Biberka is documented in 1486, who ignominiously fled from the New
          Town. From 1454, a female armourer named Křížová is also known
          <Qt
            publication={PUBLICATIONS.WINTER2}
            href="https://kramerius5.nkp.cz/view/uuid:660b7500-029f-11e4-9789-005056827e52?page=uuid:640bded0-1d56-11e4-8413-5ef3fc9ae867"
          />
          , probably the wife of Kříž.
        </p>
        <p>
          Although armourers had their organisation in Prague perhaps as early
          as before 1328, they brought their statutes for confirmation at the
          town hall later, perhaps in 1336, and only the articles concerning
          apprentices and journeymen, which seems to have been a crucial issue
          for Prague armourers. The statutes state that an apprentice had to pay
          the master 2 schocks of groschen for training (which was very much
          compared to other crafts) and the brotherhood 15 groschen.
          Furthermore, he had to remain in the master&apos;s service for 4 years
          and had to be guaranteed with two schocks of groschen not to flee. If
          he fled and did not return within eight days, the guarantee was
          forfeited — half a schock to the magistrate and the guild and a schock
          to the councillors. According to the so-called Rights of Soběslav
          (around 1440), armourers marched in ceremonial occasions such as
          welcoming the sovereign or in processions in third place behind
          butchers and goldsmiths. They were to carry a green banner on which a
          warrior in full plate armour was depicted. Under this banner,
          representatives of other crafts, both independent and organised,
          marched with them. These were: mail-makers, needle-makers,
          helmetmakers, spur-makers, brass-workers, saddlers, pewterers,
          bridle-makers, strap-makers, belt-makers, blacksmiths, purse-makers,
          pouch-makers, swordsmiths, quiver-makers and locksmiths.
        </p>
        <p>
          Like other crafts, armouring also differentiated, and so in Prague we
          find before 1419 also three helmetmakers (galeatores), two from the
          Old Town, one of whom came from Regensburg in 1343, and one maker of
          plate gauntlets
          <Qt
            publication={PUBLICATIONS.WINTER2}
            href="https://kramerius5.nkp.cz/view/uuid:660b7500-029f-11e4-9789-005056827e52?page=uuid:1cf13400-1d56-11e4-8413-5ef3fc9ae867"
          />
          , called <i>plechowicze</i> (in a charter from 1447).
          <Qt publication={PUBLICATIONS.ACADEMIA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Head and Neck Protection</h4>
        <p>
          The armed man typically wore a mail collar, called <i>obojček</i> or{' '}
          <i>oboječek</i>, on his neck.
          <Qt
            publication={PUBLICATIONS.ARCHIV8}
            href="https://www.ndk.cz/view/uuid:264e7b10-8dd8-11e8-9588-5ef3fc9bb22f?page=uuid:dc8ba9a0-9b8b-11e8-a1e1-005056827e51&fulltext=obojček"
          />
          This was usually followed by a textile hood, by the end of the 15th
          century typically fitted with tassels, over which the helmet was
          placed. Among helmets, the iron hat, known in period Czech as{' '}
          <i>kapalín</i>, and the sallet derived from it, known in period Czech
          as <i>leb</i> or <i>lebka</i>, clearly predominated in the Czech
          lands. For helmets, the term <i>peklhaub</i>, <i>peklhúbl</i> or{' '}
          <i>piklhaub</i> was also used, which was a corruption of{' '}
          <i>beckenhaube</i>, the German name for the bascinet type of helmet;
          however, once Czechified, this term was used for any metal helmet.
          Because neither the iron hat nor the sallet protected the lower part
          of the face, they could be complemented with a plate bevor, known in
          period Czech as <i>bart</i> or <i>barth</i>.{' '}
          <Qt
            publication={PUBLICATIONS.ARCHIV8}
            href="https://www.ndk.cz/view/uuid:264e7b10-8dd8-11e8-9588-5ef3fc9bb22f?page=uuid:dc8ba9a0-9b8b-11e8-a1e1-005056827e51&fulltext=barth"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Torso Protection</h4>
        <p>
          Torso protection was provided by a front and back plate, which
          together formed the cuirass. In Bohemia, the front plate was called{' '}
          <i>prustplech</i> or <i>prusplech</i>, from the German{' '}
          <i>brustblech</i>, literally <Cit>breast plate</Cit>.
        </p>
      </Col>
    </Row>
  </>
)
