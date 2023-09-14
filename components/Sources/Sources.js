import { Col, Row } from 'reactstrap'
import React from 'react'
import { LANG_CS } from '../../shared/constants'

export const Sources = ({ lang = LANG_CS, children }) => (
  <Row>
    <Col>
      <h4>{lang == LANG_CS ? 'Použitá literatura' : 'Sources'}:</h4>
      <ul>{children}</ul>
    </Col>
  </Row>
)
