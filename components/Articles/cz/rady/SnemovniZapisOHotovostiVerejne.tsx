import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle/ImageWithTitle'

export const SnemovniZapisOHotovostiVerejne = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="snemovni-zapis-o-hotovosti" />
        <h4>
          Sněmovní zápis o hotovosti veřejné v krajích ze dne 14. března 1470
        </h4>
        <p>
          Rozvrh na jednotlivé kraje u výtahu: Hradecko. Na Hradecký kraj jest
          položeno: devět set pěších, sto koní jízdných, a mezi těmi aby bylo
          dvanácte kopinnikův a padesáte vozûv; a k tomu každému vozu dostane se
          18 pěších; z těch aby bylo 13 střelcův, 4 pavézníci a k tomu vozataj.
          A ti všichni aby lebky měli, s kulkami a s prachem a kopu šípův, dvoje
          cepy, dvě motyce, dvě lopatě, dvě sekeře, jedno kopí s hákem a řetěz
          pod vozem. A tak se dostane také, že máta býti k každému vozu dva
          jízdná. A tak ze všech krajův aby též spůsobeno bylo, vedle položení
          již psaného; a vozové aby byli opatřeni obyčejem, jakož se o Hradeckém
          kraji vypisuje.
        </p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <table>
          <thead>
            <tr>
              <th>kraj</th>
              <th className="text-end">pěší</th>
              <th className="text-end">jízdní</th>
              <th className="text-end">(kopiníci)</th>
              <th className="text-end">vozy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hradecko</td>
              <td className="text-end">900</td>
              <td className="text-end">100</td>
              <td className="text-end">(12)</td>
              <td className="text-end">50</td>
            </tr>
            <tr>
              <td>Kouřimsko</td>
              <td className="text-end">630</td>
              <td className="text-end">70</td>
              <td className="text-end">(8)</td>
              <td className="text-end">35</td>
            </tr>
            <tr>
              <td>Chrudimsko</td>
              <td className="text-end">450</td>
              <td className="text-end">50</td>
              <td className="text-end">(6)</td>
              <td className="text-end">25</td>
            </tr>
            <tr>
              <td>Čáslavsko</td>
              <td className="text-end">300</td>
              <td className="text-end">40</td>
              <td className="text-end">(5)</td>
              <td className="text-end">17</td>
            </tr>
            <tr>
              <td>Slánsko</td>
              <td className="text-end">500</td>
              <td className="text-end">50</td>
              <td className="text-end">(6)</td>
              <td className="text-end">28</td>
            </tr>
            <tr>
              <td>Žatecko a Rakovnicko</td>
              <td className="text-end">900</td>
              <td className="text-end">100</td>
              <td className="text-end">(12)</td>
              <td className="text-end">50</td>
            </tr>
            <tr>
              <td>Litoměřicko</td>
              <td className="text-end">500</td>
              <td className="text-end">50</td>
              <td className="text-end">(6)</td>
              <td className="text-end">27</td>
            </tr>
            <tr>
              <td>Boleslavsko</td>
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
        Poznámky:
        <ol>
          <li>
            I když lebka je v dnešní terminologii specifický typ přilby, zde je
            tím míněna jakákoli přilba. Vzhledem k době zápisu přichází v úvahu
            nejčasteji klobouk nebo šalíř.
          </li>
          <li>
            Šípy jsou v moderní terminologii míněny šipky - střely do kuše.
          </li>
        </ol>
      </Col>
      <ImageWithTitle src="mapa.jpg" width={1920} height={1327} />
    </Row>
  </>
)
