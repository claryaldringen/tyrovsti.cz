import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Image from 'next/image'
import Link from 'next/link'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_CS } from '../shared/constants'

const Page = () => {
  return (
    <>
      <HeadExtended
        lang={LANG_CS}
        title="Historické pozadí"
        image="m921.033ra.jpg"
      />

      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h1>Historické pozadí</h1>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <p>
                  Po odražení čtyř křížových výprav do Čech v letech
                  1420&nbsp;-&nbsp;1431&nbsp; byla katolická církev nucena
                  přistoupit k jednání. Husitský program{' '}
                  <i>čtyř artikulů pražských</i> byl přetaven v{' '}
                  <i>Basilejská kompaktáta</i>. Pro radikální část husitů
                  reprezentovanou Sirotčím a Táborským svazem však byla
                  kompaktáta příliš kompromisní. Dlouhodobé rozpory v husitském
                  hnutí vyvrcholily bitvou u Lipan, která je považována za
                  faktický konec husitských válek a spojená vojska katolíků a
                  umírněných kališníků v ní radikály rozdrtila. Po bitvě u Lipan
                  přestal Sirotčí svaz de facto existovat. Táborský svaz sice
                  existoval dál, ale ztratil vliv na dění v zemi. Přijetí
                  kompaktát a Zikmunda Lucemburského za krále nyní nestálo nic v
                  cestě.
                </p>
                <p>
                  Po smrti císaře Zikmunda <b>9.&nbsp;prosince&nbsp;1437</b> se
                  vítězové od Lipan rozdělili na dvě strany. Jedna strana se
                  vytvořila kolem královny-vdovy Barbory Celjské a její vedoucí
                  osobností byl Hynce Ptáček z Pirkštejna následovaný Alešem
                  Holickým ze Šternberka. Tato strana, která byla převážně
                  kališnická, prosazovala kandidaturu polského prince Kazimíra
                  Jagellonského a byla proto zvána stranou polskou. Druhá
                  strana, převážně katolická, v jejímž čele byli Oldřich II. z
                  Rožmberka a Menhart z Hradce, prosazovala kandidaturu
                  Zikmundova ze Albrechta Habsburského a byla proto zvána
                  stranou rakouskou.
                </p>
                <p>
                  Po oficiálním vyhlášení volby Kazimíra Jagellonského českým
                  králem na sjezdu kališnické šlechty v Mělníce{' '}
                  <b>29.&nbsp;května&nbsp;1438</b> vytáhl Albrecht Habsburský
                  podporovaný rakouskou stranou do Čech, čímž vypukla válka o
                  nástupnictví. Praha byla v té době prorakouská, tak se zde
                  nechal Albrecht <b>29.&nbsp;června&nbsp;1438</b> korunovat
                  českým králem a pokračoval se svými oddíly k Táboru, kde se v
                  řadě menších šarvátek střetl s vojskem Ptáčkovy strany
                  podpořeném oddíly z Polska. K rozhodujícímu střetnutí ani k
                  obsazení Tábora však nedošlo a po pěti týdnech obléhání
                  Albrechtova armáda <b>15. září 1438</b> odtáhla. Ani druhé
                  straně se však nepodařilo situaci zvrátit a v únoru 1439
                  uzavřeli Albrecht s Kazimírem příměří. Na podzim 1439 vyrazil
                  Albrecht do Uher proti Turkům, na tažení se však nakazil
                  úplavicí a <b>27.&nbsp;října&nbsp;1439</b> zemřel.
                </p>
              </Col>
              <Col md={6} className="image-wrapper">
                <Link
                  href="/images/Albrecht_II._von_Habsburg.jpg"
                  target="_blank"
                >
                  <Image
                    src="/images/Albrecht_II._von_Habsburg.jpg"
                    width={578}
                    height={800}
                    className="fit"
                  />
                </Link>
                <br />
                Portrét Albrechta II. Habsburského, kopie ze 16. století
                namalovaný podle obrazu z let 1434 - 1439
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Zdálo by se, že po Albrechtově smrti již nic nebrání polské
                  straně prosadit svého kandidáta na trůn. Proti se však
                  postavila téměř všechna katolická šlechta a města. Ani Poláci
                  se však na uprázdněný trůn příliš nehrnuli. Hynce Ptáček,
                  který byl zdatný politik, pochopil, že volba prince Kazimíra
                  je politicky neprůchozí a od prosazování jeho kandidatury
                  upustil. V lednu 1440 během pražského sněmu pak{' '}
                  <b>29. ledna 1440</b> uzavřeli Hynce Ptáček a Oldřich II. z
                  Rožmberka spolu se členy svých stran dohodu zvanou &ldquo;
                  <i>List mierný všech stavů království českého</i>&bdquo;. Tato
                  dohoda zahrnovala dodržování Basilejských Kompaktát, požadavek
                  potvrzení volby Jana Rokycany arcibiskupem, obnovení činnosti
                  zemského soudu, kam obě strany vyslaly své zástupce,
                  zneplatnění Albrechtových zápisů ke škodě české koruny nebo
                  jeho protivníků a ujednání o smírném řešení budoucích sporů.
                </p>
                <p>
                  Aby mohla být opatření z <i>Listu mierného</i> reálně
                  vymáhána, byl uveden v činnost systém landfrýdů. Landfrýdy
                  byly bezpečnostně-branné spolky šlechty a královských měst,
                  které na určitém území suplovaly ústřední vládu. Zatímco na
                  Moravě došlo již <b>28. ledna 1440</b> k vyhlášení
                  celozemského landfrýdu, v Čechách se během roku 1440
                  konstituovalo 12 krajských landfrýdů. <b>8. března 1440</b>{' '}
                  vznikl boleslavský landfrýd, jehož hejtmany byli zvoleni Jan
                  Smiřický ze Smiřic a Jiří z Kunštátu a Poděbrad, po Hynce
                  Ptáčkovi a Aleši Holickém ze Šternberka třetí nejvýše
                  postavený muž Ptáčkovy strany. Na sněmu v Čáslavi{' '}
                  <b>17. března 1440</b> pak došlo k ustavení dalších čtyř
                  východočeských landfrýdů: Hradeckého, Chrudimského,
                  Čáslavského a Kouřimského, jehož hejtmanem byl zvolen sám
                  Hynce Ptáček, který však měl faktickou moc nad celým svazem
                  východočeských landfrýdů.
                </p>
                <p>
                  Landfrýdy původně měly zabezpečit správu země pouze do zemské
                  sněmu, který se měl konat v červnu 1440 v Praze, kde měl být
                  zvolen nový český král. Sbor volitelů (18 pánů, 14 rytířů a 14
                  měšťanů) se rozhodl nabídnout českou korunu vévodovi Albrechtu
                  Bavorskému, který ji však <b>24. srpna 1440</b> zdvořile
                  odmítl. V politickém popředí se tak znovu objevila otázka
                  obsazení českého trůnu. Zejména rožmberská strana se vrátila k
                  otázce dědičnosti českého trůnu v rodě habsburském. Na čas se
                  uvažovalo o kandidatuře císaře Fridricha III., nakonec se však
                  ustálil názor, že dědičná koruna náleží synu Albrechta II.
                  Ladislavu Pohrobkovi, který se narodil <b>22. února 1440</b>,
                  téměř čtyři měsíce po Albrechtově smrti. Ani Ptáčkova strana
                  Ladislava neodmítala, hájila však právo volby, které
                  příslušelo stavovské obci. Výběrem nezletilého Ladislava
                  Pohrobka však konec interregna zmizel v nedohlednu a landfrýdy
                  se staly místní vládní mocí na několik příštích let.
                </p>
                <p>
                  Dne <b>27. srpna 1444</b> v Ratajích náhle umírá Hynce Ptáček
                  z Pirkštejna, pravděpodobně na mrtvici. Na jeho místo v čele
                  východočeských landfrýdů je na kutnohorském sněmu v září 1444
                  zvolen Jiří z Poděbrad. Na pelhřimovském sněmu v červnu 1446
                  padla myšlenka na jmenování zemského správce. Na dalším
                  kutnohorském sněmu <b>24. června 1448</b> vznikla z původního
                  svazu východočeských landfrýdů mohutná Poděbradská jednota,
                  jejíž součástí byli i mnozí katoličtí šlechtici. Také zde byl
                  Jiří zvolen správcem &bdquo;všech obcí českých příchylných k
                  zákonu božímu&ldquo;. Aby se však stal skutečným pánem země,
                  musel mít v moci Prahu. Pod záminkou vpádu do Saska sebral
                  vojsko a náhlým přepadem obsadil v noci z{' '}
                  <b>2. na 3. září 1448</b> Prahu včetně obou hradů. V reakci na
                  obsazení Prahy se <b>8. února 1449</b> ve Strakonicích spojila
                  rožmberská strana se zbytky Táborského svazu, vznikla
                  Strakonická jednota a ihned zahájila vojenské akce proti
                  jednotě poděbradské. Válka se Strakonickou jednotou plynule
                  přešla ve válku proti Fridrichu II. Saskému a{' '}
                  <b>27. října 1451</b> se mohl Jiří z Poděbrad vrátit do Prahy
                  ověnčen vavříny vítězství. V listopadu 1451 odešel Oldřich II.
                  z Rožmberka na odpočinek a tím de facto přestala Strakonická
                  jednota existovat. Oldřichovi synové a dědici - Jindřich, Jan
                  a Jošt potřebovali upevnit svou vládu nad rožmberským dominiem
                  a raději uzavřeli s Jiřím z Poděbrad smír. Tím prakticky
                  přestala existovat jakákoli opozice proti Poděbradské jednotě
                  a Jiřímu z Poděbrad. <b>23. dubna 1452</b> se v Praze sešel
                  svatojiřský zemský sněm, který <b>27. dubna 1452</b> zvolil
                  Jiřího z Poděbrad zemským správcem na dva roky. Na konci srpna
                  1452 sebral Jiří armádu o síle asi 17 000 mužů a{' '}
                  <b>30. srpna 1452</b> se s ní objevil u Tábora. Tábor se
                  Jiřímu poddal bez boje <b>1. září 1452</b>.{' '}
                  <b>18. září 1452</b> se Jiřímu poddali měšťané z Písku,
                  Klatov, Domažlic a Sušice a o týden později Lounští a Žatečtí.
                  Táborský svaz tak přestal existovat, což bylo důležité zejména
                  z pohledu církevní správy. Jeden zemský správce měl od té
                  chvíle jediného duchovního správce kališnických věřících, Jana
                  Rokycanu. Když se Jiří <b>30. září 1452</b> vrátil do Prahy,
                  byl už obecně uznávaným vládcem všech českých oblastí.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <p>
                  Politický nátlak českých a uherských, zejména však vojenská
                  akce rakouských stavů přinutily <b>13. září 1452</b> císaře
                  Fridricha III. vydat Ladislava Pohrobka ze svého poručnictví.
                  Nyní se konečně mohl Ladislav chopit vlády v zemích, které mu
                  dědickým právem náležely. Na jaře 1453 odjel Jiří z Poděbrad
                  do Vídně, kde <b>29. dubna 1453</b> složil Ladislavovi hold.
                  Ladislav se zavázal, že uzná kompaktáta, zasadí se o potvrzení
                  Jana Rokycany arcibiskupem a <b>2. května 1453</b> potvrdil
                  Jiřího zemským správcem na dalších šest let. V červenci 1453
                  odjel Ladislav Pohrobek do Brna, kde mu vzdaly hold moravské
                  stavy, a začal shánět peníze na okázalou korunovační jízdu do
                  Čech. Na konci září má již dostatek financí a tak přijíždí{' '}
                  <b>24. října 1453</b> se svým dvorem do Prahy, kde je{' '}
                  <b>28. října 1453</b> slavnostně korunován na českým králem. V
                  Praze Ladislav zůstává téměř do konce listopadu 1454, načež se
                  vydává do Vratislavi přijmout hold od slezských stavů. Z
                  Vratislavi pokračuje do Vídně, kam přijíždí{' '}
                  <b>16. února 1455</b>. Po celou dobu je s ním i Jiří z
                  Poděbrad, který se snaží urovnat Ladislavovy spory s jeho
                  bývalým poručníkem císařem Fridrichem III. a zároveň
                  přesvědčuje Ladislava k návratu do Prahy. Ladislav, sám
                  horlivý katolík, však návrat do kališnických Čech odmítá a tak
                  se Jiří vrací v květnu 1455 do Prahy sám. Počátkem července
                  1456 oblehl sultán Mehmed II. Bělehrad. Uherský regent János
                  Hunyadi <b>22. července 1456</b> sice ubránil Bělehrad, ale
                  již <b>11. srpna 1456</b> umírá na mor, který se v obleženém
                  Bělehradě rozšířil. V září 1456 se proto Ladislav Pohrobek
                  vypravil do Uher čelit turecké expanzi a zároveň získat
                  všechny královské hrady příjmy, které měl rod Hunyadi v
                  držení. Doprovázel jej jeho příbuzný, opatrovník a správce
                  rakouských zemí Ulrich Celjský, který se měl stát generálním
                  kapitánem uherského království. Ladislav Hunyadi, nejstarší
                  syn a dědic Jánose Hunyadiho, se však nehodlal moci získané po
                  otci vzdát a po příjezdu Ladislava Pohrobka do Bělehradu jej
                  zajal a Ulricha Celjského nechal <b>9. listopadu 1456</b>{' '}
                  zabít svými vojáky. Ladislav Pohrobek byl zajatcem Ladislava
                  Hunyadiho až do <b>14. března 1457</b>, kdy se mu za pomoci
                  Jana Jiskry z Brandýsa, českého kondotiéra, který se svým
                  žoldnéřským vojskem operoval v horních Uhrách, podařilo lstí
                  zajmout bratry Ladislava i Matyáše Hunyadi. Ladislav Hunyadi
                  byl <b>16. března 1457</b> popraven stětím, Matyáš byl
                  převezen do vězení ve Vídni, kam se Ladislav Pohrobek úchylil
                  před nepokoji, které propukly mezi stranou podporující rod
                  Hunyadi a šlechtou věrnou králi. Nakonec se Ladislav rozhodl
                  přesídlit do Prahy, neboť za správcovství Jiřího z Poděbrad se
                  z českého království stala nejstabilnější část Ladislavova
                  soustátí a <b>29. září 1467</b> tak přijíždí do Prahy. Zde se
                  má oženit s dcerou francouzského krále Karla VII. Magdalenou z
                  Valois, když <b>23. listopadu 1457</b> náhle umírá na
                  leukemii.
                </p>
              </Col>
              <Col md={6} className="image-wrapper">
                <Link
                  href="/images/Ladislas_the_Posthumous_001.jpg"
                  target="_blank"
                >
                  <Image
                    src="/images/Ladislas_the_Posthumous_001.jpg"
                    width={1056}
                    height={1466}
                    className="fit"
                  />
                </Link>
                <br />
                Portrét Ladislava Pohrobka od neznámého autora z roku 1457
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Na únor 1458 byl svolán volební sněm. Ve hře o českou korunu
                  bylo několik kandidátů: Kazimír Jagellonský, Vilém Saský,
                  císař Fridrich III., Albrecht Bavorský, Albrecht Braniborský a
                  francouzský král Karel VII. Nakonec ze zahraničních kandidátů
                  zůstali dva nejvýznamnější: Vilém Saský a Karel VII. Jiří z
                  Poděbrad zatím zůstával v pozadí. Šikovně rozehrál hru na
                  národní strunu, dávaje za příklad volbu příslušníka domácí
                  šlechty Matyáše Korvína uherským králem, která se odehrála již{' '}
                  <b>24. ledna 1458</b>. Opozici si pak získal především slibem,
                  že nedojde k restitucím církevního majetku zabraného během
                  husitských válek, na nichž by paradoxně nejvíce tratili
                  Rožmberkové, ale i další panské rody, ať už katolické či
                  protestantské. Volební sněm byl zahájen <b>27. února 1458</b>{' '}
                  na Staroměstské radnici v Praze. Jiří si vysledek volby ještě
                  pojistil tím, že nechal místo konání sněmu obklíčit svými
                  ozbrojenci a tak byl <b>2. března 1458</b> zvolen českým
                  králem. Po volbě složil Jiří tajnou přísahu do rukou uherských
                  biskupů Augustina z Rábu a Vincence z Vácova, že bude poslušen
                  příkazů papežské stolice a že bude hájit pravou víru
                  křesťanskou. Tato tajná přísaha se později stala jablkem
                  sváru, neboť papež a ostatní katoličtí preláti ji chápali jako
                  závazek, že se Jiří vzdá kalicha a bude kališníky potírat.
                  Jenže čeští kališníci, včetně Jiřího, považovali sami sebe na
                  základě kompaktát za součást obecné, tedy v té době katolické,
                  církve. Jiří tedy svou přísahu chápal jako potírání projevů
                  kacířství, které se vymykaly obsahu kompaktát, jak již ostatně
                  učinil rozvrácením Táborského svazu a zajetím táborských kněží
                  na podzim 1452. V tuto chvíli tato tajná přísaha však umožnila
                  Jiřímu aby byl <b>7. května 1458</b> za přítomnsoti obou
                  biskupů korunován.
                </p>
                <p>
                  Pražskou korunovací získal sice Jiří z Poděbrad českou korunu,
                  ale musel si ještě zajistit uznání v ostatních zemích koruny
                  české. První na řadě byla Morava, kde měl Jiří již tradičně
                  stoupence ve šlechtě spřízněné s jeho rodem pánů z Kunštátu.
                  Až dosud zde proti němu stála zejména královská města, kde
                  němečtí městští patricijové vždy hájili katolickou a
                  prohabsburskou politiku. Protože však po Jiřího volbě českým
                  králem nebylo jiných uchazečů o trůn, do léta 1458 jej přijala
                  všechna moravská města až na Jihlavu. Král Jiří zvolil proti
                  jihlavskému patriciátu osvědčenou taktiku válečných hrozeb a
                  mírového jednání a tak v listopadu 1458 i jihlavští konšelé
                  před králem poklekli. Po Moravě se pod Jiřího žezlo přihlásila
                  i Horní Lužice a hrabství Kladské. Král Jiří tak už v roce
                  1458 ovládl i vedlejší země koruny české s výjimkou Slezska,
                  kde zejména Vratislav dávala najevo svůj nesouhlas s volbou
                  kališnického krále. Jiří se rozhodl svůj souboj s
                  Vratislavskými odložit a zajišťoval si zatím uznání v
                  zahraničí. Nejprve se na jednom dunajském ostrově před Vídní
                  sešel s císařem Fridrichem III., kterému <b>25. září 1458</b>{' '}
                  složil hold. České země byly totiž formálně stále součástí
                  Svaté říše římské. Jiří také císaři slíbil vojenskou pomoc v
                  boji s rakouskými stavy a získal od něj uznání své korunovace.
                  Nyní byl čas ukončit spory se Saskem, což Jiří učinil na
                  sjezdu v Chebu, který započal <b>7. dubna 1459</b>. V Chebu se
                  sešly přední osobnosti Říše, mimojiné Fridrich Falcký, Ota
                  Bavorský, Fridrich kurfiřt Braniborský, Albrecht Braniborský,
                  magdeburský arcibiskup Fridrich a mnohá další hrabata a
                  knížata se svými družinami. Nejdůležitějšími osobnostmi sjezdu
                  byli však bratři Fridrich a Vilém Sasští. Král Jiří přijel do
                  Chebu v doprovodu 900 jezdců a 100 vozů, s celou svou rodinou
                  a v kruhu předního českého panstva. Trpělivé jednání nakonec
                  přineslo ovoce. Vilém Saský se vzdal všech nároků na Český
                  trůn a nabídl se, že bude dělat prostředníka mezi Jiřím a
                  Slezany. Oba Sasští vévodové se pak vzdali nároků na území
                  kolem Duchcova a Mostu a stáhli se za zemskou hranici. Král
                  Jiří se naopak zřekl českých lén v Sasku. Tato hranice mezi
                  Saskem a Čechami je platná dodnes a patří tedy k nejstarším
                  dosud existujícím hranicím Evropy. V Chebu vznikla i přátelská
                  smlouva česko-braniborská. V září 1459 se z Vratislavi stává
                  obležená pevnost a <b>1. října 1459</b> zaútočilo české vojsko
                  na hradby aniž by se mu povedlo je prolomit. Jenže i papež
                  Pius II. píše Vratislavským aby se poddali českému králi a tak
                  Vratislav na konci roku 1459 požádala krále Jiřího o příměří a
                  začala jednat o míru. V lednu 1460 Vratislav přijala Jiřího z
                  Poděbrad za krále.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="image-wrapper">
                <Link href="/images/m921.033ra.jpg" target="_blank">
                  <Image
                    src="/images/m921.033ra.jpg"
                    width={915}
                    height={600}
                    className="fit"
                  />
                </Link>
                <br />
                Vyobrazení Jiřího z Poděbrad na výřezu z Hodinek, které pro něj
                nechala zhotovit jeho manželka Johana z Rožmitálu, Praha, 1466
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Podle starodávného ceremoniálu byl každý nový český král
                  formálně povinen složit slib poslušnosti papeži. Za tímto
                  účelem dorazilo <b>13. března 1462</b> české poselstvo do
                  Říma. Jiří také chtěl u papeže dosáhnout toho, aby legitimoval
                  kalich a potvrdil Jana Rokycanu v úřadu arcibiskupa. K
                  veřejnému slyšení českého poselstva před papežem došlo{' '}
                  <b>20. března 1462</b>. Český kancléř Prokop z Rabštejna v
                  úvodu složil papeži přísahu poslušnosti jménem krále Jiřího.
                  Poté se slova chopil Václav Koranda ml. a hájil platnost
                  kompaktát. Papež mu ihned odpověděl a vyjádřil názor, že
                  kalich byl v Basileji povolen pouze první generaci husitů, ale
                  o platnosti kompaktát slíbil vyslovit názor později. Stalo se
                  tak <b>31. října 1462</b>, kdy za přítomnosti asi čtyř tisíc
                  svědků vyhlásil papež Pius II. kompaktáta za zrušená. Jiřího
                  to však nezaskočilo. Již delší dobu se na střetnutí s
                  papežskou kurií diplomaticky připravoval. Nemohl a ani nechtěl
                  se zříci kompaktát, ústředního bodu svého celoživotního
                  politického programu. Podařilo se mu zažehnat náboženské
                  nepokoje v Čechách i odstředivé tendence vedlejších zemí
                  koruny české, ke kterým došlo po jednostranném zrušení
                  kompaktát, a na nějaký čas se situace v českém království opět
                  stabilizovala. Starý a nemocný papež Pius II. tento vývoj
                  sledoval s nelibostí. Nakonec mu došla trpělivost a i přes
                  přímluvy císaře Fridricha III. a mnohých říšských knížat
                  pohnal dne <b>16. června 1464</b> Jiřího před církevní soud do
                  Říma načež <b>14. srpna 1464</b> v Ankoně umírá. Nový papež
                  Pavel II. pohnal <b>2. srpna 1465</b> Jiřího opět před římský
                  tribunál: Pokud se Jiří nedostaví do 180 dnů, bude vyloučen z
                  církve a spočine na něm církevní klatba se všemi tresty, jež
                  příslušejí kacířům. Současně Pavel II. zesílil tlak na české
                  katolíky a snažil se je přimět k vypovězení poslušnosti králi,
                  obžalovanému z kacířství. <b>28. listopadu 1465</b> Vytvořilo
                  16 katolickách pánů z jižních a západních Čech na hradě Zelená
                  hora u Nepomuku tzv. Zelenohorskou jednotu - politickou
                  opozici vůči králi Jiřímu. Král proti jednotě nezasáhl hned,
                  protože nechtěl Čechy opět uvrhnout do ničivé občanské války.
                  Ani jednota nepodnikala žádné vojenské kroky neboť páni dobře
                  věděli, že Jiří má naprostou vojenskou převahu. Obě strany
                  tedy uzavřely dlouhodobé příměří do února 1467. Na přímluvu
                  Ludvíka Bavorského papež Pavel II. prodloužil lhůtu, během
                  které se má Jiří dostavit k soudu, do konce roku 1466. K tomu
                  však nedošlo a tak byl český král <b>23. prosince 1466</b> v
                  přítomnosti čtyř tisíc osob exkomunikován z církve i s celou
                  rodinou a sesazen z trůnu. To povzbudilo Zelenohorskou jednotu
                  a její představitelé odmítli v únoru 1467 prodloužení příměří.
                  Zelenohorská jednota odmítala smír i proto, že se její řady
                  postupně rozrostly o další katolické pány a města. V březnu
                  1467 potvrdil papež Zdeňka Konopišťského ze Šternberka ve
                  funkci hejtmana Zelenohorské jednoty a zároveň mu dával
                  požehnání pro boj s kacíři. Smírné řešení již nebylo možné a
                  tak Jiří <b>19. dubna 1467</b> veřejně vyzval papeže k boji na
                  život a na smrt a odvolal se k budoucímu koncilu proti papeži
                  Pavlu II. Hned po vydání Apelace vydal Jiří{' '}
                  <b>20. dubna 1467</b> opovědné listy a zahájil proti
                  Zelenohorské jednotě válku. Jednota se dostala do hluboké
                  defenzivy a její naděje se upínaly k uspořádání křížové
                  výpravy proti Jiřímu. Jiřího diplomatické úsilí, které vyvíjel
                  v uplynulých letech, se nyní vyplácelo a v okolí českého
                  království nebyl nikdo, kdo by se chtěl ujmout organizace a
                  vedení křížové výpravy. Zejména polský král a mnozí říští
                  vévodové se Jiřího nepokrytě zastávali. Na začátku roku 1468
                  však vtrhl Jiřího syn Viktorin do Rakous, kde poplenil statky
                  císaře Fridricha III. Ten se obrátil na uherského krále
                  Matyáše Korvína, kterému se zrovna uvolnily ruce v boji s
                  Turky. V březnu 1468 tak v Trnavě vyhlásil Matyáš Korvín válku
                  Viktorinovi z Poděbrad a prakticky se tak stal vykonavatelem
                  papežské klatby. Započaly česko-uherské války, které trvaly
                  více než 10 let. Zprvu byl úspěšnější Matyáš Korvín, v průběhu
                  roku 1469 se však válečné štěstí obrátilo. Přesto se nechal
                  Matyáš <b>3. května 1469</b> prohlásit v Olomouci částí
                  katolickéí šlechty českým králem. Nebyl však nikdy korunován,
                  protože korunovační klenoty i tradiční místo korunovace v
                  pražské katedrále sv. Víta měl v držení Jiří z Poděbrad.
                  Jiřího zdraví se však rychle zhoršuje a v průběhu příprav na
                  odvetné tažení do Uher <b>22. března 1471</b> král Jiří z
                  Kunštátu a Poděbrad umírá.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
