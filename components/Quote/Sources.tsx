import React, { useContext } from 'react'
import { QuoteContext } from './QuoteProvider'
import { Col, Row } from 'reactstrap'
import { LANG_CS } from '../../shared/constants'
import Link from 'next/link'
import { useLanguage } from '../Language'
import { getCity } from './utils'

export const Sources = () => {
  const { usedPublications } = useContext(QuoteContext)
  const { lang } = useLanguage()

  return (
    <Row>
      <Col>
        <h4>{lang === LANG_CS ? 'Použitá literatura' : 'Sources'}:</h4>
        <ol>
          {usedPublications.map(({ author, name, city, year, href }) => (
            <li key={`${author}: ${name}`}>
              <span>
                {author ? `${author}: ` : null}
                <i>
                  {href ? (
                    <Link href={href} target="_blank">
                      {name}
                    </Link>
                  ) : (
                    name
                  )}
                </i>
                {(getCity(city, lang) || year) && ', '}
                {getCity(city, lang)} {year}
              </span>
            </li>
          ))}
        </ol>
      </Col>
    </Row>
  )
}
