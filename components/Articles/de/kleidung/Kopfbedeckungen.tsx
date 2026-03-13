import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle/ImageWithTitle'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const Kopfbedeckungen = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="headwear" />
        <h3>Kopfbedeckungen{draft && <DraftBadge />}</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Gugel</h4>
        <p>
          <i>Kápě</i>,&nbsp;<i>kapicě</i>,&nbsp;<i>kapicze</i> leitet sich,
          ebenso wie <i>čepice</i> (Kappe), vom mittellateinischen Wort
          <i> capa</i>,<i> cappa</i> ab. Sie wurde auch <i>kukla</i> oder
          <i> kuklička</i> genannt, was vom lateinischen <i>cucalla</i> stammt,
          und in schriftlichen Quellen wird sie ferner als <i>capucium</i>,
          <i> chuchla</i>,<i> cucala</i>,<i> capye</i> bezeichnet. Die Gugel
          konnte auf verschiedene Weisen getragen werden — normal auf den
          Schultern, wo sie durch einen Hut oder einen Helm ergänzt werden
          konnte, oder auf den Kopf gesetzt mit der Gesichtsöffnung nach oben
          aufgerollt, wie eine Kappe getragen. Für das nachhussitische Böhmen
          lassen sich drei Haupttypen von Gugeln unterscheiden: mit Zipfel, ohne
          Zipfel und eine Quastengugel, die auch im deutschen Sprachraum beliebt
          war.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Gugel mit Zipfel</h5>
        <p>
          Diese Gugeln waren besonders vor den Hussitenkriegen beliebt, wie im{' '}
          <i>Gelnhausener Kodex</i> (1400-1408) oder der <i>Olmützer Bibel</i>{' '}
          (1417) zu sehen ist. Da ein längerer Zipfel vor allem bei luxuriös
          gekleideten Personen zu sehen ist, könnte er den guten Stand seines
          Besitzers repräsentiert haben. Dies würde auch mit dem Ereignis
          übereinstimmen, das in der Chronik des Vavřinec von Březová
          aufgezeichnet ist, als die Taboriten die langen Zipfel der Gugeln der
          Prager Handwerker und Bürger abschnitten, die damit die von ihnen
          verurteilte Unmäßigkeit und den Luxus symbolisierten.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> Ebenso ist im{' '}
          <i>Jenaer Kodex</i> (1490-1510) ein Priester in einem prächtigen
          Pelzmantel dargestellt, mit vielen Ringen und Schuhen mit langen
          spitzen Zehen, der eine Gugel mit einem langen, massiven Zipfel trägt.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="knez.jpg"
        width={832}
        height={1270}
        title="Ein Priester in einer Gugel mit massivem Zipfel. Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="kape-cip-jk.jpg"
        width={240}
        height={320}
        title="Eine Gugel mit Zipfel, durch die Gesichtsöffnung auf den Kopf gesetzt. Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="kape-s-cipem-rt.jpg"
        width={360}
        height={480}
        title="Eine Gugel mit Zipfel, über die Schulter drapiert. Ausschnitt aus der Richental-Chronik (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Gugel ohne Zipfel</h5>
        <p>
          Die einfache Gugel ohne Zipfel war der am weitesten verbreitete
          Gugeltyp im nachhussitischen Böhmen. Sie konnte unter einem Helm oder
          zusammen mit einem Hut getragen werden. Eine solche{' '}
          <Cit>kuklu modrou, kterou míval do vojny</Cit> (blaue Gugel, die er in
          den Krieg mitzunehmen pflegte) hinterließ Zikmund Jirconis von Poříč
          im Jahr 1455.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:68f3aba0-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Es gibt sehr viele Darstellungen dieser Gugeln aus sowohl böhmischen
          als auch deutschen Quellen.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="Jensky_kodex_Zizka.jpg"
        width={640}
        height={921}
        title="Einfache Gugeln sind bei Jan Žižka an der Spitze des Heeres und beim Bannerträger in der Darstellung aus dem Jenaer Kodex zu sehen. Jan Žižkas Gugel wird durch einen Hut ergänzt."
      />
      <ImageWithTitle
        md={3}
        src="kape-rt.jpg"
        width={240}
        height={320}
        title="Eine einfache Gugel, durch die Gesichtsöffnung auf den Kopf gesetzt, in einem Ausschnitt aus der Richental-Chronik (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="zasedani1.jpg"
        width={480}
        height={640}
        title="Einfache schwarze Gugeln, durch die Gesichtsöffnung auf den Kopf gesetzt, werden von einem der Ratsherren und dem Schreiber im Ausschnitt aus dem Gedenkbuch von Olmütz (1430-1492) getragen."
      />
      <ImageWithTitle
        md={3}
        src="richenthal1.jpg"
        width={480}
        height={641}
        title="Zwei der bewaffneten Männer, die Jan Hus zum Scheiterhaufen führen, tragen Gugeln ohne Zipfel unter ihren Eisenhüten. Der Soldat vorne hat eine sehr kleine Gugel, während der Soldat hinten eine mit dekorativer Zackenborte hat. Ausschnitt aus der Richental-Chronik (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Quastengugel</h5>
        <p>
          Dieser Typ war im deutschen Sprachraum beliebt, einschließlich des
          damaligen Böhmen. Sie konnte auch unter einem Helm getragen werden,
          wie in Zeichnungen und Gemälden des berühmten Malers Albrecht Dürer
          (1471-1528) zu sehen ist. Am Hals konnte sie mit Knöpfen verschlossen
          werden, um eine anatomischere Form zu erzielen. Ihre Quasten konnten
          auch dekorativ geschnitten werden, wie beispielsweise im Porträt des
          Kuttenberger Münzmeisters Hans Harsdorfer von 1484 zu sehen ist. Es
          ist bemerkenswert, dass Albrecht Dürer und Hans Harsdorfer befreundet
          waren.
          <Qt publication={PUBLICATIONS.PATALA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="kape2-jensky-kodex.jpg"
        width={240}
        height={320}
        title="Eine Quastengugel, getragen von einem leichten Reiter. Diese Gugeln begegnen uns häufig in deutschen Darstellungen leichter Reiter. Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        title="Eine luxuriöse Gugel mit Knöpfen und dekorativ geschnittenen Quasten, durch die Gesichtsöffnung auf den Kopf gesetzt. Porträt von Hans Harsdorfer, Nürnberg, 1484."
        src="hans-harsdorffer.jpg"
        width={800}
        height={986}
      />
      <ImageWithTitle
        md={3}
        title="Eine Quastengugel, durch die Gesichtsöffnung auf den Kopf gesetzt, in Albrecht Dürers Selbstporträt von 1498."
        src="durer.jpg"
        width={1920}
        height={2424}
      />
      <ImageWithTitle
        md={3}
        title="Der Heilige Eustachius trägt eine dekorative Quastengugel um den Hals. Ausschnitt aus dem Paumgartner-Altar, 1500."
        src="oltar.jpg"
        width={240}
        height={320}
      />
    </Row>
    <Row>
      <Col>
        <h4>Hut</h4>
        <p>
          <i>Klobúk</i>,<i> klouček</i>,<i> koblúček</i>,<i> kobek</i>,
          <i> kobek</i>,<i> klouček</i>,<i> koláče</i>. Neben der Bezeichnung
          für Kopfbedeckungen bezeichnete der Begriff auch einen Helm. Die
          häufigste Form war eine, bei der die Krone natürlich dem Kopf folgte
          und die Krempe nach oben gebogen oder gerollt war. Darstellungen eines
          solchen Hutes finden sich beispielsweise in der{' '}
          <i>Krumauer Anthologie</i> (1420)
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> ebenso wie 70 Jahre
          später im <i>Jenaer Kodex</i> (1490-1510), und er ist archäologisch
          durch einen Fund aus Irland bestätigt.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> Die Krone konnte auch
          abgeflacht, kegelförmig oder spitz sein. Ebenso konnte die Krempe
          verschiedentlich geformt sein: flach und rund wie bei zeitgenössischen
          Hüten, nach oben gerollt wie oben erwähnt, mit einem oder mehreren
          Schlitzen nach oben gebogen, oder gänzlich fehlend. Im Gegensatz zu
          Gugeln scheint es, dass Hüte häufig mit anderem Stoff oder Pelz
          gefüttert waren.
        </p>
        <p>
          Eine eigenständige Hutmacherzunft wurde in der Prager Neustadt am{' '}
          <b>2. April 1446</b> gegründet. Aus ihren Statuten kann man entnehmen,
          dass sie Hüte aus Biberpelz und Filz herstellten.
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=10&bookid=821&page=453"
          />{' '}
          Aus der Bestätigung der Hutmacherzunft-Artikel in der Altstadt am{' '}
          <b>11. August 1489</b> kann man erfahren, dass ein Meister neben
          Biberhüten auch einen Hasenfellhut <Cit>obú stranú vlasitý</Cit>{' '}
          (beidseitig haarig), einen Kraushut und neben Hüten auch
          Schuhmacherfilz und einen Stiefel herstellen können musste, vermutlich
          in der Art von Walenki gefilzt.
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=10&bookid=821&page=488"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Hut mit gewölbter Krone und gerollter Krempe</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={2}
        title="Ein Hutfund aus Irland, datiert auf das 14.-15. Jahrhundert."
        src="klobouk-irsko.jpg"
        width={564}
        height={423}
      />
      <ImageWithTitle
        md={2}
        src="klobouk-krumlovsky-sbornik.jpg"
        width={338}
        height={438}
        title="Ein Hut mit gewölbter Krone und gerollter Krempe in der Krumauer Anthologie, um 1420."
      />
      <ImageWithTitle
        md={2}
        src="Jensky_kodex_Zizka.jpg"
        width={640}
        height={920}
        title="Ein Hut mit gewölbter Krone und gerollter Krempe auf dem Kopf von Jan Žižka, Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={2}
        title="Ein Hut mit gewölbter Krone und gerollter Krempe. Ausschnitt aus der Richental-Chronik (1470-1480)."
        src="klobouk-richental.jpg"
        width={240}
        height={320}
      />
      <ImageWithTitle
        md={2}
        title="Ein Hut mit gewölbter Krone und gerollter Krempe, mit Pelz gefüttert. Ausschnitt aus dem Brünner Rechtsbuch des Václav von Jihlava (1446)."
        src="vaclav-z-jihlavy.jpg"
        width={240}
        height={320}
      />

      <ImageWithTitle
        md={2}
        title="Sitzung des Stadtrats, dargestellt in der Initiale des Brünner Rechtsbuchs des Václav von Jihlava (1446). Auf den Köpfen der Ratsherren sehen wir Hüte mit sowohl gewölbter als auch flacher Krone, mit Pelz gefüttert."
        src="Zasedani.jpg"
        width={399}
        height={356}
      />
    </Row>
    <Row>
      <Col>
        <h5>Hut mit aufgebogener Krempe ohne Schlitze</h5>
        <p>
          Die meisten dieser Hüte haben in der Ikonographie flache Kronen,
          obwohl Ausnahmen zu finden sind, wie jener im Jenaer Kodex, siehe
          Abbildung unten.
        </p>
      </Col>
    </Row>
    <Row className="row">
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-richental2.jpg"
        width={240}
        height={320}
        title="Ein Hut mit flacher Krone und aufgebogener Krempe ohne Schlitze, Ausschnitt aus der Richental-Chronik (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-jensky-kodex.jpg"
        width={240}
        height={320}
        title="Ein Hut mit gewölbter Krone und aufgebogener Krempe ohne Schlitze, Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-richental.jpg"
        width={240}
        height={320}
        title="Hüte mit flacher Krone und aufgebogener Krempe ohne Schlitze, mit Pelz gefüttert, Ausschnitt aus der Richental-Chronik (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-jensky-kodex3.jpg"
        width={240}
        height={320}
        title="Ein Hut mit flacher Krone und aufgebogener Krempe, mit Pelz gefüttert, Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Hut mit aufgebogener Krempe mit Schlitzen</h5>
        <p>
          Es ist bemerkenswert, dass selbst wenn ein Hut nur einen Schlitz hat,
          dieser Schlitz niemals in der Mitte der Stirn liegt, sondern stets
          seitlich am Kopf.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-jensky-kodex2.jpg"
        width={240}
        height={319}
        title="Mit Pelz gefütterte Hüte mit aufgebogener Krempe und einem einzelnen Schlitz in einem Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="klobouk-2-jensky.jpg"
        width={239}
        height={320}
        title="Ein Hut mit aufgebogener Krempe und zwei Schlitzen in einem Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="klobouk-2-richental.jpg"
        width={240}
        height={320}
        title="Ein Hut mit aufgebogener Krempe und zwei Schlitzen in einem Ausschnitt aus der Richental-Chronik (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="klobouk-3-richental.jpg"
        width={240}
        height={320}
        title="Ein Hut mit aufgebogener Krempe und mehreren Schlitzen in einem Ausschnitt aus der Richental-Chronik (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Andere Huttypen</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="klobouk-a-rt.jpg"
        width={240}
        height={320}
        title="Ein Hut mit leicht nach unten gebogener Krempe, einer Hutnadel und einem Federschmuck in einem Ausschnitt aus der Richental-Chronik (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        title="Ein Hut mit leicht nach oben gebogener Krempe in einem Ausschnitt aus dem Jenaer Kodex (1490-1510)."
        src="klobouk-b-jk.jpg"
        width={360}
        height={480}
      />

      <ImageWithTitle
        md={3}
        src="klobouk-bez-dynka-jk.jpg"
        width={360}
        height={480}
        title="Ein Hut ohne Krempe in einem Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />

      <ImageWithTitle
        md={3}
        title="Ein Hut mit flacher Krone und aufgebogenem hinterem Krempenteil, mit einem Band verziert. Ausschnitt aus der Richental-Chronik (1470-1480)."
        src="klobouk-c-rt.jpg"
        width={240}
        height={320}
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        title="Ein Hut mit flacher Krone und aufgebogenem vorderem Krempenteil, durch ein Band in Position gehalten. Solche Hüte erscheinen sehr häufig in Darstellungen des Heiligen Jakobus, wo sie zusätzlich mit einer Jakobsmuschel verziert sind. Ausschnitt aus der Richental-Chronik (1470-1480)."
        src="klobouk-d-rt.jpg"
        width={239}
        height={320}
      />
      <ImageWithTitle
        md={4}
        title="Ein Hut mit flacher Krone und flacher Krempe in einem Ausschnitt aus dem Gedenkbuch von Olmütz (1430)."
        src="klobouk-e-opk.jpg"
        width={240}
        height={320}
      />
      <ImageWithTitle
        md={4}
        title="Ein Hut in einem Ausschnitt aus der Richental-Chronik (1470-1480)."
        src="klobouk-f-rt.jpg"
        width={240}
        height={320}
      />
    </Row>
    <Row>
      <Col>
        <h4>Barette</h4>
        <p>
          Einer der häufigsten Typen von Kopfbedeckungen war das Barett, das
          etwa ein Viertel aller Kopfbedeckungen ausmachte
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> und sich wahrscheinlich
          hinter dem zeitgenössischen Namen <i>čepice</i> (Kappe) verbirgt.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        title="Ein Mann mit einem roten Barett in einem Ausschnitt aus dem Zátoňer Altar (nach 1440)."
        src="baret-zaton.jpg"
        width={1440}
        height={1920}
      />
      <ImageWithTitle
        md={3}
        title="Ein Mann mit einem roten Barett in einem Ausschnitt aus dem Jenaer Kodex (1490-1510)."
        src="kape-jensky-kodex.jpg"
        width={240}
        height={320}
      />
      <ImageWithTitle
        md={3}
        title="Ein Kaufmann mit einem Barett in einem Ausschnitt aus dem Jenaer Kodex (1490-1510)."
        src="baret-jk.jpg"
        width={480}
        height={640}
      />
      <ImageWithTitle
        md={3}
        title="Zwei Männer mit Baretten in einem Ausschnitt aus der Richental-Chronik (1470-1480)."
        src="baret-rt.jpg"
        width={481}
        height={640}
      />
    </Row>
  </>
)
