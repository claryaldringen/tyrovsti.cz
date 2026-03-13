import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const KrivoklatFeudalSystem = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="krivoklat-feudal-system" />
        <h3>Krivoklat{draft && <DraftBadge />}</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          The origins of the Krivoklat feudal system can be reliably traced to
          the reign of John of Luxembourg (specifically after 1337), from which
          the earliest surviving charters date, setting out the conditions of
          the feudal relationship and the extent of the property to which the
          feudal obligation was attached. The greatest number of these charters
          dates from the time of Wenceslas IV.
          <Qt publication={PUBLICATIONS.RAZIM1} note="Str. 22" />
        </p>
        <p>
          Initially, fiefs were granted only for the lifetime of the holder;
          later they became hereditary, exclusively through the male line. A
          widow could hold a fief only with explicit royal permission, provided
          some man swore an oath to assume the service obligations on her
          behalf. A vassal was not allowed to sell, encumber, or assign as a
          dowry his fief estate without the king&apos;s consent &mdash; any such
          transaction was void.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          Upon the vassal&apos;s death, the fief was inherited by sons and
          grandsons, who were required to pay a fee called <i>laudemium</i>,
          report to the burgrave within a year (or to the captain, if no
          burgrave was available), and swear the vassal&apos;s oath. If this
          deadline was missed, the fief reverted to the king as lapsed. This
          happened to Majirkov ze Sence in 1389 and to Valent z Kounova in 1567,
          who had purchased a fief estate in Kounov from the Knezeves magistrate
          Havel for 700 threescore groats in 1558, but failed to register it in
          the feudal books or come to swear the oath beneath the tower at
          Krivoklat, and therefore the estate was forfeited to Archduke
          Ferdinand in 1567.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          Vassals received their fief by swearing an oath at the iron gates
          beneath the square gatehouse tower. They were then led into the
          knights&apos; hall, where their duties were announced and a chest for
          storing armour and other equipment was handed over. On this occasion,
          the vassals presented the captain with a hat adorned with a plume (mit
          Federpusch).
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          Fief records were to be kept in the feudal registers, which were
          established at Krivoklat in 1454, but vassals often additionally
          secured their entries in the court registers. In 1560, Archduke
          Ferdinand ordered Sternberk by open letter to summon all vassals to
          appear at the castle with their charters. After inspecting all the
          documents, the vassals were instructed to adhere solely to the feudal
          books and not to seek any jurisdiction other than that of the
          Krivoklat captain. From that time, vassals were no longer permitted to
          make entries in the court registers; nevertheless, we have evidence
          that they continued to neglect the feudal books and recorded only in
          the court registers.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          Why it was insisted that feudal books be kept at every castle is
          explained by a court record from 1479:{' '}
          <Cit>
            Zjistilo se, ze mnoho dedin manskych bylo jiz od koruny ceske
            odtrzeno, jeden druhemu dediny prodavaje, druhemu listy kralovske
            vydava bez povoleni kralova; kdyz pak listove ztrati se, tu manske
            dediny vyjdou z pameti a za svobodne se vydavaji. Tak sluzba kralova
            hyne a urad dvorsky chudne.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          A fief could be terminated either by <i>felony</i>, i.e. breach of
          fealty &mdash; if a vassal failed to swear the oath in time, insulted
          the sovereign&apos;s person, neglected his duties or committed some
          other crime &mdash; or by commutation of service (e.g. Hedcany),
          whether free of charge, in reward for faithful service, or for
          payment. The king could not commute a fief on his own without the
          permission of the lords, for the reason that a fief was not purely a
          chamber estate (belonging to the king) but a territorial estate
          (belonging to the state).
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          The destruction of an estate granted as a fief did not extinguish the
          service obligation, but merely reduced it. When the villages of
          Pistny, Okrouhlik, Simin, and Olesek were completely burned down
          during the Hussite Wars, the obligations attached to them passed to
          the holders of the lands remaining from the deserted villages.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          Feudal disputes were handled by a special feudal court, which judged
          independently, though huntsmen and foresters had their own separate
          jury.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 109" /> This court was
          composed of 12 vassals serving as sworn judges or aldermen. The
          plaintiff and the defendant each chose 6 vassals as judges.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
          Thus Jan z Tyter testified in 1456 before the court:{' '}
          <Cit>
            Kdyz nas 12 manow a sluzebnikow sedlo na sud k rozkazani pana Alse
            Holickeho (ze Sternberka), sudili sme o dedictvi v Sadlne a to
            prisudili sme Drahonovi.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          After the death of Ales Holicky ze Sternberka (+1455), the feudal
          court ceased to function, and so the (noble) vassals turned to the
          court of the land, while the foresters remained under the castle
          court: When in 1454 Dorota z Chynavy summoned the foresters Vaclav
          Panoska and Jan Rybsa before the court, claiming they unlawfully held
          her forester&apos;s estate, the burgrave Jan z Kozojed wrote to the
          court that{' '}
          <Cit>
            ti hajni k soudu dvorskemu neprinaleži a maji od starodavna svuj
            zvlastni soud na Besedici.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          One of the last sessions of the feudal court in the 15th century took
          place when the brothers Jindrich and Jan Bornove ze Slabec summoned
          Jan Drahon in 1456 over an estate in Sadlno. At that time, the
          governor of the land Jiri z Podebrad ordered each party to gather 6
          servants (vassals) for its cause.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          In 1460, it was ordered that all common royal servants (vassals) and
          village magistrates of royal villages were to be tried in all matters
          of debts, estates, damages, and disputes before the court judge, while
          watchmen, tower guards, and gatekeepers of royal castles were to be
          tried for minor matters before the burgrave of their castle. <br />
          However, when in 1479 Jan Drahon ze Sadlna summoned Sulek ze Slovic
          before the court over a manor in Panosi Ujezd, the plaintiff was
          informed that he could not be tried against the orders of his
          burgrave.
          <br />
          Likewise, Katerina Vaclavkova z Panosiho Ujezda was instructed by the
          court in 1487 to seek the accused Jan Babtista at the castle court.
        </p>
        <p>
          In 1529, three disputes arose simultaneously: the miller Daniel in the
          pool below Rakovnik replied to the town council that he had nothing to
          do with them, but according to a charter of King Vladislav he was
          answerable only to the castle captain. Vaclav Strojeticky na Chrici
          had a dispute with the vassals of Hlohovice over meadows, and Jindrich
          Krakovsky clashed with the captain over forests.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          Only then did the captain Albrecht z Vresovic write to the court that
          it was necessary to re-establish the feudal court so that vassals
          could obtain justice without having to go to the court every time. No
          one knew by whom or in what manner the court should be constituted, as
          no records had been preserved and no one any longer remembered. The
          report also notes that{' '}
          <Cit>
            osoby rytirske sluzeb manskych nekonaji, sedmi i osmi nebozatky
            statek osadili a ta sluzby zastavati musi.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          The chief justice Vaclav Bezdruzicky investigated this submission and
          in 1531 wrote to the councils of the Bohemian Chamber that{' '}
          <Cit>
            poradek pri soude manskem na Krivoklatě stejny jest jako na
            Karlstejne, Hluboke, a Zvikove. Totiz puvod (zalobce) pohani sesti
            sluzebníky (many) strany sve spravedlnosti k osazeni soudu a pohnany
            tez sesti k roku od uredniku desk dvorskych polozenemu; a tech 12
            soudcu zahajice soud, strany slyseli a nalez ucinili aneb strany na
            mocne smluvce (ubrmany) podali. Take pani soudu dvorskeho (aby) many
            pred soud na Krivoklat podavali a teprve kdyz tam porovnani nebyli,
            tehdy od purkreabi k urednikum dvorskym obehnani byli. Ale hajni
            krivoklatsti od starodavna na Besedici zvlastni svuj soud mivali.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          The following inventory of service obligations was based on the
          description of the vassals of Hradek Krivoklat from 1552, supplemented
          from many other sources.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Service Fiefs</h4>
        <ol>
          <li>
            Vsetaty, 5 manors, and the village of Loucko attached to them. The
            holder was required, on the burgrave&apos;s order, to ride to the
            castle on horseback and remain there as long as necessity demanded.
            He was to receive nothing other than food and drink.
          </li>
          <li>
            Hlivojedy and Jezevce, whole villages (both later merged with
            Petrovice). The holder of both estates was to dispatch two armoured
            horsemen to the castle, in the same manner as described for Vsetaty.
          </li>
          <li>
            Hracholusky, a village with a stronghold and a demesne manor. The
            holder was to arrive at the castle in full armour and remain there
            as long as the lords commanded. He was given food and drink.
          </li>
          <li>
            Slovice, a village with a stronghold and a demesne manor; Sadlno, a
            demesne manor; in 1431 the village of Smrk was added to them. The
            vassal, together with one companion, was to arrive at the castle in
            full iron armour.
          </li>
          <li>
            Vlci Hora, a stronghold and demesne manor; was to equip one armoured
            man for the castle (part of the wasteland was later assigned to
            Lubna, another part to Hvozd).
          </li>
          <li>
            Pricina, a demesne manor called Detrichovsky with double ploughland
            and peasant farms. The lord was to cart aftermath hay to the
            storehouse at the castle. There were also four settled tenants who
            by right guarded prisoners at the castle.
          </li>
          <li>
            Trtice, a stronghold, demesne manor, and village; the holder was to
            arrive at the castle in armour and do whatever the lords commanded.
          </li>
          <li>
            Hnidousy, two demesne manors. The lord was to serve at the castle in
            iron armour and, in addition, keep a bloodhound ready for the king.
          </li>
          <li>
            Hedcany, a demesne manor, peasant farms, forests, and a stream. The
            holder was to come to the castle with a crossbow; there, bolts were
            to be made for him at royal expense.
          </li>
          <li>
            Kozlany, a demesne manor with 1 lan and a stream. The vassal was to
            serve at the castle with a crossbow; bolts were to be made for him
            at royal expense.
          </li>
          <li>
            Plavec, a stronghold with a demesne manor, and Siskov (Cizkov), a
            village. The holder, together with one companion, was to arrive at
            the castle in armour with crossbows and remain there as long as the
            lords commanded. He was given only food and drink.
          </li>
          <li>
            Breznice, a demesne manor; from 1474 also peasant farms. The fief
            was commuted in 1527 (see Hedcany).
          </li>
          <li>
            Kolesov Veliky, 11 peasant farms with 10 lan of farmland. The lord
            was to present himself at the castle in full iron armour. Commuted
            in 1529 (see Hedcany).
          </li>
          <li>
            Skalka, a house near Krivoklat Castle with meadows below it, 8 lan
            in the village of Chrastany, and the whole village of Kalubice. The
            vassal, together with two companions, was to come to the castle;
            apart from food and drink, nothing else was provided. By 1411 these
            were already divided.
          </li>
          <li>
            Chrastany, 8 lan of farmland. The lord was to arrive at the castle
            in iron armour and remain there as long as the lords commanded.
          </li>
          <li>
            Prilepy, 5 peasant farms. The holder was to provide 6 new crossbows
            each year and permanently send 4 crossbowmen to the castle. They
            were to receive nothing other than clothing and footwear.
          </li>
          <li>
            Zehrovice, a manor with one lan. The holder was to send an armoured
            man to the castle and remain there as long as the lords commanded.
          </li>
          <li>
            Lisna. The lord was to serve at the castle in armour. Re-granted in
            1552 together with the wastelands of Okrouhlik and Rebrik to Jirik
            Mniskovsky z Entenslanka, who was to serve at the castle with one
            horse, as needed, in front and rear armour with a gorget, in a
            chainmail skirt and arm guard, with a pikelhube, a handgun, and a
            boar spear, as befits a mounted crossbowman.
          </li>
          <li>
            Krakov, a demesne manor, with the villages of Rousinov, Sipy, and
            Vsesulov attached. The lord was to come to the castle with 4
            lancers. In 1363 this obligation was transferred to Krakovec Castle,
            but it was commuted in 1497.
          </li>
          <li>
            Chric, a stronghold with a demesne manor and peasant farms. The
            vassal was to come to the castle in iron armour and do whatever the
            lords commanded.
          </li>
          <li>
            Kounov and Lhota. King Wenceslas in 1402 gave Jaroslav z Nevida 8
            lan less a quarter in Kounov and 12 deserted lan in Lhotka, so that
            he would serve at the castle with one armoured horse and a crossbow.
          </li>
          <li>
            Ruda and Lhota (Ceska), whole villages. The lord, together with one
            companion, was to arrive at the castle in iron armour and remain
            there as long as the lords commanded.
          </li>
          <li>
            Krusovice, a demesne manor with 2 lan of farmland. The holder, on
            command, was to come to the castle with a crossbow, and there bolts
            were to be made for him.
          </li>
          <li>
            Zilina, a demesne manor whose holder was to come to the castle with
            a crossbow and do whatever the lords commanded.
          </li>
          <li>
            Okrouhlik, otherwise known as Bornov (formerly a stronghold near
            Unhost). The lord was to set fires before the army. This unusual
            service obligation requires explanation. Already the chronicler
            Dalimil records that the Bohemian sovereigns, when invited to the
            imperial court in Germany, had fire set before them. King Wenceslas
            IV, invited to Nuremberg in 1370, had great fires lit in two places
            upon his arrival, following the custom of his ancestors, to announce
            his coming, for since ancient times kings have had the right to
            arrive in flames and fire. The German princes and burghers, alerted
            by the fire to the king&apos;s approach, rode out to meet him. The
            second fire-setter was in Mestecko.
          </li>
          <li>
            Ujezd Panosi, three demesne manors. Two were held in 1508 by Boren
            ze Slabec, with the obligation that, should war break out, he was to
            come to the castle upon the captain&apos;s summons and stay for 4
            weeks; after that time, should he still be needed, he was to remain
            and receive soldier&apos;s pay.
            <br />
            One of these manors was held in 1552 by Jan Kfelir ze Zaksova, who
            was obliged to come with a crossbow and do whatever the lords
            commanded.
            <br />
            The second manor (Kubovsky) was held by Jirik Kfelir with the same
            obligation. The third manor (Jiraskovsky), with 1 1/2 lan, was held
            by Mikulas ze Vlenec with the same obligation.
          </li>
          <li>
            Senec, a village with a stronghold and a demesne manor. In 1389, the
            obligation of Otik Majirkov was renewed: on the burgrave&apos;s
            command, he was to present himself at the castle with a crossbow.
            However, Vaclav Chotek na Senci declared in 1581 that his obligation
            was to present himself at the castle in a red coat and yellow cap on
            a white horse, and to aim an unstrung crossbow loaded with a pommel
            bolt at the king as he rode into the castle.
          </li>
          <li>
            Hradkov (now Hradecko). King Louis in 1525 granted the deserted
            village of Hradkov as a fief to Martin z Kozlova: whenever the king
            came to Krivoklat and so required, the holder was to present himself
            at the castle with 2 horses and serve there until the king departed.
            Food, fodder, and other necessities were to be provided at royal
            expense.
          </li>
        </ol>
        The clerk in 1552 noted that some lords had declared that they had
        already commuted their fiefs.
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Labour Fiefs</h4>
        <ol>
          <li>
            Budy, below the castle. In 1457, a feudal house and some meadows
            called Lezice, together with 5 lan and a smallholder; but by 1552 a
            village, whose settlers lowered wines and other precious drinks into
            the castle cellars. They were given food at the castle. There was
            also one man who was to go to Castonice for messengers.
          </li>
          <li>
            Mestecko, by the castle. These men carted wood to the brewery year
            after year, when so ordered. There was also one who was to carry to
            the castle whatever was purchased in the town of Rakovnik. Another
            was to bring on his back 4 threescore eggs from Rakovnik every
            Saturday; for the walk he received 4 eggs. There was a wasteland
            where Jan Rudlik once lived. Its holder was obliged, when the queen
            lay in her lying-in with the young king, to drive nightingales to
            sing beneath her windows. Another had the duty, should someone
            commit murder or some misdeed on the estate, to take possession of
            the culprit&apos;s property and ensure that everything was
            preserved. Jakub Carda had the obligation to ride with the king and
            set fires wherever the king commanded. He was to be given a white
            horse and red garments (see Okrouhlik). Others were to drive to the
            castle whatever the kitchen master purchased for meat. All were
            obliged &mdash; the fire-setter among them &mdash; to drive cattle
            from one manor to another, to go on hunts, to catch harmful game,
            and to transport nets.
          </li>
          <li>
            Roztoky. There were two watchmen and one well-settled man who was to
            cart wood for malt-kilning to the malt house. There were also two
            brewers who were to brew beer at the castle when the lords so
            ordered. Additionally, there were two foresters or officials who
            guarded the forests &mdash; 1/3 of a mile long and 2 miles wide
            &mdash; and helped the forest clerk to collect revenues. Another was
            to drive to the castle whatever the cook purchased for meat. One
            fowler delivered a threescore of titmice every Sunday, from the
            Sunday after St Peter&apos;s Day until St Wenceslas&apos; Day, and 2
            squirrels until Shrovetide. At Easter he delivered a capercaillie;
            he was also to catch goshawks and gather sparrowhawks when the lords
            commanded. There was also a holding set aside for the castle cook.
            Above the village, in Rybari, there were two ferrymen who were to
            transport messengers, dogs, and nets to the castle free of charge.
            They were also obliged to supply the castle with fish.
          </li>
          <li>
            The town of Zbecno. Some were to sweep the castle and clean the
            towers. Others were to heat the great hall at the castle from St
            Gall&apos;s Day to St George&apos;s Day. One was to make shovels for
            cleaning the castle and barrows for carrying manure. Three beaters
            were to go hunting on the lords&apos; command. There were also 4
            fishermen, each of whom delivered fish worth 14 pennies every
            Friday. One delivered a capercaillie for the burgrave&apos;s table
            at Easter. There were also fowlers who delivered a threescore of
            titmice and goldfinches every Sunday from St Peter&apos;s Day until
            St Wenceslas&apos; Day, and as many squirrels as there were days in
            Shrovetide. Separately, there was one game hunter. One supplied the
            castle kitchen year after year with 2 cleavers and a meat axe.
            Should any of these break, he had to make a replacement immediately.
            One man named Havlu was to provide four litters for carrying stone
            and 11 shovels of the kind used to scrape the castle clean. For
            these needs, wood was to be carted for him. One was to deliver for
            the burgrave&apos;s table as many squirrels as there were Sundays in
            Shrovetide.
          </li>
          <li>
            Sykorice. The settlers were to go on hunts and guard the front or
            middle gates when so ordered by the lords. During the third mating
            season and the deer rut, they were to repair and grease the wagons
            alongside those from Bukova, load nets onto the wagons, cart them to
            the hunting grounds, and dry them. In spring, when the capercaillies
            displayed, and in autumn, when the stags bellowed, they were to keep
            watch for one week at a time.
          </li>
          <li>
            Racice. These were to deliver 12 pots and 12 lamps each week and
            carry them on their backs. One had the right to go hunting with the
            tower guards for wild boar.
          </li>
          <li>
            Ujezd nad Zbecnem. These were to carry or cart game at any time when
            the lords commanded. There was one stoker for the great hall at the
            castle. Another was a beater, who was to go on hunts.
          </li>
          <li>
            Bukova. Here there were beaters and net handlers who were by right
            to go on hunts, grease wagons, cart and dry cloths and nets, and
            encircle harmful game in the hunting rounds. There were also three
            foresters who guarded the forests of Bukova; these forests were 7/4
            of a mile long and 2 miles wide.
          </li>
          <li>
            Branov. Four gatekeepers were to guard the front gates continuously,
            alternating in pairs. Three crossbowmen were to go on hunts or come
            to the castle with crossbows. There were also two messengers who
            carried letters to the Plzen region, the Vltava region, and other
            districts.
          </li>
          <li>
            Nezabudice. In the village there were two bakers who were to bake
            bread at the castle. One was to be present at the castle with an
            unstrung crossbow, and the burgrave himself would have strings made
            for him. King Vladislav in 1500 allowed the holders of the demesne
            manor and the tavern to pay no other dues than 2 capons on Christmas
            Eve, or 15 groats for each.
          </li>
          <li>
            Lasovice. There was one forester who guarded the forests of Bukova,
            and one messenger who carried letters to the Zatec region.
          </li>
          <li>
            Rysin. There was one messenger who carried letters as far as Kadan
            and throughout the Zatec region.
          </li>
          <li>
            Pustovety. There were three crossbowmen &mdash; Jan, Beluch, and
            Albrecht Boren &mdash; who were to be at the castle with their
            crossbows and do whatever and whenever the lords commanded.
          </li>
          <li>
            Vnice (Mice), a hamlet. In it there was one servant who delivered 12
            drinking cups every Sunday for the burgrave&apos;s table. Another
            delivered one water jug or 2 pails every Sunday. One holding was
            deserted; from it a cooper was to hoop barrels, casks, jugs, and
            other vessels.
          </li>
          <li>
            Castonice, a well-settled whole village. In it, all were messengers
            to Prague and beyond Prague, to whatever regions and whenever the
            lords commanded. There was also one hunter who by right was to chase
            game. (Later they carted all supplies for the dogs to the hunting
            lodge at Skalka near the castle.)
          </li>
          <li>
            Luzna. A free magistracy with 2 lan and two dependants, one a
            butcher, the other a baker. Attached to it were a free mill, a
            tavern, a garden of 4 strychy, and the meadow Hvozdec (1348). From
            this, 4 hares were delivered every Christmas (in 1552, two vassals
            who each delivered 2 hares). The magistrate also held one forester
            lan, from which he was to serve the officials as a forest overseer.
            In addition, he held half a lan of farmland, for which he was
            obliged to provide the fisherman and hunters with bread when the
            Royal Pond below the village was fished.
            <br />
            Some settlers were obliged during the rut to drive apart rutting
            stags. In return, they had the right to fell timber for their needs
            in a designated forest (a fir wood). This place is still called the
            Vassals&apos; Fir. The adjacent game preserve bears the name Game
            Clearing. It was a forest meadow (rather a glade) where hay was cut
            for feeding game in winter.
          </li>
          <li>
            Hlohovice. In them there were 9 servants who were to be present at
            the castle with crossbows whenever so ordered, and do whatever the
            lords commanded. In particular, they guarded capercaillies during
            the spring display and stags during the autumn rut. There was also a
            demesne manor, with a mill and a forge attached. King Vladislav in
            1497 confirmed the vassals&apos; ancient rights: whenever need
            arose, they were to send one armed man to the castle. Wherever they
            rode or walked, they paid neither tolls nor market dues. They were
            to be tried only at the feudal court at the castle and were never to
            be separated from that castle, for their forebears had voluntarily
            submitted to this service. In 1714, all feudal obligations were
            commuted to the Kvitkov estate with a tavern.
          </li>
          <li>
            Hlohovicky. A well-settled village with 11 servants who were to be
            present at the castle with crossbows, guard the castle, or perform
            other tasks, ride or march wherever the lords commanded. No payment
            was necessary for this, as they were obliged to do it by right.
            (Commuted from fief status in 1527; see Hedcany).
          </li>
          <li>
            Otrocineves: these vassals were to pay four wagon drivers (i.e.
            provide four wagons).
          </li>
          <li>
            Ujezd Panosi, a large, well-settled village. In it there were 17
            vassals (squires, hence the name of the village), who were to be
            present at the castle with crossbows when so ordered and do whatever
            the lords commanded. They were to receive nothing beyond their
            provisions.
            <br />
            The captain Oulicka testified in 1566 that the dependants of Ujezd
            had since ancient times received 48 loaves of bread and 8 small
            groats weekly, but Lord Sternberk (1560) had abolished this
            allowance.
            <br />
            It is easy to calculate that originally there were 16 vassals, each
            of whom received 3 loaves and half a groat.
            <br />
            The clerk of the register, having compiled the service obligations
            in 1552, added: There are a good many more service obligations, but
            the registers are somewhat damaged and could not be fully
            deciphered; therefore these were omitted, though human memory of
            these obligations still endures.
            <br />
            The inventory then concluded with the addition: There are still 5
            villages which have no other service obligation than to perform
            watch duty at the castle. We know them by name, and they are:
          </li>
          <li>
            Zavidov. A free tavern and one lan of farmland, which had been
            distributed among ten men under emphyteutic right.
          </li>
          <li>
            Hostokryje. A peasant farm with one lan of farmland (sold to Pricina
            in 1481).
          </li>
          <li>Novosedly. A whole village.</li>
          <li>
            Kalubice. A whole village; the holdings are only small plots and
            cottages (see Skalka). The settlers in 1550 were governed by the
            emphyteutic books, but whatever was ordered by the lordship, they
            were obliged to carry out.
          </li>
          <li>
            Pavlikov. A free magistracy with 3 lan and a demesne manor with 1
            lan. <br />
            The captain Albrecht z Vresovic proposed to the Bohemian Chamber in
            1529 that the service of gatekeepers and watchmen be abolished. It
            would be better to convert the vassals&apos; obligations to a
            regular payment, and they would rather pay a decent sum from which
            permanent and proven loyal men could be maintained. In times of
            unrest, the captain could not know whether those arriving for watch
            duty were watchmen or traitors.
            <br />
            Vresovec&apos;s proposal was partly implemented by Sternberk and
            partly not until the captaincy of Kaplir (1640). The service
            obligations that the clerk could not decipher from the damaged
            registers have been found elsewhere:
          </li>
          <li>
            Kunsuv Manor (below Vsetaty). With 1 lan. The holder was obliged to
            send a suitable person for one week to guard the bird display and
            watch over game in the forests.
          </li>
          <li>
            Hredle. A magistracy with three lan of farmland; attached to it a
            chartered tavern, a butcher, and a baker. The service obligation is
            not known.
          </li>
          <li>
            Knezeves. A magistracy with 1 lan and 9 jitra, a free tavern, a
            butcher with a meat stall, and a baker. Whenever important need
            arose, the magistrate was obliged to keep a riding horse.
          </li>
          <li>
            Chlum. The magistrate paid 3 groats for messengers sent abroad.
          </li>
          <li>
            Mlecice. A magistracy with one lan of farmland and 2 smallholders.
          </li>
          <li>Svinarov. A magistracy and a demesne manor with 2 lan.</li>
          <li>
            Myslice. (1383 a mill, 1543 a manor, 1610 a ferry below Tyrov
            Castle.) The holder delivered river fish worth 3 groats every
            Friday, kept a tracking hound with which he searched for game, and
            informed the net handlers and beaters in Broumy where they were to
            assemble.
          </li>
          <li>
            Broumy: the net handlers and beaters were to serve during hunts.
          </li>
          <li>
            Hudlice, a whole village. Two were obliged to serve as officials or
            foresters and to oversee the forests, which were 5/4 of a mile long
            and a mile wide. Fourteen settled men were to go on hunts.
          </li>
          <li>
            Svojetin. One settled man (Hans Porth) was obliged during hunts to
            feed the lord&apos;s servants and dogs with proper provisions.
          </li>
          <li>
            Certain bushlands below the pond at Nizbor Castle, with a deserted
            hop garden and 24 strychy of farmland, were a grant of the Bohemian
            kings (a charter of King Charles from c. 1370).
          </li>
          <li>
            Chynava. They pay nothing; all settlers merely guard the forests.
          </li>
          <li>
            Bezdekov (Dolni). Three settled men served as officials over the
            forests, which were 2 miles long and wide.
          </li>
          <li>
            Vasirov: five settled men were obliged to serve as forest officials
            and collect revenues. Under their office the forests were 2 miles
            long and wide. They were also obliged to oversee the mowers and
            labourers in the meadow called &bdquo;Ptyne&ldquo;, to ensure they
            worked properly.
          </li>
          <li>
            Rakovnik. The burghers were obliged, beyond living memory, to
            provide men and horses for royal hunts and to lend bedding for royal
            courtiers to the castle.
          </li>
          <li>
            Straseci. The settlers had since ancient times gone on hunts and
            supplied the necessary wagons for transporting nets and cloth. Since
            times and captains change, a charter was drawn up for this in 1549.
          </li>
          <li>
            Zatec. The burghers had delivered half a barrel of wine from every
            vineyard to Krivoklat since 1399. In 1611 this was changed to an
            annual payment of 25 threescore groats.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
