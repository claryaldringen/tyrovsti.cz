import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_IT } from '../shared/constants'
import { ImageWithTitle } from '../components/ImageWithTitle/ImageWithTitle'
import { Payment } from '../components/Payment'
import { Sources } from '../components/Quote/Sources'
import { IntroduzioneOrdinanzeTedesche } from '../components/Articles/it/ordinanze/IntroduzioneOrdinanzeTedesche'
import { RisoluzioneNorimberga } from '../components/Articles/it/ordinanze/RisoluzioneNorimberga'
import { OrdinanzaCarriCavalieriTedeschi } from '../components/Articles/it/ordinanze/OrdinanzaCarriCavalieriTedeschi'
import { OrdinanzaCarriFrancoforte } from '../components/Articles/it/ordinanze/OrdinanzaCarriFrancoforte'
import { OrdinanzaCarriNorimberga } from '../components/Articles/it/ordinanze/OrdinanzaCarriNorimberga'
import { IstruzioneDifesaCarri } from '../components/Articles/it/ordinanze/IstruzioneDifesaCarri'
import { IstruzioneFormazioneCarri } from '../components/Articles/it/ordinanze/IstruzioneFormazioneCarri'
import { OrdinanzaDelMargravioAlbrecht } from '../components/Articles/it/ordinanze/OrdinanzaDelMargravioAlbrecht'
import { OrdinanzaCarriSeldeneck } from '../components/Articles/it/ordinanze/OrdinanzaCarriSeldeneck'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Ordinanze militari tedesche"
        image="husite.jpg"
        description="Ordinanze militari tedesche – regolamenti militari imperiali del XV secolo"
      />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h2>Ordinanze militari tedesche</h2>
              </Col>
            </Row>
            <Row>
              <ImageWithTitle src="husite.jpg" width={1920} height={1404} />
            </Row>
            <IntroduzioneOrdinanzeTedesche />
            <RisoluzioneNorimberga />
            <OrdinanzaCarriCavalieriTedeschi />
            <OrdinanzaCarriFrancoforte />
            <OrdinanzaCarriNorimberga />
            <IstruzioneDifesaCarri />
            <IstruzioneFormazioneCarri />
            <OrdinanzaDelMargravioAlbrecht />
            <OrdinanzaCarriSeldeneck />
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
    lang: LANG_IT,
    dest: {
      cs: '/nemecke-vojenske-rady-a-spisy',
      en: '/german-military-orders-and-writings',
      de: '/deutsche-militaerordnungen',
    },
  },
})
