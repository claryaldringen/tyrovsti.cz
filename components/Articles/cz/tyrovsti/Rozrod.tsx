import { Col, Row } from 'reactstrap'
import React, { ReactNode } from 'react'
import Link from 'next/link'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
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
            { name: 'Jan na Skryjích', dates: '†1609' },
            { name: 'Kateřina' },
          ],
        },
        { name: 'Albrecht na Týřově', dates: '†1571' },
        { name: 'Jan na Broumech', dates: '†1574' },
        {
          name: 'Jiřík na Hřebečnících',
          dates: '†1583',
          children: [
            { name: 'Dorota' },
            {
              name: 'Jindřich Jakub',
              dates: '†1618',
              children: [
                {
                  name: 'Adam Jindřich',
                  dates: '†1652',
                  children: [
                    { name: 'Dorota' },
                    {
                      name: 'Vojtěch Ignác',
                      dates: '†1695',
                      children: [
                        { name: 'Jan Vilém' },
                        { name: 'Michal Antonín', dates: '†1705' },
                        { name: 'František Pavel' },
                      ],
                    },
                  ],
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

export const Rozrod = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="rozrod" />
        <h4>Rozrod Týřovských{draft && <DraftBadge />}</h4>
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
