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
          href: '#sons-of-henry',
          dates: '†1574',
          children: [
            {
              name: 'Jan of Skryje and Chříč',
              dates: '†1609',
              href: '#john-of-einsiedl',
            },
            {
              name: 'Kateřina',
              dates: '⚭ Kryštof Jindřich Krakovský of Kolovrat',
              href: '#the-last-tyrovsky',
            },
          ],
        },
        { name: 'Albrecht of Týřov', dates: '†1571', href: '#sons-of-henry' },
        { name: 'Jan of Broumy', dates: '†1574', href: '#sons-of-henry' },
        {
          name: 'Jiřík of Hřebečníky',
          href: '#sons-of-henry',
          dates: '†1578–1583',
          children: [
            { name: 'Dorota', href: '#henry-jacob-of-einsiedl' },
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
                      name: 'Kateřina Dorota',
                      dates: '⚭ Václav Mikuláš Broum of Miřetice',
                      href: '#adam-henry-of-einsiedl',
                    },
                    {
                      name: 'Vojtěch Ignác',
                      dates: '†1695',
                      href: '#adalbert-ignatius-of-einsiedl',
                      children: [
                        {
                          name: 'Jan Vilém',
                          href: '#the-last-tyrovsky',
                          children: [
                            { name: 'Josefa Anna', href: '#the-last-tyrovsky' },
                          ],
                        },
                        {
                          name: 'Michal Antonín',
                          dates: '1677 – 1705',
                          href: '#the-last-tyrovsky',
                          children: [
                            {
                              name: 'Marie Konstancie',
                              dates: '1701 – 1722',
                              href: '#the-last-tyrovsky',
                            },
                            {
                              name: 'Marie Anna',
                              dates: '*1704',
                              href: '#the-last-tyrovsky',
                            },
                            {
                              name: 'Jan Michal',
                              dates:
                                'the last of the male line, *1705, still alive in 1768',
                              href: '#the-last-tyrovsky',
                            },
                          ],
                        },
                        {
                          name: 'František Pavel',
                          dates: '†c. 1717',
                          href: '#the-last-tyrovsky',
                        },
                        { name: 'Anna Barbora', href: '#the-last-tyrovsky' },
                        {
                          name: 'Polyxena Lidmila',
                          href: '#the-last-tyrovsky',
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'Dorota Polyxena',
                  dates: '⚭ Petr Jiří Kokořovec of Kokořov, †1640',
                  href: '#henry-jacob-of-einsiedl',
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
    <Link href={`/tyrovsky-of-einsiedl${person.href}`}>{person.name}</Link>
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

const hasChildren = (person: Person) =>
  !!person.children && person.children.length > 0

/* Children without descendants are stacked vertically under their parent
   so that the tree grows in width only along the lines that continue. */
const TreeNode = ({ person }: { person: Person }) => {
  if (!hasChildren(person)) {
    return (
      <li>
        <Node person={person} />
      </li>
    )
  }
  const branches = person.children!.filter(hasChildren)
  const leaves = person.children!.filter((child) => !hasChildren(child))
  return (
    <li>
      <Node person={person} />
      <ul>
        {leaves.length > 0 && (
          <li className={styles.leaves}>
            {leaves.map((leaf, i) => (
              <Node key={i} person={leaf} />
            ))}
          </li>
        )}
        {branches.map((child, i) => (
          <TreeNode key={i} person={child} />
        ))}
      </ul>
    </li>
  )
}

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
