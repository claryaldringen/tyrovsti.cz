import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const JobstOfEinsiedl = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="jobst-of-einsiedl" />
        <h4>Jobst of Einsiedl (circa 1420 - 1474){draft && <DraftBadge />}</h4>
        <h5>Family and youth</h5>
        <p>
          Jobst was born into a bourgeois family in the small town of Einsiedl,
          today&apos;s Mnichov in the Cheb district, likely around 1420; the
          town then belonged to the Teplá monastery.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 80" /> He most likely
          came from the Tullinger family. In a charter dated <b>16 June 1346</b>
          , Beneda, abbot of Teplá, and the entire convent granted to Elizabeth
          and her brothers Oldřich and Bohuslav, descendants of Heinrich
          Tullinger, the estates that had reverted to the monastery after the
          death of the Teplá judge Jan Puchelberger, in particular the tin mines
          between the Ouša river and the brook called Goltwasser.
          <Qt publication={PUBLICATIONS.NOVOTNA} /> In a charter of{' '}
          <b>25 May 1397</b>, the Teplá abbot Bohuš and the monastery servant
          Bohuslav Tullinger of Mnichov reached an agreement concerning the tin
          mines near Mnichov. In its disposition the two issuers concluded that
          Bohuslav Tullinger held all rights to the village of Mnichov and that
          every third penny (orig. „pfannig&ldquo;) of the mined metal would
          fall to him.
          <Qt publication={PUBLICATIONS.NOVOTNA} /> Whether this is the same
          Bohuslav mentioned in the first charter cannot be said. Likewise it
          cannot be deduced whether this is Jobst&apos;s father, grandfather, or
          some other relative; nevertheless, his coat of arms (three feathers)
          is also known from Jobst&apos;s later coat of arms.{' '}
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 80" /> He had a close
          connection to the city of Cheb and appears to us as a relative of the
          esteemed Cheb families of Schmidels and Puchelbergers, calling Jorg
          Schmidel his brother and Clement Puchelberger his uncle, with
          Puchelberger later becoming the burgomaster of Cheb.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 81" /> Jobst himself
          states that when he later stayed in Cheb, he lodged in the house of
          his brother Jorg. The kinship of the Tullingers and Puchelbergers is
          also indicated by the charter mentioned above.
        </p>
        <p>
          Jobst could have received his education either at the school in Cheb
          or, more probably, at the Teplá monastery. There he could have learned
          to read and write in Czech, German, and Latin, which made him one of
          the few multilingual scribes in late medieval Bohemia.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 81" />
        </p>
        <h5>Beginning of career</h5>
        <p>
          Thanks to his education, he was particularly suited to serve as a
          secretary and scribe, especially during the interregnum (1439 - 1453),
          when Czech lords conducted politics independently. Scribes who
          understood both languages of the land were recommended especially to
          those Czech lords who did not speak German, although they could not do
          without it during their frequent contact with neighboring German
          regions. For example, Lord Jan of Házmburk excused his letter to the
          city of Cheb written in Czech by stating that he currently did not
          have his German scribe available. In this capacity, Jobst actually
          appears in the service of Lords Aleš and Petr Holický of Šternberk,
          who at that time owned the nearby Bečov nad Teplou.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=4"
          />
        </p>
        <p>
          In February 1447, Duke William of Saxony approached Petr Holický of
          Šternberk to recruit an army in Bohemia for the Saxon Fratricidal War
          (1446 - 1451). The army was to assemble near Cheb, with Jobst
          entrusted with administrative and organizational matters. In a letter
          dated February 13, 1447, Duke William wrote:
          <Cit>
            Wir bedorffen wol eins endlichen diners, der dutschs und behemisch
            kan, uff den wir glauben gesetzen (...), dorzu uns Jobst, uwer
            diener, wol fuglich were.
          </Cit>{' '}
          (We absolutely need a servant who can speak German and Czech, whom we
          can trust (...), for this Jobst, your servant, would probably be
          suitable.)
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00258.html?context=%22Jobst+von+Einsiedl%22&leftTab=PER_ent"
          />
        </p>
        <p>
          These Czech mercenaries, due to an ensuing truce, were unable to
          participate in the Saxon Fratricidal War and seamlessly transitioned
          into the service of the Archbishop of Cologne, Dietrich II, in the
          Soest Feud. Since Petr Holický of Šternberk was the chief commander of
          the entire Czech corps, it is assumed that Jobst participated in the
          entire Soest campaign as Petr&apos;s right hand.
        </p>
        <p>
          Jobst&apos;s next significant involvement occurred in 1450 when George
          of Poděbrady, after defeating the Strakonice Union at the battle of
          Mýto on <b>June 4, 1450</b>
          <Qt publication={PUBLICATIONS.MACEK} /> led his campaign against their
          allies, especially Duke Friedrich of Saxony, resulting in the capture
          of the city of Gera. The following day, <b>October 23, 1450</b> (some
          sources state <b>October 16, 1450</b>), a truce was concluded. Jobst
          of Einsiedl, who participated in this campaign in the retinue of Lord
          Petr Holický of Šternberk, wrote his letter on <b>October 25, 1450</b>{' '}
          from the field camp near Salza, close to Plavno, the first preserved
          letter to the city of Cheb.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=5"
          />{' '}
          Cheb was threatened by the returning Czech army, as in March 1450, the
          Cheb council had refused to allow George of Poděbrady and his
          partisans into the city for negotiations with the German fürsts, which
          had to be held in Wunsiedel instead. In the letter, Jobst warned the
          citizens and urged them to seek an agreement. The mediation was
          undertaken by Aleš and Petr Holický of Šternberk, who, with their
          secretary Jobst of Einsiedl, ensured safe conduct for the Cheb envoys.
          The negotiations took place at Skalná Castle (Vildštejn). However, on
          the way to the meeting, the Cheb diplomats, carrying gifts for George
          of Poděbrady, were ambushed and robbed. Jobst of Einsiedl was also
          attacked but saved his life by promising not to reveal the attackers.
          <Qt publication={PUBLICATIONS.JANSKY} />
        </p>
        <p>
          Following the negotiations at Vildštejn, the city ultimately redeemed
          itself with 1000 gold in ransom:{' '}
          <Cit>
            Item wir haben geben vnd ausgerichthern Girziken tousent guldein,
            die jn der rat zu pranttschaczgeben musst.
          </Cit>{' '}
          (We gave Lord George 1000 gold, which must be given by the council as
          ransom.)
          <br />
          Petr of Šternberk received 200 gold for mediating the agreement, and
          other mediators also received rewards:{' '}
          <Cit>
            Geben dem Endresen I schock XXIII gr. zerung fur Hans von Kocza vnd
            fur den Jobst des von Sternbergs schreiber, als er zwischen eyn rat
            vnd den Behmen teidigat.
          </Cit>{' '}
          (Give the aforementioned 1 schock and 23 groschen to Hans of Kotzau
          and to Jobst, the scribe of the Šternberks, who participated in the
          negotiations between the council and the Czechs.)
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=5"
          />
        </p>
        <p>
          In 1452 Jobst appears in connection with the disputes between the
          Nuremberg burgheress Margareta Vogel and Aleš Holický of Šternberk,
          when he wrote a letter of thanks to the Nurembergers for resolving the
          matter. Frederick III had apparently been calling for an end to the
          dispute since the beginning of the previous year.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 82" /> In the
          so-called Borschengrüner Fehde (<i>Borschengrün feud</i>), the war
          between Cheb and the Vogts of Plavno in 1452–1454, several
          representatives of the Czech nobility, including the Holický of
          Šternberk, were notably involved. Aleš Holický was displeased that
          Frederick of Saxony had stepped forward as mediator between Cheb and
          the Plaveners; after the experiences of the Soest war, the majority of
          Czech nobles regarded him as an enemy of the country. Aleš also
          pressured Mates Šlik to convince Cheb that it had to stop fighting the
          Plaveners. Throughout this conflict Aleš frequently used Jobst as his
          negotiator with the Šliks and with Cheb. Jobst remained in the service
          of the Šternberks until the end of 1453 or the beginning of 1454,
          after which he entered the service of George of Poděbrady.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 82" />
        </p>
        <h5>In the service of George of Poděbrady</h5>
        <p>
          Jobst of Einsiedl remained with the lords from Šternberk until the end
          of 1453 or perhaps the beginning of 1454, for on <b>June 24, 1453</b>{' '}
          Jobst still writes under the command of Lord Aleš of Šternberk. He
          then entered the service of the administrator George of Poděbrady,
          possibly motivated by familial ties to the Šternberk family. On{' '}
          <b>October 28, 1454</b>, he addresses as secretary of George to
          Görlitz scribe a letter announcing the imminent arrival of the
          administrator with King Ladislaus and urges the reservation of
          necessary accommodations. Correspondingly, the rescript of George to
          the mayor and council of Cheb, dated <b>January 30, 1455</b> in
          Wroclaw, is already drafted by Jobst.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=6"
          />
        </p>
        <p>
          During this period, Jobst of Einsiedl was granted a coat of arms by
          King Ladislaus the Posthumous, which was elevated by Emperor Frederick
          III on <b>November 23, 1455</b>.
          <Qt publication={PUBLICATIONS.PELANT} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="polepseni.jpg"
        width={1920}
        height={1252}
        title="Original Latin record of the improvement of Jobst's coat of arms made on 23 November 1455 in Gratz."
      />
    </Row>
    <Row>
      <Col>
        <p>
          In the administrator&apos;s service a broad and significant field of
          activity opened up for Jobst. Since George spoke no German at all, he
          made use of Jobst&apos;s bilingualism especially in dealings with the
          predominantly German-speaking towns. Although George himself, with
          rare exceptions, sent his letters to Cheb in Czech, only letters in
          German have survived from later periods, behind which the activity of
          his new servant can be sensed.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 83" /> George valued
          Jobst&apos;s services and it is therefore likely that he interceded
          with King Ladislaus for the granting of a fief — the village of
          Jeschedorf, today Jaśkowice Legnickie — in January 1455, which Jobst
          held jointly with Hynec Dehraw, or that he was behind the elevation of
          Jobst&apos;s coat of arms by Frederick III on <b>23 November</b> of
          the same year.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 83" /> As his
          confidential scribe he was literally indispensable to him. Therefore,
          if he was not absent on some mission, he was always by the side of the
          land administrator, accompanying him on his major campaigns in
          Moravia, Silesia, and Austria, often engaging in trade, as in Brno,
          and informing his friends in Cheb with apparent satisfaction about the
          successful achievements of the governor. Although a Catholic and
          unconditionally devoted to the Roman Church, he maintained unwavering
          loyalty to his Utraquist lord at all times by — a rarity at the time —
          being able to rightly separate religious beliefs from loyalty to
          service. Therefore, he also enjoyed the full trust and favor of George
          and was often entrusted with tasks that required special care and
          reliability.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=7"
          />
        </p>
        <p>
          Jobst also accompanied George on long journeys, such as to Hungary in
          1456, of which he did not hesitate to inform his Cheb relatives.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 83" />
        </p>

        <p>
          After the death of King Ladislaus the Posthumous on{' '}
          <b>November 23, 1457</b> rumors began to spread that the young king
          had been poisoned by George of Poděbrady. At the assembly in Vienna on{' '}
          <b>January 21, 1458</b>, Jobst of Einsiedl strongly defended against
          these accusations. Jobst argued that it had never happened in history
          that the Czechs had poisoned a king. According to him, the Czechs were
          the king’s loyal subjects and had voluntarily submitted to him in
          everything that Kings Sigismund and Albert had sought to conquer by
          force (restoration of royal estates, levies, aid against the Turks).
          Ultimately, based on Jobst’s arguments, the assembly acknowledged that
          the king had passed away by the will of God.
          <Qt publication={PUBLICATIONS.PAPAJIK} note="page 224" />
        </p>
        <p>
          As mentioned earlier, Jobst was often entrusted with tasks requiring
          special care and reliability. Such a situation arose immediately after
          George was elected king. At the large electoral assembly in Prague on{' '}
          <b>March 1, 1458</b>, the representatives of Duke Wilhelm of Saxony
          referenced old charters stored at Karlštejn to better substantiate his
          wife&apos;s claims to the Czech succession. The administrator
          immediately dispatched his chamberlain and Jobst of Einsiedl, his
          scribe, with an appropriate entourage to Karlštejn to retrieve the
          relevant documents, which were presented to the assembled estates the
          following day. When George of Poděbrady was proclaimed king that same
          day, Jobst welcomed this significant event with undisguised joy and
          immediately communicated it to Cheb, where the news was joyously
          received (only the response from Cheb is preserved). Since George had
          already become famous in previous years for his zealous efforts to
          maintain peace, his election was particularly desirable for a city
          like Cheb, which was located on the borders of various regions and
          conducted lively trade. Moreover, Jobst assured the citizens of Cheb
          of the king&apos;s favor and admonished them to disregard the slander
          and threats of their neighbors, but to remain firm and steadfast. For
          Jobst himself, George&apos;s election had another consequence, as the
          new king elevated him to the knightly status that summer, as evidenced
          by the congratulations from the people of Cheb on <b>July 29, 1458</b>
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=7"
          />{' '}
          or a transumpt of Pope Pius II&apos;s bull from March 1459, which
          names Jobst as <Cit>Jodocus de Eynsedil, milites Pragensis</Cit>.
          <Qt publication={PUBLICATIONS.BOUKAL1} /> The people of Cheb were
          unofficially informed of the election by a letter from Jobst;
          officially they were notified by a great letter with many seals, whose
          author may also have been Jobst.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 84" />
        </p>
        <p>
          During George of Poděbrady&apos;s homage tour, Jobst accompanied his
          king, as testified by his reports sent to Cheb. He played a
          particularly notable role in Brno, which had closed its gates before
          George&apos;s arrival, and Jobst was sent as a negotiator with the
          city&apos;s representatives. In the autumn of 1458 Jobst accompanied
          George during his campaign in Austria.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 84" />
        </p>
        <p>
          Along with being elevated to knightly status, he received an
          inheritance worth 500 schocks of groschen at the Makotrasy estate.
          Around this time, he also acquired the villages of Skryje and Tytry.
          However, to enable the king to repay his debt to the Prague burgrave
          Zdeněk of Šternberk, Jobst returned the aforementioned inheritance and
          additionally lent 500 schocks of groschen in cash, for which the king
          registered him on <b>July 2, 1460</b> the castle of Týřov with the
          town of Kožlany, the villages of Mlečice, Chmelištná, Zavidov,
          Týřovice, Broumy, Kouřimec, Újezdec, Hudlice with all benefits and
          taxes in Novosedly. It was stipulated that Jobst must not be repaid
          until his death, and after his death, only the king himself may
          repurchase the estates for 600 schocks of groschen. According to the
          resolution, Týřov Castle must remain open at all times and if the king
          were to spend on it due to wars, it would be at no loss to Jobst. With
          the forests, neither Jobst nor his heirs have anything to do nor sell
          timber, only to take it unimpeded for fuel and repairs to the castle.
          In hunting small game and birds, Jobst was free, whereas he was
          allowed to hunt 3 deer and 10 roes a year with the knowledge of the
          Křivoklát burgrave, who was obliged to lend him dogs and puppies.
          Since the castle needed repairs to its walls, underpinning, and
          buildings, the king added 100 schocks of groschen for repairs to
          Jobst. If the castle were to be captured by Jobst, the kings are
          obliged to help him recapture it or pay him within two years.
          <Qt publication={PUBLICATIONS.KOCKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="tyrov.jpg"
        width={797}
        height={600}
        title="Ruins of Týřov, engraving by Václav A. Berger (1800) after a drawing by F. K. Wolf (1797)"
      />
    </Row>
    <Row>
      <Col>
        <p>
          As the royal secretary, Jobst had the opportunity to provide many
          services to the city of Cheb through advice or intercession with the
          king. This was evident from the royal rescripts to Cheb, many of which
          are marked <Cit>ad relationem Jodoci de Eynsedel secr.</Cit> The city,
          due to its exposed position, was frequently accused from one side or
          the other. It had frequent disputes with other territories, and also
          with its own subjects who wanted to dissolve their legal ties with the
          city, as well as problems with the abbot of Waldsassen over
          jurisdiction in several villages, including Albenreuth (today Mýtina,
          part of the municipality of Lipová), which were inhabited by both
          monastic and city subjects. Jobst was often asked for his
          intercession. He was willing to provide information, unless it
          involved official secrets, which he always strictly maintained.
          However, he always acted with great caution, and although this is also
          commendable, it surprises the reader unpleasantly when, for example,
          in the middle of an interesting letter, it states:
          <Cit>
            Although you yourselves want to learn the reason for this matter,
            you can send one of the council&apos;s friends who is known to me,
            and you will learn the whole matter thoroughly.
          </Cit>
          On the contrary, the city did not lack in recognition. On various
          occasions, it gave its friend a monetary gift, as evidenced by the
          Cheb expense book. For example at Christmas 1458:
          <Cit>
            Item so haben wir desmals durch Paul Ruduschen hern Jobst von
            Aynsidel awszgericht XII guldein, damit jn der rat vereret.
          </Cit>{' '}
          (Thus we then, through Pavel Ruduschen, handed Lord Jobst of Einsiedl
          XII gold, to honor him.) Also in the following year:{' '}
          <Cit>
            Item geben hern Jobsten von Aynsidel X gulde. r. damit jn unser hern
            verereten, als er jn das wortt redt ken vnsern hern konig von des
            abtes von Waltsassen wegen.
          </Cit>{' '}
          (Also given to Sir Jobst of Aynsidel were ten gold coins, r., so that
          our lords might honor him, as he spoke on behalf of our lord the king
          concerning the matters with the abbot of Waldsassen.) And when the
          city council honored the king with several barrels of the then-popular
          Cheb mead, one barrel also went to Jobst with the wish that
          <Cit>
            es mit seiner Gemalin in Fröhlichkeit und Gesundheit auszutrinken
          </Cit>{' '}
          (he may drink it with his wife in joy and health).
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=8"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Jobst was actively involved in organizing the assembly at Cheb in the
          spring of 1459, aimed at resolving disputes between Bohemia and Saxony
          through the mediation of the politically astute Margrave Albrecht of
          Brandenburg. Jobst arrived in Cheb by Easter, <b>March 25, 1459</b>,
          to announce the king&apos;s arrival on <b>April 8, 1459</b>, and
          briefed the council on all details, requirements, and other matters
          related to the visit. This gave the city ample time to prepare in
          advance. King George arrived in Cheb on <b>April 7, 1459</b>, with his
          wife Johana of Rožmitál, son Viktorin, and daughter Zdena, accompanied
          by a large retinue including numerous servants and significant
          representatives of the Czech and Moravian nobility. His entourage
          included 43 nobles and 16 knights, totaling around 900 riders and 100
          wagons, among them were several notable figures from Czech nobility.
          <Qt publication={PUBLICATIONS.POSPISIL} />
        </p>
      </Col>
      <ImageWithTitle
        src="spalicek.jpg"
        width={516}
        height={568}
        title="Cheb Square in a depiction from 1472"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Upon entering the city, the townspeople prepared a ceremonial welcome
          for the king and escorted him, with a canopy over his head, to a house
          directly on the square, where he was accommodated. The owner of the
          house on the square where the king was lodged was councilman Kašpar
          Junker, who was one of the most prominent figures of the city&apos;s
          patriciate at the time and had been elected mayor several times in
          succession. Given that George of Poděbrady was accommodated in his
          house, it can be assumed that this house was among the best equipped
          in the city.
          <Qt publication={PUBLICATIONS.POSPISIL} />
        </p>

        <p>
          On <b>April 8, 1459</b>, representatives of the imperial nobility also
          arrived in Cheb: Albrecht of Brandenburg arrived a day after George,
          thus on April 8, and Elector Frederick of the Palatinate on April 9.
          They were accompanied by other noble lords and various advisors.
          (Among the advisors, the internationally recognized diplomat Martin
          Mayer must be mentioned unequivocally.) Later, four dukes from Saxony
          also arrived, namely the Saxon-Meissen Elector Frederick with both his
          sons, Ernst and Albrecht, and his brother Wilhelm of Saxony. Along
          with them, another 13 imperial counts came with their wives.
          Furthermore, the Bavarian duke Otto, the Archbishop of Magdeburg,
          advisors of Duke Ludwig of Landshut, envoys of the Bishop of Würzburg,
          advisors of the Duke of Munich, Albrecht, and advisors of the Austrian
          Duke Albrecht arrived. Each of them came with a very large entourage,
          numbering dozens to hundreds of members.
          <Qt publication={PUBLICATIONS.POSPISIL} />
        </p>
        <p>
          The negotiations, which officially began on <b>April 10, 1459</b>
          <Qt publication={PUBLICATIONS.POSPISIL} />, saw Jobst deeply involved
          as he often met with Margrave Albrecht of Brandenburg by the
          king&apos;s command and guidance. He dealt with the margrave on{' '}
          <b>April 9, 1459</b>, late in the evening, and during this occasion,
          he fervently advocated for a settlement with Saxony by maintaining
          that if the matter were referred to the emperor or the electors, the
          end would be <Cit>nowhere in sight</Cit>. The next day, when the
          margrave appeared with Saxon advisors at the king’s residence at
          Kašpar Junker&apos;s house to discuss the matter further, Jobst of
          Einsiedl acted as an interpreter. When the negotiations concluded and
          they were leaving Cheb, he received a gift of 100 schocks of groschen
          from the city for the king:{' '}
          <Cit>
            Item wir haben awszgericht vnserm hern konygk au newen groschen 1
            <sup>e</sup>
            schok gr., domit jn der rat vererat - hub auf her Jobst von Aynsidel
          </Cit>{' '}
          (Thus we have again presented our lord the king with 100 schocks of
          groschen, as a mark of respect by the council - handed over to Lord
          Jobst of Einsiedl).
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=9"
          />
        </p>

        <div className="anchor" id="1" />
        <p>
          Jobst likely held a similar agenda at the assembly also held in Cheb
          on Candlemas in 1461. Once again, Jobst was probably assigned an
          important role, as evidenced by his letter from{' '}
          <b>December 14, 1460</b> to the mayor and council of Cheb, in which he
          requests:
          <Cit>
            to provide him accommodation at his brother&apos;s (Jorg Smidel)
            place, as he needs a comfortable place to rest, especially since he
            will not be able to sleep much, having a lot of work and needing to
            stay close to the king.
          </Cit>
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=9"
          />
          During this assembly, he also provided legal services in the dispute
          between Cheb and the abbot of Waldsassen over Albenreuth. For this and
          other services, he was given, besides ten gold coins, one arquebus and
          four hand cannons, all made in Nuremberg.
          <Qt publication={PUBLICATIONS.JANSKY} />
        </p>
        <p>
          At the end of February 1461 Jobst was sent as part of the escort of
          Zbyněk Zajíc of Hazmburk to the imperial diet in Nuremberg. In the
          summer of the same year he set out as a member of a Czech embassy to
          Vienna. For the services he had rendered for the city of Görlitz in
          1461, he received from the locals 6 schocks and 21 groschen.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 87" /> At the
          beginning of September 1461 at Laxenburg, Zbyněk Zajíc of Hazmburk,
          Vilém of Rýzmberk, Burian Trčka of Lípa, and Jobst of Einsiedl
          concluded a truce with Albrecht of Austria until June 1462. Jobst then
          took part in further negotiations at Leoben at the turn of September
          and October, from where he set out for Wiener Neustadt to meet Empress
          Eleanor in order to arrange a meeting between George and Frederick
          III.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 87" />
        </p>
        <p>
          In November 1462 Jobst appeared with George&apos;s army at Vienna,
          where the local burghers had risen against Frederick III and called
          Frederick&apos;s enemies — including Albrecht of Austria — to their
          aid. Frederick, besieged in the Vienna castle, asked George to break
          the siege; the Czech attack on Wiener Neustadt was unsuccessful,
          however, so that not long afterwards Frederick surrendered to his
          besiegers and concluded a peace treaty with them on disadvantageous
          terms.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 87-88" />
        </p>
        <p>
          Because Emperor Frederick III elevated George&apos;s sons Viktorin,
          Jindřich, and Hynek to the status of imperial princes on{' '}
          <b>December 7, 1462</b>, in Korneuburg, Jobst, Zdeněk of Šternberk,
          and Prokop of Rabštejn were sent to the emperor to bring back the
          princely cloaks and hats, which were formally presented at the Royal
          Court in Prague on <b>February 21, 1463</b>.
          <Qt publication={PUBLICATIONS.FELCMAN} />
        </p>
        <p>
          In March 1463, on George of Poděbrady&apos;s commission, Jobst became
          involved in the matter of the admission of the Jews Smahel, Gumprecht,
          Joseph and Sarah and their children to Cheb for six years at an annual
          rate of 150 Rhenish guilders. In this matter Jobst dealt with the Cheb
          burghers Kašpar Junker, Pavel Ruduš and Franz Scheller.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 88" /> At the
          beginning of summer 1463, George entrusted Jobst with negotiations
          with Hilary of Litoměřice. Their result was, on <b>11 June</b>, the
          vidimus of George&apos;s earlier agreement with Princess Hedwig of
          Legnica concerning Legnica.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 88" /> In August 1463
          George admonished the royal cities in writing to perpetual loyalty.
          The author of this text, however, may have been, as Urbánek concludes,
          none other than Jobst.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 88" />
        </p>
        <p>
          As a result of this diplomatic activity, Jobst of Einsiedl gained
          considerable influence and maintained written correspondence with
          foreign princes, especially with Margrave Albrecht of Brandenburg.
          Notably, in 1463, the margrave sent Jobst a confidential letter
          informing him of the papal legate&apos;s efforts against the king.{' '}
          <Cit>Dast wollest</Cit> (You may), the letter continues,{' '}
          <Cit>
            in grosser geheim vnnsern herrn dem konig sagen, dann es warlich
            also ist
          </Cit>{' '}
          (tell our lord the king this in great secrecy, for it is indeed so).
          Jobst also repeatedly relayed news from the Bohemian court to the
          margrave (a letter from <b>July 4, 1464</b>, and three letters from
          1469 are preserved). The influence of the royal secretary was evident
          on various occasions. From afar, they sought his intercession, such as
          at the beginning of 1463 by the town of Zgorzelec. In 1464, Jobst,
          along with Chancellor Prokop of Rabštejn and Henry, Lord of Gera,
          mediated a dispute between Henry of Plavna and Günter of Bünau on the
          king&apos;s orders. Meanwhile, when a newly established noble
          association again raised the question of who exactly should oversee
          the imperial insignia, several lords and knights, including Jobst of
          Einsiedl from Týřov, were tasked with transferring state documents
          stored at Karlštejn to Prague and their supervision. One of the
          symptoms of the increasingly sharp disputes in the religious and
          political sphere was the religious confusion leading to the emergence
          of many sects. Jobst had one such in mind in his interesting letter
          from <b>September 17, 1466</b>. This was linked to the names of Liwin
          and Janek of Wirsberg, Franciscan apocalyptic preachers active in the
          Cheb region and influenced by the sermons of John Capistrano and the
          preaching of John Rokycana in Cheb in 1451. Fearing an interdict and
          also because King George had spoken out against the teachings of the
          Wirsbergs, the city council banned the Wirsbergs from entering the
          city. Jobst appears in his letter as a fervent Catholic and from his
          interesting expressions, we recognize a dogmatizing layman, as there
          were many at the time, especially in Bohemia. He took the decline of
          faith deeply to heart and let it culminate in a complaint,{' '}
          <Cit>
            das die werlt so falscher list ime mer ist, vnd nicht ansicht vnd
            betracht den gemein rechten cristen glawben
          </Cit>{' '}
          ( that the world is getting worse and the true faith is not generally
          seen) - a complaint shared by the contemplative souls of his time.
          However, events then unfolded in an unstoppable sequence, causing
          George&apos;s waning star to extinguish. The curse that befell him
          also engulfed his loyalists, and entire regions groaned under the
          weight of the interdict. Even the city of Cheb, which had maintained
          praiseworthy loyalty to its king (having sworn fidelity on{' '}
          <b>September 4, 1461</b>
          ), was decidedly influenced by political reasons. Since 1315, the city
          of Cheb and its area had been pawned property of the Bohemian crown.
          Relying on its privileges, which delineated a favorable special
          status, it stayed aloof from all movements in Bohemia and swore
          allegiance and homage only to the crowned king. To pay homage to a
          king like Matthias who lacked a crown could have easily set a
          dangerous precedent. Therefore, the city, despite repeated
          admonitions, refused homage to the usurper king and preferred to have
          an interdict declared over it. That Jobst did not falter is easily
          understandable after all that has been said. As a man of conscience
          and character, he maintained loyalty to his king without even slightly
          violating the humiliating obedience to the punishing church. Despite
          his lips not uttering a word of reproach, he had to endure all
          difficulties; as a Catholic, he had the Utraquists as enemies and as a
          supporter of the excommunicated king, his own sovereigns, from whose
          community the church had excluded him. His estates were devastated,
          his subjects&apos; villages burned and destroyed (he quantified his
          losses at 300 schocks of groschen). King George recognized the damage
          and in 1466 credited him with 100 schocks of groschen for the
          construction of ponds and granted him mercy that his son Henry would
          not be able to be paid out from Týřov until his death. Faced with this
          devastation, Jobst fought a hard battle with himself; for conscience
          and faith, church commandments and sworn loyalty were in constant
          conflict: the fierce battle that stirred the whole era is reflected in
          the breast of this man, who resolutely adhered to what he recognized
          in his simple soul as right and good. Eventually, he decided on
          suffering obedience, because it was about the faith, which he did not
          want to weaken by resistance <Cit>nicht schwächen helfen</Cit> (help
          to weaken). Thus, he shared the same fate as the allied city of Cheb,
          which he tried to comfort and strengthen in obedience. Only when he
          saw that his opponents cared less about faith than about plunder, did
          he take up the sword to secure peace.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=12"
          />
        </p>

        <p>
          After the death of King George of Poděbrady on <b>March 22, 1471</b>,
          at the beginning of May 1471, Jobst successfully engaged in settling a
          dispute between Cheb and the highest Prague burgrave, Jan Jenc of
          Janovice at Petršpurk. The lord of Janovice had, after all, many
          concerns other than waging war on Cheb, as he was more preoccupied by
          his fight against the Šternberk garrison of Ostromeč Castle. During
          the same year Jobst also tried to help the Cheb burghers in peace
          negotiations with Vilém of Volfštejn and Beneš of Kolovrat, though
          without much success.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 90" /> After
          Vladislaus II Jagiello ascended the throne on <b>May 27, 1471</b>,
          Jobst remained in the office of secretary.
          <Qt publication={PUBLICATIONS.JANSKY} />
        </p>
        <p>
          In 1472, Jobst acquired from King Vladislaus the same municipal rights
          for Kožlany as Rakovník had, including a coat of arms and permission
          to build a brewery in Kožlany. From June 1472, he also discussed a
          court dispute between himself and Friedrich of Šumburk. Jobst accused
          Friedrich of Šumburk&apos;s servants of stealing his cows, later found
          on <Cit>na jeho páně Šumburkuov zámek</Cit> (his lord Šumburk&apos;s
          castle). If Šumburk failed to appear in court against Jobst, he was to
          compensate Jobst for the stolen cows.
          <Qt publication={PUBLICATIONS.KOCKA} />
        </p>
        <p>
          He also continued to serve the people of Cheb as their informant about
          events in the kingdom. From the end of 1464 until the spring of 1465,
          for example, he dealt with the case of confiscated cattle which had
          been improperly declared and which the nobleman Jenec of Janovice at
          Petršpurk had seized from the Cheb burgher Jobst Lochner.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 88" /> Among the
          significant missions in which Jobst took part in the service of
          Vladislaus were, for example, the negotiations with Frederick III in
          1473–1474, which he attended together with Burian II of Gutštejn and
          Beneš Libštejnský of Kolovrat. These negotiations, held in Nuremberg
          and Augsburg, were preceded by several further meetings with Albrecht
          of Brandenburg, the principal outcome of which was the recognition of
          Vladislaus as the legitimate king of Bohemia. Furthermore, an
          agreement was reached on military operations in Austria for the
          purpose of fighting Corvinus and the rebellious Austrian nobility. In
          July 1474 Jobst is documented as an assessor of the chamber court.
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 90" />
          <Qt publication={PUBLICATIONS.JANSKY} />
        </p>
        <p>
          In 1473, King Vladislaus granted Jobst the right of mortmain to the
          estate at Hlince, and that same year confirmed all privileges granted
          to him by King George, and additionally allowed him to kill up to four
          deer or does in the forests and especially allocated 50 schocks of
          groschen for castle repairs. However, Jobst died the following year.
          On <b>July 11, 1474</b>, he was still present at the chamber court,
          but by 1476 he was no longer alive, as noted in a letter from{' '}
          <b>April 17, 1476</b>:{' '}
          <Cit>Wie etwen herre Jobst vom Eynsidel, demegot gnade</Cit> (May God
          have mercy on Lord Jobst of Einsiedl).
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=12"
          />
          <Qt publication={PUBLICATIONS.KOCKA} /> Jobst left behind a will that
          was entered into the land registers. Its wording has unfortunately not
          been preserved; we know, however, that it was invalidated, having been
          made <Cit>po smrti pečetín</Cit> (sealed after death).
          <Qt publication={PUBLICATIONS.BOUKAL} note="page 90" />
        </p>
      </Col>
    </Row>
  </>
)
