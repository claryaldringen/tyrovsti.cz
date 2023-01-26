import { Col, Row } from 'reactstrap'
import React from 'react'

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
        <p>
          <table>
            <thead>
              <tr>
                <th>kraj</th>
                <th className="text-right">pěší</th>
                <th className="text-right">jízdní</th>
                <th className="text-right">(kopiníci)</th>
                <th className="text-right">vozy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hradecko</td>
                <td className="text-right">900</td>
                <td className="text-right">100</td>
                <td className="text-right">(12)</td>
                <td className="text-right">50</td>
              </tr>
              <tr>
                <td>Kouřimsko</td>
                <td className="text-right">630</td>
                <td className="text-right">70</td>
                <td className="text-right">(8)</td>
                <td className="text-right">35</td>
              </tr>
              <tr>
                <td>Chrudimsko</td>
                <td className="text-right">450</td>
                <td className="text-right">50</td>
                <td className="text-right">(6)</td>
                <td className="text-right">25</td>
              </tr>
              <tr>
                <td>Čáslavsko</td>
                <td className="text-right">300</td>
                <td className="text-right">40</td>
                <td className="text-right">(5)</td>
                <td className="text-right">17</td>
              </tr>
              <tr>
                <td>Slánsko</td>
                <td className="text-right">500</td>
                <td className="text-right">50</td>
                <td className="text-right">(6)</td>
                <td className="text-right">28</td>
              </tr>
              <tr>
                <td>Žatecko a Rakovnicko</td>
                <td className="text-right">900</td>
                <td className="text-right">100</td>
                <td className="text-right">(12)</td>
                <td className="text-right">50</td>
              </tr>
              <tr>
                <td>Litoměřicko</td>
                <td className="text-right">500</td>
                <td className="text-right">50</td>
                <td className="text-right">(6)</td>
                <td className="text-right">27</td>
              </tr>
              <tr>
                <td>Boleslavsko</td>
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
        </p>
        <p>
          Poznámky:
          <ol>
            <li>
              I když lebka je v dnešní terminologii specifický typ přilby, zde
              je tím míněna jakákoli přilba. Vzhledem k době zápisu přichází v
              úvahu nejčasteji klobouk nebo šalíř.
            </li>
            <li>
              Šípy jsou v moderní terminologii míněny šipky - střely do kuše.
            </li>
          </ol>
        </p>
      </Col>
    </Row>
  </>
)
