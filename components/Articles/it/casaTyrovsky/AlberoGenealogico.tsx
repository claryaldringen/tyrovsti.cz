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
  name: 'Jobst di Einsiedl',
  dates: 'c. 1420 – 1474',
  href: '#jobst-di-einsiedl',
  children: [
    {
      name: 'Jindřich (Enrico)',
      dates: 'c. 1466 – 1556',
      href: '#enrico-di-einsiedl',
      children: [
        {
          name: 'Jobst di Skryje',
          dates: '†1574',
          children: [
            {
              name: 'Jan di Skryje e Chříč',
              dates: '†1609',
              href: '#giovanni-di-einsiedl',
            },
            {
              name: 'Kateřina',
              dates: '⚭ Kryštof Jindřich Krakovský di Kolovrat',
            },
          ],
        },
        { name: 'Albrecht di Týřov', dates: '†1571' },
        { name: 'Jan di Broumy', dates: '†1574' },
        {
          name: 'Jiřík di Hřebečníky',
          dates: '†1578–1583',
          children: [
            { name: 'Dorota' },
            {
              name: 'Jindřich Jakub',
              dates: '†1618',
              href: '#enrico-giacomo-di-einsiedl',
              children: [
                {
                  name: 'Adam Jindřich',
                  dates: '†1652',
                  href: '#adamo-enrico-di-einsiedl',
                  children: [
                    {
                      name: 'Kateřina Dorota',
                      dates: '⚭ Václav Mikuláš Broum di Miřetice',
                    },
                    {
                      name: 'Vojtěch Ignác',
                      dates: '†1695',
                      href: '#adalberto-ignazio-di-einsiedl',
                      children: [
                        {
                          name: 'Jan Vilém',
                          children: [{ name: 'Josefa Anna' }],
                        },
                        {
                          name: 'Michal Antonín',
                          dates: '1677 – 1705',
                          href: '#gli-ultimi-tyrovsky',
                          children: [
                            { name: 'Marie Konstancie', dates: '1701 – 1722' },
                            { name: 'Marie Anna', dates: '*1704' },
                            {
                              name: 'Jan Michal',
                              dates:
                                "l'ultimo della linea maschile, *1705, ancora in vita nel 1768",
                              href: '#gli-ultimi-tyrovsky',
                            },
                          ],
                        },
                        { name: 'František Pavel', dates: '†c. 1717' },
                        { name: 'Anna Barbora' },
                        { name: 'Polyxena Lidmila' },
                      ],
                    },
                  ],
                },
                {
                  name: 'Dorota Polyxena',
                  dates: '⚭ Petr Jiří Kokořovec di Kokořov, †1640',
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
    <Link href={person.href}>{person.name}</Link>
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

export const AlberoGenealogico = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="albero-genealogico" />
        <h4>Albero genealogico della famiglia Týřovský</h4>
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
