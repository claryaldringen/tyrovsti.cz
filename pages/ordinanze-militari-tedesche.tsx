import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_IT } from '../shared/constants'
import { ImageWithTitle } from '../components/ImageWithTitle/ImageWithTitle'
import { Payment } from '../components/Payment'
import { Sources } from '../components/Quote/Sources'
import { IntroduzioneOrdinanzeTedesche } from '../components/Articles/it/ordinanze/IntroduzioneOrdinanzeTedesche'
import { AccordoDiGrottkau } from '../components/Articles/it/ordinanze/AccordoDiGrottkau'
import { RisoluzioneFrancoforte1427 } from '../components/Articles/it/ordinanze/RisoluzioneFrancoforte1427'
import { ProposteNorimberga1430 } from '../components/Articles/it/ordinanze/ProposteNorimberga1430'
import { OrdinanzaNorimbergaCampagnaBoema1431 } from '../components/Articles/it/ordinanze/OrdinanzaNorimbergaCampagnaBoema1431'
import { OrdinanzaDucaAlbertoAustria } from '../components/Articles/it/ordinanze/OrdinanzaDucaAlbertoAustria'
import { ProposteDeiPrincipiElettori1426 } from '../components/Articles/it/ordinanze/ProposteDeiPrincipiElettori1426'
import { RisoluzioneSlesiana1429 } from '../components/Articles/it/ordinanze/RisoluzioneSlesiana1429'
import { RisoluzioneNorimberga } from '../components/Articles/it/ordinanze/RisoluzioneNorimberga'
import { OrdinanzaCarriCavalieriTedeschi } from '../components/Articles/it/ordinanze/OrdinanzaCarriCavalieriTedeschi'
import { OrdinanzaCarriFrancoforte } from '../components/Articles/it/ordinanze/OrdinanzaCarriFrancoforte'
import { OrdinanzaCarriNorimberga } from '../components/Articles/it/ordinanze/OrdinanzaCarriNorimberga'
import { IstruzioneDifesaCarri } from '../components/Articles/it/ordinanze/IstruzioneDifesaCarri'
import { IstruzioneFormazioneCarri } from '../components/Articles/it/ordinanze/IstruzioneFormazioneCarri'
import { OrdinanzaDelMargravioAlbrecht } from '../components/Articles/it/ordinanze/OrdinanzaDelMargravioAlbrecht'
import { VegezioSulForteDeiCarriCgm356 } from '../components/Articles/it/ordinanze/VegezioSulForteDeiCarriCgm356'
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
            <AccordoDiGrottkau draft />
            <ProposteDeiPrincipiElettori1426 draft />
            <RisoluzioneFrancoforte1427 draft />
            <RisoluzioneNorimberga />
            <RisoluzioneSlesiana1429 draft />
            <ProposteNorimberga1430 draft />
            <OrdinanzaNorimbergaCampagnaBoema1431 draft />
            <OrdinanzaDucaAlbertoAustria draft />
            <OrdinanzaCarriCavalieriTedeschi />
            <OrdinanzaCarriFrancoforte />
            <OrdinanzaCarriNorimberga />
            <IstruzioneDifesaCarri />
            <IstruzioneFormazioneCarri />
            <OrdinanzaDelMargravioAlbrecht />
            <OrdinanzaCarriSeldeneck />
            <VegezioSulForteDeiCarriCgm356 draft />
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
