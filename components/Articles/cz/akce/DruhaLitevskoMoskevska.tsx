import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const DruhaLitevskoMoskevska = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="druha-litevsko-moskevska" />
        <h4>
          Druhá litevsko-moskevská válka o Severii (1500–1503)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Druhá litevsko-moskevská válka v letech 1500–1503 byla pokračováním
          mocenského zápasu mezi Velkoknížectvím litevským a Moskvou Ivana III.
          Vasiljeviče o ruské země podél Desny a horního Dněpru — především o
          tzv. Severskou zemi (<i>Sieviersčina</i>). Klíčovou událostí konfliktu
          se stala drtivá moskevská porážka litevského polního vojska v{' '}
          <b>bitvě na Vedroši 14. července 1500</b>, jež předznamenala ztrátu
          rozsáhlých území a stala se výchozím bodem pro dlouhou sérii dalších
          válek mezi oběma mocnostmi.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_litewsko-moskiewska_(1500%E2%80%931503)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Mír z roku 1494 nepřinesl skutečné urovnání. Ivan III. systematicky
          podněcoval pravoslavnou opozici v litevském velkoknížectví a využíval
          postavení své dcery <b>Heleny Ivanovny</b>, manželky velkoknížete{' '}
          <b>Alexandra Jagellonského</b>, k politickému nátlaku. Na jaře 1500
          přešla na moskevskou stranu řada severských knížat — především{' '}
          <b>Vasilij Šemjačič</b> z rodu Šemjak Novgorodsko-Severských a{' '}
          <b>Semjon Ivanovič Možajský</b> — se svými rozsáhlými panstvími. Litva
          byla nucena přijmout válku v okamžiku, kdy zároveň čelila tlaku
          Krymského chanátu Mengli I. Giraje, který byl smluvním spojencem
          Moskvy.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Muscovite%E2%80%93Lithuanian_Wars"
          />
        </p>
        <p>
          V květnu 1500 vyhlásil Ivan III. válku oficiálně. Jeho strategie
          spočívala v rychlém obsazení Severské země a v útoku na Smolensk z
          východu i z jihovýchodu. Litevské velkoknížectví reagovalo mobilizací
          — vrchním velitelem polního vojska byl jmenován velký litevský hejtman{' '}
          <b>Konstantin Ivanovič Ostrožský</b>, jenž shromáždil litevskou
          jezdeckou hotovost a doplnil ji menšími žoldnéřskými oddíly najatými v
          Polsku, ve Slezsku a v českých zemích.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Russisch-Litauische_Kriege"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Průběh</h5>
        <p>
          Moskevské vojsko pod knížetem <b>Daniilem Ščeňou</b> postupovalo na
          západ od Brjanska a obsadilo na jaře 1500 Putyvl, Novgorod-Severský,
          Rylsk, Mceńsk i Brjansk. Litevská protiofenziva pod Ostrožským se
          vydala k řece Vedroši (přítok Trobňy poblíž Dorogobuže), kde se{' '}
          <b>14. července 1500</b> odehrála rozhodující polní bitva. Ostrožského
          vojsko (odhadem 3 500–4 000 mužů) bylo přečísleno moskevskými silami
          knížete Ščeni (10 000–12 000 mužů); litevské vojsko bylo z velké části
          obklíčeno, rozdrceno a sám Ostrožský padl do moskevského zajetí —
          propuštěn byl až roku 1507, kdy z Moskvy uprchl a převzal velení nad
          litevskými vojsky pro další konflikty.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_litewsko-moskiewska_(1500%E2%80%931503)"
          />
        </p>
        <p>
          Po Vedroši se moskevský postup rozšířil i na sever a na jih. V srpnu
          1500 byl po krátkém obléhání obsazen Putyvl, v listopadu téhož roku
          padla pevnost Mceńsk. Litvě se podařilo uhájit pouze klíčový Smolensk
          — třikrát neúspěšně obléhaný v letech 1502–1503. Spojenec Litvy{' '}
          <b>velmistr livonského řádu Walter von Plettenberg</b> provedl odvetné
          akce do Pskovska a v <b>bitvě u Smoliny 13. září 1502</b> přivodil
          Moskvě těžkou porážku, ale celkový průběh války tím obrátit nedokázal.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Muscovite%E2%80%93Lithuanian_Wars"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Výsledek</h5>
        <p>
          V roce <b>1503</b> bylo uzavřeno šestileté příměří v Moskvě (
          <i>Blagověščenský mír</i>), jež potvrdilo územní status quo: Moskva
          získala přibližně třetinu litevského území — celou Severskou zemi
          (Černigov, Novgorod-Severský, Putyvl, Rylsk, Brjansk, Starodub) a dále
          Mceńsk, Ljubutsk, Toropec, Drohobuž a další pevnosti. Celkem šlo o asi
          70 měst a vesnic. Litva ztratila 19 z 96 svých polních oddílů a
          hospodářsky cenné východní oblasti. Pro Moskvu šlo o největší územní
          zisky 15.–16. století na úkor Litvy a o klíčový krok ke konsolidaci
          moci pod titulem „velkokníže veškeré Rusi&ldquo;.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Russisch-Litauische_Kriege"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Primární prameny / Pohled starších kronik</h5>
        <p>
          Pro bitvu na Vedroši <b>14. července 1500</b> je klíčovým pramenem{' '}
          <i>Kronika polská, litewská, żmudzka a všeho Rusi</i> Macieje
          Stryjkowského (Königsberg 1582, kn. XXIII). Stryjkowski sám pobýval na
          litevském dvoře, čerpal z dnes ztracených knížecích archivů a podává
          nejpodrobnější popis Ostrožského pochodu, moskevské obkličovací
          manévry knížete Ščeni i Ostrožského zajetí. Polský pohled doplňuje{' '}
          <i>De origine et rebus gestis Polonorum</i> Marcina Kromera (lib.
          XXX), který klade důraz na polskou diplomacii a na neúspěch Smolenska
          během obléhání 1502–1503.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://polona.pl/item/kronika-polska-litewska-zmodzka-i-wszystkiej-rusi,NzkzNTk3MTM/"
          />
          <Qt
            publication={PUBLICATIONS.KROMER}
            href="https://www.bsb-muenchen-digital.de/~web/web1008/bsb10080831/images/index.html"
          />
        </p>
        <p>
          Litevsko-běloruský pohled se opírá o <i>Bychowiecovu kroniku</i> (vyd.
          v <i>Polnoye Sobranie Russkikh Letopisey</i>, sv. 32), jež dochovává
          neutrální výčet ztracených pevností a uvádí jména severských knížat,
          která přešla na moskevskou stranu — Vasilije Šemjačiče, Semjona
          Možajského a Trubeckých. Moskevskou stranu zachycuje{' '}
          <i>Voskresenský letopis</i> a kratičké letopisné zápisy razrjadných
          knih z let 1500–1503.
          <Qt
            publication={PUBLICATIONS.BYCHOWIEC}
            href="https://en.wikipedia.org/wiki/Bychowiec_Chronicle"
          />
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Rus%27_chronicles"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Druhá litevsko-moskevská válka znamenala počátek systematického
          najímání pěších žoldnéřů ve střední Evropě pro jagellonské služby. V
          Ostrožského polním vojsku u Vedroši roku 1500 byly přítomny menší
          oddíly polských, slezských a moravských pěšáků — historiografie
          dovozuje jejich účast z výplatních listin polské královské pokladny a
          z nepřímých zmínek u soudobých kronikářů. Nasazení těchto rot však
          nebylo dostatečné k vyrovnání moskevské přesily a porážka u Vedroše v
          zásadě podtrhla potřebu profesionalizace litevského vojska, jež se
          rozvinula až za Zikmunda I. Starého a vyvrcholila vítězstvím u Orši
          1514.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_litewsko-moskiewska_(1500%E2%80%931503)"
          />
        </p>
        <p>
          Konstantin Ivanovič Ostrožský strávil sedm let v moskevském zajetí
          (1500–1507) a po útěku se stal architektem reformy litevského vojska,
          jež masivně přijímala české a moravské žoldnéře s píkami a
          hákovnicemi. Veteráni, kteří přežili Vedroš a vykoupili se ze zajetí,
          jsou doloženi v dalších litevských taženích — někteří dokonce až u
          Orši roku 1514, kde se osobně účastnili odvety za porážku z roku 1500.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Muscovite%E2%80%93Lithuanian_Wars"
          />
        </p>
      </Col>
    </Row>
  </>
)
