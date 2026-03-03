import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { VaclavVlceksHandbuch } from '../components/Articles/de/ordnungen/VaclavVlceksHandbuch'
import { IhrDieIhrGottesKriegerSeid } from '../components/Articles/de/ordnungen/IhrDieIhrGottesKriegerSeid'
import { BoehmischerLandtagsbeschluss } from '../components/Articles/de/ordnungen/BoehmischerLandtagsbeschluss'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_DE } from '../shared/constants'
import { HodetinsOrdnung } from '../components/Articles/de/ordnungen/HodetinsOrdnung'
import { ZizkasOrdnung } from '../components/Articles/de/ordnungen/ZizkasOrdnung'
import { ZizkasFeldzugNachUngarn } from '../components/Articles/de/ordnungen/ZizkasFeldzugNachUngarn'
import { Payment } from '../components/Payment'
import { BoehmischeMilitaerordnungenEinfuehrung } from '../components/Articles/de/ordnungen/BoehmischeMilitaerordnungenEinfuehrung'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Böhmische Militärordnungen und Schriften"
        image="Hausbuch_Wolfegg_51v_52r1_Heerzug.jpg"
        description="Böhmische Militärordnungen und Schriften – hussitische und nachhussitische Militärvorschriften"
      />
      <Container>
        <Row>
          <Col className="text">
            <BoehmischeMilitaerordnungenEinfuehrung />
            <IhrDieIhrGottesKriegerSeid />
            <ZizkasOrdnung />
            <HodetinsOrdnung />
            <BoehmischerLandtagsbeschluss />
            <ZizkasFeldzugNachUngarn />
            <VaclavVlceksHandbuch />
            <Row>
              <Col>
                <h4>Literaturverzeichnis:</h4>
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
    lang: LANG_DE,
    dest: {
      cs: '/ceske-vojenske-rady-a-spisy',
      en: '/czech-military-orders-and-writings',
    },
  },
})

export default Page
