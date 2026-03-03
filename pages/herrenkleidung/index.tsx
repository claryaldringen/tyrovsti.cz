import { Col, Container, Row } from 'reactstrap'
import React from 'react'
import { HeadExtended } from '../../components/HeadExtended'
import { LANG_DE } from '../../shared/constants'
import { Sources } from '../../components/Quote/Sources'
import { Unterkleidung } from '../../components/Articles/de/kleidung/Unterkleidung'
import { Wams } from '../../components/Articles/de/kleidung/Wams'
import { Rock } from '../../components/Articles/de/kleidung/Rock'
import { Mantel } from '../../components/Articles/de/kleidung/Mantel'
import { Schuhwerk } from '../../components/Articles/de/kleidung/Schuhwerk'
import { Kopfbedeckungen } from '../../components/Articles/de/kleidung/Kopfbedeckungen'
import { Payment } from '../../components/Payment'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Herrenkleidung"
        image="knez.jpg"
        description="Herrenkleidung im 15. Jahrhundert – Überblick über mittelalterliche Kleidung in Böhmen"
      />
      <Container>
        <Row>
          <Col className="text">
            <h1>Herrenkleidung</h1>
            <Unterkleidung />
            <Row>
              <Col>
                <h3>Oberkleidung</h3>
              </Col>
            </Row>
            <Wams />
            <Rock />
            <Mantel />
            <Schuhwerk />
            <Kopfbedeckungen />
            <Sources />
            <Payment />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: { cs: '/muzsky-odev', en: '/mens-clothing' },
  },
})

export default Page
