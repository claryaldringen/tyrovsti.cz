import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { VaclavVlcekOfCenovHandbook } from '../components/Articles/en/orders/VaclavVlcekOfCenovHandbook'
import { YeWhoAreWarriorsOfGod } from '../components/Articles/en/orders/YeWhoAreWarriorsOfGod'
import { TheBohemianDietsProtocol } from '../components/Articles/en/orders/TheBohemianDietsProtocol'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_EN } from '../shared/constants'
import { HodetinsOrder } from '../components/Articles/en/orders/HodetinsOrder'
import { ZizkasOrder } from '../components/Articles/en/orders/ZizkasOrder'
import { ZizkasMilitaryCampaignToHungary } from '../components/Articles/en/orders/ZizkasMilitaryCampaignToHungary'
import { Payment } from '../components/Payment'
import { CzechMilitaryOrdersIntro } from '../components/Articles/en/orders/CzechMilitaryOrdersIntro'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Czech military orders and writings"
        image="Hausbuch_Wolfegg_51v_52r1_Heerzug.jpg"
        description="Czech military orders and writings – Hussite and post-Hussite military regulations"
      />
      <Container>
        <Row>
          <Col className="text">
            <CzechMilitaryOrdersIntro />
            <YeWhoAreWarriorsOfGod />
            <ZizkasOrder />
            <HodetinsOrder />
            <TheBohemianDietsProtocol />
            <ZizkasMilitaryCampaignToHungary />
            <VaclavVlcekOfCenovHandbook />
            <Row>
              <Col>
                <h4>References:</h4>
                <ul>
                  <li>
                    Hugo Toman:{' '}
                    <i>Husitské válečnictví za doby Žižkovy a Prokopovy</i>,
                    Praha 1898
                  </li>
                  <li>
                    Petr Čornej:{' '}
                    <i>Jan Žižka: Život a doba husitského válečníka</i>, Praha
                    2019
                  </li>
                  <li>
                    Vavřinec z Březové: <i>Husitská kronika</i>, Praha 1979
                  </li>
                  <li>
                    Karel Jaromír Erben: <i>Wýbor z literatury české</i>, Praha
                    1868
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

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: {
      cs: '/ceske-vojenske-rady-a-spisy',
      de: '/boehmische-militaerordnungen',
      it: '/ordinanze-militari-ceche',
    },
  },
})

export default Page
