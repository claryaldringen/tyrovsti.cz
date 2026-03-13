import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const JobstVonEinsiedl = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="jobst-of-einsiedl" />
        <h4>Jobst von Einsiedl (um 1420 – 1474){draft && <DraftBadge />}</h4>
        <p>
          Jobst wurde in eine bürgerliche Familie in der kleinen Stadt Einsiedl,
          dem heutigen Mnichov im Bezirk Eger, vermutlich im Jahr 1420 geboren.
          Er hatte eine enge Verbindung zur Stadt Eger und schien mit den
          angesehenen Egerer Familien der Schmidels und Puchelberger verwandt zu
          sein, da er Jorg Schmidel seinen Bruder und Clement Puchelberger
          seinen Onkel nannte, doch über diese verwandtschaftliche Beziehung ist
          nichts Näheres bekannt. Er erhielt eine höhere Ausbildung an der nahe
          gelegenen Klosterschule in Teplá und lernte dort vermutlich
          Tschechisch. Dank seiner Bildung war er besonders geeignet, als
          Sekretär und Schreiber zu dienen, insbesondere während des
          Interregnums (1439–1453), als die böhmischen Herren eigenständig
          Politik betrieben. Schreiber, die beide Landessprachen beherrschten,
          wurden besonders jenen böhmischen Herren empfohlen, die kein Deutsch
          sprachen, obwohl sie bei ihren häufigen Kontakten mit den benachbarten
          deutschen Regionen nicht darauf verzichten konnten. So entschuldigte
          beispielsweise Herr Jan von Házmburk seinen auf Tschechisch verfassten
          Brief an die Stadt Eger damit, dass ihm sein deutscher Schreiber
          gerade nicht zur Verfügung stehe. In dieser Eigenschaft erscheint
          Jobst tatsächlich im Dienst der Herren Aleš und Petr Holický von
          Šternberk, die zu jener Zeit das nahe gelegene Bečov nad Teplou
          besaßen.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=4"
          />
        </p>
        <p>
          Im Februar 1447 wandte sich Herzog Wilhelm von Sachsen an Petr Holický
          von Šternberk, um ein Heer in Böhmen für den Sächsischen Bruderkrieg
          (1446–1451) anzuwerben. Das Heer sollte sich bei Eger versammeln,
          wobei Jobst mit den administrativen und organisatorischen
          Angelegenheiten betraut wurde. In einem Brief vom 13. Februar 1447
          schrieb Herzog Wilhelm:
          <Cit>
            Wir bedorffen wol eins endlichen diners, der dutschs und behemisch
            kan, uff den wir glauben gesetzen (...), dorzu uns Jobst, uwer
            diener, wol fuglich were.
          </Cit>{' '}
          (Wir brauchen unbedingt einen Diener, der Deutsch und Tschechisch
          kann, dem wir vertrauen können (...), dazu wäre uns Jobst, Euer
          Diener, wohl geeignet.)
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00258.html?context=%22Jobst+von+Einsiedl%22&leftTab=PER_ent"
          />
        </p>
        <p>
          Diese böhmischen Söldner konnten wegen eines folgenden
          Waffenstillstands nicht am Sächsischen Bruderkrieg teilnehmen und
          traten nahtlos in den Dienst des Erzbischofs von Köln, Dietrich II.,
          in der Soester Fehde über. Da Petr Holický von Šternberk der
          Oberbefehlshaber des gesamten böhmischen Korps war, wird angenommen,
          dass Jobst als Petrs rechte Hand an dem gesamten Soester Feldzug
          teilnahm.
        </p>
        <p>
          Jobsts nächstes bedeutendes Wirken fand 1450 statt, als Georg von
          Podiebrad nach dem Sieg über die Strakonitzer Union in der Schlacht
          bei Mýto am <b>4. Juni 1450</b>
          <Qt
            publication={PUBLICATIONS.MACEK}
            href="https://www.vhu.cz/exhibit/macek-josef-jiri-z-podebrad/"
          />{' '}
          seinen Feldzug gegen deren Verbündete führte, insbesondere gegen
          Herzog Friedrich von Sachsen, was zur Eroberung der Stadt Gera führte.
          Am folgenden Tag, dem <b>23. Oktober 1450</b> (einige Quellen nennen
          den <b>16. Oktober 1450</b>), wurde ein Waffenstillstand geschlossen.
          Jobst von Einsiedl, der an diesem Feldzug im Gefolge des Herrn Petr
          Holický von Šternberk teilgenommen hatte, schrieb seinen Brief am{' '}
          <b>25. Oktober 1450</b> aus dem Feldlager bei Salza, nahe Plavno, den
          ersten erhaltenen Brief an die Stadt Eger.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=5"
          />{' '}
          Eger war durch das zurückkehrende böhmische Heer bedroht, da im März
          1450 der Egerer Rat es abgelehnt hatte, Georg von Podiebrad und seine
          Parteigänger zur Verhandlung mit den deutschen Fürsten in die Stadt zu
          lassen, weshalb diese stattdessen in Wunsiedel abgehalten werden
          mussten. In dem Brief warnte Jobst die Bürger und drängte sie, eine
          Einigung zu suchen. Die Vermittlung übernahmen Aleš und Petr Holický
          von Šternberk, die mit ihrem Sekretär Jobst von Einsiedl den Egerer
          Gesandten sicheres Geleit gewährten. Die Verhandlungen fanden auf Burg
          Skalná (Vildštejn) statt. Auf dem Weg zum Treffen wurden die Egerer
          Diplomaten, die Geschenke für Georg von Podiebrad bei sich trugen,
          jedoch überfallen und ausgeraubt. Auch Jobst von Einsiedl wurde
          angegriffen, rettete aber sein Leben, indem er versprach, die
          Angreifer nicht zu verraten.
          <Qt publication={PUBLICATIONS.JANSKY} />
        </p>
        <p>
          Nach den Verhandlungen in Vildštejn erkaufte sich die Stadt
          schließlich mit 1000 Goldgulden Lösegeld frei:{' '}
          <Cit>
            Item wir haben geben vnd ausgerichthern Girziken tousent guldein,
            die jn der rat zu pranttschaczgeben musst.
          </Cit>{' '}
          (Wir haben Herrn Georg 1000 Goldgulden gegeben, die der Rat als
          Lösegeld geben musste.)
          <br />
          Petr von Šternberk erhielt 200 Goldgulden für die Vermittlung des
          Abkommens, und auch andere Vermittler wurden belohnt:{' '}
          <Cit>
            Geben dem Endresen I schock XXIII gr. zerung fur Hans von Kocza vnd
            fur den Jobst des von Sternbergs schreiber, als er zwischen eyn rat
            vnd den Behmen teidigat.
          </Cit>{' '}
          (Gegeben dem vorgenannten 1 Schock und 23 Groschen für Hans von Kotzau
          und für Jobst, den Schreiber der Šternberks, der an den Verhandlungen
          zwischen dem Rat und den Böhmen teilnahm.)
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=5"
          />
        </p>
        <p>
          Jobst von Einsiedl blieb bei den Herren von Šternberk bis Ende 1453
          oder vielleicht Anfang 1454, denn am <b>24. Juni 1453</b> schrieb
          Jobst noch unter dem Befehl des Herrn Aleš von Šternberk. Danach trat
          er in den Dienst des Landesverwesers Georg von Podiebrad,
          möglicherweise motiviert durch familiäre Bande zur Familie Šternberk.
          Am <b>28. Oktober 1454</b> richtete er als Sekretär Georgs an den
          Görlitzer Schreiber einen Brief, in dem er die bevorstehende Ankunft
          des Verwesers mit König Ladislaus ankündigte und um die Reservierung
          der erforderlichen Unterkünfte bat. Entsprechend wurde das Reskript
          Georgs an den Bürgermeister und Rat von Eger vom{' '}
          <b>30. Januar 1455</b> in Breslau bereits von Jobst verfasst.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=6"
          />
        </p>
        <p>
          In dieser Zeit wurde Jobst von Einsiedl von König Ladislaus Postumus
          ein Wappen verliehen, das von Kaiser Friedrich III. am{' '}
          <b>23. November 1455</b> gebessert wurde.
          <Qt publication={PUBLICATIONS.PELANT} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="polepseni.jpg"
        width={1920}
        height={1252}
        title="Originale lateinische Aufzeichnung der Wappenbesserung Jobsts vom 23. November 1455 in Graz."
      />
    </Row>
    <Row>
      <Col>
        <p>
          In seiner Rolle als Verweser eröffnete sich Jobst ein breites und
          bedeutendes Wirkungsfeld. Da Georg bekanntlich wenig Deutsch sprach,
          war sein Geheimsekretär absolut unentbehrlich. Wenn er nicht gerade
          auf irgendeiner Mission abwesend war, befand er sich stets an der
          Seite des Landesverwesers und begleitete ihn auf seinen großen
          Feldzügen in Mähren, Schlesien und Österreich, wobei er oft Handel
          trieb, wie in Brünn, und seine Freunde in Eger mit offensichtlicher
          Zufriedenheit über die erfolgreichen Errungenschaften des Statthalters
          informierte. Obwohl er Katholik war und der römischen Kirche
          bedingungslos ergeben, bewahrte er seinem utraquistischen Herrn stets
          unerschütterliche Treue, indem er – eine Seltenheit zu jener Zeit –
          religiöse Überzeugungen von der Treue zum Dienst zu trennen wusste.
          Deshalb genoss er auch das volle Vertrauen und die Gunst Georgs und
          wurde oft mit Aufgaben betraut, die besondere Sorgfalt und
          Zuverlässigkeit erforderten.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=7"
          />
        </p>

        <p>
          Nach dem Tod König Ladislaus Postumus&apos; am{' '}
          <b>23. November 1457</b> begannen Gerüchte zu kursieren, der junge
          König sei von Georg von Podiebrad vergiftet worden. Auf der
          Versammlung in Wien am <b>21. Januar 1458</b> verteidigte Jobst von
          Einsiedl energisch gegen diese Anschuldigungen. Jobst argumentierte,
          dass es in der Geschichte nie vorgekommen sei, dass die Böhmen einen
          König vergiftet hätten. Ihm zufolge seien die Böhmen treue Untertanen
          des Königs gewesen und hätten sich ihm freiwillig in allem
          unterworfen, was die Könige Sigismund und Albrecht mit Gewalt zu
          erobern suchten (Wiederherstellung der königlichen Güter, Abgaben,
          Hilfe gegen die Türken). Letztlich erkannte die Versammlung aufgrund
          von Jobsts Argumentation an, dass der König durch Gottes Willen
          verstorben war.
          <Qt publication={PUBLICATIONS.PAPAJIK} note="page 224" />
        </p>
        <p>
          Wie bereits erwähnt, wurde Jobst oft mit Aufgaben betraut, die
          besondere Sorgfalt und Zuverlässigkeit erforderten. Eine solche
          Situation ergab sich unmittelbar nach Georgs Wahl zum König. Auf der
          großen Wahlversammlung in Prag am <b>1. März 1458</b> beriefen sich
          die Vertreter Herzog Wilhelms von Sachsen auf alte Urkunden, die auf
          Karlštejn aufbewahrt wurden, um die Ansprüche seiner Frau auf die
          böhmische Thronfolge besser zu untermauern. Der Verweser entsandte
          sofort seinen Kammerherrn und Jobst von Einsiedl, seinen Schreiber,
          mit einem angemessenen Gefolge nach Karlštejn, um die entsprechenden
          Dokumente zu holen, die den versammelten Ständen am folgenden Tag
          vorgelegt wurden. Als Georg von Podiebrad am selben Tag zum König
          ausgerufen wurde, begrüßte Jobst dieses bedeutende Ereignis mit
          unverhüllter Freude und teilte es sofort Eger mit, wo die Nachricht
          freudig aufgenommen wurde (nur die Antwort aus Eger ist erhalten). Da
          Georg bereits in den vorangegangenen Jahren durch seine eifrigen
          Bemühungen um die Wahrung des Friedens berühmt geworden war, war seine
          Wahl für eine Stadt wie Eger, die an den Grenzen verschiedener
          Regionen lag und regen Handel trieb, besonders wünschenswert. Außerdem
          versicherte Jobst den Bürgern von Eger der Gunst des Königs und
          ermahnte sie, die Verleumdungen und Drohungen ihrer Nachbarn zu
          ignorieren, sondern fest und standhaft zu bleiben. Für Jobst selbst
          hatte Georgs Wahl eine weitere Folge, da ihn der neue König in jenem
          Sommer in den Ritterstand erhob, wie die Glückwünsche der Egerer vom{' '}
          <b>29. Juli 1458</b> bezeugen
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=7"
          />{' '}
          oder ein Transsumpt der Bulle Papst Pius&apos; II. vom März 1459, das
          Jobst als <Cit>Jodocus de Eynsedil, milites Pragensis</Cit> nennt.
          <Qt publication={PUBLICATIONS.BOUKAL} /> Zusammen mit der Erhebung in
          den Ritterstand erhielt er ein Erbgut im Wert von 500 Schock Groschen
          auf dem Gut Makotrasy. Um diese Zeit erwarb er auch die Dörfer Skryje
          und Tytry. Um dem König jedoch die Rückzahlung seiner Schuld an den
          Prager Burggrafen Zdeněk von Šternberk zu ermöglichen, gab Jobst das
          besagte Erbgut zurück und lieh zusätzlich 500 Schock Groschen in bar,
          wofür ihm der König am <b>2. Juli 1460</b> die Burg Týřov mit der
          Stadt Kožlany, den Dörfern Mlečice, Chmelištná, Zavidov, Týřovice,
          Broumy, Kouřimec, Újezdec, Hudlice mit allen Einkünften und Steuern in
          Novosedly verschrieb. Es wurde festgelegt, dass Jobst zu seinen
          Lebzeiten nicht ausgezahlt werden dürfe, und nach seinem Tod dürfe nur
          der König selbst die Güter für 600 Schock Groschen zurückkaufen. Gemäß
          der Bestimmung muss die Burg Týřov jederzeit offen bleiben, und wenn
          der König wegen Kriegen Ausgaben dafür tätigen sollte, geschähe dies
          ohne Nachteil für Jobst. Mit den Wäldern hat weder Jobst noch seine
          Erben etwas zu schaffen, noch dürfen sie Holz verkaufen, sondern es
          nur ungehindert für Brennstoff und Burgreparaturen entnehmen. Bei der
          Jagd auf Kleinwild und Vögel war Jobst frei, während er mit Wissen des
          Křivokláter Burggrafen jährlich 3 Hirsche und 10 Rehe erlegen durfte,
          wobei dieser verpflichtet war, ihm Hunde und Welpen zu leihen. Da die
          Burg Reparaturen an Mauern, Fundamenten und Gebäuden benötigte, legte
          der König Jobst zusätzlich 100 Schock Groschen für Reparaturen hinzu.
          Sollte die Burg von Jobst eingenommen werden, sind die Könige
          verpflichtet, ihm bei der Rückeroberung zu helfen oder ihn innerhalb
          von zwei Jahren zu entschädigen.
          <Qt publication={PUBLICATIONS.KOCKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="tyrov.jpg"
        width={797}
        height={600}
        title="Ruine von Týřov, Stich von Václav A. Berger (1800) nach einer Zeichnung von F. K. Wolf (1797)"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Als königlicher Sekretär hatte Jobst die Gelegenheit, der Stadt Eger
          durch Rat oder Fürsprache beim König viele Dienste zu erweisen. Dies
          zeigte sich an den königlichen Reskripten nach Eger, von denen viele
          mit <Cit>ad relationem Jodoci de Eynsedel secr.</Cit> gekennzeichnet
          sind. Die Stadt wurde aufgrund ihrer exponierten Lage häufig von der
          einen oder anderen Seite beschuldigt. Sie hatte häufige Streitigkeiten
          mit anderen Territorien sowie mit ihren eigenen Untertanen, die ihre
          rechtlichen Bindungen an die Stadt lösen wollten, und auch Probleme
          mit dem Abt von Waldsassen über die Gerichtsbarkeit in mehreren
          Dörfern, darunter Albenreuth (heute Mýtina, Teil der Gemeinde Lipová),
          die sowohl von klösterlichen als auch von städtischen Untertanen
          bewohnt wurden. Jobst wurde oft um seine Fürsprache gebeten. Er war
          bereit, Auskunft zu geben, sofern es keine Amtsgeheimnisse betraf, die
          er stets streng wahrte. Er handelte jedoch immer mit großer Vorsicht,
          und obwohl dies ebenfalls lobenswert ist, überrascht es den Leser
          unangenehm, wenn es zum Beispiel mitten in einem interessanten Brief
          heißt:
          <Cit>
            Obwohl ihr selbst den Grund dieser Angelegenheit erfahren wollt,
            könnt ihr einen der Ratsfreunde, der mir bekannt ist, schicken, und
            ihr werdet die ganze Sache gründlich erfahren.
          </Cit>
          Andererseits fehlte es der Stadt nicht an Anerkennung. Bei
          verschiedenen Gelegenheiten machte sie ihrem Freund ein Geldgeschenk,
          wie das Egerer Ausgabenbuch belegt. So etwa zu Weihnachten 1458:
          <Cit>
            Item so haben wir desmals durch Paul Ruduschen hern Jobst von
            Aynsidel awszgericht XII guldein, damit jn der rat vereret.
          </Cit>{' '}
          (So haben wir damals durch Paul Ruduschen Herrn Jobst von Einsiedl XII
          Goldgulden überreicht, um ihn zu ehren.) Auch im folgenden Jahr:{' '}
          <Cit>
            Item geben hern Jobsten von Aynsidel X gulde. r. damit jn unser hern
            verereten, als er jn das wortt redt ken vnsern hern konig von des
            abtes von Waltsassen wegen.
          </Cit>{' '}
          (Ebenso wurden Herrn Jobst von Aynsidel zehn Goldgulden gegeben, damit
          unsere Herren ihn ehren, da er im Auftrag unseres Herrn des Königs in
          den Angelegenheiten mit dem Abt von Waldsassen das Wort führte.) Und
          als der Stadtrat den König mit mehreren Fässern des damals beliebten
          Egerer Mets ehrte, ging auch ein Fass an Jobst mit dem Wunsch, dass er
          es{' '}
          <Cit>
            es mit seiner Gemalin in Fröhlichkeit und Gesundheit auszutrinken
          </Cit>{' '}
          (es mit seiner Gemahlin in Fröhlichkeit und Gesundheit austrinke).
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
          Jobst war aktiv an der Organisation der Versammlung in Eger im
          Frühjahr 1459 beteiligt, die darauf abzielte, Streitigkeiten zwischen
          Böhmen und Sachsen durch Vermittlung des politisch gewandten
          Markgrafen Albrecht von Brandenburg beizulegen. Jobst traf zu Ostern,
          am <b>25. März 1459</b>, in Eger ein, um die Ankunft des Königs am{' '}
          <b>8. April 1459</b> anzukündigen, und informierte den Rat über alle
          Einzelheiten, Erfordernisse und sonstigen Angelegenheiten im
          Zusammenhang mit dem Besuch. So hatte die Stadt reichlich Zeit, sich
          im Voraus vorzubereiten. König Georg traf am <b>7. April 1459</b> in
          Eger ein, mit seiner Gemahlin Johana von Rožmitál, seinem Sohn
          Viktorin und seiner Tochter Zdena, begleitet von einem großen Gefolge,
          darunter zahlreiche Diener und bedeutende Vertreter des böhmischen und
          mährischen Adels. Zu seinem Gefolge gehörten 43 Adlige und 16 Ritter,
          insgesamt etwa 900 Reiter und 100 Wagen, darunter mehrere bedeutende
          Persönlichkeiten des böhmischen Adels.
          <Qt publication={PUBLICATIONS.POSPISIL} />
        </p>
      </Col>
      <ImageWithTitle
        src="spalicek.jpg"
        width={516}
        height={568}
        title="Der Egerer Marktplatz in einer Darstellung von 1472"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Beim Einzug in die Stadt bereiteten die Bürger dem König einen
          feierlichen Empfang und geleiteten ihn mit einem Baldachin über dem
          Haupt zu einem Haus direkt am Marktplatz, wo er untergebracht wurde.
          Der Eigentümer des Hauses am Marktplatz, in dem der König logierte,
          war der Ratsherr Kašpar Junker, der zu jener Zeit einer der
          herausragendsten Persönlichkeiten des städtischen Patriziats war und
          mehrfach hintereinander zum Bürgermeister gewählt worden war. Da Georg
          von Podiebrad in seinem Haus untergebracht wurde, kann angenommen
          werden, dass dieses Haus zu den am besten ausgestatteten der Stadt
          gehörte.
          <Qt publication={PUBLICATIONS.POSPISIL} />
        </p>

        <p>
          Am <b>8. April 1459</b> trafen auch Vertreter des Reichsadels in Eger
          ein: Albrecht von Brandenburg kam einen Tag nach Georg, also am 8.
          April, und Kurfürst Friedrich von der Pfalz am 9. April. Sie wurden
          von anderen Edelleuten und verschiedenen Räten begleitet. (Unter den
          Räten muss der international anerkannte Diplomat Martin Mayer
          unbedingt erwähnt werden.) Später trafen auch vier Herzöge aus Sachsen
          ein, nämlich der sächsisch-meißnische Kurfürst Friedrich mit seinen
          beiden Söhnen Ernst und Albrecht sowie sein Bruder Wilhelm von
          Sachsen. Zusammen mit ihnen kamen weitere 13 Reichsgrafen mit ihren
          Gemahlinnen. Ferner trafen der bayerische Herzog Otto, der Erzbischof
          von Magdeburg, Räte des Herzogs Ludwig von Landshut, Gesandte des
          Bischofs von Würzburg, Räte des Herzogs von München, Albrecht, und
          Räte des österreichischen Herzogs Albrecht ein. Jeder von ihnen kam
          mit einem sehr großen Gefolge, das Dutzende bis Hunderte von
          Mitgliedern umfasste.
          <Qt publication={PUBLICATIONS.POSPISIL} />
        </p>
        <p>
          Die Verhandlungen, die offiziell am <b>10. April 1459</b> begannen
          <Qt publication={PUBLICATIONS.POSPISIL} />, sahen Jobst tief
          eingebunden, da er auf Befehl und Weisung des Königs häufig mit
          Markgraf Albrecht von Brandenburg zusammentraf. Er verhandelte mit dem
          Markgrafen am <b>9. April 1459</b>, spät am Abend, und bei dieser
          Gelegenheit plädierte er leidenschaftlich für eine Einigung mit
          Sachsen, indem er darlegte, dass, wenn die Angelegenheit an den Kaiser
          oder die Kurfürsten verwiesen würde, ein Ende{' '}
          <Cit>nirgends in Sicht</Cit> wäre. Am nächsten Tag, als der Markgraf
          mit sächsischen Räten in der Residenz des Königs im Haus des Kašpar
          Junker erschien, um die Angelegenheit weiter zu erörtern, fungierte
          Jobst von Einsiedl als Dolmetscher. Als die Verhandlungen
          abgeschlossen waren und sie Eger verließen, erhielt er von der Stadt
          ein Geschenk von 100 Schock Groschen für den König:{' '}
          <Cit>
            Item wir haben awszgericht vnserm hern konygk au newen groschen 1
            <sup>e</sup>
            schok gr., domit jn der rat vererat - hub auf her Jobst von Aynsidel
          </Cit>{' '}
          (So haben wir unserem Herrn König wiederum 100 Schock Groschen
          überreicht, als Ehrenbezeigung des Rates – übergeben an Herrn Jobst
          von Einsiedl).
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=9"
          />
        </p>

        <div className="anchor" id="1" />
        <p>
          Jobst hatte vermutlich eine ähnliche Aufgabe bei der Versammlung, die
          ebenfalls in Eger zu Lichtmess 1461 abgehalten wurde. Erneut wurde
          Jobst wohl eine wichtige Rolle zugewiesen, wie sein Brief vom{' '}
          <b>14. Dezember 1460</b> an den Bürgermeister und Rat von Eger belegt,
          in dem er bittet:
          <Cit>
            ihm eine Unterkunft bei seinem Bruder (Jorg Smidel) bereitzustellen,
            da er einen bequemen Platz zum Ausruhen brauche, zumal er nicht viel
            schlafen können werde, da er viel Arbeit habe und in der Nähe des
            Königs bleiben müsse.
          </Cit>
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=9"
          />
          Während dieser Versammlung leistete er auch juristische Dienste im
          Streit zwischen Eger und dem Abt von Waldsassen über Albenreuth. Dafür
          und für andere Dienste erhielt er neben zehn Goldgulden eine Arkebuse
          und vier Handkanonen, allesamt in Nürnberg gefertigt.
          <Qt publication={PUBLICATIONS.JANSKY} />
        </p>
        <p>
          Da Kaiser Friedrich III. Georgs Söhne Viktorin, Jindřich und Hynek am{' '}
          <b>7. Dezember 1462</b> in Korneuburg in den Reichsfürstenstand erhob,
          wurden Jobst, Zdeněk von Šternberk und Prokop von Rabštejn zum Kaiser
          entsandt, um die Fürstenmäntel und -hüte zurückzubringen, die am{' '}
          <b>21. Februar 1463</b> am Königshof in Prag feierlich überreicht
          wurden.
          <Qt publication={PUBLICATIONS.FELCMAN} />
        </p>
        <p>
          Infolge dieser diplomatischen Tätigkeit gewann Jobst von Einsiedl
          beträchtlichen Einfluss und unterhielt schriftlichen Briefverkehr mit
          ausländischen Fürsten, insbesondere mit Markgraf Albrecht von
          Brandenburg. Bemerkenswert ist, dass der Markgraf Jobst 1463 einen
          vertraulichen Brief sandte, in dem er ihn über die Bemühungen des
          päpstlichen Legaten gegen den König informierte.{' '}
          <Cit>Dast wollest</Cit> (Das wollest Du), fährt der Brief fort,{' '}
          <Cit>
            in grosser geheim vnnsern herrn dem konig sagen, dann es warlich
            also ist
          </Cit>{' '}
          (unserem Herrn dem König in großer Geheimhaltung sagen, denn es ist
          wahrlich so). Jobst übermittelte auch wiederholt Nachrichten vom
          böhmischen Hof an den Markgrafen (ein Brief vom <b>4. Juli 1464</b>{' '}
          und drei Briefe aus dem Jahr 1469 sind erhalten). Der Einfluss des
          königlichen Sekretärs zeigte sich bei verschiedenen Gelegenheiten. Aus
          der Ferne suchte man seine Fürsprache, so zu Beginn des Jahres 1463
          die Stadt Zgorzelec. 1464 vermittelte Jobst zusammen mit Kanzler
          Prokop von Rabštejn und Heinrich, Herrn von Gera, auf Befehl des
          Königs einen Streit zwischen Heinrich von Plauen und Günter von Bünau.
          Unterdessen warf eine neu gegründete Adelsvereinigung erneut die Frage
          auf, wer genau die Reichsinsignien beaufsichtigen solle, und mehrere
          Herren und Ritter, darunter Jobst von Einsiedl aus Týřov, wurden mit
          der Überführung der auf Karlštejn aufbewahrten Staatsdokumente nach
          Prag und deren Beaufsichtigung beauftragt. Eines der Symptome der
          zunehmend scharfen Auseinandersetzungen im religiösen und politischen
          Bereich war die religiöse Verwirrung, die zur Entstehung vieler Sekten
          führte. Jobst hatte eine solche in seinem interessanten Brief vom{' '}
          <b>17. September 1466</b> im Sinn. Diese war mit den Namen Liwin und
          Janek von Wirsberg verbunden, franziskanischen apokalyptischen
          Predigern, die in der Egerer Region tätig waren und von den Predigten
          Johannes Capistrans und den Predigten Johannes Rokycanas in Eger 1451
          beeinflusst wurden. Aus Furcht vor einem Interdikt und auch weil König
          Georg sich gegen die Lehren der Wirsberger ausgesprochen hatte,
          verbannte der Stadtrat die Wirsberger aus der Stadt. Jobst erscheint
          in seinem Brief als eifriger Katholik, und an seinen interessanten
          Ausdrücken erkennen wir einen dogmatisierenden Laien, wie es damals
          viele gab, besonders in Böhmen. Er nahm den Verfall des Glaubens
          zutiefst zu Herzen und ließ es in einer Klage gipfeln,{' '}
          <Cit>
            das die werlt so falscher list ime mer ist, vnd nicht ansicht vnd
            betracht den gemein rechten cristen glawben
          </Cit>{' '}
          (dass die Welt immer schlimmer werde und der wahre Glaube nicht
          allgemein beachtet werde) – eine Klage, die die beschaulichen Seelen
          seiner Zeit teilten. Die Ereignisse nahmen dann jedoch einen
          unaufhaltsamen Lauf, der Georgs schwindenden Stern zum Erlöschen
          brachte. Der Fluch, der ihn traf, verschlang auch seine Getreuen, und
          ganze Regionen stöhnten unter der Last des Interdikts. Selbst die
          Stadt Eger, die ihrem König lobenswerte Treue bewahrt hatte (nachdem
          sie am <b>4. September 1461</b> den Treueid geschworen hatte), wurde
          entschieden von politischen Gründen beeinflusst. Seit 1315 war die
          Stadt Eger und ihr Gebiet Pfandbesitz der böhmischen Krone. Auf ihre
          Privilegien vertrauend, die einen günstigen Sonderstatus abgrenzten,
          hielt sie sich von allen Bewegungen in Böhmen fern und schwor Treue
          und Huldigung nur dem gekrönten König. Einem König wie Matthias zu
          huldigen, dem eine Krone fehlte, hätte leicht einen gefährlichen
          Präzedenzfall schaffen können. Daher verweigerte die Stadt trotz
          wiederholter Ermahnungen die Huldigung an den Usurpatorkönig und zog
          es vor, das Interdikt über sich verhängen zu lassen. Dass Jobst nicht
          wankte, ist nach allem Gesagten leicht verständlich. Als Mann des
          Gewissens und des Charakters bewahrte er seinem König die Treue, ohne
          auch nur im Geringsten den demütigenden Gehorsam gegenüber der
          strafenden Kirche zu verletzen. Obwohl seinen Lippen kein Wort des
          Vorwurfs entwich, musste er alle Schwierigkeiten ertragen; als
          Katholik hatte er die Utraquisten zu Feinden und als Anhänger des
          exkommunizierten Königs seine eigenen Glaubensgenossen, aus deren
          Gemeinschaft ihn die Kirche ausgeschlossen hatte. Seine Güter wurden
          verwüstet, die Dörfer seiner Untertanen niedergebrannt und zerstört
          (er bezifferte seine Verluste auf 300 Schock Groschen). König Georg
          erkannte den Schaden an und schrieb ihm 1466 100 Schock Groschen für
          den Bau von Teichen gut und gewährte ihm die Gnade, dass sein Sohn
          Heinrich zu dessen Lebzeiten nicht von Týřov ausgezahlt werden könne.
          Angesichts dieser Verwüstung kämpfte Jobst einen harten Kampf mit sich
          selbst; denn Gewissen und Glaube, kirchliche Gebote und geschworene
          Treue standen in ständigem Widerstreit: der erbitterte Kampf, der die
          ganze Epoche erschütterte, spiegelt sich in der Brust dieses Mannes
          wider, der entschlossen an dem festhielt, was er in seiner schlichten
          Seele als recht und gut erkannte. Schließlich entschied er sich für
          leidenden Gehorsam, weil es um den Glauben ging, den er durch
          Widerstand <Cit>nicht schwächen helfen</Cit> wollte. So teilte er
          dasselbe Schicksal wie die verbündete Stadt Eger, die er zu trösten
          und im Gehorsam zu stärken suchte. Erst als er sah, dass es seinen
          Gegnern weniger um den Glauben als um die Beute ging, griff er zum
          Schwert, um den Frieden zu sichern.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=12"
          />
        </p>

        <p>
          Nach dem Tod König Georgs von Podiebrad am <b>22. März 1471</b> war
          Jobst Anfang Mai 1471 erfolgreich an der Beilegung eines Streits
          zwischen Eger und dem höchsten Prager Burggrafen Jan Jenc von Janovice
          auf Petršpurk beteiligt. Weniger erfolgreich war er bei dem Versuch,
          Eger mit seinem Nachbarn Beneš von Libštejn aus dem Hause Kolovrat zu
          versöhnen. Nachdem Vladislav II. Jagiello am <b>27. Mai 1471</b> den
          Thron bestiegen hatte, blieb Jobst im Amt des Sekretärs.
          <Qt publication={PUBLICATIONS.JANSKY} />
        </p>
        <p>
          1472 erwarb Jobst von König Vladislav dieselben Stadtrechte für
          Kožlany wie Rakovník hatte, einschließlich eines Wappens und der
          Erlaubnis, eine Brauerei in Kožlany zu errichten. Ab Juni 1472
          verhandelte er auch einen Rechtsstreit zwischen sich und Friedrich von
          Šumburk. Jobst beschuldigte die Diener Friedrichs von Šumburk, seine
          Kühe gestohlen zu haben, die später{' '}
          <Cit>na jeho páně Šumburkuov zámek</Cit> (auf seiner, des Herrn
          Šumburks Burg) gefunden wurden. Sollte Šumburk nicht vor Gericht gegen
          Jobst erscheinen, musste er Jobst für die gestohlenen Kühe
          entschädigen.
          <Qt publication={PUBLICATIONS.KOCKA} />
        </p>
        <p>
          Zu den bedeutenden Missionen, an denen Jobst im Dienst von Vladislav
          teilnahm, gehörten die Verhandlungen mit Friedrich III. zwischen
          1473–1474, bei denen er zusammen mit Burian II. von Gutštejn und Beneš
          von Libštejn aus dem Hause Kolovrat anwesend war. Den Verhandlungen,
          die in Augsburg stattfanden, gingen mehrere andere Treffen mit
          Albrecht von Brandenburg voraus, die zur Anerkennung Vladislavs als
          legitimen König von Böhmen führten. Die langen Verhandlungen mit
          Friedrich III. gipfelten in der Vereinbarung militärischer Operationen
          in Österreich gegen Matthias Corvinus und den rebellischen
          österreichischen Adel.
          <Qt publication={PUBLICATIONS.JANSKY} />
        </p>
        <p>
          1473 gewährte König Vladislav Jobst das Recht der Toten Hand auf das
          Gut in Hlince, und im selben Jahr bestätigte er alle von König Georg
          verliehenen Privilegien und erlaubte ihm zusätzlich, bis zu vier
          Hirsche oder Hirschkühe in den Wäldern zu erlegen, und stellte
          insbesondere 50 Schock Groschen für Burgreparaturen bereit. Jobst
          starb jedoch im folgenden Jahr. Am <b>11. Juli 1474</b> war er noch am
          Kammergericht anwesend, doch 1476 lebte er nicht mehr, wie aus einem
          Brief vom <b>17. April 1476</b> hervorgeht:{' '}
          <Cit>Wie etwen herre Jobst vom Eynsidel, demegot gnade</Cit> (Gott hab
          Erbarmen mit Herrn Jobst von Einsiedl).
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=50&bookid=488&page=12"
          />
          &nbsp;
          <Qt publication={PUBLICATIONS.KOCKA} />
        </p>
      </Col>
    </Row>
  </>
)
