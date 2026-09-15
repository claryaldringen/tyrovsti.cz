import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_DE } from '../shared/constants'
import { ImageWithTitle } from '../components/ImageWithTitle/ImageWithTitle'
import { Payment } from '../components/Payment'
import { Sources } from '../components/Quote/Sources'
import { DeutscheMilitaerordnungenEinfuehrung } from '../components/Articles/de/ordnungen/DeutscheMilitaerordnungenEinfuehrung'
import { EinungZuGrottkau } from '../components/Articles/de/ordnungen/EinungZuGrottkau'
import { FrankfurterBeschluss1427 } from '../components/Articles/de/ordnungen/FrankfurterBeschluss1427'
import { NuernbergerVorschlaege1430 } from '../components/Articles/de/ordnungen/NuernbergerVorschlaege1430'
import { NuernbergerOrdnungBoehmenzug1431 } from '../components/Articles/de/ordnungen/NuernbergerOrdnungBoehmenzug1431'
import { OrdnungHerzogAlbrechtsVonOesterreich } from '../components/Articles/de/ordnungen/OrdnungHerzogAlbrechtsVonOesterreich'
import { VorschlaegeDerKurfuersten1426 } from '../components/Articles/de/ordnungen/VorschlaegeDerKurfuersten1426'
import { SchlesischerBeschluss1429 } from '../components/Articles/de/ordnungen/SchlesischerBeschluss1429'
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
            <DeutscheMilitaerordnungenEinfuehrung />
            <EinungZuGrottkau draft />
            <VorschlaegeDerKurfuersten1426 draft />
            <FrankfurterBeschluss1427 draft />
            <NuernbergerBeschluss />
            <SchlesischerBeschluss1429 draft />
            <NuernbergerVorschlaege1430 draft />
            <NuernbergerOrdnungBoehmenzug1431 draft />
            <OrdnungHerzogAlbrechtsVonOesterreich draft />
            <WagenordnungDerDeutschenRitter />
            <FrankfurterWagenordnung />
            <NuernbergerWagenordnung />
            <InstruktionVerteidigung />
            <InstruktionWagenaufstellung />
            <OrdnungDesMarkgrafenAlbrecht />
            <PhilippVonSeldeneckWagenordnung />
            <Sources />
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
      it: '/ordinanze-militari-tedesche',
    },
  },
})
