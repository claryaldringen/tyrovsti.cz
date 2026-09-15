import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const NuernbergerBeschluss = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="nuremberg-resolution" />
        <h4>Nürnberger Beschluss vom 23. April 1428</h4>
        <p>Übersetzt von PhDr. Zdeňka Kopková.</p>
        <p>
          Der Text ist der letzte, siebte Artikel der Beschlüsse des Nürnberger
          Tages. Die vorangehenden Artikel betreffen die Einberufung einer
          weiteren Zusammenkunft und den Anteil des gemeinen Volkes, der
          ausziehen soll: ein Viertel, im Notfall die Hälfte. Das Schriftstück
          selbst ist undatiert. Das Datum um den 23. April 1428 hat ihm erst der
          Herausgeber der <i>Deutschen Reichstagsakten</i> zugewiesen; ältere
          Herausgeber setzten es ohne Begründung in das Jahr 1422.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=180"
          />{' '}
          Zu dem Feldzug kam es schließlich nicht, sodass der Beschluss nach
          Toman nur auf dem Papier blieb.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:e4297c33-ec66-4340-8470-3edba8f333cb"
          />
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <ol>
          <li>Item einen streitwagen zu bestellen.</li>
          <li>Item in den städten 10 mann zu einem wagen.</li>
          <li>Item auf den dörfern 20 mann zu einem wagen.</li>
          <li>
            Item zu iglichem wagen zween büchsenschützen mit pulver und bleis
            genug.
          </li>
          <li>
            Item zween schützen mit armbrust, iglicher schütz 2 schock pfeil.
          </li>
          <li>Item 2 mann mit drischeln.</li>
          <li>
            Item 2 mann mit spiessen, die hinden an der tülle ein eisen
            schneidende haken haben.
          </li>
          <li>Item 2 mann mit stabschleudern.</li>
          <li>Item vier starker pferde zu einem wagen.</li>
          <li>Item 2 stark fuhrmann, die ihre wehre haben.</li>
          <li>Item ein kurb uf den wagen, da man stein einlist.</li>
          <li>
            Item 1 eisene schaufeln, 1 hauen, 1 mulden, 1 axt, 1 stein- pickel.
          </li>
          <li>
            Item ein wagenketten, die als lang sei, als sunst ander drei sind.
            <Qt
              publication={PUBLICATIONS.TOMAN}
              href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:fdfeb0c4-7c80-460c-b70e-77199df5b2bd"
            />
            <Qt
              publication={PUBLICATIONS.DRA9}
              href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=181"
            />
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <ol>
          <li>Einen Streitwagen auszurüsten.</li>
          <li>In den Städten 10 Mann zu einem Wagen.</li>
          <li>In den Dörfern 20 Mann zu einem Wagen.</li>
          <li>
            Zu jedem Wagen zwei Büchsenschützen mit ausreichend Pulver und Blei.
          </li>
          <li>Zwei Armbrustschützen, jeder mit 2 Schock Bolzen.</li>
          <li>Zwei Mann mit Dreschflegeln.</li>
          <li>
            Zwei Mann mit Spießen, die hinten an der Tülle einen eisernen
            Schneidhaken haben.
          </li>
          <li>Zwei Mann mit Stabschleudern.</li>
          <li>Vier starke Pferde zu jedem Wagen.</li>
          <li>Zwei starke Fuhrleute, die ihre eigenen Waffen haben.</li>
          <li>Einen Korb auf dem Wagen, in den man Steine laden kann.</li>
          <li>Eine eiserne Schaufel, 1 Haue, 1 Mulde, 1 Axt, 1 Steinpickel.</li>
          <li>
            Eine Wagenkette, die so lang sein soll wie drei andere
            zusammengenommen.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
