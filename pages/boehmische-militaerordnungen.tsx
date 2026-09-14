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
import { Sources } from '../components/Quote/Sources'
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
    dest: {
      cs: '/ceske-vojenske-rady-a-spisy',
      en: '/czech-military-orders-and-writings',
      it: '/ordinanze-militari-ceche',
    },
  },
})

export default Page
