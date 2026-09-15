import { Col, Row } from 'reactstrap'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const UsneseniNorimberske = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="usneseni-norimberske" />
        <h4>
          Usnesení norimberské ze dne 23. dubna 1428{draft && <DraftBadge />}
        </h4>
        <p>Přeložila PhDr. Zdeňka Kopková.</p>
        <p>
          Text je posledním, sedmým článkem usnesení sjezdu v Norimberku.
          Předchozí články se týkají svolání dalšího sjezdu a toho, jaký podíl
          obecného lidu má vytáhnout do pole: čtvrtina, v nouzi polovina.
          Listina sama datována není. Datum kolem 23.&nbsp;dubna 1428 jí
          přiřadil až editor <i>Deutsche Reichstagsakten</i>, starší vydavatelé
          ji bez opory kladli do roku 1422.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=180"
          />{' '}
          K výpravě nakonec nedošlo, takže usnesení podle Tomana zůstalo jen na
          papíře.
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
          <li>Vybavit válečný vůz.</li>
          <li>Ve městech 10 mužů k jednomu vozu.</li>
          <li>Na vesnicích 20 mužů k jednomu vozu.</li>
          <li>
            Ke každému vozu dva střelce z ručnic s dostatečným množstvím prachu
            a olova.
          </li>
          <li>Dva střelce z kuší, každý střelec 2 kopy šipek.</li>
          <li>Dva muži s cepy.</li>
          <li>
            Dva muži s kopími, která mají vzadu na tuleji železný řezný hák.
          </li>
          <li>Dva muži s praky na dřevěné násadě.</li>
          <li>Čtyři silné koně ke každému vozu.</li>
          <li>Dva silné vozataje, kteří mají své zbraně.</li>
          <li>Jeden koš na jeden vůz, aby se naložil kámen.</li>
          <li>
            Jedna železná lopata, 1 motyka, 1 díže, 1 sekyra, 1 krumpáč na
            kamení.
          </li>
          <li>
            Jeden vozový řetěz, který ať je tak dlouhý, jako jinak tři ostatní.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
