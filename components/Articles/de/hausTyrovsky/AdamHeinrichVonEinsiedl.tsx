import { Col, Row } from 'reactstrap'
import React from 'react'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'

export const AdamHeinrichVonEinsiedl = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="adam-heinrich-von-einsiedl" />
        <h4>
          Adam Jindřich (Adam Heinrich) Týřovský von Einsiedl (gestorben 1652)
        </h4>
        <p>
          Adam Jindřich war beim Tod seines Vaters 1618 minderjährig, was ihn
          wahrscheinlich rettete. 1621 wurde er zwar vor die
          Konfiskationskommission geladen, doch da er nicht volljährig war,
          erschien er auf die zweimalige Ladung nicht; erst 1629 wurde er vor
          der Kommission tractationis freigesprochen, da er am Aufstand nicht
          persönlich teilgenommen hatte, und die väterlichen Güter Chříč,
          Hřebečníky, Broumy und Kožlany wurden ihm belassen.
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:7e24d610-e020-4b49-94be-10a7485249aa"
            note="S. 314"
          />{' '}
          Seinen Vater befand die Kommission zwar für schuldig, die Güter beließ
          sie jedoch dem minderjährigen Sohn. Zum Chříčer Gut gehörten damals
          die Dörfer Chříč, Slatina, Lhotka, zwei Untertanen in Holovousy,
          Hlince, Studená, Milíčov und Hedčany, die Höfe Březsko und Dubjany
          sowie die wüsten Dörfer Dolany und Bělbožice.
          <Qt
            publication={PUBLICATIONS.KOCKA30}
            href="https://kramerius5.nkp.cz/view/uuid:9bfe6dc0-47ef-11ea-81b3-005056827e52?page=uuid:79c45bd3-298d-4b7f-b098-b0ecbf1c8a1d"
            note="S. 14–15"
          />
        </p>
        <p>
          Sein Vormund Bohuslav Jiří Krakovský wirtschaftete unterdessen auf
          Chříč übel. 1624 verklagte ihn Dorota Týřovská, er verarme die Waisen
          und habe Getreide, Vieh und andere Dinge weggeführt und verkauft.
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:7e24d610-e020-4b49-94be-10a7485249aa"
            note="S. 314–315"
          />
        </p>
        <p>
          1627 erreichte Adam Jindřich die Volljährigkeit und ergriff Besitz von
          den verschuldeten Gütern; er bewirtschaftete sie mit dem Beamten
          Václav Kulíšek. Um das verwüstete Gut bestellen zu können, borgte er
          sich von Vilém von Klenové auf Zvíkovec 2800 Schock. Als die Frist
          1631 verstrichen war und er nicht zahlen konnte, ergriff der Gläubiger
          Besitz vom Gut Chříč. Der Schuld entledigte sich Týřovský dadurch,
          dass er Viléms Tochter Eva Eurosina von Klenové zur Frau nahm, die von
          ihrem Vater das Städtchen Zvíkovec und das Dorf Chlum kaufte. Nach
          Sedláček kaufte Vilém von Klenové Zvíkovec 1633 von Václav Heraklius
          von Bliživo eigentlich schon für seine verheiratete Tochter.
          <Qt
            publication={PUBLICATIONS.SEDLACEK13}
            href="https://kramerius5.nkp.cz/view/uuid:12f8f660-3001-11de-b49a-000d606f5dc6?page=uuid:930c0ec0-7b5f-11e7-89ee-5ef3fc9ae867"
            note="S. 249"
          />
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:7c883e9c-c039-4e28-8217-2e3df2340137"
            note="S. 315"
          />
        </p>
        <p>
          Im selben Jahr 1631 fielen die Sachsen in Rakovník ein, und Týřovský
          wurde in der Folge beschuldigt, er habe auf dem Marktplatz den
          Hauptmann Ploskovský begrüßt, sich ihm als Rittmeister verdingt, sei
          mit seiner Frau durch den Kreis geritten, habe den Sachsen Nachrichten
          geliefert, sich mit den Kaiserlichen geschlagen und dem katholischen
          Pilsen gedroht. Die Bürger von Rakovník bezeugten dagegen, dass er
          nicht in der Stadt gewesen sei und dass seine Untertanen dort nur
          Sachen aus Chříč hergebracht und vor dem Feind versteckt hätten. Wegen
          der Unsicherheit der Beweise wurde er 1638 begnadigt und nur zu einer
          Geldstrafe von 3000 rheinischen Gulden verurteilt, von denen 2000 für
          den Bau der Prager Burg und 1000 für den Bau des Jesuitenkollegs in
          Klatovy bestimmt wurden. Das Geld lieh ihm der Prager Bürger Martin
          Leibinger, dem er zur Deckung den Hof in Holovousy abtrat.
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:7c883e9c-c039-4e28-8217-2e3df2340137"
            note="S. 315"
          />{' '}
          Bílek datiert den ganzen Vorgang: Der königliche Prokurator klagte ihn
          am 15. November 1632 vor der Friedländer Konfiskationskommission an,
          die Revisionskommission schlug am 12. August 1638 die Begnadigung vor,
          und die kaiserliche Resolution bestätigte sie am 14. Dezember 1638
          unter der Bedingung, dass er{' '}
          <Cit>
            místo pokuty, za provinění své zasloužilé, 3000 zl. rýn. na hotově
            složil
          </Cit>{' '}
          (anstelle der für sein Vergehen verdienten Strafe 3000 rheinische
          Gulden in bar erlege); 2000 Gulden wurden durch Resolution vom 30.
          Dezember 1638 für den Bau der Prager Burg bestimmt und die übrigen
          1000 am 10. Januar 1639 den Jesuiten geschenkt.
          <Qt
            publication={PUBLICATIONS.BILEK}
            href="https://kramerius5.nkp.cz/view/uuid:ca6e5cc0-e117-11dc-9e25-000d606f5dc6?page=uuid:e8fba37e-cf71-4acd-8727-f1a0a3d6f8e3"
            note="S. 674, 821"
          />
        </p>
        <p>
          Chříč trug unterdessen die Last der Heeresversorgung. Von Ende Januar
          1638 ist sein Gesuch um Nachlass der Kontribution für die Güter Chříč
          und Zvíkovec erhalten: Den Soldaten hatte er bereits 3131 Gulden 14
          Kreuzer, 44 929 Pfund Fleisch, 740 Strich Roggen, 451 Strich Weizen
          und 1661 Strich Hafer geliefert, während er auf die Budweiser
          Kontribution 394 Gulden 45 Kreuzer schuldig war. Der Kreiskommissar
          Skuhrovský empfahl, vier Fünftel des Rückstands zu erlassen, und am 4.
          Mai 1638 wurde so entschieden.
          <Qt
            publication={PUBLICATIONS.MILITARE5}
            href="https://kramerius5.nkp.cz/view/uuid:ce02ccf0-c3af-11e3-bb44-5ef3fc9bb22f?page=uuid:ee70b330-7262-40d2-ac5e-7c68d922cf02"
            note="S. 153, 167"
          />
        </p>
        <p>
          In den Jahren 1640 bis 1644 war er selbst Hauptmann des Rakonitzer
          Kreises, zusammen mit Jan Ferdinand Renšperger von Renšperk. Am 26.
          Dezember 1640 schrieben beide aus Rakovník{' '}
          <Cit>cito, cito, citissime</Cit> an die Statthalter, der Kommissar
          Rossi de Dateli habe ohne ihr Wissen vier Fußregimenter in den vom
          Krieg ausgezehrten Kreis geführt; im Juni 1642 meldeten sie neun
          Regimenter des Generals Suys mit Artillerie und drei Regimenter
          Kroaten in Rakovník.
          <Qt
            publication={PUBLICATIONS.MILITARE6}
            href="https://kramerius5.nkp.cz/view/uuid:ce02ccf0-c3af-11e3-bb44-5ef3fc9bb22f"
            note="S. 137, 187, 249, 306–313"
          />
          <Qt
            publication={PUBLICATIONS.MILITARE7}
            href="https://kramerius5.nkp.cz/view/uuid:ce02ccf0-c3af-11e3-bb44-5ef3fc9bb22f"
            note="S. 179, 186"
          />
        </p>
        <p>
          Der Krieg wälzte sich noch zweimal über Chříč hinweg. 1637 zogen
          feindliche Heere durch die Umgebung und brannten Chříč nieder, sodass
          sich Adam Jindřich in Prag aufhielt, wo er vom Steuerregistrator
          Kačerovský ein Haus kaufte. Im März 1640 rückte der kaiserliche Oberst
          Václav Zahrádecký mit zwei Regimentern vor Podmokly, brannte alles
          nieder und stürmte über die Furt auf Chříč zu; Týřovský trieb 300
          Gulden Brandschatzung auf und wurde den Feind damit los.
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:7c883e9c-c039-4e28-8217-2e3df2340137"
            note="S. 315"
          />
        </p>
        <p>
          Die Kriegslast endete damit nicht. 1641 wurden im Rakonitzer Kreis
          sechzehn kaiserliche Regimenter zusammengezogen, und Chříč lieferte zu
          ihrer Verpflegung zusammen mit Libyně, Šípy und Podmokly je 512 Pfund
          Brot, ebenso viele Pinten Bier und 256 Pfund Fleisch, Kožlany 320
          Pfund Brot, ebenso viel Bier und 160 Pfund Fleisch. Im folgenden Jahr
          meldete der Hauptmann von Zbiroh der böhmischen Kammer, dass sich
          einige Bauern aus Hunger den in Kožlany einquartierten Soldaten
          anschlossen – sie führten sie zu den herrschaftlichen Festen und
          droschen ihnen Getreide, um sich so des Hungers zu erwehren.
          <Qt
            publication={PUBLICATIONS.KOCKA30}
            href="https://kramerius5.nkp.cz/view/uuid:9bfe6dc0-47ef-11ea-81b3-005056827e52?page=uuid:ca529629-5caa-4dc2-aace-243fea42d091"
            note="S. 25"
          />
        </p>
        <p>
          Er starb gegen Ende Mai 1652; seinen letzten Willen setzte er am 29.
          April 1652 auf und nannte darin das Gut{' '}
          <Cit>na nejvýš zruinirovaný</Cit> (aufs Äußerste ruiniert).
          <Qt
            publication={PUBLICATIONS.SEDLACEK8}
            href="https://kramerius5.nkp.cz/view/uuid:1ed20270-2ffb-11de-8f63-000d606f5dc6?page=uuid:5af72310-7b52-11e7-89ee-5ef3fc9ae867"
            note="S. 111–112"
          />{' '}
          Darin verfügte er, sein Leib solle in ungemangelte weiße Wäsche
          gekleidet und ohne allen Prunk in der Kirche zu Kožlany bestattet
          werden, der er 500 Schock vermachte, damit für das Heil seiner Seele
          jeden Monat eine gesungene Messe gehalten werde. Beim Begräbnis
          sollten alle armen Untertanen ein Almosen von je sechs Kreuzern und
          zum Mittagsmahl ein Stück Fleisch erhalten, zehn Arme ein Gewand aus
          Tuch und weitere zehn eines aus schwarzem Leinen. Das arg
          heruntergewirtschaftete Gut Chříč erhielt der Sohn Vojtěch Ignác, die
          Witwe Eva Eurosina 20 000 Schock, und würde sie nicht ausgezahlt,
          sollte sie einstweilen den Hof Ptíč, die Mühle Lejskovský und die
          Dörfer Hlince und Studená übernehmen; der Tochter Kateřina Dorota
          wurden 6000 Gulden Mitgift und die Aussteuer zugewiesen. An Schulden
          waren es 11 500 Gulden.
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:982a126d-a074-4939-802f-22a8843d76ad"
            note="S. 316, 377"
          />
          <Qt
            publication={PUBLICATIONS.KOCKA30}
            href="https://kramerius5.nkp.cz/view/uuid:9bfe6dc0-47ef-11ea-81b3-005056827e52?page=uuid:11c74e7f-ef98-48bc-a87b-1ff6e8ad8a36"
            note="S. 43"
          />
        </p>
      </Col>
    </Row>
  </>
)
