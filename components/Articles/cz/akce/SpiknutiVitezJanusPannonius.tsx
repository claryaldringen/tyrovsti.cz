import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const SpiknutiVitezJanusPannonius = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="spiknuti-vitez-janus-pannonius" />
        <h4>
          Spiknutí Jana Vitéze a Januse Pannonia proti Matyášovi (1471–1472)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Spiknutí ostřihomského arcibiskupa Jana Vitéze ze Sredny (maď.{' '}
          <i>Vitéz János</i>) a&nbsp;pětikostelského biskupa Januse Pannonia
          (maď. <i>Janus Pannonius</i>) bylo posledním velkým pokusem části
          uherské šlechty a&nbsp;vysokého kléru zbavit krále Matyáše Korvína
          trůnu. Hlavní strůjci spiknutí byli humanističtí vzdělanci
          a&nbsp;Matyášovi dlouholetí spojenci; konflikt mezi nimi a&nbsp;králem
          vyústil na podzim roku 1471 v&nbsp;ozbrojené povstání, jehož cílem
          bylo dosadit na uherský trůn polského královského syna Kazimíra
          Jagellonského.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/V%C3%A1radi_Vit%C3%A9z_J%C3%A1nos"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Jan Vitéz, vychovatel mladého Matyáše a&nbsp;od roku 1465 ostřihomský
          arcibiskup, byl po desetiletí oporou královy moci a&nbsp;jedním
          z&nbsp;hlavních organizátorů jeho zahraniční politiky včetně tažení
          proti českému králi Jiřímu z&nbsp;Poděbrad. Janus Pannonius, jeho
          synovec, vystudoval ve Ferraře a&nbsp;Padově a&nbsp;patřil
          k&nbsp;nejvýznamnějším latinským básníkům tehdejší střední Evropy.
          Postupně však oba muži přicházeli o&nbsp;vliv: Matyášova orientace na
          český a&nbsp;rakouský prostor, narůstající daňové zatížení
          a&nbsp;rostoucí náklady válek vedly k&nbsp;otevřenému konfliktu během
          říšského sněmu v&nbsp;Budíně roku 1470.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/Janus_Pannonius"
          />
        </p>
        <p>
          Spiknutí se zformovalo na jaře 1471. Spiklenci nabídli uherskou korunu
          mladému Kazimírovi Jagellonskému, druhorozenému synovi polského krále
          Kazimíra&nbsp;IV., a&nbsp;ujistili polský dvůr, že velká část
          uherských stavů je připravena přejít na jeho stranu. Jagellonská
          strana viděla v&nbsp;nabídce příležitost obnovit svrchovanost nad
          Uhrami z&nbsp;časů Vladislava Jagellonského a&nbsp;začala mobilizovat.
          K&nbsp;Vitézovi a&nbsp;Janusovi Pannoniovi se přidala část horních
          uherských pánů, mezi nimi Mikuláš Bátori, Štěpán Zápolský
          a&nbsp;kapitáni hradů v&nbsp;okolí Trnavy.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Janus_Pannonius"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Na podzim roku 1471 vtrhl Kazimír Jagellonský s&nbsp;asi
          dvanáctitisícovým vojskem do Horních Uher. Jeho tažení mělo směřovat
          přes Sárospatak a&nbsp;Hatvan na Budín, kde počítal s&nbsp;otevřeným
          povstáním šlechty. Očekávané přistoupení magnátů však nepřišlo: Matyáš
          obratným jednáním a&nbsp;sliby finančních úlev a&nbsp;darů obrátil
          rozhodující část šlechty zpět na svou stranu. Polské vojsko ztrácelo
          zásoby, dílčí oddíly se rozpadaly a&nbsp;do zimy bylo jasné, že tažení
          nedosáhne svého cíle. Kazimír se počátkem roku 1472 stáhl bez bitvy
          zpět do Polska.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/V%C3%A1radi_Vit%C3%A9z_J%C3%A1nos"
          />
        </p>
        <p>
          Matyáš následně tvrdě zúčtoval s&nbsp;vůdci spiknutí. Jan Vitéz byl
          přinucen <b>19. prosince 1471</b> podepsat ponižující smlouvu, jíž
          ztratil přístup k&nbsp;arcibiskupským důchodům i&nbsp;ke správě úřadu;
          zbytek života strávil pod faktickým domácím vězením a&nbsp;zemřel{' '}
          <b>9. srpna 1472</b> v&nbsp;Ostřihomi. Janus Pannonius uprchl na jih
          směrem ke chorvatské hranici, ale vyčerpaný a&nbsp;nemocný zemřel{' '}
          <b>27. března 1472</b> na hradě Medvedgrad u&nbsp;Záhřebu, dříve než
          ho stačili královi muži dostihnout.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Janus_Pannonius"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Spiknutí skončilo úplným fiaskem a&nbsp;Matyášovo postavení
          v&nbsp;Uhrách se paradoxně upevnilo. Král využil příležitosti
          k&nbsp;centralizaci moci, omezení vlivu prelátů na zahraniční politiku
          a&nbsp;k&nbsp;dalšímu rozšiřování stálé žoldnéřské armády. Konflikt
          s&nbsp;polským dvorem však trval dál a&nbsp;o&nbsp;dva roky později
          přerostl do otevřené polsko-uherské války. Pro uherský humanismus
          znamenala smrt Vitéze i&nbsp;Januse Pannonia citelnou ztrátu — oba
          patřili k&nbsp;zakladatelské generaci budínského dvorského okruhu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/V%C3%A1radi_Vit%C3%A9z_J%C3%A1nos"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Hlavním pramenem pro spiknutí je <b>Antonio Bonfini</b>, který v{' '}
          <i>Rerum Hungaricarum decades</i> IV (kniha 2) podává podrobný popis
          rozporu Vitéze a&nbsp;Pannonia s&nbsp;Matyášem, jejich tajných jednání
          s&nbsp;krakovským dvorem i&nbsp;Kazimírova podzimního tažení 1471.
          Bonfini píše jako oficiální dvorský historik a&nbsp;Matyášovo
          zúčtování vykládá jako spravedlivý zásah panovníka.
          <Qt
            publication={PUBLICATIONS.BONFINI}
            href="https://mek.oszk.hu/04200/04231/"
          />
        </p>
        <p>
          <b>Galeotto Marzio</b> v{' '}
          <i>De egregie, sapienter, iocose dictis ac factis regis Mathiae</i>{' '}
          (1485) zachytil osobní pohled budínského humanistického okruhu — text
          obsahuje přímé Matyášovy reakce na zradu arcibiskupa, kterého král
          údajně nazval „nevděčníkem, jejž jsem si sám vychoval&ldquo;. Pro
          literární obraz Vitéze a&nbsp;Pannonia jsou klíčové vlastní{' '}
          <b>Pannoniovy dopisy</b> (Epistolae) a&nbsp;humanistická korespondence
          z&nbsp;Ferrary a&nbsp;Padovy.
          <Qt
            publication={PUBLICATIONS.GALEOTTO}
            href="https://mek.oszk.hu/05800/05819/"
          />
        </p>
        <p>
          Polský pohled podává <b>Jan Długosz</b> v&nbsp;<i>Annales</i> (lib.
          XII–XIII, ad annum 1471–1472), který popisuje nabídku uherské koruny
          Kazimírovi, přípravy tažení i&nbsp;jeho neúspěch — Długosz jako
          vychovatel Kazimírových synů panovníkovi otevřeně přičítá nedostatek
          vojenské zkušenosti.
          <Qt
            publication={PUBLICATIONS.DLUGOSZ}
            href="https://www.dbc.wroc.pl/dlibra/publication/4263"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Konflikt měl převážně vnitropolitický charakter a&nbsp;vlastní
          spiknutí se odehrálo prostřednictvím diplomatických kanálů
          a&nbsp;stavovských jednání, nikoli polního tažení. Při Kazimírově
          vpádu na podzim 1471 lze předpokládat účast jednotlivců českého
          a&nbsp;slezského původu v&nbsp;polské armádě, žádné samostatné české
          kontingenty na straně spiklenců však prameny nezmiňují. Na královské
          straně Matyášovy útvary již zahrnovaly velký podíl českých veteránů
          z&nbsp;dřívějších tažení proti Jiřímu z&nbsp;Poděbrad — tito muži
          tvořili základ pozdější <i>Černé armády</i> a&nbsp;v&nbsp;následujícím
          desetiletí se podíleli na dalších Matyášových válkách.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/Janus_Pannonius"
          />
        </p>
      </Col>
    </Row>
  </>
)
