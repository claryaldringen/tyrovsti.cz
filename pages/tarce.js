import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Link from 'next/link'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_CS } from '../shared/constants'
import { ImageWithTitle } from '../components/ImageWithTitle/ImageWithTitle'

const Page = () => {
  return (
    <>
      <HeadExtended lang={LANG_CS} title="Tarče" />

      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h1>Tarče</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Úvod</h4>
                <p>
                  Tarče (z německého <i>Tartsche</i>) je pozdní vývojovou fází
                  jezdeckého štítu, užívanou po celé 15. století. V zásadě lze
                  říci, že čím komplikovanější a prolamovanější tvar, tím
                  pozdější je datace tarče. Typicky byla vyrobena z lipového
                  dřeva, potaženého pergamenem, plátnem nebo kombinací obojího.
                  Na potahu bylo naneseno gesso (směs jemně mleté křídy a
                  klihu), které vytvářelo podklad pro malbu temperovými barvami.
                </p>
                <p>
                  Častým motivem na tarčích z německého prostoru je dáma, která
                  přidržuje úplný erb, tj. heraldický štít s přilbou, klenotem a
                  přikryvadly, jak je vidět na následujícíh příkladech z
                  Metropolitního muzea umění. Ve dvou případech je dáma doplněna
                  stuhou s heslem, které však nemá heraldický význam a jedná se
                  spíše o vtipnou slovní hříčku.
                </p>
              </Col>
            </Row>
            <Row>
              <ImageWithTitle
                md={4}
                src="DT768.jpg"
                width={2978}
                height={3722}
                title="Obr. 1: Tarče, Německo, kolem roku 1450"
              />
              <ImageWithTitle
                md={4}
                src="sfsb25.26.2s1.jpg"
                width={2131}
                height={2260}
                title="Obr. 2: Tarče, Německo, 15. století"
              />
              <ImageWithTitle
                md={4}
                src="267737.jpg"
                width={1244}
                height={1524}
                title="Obr. 3: Tarče, Německo, 1450 - 1500"
              />
            </Row>
            <Row>
              <Col md={4}>
                Na levé tarči je namalován erb patřící buď rodu Gottsmannů nebo
                příbuznému rodu Türriegelů, oba z Franků. Ženská postava po
                straně drží banderolu (svitek, stuhu) s částečně německy psaným
                heslem: HAB MYCH ALS ICH BIN... (Vezmi mě takovou, jaká
                jsem...). Výzdoba se zářivými barvami na stříbřitě fóliovém
                podkladu je pozoruhodně zachovalá, protože byla po staletí
                skryta pod vrstvami pozdějšího nátěru. Na kůží potažené zadní
                straně štítu jsou stopy po namalované postavě svatého Kryštofa,
                jehož obraz měl chránit před náhlou smrtí.
                <table>
                  <tbody>
                    <tr>
                      <th>Výška:&nbsp;</th>
                      <td>55,88 cm</td>
                    </tr>
                    <tr>
                      <th>Šířka:&nbsp;</th>
                      <td>40,64 cm</td>
                    </tr>
                  </tbody>
                </table>
              </Col>
              <Col md={4}>
                Přestože je prostřední tarče poškozená používáním a stářím, je
                jedním z nejkrásněji malovaných příkladů tarčí patnáctého
                století. Na dochované ploše zobrazuje ženu v opeřeném turbanu,
                která drží banderolu (svitek, stuhu) s nápisem v němčině
                &bdquo;FAHR MIT FREUDEN&ldquo; (jdi s radostí). Na heraldickém
                štítě vpravo byl dříve zobrazen erb majitele, který je dnes
                nečitelný. Okolní plochy jsou jemně malované dekorem zavinutých
                listů a &bdquo;pásy mraků&ldquo; v neprůhledných barvách a
                průsvitných glazurách na leštěném stříbrnolistém podkladu.
                <table>
                  <tbody>
                    <tr>
                      <th>Výška:&nbsp;</th>
                      <td>48,3 cm</td>
                    </tr>
                    <tr>
                      <th>Šířka:&nbsp;</th>
                      <td>42,5 cm</td>
                    </tr>
                    <tr>
                      <th>Hmotnost:&nbsp;</th>
                      <td>1704 g</td>
                    </tr>
                  </tbody>
                </table>
              </Col>
              <Col md={4}>
                Povrch tarče vpravo je malován jemným stříbrným dekorem
                zavinutých listů (nyní zašlých) na černém podkladu. Během své
                pracovní životnosti byl štít sekundárně pomalován dvěma štíty se
                znaky norimberských patricijských rodů Ketzelů (na černém
                podkladu stříbrná opice držící zlatou kouli) a Igelbrechtů (na
                stříbrném podkladu černý ježek se třemi zlatými jablky na
                zádech). Tyt sekundární erby byly možná přidány koncem 15.
                století rodem Ketzelů jako památka na Heinricha Ketzela staršího
                (zemřel 1438), norimberského měšťana v letech 1435-36, a jeho
                manželku Annu Igelbrechtovou, která se za něj provdala v roce
                1391.
                <table>
                  <tbody>
                    <tr>
                      <th>Výška:&nbsp;</th>
                      <td>53,3 cm</td>
                    </tr>
                    <tr>
                      <th>Šířka:&nbsp;</th>
                      <td>45,7 cm</td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>Rekonstrukce</h4>
                <p>
                  Protože se nám nepodařilo najít žádnou dochovanou tarči z
                  českého území, vybral jsem si pro rekonstrukci následující
                  tarči z let 1440 - 1460, pravděpodobně z Norimberka, která se
                  nyní nachází v Muzeu umění ve Filadelfii. Jak víme, Čechy byly
                  s Norimberkem v čilém obchodním vztahu a sám{' '}
                  <Link href="tyrovsti-z-einsiedlu#1">
                    Jošt vlastnil palné zbraně vyrobené v Norimberku.
                  </Link>
                  Tarči s podobně stylizovanými okraji do tvaru srolovaných
                  svitků zobrazuje i Jan van Eyck na obraze &bdquo;Kristovi
                  rytíři&ldquo;, který je součástí levého panelu Gentského
                  oltáře z roku 1432. Tarče byla poprvé přemalována kolem roku
                  1500 a její současná podoba je výsledkem barokní přemalby ze
                  17. století, kdy byla vymalována pro pohřební účely a opatřena
                  erby norimberských patricijských rodů Hallerů a Imhofů.
                  Orignál tarče je 55,6 cm vysoký, 52 cm široký a jeho prohnutí
                  činí 23 cm. Váží 2880 gramů.
                </p>
              </Col>
            </Row>
            <Row>
              <ImageWithTitle
                md={4}
                src="1977-167-742v2-pma.jpg"
                width={3397}
                height={4096}
                title="Tarče, Norimberg - Německo, 1440 - 1460"
              />
              <ImageWithTitle
                md={4}
                src="1977-167-742v3-pma.jpg"
                width={3067}
                height={4096}
                title="Tarče, Norimberg - Německo, 1440 - 1460"
              />
              <ImageWithTitle
                md={4}
                src="1425-30.jpg"
                width={813}
                height={1400}
                title="Výřez z levého křídla Gentského oltáře, 1432"
              />
            </Row>
            <Row>
              <Col>
                <p>
                  Vzhledem k tomu, že se původní malba tarče nedochovala,
                  rozhodli jsme se pro ni vytvořit originální avšak dobově
                  odpovídající motiv. Pozadí tarče je černé, s dekorem
                  stříbrných zavinutých listů stejně, jako na německé tarči z
                  obr. 3. Černá barva reprezentuje střídmý a neokázalý
                  katolicismus majitele, stříbrný dekor pak odkazuje na tradiční
                  sepjetí českých zemí s tímto drahým kovem. Jako předloha pro
                  dámu byla vybrána sv. Dorota z levého křídla oltáře z
                  Jeníkova, datovanéhok roku 1460. Erb, který drží, vychází
                  z&nbsp;
                  <Link href="/images/nahrobek.jpg">
                    nejstaršího známého vyobrazení erbu Týřovských z náhrobku
                    kostela v Jincích
                  </Link>{' '}
                  a je stylizován podle Knihy erbů (<i>Wappenbuch</i>), kterou
                  roku 1483 vytvořil a věnoval císaři Fridrichu III. kostnický
                  patricij Konrád Grünenberg. Na heraldickém štítu, děleném na
                  čtvrtiny, je v 1. a 4. poli na stříbrném pozadí černý císařský
                  orel (tj. se dvěma hlavami) se zlatou zbrojí (spáry a
                  zobákem), zatímco ve 2. a 3. poli jsou na modrém poli tři bílé
                  brky spojené hroty k sobě. Štít je opatřen dvěma přílbami
                  opatřenými zlatými korunkami s klenoty a přikryvadly, přičemž
                  v levém klenotu je dáma v černém a se zlatou korunkou a v
                  pravém červený tatarský klobouk se stříbrnou podšívkou a
                  černými pery. Přikryvadla na levé přílbě jsou modrá se
                  stříbrnou podšívkou a přikryvadla na pravé přilbě jsou červená
                  se stříbrnou podšívkou. Banderola s nápisem &bdquo;Protyw
                  neprzáteluom&ldquo; je umístěna stejně jako na tarči z obr. 2.
                  Na vnitřní straně je pak analogický nápis &bdquo;Protyw
                  ʃobye&ldquo;.
                </p>
              </Col>
            </Row>
            <Row>
              <ImageWithTitle
                md={5}
                src="svdorota.jpg"
                width={253}
                height={542}
                title="Výřez z levého křídla oltáře z Jeníkova, kolem roku 1460"
              />
              <ImageWithTitle
                md={7}
                src="wappenbuch.jpg"
                width={1410}
                height={1416}
                title="Erb se dvěma přilbami z knihy Wappenbuch, Kostnice, 1483"
              />
            </Row>
            <Row>
              <Col>
                <h5>Korpus</h5>
                <p>
                  Korpus je stejně jako většina štítů té doby vyrobený z
                  lipových latí slepených dohromady klihem. Takto vytvořený blok
                  je následně pomocí nástrojů tvarován tak dlouho, až získá
                  finální podobu. Autorem korpusu je František Poch.
                </p>
              </Col>
            </Row>
            <Row>
              <ImageWithTitle
                src="korpus1.jpg"
                width={2048}
                height={1531}
                title=""
              />
              <ImageWithTitle
                src="korpus2.jpg"
                width={2048}
                height={1531}
                title=""
              />
              <ImageWithTitle
                src="korpus3.jpg"
                width={2048}
                height={1531}
                title=""
              />
            </Row>
            <Row>
              <ImageWithTitle
                src="korpus7.jpg"
                width={2048}
                height={1531}
                title=""
              />
              <ImageWithTitle
                src="korpus4.jpg"
                width={1531}
                height={2048}
                title=""
              />
              <ImageWithTitle
                src="korpus6.jpg"
                width={2048}
                height={1531}
                title=""
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
