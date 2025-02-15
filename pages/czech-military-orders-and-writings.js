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

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Czech military orders and writings"
        image="Hausbuch_Wolfegg_51v_52r1_Heerzug.jpg"
      />
      <Container>
        <Row>
          <Col className="text">
            <h1>Czech military orders and writings</h1>
            <Row>
              <Col>
                <p>
                  Among the medieval writings that give us a glimpse into the
                  conditions of warfare of the time are the so-called military
                  orders. They were usually written before a particular campaign
                  and originally dealt mainly with disciplinary and
                  organisational matters. Relatively few of them survive from
                  before the 15th century. Among the best known is the{' '}
                  <i>Military Order of Frederick I Barbarossa</i> from 1158. The
                  oldest military order of the Swiss is the so-called{' '}
                  <i>Sempacherbrief</i>, which was written in Zurich in 1393.
                  These two orders became the basis and model for most later
                  writings of this nature in the German areas. Leaving aside the
                  disputed dating of the so-called Hodětín Order (various
                  scholars place it between 1413 and 1431), the first attempt to
                  introduce a full-fledged military order was made by Jan Hvězda
                  of Vícemilice in October 1421 in Prague. This order, however,
                  has not survived and is only recorded in a mention in the
                  Hussite Chronicle of Lawrence of Březová:{' '}
                  <i>
                    that during military expeditions no one should return from
                    the army without the will of the hetmans (captains), nor, if
                    it came to it, steal from the battle under loss of throat
                    and estates by any custom.
                  </i>
                </p>
                <p>
                  After the middle of the 15th century, the number and quality
                  of Bohemian and German military orders increased, no longer
                  concerned only with disciplinary and organisational matters,
                  but also with military tactics and the art of war. The
                  culminating work in this respect is undoubtedly{' '}
                  <i>
                    Václav Vlček of Čenov&apos;s handbook to king Vladislaus,
                    how to make formations of cavalry, infantry and wagons
                  </i>
                  , while among the German orders it is worth noting the
                  writings of Albrecht III. Achilles.
                </p>
                <p>
                  Here I have attempted to present all the Czech writings and
                  records of the 15th century relating to contemporary military
                  science.
                </p>
              </Col>
            </Row>
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
    dest: '/ceske-vojenske-rady-a-spisy',
  },
})

export default Page
