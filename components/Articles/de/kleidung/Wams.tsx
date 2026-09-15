import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import Link from 'next/link'

export const Wams = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="doublet" />
        <h4>Wams</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Im mittelalterlichen Tschechisch wurde der Begriff <i>kabát</i> für
          das Wams verwendet. Dieser Begriff ist seit dem 14. Jahrhundert in
          Gebrauch und bezeichnete ein kürzeres, eng anliegendes Kleidungsstück
          und diente als Synonym für das deutsche <i>wams</i>, <i>jacke</i>,{' '}
          <i>schecke</i> oder <i>rock</i>, das französische <i>pourpoint</i>,{' '}
          <i>rochet</i>, <i>roquette</i>, oder das englische <i>jacket</i>,{' '}
          <i>rocket</i>
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:50711a90-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          und <i>doublet</i>, aus dem Italienischen <i>giubbetta</i>.
          <Qt
            publication={PUBLICATIONS.WEDGWOOD}
            href="https://babel.hathitrust.org/cgi/pt?id=uc1.b3924121&view=1up&seq=82"
          />
        </p>
        <p>
          Die Wörter <i>kabát</i>, <i>rock (waffenrock)</i>,{' '}
          <i>doublet (arming doublet)</i> und <i>pourpoint</i> bezeichneten auch
          eine Art von wattiertem Kleidungsstück, und im Tschechischen ist die
          erste Verwendung des Wortes <i>kabát</i> an der Wende vom 13. zum 14.
          Jahrhundert speziell mit der Bezeichnung eines wattierten
          Kleidungsstücks in der Alexandreis verbunden{' '}
          <Qt publication={PUBLICATIONS.ALEX} note="Page 43" /> und blieb dies
          mindestens während des gesamten 15. Jahrhunderts, wie wir in der{' '}
          <i>Sehr schönen Chronik über Jan Žižka</i> lesen können:{' '}
          <Cit>
            Tiem jest polniem vojskem vládl kněz Prokop Holý. Pak ten jest býval
            k bitvě na špici v tlustém kabátě.
          </Cit>{' '}
          (Damit befehligte das Feldheer der Priester Prokop der Kahle. Und
          dieser pflegte in der Schlacht an der Spitze in einem dicken Wams zu
          stehen.)
          <Qt publication={PUBLICATIONS.KRONIKAPEKNA} /> Es bleibt die Frage, ob
          das tschechische Wort <i>kabát</i> vom Althochdeutschen <i>gewæte</i>{' '}
          abstammt
          <Qt publication={PUBLICATIONS.GEBAUER} /> oder ebenfalls vom
          Italienischen <i>giubbetta</i> abgeleitet ist.
        </p>

        <p>
          Obwohl Wämser schon früher zum Befestigen von Beinlingen verwendet
          wurden, wie die Nestelbänder am Pourpoint von Charles de Blois
          belegen, wurde die Kombination aus Wams und daran befestigten
          Beinlingen in Böhmen erst um die Mitte des 15. Jahrhunderts weit
          verbreitet, wodurch das Wams zu einem funktionalen Kleidungsstück
          wurde, das an der Grenze zwischen Unter- und Oberbekleidung steht, was
          auch der Gründung einer eigenständigen Wamsmacherzunft im Jahr 1441
          entspricht.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:5988fc10-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Als die Beinlinge allmählich zu Hosen werden und ihr Bund höher rückt,
          werden auch die Wämser kürzer, und gegen Ende des 15. Jahrhunderts
          werden sie wieder zu einem vollwertigen Oberbekleidungsstück. Einen
          kurzen Überblick über die Entwicklung des Wamses bieten die folgenden
          Abbildungen.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat1.jpg"
        width={375}
        height={323}
        title="Frühes Wams mit weiten Ärmeln, als Oberbekleidung getragen, auf einem Ausschnitt aus der Wenzelsbibel (1389-1395)."
      />
      <ImageWithTitle
        md={4}
        src="kabat2.jpg"
        width={500}
        height={500}
        title="Ein Münzpräger, der bei der Arbeit bis auf Beinlinge und Wams entkleidet ist. Der zweite Münzpräger auf demselben Fresko trägt über seinem Wams einen Rock vom Typ Vestina. Ausschnitt aus einem Fresko in der Münzmeisterkapelle des Doms der Heiligen Barbara in Kutná Hora (1460-1470)."
      />
      <ImageWithTitle
        md={4}
        src="kabat3.jpg"
        width={1643}
        height={1643}
        title="Ringer in kurzen Wämsern modischen Schnitts und modischer Farbe auf einem Fresko aus der Roten Bastion auf Schloss Švihov, um 1500."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Wie bereits erwähnt, stellte das Wams in der Ära König Georgs von
          Podiebrad eine Art Zwischenstufe zwischen Unter- und Oberbekleidung
          dar, und zwar nicht nur in Böhmen. Daher konnte der Rumpf des Wamses
          aus einem günstigeren, beispielsweise ungefärbten Stoff gefertigt
          sein. Dies spiegelt sich auch im Testament des Kesselmachers Martin
          aus der heutigen Spálená-Straße in Prag wider, der 1477{' '}
          <Cit>dva rukávy aksamitové od kabáta</Cit> (zwei Samtärmel von einem
          Wams) hinterließ
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6c9674e0-fe2a-11e6-97b4-5ef3fc9ae867"
          />
          . Da das Wams mit den Beinlingen eine Einheit bildete, war es modisch,
          Beinlinge und Wams, oder zumindest deren sichtbare Teile, in derselben
          Farbe zu tragen, idealerweise in einem Kontrast zum äußeren Rock oder
          Mantel.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat4.jpg"
        width={1920}
        height={1579}
        title="Ein Wams mit ungefärbtem Rumpf auf einer Illumination aus Hans Talhofers Fechtbuch, Deutschland, 1459."
      />
      <ImageWithTitle
        md={4}
        src="vaclav-z-jihlavy.jpg"
        width={249}
        height={320}
        title="Wams und Beinlinge in derselben (schwarzen) Farbe. Ausschnitt aus dem Brünner Rechtsbuch des Václav von Jihlava (1446)."
      />
      <ImageWithTitle
        md={4}
        src="tkanicky-jensky2.jpg"
        width={600}
        height={800}
        title="Wams und Beinlinge in derselben (roten) Farbe. Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Der Mangel an böhmischen Bildquellen und die Tatsache, dass das Wams
          in der Ära König Georgs von Podiebrad eine Zwischenschicht zwischen
          Unter- und Oberbekleidung darstellte, erschwert die Forschung
          erheblich. Dennoch lassen sich einige Details und Unterschiede zu
          anderen Regionen nachverfolgen. Die Ärmel böhmischer Wämser sind
          entweder eng oder weit und am Handgelenk mit einer kurzen Manschette
          verengt. Im Gegensatz dazu finden sich weder Schulterpolsterungen nach
          burgundischer Mode noch Raffungen der oberen Ärmelhälfte nach
          italienischer Mode.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="kabat5.jpg"
        width={466}
        height={512}
        title="Ein Münzpräger in einem Wams mit engen Ärmeln. Ausschnitt aus einem Fresko in der Münzmeisterkapelle des Doms der Heiligen Barbara in Kutná Hora (1460-1470)."
      />
      <ImageWithTitle
        md={3}
        src="kabat6.jpg"
        width={600}
        height={600}
        title="Ein Priester in einem Wams mit weiten Ärmeln, am Handgelenk mit einer Manschette versehen. Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="kabat7.jpg"
        width={230}
        height={273}
        title={
          <>
            Ein Wams mit gepolsterten Schultern nach burgundischer Mode. Detail
            aus dem Gemälde <i>Die Hinrichtung des unschuldigen Grafen</i> des
            Malers Dieric Bouts, Niederlande, 1460.
          </>
        }
      />
      <ImageWithTitle
        md={3}
        src="kabat8.jpg"
        width={667}
        height={864}
        title="Ein Wams mit geraffter oberer Ärmelhälfte, Ausschnitt aus einem Fresko von Paolo di Stefano Badaloni, Florenz, 1460"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Vergleicht man das Wams auf dem Fresko in der Münzmeisterkapelle der
          St.-Barbara-Kirche in Kutná Hora mit zeitgenössischen deutschen
          Schnittmustern, scheint es, dass böhmische Wämser im Stil etwas
          archaischer waren, d. h. mit einem langen Teil, der den Bauch eng
          umschloss und mit einer einzigen Nestel geschnürt wurde, sowie einer
          stark gewölbten, vermutlich gepolsterten Brust, die jedoch
          möglicherweise nicht so eng befestigt war wie der Bauchteil und daher
          entweder mit Knöpfen oder mehreren Nesteln durch gegenüberliegende
          Lochpaare verschlossen wurde.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat9.jpg"
        width={464}
        height={692}
        title="Ein Wams mit langem, den Bauch umschließendem Teil, fest mit einer Nestel geschnürt. Die Brust muss nicht mehr so eng geschnürt werden und wird mit mehreren Nesteln durch gegenüberliegende Lochpaare verschlossen. Ausschnitt aus dem Königsegger Traktat, Deutschland (1446-1459)."
      />
      <ImageWithTitle
        md={4}
        src="kabat2.jpg"
        width={500}
        height={500}
        title="Obwohl dieses Wams zeitlich dem deutschen Wams auf dem folgenden Bild ähnlich sein sollte, behält es seine archaische Form mit einem eng geschnürten, einnestel-geschnürten Bauchteil und einer lockereren, geknöpften Brust. Ausschnitt aus einem Fresko in der Münzmeisterkapelle des Doms der Heiligen Barbara in Kutná Hora (1460-1470)."
      />
      <ImageWithTitle
        md={4}
        src="kabat10.jpg"
        width={1780}
        height={1678}
        title="Ein jüngerer Typ von Wämsern mit kurzem Bauchteil, wie er zu jener Zeit in Deutschland getragen wurde. Seite aus Hans Talhofers Fechtbuch, Deutschland (1459)."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Einige Einblicke in die Konstruktion von Wämsern lassen sich aus
          bestimmten Artikeln der Neustädter Wamsmacherzunft gewinnen, die am{' '}
          <b>16. August 1448</b> bestätigt wurden:
        </p>

        <p>
          <Cit>
            Třetie, aby byly dělány barchanové kabáty v prostředku plátnem
            novým, a bavlna aby byla v prsy, a vespod aby bylo plátno nové nebo
            cvilink bez přimiešenie vetchého; a v kožené kabáty aby bylo vetché
            plátno v prostředek, a vespod nové bez přimiešenie vetchého. Také
            aby vetché plátno nebylo děláno pod barchanové kabáty ani kožené ani
            cvilinkové, nebo pod rukávy aby žádného vetchého mandlovaného na trh
            nedělali.
          </Cit>{' '}
          (Drittens, dass Barchent-Wämser in der Mitte mit neuem Leinen
          gefertigt werden sollen, und Rohbaumwolle in die Brust eingearbeitet
          werden soll, und unten neues Leinen oder grobes Leinengewebe ohne
          Beimischung von altem Material verwendet werden soll; und in
          Lederwämser soll altes Leinen in die Mitte, und unten neues ohne
          Beimischung von altem. Ebenso soll kein altes Leinen unter
          Barchent-Wämser noch Leder- noch Grobwämser verwendet werden, noch
          soll unter die Ärmel irgendwelches altes gewalktes Material für den
          Markt verarbeitet werden.)
        </p>
        <p>
          <Cit>
            Desáté a poslednie, v harasové kabáty aby bylo děláno dvuoje plátno
            v prsy svrchnie, a v pokošinové též, pod pokutami svrchupsanými.
          </Cit>{' '}
          (Zehntens und letztens, in Woll-Wämser sollen zwei Lagen Stoff in die
          obere Brust eingearbeitet werden, und in die (anderen) wollenen
          ebenso, unter den oben genannten Strafen.)
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=10&bookid=821&page=458"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Während in Westeuropa die Nesteln, mit denen die Beinlinge am Wams
          befestigt wurden, sichtbar zu einer einzelnen Schlaufe gebunden waren,
          war es in Mitteleuropa üblich, diese Nesteln verborgen zu tragen, wie
          aus den folgenden Abbildungen ersichtlich ist.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        width={564}
        height={988}
        src="memling.jpg"
        title="Ein Wams, mit sichtbaren Knoten der Nesteln an die Beinlinge gebunden. Ausschnitt aus dem Johannesaltar von Hans Memling, 1479."
      />
      <ImageWithTitle
        md={3}
        width={373}
        height={480}
        src="stetisvjiri.jpg"
        title="Ein Wams, mit sichtbaren Knoten der Nesteln an die Beinlinge gebunden. Hundertjähriger des Heiligen Georg, Friedrich Herlin, 1462-1465."
      />
      <ImageWithTitle
        md={3}
        width={978}
        height={1188}
        src="talhofer1.jpg"
        title="Die Nesteln zwischen Beinlingen und Wams sind hier nur angedeutet, da der Knoten auf der Innenseite verborgen ist. Seite aus Hans Talhofers Fechtbuch, Deutschland (1459)."
        href="talhofer2.jpg"
      />
      <ImageWithTitle
        md={3}
        src="kabat2.jpg"
        width={500}
        height={500}
        title="Im böhmischen Umfeld sind die Nesteln, die das Wams mit den Beinlingen verbinden, so verborgen, dass sie nicht einmal angedeutet werden, im Gegensatz zu den Nesteln am Bauch. Ausschnitt aus einem Fresko in der Münzmeisterkapelle des Doms der Heiligen Barbara in Kutná Hora (1460-1470)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Rekonstruktion</h5>
        <p>
          Als freie Inspiration für diese Rekonstruktion diente eine
          Illustration aus der{' '}
          <Link
            href="https://digital.slub-dresden.de/werkansicht/dlf/14388%2F95%2F"
            target="_blank"
          >
            Bayerischen Fürstengenealogie
          </Link>
          ; zugleich wurde darauf geachtet, die Artikel der Neustädter
          Wamsmacherzunft einzuhalten. Der Rumpf des Wamses ist daher aus
          schwarzem Barchent gefertigt (
          <Cit>… dass Barchent-Wämser gefertigt werden sollen</Cit>), und die
          Brust ist mit Rohbaumwolle gepolstert (
          <Cit>… und Baumwolle soll in die Brust</Cit>). Der Schnitt
          einschließlich des Verschlusses basiert auf der Darstellung eines
          Wamses in der Münzmeisterkapelle des Doms der Heiligen Barbara in
          Kutná Hora.
        </p>
        <p>
          Die Ärmel sind aus einem deutlich teureren Stoff gefertigt, wie in
          vielen zeitgenössischen Darstellungen zu sehen ist und wie im
          Testament des Kesselmachers Martin von 1477 erwähnt wird:{' '}
          <Cit>zwei Samtärmel des Wamses.</Cit> Anstelle des genannten
          Seidensamt verwendeten wir einen handgewebten Seidenbrokat, mit Gold
          durchwirkt und mit einem Pelikan-Motiv versehen, basierend auf einem
          in Deutschland gefundenen Textilfragment.
        </p>
        <p>
          Das gesamte Wams ist vollständig von Hand genäht. Die Rekonstruktion
          wurde von Pavel Houfek durchgeführt.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="doublet/1.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle src="doublet/3.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle src="doublet/4.jpg" width={1600} height={1200} title="" />
    </Row>
    <Row>
      <ImageWithTitle src="doublet/2.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle
        src="doublet/4a.jpg"
        width={1600}
        height={1200}
        title=""
      />
      <ImageWithTitle src="doublet/5.jpg" width={1600} height={1200} title="" />
    </Row>
    <Row>
      <ImageWithTitle
        src="doublet/5a.jpg"
        width={1600}
        height={1200}
        title=""
      />
      <ImageWithTitle src="doublet/6.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle src="doublet/7.jpg" width={1600} height={1200} title="" />
    </Row>
    <Row>
      <ImageWithTitle src="doublet/8.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle src="doublet/9.jpg" width={1600} height={1200} title="" />
      <ImageWithTitle
        src="doublet/10.jpg"
        width={1600}
        height={1200}
        title=""
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="doublet/11.jpg"
        width={1600}
        height={1200}
        title=""
      />
      <ImageWithTitle
        src="doublet/12.jpg"
        width={1600}
        height={1200}
        title=""
      />
      <ImageWithTitle
        src="doublet/14.jpg"
        width={1600}
        height={1200}
        title=""
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="doublet/13.jpg"
        width={1200}
        height={1600}
        title=""
      />
      <ImageWithTitle
        src="doublet/15.jpg"
        width={1200}
        height={1600}
        title=""
      />
      <ImageWithTitle
        src="doublet/16.jpg"
        width={1200}
        height={1600}
        title=""
      />
    </Row>
  </>
)
