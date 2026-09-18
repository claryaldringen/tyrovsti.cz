import { Col, Row } from 'reactstrap'
import React, { ReactNode } from 'react'
import Link from 'next/link'
import styles from '../../cz/tyrovsti/Rozrod.module.scss'

interface Person {
  name: ReactNode
  dates?: string
  href?: string
  children?: Person[]
}

const tree: Person = {
  name: 'Jobst von Einsiedl',
  dates: 'um 1420 – 1474',
  href: '#jobst-of-einsiedl',
  children: [
    {
      name: 'Jindřich',
      dates: 'um 1466 – 1556',
      href: '#henry-of-einsiedl',
      children: [
        {
          name: 'Jošt auf Skryje',
          href: '#soehne-heinrichs',
          dates: '†1574',
          children: [
            {
              name: 'Jan auf Skryje und Chříč',
              dates: '†1609',
              href: '#johann-von-einsiedl',
            },
            {
              name: 'Kateřina',
              href: '#die-letzten-tyrovsky',
              dates: '⚭ Kryštof Jindřich Krakovský von Kolovrat',
            },
          ],
        },
        {
          name: 'Albrecht auf Týřov',
          dates: '†1571',
          href: '#soehne-heinrichs',
        },
        { name: 'Jan auf Broumy', dates: '†1574', href: '#soehne-heinrichs' },
        {
          name: 'Jiřík auf Hřebečníky',
          href: '#soehne-heinrichs',
          dates: '†1578–1583',
          children: [
            { name: 'Dorota', href: '#heinrich-jakob-von-einsiedl' },
            {
              name: 'Jindřich Jakub',
              dates: '†1618',
              href: '#heinrich-jakob-von-einsiedl',
              children: [
                {
                  name: 'Adam Jindřich',
                  dates: '†1652',
                  href: '#adam-heinrich-von-einsiedl',
                  children: [
                    {
                      name: 'Kateřina Dorota',
                      href: '#adam-heinrich-von-einsiedl',
                      dates: '⚭ Václav Mikuláš Broum von Miřetice',
                    },
                    {
                      name: 'Vojtěch Ignác',
                      dates: '†1695',
                      href: '#adalbert-ignaz-von-einsiedl',
                      children: [
                        {
                          name: 'Jan Vilém',
                          href: '#die-letzten-tyrovsky',
                          children: [
                            {
                              name: 'Josefa Anna',
                              href: '#die-letzten-tyrovsky',
                            },
                          ],
                        },
                        {
                          name: 'Michal Antonín',
                          dates: '1677 – 1705',
                          href: '#die-letzten-tyrovsky',
                          children: [
                            {
                              name: 'Marie Konstancie',
                              dates: '1701 – 1722',
                              href: '#die-letzten-tyrovsky',
                            },
                            {
                              name: 'Marie Anna',
                              dates: '*1704',
                              href: '#die-letzten-tyrovsky',
                            },
                            {
                              name: 'Jan Michal',
                              dates:
                                'der Letzte im Mannesstamm, *1705, lebte noch 1768',
                              href: '#die-letzten-tyrovsky',
                            },
                          ],
                        },
                        {
                          name: 'František Pavel',
                          dates: '†um 1717',
                          href: '#die-letzten-tyrovsky',
                        },
                        { name: 'Anna Barbora', href: '#die-letzten-tyrovsky' },
                        {
                          name: 'Polyxena Lidmila',
                          href: '#die-letzten-tyrovsky',
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'Dorota Polyxena',
                  href: '#heinrich-jakob-von-einsiedl',
                  dates: '⚭ Petr Jiří Kokořovec von Kokořov, †1640',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const Node = ({ person }: { person: Person }) => {
  const label = person.href ? (
    <Link href={`/tyrovsky-von-einsiedl${person.href}`}>{person.name}</Link>
  ) : (
    person.name
  )
  return (
    <span className={styles.node}>
      {label}
      {person.dates && <span className={styles.dates}>{person.dates}</span>}
    </span>
  )
}

const TreeNode = ({ person }: { person: Person }) => (
  <li>
    <Node person={person} />
    {person.children && person.children.length > 0 && (
      <ul>
        {person.children.map((child, i) => (
          <TreeNode key={i} person={child} />
        ))}
      </ul>
    )}
  </li>
)

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
        <div className={styles.tree}>
          <ul>
            <TreeNode person={tree} />
          </ul>
        </div>
      </Col>
    </Row>
  </>
)
