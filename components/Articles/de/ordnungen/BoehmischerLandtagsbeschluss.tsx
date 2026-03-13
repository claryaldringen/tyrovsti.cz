import { Col, Row } from 'reactstrap'
import React from 'react'
import Image from 'next/image'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BoehmischerLandtagsbeschluss = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="the-bohemian-diets-protocol-about-soldiers-contingents-in-regions"
        />
        <h4>
          Landtagsbeschluss über die Truppenkontingente in den Regionen vom 14.
          März 1470
          {draft && <DraftBadge />}
        </h4>
        <p>
          Übersicht für die einzelnen Regionen in der Tabelle: Region Hradec
          Králové. Neunhundert Fußsoldaten, hundert Reiter, darunter zwölf
          Lanzenreiter, und fünfzig Wagen; und zu jedem Wagen sollen 18
          Fußsoldaten gehören; davon sollen 13 Schützen/Armbrustschützen, 4
          Fußsoldaten und ein Kutscher sein. Und sie sollen alle Helme haben,
          mit Kugeln und Pulver, und ein Bündel Pfeile, zwei Dreschflegel, zwei
          Hacken, zwei Schaufeln, zwei Äxte, einen Spieß mit Haken und eine
          Kette unter dem Wagen. Und so soll es geschehen, dass auf jeden Wagen
          zwei Reiter kommen. Und so soll es für alle Regionen gelten, neben den
          bereits schriftlich festgelegten Bestimmungen; und die Kutscher sollen
          nach dem Brauch gestellt werden, wie es für die Region Hradec
          geschrieben steht.
        </p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <table>
          <thead>
            <tr>
              <th>Region</th>
              <th className="text-end">Fußvolk</th>
              <th className="text-end">Reiter</th>
              <th className="text-end">(Lanzen)</th>
              <th className="text-end">Wagen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hradecký kraj</td>
              <td className="text-end">900</td>
              <td className="text-end">100</td>
              <td className="text-end">(12)</td>
              <td className="text-end">50</td>
            </tr>
            <tr>
              <td>Kouřimský kraj</td>
              <td className="text-end">630</td>
              <td className="text-end">70</td>
              <td className="text-end">(8)</td>
              <td className="text-end">35</td>
            </tr>
            <tr>
              <td>Chrudimský kraj</td>
              <td className="text-end">450</td>
              <td className="text-end">50</td>
              <td className="text-end">(6)</td>
              <td className="text-end">25</td>
            </tr>
            <tr>
              <td>Čáslavský kraj</td>
              <td className="text-end">300</td>
              <td className="text-end">40</td>
              <td className="text-end">(5)</td>
              <td className="text-end">17</td>
            </tr>
            <tr>
              <td>Slánský kraj</td>
              <td className="text-end">500</td>
              <td className="text-end">50</td>
              <td className="text-end">(6)</td>
              <td className="text-end">28</td>
            </tr>
            <tr>
              <td>Žatecký kraj and Rakovnický kraj</td>
              <td className="text-end">900</td>
              <td className="text-end">100</td>
              <td className="text-end">(12)</td>
              <td className="text-end">50</td>
            </tr>
            <tr>
              <td>Litoměřický kraj</td>
              <td className="text-end">500</td>
              <td className="text-end">50</td>
              <td className="text-end">(6)</td>
              <td className="text-end">27</td>
            </tr>
            <tr>
              <td>Boleslavský kraj</td>
              <td className="text-end">270</td>
              <td className="text-end">30</td>
              <td className="text-end">(4)</td>
              <td className="text-end">15</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td className="text-end">4450</td>
              <td className="text-end">490</td>
              <td className="text-end">(49)</td>
              <td className="text-end">247</td>
            </tr>
          </tbody>
        </table>
      </Col>
      <Col md={6}>
        <Image
          src="/images/mapa.jpg"
          width={1920}
          height={1327}
          className="fit"
          alt="Map of the medieval Bohemian regions"
        />
      </Col>
    </Row>
  </>
)
