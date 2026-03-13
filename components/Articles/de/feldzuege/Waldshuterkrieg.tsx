import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const Waldshuterkrieg = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="waldshut-war" />
        <h4>Der Waldshuterkrieg{draft && <DraftBadge />}</h4>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="cesi-waldshuterkrieg.jpg"
        width={1800}
        height={2400}
        title="Ankunft b&ouml;hmischer Truppen 1468 zur Entsetzung des belagerten Waldshut, Amtliche Berner Chronik (1478&ndash;1483)"
      />
      <Col>
        <p>
          Der Waldshuterkrieg (auch Schaffhauserkrieg genannt) war Teil der
          milit&auml;rischen Auseinandersetzungen im Jahr 1468 zwischen dem Adel
          im Sundgau, Breisgau, Klettgau und Hegau sowie Vorder&ouml;sterreich
          unter der F&uuml;hrung des habsburgischen Herzogs Sigmund des
          M&uuml;nzreichen auf der einen Seite und acht Orten der Alten
          Eidgenossenschaft zusammen mit mehreren verb&uuml;ndeten St&auml;dten
          auf der anderen. Der Schwerpunkt der K&auml;mpfe lag bei Waldshut, das
          belagert und teilweise zerst&ouml;rt wurde.
        </p>
        <p>
          In der zweiten H&auml;lfte des 15. Jahrhunderts h&auml;uften sich die
          Zusammenst&ouml;&szlig;e zwischen den adligen Anh&auml;ngern der
          Habsburger und den St&auml;dten im s&uuml;ddeutschen Raum. Adlige
          sanken immer h&auml;ufiger auf das Niveau von Raubrittern herab und
          &uuml;berfielen st&auml;dtische Kaufleute mit wachsender
          Regelm&auml;&szlig;igkeit. Die Eidgenossen suchten diese
          Streitigkeiten zu nutzen, um ihren Einfluss n&ouml;rdlich des Rheins
          auszuweiten. Sie schlossen Schutzb&uuml;ndnisse mit den St&auml;dten
          Schaffhausen (1454), Rottweil (1463) und M&uuml;lhausen (1466). Zwei
          Ereignisse f&uuml;hrten zur Eskalation des Konflikts:
        </p>
        <ol>
          <li>
            Die Stadt Schaffhausen schloss am <b>1. Juni 1454</b> ein
            B&uuml;ndnis auf 25 Jahre mit den eidgen&ouml;ssischen Orten
            Z&uuml;rich, Bern, Luzern, Schwyz, Zug und Glarus, nachdem Bilgeri
            von Heudorf versucht hatte, Schaffhausen den Habsburgern erneut zu
            unterwerfen. Bilgeri von Heudorf setzte seine Feindseligkeiten gegen
            die Stadt fort, und 1467 eskalierte die Lage, als er den
            Schaffhauser B&uuml;rgermeister Hans Amstad bei Anselfingen gefangen
            nahm und erst nach Zahlung eines L&ouml;segeldes von 1.800 Gulden
            freiließ. Die Eidgenossen sandten Truppen zur Verst&auml;rkung der
            Stadt, und eine Abteilung Unterwaldner unter dem Kommando von
            Hauptmann Kaspar Koller unternahm einen Pl&uuml;nderungszug in den
            Klettgau.
          </li>
          <li>
            Die Stadt M&uuml;lhausen schloss am <b>17. Juni 1466</b> ein
            B&uuml;ndnis auf 25 Jahre mit Bern und Solothurn. M&uuml;lhausen,
            das in einem unerkl&auml;rten Kleinkrieg vom Adel schwer
            bedr&auml;ngt wurde, suchte eine milit&auml;rische L&ouml;sung und
            ging im Vertrauen auf seinen B&uuml;ndnisvertrag in die Offensive.
            Im April 1468 &uuml;berfielen M&uuml;lhauser Einheiten die
            D&ouml;rfer Rixheim und Sausheim, die zum Adel geh&ouml;rten. Die
            St&auml;nde Vorder&ouml;sterreichs wollten diesen Angriff bestrafen
            und marschierten am <b>15. Mai 1468</b> mit 4.000 Mann vor
            M&uuml;lhausen und verw&uuml;steten dessen Umgebung. Am{' '}
            <b>18. Juni 1468</b> erkl&auml;rten Bern, Solothurn und Freiburg
            Herzog Sigmund den Krieg &ndash; und bald folgten die &uuml;brigen
            eidgen&ouml;ssischen St&auml;dte.
          </li>
        </ol>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Der Sundgaufeldzug</h5>
        <p>
          Am <b>25. Juni 1468</b> fielen die Berner und Solothurner Truppen von
          Basel aus in den Sundgau ein und r&uuml;ckten &uuml;ber Blotzheim,
          Bartenheim und Habsheim auf M&uuml;lhausen vor, wobei sie
          Verw&uuml;stung hinterließen. Diesem ersten Treffen folgten Soldaten
          aus Z&uuml;rich und Schwyz. Einheiten der innerschweizer Orte
          marschierten dann durch D&ouml;rfer am linken Rheinufer auf
          M&uuml;lhausen zu.
        </p>
        <p>
          Am <b>6. Juli 1468</b> trafen die drei eidgen&ouml;ssischen
          Heeress&auml;ulen zwischen Thann und M&uuml;lhausen auf der als
          Ochsenfeld bekannten Ebene zusammen und erwarteten, dass die
          vorder&ouml;sterreichischen Truppen sich ihnen zur offenen Schlacht
          stellen w&uuml;rden, was jedoch nicht geschah.
        </p>
        <p>
          Nachdem die Habsburger und ihre Verb&uuml;ndeten den Kampf am
          Ochsenfeld verweigert hatten, versuchten die Eidgenossen, die Stadt
          Thann einzunehmen. Gleichzeitig wurde eine Abteilung von 1.000 Mann
          &uuml;ber Wehr und Tiengen nach Schaffhausen entsandt.
        </p>
        <p>
          Am <b>16. Juli 1468</b> zogen sich die Eidgenossen aus dem Sundgau
          &uuml;ber Basel zur&uuml;ck und beendeten damit den sogenannten
          Sundgaufeldzug oder M&uuml;lhauserkrieg; der Kriegsschauplatz
          verlagerte sich weiter nach Osten.
        </p>
      </Col>
      <ImageWithTitle
        md={4}
        src="Schilling_Ochsenfeld.jpg"
        width={1500}
        height={2300}
        title="Ein eidgen&ouml;ssischer Versorgungswagen wird von Rittern Vorder&ouml;sterreichs angegriffen. Darstellung, Luzerner Chronik (1513)"
      />
    </Row>
    <Row>
      <Col>
        <h5>Die Habsburger, der Adel und die Reichsst&auml;nde</h5>
        <p>
          F&uuml;r die Verteidigung von Waldshut standen etwa 800 Mann zur
          Verf&uuml;gung. Den Befehl f&uuml;hrte Werner von Schienen
          (1410&ndash;1496). Unter den Verteidigern befanden sich auch Wilhelm
          Herter von Hertneck und Bilgeri von Heudorf. Der &ouml;rtliche Adel
          hatte sich bereits w&auml;hrend des ersten eidgen&ouml;ssischen
          Einfalls in den Klettgau nach Waldshut zur&uuml;ckgezogen. Die
          vorder&ouml;sterreichischen St&auml;dte Breisach, Neuenburg am Rhein
          und Freiburg im Breisgau entsandten Hilfskontingente.
        </p>
        <p>
          Waldshut war durch eine Ringmauer mit f&uuml;nf T&uuml;rmen
          gesch&uuml;tzt, davor ein tiefer Graben und stellenweise auch der
          Rhein.
        </p>
        <p>
          Die Breisgauer Ritterschaft besetzte den Abschnitt des Oberrheins
          zwischen Rheinfelden und Laufenburg, und Aufgebote aus dem
          vorder&ouml;sterreichischen Breisgau besetzten den Schwarzwald, um
          dessen Bewohner am &Uuml;berlaufen zu den Schweizern zu hindern. In
          diesem Gebiet setzte Herzog Sigmund auch b&ouml;hmische Truppen ein.
          Die genaue Zahl der Kr&auml;fte, die Sigmund w&auml;hrend des
          Waldshuterkriegs aufbot, ist nicht zuverl&auml;ssig bekannt,
          &uuml;berstieg aber erheblich die Zahl der Verteidiger innerhalb
          Waldshuts.
        </p>
        <p>
          Markgraf Karl I. von Baden bef&uuml;rchtete, die Eidgenossen
          k&ouml;nnten von M&uuml;lhausen aus die Markgrafschaft Baden-Hachberg
          angreifen &ndash; sie war 1415 an die Hauptlinie des Hauses Baden
          zur&uuml;ckgefallen &ndash; und entsandte daher ebenfalls Truppen zur
          Besetzung der anderen sogenannten Waldst&auml;dte. Graf Ulrich V. von
          W&uuml;rttemberg begann gleichfalls mit Vorbereitungen, nachdem sich
          Berichte verbreitet hatten, die Eidgenossen beabsichtigten, die Stadt
          Villingen zu belagern. Herzog Ludwig der Reiche von Bayern bot Herzog
          Sigmund Unterst&uuml;tzung und Vermittlung an.
        </p>
        <p>
          Ein gr&ouml;&szlig;erer eidgen&ouml;ssischer Einfall und eine
          Besetzung des Schwarzwaldes h&auml;tten die s&uuml;ddeutschen
          F&uuml;rsten wahrscheinlich zum Eingreifen veranlasst, doch im Falle
          der bedrohten Grenzstadt Waldshut zeigten sie wenig Bereitschaft zu
          entscheidender Hilfe.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Die Eidgenossenschaft</h5>
        <p>
          Obwohl die B&uuml;ndnisvertr&auml;ge mit M&uuml;lhausen und
          Schaffhausen nur von wenigen Orten der alten achtörtigen
          Eidgenossenschaft (VIII Orte) geschlossen worden waren, traten alle
          acht dem Krieg gegen Herzog Sigmund bei, zusammen mit mehreren
          sogenannten zugewandten Orten, und sogar der Abt des Klosters St.
          Gallen entsandte Soldaten.
        </p>
        <p>
          Die Eidgenossen hatten keinen Oberbefehlshaber; die Entscheidungen
          wurden von einem Rat der Hauptleute getroffen. Diese standen auch in
          schriftlichem Kontakt mit ihren Heimatorten und mussten oft
          nachtr&auml;glich die Genehmigung f&uuml;r weitere Schritte einholen.
          Der Kommandant des Z&uuml;rcher Kontingents galt als erster Hauptmann,
          der die R&auml;te einberief.
        </p>
        <p>
          Die Z&uuml;rcher Truppen wurden von Eberhard Ottikon kommandiert.
          Einer der Hauptkommandeure der Z&uuml;rcher Abteilung war auch der
          sp&auml;tere B&uuml;rgermeister und Heerf&uuml;hrer Hans Waldmann.
          Unter den Luzerner Einheiten befand sich der Chronist Petermann
          Etterlin. Die Berner wurden von Petermann von Wabern, Niklaus von
          Scharnachthal und Niklaus von Diesbach gef&uuml;hrt.
        </p>
        <p>
          Die Gesamtst&auml;rke des Belagerungsheeres erreichte gegen Ende der
          Belagerung 16.000 Mann, als zus&auml;tzliche Verst&auml;rkungen aus
          den Heimatorten eintrafen. Ein Teil der Kr&auml;fte war gleichzeitig
          durch Pl&uuml;nderungsz&uuml;ge in den Schwarzwald und durch die
          Sicherung der Belagerung gegen einen m&ouml;glichen Entsatz der Stadt
          gebunden.
        </p>
        <p>
          Auf dem Rhein vor Waldshut verf&uuml;gten die Berner Truppen &uuml;ber
          zwei Boote und Luzern &uuml;ber eines, von denen aus die
          Stadtbefestigungen beschossen wurden.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Verlauf der Ereignisse</h5>
        <p>
          W&auml;hrend sich die eidgen&ouml;ssischen Hauptkr&auml;fte noch im
          Sundgau befanden, entsandten sie auch 2.000 Mann als Verst&auml;rkung
          nach Schaffhausen. Von dort aus marschierten sie ab dem 27. Juni 1468
          unter dem Kommando des Z&uuml;rcher Hauptmanns Felix Keller auf einem
          verw&uuml;stenden Feldzug durch den Klettgau und eroberten am 29. Juni
          das St&auml;dtchen Erzingen.
        </p>
        <h6>Einfall in den Schwarzwald</h6>
        <p>
          Am <b>6. Juli 1468</b> unternahmen die Eidgenossen einen weiteren
          Pl&uuml;nderungszug in den Schwarzwald mit dem Ziel des Klosters St.
          Blasien, das f&uuml;r seine Habsburgertreue bekannt war. In den
          D&ouml;rfern B&uuml;rglen und Indlekofen wurden Besitzt&uuml;mer
          dieses Klosters gepl&uuml;ndert. Bei Remetschwiel stie&szlig;en sie
          auf eine von Bauern aus dem Hauensteingebiet verteidigte Letze
          (Befestigungsanlage).
        </p>
        <p>
          Nachdem diese Verteidigungslinie am <b>7. Juli 1468</b> mit Hilfe
          zweier Abteilungen &ndash; einer aus Schaffhausen und einer aus dem
          Sundgau &ndash; &uuml;berwunden worden war, hatten die Eidgenossen
          freien Weg zum Kloster St. Blasien. Beim Dorf H&auml;usern kam ihnen
          Abt Christoph von Greuth entgegen und konnte sie gegen eine Zahlung
          von 1.500 Gulden zum Abzug bewegen.
        </p>
        <p>
          Auf dem R&uuml;ckweg brannten die Eidgenossen das St&auml;dtchen
          Waldkirch nieder, besetzten Tiengen &ndash; ein an Bilgeri von Heudorf
          verpf&auml;ndetes Lehen des Bistums Konstanz &ndash; und
          hinterlie&szlig;en dort 600 Mann. Der &ouml;sterreichische
          Hofmarschall Jakob Trapp forderte aus der Stadt Freiburg
          zus&auml;tzliche Verst&auml;rkungen vom Kloster St. Blasien an und
          &auml;u&szlig;erte seine Bef&uuml;rchtung, der gesamte Schwarzwald
          wolle schweizerisch werden.
        </p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <h6>Die Belagerung von Waldshut</h6>
        <p>
          Am <b>19. Juli 1468</b> versammelten sich die eidgen&ouml;ssischen
          Hauptabteilungen, die am Sundgaufeldzug teilgenommen hatten, auf dem
          Rafzerfeld. Am <b>20. Juli 1468</b> beschlossen die Eidgenossen auf
          der Tagsatzung in Luzern &ndash; durch die Stimmen der Orte Uri,
          Schwyz, Unterwalden, Zug, Glarus und Schaffhausen &ndash; einen
          Kriegszug gegen Waldshut.
        </p>
        <p>
          Als Erste trafen am <b>22. Juli 1468</b> die Luzerner Truppen zusammen
          mit Einheiten aus Glarus, Schwyz und Zug am s&uuml;dlichen Rheinufer
          vor Waldshut ein. Die Z&uuml;rcher und Schaffhauser Truppen, die seit
          dem <b>20. Juli 1468</b> in Tiengen waren, setzten sich in Richtung
          der Stadt in Marsch. Die &uuml;brigen Einheiten &ndash; vor allem die
          schweren Bombarden aus Z&uuml;rich und Bern, die zum Beschuss der
          Stadtmauern bestimmt waren &ndash; trafen nach und nach ein, sodass
          die erste Kanonade auf die Stadt sch&auml;tzungsweise am{' '}
          <b>29. Juli 1468</b> stattfand.
        </p>
        <p>
          W&auml;hrend der Belagerung wurden Berichten zufolge etwa 280 schwere
          Steinkugeln und weitere 248 kleinere M&ouml;rsergeschosse auf die
          Stadt und ihre Befestigungen abgefeuert. Der Beschuss zerst&ouml;rte
          unter anderem die Stadtm&uuml;hlen, die von den Einwohnern durch den
          Bau und die Nutzung von Tretr&auml;dern ersetzt wurden. Da die
          Belagerer auch die Wasserversorgung der Stadt umleiteten und das
          Wassersch&ouml;pfen aus dem Rhein wegen des feindlichen Feuers
          gef&auml;hrlich war, gruben die Verteidiger einen Brunnen am Rheintor.
        </p>
        <p>
          Der herzogliche Hofmarschall Jakob Trapp organisierte zwei Versuche,
          die Stadt mit Munition und Proviant zu versorgen:
        </p>
        <ol>
          <li>
            In der Nacht vom 3. auf den 4. August wurde in Laufenburg eine
            Abteilung von 1.200 Mann zusammengezogen, die am linken Rheinufer
            zum Dorf Full vorr&uuml;ckte, von wo aus sie versuchte, den Fluss in
            die Stadt zu &uuml;berqueren. Obwohl der eidgen&ouml;ssische
            Belagerungsring in diesem Abschnitt nur schwach besetzt war, verlief
            der Versuch weitgehend erfolglos &ndash; nur etwa 200 Mann mit einer
            geringen Menge an Nachschub gelangten in die Stadt.
          </li>
          <li>
            Der zweite Versuch, ausgef&uuml;hrt in der Nacht vom 8. auf den 9.
            August, scheiterte vollst&auml;ndig, da die Schweizer inzwischen die
            Verteidigung dieses Bereichs auf 400 Mann verst&auml;rkt hatten.
          </li>
        </ol>
      </Col>
      <ImageWithTitle
        md={6}
        src="Burgunderchronik_Waldshuterkrieg_1468.png"
        width={1203}
        height={1566}
        title="Ankunft verst&auml;rkter Berner Einheiten vor der belagerten Stadt Waldshut, Amtliche Berner Chronik (1478&ndash;1483)"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Auch die Verteidiger der Stadt blieben nicht unt&auml;tig &ndash; sie
          unternahmen mehrere Ausf&auml;lle, die den Belagerern Verluste
          zuf&uuml;gten.
        </p>
        <p>
          Der Landvogt Th&uuml;ring III. von Hallwyl errichtete sein
          Hauptquartier in Laufenburg, und zwischen Albbruck und Dogern wurde
          eine befestigte Stellung mit 1.300 Mann eingerichtet. Im Gebiet von
          St. Blasien versammelte Herzog Sigmund etwa 1.600 b&ouml;hmische
          S&ouml;ldner, die jedoch nie wirkungsvoll in die K&auml;mpfe
          eingriffen.
        </p>
        <p>
          Aufgrund von Berichten &uuml;ber vorder&ouml;sterreichische Einheiten
          und Ger&uuml;chten &uuml;ber bevorstehende Verst&auml;rkungen unter
          der F&uuml;hrung Herzog Sigmunds forderten die Eidgenossen am{' '}
          <b>10. August 1468</b> zus&auml;tzliche Soldaten aus ihren Heimatorten
          an. Diese trafen tats&auml;chlich ein, und die Gesamtzahl der
          Belagerer wuchs auf 16.000 Mann.
        </p>
        <p>
          Die Lage innerhalb der Stadt verschlechterte sich weiter &ndash; die
          Versorgung brach zusammen, die Stadtmauern waren durch den
          st&auml;ndigen Beschuss schwer besch&auml;digt, und die Habsburger und
          der Adel waren weder willens noch in der Lage, einen entscheidenden
          Entsatzversuch zu unternehmen.
        </p>
        <p>
          Am <b>17. August 1468</b> planten die Eidgenossen einen direkten Sturm
          auf die Stadt, der zwei Tage sp&auml;ter stattfinden sollte.
          Gleichzeitig waren jedoch bereits Friedensverhandlungen im Gange, und
          der Sturm wurde daher verschoben. Dar&uuml;ber hinaus brachen im
          eidgen&ouml;ssischen Lager ernsthafte Streitigkeiten zwischen den
          Orten Z&uuml;rich und Bern aus.
        </p>
        <p>
          Am <b>21. August 1468</b> unternahmen die Luzerner Truppen,
          unterst&uuml;tzt von den Orten Schwyz, Glarus und Appenzell, einen
          Pl&uuml;nderungszug auf Bonndorf im Schwarzwald, das dabei
          niedergebrannt wurde. Auf dem R&uuml;ckzug wurde diese Abteilung von
          Sigmunds Einheiten angegriffen und konnte ihre Beute (darunter 400
          St&uuml;ck Vieh) nur mit Hilfe von Truppen aus Z&uuml;rich und Zug ins
          Lager bringen. Am 24. August kam es zu weiteren K&auml;mpfen an der
          Befestigung bei Albbruck.
        </p>
        <p>
          Die Interessen der Z&uuml;rcher Kaufleute reichten bis nach Waldshut,
          und es bestanden auch verwandtschaftliche Beziehungen. Formal
          argumentierte die Z&uuml;rcher Seite, ein Sturm auf die Stadt sei nur
          unter hohen eigenen Verlusten m&ouml;glich. Politisch hatte
          Z&uuml;rich jedoch kein Interesse daran, dass Bern durch ein erobertes
          Waldshut Einfluss in diesem Gebiet sicherte.
        </p>
        <p>
          Z&uuml;rich wurde von den &ouml;stlichen und innerschweizer Orten
          unterst&uuml;tzt, w&auml;hrend Bern Solothurn und Luzern auf seiner
          Seite hatte. Diese Rivalit&auml;ten innerhalb des eidgen&ouml;ssischen
          Lagers f&uuml;hrten letztlich zum Ende der Belagerung.
        </p>
      </Col>
      <ImageWithTitle
        md={6}
        src="Tschachtlan_Waldshut_1468_1.jpg"
        width={913}
        height={788}
        title="Die Eidgenossen belagern Waldshut, Tschachtlanchronik (1470)"
      />
    </Row>
    <Row>
      <Col>
        <h5>Friedensvertrag und Folgen</h5>
        <p>
          Insbesondere die Stadt Basel, durch ihren B&uuml;rgermeister Peter
          Rot, sowie die F&uuml;rstbisch&ouml;fe Johann V. von Venningen
          (Bischof von Basel) und Hermann III. von Breitenlandenberg (Bischof
          von Konstanz) bem&uuml;hten sich um eine friedliche Beilegung zwischen
          der Eidgenossenschaft und den Habsburgern. Auch die R&auml;te Herzog
          Ludwigs von Bayern und Markgraf Rudolfs von Hachberg-Sausenberg nahmen
          an den Verhandlungen teil; Hans von Flachslanden vertrat Letzteren am
          Verhandlungstisch. Am <b>14. August 1468</b> nahmen die Vermittler
          Kontakt mit den Hauptleuten der Eidgenossen auf, und am 16. August
          begannen in Dogern Friedensverhandlungen, die am 27. August zur
          Unterzeichnung des als Waldshuter Richtung bekannten Friedensvertrags
          f&uuml;hrten. Demnach verpflichtete sich Herzog Sigmund zur Zahlung
          von Kriegsentsch&auml;digungen in H&ouml;he von 10.000 Gulden bis zum{' '}
          <b>24. Juni 1469</b>. Als Sicherheit stellte er den Eidgenossen die
          Stadt Waldshut und den vorder&ouml;sterreichischen Teil des
          Schwarzwaldes. Der Waldshuterkrieg f&uuml;hrte nur zu minimalen
          Gebietsver&auml;nderungen. Die einzige Ausnahme bildete die Herrschaft
          Wessenberg s&uuml;dlich des Rheins mit den D&ouml;rfern Hottwil und
          Mandach, die Bern eroberte und seiner Landvogtei Schenkenberg
          einverleibte.
        </p>
        <p>
          Die Belagerung Waldshuts wurde am <b>28. August 1468</b> aufgehoben.
          Herzog Sigmund lieh sich daraufhin durch den Vertrag von Saint-Omer
          50.000 Gulden von Herzog Karl dem K&uuml;hnen von Burgund, wobei er
          die vorder&ouml;sterreichischen Gebiete im Breisgau und Oberelsass
          verpf&auml;ndete. Die Verwaltung dieser verpf&auml;ndeten Gebiete
          &uuml;bernahm zun&auml;chst eine von Markgraf Rudolf von
          Hachberg-Sausenberg geleitete Kommission, die einen Bericht &uuml;ber
          deren Zustand erstellte. Anschlie&szlig;end ernannte Karl der
          K&uuml;hne Peter von Hagenbach zum Landvogt, der sein Amt im November
          1468 antrat. Sigmund zahlte den Eidgenossen die
          Kriegsentsch&auml;digung von 10.000 Gulden am <b>23. Juni 1469</b>.
          Der B&uuml;rgermeister von Schaffhausen musste allerdings bis 1476 auf
          die R&uuml;ckerstattung seines L&ouml;segeldes von 1.800 Gulden
          warten, das ihm ebenfalls gem&auml;&szlig; dem Vertrag zustand. Kaiser
          Friedrich III., Vetter Herzog Sigmunds, erkl&auml;rte den
          Friedensvertrag am <b>26. Mai 1469</b> f&uuml;r nichtig und
          verh&auml;ngte am 31. August die Reichsacht &uuml;ber die
          Eidgenossenschaft. Keine dieser Entscheidungen hatte jedoch reale
          Auswirkungen.
        </p>
        <p>
          Obwohl Waldshut w&auml;hrend der Belagerung betr&auml;chtlichen
          Schaden erlitt, erneuerte Kaiser Friedrich III. am 21. November 1468
          die Privilegien der Stadt und gew&auml;hrte ihr dar&uuml;ber hinaus am{' '}
          <b>24. Februar 1469</b> das Recht, einen Wasserzoll auf alle &uuml;ber
          die Fl&uuml;sse Aare, Reuss und Limmat eingef&uuml;hrten Waren zu
          erheben. Herzog Sigmund stellte der Stadt am <b>8. September 1468</b>{' '}
          einen <Cit>Schadlosbrief</Cit> (Entsch&auml;digungsbrief) aus, in dem
          er sich verpflichtete, den durch die Belagerung entstandenen Schaden
          zu ersetzen. Er erf&uuml;llte diese Verpflichtung durch die
          Verpf&auml;ndung des Stra&szlig;enzolls an die Stadt, dank dessen sich
          die Stadt wirtschaftlich bald erholte.
        </p>
        <p>
          Der franz&ouml;sische K&ouml;nig Ludwig XI. versuchte, sowohl die
          Eidgenossenschaft als auch Herzog Sigmund als Verb&uuml;ndete gegen
          Burgund zu gewinnen, und vermittelte den Frieden zwischen ihnen
          &ndash; die sogenannte Ewige Richtung. Nachdem Karl der K&uuml;hne
          1477 in der Schlacht bei Nancy gefallen war, nahm Herzog Sigmund die
          verpf&auml;ndeten vorder&ouml;sterreichischen Gebiete wieder in
          Besitz, ohne die geliehenen 50.000 Gulden zur&uuml;ckzuzahlen.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Waldshuterkrieg"
          />
        </p>
      </Col>
      <ImageWithTitle
        md={6}
        src="162Sigmund_verpfändet_BSE_an_Karl_v_Burgund.jpg"
        width={1800}
        height={2400}
        title="Die Verpf&auml;ndung von Breisgau, Sundgau und Elsass durch den &ouml;sterreichischen Herzog Sigmund an den burgundischen Herzog Karl den K&uuml;hnen am 9. Mai 1469, Luzerner Chronik (1513)"
      />
    </Row>
    <Row>
      <Col>
        <h5>Beteiligung b&ouml;hmischer S&ouml;ldner</h5>
        <p>
          Diebold Schilling schreibt in seiner Berner Chronik &uuml;ber die
          Beteiligung b&ouml;hmischer S&ouml;ldner wie folgt:
          <Cit>
            It was then, when the camp was laid before Waldshut, that about
            sixteen hundred Bohemians were sent from the Empire by the duke to
            aid the lords; and when they came, no warlike action was taken on
            their part against the Confederacy, for they caused more harm to
            friends than to the Confederacy. Nevertheless, the Imperial Duke had
            it explained to the Confederacy through his envoys that he was in an
            agreement with Duke Sigismund of Austria, according to which he had
            to send him men, and even if those he sent him stayed somewhere
            along the way and did not return home, he cared little about it, for
            he had to send them to him for the sake of honour and on the basis
            of his earlier written agreement, which they had made together
            before this war; whatever else he could do and negotiate for peace
            and good in this matter, he wished to do so with good will, as he
            and his predecessors had done during those earlier fifteen-year
            truces and in other affairs.
          </Cit>{' '}
          Diese Aufzeichnung wird von einer &auml;u&szlig;erst
          eigent&uuml;mlichen Darstellung b&ouml;hmischer Soldaten begleitet.
        </p>
        <p>
          Es scheint, dass die b&ouml;hmischen S&ouml;ldner von dem bayerischen
          Herzog Ludwig IX. unter dem B&uuml;ndnisvertrag, den er mit Sigmund
          hatte, zu diesem entsandt wurden. Ludwig hatte sich l&auml;ngst auf
          b&ouml;hmische S&ouml;ldner gest&uuml;tzt, insbesondere w&auml;hrend
          des sogenannten Bayerischen Krieges (1459&ndash;1463).
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00156.html"
          />{' '}
          Es &uuml;berrascht daher nicht, dass er sie auch in diesem Konflikt
          einsetzte, an dem ihm wenig lag, und somit nur so viel Beteiligung
          leistete, dass man ihm nicht die Verletzung von
          B&uuml;ndnisvertr&auml;gen vorwerfen konnte.
        </p>
        <p>
          Den B&ouml;hmen eilte wohl ihr milit&auml;rischer Ruf voraus, denn
          trotz ihrer geringen Zahl hielt Schilling sie nicht nur f&uuml;r
          erw&auml;hnenswert, sondern betonte auch ausdr&uuml;cklich, dass ihre
          Anwesenheit keine milit&auml;rische Wirkung hatte. Mit dem Hinweis,
          dass sie{' '}
          <Cit>caused more harm to friends than to the Confederacy</Cit> spielte
          Schilling h&ouml;chstwahrscheinlich auf das weitverbreitete Laster
          b&ouml;hmischer Soldaten an, die umso mehr pl&uuml;nderten, je weiter
          sie sich von B&ouml;hmen entfernten.
        </p>
        <p>
          In der begleitenden Buchmalerei werden sie als Heiden und Orientalen
          mit langem Haar dargestellt, was eindeutig eine Anspielung auf die
          &ouml;ffentliche Wahrnehmung der B&ouml;hmen als Ketzer ist.
        </p>
      </Col>
    </Row>
  </>
)
