import React from 'react'

export const Source = ({ name, author, city, year }) => (
  <li>
    {author}: <i>{name}</i>, {city} {year}
  </li>
)
