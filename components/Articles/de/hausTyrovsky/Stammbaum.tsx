import { Col, Row } from 'reactstrap'
import React from 'react'
import Link from 'next/link'

export const Stammbaum = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="family-tree" />
        <h4>Stammbaum der Familie Týřovský</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <table
          border={1}
          style={{
            borderCollapse: 'collapse',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <tbody>
            <tr>
              <td colSpan={18}>
                <Link href="#jobst-of-einsiedl">Jobst von Einsiedl</Link> (um
                1420–1474)
              </td>
            </tr>
            <tr>
              <td colSpan={18}>
                <Link href="#henry-of-einsiedl">Jindřich (Heinrich)</Link> (um
                1466–1556)
              </td>
            </tr>
            <tr>
              <td colSpan={4}>Jobst von Skryje (&dagger;1574)</td>
              <td colSpan={4}>Albrecht von Týřov (&dagger;1571)</td>
              <td colSpan={4}>Jan von Broumy (&dagger;1574)</td>
              <td colSpan={6}>Jiřík von Hřebečníky (&dagger;1583)</td>
            </tr>
            <tr>
              <td colSpan={2}>Jan von Skryje (&dagger;1609)</td>
              <td colSpan={2}>Kateřina</td>
              <td colSpan={8}></td>
              <td colSpan={2}>Dorota</td>
              <td colSpan={4}>Jindřich Jakub (&dagger;1618)</td>
            </tr>
            <tr>
              <td colSpan={14}></td>
              <td colSpan={4}>Adam Jindřich (&dagger;1652)</td>
            </tr>
            <tr>
              <td colSpan={14}></td>
              <td>Dorota</td>
              <td colSpan={3}>Vojtěch Ignác (&dagger;1695)</td>
            </tr>
            <tr>
              <td colSpan={15}></td>
              <td>Jan Vilém</td>
              <td>Michal Antonín (&dagger;1705)</td>
              <td>František Pavel</td>
            </tr>
          </tbody>
        </table>
        <br />
      </Col>
    </Row>
  </>
)
