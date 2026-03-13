import React from 'react'
import { Col, Row } from 'reactstrap'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const Tartsche = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="targe" />
        <h3>Die Tartsche{draft && <DraftBadge />}</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Die Tartsche ist eine späte Entwicklung des Reiterschildes, die im
          gesamten 15. Jahrhundert verwendet wurde. Grundsätzlich lässt sich
          sagen, dass eine kompliziertere Form auf eine spätere Datierung der
          Tartsche hindeutet. Sie wurde typischerweise aus Lindenholz gefertigt,
          mit Pergament, Leinen oder einer Kombination aus beidem überzogen. Der
          Gesso (eine Mischung aus fein gemahlenem Kreide und Leim) wurde auf
          die Bespannung aufgetragen und bildete die Grundlage für die Bemalung
          mit Temperafarben.
        </p>
        <p>
          Tartschen wurden wie andere Schilde zumeist von spezialisierten
          Handwerkern hergestellt, den Schildmachern, die enge Verbindungen zu
          Malern hatten. Im Jahr 1348 gründeten Maler und Schildmacher der
          Prager Städte die Bruderschaft des Heiligen Lukas
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="S. 20" /> und
          umfassten auch verwandte Handwerker wie Glaser, Buchbinder, Schnitzer,
          Pergamentmacher, Goldschmiede, Illuminatoren, Kupferstecher und
          andere.
          <Qt
            publication={PUBLICATIONS.WINTER2}
            href="https://kramerius5.nkp.cz/view/uuid:660b7500-029f-11e4-9789-005056827e52?page=uuid:6e11f0e0-1d56-11e4-8413-5ef3fc9ae867"
          />
          Innerhalb der Bruderschaft kam es jedoch früh zu Streitigkeiten
          zwischen Malern und Schildmachern, wie Privilegien belegen, die von
          Karl IV. und Wenzel IV. gewährt wurden. Schildmacher fertigten Schilde
          sowie einige Sattlerstücke und Hausschilder, einschließlich deren
          gemalter Verzierungen. Maler (magistri pictoriae artis, geistliche
          Maler) malten Bilder und Altäre, nahmen aber manchmal die Arbeit der
          Schildmacher an sich und hinderten sie daran, ihre Produkte auf den
          Märkten der Altstadt (Prag) auszustellen und zu verkaufen, da die
          Schildmacher unterhalb der Mauern und Türme der Neustadt (Prag)
          ansässig waren und dort ihre Arbeit ausführen und verkaufen sollten.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="S. 20" />
        </p>
        <p>
          Der Streit wurde durch ein von Karl IV. am <b>16. Januar 1365</b>{' '}
          gewährtes Privileg beigelegt: Die Schildmacher, die an den Türmen der
          Neustadtmauern angesiedelt waren, wurden — wie die Schützen — zusammen
          mit ihren Knechten von allen Steuern, Diensten und Abgaben befreit,
          waren aber verpflichtet, dem König oder seinem Marschall bei Bedarf zu
          dienen (zur Stadtverteidigung). Daher durften sie wie die Schützen
          Schwert, Messer und Rüstung (Harnisch) tragen, um die Stadtmauern zu
          verteidigen. Im Streit mit <Cit>geistlichen Malern</Cit>, die die
          Schildmacher nicht dulden wollten (d. h. deren Verpflichtungen
          gegenüber der Stadt nicht mittragen wollten), wurde entschieden, dass
          Maler keine Schilde bemalen durften. Nur Schildmacher durften
          Tartschen und Schilde (tarczschen und stechschilt) herstellen. Wer
          jedoch Schildwerk (schiltwerk) anfertigte und in den Türmen wohnte,
          durfte seine Arbeit nirgendwo anders als unterhalb der Türme
          verkaufen. Das Privileg wurde von Wenzel IV. am <b>6. Januar 1380</b>{' '}
          erneuert.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="S. 21" />
        </p>
        <p>
          Die Vereinbarungen wurden offenbar nicht eingehalten, und 1392 wandten
          sich die Schildmacher erneut mit einer Beschwerde an den König, dass
          die geistlichen Maler ihnen weiterhin die Arbeit wegnähmen und
          Schildwerk (schiltwerk) malten, das den Schildmachern und nicht den
          Malern gehöre. Wenzel IV. bestätigte mit einem Privileg vom{' '}
          <b>30. März 1392</b> die Privilegien der Schildmacher und verfügte,
          dass Maler keine Schilde bemalen durften und Schildmacher ihre Bilder
          (ire bylde) und Hausschilde (ire helme und schilte an den hewsern in
          derselben stat zu Prage) auf den Märkten der Großen Stadt Prag
          verkaufen konnten. Damit wurden die langwierigen Streitigkeiten
          eindeutig zugunsten der Schildmacher beigelegt, die nun in ihrem
          Handwerk vor der Konkurrenz der Maler geschützt waren und zudem die
          Freiheit erhielten, ihre Produkte auf dem öffentlichen Markt zu
          verkaufen.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="S. 22" />
        </p>
        <p>
          Im Laufe des 15. Jahrhunderts spaltete sich die ursprüngliche
          Bruderschaft in die Altstädter Zunft (zu der auch die Burg, Hradschin
          und Kleinseite gehörten) und die Neustädter Zunft auf. Einige
          gemeinsame Angelegenheiten wurden in der <Cit>Vollzunft</Cit>{' '}
          behandelt, in der Meister aus <Cit>beiden Prager Städten</Cit>{' '}
          vertreten waren. Trotz interner Streitigkeiten zwischen Schildmachern
          und Malern fielen alle mit der Malerei zusammenhängenden Arbeiten in
          den Interessenbereich der Zunft. Dies wird am besten durch das
          Privileg König Ludwigs von 1523 charakterisiert, enthalten in einer
          Bestätigungsurkunde Rudolfs II. von 1595: dass kein fremder Meister
          Gegenstände herstellen durfte, die zur Prager Zunft der Maler und
          Glaser gehörten, nämlich
          <Cit>
            tabulí, arch, korouhví, praporcův, dekův, svíc pozlacených a
            dřevěných, dříví jezdeckého malého neb velkého, pavez, terčí i
            jiných věcí všech, kteréž se barvami dělají
          </Cit>{' '}
          (Tafeln, Bögen, Banner, Fahnen, vergoldete und hölzerne Kerzen,
          kleines oder großes Reitausrüstung, Pavesen, Tartschen und andere
          Gegenstände, die mit Farben hergestellt wurden).
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="S. 22" />
        </p>
        <p>
          Dass dies bereits im 14. Jahrhundert der Fall war, belegen Einträge im
          ersten Buch der Prager Malerbruderschaft, sowohl Namen und
          Abrechnungen der Schildmacher als auch eine Aufzeichnung über{' '}
          <Cit>malovaném dříví</Cit> (bemaltes Holz), wenn auch unvollständig.
          Der Begriff <Cit>malované dříví</Cit> (bemaltes Holz) bezieht sich auf
          Turnierreitausrüstung, d. h. Turnierlanzen (dřevce) für Turniere, wie
          in den Privilegien sowohl Karls IV. (stechgezewge) als auch König
          Ludwigs <Cit>dříví jezdecké malé nebo velké</Cit> (kleine oder große
          Reitausrüstung) erwähnt, die aufgrund der anspruchsvollen
          Handwerkskunst keine gewöhnliche Sattlerarbeit darstellte und zu den
          bemalten Waren gehörte. Innerhalb der Zunft im 14. Jahrhundert war
          dies vermutlich eher die Arbeit der Schildmacher als der Meister der{' '}
          <Cit>pictoriae artis</Cit>.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="S. 22" />
        </p>
        <p>
          Im Laufe des 15. Jahrhunderts verschmolzen die Schildmacher und Maler
          vollständig innerhalb der gemeinsamen Zunft. Als Beleg dient eine
          Vereinbarung von 1445 zwischen Meister Šícha und Jan, Sohn des
          Meisters Štefánek, in der Šícha sich verpflichtete, ihm die Kunst der
          Malerei beizubringen, nicht nur Schildmacherei, sondern auch
          Bildermalerei. Lehrlinge wurden somit in die Kenntnisse beider
          Handwerkszweige eingeführt. Im Laufe der Zeit verschwand die
          Schildmacherei als eigenständiges Gewerbe allmählich. Ihr malerischer
          Aspekt wurde zur Domäne der Maler — sie übernahmen den künstlerischen
          Teil des Schildmacherhandwerks, das Bemalen von Pavesen, Tartschen und
          Turnierausrüstung, während der handwerkliche Teil des alten
          Schildmachergewerbes bei anderen Handwerken verblieb, insbesondere bei
          Sattlern und Zaumzeugmachern. Ende des 14. Jahrhunderts begannen die
          Schildmacher (beispielsweise in den Privilegien Wenzels IV. von 1380
          und 1392) aus dem Zunfttitel zu verschwinden, und anstelle der
          Schildmacher wurden neben den Malern zunehmend Glasmacher erwähnt,
          deren Bedeutung mit der Entwicklung der mittelalterlichen Produktion
          und Kultur wuchs. Aufzeichnungen im Zunftbuch zeigen jedoch, dass sich
          einige Maler weiterhin auf die Herstellung bemalter Pavesen
          spezialisierten. Ein Beispiel sind die <Cit>Tartschengebühren</Cit>{' '}
          und die Art und Weise, wie Maler ihre Pflicht erfüllten, der Stadt
          jährlich eine bestimmte Anzahl von Schilden zu liefern, was eine
          interessante Geschichte hat.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="S. 22" />
        </p>
        <p>
          Laut der Präambel im Privileg von 1458 waren die Altstädter Meister
          der Maler- und Glasmacherzünfte
          <Cit>
            listy a právy starodávnými vyňati a zproštěni z vojen i ze všech
            lozunkuov a poplatkuov městských
          </Cit>{' '}
          (durch alte Briefe und Rechte von Kriegsdienst und allen städtischen
          Abgaben und Steuern befreit), aber
          <Cit>
            povinni byli každý rok tři štíty nebo pláště branné stojaté veliké k
            městu udělati ... a k tomu oděncuov branných devět na věže městské
            nebo k městským branám vydávati.
          </Cit>{' '}
          (sie waren verpflichtet, jedes Jahr drei große stehende Schilde oder
          Schutzumhänge für die Stadt anzufertigen ... und neun Bewaffnete für
          die Stadtmauern oder -tore zu stellen.)
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="S. 22" />
        </p>
        <p>
          Diese <Cit>alten Briefe</Cit> werden im nächsten Satz dieser Präambel
          genauer datiert:
          <Cit>
            To my važiece a rozumějíce, že město Nové tehdáž nebylo ještě
            ohrazeno, a skrze to oděnci takoví byli sú, již toho se potřebie
            nezdá; a místo plášťov již každý rok dělají k městu pavézy.
          </Cit>{' '}
          (Wir erwägen und verstehen, dass die Neustadt damals noch nicht
          befestigt war, und daher solche Soldaten nötig waren; statt der
          Umhänge fertigen sie nun jedes Jahr Pavesen für die Stadt an). Die
          Gründungsurkunde von 1348 legte die Richtlinien für die Befestigung
          der Neustadt fest, bezüglich der Anlage, des Verkehrsnetzes und der
          Torstandorte. Die Befestigungen selbst wurden zwischen 1348 und 1350
          errichtet. In dieser Zeit verloren die Mauern zwischen Alt- und
          Neustadt an Bedeutung, ebenso wie die Pflicht der Maler, gemäß den
          alten Briefen neun Wachen an den Türmen und Toren aufzustellen, die
          daher irgendwann vor der Mitte des 14. Jahrhunderts erlassen worden
          sein müssen.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="S. 23" />
        </p>
        <p>
          Die Altstädter Meister lieferten die drei großen stehenden Schilde
          oder Schutzumhänge jedoch nur im 14. Jahrhundert. Zu einem unbekannten
          Zeitpunkt, spätestens vor den Hussitenkriegen, änderte sich die
          Regelung dahingehend, dass sie statt der drei großen Schutzumhänge 10
          Pavesen an die Stadt liefern mussten. Dies geht aus einem Eintrag in
          den Altstädter Grundbüchern vom <b>7. Februar 1430</b> hervor, als
          eine weitere Änderung stattfand. Die Meister ersuchten den Altstädter
          Rat um Erleichterung dieser Pflicht aufgrund von Armut und Not, die
          sie während des Krieges und der Unruhen erlitten hatten. Der Rat
          gewährte ihre Bitte und reduzierte die geforderte Anzahl von Schilden
          (alias Pavesen) um zwei, sodass sie fortan verpflichtet waren, nur
          acht Schilde jährlich zu liefern. Dies sollte eine vorübergehende
          Maßnahme sein, bis sie wieder reichlicher von ihrem Handwerk
          profitierten.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="S. 23" />
        </p>
        <p>
          Trotz dieses Vorbehalts blieb die Erleichterung für die Altstädter
          Meister lange bestehen. Als sie 1458 alle ihre Privilegien der Stadt
          zur Bestätigung vorlegten, umfassten die Privilegien nicht nur die
          genannten <Cit>alten Rechte</Cit> aus der ersten Hälfte des 14.
          Jahrhunderts, sondern auch{' '}
          <Cit>jiné kusy popsané, jim a řemeslóm jich příhodné a potřebné</Cit>{' '}
          (andere beschriebene Artikel, die ihnen und ihren Handwerken nützlich
          und notwendig waren). Darunter befand sich sicherlich auch die
          Erleichterung von 1430. Der Beschluss des Altstädter Rats vom{' '}
          <b>13. November 1458</b> war daher eine Bestätigung der kumulierten
          Privilegien, sowohl alter als auch neuer. So ist der Beschluss des
          Altstädter Rats vom <b>13. November 1458</b> zu verstehen:
          <Cit>
            ... protož my při těch milostech a práviech i svobodách je
            zuostavujíc, oděncuov těch je zprošťujem, tak aby miesto plášťuov
            těch velikých, o nichžto svrchu zmienka jest, každý rok vždy o
            svatém Havle osm pavez malovaných a dobře žilovaných a s obú stranú
            kožovaných i připravených k městu udělajíc, na rathúz přinesli
          </Cit>{' '}
          (... daher belassen wir sie in diesen Gnaden und Rechten und
          Freiheiten, befreien sie von den Wachen, sodass sie anstelle der oben
          erwähnten großen Umhänge jedes Jahr zu Sankt Gallus acht bemalte, gut
          geäderte und beiderseits mit Leder bezogene Pavesen für die Stadt
          anfertigen und zum Rathaus bringen sollen).
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="S. 23" />
        </p>
        <p>
          Schildmacher und Maler der Neustadt hatten ebenfalls eine ähnliche
          Verpflichtung gegenüber der Stadt. Obwohl Aufzeichnungen über ihre
          Zunft erst im 15. Jahrhundert erscheinen, ist es möglich, dass sie
          bald nach der Gründung der Neustadt bestand und unter Karl IV. mit
          Privilegien ausgestattet wurde. In einem Streit um den Schützen Jan
          Božek, der 1454 von den Neustädter Malern und Schildmachern
          beschuldigt wurde, in ihr Handwerk einzugreifen, entschied der
          Neustädter Rat zugunsten des Schutzes der Rechte der Maler und
          Schildmacher
          <Cit>
            aus dem glorreichen Andenken an Kaiser Karl und König Wenzel
          </Cit>
          . Es ist jedoch unklar, ob diese Rechte die Privilegien der
          Schildmacher und Maler von 1365, 1380 und 1392 einschließen, die sich
          möglicherweise auf eine gemeinsame Zunft der Altstädter und Neustädter
          Meister bezogen, oder ob die Neustädter Meister bereits im 14.
          Jahrhundert eigene Privilegien hatten. In jedem Fall waren
          Schildmacher bereits im 14. Jahrhundert in der Neustadt ansässig, wie
          die genannte Vereinbarung zwischen den Altstädter und Neustädter
          Schildmachern und Malern von 1387 belegt. Zu Beginn des 16.
          Jahrhunderts war die Größe der Neustädter Zunft mit der der Altstädter
          Zunft vergleichbar, wie eine Aussöhnung von 1511 belegt, bei der acht
          Altstädter Meister und sieben Neustädter Meister namentlich genannt
          wurden.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="S. 25" />
        </p>
        <p>
          Im 14. Jahrhundert war die Produktionskapazität der Neustädter
          Schildmacher und Maler jedoch deutlich schwächer als der
          Produktionsumfang in der Altstadt. Dies belegen Aufzeichnungen über
          ihre jährliche Pflichtlieferung an die Stadt. In den 1380er Jahren
          regelte eine Vereinbarung zwischen ihnen und dem Neustädter Rat
          langjährige Streitigkeiten über Abgaben und Steuern und legte fest,
          dass Schildmacher <Cit>kteříž pod věžemi sedí</Cit> (die unterhalb der
          Türme sitzen) unbeschadet ihrer Rechte{' '}
          <Cit>
            každé léto po vánocech k novému letu dávali počty, jednu pavézu
            pánuom a městu ku potřebě a ke cti i k kráse, tak dlúho, jakožby jim
            a nám se líbilo a dobré zdálo a jim a městu našemu líbezné se bude
            zdáti
          </Cit>{' '}
          (jährlich nach Weihnachten zum neuen Jahr Rechenschaft ablegen und
          eine Pavese den Herren und der Stadt zum Nutzen, zur Ehre und Zierde
          liefern sollen, solange es ihnen und uns gefällt und gut erscheint und
          ihnen und unserer Stadt angenehm sein wird). Die von den Neustädter
          Malern und Schildmachern gelieferte Pavese sollte auf der Vorderseite
          mit einer gemalten Verzierung geschmückt sein, die ebenso fein war wie
          die acht <Cit>malovaných, dobře žilovaných a kožovaných</Cit>{' '}
          (bemalten, gut geäderten und lederüberzogenen) Pavesen der Altstadt.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="S. 25" />
        </p>
        <p>
          Die Lieferung der Pflichtpavesen an den Altstädter und Neustädter Rat
          war somit eine alte Pflicht der Prager Maler und Schildmacher, die bis
          ins frühe 16. Jahrhundert aufrechterhalten wurde. Diese Verpflichtung
          wurde unter den Zunftmitgliedern aufgeteilt, die zu den Schilden
          beitrugen, indem sie eine Gebühr namens <Cit>Tartschengebühr</Cit>{' '}
          zahlten. Solche Beiträge finden sich im ältesten Zunftbuch. Ein
          Eintrag aus dem späten 14. Jahrhundert erwähnt{' '}
          <Cit>ein halbes Schock pro Schild (oder für Schilde)</Cit>. In einer
          Mitgliederliste von etwa 1410–1420 findet sich die Notiz:{' '}
          <Cit>Mykesch ostawa dluzen u pawessy</Cit> (Mykesch bleibt mit der
          Pavese in der Schuld), was als Aufzeichnung über ausstehende{' '}
          <Cit>Tartschengebühren</Cit> für Pavesen interpretiert wird.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="S. 26" />
        </p>
        <p>
          Wie ersichtlich, hat sich die tschechische Geschichtsforschung
          verständlicherweise auf Pavesen konzentriert, während Tartschen
          weitgehend übersehen werden und, wenn überhaupt besprochen, vor allem
          hinsichtlich ihres möglichen Einflusses auf die Entwicklung der
          Pavesen. Man kann jedoch davon ausgehen, dass sich tschechische
          Tartschen aus der zweiten Hälfte des 15. Jahrhunderts nicht wesentlich
          von Tartschen in benachbarten Gebieten des Reiches unterschieden. Ein
          häufiges Motiv auf Tartschen aus dem deutschsprachigen Raum ist eine
          Dame, die ein vollständiges Wappen hält, einschließlich Wappenschild,
          Helm, Helmzier und Helmdecke, wie die folgenden Beispiele aus dem
          Metropolitan Museum of Art zeigen. In zwei Fällen wird die Dame von
          einem Band mit einem Motto begleitet, das keine heraldische Bedeutung
          hat und eher ein humorvolles Wortspiel darstellt.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="DT768.jpg"
        width={1920}
        height={2400}
        title="Abb. 1: Tartsche, Deutschland, um 1450"
      />
      <ImageWithTitle
        md={4}
        src="sfsb25.26.2s1.jpg"
        width={1920}
        height={2036}
        title="Abb. 2: Tartsche, Deutschland, 15. Jahrhundert"
      />
      <ImageWithTitle
        md={4}
        src="267737.jpg"
        width={1244}
        height={1524}
        title="Abb. 3: Tartsche, Deutschland, 1450 - 1500"
      />
    </Row>
    <Row>
      <Col md={4}>
        Auf der ersten Tartsche (Abb. 1) ist ein Wappen gemalt, das entweder der
        Familie Gottsmann oder einem Verwandten der Familie Türriegel gehört,
        beide aus Franken. Die weibliche Figur an der Seite hält eine Banderole
        (Schriftband) mit einem teilweise auf Deutsch geschriebenen Motto: HAB
        MYCH ALS ICH BIN... (Nimm mich wie ich bin...). Die Verzierung mit ihren
        lebhaften Farben auf silbrigem Foliengrund ist bemerkenswert gut
        erhalten, da sie jahrhundertelang unter Schichten späterer Übermalungen
        verborgen war. Auf der lederüberzogenen Rückseite des Schildes befinden
        sich Spuren der gemalten Figur des Heiligen Christophorus, dessen Bild
        vor plötzlichem Tod schützen sollte.
        <table>
          <tbody>
            <tr>
              <th>Höhe:&nbsp;</th>
              <td>55,88 cm</td>
            </tr>
            <tr>
              <th>Breite:&nbsp;</th>
              <td>40,64 cm</td>
            </tr>
          </tbody>
        </table>
      </Col>
      <Col md={4}>
        Obwohl die mittlere Tartsche (Abb. 2) durch Gebrauch und Alter
        beschädigt ist, gehört sie zu den am schönsten bemalten Beispielen einer
        Tartsche des 15. Jahrhunderts. Die erhaltene Vorderseite zeigt eine Frau
        mit Federturban, die eine Banderole (Schriftband) mit der Inschrift auf
        Deutsch &ldquo;FAHR MIT FREUDEN&rdquo; (ziehe mit Freuden) hält. Der
        Wappenschild rechts trug einst das Wappen des Besitzers, das heute nicht
        mehr lesbar ist. Die umgebenden Flächen sind fein mit einem Dekor aus
        Rankenblättern und &ldquo;Wolkenbändern&rdquo; in deckenden Farben und
        durchscheinenden Lasuren auf poliertem Silberblattgrund bemalt.
        <table>
          <tbody>
            <tr>
              <th>Höhe:&nbsp;</th>
              <td>48,3 cm</td>
            </tr>
            <tr>
              <th>Breite:&nbsp;</th>
              <td>42,5 cm</td>
            </tr>
            <tr>
              <th>Gewicht:&nbsp;</th>
              <td>1704 g</td>
            </tr>
          </tbody>
        </table>
      </Col>
      <Col md={4}>
        Die Oberfläche der dritten Tartsche (Abb. 3) ist mit einem feinen
        silbernen Dekor aus gerollten Blättern (heute nachgedunkelt) auf
        schwarzem Grund bemalt. Während ihres Gebrauchs wurde der Schild
        sekundär mit zwei Wappen bemalt, die die Embleme der Nürnberger
        Patrizierfamilien Ketzel (auf schwarzem Grund ein silberner Affe, der
        eine goldene Kugel hält) und Igelbrecht (auf silbernem Grund ein
        schwarzer Igel mit drei goldenen Äpfeln auf dem Rücken) tragen. Diese
        sekundären Wappen könnten Ende des 15. Jahrhunderts von der Familie
        Ketzel in Erinnerung an Heinrich Ketzel den Älteren (gestorben 1438),
        Ratsherrn von Nürnberg 1435–36, und seine Frau Anna Igelbrecht, die ihn
        1391 heiratete, hinzugefügt worden sein.
        <table>
          <tbody>
            <tr>
              <th>Höhe:&nbsp;</th>
              <td>53,3 cm</td>
            </tr>
            <tr>
              <th>Breite:&nbsp;</th>
              <td>45,7 cm</td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Rekonstruktion</h4>
        <p>
          Da wir keine erhaltene Tartsche vom böhmischen Territorium finden
          konnten, wählte ich für die Rekonstruktion die folgende Tartsche aus
          den Jahren 1440–1460, vermutlich aus Nürnberg, die sich heute im
          Philadelphia Museum of Art befindet. Wie bekannt, unterhielt Böhmen
          enge Handelsbeziehungen mit Nürnberg, und Jošt selbst besaß in
          Nürnberg hergestellte Feuerwaffen. Eine Tartsche mit ähnlich
          stilisierten schnörkelartigen Rändern wird von Jan van Eyck in seinem
          Gemälde &ldquo;Die Ritter Christi&rdquo; dargestellt, das Teil des
          linken Flügels des Genter Altars von 1432 ist. Der Schild wurde
          erstmals um 1500 übermalt, und sein heutiges Erscheinungsbild ist das
          Ergebnis einer barocken Übermalung des 17. Jahrhunderts, als er für
          Bestattungszwecke bemalt wurde und die Wappen der Nürnberger
          Patrizierfamilien Haller und Imhof trug. Der Originalschild ist 55,6
          cm hoch, 52 cm breit und hat eine Wölbung von 23 cm. Er wiegt 2880
          Gramm.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="1977-167-742v2-pma.jpg"
        width={1920}
        height={2316}
        title="Tartsche, Nürnberg - Deutschland, 1440 - 1460"
      />
      <ImageWithTitle
        md={4}
        src="1977-167-742v3-pma.jpg"
        width={1920}
        height={2565}
        title="Tartsche, Nürnberg - Deutschland, 1440 - 1460"
      />
      <ImageWithTitle
        md={4}
        src="1425-30.jpg"
        width={813}
        height={1400}
        title="Ausschnitt aus dem linken Flügel des Genter Altars, 1432"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Da die ursprüngliche Bemalung der Tartsche nicht erhalten geblieben
          ist, haben wir uns entschlossen, ein originelles, aber
          zeitgenössisches Motiv dafür zu schaffen. Der Hintergrund des Schildes
          ist schwarz, mit einem Dekor aus silbernen Rankenblättern, wie auf dem
          deutschen Schild in Abb. 3. Als Vorlage für die Dame wurde die Heilige
          Dorothea vom linken Flügel des Altars aus Jeníkov gewählt, der auf
          1460 datiert wird. Das Wappen, das sie auf dem Schild hält, basiert
          auf der ältesten bekannten Darstellung des Týřovský-Wappens vom
          Grabstein der Kirche in Jince. Die Wappenfiguren sind nach dem
          Wappenbuch stilisiert, das vom Patrizier Konrad Grünenberg aus
          Konstanz 1483 erstellt und Kaiser Friedrich III. geschenkt wurde. Der
          Wappenschild, geviert, zeigt im 1. und 4. Feld einen schwarzen
          Reichsadler (d. h. mit zwei Köpfen) mit goldener Bewehrung (Klauen und
          Schnabel) auf silbernem Grund, während sich im 2. und 3. Feld drei
          weiße, durch Spitzen verbundene Federkiele auf blauem Feld befinden.
          Der nach links geneigte Schild wird über der rechten Ecke von einem
          Helm überragt, dem gleichen wie auf der Tartsche in Abb. 1, und trägt
          neben dem Kleinod und roten Helmdecken mit silberner Fütterung auch
          eine goldene Krone. Im Kleinod befindet sich eine rote Tatarenmütze
          mit silberner Fütterung und schwarzen Lappen. Die Banderole mit der
          Inschrift <Cit>Pomny na mye ma myla wyerna pany</Cit> (Gedenke meiner,
          meine liebe treue Herrin), die einem zeitgenössischen Sporn entnommen
          ist, ist auf die gleiche Weise angebracht wie auf der Tartsche in Abb.
          2. Auf der Innenseite befindet sich eine vereinfachte Zeichnung des
          Heiligen Christophorus, der vor plötzlichem Tod schützen sollte.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Korpus</h5>
        <p>
          Der Korpus ist, wie die meisten Schilde der damaligen Zeit, aus
          Lindenholzleisten gefertigt, die mit Knochenleim zusammengeleimt
          wurden. Dieser Block wird dann mit Werkzeugen bearbeitet, bis er seine
          endgültige Form erhält. Der Autor des Korpus ist František Poch.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="korpus1.jpg" width={1920} height={1435} title="" />
      <ImageWithTitle src="korpus2.jpg" width={1920} height={1435} title="" />
      <ImageWithTitle src="korpus3.jpg" width={1920} height={1435} title="" />
    </Row>
    <Row>
      <ImageWithTitle src="korpus7.jpg" width={1920} height={1435} title="" />
      <ImageWithTitle src="korpus4.jpg" width={1531} height={2048} title="" />
      <ImageWithTitle src="korpus6.jpg" width={1920} height={1435} title="" />
    </Row>
    <Row>
      <Col>
        <h5>Bespannung</h5>
        <p>
          Der Korpus wird mit Leinen unter Verwendung von Knochenleim bespannt.
          Vor der Bespannung musste er fein kalfatert werden. Die Fertigstellung
          und Bespannung des Korpus wurde von Zdeněk Sedláček und Daniel Richter
          durchgeführt.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="IMG_3066.jpg" width={960} height={1289} title="" />
      <ImageWithTitle src="IMG_3076.jpg" width={960} height={1289} title="" />
      <ImageWithTitle src="IMG_3130.jpg" width={960} height={1289} title="" />
      <ImageWithTitle src="IMG_3139.jpg" width={960} height={1289} title="" />
    </Row>
    <Row>
      <Col>
        <h5>Bemalung</h5>
        <p>
          Der bespannte Korpus wurde dann mit Gesso bemalt, einer Mischung aus
          Leim und gemahlener Bologneser Kreide, die sorgfältig geschliffen
          werden musste. Dies erzeugte eine glatte weiße Oberfläche, auf die in
          den für die spätere Versilberung und Vergoldung vorgesehenen Bereichen
          ein Material namens Bolus aufgetragen werden konnte. Roter Bolus wird
          unter Gold verwendet und schwarzer Bolus unter Silber. Hier wurde
          aufgrund des geringen Umfangs der vergoldeten Flächen nur schwarzer
          Bolus verwendet. Blattgold und -silber wurden dann auf den Bolus
          aufgelegt. Die abschließende Bemalung erfolgte mit Eitempera. Die
          Bemalung wurde von Mgr. Markéta Poskočilová ausgeführt.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="Potah.jpg"
        width={1920}
        height={2132}
        title="Bespannter Korpus"
      />
      <ImageWithTitle
        src="Gesso.JPG"
        width={1920}
        height={1920}
        title="Mit Gesso bemalter und polierter Korpus"
      />
      <ImageWithTitle
        src="bolus.jpg"
        width={1900}
        height={1658}
        title="Korpus nach Auftragen von armenischem Bolus und erneutem Polieren"
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="Stribro.JPG"
        width={1920}
        height={2021}
        title="Korpus nach Auftragen von Blattsilber und -gold"
      />
      <ImageWithTitle
        src="SvKrystof.JPG"
        width={1866}
        height={2048}
        title="Zeichnung des Hl. Christophorus auf der Rückseite"
      />
      <ImageWithTitle
        src="Malba.JPG"
        width={1920}
        height={1989}
        title="Fertige Tartsche"
      />
    </Row>
  </>
)
