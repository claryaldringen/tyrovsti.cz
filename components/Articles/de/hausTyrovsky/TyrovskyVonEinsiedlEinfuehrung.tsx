import React from 'react'
import { Col, Row } from 'reactstrap'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const TyrovskyVonEinsiedlEinfuehrung = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col md={6}>
        <h1>Týřovský von Einsiedl{draft && <DraftBadge />}</h1>
        <p>
          Ihren Familiennamen leiten sie von der Burg Týřov ab, die der
          Begründer der Familie, Jobst von Einsiedl, als Pfand von König Georg
          von Podiebrad erhielt.
        </p>
        <p>
          Ihr Ursprung wird auf die Stadt Mnichov im Bezirk Eger zurückgeführt,
          die auf Deutsch Einsiedl heißt.
        </p>
        <p>
          Der Begründer der Familie, Jobst von Einsiedl (ab dem Jahr 1460 Ritter
          von Týřov), war als deutscher Sekretär des Landesverwesers und
          späteren Königs Georg von Podiebrad in die höchste böhmische, ja sogar
          kaiserliche Politik eingebunden. Seine Nachkommen erlangten jedoch
          nicht denselben Ruhm und dieselbe Bedeutung und gehörten dem niederen
          Adel an der Grenze von Rakovník und Kralovice an. Das letzte Mitglied
          der Familie war Jan Michal, der das Amt eines Kreisrats und kurzzeitig
          auch eines Richters bekleidete, dann aber an Hypochondrie erkrankte,
          sodass seine Güter zunächst unter Vormundschaft gestellt und
          schließlich 1759 verkauft wurden. Wir wissen nicht einmal, wann er
          gestorben ist.
          <Qt publication={PUBLICATIONS.HALADA} note="Page 156" />
        </p>
        <p>
          Sie waren durch familiäre Bande mit den Krakovský von Kolovrat,
          Kokořovec von Kokořov, Malovec von Chýnov, Sporck sowie mit Klenovský
          von Janovice und anderen böhmischen Familien verbunden.
          <Qt publication={PUBLICATIONS.HALADA} note="Page 156" />
        </p>
      </Col>
      <ImageWithTitle
        md={6}
        width={1244}
        height={1600}
        src="erb.png"
        title="Wappen der Familie Týřovský"
      />
    </Row>
  </>
)
