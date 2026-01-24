import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const SpodniOdev = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="spodni-odev" />
        <h3>Spodní oděv</h3>
        <p>
          Spodní prádlo plnilo několik funkcí. Vzhledem k tomu, že se k
          zhotovení svrchního oděvu užívaly v převážné většině vlněné materiály,
          zabraňovalo bezprostřednímu odírání vlny o holou kůži, které by jinak
          vedlo k jejímu podráždění. Svrchní oděvy se také velice obtížně
          čistily, protože se ve středověku používalo mechanických prostředků k
          praní, které látku poškozovaly. Proto se také oděvy nemohly čistit
          příliš často. Praní spodního prádla, které se zhotovovalo převážně ze
          lnu, nebylo tolik obtížné. Absorbovalo pot, a pokud došlo k jeho
          znečištění, nebyly náklady na zhotovení dalšího kusu oděvu, který
          sloužil na převlečení, tolik nákladné, jako by tomu bylo u oděvu
          zhotoveného z vlny.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Mužská košile</h4>
        <p>
          Košile, <i>rubáš</i> či <i>rubáč</i>, byla základním kusem mužského
          spodního prádla. Košile byly jednoduchého střihu, připomínajícího
          literu T a dosahovaly obvykle do oblasti kolen. Ramenní vsadky se v
          této době ještě zhotovovaly bez plisování. Košile mohla mít jednoduchý
          oválný výstřih, rozhalení na hrudi do tvaru V nebo rozparek po celé
          délce.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
        <p>
          Zdá se, že rozdíl mezi košilí a rubášem spočíval zejména v délce, když
          v jednom dědictví litomyšlském z roku 1510 se odkazují{' '}
          <Cit>košile tři a rubáč dlouhý</Cit>.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:72e460f0-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Tím by se rubáš řadil spíše, nikoliv však výhradně, do ženského
          šatníku. To by naznačovaly i další testamenty litomyšlských měšťanek:
          Rychtářka Tisovská má roku 1497 dva rubáče lněné, Marta, sestra
          purkrabové, odkazuje roku 1499{' '}
          <i>
            &bdquo;Mandě písařce dva rubáče, jeden žemniový a druhý lněný&ldquo;
          </i>
          .
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:724e6280-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Kateřina, měšťanska z Nového Města pražského, odkazuje roku 1483{' '}
          <Cit>tři rubáše sváteční a tři košile všední</Cit>.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:7212e020-fe2a-11e6-97b4-5ef3fc9ae867"
          />
        </p>
        <p>
          Spodní prádlo bylo většinou bílé či v přírodní barvě materiálu, ale
          pokud již máme doložené barevné spodní prádlo, z nějakého důvodu se
          nejčastěji jedná o modré. Pro košile tak máme doloženo jak písemně ze
          Starých letopisů českých, kde se uvádí, že v bitvě na Vyšehradě{' '}
          <i>
            &bdquo;čeští a moravští páni byli zbiti a všeho odění a rúcha až do
            modré košile obnaženi&ldquo;
          </i>
          , tak ikonograficky v miniaturách Života sv. Františka z roku 1500.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:71b15f30-fe2a-11e6-97b4-5ef3fc9ae867"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="kosile_rajhrad.jpg"
        width={300}
        height={400}
        title="Košile pod kolena s výřezen do V na výřezu z deskového obrazu
        Nesení kříže na Rajhradském oltáři, kolem 1440"
      />
      <ImageWithTitle
        md={4}
        src="kosile_nove_sady.jpg"
        width={300}
        height={400}
        title="Košile ke kolenům s rozparkem po celé délce a krátké rúšce slipového střihu na výřezu deskového obrazu
        Ukřižování z Nových Sadů na Rajhradském oltáři, kolem 1440"
      />
      <ImageWithTitle
        md={4}
        src="kosile_jk.jpg"
        width={640}
        height={480}
        title="Lazar v košili s rozparkem po celé délce na výřezu z Jenského kodexu
        (1490-1510)"
      />
    </Row>
    <Row>
      <Col>
        <h5>Rekonstrukce</h5>
        <p>
          K rekonstrukci jsme vybrali košile z deskového obrazu Ukřižování z
          Nových Sadů na Rajhradském oltáři. Jednu jsme ponechali s rozparkem
          tak, jak je na předloze, druhou jsme zrekonstruovali bez rozparku. Obě
          košile jsou ručně šité z jemného lněného plátna. Rekonstrukci provedla
          Daria Litvinova.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="shirt/kosile1.jpeg"
        width={2048}
        height={1536}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile2.jpeg"
        width={2048}
        height={1536}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile3.jpeg"
        width={2048}
        height={1536}
        title=""
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="shirt/kosile4.jpeg"
        width={2048}
        height={1536}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile5.jpeg"
        width={2048}
        height={1536}
        title=""
      />
      <ImageWithTitle
        src="shirt/kosile7.jpeg"
        width={2048}
        height={1536}
        title=""
      />
    </Row>
    <Row>
      <Col>
        <h4>Ženská košilka</h4>
        <p>
          Ve srovnání s mužskými kusy spodního oděvu je dokladů o jeho podobě u
          žen podstatně méně. Ženy nosily pod svrchní šaty jednoduché dlouhé
          košilky na ramínka. Setkáváme se s nimi nejčastěji na iluminacích
          zobrazujících lazebnice, které je dokonce nosily jako pracovní oděv a
          vyobrazeny v nich jsou také pracující ženy. Dále je nalezneme také na
          intimních scénách zobrazujících interiéry ložnice. Jeden z nejstarších
          archeologických nálezů ženské košilky je ze 14. století z hradu Ranis
          v Německu.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
          Tato košilka je ušita ze dvou dílů, předního a zadního. Dalším typem
          je košilka, která se skládá ze tří dílů. První dva tvoří v podstatě
          přední a zadní díl živůtku, třetí je na ně v pase vsazen tak, že tvoří
          skládanou sukni. Na boku pak míval tento typ košilky šněrování pro
          lepší vypasování,
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> později mohl být střih
          živůtku rozšířen o košíčky na prsa, jak je patrné ze 4 nálezů z hradu
          Lengberg ve východním Tyrolsku, jež jsou datovány do 80. let 15.
          století.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="lazebnice.jpg"
        width={764}
        height={1200}
        title="Lazebnice v košilkách, Jenský kodex, 1490 - 1510."
      />
      <ImageWithTitle
        md={4}
        src="Die_Hefneryn.jpg"
        width={327}
        height={460}
        title="Česká hrnčířka v košilce při práci, hrací karta z karetní sady Hofämterspiel, kterou si bojednal Ladislav Pohrobek. 50. léta 15. století."
      />
      <ImageWithTitle
        md={4}
        src="lengbergshirt.jpg"
        width={564}
        height={743}
        title="Nález košilky z hradu Lengberg ve východním Tyrolsku s košíčky na prsa. 70. až 80. léta 15. století"
      />
    </Row>
    <Row>
      <Col>
        <h4>Spodky</h4>
        <p>
          Druhým základním dílem mužského spodního oděvu byly pánské spodky,
          dnes spíše známé pod archaičtějším a všeobecně více užívaným názvem{' '}
          <i>hace</i>, které se před ztrátou jotace ve 14. století vyslovovaly{' '}
          <i>hácě</i> a můžeme je najít v zápisech i jako <i>hacze</i>,
          staročesky <i>rúšce</i>, latinsky <i>bragas</i> či <i>bracca</i>. Ve
          starší době dosahovaly až do oblasti kolen, případně pod ně. Tyto
          střihově delší hace postupně mizí a po polovině 15. století se s nimi
          již nesetkáváme.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
        <p>
          Později byly spodky v písemných pramenech uváděny spíše v novém
          latinském novotvaru jako <i>femoralia</i>, doslovně překládaném jako{' '}
          <i>nábedrnie</i>. Takto je také nazývá Vavřinec z Březové ve své
          kronice, při popisu bitvy pod Vyšehradem. Po ní měli být padlí rytíři
          vysvléknuti ze zbroje, až byli obnaženi pouze ve spodkách:{' '}
          <Cit>
            ... baronibus et militibus sunt velut porci crudeliter interempti et
            statim omnibus armis et vestibus usque femoralia denudaci.
          </Cit>
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
        <p>
          Na zhotovení spodků se užívalo tenkého lněného plátna, jak dokládá
          Bible kladrubská z roku 1471:{' '}
          <Cit>
            Učiníš i rúčce lněné, aby přikryly mrzkosti tvé od ledví až po bedr.
          </Cit>
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />U nejjednodušších z nich
          se střihově jednalo o více či méně tvarovaný pruh látky, který
          procházel mezi nohama a na bocích byl přidržován šňůrkou, která se na
          jednom či na obou bocích svazovala. Takové známe kromě nejrůznějších
          dobových vyobrazení i z archeologických nálezů na hradě Lengberg ve
          východním Tyrolsku. Další variantou mohl být střih, kde šňůrku na
          bocích nahrazoval tunýlek se šňůrkou, jejíž konce byly vyvedeny
          vpředu. Po stažení a zavázání se v přední části spodků vytvořila
          jakási kapsa na genitál. I když starší hace (s nohavičkami) nalézáme
          ve vyobrazeních pouze bílé, u spodků slipového střihu můžeme nalézt i
          modrá či dokonce černá vyobrazení.
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 26" />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="spodky-dlouhe.jpg"
        width={556}
        height={784}
        title="Hace (ještě s krátkými nohavičkami), Brněnská právní kniha Václava z Jihlavy, 1446."
      />
      <ImageWithTitle
        md={6}
        src="krteni.jpg"
        width={1038}
        height={894}
        title="Scéna křtění, kde na sobě mají postavy modré spodky slipového střihu. Jenský kodex (1490-1510)."
      />
      <ImageWithTitle
        src="svroch-detail.jpg"
        width={489}
        height={488}
        title="Na obraze sv. Rocha z roku 1480 italské provenience je vidět, že spodky slipového střihu byly prakticky stejné v celé tehdejší Evropě. V tomto případě se jedná o druhý typ s tkanicí zavazovanou uprostřed."
        href="svroch.jpeg"
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={6}
        src="lengberg_underpants.gif"
        width={709}
        height={543}
        title="Spodky z hradu Lengberg ve východním Tyrolsku, které jsou datovány do 80. let 15. století."
      />
      <ImageWithTitle
        md={6}
        src="boj_o_kalhoty.jpg"
        width={1920}
        height={1375}
        title={
          <>
            Různé typy spodků na rytině <Cit>Boj o kalhoty</Cit> od Monogramisty
            E.S., Německo, 1440 - 1467
          </>
        }
      />
    </Row>
    <Row>
      <Col>
        <p>
          Zatímco u muže v 15. století se považovalo za hrubou urážku měl-li{' '}
          <Cit>bez hacz choditi</Cit>
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 27" />, o tom, zda
          spodky (<i>femoralia</i>) nosily i ženy, panuje v současnosti živá
          diskuze, kterou rozpoutal zmiňovaný nález textilií na hradě Lengberg.
          Není totiž možné zcela jasně prokázat, že výše zmíněné a zobrazené
          spodky patřily muži nebo ženě. Zajímavý je však fakt, že je máme pro
          české prostředí názvově doloženy k roku 1455 v{' '}
          <i>Klementinském slovníku</i>, a to jako jejich ženskou variantu{' '}
          <i>feminale</i>.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA2} note="Str. 69" />
          Pro italské prostředí máme spodky u žen bezpečně doložené k přelomu
          16. a 17. století.
          <Qt publication={PUBLICATIONS.PILNA} note="Str. 28" />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Spodky i košile byly považovány za intimní oděv, který se neslušelo
          ukazovat na veřejnosti. K postupnému odhalování košile začalo docházet
          ve druhé polovině 15. století v souvislosti s pronikáním renesanční
          módy přes Německo, ale například ještě v mravokárném Jenském kodexu
          jsou části košile viditelné pouze u postav nějakým způsobem
          neřestných.
        </p>
      </Col>
    </Row>
  </>
)
