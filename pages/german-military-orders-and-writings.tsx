import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_EN } from '../shared/constants'
import { ImageWithTitle } from '../components/ImageWithTitle/ImageWithTitle'
import { Payment } from '../components/Payment'
import { Sources } from '../components/Quote/Sources'
import { GermanMilitaryOrdersIntro } from '../components/Articles/en/orders/GermanMilitaryOrdersIntro'
import { GrottkauAgreement } from '../components/Articles/en/orders/GrottkauAgreement'
import { FrankfurtResolution1427 } from '../components/Articles/en/orders/FrankfurtResolution1427'
import { NurembergProposals1430 } from '../components/Articles/en/orders/NurembergProposals1430'
import { NurembergOrderForTheBohemianCampaign1431 } from '../components/Articles/en/orders/NurembergOrderForTheBohemianCampaign1431'
import { DukeAlbrechtOfAustriasOrder } from '../components/Articles/en/orders/DukeAlbrechtOfAustriasOrder'
import { ElectorsProposals1426 } from '../components/Articles/en/orders/ElectorsProposals1426'
import { SilesianResolution1429 } from '../components/Articles/en/orders/SilesianResolution1429'
import { NurembergResolution } from '../components/Articles/en/orders/NurembergResolution'
import { WagonOrderOfGermanKnights } from '../components/Articles/en/orders/WagonOrderOfGermanKnights'
import { FrankfurtWagonOrder } from '../components/Articles/en/orders/FrankfurtWagonOrder'
import { NurembergWagonOrder } from '../components/Articles/en/orders/NurembergWagonOrder'
import { MargravesInstructionOnDefendingTheWagonFort } from '../components/Articles/en/orders/MargravesInstructionOnDefendingTheWagonFort'
import { MargravesInstructionOnWagonFormation } from '../components/Articles/en/orders/MargravesInstructionOnWagonFormation'
import { MargraveAlbrechtsOrder } from '../components/Articles/en/orders/MargraveAlbrechtsOrder'
import { VegetiusOnTheWagonFortCgm356 } from '../components/Articles/en/orders/VegetiusOnTheWagonFortCgm356'
import { PhilipOfSeldenecksWagonOrder } from '../components/Articles/en/orders/PhilipOfSeldenecksWagonOrder'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="German military orders and writings"
        image="husite.jpg"
        description="German military orders and writings – Imperial military regulations of the 15th century"
      />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h2>German Military Orders and Writings</h2>
              </Col>
            </Row>
            <Row>
              <ImageWithTitle src="husite.jpg" width={1920} height={1404} />
            </Row>
            <GermanMilitaryOrdersIntro />
            <GrottkauAgreement draft />
            <ElectorsProposals1426 draft />
            <FrankfurtResolution1427 draft />
            <NurembergResolution />
            <SilesianResolution1429 draft />
            <NurembergProposals1430 draft />
            <NurembergOrderForTheBohemianCampaign1431 draft />
            <DukeAlbrechtOfAustriasOrder draft />
            <WagonOrderOfGermanKnights />
            <FrankfurtWagonOrder />
            <NurembergWagonOrder />
            <MargravesInstructionOnDefendingTheWagonFort />
            <MargravesInstructionOnWagonFormation />
            <MargraveAlbrechtsOrder />
            <PhilipOfSeldenecksWagonOrder />
            <VegetiusOnTheWagonFortCgm356 draft />
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
    lang: LANG_EN,
    dest: {
      cs: '/nemecke-vojenske-rady-a-spisy',
      de: '/deutsche-militaerordnungen',
      it: '/ordinanze-militari-tedesche',
    },
  },
})
