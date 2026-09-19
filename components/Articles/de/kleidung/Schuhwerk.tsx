import { Col, Row } from 'reactstrap'
import { ImageWithTitle } from '../../../ImageWithTitle/ImageWithTitle'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'
import { PUBLICATIONS } from '../../../../shared/constants'

export const Schuhwerk = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="footwear" />
        <h3>Schuhwerk</h3>
        <p>
          Das Schuhwerk in Böhmen in der zweiten Hälfte des 15. Jahrhunderts
          lässt sich in niedrige, halbhohe und hohe Schuhe unterteilen. Schuhe
          wurden am häufigsten aus Leder gefertigt, indem die Sohle an den
          Schaft genäht und der Schuh anschließend auf rechts gewendet wurde
          (sogenannte Wendenahtkonstruktion). Zwischen Sohle und Schaft wurde
          ein Lederstreifen eingefügt, der als Rahmen bezeichnet wird. Das Ziel
          bei der Herstellung eines mittelalterlichen Schuhs war es, alle
          wichtigen Nähte im Inneren zu verbergen. Während in Deutschland die
          Mode der rundspitzigen Schuhe bereits aufkam — ein Trend, der in der
          ersten Hälfte des 16. Jahrhunderts mit den sogenannten
          &bdquo;Kuhmaulschuhen&ldquo; seinen Höhepunkt erreichen sollte — wurde
          in Böhmen zu Beginn des 16. Jahrhunderts noch eine konservative, mäßig
          zugespitzte Form beibehalten.
        </p>
        <p>
          Neben dieser mäßigen Spitze tauchten in Prag in den 1460er Jahren auch
          wieder die langen Schnäbel auf, wie man sie hundert Jahre zuvor an
          Schuhen vom Typ <i>Poulaine</i> getragen hatte. Am 2. September 1464
          befahl Georg von Podiebrad den Bürgermeistern und Räten aller drei
          Prager Städte:{' '}
          <Cit>
            Přikazujem vám, abyste všem ševcuom přikázali, aby špicuov u třevíc
            i u škoren nedělali, a také žádnému svému nedopúštějte v špici
            choditi; v tom naši vuoli naplníte.
          </Cit>
          (Wir befehlen euch, allen Schustern zu gebieten, dass sie keine
          Spitzen an Schuhen und Stiefeln machen, und lasst auch keinen der
          Euren in Spitzen gehen; damit erfüllt ihr unseren Willen.)
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://kramerius5.nkp.cz/view/uuid:a286ef70-8dd6-11e8-9588-5ef3fc9bb22f?page=uuid:fc3acae9-d484-4432-a28d-24c18c153d79"
            note="S. 477"
          />{' '}
          Tomek fügt aus den Prager Stadtbüchern hinzu, dass{' '}
          <Cit>
            za času krále Jiřího smyslili si ševci Pražští dělati zase střevíce
            a škorně špičaté jako kdysi o sto let předtím
          </Cit>{' '}
          (zur Zeit König Georgs die Prager Schuster sich einfallen ließen,
          wieder spitze Schuhe und Stiefel zu machen wie einst vor hundert
          Jahren), und meint, das Verbot habe{' '}
          <Cit>nejspíš mělo svůj účinek</Cit> (wohl seine Wirkung gehabt). Die
          langen Schnäbel kehrten also nur kurz nach Böhmen zurück; dreizehn
          Jahre später, 1477, beschreiben die Altstädter Ratsherren bei einem
          Streit der Schuster bereits einen anderen Trend –{' '}
          <Cit>obuv dělala nižší a škorně jezdecké ostřejší než jindy</Cit> (das
          Schuhwerk werde niedriger und die Reitstiefel schärfer gemacht als
          zuvor).
          <Qt
            publication={PUBLICATIONS.TOMEK8}
            href="https://kramerius5.nkp.cz/view/uuid:38c064d0-106f-11dd-b330-000d606f5dc6?page=uuid:5e2a2492-3eef-4067-a1b7-4c6e1f5056e6"
            note="S. 367, 497"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fig5g.png"
        width={400}
        height={360}
        title="Methode des Annähens des Schafts an die Sohle im 15. Jahrhundert (Goubitz)."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Neben dem Schaft, der Sohle und dem Rahmen enthielt ein Schuh im
          Allgemeinen noch mehrere weitere Teile — eine Fersenversteifung, eine
          Einfassung und eine Variante des Verschlusses oder der Schnürung.
        </p>
        <p>
          In den Prager Städten war das Schusterhandwerk zweigeteilt: in die{' '}
          <i>novinníci</i>, die neues Schuhwerk fertigten, und die{' '}
          <i>vetešníci</i>, die es ausbesserten. Wo genau die Grenze verlief,
          sprachen am 12. Juli 1441 die Ratsherren aller drei Städte aus: Die
          Flickschuster{' '}
          <Cit>
            nové nártie a podešvy nové k starým ochozeným holenom budú moci
            přišívati a dvoje škorně dobře ochozené do krámu na prodaj každý trh
            vykládati, jakož jich práva svědčie, ale červených ani bielých šáróv
            k vetché obuvi nemají okládati
          </Cit>
          (dürfen neue Blätter und neue Sohlen an alte abgetragene Schäfte nähen
          und an jedem Markttag zwei Paar gut abgetragene Stiefel im Laden zum
          Verkauf auslegen, wie ihre Rechte bezeugen, aber rote oder weiße{' '}
          <i>šáry</i> dürfen sie an altes Schuhwerk nicht ansetzen). Daran ist
          abzulesen, was sich an einem Stiefel zuerst abtrug – Blatt und Sohle –
          und was sich der Kunde nur neu machen ließ: die farbigen <i>šáry</i>,
          also die Schäfte. Die Neustädter Ratsherren erneuerten den Spruch 1456
          und fügten die Bedingung hinzu, dass, wer sich in einem der beiden
          Handwerke als Meister niederlassen wolle,{' '}
          <Cit>
            ve věcech slavné svátosti těla a krve pána našeho Jhesu Crista pod
            obojím způsobem
          </Cit>{' '}
          (in Sachen des hochwürdigen Sakraments des Leibes und Blutes unseres
          Herrn Jesu Christi unter beiderlei Gestalt) mit der Gemeinde
          übereinstimmen müsse.
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://kramerius5.nkp.cz/view/uuid:a286ef70-8dd6-11e8-9588-5ef3fc9bb22f?page=uuid:002e8c18-a4ee-489d-b0d0-aec88c18c1b5"
            note="S. 440–441, 470–471"
          />
        </p>
        <p>
          Das Leder fetteten und schwärzten die Schuster selbst. Als sie sich
          1453 mit den Gerbern von Podskalí und Vyšehrad stritten, sagte der
          Gerber Jakub Kavka aus, dass{' '}
          <Cit>
            obojí koželuzi nemazali … ale byli štumfaři; potom se srotili ševci,
            a tak počali mazati, a tak štumfařské řemeslo sešlo
          </Cit>{' '}
          (beide Gerbergruppen nicht fetteten … sondern <i>štumfaři</i> waren;
          dann rotteten sich die Schuster zusammen und begannen zu fetten, und
          so ging das Handwerk der <i>štumfaři</i> ein), und die Schuster Beneš
          und Mařík Lichva bezeugten, die Gerber hätten{' '}
          <Cit>
            naučili mazati od tovařišuov ševcovských zlehka od čtyřidceti let
          </Cit>{' '}
          (das Fetten vor etwa vierzig Jahren von den Schustergesellen gelernt).
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://kramerius5.nkp.cz/view/uuid:a286ef70-8dd6-11e8-9588-5ef3fc9bb22f?page=uuid:8c5aded7-667e-4c4f-8b87-966f49281f28"
            note="S. 465–466"
          />
        </p>
        <h4>Überlappungsverschluss</h4>
        <p>
          Überlappungsverschluss bedeutet, dass ein Teil des Leders am Schaft
          den offenen Bereich des Schuhs überlappt und an der Seite mit einem
          Knopf oder einer Schnalle befestigt wird. Seine Funktion ähnelt sehr
          dem Lappenverschluss; der Hauptunterschied besteht jedoch darin, dass
          der Lappen separat auf den Schuh aufgenäht wird. Dennoch ist es nicht
          einfach, diese beiden Typen in Funden und Darstellungen zu
          unterscheiden, und sie gehen häufig ineinander über. Dieser
          Verschlusstyp war zwischen dem 8. und 13. Jahrhundert am beliebtesten;
          im 15. Jahrhundert trat er nur noch sehr vereinzelt auf (z. B. ein
          Fund aus Freiburg in der Schweiz, bei dem der Überlappung zwei Riemen
          angebracht sind, die an den Knöcheln mittels zweier Schnallen
          befestigt werden).
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fig16.png"
        width={400}
        height={360}
        title="Criblet, Freiburg, Schweiz. Ein Schuh mit Überlappungsverschluss und Schnallen. 14.-15. Jahrhundert (Volken & Bourgarel 2001)."
      />
    </Row>
    <Row>
      <Col>
        <h4>Umschlagverschluss</h4>
        <p>
          Das Prinzip des Verschlusses ähnelt sehr dem Überlappungsverschluss,
          aber der Schuh weist überhaupt keinen offenen Bereich auf dem Rist
          auf. Stattdessen gibt es einen großen Umschlag, der an der Seite
          mittels Knöpfen, Schnallen oder Haken befestigt wird. Dieser
          Verschlusstyp war im 14., 15. und 16. Jahrhundert sehr beliebt,
          insbesondere für hohe Stiefel.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="fig6.png"
        width={540}
        height={800}
        title="Dordrecht, Niederlande. Ein Knöchelstiefel mit Umschlagverschluss, offen und geschlossen dargestellt. 15. Jahrhundert. (Goubitz)"
      />
      <ImageWithTitle
        md={4}
        src="fig7.png"
        width={520}
        height={466}
        title="Vevey, Schweiz. Ein Stiefel mit Umschlagverschluss. 14.-15. Jahrhundert. (Goubitz)"
      />
      <ImageWithTitle
        md={4}
        src="fig14.png"
        width={520}
        height={466}
        title="Coventry, England, 15. Jahrhundert. (Goubitz)"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="zahyb-jensky.jpg"
        width={600}
        height={800}
        title="Ein hoher Reitstiefel mit Umschlagverschluss, Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="zahyb-richental1.jpg"
        width={600}
        height={800}
        title="Ein hoher Reitstiefel mit Umschlagverschluss, Ausschnitt aus der Richental-Chronik (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="zahyb-richental2.jpg"
        width={600}
        height={800}
        title="Ein Knöchelstiefel mit Umschlagverschluss, Ausschnitt aus der Richental-Chronik (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="zahyb-durer.jpg"
        width={600}
        height={800}
        title="Ein hoher Reitstiefel mit Umschlagverschluss, Ausschnitt aus dem Paumgartner-Altar (1500)."
      />
    </Row>
    <Row>
      <Col>
        <h4>Ristriemenverschluss bei offenen Schuhen</h4>
        <p>
          Dieser Verschlusstyp findet sich bei niedrigen, offenen Schuhen vom
          14. bis zum 16. Jahrhundert. Er zeichnet sich durch einen Riemen aus,
          der über den Rist verläuft und mit einem Knopf, einer Schnalle oder
          durch einen Knoten befestigt wird.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={6}
        src="fig5abc.png"
        width={400}
        height={720}
        title={
          <>
            <br />
            Drei Beispiele für Schuhe mit einem Ristriemen und Schnalle aus dem
            15. Jahrhundert.
            <br />
            Oben: Dordrecht, Niederlande. (Goubitz, 2001)
            <br />
            Mitte: Schleswig, Deutschland. (Schnack, 1992)
            <br />
            Unten: London, England. (Grew &amp; De&nbsp;Neergaard, 1988)
          </>
        }
      />
      <ImageWithTitle
        md={6}
        src="reminek-nart-durer.jpg"
        width={1200}
        height={1600}
        title="Dieser Knöchelstiefel entspricht nicht genau dem beschriebenen Typ, da es kein offener Schuh ist, aber das Prinzip des Verschlusses mit einem Ristriemen mit Schnalle ist hier deutlich erkennbar. Der Ausschnitt stammt von Albrecht Dürers Gemälde Lot und seine Töchter (1496-1499)."
      />
    </Row>
    <Row>
      <Col>
        <h4>Seitliche Schnürung</h4>
        <p>
          Dieser Typ hat einen Schlitz an der Seite des Schuhs, der mit einer
          Kordel oder einem Lederriemen geschnürt wird. Er findet sich bei
          niedrigen und knöchelhohen Schuhen vom 13. bis zum 15. Jahrhundert. Er
          kann mit dem Ristriemenverschluss kombiniert werden.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="fig11fig12.png"
        width={480}
        height={864}
        title={
          <>
            {' '}
            Oben: Dordrecht, Niederlande. Ein sehr ungewöhnliches Modell mit
            seitlicher Schnürung und einem Ristriemen mit Schnalle.
            Spätmittelalter. (Goubitz)
            <br />
            Unten: Oslo, Norwegen. Ein Stiefel mit Schnürösen. Spätmittelalter.
            (Schia, 1977)
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="fig17.png"
        width={520}
        height={468}
        title="Oud-Turnhout, Belgien. Ein Schuh mit diagonaler seitlicher Schnürung. 15. Jahrhundert. (Goubitz)"
      />
      <ImageWithTitle
        md={4}
        src="bocni-richental.jpg"
        width={390}
        height={520}
        title="Ein Schuh mit seitlicher Schnürung in einem Ausschnitt aus der Richental-Chronik (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h4>Nesteln</h4>
        <p>
          Dieser Schuhtyp hat ein, zwei oder drei Paar Löcher an der
          Vorderseite, durch die eine Nestel gefädelt wurde, ähnlich wie bei
          einem Wams. Einige Stücke wurden möglicherweise jedoch mit einer
          einzelnen langen Nestel geschnürt, was dem modernen Schuhwerk ähnelt.
          Die Funde werden im Allgemeinen zwischen 1350 und 1530 datiert.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="fig7a.png"
        width={520}
        height={720}
        title={
          <>
            Oben: Dordrecht, Niederlande. Ein Stiefel mit einer Lasche, durch
            die Nesteln auf beiden Seiten verlaufen. 14. Jahrhundert. (Goubitz)
            <br />
            Unten: Delft, Niederlande. Ein Stiefel mit zwei Seitennähten und
            einer Rückennaht. Die Lasche fehlt. 15. Jahrhundert. (Goubitz)
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="fig7fig8.png"
        width={480}
        height={540}
        title={
          <>
            Oben: Dordrecht, Niederlande. Ein Schuh mit paarweisen Nesteln.
            Spätmittelalter. (Goubitz)
            <br />
            Unten: Dordrecht, Niederlande. Ein Schuh mit drei Paar Löchern für
            eine einzelne Durchzugsnestel, wie wir sie heute kennen.
            Spätmittelalter. (Goubitz)
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="fig5ab.png"
        width={520}
        height={540}
        title={
          <>
            {' '}
            Oben: Tiel, Niederlande. Ein Knöchelstiefel mit geschwungenen
            Seitennähten. Spätmittelalter. (Goubitz)
            <br />
            Unten: Delft, Niederlande. Ein Schuh mit modischer Spitze und
            diagonaler Fersennaht. Spätmittelalter. (Goubitz)
          </>
        }
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="fig6bolsward.png"
        width={480}
        height={360}
        title="Bolsward, Niederlande. Ein modisch geschnittener Schuh mit einem Paar Nestellöchern. Spätmittelalter. (Goubitz)"
      />
      <ImageWithTitle
        md={4}
        src="fig8leiden.png"
        width={600}
        height={540}
        title="Leiden, Niederlande. Ein Stiefel mit paarweise gebundenen Nesteln, ähnlich wie bei Wämsern. 15. Jahrhundert. (Goubitz)"
      />
      <ImageWithTitle
        md={4}
        src="fig9.png"
        width={400}
        height={360}
        title="Dokkum, Niederlande. Ein sehr modisch geschnittener Schuh mit drei Paar Nestellöchern. Spätmittelalter. (Goubitz)"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="tkanicky-jensky1.jpg"
        width={600}
        height={800}
        title="Ein Knöchelstiefel mit Nestelverschluss oder Knebelverschluss, Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="tkanicky-jensky2.jpg"
        width={600}
        height={800}
        title="Ein Knöchelstiefel mit Nestelverschluss oder Knebelverschluss, Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="tkanicky-jensky3.jpg"
        width={600}
        height={800}
        title="Ein Knöchelstiefel mit Nestelverschluss oder Knebelverschluss, Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Rekonstruktion</h5>
        <p>
          Für die Rekonstruktion wurden Knöchelstiefel mit einem
          Einzelnestel-Verschluss gewählt, ähnlich modernen Schuhen, da die
          Anforderung ein robuster Stiefel war, den der Besitzer mit
          Plattenbeinrüstung tragen konnte (d. h. der Teil oberhalb des Knöchels
          würde von der Plattenbeinschiene verdeckt) und gleichzeitig lange
          Märsche darin unternehmen konnte. Dieser Stiefeltyp ist in böhmischen
          zeitgenössischen Darstellungen weit verbreitet, siehe unten.
        </p>
        <p>
          Was ein gewöhnlicher böhmischer Schuster können musste, sagt die
          älteste erhaltene Beschreibung eines Meisterstücks, die Zunftordnung
          der Pardubitzer Schuster vom 17. Dezember 1515: Der Bewerber{' '}
          <Cit>
            aby vokázal nejprv škorni příční, druhú škorni telecí, od té škorně
            střevíc zadní, a k tomu také punčoch veliký
          </Cit>{' '}
          (soll zuerst einen <i>příčná</i>-Stiefel vorweisen, zweitens einen
          Kalbslederstiefel, von diesem Stiefel einen hinteren Schuh und dazu
          auch einen großen <i>punčoch</i>) – also zwei Arten hoher Stiefel,
          einen niedrigen Schuh und eine lederne Gamasche. Dafür zahlte er{' '}
          <Cit>čtyři groše bílé a libru vosku</Cit> (vier weiße Groschen und ein
          Pfund Wachs) und richtete der Zunft eine Mahlzeit aus,{' '}
          <Cit>každý podle svěj možnosti</Cit> (jeder nach seinem Vermögen).
          <Qt
            publication={PUBLICATIONS.AC17}
            href="https://kramerius5.nkp.cz/view/uuid:2cf61550-8dd7-11e8-9588-5ef3fc9bb22f?page=uuid:c2b13f00-9bb2-11e8-8b19-005056825209"
            note="S. 226, Nr. 1011"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kabat5.jpg"
        width={466}
        height={512}
        title="Der Münzpräger. Der Verschlusstyp ist hier nicht bestimmbar, aber es ist ersichtlich, dass das Schuhwerk knöchelhoch ist. Ausschnitt aus dem Fresko in der Münzmeisterkapelle des Doms der Heiligen Barbara in Kutná Hora (1460-1470)."
      />
      <ImageWithTitle
        md={4}
        src="vaclav-z-jihlavy.jpg"
        width={249}
        height={320}
        title="Der Schreiber trägt dunkle Knöchelstiefel. Der Verschlusstyp ist nicht bestimmbar. Ausschnitt aus dem Brünner Rechtsbuch des Václav von Jihlava (1446)."
      />
      <ImageWithTitle
        md={4}
        src="tkanicky-jensky2.jpg"
        width={600}
        height={800}
        title="Ein Knöchelstiefel mit Nestelverschluss oder Knebelverschluss, Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
    </Row>
    <Row>
      <p>
        Bei der Herstellung der Replik wurden alle Elemente angewendet, die im
        15. Jahrhundert beim Schuhbau verwendet wurden, d. h. eine Einfassung,
        ein Rahmen und eine Fersenversteifung. Der Schuh ist von Hand genäht und
        anschließend gewendet, sodass alle Nähte im Inneren verborgen sind. Die
        Rekonstruktion wurde von Josef &bdquo;Halflung&ldquo; Novák angefertigt.
      </p>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="bota0.jpg"
        width={720}
        height={960}
        title="Die aufgenähte Fersenversteifung"
      />
      <ImageWithTitle
        md={4}
        src="bota1.jpg"
        width={720}
        height={960}
        title="Die aufgenähte Einfassung"
      />
      <ImageWithTitle
        md={4}
        src="bota4.jpg"
        width={960}
        height={720}
        title="Schaft und Sohle sind zum Nähen vorbereitet"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="bota2.jpg"
        width={960}
        height={720}
        title="Zusammennähen der Schaftteile des Stiefels"
      />
      <ImageWithTitle
        md={4}
        src="bota5.jpg"
        width={960}
        height={720}
        title="Annähen der Sohle an den Schaft"
      />
      <ImageWithTitle
        md={4}
        src="bota9.jpg"
        width={960}
        height={720}
        title="Der vollständig genähte Stiefel"
      />
    </Row>
    <Row>
      <ImageWithTitle md={4} src="bota6.jpg" width={720} height={960} />
      <ImageWithTitle md={4} src="bota7.jpg" width={720} height={960} />
      <ImageWithTitle md={4} src="bota8.jpg" width={720} height={960} />
    </Row>

    <Row>
      <Col>
        <h4>Knebelknöpfe</h4>
        <p>
          Bei diesem Typ befindet sich der Verschlussschlitz vorne auf dem Rist.
          Auf einer Seite befinden sich sogenannte Knebelknöpfe. Diese werden
          hergestellt, indem ein Knoten in einen Lederriemen gebunden wird.
          Dieser Knoten dient dann als Knopf und wird durch die
          gegenüberliegenden Löcher gefädelt. Dieser Verschlusstyp wurde im 14.
          und 15. Jahrhundert verwendet und erreichte seinen Höhepunkt zwischen
          1350 und 1450.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="fig1.png"
        width={400}
        height={396}
        title="Konstruktion eines Knebelknopfs. (Goubitz)"
      />
      <ImageWithTitle
        md={4}
        src="fig8ddt674.png"
        width={520}
        height={396}
        title="Dordrecht, Niederlande. Ein Knöchelstiefel, bei dem der Nestelverschluss durch drei Knebelknöpfe ersetzt wurde. 14.-15. Jahrhundert. (Goubitz)"
      />

      <ImageWithTitle
        md={4}
        src="fig4.png"
        width={400}
        height={360}
        title="Dordrecht, Niederlande. Ein Knöchelstiefel. 14.-15. Jahrhundert. (Goubitz)"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="fig7addt1031.png"
        width={400}
        height={602}
        title={
          <>
            Oben: Gent, Belgien. Ein Stiefel mit zwei Knebelknöpfen und einer
            Lasche. 14.-15. Jahrhundert. (Goubitz)
            <br />
            Unten: Dordrecht, Niederlande. Ein Kinderstiefel mit vier
            Knebelknöpfen. 14.-15. Jahrhundert. (Goubitz)
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="fig9a.png"
        width={400}
        height={648}
        title={
          <>
            Oben: Dordrecht, Niederlande. Ein Stiefel mit zwei Knebelknöpfen und
            zwei Rollknöpfen. 14.-15. Jahrhundert. (Goubitz)
            <br />
            Unten: Ein Stiefel mit kombiniertem Verschluss — die ersten beiden
            Löcher auf dem Rist werden mit einer Nestel gebunden, die übrigen
            mit Knebelknöpfen befestigt. 14.-15. Jahrhundert. (Goubitz)
          </>
        }
      />
      <ImageWithTitle
        md={4}
        src="fig10ab.png"
        width={440}
        height={648}
        title={
          <>
            Oben: Dordrecht, Niederlande. Ein Stiefel mit Riemen, von denen ein
            Ende zu einem Knebelknopf gebunden ist und das andere Ende ein Loch
            zur Befestigung dieses Knopfes aufweist. 14.-15. Jahrhundert.
            (Goubitz)
            <br />
            Unten: Nijkerk, Niederlande. Ein Stiefel mit einem Lappen, der mit
            Knebelknöpfen befestigt wird. 14.-15. Jahrhundert. (Goubitz)
          </>
        }
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="fig5abddt535.png"
        width={400}
        height={466}
        title={
          <>
            Dordrecht, Niederlande. Kinderschuhe aus dem 14.-15. Jahrhundert.
            (Goubitz)
            <br />
            Oben: Ein Kinderschuh. <br />
            Unten: Ein Kleinkinderschuh. <br />
          </>
        }
      />
    </Row>
    <Row>
      <Col>
        <h4>Lappenverschluss</h4>
        <p>
          Im Prinzip handelt es sich um denselben Verschluss wie den oben
          beschriebenen Überlappungsverschluss, aber der Lappen ist kein
          integraler Bestandteil des Schuhs, sondern wird zusätzlich aufgenäht.
          Dieser Verschlusstyp findet sich am häufigsten bei Schuhwerk aus dem
          14. und 15. Jahrhundert.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fig10b.png"
        width={400}
        height={360}
        title="Nijkerk, Niederlande. Ein Stiefel mit einem Lappen, der mit Knebelknöpfen befestigt wird. 14.-15. Jahrhundert. (Goubitz)"
      />
    </Row>
    <Row>
      <Col>
        <h4>Kragenschuhe</h4>
        <p>
          Diese Schuhe haben anstelle einer Einfassung einen Lederkragen. Nach
          dem Anziehen des Schuhs wird der Kragen nach unten umgeschlagen,
          wodurch sich der Schuh leicht um den Knöchel schließt. Dieser Schuhtyp
          war an der Wende vom 15. zum 16. Jahrhundert beliebt.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="fig18.png"
        width={480}
        height={360}
        title="Edam, Niederlande. Ein Schuh mit Kragen. Um 1480. (Van Heeringen & Meffert 1996)"
      />
      <ImageWithTitle
        md={3}
        src="limec-jensky.jpg"
        width={300}
        height={400}
        title="Kragenschuhe, Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="limec-hasplirska.jpg"
        width={600}
        height={800}
        title="Kragenschuhe, Fresko in der Hašplíř-Kapelle des Doms der Heiligen Barbara in Kutná Hora. (spätes 15. Jahrhundert)"
      />
      <ImageWithTitle
        md={3}
        src="limec-richental.jpg"
        width={600}
        height={800}
        title="Kragenschuhe in einem Ausschnitt aus der Richental-Chronik (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h4>Riemenverschluss</h4>
        <p>
          Ein sehr archaischer Verschlusstyp, bei dem der Fuß oberhalb des
          Knöchels rundherum mit einem oder mehreren Riemen umwickelt wurde.
          Dieser Typ lässt sich in zwei Untertypen unterteilen:
        </p>
        <ol>
          <li>
            Der den Fuß umwickelnde Riemen verläuft horizontal und wird durch
            mehrere Paare vertikaler Schlitze gefädelt, die direkt im Schaft des
            Schuhs eingeschnitten sind. Verwendet hauptsächlich zwischen 600 und
            1000 n. Chr.
          </li>
          <li>
            Der den Fuß umwickelnde Riemen verläuft horizontal und wird durch
            Schlaufen gefädelt, die entstehen, indem ein anderer Riemen vertikal
            durch Paare horizontaler Schlitze im Schaft des Schuhs gezogen wird.
            Verwendet hauptsächlich zwischen 1000 und 1300 n. Chr.
          </li>
        </ol>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="all-richental.jpg"
        width={900}
        height={1200}
        title={
          <>
            {' '}
            Mehrere Schuhtypen. Vom Vordergrund zum Hintergrund:
            <ul>
              <li>
                Stiefel mit Riemenverschluss, über den Knöcheln umwickelt.
              </li>
              <li>Schuhe mit umgeklapptem Kragen.</li>
              <li>Beinlinge mit Ledersohle.</li>
              <li>Hohe Reitstiefel mit Umschlagverschluss.</li>
            </ul>
          </>
        }
      />
    </Row>
  </>
)
