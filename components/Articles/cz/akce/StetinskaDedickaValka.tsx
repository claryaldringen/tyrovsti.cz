import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const StetinskaDedickaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="stetinska-dedicka-valka" />
        <h4>Štětínská dědická válka (1464–1472){draft && <DraftBadge />}</h4>
        <p>
          Štětínská dědická válka (něm. <i>Stettiner Erbfolgekrieg</i>, pol.{' '}
          <i>wojna o sukcesję szczecińską</i>) byla ozbrojeným konfliktem let{' '}
          <b>1464–1472</b> mezi pomořanskými vévody z wolgastské linie rodu{' '}
          Greifenů na jedné straně a braniborským kurfiřtem{' '}
          <b>Fridrichem II. Železným</b> a později jeho bratrem{' '}
          <b>Albrechtem III. Achillem</b> na straně druhé. Šlo o dědický spor o
          vévodství <b>Štětín</b> (něm. <i>Stettin</i>, pol. <i>Szczecin</i>),
          jež po smrti vévody Otty III. v roce 1464 zůstalo bez mužského dědice.
          Konflikt byl ukončen Pyrycskou smlouvou (něm.{' '}
          <i>Vertrag von Prenzlau</i>) v roce <b>1472</b>.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Stettiner_Erbfolgekrieg"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Pomořanské vévodství bylo od dob středověku vazalsky vázáno na Říši a
          stávalo se předmětem opakovaných sporů o lenní svrchovanost mezi
          braniborskými markrabaty a říšskými panovníky. Štětínská linie
          Greifenů držela pomořanský Štětín a okolní území; wolgastská linie
          ovládala Pomořansko západní a střední s rezidencemi Wolgast a
          Stargard. Když <b>10. září 1464</b> zemřel poslední štětínský vévoda
          Otto III. bez mužských potomků, otevřela se otázka nástupnictví. Na
          uvolněné dědictví si nárokovali jak wolgastští vévodové{' '}
          <b>Erik II.</b> a <b>Wartislav X.</b>, tak braniborský kurfiřt{' '}
          <b>Fridrich II.</b>, který se opíral o starší smlouvy o vzájemném
          dědictví uzavřené Hohenzollerny s Greifeny.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Stettiner_Erbfolgekrieg"
          />
        </p>
        <p>
          Štětínská šlechta a měšťané sice v zásadě podporovali wolgastské
          vévody, neboť odmítali braniborskou vládu, ale klíčovou roli sehrál i
          postoj císaře Fridricha III., který spor opakovaně diplomaticky
          zprostředkovával ve prospěch Hohenzollernů.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Stettiner_Erbfolgekrieg"
          />
        </p>
        <h5>Průběh války</h5>
        <p>
          Wolgastská strana převzala fakticky držbu Štětína již v zimě{' '}
          <b>1464–1465</b>, opírajíc se o souhlas štětínských stavů. Fridrich
          II. odpověděl vojenskými přípravami a po neúspěchu zprostředkování
          přerušil jednání. Boje měly převážně podobu hraničních válek o
          jednotlivé hrady a nájezdů na pomořanský venkov; soustředily se v
          oblasti Uckermarku, Pyrzyc, Stargardu a kolem dolního toku Odry.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Stettiner_Erbfolgekrieg"
          />
        </p>
        <p>
          V roce <b>1466</b> bylo uzavřeno první příměří v Solitudě, jež však
          spor řešilo jen dočasně. Otevřená vojenská fáze vrcholila v letech{' '}
          <b>1468–1469</b>, kdy nový braniborský kurfiřt{' '}
          <b>Albrecht III. Achilles</b> (od roku 1470) vedl několik výprav do
          pomořanského území. Zásadní střetnutí bylo svedeno u <b>Wittstocku</b>{' '}
          a v okolí Pasewalku. Žádná ze stran však nedosáhla rozhodujícího pole;
          konflikt se proto vlekl ve vyčerpávajících obléháních hradů a
          plenivých nájezdech, které sužovaly venkov.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Stettiner_Erbfolgekrieg"
          />
        </p>
        <h5>Pyrycská smlouva (1472)</h5>
        <p>
          Konflikt byl uzavřen <b>30. května 1472</b> v Prenzlau (Pyrycích) za
          intervence císaře Fridricha III. Smlouvou byla uznána držba Štětína
          wolgastskými vévody Erikem II. a Wartislavem X. — avšak za podmínky
          braniborské lenní svrchovanosti. Albrecht Achilles získal symbolickou
          satisfakci v podobě holdovní přísahy pomořanských vévodů a postoupení
          některých pohraničních území v Uckermarku. Lenní svrchovanost
          Braniborska nad Pomořanskem se stala dlouhodobou politickou rezervou
          Hohenzollernů, k níž se vraceli ještě v 16. století.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Stettiner_Erbfolgekrieg"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Štětín a obě dědictví Greifenů byly sjednoceny pod wolgastskou linií
          rodu, která tak ovládla celé Pomořansko od Stralsundu po Štětín. Z
          formálně-právního hlediska však válka skončila braniborským úspěchem,
          neboť pomořanští vévodové uznali Hohenzollerny za své pány. Konflikt
          měl širší dopad: ukázal politickou izolaci Pomořanska v severní Říši a
          předznamenal jeho budoucí osud po vymření Greifenů roku 1637, kdy si
          Pomořansko nakonec rozdělila braniborská a švédská strana ve
          vestfálském míru.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Stettiner_Erbfolgekrieg"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Nejucelenější pomořanský pohled poskytuje <b>Thomas Kantzow</b> (asi
          1505–1542) ve své <i>Pomerania</i> (sepsáno ve 30. letech 16. století
          na základě starších listin a kronikových zlomků); věnuje rozsáhlý
          oddíl dědickému sporu po Ottovi III., wolgastskému převzetí Štětína i
          braniborským výpravám. Edice G. Gaebela, Štětín 1897–1898.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://archive.org/search?query=Kantzow+Pomerania"
          />
        </p>
        <p>
          Listinný materiál včetně textu prenzlauské smlouvy z 30. května 1472
          je obsažen v <i>Pommerellisches Urkundenbuch</i> a v hohenzollernských
          listinách edice <i>Geheimes Hausarchiv</i>; říšský diplomatický rámec
          představují <i>Reichstagsakten ältere Reihe</i>, sv. 22, dokumentující
          intervence Fridricha III.
          <Qt publication={PUBLICATIONS.WIKI} href="https://www.dmgh.de/" />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Účast českých a moravských žoldnéřů ve štětínské válce není přímo
          doložena a vzhledem k charakteru i geografii konfliktu byla
          pravděpodobně minimální. Hlavní masu bojovníků tvořili na obou
          stranách dolnoněmečtí, pomořanští a braniborští bojovníci, doplnění o
          sasko-anhaltské spojence. Severoněmecký prostor byl v 60. letech 15.
          století poměrně daleko od hlavních os české žoldnéřské migrace, jejíž
          těžiště leželo v Bavorsku, Falci, Frankách, Uhrách a později ve
          slezských válkách. Případná přítomnost jednotlivých českých velitelů
          mezi spojeneckými oddíly Albrechta Achilla je teoreticky možná —
          markrabě byl nadále aktivním zaměstnavatelem českých kondotiérů
          (zejména v bavorské válce 1459–1463) —, pramenné doklady pro štětínské
          období však chybí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Stettiner_Erbfolgekrieg"
          />
        </p>
      </Col>
    </Row>
  </>
)
