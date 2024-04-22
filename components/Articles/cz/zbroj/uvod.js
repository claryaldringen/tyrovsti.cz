import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Cit } from '../../../Citation'

export const Zbroj = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="uvod" />
        <h4>Zbroj</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          V průběhu 15. století krytí všech částí těla anatomickými Přilby pláty
          u těžkooděnců definitivně převážilo nad kroužkovým pletivem
          (staročesky brní), které se nadále používalo jen jako doplněk. Zbroj
          se rovněž postupně vyprofilovala podle způsobu využití na polní,
          zachovávající v maximální možné míře mobilitu nositele, a turnajovou,
          u níž byl kladen důraz především na jeho pasivní ochranu. V průběhu
          tohoto století se rozšířilo užívání plátové zbroje (často jen
          částečné) u městské a žoldnéřské pěchoty, která sehrávala v bitvách
          stále důležitější úlohu. Díky ukázněnému kolektivnímu způsobu boje
          dokázala v průběhu let stále častěji porážet i těžkooděnou jízdu.
        </p>
        <p>
          Již počátkem 15. století se vyprofilovala nejvýznamnější evropská
          centra platnéřské výroby v severní Itálii (Milán), v jižním Německu
          (Norimberk, Augsburg a Landshut) a Tyrolsku (Innsbruck). V těchto
          centrech zbrojní výroby vznikly i tvarem odlišné styly, které pak
          dominovaly celému století, nazývané italská/milánská a německá zbroj.
          V Miláně se výrobou zbrojí proslavila rodina Missagliů. Tato
          rozvětvená rodina, původním jménem Negroni,získala své jméno podle
          městečka v Lombardii, odkud zřejmě pocházel zakladatel jejich
          platneřské slávy Pietro, jenž zemřel před rokem 1429. Největšího
          věhlasu dosáhli jeho pokračovatelé Tommaso a především Antonio (asi
          1416 - 1496), který dílnu vedl od roku 1452 až do své smrti.
          Missagliové pracovali v 15. století pro přední italské šlechtice jako
          Viscontiové, Gonzagové a Sforzové. Mezi slavné německé platnéřské rody
          patřili Helmschmiedové z Augsburgu nebo Seusenhoferové z Innsbrucku.
          První jmenovaní působili od 2. poloviny 15. století do 2. poloviny
          století následujícího. První zaznamenaným platnéřem z tohoto rodu byl
          Georg, aktivní asi mezi lety 1438 až 1490. Největšího věhlasu pak
          dosáhli jeho syn Lorenz, narozený patrně mezi lety 1445 - 1450, jenž
          tvořil v letech 1467 - 1515 a který byl v roce 1491 jmenován
          Maxmiliánem I. dvorním císařským platnéřem. Dále Lorenzův syn Kolman
          (1471 - 1532), známý například zbrojemi pro Karla V. a Lorenzův vnuk
          Desiderius (1513 - 1578), který pracoval mimo jiné pro španělského
          krále Filipa II.
          <Qt publication={PUBLICATIONS.BROZEK} />
        </p>
        <p>
          V Praze vytvořili platnéři organizaci v roce 1328. Roku 1329 získal
          staroměstské měšťanství platnéř jménem Klebel a po něm se přihlásilo
          ještě 24 mistrů do roku 1393. Jeden z nich, Henricus, přišel roku 1354
          z italského Coma, jiný z Týnce, Kolína, Berouna či z Chrudimi. Roku
          1351 je zaznamenán Rudl jako první platnéř mezi konšely na Starém
          Městě. Během Husitských válek jsou mezi staroměstskými konšely
          doloženi platnéř Vůz (1423) a helméř Jakub (1422). Do roku 1526 pak
          přibylo 26 platnéřských mistrů, z toho jeden (po roce 1477) z Vlašimi.
          V městských knihách nejsou platnéři vzácní a vždy se nalézají mezi
          zámožnými měštany, ale k přísaze v roce 1524 se z obou Pražských měst
          dostavili pouze 4. Máme tak doložené jmenovitě tyto platnéře:{' '}
        </p>
        <ul>
          <li>
            Z roku 1439 Henricus Hemrle, který měl dům v Ostrožnické
            (Platnéřské) ulici.
          </li>
          <li>
            Od poloviny 15. století thorifex Kříž, jehož majetek se stal roku
            1463 odúmrtím.
          </li>
          <li>Z roku 1454 Janek Legát.</li>
          <li>Z roku 1463 platnéř Vocásek.</li>
          <li>Z roku 1464 platnéř Smetana.</li>
          <li>Z roku 1472 platnéř Škoda.</li>
          <li>Z roku 1473 platnéř Duchek Popel.</li>
          <li>
            Z roku 1477 Havel Kabela (Cabela), který měl společně s Duchkem
            koupený nákovadlen.
          </li>
          <li>Z roku 1479 platnéř Pivce Václav a Jan Dúbek.</li>
          <li>Z roku 1483 platnéř Sladký.</li>
          <li>Z roku 1516 platnéř Jan Pivce, snad syn Václavův.</li>
        </ul>
        <p>
          Z platnéřů, neosedlých obyvatelů města, je roku 1486 doložen Jan
          Biberka, který nekale utekl z Nového Města. Z roku 1454 je také známá
          platnéřka Křížová
          <Qt
            publication={PUBLICATIONS.WINTER2}
            href="https://kramerius5.nkp.cz/view/uuid:660b7500-029f-11e4-9789-005056827e52?page=uuid:640bded0-1d56-11e4-8413-5ef3fc9ae867"
          />
          , pravděpodobně manželka Kříže.
        </p>
        <p>
          I když měli platnéři v Praze svou organizaci snad již před rokem 1328,
          statuta si ke stvrzení na radnici donesli později, snad roku 1336, a
          to pouze artikule týkající se učedníků a tovaryšů, což zdá se, byla
          pro pražské platnéře kruciální otázka. Ve stanovách je psáno, že
          učedník musí platit za učení mistrovi 2 kopy grošů (což bylo ve
          srovnání s jinými řemesly velmi mnoho) a bratrstvu 15 grošů. Dále, že
          musí ve službě u mistra zůstat 4 roky a že musí být dvěma kopami grošů
          zaručen, že neuteče. Kdyby utekl a do osmi dní se nevrátil, záruka
          propadne - půl kopy rychtáři a cechu a kopa konšelům. Podle tzv. Práv
          Soběslavských (kolem roku 1440) kráčeli platnéři při slavnostních
          příležitostech jako vítání panovníka či v procesích v pořadí třetí za
          řezníky a zlatníky. Měli při tom mít zelenou korouhev na níž byl
          vyobrazen ozbrojenec v plné plátové zbroji. Pod touto korouhví s nimi
          chodili i zástupci dalších řemesel, volných i organizovaných. Byli to:
          brníři, jehláři, helméři, ostrožníci, mosazníci, sedláři, konváři,
          uzdáři, řemenáři, pasíři, kováři, mešečníci, tobolečníci, mečíři,
          túlaři a zámečníci.
        </p>
        <p>
          Jako jiná řemesla i platnéřství se diferenciovalo a tak v Praze
          nacházíme do roku 1419 i tři helméře (galeatores), dva ze Starého
          Města, přičemž jeden z nich přišel roku 1343 z Řezna, a jednoho
          výrobce plátových rukavic
          <Qt
            publication={PUBLICATIONS.WINTER2}
            href="https://kramerius5.nkp.cz/view/uuid:660b7500-029f-11e4-9789-005056827e52?page=uuid:1cf13400-1d56-11e4-8413-5ef3fc9ae867"
          />
          , zvaných <i>plechowicze</i> (v listině z roku 1447).
          <Qt publication={PUBLICATIONS.ACADEMIA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Ochrana hlavy a krku</h4>
        <p>
          Na krk nasazoval ozbrojenec zpravidla kroužkový límec zvaný{' '}
          <i>obojček</i> či <i>oboječek</i>.
          <Qt
            publication={PUBLICATIONS.ARCHIV8}
            href="https://www.ndk.cz/view/uuid:264e7b10-8dd8-11e8-9588-5ef3fc9bb22f?page=uuid:dc8ba9a0-9b8b-11e8-a1e1-005056827e51&fulltext=obojček"
          />
          Obvykle pak násleovala textilní kápě, na konci 15. století obvykle
          opatřená střapci, přes kterou se nasazovala přilba. Z přileb převažuje
          v českých zemích jednoznačně železný klobouk, dobově zvaný{' '}
          <i>kapalín</i> a z něho odvozený šalíř, česky dobově zvaný <i>leb</i>{' '}
          či <i>lebka</i>. Pro přilbu se ještě používal výraz <i>peklhaub</i>,{' '}
          <i>peklhúbl</i> či <i>piklhaub</i>, což byla zkomolenina z{' '}
          <i>beckenhaube</i>, německého označení přilby typu{' '}
          <i>šlap (bascinet)</i>, ovšem po svém počeštění se tento výraz
          používal pro jakoukoliv kovovou přilbu. Protože klobouk ani šalíř
          nechránil spodní část obličeje, mohl být doplněn o plátové podbradí,
          dobově zvané <i>bart</i> nebo <i>barth</i>.{' '}
          <Qt
            publication={PUBLICATIONS.ARCHIV8}
            href="https://www.ndk.cz/view/uuid:264e7b10-8dd8-11e8-9588-5ef3fc9bb22f?page=uuid:dc8ba9a0-9b8b-11e8-a1e1-005056827e51&fulltext=barth"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Ochrana trupu</h4>
        <p>
          Ochranu trupu zajišťoval přední a zadní plech, které dohromady tvořily
          kyrys. V Čechách se přední plech nazýval <i>prustplech</i> nebo{' '}
          <i>prusplech</i> z německého <i>brustblech</i>, doslova{' '}
          <Cit>plech na prsa</Cit>.
        </p>
      </Col>
    </Row>
  </>
)
