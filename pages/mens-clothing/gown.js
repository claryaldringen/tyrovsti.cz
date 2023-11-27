import { HeadExtended } from '../../components/HeadExtended'
import { LANG_EN } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Gown } from '../../components/Articles/en/Gown'
import { Sources } from '../../components/Quote/Sources'

const Page = () => (
  <>
    <HeadExtended lang={LANG_EN} title="Men's clothing - Gown" />
    <Container>
      <Row>
        <Col className="text">
          <Gown />
          <Sources lang={LANG_EN} />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
