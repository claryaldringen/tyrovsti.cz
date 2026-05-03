import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const CernaArmada = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="cerne-vojsko" />
        <h4>Černá armáda Matyáše Korvína{draft && <DraftBadge />}</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Černá armáda (maďarsky <i>Fekete sereg</i>), nazývaná také Černá rota
          nebo Černá legie, byla pozdně středověké uherské žoldnéřské vojsko ve
          službách krále Matyáše Korvína. Zrod tohoto profesionálního vojska
          započal již za vlády jeho otce Jánose Hunyadiho kolem roku 1440, ovšem
          s myšlenkou zavedení stálé profesionální žoldnéřské armády přišel až
          sám Matyáš. Inspiroval se k tomu pravděpodobně ze svého mládí, kdy
          četl o životě římského vojevůdce Julia Caesara. Žoldnéřské vojsko
          existovalo mezi lety 1458 až 1494. Oproti jiným vojskům té doby byla
          Černá rota stálou profesionální žoldnéřskou armádou, se kterou Matyáš
          dosáhl mnoha vítězství a politických úspěchů.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Black_Army_of_Hungary"
          />
        </p>
        <p>
          Matyáš rozpoznal důležitost a klíčovou roli pěchotních palných zbraní,
          jež následně významně přispěly k efektivitě a úspěchům jeho vojska.
          Zhruba každý čtvrtý příslušník Černé armády byl vybaven arkebuzou, což
          byl v té době neobvyklý poměr. Jen vysoká cena střelného prachu ve
          středověku bránila tomu, aby byl tento podíl ještě větší. Dokonce i
          desetiletí po rozpadu Černé armády, na přelomu 16. století, asi jen 10
          % vojáků západoevropských armád používalo palné zbraně. Hlavními
          složkami Černé armády byly pěchota, dělostřelectvo a lehká i těžká
          jízda. Funkcí těžkého jezdectva byla ochrana lehkooděné pěchoty a
          dělostřelectva, zatímco ostatní sbory dodávaly nepřátelům sporadické a
          překvapivé útoky. V počátcích se jádro armády skládalo z 6&nbsp;000 až
          8&nbsp;000 žoldnéřů. V roce 1480 se počet pohyboval mezi 15&nbsp;000 a
          20&nbsp;000 a na velké vídeňské vojenské přehlídce v roce 1485 dosáhla
          Černá armáda počtu až 28&nbsp;000 mužů (20&nbsp;000 jezdců a
          8&nbsp;000 pěšáků). Vojáci pocházeli z různých zemí a národů; byli
          mezi nimi především Češi, Bavoři, Srbové, Poláci, Chorvati a od roku
          1480 také Maďaři. Černá armáda byla tedy mnohem větší žoldnéřskou
          armádou, než armáda francouzského krále Ludvíka XI., jediné další
          stálé profesionální armády v tehdejší Evropě.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Black_Army_of_Hungary"
          />
        </p>
        <p>
          Prvotním základem Černé armády se stalo 500 těžkooděných jezdců, které
          Matyášovi v roce 1458 zapůjčil český král Jiří z&nbsp;Poděbrad.
          Postupně k nim přičleňoval zbytky bratříků a jiných českých žoldnéřů,
          kteří se v té době nacházeli v Horních Uhrách, a na základě mírové
          smlouvy z Vídeňského Nového Města z <b>19. července 1463</b> získal do
          svých služeb i Jana Jiskru z&nbsp;Brandýsa s jeho českými žoldnéři.
          Český podíl na vojsku zůstal vysoký po celou dobu existence armády a v
          některých obdobích, zejména v pěchotě, dokonce převažoval.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Typy zbraní a organizace</h5>
        <p>
          <b>Těžká jízda.</b> Nejdůležitějším typem zbraně, tím, který
          rozhodoval velké bitvy, byla stále těžká jízda a její početní podíl v
          armádě se ve srovnání s předchozím obdobím navíc zvýšil. Většinou se
          dělila na podjednotky zvané <i>legie</i>, což odpovídalo rytířskému
          praporu nebo později jezdeckým rotám (asi 100 mužů), které byly
          rozděleny do 25členných oddílů neboli <i>turm</i> v tehdejší latině. S
          příchodem dělostřelectva a posílením role lehké jízdy strategický
          význam těžké jízdy klesal, ale velké bitvy &ndash; ačkoli k nim během
          tažení docházelo stále méně často &ndash; byly i nadále rozhodovány
          tímto typem zbraně (Bitva na říčce Valové 1470, Bitva na Chlebovém
          poli 1479, Leitzensdorf 1484, Thomaswalde 1488).
        </p>
        <p>
          <b>Lehká jízda.</b> Role lehké jízdy v této době v armádě výrazně
          vzrostla. Na konci 14. století se husaři, kteří se objevili na
          jihoslovanských hranicích, stali důležitou součástí uherské jízdy.
          Nejvíce vynikali v nepravidelných bojích, nájezdech, přepadech, při
          zajišťování a průzkumu, ale obecně se osvědčili i v otevřených
          bitvách. Za vlády Matyáše existoval ještě starší typ lehké jízdy.
          Bonfini píše o táboře v Győri v roce 1477, že král má tři druhy jízdy
          &ndash; českou, rácskou (srbskou) a uherskou. Rozdíl zde neznamená jen
          národnost, ale hlavně typ jezdce: čeští jezdci byli těžká jízda,
          rácští jezdci byli husaři a uherští jezdci byli přechodná lehká jízda,
          která se blížila dřívějšímu typu. Na konci 15. století se však pod
          pojmem husaři již jednoznačně rozuměla uherská lehká jízda, která se
          do té doby stala převážně etnicky maďarská.
        </p>
        <p>
          Organizace lehké jízdy odpovídala organizaci těžké jízdy, byla tedy
          rozdělena na legie a <i>turmy</i>. Její význam vzrostl také proto, že
          podle Matyášovy strategie a taktiky docházelo k větším střetům s Turky
          jen zřídka, ale naopak se ustálily nájezdy na pohraniční oblasti, což
          bylo pro husary životně důležité.
        </p>
        <p>
          <b>Pěchota.</b> Zpráva benátského vyslance z roku 1479 odhadovala
          celkový počet uherských pěšáků na 16&nbsp;000. Z nich 6&nbsp;000
          pocházelo z Uher a Transylvánie a 10&nbsp;000 z Čech. Matyáš popsal
          organizaci a bojový styl této pěchoty v jednom ze svých četných
          dopisů:
          <br />
          <Cit>
            In tertio ordine pedites sünt, et hi quidem diversis ordinibus
            distincti, horum enim alii gregarii sünt, alii armigeri, nonnulli
            clipeati. Gregarii milites seu pedites pro qualibet angaria ad unam
            personam habere volunt VIII aureos. Armati vero seu clipeati, cum
            sine pueris et servitoribus arma et clipeos ferre nequeant, et quia
            hos pueros opus est illis in hunc usum pro necessitate conservare,
            volunt eos unusquisque ad arma singula et ad clipeos habere simul
            cum duorum hominum stipendio. Sunt praeterea magistri pixidum, qui
            sciunt trahere ex sclopetis et huiusmodi minoribus instrumentis,
            verum non ita strenui et utiles sunt, uti pedites ad trahendum ex
            pixidibus; sed post clipeatos in initio conflictum, antequam
            scilicet manus conferant, item ad expugnationes castrorum et
            defensiones maxime utiles sunt; itaque volunt et isti habere tantum,
            quantum pedites gregarii. Apud nos vero ista consuetudo observatur,
            quod quantacumque peditum summa sit, quinta pars ex pixidariis
            constituatur...armigeri apud nos muri loco habentnr, qui nunquam se
            loco movent, etiamsi ad unum in sua statione trucidentur. Geutes ver
            levis armature scciindum opportunitatein exciirniiit. et postquam
            fessi suiit vei graviora pericula sentiuut, post armatos se
            recipiimt, atfjue ibi restauratis viribus et resumpto spiritu
            consistunt, donec captata commoditate sursum ad pugnas excurrant;
            peditatumque denique omnem et pixidarios armati clipeatique milites
            circumsistuut, non aliter, quam si in munitioue consistant; clipei
            namque maiores ad invicem positi per circuitum formant effigiem
            castelli, et parietes representant, quibus protecti gregarii pedites
            et omnes qui in medio sunt, velut ex propugnaculis et munitionibus
            pugnant, et data opportunitate eruinpunt;
            <br />
            <br />
            (Ve třetím sledu jsou pěšáci, a ti se dělí do různých tříd: někteří
            jsou řadoví pěšáci, jiní obrnění, někteří štítonoši. Řadoví vojáci
            čili pěšáci chtějí za každou angarii (vojenskou povinnost za jednoho
            muže) dostat 8 zlatých. Obrnění a štítonoši, protože nemohou nosit
            zbroj a štíty bez chlapců a sluhů, a jelikož je nutné tyto chlapce
            pro tento účel vydržovat, chtějí za každou zbraň a štít zároveň plat
            jako za dva muže. Jsou také mistři střelných zbraní, kteří umějí
            střílet z ručnic a podobných menších zbraní; nejsou však tak udatní
            a užiteční jako pěšáci při střelbě z ručnic, ale za štítonoši na
            začátku střetnutí, než dojde k boji zblízka, a také při dobývání
            hradů a jejich obraně, jsou velmi užiteční. Proto chtějí i oni
            dostat tolik, co řadoví pěšáci. U nás se navíc dodržuje zvyklost, že
            ať je počet pěchoty jakýkoli, pětina z nich se sestavuje ze střelců
            z ručnic...těžce ozbrojení bojovníci jsou u nás považováni za zeď,
            která se nikdy z místa nepohne, i kdyby byli do jednoho na své
            pozici pobiti. Lehká pěchota vyběhne podle příležitosti a když se
            unaví nebo pocítí větší nebezpečí, uchýlí se zpět za obrněné, a tam
            po obnovení sil a po nadechnutí zůstane, dokud nevyužije vhodného
            okamžiku k dalšímu výpadu do boje. A nakonec všichni pěšáci i
            střelci z ručnic jsou obklopeni obrněnými a štítonoši, jako by stáli
            v opevnění; neboť větší štíty, postavené vedle sebe do kruhu, tvoří
            podobu tvrze a představují zdi, za nimiž obyčejní pěšáci a všichni,
            kteří jsou uvnitř, bojují jako z bašt a opevnění a při vhodné
            příležitosti vyrazí ven;)
          </Cit>
        </p>
        <p className="text-end">
          <br />- Matyáš Korvín v dopise svému tchánovi Ferdinandu I.
          Neapolskému, 10. března 1481, Záhřeb
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Hlavní bitvy a tažení</h5>
        <div className="anchor" id="jiskra" />
        <p>
          <b>Boje proti Janu Jiskrovi z&nbsp;Brandýsa (1458 až 1462).</b> Krátce
          po zvolení Matyáše Korvína uherským králem v&nbsp;lednu 1458 stála
          před novým panovníkem otázka, jak zlomit moc českých žoldnéřských
          kapitánů, kteří od konce vlády Ladislava Pohrobka ovládali velkou část
          Horních Uher (dnešní Slovensko) a&nbsp;hájili tamní hrady ve jménu
          císaře Fridricha&nbsp;III. a&nbsp;jeho nárokovaného dědictví. Bratříci
          a&nbsp;další oddíly bývalých husitských válečníků zde tvořili pevně
          zakořeněnou žoldnéřskou organizaci, jejíž hrady, opevněné tábory
          a&nbsp;výpadové pevnosti ohrožovaly těžbu drahých kovů a&nbsp;vybírání
          zemských daní. Matyáš proti nim vyslal několik tažení, jejichž
          hlavními výsledky byly obléhání hradů na Spiši, v&nbsp;Pováží
          a&nbsp;v&nbsp;Šariši. Janu Jiskrovi z&nbsp;Brandýsa, nejschopnějšímu
          z&nbsp;těchto velitelů, se boje táhly s&nbsp;přerušeními až do roku
          1462. Tehdy Jiskra rezignoval a&nbsp;na základě tajné klauzule mírové
          smlouvy z&nbsp;Vídeňského Nového Města z&nbsp;
          <b>19.&nbsp;července 1463</b> přešel se svými lidmi do Matyášových
          služeb. Sám Jiskra obdržel hrady <b>Şoimuş</b> a&nbsp;<b>Lipovu</b>{' '}
          v&nbsp;Sedmihradsku a&nbsp;jeho vojáci dostali výplatu{' '}
          <b>25&nbsp;000 dukátů</b>. Tímto spojením vznikl základ české pěchotní
          složky, která měla zůstat nejsilnějším pilířem Černé armády po celou
          dobu její existence. Závěrečným bodem této fáze bylo dobytí husitské
          pevnosti
          <b>Kosztolány</b> (Veľké Kostoľany) <b>31.&nbsp;ledna 1467</b>, po
          němž do Matyášových služeb přešel i&nbsp;její český hejtman František
          Hág.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Black_Army_of_Hungary"
          />
        </p>
        <div className="anchor" id="bosna" />
        <p>
          <b>Tažení do Bosny (1463).</b> Sotva měl Matyáš v&nbsp;Horních Uhrách
          do značné míry uvolněné ruce, využil osmanského tažení sultána
          Mehmeda&nbsp;II., které v&nbsp;létě 1463 smetlo bosenské království
          a&nbsp;skončilo popravou posledního bosenského krále
          <b>Štěpána Tomaševiće</b>. Sultánovo vojsko se sice po dobytí země
          stáhlo zpět, zanechalo však v&nbsp;klíčových pevnostech turecké
          posádky. Na podzim 1463 vytáhl Matyáš s&nbsp;uherským vojskem na jih,
          vedl několikatýdenní obléhání a&nbsp;v&nbsp;<b>prosinci 1463</b> dobyl
          zpět <b>Jajce</b>, klíčovou bosenskou pevnost ovládající střední tok
          Vrbasu. Spolu s&nbsp;dalšími přibližně sedmi desítkami hradů
          obsazenými v&nbsp;průběhu tažení tvořilo Jajce jádro nově zřízeného{' '}
          <i>jajeckého banátu</i>, jenž měl po další půl století blokovat
          osmanský postup k&nbsp;uherským hranicím. Bosenské tažení patří
          k&nbsp;prvním velkým válečným úspěchům mladého krále a&nbsp;ukázalo,
          že nově budované vojsko je schopné polních i&nbsp;obléhacích operací
          na vzdáleném válčišti.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Bosnian_Royal_War"
          />
        </p>
        <div className="anchor" id="moldava" />
        <p>
          <b>Moldavské tažení a obrana Sedmihradska (1467).</b> Po vzpouře
          sedmihradských stavů na podzim 1467, kterou Matyáš krvavě potlačil
          v&nbsp;Kluži, vytáhl s&nbsp;armádou přes Karpaty do Moldavska proti
          knížeti <b>Štěpánu&nbsp;III. Velikému</b>, jenž dříve odmítl uherskou
          svrchovanost a&nbsp;obsadil pohraniční pevnost Chilia. Tažení skončilo
          15.&nbsp;prosince 1467 nočním přepadem uherského vojska v&nbsp;
          <b>bitvě u&nbsp;Baia</b>: Štěpánovi muži zapálili dřevěné město,
          v&nbsp;němž se Matyáš ubytoval, a způsobili Uhrům těžké ztráty.
          Samotný král byl třikrát zraněn a&nbsp;musel se s&nbsp;vojskem
          stáhnout zpět do Sedmihradska. Tažení se sice nepodařilo dovést
          k&nbsp; politickému cíli, fakticky však zajistilo Sedmihradsko proti
          moldavskému zásahu na řadu let dopředu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Matthias_Corvinus"
          />
        </p>
        <div className="anchor" id="cesko-uherska" />
        <p>
          <b>Česko-uherská válka (1468 až 1478).</b> V&nbsp;březnu 1468 vyhlásil
          Matyáš na popud papeže Pavla&nbsp;II. válku českému králi Jiřímu
          z&nbsp;Poděbrad jako kacíři. Záminkou se stala podpora, kterou
          utrakvistický český král poskytoval rakouským stavům proti císaři
          Fridrichovi&nbsp;III., Matyášovu spojenci. Tažení začalo vpádem do
          Moravy: Černá armáda dobyla Třebíč, Brno, Olomouc, Jihlavu
          a&nbsp;Špilberk a&nbsp;postupně obsadila celou zemi. Na olomouckém
          sněmu <b>3.&nbsp;května 1469</b> byl Matyáš katolickou stranou zvolen
          českým králem, což vedlo ke vzniku dvou paralelních královských dvorů.
          Vojenské operace pokračovaly i&nbsp;v&nbsp; Slezsku
          a&nbsp;v&nbsp;obojí Lužici. Po smrti Jiřího z&nbsp;Poděbrad{' '}
          <b>22.&nbsp;března 1471</b> válka pokračovala proti jeho nástupci,
          polskému princi <b>Vladislavovi&nbsp;II. Jagellonskému</b>, kterého
          český sněm zvolil za nového krále. Boje probíhaly s&nbsp;proměnlivým
          úspěchem zejména na hranicích Moravy, v&nbsp;Slezsku
          a&nbsp;v&nbsp;Uhrách (vpád Kazimíra Jagellonského). Válka skončila
          teprve <b>olomouckým mírem</b> roku 1478, podle nějž si Matyáš
          ponechal Moravu, Slezsko a&nbsp;obojí Lužici, zatímco Vladislav získal
          vlastní Čechy; titul českého krále měli oba panovníci užívat souběžně.
          Pro Černou armádu znamenala válka desetiletou školu kombinovaného
          boje, polního obléhání a&nbsp;manévrů v&nbsp;hornaté zemi.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/%C4%8Cesko-uhersk%C3%A9_v%C3%A1lky"
          />
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Bohemian_War_(1468%E2%80%931478)"
          />
        </p>
        <div className="anchor" id="valova" />
        <p>
          <b>Bitva na říčce Valové (12.&nbsp;července 1470).</b> Drobnější,
          přesto dobře zdokumentovaná epizoda česko-uherské války. Jízdní oddíl
          Matyášova vojska přepadl na pochodu slezsko-české polní vojsko
          hejtmana <b>Václava Vlčka z&nbsp;Čenova</b>, vyslané Jiřím
          z&nbsp;Poděbrad na pomoc obléhanému Uherskému Hradišti. Vlčkovo
          vojsko, čítající podle pramenů kolem 2&nbsp;000 jízdních a&nbsp;vozové
          hradby, bylo na pochodu zaskočeno, část vozové hradby se nestihla
          uzavřít a&nbsp;Češi byli rozprášeni; sám hejtman s&nbsp;úzkou skupinou
          ujel. Šlo však o&nbsp;střet polního charakteru, nikoli o&nbsp;velkou
          rozhodující bitvu války.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Bitva_na_%C5%99%C3%AD%C4%8Dce_Valov%C3%A9"
          />
        </p>
        <div className="anchor" id="kazimir" />
        <p>
          <b>Vpád Kazimíra Jagellonského do Uher (podzim 1471).</b> Mladší syn
          polského krále Kazimíra&nbsp;IV., k&nbsp;němuž se přihlásili spiklenci
          kolem ostřihomského arcibiskupa Jana Vitéze, vstoupil s&nbsp;polským
          vojskem do Horních Uher. Před připravenou Černou armádou se však stáhl
          bez bitvy zpět do Polska a&nbsp;Matyáš spiknutí domácích velmožů
          potlačil bez většího ozbrojeného střetu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Matthias_Corvinus"
          />
        </p>
        <div className="anchor" id="habsburkove" />
        <p>
          <b>Tažení proti Habsburkům (1474 až 1488).</b> Spor s&nbsp;císařem
          Fridrichem&nbsp;III. o&nbsp;uherskou královskou korunu
          a&nbsp;o&nbsp;rakousko-uherské pohraničí přerostl v&nbsp;dlouhou
          válku, jejíž otevřená fáze začala roku 1477 a&nbsp;táhla se až do roku
          1488. Černá armáda postupně obsadila značnou část Dolních Rakous,
          dobyla řadu hradů a&nbsp;měst v&nbsp;Korutanech a&nbsp; Štýrsku
          a&nbsp;Matyáš osobně velel obléhání rakouských hlavních měst.
          V&nbsp;letech 1482–1483 padly do Matyášových rukou Hainburg, Bruck nad
          Litavou a&nbsp;Köszeg, roku 1484 Korneuburg. K&nbsp;polnímu střetu
          došlo u&nbsp;<b>Leitzersdorfu</b> (1484), kde uherská těžká jízda
          porazila císařské vojsko a&nbsp;otevřela cestu k&nbsp;Vídni. Po
          několikaměsíčním obléhání kapitulovala
          <b>1.&nbsp;června 1485</b> samotná Vídeň, opuštěná císařem,
          a&nbsp;Matyáš do ní slavnostně vjel v&nbsp;čele svého vojska. Při této
          příležitosti se konala vojenská přehlídka, na níž bylo shromážděno až{' '}
          <b>28&nbsp;000 mužů Černé armády</b>; město se na dalších pět let
          stalo Matyášovou rezidencí. Po dlouhém, osmnáctiměsíčním obléhání
          padlo také <b>Vídeňské Nové Město (17.&nbsp;srpna 1487)</b>. Pod
          uherskou kontrolu se tak ocitla celá Dolní Rakousy a&nbsp;značná část
          Štýrska. Na obsazených územích byla zavedena uherská zemská správa pod
          místodržícím Štěpánem Zápolským.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Austrian%E2%80%93Hungarian_War_(1477%E2%80%931488)"
          />
        </p>
        <div className="anchor" id="chlebove-pole" />
        <p>
          <b>Bitva na Chlebovém poli (13.&nbsp;října 1479).</b> Patrně
          nejslavnější vítězství Černé armády. Odehrála se v&nbsp;Sedmihradsku
          poblíž dnešního Șibotu (maďarsky Alkenyér) v&nbsp;údolí Maroše.
          Sedmihradský vojvoda <b>Štěpán&nbsp;V. Báthory</b> spolu se srbským
          despotou Vukem Brankovićem a&nbsp;valašským vojvodou Basarabem Laiotă
          čelili osmanskému tažení vedenému Aliem bejem (Koca Alim), jehož
          vojsko čítalo podle uherských pramenů až 30&nbsp;000 mužů. Báthory
          zahájil bitvu v&nbsp;nevýhodné pozici a&nbsp;v&nbsp;jejím průběhu byl
          těžce zraněn. Rozhodující obrat přinesl příchod <b>Pála Kinizsiho</b>{' '}
          v&nbsp;čele jeho jezdectva: jeho zdrcujícím útokem bylo osmanské
          vojsko rozprášeno. Vítězství zastavilo osmanské nájezdy do
          Sedmihradska na řadu let a&nbsp;stalo se jedním z&nbsp;mýtotvorných
          okamžiků uherských vojenských dějin.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Breadfield"
          />
        </p>
        <div className="anchor" id="thomaswald" />
        <p>
          <b>Slezská kampaň a&nbsp;bitva u&nbsp;Thomaswaldu (1488).</b>{' '}
          Ve&nbsp;Slezsku, jež si Matyáš podržel po olomouckém míru, vedla Černá
          armáda dlouhodobě řadu menších tažení proti odbojné šlechtě
          a&nbsp;proti pokusům jagellonské strany nárokovat zdejší knížectví.
          Z&nbsp;Wrocławi (Vratislavi) řídil zemskou správu uherský místodržící,
          jenž disponoval polním vojskem o&nbsp;několika tisících mužů. Roku
          1488 došlo u&nbsp;<b>Thomaswaldu</b> (dnešní Tomaszów Bolesławiecki)
          ke střetu, v&nbsp;němž uherské oddíly porazily slezské vojsko
          shromážděné odbojnými knížaty a&nbsp;potvrdily tak Matyášovu kontrolu
          nad zemí. Slezsko zůstalo v&nbsp;jeho rukou až do jeho smrti; jeho
          správou byl jako <i>Oberlandeshauptmann</i> v&nbsp;letech 1474–1479
          pověřen <b>Štěpán Zápolský</b>, později jej vystřídali další uherští
          velmoži. Slezská tažení byla pro Černou armádu druhou školou polního
          boje vedle rakouského válčiště; podstatnou roli zde hráli čeští
          a&nbsp;moravští kondotiéři v&nbsp;Matyášových službách (Dobeš
          Černohorský z&nbsp;Boskovic, Haugvicové z&nbsp;Biskupic, Vilém
          Tetour).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Black_Army_of_Hungary"
          />
        </p>
        <div className="anchor" id="osmanska-hranice" />
        <p>
          <b>Drobná válka na osmanské hranici.</b> Vedle vrcholné bitvy na
          Chlebovém poli se Černá armáda po většinu svého trvání věnovala drobné
          válce na uherské jižní hranici, hájení tzv. <i>banátů</i> (
          <b>Jajce</b>, <b>Srebrenik</b>, <b>Zvornik</b>) získaných v&nbsp;60.
          a&nbsp;70. letech a&nbsp;protiúderům proti osmanským akindžiům. Velké
          polní bitvy s&nbsp;Turky byly výjimkou; běžnou praxí byly nájezdy,
          přepady, oboustranné odvody zajatců a&nbsp;zajištění průchodů
          pohraničními horami. V&nbsp;této roli vynikali především husaři lehké
          jízdy a&nbsp;srbské oddíly v&nbsp;Matyášových službách pod velením{' '}
          <b>Jakšićů</b>,<b>Vuka Brankoviće</b> a&nbsp;dalších exilových rodů.
          Na uherské straně hranice řídili boj chorvatský bán{' '}
          <b>Blažej Maďar</b> a&nbsp;temešský župan <b>Pál Kinizsi</b>; jejich
          oddíly podnikaly do osmanských území rozsáhlé výpravy, z&nbsp;nichž
          nejznámější bylo tažení do Srbska v&nbsp;letech 1480–1481, při němž
          bylo do Uher přesídleno na 50&nbsp;000 srbských uprchlíků.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Black_Army_of_Hungary"
          />
        </p>
        <div className="anchor" id="smrt-matyase" />
        <p>
          <b>Smrt Matyáše Korvína (6.&nbsp;dubna 1490).</b> Král náhle zemřel ve
          Vídni, ve městě, jež si o&nbsp;pět let dříve podrobil. Bezprostřední
          příčinou byl podle dobových zpráv mrtvičný záchvat; Matyáš nebyl ani
          v&nbsp;padesáti letech a&nbsp;jeho stát stál a&nbsp;padal s&nbsp;ním
          osobně. Jeho smrt představuje pro Černou armádu zlomový mezník:
          vojsko, postavené výhradně na Matyášově osobní vůli a&nbsp;na výnosech
          jeho mimořádných daní, ztratilo jediného skutečného patrona.
          Nelegitimní syn <b>Jan Korvín</b> sice zdědil otcovo jmění
          a&nbsp;disponoval značnou částí armády, uherským sněmem však byl
          odmítnut. Korunu nakonec získal
          <b>Vladislav&nbsp;II. Jagellonský</b>, který stavům přislíbil zrušení
          Matyášových mimořádných berní; pokles výnosů o&nbsp;70
          až&nbsp;80&nbsp;% učinil pravidelnou výplatu žoldu nemožnou. Otázku
          dalšího osudu armády řešilo již následující dvouletí, kdy se neplacení
          žoldnéři uchýlili k&nbsp;plenění a&nbsp;byli nakonec v&nbsp;srpnu 1492
          rozprášeni Pálem Kinizsim u&nbsp; Szegednic-Halászfalu poblíž
          Kiskunhalas.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Matthias_Corvinus"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Velitelé a kapitáni</h5>
        <p>
          <b>Jan Jiskra z&nbsp;Brandýsa.</b> Mírová smlouva z Vídeňského Nového
          Města z <b>19. července 1463</b> obsahovala mimo jiné tajnou klauzuli,
          která zbavila císaře Fridricha III. kontroly nad Janem Jiskrou a jeho
          žoldnéři. Jiskrovi, který od smrti Ladislava Pohrobka s krátkými
          přestávkami bojoval proti Matyáši Korvínovi, byla udělena královská
          milost, byly mu dány dva hrady (Şoimuş a Lipova) a jeho vojáci
          obdrželi platbu 25&nbsp;000 dukátů. Následně jej Matyáš přijal i s
          jeho muži do svých služeb, čímž bylo dokončeno formování jádra Černé
          armády. Po dobytí husitské pevnosti <b>Kosztolány</b> (Veľké Kostoľany
          v&nbsp;západním Slovensku) <b>31. ledna 1467</b> přešel do Matyášových
          služeb i&nbsp;její český hejtman <b>František Hág</b>.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Black_Army_of_Hungary"
          />
        </p>
        <p>
          <b>Pál Kinizsi (kolem 1432 &ndash; 1494).</b> Uherský šlechtic a
          žoldnéřský velitel skromného původu, podle pověsti syn mlynáře z
          banátské oblasti. Pro svou nadlidskou sílu a neohroženost se stal
          legendou ještě za svého života. Matyáš jej jmenoval županem temešským
          a hlavním kapitánem Dolních Uher (
          <i>capitaneus generalis partium inferiorum</i>). Kinizsi se proslavil
          rozhodujícím zásahem v bitvě na Chlebovém poli 1479, kdy svým útokem
          zachránil ohrožené Báthoryho vojsko. Současníci o něm psali, že{' '}
          <i>bere do každé ruky meč a jako řvoucí lev se brodí krví</i>
          . Podle tradice nebyl nikdy poražen v žádné bitvě. Po Matyášově smrti
          zůstal věrný novému králi Vladislavovi II. a sám potlačil vzpouru
          Černé armády roku 1492. Zemřel v listopadu 1494 při tažení do
          Smederova a byl pohřben v jím založeném klášteře v Nagyvázsony.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/P%C3%A1l_Kinizsi"
          />
        </p>
        <p>
          <b>Imrich Zápolský (kolem 1430 &ndash; 1487).</b> Příslušník mocného
          uherského rodu Zápolských, blízký Matyášův důvěrník. V&nbsp;letech
          1486–1487 zastával úřad uherského palatina.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Imre_Sz%C3%A1polyai"
          />
        </p>
        <p>
          <b>Štěpán Zápolský (kolem 1430 &ndash; 1499).</b> Mladší bratr
          Imricha. V&nbsp;letech 1474–1479 zastával úřad slezského správce (
          <i>Oberlandeshauptmann</i>), v&nbsp;roce 1485 dobyl pro Matyáše Vídeň
          a&nbsp;stal se rakouským místodržícím. V&nbsp;letech 1492–1499 byl
          uherským palatinem za Vladislava II.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Stephen_Z%C3%A1polya"
          />
        </p>
        <p>
          <b>Štěpán V. Báthory (kolem 1430 &ndash; 1493).</b> Uherský velmož,
          sudí královský (<i>iudex curiae regiae</i>) a od roku 1479 vojvoda
          sedmihradský. Velel uherské polní armádě v bitvě na Chlebovém poli,
          kde byl těžce zraněn, ale ubránil pozici do příchodu Kinizsiho posil.
          Po Matyášově smrti pokračoval ve službě Vladislavu II., nakonec byl
          však pro tvrdou vládu nad Sékely roku 1493 úřadu vojvody zbaven a
          krátce poté zemřel. Jeho rod patřil k nejvýznamnějším uherským
          dynastiím a později z něj vzešel i polský král Štěpán Báthory.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Stephen_V_B%C3%A1thory"
          />
        </p>
        <p>
          <b>František Hág (Franek z Hájku, ze Sedlu).</b> Český kondotiér a
          bývalý hejtman husitské pevnosti <b>Kosztolány</b> (Veľké Kostoľany
          v&nbsp;západním Slovensku). Po jejím dobytí <b>31. ledna 1467</b>{' '}
          přešel s&nbsp;celým svým oddílem do služeb Matyáše Korvína.
          V&nbsp;Černé armádě patřil k&nbsp;nejvýznamnějším českým velitelům
          pěchoty a&nbsp;podílel se na taženích v&nbsp;Rakousích a&nbsp;ve
          Slezsku. Jeho jméno se v&nbsp;uherských pramenech objevuje v&nbsp;
          různých přepisech (Franko Hag, Frank z&nbsp;Háje), což odráží
          mezinárodní složení Černé armády. V&nbsp;roce 1492 stál v&nbsp;čele
          vzbouřených zbytků Černé armády rozprášených Pálem Kinizsim.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Black_Army_of_Hungary"
          />
        </p>
        <p>
          <b>Jan Hanuš Haugvic z&nbsp;Biskupic.</b> Příslušník moravského
          šlechtického rodu Haugviců, který hrál v Černé armádě mimořádně
          významnou roli. Spolu se svými příbuznými <b>Jindřichem Hynkem</b>,{' '}
          <b>Petrem</b> a <b>Mikulášem Haugvicem z&nbsp;Biskupic</b> tvořili
          rodový klan velitelů, jejichž oddíly bojovaly v rakouských taženích a
          ve Slezsku. Haugvicové po Matyášově smrti přenesli své zkušenosti zpět
          do moravského zemského vojska.
        </p>
        <p>
          <b>Dobeš Černohorský z&nbsp;Boskovic (zemřel 1493).</b> Moravský
          velmož a jeden z nejvýznamnějších českých velitelů Černé armády. Stál
          v čele rozsáhlých oddílů české těžké jízdy a pěchoty a podílel se na
          slezských a rakouských taženích. Matyáš si ho vážil natolik, že mu
          udělil zástavou rozsáhlá panství v Dolních Uhrách. Po roce 1490 se
          Boskovicové podíleli na uherských vyjednáváních o nástupnictví
          Vladislava II.
        </p>
        <p>
          <b>Vilém Tetour z&nbsp;Tetova.</b> Moravský zeman a kondotiér, který v
          Matyášových službách velel početnému oddílu české jízdy. Vyznamenal se
          v rakouských taženích a po roce 1485 držel posádku na některých
          dolnorakouských hradech. Tetourové byli jednou z mnoha drobných
          šlechtických rodin, jimž služba v Černé armádě umožnila výrazně
          zlepšit společenské postavení.
        </p>
        <p>
          <b>Blažej Maďar (Blasius Magyar, zemřel 1490).</b> Chorvatský bán a
          jeden z nejstarších Matyášových velitelů. Velel Černé armádě v bojích
          s Osmany v Bosně a Slavonii, krátce zastával i úřad sedmihradského
          vojvody. Patřil ke generaci profesionálních vojáků, kteří přerostli z
          hraničářské školy boje s Turky do velitelských pozic stálé žoldnéřské
          armády.
        </p>
        <p>
          <b>Mikuláš Csupor z&nbsp;Monoszla.</b> Sedmihradský vojvoda (1468 až
          1472) a jeden z velitelů armády v dobách jejího formování. Působil v
          moravských a slezských taženích proti Jiřímu z&nbsp;Poděbrad.
        </p>
        <p>
          <b>Demeter Jakšić.</b> Příslušník srbského exilového rodu Jakšićů,
          který se po pádu srbského despotátu uchýlil do uherských služeb.
          Jakšićové veleli důležitým oddílům srbské lehké jízdy (husarů) Černé
          armády a zastávali úřady na jižní hranici.
        </p>
        <p>
          <b>Mikuláš z&nbsp;Iloku (kolem 1410 &ndash; 1477).</b> Mocný uherský
          velmož a od roku 1471 i bosenský titulární král. Jeho hraniční bány a
          vlastní oddíly tvořily důležitou součást Matyášova jižního obranného
          systému proti Osmanům.
        </p>
        <p>
          <b>Melchior Löbel.</b> Velitel německých žoldnéřských oddílů Černé
          armády, doložený zejména v rakouských taženích. Velitelé jeho typu
          zajišťovali profesionální německou složku armády vedle dominujících
          Čechů a Maďarů.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className="anchor" id="vzpoura" />
        <h5>Vzpoura a rozpad armády (1490 až 1492)</h5>
        <p>
          Matyáš Korvín náhle zemřel <b>6. dubna 1490</b> ve Vídni a s ním
          ztratila Černá armáda svého jediného skutečného patrona. Jeho
          nelegitimní syn Jan Korvín nedokázal prosadit svou kandidaturu a
          uherským králem byl zvolen český král Vladislav II. Jagellonský, který
          byl uherským stavům přijatelný především proto, že přislíbil zrušení
          Matyášových mimořádných daní. Snížení berní o 70 až 80 % však
          znamenalo, že nový panovník nebyl schopen platit pravidelný žold
          vojsku, na němž stála Matyášova moc.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Black_Army_of_Hungary"
          />
        </p>
        <p>
          Žoldnéři, jejichž platy se začaly opožďovat o měsíce, sahali k
          tradičnímu prostředku pozdně středověkých vojsk &ndash; plenění
          obyvatelstva. Stížnosti zemských stavů sílily a královská rada se
          musela armádou zabývat jako naléhavou politickou hrozbou. V průběhu
          let 1491 a 1492 došlo k otevřené vzpouře části Černé armády v
          Sedmihradsku a v jižních Uhrách, kde se největší pluky ocitly bez
          zásobování. Vzbouřenci se vydali na pochod údolím Tisy a začali
          drancovat krajinu.
        </p>
        <p>
          Vladislav II. svěřil potlačení vzpoury <b>Pálu Kinizsimu</b>,
          temešskému županovi a&nbsp;hlavnímu kapitánovi Dolních Uher. V&nbsp;
          čele vzbouřenců stál <b>František Hág</b>, někdejší hejtman husitské
          pevnosti Kosztolány. Kinizsi se svým vojskem a&nbsp;oddíly srbských
          Jakšićů zastihl vzbouřence v&nbsp;srpnu 1492 u&nbsp;
          <b>Szegednic-Halászfalu</b> poblíž Kiskunhalas v&nbsp;jižních Uhrách.
          Bývalí Matyášovi vojáci, mezi nimiž byla velká část českých pěšáků,
          byli rozprášeni v&nbsp;krátké, ale krvavé bitvě. Část zajatců byla
          popravena, část začleněna do jižních hraničních posádek na turecké
          hranici. Zbytky armády se postupně rozpadly či najaly do služeb
          okolních zemí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Black_Army_of_Hungary"
          />
        </p>
      </Col>
    </Row>
  </>
)
