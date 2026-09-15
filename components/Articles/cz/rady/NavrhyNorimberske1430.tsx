import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const NavrhyNorimberske1430 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="norimberske-navrhy-1430" />
        <h4>
          Norimberské návrhy pro šikování vozů z doby kolem roku 1430
          {draft && <DraftBadge />}
        </h4>
        <p>Pracovní překlad, zatím bez odborné korektury.</p>
        <p>
          Jde o dva spisy z norimberského archivu, koncept a čistopis návrhu,
          jak zřídit vozovou hradbu pro chystané tažení do Čech. Oba jsou psány
          touž rukou a v 17. století k nim byl připsán nadpis{' '}
          <Cit>
            Alte fragmenta historica von denen geschichten Königs Wenzeslai in
            Böhmen, wobei eine beschreibung einer vollkommenen selbiger zeit
            gebrauchten wagenburg mit ihrer zugehörung
          </Cit>
          . Koncept (a) je obsahově bohatší, ale stručný a místy obsahuje jen
          hesla, která čistopis (b) rozvádí, mnohá však vypouští.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:862e7cdb-74ed-4129-8a6d-5d37bad30b81"
          />{' '}
          Poznámky, které Toman i Würdinger tisknou za jednotlivými články
          konceptu, jsou zde vysázeny kurzívou. Podle Würdingera je psala táž
          ruka jako samotný návrh.
          <Qt
            publication={PUBLICATIONS.ANZEIGER1872}
            href="https://archive.org/details/anzeigerfrkunde01nrgoog/page/n406/mode/1up"
          />
        </p>
        <p>
          Toman soudí, že se návrh týká tažení k Domažlicím v roce 1431, a klade
          jeho vznik nejspíš do roku 1430, kam ho umístil už Würdinger, nebo do
          první poloviny roku 1431.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:d18f904a-5b56-4200-a699-2fa149ff1335"
          />{' '}
          Würdinger podle Wulfa důvod své datace neuvedl.
          <Qt
            publication={PUBLICATIONS.WULF1889}
            href="https://www.digitale-sammlungen.de/de/view/bsb11551340?page=13"
          />{' '}
          Pisatel byl podle Tomana muž v boji zkušený, který se se šikováním
          vozů seznámil snad při některém dřívějším tažení do Čech a návrh pak
          přizpůsobil poměrům v Němcích.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:862e7cdb-74ed-4129-8a6d-5d37bad30b81"
          />{' '}
          Toman mu přikládá velkou důležitost: pisatel se neomezuje na popis a
          vyzbrojení vozů, ale jako první pochopil ústrojný celek Žižkových
          vozových šiků, rozčlenění vozů i lidu a poměrně správně určuje i počet
          a rozestavení střelby.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:d18f904a-5b56-4200-a699-2fa149ff1335"
          />
        </p>
        <p>
          Toman oba spisy otiskl s upraveným pravopisem a články sám očísloval.
          Úplná Würdingerova edice z roku 1872 zachovává pravopis předlohy a v
          několika místech se od Tomanova otisku liší.
          <Qt
            publication={PUBLICATIONS.ANZEIGER1872}
            href="https://archive.org/details/anzeigerfrkunde01nrgoog/page/n405/mode/1up"
          />{' '}
          V poznámce u třetího článku konceptu tiskne Toman{' '}
          <Cit>Pert beware</Cit>, edice však má <Cit>Pest bewarn</Cit>. Slovo,
          které Toman převádí jako <Cit>wahrhaftig</Cit> (a/7, b/1), zní v edici{' '}
          <Cit>werhafftig</Cit>, tedy branný. Místo Tomanova{' '}
          <Cit>vorstehnden prediger</Cit> (a/11) má edice{' '}
          <Cit>verstaden prediger</Cit>.
          <Qt
            publication={PUBLICATIONS.ANZEIGER1872}
            href="https://archive.org/details/anzeigerfrkunde01nrgoog/page/n405/mode/1up"
          />{' '}
          Würdinger ve svém starším, jen převyprávěném otisku píše o mužích{' '}
          <Cit>wehrhaftig auf die Wagenpferde</Cit>, schopných a ozbrojených jet
          na vozových koních, a o <Cit>verständigen Prediger</Cit>.
          <Qt
            publication={PUBLICATIONS.WURDINGER2}
            href="https://www.digitale-sammlungen.de/de/view/bsb11684126?page=402"
            note="Str. 378–379"
          />{' '}
          Naopak <Cit>zu eim schutze</Cit> (a/5, b/3) a <Cit>antwerk</Cit>{' '}
          (a/14) jsou Tomanovy opravy. Edice má <Cit>schusse</Cit> a{' '}
          <Cit>hantwerk</Cit>.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:45f83491-fe27-4de6-a650-51a03bbc9f6a"
            note="Str. 406–407"
          />
        </p>
        <p>
          Poznámky k překladu: Členění vozové hradby překládám takto:{' '}
          <Cit>glied</Cit> článek (5 vozů), <Cit>bund</Cit> svaz (25 vozů),{' '}
          <Cit>schickung</Cit> či <Cit>geschick</Cit> šik (100 vozů),{' '}
          <Cit>zeile</Cit> řada.
          <br />
          Zápis{' '}
          <i>
            iij<sup>m</sup>
          </i>{' '}
          znamená dva a půl tisíce, čistopis (b/6) mluví o{' '}
          <Cit>dritthalb tausend volkes</Cit>.
          <br />
          Smysl několika poznámek v konceptu i některých názvů nářadí je
          nejistý. Taková místa jsou v překladu označena otazníkem, slovo{' '}
          <Cit>Hogcken</Cit> opatřil otazníkem už Toman. U slov{' '}
          <Cit>Pest bewarn</Cit>, <Cit>werhafftig</Cit> a <Cit>verstaden</Cit>{' '}
          se v překladu držím čtení edice.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <h5>a)</h5>
        <b>Von der zugs wegen gein Beham.</b>
        <ol>
          <li>
            Zum ersten ein ganze genug fertige wagenburg zu voller richtigkeit
            auf ganzen ernsten gehorsam aller volker in allen ernsten
            krigesgeschäften.
            <br />
            <i>Regierer alle genug thun.</i>
          </li>
          <li>
            Auch ein sunderliche schickung und auch gar ein richtige rotirunge
            alles reisigen zeuges neben der wagenburg ab- und zuzukommen.
            <br />
            <i>Alle hauptleute willig sein sullen. Gezelte.</i>
          </li>
          <li>
            Sunderlichen auch ein nutzliche fursichtigkeit, wie man soll brot,
            bier, futterunge und notdurft mit gutem rate erkriegen und gewinnen
            und dabei ganze sicherheit zu haben.
            <br />
            <i>
              Pert beware
              <br />
              gelt enthalten.
            </i>
          </li>
          <li>
            Es ist auch zu wissen, welcherlei geräte ein jeglicher streitwagen
            sunderlichen haben soll zu sulchen ernsten kriegesgeschäften, die
            jezund gegenwärtig sein vor augen in landen.
            <br />
            <i>Ein teil in der feinde lande.</i>
          </li>
          <li>
            Ein jeglich streitwagen soll haben fünf starke pferde und zween
            richtig wagenknechte und fünf ledig reitsättel, sechs handbüchsen,
            je drei büchsen zu eim schutze.
            <br />
            <i>Setztartschen übrig geweren.</i>
          </li>
          <li>
            Auch soll sein dabei drei ketten, eine XXV ellen lang, eine X ellen
            lang und eine drei ellen lang, und auch kratze, hauen, äxte,
            grabscheit, schaufeln, eiserein stangen, pickel, feustel, schuch,
            eiserein brettnagel und häspen.
            <br />
            <i>Laufgraben mit pflugen.</i>
          </li>
          <li>
            Dabei sullen auch sein bei jeglichem streitwagen XXI person, ein
            zimmermann, ein maurer, ein steinmetz, ein schmied, ein wagner, ein
            gestellmacher und ein bergknapp, ob man mag gehaben auch fünf
            wahrhaftig auf die wagenpferde, vier zun püchsen, vier mit
            armbrosten, und über die XXI ein hauptmann zu einem wagen.
            <br />
            <i>Hogcken (?) mit leinen und grabenfüllen.</i>
          </li>
          <li>
            Sölich werkleute hie aber benennet worden, die sullen bei ihn haben
            jeglicher seinen werkgezeuge, harnasch, sein gewehr, als viel
            jeglichem not ist zu haben auf sulch ernste geschäfte zu
            furdernusse.
            <br />
            <i>Mehr wagen zu gewinnen.</i>
          </li>
          <li>
            Als gehoren sulcher streitwagen fünf zu einem geliede, und derselben
            wagen vier sullen dem fünften oder seinem hauptmann gehorsam sein.
            Sulcher geliede fünf machen einen bund, dar sei dann 25 wagen, die
            gehn nach einander in einer zeilen.
            <br />
            <i>Zeichen, spitzerreiter.</i>
          </li>
          <li>
            Sulcher bund vier, die machen dann ein rechte schickung, das sein
            ein hundert streitwagen, und die gehen nebeneinander in vier zeilen,
            und jeglicher bund hat seinen überhauptmann. Dieselben vier
            hauptleute haben dann einen sunderlichen überhauptmann uber die
            ganze schickunge derselben hundert streitwagen etc. Die haben iij
            <sup>m</sup> (2500) volkes.
            <br />
            <i>Banier, gleichen teil.</i>
          </li>
          <li>
            Ein sulch ganz schickung soll haben ein richter mit vier schöpfen
            und einen vorstehnden prediger. Ein jeglich bund soll haben einen
            richtigen kaplan. Ein jeglich gelied soll haben ein eigen gezelt
            oder ein gesperre.
            <br />
            <i>
              Auf vier geschicke X<sup>m</sup> volkes.
            </i>
          </li>
          <li>
            Sulch hundert streitwagen sullen auch haben hundert speiswagen, die
            sullen auch in sonderlicher schickunge geordiniret sein mit
            sunderlichen hauptleutein geleich den streitwagen.
            <br />
            <i>Reiten dabei.</i>
          </li>
          <li>
            Bei denselben speiswagen sullen sein bierbrauer, mälzer, müllner,
            becken, botener genug, mader, drescher, schnitter aller teil genüg
            sein, zu schaffen mühlwerk und braupfannen. Das muss man bescheren
            in stadten, märkten und auf schlosser, die dann werden gelegen sein.
            <br />
            <i>
              Stärken, pest
              <br />
              mehren, gleichen teil.
            </i>
          </li>
          <li>
            Auch mancherlei tarras, schirmen und gut antwerk zum stormen, die
            werden wir dann ausrichten im felde, so die heere zusammen kommen
            werden, dass jegliche der heere mit fürsichtigkeit mögen zugehen
            gegen den feinden und dabei sicher beleiben.
            <br />
            <i>Antwerk zu usboren (sic).</i>
          </li>
          <li>
            Auch sulden ein jeglich glied besunder haben ein steinbuchsen oder
            tarasbüchsen auf ein halben wagen mit zweien pferden, und ein
            jeglich bund ein steinbuchsen auf einem wagen mit fünf pferden, und
            eine ganze schickunge mit hundert wägen ein gross steinbuchsen mit
            XVI, XVIII oder XX pferden.
            <br />
            <i>Pulver, steine, netze, spesse, gezelte, gelot genug.</i>
            <Qt
              publication={PUBLICATIONS.TOMAN}
              href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:0d397450-f55c-4cf4-9b06-4f39d68b4a8a"
            />
            <Qt
              publication={PUBLICATIONS.ANZEIGER1872}
              href="https://archive.org/details/anzeigerfrkunde01nrgoog/page/n405/mode/1up"
            />
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <h5>a)</h5>
        <b>Kvůli tažení do Čech.</b>
        <ol>
          <li>
            Za prvé úplná, dostatečně připravená vozová hradba v plném pořádku,
            s naprostou a vážnou poslušností všeho lidu ve všech vážných
            válečných záležitostech.
            <br />
            <i>Ať všichni, kdo velí, učiní zadost.</i>
          </li>
          <li>
            Také zvláštní uspořádání a řádné rozdělení veškeré jízdy do rot, aby
            mohla vedle vozové hradby odjíždět a přijíždět.
            <br />
            <i>Všichni hejtmani ať jsou ochotní. Stany.</i>
          </li>
          <li>
            Zvlášť také užitečná prozíravost, jak s dobrou rozvahou opatřit a
            získat chléb, pivo, píci a potřeby a mít přitom naprosté bezpečí.
            <br />
            <i>
              Chránit před morem
              <br />
              peníze zadržet (?).
            </i>
          </li>
          <li>
            Také je třeba vědět, jaké náčiní má mít každý válečný vůz zvlášť k
            takovým vážným válečným záležitostem, které jsou nyní v zemích přímo
            před očima.
            <br />
            <i>Část v zemi nepřátel.</i>
          </li>
          <li>
            Každý válečný vůz má mít pět silných koní a dva zkušené vozové
            pacholky a pět volných jezdeckých sedel, šest ručnic, vždy tři pušky
            na jednoho střelce.
            <br />
            <i>Pavézy, ostatní zbraně.</i>
          </li>
          <li>
            Také mají být u něho tři řetězy, jeden 25 loket dlouhý, jeden 10
            loket dlouhý a jeden tři lokte dlouhý, a také škrabky (?), motyky,
            sekery, rýče, lopaty, železné sochory, krumpáče, palice, brzdné
            botky (?), železné hřeby na prkna a závěsy (?).
            <br />
            <i>Zákopy s pluhy.</i>
          </li>
          <li>
            U každého válečného vozu má být také 21 osob: tesař, zedník,
            kameník, kovář, kolář, stelmach a horník, a pokud je lze získat,
            také pět branných mužů na vozové koně, čtyři k puškám, čtyři s
            kušemi a nad těmi 21 jeden hejtman k jednomu vozu.
            <br />
            <i>Hogcken (?) s provazy a zasypávání příkopů.</i>
          </li>
          <li>
            Řemeslníci, kteří jsou zde vyjmenováni, mají mít každý u sebe své
            nářadí, zbroj a svou zbraň, kolik kdo potřebuje k podpoře takových
            vážných záležitostí.
            <br />
            <i>Získat více vozů.</i>
          </li>
          <li>
            Pět takových válečných vozů patří k jednomu článku a čtyři z těchto
            vozů mají být poslušny pátého neboli jeho hejtmana. Pět takových
            článků tvoří jeden svaz, to je tedy 25 vozů, které jedou za sebou v
            jedné řadě.
            <br />
            <i>Znamení, přední jezdci (?).</i>
          </li>
          <li>
            Čtyři takové svazy tvoří pak řádný šik, to je sto válečných vozů, a
            ty jedou vedle sebe ve čtyřech řadách a každý svaz má svého vrchního
            hejtmana. Tito čtyři hejtmani mají pak zvláštního vrchního hejtmana
            nad celým šikem těchto sta válečných vozů atd. Ti mají 2500 lidu.
            <br />
            <i>Korouhev, stejný díl.</i>
          </li>
          <li>
            Takový celý šik má mít soudce se čtyřmi přísedícími a rozumného
            kazatele. Každý svaz má mít řádného kaplana. Každý článek má mít
            vlastní stan nebo přístřešek.
            <br />
            <i>Na čtyři šiky 10 000 lidu.</i>
          </li>
          <li>
            Těchto sto válečných vozů má mít také sto vozů se spíží, které mají
            být také zvlášť uspořádány pod zvláštními hejtmany stejně jako
            válečné vozy.
            <br />
            <i>Jízda při tom.</i>
          </li>
          <li>
            U týchž vozů se spíží má být dost pivovarníků, sladovníků, mlynářů,
            pekařů, bednářů (?), sekáčů, mlatců a žnců, od všeho dost, aby
            obstarali mlýny a pivovarské pánve. To se musí opatřit ve městech,
            městečkách a na hradech, které pak budou nablízku.
            <br />
            <i>
              Posílit, mor (?)
              <br />
              rozmnožit, stejný díl.
            </i>
          </li>
          <li>
            Také rozličné tarasy, zástěny a dobré obléhací stroje ke zteči, ty
            připravíme v poli, až se vojska sejdou, aby každé z vojsk mohlo s
            prozíravostí postupovat proti nepřátelům a přitom zůstat v bezpečí.
            <br />
            <i>Obléhací stroje … (?).</i>
          </li>
          <li>
            Také má mít každý článek zvlášť jedno dělo na kamenné koule nebo
            tarasnici na polovičním voze se dvěma koňmi a každý svaz jedno dělo
            na kamenné koule na voze s pěti koňmi a celý šik se sto vozy jedno
            velké dělo na kamenné koule se 16, 18 nebo 20 koňmi.
            <br />
            <i>Prach, kamení, sítě, kopí, stany, olova dost.</i>
          </li>
        </ol>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <h5>b)</h5>
        <ol>
          <li>
            Eine ganze rechtfertige wagenburg zu ernstlichen kriegesgeschäften
            die soll haben in jeglichem geschicke hundert streitwagen wohl
            angericht. Bei solchen hundert streitwagen sullen geschicket sein
            zwei tausend fussvolkes und funf hundert mit reisigen pferden, und
            bei jeglichem wagen sullen bleiben nach sulcher schickunge zwanzig
            fussvolkes, und jeglich streitwagen soll haben fünf starke
            wagenpferd mit vier starken wahrhaftigen wagenknechten, die sullen
            ihren harnasch haben bei ihn auf ihren wagen.
          </li>
          <li>
            Auch sullen bei jeglichem wagen aus den zwanzig fussgängeln fünf
            starke männer jeglicher sein harnasch bei ihm auf dem streitwagen
            haben, und dabei fünf ledige sattel auf die wagenpferd zu werfen, so
            es würde not thun. Also sullen auch bei jeglichem sein unter den
            zweinzig fussgängeln ein zimmermann, ein steinmetze, ein maurer, ein
            schmied, ein bergknappe, ein wagner, ein geschirrmeister, zween
            büchsenschiesser und etliche armbrostschützen, der jeglicher soll
            bei ihm haben sein werkzeug und dabei seinen harnasch und sein
            gewehre besundere.
          </li>
          <li>
            Auf jeglichem wagen sullen auch sein zwu gute axte oder mehr,
            kratzen oder hauen, grabscheit, schaufeln, keilhauen, pickel,
            gänsfüss, feustel, eiserein stangen, guter ketten vier, troge,
            eiserein schuh, häspeln, brettnagel, und auf jeglichem streitwagen
            sechs handbüchsen, und je zu eim schutze drei büchsen.
          </li>
          <li>
            Auch sollen bei solchen hundert streitwagen hundert speisewagen
            geschicket sein, gleich den streitwagen mit ihren sunderlichen
            schickung durch eigene hauptleute.
          </li>
          <li>
            Auch soll ein iglich streitwagen besunder unter seinen zweinzig
            männern ein eigen hauptmann haben; und funf wagen, das ist ein
            glied, die stehen einem besunderen hauptmann zu gehorsam unter ihn
            selbs; und also machen fünf glied fünf und zweinzig wagen, die gehn
            nach einander in einer zeilen. Sulcher bunde vier gehen in vier
            zeilen, die haben vier oberhauptleute, und dieselben vier hauptleute
            die haben aber über ihn ein oberhauptmann mit eim roten fahn; der
            ist dann über hundert streitwagen.
          </li>
          <li>
            Also sein dieselben hundert streitwägen eine rechte volle schickung
            auf dritthalb tausend volkes; oder die fünfhundert reisigen pferde,
            die in sulche schickunge mit hinein gehören, die haben auch ihre
            sunderliche rotten, mit sunderlicher regierung neben dem fussvolke
            in der wagenburg zu bleiben, oder aus der wagenburg zu rücken, als
            oft es not thun würde, mit einer nachfolge der funfhundert
            wagenpferd, die dann auch reisig geschickt würden, als oben
            begriffen ist.
          </li>
          <li>
            Auch soll jeglich glied haben ein kleine steinbüchsen auf einem
            halben wagen zu führen mit zweien pferden; sunderlichen so soll in
            jeglichem glied ein erberger (sic) priester geschickt sein, die
            forchte gottes und den willigen gehorsam im volke zu bestätigen.
            Auch thät wohl not, dass ein jeglich glied ein sunderlich eigen
            gezelt haben möcht. Fürbass mehr, dass ein jeder bund soll haben
            eine besunder grosse steinbuchsen zu fünf oder sechs pferden, und
            also fugte sich wohl, dass ein ganze schickung möcht haben ein
            rechte grosse steinbuchs zu achtzehn oder zu zweinzig pferden, umb
            willen rechter ernstlicher hauptstürme zu schlossen und zu städten.
          </li>
          <li>
            Durch willen grosser und mehrer gottlicher erkenntlichkeit in gutem
            willen und rechtem fürsatze alle werke der geschäfte ernstlichen zu
            vollbringen, thut wohl not, dass in jeglichen geschick ein williger
            und verständiger prediger zugegeben werde zu mehrung der seligkeit
            in dem volke gottes, und auch dass in einem jeglichen geschicke ein
            richter mit vier schöpfen gesetzt und von den obersten hauptleuten
            bestätiget werde, umb willen der mutwilligen und boshaftigen alle
            unredlichkeit zu stören. Sunderlich und zu voran vor allen dingen,
            dass der dienst gottes in ernster furchte unter allem volke
            ordentlichen bestätiget werde, gott zu lobe und aller christenheit
            zu gute.
            <Qt
              publication={PUBLICATIONS.TOMAN}
              href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:fa60bc4f-e17a-4c47-909d-075119eb5eb8"
            />
            <Qt
              publication={PUBLICATIONS.ANZEIGER1872}
              href="https://archive.org/details/anzeigerfrkunde01nrgoog/page/n406/mode/1up"
            />
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <h5>b)</h5>
        <ol>
          <li>
            Celá řádná vozová hradba k vážným válečným záležitostem má mít v
            každém šiku sto dobře připravených válečných vozů. U těchto sta
            válečných vozů mají být určeny dva tisíce pěšího lidu a pět set s
            jízdními koňmi a u každého vozu má podle tohoto uspořádání zůstat
            dvacet pěších. Každý válečný vůz má mít pět silných vozových koní se
            čtyřmi silnými brannými vozovými pacholky, kteří mají mít svou zbroj
            u sebe na svém voze.
          </li>
          <li>
            Také má mít u každého vozu pět silných mužů z dvaceti pěších každý
            svou zbroj u sebe na válečném voze a k tomu pět volných sedel, aby
            je v případě potřeby hodili na vozové koně. Také má být u každého
            vozu mezi dvaceti pěšími tesař, kameník, zedník, kovář, horník,
            kolář, postrojník (?), dva puškaři a několik kušníků, z nichž každý
            má mít u sebe své nářadí a k tomu zvlášť svou zbroj a svou zbraň.
          </li>
          <li>
            Na každém voze mají být také dvě dobré sekery nebo více, škrabky (?)
            nebo motyky, rýče, lopaty, špičáky, krumpáče, páčidla (?), palice,
            železné sochory, čtyři dobré řetězy, necky (?), železné brzdné botky
            (?), rumpály (?), hřeby na prkna, a na každém válečném voze šest
            ručnic a vždy tři pušky na jednoho střelce.
          </li>
          <li>
            Také má být u těchto sta válečných vozů určeno sto vozů se spíží,
            uspořádaných zvlášť stejně jako válečné vozy, pod vlastními
            hejtmany.
          </li>
          <li>
            Také má mít každý válečný vůz zvlášť mezi svými dvaceti muži
            vlastního hejtmana. Pět vozů, to je jeden článek, je poslušno
            zvláštního hejtmana z jejich středu. A tak tvoří pět článků dvacet
            pět vozů, které jedou za sebou v jedné řadě. Čtyři takové svazy
            jedou ve čtyřech řadách a mají čtyři vrchní hejtmany a tito čtyři
            hejtmani mají nad sebou vrchního hejtmana s červeným praporcem; ten
            je pak nad sty válečnými vozy.
          </li>
          <li>
            Tak je těchto sto válečných vozů řádným plným šikem na dva a půl
            tisíce lidu. Pět set jízdních koní, kteří do takového šiku patří, má
            také své zvláštní roty se zvláštním velením, aby zůstávali vedle
            pěšího lidu ve vozové hradbě nebo z vozové hradby vyráželi, kdykoli
            by bylo třeba, a za nimi pět set vozových koní, kteří by pak také
            byli vypraveni jako jízda, jak je výše uvedeno.
          </li>
          <li>
            Také má mít každý článek malé dělo na kamenné koule, vezené na
            polovičním voze se dvěma koňmi. Zvlášť má být v každém článku
            počestný kněz, aby v lidu utvrzoval bázeň Boží a ochotnou
            poslušnost. Také by bylo dobře třeba, aby každý článek mohl mít
            zvláštní vlastní stan. Dále, aby každý svaz měl zvláštní velké dělo
            na kamenné koule na pět nebo šest koní, a tak by se dobře hodilo,
            aby celý šik mohl mít opravdu velké dělo na kamenné koule na osmnáct
            nebo dvacet koní, kvůli řádným a vážným hlavním útokům na hrady a
            města.
          </li>
          <li>
            Kvůli většímu a hojnějšímu poznání Božímu a aby se všechna díla
            těchto záležitostí vážně vykonávala v dobré vůli a správném úmyslu,
            je dobře třeba, aby ke každému šiku byl přidělen ochotný a rozumný
            kazatel k rozmnožení spásy v lidu Božím, a také aby v každém šiku
            byl ustanoven soudce se čtyřmi přísedícími a potvrzen nejvyššími
            hejtmany, aby zamezil veškeré nepoctivosti svévolných a zlovolných.
            Zvláště a především ze všeho, aby služba Boží byla v celém lidu
            řádně utvrzena ve vážné bázni, Bohu ke chvále a celému křesťanstvu k
            dobru.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
