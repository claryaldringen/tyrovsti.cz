import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const NurembergProposals1430 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="nuremberg-proposals-1430" />
        <h4>
          Nuremberg Proposals for the Wagon Fort, c. 1430
          {draft && <DraftBadge />}
        </h4>
        <p>Working translation, not yet reviewed.</p>
        <p>
          These are two documents from the Nuremberg archive, a draft and a fair
          copy of a proposal on how to set up a wagon fort for a planned
          campaign into Bohemia. Both are written in the same hand, and in the
          17th century they were given the heading{' '}
          <Cit>
            Alte fragmenta historica von denen geschichten Königs Wenzeslai in
            Böhmen, wobei eine beschreibung einer vollkommenen selbiger zeit
            gebrauchten wagenburg mit ihrer zugehörung
          </Cit>
          . The draft (a) is richer in content but terse, and in places contains
          only keywords that the fair copy (b) elaborates, while omitting many
          of them.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:862e7cdb-74ed-4129-8a6d-5d37bad30b81"
          />{' '}
          The notes that both Toman and Würdinger print after the individual
          articles of the draft are set in italics here. According to Würdinger,
          they were written by the same hand as the proposal itself.
          <Qt
            publication={PUBLICATIONS.ANZEIGER1872}
            href="https://archive.org/details/anzeigerfrkunde01nrgoog/page/n406/mode/1up"
          />
        </p>
        <p>
          Toman believes the proposal refers to the campaign to Domažlice (Taus)
          in 1431 and dates it most probably to 1430, where Würdinger had
          already placed it, or to the first half of 1431.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:d18f904a-5b56-4200-a699-2fa149ff1335"
          />{' '}
          According to Wulf, Würdinger gave no reason for his dating.
          <Qt
            publication={PUBLICATIONS.WULF1889}
            href="https://www.digitale-sammlungen.de/de/view/bsb11551340?page=13"
          />{' '}
          In Toman&apos;s view, the author was a man experienced in battle who
          had perhaps become acquainted with wagon formations on an earlier
          campaign into Bohemia and then adapted his proposal to conditions in
          Germany.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:862e7cdb-74ed-4129-8a6d-5d37bad30b81"
          />{' '}
          Toman considers the text very important: the author does not confine
          himself to describing and equipping the wagons, but was the first to
          grasp the organic whole of Žižka&apos;s wagon formations and the
          division of wagons and men, and he sets out the number and placement
          of the guns relatively correctly.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:d18f904a-5b56-4200-a699-2fa149ff1335"
          />
        </p>
        <p>
          Toman printed both documents with modernised spelling and numbered the
          articles himself. Würdinger&apos;s complete edition of 1872 retains
          the spelling of the original and differs from Toman&apos;s text in
          several places.
          <Qt
            publication={PUBLICATIONS.ANZEIGER1872}
            href="https://archive.org/details/anzeigerfrkunde01nrgoog/page/n405/mode/1up"
          />{' '}
          In the note to the third article of the draft, Toman prints{' '}
          <Cit>Pert beware</Cit>, whereas the edition has <Cit>Pest bewarn</Cit>
          . The word that Toman renders as <Cit>wahrhaftig</Cit> (a/7, b/1)
          reads <Cit>werhafftig</Cit> in the edition, i.e. armed. Instead of
          Toman&apos;s <Cit>vorstehnden prediger</Cit> (a/11), the edition has{' '}
          <Cit>verstaden prediger</Cit>.
          <Qt
            publication={PUBLICATIONS.ANZEIGER1872}
            href="https://archive.org/details/anzeigerfrkunde01nrgoog/page/n405/mode/1up"
          />{' '}
          In his earlier, merely paraphrased version, Würdinger speaks of men{' '}
          <Cit>wehrhaftig auf die Wagenpferde</Cit>, able and armed to ride the
          wagon horses, and of a <Cit>verständigen Prediger</Cit>.
          <Qt
            publication={PUBLICATIONS.WURDINGER2}
            href="https://www.digitale-sammlungen.de/de/view/bsb11684126?page=402"
          />
          <Qt
            publication={PUBLICATIONS.WURDINGER2}
            href="https://www.digitale-sammlungen.de/de/view/bsb11684126?page=403"
          />{' '}
          Conversely, <Cit>zu eim schutze</Cit> (a/5, b/3) and{' '}
          <Cit>antwerk</Cit> (a/14) are Toman&apos;s emendations; the edition
          has <Cit>schusse</Cit> and <Cit>hantwerk</Cit>.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:45f83491-fe27-4de6-a650-51a03bbc9f6a"
          />
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:fa60bc4f-e17a-4c47-909d-075119eb5eb8"
          />
        </p>
        <p>
          Translation notes: I translate the divisions of the wagon fort as
          follows: <Cit>glied</Cit> section (5 wagons), <Cit>bund</Cit> company
          (25 wagons), <Cit>schickung</Cit> or <Cit>geschick</Cit> formation
          (100 wagons), <Cit>zeile</Cit> row.
          <br />
          The notation{' '}
          <i>
            iij<sup>m</sup>
          </i>{' '}
          means two and a half thousand; the fair copy (b/6) speaks of{' '}
          <Cit>dritthalb tausend volkes</Cit>.
          <br />
          The meaning of several notes in the draft and of some names of tools
          is uncertain. Such passages are marked with a question mark in the
          translation; Toman had already marked the word <Cit>Hogcken</Cit> with
          a question mark. For <Cit>Pest bewarn</Cit>, <Cit>werhafftig</Cit> and{' '}
          <Cit>verstaden</Cit>, the translation follows the reading of the
          edition.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <h5>a)</h5>
        <b>Von der zugs wegen gein Beham.</b>
        <ol>
          <li>
            Zum ersten ein ganze genug fertige wagenburg zu voller richtigkeit
            auf ganzen ernsten gehorsam aller volker in allen ernsten
            krigesgeschäften.
            <br />
            <i>Regierer alle genug thun.</i>
          </li>
          <li>
            Auch ein sunderliche schickung und auch gar ein richtige rotirunge
            alles reisigen zeuges neben der wagenburg ab- und zuzukommen.
            <br />
            <i>Alle hauptleute willig sein sullen. Gezelte.</i>
          </li>
          <li>
            Sunderlichen auch ein nutzliche fursichtigkeit, wie man soll brot,
            bier, futterunge und notdurft mit gutem rate erkriegen und gewinnen
            und dabei ganze sicherheit zu haben.
            <br />
            <i>
              Pert beware
              <br />
              gelt enthalten.
            </i>
          </li>
          <li>
            Es ist auch zu wissen, welcherlei geräte ein jeglicher streitwagen
            sunderlichen haben soll zu sulchen ernsten kriegesgeschäften, die
            jezund gegenwärtig sein vor augen in landen.
            <br />
            <i>Ein teil in der feinde lande.</i>
          </li>
          <li>
            Ein jeglich streitwagen soll haben fünf starke pferde und zween
            richtig wagenknechte und fünf ledig reitsättel, sechs handbüchsen,
            je drei büchsen zu eim schutze.
            <br />
            <i>Setztartschen übrig geweren.</i>
          </li>
          <li>
            Auch soll sein dabei drei ketten, eine XXV ellen lang, eine X ellen
            lang und eine drei ellen lang, und auch kratze, hauen, äxte,
            grabscheit, schaufeln, eiserein stangen, pickel, feustel, schuch,
            eiserein brettnagel und häspen.
            <br />
            <i>Laufgraben mit pflugen.</i>
          </li>
          <li>
            Dabei sullen auch sein bei jeglichem streitwagen XXI person, ein
            zimmermann, ein maurer, ein steinmetz, ein schmied, ein wagner, ein
            gestellmacher und ein bergknapp, ob man mag gehaben auch fünf
            wahrhaftig auf die wagenpferde, vier zun püchsen, vier mit
            armbrosten, und über die XXI ein hauptmann zu einem wagen.
            <br />
            <i>Hogcken (?) mit leinen und grabenfüllen.</i>
          </li>
          <li>
            Sölich werkleute hie aber benennet worden, die sullen bei ihn haben
            jeglicher seinen werkgezeuge, harnasch, sein gewehr, als viel
            jeglichem not ist zu haben auf sulch ernste geschäfte zu
            furdernusse.
            <br />
            <i>Mehr wagen zu gewinnen.</i>
          </li>
          <li>
            Als gehoren sulcher streitwagen fünf zu einem geliede, und derselben
            wagen vier sullen dem fünften oder seinem hauptmann gehorsam sein.
            Sulcher geliede fünf machen einen bund, dar sei dann 25 wagen, die
            gehn nach einander in einer zeilen.
            <br />
            <i>Zeichen, spitzerreiter.</i>
          </li>
          <li>
            Sulcher bund vier, die machen dann ein rechte schickung, das sein
            ein hundert streitwagen, und die gehen nebeneinander in vier zeilen,
            und jeglicher bund hat seinen überhauptmann. Dieselben vier
            hauptleute haben dann einen sunderlichen überhauptmann uber die
            ganze schickunge derselben hundert streitwagen etc. Die haben iij
            <sup>m</sup> (2500) volkes.
            <br />
            <i>Banier, gleichen teil.</i>
          </li>
          <li>
            Ein sulch ganz schickung soll haben ein richter mit vier schöpfen
            und einen vorstehnden prediger. Ein jeglich bund soll haben einen
            richtigen kaplan. Ein jeglich gelied soll haben ein eigen gezelt
            oder ein gesperre.
            <br />
            <i>
              Auf vier geschicke X<sup>m</sup> volkes.
            </i>
          </li>
          <li>
            Sulch hundert streitwagen sullen auch haben hundert speiswagen, die
            sullen auch in sonderlicher schickunge geordiniret sein mit
            sunderlichen hauptleutein geleich den streitwagen.
            <br />
            <i>Reiten dabei.</i>
          </li>
          <li>
            Bei denselben speiswagen sullen sein bierbrauer, mälzer, müllner,
            becken, botener genug, mader, drescher, schnitter aller teil genüg
            sein, zu schaffen mühlwerk und braupfannen. Das muss man bescheren
            in stadten, märkten und auf schlosser, die dann werden gelegen sein.
            <br />
            <i>
              Stärken, pest
              <br />
              mehren, gleichen teil.
            </i>
          </li>
          <li>
            Auch mancherlei tarras, schirmen und gut antwerk zum stormen, die
            werden wir dann ausrichten im felde, so die heere zusammen kommen
            werden, dass jegliche der heere mit fürsichtigkeit mögen zugehen
            gegen den feinden und dabei sicher beleiben.
            <br />
            <i>Antwerk zu usboren (sic).</i>
          </li>
          <li>
            Auch sulden ein jeglich glied besunder haben ein steinbuchsen oder
            tarasbüchsen auf ein halben wagen mit zweien pferden, und ein
            jeglich bund ein steinbuchsen auf einem wagen mit fünf pferden, und
            eine ganze schickunge mit hundert wägen ein gross steinbuchsen mit
            XVI, XVIII oder XX pferden.
            <br />
            <i>Pulver, steine, netze, spesse, gezelte, gelot genug.</i>
            <Qt
              publication={PUBLICATIONS.TOMAN}
              href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:0d397450-f55c-4cf4-9b06-4f39d68b4a8a"
            />
            <Qt
              publication={PUBLICATIONS.ANZEIGER1872}
              href="https://archive.org/details/anzeigerfrkunde01nrgoog/page/n405/mode/1up"
            />
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <h5>a)</h5>
        <b>Concerning the campaign into Bohemia.</b>
        <ol>
          <li>
            First, a complete, sufficiently prepared wagon fort in full order,
            with complete and serious obedience of all the people in all serious
            matters of war.
            <br />
            <i>Let all who command do their duty.</i>
          </li>
          <li>
            Also a special arrangement and a proper division of all the cavalry
            into companies, so that it can ride out and back alongside the wagon
            fort.
            <br />
            <i>All captains shall be willing. Tents.</i>
          </li>
          <li>
            Especially also a useful foresight as to how, with good counsel, to
            procure and obtain bread, beer, fodder and necessities, and to be
            entirely safe while doing so.
            <br />
            <i>
              Guard against plague
              <br />
              withhold money (?).
            </i>
          </li>
          <li>
            It must also be known what equipment each war wagon in particular is
            to have for such serious matters of war as are now plainly before
            our eyes in the lands.
            <br />
            <i>A part in the enemy&apos;s land.</i>
          </li>
          <li>
            Each war wagon shall have five strong horses and two skilled
            wagoners and five spare riding saddles, six hand guns, three guns
            for each shooter.
            <br />
            <i>Pavises, other weapons.</i>
          </li>
          <li>
            There shall also be with it three chains, one 25 ells long, one 10
            ells long and one three ells long, and also scrapers (?), hoes,
            axes, spades, shovels, iron bars, picks, mallets, drag shoes (?),
            iron board nails and hasps (?).
            <br />
            <i>Trenches with ploughs.</i>
          </li>
          <li>
            With each war wagon there shall also be 21 persons: a carpenter, a
            mason, a stonemason, a smith, a wheelwright, a cartwright and a
            miner, and, if they can be had, also five armed men for the wagon
            horses, four for the guns, four with crossbows, and over the 21 one
            captain for each wagon.
            <br />
            <i>Hogcken (?) with ropes and filling of ditches.</i>
          </li>
          <li>
            The craftsmen named here shall each have with them their tools,
            armour and weapon, as much as each needs to further such serious
            business.
            <br />
            <i>To obtain more wagons.</i>
          </li>
          <li>
            Five such war wagons belong to one section, and four of these wagons
            shall obey the fifth or its captain. Five such sections make one
            company, that is 25 wagons, which travel one after another in one
            row.
            <br />
            <i>Signs, lead riders (?).</i>
          </li>
          <li>
            Four such companies then make a proper formation, that is one
            hundred war wagons, and they travel side by side in four rows, and
            each company has its chief captain. These four captains then have a
            special chief captain over the whole formation of these hundred war
            wagons, etc. They have 2,500 people.
            <br />
            <i>Banner, equal share.</i>
          </li>
          <li>
            Such a whole formation shall have a judge with four assessors and a
            sensible preacher. Each company shall have a proper chaplain. Each
            section shall have its own tent or shelter.
            <br />
            <i>For four formations 10,000 people.</i>
          </li>
          <li>
            These hundred war wagons shall also have one hundred supply wagons,
            which shall likewise be specially arranged under special captains,
            just like the war wagons.
            <br />
            <i>Riders with them.</i>
          </li>
          <li>
            With these supply wagons there shall be enough brewers, maltsters,
            millers, bakers, coopers (?), mowers, threshers and reapers, enough
            of every kind, to run the mills and brewing pans. This must be
            provided in the towns, market towns and castles that will then be
            nearby.
            <br />
            <i>
              Strengthen, plague (?)
              <br />
              increase, equal share.
            </i>
          </li>
          <li>
            Also various mantlets, screens and good siege engines for storming,
            which we will then set up in the field when the armies come
            together, so that each of the armies may advance against the enemy
            with foresight and remain safe in doing so.
            <br />
            <i>Siege engines … (?).</i>
          </li>
          <li>
            Each section shall also have in particular one stone-shot gun or
            light cannon on a half wagon with two horses, and each company one
            stone-shot gun on a wagon with five horses, and a whole formation
            with one hundred wagons one large stone-shot gun with 16, 18 or 20
            horses.
            <br />
            <i>Powder, stones, nets, spears, tents, lead enough.</i>
          </li>
        </ol>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <h5>b)</h5>
        <ol>
          <li>
            Eine ganze rechtfertige wagenburg zu ernstlichen kriegesgeschäften
            die soll haben in jeglichem geschicke hundert streitwagen wohl
            angericht. Bei solchen hundert streitwagen sullen geschicket sein
            zwei tausend fussvolkes und funf hundert mit reisigen pferden, und
            bei jeglichem wagen sullen bleiben nach sulcher schickunge zwanzig
            fussvolkes, und jeglich streitwagen soll haben fünf starke
            wagenpferd mit vier starken wahrhaftigen wagenknechten, die sullen
            ihren harnasch haben bei ihn auf ihren wagen.
          </li>
          <li>
            Auch sullen bei jeglichem wagen aus den zwanzig fussgängeln fünf
            starke männer jeglicher sein harnasch bei ihm auf dem streitwagen
            haben, und dabei fünf ledige sattel auf die wagenpferd zu werfen, so
            es würde not thun. Also sullen auch bei jeglichem sein unter den
            zweinzig fussgängeln ein zimmermann, ein steinmetze, ein maurer, ein
            schmied, ein bergknappe, ein wagner, ein geschirrmeister, zween
            büchsenschiesser und etliche armbrostschützen, der jeglicher soll
            bei ihm haben sein werkzeug und dabei seinen harnasch und sein
            gewehre besundere.
          </li>
          <li>
            Auf jeglichem wagen sullen auch sein zwu gute axte oder mehr,
            kratzen oder hauen, grabscheit, schaufeln, keilhauen, pickel,
            gänsfüss, feustel, eiserein stangen, guter ketten vier, troge,
            eiserein schuh, häspeln, brettnagel, und auf jeglichem streitwagen
            sechs handbüchsen, und je zu eim schutze drei büchsen.
          </li>
          <li>
            Auch sollen bei solchen hundert streitwagen hundert speisewagen
            geschicket sein, gleich den streitwagen mit ihren sunderlichen
            schickung durch eigene hauptleute.
          </li>
          <li>
            Auch soll ein iglich streitwagen besunder unter seinen zweinzig
            männern ein eigen hauptmann haben; und funf wagen, das ist ein
            glied, die stehen einem besunderen hauptmann zu gehorsam unter ihn
            selbs; und also machen fünf glied fünf und zweinzig wagen, die gehn
            nach einander in einer zeilen. Sulcher bunde vier gehen in vier
            zeilen, die haben vier oberhauptleute, und dieselben vier hauptleute
            die haben aber über ihn ein oberhauptmann mit eim roten fahn; der
            ist dann über hundert streitwagen.
          </li>
          <li>
            Also sein dieselben hundert streitwägen eine rechte volle schickung
            auf dritthalb tausend volkes; oder die fünfhundert reisigen pferde,
            die in sulche schickunge mit hinein gehören, die haben auch ihre
            sunderliche rotten, mit sunderlicher regierung neben dem fussvolke
            in der wagenburg zu bleiben, oder aus der wagenburg zu rücken, als
            oft es not thun würde, mit einer nachfolge der funfhundert
            wagenpferd, die dann auch reisig geschickt würden, als oben
            begriffen ist.
          </li>
          <li>
            Auch soll jeglich glied haben ein kleine steinbüchsen auf einem
            halben wagen zu führen mit zweien pferden; sunderlichen so soll in
            jeglichem glied ein erberger (sic) priester geschickt sein, die
            forchte gottes und den willigen gehorsam im volke zu bestätigen.
            Auch thät wohl not, dass ein jeglich glied ein sunderlich eigen
            gezelt haben möcht. Fürbass mehr, dass ein jeder bund soll haben
            eine besunder grosse steinbuchsen zu fünf oder sechs pferden, und
            also fugte sich wohl, dass ein ganze schickung möcht haben ein
            rechte grosse steinbuchs zu achtzehn oder zu zweinzig pferden, umb
            willen rechter ernstlicher hauptstürme zu schlossen und zu städten.
          </li>
          <li>
            Durch willen grosser und mehrer gottlicher erkenntlichkeit in gutem
            willen und rechtem fürsatze alle werke der geschäfte ernstlichen zu
            vollbringen, thut wohl not, dass in jeglichen geschick ein williger
            und verständiger prediger zugegeben werde zu mehrung der seligkeit
            in dem volke gottes, und auch dass in einem jeglichen geschicke ein
            richter mit vier schöpfen gesetzt und von den obersten hauptleuten
            bestätiget werde, umb willen der mutwilligen und boshaftigen alle
            unredlichkeit zu stören. Sunderlich und zu voran vor allen dingen,
            dass der dienst gottes in ernster furchte unter allem volke
            ordentlichen bestätiget werde, gott zu lobe und aller christenheit
            zu gute.
            <Qt
              publication={PUBLICATIONS.TOMAN}
              href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:fa60bc4f-e17a-4c47-909d-075119eb5eb8"
            />
            <Qt
              publication={PUBLICATIONS.ANZEIGER1872}
              href="https://archive.org/details/anzeigerfrkunde01nrgoog/page/n406/mode/1up"
            />
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <h5>b)</h5>
        <ol>
          <li>
            A complete, proper wagon fort for serious matters of war shall have
            in each formation one hundred well-prepared war wagons. With these
            hundred war wagons there shall be assigned two thousand foot
            soldiers and five hundred with riding horses, and with each wagon,
            according to this arrangement, twenty foot soldiers shall remain.
            Each war wagon shall have five strong wagon horses with four strong
            armed wagoners, who shall have their armour with them on their
            wagons.
          </li>
          <li>
            Also, with each wagon, five strong men out of the twenty foot
            soldiers shall each have his armour with him on the war wagon, and
            with it five spare saddles to throw on the wagon horses should need
            arise. Likewise, among the twenty foot soldiers with each wagon
            there shall be a carpenter, a stonemason, a mason, a smith, a miner,
            a wheelwright, a harness master (?), two gunners and several
            crossbowmen, each of whom shall have his tools with him and, in
            addition, his own armour and weapon.
          </li>
          <li>
            On each wagon there shall also be two good axes or more, scrapers
            (?) or hoes, spades, shovels, mattocks, picks, crowbars (?),
            mallets, iron bars, four good chains, troughs (?), iron drag shoes
            (?), windlasses (?), board nails, and on each war wagon six hand
            guns, and three guns for each shooter.
          </li>
          <li>
            With these hundred war wagons there shall also be assigned one
            hundred supply wagons, arranged like the war wagons, with their own
            special organisation under their own captains.
          </li>
          <li>
            Each war wagon shall also have its own captain among its twenty men;
            and five wagons, that is one section, obey a special captain from
            among themselves; and so five sections make twenty-five wagons,
            which travel one after another in one row. Four such companies
            travel in four rows; they have four chief captains, and these four
            captains have above them a chief captain with a red banner; he is
            then over one hundred war wagons.
          </li>
          <li>
            Thus these hundred war wagons are a proper full formation for two
            and a half thousand people. The five hundred riding horses belonging
            to such a formation also have their own special companies under
            special command, to remain in the wagon fort alongside the foot
            soldiers or to ride out of the wagon fort as often as necessary,
            followed by the five hundred wagon horses, which would then also be
            sent out as cavalry, as stated above.
          </li>
          <li>
            Each section shall also have a small stone-shot gun, carried on a
            half wagon with two horses. In particular, in each section there
            shall be an honourable priest to strengthen the fear of God and
            willing obedience among the people. It would also be very necessary
            for each section to have its own special tent. Furthermore, each
            company should have a special large stone-shot gun for five or six
            horses, and so it would be fitting for a whole formation to have a
            truly large stone-shot gun for eighteen or twenty horses, for proper
            and serious main assaults on castles and towns.
          </li>
          <li>
            For the sake of a greater and fuller knowledge of God, and so that
            all works of these matters may be seriously accomplished in good
            will and right intent, it is very necessary that a willing and
            sensible preacher be assigned to each formation to increase
            salvation among the people of God, and also that in each formation a
            judge with four assessors be appointed and confirmed by the supreme
            captains, in order to put a stop to all dishonesty of the wanton and
            malicious. Especially and above all things, that the service of God
            be properly established among all the people in earnest fear, to the
            praise of God and for the good of all Christendom.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
