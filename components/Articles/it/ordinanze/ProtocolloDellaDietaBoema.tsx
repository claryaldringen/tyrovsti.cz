import { Col, Row } from 'reactstrap'
import React from 'react'
import Image from 'next/image'

export const ProtocolloDellaDietaBoema = () => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="the-bohemian-diets-protocol-about-soldiers-contingents-in-regions"
        />
        <h4>
          Protocollo della Dieta boema sui contingenti di soldati nelle regioni
          del 14 marzo 1470
        </h4>
        <p>
          Sommario per le singole regioni nella tabella: Regione di Hradec
          Králové. Novecento fanti, cento cavalieri, tra i quali dodici
          lancieri, e cinquanta carri; e per ciascun carro vi saranno 18 fanti;
          di questi ve ne saranno 13 archibugieri/balestrieri, 4 fanti e un
          cocchiere. E tutti dovranno avere elmi, con proiettili e polvere da
          sparo, e un fascio di frecce, due correggiati, due zappe, due pale,
          due asce, una lancia con uncino e una catena sotto il carro. E così
          accadrà che vi saranno due cavalieri per ogni carro. E così si farà
          per tutte le regioni, oltre a quanto già stabilito e scritto; e i
          cocchieri saranno forniti secondo l&apos;usanza così come è scritto
          per la regione di Hradec.
        </p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <table>
          <thead>
            <tr>
              <th>regione</th>
              <th className="text-end">fanti</th>
              <th className="text-end">cavalieri</th>
              <th className="text-end">(lancieri)</th>
              <th className="text-end">carri</th>
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
          alt="Mappa delle regioni medievali della Boemia"
        />
      </Col>
    </Row>
  </>
)
