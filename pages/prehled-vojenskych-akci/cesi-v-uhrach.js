import { HeadExtended } from '../../components/HeadExtended'
import { LANG_CS } from '../../shared/constants'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'

import { Payment } from '../../components/Payment'

import { CernaArmada } from '../../components/Articles/cz/akce/CernaArmada'

const Page = () => (
  <>
    <HeadExtended lang={LANG_CS} title="Bavorská válka" image="LudvikIX.jpg" />
    <Container>
      <Row>
        <Col className="text">
          <CernaArmada />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
