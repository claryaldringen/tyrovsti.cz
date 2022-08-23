import { Menu } from '../components/Menu'
import { Col, Container, Row } from 'reactstrap'
import Image from 'next/image'
import Head from 'next/head'
import React from 'react'

const Page = () => {
  return (
    <>
      <Head>
        <title>Jošt z Einsiedle a na Týřově - Spodní oděv</title>
      </Head>
      <Menu />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h2>Spodní oděv</h2>
                <p>
                  Spodní prádlo plnilo několik funkcí. Vzhledem k tomu, že se k
                  zhotovení svrchního oděvu užívaly v převážné většině vlněné
                  materiály, zabraňovalo bezprostřednímu odírání vlny o holou
                  kůži, které by jinak vedlo k jejímu podráždění. Svrchní oděvy
                  se také velice obtížně čistily, protože se ve středověku
                  používalo mechanických prostředků k praní, které látku
                  poškozovaly. Proto se také oděvy nemohly čistit příliš často.
                  Praní spodního prádla, které se zhotovovalo převážně ze lnu,
                  nebylo tolik obtížné. Absorbovalo pot, a pokud došlo k jeho
                  znečištění, nebyly náklady na zhotovení dalšího kusu oděvu,
                  který sloužil na převlečení, tolik nákladné, jako by tomu bylo
                  u oděvu zhotoveného z vlny.
                </p>
              </Col>
              <div className="col-12">
                <h3>Košile</h3>
                <p>
                  Košile byla základním kusem mužského spodního prádla. Košile
                  byly jednoduchého střihu, připomínajícího literu T a
                  dosahovaly obvykle do oblasti kolen. Ramenní vsadky se v této
                  době ještě zhotovovaly bez plisování. Košile mohla mít
                  jednoduchý oválný výstřih, rozhalení na hrudi do tvaru V nebo
                  rozparek po celé délce.
                </p>
              </div>
            </Row>
            <Row>
              <div className="col-md-4 image-wrapper">
                <a href="/images/kosile_rajhrad.jpg" target="_blank">
                  <Image
                    src="/images/kosile_rajhrad.jpg"
                    width={300}
                    height={400}
                  />
                </a>
                Košile pod kolena s výřezen do V na výřezu z deskového obrazu
                Nesení kříže na Rajhradském oltáři, kolem 1440
              </div>
              <div className="col-md-4 image-wrapper">
                <a href="/images/kosile_nove_sady.jpg" target="_blank">
                  <Image
                    src="/images/kosile_nove_sady.jpg"
                    width={300}
                    height={400}
                  />
                </a>
                <br />
                Košile ke kolenům s rozparkem po celé délce na výřezu deskového
                obrazu Ukřižování z Nových Sadů na Rajhradském oltáři, kolem
                1440
              </div>
              <div className="col-md-4 image-wrapper">
                <a href="/images/kosile_jk.jpg" target="_blank">
                  <Image src="/images/kosile_jk.jpg" width={640} height={480} />
                </a>
                Lazar v košili s rozparkem po celé délce na výřezu z Jenského
                kodexu (1490-1510) (1430-1492)
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
