import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Cit } from '../../../Citation'

export const KrivoklatskaManskaSoustava = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="manska-soustava" />
        <h3>Křivoklát</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Počátky křivoklátského manského systému lze spolehlivě vysledovat do
          období vlády Jana Lucemburského (konkrétně po roce 1337), ze kterého
          pocházejí první dochované listiny, v nichž byly stanoveny podmínky
          lenního vztahu a rozsah majetku, k němuž se lenní povinnost vázala.
          Největší počet těchto listin pak pochází z doby Václava IV.
          <Qt publication={PUBLICATIONS.RAZIM1} note="Str. 22" />
        </p>
        <p>
          Z počátku se manství udělovala jen do smrti držitele, později dědičně
          a to výhradně jen mužům. Vdova mohla držet manství jen s výslovným
          královským povolením, pokud se nějaký muž zaručil přísahou, že za
          vdovu převezme služební povinnosti. Man nesměl bez králova svolení
          manský statek prodat, zadlužit ani dát jako věno - takový úkon byl
          neplatný.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          Po manově smrti dědili manství synové a vnuci, kteří museli zapatit
          poplatek zvaný <i>laudemium</i>, do roka se ohlásit u purkrabího (nebo
          hejtmana, pokud purkrabí nebyl k dispozici) a složit manskou přísahu.
          Byla-li tato lhůta promeškána, spadlo manství zpět na krále jako
          promlčené. To se stalo Majírkovi ze Sence roku 1389 a Valentovi z
          Kounova roku 1567, který koupil roku 1558 manský statek v Kounově od
          kněževeského rychtáře Havla za 700 kop grošů, ale nevložil jej do knih
          manských ani nepřišel složit přísahu pod věž na Křivoklát a proto
          statek roku 1567 propadl na arciknížete Ferdinanda.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          Manové přijímali léno složením přísahy u železných vrat pod
          čtverhranou průchoditou věží. Poté byli uvedeni do rytířské síně a zde
          jim byla ohlášena jejich povinnost a předána skříň pro uložení zbroje
          a jiných věcí. Při tom manové obdarovali hejtmana kloboukem s
          chocholem (mit Federpusch).
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          K zápisům manství měly sloužit desky manské, které byly roku 1454
          založeny na Křivoklátě, ale manové se často pojišťovali ještě zápisem
          do desk dvorských. Roku 1560 nařídil Šternberkovi arcikníže Ferdinand
          otevřeným dopisem svolat všechny many aby se se svými majestáty
          dostavili na hrad. Po prohlédnutí všech listin jim bylo nařízeno, aby
          se řidili jen knihami manskými a neuchylovali se pod jinou pravomoc
          než křivoklátského hejtmana. Od této doby již nesměli manové zapisovat
          do desk dvorských, přesto máme doklady, že manové desky manské
          opomíjeli a zapisovali jen do desk dvorských.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          Proč bylo naléháno na to, aby se u všech hradů vedly manské knihy
          vysvětluje zápis dvorského soudu z roku 1479:{' '}
          <Cit>
            Zjistilo se, že mnoho dědin manských bylo již od koruny české
            odtrženo, jeden druhému dědiny prodávaje, druhému listy královské
            vydává bez povolení králova; když pak listové ztratí se, tu manské
            dědiny vyjdou z paměti a za svobodné se vydávají. Tak služba králova
            hyne a úřad dvorský chudne.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          Manství mohlo zaniknout buď <i>felonií</i>, t.j. proušením věrnosti,
          nesložil-li man přísahu včas, urážkou panovníkovy osoby, nekonáním
          povinosti a jiným spáchaným zločinem, nebo svedením služebnosti (např.
          Hedčany) ať už zdarma, za věrné služby nebo za úhradu. Král nemohl sám
          svodit manství bez povolení pánů z té příčiny, protože manství nebylo
          čistě statkem komorním (patřící králi), ale statkem zemským (státním).
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          Zkázou statku uděleného v manství služebnost nezanikala, ale pouze se
          zmenšila. Když byly za husitských válek úplně spáleny vsi Pístný,
          Okrouhlík, Šimín a Olešek, k nim vázané povinnosti přešly na držitele
          pozemků pozůstalých po pustých vesnicích.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          Manské spory vyřizoval zvláštní manský soud, který soudil svéprávně,
          ale lovci a hajní měli svou zvláštní porotu.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 109" /> Tento soud byl
          složen z 12 manů jako přísežných soudců neboli konšelů. Původce
          (žalobce) i pohnaný (žalovaný) si každý zvolil 6 manů za soudce.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
          Takto Jan z Tyter vypověděl roku 1456 před soudem dvorským:{' '}
          <Cit>
            Když nás 12 manów a služebníków sedlo na sud k rozkázání pana Alše
            Holického (ze Šternberka), súdili smě o dědictví v Sadlně a to
            přisúdili smě Drahoňovi.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          Po smrti Aleše Holického ze Šternberka (+1455) přestal manský soud
          fungovat a tak se (ušlechtilí) manové obraceli na dvorský soud, kdežto
          hajní zůstali při soudě hradském: Když roku 1454 pohnala Dorota z
          Chyňavy hajné Václava Panošku a Jana Rybsu k dvorskému soudu, že jí
          neprávem drží dědinu hajničí, psal purkrabí Jan z Kozojed dvorskému
          soudu, že{' '}
          <Cit>
            ti hajní k soudu dvorskému nepřináleží a mají od starodávna svůj
            zvláštní soud na Besedici.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          Jedno z posledních zasedání manského soudu v 15. století nastalo, když
          bratři Jindřich a Jan Borňové ze Slabec pohnali roku 1456 Jana Drahoně
          o dědinu v Sadlně. Tehdy zemský správce Jiří z Poděbrad nařídil, aby
          si každá strana sehnala 6 služebníků (manů) ke své spravedlnosti.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          Roku 1460 bylo nařízeno, aby všichni obecní služebníci královi
          (manové) a rychtáři vsí královských o všechny dluhy, dědiny, škody a
          zmatky souzeni byli před sudím dvorským, kdežto hlásní, pověžní a
          vrátní hradů královských o malé věci před purkrabím svého hradu.{' '}
          <br />
          Jenže když pak roku 1479 Jan Drahoň ze Sadlna pohnal Sulka ze Šlovic
          před soud dvorský o dvůr v Panoším Újezdě, oznámeno bylo původu
          (žalobci) že nesmí se souditi přes svého purkrabího rozkázání.
          <br />
          Také Kateřině Václavkově z Panošího Újezda roku 1487 nařízeno od soudu
          dvorského, aby obžalovaného Jana Babtistu hledala na právě hradském.
        </p>
        <p>
          Roku 1529 vzešly hned tři spory najednou: Mlynář Daniel v tůči pod
          Rakovníkem odpověděl městské radě, že s ní nemá co činiti, ale dle
          majestátu krále Vladislava má se spravovati jen hradským hejtmanem.
          Václav Strojetický na Chříči měl spor s many s Hlohovic o louky a
          Jindřich Krakovský utkal se s hejtmanem o lesy.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          Tu teprve hejtman Albrech z Vřesovic psal soudu dvorskému, že je
          potřeba znovu osadit manský soud, aby manové mohli dosáhnout
          spravedlnosti a nemuseli jít pokaždé k dvorskéomu soudu. Nevědělo se
          ani kým a jakým způsobem má být soud osazen neboť k tomu nebyly
          zachované žádné registry a ani si to již nikdo nepamatoval. Zpráva
          také uvádí, že{' '}
          <Cit>
            osoby rytířské služeb manských nekonají, sedmi i osmi nebožátky
            statek osadili a ta služby zastávati musí.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          Nejvyšší sudí Václav Bezdružický toto podání vyšetřil a roku 1531 psal
          radám české komory, že{' '}
          <Cit>
            pořádek při soudě manském na Křivoklátě stejný jest jako na
            Karlštejně, Hluboké, a Zvíkově. Totiž původ (žalobce) pohání šesti
            služebníky (many) strany své spravedlnosti k osazení soudu a pohnaný
            též šesti k roku od úředníků desk dvorských položenému; a těch 12
            soudců zahájíce soud, strany slyšeli a nález učinili aneb strany na
            mocné smluvce (ubrmany) podali. Také páni soudu dvorského (aby) many
            před soud na Křivoklát podávali a teprve když tam porovnáni nebyli,
            tehdy od purkrabí k úředníkům dvorským obehnáni byli. Ale hajní
            křivoklátští od starodávna na Besedici zvláštní svůj soud mívali.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          Základem k následujícímu soupisu služebností byl popis manů Hrádku
          Křivoklátu z roku 1552, který byl doplněn z mnohých jiných pramenů.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Manství služebná</h4>
        <ol>
          <li>
            Všetaty 5 dvorů a k nim ves Loučko. Držitel musil na rozkaz
            purkrabího na koni přijeti na hrad a tu býti, pokud potřeba toho
            káže. Nic jiného se mu dáti nemá než jísti a píti.
          </li>
          <li>
            Hlivojedy a Jezevce vsi celé (obě splynuly s Petrovicemi). Držitel
            obou statků má dva oděnce na koních k zámku vypraviti na ten způsob
            jako u Všetat se píše.
          </li>
          <li>
            Hracholusky ves s tvrzí a dvůr poplužní. Držitel má ve všem odění
            přijeti na zámek a tu býti, dokud páni káží. Dá se mu jísti a píti.
          </li>
          <li>
            Šlovice ves s tvrzí a dvůr poplužní, Sadlno dvůr poplužní, r. 1431
            přidána k nim ves Smrk. Man sám druhý má přijeti na zámek ve všem
            holém železe.
          </li>
          <li>
            Vlčí Hora tvrz a dvůr poplužní, vypraví jednoho oděnce na hrad (díl
            pustiny časem přidělen k Lubné, druhý ke Hvozdu).
          </li>
          <li>
            Příčina dvůr poplužní zvaný Dětřichovský s dvojím poplužím a dvory
            kmetcí. Pán má otavu do záchodu na hrad voziti. Též jsou tu čtyři
            osedlí, kteří z práva vězňů na hradě hlídají.
          </li>
          <li>
            Třtice tvrz, dvůr poplužní a ves, držitel má v železe na zámek
            přijíti a to dělati, což mu páni káží.
          </li>
          <li>
            Hnidousy dva dvory poplužní. Pán má v železném odění na zámku
            sloužiti a k tomu krevního psa králi připraviti.
          </li>
          <li>
            Hedčany dvůr poplužní, dvory kmetcí, lesy a potok. Držitel má se
            samostřílem na hrad přijíti, tu šípy dají se mu dělati na královský
            groš.
          </li>
          <li>
            Kožlany dvůr poplužní s 1 lánem a potokem. Man má se samostřílem na
            hradě sloužiti, šípy dají se mu dělati na královský groš.
          </li>
          <li>
            Plaveč tvrz s dvorem poplužním a Šiškov (Čížkov) ves. Držitel sám
            druhý má v odění se samostříly přijíti na hrad a tu býti, dokud páni
            káží. Dá se mu jen jísti a píti.
          </li>
          <li>
            Březnice dvůr poplužní, od r. 1474 i dvory kmetcí. Manství
            propuštěno r. 1527 (viz Hedčany).
          </li>
          <li>
            Kolešov Veliký 11 dvorů kmetčích s 10 lány dědin. Pán má se vydati
            na zámek ve všem holém železe. Svedeno r. 1529 (viz Hečďany).
          </li>
          <li>
            Skalka dům u hradu Křivoklátu s lukami pod ním, 8 lánů ve vsi
            Chrášťanech a ves celá Kalubice. Man má sám třetí přijíti na zámek,
            mimo jísti a píti nic jiného se mu nedá. Již roku 1411 byly
            rozděleny.
          </li>
          <li>
            Chrášťany 8 lánů dědin. Pán má v železném odění přijíti na zámek a
            tu býti, dokud páni káží.
          </li>
          <li>
            Přílepy 5 dvorů kmetcích. Držitel má každý rok dáti 6 samostřílů
            nových a 4 střelce ústavně (vždy) na hrad poslati. Jiného se jim
            dáti nemá, než oděv a obuv.
          </li>
          <li>
            Žehrovice dvůr s jedním lánem. Má oděnce na zámek vyslati a tu býti,
            dokud páni káží.
          </li>
          <li>
            Lišná. Pán má v odění na hradě sloužiti. Znovu vysazena roku 1552 s
            pustatinami Okrouhlíkem a Řebříkem Jiříkovi Mniškovskému z
            Entenšlanku, aby dle potřeby s jedním koněm na hradě sloužil, v
            přední i zadní zbroji s oboječkem, v šorci a zárukaví brněném,
            piklhaubcem, ručnicí a sviním oštěpem, jak na střelce jízdného
            náleží.
          </li>
          <li>
            Krakov dvůr poplužní, k němu vesnice Rousinov, Šípy a Všesulov. Pán
            má se 4 kopami (kopiníky) na hrad přijíti. Povinnost tato byla roku
            1363 převedena na hrad Krakovec, ale svedena roku 1497.
          </li>
          <li>
            Chříč tvrz s dvorem poplužním a dvory kmetcí. Man má v železném
            odění přijíti na hrad a dělati, co mu páni přikáží.
          </li>
          <li>
            Kounov a Lhota. Král Václav dal roku 1402 Jaroslavovi z Nevida 8
            lánů bez ¼ v Kounově a 12 lánů pustých ve Lhotce, aby s jedním koněm
            zbrojným a s kuší na hradě sloužil.
          </li>
          <li>
            Ruda a Lhota (Česká) vsi celé. Pán má sám druhý v železném odění
            přijíti na hrad a tu býti, dokud páni káží.
          </li>
          <li>
            Krušovice dvůr poplužní s 2 lány dědin. Držitel na rozkaz přijde se
            samostřílem na hrad a tu šípy dají se mu dělati.
          </li>
          <li>
            Žilina dvůr poplužní, jehož držitel přijda se samostřílem na hrad
            činil, co mu páni kázali.
          </li>
          <li>
            Okrouhlík jinak Borňov (někdy tvrz pod Unhoštěm). Pán má před
            vojskem páliti. Neobyklou služebnost jest třeba vyjasniti. Již
            Dalimil praví, že panovníci čeští, jsouce pozváni k císařskému dvoru
            do Němec, pouštěli před sebou oheň. Král Václav IV. byv pozván r.
            1370 do Norimberka, při příchodu svém dle způsobu předků činiti dal
            oheň veliký na dvou místech, aby oznámen byl příchod jeho, neboť od
            starodávna králové mají právo v plamenech a ohni přicházeti. Knížata
            němečtí a měšťané jsouce ohněm upozorněni na příjezd králův, vyjeli
            mu v ústrety. Druhý palič byl v Městečku.
          </li>
          <li>
            Újezd Panoší tři dvory poplužní. Dva držel roku 1508 Boreň ze Slabec
            s povinností, kdyby se války strhly, na vyzvání hejtmana na hrad
            přijíti, tu 4 týdny pobýti, po té době, kdyby potřebován byl, měl
            zůstat a služba žoldnéřská (plat) se mu dá.
            <br />
            Jeden z těchto dvorů r. 1552 držel Jan Kfelíř ze Zakšova, který byl
            povinen se samostřílem přijíti a činiti, co mu páni káží.
            <br />
            Druhý dvůr (Kubovský) držel Jiřík Kfelíř s toutéž povinností. Třetí
            dvůr (Jiráskovský) s 1 ½ lánem držel Mikuláš ze Vlenec s toutéž
            povinností.
          </li>
          <li>
            Senec ves s tvrzí a dvorem poplužním. Otíkovi Majírkovi byla roku
            1389 obnovena povinnost na rozkaz purkrabího s kuší dostaviti se na
            hrad. Ale Václav Chotek na Senci přiznal se roku 1581, že má
            povinnost v červené sukni a žlutou čepičkou na bílém koni dostaviti
            se na hrad, kuší bez tětivy s naloženým jílitem proti králi mířiti,
            když do zámku vjíždí.
          </li>
          <li>
            Hrádkov (nyní Hradecko). Král Ludvík roku 1525 vysadil ves pustou
            Hrádkov právem manství Martinovi z Kozlova, kdyžby král přijel na
            Křivoklát a toho žádal, aby s 2 koňmi na hrad se dostavil a tu
            sloužil, dokud král neodjede. Strava, obrok a jiné potřeby dají se
            mu na královský groš.
          </li>
        </ol>
        Písař roku 1552 poznamenal, že někteří páni dali se slyšeti, že již
        manství s sebe byli svedli.
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Manství robotná</h4>
        <ol>
          <li>
            Budy pod hradem. Roku 1457 dům manský a něco luk řečených Ležice, k
            tomu 5 lánů s podsedkem, ale r. 1552 ves, o níž čte se, že osadníci
            spouštějí do sklepů na hradě vína a jiná pití drahá. Strava dá se
            jim na hradě. Také jest tu jeden, který má do Častonic pro posly
            choditi.
          </li>
          <li>
            Městečko u zámku. Ti z rok do roka dřevo před pivovar vozí, když
            rozkaz jim dán. Také jest tu jeden, který cožkoli v městě Rakovníce
            se koupí, má na zámek přinésti. Jiný má každou sobotu na zádech
            přinésti z Rakovníka 4 kopy vajec, od chůze dají se mu 4 vejce. Jest
            tu poustka, na které seděl Jan Rudlík. Držitel jest povinen, když
            paní královna v šestinedělích s mladým králem leží, jí slavíky k
            zpívání pod okna honiti. Jiný má povinnost, kdyby někdo koho na
            panství zamordoval nebo něco neřádného učinil, v jeho statek se
            uvázati a opatřiti, aby vše bylo zachováno. Jakub Carda má
            služebnost s králem táhnouti a páliti, kde by král kázal. Tomu dá se
            bílý kůň a červené šaty (viz Okrouhlík). Jiní mají přihnati na
            zámek, cožkoli kuchmistr k masu koupí. Všickni jsou povinni, ten
            palič s nimi, dobytek z jednoho dvora do druhého honiti, na lov
            choditi, škodlivou zvěř chytati a tenata voziti.
          </li>
          <li>
            Roztoky. Jsou tu dva hlásní a jeden dobře osedlý, který má před
            sladovnu k hvozdění sladu dřeva voziti. Ještě jsou dva pivovarničí,
            ti mají piva na hradě vařiti, když páni poručí. Také jsou dva hajní
            nebo úředníci, kteří lesy hlídají, jichž je na zdéli 1/3 míle, zšíři
            za 2 míle, a písaři lesnímu pomáhají důchodů dobývati. Jiný má
            přihnati na hrad, cožkoli kuchař k masu koupí. Jeden ptáčník dává na
            každou neděli kopu sýkor, počnouc od neděle po sv. Petru až do sv.
            Václava a 2 veveřice až do masopustu. O velikonocích dá tetřeva
            hluchého, též má lapati jestřáby a sbírati krahujce, když páni káží.
            Jest tu také dědina hradovému kuchaři k ruce. Nade vsí v Rybářích
            jsou dva převozníci, kteří mají posly, psy a tenata k hradu zdarma
            převoziti. Také jsou povinni hrad rybami zásobiti.
          </li>
          <li>
            Městečko Zbečno. Někteří mají hrad zametati a věže kliditi. Jiní
            mají velikou světnici na hradě vytápěti od sv. Havla do sv. Jiří.
            Jeden má lopaty dělati, by se jimi hrad čistil a trucky k nošení
            hnoje. Tři holoty musí na rozkaz pánů na lov jíti. Jsou také 4
            rybáři, z nichž každý dává každý pátek za 14 peněz ryb. Jeden dává o
            Velikonocích k stolu pana purkrabího hluchého tetřeva. Ještě jsou š
            ptáčníci, ti dávají kopu sýkor a stehlíků každou neděli od sv. Petra
            až do Václava a tolik veveřic, kolik dnů je v masopustě. Zvlášť jest
            jeden lovec zvířecí. Jeden dává z rok do roka do kuchyně na hrad 2
            kosíře a sekeru masnou. Kdyby se který zlámal, musí ihned jiný
            udělati. Jeden jménem Havlů má dáti Čtvera nosidla, na kterých se
            kámen nosí a 11 lopat, jako jimi zámek strouží. K těm potřebám dá se
            mju dříví navoziti. Jeden má k stolu páně purkrabovu dáti tolik
            veveřic, kolik neděl je v masopustě.
          </li>
          <li>
            Sýkořice. Osadníci mají na lov choditi, vrata přední neb prostřední
            hlídati, když jim páni poručí. Při třetím toku i v říji jelenů vozy
            vedle bukovských spravovati, mazati, tenata na vůz nakládati, do
            kolen voziti a je usušiti. Na jaře, když tetřevi pukají, a na
            podzim, když jeleni řvou, po jednom týdnu hlídati.
          </li>
          <li>
            Račice. Ti mají na každý týden dáti 12 hrnců a 12 kahanců a na
            zádech je donésti. Jeden má z práva s věžníky choditi na lov na
            svině.
          </li>
          <li>
            Újezd nad Zbečnem. Ti mají zvěřinu nésti nebo voziti každý čas, když
            páni káží. Jest tu jeden topič veliké jizby na hradě. Jiný je
            holota, ten má na hony choditi.
          </li>
          <li>
            Buková. Tu jsou holoty a tenetníci, kteří mají z práva na lov
            choditi, vozy mazati, plátna a tenata voziti i sušiti a zvěř
            škodlivou v lečích obcházeti. Také jsou tu tři hajní, kteří bukovské
            lesy hlídají; těch lesů jest za 7/4 míle zdelí a 2 míle zšíří.
          </li>
          <li>
            Branov. Čtyři vrátní mají ustavičně přední vrata hlídati, střídajíce
            se dva a dva. Tři střelci mají na lov choditi aneb se samostříly na
            hrad přijíti. Ještě jsou dva poslové, kteří chodí s listy do
            Plzeňska, Vltavska a jiných krajů.
          </li>
          <li>
            Nezabudice. Ve vsi jsou dva pekaři, kteří mají na hradě chléb péci.
            Jeden má se samostřílem bez tětivy na hradě býti a pan purkrabí dá
            jemu sám tětivy dělati. Král Vladislav r. 1500 dovolil, aby ze dvoru
            poplužního a krčmy držitelé neplatili jiných úroků než na Štědrý den
            2 kapouny aneb za každého 15 grošů m.
          </li>
          <li>
            Lašovice. Jest tu jeden hajný, který hlídá bukovských lesů, a jeden
            posel, který chodí s listy do Žatecka.
          </li>
          <li>
            Ryšín. Jest tu jeden posel, který chodí s listy až ke Kadani a toho
            kraje žateckého.
          </li>
          <li>
            Pustověty. Tu jsou tři střelci, Jan, Běluch, Albrecht Bořen; ti mají
            se samostříly býti na hradě a to činiti, co a kdy páni káží.
          </li>
          <li>
            Vníče (Míče) víska. V ní jest jeden služebník, který dává 12 číší
            pících na každou neděli pro stůl pana purkrabího. Jiný dává na
            každou neděli jeden džber vodní neb 2 střezy. Jedna dědina jest
            pustá, z ní měl by bečvář kádi, sudy, džbery a jiné věci pobíjeti.
          </li>
          <li>
            Častonice, ves celá dobře osedlá. V ní jsou všickni poslové do Prahy
            a za Prahu do těch krajin, kam a kdy páni poručí. Také jest tu jeden
            lovec, který má z práva zvěř honiti. (Později vozili všecky potřeby
            pro psy do myslivny na Skalce u hradu.)
          </li>
          <li>
            Lužná. Rychta svobodná s 2 lány a dvěma poddanými, jedním řezníkem,
            druhým pekařem. K ní mlýn svobodný, krčma, zahrada ve 4 strychy a
            louka Hvozdec (r. 1348). Z ní na každé vánoce dávají se 4 zajíci
            (1552 dva manové, kteří dávali po 2 zajících). Rychtář má ještě
            jeden lán hajnový, z toho má úředníkům býti nad lesy. Mimo to má půl
            lánů dědiny, za který povinen jest porybnému a lovcům dáti spotřebu
            chleba, když rybník Královský pode vsí se loví.
            <br />
            Někteří osadníci byli povinni v době říje potýkající se jeleny
            rozháněti. Za to měli spravedlnost k svým potřebám roubati jim
            vykázaný les (jedlinu). Ten dosud sluje manská jedle. Přilehlé
            hájemství nese jméno zvířecí seč. Byla to lesní louka (spíše
            palouk), na které se těžilo k zimnímu krmení zvěře.
          </li>
          <li>
            Hlohovice. V nich je 9 služebníků, kteří mají se samostříly býti na
            hradě, kdykoliv se poroučí, a to činiti, co páni káží. Zejména z
            jara tetřevy v toku a na podzim jeleny v říji hlídají. Také jest tu
            dvůr poplužní, k němu mlýn a výheň. Král Vladislav r. 1497 potvrdil
            manům jejich stará práva; kdykoliv potřeba bude, mají jednoho se
            zbrojí vyslati na hrad. Kdekoliv jedou neb jdou, mýta ani tržného
            neplatí. Mají býti souzeni jen při soudě manském na hradě a od toho
            hradu nemají býti nikdy odtrženi, neb jsou se dobrovolně předkové
            jejich v tu službu poddali. Roku 1714 byly všecky povinnosti manské
            svedeny na statek Kvítkovský s krčmou.
          </li>
          <li>
            Hlohovičky. Ves dobře osedlá, v ní jest 11 služebníků, kteří mají se
            samostříly na hradě býti, hradu hlídati nebo i jiné věci učiniti,
            jeti nebo jíti, kam páni poručí. Není třeba za to platiti, neb to z
            práva učiniti mají.(1527 propuštěny z manství, viz Hedčany).
          </li>
          <li>
            Otročiněves, ti manové mají čtyřem vozatajům platiti (t. j. čtyři
            povozy postaviti).
          </li>
          <li>
            Újezd Panoší jest ves veliká, dobře osedlá. V ní jest 17 manův
            (panoší, odtud jméno vsi), ti mají se samostříly na hradě býti, když
            jim poručeno, a to činiti, což páni káží. Není třeba jiného jim
            dávati, než toliko stravu.
            <br />
            Hejtman Oulička r. 1566 dosvědčil, že poddaní z Ujezda odedávna
            dostávali týdně 48 bochníků chleba a 8 gr. malých, ale pan Šternberk
            (1560) dávku tuto zrušil.
            <br />
            Snadno se dopočítame, že prvotně bylo 16 manů, z nichž každý
            dostával 3 bochníky a půl groše.
            <br />
            Písař register r. 1552 sestaviv služebnosti v celek dodal:
            Služebností jest drahně více, ale registra jsou trošku pokažena, že
            se s dostatkem vyčísti nemohla, tudy toho pominuto, než lidská paměť
            těch služebností ještě jest.
            <br />
            Soupis pak uzavřel dodatkem: Ještě jest 5 vesnic, které v jiné
            služebnosti nejsou, než hlásky na hradě mají konati. Známe je
            jmenovitě a jsou to:
          </li>
          <li>
            Zavidov. Krčma svobodná a lán dědiny, který byl deseti lidem rozdán
            pod purkrecht.
          </li>
          <li>
            Hostokryje. Dvůr kmetcí s lánem dědiny (1481 prodán k Příčině).
          </li>
          <li>Novosedly. Ves celá.</li>
          <li>
            Kalubice. Ves celá, grunty jsou jen malé a chalupy (viz Skalka).
            Osadníci řídili se r. 1550 knihami purkrechtními, ale co se jim od
            vrchnosti poručí, to povinni jsou vykonávati.
          </li>
          <li>
            Pavlíkov. Rychta svobodná s 3 lány a dvůr poplužní s 1 lánem. <br />
            Hejtman Albrecht z Vřesovic učinil r. 1529 české komoře návrh, aby
            služba vrátných a hlásných byla zrušena. Lépe bylo by povvinisti
            manů těch změniti na plat běžný a oni by raději slušný plat s sebe
            dali, z kterého ustaviční a věrností poznali lidé by se vydržovali.
            Kdyžby nepokoj byl, hejtman nemohl by věděti, zda na hlásku
            přicházejí hlásní či zrádci.
            <br />
            Námět Vřesovcův uskutečnil dílem Šternberk, dílem teprve hejtman
            Kaplíř (1640). Služebnosti, které písař z pokažených register nemohl
            vyčísti, dohledali jsme jinde:
          </li>
          <li>
            Dvůr Kunšův (pod Všetaty). S 1 lánem. Držitel byl povinen na tok
            ptačí a k hlídání zvěře do lesů osobu hodnou na týden vypraviti.
          </li>
          <li>
            Hředle. Rychta se třemi lány dědin; k ní krčma vysadní, řezník a
            pekař. Služebnost neznáme.
          </li>
          <li>
            Kněževes. Rychta s 1 lánem a 9 jitry, krčma svobodná, řezník s
            krámem masným a pekař. Kdyžby důležitá potřeba ukázala, rychtář jest
            povinen koně jízdného chovati.
          </li>
          <li>Chlum. Rychtář platí 3 groše na posly za hranice vyslané.</li>
          <li>Mlečice. Rychta s lánem dědiny a 2 podsedkové.</li>
          <li>Svinařov. Rychra a dvůr poplužní s 2 lány.</li>
          <li>
            Myslice. (1383 mlýn, 1543 dvůr, 1610 převoz pod hradem Týřovem.)
            Držitel dával každý pátek za 3 groše ryb říčních, choval psa
            slídníka, s kterým zvěř hledal, tenetníkům a holotám v Broumech
            oznamoval, v kterém místě najíti se mají.
          </li>
          <li>Broumy, tenetníci a holoty mají při honech sloužiti.</li>
          <li>
            Hudlice, ves celá. Dva mají povinnost úředníky nebo hajnými býti a
            opatrovati lesy, jichž jest za 5/4 míle zdelí a míli zšíří. 14
            osedlých má na hony choditi.
          </li>
          <li>
            Svojetín. Jeden osedlý (Hans Porth) byl povinen při honech čeleď
            panskou a psy náležitou stravou vychovávati.
          </li>
          <li>
            Některé křoviny pod rybníkem u hradu Nižboru s chmelnicí pustou a 24
            strychy dědin jest propůjčka králů českých (list krále Karla z r.
            asi 1370).
          </li>
          <li>Chyňava. Nic neplatí, všickni osadníci toliko lesy hlídají.</li>
          <li>
            Bezděkov (Dolní). Tři osedlí jsou úředníky nad lesy, jichž jest za 2
            míle zdelí a zšíří.
          </li>
          <li>
            Vašírov, pět osedlých jsou povinni úředníky lesními býti a důchody
            vybírati. V jejich úřadě jest lesů za 2 míle zdelí a zšíří. Také
            jsou povinni státi nad sekáči a dělníky na louce slově
            &bdquo;Ptyně&ldquo;, aby dobře dělali.
          </li>
          <li>
            Rakovník. Měšťané jsou nad pamět lidskou povinni k honům královským
            lid i koně postaviti a ložní šat pro dvořany královské na hrad
            půjčiti.
          </li>
          <li>
            Strašecí. Osadníci odedávna chodili na hon a dodávali potřebné
            povozy k dopravě tenat a plátna. Poněvadž časové i hejtmani se mění,
            sdělán na to list r. 1549.
          </li>
          <li>
            Žatec. Měšťané dávali od r. 1399 z každého vinohradu půl vědra vína
            na Křivoklát. Roku 1611 změněno na roční plat 25 kop.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
