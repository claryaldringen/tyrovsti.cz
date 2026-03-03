import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import styles from '../../cz/akce/BavorskaValka.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export const BayerischerKrieg = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="bavarian-war" />
        <h4>Der Bayerische Krieg</h4>
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <p>
          Der Bayerische Krieg von 1459 bis 1463, auch als F&uuml;rstenkrieg
          bekannt, war eine Folge der expansionistischen Bestrebungen der
          F&uuml;rstent&uuml;mer. Markgraf Albrecht III. Achilles von
          Brandenburg aus dem Hause Hohenzollern, der bis dahin bereits die
          F&uuml;rstent&uuml;mer Bayreuth und Ansbach vereinigt hatte, stand dem
          Herzog von Bayern-Landshut, Ludwig IX., genannt der Reiche,
          gegen&uuml;ber.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Bayerischer_Krieg_(1459%E2%80%931463)"
          />{' '}
          Die sogenannte <i>Mainzer Stiftsfehde</i>, auch als{' '}
          <i>Badisch-Pf&auml;lzischer Krieg</i> bekannt, ein milit&auml;rischer
          Konflikt um den Sitz des Erzbischofs von Mainz, wird bisweilen als
          Teil dieses Konflikts betrachtet.
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
        title="Sieg in der Schlacht bei Giengen 1462, Gem&auml;lde von Hans Werl, um 1603"
      />
    </Row>
    <Row>
      <Col>
        <h5>Vorgeschichte</h5>
        <p>
          Herzog Ludwig IX. der Reiche von Bayern-Landshut (1450&ndash;1479) war
          neben Kurf&uuml;rst Friedrich I. von der Pfalz, genannt der Siegreiche
          (1425&ndash;1476), und Markgraf Albrecht III. Achilles von Brandenburg
          (1414&ndash;1486) eine der herausragendsten Gestalten unter den
          deutschen F&uuml;rsten in&nbsp;der zweiten H&auml;lfte des 15.
          Jahrhunderts. Seine finanzielle St&auml;rke, die auf einem reichen
          v&auml;terlichen Erbe und einer gut funktionierenden
          Territorialverwaltung beruhte, sowie seine Freigebigkeit und
          prachtvolle Repr&auml;sentation verschafften ihm den Ruf
          legend&auml;ren Reichtums. Im&nbsp;Bereich der Reichspolitik
          st&uuml;tzte er sich grundlegend auf das gemeinsam
          mit&nbsp;Kurf&uuml;rst Friedrich I. von der Pfalz geschaffene
          wittelsbachische B&uuml;ndnissystem (beide waren Wittelsbacher).
          Insbesondere der Landfriede mit&nbsp;Herzog Albrecht III. von
          Bayern-M&uuml;nchen (ebenfalls Wittelsbacher) und Pfalzgraf Friedrich
          vom <b>17. Dezember 1451</b> &uuml;bte gro&szlig;e Anziehungskraft auf
          die F&uuml;rsten, den Adel und die St&auml;dte
          in&nbsp;S&uuml;ddeutschland aus. Nach den schw&auml;bischen
          Reichsst&auml;dten traten sp&auml;ter auch Herzog Sigmund von Tirol
          (1455) und der b&ouml;hmische K&ouml;nig Ladislaus Postumus (1457) dem
          wittelsbachischen B&uuml;ndnissystem bei. 1458 erneuerten und
          verst&auml;rkten Herzog Ludwig und Pfalzgraf Friedrich ihre Koalition
          durch ein lebensl&auml;ngliches B&uuml;ndnis.
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
        title="Ludwig IX. von Bayern, Gem&auml;lde des deutschen Malers Julius Zimmermann (1824&ndash;1906)"
      />
      <ImageWithTitle
        src="Albrecht_Achilles_auf_der_Predella_des_von_ihm_gestifteten_Schwanenordensaltars.jpg"
        width={1920}
        height={1440}
        title="Darstellung Albrechts Achilles auf der Predella des von ihm gestifteten Schwanenordensaltars (1484) in der St.-Gumbertus-Kirche."
      />
      <ImageWithTitle
        md={3}
        src="Friedrich_der_Siegreiche_von_Albrecht_Altdorfer.jpg"
        width={882}
        height={1203}
        title="Friedrich I. von der Pfalz, Gem&auml;lde von Albrecht Altdorfer (1480&ndash;1538)"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Insbesondere aber barg das Verh&auml;ltnis zwischen Kurf&uuml;rst
          Friedrich I. von der Pfalz und&nbsp;Kaiser Friedrich III. ein hohes
          Konfliktpotenzial, da der Kaiser die Herrschaft des Pfalzgrafen, die
          dieser sich entgegen dem Erbrecht der Goldenen Bulle angeeignet hatte,
          niemals anerkannte. Dar&uuml;ber hinaus entstand auch eine
          Rivalit&auml;t zwischen dem Pfalzgrafen und Markgraf Albrecht III.
          Achilles.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00159.html"
          />
          Albrecht Achilles versuchte, seine Gerichtsbarkeit und damit seinen
          Einfluss auf benachbarte Territorien auszuweiten. Zu diesem Zweck
          erhob er das Landgericht in N&uuml;rnberg, wo er das Amt des
          Burggrafen innehatte und somit dieses Gericht ihm unterstand, zu einem
          Reichsgericht. Auf diese Weise beanspruchte er durch das
          N&uuml;rnberger Gericht eine unbegrenzte Gerichtsbarkeit f&uuml;r das
          gesamte Reich und machte im Namen des Kaisers als oberstem Richter das
          Recht geltend, Gerichtsverfahren aus allen Regionen an sich zu ziehen.
          Dies h&auml;tte bedeutet, dass er die Rechtsprechung benachbarter
          F&uuml;rstent&uuml;mer beeinflussen und als h&ouml;here Instanz
          Entscheidungen untergeordneter Gerichte aufheben konnte. Hinter
          Albrecht Achilles&apos; Bestrebungen stand auch die Idee einer
          Wiederherstellung Frankens unter hohenzollerischer Herrschaft. In
          Verbindung mit der herzoglichen W&uuml;rde blieb diese Idee im
          Hochstift W&uuml;rzburg lange lebendig, ohne jemals wieder
          Wirklichkeit zu werden.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Bayerischer_Krieg_(1459%E2%80%931463)"
          />
          Albrecht III. geriet damit zwangsl&auml;ufig in Konflikt mit&nbsp;dem
          Pfalzgrafen bei Rhein und&nbsp;in Mosbach, mit&nbsp;den
          fr&auml;nkischen Bist&uuml;mern und schlie&szlig;lich auch
          mit&nbsp;Herzog Ludwig IX.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00160.html"
          />
        </p>
        <p>
          Andererseits schlossen sich F&uuml;rsten
          in&nbsp;S&uuml;dwestdeutschland, die sich ebenfalls durch die
          expansionistische Territorialpolitik Kurf&uuml;rst Friedrichs I. des
          Siegreichen bedroht f&uuml;hlten, der Politik des Markgrafen an. Das
          sogenannte antipf&auml;lzische B&uuml;ndnis zwischen dem Markgrafen
          von Brandenburg, Herzog Wilhelm von Sachsen, Markgraf Karl von Baden,
          Graf Ulrich von W&uuml;rttemberg-Stuttgart und dem Erzbischof von
          Mainz, Diether von Isenburg, wurde wie das erneuerte wittelsbachische
          B&uuml;ndnis 1458 geschlossen. Damit war der Boden f&uuml;r eine
          entscheidende Konfrontation bereitet. Und der geeignete Anlass
          f&uuml;r den Ausbruch der Konflikte lie&szlig; tats&auml;chlich nicht
          lange auf sich warten.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00159.html"
          />
        </p>
        <p>
          Obwohl das Herzogtum Bayern-Landshut ebenfalls von den Eingriffen des
          N&uuml;rnberger Gerichts betroffen war, verhinderte das gute
          pers&ouml;nliche Verh&auml;ltnis zwischen Markgraf Albrecht III.
          Achilles und Herzog Ludwig IX., dass die territoriale Rivalit&auml;t
          bis 1458 in offene Feindseligkeit eskalierte. Andererseits blieb
          Markgraf Albrecht sein Leben lang ein treuer Verteidiger kaiserlicher
          Interessen im&nbsp;Reich. Selten konnte er daraus jedoch einen Vorteil
          f&uuml;r seine eigenen Ziele ziehen. Gerade in der aufkommenden
          Konfrontation zwischen den Wittelsbachern und dem Reich sah er eine
          Gelegenheit, kaiserliche Interessen mit seinen Pl&auml;nen
          bez&uuml;glich des N&uuml;rnberger Landgerichts zu verbinden, indem er
          als Vertreter des Kaisers agierte und dabei in erster Linie seine
          eigenen Interessen gegen&uuml;ber seinen territorialen Nachbarn
          in&nbsp;Franken und Bayern verteidigte.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00160.html"
          />
        </p>
        <p>
          Dies wurde deutlich, als der Konflikt mit&nbsp;den Wittelsbachern
          tats&auml;chlich eintrat. Nachdem Herzog Ludwig IX. &ndash;
          zun&auml;chst noch mit&nbsp;Hilfe Markgraf Albrechts &ndash; die freie
          Reichsstadt Donauw&ouml;rth, strategisch bedeutsam f&uuml;r die
          Kontrolle der Donau, im&nbsp;Oktober 1458 besetzt hatte, um sie auf
          der Grundlage alter Rechtsanspr&uuml;che seinem Herzogtum
          einzuverleiben, verh&auml;ngte Kaiser Friedrich III. am{' '}
          <b>4. Juni 1459</b> die Reichsacht &uuml;ber ihn. Als deren
          Vollstrecker bestellte er &ndash; auf eigenen Wunsch &ndash; neben
          Herzog Wilhelm von Sachsen auch Markgraf Albrecht. Dank seines
          B&uuml;ndnisses mit&nbsp;den Habsburgern, mit Erzherzog Albrecht von
          &Ouml;sterreich und Herzog Sigmund von Tirol im R&uuml;cken sowie der
          beginnenden Anwerbung von S&ouml;ldnern in&nbsp;B&ouml;hmen
          f&uuml;hlte sich Ludwig IX. stark genug, den Krieg gegen das Reich zu
          f&uuml;hren. Ein offener Konflikt zwischen dem Landshuter Herzog und
          Albrecht von Brandenburg schien nun nur noch eine Frage der Zeit.
          Pl&ouml;tzlich wurde Herzog Ludwig jedoch unerwartet der Aussicht auf
          zahlreiche S&ouml;ldner aus&nbsp;B&ouml;hmen und damit seiner Hoffnung
          auf eine entscheidende milit&auml;rische Schlagkraft beraubt. Auf
          Intervention Papst Pius&apos; II. und aufgrund noch ungel&ouml;ster
          Gebietsstreitigkeiten mit&nbsp;Bayern verbot der b&ouml;hmische
          K&ouml;nig Georg von Podiebrad seinen Landsleuten den
          S&ouml;ldnerdienst f&uuml;r Herzog Ludwig. Am <b>16. Juli 1459</b>{' '}
          musste Ludwig Donauw&ouml;rth dem Kaiser &uuml;bergeben und
          vor&nbsp;dem f&uuml;rstlichen Schiedsgericht erscheinen.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00160.html"
          />
        </p>
        <p>
          Die sogenannten &bdquo;blinden Spr&uuml;che&ldquo; des
          Schiedsgerichts, das im&nbsp;Juli 1459 in&nbsp;N&uuml;rnberg tagte,
          waren ein einseitiger Erfolg der Diplomatie des Markgrafen von
          Brandenburg (127). In&nbsp;den wesentlichen Punkten fiel die
          Entscheidung gegen die Interessen der Wittelsbacher, und auch in der
          wichtigen Frage der Zust&auml;ndigkeit des N&uuml;rnberger Gerichts
          erlaubte die vage Formulierung des Schiedsspruchs eine Auslegung im
          Sinne Markgraf Albrechts. Die Spannung zwischen den Parteien
          im&nbsp;Reich bestand somit fort, sodass ein neuer Ausbruch offener
          Feindseligkeiten nur noch eine Frage der Zeit blieb.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00160.html"
          />
        </p>
        <p>
          Um eine &auml;hnliche Situation wie im Streit um Donauw&ouml;rth zu
          verhindern, bem&uuml;hten sich die Wittelsbacher gemeinsam um eine
          Verbesserung der Beziehungen zwischen Herzog Ludwig IX. und
          B&ouml;hmen. Zwischen Herbst 1459 und Herbst 1460 gelang es ihnen
          tats&auml;chlich, von einer vorsichtigen Ann&auml;herung zu einem
          festen Bund zu gelangen, der sogar durch die Verlobung zwischen
          K&ouml;nig Georgs Tochter Ludmila und Herzog Ludwigs IX. Sohn Georg
          untermauert wurde. Im Hintergrund stand der Plan des wittelsbachischen
          Beraters Martin Mair, den b&ouml;hmischen K&ouml;nig gegen den Willen
          des Kaisers zum deutschen K&ouml;nig zu machen und dadurch die
          Handlungsf&auml;higkeit des Reiches zu erh&ouml;hen. Ein Plan,
          f&uuml;r den der b&ouml;hmische K&ouml;nig durchaus zu begeistern war,
          der aber letztlich am fehlenden R&uuml;ckhalt der kaisertreuen
          F&uuml;rsten um Markgraf Albrecht III. von Brandenburg scheiterte.
          Diese Zur&uuml;ckweisung brachte K&ouml;nig Georg endg&uuml;ltig auf
          die Seite der Wittelsbacher, mit denen er ein B&uuml;ndnis vornehmlich
          gegen Markgraf Albrecht, damit aber letztlich auch gegen den Kaiser
          schloss.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
        <p>
          Auf der Grundlage dieser ver&auml;nderten Beziehungen zu Georg von
          Podiebrad nahmen die bayerischen Kriegsvorbereitungen im Fr&uuml;hjahr
          1460 rasch Gestalt an. Herzog Ludwig setzte erneut vorrangig auf
          S&ouml;ldner aus&nbsp;B&ouml;hmen, von denen in jenem Jahr mindestens
          5.000 in seinen Dienst traten. Einige b&ouml;hmische Condottieri ragen
          durch die Gr&ouml;&szlig;e ihrer S&ouml;ldnerkontingente besonders
          hervor: Dobrohost von Ronsperg und Hor&scaron;ovsk&yacute; T&yacute;n
          brachten &uuml;ber 1.300 S&ouml;ldner in den Dienst Herzog Ludwigs,
          Racek von Janovice und R&yacute;zmberk etwa 1.000, und
          Mikul&aacute;&scaron; Kapl&iacute;ř von Sulevice und Vimperk war mit
          etwa 900 Mann im herzoglichen Heer vertreten. Dar&uuml;ber hinaus
          verf&uuml;gten mehrere weitere Condottieri und S&ouml;ldnerf&uuml;hrer
          &uuml;ber starke Kontingente von bis zu mehreren hundert Mann.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kriegsverlauf</h5>
        <p>
          Im M&auml;rz 1460 brach der offene bewaffnete Konflikt aus, der nach
          den traditionellen Formen der Fehde gef&uuml;hrt wurde. Als Graf
          Ulrich V. von W&uuml;rttemberg (regierte 1433&ndash;1480) und
          Pfalzgraf Ludwig von der Pfalz-Zweibr&uuml;cken, Verb&uuml;ndete
          Albrechts III. Achilles, im Rahmen des Badisch-Pf&auml;lzischen
          Krieges die Kurpfalz angriffen, ergriff Ludwig der Reiche die Partei
          Kurf&uuml;rst Friedrichs von der Pfalz
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Bayerischer_Krieg_(1459%E2%80%931463)"
          />{' '}
          und lie&szlig; unter dem Vorwand der Umsetzung des
          B&uuml;ndnisvertrags seine l&auml;ngst vorbereiteten Truppen gegen
          Markgraf Albrecht in das hohenzollerische Franken einmarschieren. Das
          herzogliche Heer war dem Heer des Markgrafen klar &uuml;berlegen und
          erzielte einige rasche Erfolge. Zun&auml;chst richtete sich der
          Hauptsto&szlig; des bayerischen Angriffs gegen das Bistum
          Eichst&auml;tt, da Bischof Johann von Eich ein Verb&uuml;ndeter
          Markgraf Albrechts war. Nach kurzer Belagerung fiel die Stadt
          Eichst&auml;tt am <b>7.</b> bis <b>11. April 1460</b> in die
          H&auml;nde des Herzogs, und Bischof Johann wurde gezwungen, einen
          Vertrag zu unterzeichnen, der die Unabh&auml;ngigkeit seines Bistums
          gegen&uuml;ber Bayern dauerhaft stark einschr&auml;nkte. Mitte April
          setzte Herzog Ludwig seinen Feldzug in Franken fort und marschierte
          &uuml;ber Heideck und Hilpoltstein zur kleinen markgr&auml;flichen
          Stadt Roth, die er am <b>27. April 1460</b> zu belagern begann. Mit
          einer kurzen Unterbrechung zwischen dem 30. April und dem 3. Mai,
          verursacht durch Versorgungsschwierigkeiten, errichtete das Heer, das
          inzwischen wohl etwa 20.000 Mann stark war, ein befestigtes Lager bei
          Roth, von dem aus wiederholt Erkundungsvorstö&szlig;e einzelner
          S&ouml;ldnerkontingente in markgr&auml;fliches Gebiet unternommen
          wurden. Unter anderem wurde die Stadt Windsbach in Brand gesetzt, und
          die b&ouml;hmischen S&ouml;ldner des Herzogs pl&uuml;nderten das
          Augustinerkloster in Pillenreuth bei N&uuml;rnberg.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
        <p>
          Am <b>5. Mai 1460</b> erschien Markgraf Albrecht mit einem Heer von
          etwa 10.000 Mann vor Roth und lagerte sich in
          &bdquo;Kanonenschussweite&ldquo; vom bayerischen Milit&auml;rlager
          entfernt. W&auml;hrend der folgenden sieben Wochen fanden keine
          gr&ouml;&szlig;eren Schlachten statt, die f&uuml;r den Kriegsverlauf
          entscheidend h&auml;tten sein k&ouml;nnen, obwohl die Gegner so nahe
          beieinander lagen. Stattdessen kam es fast t&auml;glich zu kleineren
          Gefechten zwischen den Lagern oder zu gegenseitigem Beschuss aus der
          Wagenburg. Gleichzeitig trafen weitere Verst&auml;rkungen vor Roth
          ein, sodass die Heere weiter anwuchsen. Herzog Ludwig soll
          schlie&szlig;lich &uuml;ber etwa 30.000 Mann in seinem Heer
          verf&uuml;gt haben, der Markgraf &uuml;ber mehrere Tausend weniger.
          Angesichts der dramatisch angespannten Lage vor dem belagerten Roth,
          in der keine Seite nachzugeben bereit war, h&auml;tte jederzeit eine
          Entscheidungsschlacht ausbrechen k&ouml;nnen. Unterdessen nahmen
          jedoch die diplomatischen Bem&uuml;hungen um eine friedliche Beilegung
          des Konflikts auf beiden Seiten wieder zu und zeitigten bald erste
          Erfolge, obwohl beide Hauptgegner kaum zum Frieden geneigt waren.
          Herzog Ludwig betrachtete sich als den milit&auml;rischen Sieger des
          Krieges, w&auml;hrend Markgraf Albrecht den R&uuml;ckzug des
          bayerischen Heeres forderte, bevor er &uuml;berhaupt zu verhandeln
          bereit war. Erst die drohende Aufl&ouml;sung seines Heeres durch den
          Abzug s&auml;chsischer Verb&uuml;ndeter zwang Markgraf Albrecht
          schlie&szlig;lich zum Nachgeben. Das Ergebnis der
          Vergleichsverhandlungen war die sogenannte <i>Rother Richtung</i> vom{' '}
          <b>24. Juni 1460</b>, die als ein vollst&auml;ndiger Erfolg
          wittelsbachischer Politik erscheint. Die &bdquo;blinden
          Spr&uuml;che&ldquo; von N&uuml;rnberg wurden aufgehoben, die
          Zust&auml;ndigkeit des N&uuml;rnberger Gerichts erheblich
          eingeschr&auml;nkt, das Bistum Eichst&auml;tt blieb unter bayerischem
          Einfluss, und Herzog Ludwig musste die besetzten markgr&auml;flichen
          Gebiete nicht r&auml;umen. &Uuml;ber weitere strittige Fragen, wie die
          Entsch&auml;digung der Kriegskosten oder die R&auml;umung besetzter
          Gebiete, sollte der b&ouml;hmische K&ouml;nig Georg von Podiebrad als
          Schiedsrichter fungieren. Als am <b>4. Juli 1460</b> auch Pfalzgraf
          Friedrich seine Gegner in der Schlacht bei Pfeddersheim besiegte,
          schien es, als ob die Wittelsbacher und ihre Verb&uuml;ndeten auf der
          ganzen Linie triumphierten.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00162.html"
          />
        </p>
        <p>
          Der fragile Frieden sollte jedoch erneut nicht von Dauer sein.
          In&nbsp;den folgenden Monaten versuchte Markgraf Albrecht von
          Brandenburg wiederholt, seine j&uuml;ngste Anerkennung der{' '}
          <i>Rother Richtung</i> zu widerrufen. Im Gegensatz dazu beharrte
          Ludwig von Bayern-Landshut auf seinen erworbenen territorialen
          Positionen in&nbsp;Franken, ohne den Kompromissbem&uuml;hungen der
          Vermittler entgegenzukommen. Dabei wusste er, dass der b&ouml;hmische
          K&ouml;nig Georg, der sich aufgrund der Ablehnung des Vorschlags
          bez&uuml;glich der deutschen K&ouml;nigswahl endg&uuml;ltig von
          Markgraf Albrecht abgewandt hatte, mehr denn je auf seiner Seite
          stand.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00163.html"
          />
        </p>
        <p>
          Neben K&ouml;nig Georg war ein weiteres wichtiges Glied im
          wittelsbachischen B&uuml;ndnissystem Erzherzog Albrecht VI. von
          &Ouml;sterreich, Bruder und dynastischer Rivale des Kaisers. Als
          dieser im&nbsp;Sommer 1461 im Streit um das &ouml;sterreichische Erbe
          des 1457 verstorbenen Ladislaus Postumus den offenen Krieg gegen den
          Kaiser er&ouml;ffnete, l&ouml;ste dies auch eine neue Runde von
          Auseinandersetzungen zwischen den Wittelsbachern und Markgraf Albrecht
          von Brandenburg mit&nbsp;ihren jeweiligen Verb&uuml;ndeten aus. Herzog
          Ludwigs milit&auml;rische B&uuml;ndnishilfe f&uuml;r Erzherzog
          Albrecht bot Kaiser Friedrich einen Vorwand, ihm im&nbsp;Juli 1461 den
          Krieg zu erkl&auml;ren. Als Reichshauptleute bestellte er neben
          Markgraf Karl von Baden und Graf Ulrich von W&uuml;rttemberg auch
          Markgraf Albrecht III. Achilles, der darin eine Gelegenheit sah, die{' '}
          <i>Rother Richtung</i> zu revidieren. Wie schon 1459 im Streit um
          Donauw&ouml;rth verband Albrecht hier Reichspolitik mit&nbsp;seiner
          Hegemonialpolitik in&nbsp;S&uuml;ddeutschland und &Ouml;sterreich.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00163.html"
          />
        </p>
        <p>
          &Auml;hnlich wie im Vorjahr war Herzog Ludwig auf den herannahenden
          Konflikt besser vorbereitet als sein Gegner. Bereits
          im&nbsp;Fr&uuml;hsommer 1461 begann er mit den Kriegsvorbereitungen,
          die erneut eine erfolgreiche Anwerbung von S&ouml;ldnern
          in&nbsp;B&ouml;hmen einschlossen. Mindestens 2.000 B&ouml;hmen traten
          ab August in seinen Dienst und verst&auml;rkten das herzogliche Heer,
          das mit insgesamt 16.000 Mann das Heer Markgraf Albrechts weit
          &uuml;bertraf. Racek von Janovice und R&yacute;zmberk entsandte etwa
          500 S&ouml;ldner, Přib&iacute;k &Scaron;atava erschien
          mit&nbsp;&uuml;ber 400 Mann aus&nbsp;S&uuml;db&ouml;hmen, Jan Jenec
          von Janovice und Petr&scaron;purk mit&nbsp;etwa 250 Mann aus
          Westb&ouml;hmen &ndash; dies waren die gr&ouml;&szlig;ten Kontingente.
          Dar&uuml;ber hinaus leistete auch der b&ouml;hmische K&ouml;nig aktive
          milit&auml;rische Unterst&uuml;tzung, der dem Markgrafen die Fehde
          erkl&auml;rte und ein starkes Heer gegen die oberfr&auml;nkischen
          Gebiete der Hohenzollern marschieren lie&szlig;. Auch wenn der
          milit&auml;rische Erfolg dieses Einsatzes begrenzt blieb, band er
          dennoch wichtige Kr&auml;fte des Markgrafen, die dieser auf dem
          Haupt-Kriegsschauplatz in Mittelfranken dringend ben&ouml;tigte.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00164.html"
          />
        </p>
        <p>
          Diesmal stie&szlig; Herzog Ludwig mit seinem Heer noch tiefer in
          markgr&auml;fliches Gebiet vor als im Jahr zuvor. Neustadt an der
          Aisch und Uffenheim wurden erobert, Windsbach, Heilsbronn und andere
          Orte schwer besch&auml;digt. Insgesamt sollen gleich zu Beginn des
          Feldzugs 18 markgr&auml;fliche St&auml;dte, Orte und Burgen in die
          H&auml;nde des bayerischen Herzogs gefallen sein, der zusammen
          mit&nbsp;den Kontingenten der verb&uuml;ndeten fr&auml;nkischen
          Bisch&ouml;fe und Pfalzgraf Friedrichs das Schlachtfeld beherrschte.
          Markgraf Albrecht, der vergeblich auf die versprochenen
          Verst&auml;rkungen seiner Verb&uuml;ndeten wartete, musste sich darauf
          beschr&auml;nken, Ansbach und Schwabach zu halten und von dort aus
          gelegentliche &Uuml;berf&auml;lle gegen das herzogliche Heer zu
          starten. Erst als im&nbsp;Oktober die Verb&uuml;ndeten aus
          verschiedenen Gr&uuml;nden Herzog Ludwigs Heer verlie&szlig;en und die
          angespannte Versorgungslage, die sich mit dem Einsetzen widrigen
          Wetters weiter verschlechterte, die Notwendigkeit einer Teilung des
          Heeres aufzeigte, &auml;nderte sich die Lage allm&auml;hlich.
          Entscheidend war jedoch das Verhalten des b&ouml;hmischen K&ouml;nigs,
          der die ihm vom Kaiser angebotene Vermittlerrolle annahm, die
          b&ouml;hmischen Kontingente aus&nbsp;Oberfranken abzog und Herzog
          Ludwig aufforderte, auch die in seinem Dienst stehenden
          b&ouml;hmischen S&ouml;ldner zu entlassen. Markgraf Albrecht nutzte
          den darauf folgenden bayerischen R&uuml;ckzug sofort aus, indem er in
          rascher Folge nahezu alle von den Bayern besetzten Orte
          zur&uuml;ckeroberte.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00164.html"
          />
        </p>
        <p>
          Als sich die streitenden Parteien im&nbsp;November 1461
          schlie&szlig;lich in&nbsp;Prag trafen, um durch K&ouml;nig Georg die
          M&ouml;glichkeiten eines Friedensschlusses zu er&ouml;rtern, standen
          die Chancen auf eine Einigung somit kaum besser als vor Beginn des
          Krieges. W&auml;hrend Herzog Ludwig nicht bereit war, hinter die
          Bestimmungen der <i>Rother Richtung</i> zur&uuml;ckzugehen und
          stattdessen immer &uuml;berz&ouml;genere Forderungen nach
          Kriegsentsch&auml;digung stellte, f&uuml;hlte sich der Markgraf nach
          seinen j&uuml;ngsten Erfolgen nicht mehr als Besiegter und zeigte
          daher wenig Bereitschaft, sich &uuml;berhaupt an Verhandlungen zu
          beteiligen. Den im&nbsp;Dezember geschlossenen Waffenstillstand
          ignorierte er mit dem Argument, er habe keine G&uuml;ltigkeit f&uuml;r
          den noch unbeendeten Reichskrieg gegen Herzog Ludwig. Und als Markgraf
          Albrecht sicher war, dass der Kaiser hinter ihm stand, erneuerte er
          den Krieg gegen die Wittelsbacher tats&auml;chlich im&nbsp;Januar
          1462.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00165.html"
          />
        </p>
        <p>
          1462 wirkten jedoch, anders als im Vorjahr, die Aufrufe Kaiser
          Friedrichs an die Reichsst&auml;dte zum Kampf gegen Herzog Ludwig. Die
          Kr&auml;fteverh&auml;ltnisse entwickelten sich daher diesmal anders
          als in den Feldz&uuml;gen von 1460 und 1461. Die schw&auml;bischen
          St&auml;dte, angef&uuml;hrt von Augsburg und Ulm, beteiligten sich nun
          aktiv am Krieg gegen Herzog Ludwig, der diesmal auch den Schwerpunkt
          der milit&auml;rischen Operationen st&auml;rker in den
          schw&auml;bischen Raum verlagerte. Allerdings konnte das Reichsheer
          seine anf&auml;ngliche &Uuml;berlegenheit nicht ausnutzen. Es gelang
          Herzog Ludwig relativ schnell, erneut ein starkes Heer aufzustellen
          &ndash; wiederum mit starker Beteiligung von S&ouml;ldnern
          aus&nbsp;B&ouml;hmen, deren Zahl f&uuml;r dieses Jahr jedoch nicht
          bestimmt werden kann. Dar&uuml;ber hinaus nahm der b&ouml;hmische
          K&ouml;nig den Krieg gegen die markgr&auml;flichen Gebiete um
          Wunsiedel wieder auf. Mit zwei gro&szlig;en Erfolgen im Sommer schien
          dann die Entscheidung endg&uuml;ltig zugunsten der Wittelsbacher zu
          fallen. Am <b>30. Juni 1462</b> gelang Pfalzgraf Friedrich ein
          vernichtender Sieg &uuml;ber seine Gegner aus S&uuml;dwestdeutschland
          in der Schlacht bei Seckenheim, in der Markgraf Karl von Baden und
          Graf Ulrich von W&uuml;rttemberg von der Pfalz gefangen genommen
          wurden. Einen &auml;hnlichen Erfolg erzielte auch Herzog Ludwig von
          Bayern-Landshut mit seinem Sieg &uuml;ber das von Markgraf Albrecht
          gef&uuml;hrte Reichsheer am <b>19. Juli 1462</b> bei Giengen.
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
          <h6>
            Der Badisch-Pf&auml;lzische Krieg und die Schlacht bei Seckenheim
          </h6>
          <p>
            Er war Teil der erzbisch&ouml;flichen Auseinandersetzung um die
            Besetzung der Mainzer Erdi&ouml;zese, auch als
            Badisch-Pf&auml;lzischer Krieg bekannt. 1459 wurde der
            Domadministrator Diether von Isenburg mit knapper Mehrheit gegen
            Adolf von Nassau zum neuen Erzbischof von Mainz gew&auml;hlt. Der
            Preis f&uuml;r diese Wahl war der Beitritt zum antipf&auml;lzischen
            B&uuml;ndnis, und Diether war somit gezwungen, gegen Pfalzgraf
            Friedrich I. zu marschieren, verlor aber am <b>4. Juli 1460</b> die
            entscheidende Schlacht bei Pfeddersheim. 1461 berief Diether einen
            F&uuml;rstentag in N&uuml;rnberg ein, auf dem er f&uuml;r Reichs-
            und Kirchenreformen eintrat. Er forderte nachdr&uuml;cklich die
            Abschaffung der p&auml;pstlichen Annatenforderungen durch ein
            allgemeines Konzil. Seine kritische Haltung gegen&uuml;ber Papst
            Pius II. und Kaiser Friedrich III. f&uuml;hrte am{' '}
            <b>21. August 1461</b> zu seiner Absetzung und Exkommunikation durch
            den Papst.
            <Qt
              publication={PUBLICATIONS.WIKI}
              href="https://de.wikipedia.org/wiki/Diether_von_Isenburg"
            />{' '}
            Der Papst setzte daraufhin am <b>1. Oktober 1461</b> seinen Rivalen
            Adolf von Nassau auf den erzbisch&ouml;flichen Thron in Mainz.
            Diether weigerte sich jedoch, das Erzbistum aufzugeben,
            unterst&uuml;tzt von der Stadt Mainz, seinem Bruder Ludwig und nun
            auch seinem einstigen Feind Friedrich I. von der Pfalz, der f&uuml;r
            seine Hilfe die St&auml;dte Lorsch, Heppenheim und Bensheim erhielt.
            Adolf verb&uuml;ndete sich mit dem Erzbischof von Trier, Johann II.
            von Baden, Bischof Georg von Metz, Bischof Johann II. von Hoheneck
            von Speyer und Graf Ulrich V. von W&uuml;rttemberg. Markgraf Karl I.
            von Baden versuchte zun&auml;chst, zwischen den verfeindeten
            Parteien zu vermitteln, schlug sich dann aber zusammen mit seinem
            Bruder, Bischof Georg von Metz, auf die Seite Adolfs, was zum
            Badisch-Pf&auml;lzischen Krieg f&uuml;hrte, einem Versuch der
            gewaltsamen Eroberung der Di&ouml;zese.
            <Qt
              publication={PUBLICATIONS.WIKI}
              href="https://de.wikipedia.org/wiki/Mainzer_Stiftsfehde"
            />
          </p>
          <p>
            Die Gegner Friedrichs I. beabsichtigten, von S&uuml;den in die Pfalz
            einzufallen, da sie glaubten, der Kurf&uuml;rst befinde sich mit
            seinen Truppen in Bayern, um Herzog Ludwig IX. gegen Albrecht III.
            Achilles zu helfen, und versammelten daher ein Heer von 10.000 Mann
            bei Pforzheim. Ein Milit&auml;rlager wurde zwischen Roth und St.
            Leon errichtet, und eine aus F&uuml;rsten und Rittern bestehende
            Reiterei verbrannte die umliegenden Felder und D&ouml;rfer und
            massakrierte die Einwohner. Friedrich I. befahl seinen Vasallen und
            deren Bewaffneten, sich in Leimen zu versammeln, wo er unbemerkt
            seine Kr&auml;fte zusammenziehen konnte. Er selbst traf erst am 29.
            Juni ein und beobachtete von dort aus die n&auml;chtlichen
            Aktivit&auml;ten seiner Feinde. Boten wurden zum Erzbischof von
            Mainz, Diether von Isenburg, sowie zu den Grafen von Leiningen und
            Katzenelnbogen entsandt, die sich am linken Rheinufer befanden und
            bereit waren, &uuml;ber Altrip in den Unteren Dossenwald zu
            marschieren. Die Zahl der K&auml;mpfer, die Walnussbl&auml;tter an
            ihre Kleidung hefteten &ndash; die Erkennungszeichen der
            pf&auml;lzischen Streitkr&auml;fte &ndash;, wuchs durch den
            gro&szlig;en Zulauf von Bauern aus der Umgebung. Die badischen
            Truppen hingegen hefteten Haferb&uuml;schel an ihre Kleidung.
            <Qt
              publication={PUBLICATIONS.SECKENHEIM}
              href="https://www.historisches-seckenheim.de/index.php/ortsgeschichte/123-schlacht-bei-seckenheim"
            />
          </p>
          <p>
            In der Nacht zum 30. Juni marschierte er mit etwa 300 Reitern und
            zus&auml;tzlicher Infanterie durch den Schwetzinger Wald zum
            &bdquo;Frohnholz&ldquo; (dem heutigen Dossenwald) s&uuml;dlich von
            Seckenheim, das die kaiserlichen Truppen am folgenden Tag
            niederbrennen wollten. W&auml;hrend des Marsches wurden die
            pf&auml;lzischen Streitkr&auml;fte durch weitere etwa 300 Reiter und
            zus&auml;tzliche Infanterie aus den Kontingenten des Erzbischofs von
            Mainz, Diether von Isenburg, und Graf Philipps von Katzenelnbogen
            verst&auml;rkt.
            <Qt
              publication={PUBLICATIONS.SECKENHEIM}
              href="https://www.historisches-seckenheim.de/index.php/ortsgeschichte/123-schlacht-bei-seckenheim"
            />
          </p>
          <p>
            Als die kaiserlichen Angreifer am folgenden Morgen aus ihrem
            befestigten Lager aufbrachen und mit 700 bis 800 Reitern auf
            Seckenheim vorr&uuml;ckten, um es niederzubrennen, wurden sie
            unerwartet von hinten durch 600 Reiter der pf&auml;lzischen Seite
            angegriffen, mit dem Schlachtruf des Pfalzgrafen:{' '}
            <Cit>Hut Palatzgraff oder nimmer mee!</Cit> (Halt stand, Pfalzgraf,
            oder nimmermehr!)
            <Qt
              publication={PUBLICATIONS.SECKENHEIM}
              href="https://www.historisches-seckenheim.de/index.php/ortsgeschichte/123-schlacht-bei-seckenheim"
            />
            , w&auml;hrend die Infanterie von etwa 2.000 Mann von Friedrich I.
            in einem nahen Wald au&szlig;er Sicht gehalten wurde. Friedrichs
            zahlm&auml;&szlig;ig unterlegene Reiterei nahm eine gestaffelte
            Formation ein, mit Schwerbewaffneten im Zentrum und zwei Reihen
            berittener Bogenschützen an den Flanken. Nach einem kurzen
            anf&auml;nglichen Feuergefecht prallten die schweren Reiterein
            beider Heere aufeinander, und Friedrichs Ritter verhinderten nur
            knapp den Durchbruch der verb&uuml;ndeten Schwerbewaffneten.
            W&auml;hrend die Reiter gegeneinander k&auml;mpften, trat Friedrichs
            Infanterie aus ihrem Versteck hervor und umzingelte die kaiserlichen
            Verb&uuml;ndeten. Einer Gruppe von etwa 300 verb&uuml;ndeten Reitern
            gelang zwar der Ausbruch, die daraufhin die pf&auml;lzischen Knechte
            angriff, die auf ihre Schwerbewaffneten warteten, und diese
            t&ouml;tete, doch &auml;nderte dies nichts mehr am Ausgang der
            Schlacht.
            <Qt
              publication={PUBLICATIONS.WIKI}
              href="https://en.wikipedia.org/wiki/Battle_of_Seckenheim"
            />
            Ulrich von W&uuml;rttemberg weigerte sich, die Niederlage zu
            akzeptieren, wurde aber von Hans von Gemmingen zum Zweikampf
            herausgefordert, der rief: <Cit>Zkusím štěstí s Vaší Milostí!</Cit>{' '}
            (Ich will mein Gl&uuml;ck mit Eurer Gnaden versuchen!) und wurde
            besiegt. 45 verb&uuml;ndete Ritter fielen, und etwa 400 weitere
            Reiter wurden gefangen genommen. Die &Uuml;brigen zerstreuten sich
            in der Umgebung und brachten die schreckliche Nachricht ins Lager
            bei St. Leon. Dort brach man in Panik zum R&uuml;ckzug auf, aus
            Furcht vor der Rache des Pfalzgrafen und seiner erbitterten
            Untertanen. Das pf&auml;lzische Heer errang einen entscheidenden
            Sieg, wobei 45 Ritter get&ouml;tet und 124 Adlige sowie 204 Knappen
            gefangen genommen wurden, w&auml;hrend auf eigener Seite 12 Ritter
            fielen. Unter den Gefangenen befanden sich drei feindliche
            Heerf&uuml;hrer: Markgraf Karl I. von Baden mit 40 Adligen und 79
            Knappen, Graf Ulrich von W&uuml;rttemberg mit 45 Adligen und 71
            Knappen sowie Bischof Georg von Metz mit 39 Adligen und 53 Knappen.
            Lediglich Ludwig von Zweibr&uuml;cken entkam der Gefangennahme. Bis
            zum folgenden Jahr wurden die F&uuml;rsten gegen hohe Summen und
            bedeutende Gebiete freigekauft.
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
              alt="Feldplan vom Juli 1462"
              className="fit"
            />
          </Link>
          <p>
            <br />
            Die Stiftsfehde war damit jedoch noch nicht beendet. Weitere
            K&auml;mpfe forderten viele Opfer und richteten &uuml;berall
            Verw&uuml;stungen an, und die Stadt Mainz selbst erlitt schwere
            Sch&auml;den. In der Nacht zum <b>28. Oktober 1462</b> gelang es
            Adolf von Nassau, mit 500 Mann durch den Verrat Mainzer B&uuml;rger
            &uuml;ber das Gautor in die Stadt einzudringen, und nach 12 Stunden
            Stra&szlig;enkampf bem&auml;chtigte er sich der Stadt. 400 Menschen
            verloren ihr Leben, und Adolfs M&auml;nner pl&uuml;nderten und
            verbrannten die Stadt, einschlie&szlig;lich des Dominikanerklosters.
            Als &bdquo;Strafe&ldquo; f&uuml;r die Unterst&uuml;tzung Diethers
            entzog Adolf der Stadt ihre Freiheitsprivilegien und damit ihren
            Status als freie Stadt; die Stadt kam unter die Verwaltung eines vom
            Erzbischof ernannten Vizedominus. Am folgenden Tag wurden die
            B&uuml;rger auf den Dietmarkt gerufen. Alle 800 B&uuml;rger, die
            erschienen, wurden aus der Stadt vertrieben; etwa 400 von ihnen
            wurden etwas sp&auml;ter wieder aufgenommen und durften in Mainz
            bleiben.
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
          Doch auch diese wittelsbachischen Erfolge beendeten den Krieg nicht.
          Stattdessen machte sich die schwere Belastung der bayerischen Finanzen
          durch die Kriegf&uuml;hrung, vor allem durch das gro&szlig;e
          S&ouml;ldnerheer, bemerkbar. Die Mittel Herzog Ludwigs des Reichen
          waren ersch&ouml;pft. Kurz nach seinem Triumph bei Giengen sah er sich
          daher gezwungen, den gr&ouml;&szlig;ten Teil seiner S&ouml;ldner zu
          entlassen, was die milit&auml;rische Lage erneut ver&auml;nderte.
          Fortan wurde die Szenerie in&nbsp;S&uuml;ddeutschland von
          fortdauerndem Kleinkrieg mit wechselnden Erfolgen bestimmt.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00165.html"
          />
        </p>
        <p>
          Dar&uuml;ber hinaus fanden erneut Verhandlungstreffen statt, um die
          Konflikte endg&uuml;ltig beizulegen. Nach dem Ende August 1462
          in&nbsp;N&uuml;rnberg geschlossenen Waffenstillstand folgten weitere
          m&uuml;hsame Verhandlungen.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00166.html"
          />{' '}
          Erst ein Jahr sp&auml;ter, im Juli 1463, fand in Prag ein
          Friedenskongress unter der F&uuml;hrung des b&ouml;hmischen
          K&ouml;nigs Georg von Podiebrad statt, der sich inzwischen
          mit&nbsp;Kaiser Friedrich III. vers&ouml;hnt hatte. Mit dieser
          Initiative hoffte der utraquistische K&ouml;nig, die von Papst Pius
          II. angedrohte Exkommunikation abzuwenden. Nach komplexen
          Verhandlungen wurde am <b>22. und 23. August 1463</b> ein aus mehreren
          Einzelvertr&auml;gen bestehender Friedensvertrag geschlossen.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Prager_Frieden_(1463)"
          />{' '}
          Der sogenannte <i>Prager Frieden</i> l&ouml;ste nicht alle strittigen
          Fragen, erwies sich aber dennoch als dauerhaft. Beide Seiten mussten
          Zugest&auml;ndnisse machen. W&auml;hrend Markgraf Albrecht III.
          Achilles seine Pl&auml;ne zur Vorherrschaft in Franken, die er durch
          die St&auml;rkung des N&uuml;rnberger Landgerichts zu erreichen
          versucht hatte, endg&uuml;ltig aufgeben musste, wurde Herzog Ludwig
          IX. verpflichtet, die noch besetzten markgr&auml;flichen Gebiete zu
          r&auml;umen und alle Entsch&auml;digungsanspr&uuml;che mit dem
          Markgrafen zu regeln. Dennoch gelang es ihm, sich zu behaupten, was in
          seinem Fall als Erfolg gewertet werden kann. Ein Erfolg, den er in
          erster Linie seinem starken S&ouml;ldnerheer verdankte, das zu einem
          gro&szlig;en Teil &ndash; wahrscheinlich sogar &uuml;berwiegend
          &ndash; aus b&ouml;hmischen S&ouml;ldnern bestand.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00166.html"
          />
        </p>
      </Col>
    </Row>
  </>
)
