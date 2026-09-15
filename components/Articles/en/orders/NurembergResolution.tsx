import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const NurembergResolution = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="nuremberg-resolution" />
        <h4>Nuremberg Resolution of 23 April 1428</h4>
        <p>Translated by PhDr. Zdeňka Kopková.</p>
        <p>
          The text is the last, seventh article of the resolutions of the
          assembly in Nuremberg. The preceding articles concern the convening of
          a further assembly and the share of the common people to be called up:
          a quarter, or half in an emergency. The document itself is undated.
          The date of around 23 April 1428 was only assigned to it by the editor
          of the <i>Deutsche Reichstagsakten</i>; earlier editors placed it in
          1422 without any basis.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=180"
          />{' '}
          The campaign never took place, so according to Toman the resolution
          remained only on paper.
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
          <li>To equip a war wagon.</li>
          <li>In the towns, 10 men to one wagon.</li>
          <li>In the villages, 20 men to one wagon.</li>
          <li>
            To each wagon, two handgunners with a sufficient amount of powder
            and lead.
          </li>
          <li>Two crossbowmen, each with 2 threescore bolts.</li>
          <li>Two men with flails.</li>
          <li>
            Two men with spears that have an iron cutting hook at the back of
            the socket.
          </li>
          <li>Two men with staff slings.</li>
          <li>Four strong horses to each wagon.</li>
          <li>Two strong drivers who have their own weapons.</li>
          <li>One basket on the wagon to load stones into.</li>
          <li>One iron shovel, 1 mattock, 1 trough, 1 axe, 1 stone pick.</li>
          <li>
            One wagon chain, which shall be as long as three others combined.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
