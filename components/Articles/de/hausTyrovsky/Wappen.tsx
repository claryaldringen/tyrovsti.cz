import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'

export const Wappen = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="coat-of-arms" />
        <h4>Wappen</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Ich möchte Michal Kacl, Jan Škvrňák, Jan Boukal und Markéta
          Poskočilová für ihre Hilfe bei der Recherche danken.
        </p>
        <p>
          Das Wappen erhielt Jobst von Einsiedl nach Sedláček{' '}
          <Cit>bezpochyby za krále Ladislava</Cit> (zweifellos unter König
          Ladislaus); seine Besserung durch König Friedrich III. vom 23.
          November 1455 ist in Chmels Regesten (Nr. 3452) verzeichnet, und
          Sedláček nahm sie in sein Verzeichnis der Wappenbriefe aus den Jahren
          1439–1456 auf.
          <Qt
            publication={PUBLICATIONS.SEDLACEK_HERALDIKA1}
            href="https://kramerius5.nkp.cz/view/uuid:d6b3bfb0-3f08-11e4-bc3a-005056827e51?page=uuid:b6070390-f000-11e9-9a61-005056827e52"
            note="S. 90"
          />
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="S. 154"
          />{' '}
          Vojtěch Král von Dobrá Voda führt das Wappen der Týřovský unter den
          Beispielen an, in denen der Adler{' '}
          <Cit>jakožto znamení zvláštní císařské milosti</Cit> (als Zeichen
          besonderer kaiserlicher Gnade) verliehen wurde – im 1. und 4. Feld des{' '}
          <Cit>štípeného a dvakráte děleného štítu</Cit> (gespaltenen und
          zweimal geteilten Schildes).
          <Qt publication={PUBLICATIONS.KRAL_HERALDIKA} note="S. 136" />
        </p>
        <p>
          Die Beschreibung des Wappens der Týřovský weicht bei den einzelnen
          Autoren erheblich voneinander ab. August Sedláček schreibt in der
          Českomoravská heraldika, dass{' '}
          <Cit>
            z Enzidle Týřovští měli štít křížem rozdělený v 1. a 4. poli napříč
            děleném nahoře černého orla v bílém, ve zpod v bílém tři pruhy
            pošikem, v 2. a 3. poli modrém tři duty bílé špičkami k sobě a na
            tři strany se rozbíhající, nad štítem dvě helmy s přikryvadly
            modrými a bílými s poprsím muže v modrém oděvu se zlatým lemováním,
            levou s přikr. červenými a bílými s vysokým červeným kloboukem s
            bílou ohnutou střechou a (černou) kytou.
          </Cit>{' '}
          (die Týřovský von Einsiedl hatten einen kreuzweise geteilten Schild;
          im 1. und 4. Feld querweise geteilt, oben ein schwarzer Adler in
          Silber, unten in Silber drei Schrägbalken; im 2. und 3. blauen Feld
          drei weiße Straußenfedern, mit den Spitzen gegeneinander gestellt und
          in drei Richtungen auseinandergehend; über dem Schild zwei Helme mit
          blau-weißen Helmdecken und dem Brustbild eines Mannes in blauem Gewand
          mit goldener Einfassung, links mit rot-weißen Helmdecken und einem
          hohen roten Hut mit weißer gebogener Krempe und einem (schwarzen)
          Federbusch.)
          <Qt
            publication={PUBLICATIONS.SEDLACEK_HERALDIKA2}
            href="https://kramerius5.nkp.cz/view/uuid:b5251ae0-2457-11e4-8e0d-005056827e51?page=uuid:31c098d0-418c-11e4-bdb5-005056825209"
            note="S. 120"
          />
        </p>
        <p>Rudolf Jan Meraviglia-Crivelli schreibt in Der Böhmische Adel:</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          <Cit>
            Wappen: Gespalten und zweimal geteilt; 1. u. 2. in Silber ein
            schwarzer Doppeladler; 2. u. 5. in Blau drei silberne, in Deichsel
            gestellte Straussenfedern; 3. u. 6. in Silber zwei rothe
            Schrägrechtsbalken. - Zwei Helme: I aus der Helmrone, eine
            schwarzgekleidete Jungfrau mit offenen goldenen Haar, welche sich
            mit beiden Händen eine goldene Krone auf das Haupt setzt; Decken:
            blau-silbern - II. hoher, rother Heidenhut mit weissem Stulp und
            oben mit sieben schwarzen Hahnenfedern besteckt; Decken:
            Roth-silbern.
          </Cit>
          <Qt publication={PUBLICATIONS.MERAVIGLIA} note="S. 39–40, Taf. 31" />
        </p>
      </Col>
      <Col>
        <p>
          Wappen: Gespalten und zweimal geteilt; im 1. und 2. silbernen Feld ein
          schwarzer Doppeladler; im 2. und 5. blauen Feld drei silberne, in
          Deichselform gestellte Straußenfedern; im 3. und 6. silbernen Feld
          zwei rote Schrägrechtsbalken. — Zwei Helme: I. aus der Helmkrone eine
          schwarzgekleidete Jungfrau mit offenem goldenem Haar, die sich mit
          beiden Händen eine goldene Krone aufs Haupt setzt; Helmdecken:
          blau-silbern — II. ein hoher roter Heidenhut mit weißem Stulp und
          sieben schwarzen Hahnenfedern obenauf; Helmdecken: rot-silbern.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Aus dem Siegel Jobsts von Einsiedl und den meisten erhaltenen Wappen
          der Familie Týřovský geht hervor, dass die Darstellung der Balken in
          einem eigenen Feld eher die Erfindung desjenigen ist, der das Wappen
          abgebildet hat. Sie erscheint nur auf einer einzigen Darstellung des
          Týřovský-Wappens, nämlich auf dem Wappen der Dorota Polyxena Kateřina
          Kokořovská, geborene Týřovská, und danach nur auf Darstellungen, die
          nach dem Aussterben der Familie entstanden. Sedláček selbst gibt in
          seiner Blasonierung an, dass der Schild in nur 4 Felder geteilt ist
          und zugleich das 1. und 4. sekundär querweise geteilt sind.
        </p>
        <p>
          Die Adler werden nie vollständig dargestellt, doch ist dies weniger
          beabsichtigt als vielmehr eine praktische Frage — ein ganzer Adler
          passt schlicht nicht in das Feld. So wird der Adler unterschiedlich
          dargestellt, entweder fast vollständig, nur ohne Krallen (Grabstein
          des Jindřich, Siegel und Grabstein des Jakub Jindřich, Relief der
          Dorota Polyxena Kateřina Kokořovská von Kokořov, geborene Týřovská)
          oder nur als Brustbild (Siegel Jobsts von Einsiedl, Wappenbuch des
          Lucas Cranach des Jüngeren, Wappen auf der Kartusche in der Kirche in
          Milíčov).
        </p>
        <p>
          Angesichts der geringen Zahl erhaltener farbiger Darstellungen direkt
          aus der Zeit vor dem Aussterben der Familie Týřovský ist die
          Bestimmung der Wappenfarben etwas komplizierter. Beginnen wir mit dem
          linken Helm und dem dazugehörigen Helmkleinod, einer Tartarenmütze,
          deren Farbe sowohl in der Blasonierung bei Sedláček als auch bei
          Meraviglia-Crivelli sowie in den Darstellungen Cranachs des Jüngeren
          und vom Altar in Milíčov übereinstimmt. Aus den Darstellungen
          Cranachs, vom Milíčover Altar und aus dem Relief der Dorota Polyxena
          Kateřina Kokořovská können wir schließen, dass die Mütze zusätzlich
          gespalten war, wobei nur eine Hälfte rot war, während die andere
          silbern war, was auch der Farbe der zugehörigen Helmdecke entspräche,
          deren Farben ebenfalls in den Blasonierungen und den Darstellungen
          übereinstimmen. Die Blasonierungen und Cranachs Darstellung stimmen
          auch in der silbernen/weißen Farbe der Helmdecke des rechten Helms
          überein. Wo jedoch die Blasonierungen (und modernen Darstellungen des
          Wappens) von den zeitgenössischen Darstellungen abweichen, sind die
          Farben der Figuren auf dem Schild. Es scheint, dass das Problem
          entstand, als die Helmdeckenfarben den Figuren auf dem Schild
          zugeordnet wurden, wobei das blau-silberne Schema wahrscheinlich
          fälschlich den Federn im 2. und 3. Feld und das rot-silberne Schema
          den Balken (Leisten) im 1. und 4. Feld zugeordnet wurde. Ich habe
          bewusst das Helmkleinod des rechten Helms nicht erwähnt, das nach
          Sedláček ein Mann in blauem Gewand ist, nach Meraviglia-Crivelli
          hingegen eine schwarzgekleidete Jungfrau, die sich eine Krone aufs
          Haupt setzt. Aus farbigen wie unfarbigen Darstellungen geht klar
          hervor, dass der Mann sofort ausgeschlossen werden kann. Cranach der
          Jüngere ordnete die Jungfrau korrekt den Balken zu, das heißt, seine
          Jungfrau, die Balken und die zugehörige Helmdecke sind von derselben
          blauen Farbe. Es ist möglich, dass Cranach die blaue Farbe von den
          Balken des Wappens von Kožlany übernahm, das Jobst von Einsiedl 1472
          für die Stadt erwarb
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:85055638-c5cd-4b57-bd54-93a437e6ce73&fulltext=1472"
          />
          , und das seine Balken angeblich vom Wappen seines Lehnsherrn
          übernahm. <Qt publication={PUBLICATIONS.PELANT} /> Auch Sedláček
          schreibt im Artikel über Kožlany, Vladislav II. habe 1472 das Wappen
          des Städtchens <Cit>o rodinný znak Týřovských z Ensidle</Cit> (um das
          Familienwappen der Týřovský von Einsiedl) vermehrt, und beschreibt es:{' '}
          <Cit>
            štít na příč rozpůlený; v dolní polovici 2 pruhy stříbrné a 2
            červené pošikem položené, v hor. polovici barvy modré vystupuje
            polovina kozla barvy stříbrné, držící sekeru
          </Cit>{' '}
          (ein quergeteilter Schild; in der unteren Hälfte 2 silberne und 2 rote
          Schrägbalken, aus der oberen, blauen Hälfte wächst ein halber
          silberner Bock hervor, der eine Axt hält).
          <Qt
            publication={PUBLICATIONS.OTTO14}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:00846670-05b3-11e5-95ff-5ef3fc9bb22f"
            note="S. 1060"
          />
          Korrekter wäre jedoch die Variante aus Milíčov, wo die Jungfrau, die
          entsprechende Helmdecke und die Balken allesamt schwarz sind. Es ist
          bemerkenswert, dass dies auch die einzige zeitgenössische Darstellung
          ist, auf der sich die Jungfrau eine Krone aufs Haupt setzt.
        </p>
        <p>
          Die korrekte Blasonierung lautet daher höchstwahrscheinlich:
          <br />
          Ein gevierter Schild, wobei das 1. und 4. Feld querweise geteilt ist,
          mit einem schwarzen wachsenden oder aufsteigenden Adler auf goldenem
          Grund oben und zwei schwarzen Schrägbalken auf silbernem Grund unten.
          Im 2. und 3. roten Feld drei silberne Straußenfedern, mit den Spitzen
          gegeneinander gestellt und auseinandergehend. Über dem Schild zwei
          Helme mit Kronen; der linke mit rot-silbernen Helmdecken, aus denen
          eine gespaltene hohe Tartarenmütze mit schwarzem oder silbernem
          Federbusch aufsteigt, deren linke Hälfte silbern und deren rechte
          Hälfte rot ist. Der rechte Helm hat schwarz-goldene Helmdecken und im
          Kleinod eine schwarzgekleidete Jungfrau, entweder gekrönt oder sich
          eine goldene Krone aufs Haupt setzend.
          <Qt publication={PUBLICATIONS.BUBEN} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="nahrobek.jpg"
        width={1062}
        height={1920}
        title="Die Darstellung des Týřovský-Wappens von 1556 auf dem Grabstein von Jindřich Týřovský in der Kirche St. Nikolaus in Jince."
      />
      <ImageWithTitle
        md={4}
        src="erb-cranach.jpg"
        width={852}
        height={1057}
        title="Das Týřovský-Wappen im Wappenbuch des Lucas Cranach des Jüngeren von 1565. Es scheint, dass Cranach das Wappen aus der Perspektive des Betrachters und nicht des Trägers gemalt hat, d. h. er hat die Seiten vertauscht."
      />
      <ImageWithTitle
        md={4}
        src="erb-pecet.jpg"
        width={655}
        height={652}
        title="Das Týřovský-Wappen auf dem Siegel von Jakub (Jindřich) Týřovský vom 25. April 1616."
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="erb-nahrobek-milicov.jpg"
        width={900}
        height={675}
        title="Das Týřovský-Wappen auf dem Grabstein von Jakub Jindřich Týřovský von Einsiedl aus dem Jahr 1618."
      />
      <ImageWithTitle
        md={4}
        src="erb-stahlavy.jpg"
        width={315}
        height={589}
        title="Das Wappen der Dorota Polyxena Kateřina Kokořovská von Kokořov, geb. Týřovská von Einsiedl, auf dem Relief an der Kirche St. Adalbert in Šťáhlavy, zwischen 1637 und 1640."
      />
      <ImageWithTitle
        md={4}
        src="erb-oltar-milicov.jpg"
        width={640}
        height={480}
        title="Das Týřovský-Wappen auf der Kartusche vom Altar der Kirche St. Peter in Ketten in Milíčov aus dem Jahr 1665."
      />
    </Row>
  </>
)
