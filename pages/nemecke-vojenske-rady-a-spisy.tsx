import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { NemeckeVojenskeRadyUvod } from '../components/Articles/cz/rady/NemeckeVojenskeRadyUvod'
import { UmluvaVGrotkove } from '../components/Articles/cz/rady/UmluvaVGrotkove'
import { UsneseniFrankfurtske1427 } from '../components/Articles/cz/rady/UsneseniFrankfurtske1427'
import { NavrhyNorimberske1430 } from '../components/Articles/cz/rady/NavrhyNorimberske1430'
import { RadNorimberskyProTazeniDoCech1431 } from '../components/Articles/cz/rady/RadNorimberskyProTazeniDoCech1431'
import { RadVevodyAlbrechtaRakouskeho } from '../components/Articles/cz/rady/RadVevodyAlbrechtaRakouskeho'
import { NavrhyKurfirstu1426 } from '../components/Articles/cz/rady/NavrhyKurfirstu1426'
import { UsneseniSlezske1429 } from '../components/Articles/cz/rady/UsneseniSlezske1429'
import { UsneseniNorimberske } from '../components/Articles/cz/rady/UsneseniNorimberske'
import { RadVozovyRytiruNemeckych } from '../components/Articles/cz/rady/RadVozovyRytiruNemeckych'
import { VozovyRadFrankfurtsky } from '../components/Articles/cz/rady/VozovyRadFrankfurtsky'
import { NorimberskyRadVozovy } from '../components/Articles/cz/rady/NorimberskyRadVozovy'
import { InstrukceMarkrabiAlbrechtaOHajeniVozovehoSiku } from '../components/Articles/cz/rady/InstrukceMarkrabiAlbrechtaOHajeniVozovehoSiku'
import { InstrukceMarkrabiAlbrechtaOSikovaniVozu } from '../components/Articles/cz/rady/InstrukceMarkrabiAlbrechtaOSikovaniVozu'
import { RadMarkrabiAlbrechta } from '../components/Articles/cz/rady/RadMarkrabiAlbrechta'
import { VegetiusOVozoveHradbeCgm356 } from '../components/Articles/cz/rady/VegetiusOVozoveHradbeCgm356'
import { FilipaSeldeneckaRadVozovy } from '../components/Articles/cz/rady/FilipaSeldeneckaRadVozovy'
import { HeadExtended } from '../components/HeadExtended'
import { ImageWithTitle } from '../components/ImageWithTitle/ImageWithTitle'
import { Payment } from '../components/Payment'
import { Sources } from '../components/Quote/Sources'
import { LANG_CS } from '../shared/constants'

const Page = () => {
  return (
    <>
      <HeadExtended
        title="Německé vojenské řády a spisy"
        image="husite.jpg"
        description="Německé vojenské řády a spisy – říšské vojenské předpisy 15. století"
      />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h2>Německé vojenské řády a spisy</h2>
              </Col>
            </Row>
            <Row>
              <ImageWithTitle src="husite.jpg" width={1920} height={1404} />
            </Row>
            <NemeckeVojenskeRadyUvod />
            <UmluvaVGrotkove draft />
            <NavrhyKurfirstu1426 draft />
            <UsneseniFrankfurtske1427 draft />
            <UsneseniNorimberske />
            <UsneseniSlezske1429 draft />
            <NavrhyNorimberske1430 draft />
            <RadNorimberskyProTazeniDoCech1431 draft />
            <RadVevodyAlbrechtaRakouskeho draft />
            <RadVozovyRytiruNemeckych />
            <VozovyRadFrankfurtsky />
            <NorimberskyRadVozovy />
            <InstrukceMarkrabiAlbrechtaOHajeniVozovehoSiku />
            <InstrukceMarkrabiAlbrechtaOSikovaniVozu />
            <RadMarkrabiAlbrechta />
            <FilipaSeldeneckaRadVozovy />
            <VegetiusOVozoveHradbeCgm356 draft />
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
    lang: LANG_CS,
    dest: {
      en: '/german-military-orders-and-writings',
      de: '/deutsche-militaerordnungen',
      it: '/ordinanze-militari-tedesche',
    },
  },
})
