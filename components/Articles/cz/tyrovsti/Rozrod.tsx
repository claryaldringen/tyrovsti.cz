import { Col, Row } from 'reactstrap'
import React, { ReactNode } from 'react'
import Link from 'next/link'
import styles from './Rozrod.module.scss'

interface Person {
  name: ReactNode
  dates?: string
  href?: string
  children?: Person[]
}

const tree: Person = {
  name: 'Jošt z Einsidlu',
  dates: 'asi 1420 – 1474',
  href: '#jost-z-einsiedlu',
  children: [
    {
      name: 'Jindřich',
      dates: 'asi 1466 – 1556',
      href: '#jindrich-tyrovsky-z-einsiedlu',
      children: [
        {
          name: 'Jošt na Skryjích',
          dates: '†1574',
          children: [
            {
              name: 'Jan na Skryjích a Chříči',
              dates: '†1609',
              href: '#jan-tyrovsky-z-einsiedlu',
            },
            { name: 'Kateřina, manžel Kryštof Jindřich Krakovský z Kolovrat' },
          ],
        },
        { name: 'Albrecht na Týřově', dates: '†1571' },
        { name: 'Jan na Broumech', dates: '†1574' },
        {
          name: 'Jiřík na Hřebečnících',
          dates: '†1578–1583',
          children: [
            { name: 'Dorota' },
            {
              name: 'Jindřich Jakub',
              dates: '†1618',
              href: '#jindrich-jakub-tyrovsky-z-einsiedlu',
              children: [
                {
                  name: 'Adam Jindřich',
                  dates: '†1652',
                  href: '#adam-jindrich-tyrovsky-z-einsiedlu',
                  children: [
                    {
                      name: 'Kateřina Dorota, manžel Václav Mikuláš Broum z Miřetic',
                    },
                    {
                      name: 'Vojtěch Ignác',
                      dates: '†1695',
                      href: '#vojtech-ignac-tyrovsky-z-einsiedlu',
                      children: [
                        {
                          name: 'Jan Vilém',
                          children: [{ name: 'Josefa Anna' }],
                        },
                        {
                          name: 'Michal Antonín',
                          dates: '1677 – 1705',
                          href: '#konec-rodu',
                          children: [
                            { name: 'Marie Konstancie', dates: '1701 – 1722' },
                            { name: 'Marie Anna', dates: '*1704' },
                            {
                              name: 'Jan Michal, poslední po meči',
                              dates: '*1705, žil ještě 1768',
                              href: '#konec-rodu',
                            },
                          ],
                        },
                        { name: 'František Pavel', dates: '†asi 1717' },
                        { name: 'Anna Barbora' },
                        { name: 'Polyxena Lidmila' },
                      ],
                    },
                  ],
                },
                {
                  name: 'Dorota Polyxena, manžel Petr Jiří Kokořovec z Kokořova',
                  dates: '†1640',
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

export const Rozrod = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="rozrod" />
        <h4>Rozrod Týřovských</h4>
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
