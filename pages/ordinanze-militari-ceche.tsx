import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { ManualeVaclavVlcek } from '../components/Articles/it/ordinanze/ManualeVaclavVlcek'
import { VoiCheSieteGuerrieriDiDio } from '../components/Articles/it/ordinanze/VoiCheSieteGuerrieriDiDio'
import { ProtocolloDellaDietaBoema } from '../components/Articles/it/ordinanze/ProtocolloDellaDietaBoema'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_IT } from '../shared/constants'
import { OrdinanzaDiHodetin } from '../components/Articles/it/ordinanze/OrdinanzaDiHodetin'
import { OrdinanzaDiZizka } from '../components/Articles/it/ordinanze/OrdinanzaDiZizka'
import { CampagnaDiZizkaInUngheria } from '../components/Articles/it/ordinanze/CampagnaDiZizkaInUngheria'
import { Payment } from '../components/Payment'
import { Sources } from '../components/Quote/Sources'
import { IntroduzioneOrdinanzeCeche } from '../components/Articles/it/ordinanze/IntroduzioneOrdinanzeCeche'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Ordinanze militari ceche"
        image="Hausbuch_Wolfegg_51v_52r1_Heerzug.jpg"
        description="Ordinanze militari ceche – regolamenti militari hussiti e post-hussiti"
      />
      <Container>
        <Row>
          <Col className="text">
            <IntroduzioneOrdinanzeCeche />
            <VoiCheSieteGuerrieriDiDio />
            <OrdinanzaDiZizka />
            <OrdinanzaDiHodetin />
            <ProtocolloDellaDietaBoema />
            <CampagnaDiZizkaInUngheria />
            <ManualeVaclavVlcek />
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
    lang: LANG_IT,
    dest: {
      cs: '/ceske-vojenske-rady-a-spisy',
      en: '/czech-military-orders-and-writings',
      de: '/boehmische-militaerordnungen',
    },
  },
})

export default Page
