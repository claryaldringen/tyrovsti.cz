import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const Unterkleidung = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="undergarments" />
        <h3>Unterkleidung{draft && <DraftBadge />}</h3>
        <p>
          Unterkleidung erfüllte mehrere Funktionen. Da die überwiegende
          Mehrheit der Oberbekleidung aus Wollstoffen gefertigt war, verhinderte
          sie, dass die Wolle direkt auf der nackten Haut scheuerte, was
          andernfalls Reizungen verursacht hätte. Oberbekleidung war zudem sehr
          schwer zu reinigen, da mittelalterliche Waschverfahren mechanische
          Methoden einsetzten, die den Stoff beschädigten. Daher konnten
          Kleidungsstücke nicht allzu häufig gereinigt werden. Das Waschen von
          Unterkleidung, die überwiegend aus Leinen bestand, war nicht so
          schwierig. Sie absorbierte den Schweiß, und wenn sie verschmutzte,
          waren die Kosten für die Anfertigung eines weiteren Stücks zum
          Wechseln bei weitem nicht so hoch wie bei einem Wollkleidungsstück.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Männerhemd</h4>
        <p>
          Das Hemd, im Alttschechischen <i>rubáš</i> oder <i>rubáč</i> genannt,
          war das grundlegende Stück der männlichen Unterkleidung. Hemden waren
          von einfachem Schnitt, ähnelten dem Buchstaben T und reichten
          gewöhnlich bis in den Kniebereich. Schulterzwickel wurden zu dieser
          Zeit noch ohne Fältchen gefertigt. Das Hemd konnte einen einfachen
          ovalen Halsausschnitt, eine V-förmige Öffnung an der Brust oder einen
          Schlitz über die gesamte Länge haben.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
        <p>
          Es scheint, dass der Unterschied zwischen <i>košile</i> (Hemd) und{' '}
          <i>rubáš</i> vor allem in der Länge lag, da ein Erbe aus Litomyšl von
          1510 vermacht: <Cit>košile tři a rubáč dlouhý</Cit> (drei Hemden und
          einen langen Rubáš).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:72e460f0-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Dies würde den <i>rubáš</i> eher, wenn auch nicht ausschließlich, der
          Damengarderobe zuordnen. Dies wird auch durch andere Testamente von
          Litomyšler Bürgerinnen nahegelegt: die Richtersfrau Tisovská besaß
          1497 zwei leinene <i>rubáče</i>; Marta, Schwester der Burggrafsfrau,
          vermachte 1499{' '}
          <i>
            &bdquo;Mandě písařce dva rubáče, jeden žemniový a druhý lněný&ldquo;
          </i>{' '}
          (zwei <i>rubáče</i> der Schreiberin Manda, einen aus Hanf und den
          anderen aus Leinen).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:724e6280-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Kateřina, eine Bürgerin aus der Prager Neustadt, vermachte 1483{' '}
          <Cit>tři rubáše sváteční a tři košile všední</Cit> (drei festliche{' '}
          <i>rubáše</i> und drei Alltagshemden).
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:7212e020-fe2a-11e6-97b4-5ef3fc9ae867"
          />
        </p>
        <p>
          Unterkleidung war meist weiß oder in der natürlichen Farbe des
          Materials, doch wenn wir Belege für farbige Unterkleidung haben, ist
          diese aus irgendeinem Grund am häufigsten blau. Für Hemden ist dies
          sowohl schriftlich aus den alttschechischen Annalen belegt, die
          berichten, dass bei der Schlacht am Vyšehrad{' '}
          <i>
            &bdquo;čeští a moravští páni byli zbiti a všeho odění a rúcha až do
            modré košile obnaženi&ldquo;
          </i>{' '}
          (böhmische und mährische Herren erschlagen und all ihrer Kleidung und
          Gewänder bis auf ihre blauen Hemden entblößt wurden), als auch
          ikonographisch in den Miniaturen des Lebens des Heiligen Franziskus
          von 1500.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:71b15f30-fe2a-11e6-97b4-5ef3fc9ae867"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kosile_rajhrad.jpg"
        width={300}
        height={400}
        title="Ein Hemd, das unter die Knie reicht, mit V-förmigem Halsausschnitt, Ausschnitt aus der Tafelmalerei Kreuztragung auf dem Rajhrader Altar, um 1440."
      />
      <ImageWithTitle
        md={4}
        src="kosile_nove_sady.jpg"
        width={300}
        height={400}
        title="Ein Hemd, das bis zu den Knien reicht, mit Schlitz über die gesamte Länge und kurzen Schlüpfer-Bruche, Ausschnitt aus der Tafelmalerei Kreuzigung von Nové Sady auf dem Rajhrader Altar, um 1440."
      />
      <ImageWithTitle
        md={4}
        src="kosile_jk.jpg"
        width={640}
        height={480}
        title="Lazarus in einem Hemd mit Schlitz über die gesamte Länge, Ausschnitt aus dem Jenaer Kodex (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Rekonstruktion</h5>
        <p>
          Für die Rekonstruktion wurde das Hemd aus der Tafelmalerei Kreuzigung
          von Nové Sady auf dem Rajhrader Altar gewählt. Eines wurde mit einem
          Schlitz belassen, wie im Original dargestellt, während das andere ohne
          Schlitz rekonstruiert wurde. Beide Hemden sind von Hand aus feinem
          Leinentuch genäht. Die Rekonstruktion wurde von Daria Litvinova
          angefertigt.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="shirt/kosile1.jpeg"
        width={1536}
        height={2048}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile2.jpeg"
        width={1536}
        height={2048}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile3.jpeg"
        width={1536}
        height={2048}
        title=""
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="shirt/kosile4.jpeg"
        width={1536}
        height={2048}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile5.jpeg"
        width={1536}
        height={2048}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile7.jpeg"
        width={1536}
        height={2048}
        title=""
      />
    </Row>
    <Row>
      <Col>
        <h4>Frauenhemd</h4>
        <p>
          Im Vergleich zur männlichen Unterkleidung gibt es deutlich weniger
          Belege für weibliche Gegenstücke. Frauen trugen unter ihrer
          Oberbekleidung einfache, lange Hemden mit Trägern. Am häufigsten
          begegnen wir ihnen in Illuminationen, die Badedienerinnen darstellen,
          die sie sogar als Arbeitskleidung trugen, und auch arbeitende Frauen
          werden darin abgebildet. Des Weiteren finden sie sich in intimen
          Szenen, die Schlafzimmerinterieurs darstellen. Einer der ältesten
          archäologischen Funde eines Frauenhemdes stammt aus dem 14.
          Jahrhundert von der Burg Ranis in Deutschland.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
          Dieses Hemd ist aus zwei Bahnen genäht, Vorder- und Rückseite. Ein
          anderer Typ besteht aus drei Bahnen. Die ersten beiden bilden im
          Wesentlichen das vordere und hintere Mieder, während die dritte in der
          Taille eingesetzt wird, um einen gefalteten Rock zu bilden. An der
          Seite hatte dieser Hemdtyp eine Schnürung für besseren Sitz,
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> später konnte der
          Miederschnitt um Brustkörbchen erweitert werden, wie aus vier Funden
          von der Burg Lengberg in Osttirol hervorgeht, die auf die 1480er Jahre
          datiert werden.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="lazebnice.jpg"
        width={764}
        height={1200}
        title="Badedienerinnen in Hemden, Jenaer Kodex, 1490-1510."
      />
      <ImageWithTitle
        md={4}
        src="Die_Hefneryn.jpg"
        width={327}
        height={460}
        title="Eine böhmische Töpferin im Hemd bei der Arbeit, eine Spielkarte aus dem Hofämterspiel, das im Auftrag von Ladislaus Postumus entstand, 1450er Jahre."
      />
      <ImageWithTitle
        md={4}
        src="lengbergshirt.jpg"
        width={564}
        height={743}
        title="Hemdfund von der Burg Lengberg in Osttirol mit Brustkörbchen, 1470er-1480er Jahre."
      />
    </Row>
    <Row>
      <Col>
        <h4>Bruche</h4>
        <p>
          Das zweite grundlegende Stück männlicher Unterkleidung war die Bruche,
          im Alttschechischen als <i>hace</i> bekannt (vor dem Verlust der
          Jotation im 14. Jahrhundert als <i>hácě</i> ausgesprochen), auch in
          Aufzeichnungen als <i>hacze</i>, alttschechisch <i>rúšce</i>,
          lateinisch <i>bragas</i> oder <i>bracca</i> zu finden. In früheren
          Zeiten reichten sie bis zu oder unter die Knie. Diese längeren Bruche
          verschwanden allmählich und begegnen uns nach der Mitte des 15.
          Jahrhunderts nicht mehr.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
        <p>
          Später wurden Bruche in schriftlichen Quellen häufiger mit dem neuen
          lateinischen Neologismus <i>femoralia</i> bezeichnet, wörtlich
          übersetzt als <i>nábedrnie</i> (Oberschenkelbedeckungen). So nennt sie
          auch Vavřinec von Březová in seiner Chronik, als er die Schlacht am
          Vyšehrad beschreibt. Nach der Schlacht seien die gefallenen Ritter
          angeblich ihrer Rüstung entledigt worden, bis sie nur noch die Bruche
          trugen:{' '}
          <Cit>
            ... baronibus et militibus sunt velut porci crudeliter interempti et
            statim omnibus armis et vestibus usque femoralia denudaci.
          </Cit>
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
        <p>
          Bruche wurden aus dünnem Leinentuch gefertigt, wie die Kladrauer Bibel
          von 1471 belegt:{' '}
          <Cit>
            Učiníš i rúčce lněné, aby přikryly mrzkosti tvé od ledví až po bedr.
          </Cit>
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> Der einfachste Typ
          bestand aus einem mehr oder weniger geformten Stoffstreifen, der
          zwischen den Beinen hindurchgeführt und an den Seiten durch eine
          Kordel gehalten wurde, die auf einer oder beiden Seiten gebunden
          wurde. Solche Bruche sind sowohl aus verschiedenen zeitgenössischen
          Darstellungen als auch aus archäologischen Funden auf der Burg
          Lengberg in Osttirol bekannt. Eine andere Variante konnte einen
          Schnitt aufweisen, bei dem die Kordel an den Seiten durch einen Kanal
          mit einer Zugschnur ersetzt wurde, deren Enden vorne herausgeführt
          wurden. Beim Zusammenziehen und Binden bildete sich an der Vorderseite
          der Bruche eine Art Beutel für die Genitalien. Während ältere Bruche
          (mit kurzen Beinen) in Darstellungen nur in Weiß zu finden sind,
          können Schlüpfer-Bruche auch in blauen oder sogar schwarzen
          Darstellungen gefunden werden.
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 26" />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="spodky-dlouhe.jpg"
        width={556}
        height={784}
        title="Bruche (noch mit kurzen Beinen), Brünner Rechtsbuch des Václav von Jihlava, 1446."
      />
      <ImageWithTitle
        md={6}
        src="krteni.jpg"
        width={1038}
        height={894}
        title="Taufszene, bei der die Figuren blaue Schlüpfer-Bruche tragen. Jenaer Kodex (1490-1510)."
      />
      <ImageWithTitle
        src="svroch-detail.jpg"
        width={489}
        height={488}
        title="Auf dem Gemälde des Heiligen Rochus von 1480, italienischer Herkunft, ist erkennbar, dass Schlüpfer-Bruche zu jener Zeit in ganz Europa praktisch identisch waren. In diesem Fall handelt es sich um den zweiten Typ mit einer in der Mitte gebundenen Zugschnur."
        href="svroch.jpeg"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={6}
        src="lengberg_underpants.gif"
        width={709}
        height={543}
        title="Bruche von der Burg Lengberg in Osttirol, datiert auf die 1480er Jahre."
      />
      <ImageWithTitle
        md={6}
        src="boj_o_kalhoty.jpg"
        width={1920}
        height={1375}
        title={
          <>
            Verschiedene Typen von Bruche im Kupferstich{' '}
            <Cit>Boj o kalhoty</Cit> (Kampf um die Hosen) des Monogrammisten
            E.S., Deutschland, 1440-1467.
          </>
        }
      />
    </Row>
    <Row>
      <Col>
        <p>
          Während es für einen Mann im 15. Jahrhundert als schwere Beleidigung
          galt, <Cit>bez hacz choditi</Cit> (ohne Bruche herumzulaufen)
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 27" />, ist die Frage,
          ob auch Frauen Bruche (<i>femoralia</i>) trugen, derzeit Gegenstand
          einer lebhaften Debatte, die durch die oben erwähnten Textilfunde auf
          der Burg Lengberg ausgelöst wurde. Es lässt sich nicht eindeutig
          beweisen, ob die oben genannten und abgebildeten Bruche einem Mann
          oder einer Frau gehörten. Interessant ist jedoch, dass sie für den
          böhmischen Kontext bereits 1455 im <i>Clementinum-Wörterbuch</i>{' '}
          namentlich belegt sind, und zwar als ihre feminine Variante{' '}
          <i>feminale</i>.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA2} note="Str. 69" />
          Für den italienischen Kontext sind Bruche für Frauen sicher an der
          Wende vom 16. zum 17. Jahrhundert belegt.
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 28" />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Sowohl Bruche als auch Hemden galten als intime Kleidungsstücke, die
          in der Öffentlichkeit zu zeigen als unschicklich galt. Die allmähliche
          Enthüllung des Hemdes begann in der zweiten Hälfte des 15.
          Jahrhunderts im Zusammenhang mit dem Eindringen der Renaissancemode
          durch Deutschland, aber beispielsweise im moralisierenden Jenaer Kodex
          erscheinen sichtbare Teile des Hemdes nur bei Figuren, die in
          irgendeiner Weise sündhaft sind.
        </p>
      </Col>
    </Row>
  </>
)
