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
  dates: 'c. 1420 – 1474',
  href: '#jobst-of-einsiedl',
  children: [
    {
      name: 'Jindřich',
      dates: 'c. 1466 – 1556',
      href: '#henry-of-einsiedl',
      children: [
        {
          name: 'Jošt of Skryje',
          dates: '†1574',
          children: [
            {
              name: 'Jan of Skryje and Chříč',
              dates: '†1609',
              href: '#john-of-einsiedl',
            },
            {
              name: 'Kateřina, husband Kryštof Jindřich Krakovský of Kolovrat',
            },
          ],
        },
        { name: 'Albrecht of Týřov', dates: '†1571' },
        { name: 'Jan of Broumy', dates: '†1574' },
        {
          name: 'Jiřík of Hřebečníky',
          dates: '†1578–1583',
          children: [
            { name: 'Dorota' },
            {
              name: 'Jindřich Jakub',
              dates: '†1618',
              href: '#henry-jacob-of-einsiedl',
              children: [
                {
                  name: 'Adam Jindřich',
                  dates: '†1652',
                  href: '#adam-henry-of-einsiedl',
                  children: [
                    {
                      name: 'Kateřina Dorota, husband Václav Mikuláš Broum of Miřetice',
                    },
                    {
                      name: 'Vojtěch Ignác',
                      dates: '†1695',
                      href: '#adalbert-ignatius-of-einsiedl',
                      children: [
                        {
                          name: 'Jan Vilém',
                          children: [{ name: 'Josefa Anna' }],
                        },
                        {
                          name: 'Michal Antonín',
                          dates: '1677 – 1705',
                          href: '#the-last-tyrovsky',
                          children: [
                            { name: 'Marie Konstancie', dates: '1701 – 1722' },
                            { name: 'Marie Anna', dates: '*1704' },
                            {
                              name: 'Jan Michal, the last of the male line',
                              dates: '*1705, still alive in 1768',
                              href: '#the-last-tyrovsky',
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
                  name: 'Dorota Polyxena, husband Petr Jiří Kokořovec of Kokořov',
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

export const FamilyTree = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="family-tree" />
        <h4>Family Tree of the Týřovský Family</h4>
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
