import React from 'react'
import { Menu } from '../components/Menu/Menu'
import { Col, Container, Row } from 'reactstrap'
import Image from 'next/image'
import Head from 'next/head'

const Page = () => {
  return (
    <>
      <Head>
        <title>Jošt z Einsiedle a na Týřově - Pánské pokrývky hlavy</title>
      </Head>
      <Menu />
      <Container>
        <Row>
          <Col className="text">
            <div className="row">
              <div className="col-12">
                <h3>Kápě</h3>
                <p>
                  <i>Kápě</i>,&nbsp;<i>kapicě</i>,&nbsp;<i>kapicze</i> pochází
                  stejně jako<i> čepice</i> ze středolatinského slova
                  <i> capa</i>,<i> cappa</i>. Nazývala se také<i> kukla</i> či
                  <i> kuklička</i>, což vzniklo z latinského<i> cucalla</i> a v
                  písemných pramenech je dále označována jako<i> capucium</i>,
                  <i> chuchla</i>,<i> cucala</i>,<i> capye</i>. Kápě mohla být
                  nošena různými způsoby - standardně na ramenou a pak mohla být
                  doplněna ještě kloboukem nebo přilbou, či byla nasazena
                  ohrnutým obličejovým otvorem na hlavě jako čepice. Pro
                  pohusitské Čechy můžeme vysledovat tři hlavní typy typy kápí:
                  S cípem, bez cípu a kápi se střapci, která byla populární také
                  v Německých zemích.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Kápě s cípem</h4>
                <p>
                  Tyto kápě byly v oblibě především před Husitskými válkami, jak
                  je možné vidět v<i> Gelnhausenově kodexu</i> (1400 - 1408)
                  nebo<i> Bibli olomoucké</i> (1417). Vzhledem k tomu, že delší
                  cíp rozeznáváme především u luxusně oděných jedinců, mohl
                  reprezentovat dobré postavení svého majitele. Tomu by i
                  odpovídala zaznamenaná událost v kronice Vavřince z Březové,
                  kdy táborité stříhali dlouhé cípy kápí pražským řemeslníkům a
                  měšťanům, které tak symbolizovaly nestřídmost a přepych, které
                  odsuzovali. Rovněž v<i>Jenském kodexu</i> (1490 - 1510) je
                  zobrazen kněz v honosné šubě, mnoha prsteny a botách s
                  dlouhými špicemi, který má kápi s dlouhým masivním cípem.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 image-wrapper">
                <a href="/images/knez.jpg" target="_blank">
                  <Image src="/images/knez.jpg" width={832} height={1270} />
                </a>
                <br />
                Kněz v kápi s masivním cípem.
              </div>
              <div className="col-md-4 image-wrapper">
                <a href="/images/kape-cip-jk.jpg" target="_blank">
                  <Image
                    src="/images/kape-cip-jk.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Kápě s cípem nasazená na hlavu otvorem pro obličej. Výřez z
                Jenského kodexu (1490-1510).
              </div>
              <div className="col-md-4 image-wrapper">
                <a href="/images/kape-s-cipem-rt.jpg" target="_blank">
                  <Image
                    src="/images/kape-s-cipem-rt.jpg"
                    width={360}
                    height={480}
                  />
                </a>
                <br />
                Kápě s cípem přehozená přes rameno. Výřez z Richentalovy kroniky
                (1470-1480).
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Kápě bez cípu</h4>
                <p>
                  Jednoduchá kápě bez cípu byla nejrozšířenějším typem kápě v
                  pohusitských Čechách. Bylo možno ji nosit pod přílbu nebo
                  spolu s kloboukem. Vyobrazení těchto kápí máme velmi mnoho ať
                  už z českých či německých pramenů.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 image-wrapper">
                <a href="/images/Jensky_kodex_Zizka.jpg" target="_blank">
                  <Image
                    src="/images/Jensky_kodex_Zizka.jpg"
                    width={640}
                    height={921}
                  />
                </a>
                Jednoduché kápě můžeme vidět na Janu Žižkovi v čele vojska a
                praporečníkovi ve vyobrazení z Jenského kodexu. Jan Žižka má
                kápi doplněnou kloboukem.
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/kape-rt.jpg" target="_blank">
                  <Image src="/images/kape-rt.jpg" width={240} height={320} />
                </a>
                <br />
                Jednoduchá kápě nasazená obličejovým otvorem na hlavu ve výřezu
                z Richentalovy kroniky (1470-1480).
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/zasedani1.jpg" target="_blank">
                  <Image src="/images/zasedani1.jpg" width={480} height={640} />
                </a>
                Jednoduché černé kápě nasazená obličejovým otvorem na hlavu mají
                jeden z konšelů a písař ve výřezu z Památné knihy Olomoucké
                (1430-1492)
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/richenthal1.jpg" target="_blank">
                  <Image
                    src="/images/richenthal1.jpg"
                    width={480}
                    height={641}
                  />
                </a>
                Dva z ozbrojenců vedoucích Jana Husa na hranici mají pod
                plechovými klobouky kápě bez cípu. Voják vpředu má kápi zcela
                maličkou, voják vzadu naopak s ozdobným vykrajováním. Výřez z
                Richentalovy kroniky (1470-1480).
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Kápě se střapci</h4>
                <p>
                  Byla oblíbena v německých zemích, včetně tehdejších Čech.
                  Rovněž se mohla nosit pod přílbu, jak ukazují kresbya malby
                  slavného malíře Albrechta Dürera (1471 - 1528). Na krku mohla
                  být spínací na knoflíky aby měla více anatomický tvar. Rovněž
                  její střapce mohly být ozdobně vykrajované, jak je vidět např.
                  na portrétu kutnohorského mincmistra Hanse Harsdorffera z roku
                  1484. Není bez zajímavosti, že Albrecht Dürer a Hans
                  Harsdorffer byli přátelé.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 image-wrapper">
                <a href="/images/kape2-jensky-kodex.jpg" target="_blank">
                  <Image
                    src="/images/kape2-jensky-kodex.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Kápě se střapci, kterou na sobě má lehkooděný jezdec. Na
                německých vyobrazeních lehkých jezdců se s těmito kápěmi lze
                setkat často. Výřez z Jenského kodexu.
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/hans-harsdorffer.jpg" target="_blank">
                  <Image
                    src="/images/hans-harsdorffer.jpg"
                    width={800}
                    height={986}
                  />
                </a>
                <br />
                Luxusní kápě s knoflíky a ozdobně prořezávanými střapci,
                nasazena obličejovou částí. Portrét Hanse Harsdorffera,
                Norimberk, 1484.
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/durer.jpg" target="_blank">
                  <Image src="/images/durer.jpg" width={1920} height={2424} />
                </a>
                Kápě se střapci nasazená obličejovou částí na hlavu na
                autoportrétu Albrechta Dürera z roku 1498.
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/oltar.jpg" target="_blank">
                  <Image src="/images/oltar.jpg" width={240} height={320} />
                </a>
                <br />
                Svatý Eustach má kolem krku ozdobnou kápi se střapci. Výřez z
                Paumgartnerova oltáře, 1500.
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h3>Klobouk</h3>
                <p>
                  <i>Klobúk</i>,<i> klouček</i>,<i> koblúček</i>,<i> kobek</i>,
                  <i> kobek</i>,<i> klouček</i>,<i> koláče</i>. Označoval kromě
                  pokrývky hlavy také přilbu. Nejrozšířenějším tvarem byl ten,
                  kdy dýnko přirozeně kopíruje hlavu a krempa je zahnutá či
                  srolovaná nahoru. Vyobrazení takového klobouku nacházím jak
                  např. v<i> Krumlovském sborníku</i> (1420) tak i o 70 let
                  později v<i> Jenském kodexu</i> (1490 - 1510), a archeologicky
                  potvrzené nálezem z Irska. Dýnko mohlo být i zploštělé,
                  kónicky tvarované nebo kuželovité. Rovněž krempa mohla být
                  různě tvarovaná: rovná a kulatá, jako u současných klobouků,
                  srolovaná, jak bylo řečeno výše, zahnutá nahoru s jedním nebo
                  více prostřihy, popřípadě úplně chyběla. Na rozdíl od kápí se
                  zdá, že klobouky byly často podšité jinou látkou, či
                  kožešinou.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Klobouk s kulatým dýnkem a srolovanou krempou</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 image-wrapper">
                <a href="/images/klobouk-irsko.jpg" target="_blank">
                  <Image
                    src="/images/klobouk-irsko.jpg"
                    width={564}
                    height={423}
                  />
                </a>
                <br />
                Nález klobouku z Irska datovaný do 14. - 15. století.
              </div>
              <div className="col-md-2 image-wrapper">
                <a
                  href="/images/klobouk-krumlovsky-sbornik.jpg"
                  target="_blank"
                >
                  <Image
                    src="/images/klobouk-krumlovsky-sbornik.jpg"
                    width={338}
                    height={438}
                  />
                </a>
                <br />
                Klobouk s kulatým dýnkem a srolovanou krempou v Krumlovském
                sborníku, kolem rolu 1420.
              </div>
              <div className="col-md-2 image-wrapper">
                <a href="/images/Jensky_kodex_Zizka.jpg" target="_blank">
                  <Image
                    src="/images/Jensky_kodex_Zizka.jpg"
                    width={640}
                    height={920}
                  />
                </a>
                Klobouk s kulatým dýnkem a srolovanou krempou na hlavě Jana
                Žižky, Jenský kodex 1490 - 1510.
              </div>
              <div className="col-md-2 image-wrapper">
                <a href="/images/klobouk-richental.jpg" target="_blank">
                  <Image
                    src="/images/klobouk-richental.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Klobouk s kulatým dýnkem a srolovanou krempou. Výřez z
                Richentalovy kroniky (1470-1480).
              </div>
              <div className="col-md-2 image-wrapper">
                <a href="/images/vaclav-z-jihlavy.jpg" target="_blank">
                  <Image
                    src="/images/vaclav-z-jihlavy.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Klobouk s kulatým dýnkem a srolovanou krempou, podšitý
                kožešinou. Výřez z Brněnské právní knihy Václava z Jihlavy
                (1446).
              </div>
              <div className="col-md-2 image-wrapper">
                <a href="/images/Zasedani.jpg" target="_blank">
                  <Image src="/images/Zasedani.jpg" width={399} height={356} />
                </a>
                <br />
                Zasedání městské rady vyobrazené v inicále z Brněnské právní
                knihy Václava z Jihlavy (1446). Na hlavách konšelů můžeme vidět
                klobouky jak s kulatými, tak s rovnými dýnky, podšité kožešinou.
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Klobouk s nahoru ohnutou krempou bez průstřihu</h4>
                <p>
                  Většina těchto klobouků má v ikonografii rovné dýnko, ovšem
                  lze narazit i na výjimky, jako je ta v Jenském kodexu, viz
                  obrázek níže.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 image-wrapper">
                <a href="/images/rovny-klobouk-richental2.jpg" target="_blank">
                  <Image
                    src="/images/rovny-klobouk-richental2.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Klobouk s rovným dýnkem a nahoru ohnutou krempou bez průstřihu,
                výřez z Richentalovy kroniky (1470-1480)
              </div>
              <div className="col-md-3 image-wrapper">
                <a
                  href="/images/rovny-klobouk-jensky-kodex.jpg"
                  target="_blank"
                >
                  <Image
                    src="/images/rovny-klobouk-jensky-kodex.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Klobouk s kulatým dýnkem a nahoru ohnutou krempou bez průstřihu,
                výřez z Jenského kodexu (1490-1510)
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/rovny-klobouk-richental.jpg" target="_blank">
                  <Image
                    src="/images/rovny-klobouk-richental.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Klobouky s rovným dýnkem a nahoru ohnutou krempou bez průstřihu,
                podšité kožešinou, výřez z Richentalovy kroniky (1470-1480)
              </div>
              <div className="col-md-3 image-wrapper">
                <a
                  href="/images/rovny-klobouk-jensky-kodex3.jpg"
                  target="_blank"
                >
                  <Image
                    src="/images/rovny-klobouk-jensky-kodex3.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Klobouk s rovným dýnkem a nahoru ohnutou krempou, podšitý
                kožešinou, výřez z Jenského kodexu (1490-1510)
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Klobouk s nahoru ohnutou krempou s průstřihy</h4>
                <p>
                  Za povšimnutí stojí, že i když má klobouk pouze jeden
                  průstřich, tento průstřih není nikdy uprostřed čela, ale spíše
                  po straně hlavy.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 image-wrapper">
                <a
                  href="/images/rovny-klobouk-jensky-kodex2.jpg"
                  target="_blank"
                >
                  <Image
                    src="/images/rovny-klobouk-jensky-kodex2.jpg"
                    width={240}
                    height={319}
                  />
                </a>
                <br />
                Klobouky podšité kožešinou s nahoru ohnutou krempou s jedním
                průstřihem na výřezu z Jenského kodexu (1490-1510).
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/klobouk-2-jensky.jpg" target="_blank">
                  <Image
                    src="/images/klobouk-2-jensky.jpg"
                    width={239}
                    height={320}
                  />
                </a>
                <br />
                Klobouk s nahoru ohnutou krempou se dvěma průstřihy na výřezu z
                Jenského kodexu (1490-1510).
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/klobouk-2-richental.jpg" target="_blank">
                  <Image
                    src="/images/klobouk-2-richental.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Klobouk s nahoru ohnutou krempou se dvěma průstřihy na výřezu z
                Richentalovy kroniky (1470-1480).
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/klobouk-3-richental.jpg" target="_blank">
                  <Image
                    src="/images/klobouk-3-richental.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Klobouk s nahoru ohnutou krempou s více průstřihy na výřezu z
                Richentalovy kroniky (1470-1480).
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Další typy klobouků</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 image-wrapper">
                <a href="/images/klobouk-a-rt.jpg" target="_blank">
                  <Image
                    src="/images/klobouk-a-rt.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Klobouk s mírně dolů ohnutou krempou, klenotem a ozdobou z per
                na výřezu z Richentalovy kroniky (1470-1480).
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/klobouk-b-jk.jpg" target="_blank">
                  <Image
                    src="/images/klobouk-b-jk.jpg"
                    width={360}
                    height={480}
                  />
                </a>
                <br />
                Klobouk s mírně nahoru ohnutou krempou na výřezu z Jenského
                kodexu (1490-1510).
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/klobouk-bez-dynka-jk.jpg" target="_blank">
                  <Image
                    src="/images/klobouk-bez-dynka-jk.jpg"
                    width={360}
                    height={480}
                  />
                </a>
                <br />
                Klobouk bez krempy na výřezu z Jenského kodexu (1490-1510).
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/klobouk-c-rt.jpg" target="_blank">
                  <Image
                    src="/images/klobouk-c-rt.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Klobouk s rovným dýnkem a nahoru ohnutou zadní částí krempy,
                zdobený stuhou. Výřez z Richentalovy kroniky (1470-1480)
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 image-wrapper">
                <a href="/images/klobouk-d-rt.jpg" target="_blank">
                  <Image
                    src="/images/klobouk-d-rt.jpg"
                    width={239}
                    height={320}
                  />
                </a>
                <br />
                Klobouk s rovným dýnkem a nahoru ohnutou přední částí krempy,
                která je ve své pozici udržována stuhou. Takové klobouky se
                velmi často objevují na vyobrazeních sv. Jakuba, kdy jsou ještě
                navíc zdobené Hřebenatkou svatojakubskou. Výřez z Richentalovy
                kroniky (1470-1480).
              </div>
              <div className="col-md-4 image-wrapper">
                <a href="/images/klobouk-e-opk.jpg" target="_blank">
                  <Image
                    src="/images/klobouk-e-opk.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Klobouk s rovným dýnkem a rovnou krempou na výřezu z Památné
                knihy Olomoucké (1430).
              </div>
              <div className="col-md-4 image-wrapper">
                <a href="/images/klobouk-f-rt.jpg" target="_blank">
                  <Image
                    src="/images/klobouk-f-rt.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Klobouk na výřezu Richentalovy kroniky (1470-1480).
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h3>Barety</h3>
                <p>
                  Jednou z nejčastějších pokrývek hlavy je baret, který tvořil
                  přibližně čtvrtinu všech pokrývek hlavy.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 image-wrapper">
                <a href="/images/baret-zaton.jpg" target="_blank">
                  <Image
                    src="/images/baret-zaton.jpg"
                    width={1440}
                    height={1920}
                  />
                </a>
                <br />
                Muž s červeným baretem na výřezu z oltáře ze Zátoně (po roce
                1440).
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/kape-jensky-kodex.jpg" target="_blank">
                  <Image
                    src="/images/kape-jensky-kodex.jpg"
                    width={240}
                    height={320}
                  />
                </a>
                <br />
                Muž s červeným baretem na výřezu z Jenského kodexu (1490-1510).
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/baret-jk.jpg" target="_blank">
                  <Image src="/images/baret-jk.jpg" width={480} height={640} />
                </a>
                <br />
                Obchodník v baretu na výřezu z Jenského kodexu (1490-1510).
              </div>
              <div className="col-md-3 image-wrapper">
                <a href="/images/baret-rt.jpg" target="_blank">
                  <Image src="/images/baret-rt.jpg" width={481} height={640} />
                </a>
                <br />
                Dva muži s barety na výřezu z Richentalovy kroniky (1470-1480)
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
