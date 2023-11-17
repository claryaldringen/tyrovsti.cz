import React, { useContext } from 'react'
import { QuoteContext } from './QuoteProvider'
import { Col, Row } from 'reactstrap'
import { LANG_CS } from '../../shared/constants'
import Link from 'next/link'

export const Sources = ({ lang = LANG_CS }) => {
  const { usedPublications } = useContext(QuoteContext)

  return (
    <Row>
      <Col>
        <h4>{lang == LANG_CS ? 'Použitá literatura' : 'Sources'}:</h4>
        <ol>
          {usedPublications.map(({ author, name, city, year, href }) => (
            <li key={`${author}: ${name}`}>
              {href ? (
                <Link href={href} target="_blank">
                  {author}: <i>{name}</i>, {city} {year}
                </Link>
              ) : (
                <span>
                  {author}: <i>{name}</i>, {city} {year}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Col>
    </Row>
  )
}
