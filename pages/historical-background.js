import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Image from 'next/image'
import Link from 'next/link'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_EN } from '../shared/constants'

const Page = () => {
  return (
    <>
      <HeadExtended
        lang={LANG_EN}
        title="Historical background"
        image="m921.033ra.jpg"
      />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h1>Historical background</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Translated by Kryštof Šámal</p>
                <p>&nbsp;</p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <p>
                  After repelling four crusades to Bohemia in 1420-1431, the
                  Catholic Church was forced to negotiate. The Hussite program
                  of the four Prague articles was transformed into the Compacts
                  of Basel. However, for the radical part of the Hussites
                  represented by the Orphans and Tábor unions, the Compacts were
                  too much of a compromise. Long-lasting contradictions in the
                  Hussite movement culminated in the Battle of Lipany, which is
                  considered the de facto end of the Hussite Wars, and the
                  combined forces of Catholics and moderate hussites crushed the
                  radicals in it. After the Battle of Lipany, The
                  Orphanan&apos;s union ceased to exist. Although the Tábor
                  Union continued to exist, it lost its influence on events in
                  the country. Nothing stood in the way to the adoption of the
                  Compacts and Sigismund of Luxembourg as King now.
                </p>
                <p>
                  After the death of Emperor Sigismund&nbsp;
                  <b>9.&nbsp;December&nbsp;1437</b>, the victors from Lipany
                  split into two sides. One party was formed around the
                  Queen-widow Barbara of Celje and its leader was Hynce Ptáček
                  of Pirkštejn, followed by Aleš Holický of Šternberk. This
                  party, which was predominantly hussite, promoted the candidacy
                  of the Polish prince Casimir Jagielliellon and was therefore
                  called the Polish party. The other party, mostly Catholic, was
                  led by Oldrich II. of Rosenberg and Menhart of Hradec,
                  promoted the candidacy of Sigismund&apos;s son-in-law,
                  Albrecht II. Habsburg, and was therefore called the Austrian
                  party.
                </p>
                <p>
                  After the official announcement of the election of Casimir
                  Jagiellon as the czech king at the Congress of the hussite
                  nobility in Mělník, <b>29. in May 1438</b>, Albrecht Habsburg,
                  supported by the Austrian side, marched into Bohemia, thus
                  starting a war of succession. Prague was pro-Austrian at that
                  time, so Albrecht had himself crowned the king of Bohemia on
                  <b>June 29th 1438</b> and proceeded with his troops to Tábor,
                  where he clashed in a series of smaller skirmishes with the
                  troops of Ptáček&apos;s side, supported by troops from Poland.
                  However, there was no decisive clash or capture of Tábor, and
                  after five weeks of siege, Albrecht&apos;s army departed on
                  <b>September 15th 1438</b>. However, neither the other side
                  managed to reverse the situation, and in February 1439,
                  Albrecht and Casimir concluded a truce. In the autumn of 1439,
                  Albrecht marched to Hungary against the Turks, but on the
                  campaign he got infected with dysentery and died on&nbsp;
                  <b>27th of October, 1439</b>.
                </p>
              </Col>
              <Col md={6} className="image-wrapper">
                <Link
                  href="/images/Albrecht_II._von_Habsburg.jpg"
                  target="_blank"
                >
                  <Image
                    src="/images/Albrecht_II._von_Habsburg.jpg"
                    width={578}
                    height={800}
                  />
                </Link>
                <br />
                Portrait of Albrecht II Habsburg. Copy from 16th century painted
                by a painting from 1434 - 1439
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  It would seem that after Albrecht&apos;s death, nothing
                  prevents the Polish side from push its candidate to the
                  throne. However, almost all the Catholic nobility and cities
                  opposed it. But even the Poles were not too keen on the vacant
                  throne. Hynce Ptáček, who was a skilled politician, understood
                  that the choice of prince Casimir was politically impassable
                  and abandoned the promotion of his candidacy. In January 1440,
                  during the Prague diet, on <b>29th January 1440</b>, concluded
                  Hynce Ptáček and Oldřich II. of Rosenberg, together with
                  members of their parties, an agreement called the &ldquo;Peace
                  letter of all estates of the kingdom of Bohemia&rdquo;. This
                  agreement included compliance with the Basel compacts, the
                  requirement to confirm the election of Jan Rokycana as
                  archbishop, the resumption of the activities of the provincial
                  court to which both parties had sent their representatives,
                  the invalidation of Albrecht&apos;s records to the detriment
                  of the Czech crown or its opponents, and arrangements for the
                  amicable settlement of future disputes.
                </p>
                <p>
                  In order to be able to effectively enforce the measures taken
                  from the <i>Letter</i>, a system of landfrieds was put into
                  operation. The landfrieds were security-military associations
                  of the nobility and royal cities, which replaced the central
                  government in a certain territory. While in Moravia there was
                  already regional landfried established on&nbsp;
                  <b>28th january 1440</b>, in Bohemia, there were 12 such
                  landfrieds established during the year 1440. On&nbsp;
                  <b>March 8th 1440</b>, the Boleslav landfrýd was created, and
                  Jan Smiřický of Smiřice and Jiří of Kunštát and Poděbrady were
                  elected hauptmanns, who was after Hynek Ptáček and Aleš
                  Holický of Šternberk, the third highest-ranking man of
                  Ptáček&apos;s party. On the diet in Čáslav,&nbsp;
                  <b>17th March 1440</b>, four more eastern bohemian landfrieds
                  were created: Hradec, Chrudim, Čáslav, and Kouřim, of which
                  Hynce Ptáček himself was elected the hauptmann, however, he
                  had defacto power over the whole lot of eastern bohemian
                  landfrieds.
                </p>
                <p>
                  The landfrieds were originally supposed to ensure the
                  administration of the country only until the Bohemian diet,
                  which was to be held in June 1440 in Prague, where a new
                  bohemian king was to be elected. A group of electors (18
                  Lords, 14 Knights and 14 burghers) decided to offer the Czech
                  crown to the Duke Albrecht of Bavaria, who, however, on
                  the&nbsp;
                  <b>24th August 1440</b>, politely refused. Thus, the question
                  of the occupation of the Czech throne again appeared in the
                  political foreground. In particular, the Rosenberg party
                  returned to the question of the inheritance of the Czech
                  throne in the House of Habsburg. For a time, the candidacy of
                  Emperor Frederick III was considered. However, in the end, the
                  opinion was established, that the hereditary crown belonged to
                  the son of Albrecht II., Ladislus the Posthumus, who was born
                  on <b>22nd February 1440</b>, almost four months after
                  Albrecht&apos;s death. Even the Ptáček&apos;s party did not
                  reject Ladislaus, but defended the right of election, which
                  belonged to the estates. However, with the selection of the
                  minor Ladislaus the Posthumus, the end of interregnum
                  disappeared out of sight, and the landfrieds became the local
                  government power for the next few years.
                </p>
                <p>
                  On <b>27th of August 1444</b>, Hynce Ptáček of Pirkštejn,
                  suddenly died in Rataje nad Sázavou, probably of a stroke. At
                  the Congress of Kutná Hora in September 1444, Jiří of
                  Poděbrady was elected to his place at the head of the east
                  bohemian landforms. At the Congress of Pelhřimov in June 1446,
                  the idea of appointing a land governor fell apart. At the
                  congress of Kutná Hora, in <b>24th June 1448</b>, from the
                  original Union of East bohemian landfrieds, a powerful
                  Poděbrady union was formed, of which many Catholic noblemen
                  were also a part. Here, too, Jiří was elected the
                  administrator of &ldquo;all Czech communities inclined to the
                  law of God.&rdquo; But in order to become a real ruler of the
                  country, he had to have power over Prague. Under the pretext
                  of invading Saxony, he gathered an army and suddenly ambushed
                  on the night of <b>2nd to 3rd September 1448</b> Prague,
                  including both castles. In response to the occupation of
                  Prague, on <b>8th of February 1449</b> in Strakonice the
                  Rosenberg party united with the remnants of the Tábor Union,
                  formed Strakonice unipn and immediately began military action
                  against Poděbrady union. The war with the Strakonice unity
                  smoothly turned into a war against Frederick II. of Saxony,
                  and on <b>October 27th, 1451</b>, Jiří of Poděbrady, returned
                  to Prague, crowned with the laurels of victory. In November
                  1451, Oldrich II. of Rosenberg retired, and thus de facto
                  Strakonice union ceased to exist. Oldrich&apos;s sons and
                  heirs - Jindřich, Jan and Jošt needed to consolidate their
                  rule over the Rosenberg Dominion and rather made peace with
                  Jiří of Poděbrady. This virtually ended any opposition to
                  Poděbrady union and Jiří of Poděbrady. On&nbsp;
                  <b>23rd of April 1452</b>, St. George Assembly gathered in
                  Prague, and on <b>April 27th of 1452</b>, elected Jiří as the
                  land governor for two years. At the end of August 1452, Jiří
                  gathered an army of about 17,000 men and on the&nbsp;
                  <b>30th August 1452</b> marched on Tábor. Tábor surrendered to
                  Jiří without a fight on <b>1st September 1452</b>.&nbsp;
                  <b>18th September 1452</b>, the townspeople of Písek, Klatovy,
                  Domažlice and Sušice surrendered to George, and a week later
                  the townspeople of Louny and Žatec. Thus, the Tábor Union
                  ceased to exist, which was especially important from the point
                  of view of the church administration. From that point,.one
                  land governor had only one spiritual administrator of the
                  hussite believers, Jan Rokycana. When Jiří returned to Prague
                  on <b>30th September 1452</b>, he was already a generally
                  recognized a ruler of all Czech regions.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <p>
                  The political pressure of the Czech and Hungarian estates,
                  especially the military action of the Austrian estates, forced
                  Emperor Frederick III. release Ladislaus the Posthumus from
                  his guardianship on <b>13th September 1452</b>. Now, at last,
                  Ladislus was able to seize power in the lands that belonged to
                  him by inheritance. In the spring of 1453, Jiří left Poděbrady
                  for Vienna, where on the <b>April 29th 1453</b>, he paid
                  tribute to Ladislaus. Ladislus promised to recognize
                  Compactats, to advocate for the confirmation of Jan Rokycana
                  as archbishop, and on <b>2nd of May 1453</b>, he confirmed
                  Jiří as land governor for another six years. In July 1453,
                  Ladislaus Posthumus left for Brno, where he was paid tribute
                  by the Moravian Estates, and began to raise money for a
                  spectacular coronation ride to Bohemia. At the end of
                  September, he already has enough finances, so he arrives on
                  the <b>24th October 1453</b> with his court to Prague, where
                  he is <b>28th October 1453</b>
                  solemnly crowned the Bohemian King. Ladislus remained in
                  Prague almost until the end of November 1454, after which he
                  went to Wrocław to receive tribute from the Silesian Estates.
                  From Wroclaw he continues to Vienna, where he arrives on the
                  <b>16th of February 1455</b>. Jiří of Poděbrady is with him
                  all the time, trying to settle Ladislaus&apos; disputes with
                  his former guardian, Emperor Frederick III., and at the same
                  time, he convinces Ladislaus to return to Prague. Ladislaus,
                  himself an ardent Catholic, refused to return to the hussite
                  Bohemia, so Jiří returned to Prague alone in May 1455. In
                  early July 1456, sultan Mehmed II. besieged the city of
                  Belgrade. Hungarian regent, János Hunyadi, repelled the attack
                  on Belgrade on <b>22th of July 1456</b>, but dies not even a
                  month later - the reason being the plague, which spread in the
                  besieged city. In September 1456 Ladislaus the Posthumus went
                  to Hungary to face the Turkish expansion and at the same time
                  to get all the royal castles revenues that the Hunyadi family
                  had in their possession. He was accompanied by his relative,
                  guardian and governor of the Austrian lands, Ulrich of Celje,
                  who was to become Captain-General of the kingdom of Hungary.
                  However, Ladislaus Hunyadi, the eldest son and heir of János
                  Hunyadi, was not going to give up the power acquired from his
                  father, and after the arrival of Ladislaus Posthumus in
                  Belgrade, he captured him and had Ulrich of Celje killed by
                  his troops on <b>9th of November 1456</b>. Ladislaus Posthumus
                  was a prisoner of Ladislaus Hunyadi until the&nbsp;
                  <b>14th of March 1457</b>, when, with the help of Jan Jiskra
                  of Brandys, a Czech condottiero who operated with his
                  mercenary army in Upper Hungary, he managed to capture the
                  brothers Ladislus and Matthias Hunyadi. Ladislaus Hunyadi was
                  executed by beheading on <b>16th of March 1457</b>, Matthias
                  was taken to prison in Vienna, where Ladislus Posthumus went
                  to escape the riots that broke out between the party
                  supporting the Hunyadi family and the nobility loyal to the
                  King. In the end, Ladislaus decided to move to Prague, because
                  under the stewardship of Jiří of Poděbrady, the Czech Kingdom
                  became the most stable part of Ladislaus&apos;s state and
                  on&nbsp;
                  <b>September 29th of 1467</b>, he finally arrives inn Prague.
                  Here he is to marry the daughter of the French King, Charles
                  VII, Magdalena of Valois, when on
                  <b>23th November 1457</b> suddenly dies of leukemia.
                </p>
              </Col>
              <Col md={6} className="image-wrapper">
                <Link
                  href="/images/Ladislas_the_Posthumous_001.jpg"
                  target="_blank"
                >
                  <Image
                    src="/images/Ladislas_the_Posthumous_001.jpg"
                    width={1056}
                    height={1466}
                  />
                </Link>
                <br />
                Portrait of Ladislav Pohrobek by an unknown author from 1457
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  In February 1458, a constituent assembly was convened. In the
                  game for the Czech crown were several candidates: Casimir
                  Jagiellonian, William of Saxony, Emperor Frederick III.,
                  Albrecht of Bavaria, Albrecht of Brandenburg and King Charles
                  VII of France. In the end, of all the foreign candidates, the
                  two most prominent remained: William of Saxony and Charles
                  VII. Jiři of Poděbrady remained in the background. He
                  skillfully played on the nationalistic notes, giving as an
                  example the election of a member of the domestic nobility -
                  Matthias Corvinus as king of Hungary, which had already taken
                  place on the <b>24th of January 1458</b>. He won the
                  opposition mainly by promising that there would be no
                  restitution of church property seized during the Hussite Wars,
                  on which, paradoxically, the Rosenbergs, as well as other
                  noble families, both catholic and protestant, would lose the
                  most. The election began on <b>27th February 1458</b>, at the
                  Old Town Hall in Prague. Jiří secured the result of the
                  election by having the venue of the assembly surrounded by his
                  gunmen and so he was the elected the King of Bohemia on
                  the&nbsp;
                  <b>2nd of March, 1458</b>. After the election, Jiří sworn a
                  secret oath in the hands of the Hungarian bishops Augustine of
                  Rab and Vincent of Vacov that he would obey the commands of
                  the papal see and that he would defend the true Christian
                  faith. This secret oath later became an apple of contention,
                  as the pope and other Catholic prelates understood it as a
                  commitment that Jiří would give up the chalice and fight the
                  hussites. But the czech hussites, including Jiří, considered
                  themselves on the basis of the Compacts as part of the
                  general, that is, at that time catholic, church. Jiří,
                  therefore, understood his oath as a struggle against
                  manifestations of heresy that were outside the content of the
                  Compacts, as he had already done by the dissolution of the
                  Tábor Union and the capture of the Tábor priests in the autumn
                  of 1452. At this time, however, this secret oath allowed Jiří
                  to be crowned on <b>7th of May 1458</b> in the presence of
                  both bishops.
                </p>
                <p>
                  Although Jiří of Poděbrady received the Czech crown at the
                  coronation in Prague, he still had to secure recognition of
                  the Czech crown in other countries. The first was Moravia,
                  where Jiří traditionally had followers in the nobility related
                  to his family - Lords of Kunštát. Until now, especially the
                  royal cities stood against him here, where the german urban
                  patricians always defended the Catholic and pro-Habsburg
                  policy. However, since there were no other candidates for the
                  throne after Jiří&apos;s election as the czech king, by the
                  summer of 1458, all moravian cities accepted him, save for
                  Jihlava. King Jiří chose the proven tactics of war threats and
                  peace negotiations against the patriciate of Jihlava , and so
                  in November 1458, the burghers of Jihlava knelt before the
                  king. After Moravia, Upper Lusatia and the County of Kladsko
                  also joined Jiří&apos;s domain. As early as 1458, king Jiří
                  also ruled the the &ldquo;secondary lands of the czech
                  crown&rdquo; (this includes territories outside the Kingdom of
                  Bohemia, i.e. Lusatia and Silesia, Gorlitz etc.) with the
                  exception of Silesia, where Wrocław in particular expressed
                  its disagreement with the choice of the hussite king. Jiří
                  decided to postpone his fight with the wroclawians and went on
                  to secure his recognition as a king abroad. He first met
                  Emperor Frederick III. on a Danube island outside Vienna, and
                  paid his tribute to him on the <b>25th of September 1458</b>.
                  The Czech lands were formally still part of the Holy Roman
                  Empire. Jiří also promised the Emperor military assistance in
                  the fight against the Austrian Estates and received from him
                  the recognition of his coronation. Now it was time to put an
                  end to the disputes with Saxony, which George did at the
                  Congress in Cheb, which began on the <b>7th April 1459</b>. In
                  Cheb, the leading personalities of the Empire gathered, among
                  others Frederick of the Palatinate, Otto of Bavaria, Frederick
                  the Elector Count of Brandenburg, Albrecht of Brandenburg,
                  archbishop Frederick of Magdeburg and many other counts and
                  princes with their companions. However, the most important
                  figures of the Congress were the brothers Frederick and
                  William of Saxony. King Jiří arrived in Cheb accompanied by
                  900 horsemen and 100 wagons, with his whole family and with
                  the leaders of the czech nobility. Patience finally bore
                  fruit. William of Saxony renounced all claims to the Czech
                  throne and offered to mediate between Jiří and Silesia. Both
                  saxon dukes then gave up their claims to the lands around
                  Duchcov and Most and withdrew beyond the land border. King
                  Jiří, on the other hand, renounced the czech fiefs in Saxony.
                  This border between Saxony and Bohemia is still valid today
                  and is therefore one of the oldest still existing borders in
                  Europe. The Czech-Brandenburg friendship treaty was also
                  established in Cheb. In September 1459, Wrocław became a
                  besieged fortress and on 1st of October 1459, the Czech army
                  attacked the walls, however, unable to break them. Even the
                  Pope Pius II. wrote a letter to the citizens of Wroclaw,
                  asking them tu subdue. And so at the end of the year 1459, the
                  city asks King Jiří for a truce and begins negotiations for
                  peace. In January 1460, Wrocław accepted Jiří of Poděbrady as
                  king.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="image-wrapper">
                <Link href="/images/m921.033ra.jpg" target="_blank">
                  <Image
                    src="/images/m921.033ra.jpg"
                    width={915}
                    height={600}
                  />
                </Link>
                <br />
                The depiction of George of Poděbrady on a cut-out from the book
                of hours that was made for him made by his wife Johana of
                Rožmital, Prague, 1466
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  According to an ancient ceremony, each new czech King was
                  formally obliged to take a vow of obedience to the pope. To
                  that end, czech entourage entered Rome on 13th of March, 1462.
                  Jiří also wanted the Pope to legitimize the chalice and
                  confirm Jan Rokycana in the office of archbishop. The public
                  hearing of the czech message before the Pope took place
                  on&nbsp; &nbsp;<b>20th March 1462</b>. The czech Chancellor
                  Prokop of Rabštejn took an oath of obedience to the pope in
                  the name of King Jiří. Then Václav Koranda Jr. took the stage
                  and defended the validity of the Compacts. The Pope
                  immediately replied to him and expressed the opinion that the
                  chalice was allowed in Basel only to the first generation of
                  Hussites, but on the validity of the Compacts promised to
                  express an opinion later. That happened on&nbsp;
                  <b>31st October 1462</b>, in the presence of about 4,000
                  witnesses. Pope Pius II proclaimed the Compacts for canceled.
                  But Jiří was not surprised. He had been preparing
                  diplomatically for a conflict with the papal curia for some
                  time. He could not and would not renounce the Compacts, the
                  central point of his lifelong political program. He managed to
                  quell the religious unrest in Bohemia and the centrifugal
                  tendencies of the countries of the Czech crown, which occurred
                  after the unilateral abolition of the Compacts, and for some
                  time the situation in the Kingdom stabilized again. Old and
                  sick, Pope Pius II. watched this development with displeasure.
                  In the end, he ran out of patience, despite the intercession
                  of Emperor Frederick III. and many princes of the Empire,
                  invited Jiří to rome for ecclestial court to Rome on&nbsp;
                  <b>16th of June 1464</b>. However, he dies before Jiří can
                  even respond, on &nbsp;<b>14th of August 1464</b> in Ancona.
                  The new Pope, Paul II., invited Jiří to the Roman tribunal
                  on&nbsp; &nbsp;<b>2nd of August 1465</b>: if Jiří does not
                  appear within 180 days, he will be expelled from the church
                  and the ecclesiastical curse with all the punishments that
                  belong to heretics will rest on him. At the same time, Paul
                  II. increased the pressure on the Czech Catholics and tried to
                  force them to renounce obedience to the King, accused of
                  heresy. On the&nbsp;<b>28th of November, 1465</b>, 16 catholic
                  lords from southern and western Bohemia gathered at the castle
                  of Zelená Hora near Nepomuk and created the Zelená Hora Union
                  - political opposition against the king Jiří. The King did not
                  intervene immediately because he did not want to plunge the
                  Czechs back into a devastating civil war. Nor did the Union
                  take any military action, for the lords well knew that Jiří
                  had complete military superiority. Thus, the two sides
                  concluded a long-term truce until February 1467. At the
                  intercession of Louis of Bavaria, Pope Paul II. extended the
                  period, during which Jiří was to appear in court, until the
                  end of 1466. But this did not happen, and so was the Czech
                  King, in the presence of four thousand people, excommunicated
                  from the church with his whole family and deposed from the
                  throne on&nbsp;<b>23rd of December 1466</b>. This encouraged
                  the Zelená hora union, and its representatives refused to
                  extend the armistice in February 1467. The Zelená hora union
                  also rejected reconciliation because its ranks gradually grew
                  with other Catholic Lords and cities. In March 1467, the pope
                  confirmed Zdeněk Konopišťský of Šternberk as the hauptmann of
                  the Zelená hora union and at the same time gave him a blessing
                  for the fight against heretics. An amicable solution was no
                  longer possible and so Jiří, on&nbsp;
                  <b>19th of April, 1467</b>, publicly challanged the pope to a
                  life and death fight, and appealed to the future church
                  council against the Pope Paul II. Immediately after the
                  release of this statement, Jiří issued declarations of war
                  against the Zelena Hora Union. The Union went on a deep
                  defense, and its hopes were pinned on organizing a crusade
                  against Jiří. Jiří&apos;s diplomatic efforts in recent years
                  were now paying off, and there was no one around the Czech
                  Kingdom who wanted to take on the organization and leadership
                  of the crusade. In particular, the Polish king and many
                  imperial Dukes openly defended Jiří. At the beginning of 1468,
                  however, Jiří&apos;s son, Victor, Duke of Münsterberg, invaded
                  Austria, where he plundered the estates of Emperor Frederick
                  III. The Emperor turned to the Hungarian king, Matthias
                  Corvinus, who had just freed his hands from the battles with
                  the Turks. In March 1468, in Trnava, Matthias Corvinus
                  declared war on Victor, and practically became the executor of
                  the papal curse. The Czech-Hungarian wars began, which lasted
                  more than 10 years. At first, Matthias Corvinus was more
                  successful, but in the course of 1469 the luck of the war
                  turned. Even though, Matthias had himself proclaimed the king
                  of Bohemia in May 1469 in Olomouc, with part of the czech
                  nobility being witness. He was never coronated however,
                  because the traditional place of coronation, the cathedral of
                  St. Vitus in Prague, as well as the coronation jewels, were
                  held by Jiří. Víta měl v držení Jiří z Poděbrad. Jiří&apos;s
                  health declines rapidly thoug, and during the preparation for
                  retaliatory campaign into Hungary, the king Jiří of Poděbrady
                  and Kunštát, dies on&nbsp;<b>March 22, 1471</b>.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
