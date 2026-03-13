import { Col, Row } from 'reactstrap'
import React from 'react'
import { PUBLICATIONS } from '../../../shared/constants'
import { Qt } from '../../Quote/Qt'
import { ImageWithTitle } from '../../ImageWithTitle'
import { ArticleProps } from '../../../types'
import { DraftBadge } from '../../DraftBadge'

export const HansHarsdorfer = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="hans-harsdorfer" />
        <h4>Hans (II.) Harsdorfer (ca. 1450–1511){draft && <DraftBadge />}</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Hans Harsdorfer stammte aus der Nürnberger Patrizierfamilie der
          Harsdorfer, deren Ursprünge auf das Jahr 1377 zurückgehen, als zwei
          Brüder, Heinrich und Friedrich Harsdorfer, von ihren Gütern nach
          Nürnberg zogen, wo sie das Bürgerrecht erlangten und im Bergbau und
          Hüttenwesen tätig wurden. Sie wurden somit sogenannte Wappenbürger,
          umso bemerkenswerter, als sie ihr Wappen in die Stadt mitbrachten.
          Dieses Wappen, das einen silbernen Turm auf einem Dreiberg auf rotem
          Feld zeigt, soll ihnen bereits 1203 vom römischen König Philipp von
          Schwaben verliehen worden sein, als sich die Vorfahren der Familie
          während Philipps Feldzug nach Italien auszeichneten, wo sie einen Turm
          auf einer Anhöhe eroberten.
          <Qt publication={PUBLICATIONS.VONHARSDORF} />
        </p>
        <p>
          Hans&apos; Vater Anton Harsdorfer heiratete Barbara Fritz, eine
          Bürgerin aus Pilsen, mit der er zwei Kinder hatte, Hans und Kateřina.
          Anton erwarb das Gut Malesice, das während der Hussitenkriege dem
          Kloster Kladruby entfremdet worden war. Anton Harsdorfer starb am{' '}
          <b>12. März 1462</b> und wurde in der Kathedrale St. Bartholomäus in
          Pilsen beigesetzt. Malesice wurde von seinen zwei Kindern geerbt,
          wobei Kateřina ihren Anteil am 30. März 1474 für 1.000 Gulden an ihren
          Bruder Hans verkaufte.
          <Qt
            publication={PUBLICATIONS.ENCYKLOPEDIEPLZEN}
            href="https://encyklopedie.plzen.eu/home-mup/?acc=profil_osobnosti&load=4600"
          />
        </p>
      </Col>
      <ImageWithTitle
        src="wappen_4.png"
        width={550}
        height={432}
        title="Wappen der Familie nach J. A. Siebmacher (1605)"
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="hans-harsdorffer.jpg"
        width={800}
        height={986}
        title="Porträt des Hans Harsdorfer, vermutlich von Michael Wolgemut, 1484"
      />
      <Col>
        <p>
          Hans Harsdorfer wurde irgendwann zwischen 1450{' '}
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          und 1460{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          entweder in Malesice oder in Pilsen geboren. Wie oben erwähnt, wurde
          er 1474 alleiniger Besitzer von Malesice und nannte sich fortan auch
          danach. Am <b>11. September 1481</b> heiratete er Margareta aus der
          Nürnberger Wappenpatrizierfamilie der Nützel. Er war Bergbau- und
          Hüttenunternehmer des Familienunternehmens, das seit 1460 tätig war.
          Anfangs handelte er nur mit Erzen, die aus böhmischen Bergwerken
          importiert wurden. Diplomatische Kontakte zum böhmischen König
          Vladislav II. Jagiello, die nach den Aufständen der Kuttenberger
          Bergleute und der Aufdeckung von Finanzbetrug an der Münze im Jahr
          1496 folgten, brachten ihm den Posten des Obermünzmeisters sowie die
          Teilnahme am Prager Landtag von 1497 ein.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />
        </p>
        <p>
          Er ließ die Kapelle der Heiligen Wenzel und Ladislaus im Welschen Hof
          prunkvoll ausstatten, einschließlich dreier reich verzierter
          Altarretabel, die er offenbar bei einer Malerwerkstatt direkt in
          Nürnberg in Auftrag gegeben hatte. Die Kapelle wurde am{' '}
          <b>20. Juli 1497</b> anlässlich des Besuchs König Vladislavs II. (neu)
          geweiht.
          <Qt publication={PUBLICATIONS.VONHARSDORF} /> Während seiner Zeit in
          Kutná Hora ließ er auch das Haus des Münzmeisters aufwendig umbauen
          und erwarb eine luxuriöse Goldschmiedewaage in einem dekorativ
          bemalten Kasten, dessen Außendeckel einen Kampf wilder Männer zeigt
          und dessen Innenseite zwei bewaffnete Männer darstellt, die die Wappen
          seiner selbst und seiner Frau Margareta halten.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          Er und seine Frau stifteten der Kapelle auch eine Kasel, die mit
          Stickereien von Szenen aus dem Marienleben und der Kindheit Christi
          geschmückt war. In der Barockzeit wurde die Stickerei
          herausgeschnitten, auf einen neuen Untergrund genäht und in Gold
          gerahmt.
          <Qt
            publication={PUBLICATIONS.CMSKH}
            href="https://www.cms-kh.cz/textil-a-odevy"
          />{' '}
          1499 bat er den König, ihn von seinem Amt zu entbinden, um sich ganz
          den Geschäften zu widmen, da er nach dem Tod seines Onkels Endres
          Harsdörffer dessen Lehen und Güter geerbt hatte: die Burg Eschenbach,
          ein Kupferwerk und einen Hammerhof in Enzendorf (heute Teil von
          Hartenstein in Unterfranken).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          Vladislav gewährte diese Bitte und garantierte ihm in einer Urkunde
          vom November 1499 den Schutz seines gesamten Besitzes auf dem Gebiet
          der Böhmischen Krone.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="oltar_kaple_ceskych_kralu.jpg"
        width={1706}
        height={1280}
        title="Linkes Altarretabel in der Kapelle der Hl. Wenzel und Ladislaus – die Jungfrau Maria unter den Aposteln"
      />
      <ImageWithTitle
        src="kh_kaple.jpg"
        width={640}
        height={480}
        title="Rechtes Altarretabel in der Kapelle der Hl. Wenzel und Ladislaus"
      />
      <ImageWithTitle
        src="goldwage.jpg"
        width={550}
        height={394}
        title="Goldschmiedewaage des Hans Harsdorfer"
      />
      <ImageWithTitle
        src="mincmistruvdum.jpeg"
        width={600}
        height={800}
        title="Das Haus des Münzmeisters im Komplex des Welschen Hofs in Kutná Hora"
      />
    </Row>
    <Row>
      <Col>
        <p>
          So verließ Hans Harsdorfer Kutná Hora am <b>5. April 1499</b>,
          <Qt publication={PUBLICATIONS.VONHARSDORF} /> zog nach Nürnberg und
          trat 1501 dem Stadtrat bei (in dem Mitglieder der Familien seines
          Schwiegervaters Nützel und seines Schwagers Stromer erblich dienten),
          und 1505 wurde er zum Ersten Bürgermeister gewählt.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />
          Seine Interessen in Böhmen verlor er jedoch nie aus den Augen. 1502
          beschaffte er vier Haubitzen für Petr von Rosenberg, und in einem
          Prozess in Nürnberg im März 1512 wird erwähnt, dass er für Jan von
          Valdštejn Rüstungen für fünfzig Fußsoldaten und zwanzig berittene
          Ritter hatte anfertigen lassen, was ein beträchtlicher militärischer
          Auftrag war. Für Pilsen arbeitete er als Finanzexperte und beriet
          unter anderem, wie nach dem Stadtbrand von 1507 mit den Finanzen
          umzugehen sei.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          Der Stadtrat entsandte ihn auf diplomatische Missionen zu König
          Vladislav,{' '}
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          für den er ein Madonnenbild von Albrecht Dürer für 45 Gulden erwarb
          und es dem König 1504 als offizielles Geschenk der Stadt Nürnberg
          übergab. Es scheint, dass ihn mit Dürer eine persönliche Freundschaft
          verband, da Dürer in seinem Brief vom <b>7. Februar 1506</b> ihn aufs
          Herzlichste als seinen Freund grüßen ließ.
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          Im Landshuter Erbfolgekrieg wurde er einer von Nürnbergs drei
          Feldhauptleuten. Er starb ohne Nachkommen am <b>14. Januar 1511</b> in
          Nürnberg
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          und wurde, seinem Wunsch entsprechend, in Pilsen, in der Kathedrale
          St. Bartholomäus, beigesetzt.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />
        </p>
        <p>
          Neben den oben genannten Werken stand Hans Harsdorfer auch hinter der
          Entstehung weiterer Kunstwerke, etwa dem sogenannten Rabíer
          Altarretabel, das einigen Quellen zufolge direkt als Geschenk für Půta
          Švihovský von Rýzmberk bestimmt war
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          und anderen zufolge ursprünglich zusammen mit einer Monstranz für die
          St.-Georgs-Kirche in Malesice angefertigt wurde.
          <Qt
            publication={PUBLICATIONS.ENCYKLOPEDIEPLZEN}
            href="https://encyklopedie.plzen.eu/home-mup/?acc=profil_osobnosti&load=4601"
          />
          Er erwarb auch liturgische Gegenstände und Textilien für die Kapelle
          in Aachen, wo der böhmische König das Patronatsrecht hatte, und durch
          seine Vermittlung erhielt der königliche Hofkünstler, der
          Holzschnitzer Hanuš (wahrscheinlich ein Mitglied der Werkstatt Spiess,
          Hans Scholler aus Nürnberg), eine beträchtliche Geldsumme, die
          offenbar zur Bezahlung des prächtigen Altarretabels für die Kapelle
          auf Burg Křivoklát diente – des repräsentativsten Auftrags, den
          Vladislav II. Jagiello in den ersten Jahren seiner Herrschaft in
          Böhmen vergeben hatte.
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="rabska-archa.jpg"
        width={1744}
        height={1200}
        title="Altarretabel des Hl. Georg aus der Burgkapelle der Heiligen Dreifaltigkeit in Rábí, die sogenannte Rabíer Arche"
      />
      <ImageWithTitle
        src="oltar-krivoklat.jpg"
        width={1600}
        height={2400}
        title="Das Křivokláter Altarretabel, 1480–1490"
      />
    </Row>
  </>
)
