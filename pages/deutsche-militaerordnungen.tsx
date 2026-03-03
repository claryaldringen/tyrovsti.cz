import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_DE } from '../shared/constants'
import { ImageWithTitle } from '../components/ImageWithTitle/ImageWithTitle'
import { Payment } from '../components/Payment'
import { NuernbergerBeschluss } from '../components/Articles/de/ordnungen/NuernbergerBeschluss'
import { WagenordnungDerDeutschenRitter } from '../components/Articles/de/ordnungen/WagenordnungDerDeutschenRitter'
import { FrankfurterWagenordnung } from '../components/Articles/de/ordnungen/FrankfurterWagenordnung'
import { NuernbergerWagenordnung } from '../components/Articles/de/ordnungen/NuernbergerWagenordnung'
import { InstruktionVerteidigung } from '../components/Articles/de/ordnungen/InstruktionVerteidigung'
import { InstruktionWagenaufstellung } from '../components/Articles/de/ordnungen/InstruktionWagenaufstellung'
import { OrdnungDesMarkgrafenAlbrecht } from '../components/Articles/de/ordnungen/OrdnungDesMarkgrafenAlbrecht'
import { PhilippVonSeldeneckWagenordnung } from '../components/Articles/de/ordnungen/PhilippVonSeldeneckWagenordnung'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Deutsche Militärordnungen und Schriften"
        image="husite.jpg"
        description="Deutsche Militärordnungen und Schriften – Reichsmilitärverordnungen des 15. Jahrhunderts"
      />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h2>Deutsche Militärordnungen und Schriften</h2>
              </Col>
            </Row>
            <Row>
              <ImageWithTitle src="husite.jpg" width={1920} height={1404} />
            </Row>
            <NuernbergerBeschluss />
            <WagenordnungDerDeutschenRitter />
            <FrankfurterWagenordnung />
            <NuernbergerWagenordnung />
            <InstruktionVerteidigung />
            <InstruktionWagenaufstellung />
            <OrdnungDesMarkgrafenAlbrecht />
            <PhilippVonSeldeneckWagenordnung />
            <Row>
              <Col>
                <h3>Literaturverzeichnis:</h3>
                <ul>
                  <li>
                    Hugo Toman:{' '}
                    <i>Husitské válečnictví za doby Žižkovy a Prokopovy</i>,
                    Praha 1898
                  </li>
                </ul>
              </Col>
            </Row>
            <Payment />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page

export const getStaticProps = () => ({
  props: {
    lang: LANG_DE,
    dest: {
      cs: '/nemecke-vojenske-rady-a-spisy',
      en: '/german-military-orders-and-writings',
    },
  },
})
