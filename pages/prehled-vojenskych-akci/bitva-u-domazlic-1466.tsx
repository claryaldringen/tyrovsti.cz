import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { BitvaUDomazlic1466 } from '../../components/Articles/cz/akce/BitvaUDomazlic1466'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Bitva u Domažlic 1466"
      description="Odražení bavorsko-falckých křižáků chodskou hotovostí a královskými oddíly na úsvitu druhé křížové výpravy proti Jiřímu z Poděbrad (1466)"
    />
    <Container>
      <Row>
        <Col className="text">
          <BitvaUDomazlic1466 />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: {
      en: '/military-campaigns',
      de: '/feldzuege',
      it: '/campagne-militari',
    },
  },
})

export default Page
