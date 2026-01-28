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
          and fifty wagoins; and to each wagon there shall be 18 footmen; of
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
              <th className="text-right">footmen</th>
              <th className="text-right">riders</th>
              <th className="text-right">(lancers)</th>
              <th className="text-right">wagons</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hradecký kraj</td>
              <td className="text-right">900</td>
              <td className="text-right">100</td>
              <td className="text-right">(12)</td>
              <td className="text-right">50</td>
            </tr>
            <tr>
              <td>Kouřimský kraj</td>
              <td className="text-right">630</td>
              <td className="text-right">70</td>
              <td className="text-right">(8)</td>
              <td className="text-right">35</td>
            </tr>
            <tr>
              <td>Chrudimský kraj</td>
              <td className="text-right">450</td>
              <td className="text-right">50</td>
              <td className="text-right">(6)</td>
              <td className="text-right">25</td>
            </tr>
            <tr>
              <td>Čáslavský kraj</td>
              <td className="text-right">300</td>
              <td className="text-right">40</td>
              <td className="text-right">(5)</td>
              <td className="text-right">17</td>
            </tr>
            <tr>
              <td>Slánský kraj</td>
              <td className="text-right">500</td>
              <td className="text-right">50</td>
              <td className="text-right">(6)</td>
              <td className="text-right">28</td>
            </tr>
            <tr>
              <td>Žatecký kraj and Rakovnický kraj</td>
              <td className="text-right">900</td>
              <td className="text-right">100</td>
              <td className="text-right">(12)</td>
              <td className="text-right">50</td>
            </tr>
            <tr>
              <td>Litoměřický kraj</td>
              <td className="text-right">500</td>
              <td className="text-right">50</td>
              <td className="text-right">(6)</td>
              <td className="text-right">27</td>
            </tr>
            <tr>
              <td>Boleslavský kraj</td>
              <td className="text-right">270</td>
              <td className="text-right">30</td>
              <td className="text-right">(4)</td>
              <td className="text-right">15</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td className="text-right">4450</td>
              <td className="text-right">490</td>
              <td className="text-right">(49)</td>
              <td className="text-right">247</td>
            </tr>
          </tbody>
        </table>
      </Col>
      <Col md={6}>
        <Image
          src="/images/mapa.jpg"
          width={2662}
          height={1838}
          className="fit"
          alt="Map of the medieval Bohemian regions"
        />
      </Col>
    </Row>
  </>
)
