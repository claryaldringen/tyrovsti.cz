import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle/ImageWithTitle'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'

export const PokryvkyHlavy = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="pokryvky-hlavy" />
        <h3>Pokrývky hlavy</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Kápě</h4>
        <p>
          <i>Kápě</i>,&nbsp;<i>kapicě</i>,&nbsp;<i>kapicze</i> pochází stejně
          jako<i> čepice</i> ze středolatinského slova
          <i> capa</i>,<i> cappa</i>. Nazývala se také<i> kukla</i> či
          <i> kuklička</i>, což vzniklo z latinského<i> cucalla</i> a v
          písemných pramenech je dále označována jako<i> capucium</i>,
          <i> chuchla</i>,<i> cucala</i>,<i> capye</i>. Kápě mohla být nošena
          různými způsoby - standardně na ramenou a pak mohla být doplněna ještě
          kloboukem nebo přilbou, či byla nasazena ohrnutým obličejovým otvorem
          na hlavě jako čepice. Pro pohusitské Čechy můžeme vysledovat tři
          hlavní typy typy kápí: S cípem, bez cípu a kápi se střapci, která byla
          populární také v Německých zemích.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kápě s cípem</h5>
        <p>
          Tyto kápě byly v oblibě především před Husitskými válkami, jak je
          možné vidět v<i> Gelnhausenově kodexu</i> (1400 - 1408) nebo
          <i> Bibli olomoucké</i> (1417). Vzhledem k tomu, že delší cíp
          rozeznáváme především u luxusně oděných jedinců, mohl reprezentovat
          dobré postavení svého majitele. Tomu by i odpovídala zaznamenaná
          událost v kronice Vavřince z Březové, kdy táborité stříhali dlouhé
          cípy kápí pražským řemeslníkům a měšťanům, které tak symbolizovaly
          nestřídmost a přepych, které odsuzovali.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> Rovněž v{' '}
          <i>Jenském kodexu</i> (1490 - 1510) je zobrazen kněz v honosné šubě,
          mnoha prsteny a botách s dlouhými špicemi, který má kápi s dlouhým
          masivním cípem.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="knez.jpg"
        width={832}
        height={1270}
        title="Kněz v kápi s masivním cípem. Výřez z Jenského
        kodexu (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="kape-cip-jk.jpg"
        width={240}
        height={320}
        title="Kápě s cípem nasazená na hlavu otvorem pro obličej. Výřez z Jenského
        kodexu (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="kape-s-cipem-rt.jpg"
        width={360}
        height={480}
        title="Kápě s cípem přehozená přes rameno. Výřez z Richentalovy kroniky
        (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Kápě bez cípu</h5>
        <p>
          Jednoduchá kápě bez cípu byla nejrozšířenějším typem kápě v
          pohusitských Čechách. Bylo možno ji nosit pod přílbu nebo spolu s
          kloboukem. Jednu takovou{' '}
          <Cit>kuklu modrou, kterou míval do vojny</Cit> po sobě zanechal
          Zikmund Jirconis z Poříče roku 1455.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:68f3aba0-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Vyobrazení těchto kápí máme velmi mnoho ať už z českých či německých
          pramenů.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="Jensky_kodex_Zizka.jpg"
        width={640}
        height={921}
        title="Jednoduché kápě můžeme vidět na Janu Žižkovi v čele vojska a
        praporečníkovi ve vyobrazení z Jenského kodexu. Jan Žižka má kápi
        doplněnou kloboukem."
      />
      <ImageWithTitle
        md={3}
        src="kape-rt.jpg"
        width={240}
        height={320}
        title="Jednoduchá kápě nasazená obličejovým otvorem na hlavu ve výřezu z
        Richentalovy kroniky (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="zasedani1.jpg"
        width={480}
        height={640}
        title="Jednoduché černé kápě nasazená obličejovým otvorem na hlavu mají jeden z
        konšelů a písař ve výřezu z Památné knihy Olomoucké (1430-1492)."
      />
      <ImageWithTitle
        md={3}
        src="richenthal1.jpg"
        width={480}
        height={641}
        title="Dva z ozbrojenců vedoucích Jana Husa na hranici mají pod plechovými
        klobouky kápě bez cípu. Voják vpředu má kápi zcela maličkou, voják vzadu
        naopak s ozdobným vykrajováním. Výřez z Richentalovy kroniky
        (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Kápě se střapci</h5>
        <p>
          Byla oblíbena v německých zemích, včetně tehdejších Čech. Rovněž se
          mohla nosit pod přílbu, jak ukazují kresby a malby slavného malíře
          Albrechta Dürera (1471 - 1528). Na krku mohla být spínací na knoflíky
          aby měla více anatomický tvar. Rovněž její střapce mohly být ozdobně
          vykrajované, jak je vidět např. na portrétu kutnohorského mincmistra
          Hanse Harsdorffera z roku 1484. Není bez zajímavosti, že Albrecht
          Dürer a Hans Harsdorffer byli přátelé.
          <Qt publication={PUBLICATIONS.PATALA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="kape2-jensky-kodex.jpg"
        width={240}
        height={320}
        title="Kápě se střapci, kterou na sobě má lehkooděný jezdec. Na německých
        vyobrazeních lehkých jezdců se s těmito kápěmi lze setkat často. Výřez z
        Jenského kodexu (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        title="Luxusní kápě s knoflíky a ozdobně prořezávanými střapci, nasazena
        obličejovou částí. Portrét Hanse Harsdorffera, Norimberk, 1484."
        src="hans-harsdorffer.jpg"
        width={800}
        height={986}
      />
      <ImageWithTitle
        md={3}
        title="Kápě se střapci nasazená obličejovou částí na hlavu na autoportrétu
        Albrechta Dürera z roku 1498."
        src="durer.jpg"
        width={1920}
        height={2424}
      />
      <ImageWithTitle
        md={3}
        title="Svatý Eustach má kolem krku ozdobnou kápi se střapci. Výřez z
        Paumgartnerova oltáře, 1500."
        src="oltar.jpg"
        width={240}
        height={320}
      />
    </Row>
    <Row>
      <Col>
        <h4>Klobouk</h4>
        <p>
          <i>Klobúk</i>,<i> klouček</i>,<i> koblúček</i>,<i> kobek</i>,
          <i> kobek</i>,<i> klouček</i>,<i> koláče</i>. Označoval kromě pokrývky
          hlavy také přilbu. Nejrozšířenějším tvarem byl ten, kdy dýnko
          přirozeně kopíruje hlavu a krempa je zahnutá či srolovaná nahoru.
          Vyobrazení takového klobouku nacházíme jak např. v
          <i> Krumlovském sborníku</i> (1420)
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> tak i o 70 let později v
          <i> Jenském kodexu</i> (1490 - 1510), a archeologicky potvrzené
          nálezem z Irska.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> Dýnko mohlo být i
          zploštělé, kónicky tvarované nebo kuželovité. Rovněž krempa mohla být
          různě tvarovaná: rovná a kulatá, jako u současných klobouků,
          srolovaná, jak bylo řečeno výše, zahnutá nahoru s jedním nebo více
          prostřihy, popřípadě úplně chyběla. Na rozdíl od kápí se zdá, že
          klobouky byly často podšité jinou látkou, či kožešinou.
        </p>
        <p>
          Samostatný kloboučnický cech byl na Novém městě pražském ustaven{' '}
          <b>2. dubna 1446</b>. Z jejich řádu lze vyčíst, že vyráběli klobouky
          bobrové a plstěné.
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=10&bookid=821&page=453"
          />{' '}
          Z potvrzení artikulí kloboučnického cechu na Starém městě z{' '}
          <b>11. srpna 1489</b> lze vyčíst, že kromě bobrových klobouků musel
          mistr umět vyrobit ještě klobouk zaječí s{' '}
          <Cit>obú stranú vlasitý</Cit>, klobouk kadeřavý a kromě klobouků též
          ševcovskou plsť a bot, předpokládám že plstěné na způsob válenek.
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=10&bookid=821&page=488"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Klobouk s kulatým dýnkem a srolovanou krempou</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={2}
        title="Nález klobouku z Irska datovaný do 14. - 15. století."
        src="klobouk-irsko.jpg"
        width={564}
        height={423}
      />
      <ImageWithTitle
        md={2}
        src="klobouk-krumlovsky-sbornik.jpg"
        width={338}
        height={438}
        title="Klobouk s kulatým dýnkem a srolovanou krempou v Krumlovském sborníku,
              kolem rolu 1420."
      />
      <ImageWithTitle
        md={2}
        src="Jensky_kodex_Zizka.jpg"
        width={640}
        height={920}
        title="Klobouk s kulatým dýnkem a srolovanou krempou na hlavě Jana Žižky,
        Jenský kodex(1490-1510)."
      />
      <ImageWithTitle
        md={2}
        title="Klobouk s kulatým dýnkem a srolovanou krempou. Výřez z Richentalovy
        kroniky (1470-1480)."
        src="klobouk-richental.jpg"
        width={240}
        height={320}
      />
      <ImageWithTitle
        md={2}
        title="Klobouk s kulatým dýnkem a srolovanou krempou, podšitý kožešinou. Výřez
        z Brněnské právní knihy Václava z Jihlavy (1446)."
        src="vaclav-z-jihlavy.jpg"
        width={240}
        height={320}
      />

      <ImageWithTitle
        md={2}
        title="Zasedání městské rady vyobrazené v inicále z Brněnské právní knihy
        Václava z Jihlavy (1446). Na hlavách konšelů můžeme vidět klobouky jak s
        kulatými, tak s rovnými dýnky, podšité kožešinou."
        src="Zasedani.jpg"
        width={399}
        height={356}
      />
    </Row>
    <Row>
      <Col>
        <h5>Klobouk s nahoru ohnutou krempou bez průstřihu</h5>
        <p>
          Většina těchto klobouků má v ikonografii rovné dýnko, ovšem lze
          narazit i na výjimky, jako je ta v Jenském kodexu, viz obrázek níže.
        </p>
      </Col>
    </Row>
    <Row className="row">
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-richental2.jpg"
        width={240}
        height={320}
        title="Klobouk s rovným dýnkem a nahoru ohnutou krempou bez průstřihu, výřez z
        Richentalovy kroniky (1470-1480)"
      />
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-jensky-kodex.jpg"
        width={240}
        height={320}
        title="Klobouk s kulatým dýnkem a nahoru ohnutou krempou bez průstřihu, výřez z
        Jenského kodexu (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-richental.jpg"
        width={240}
        height={320}
        title="Klobouky s rovným dýnkem a nahoru ohnutou krempou bez průstřihu, podšité
        kožešinou, výřez z Richentalovy kroniky (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-jensky-kodex3.jpg"
        width={240}
        height={320}
        title="Klobouk s rovným dýnkem a nahoru ohnutou krempou, podšitý kožešinou,
        výřez z Jenského kodexu (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Klobouk s nahoru ohnutou krempou s průstřihy</h5>
        <p>
          Za povšimnutí stojí, že i když má klobouk pouze jeden průstřich, tento
          průstřih není nikdy uprostřed čela, ale spíše po straně hlavy.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-jensky-kodex2.jpg"
        width={240}
        height={319}
        title="Klobouky podšité kožešinou s nahoru ohnutou krempou s jedním průstřihem
        na výřezu z Jenského kodexu (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="klobouk-2-jensky.jpg"
        width={239}
        height={320}
        title="Klobouk s nahoru ohnutou krempou se dvěma průstřihy na výřezu z Jenského
        kodexu (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="klobouk-2-richental.jpg"
        width={240}
        height={320}
        title="Klobouk s nahoru ohnutou krempou se dvěma průstřihy na výřezu z
        Richentalovy kroniky (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="klobouk-3-richental.jpg"
        width={240}
        height={320}
        title="Klobouk s nahoru ohnutou krempou s více průstřihy na výřezu z
        Richentalovy kroniky (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Další typy klobouků</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="klobouk-a-rt.jpg"
        width={240}
        height={320}
        title="Klobouk s mírně dolů ohnutou krempou, klenotem a ozdobou z per na výřezu
        z Richentalovy kroniky (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        title="Klobouk s mírně nahoru ohnutou krempou na výřezu z Jenského kodexu
        (1490-1510)."
        src="klobouk-b-jk.jpg"
        width={360}
        height={480}
      />

      <ImageWithTitle
        md={3}
        src="klobouk-bez-dynka-jk.jpg"
        width={360}
        height={480}
        title="Klobouk bez krempy na výřezu z Jenského kodexu (1490-1510)."
      />

      <ImageWithTitle
        md={3}
        title="Klobouk s rovným dýnkem a nahoru ohnutou zadní částí krempy, zdobený
        stuhou. Výřez z Richentalovy kroniky (1470-1480)."
        src="klobouk-c-rt.jpg"
        width={240}
        height={320}
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        title="Klobouk s rovným dýnkem a nahoru ohnutou přední částí krempy, která je
        ve své pozici udržována stuhou. Takové klobouky se velmi často objevují
        na vyobrazeních sv. Jakuba, kdy jsou ještě navíc zdobené Hřebenatkou
        svatojakubskou. Výřez z Richentalovy kroniky (1470-1480)."
        src="klobouk-d-rt.jpg"
        width={239}
        height={320}
      />
      <ImageWithTitle
        md={4}
        title="Klobouk s rovným dýnkem a rovnou krempou na výřezu z Památné knihy
        Olomoucké (1430)."
        src="klobouk-e-opk.jpg"
        width={240}
        height={320}
      />
      <ImageWithTitle
        md={4}
        title="Klobouk na výřezu Richentalovy kroniky (1470-1480)."
        src="klobouk-f-rt.jpg"
        width={240}
        height={320}
      />
    </Row>
    <Row>
      <Col>
        <h4>Barety</h4>
        <p>
          Jednou z nejčastějších pokrývek hlavy je baret, který tvořil přibližně
          čtvrtinu všech pokrývek hlavy
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> a skrývá se patrně pod
          dobovým názvem <i>čepice</i>.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        title="Muž s červeným baretem na výřezu z oltáře ze Zátoně (po roce 1440)."
        src="baret-zaton.jpg"
        width={1440}
        height={1920}
      />
      <ImageWithTitle
        md={3}
        title="Muž s červeným baretem na výřezu z Jenského kodexu (1490-1510)."
        src="kape-jensky-kodex.jpg"
        width={240}
        height={320}
      />
      <ImageWithTitle
        md={3}
        title="Obchodník v baretu na výřezu z Jenského kodexu (1490-1510)."
        src="baret-jk.jpg"
        width={480}
        height={640}
      />
      <ImageWithTitle
        md={3}
        title="Dva muži s barety na výřezu z Richentalovy kroniky (1470-1480)"
        src="baret-rt.jpg"
        width={481}
        height={640}
      />
    </Row>
  </>
)
