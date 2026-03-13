import { Col, Row } from 'reactstrap'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const RisoluzioneNorimberga = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="risoluzione-di-norimberga" />
        <h4>
          Risoluzione di Norimberga del 23 aprile 1428{draft && <DraftBadge />}
        </h4>
        <p>Traduzione di PhDr. Zdeňka Kopková.</p>
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
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <ol>
          <li>Equipaggiare un carro da guerra.</li>
          <li>Nelle città, 10 uomini per ciascun carro.</li>
          <li>Nei villaggi, 20 uomini per ciascun carro.</li>
          <li>
            Per ciascun carro, due archibugieri con una quantità sufficiente di
            polvere e piombo.
          </li>
          <li>Due balestrieri, ciascuno con 2 sessantine di dardi.</li>
          <li>Due uomini con correggiati.</li>
          <li>
            Due uomini con lance dotate di un gancio tagliente in ferro nella
            parte posteriore della gorbia.
          </li>
          <li>Due uomini con fionde a bastone.</li>
          <li>Quattro cavalli robusti per ciascun carro.</li>
          <li>Due conducenti robusti dotati delle proprie armi.</li>
          <li>Un cesto sul carro per caricarvi pietre.</li>
          <li>Una pala di ferro, 1 zappa, 1 truogolo, 1 ascia, 1 piccone.</li>
          <li>
            Una catena per carro, la quale dovrà essere lunga quanto tre altre
            messe insieme.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
