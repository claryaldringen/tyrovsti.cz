import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import styles from '../../cz/akce/BavorskaValka.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export const BavarianWar = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="bavarian-war" />
        <h4>The Bavarian War</h4>
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <p>
          The Bavarian War of 1459 to 1463, also known as the Princes&apos; War,
          was a consequence of the expansionist efforts of the principalities.
          The Margrave of Brandenburg, Albert III Achilles of the House of
          Hohenzollern, who had by then already unified the Principalities of
          Bayreuth and Ansbach, stood against the Duke of Bavaria-Landshut,
          Louis IX, known as the Rich.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Bayerischer_Krieg_(1459%E2%80%931463)"
          />{' '}
          The so-called <i>Mainz Diocesan Feud</i>, also known as the{' '}
          <i>Baden-Palatinate War</i>, a military conflict over the seat of the
          Archbishop of Mainz, is sometimes considered part of this conflict.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Mainzer_Stiftsfehde"
          />
        </p>
      </Col>
      <ImageWithTitle
        src="LudvikIX.jpg"
        width={1200}
        height={747}
        title="Victory at the Battle of Giengen 1462, painting by Hans Werl, circa 1603"
      />
    </Row>
    <Row>
      <Col>
        <h5>Prelude</h5>
        <p>
          The Duke of Bavaria-Landshut, Louis IX the Rich (1450&ndash;1479),
          was, alongside Elector Frederick I of the Palatinate, known as the
          Victorious (1425&ndash;1476), and the Margrave of Brandenburg, Albert
          III Achilles (1414&ndash;1486), one of the most prominent figures
          among the German princes in&nbsp;the second half of the 15th century.
          His financial strength, which was based on a rich paternal inheritance
          and a well-functioning territorial administration, as well as his
          generosity and magnificent presentation, earned him a reputation for
          legendary wealth. In&nbsp;the field of imperial politics, he relied
          fundamentally on the Wittelsbach alliance system created jointly
          with&nbsp;Elector Frederick I of the Palatinate (both were
          Wittelsbachs). In particular, the Landfrieden alliance with&nbsp;Duke
          Albert III of Bavaria-Munich (also a Wittelsbach) and Count Palatine
          Frederick of <b>17 December 1451</b> held strong attraction for the
          princes, nobility, and cities in&nbsp;southern Germany. After the
          Swabian imperial cities, Duke Sigismund of Tyrol (1455) and the
          Bohemian King Ladislaus the Posthumous (1457) later also joined the
          Wittelsbach alliance system. In 1458, Duke Louis and Count Palatine
          Frederick renewed and strengthened their coalition through a lifelong
          alliance.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00159.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="Julius_Zimmermann_-_Ludwig_IX._der_Reiche_(geb._1417,_reg._1450-1479),_Herzog_von_Bayern-Landshut_-_4541_-_Bavarian_State_Painting_Collections.jpg"
        width={574}
        height={768}
        title="Louis IX of Bavaria, painting by the German painter Julius Zimmermann (1824&ndash;1906)"
      />
      <ImageWithTitle
        src="Albrecht_Achilles_auf_der_Predella_des_von_ihm_gestifteten_Schwanenordensaltars.jpg"
        width={1920}
        height={1440}
        title="Depiction of Albert Achilles on the predella of the Swan Order altar he donated (1484) in St. Gumbertus Church."
      />
      <ImageWithTitle
        md={3}
        src="Friedrich_der_Siegreiche_von_Albrecht_Altdorfer.jpg"
        width={882}
        height={1203}
        title="Frederick I of the Palatinate, painting by Albrecht Altdorfer (1480&ndash;1538)"
      />
    </Row>
    <Row>
      <Col>
        <p>
          But in particular, the relationship between Elector Frederick I of the
          Palatinate and&nbsp;Emperor Frederick III harboured a high potential
          for conflict, because the emperor never recognised the rule of the
          Count Palatine, which he had appropriated against the inheritance law
          of the Golden Bull. In addition, rivalry also arose between the Count
          Palatine and Margrave Albert III Achilles.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00159.html"
          />
          Albert Achilles attempted to expand his jurisdiction and thereby his
          influence over neighbouring territories. For this reason, he elevated
          the Landgericht in Nuremberg, where he held the office of burgrave and
          thus had this court subordinate to him, to an imperial court. In this
          way, he asserted his claim to unlimited jurisdiction through the
          Nuremberg court for the entire Empire and, in the name of the emperor
          as supreme judge, claimed the right to take over court proceedings
          from all regions. This would have meant that he could influence the
          jurisprudence of neighbouring principalities and, as a higher court,
          could overturn decisions of subordinate courts. Behind Albert
          Achilles&apos; efforts was also the idea of restoring the Franks under
          Hohenzollern dominion. In combination with ducal dignity, this idea
          remained alive for a long time in the Prince-Bishopric of
          W&uuml;rzburg, without ever becoming reality again.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Bayerischer_Krieg_(1459%E2%80%931463)"
          />
          Albert III thus inevitably came into conflict with&nbsp;the Count
          Palatine of the Rhine and&nbsp;in Mosbach, with&nbsp;the Franconian
          bishoprics, and finally also with&nbsp;Duke Louis IX.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00160.html"
          />
        </p>
        <p>
          On the other hand, princes in&nbsp;south-western Germany, who also
          felt threatened by the expansionist territorial policy of Count
          Palatine Frederick I the Victorious, joined the margrave&apos;s
          policy. The so-called anti-Palatinate alliance between the Margrave of
          Brandenburg, Duke William of Saxony, Margrave Charles of Baden, Count
          Ulrich of W&uuml;rttemberg-Stuttgart, and the Archbishop of Mainz,
          Diether von Isenburg, was, like the renewed Wittelsbach alliance,
          concluded in 1458. This prepared the ground for a decisive
          confrontation. And the appropriate trigger for the outbreak of
          conflicts indeed did not take long to appear.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00159.html"
          />
        </p>
        <p>
          Although the Duchy of Bavaria-Landshut was also affected by the
          interventions of the Nuremberg court, the good personal relationship
          between Margrave Albert III Achilles and Duke Louis IX prevented the
          territorial rivalry from escalating into open hostility until 1458. On
          the other hand, Margrave Albert remained a loyal defender of imperial
          interests in&nbsp;the Empire throughout his life. Rarely, however,
          could he gain any benefit from this for his own goals. It was
          precisely in the emerging confrontation between the Wittelsbachs and
          the Empire that he saw an opportunity to combine imperial interests
          with his plans regarding the Nuremberg Landgericht by acting as the
          emperor&apos;s representative while still primarily defending his own
          interests against his territorial neighbours in&nbsp;Franconia and
          Bavaria.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00160.html"
          />
        </p>
        <p>
          This became clearly apparent when the conflict with&nbsp;the
          Wittelsbachs actually materialised. After Duke Louis IX &ndash;
          initially still with&nbsp;the help of Margrave Albert &ndash; occupied
          the free imperial city of Donauw&ouml;rth, strategically important for
          controlling the Danube, in&nbsp;October 1458, in order to incorporate
          it into his duchy on the basis of old legal claims, Emperor Frederick
          III pronounced the imperial ban over him on <b>4 June 1459</b>. As its
          executor, he appointed &ndash; at his own request &ndash; alongside
          Duke William of Saxony, also Margrave Albert. Thanks to his alliance
          with&nbsp;the Habsburgs, Archduke Albert of Austria and with Duke
          Sigismund of Tyrol at his back, and with the beginning recruitment of
          mercenaries in&nbsp;Bohemia, Louis IX felt strong enough to wage war
          against the Empire. Open conflict between the Landshut duke and Albert
          of Brandenburg now seemed to be only a matter of time. Suddenly,
          however, Duke Louis was unexpectedly deprived of the prospect of
          numerous mercenaries from&nbsp;Bohemia and thus his hope for a
          decisive military striking force. Following the intervention of Pope
          Pius II and due to as yet unresolved disputed territorial points
          with&nbsp;Bavaria, the Bohemian King George of Poděbrady forbade his
          countrymen from serving as mercenaries for Duke Louis. On{' '}
          <b>16 July 1459</b> Louis had to surrender Donauw&ouml;rth to the
          emperor and appear before&nbsp;the princely arbitration court.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00160.html"
          />
        </p>
        <p>
          The so-called &ldquo;blind verdicts&rdquo; of the arbitration court,
          which sat in&nbsp;July 1459 in&nbsp;Nuremberg, were a one-sided
          success of the diplomacy of the Margrave of Brandenburg (127).
          In&nbsp;the essential points, the decision went against the interests
          of the Wittelsbachs, and also in&nbsp;the important question of the
          jurisdiction of the Nuremberg court, the vague formulation of the
          arbitration court allowed an interpretation in the sense of Margrave
          Albert. The tension between the parties in&nbsp;the Empire thus
          continued, so that a new outbreak of open hostilities remained only a
          matter of time.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00160.html"
          />
        </p>
        <p>
          To prevent a situation similar to the dispute over Donauw&ouml;rth,
          the Wittelsbachs jointly sought to improve relations between Duke
          Louis IX and Bohemia. Between the autumn of 1459 and the autumn of
          1460, they actually succeeded in progressing from cautious
          rapprochement to&nbsp;a firm bond, which was even underpinned by the
          betrothal between King George&apos;s daughter Ludmila and Duke Louis
          IX&apos;s son George. The background was the plan of the Wittelsbach
          adviser Martin Mair to make the Bohemian king German king against the
          emperor&apos;s will and thereby increase the Empire&apos;s capacity
          for action. A plan for which the Bohemian king was absolutely
          enthusiastic, but which ultimately failed due to the lack of support
          from the princes around Margrave Albert III of Brandenburg loyal to
          Emperor Frederick III. This rejection finally brought King George
          definitively to the side of the Wittelsbachs, with whom he concluded
          an alliance primarily against Margrave Albert, but thereby ultimately
          also against the emperor.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
        <p>
          On the basis of these changing relations with&nbsp;George of
          Poděbrady, Bavarian war preparations took shape rapidly in the spring
          of 1460. Duke Louis again relied primarily on mercenaries
          from&nbsp;Bohemia, of whom at least 5,000 entered his service that
          year. Some Czech condottieri stand out particularly for the size of
          their mercenary contingents: Dobrohost of Ronsperg and
          Hor&scaron;ovsk&yacute; T&yacute;n brought more than 1,300 mercenaries
          into the service of Duke Louis, Racek of Janovice and R&yacute;zmberk
          about 1,000, and Mikul&aacute;&scaron; Kapl&iacute;ř of Sulevice and
          Vimperk was represented in the ducal army by about 900 men. In
          addition, several other condottieri and mercenary commanders had
          strong contingents of up to several hundred men.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Course of the War</h5>
        <p>
          In March 1460, open armed conflict broke out, conducted according to
          the traditional forms of feud. When Count Ulrich V of W&uuml;rttemberg
          (ruled 1433&ndash;1480) and Count Palatine Louis of the
          Palatinate-Zweibr&uuml;cken, allies of Albert III Achilles, attacked
          the Electorate of the Palatinate as part of the Baden-Palatinate War,
          Louis the Rich took the side of Elector Frederick of the Palatinate
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Bayerischer_Krieg_(1459%E2%80%931463)"
          />{' '}
          and, under the pretext of implementing the alliance treaty, had his
          long-prepared troops march against Margrave Albert into Hohenzollern
          Franconia. The ducal army had a clear superiority over the
          margrave&apos;s army and achieved some rapid successes. First, the
          main direction of the Bavarian attack turned against the Bishopric of
          Eichst&auml;tt, because Bishop Johann von Eich was an ally of Margrave
          Albert. After a short siege, the city of Eichst&auml;tt fell on{' '}
          <b>7</b> to <b>11 April 1460</b> into the hands of the duke, and
          Bishop Johann was forced to sign a treaty that permanently severely
          restricted the independence of his bishopric vis-&agrave;-vis Bavaria.
          In mid-April, Duke Louis continued his campaign in Franconia and
          marched through Heideck and Hilpoltstein to the small margravial town
          of Roth, which he began to besiege on <b>27 April 1460</b>. With a
          short interruption between 30 April and 3 May, caused by supply
          difficulties, the army, by then probably about 20,000 men strong, now
          set up a fortified camp at Roth, from which reconnaissance raids by
          individual mercenary contingents were repeatedly launched into
          margravial territory. Among other things, the town of Windsbach was
          set ablaze and the duke&apos;s Czech mercenaries plundered the
          Augustinian monastery in Pillenreuth near Nuremberg.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
        <p>
          On <b>5 May 1460</b>, Margrave Albert appeared before Roth with an
          army of about 10,000 men and encamped with it at a &ldquo;cannon
          shot&apos;s distance&rdquo; from the Bavarian military camp. During
          the following seven weeks, no major battles that might have been
          decisive for the course of the war took place, even though the
          opponents lay so close to each other. Instead, there were almost daily
          smaller skirmishes between the camps or mutual shelling from the
          Wagenburg. At the same time, further reinforcements arrived before
          Roth, so the armies continued to grow. Duke Louis is said to have
          eventually had about 30,000 men in his army, the margrave several
          thousand fewer. Given the dramatically tense situation before the
          besieged Roth, in which neither side was willing to yield, a decisive
          battle could have broken out at any moment. Meanwhile, however,
          diplomatic efforts for a peaceful resolution of the conflict were
          again increasing on both sides and soon brought their first successes,
          even though both main opponents were hardly inclined towards peace.
          Duke Louis considered himself the military victor of the war, while
          Margrave Albert demanded the withdrawal of the Bavarian army before he
          was willing to negotiate at all. Only the threatened disintegration of
          his army through the departure of Saxon allies finally forced Margrave
          Albert to yield. The result of the conciliation negotiations was the
          so-called <i>Roth Directive</i> of <b>24 June 1460</b>, which appears
          as a complete success of Wittelsbach policy. The &ldquo;blind
          verdicts&rdquo; from&nbsp;Nuremberg were annulled, the jurisdiction of
          the Nuremberg court was considerably restricted, the Bishopric of
          Eichst&auml;tt remained under Bavarian influence, and Duke Louis did
          not have to evacuate the occupied margravial territories. Regarding
          further disputed issues, such as compensation for war costs or the
          evacuation of occupied areas, the Bohemian King George of Poděbrady
          was to serve as arbitrator. When on <b>4 July 1460</b> Count Palatine
          Frederick also defeated his opponents at the Battle of Pfeddersheim,
          it seemed that the Wittelsbachs and their allies were triumphing all
          along the line.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00162.html"
          />
        </p>
        <p>
          The fragile peace, however, was once again not to last. In&nbsp;the
          following months, Margrave Albert of Brandenburg repeatedly sought to
          repudiate his recent recognition of the <i>Roth Directive</i>. In
          contrast, Louis of Bavaria-Landshut insisted on his acquired
          territorial positions in&nbsp;Franconia without accommodating the
          mediators&apos; efforts at compromise. Meanwhile, he knew that the
          Bohemian King George, who had definitively turned away from Margrave
          Albert due to the rejection of the proposal regarding the election of
          a German king, was more than ever on his side.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00163.html"
          />
        </p>
        <p>
          Besides King George, another important link in the Wittelsbach
          alliance system was Archduke Albert VI of Austria, brother and
          dynastic rival of the emperor. When he launched open war against the
          emperor in&nbsp;the summer of 1461 in the dispute over the Austrian
          inheritance of Ladislaus the Posthumous, who had died in 1457, this
          also triggered another round of disputes between the Wittelsbachs and
          Margrave Albert of Brandenburg with&nbsp;their respective allies. Duke
          Louis&apos;s military alliance aid to Archduke Albert provided Emperor
          Frederick with a pretext to declare war on him in&nbsp;July 1461. As
          Imperial Captains, he appointed alongside Margrave Charles of Baden
          and Count Ulrich of W&uuml;rttemberg also Margrave Albert III
          Achilles, who saw in this an opportunity to revise the{' '}
          <i>Roth Directive</i>. Just as in 1459 in the dispute over
          Donauw&ouml;rth, Albert here combined imperial policy with&nbsp;his
          hegemonic policy in&nbsp;southern Germany and Austria.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00163.html"
          />
        </p>
        <p>
          Similar to the previous year, Duke Louis was better prepared for the
          approaching conflict than his opponent. Already in&nbsp;the early
          summer of 1461, he began war preparations, which again included
          successful recruitment of mercenaries in&nbsp;Bohemia. At least 2,000
          Czechs entered his service from August, strengthening the ducal army,
          which with a total of 16,000 men far exceeded the army of Margrave
          Albert. Racek of Janovice and R&yacute;zmberk sent about 500
          mercenaries, Přib&iacute;k &Scaron;atava arrived with&nbsp;more than
          400 men from&nbsp;southern Bohemia, Jan Jenec of Janovice and
          Petr&scaron;purk with&nbsp;about 250 men from western Bohemia, these
          being the largest contingents. In addition, active military support
          from the Bohemian king, who declared feud against the margrave and had
          a strong army march against the Upper Franconian territories of the
          Hohenzollerns, was also provided. Even though the military success of
          this deployment remained limited, it nevertheless tied down important
          forces of the margrave that he urgently needed on the main theatre of
          war in Central Franconia.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00164.html"
          />
        </p>
        <p>
          This time, Duke Louis advanced with his army even deeper into
          margravial territory than the year before. Neustadt an der Aisch and
          Uffenheim were conquered, Windsbach, Heilsbronn, and other places
          severely damaged. In total, at the very beginning of the campaign, 18
          margravial towns, places, and castles are said to have fallen into the
          hands of the Bavarian duke, who, together with&nbsp;the contingents of
          the allied Franconian bishops and Count Palatine Frederick, dominated
          the battlefield. Margrave Albert, who waited in vain for the promised
          reinforcements from his allies, had to limit himself to holding
          Ansbach and Schwabach and from there launching occasional raids
          against the ducal army. Only when in&nbsp;October the allies left Duke
          Louis&apos;s army for various reasons and the strained supply
          situation, which worsened further with the onset of adverse weather,
          showed the necessity of splitting the army, did the situation
          gradually change. Decisive, however, was the behaviour of the Bohemian
          king, who accepted the role of mediator offered by the emperor,
          withdrew the Czech contingents from&nbsp;Upper Franconia, and called
          upon Duke Louis to also release the Czech mercenaries serving under
          him. Margrave Albert immediately exploited the ensuing Bavarian
          retreat by recapturing in rapid succession almost all the places
          occupied by the Bavarians.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00164.html"
          />
        </p>
        <p>
          When the disputing parties finally met in&nbsp;November 1461
          in&nbsp;Prague to discuss the possibilities of concluding peace
          through King George, the chances of reaching an agreement were thus
          scarcely better than before the start of the war. While Duke Louis was
          unwilling to go back beyond the provisions of the{' '}
          <i>Roth Directive</i> and instead made ever more extravagant demands
          for war compensation, the margrave, after his recent successes, no
          longer felt like the defeated party and therefore showed little
          willingness to even participate in negotiations. He ignored the
          ceasefire concluded in&nbsp;December with the argument that it had no
          validity for the as yet unfinished imperial war against Duke Louis.
          And when Margrave Albert was certain that the emperor had his back, he
          indeed renewed the war against the Wittelsbachs in&nbsp;January 1462.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00165.html"
          />
        </p>
        <p>
          In 1462, however, unlike the previous year, Emperor Frederick&apos;s
          appeals to the imperial cities to fight against Duke Louis took
          effect. The balance of power thus developed differently this time than
          in the campaigns of 1460 and 1461. The Swabian cities, led by Augsburg
          and Ulm, now actively participated in the war against Duke Louis,
          which this time also shifted the centre of gravity of military
          operations more into the Swabian area. However, the imperial army was
          unable to exploit its initial superiority. Duke Louis managed
          relatively quickly to assemble a strong army again &ndash; once more
          with strong participation of mercenaries from&nbsp;Bohemia, whose
          number, however, cannot be determined for this year. In addition, the
          Bohemian king also resumed war against the margravial areas around
          Wunsiedel. With two great successes in the summer, it then seemed that
          the decision was finally falling in favour of the Wittelsbachs. On{' '}
          <b>30 June 1462</b>, Count Palatine Frederick managed to win a
          crushing victory over his opponents from south-western Germany at the
          Battle of Seckenheim, in which Margrave Charles of Baden and Count
          Ulrich of W&uuml;rttemberg were taken prisoner by the Palatinate. A
          similar success was also achieved by Duke Louis of Bavaria-Landshut
          with his victory over the imperial army led by Margrave Albert on{' '}
          <b>19 July 1462</b> at Giengen.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00165.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className={styles.factbox}>
          <h6>The Baden-Palatinate War and the Battle of Seckenheim</h6>
          <p>
            It was part of the archiepiscopal dispute over the occupation of the
            Mainz archdiocese, also known as the Baden-Palatinate War. In 1459,
            the cathedral administrator Diether von Isenburg was elected new
            Archbishop of Mainz by a narrow majority over Adolf von Nassau. The
            price for this election was joining the anti-Palatinate alliance,
            and Diether was thus forced to march against Count Palatine
            Frederick I, but on <b>4 July 1460</b> he lost the decisive Battle
            of Pfeddersheim. In 1461, Diether convened a princely diet in
            Nuremberg, where he advocated for imperial and ecclesiastical
            reforms. He emphatically demanded the abolition of papal annate
            requirements through a general council. His critical stance towards
            Pope Pius II and Emperor Frederick III led to his deposition and
            excommunication by the pope on <b>21 August 1461</b>.
            <Qt
              publication={PUBLICATIONS.WIKI}
              href="https://de.wikipedia.org/wiki/Diether_von_Isenburg"
            />{' '}
            The pope then installed his rival Adolf von Nassau on the
            archiepiscopal throne in Mainz on <b>1 October 1461</b>. Diether,
            however, refused to relinquish the archbishopric, supported by the
            city of Mainz, his brother Louis, and now also his former enemy
            Frederick I of the Palatinate, who in return for his help received
            the towns of Lorsch, Heppenheim, and Bensheim. Adolf allied himself
            with the Archbishop of Trier, John II of Baden, Bishop George of
            Metz, Bishop John II von Hoheneck of Speyer, and Count Ulrich V of
            W&uuml;rttemberg. Margrave Charles I of Baden initially attempted to
            mediate between the warring factions, but then took Adolf&apos;s
            side alongside his brother, Bishop George of Metz, which led to the
            Baden-Palatinate War, an attempt at the forcible conquest of the
            diocese.
            <Qt
              publication={PUBLICATIONS.WIKI}
              href="https://de.wikipedia.org/wiki/Mainzer_Stiftsfehde"
            />
          </p>
          <p>
            The opponents of Frederick I intended to invade the Palatinate from
            the south, as they believed the elector was with his troops in
            Bavaria to help Duke Louis IX against Albert III Achilles, and
            therefore assembled an army of 10,000 men near Pforzheim. A military
            camp was set up between Roth and St. Leon, and cavalry composed of
            princes and knights burned the surrounding fields and villages and
            massacred the inhabitants. Frederick I ordered his vassals and their
            men-at-arms to assemble at Leimen, where he could unobtrusively
            gather his forces. He himself did not arrive until 29 June and from
            there observed the nocturnal activities of his enemies. Couriers
            were sent to the Archbishop of Mainz, Diether von Isenburg, the
            Counts of Leiningen and Katzenelnbogen, who were on the left bank of
            the Rhine and were ready to march through Altrip to Lower
            Dossenwald. The number of fighters who pinned walnut leaves to their
            garments &ndash; the identifying marks of the Palatinate forces
            &ndash; increased due to the great influx of peasants from the
            region. The Baden forces, on the other hand, pinned tufts of oats to
            their garments.
            <Qt
              publication={PUBLICATIONS.SECKENHEIM}
              href="https://www.historisches-seckenheim.de/index.php/ortsgeschichte/123-schlacht-bei-seckenheim"
            />
          </p>
          <p>
            On the night of 30 June, he marched with about 300 horsemen and
            additional infantry through the Schwetzingen Forest to
            &ldquo;Frohnholz&rdquo; (today&apos;s Dossenwald) south of
            Seckenheim, which the imperial forces intended to burn down the
            following day. During the march, the Palatinate forces were
            reinforced by a further approximately 300 horsemen and additional
            infantry from the contingents of the Archbishop of Mainz, Diether
            von Isenburg, and Count Philipp von Katzenelnbogen.
            <Qt
              publication={PUBLICATIONS.SECKENHEIM}
              href="https://www.historisches-seckenheim.de/index.php/ortsgeschichte/123-schlacht-bei-seckenheim"
            />
          </p>
          <p>
            When the imperial attackers set out from their fortified camp the
            following morning and advanced on Seckenheim with 700 to 800
            horsemen to burn it down, they were unexpectedly attacked from
            behind by 600 horsemen of the Palatinate side, with the battle cry
            of the Count Palatine: <Cit>Hut Palatzgraff oder nimmer mee!</Cit>{' '}
            (Hold on, Count Palatine, or never more!)
            <Qt
              publication={PUBLICATIONS.SECKENHEIM}
              href="https://www.historisches-seckenheim.de/index.php/ortsgeschichte/123-schlacht-bei-seckenheim"
            />
            , while the infantry of about 2,000 men was kept by Frederick I out
            of sight in a nearby forest. Frederick&apos;s less numerous cavalry
            adopted an echelon formation with men-at-arms in the centre and two
            rows of mounted archers on the flanks. After a brief initial
            exchange of fire, the heavy cavalry of both armies charged at each
            other, and Frederick&apos;s knights only barely prevented the allied
            men-at-arms from breaking through. While the horsemen fought each
            other, Frederick&apos;s infantry emerged from its hiding place and
            encircled the imperial allies. A group of about 300 allied horsemen
            did manage to break out and then attacked the Palatinate grooms who
            were waiting for their men-at-arms and killed them, but this no
            longer changed the outcome of the battle.
            <Qt
              publication={PUBLICATIONS.WIKI}
              href="https://en.wikipedia.org/wiki/Battle_of_Seckenheim"
            />
            Ulrich of W&uuml;rttemberg refused to accept defeat but was
            challenged to a duel by Hans von Gemmingen, who cried:{' '}
            <Cit>Zkusím štěstí s Vaší Milostí!</Cit> (I shall try my luck with
            Your Grace!) and was defeated. 45 allied knights were killed and
            approximately 400 more horsemen captured. The rest scattered across
            the surrounding area and brought the terrible news to the camp at
            St. Leon. There they set off on the return journey in panic, fearing
            the vengeance of the Count Palatine and his enraged subjects. The
            Palatinate army achieved a decisive victory, killing 45 knights and
            capturing 124 nobles and 204 squires, while losing 12 of its own
            knights killed. Among the prisoners were three enemy leaders:
            Margrave Charles I of Baden with 40 nobles and 79 squires, Count
            Ulrich of W&uuml;rttemberg with 45 nobles and 71 squires, and Bishop
            George of Metz with 39 nobles and 53 squires. Only Louis of
            Zweibr&uuml;cken escaped capture. By the following year, the princes
            were ransomed for large sums and significant territories.
            <Qt
              publication={PUBLICATIONS.SECKENHEIM}
              href="https://www.historisches-seckenheim.de/index.php/ortsgeschichte/123-schlacht-bei-seckenheim"
            />
          </p>
          <Link href="/images/Feldplan960.jpg" target="_blank">
            <Image
              src="/images/Feldplan960.jpg"
              width={734}
              height={960}
              alt="Field campaign plan from July 1462"
              className="fit"
            />
          </Link>
          <p>
            <br />
            The diocesan feud, however, was not yet over. Further fighting
            claimed many victims and caused devastation everywhere, and the city
            of Mainz itself suffered serious damage. On the night of{' '}
            <b>28 October 1462</b>, Adolf von Nassau managed to penetrate the
            city with 500 men through the Gautor by the treachery of Mainz
            citizens, and after 12 hours of street fighting, he seized control.
            400 people lost their lives and Adolf&apos;s men plundered and
            burned the city, including the Dominican monastery. As
            &ldquo;punishment&rdquo; for supporting Diether, Adolf stripped the
            city of its freedom privileges and thereby its status as a free
            city; the city came under the administration of a Vicedominus
            appointed by the archbishop. The following day, the citizens were
            summoned to the Dietmarkt. All 800 citizens who appeared were
            expelled from the city; about 400 of them were readmitted somewhat
            later and allowed to remain in Mainz.
            <Qt
              publication={PUBLICATIONS.WIKI}
              href="https://de.wikipedia.org/wiki/Mainzer_Stiftsfehde"
            />
          </p>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Even these Wittelsbach successes, however, did not end the war.
          Instead, the heavy burden on Bavarian finances from conducting the
          war, primarily through the large mercenary army, became apparent. The
          resources of Duke Louis the Rich were exhausted. Shortly after his
          triumph at Giengen, he therefore felt compelled to dismiss the
          greatest part of his mercenaries, which once again changed the
          military situation. From now on, the scene in&nbsp;southern Germany
          was shaped by ongoing petty warfare with alternating successes.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00165.html"
          />
        </p>
        <p>
          In addition, meetings for negotiations took place again to finally
          settle the conflicts. After the ceasefire concluded at the end of
          August 1462 in&nbsp;Nuremberg, further arduous negotiations followed.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00166.html"
          />{' '}
          Only a year later, in July 1463, a peace congress was held in Prague
          under the leadership of the Bohemian King George of Poděbrady, who had
          in the meantime reconciled with&nbsp;Emperor Frederick III. With this
          initiative, the Utraquist king hoped to avert the excommunication
          threatened by Pope Pius II. After complex negotiations, a peace
          agreement consisting of several individual treaties was concluded on{' '}
          <b>22 and 23 August 1463</b>.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Prager_Frieden_(1463)"
          />{' '}
          The so-called <i>Peace of Prague</i> did not resolve all disputed
          issues, but it nevertheless proved lasting. Both sides had to make
          concessions. While Margrave Albert III Achilles had to definitively
          abandon his plans for the domination of Franconia, which he had sought
          to achieve by strengthening the Nuremberg Landgericht, Duke Louis IX
          was obliged to evacuate the still-occupied margravial territories and
          settle all compensation claims with the margrave. Nevertheless, he did
          manage to defend himself, which can be evaluated as a success in his
          case. A success for which he owed primarily to his strong mercenary
          army, which was to a large extent &ndash; probably even in the
          majority &ndash; composed of Czech mercenaries.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00166.html"
          />
        </p>
      </Col>
    </Row>
  </>
)
