import React from 'react'
import { Col, Row } from 'reactstrap'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const DeutscheMilitaerordnungenEinfuehrung = () => (
  <Row>
    <Col>
      <p>
        Die Gegner der Hussiten lernten deren Kampfweise im Krieg selbst. Nach
        Max Jähns waren sie dazu gezwungen: Wer der Artillerie eigene Artillerie
        entgegenstellen wollte, brauchte Wagen, und wer eine feindliche
        Wagenburg erstürmen wollte, musste die Hauptlast des Kampfes dem Fußvolk
        überlassen.
        <Qt
          publication={PUBLICATIONS.JAHNS1889}
          href="https://archive.org/details/geschichtederkr00jhgoog/page/303/mode/1up"
        />{' '}
        Die Wagenburg verband sich in den deutschen Ländern so eng mit dem Heer,
        dass man das Wort <i>Wagenburg</i> oft schlechthin für das Heer
        gebrauchte. Die damaligen <i>Wagenburgordnungen</i> sind deshalb zumeist
        zugleich <i>Heerordnungen</i>.
        <Qt
          publication={PUBLICATIONS.JAHNS1889}
          href="https://archive.org/details/geschichtederkr00jhgoog/page/304/mode/1up"
        />{' '}
        Erwähnungen von Wagen, die nach hussitischer Art gerüstet waren, finden
        sich nach Toman in den Beschlüssen der Stände der Nachbarländer seit der
        Niederlage bei Aussig (Ústí nad Labem) im Jahr 1426. Anfangs sind sie
        jedoch sehr knapp und zählen nur auf, was zu den Wagen ins Feld
        mitzunehmen ist.
        <Qt
          publication={PUBLICATIONS.TOMAN}
          href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:175a8bf2-68d6-4f59-b376-5f0d3fe627ee"
        />
      </p>
      <p>
        Die Wagenburg war jedoch nicht das einzige Thema. Aus den Beratungen der
        Reichstage gingen nach Toman während der Hussitenkriege drei allgemeine
        Kriegsordnungen für die geplanten Feldzüge nach Böhmen hervor. Sie
        behandeln die Vorbereitung des Feldzugs, die Zucht im Heer und die
        Verteilung der Geschütze. Die Vorschläge der Kurfürsten von 1426 sind
        nach ihm nur ein dürftiger Versuch, der Frankfurter Beschluss von 1427
        bildet bereits eine geschlossene Ordnung in 48 Artikeln, und die dritte
        Ordnung erließ der Nürnberger Reichstag 1431.
        <Qt
          publication={PUBLICATIONS.TOMAN}
          href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:8b817ac0-57b2-408e-83e4-6a2585b6ccc2"
        />
        <Qt
          publication={PUBLICATIONS.TOMAN}
          href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:b20c2763-1196-4237-b865-63d45ed3cb7c"
        />
      </p>
      <p>
        Maximilian von Wulf bemerkt, dass sich die Ordnungen der Jahre
        1428–1450, was die Wagenburg betrifft, auf die Ausrüstung der Wagen
        beschränken. Der Nürnberger Beschluss von 1428 enthält nach ihm
        überhaupt die frühesten Bestimmungen über die Streitwagen der
        Reichsaufgebote. Erst aus späterer Zeit sind ausführlichere Ordnungen
        erhalten, die auch Marsch und Lagerung der Wagenburg beschreiben.
        <Qt
          publication={PUBLICATIONS.WULF1889}
          href="https://www.digitale-sammlungen.de/de/view/bsb11551340?page=12"
        />{' '}
        Das lebendigste Bild einer marschierenden und lagernden Wagenburg geben
        nach Wulf die Ordnungen des Markgrafen Albrecht Achilles.
        <Qt
          publication={PUBLICATIONS.WULF1889}
          href="https://www.digitale-sammlungen.de/de/view/bsb11551340?page=13"
        />
      </p>
      <p>
        Als Quelle für das hussitische Kriegswesen betrachten beide Autoren die
        jüngeren Ordnungen mit Vorbehalt. Toman hält die Ordnungen aus der
        ersten Hälfte des Jahrhunderts für unmittelbare Quellen. Bei den
        jüngeren weist er darauf hin, dass sich in ihnen die Veränderungen des
        letzten Viertels des Jahrhunderts niederschlagen – die vervollkommnete
        Artillerie sowie schweizerische und niederländische Vorbilder beim
        Einsatz des Fußvolks. Dennoch findet er in ihnen viel Wertvolles, das
        auf alten Überlieferungen beruht, vor allem über das Manövrieren mit
        Wagen und über technische Hilfsmittel, von denen ältere Quellen
        schweigen.
        <Qt
          publication={PUBLICATIONS.TOMAN}
          href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:93623095-6ff0-44b0-b4cd-e22e76c52925"
        />{' '}
        Wulf geht noch weiter: Den jüngeren Ordnungen fehlt nach ihm jeder
        notwendige Zusammenhang mit dem hussitischen Vorbild. Sie können daher
        nicht als Beweis dienen, sondern nur zur Bestätigung und Erklärung der
        spärlichen unmittelbaren Nachrichten über das hussitische Kriegswesen.
        <Qt
          publication={PUBLICATIONS.WULF1889}
          href="https://www.digitale-sammlungen.de/de/view/bsb11551340?page=13"
        />
      </p>
      <p>&nbsp;</p>
    </Col>
  </Row>
)
