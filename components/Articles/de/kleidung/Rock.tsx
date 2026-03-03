import { Col, Row } from 'reactstrap'
import { Cit } from '../../../Citation'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { ImageWithTitle } from '../../../ImageWithTitle'

export const Rock = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="gown" />
        <h4>Rock</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Der Rock war ein grundlegender Typ der Oberbekleidung. Er wurde am
          häufigsten aus Wollstoff gefertigt, der im Tschechischen <i>sukno</i>{' '}
          genannt wird, weshalb diese Art von Kleidungsstück im Alttschechischen{' '}
          <i>sukně</i> hieß, was im heutigen Tschechisch <i>Rock</i> bedeutet.
          Er konnte in verschiedenen Längen vorkommen. Die lange Variante wurde
          wahrscheinlich als <i>reverenda</i> bezeichnet, wie eine Aufzeichnung
          aus dem Jahr 1478 nahelegt, wonach der Prager Mälzer Rameš eine{' '}
          <Cit>reverendě nové barvy</Cit> (Reverenda neuer Farbe) zu tragen
          pflegte.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6a7087a0-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Die Röcke konnten mit Stoff, Pelz gefüttert oder ungefüttert sein.
          Davon zeugt im Jahr 1425 Tomášek von Hlohovice, der seinem Bruder eine{' '}
          <Cit>sukni s beránčím kožichem</Cit> (Rock mit Lammfell) und eine{' '}
          <Cit>sukni parvířku s liščím kožichem</Cit> (Rock <Cit>parvířka</Cit>{' '}
          mit Fuchsfell) hinterließ. Derselbe Tomášek besaß jedoch auch eine{' '}
          <Cit>sukni modrú nepodšitú</Cit> (blauen Rock ohne Futter).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6b7d8ad0-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Der Pilsner Bürger Jan Chudoba vermachte 1432 aus seiner Garderobe dem{' '}
          <Cit>knězi Šimanovi sukni černú svú s liščím kožichem</Cit> (schwarzen
          Rock mit Fuchsfell dem Priester Šiman). Meister Petr, ebenfalls aus
          Pilsen, erwähnt 1492 eine <Cit>harasovú suknici krátkú podšitú</Cit>{' '}
          (kurzen gefütterten Rock aus Haras).
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 67" /> Der Prager
          Mälzer Duchek, der 1437 starb, besaß unter anderem drei Röcke, einen{' '}
          <Cit>šerú s beránčím kožichem črným</Cit> (grauen mit schwarzem
          Lammfell), einen weiteren <Cit>s liškami</Cit> (mit Fuchsfellen) und
          einen weiteren <Cit>s plátnem</Cit> (mit Leinwand)
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6b7d8ad0-fe2a-11e6-97b4-5ef3fc9ae867"
          />
          , das heißt, mit Leinenstoff gefüttert (Leinwand bedeutete zu jener
          Zeit nicht unbedingt Leinwandbindung, sondern bezeichnete
          Leinenstoff).
        </p>
        <p>
          Am Ende des 15. und zu Beginn des 16. Jahrhunderts finden wir in
          schriftlichen Quellen Röcke, die mit Pelz besetzt waren. Zum Beispiel
          findet sich in den Büchern von Jindřichův Hradec aus dem Jahr 1496 die
          Erwähnung einer <Cit>červená, lasicí opremovaná</Cit> (roten, mit
          Marder besetzten), die 2 Schock Groschen kostete. Im Jahr 1503 stahl
          ein Diener auch der Edeldame Barbora von Vrchlabí eine{' '}
          <Cit>
            sukni atlasovou zelenou, kožichem podšitou a lasičkami opremovanou
          </Cit>{' '}
          (grünen Samtrock, mit Pelz gefüttert und mit Marder besetzt).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:657e33f0-fe2a-11e6-97b4-5ef3fc9ae867"
          />
        </p>
        <p>
          In den böhmischen Ländern lassen sich drei am häufigsten vorkommende
          Varianten nachverfolgen:
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Einfacher Rock</h5>
        <p>
          Ein Rock mit einem mehr oder weniger hemdartigen Schnitt in
          verschiedenen Längen, entweder mit engen oder weiten Ärmeln. Die
          Bezeichnung &bdquo;einfach&ldquo; bezieht sich nicht auf das Material,
          das durchaus luxuriös sein konnte, sondern auf die relative
          Schlichtheit des Schnitts. Er konnte mit damals modischen Falten oder
          Drapierungen verziert sein. In der böhmischen Ikonographie tragen
          würdevollere Figuren (z. B. Älteste, Heilige, Engel usw.)
          typischerweise sehr schlichte, aber auch sehr lange Röcke.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="Jensky_kodex_Zizka.jpg"
        width={640}
        height={921}
        title="Jan Žižka in einem einfachen Rock mit engen Ärmeln und ein Bannerträger in einem einfachen Rock mit weiten Ärmeln.
  Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="sv-sebestian-jenikov.jpg"
        width={221}
        height={482}
        title="Der Heilige Sebastian in einem modischen kurzen grünen Rock, mit braunem Pelz gefüttert, mit weiten Ärmeln, seitlichen Schlitzen an den Hosen
  und Drapierung auf der Altartafel von Jeníkov, um 1460."
      />
      <ImageWithTitle
        md={4}
        src="kutnohorska1.jpg"
        width={524}
        height={520}
        title="Ein Mann in einem einfachen Rock und Mantel, Ausschnitt aus der Kuttenberger Bibel, 1489."
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="andel-kutna-hora.jpg"
        width={499}
        height={548}
        title="Ein Engel in einem langen einfachen Rock mit sich verjüngenden Ärmeln und einem Stehkragen auf dem Fresko in der Münzmeisterkapelle der St.-Barbara-Kirche, Kutná Hora (1460-1470)"
      />
      <ImageWithTitle
        md={4}
        src="andel2.jpg"
        width={325}
        height={381}
        title="Ein Engel in einem langen, schlichten Rock mit sich verjüngenden Ärmeln und einem Stehkragen auf einem Fresko in der Münzmeisterkapelle der St.-Barbara-Kirche, Kutná Hora (1460-1470)."
      />
      <ImageWithTitle
        md={4}
        src="apostolove-jensky.jpg"
        width={622}
        height={955}
        title="Apostel in einfachen Röcken in einem Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <h5>
          Rock vom Typ <i>vestina</i>
        </h5>
        <p>
          Der Rock, von den Italienern <Cit>vestina</Cit> genannt, zeichnet sich
          durch ein eng anliegendes Mieder aus, das verschlossen wurde, und
          einen mehr oder weniger drapierten Schoß verschiedener Länge, der
          gewöhnlich nicht länger als knapp unter die Knie reichte.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat5.jpg"
        width={466}
        height={512}
        title={
          <>
            Pregéř (der Münzpräger) gekleidet in einen altrosa Rock vom Typ{' '}
            <i>vestina</i>. Detail aus dem Fresko in der Münzmeisterkapelle des
            Doms der Heiligen Barbara in Kutná Hora (1460-1470).
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="Zasedani.jpg"
        width={399}
        height={356}
        title={
          <>
            Eine Sitzung des Stadtrats, dargestellt in der Initiale des Brünner
            Rechtsbuchs des Václav von Jihlava (1446). Ratsherren, dem
            Betrachter abgewandt, einer in Blau und der andere in Schwarz,
            tragen Röcke vom Typ <i>vestina</i>.
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="vestina3.jpg"
        width={649}
        height={475}
        title={
          <>
            David, einen Rock vom Typ <i>vestina</i> tragend, erschlägt Goliath.
            Holzschnitt aus der Kuttenberger Bibel (1489).
          </>
        }
      />
    </Row>
    <Row>
      <Col>
        <h5>Geraffter Rock mit Sackärmeln</h5>
        <p>
          Dieser Rocktyp zeichnet sich durch Sackärmel und reiche Raffung über
          seine gesamte Länge aus. Die böhmische Variante unterscheidet sich von
          ihren westeuropäischen Gegenstücken, insbesondere in der Konstruktion
          der Ärmel. Es scheint, dass in Böhmen eine tiefe Ärmelkugel, die
          sogenannte <i>grande assiette</i>, beibehalten wurde, wodurch
          böhmische Röcke dieses Typs ein etwas abgeflachtes Erscheinungsbild
          erhalten, im Gegensatz zur eher quadratischen Form, die in Westeuropa
          typisch war. Dies wird besonders deutlich in Kombination mit Mänteln
          ohne Schulterpolsterung, wie sie in Burgund und Frankreich üblich
          waren. Im Westen hatte dieser Ärmeltyp gewöhnlich zwei Öffnungen zum
          Durchstecken der Hand — eine am Handgelenk, wie bei normalen Ärmeln
          üblich, und eine weitere etwa auf Ellbogenhöhe. Obwohl Darstellungen
          solcher Ärmel beispielsweise in der Kuttenberger Bibel zu finden sind,
          deuten andere zeitgenössische böhmische Darstellungen darauf hin, dass
          böhmische Ärmel typischerweise eher quadratisch waren und nur eine
          Öffnung für die Hand hatten, ungefähr auf Ellbogenhöhe. Diese
          Ärmelkonstruktion kann indirekt durch einige schriftliche Quellen
          bestätigt werden. So findet sich beispielsweise in einem Rakonitzer
          Gerichtsbuch von 1486 der Eintrag:
          <Cit>
            Poručil jsem, aby kladl peníze do truhly, a on kladl do rukáva sukně
            své.
          </Cit>{' '}
          (Ich befahl ihm, das Geld in die Truhe zu legen, und er legte es in
          den Ärmel seines Rocks.) An anderer Stelle kann man lesen:{' '}
          <Cit>
            Vyňal peníze s měchýřem, dosti pěkný uzlík, a vložil je do rukáva.
          </Cit>{' '}
          (Er zog das Geld heraus, ein recht hübsches Bündel, und steckte es in
          seinen Ärmel.)
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:6b068610-fe2a-11e6-97b4-5ef3fc9ae867"
          />
        </p>
        <p>Dieser Rocktyp war am häufigsten mit Pelz gefüttert.</p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="sukne-pytle1.jpg"
        width={1140}
        height={1631}
        title="Ein typisches Beispiel eines westeuropäischen Rocks mit Sackärmeln, dargestellt im Ausschnitt aus dem Gemälde Exhumierung des Heiligen Hubertus von Rogier van der Weyden, 1430."
      />
      <ImageWithTitle
        md={4}
        src="sukne-pytel2.jpg"
        width={259}
        height={375}
        title="Ein weiteres typisches Beispiel eines westeuropäischen Rocks mit Sackärmeln, dargestellt im Ausschnitt aus dem Triptychon für Alessandro Sforza, ebenfalls von Rogier van der Weyden, 1460."
      />
      <ImageWithTitle
        md={4}
        src="sukne-pytel4.jpg"
        width={494}
        height={831}
        title="Zwei Röcke mit Sackärmeln, dargestellt in den Croniques abregies von David Aubert, 1471. Besonders interessant ist der grüne Rock, dessen Ärmel sich nicht zum Handgelenk hin verengt und locker bleibt. Ein ähnlicher Rock findet sich in den Illustrationen des Gedenkbuches von Olmütz."
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="saul-pomazani.jpg"
        width={1058}
        height={504}
        title="Der Mann links trägt einen Rock mit Sackärmeln und zwei Handöffnungen, wie es in Westeuropa üblich war, im Holzschnitt der Salbung König Sauls, Kuttenberger Bibel (1489)."
      />
      <ImageWithTitle
        md={4}
        src="klobouk-richental.jpg"
        width={240}
        height={320}
        title="Mann in einem Rock mit Sackärmeln und zwei Handöffnungen im Ausschnitt aus der Richental-Chronik (1470-1480)."
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="zasedaniradyolomouc.jpg"
        width={974}
        height={1622}
        title="Sitzung des Stadtrats in der Darstellung aus dem Gedenkbuch von Olmütz (1430-1492). Der Schreiber Václav von Jihlava (unten links) trägt einen blauen, pelzgefütterten Rock mit quadratischem Sackärmel und nur einer Öffnung für die Hand. Der Ratsherr in Blau über ihm hat einen Rock mit Sackärmel, aber mit freiem Ende, ähnlich dem Mann in Grün aus der Illumination in den Gekürzten Chroniken von David Aubert. Es zeigt auch, wie böhmische Röcke im Vergleich zu ihren westlichen Gegenstücken etwas abgeflachter wirken."
      />
      <ImageWithTitle
        md={4}
        src="vaclav-z-jihlavy.jpg"
        width={240}
        height={320}
        title="Václav von Jihlava in einem purpurfarbenen, pelzgefütterten Rock mit Sackärmeln. Ausschnitt aus dem Brünner Rechtsbuch des Václav von Jihlava (1446)."
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="sukne-pytel5.jpg"
        width={632}
        height={972}
        title="Wohlhabender Mann in einem langen, pelzgefütterten Rock mit quadratischem Sackärmel, auf einer Seite des Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={5}
        src="sukne-pytel6.jpg"
        width={1224}
        height={1742}
        title="Priester in einem langen, pelzgefütterten Rock mit quadratischem Sackärmel, auf einem Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="sukne-pytel7.jpg"
        width={382}
        height={872}
        title="Wohlhabender Mann in einem langen, pelzgefütterten Rock mit quadratischem Sackärmel, auf einem Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
    </Row>
  </>
)
