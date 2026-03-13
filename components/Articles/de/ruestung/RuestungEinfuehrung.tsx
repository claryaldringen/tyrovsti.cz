import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const RuestungEinfuehrung = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="armour" />
        <h3>Rüstung{draft && <DraftBadge />}</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Entwicklung der Rüstung</h4>
        <p>
          Die frühesten Belege für die Rüstung unserer Vorfahren liefern neben
          spärlichen archäologischen Funden traditionell schriftliche Quellen.
          Hinweise auf Rüstungen finden sich beispielsweise in arabischen
          Quellen — Ibn Rusta berichtet über Fürst Svatopluk, dass:{' '}
          <Cit>Er gute, starke, kostbare Rüstung besitzt</Cit>. Die Fuldaer
          Annalen berichten, wie die Tschechen im Jahr 849 bei einem deutschen
          Einfall den besiegten Deutschen die Rüstungen abnahmen:{' '}
          <Cit>
            …Denn die Feinde, die die Oberhand gewonnen hatten, metzelten sie
            nieder und verfolgten sie bis zu ihrem Lager, und indem sie den
            Erschlagenen vor ihren Augen ohne Bedenken die Rüstungen abzogen,
            erfüllten sie sie mit solcher Furcht, dass sie jede Hoffnung auf
            Flucht völlig aufgaben…
          </Cit>
          . Im Jahr 936 beschreibt Widukind, wie die Deutschen ihrerseits
          gefallenen Tschechen die Rüstung abnahmen. Dies dokumentiert gut eine
          der bevorzugten Methoden des Erwerbs von Ausrüstung und Waffen. In der
          Christianslegende aus dem 10. Jahrhundert wird Rüstung im Zusammenhang
          mit einer geplanten Revolte gegen Fürst Bořivoj erwähnt — seine Gegner
          kamen zum Landtag und trugen <Cit>Panzer unter ihren Gewändern</Cit>,
          ebenso wie seine eigenen Leute. Rüstung wird auch von Cosmas im 11.
          Jahrhundert und dem Mönch von Sázava im 12. Jahrhundert erwähnt. Der
          Kanoniker von Vyšehrad berichtet, wie bei der Schlacht von Chlumec im
          Jahr 1126 der fürstliche Kaplan Vít,{' '}
          <Cit>in Rüstung und Helm gekleidet wie Achilles…</Cit>, als
          Bannerträger des böhmischen Heeres diente. Rüstung wird von Vincentius
          und anderen Autoren des 12. Jahrhunderts erwähnt. Aus den genannten
          Quellen und Berichten ist die weitverbreitete Verwendung hochwertiger
          Waffen und Rüstungen deutlich erkennbar, zumindest im Umfeld der
          Berufskrieger fürstlicher Gefolgschaften.
          <Qt
            publication={PUBLICATIONS.TOMIC}
            href="https://curiavitkov.cz/2004/07/20/cas-valky-vystroj-zbroje/"
          />
        </p>
        <p>
          Diese frühesten Rüstungen waren am häufigsten Kettenpanzer
          (alttschechisch <i>brň</i>), aber auch Schuppen-, Lamellen- und
          faleristische Panzerung (auf einen Untergrund aufgenähte Ringe) werden
          angenommen. Vom Ende des 12. Jahrhunderts an wurde jedoch
          ausschließlich Kettenpanzerung verwendet. Ihr Prinzip — miteinander
          verflochtene Ringe — war bereits den antiken Kelten bekannt, von denen
          die Römer es übernahmen, und als Kriegsbeute gelangte es oft weit über
          die Grenzen des Reiches hinaus (z. B. nach Dänemark, wo ein
          Rüstungsfund aus Vimose in das 2.–3. Jahrhundert n. Chr. datiert
          wird). Nach dem Untergang Roms wurde die Technologie zur Herstellung
          dieser Rüstungen im Westen praktisch vergessen und überlebte nur in
          Byzanz und im byzantinischen Einflussbereich, später auch in der
          arabischen Welt. Durch Handelskontakte oder als Kriegsbeute gelangte
          sie später nach Skandinavien, in das Frankenreich, nach Britannien und
          in unsere Länder. Auf den Import fertiger Rüstungen folgte allmählich
          auch die Technologie der Kettenherstellung selbst.{' '}
          <Qt
            publication={PUBLICATIONS.TOMIC}
            href="https://curiavitkov.cz/2004/07/20/cas-valky-vystroj-zbroje/"
          />
        </p>
        <p>
          Zu jener Zeit waren Helme die einzige Plattenarbeit. Die frühesten
          konischen Helme wurden aus vier und später zwei Teilen genietet. Im 9.
          Jahrhundert erschienen konische Helme, die aus einem einzigen Stück
          geschmiedet waren, was technologisch anspruchsvoller war, da für einen
          solchen Helm ein größeres intaktes Stück Blech benötigt wurde.
          Allgemein waren Plattner im Laufe der Geschichte vor allem durch die
          Größe des Ausgangsbleches begrenzt. Der berühmteste solche Helm ist
          der sogenannte <i>Helm des Heiligen Wenzel</i>.{' '}
          <Qt
            publication={PUBLICATIONS.TOMIC}
            href="https://curiavitkov.cz/2004/12/19/cas-valky-vystroj-prilby/"
          />
        </p>
        <p>
          Im Laufe des 13. Jahrhunderts begann man, Gelenke mit anatomisch
          geformten Metallplatten zu bedecken.
        </p>
        <p>
          Im Laufe des 15. Jahrhunderts setzte sich bei der schweren Reiterei
          die Bedeckung aller Körperteile mit anatomischen Platten endgültig
          gegenüber dem Kettenpanzer (alttschechisch <i>brní</i>) durch, der nur
          noch als Ergänzung weiterverwendet wurde. Die Rüstung differenzierte
          sich zudem allmählich nach ihrem Verwendungszweck in Feldrüstung, die
          die Bewegungsfreiheit des Trägers so weit wie möglich bewahrte, und
          Turnierrüstung, bei der der Schwerpunkt vornehmlich auf dem passiven
          Schutz lag. In diesem Jahrhundert verbreitete sich die Verwendung von
          Plattenrüstung (oft nur teilweise) auch bei der städtischen und
          söldnerischen Infanterie, die eine zunehmend wichtige Rolle in den
          Schlachten spielte. Dank disziplinierter kollektiver Kampfmethoden
          gelang es ihr im Laufe der Jahre, selbst die schwere Reiterei mit
          steigender Häufigkeit zu besiegen.
        </p>
        <p>
          Bereits zu Beginn des 15. Jahrhunderts entstanden die wichtigsten
          europäischen Zentren der Rüstungsproduktion in Norditalien (Mailand),
          Süddeutschland (Nürnberg, Augsburg und Landshut) und Tirol
          (Innsbruck). In diesen Zentren der Waffenproduktion entstanden
          stilistisch unterschiedliche Formen, die dann das gesamte Jahrhundert
          dominierten und als italienische/Mailänder und deutsche Rüstung
          bezeichnet wurden. In Mailand wurde die Familie Missaglia für die
          Rüstungsproduktion berühmt. Diese verzweigte Familie, ursprünglich
          Negroni genannt, erhielt ihren Namen von einer kleinen Stadt in der
          Lombardei, aus der der Begründer ihres Plattnerruhms, Pietro, der vor
          1429 starb, offenbar stammte. Den größten Ruhm erlangten seine
          Nachfolger Tommaso und besonders Antonio (ca. 1416–1496), der die
          Werkstatt von 1452 bis zu seinem Tod leitete. Die Missaglias
          arbeiteten im 15. Jahrhundert für führende italienische Adlige wie die
          Visconti, Gonzaga und Sforza. Unter den berühmten deutschen
          Plattnerdynastien waren die Helmschmied aus Augsburg und die
          Seusenhofer aus Innsbruck. Erstere waren von der zweiten Hälfte des
          15. Jahrhunderts bis zur zweiten Hälfte des folgenden Jahrhunderts
          tätig. Der erste urkundlich belegte Plattner aus dieser Familie war
          Georg, der ungefähr zwischen 1438 und 1490 tätig war. Den größten Ruhm
          erlangte dann sein Sohn Lorenz, geboren vermutlich zwischen 1445 und
          1450, der zwischen 1467 und 1515 arbeitete und 1491 von Maximilian I.
          zum kaiserlichen Hofplattner ernannt wurde. Dann Lorenz&apos; Sohn
          Kolman (1471–1532), bekannt beispielsweise für Rüstungen für Karl V.,
          und Lorenz&apos; Enkel Desiderius (1513–1578), der unter anderem für
          den spanischen König Philipp II. arbeitete.
          <Qt publication={PUBLICATIONS.BROZEK} />
        </p>
        <p>
          In Prag gründeten die Plattner im Jahr 1328 eine Organisation. Im Jahr
          1329 erwarb ein Plattner namens Klebel das Altstädter Bürgerrecht, und
          nach ihm registrierten sich bis 1393 weitere 24 Meister. Einer von
          ihnen, Henricus, kam 1354 aus dem italienischen Como, ein anderer aus
          Týnec, Kolín, Beroun oder Chrudim. Im Jahr 1351 wurde Rudl als erster
          Plattner unter den Ratsherren in der Altstadt verzeichnet. Während der
          Hussitenkriege sind der Plattner Vůz (1423) und der Helmschmied Jakub
          (1422) unter den Altstädter Ratsherren dokumentiert. Bis 1526 kamen 26
          weitere Plattnermeister hinzu, von denen einer (nach 1477) aus Vlašim
          stammte. In den Stadtbüchern sind Plattner nicht selten und finden
          sich stets unter den wohlhabenden Bürgern, doch nur 4 aus beiden
          Prager Städten kamen 1524 zur Eidesleistung. Wir haben somit die
          folgenden namentlich dokumentierten Plattner:{' '}
        </p>
        <ul>
          <li>
            Ab 1439: Henricus Hemrle, der ein Haus in der Ostrožnická
            (Platnéřská) Straße besaß.
          </li>
          <li>
            Aus der Mitte des 15. Jahrhunderts: thorifex Kříž, dessen Besitz
            1463 als herrenloses Gut eingezogen wurde.
          </li>
          <li>Ab 1454: Janek Legát.</li>
          <li>Ab 1463: Plattner Vocásek.</li>
          <li>Ab 1464: Plattner Smetana.</li>
          <li>Ab 1472: Plattner Škoda.</li>
          <li>Ab 1473: Plattner Duchek Popel.</li>
          <li>
            Ab 1477: Havel Kabela (Cabela), der gemeinsam mit Duchek einen
            Amboss gekauft hatte.
          </li>
          <li>Ab 1479: Plattner Pivce Václav und Jan Dúbek.</li>
          <li>Ab 1483: Plattner Sladký.</li>
          <li>Ab 1516: Plattner Jan Pivce, vielleicht Václavs Sohn.</li>
        </ul>
        <p>
          Unter den Plattnern, die nicht ansässige Einwohner der Stadt waren,
          ist im Jahr 1486 Jan Biberka dokumentiert, der schmählich aus der
          Neustadt floh. Ab 1454 ist auch eine Plattnerin namens Křížová bekannt
          <Qt
            publication={PUBLICATIONS.WINTER2}
            href="https://kramerius5.nkp.cz/view/uuid:660b7500-029f-11e4-9789-005056827e52?page=uuid:640bded0-1d56-11e4-8413-5ef3fc9ae867"
          />
          , vermutlich die Ehefrau von Kříž.
        </p>
        <p>
          Obwohl die Plattner in Prag möglicherweise schon vor 1328 eine
          Organisation hatten, brachten sie ihre Statuten erst später,
          vielleicht 1336, zur Bestätigung ins Rathaus, und zwar nur die Artikel
          über Lehrlinge und Gesellen, was offenbar ein entscheidendes Thema für
          die Prager Plattner war. Die Statuten besagen, dass ein Lehrling dem
          Meister 2 Schock Groschen für die Ausbildung zahlen musste (was im
          Vergleich zu anderen Handwerken sehr viel war) und der Bruderschaft 15
          Groschen. Darüber hinaus musste er 4 Jahre im Dienst des Meisters
          bleiben und mit zwei Schock Groschen dafür bürgen, nicht zu fliehen.
          Wenn er floh und nicht innerhalb von acht Tagen zurückkehrte, verfiel
          die Bürgschaft — ein halbes Schock an den Magistrat und die Zunft und
          ein Schock an die Ratsherren. Gemäß den sogenannten Rechten von
          Soběslav (um 1440) marschierten die Plattner bei feierlichen
          Gelegenheiten wie dem Empfang des Herrschers oder bei Prozessionen an
          dritter Stelle hinter den Metzgern und Goldschmieden. Sie sollten ein
          grünes Banner tragen, auf dem ein Krieger in voller Plattenrüstung
          abgebildet war. Unter diesem Banner marschierten mit ihnen Vertreter
          anderer Handwerke, sowohl eigenständige als auch organisierte. Diese
          waren: Kettenmacher, Nadelmacher, Helmschmiede, Sporenmacher,
          Messingarbeiter, Sattler, Zinngießer, Zaumzeugmacher, Riemenmacher,
          Gürtelmacher, Schmiede, Beutelmacher, Taschenmacher, Schwertschmiede,
          Köchermacher und Schlosser.
        </p>
        <p>
          Wie bei anderen Handwerken differenzierte sich auch die Plattnerkunst,
          und so finden wir in Prag vor 1419 auch drei Helmschmiede
          (galeatores), zwei aus der Altstadt, von denen einer 1343 aus
          Regensburg kam, und einen Hersteller von Plattenhandschuhen
          <Qt
            publication={PUBLICATIONS.WINTER2}
            href="https://kramerius5.nkp.cz/view/uuid:660b7500-029f-11e4-9789-005056827e52?page=uuid:1cf13400-1d56-11e4-8413-5ef3fc9ae867"
          />
          , genannt <i>plechowicze</i> (in einer Urkunde von 1447).
          <Qt publication={PUBLICATIONS.ACADEMIA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Kopf- und Halsschutz</h4>
        <p>
          Der Bewaffnete trug üblicherweise einen Kettenkragen am Hals, genannt{' '}
          <i>obojček</i> oder <i>oboječek</i>.
          <Qt
            publication={PUBLICATIONS.ARCHIV8}
            href="https://www.ndk.cz/view/uuid:264e7b10-8dd8-11e8-9588-5ef3fc9bb22f?page=uuid:dc8ba9a0-9b8b-11e8-a1e1-005056827e51&fulltext=obojček"
          />
          Darauf folgte gewöhnlich eine textile Haube, die gegen Ende des 15.
          Jahrhunderts typischerweise mit Quasten versehen war, über die der
          Helm aufgesetzt wurde. Unter den Helmen dominierten in den böhmischen
          Ländern eindeutig der Eisenhut, im zeitgenössischen Tschechischen als{' '}
          <i>kapalín</i> bekannt, und die davon abgeleitete Schaller, im
          zeitgenössischen Tschechischen als <i>leb</i> oder <i>lebka</i>{' '}
          bekannt. Für Helme wurde auch der Begriff <i>peklhaub</i>,{' '}
          <i>peklhúbl</i> oder <i>piklhaub</i> verwendet, der eine
          Verballhornung von <i>beckenhaube</i> war, dem deutschen Namen für den
          Beckenhelm-Typ; einmal ins Tschechische übernommen, wurde dieser
          Begriff jedoch für jeden Metallhelm verwendet. Da weder der Eisenhut
          noch die Schaller den unteren Teil des Gesichts schützten, konnten sie
          mit einem Kinnreff ergänzt werden, im zeitgenössischen Tschechischen
          als <i>bart</i> oder <i>barth</i> bekannt.{' '}
          <Qt
            publication={PUBLICATIONS.ARCHIV8}
            href="https://www.ndk.cz/view/uuid:264e7b10-8dd8-11e8-9588-5ef3fc9bb22f?page=uuid:dc8ba9a0-9b8b-11e8-a1e1-005056827e51&fulltext=barth"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Rumpfschutz</h4>
        <p>
          Den Rumpfschutz bildeten eine Brust- und eine Rückenplatte, die
          zusammen den Kürass ergaben. In Böhmen wurde die Brustplatte{' '}
          <i>prustplech</i> oder <i>prusplech</i> genannt, vom deutschen{' '}
          <i>brustblech</i>, wörtlich <Cit>Brustblech</Cit>.
        </p>
      </Col>
    </Row>
  </>
)
