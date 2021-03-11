import { Menu } from '../components/Menu'
import { Col, Container, Row } from 'reactstrap'
import Image from 'next/image'
import Head from 'next/head'

const Page = () => {
  return (
    <>
      <Head>
        <title>Jošt z Einsiedle a na Týřově - Válečné kladivo</title>
      </Head>
      <Menu />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h3>Válečné kladivo</h3>
                <p>
                  Sekera, oštěp/kopí a kladivo byly nejčasnějšími zbraněmi
                  lidstva. Tyto nejstarší válečné nástroje byly vyrobeny z
                  kamene nebo ze dřeva. Oštěp byl navržen k bodání, sekera k
                  sekání a kladivo k drcení. Jak se lidská civilizace vyvíjela a
                  zlepšovala se její schopnost pracovat s kovy, zlepšovaly se i
                  zbraně. V průběhu věků prošly kopí, sekera i kladivo mnoha
                  změnami stylu a tvaru, diktovanými potřebou, módou a
                  metalurgickými inovacemi. Někdy se kombinovalo několik těchto
                  specializovaných zbraní, aby se diverzifikoval a zvýšil jejich
                  potenciál. Například hlava kladiva by byla přidána na zadní
                  stranu sekery, čímž se zbraň stala hybridem mezi sekerou a
                  kladivem, nebo by byl přidán hrot na horní straně kladiva, což
                  zase znamenalo hybrid mezi kopím a kladivem . Zdá se, že
                  takové zbraně s více schopnostmi byly používány přinejmenším
                  již v době Vikingů, protože existuje několik dobových
                  literárních odkazů na sečná kopí, kterými bylo možné sekat i
                  bodat. I když toho mohlo být dosaženo jednoduchým rozšířením a
                  prodloužením hrotu kopí, trend směrem k přidávání dalších
                  funkcí k vytvoření specializované zbraně je jasný. Vypadá to,
                  že v průběhu 13. a 14. století se tyto hybridní zbraně staly
                  populárnějšími a v průběhu 15. a 16. století byly široce
                  používány.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
