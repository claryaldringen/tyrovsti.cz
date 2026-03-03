import { Col, Row } from 'reactstrap'
import React from 'react'
import Image from 'next/image'

export const TheBohemianDietsProtocol = () => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="the-bohemian-diets-protocol-about-soldiers-contingents-in-regions"
        />
        <h4>
          The Bohemian Diet’s protocol about soldier’s contingents in regions
          from 14th of March 1470
        </h4>
        <p>
          Overview for individual regions at the table: Hradec Králové Region.
          Nine hundred footmen, a hundred riders, and among them twelve lancers
          and fifty wagons; and to each wagon there shall be 18 footmen; of
          these there shall be 13 gunners/crossbowmen, 4 footmen, and a
          coachman. And they shall all have helmets, with bullets and powder,
          and a sheaf of arrows, two flails, two hoes, two shovels, two axes,
          one spear with a hook, and a chain under the wagon. And so it shall
          come to pass that there shall be two riders to every wagon. And so of
          all the regions shall be done, besides the laying down already
          written; and the coachmen shall be provided by the custom as it is
          written of the region of Hradec.
        </p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <table>
          <thead>
            <tr>
              <th>region</th>
              <th className="text-end">footmen</th>
              <th className="text-end">riders</th>
              <th className="text-end">(lancers)</th>
              <th className="text-end">wagons</th>
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
