import { HeadExtended } from '../../components/HeadExtended'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Sources } from '../../components/Quote/Sources'
import { Payment } from '../../components/Payment'
import { DobytiTepelskehoKlastera1467 } from '../../components/Articles/cz/akce/DobytiTepelskehoKlastera1467'
import { LANG_CS } from '../../shared/constants'

const Page = () => (
  <>
    <HeadExtended
      title="Dobytí tepelského kláštera 1467"
      description="Vyloupení premonstrátského kláštera v Teplé katolickými pány Zelenohorské jednoty na pozadí druhé křížové výpravy proti Jiřímu z Poděbrad (1467)"
    />
    <Container>
      <Row>
        <Col className="text">
          <DobytiTepelskehoKlastera1467 />
          <Sources />
          <Payment />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_CS,
    dest: {
      en: '/military-campaigns',
      de: '/feldzuege',
      it: '/campagne-militari',
    },
  },
})

export default Page
