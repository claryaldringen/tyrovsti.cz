import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import Link from 'next/link'

export const Tarce = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="tarce" />
        <h3>Tarče</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Tarče (z německého <i>Tartsche</i>), původně staročesky <i>terče</i>,{' '}
          <i>tercze</i>, <i>tercže</i>
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 38" />, je pozdní
          vývojovou fází jezdeckého štítu, užívanou po celé 15. století. V
          zásadě lze říci, že čím komplikovanější a prolamovanější tvar, tím
          pozdější je datace tarče. Typicky byla vyrobena z lipového dřeva,
          potaženého pergamenem, plátnem nebo kombinací obojího. Na potahu bylo
          naneseno gesso (směs jemně mleté křídy a klihu), které vytvářelo
          podklad pro malbu temperovými barvami.
        </p>
        <p>
          Tarče, stejně jako ostatní štíty, zhotovovali nejčastěji
          specializovaní řemeslníci zvaní štítaři, kteří měli blízko k malířům.
          Roku 1348 si malíři a štítaři pražských měst založili bratrstvo sv.
          Lukáše
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 20" /> a
          přibírali do něj i příbuzné řemeslníky jako sklenáře, knihvazače,
          řezbáře, pergameníky, zlatotepce, illuminátory, cuprejtýře a jiné.
          <Qt
            publication={PUBLICATIONS.WINTER2}
            href="https://kramerius5.nkp.cz/view/uuid:660b7500-029f-11e4-9789-005056827e52?page=uuid:6e11f0e0-1d56-11e4-8413-5ef3fc9ae867"
          />{' '}
          Uvnitř bratrstva však od počátku docházelo k rozepřím mezi malíři a
          štítaři, jak o tom svědčí, jak o tom svědčí privilegia Karla IV. a
          Václava IV. Štítaři vyráběli jednak štíty, jednak některé kusy
          sedlářské a vývěsní štíty domovní včetně jejich malované výzdoby.
          Malíři (magistri pictoriae artis, malíři duchovní, geistliche Maler)
          malovali obrazy a oltáře, ale někdy přebírali dílo štítařům a nadto
          jim zabraňovali, aby své výrobky vystavovali a prodávali na trzích na
          Starém Městě, poněvadž štítaři byli usazeni pod novoměstskými hradbami
          a věžemi a tady také měli provozovat své řemeslo i prodávat své
          výrobky.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 20" />
        </p>
        <p>
          Spory rozhodlo privilegium Karla IV., vydané <b>16. ledna 1365</b>:
          štítaři, usedlí na věžích novoměstských hradeb, byli - podobně jako
          střelci - spolu se svou čeledí osvobození od všech berní, služeb a
          daní, ale byli povinni na výzvu krále nebo jeho maršálka službou v
          případě potřeby (tj. k obraně města). Proto také jim bylo dovoleno
          nosit meč, nůž a odění (harnisch) jako střelcům, aby mohli bránit
          městské hradby. Ve sporu s <Cit>duchovními malíři</Cit>, kteří
          nechtěli se štítaři trpěti (tj. nésti jejich povinnosti k městu), bylo
          rozhodnuto, že malíři nesmí malovat štíty. Terče a štíty (tarczschen
          und stechschilt) nesmí vyrábět nikdo jiný než štítaři. Kdo však
          štítařské dílo (schiltwerk) vyrábí a bydlí ve věži, nemá svou práci
          prodávat jinde než pod věžemi. Privilegium bylo opětovně potvrzené
          Václavem IV. <b>6. ledna 1380</b>.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 21" />
        </p>
        <p>
          Dohody však zřejmě nebyly dodržovány a tak roku 1392 předstoupili
          štítaři před krále znovu se stížností, že duchovní malíři jim stále
          přebírají práci a malují štítařské dílo (schiltwerk), které přísluší
          štítařům a nikoli malířům. Václav IV. privilegiem z{' '}
          <b>30. března 1392</b> potvrdil výsady štítařů a rozhodl, že malíři
          nesmějí malovat štíty a že štítaři mohou na trzích Velkého Města
          pražského prodávat své obrazy (ire bylde] a také domovní štíty (ire
          helme und schilte an den hewsern in derselben stat zu Prage). Tím byly
          vleklé neshody jednoznačně rozhodnuty ve prospěch štítařů, kteří byli
          nyní nejen ve svém oboru ochráněni před konkurencí malířů, ale navíc
          dosáhli volnosti v prodeji svých výrobků na veřejném trhu.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 22" />
        </p>
        <p>
          V průběhu 15. století se původní bratrstvo rozdělilo na cech
          staroměstský (k němuž patřil i Hrad, Hradčany a Malá Strana) a
          novoměstský. Některé společné věci se vyřizovaly v{' '}
          <Cit>plném cechu</Cit>, v němž byli zastoupeni mistři{' '}
          <Cit>obou měst pražských</Cit>. Nehledě k vnitřním neshodám mezi
          štítaři a malíři, patřily do zájmové oblasti cechu všechny práce, jež
          souvisely s malbou. Jejich výčet nejlépe charakterizuje privilegium
          krále Ludvíka z roku 1523, obsažené v potvrzovací listině Rudolfa II.
          z roku 1595: aby žádný cizí mistr nesměl dělati věci, jež patří
          pražskému cechu malířů a sklenářů, to jest{' '}
          <Cit>
            tabulí, arch, korouhví, praporcův, dekův, svíc pozlacených a
            dřevěných, dříví jezdeckého malého neb velkého, pavez, terčí i
            jiných věcí všech, kteréž se barvami dělají
          </Cit>
          .<Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 22" />
        </p>
        <p>
          O tom, že tomu tak bylo už ve 14. století, svědčí zápisy v první knize
          pražského malířského bratrstva, jednak jména a účty štítařů, jednak
          zápis o <Cit>malovaném dříví</Cit>, i když nedokončený.
          <Cit>Malovaným dřívím</Cit> je třeba rozumět jezdecké dříví, tj.
          jezdecké kopí (dřevce) určené pro kolbu, o němž mluví privilegium jak
          Karla IV. (stechgezewge), tak krále Ludvíka (dříví jezdecké malé nebo
          velké) a které pro náročnost zpracování nebylo obyčejným dílem
          sedlářským a patřilo k zboží malovanému. Uvnitř cechu bylo ve 14.
          století asi spíše prací štítařů než mistrů <Cit>pictoriae artis</Cit>.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 22" />
        </p>
        <p>
          V dalším průběhu 15. století došlo uvnitř společného cechu k úplnému
          splynutí štítařů a malířů. Svědčí o tom mj. úmluva z roku 1445 mezi
          mistrem Šíchou a Janem, synem mistra Štefánka, v níž se Šícha
          zavazuje, že jej bude učit v umění malířském, nejen v štítařství, ale
          i v malování obrazů. Učňové byli tedy uváděni do znalostí obou odvětví
          řemesla. Přitom štítařství jako samostatné řemeslo postupně zanikalo.
          Svou malířskou stránkou se stávalo záležitostí malířů - ti převzali
          uměleckou složku jejich živnosti, malování pavéz, terčů a jezdeckého
          dříví, zatímco řemeslnická součást starého štítařství zůstala jiným
          řemeslům, zejména sedlářům a uzdařům. Proto také štítaři už koncem 14.
          století (např. v privilegiích Václava IV. z r. 1380 a 1392) mizejí z
          titulu cechu a napříště se v něm vedle malířů uvádějí nikoli štítaři,
          ale sklenáři, jejichž význam s rozvojem středověké výroby a kultury
          stále více vzrůstal. Přitom ovšem jak ukazují zápisy v knize bratrstva
          i nadále byli mezi malíři mnozí, kteří se více než druzí vyznali ve
          výrobě malovaných pavéz. Dokladem toho je tzv. terčovné a způsob,
          jakým malíři plnili svou povinnost odvádět městu ročně určitý počet
          štítů. Tato povinnost má svou zajímavou historii.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 22" />
        </p>
        <p>
          Podle preambule v privilegiu z roku 1458 byli dříve staroměstští
          mistři řemesel malířského a sklenářského{' '}
          <Cit>
            listy a právy starodávnými vyňati a zproštěni z vojen i ze všech
            lozunkuov a poplatkuov městských
          </Cit>
          , zato však{' '}
          <Cit>
            povinni byli každý rok tři štíty nebo pláště branné stojaté veliké k
            městu udělati ... a k tomu oděncuov branných devět na věže městské
            nebo k městským branám vydávati.
          </Cit>
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 22" />
        </p>
        <p>
          Tyto <Cit>starodávné listy</Cit> jsou přesněji datovány v další větě
          této preambule:{' '}
          <Cit>
            To my važiece a rozumějíce, že město Nové tehdáž nebylo ještě
            ohrazeno, a skrze to oděnci takoví byli sú, již toho se potřebie
            nezdá; a místo plášťov již každý rok dělají k městu pavézy.
          </Cit>{' '}
          Pro opevnění Nového Města dávala již zakládací listina z roku 1348
          směrnice, pokud jde o půdorys, komunikační síť města a tím i situaci
          bran. Opevnění samo bylo vybudováno v letech 1348-1350. Tehdy také
          ztratily na významu hradby mezi Starým a Novým Městem a s nimi
          povinnost malířů stavět k věžím a bra- nám devět oděnců podle
          starodávných listů, které tedy musely být vydány někdy před polovinou
          14. století.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 23" />
        </p>
        <p>
          Tři veliké štíty neboli branné pláště stojaté odváděli však
          staroměstští mistři jen ve 14. století. Neznámo kdy, nejpozději však
          před husitskými válkami, došlo k té změně, že místo tří velkých
          branných plášťů musili městu odvádět 10 pavéz. Vysvítá to ze zápisu v
          gruntovních knihách staroměstských ze <b>7. února 1430</b>, kdy došlo
          k další změně. Tehdy se mistři obrátili na konšely Starého Města s
          žádostí, aby se jim dostalo úlevy v této povinnosti, vzhledem k
          nedostatku a chudobě, do níž prý upadli v oněch válečných a neklidných
          letech. Jejich žádosti o snížení počtu povinně odváděných{' '}
          <Cit>štítů alias pavéz</Cit> městská rada roku 1430 vyhověla a slevila
          jim dva štíty, takže napříště byli povinni odvádět ročně jen osm
          štítů. Mělo to však být jen přechodné opatření do doby, než zase budou
          mít ze svého umění hojnější užitek.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 23" />
        </p>
        <p>
          Přes tuto výhradu zůstala úleva staroměstským mistrům dlouho
          zachována. Když roku 1458 předkládali městu všechny své výsady s
          žádostí o potvrzení, byly v nich kromě zmíněných již
          <Cit>starodávných práv</Cit> z první poloviny 14. století také{' '}
          <Cit>jiné kusy popsané, jim a řemeslóm jich příhodné a potřebné</Cit>.
          Mezi těmito jinými kusy, které konšelé měli roku 1458 potvrdit{' '}
          <Cit>k dřevním připíšíc</Cit>, byla jistě i tato úleva z roku 1430.
          Usnesení staroměstské rady z roku 1458 bylo tedy potvrzením souhrnu
          dosavadních privilegií, starších i novějších. Tak je třeba rozumět
          usnesení staroměstských konšelů z <b>13. listopadu 1458</b>:
          <Cit>
            ... protož my při těch milostech a práviech i svobodách je
            zuostavujíc, oděncuov těch je zprošťujem, tak aby miesto plášťuov
            těch velikých, o nichžto svrchu zmienka jest, každý rok vždy o
            svatém Havle osm pavez malovaných a dobře žilovaných a s obú stranú
            kožovaných i připravených k městu udělajíc, na rathúz přinesli.
          </Cit>
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 23" />
        </p>
        <p>
          Podobnou povinnost vůči městu měli také štítaři a malíři novoměstští.
          O jejich cechu jsou sice zprávy až z 15. století, ale je možné, že
          existoval hned po založení Nového Města a že byl nadán výsadami již za
          Karla IV. Ve sporu střelce Jana Božků, jenž byl r. 1454 nařčen
          novoměstskými malíři a štítaři, že zasahuje do jejich řemesla, konšelé
          Nového Města při roz soudili tak, aby nebyla dotčena práva malířů a
          štítařů, která mají{' '}
          <Cit>od slavné paměti císaře Karla a krále Václava</Cit>. Není však
          jisté, jsou-li těmito právy zmíněné již výsady štítařů a malířů z roku
          1365, 1380 a 1392, vztahující se na společný snad cech mistrů
          staroměstských a novoměstských, nebo zda novoměstští mistři měli již
          ve 14. století svá vlastní privilegia. V každém případě byli však
          štítaři na Novém Městě usedlí již ve 14. století, jak ostatně vyplývá
          také z citované již dohody staroměstských a novoměstských štítařů a
          malířů z roku 1387. Velikost jejich cechu na počátku 16. století
          nezůstávala pozadu za staroměstským cechem, neboť při smíru, uzavřeném
          mezi nimi r. 1511, jmenuje se osm mistrů staroměstských a sedm
          novoměstských.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 25" />
        </p>
        <p>
          Ve 14. století byla však výrobní síla novoměstských štítařů a malířů
          podstatně slabší než rozsah výroby na Starém Městě. Dosvědčují to
          údaje o jejich povinné roční dodávce městu. V osmdesátých letech 14.
          století došlo mezi nimi a novoměstskými konšely k narovnání, které
          ukončilo dlouhé spory o lozunky a poplatky, stanovíc, aby štítaři,{' '}
          <Cit>kteříž pod věžemi sedí</Cit>, bez pohoršení svých práv{' '}
          <Cit>
            každé léto po vánocech k novému letu dávali počty, jednu pavézu
            pánuom a městu ku potřebě a ke cti i k kráse, tak dlúho, jakožby jim
            a nám se líbilo a dobré zdálo a jim a městu našemu líbezné se bude
            zdáti
          </Cit>
          . Pavéza novoměstskými malíři a štítaři odevzdávaná měla být tedy na
          přední straně opatřena stejně pěknou malířskou výzdobou jako osm{' '}
          <Cit>malovaných, dobře žilovaných a kožovaných</Cit> pavéz
          staroměstských.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 25" />
        </p>
        <p>
          Odvádění povinné dodávky pavéz na staroměstskou i novoměstskou radnici
          patřilo tedy k velmi starým povinnostem pražských malířů a štítařů a
          udrželo se až do počátku 16. století. Tato povinnost byla na členy
          cechu rozvržena tak, že pavézy byly objednány od některého z členů
          bratrstva; ostatní členové cechu se pak na ně skládali, platíce
          poplatek zvaný <Cit>terčovní</Cit>. Takové příspěvky na štíty najdeme
          již v citované nejstarší knize bratrstva. V zápisu z konce 14. století
          se mluví o <Cit>polovině kopy za štíty (nebo na štíty)</Cit>. V
          seznamu členů, pocházejícím asi z let 1410-1420, je přípisek:{' '}
          <Cit>Mykesch ostawa dluzen u pawessy</Cit>, což se vykládá jako záznam
          nedoplatku <Cit>terčovního</Cit> na pavézy.
          <Qt publication={PUBLICATIONS.DENKSTEIN3} note="Str. 26" />
        </p>
        <p>
          Jak je patrné, česká historická věda se soustředila z pochopitelných
          důvodů zejména na pavézy zatímco tarče zůstávají stranou zájmu a pokud
          už se jimi zabývá, tak hlavně jejich možným vlivem na vývoj pavéz. Lze
          však předpokládat, že české tarče z 2. poloviny 15. století se výrazně
          nelišily od jiných tarčí ze sousedních oblastí Říše. Častým motivem na
          tarčích z německého prostoru je dáma, která přidržuje úplný erb, tj.
          heraldický štít s přilbou, klenotem a přikryvadly, jak je vidět na
          následujícíh příkladech z Metropolitního muzea umění. Ve dvou
          případech je dáma doplněna stuhou s heslem, které však nemá heraldický
          význam a jedná se spíše o vtipnou slovní hříčku.
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
        Na první tarči (Obr. 1)je namalován erb patřící buď rodu Gottsmannů nebo
        příbuznému rodu Türriegelů, oba z Franků. Ženská postava po straně drží
        banderolu (svitek, stuhu) s částečně německy psaným heslem: HAB MYCH ALS
        ICH BIN... (Vezmi mě takovou, jaká jsem...). Výzdoba se zářivými barvami
        na stříbřitě fóliovém podkladu je pozoruhodně zachovalá, protože byla po
        staletí skryta pod vrstvami pozdějšího nátěru. Na kůží potažené zadní
        straně štítu jsou stopy po namalované postavě svatého Kryštofa, jehož
        obraz měl chránit před náhlou smrtí.
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
        Přestože je prostřední tarče (Obr. 2) poškozená používáním a stářím, je
        jedním z nejkrásněji malovaných příkladů tarčí patnáctého století. Na
        dochované ploše zobrazuje ženu v opeřeném turbanu, která drží banderolu
        (svitek, stuhu) s nápisem v němčině &bdquo;FAHR MIT FREUDEN&ldquo; (jdi
        s radostí). Na heraldickém štítě vpravo byl dříve zobrazen erb majitele,
        který je dnes nečitelný. Okolní plochy jsou jemně malované dekorem
        zavinutých listů a &bdquo;pásy mraků&ldquo; v neprůhledných barvách a
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
        Povrch třetí tarče (Obr 3.) je malován jemným stříbrným dekorem
        zavinutých listů (nyní zašlých) na černém podkladu. Během své pracovní
        životnosti byl štít sekundárně pomalován dvěma štíty se znaky
        norimberských patricijských rodů Ketzelů (na černém podkladu stříbrná
        opice držící zlatou kouli) a Igelbrechtů (na stříbrném podkladu černý
        ježek se třemi zlatými jablky na zádech). Tyt sekundární erby byly možná
        přidány koncem 15. století rodem Ketzelů jako památka na Heinricha
        Ketzela staršího (zemřel 1438), norimberského měšťana v letech 1435-36,
        a jeho manželku Annu Igelbrechtovou, která se za něj provdala v roce
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
          Protože se nám nepodařilo najít žádnou dochovanou tarči z českého
          území, vybral jsem si pro rekonstrukci následující tarči z let 1440 -
          1460, pravděpodobně z Norimberka, která se nyní nachází v Muzeu umění
          ve Filadelfii. Jak víme, Čechy byly s Norimberkem v čilém obchodním
          vztahu a sám{' '}
          <Link href="pages/tyrovsti-z-einsiedlu/jost-z-einsiedlu#1">
            Jošt vlastnil palné zbraně vyrobené v Norimberku.
          </Link>
          Tarči s podobně stylizovanými okraji do tvaru srolovaných svitků
          zobrazuje i Jan van Eyck na obraze &bdquo;Kristovi rytíři&ldquo;,
          který je součástí levého panelu Gentského oltáře z roku 1432. Tarče
          byla poprvé přemalována kolem roku 1500 a její současná podoba je
          výsledkem barokní přemalby ze 17. století, kdy byla vymalována pro
          pohřební účely a opatřena erby norimberských patricijských rodů
          Hallerů a Imhofů. Orignál tarče je 55,6 cm vysoký, 52 cm široký a jeho
          prohnutí činí 23 cm. Váží 2880 gramů.
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
          Vzhledem k tomu, že se původní malba tarče nedochovala, rozhodli jsme
          se pro ni vytvořit originální avšak dobově odpovídající motiv.
          Vycházeli jsme z tarče na obr. 1, avšak jsme použili pozadí z tarče na
          obr. 3 s dekorem stříbrných mraků a zavinutých listů na černém pozadí.
          Rovněž byl původní erb zaměněn za{' '}
          <Link href="/tyrovsti-z-einsiedlu/erb">erb Týřovských</Link>, byl však
          použita pouze pravá helma s tatarským kloboukem, aby štít mohl zůstat
          naklopený a hlavně aby panna v levém klenotu vizuálně nerušila ženu
          držící erb. Motiv dále obsahuje banderolu s nápisem
          <Cit>Pomny na mye ma myla wyerna pany</Cit> (Pamatuj na mě má milá
          věrná paní), který je převzat ze soudobé ostruhy. Na vnitřní je
          zjednodušený nákres svatého Kryštofa, který měl chránit před náhlou
          smrtí.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Korpus</h5>
        <p>
          Korpus je stejně jako většina štítů té doby vyrobený z lipových latí
          slepených dohromady klihem. Takto vytvořený blok je následně pomocí
          nástrojů tvarován tak dlouho, až získá finální podobu. Autorem korpusu
          je František Poch.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="korpus1.jpg" width={2048} height={1531} title="" />
      <ImageWithTitle src="korpus2.jpg" width={2048} height={1531} title="" />
      <ImageWithTitle src="korpus3.jpg" width={2048} height={1531} title="" />
    </Row>
    <Row>
      <ImageWithTitle src="korpus7.jpg" width={2048} height={1531} title="" />
      <ImageWithTitle src="korpus4.jpg" width={1531} height={2048} title="" />
      <ImageWithTitle src="korpus6.jpg" width={2048} height={1531} title="" />
    </Row>
    <Row>
      <Col>
        <h5>Potažení</h5>
        <p>
          Korpus je potažen lněným plátnem za použití kostního klihu. Před
          potažením bylo potřeba jej ještě finálně dobrousit. Dobroušení a
          potažení korpusu provedli pánové Zdeněk Sedláček a Daniel Richter.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle src="IMG_3066.jpg" width={960} height={1289} title="" />
      <ImageWithTitle src="IMG_3076.jpg" width={960} height={1289} title="" />
      <ImageWithTitle src="IMG_3130.jpg" width={960} height={1289} title="" />
      <ImageWithTitle src="IMG_3139.jpg" width={960} height={1289} title="" />
    </Row>
    <Row>
      <Col>
        <h5>Malba</h5>
        <p>
          Potažený korpus byl následně natřen gessem, což je směs klihu a drcené
          boloňské křídy, jež bylo nutné důkladně zbrousit. Vznikl tak hladký
          bílý povrch, na který na který bylo možné v místech budoucího
          stříbření a zlacení nanést tzv. bolus, přičemž pod zlato se nanáší
          bolus červený a pod stříbro bolus černý. Zde byl kvůli malému rozsahu
          zlacených ploch použit pouze černý bolus. Následně bylo na bolus
          naneseno plátkové zlato a stříbro. Finální malba byla provedena
          vaječnou temperou. Malbu provedla Mgr. Markéta Poskočilová.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="Potah.jpg"
        width={2917}
        height={3239}
        title="Potažený korpus"
      />
      <ImageWithTitle
        src="Gesso.JPG"
        width={3374}
        height={3374}
        title="Korpus natřený gessem a vyleštěný"
      />
      <ImageWithTitle
        src="bolus.jpg"
        width={1900}
        height={1658}
        title="Korpus s naneseným bolusem a opět vyleštěný"
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="Stribro.JPG"
        width={1946}
        height={2048}
        title="Korpus po aplikaci plátkového stříbra a zlata"
      />
      <ImageWithTitle
        src="SvKrystof.JPG"
        width={1866}
        height={2048}
        title="Kresba sv. Kryštofa na zadní straně"
      />
      <ImageWithTitle
        src="Malba.JPG"
        width={1978}
        height={2048}
        title="Hotová tarče"
      />
    </Row>
  </>
)
