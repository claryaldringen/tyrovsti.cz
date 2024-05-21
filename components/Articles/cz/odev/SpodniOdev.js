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
        <h4>Košile</h4>
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
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="spodky-dlouhe.jpg"
        width={556}
        height={784}
        title="Spodky ještě s krátkými nohavičkami, Brněnská právní kniha Václava z Jihlavy, 1446."
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
        title="Na obraze sv. Rocha z roku 1480 italské provenience je vidět, že spodky slipového střihu byly prakticky stejné v celé tehdejší Evropě."
        href="svroch.jpeg"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Spodní prádlo bylo většinou bílé či v přírodní barvě materiálu, ale
          pokud již máme doložené barevné spodní prádlo, z nějakého důvodu se
          jedná o modré. Pro košile tak máme doloženo jak písemně ze Starých
          letopisů českých, kde se uvádí, že v bitvě na Vyšehradě{' '}
          <i>
            &bdquo;čeští a moravští páni byli zbiti a všeho odění a rúcha až do
            modré košile obnaženi&ldquo;
          </i>
          , tak ikonograficky v miniaturách Života sv. Františka z roku 1500.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:71b15f30-fe2a-11e6-97b4-5ef3fc9ae867"
          />
          Modré spodky jsou pak doloženy ikonograficky např. v Jenském kodexu
          (1490 - 1510).
        </p>
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
