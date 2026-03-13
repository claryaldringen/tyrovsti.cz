import { Col, Row } from 'reactstrap'
import React from 'react'
import Link from 'next/link'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const OrdinanzaDiHodetin = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="la-cosiddetta-ordinanza-militare-di-jan-hajek-di-hodetin"
        />
        <h4>
          La cosiddetta ordinanza militare di Jan Hájek di Hodětín
          {draft && <DraftBadge />}
        </h4>
        <p>
          La trascrizione è stata tratta dal sito scolastico{' '}
          <Link href="https://www.digladior.cz/historicky-serm/vojenske-zrizeni-dle-vaclava-iv/">
            Digladior
          </Link>
        </p>
        <p>
          La datazione e la paternità di quest&apos;opera sono difficili da
          stabilire. Sebbene l&apos;introduzione dell&apos;ordinanza indichi
          l&apos;anno 1413 e nomini Jan Hájek di Hodětín, ciambellano del re
          Venceslao IV, come autore, la creazione di questa ordinanza nel 1413
          fu già messa in discussione da Palacký e Toman. Jan Durdík propendeva
          per l&apos;opinione che il testo originale fosse stato redatto in
          quell&apos;anno, ma che ne sia sopravvissuta soltanto una versione
          riveduta, il che, secondo lui, è dimostrato dall&apos;articolo che
          vieta il saccheggio di chiese e monasteri, il quale a suo avviso fu
          scritto sulla base delle esperienze del periodo delle guerre hussite.
          È inoltre singolare la precisione con cui viene descritta
          l&apos;organizzazione del campo di carri da guerra. La stesura
          dell&apos;ordinanza è pertanto datata piuttosto al 1431. Purtroppo il
          manoscritto originale non è giunto fino ai nostri giorni, poiché fu
          distrutto nell&apos;incendio del Municipio della Città Vecchia nel
          maggio 1945. Oggi è noto grazie a copie più recenti e a edizioni
          successive.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <p>
          Léta Božieho tisícieho čtyrstého třináctého slavné pamětí král Václav
          Český, když jest pro zprotivenie pana Puoty z Skály proti Jeho Milosti
          královské kázal obehnati hrad Skálu nadepsaného pána, tyto kusy
          podepsané a práva vojenská rozkázal s jest slovútnému panoši Hájkovi z
          Hodětína, podkomořiemu královstvie českého, popsati pro budúcie Čechy
          bojovné, aby se uměli u vojskách zpravovati; a přikázal jest je u
          vojště před nadepsaným hradem písařóm vojenským čisti, tak aby je
          všichni drželi pod pokutami dole psanými. A takto se ve jméno Božie
          počínají:
        </p>
        <p>
          Najprvé, aby byly služby Božie všichni, hajtmané i jich poddaní i jim
          poručení, pilni a neřáduov nižádných aby u vojště nedopúštěli, aby
          skrze to Pán Buoh nebyl rozhněván.
        </p>
        <p>
          Item. Všechny hry neslušné a neřádné aby byly stavovány, a zvláště
          kostky, karty, koule aby nebyly u vojště dopuštěny, neb z toho
          dopuštěnie mnoho zlého pochodí, jakožto zanetbánie na vartách a na
          ponuockách i jiné škodné věci vojskám a těm osobám, kteréž hrají.
          Pakli se kto přesto které hry dopustí, takový bude před vojskem v
          řetěze čtyři dni veden a úředníku k tomu od nás usazenému deset
          grošuov musí bez milosti dáti.
        </p>
        <p>
          Item. Všechna lánie a nestydatá mluvenie aby stála a přestala. Pakli
          kto bude láti a usvědčen bude, takový čtyři dni před vojskem v řetěze
          choditi musí.
        </p>
        <p>
          Item. Kurevstvie aby žádného nebylo dopúštěno u vojště, ani před
          vojskem, ani okolo vojska, ale aby takové zlé ženy bez milosti pryč
          hnány a puzeny byly od rychtáře vojenského. A jestliže by toho rychtář
          zanetbal, tehdy bud k němu hleděno jako k neposlušnému. Pakli by se
          kto dopustil toho zlého, tomu šilink bude dán bez milosti skrze
          pračata.
        </p>
        <p>
          Item. Jestliže by násilé které panně neb panic učinil kdokoli a
          usvědčen byl, takový bude hrdla zbaven bez milosti.
        </p>
        <p>
          Item. Kostelové a klášterové aby žádní vybíjeni nebyli ani vypalováni,
          leč by bylo rozkázáno hajtmany k tomu zřiezenými. A proto vždy aby
          posvátnými věcmi, jakožto ornáty, kalichy, zvony, kniehami jinými
          okrasami kostelními a zvláště pak tělem Božím nikakéž nebylo hýbáno
          ani bráno. Nebo ktož by který kostel vybil, takovému bude ruka uťata.
          Pakli by kto tělo Božie s pušku aneb kterú jimi svátost vzal a
          vysypal, takový bude bez milosti upálen.
        </p>
        <p>
          Item. Jestliže by kto který oltář zbořil nebo obrazy v kosteléch a v
          klášteřiech zbil nebo na cestách v slúpiech přibité ztrhal a zkazil,
          ten hodnú pomstú kázán bude vedlé práva vojenského.
        </p>
        <p>
          Item. Na přátelském bude-li kto bráti jiné věci nežli pokrm sobě
          skrovný a koňóm obrok, takový bude kázán jako lúpežník.
        </p>
        <p>
          Item. Koní, krav i jiného dobytka a šatuov na přátelském aby žádný
          nebral, ani jiných věcí, kteréž k hospodářství příslušejí; neb takový
          kázán bude jako lúpežník.
        </p>
        <p>
          Item. Jestliže by kto kterú svádu u vojště počal, takový bude so kázán
          slušnú pomstú.
        </p>
        <p>
          Item. Jestliže by kto svú braň na druhého obnažil, takovému bude ruka
          bez milosti uťata.
        </p>
        <p>
          Item. Jestliže by kto koho u vojště neb před vojskem skrze svádu
          zabil, takový bude bez milosti sťat.
        </p>
        <p>
          Item. Pěší aby všickni v svých houfiech řádem pod korúhvemi a pod
          praporci šli, jakž a kdež jim přikázáno hajtmany na to vydanými. Pakli
          by se kteří a čížkoli vytrhli z svých houfuov bez rozkázanie a vuole
          pánuov hajtmanuov, takoví budú kázáni, jakož na takové slušeli bude.
        </p>
        <p>
          Item. Jiezdní aby také nikam nejezdili, ale v svých houfiech aby řádně
          táhli, tak jakž jim hajtmané rozkáží, kterýmž poručeno bude. Pakli by
          kto přesto, své vuole požívaje, vytrhl se na kterú stranu a v tom jat
          byl anebo kterú škodu vzal, o takového žádného nechcem státi, ani jim
          také škod platili. A jiní šlechtici a věrní naši milí též k svým
          takovým služebníkům se jmieti mají a budú, leč by hajtmané komu kam
          jeti kázali, takový bez viny bude.
        </p>
        <p>
          Item. Ktož mají napřed v koněberkách jezdili, aby byli vydáni slušným
          během, aby z houfuov se nerozjiežděli. Pakli by kteří z houfuov se
          vytrhli, aby jim koněberky koně brali a nevracovali zase žádnému až u
          vojště a od každého koně aby deset grošuov vzali, žádnému milosti
          nečiniece, ani odpúštějíce. Též i pěším aby samostřiely brali,
          jestliže by z houfuov kam bez odpuštěnie hajtmanuov chodili, aby jim
          nevracovali až u vojště, když od každého samostřiela dadie po pěti
          groších.
        </p>
        <p>
          Item. Kteří houfové mají a dostane se jim který den za vozy jeti neb
          pěším jiti, aby se žádní nikam nerozjiežděli ani rozcházeli, ale stáli
          nad vojskem, dokudž se všecko vojsko nepoloží. Pakli by kteří
          poslušenstvie toho neučinili, ti budú tak trestáni, jakž hajtmanóm
          vydaným bude rozkázáno a poručeno, nebo skrze takovú neposlušnost
          mohla by se hanba i škoda státi, ješto bysme se toho neřádi dopustili.
        </p>
        <p>
          Item. Kterémuž vojsku dostane se napřed taženie, aby se druhé
          nehýbalo, až by prvnie své vozy zřiedilo. Pakli by se kto s svými vozy
          vytrhl a vtrhl v jiné šiky vozy z svého šiku, takový bude kázán
          obyčejem vojenského práva slušnú kázní.
        </p>
        <p>
          Item. Jestliže by kto, bud jiezdný neb pěší, vytrhna se i chtěl sobě
          zvláště holdovali přes naše přikázanie nebo tu překáželi, kdež naši
          hajtmané prvé holdovali, takoví budú kázáni s radů našie rady a
          šlechticuov, kteréž bychom s sebú měli nebo k tomu vydali.
        </p>
        <p>
          Item. Pálenic žádného aby žádný nečinil, leč by bylo rozkázáno
          hajtmany našimi k tomu vydanými. A zvláště byl-li by který zámek
          dobyt, aby nebyl zapalován bez vuole a rozkázanie týchž hajtmanuov.
          Pakli by kto přesto zapálil, takový bez milosti upálen bude.
        </p>
        <p>
          Item. Když bohdá nepřietelé budú na poli v porážce neb na zámku
          zjímáni, ti všickni aby k našie ruce královské našim hajtmanóm vydáni
          byli.
        </p>
        <p>
          Item. Jestliže by kto s vědomím a dopuštěním hajtmanóv, jeda stranú,
          vězně které zjímaje přivedl, s tiem podlé rady našie učiníme.
        </p>
        <p>
          Item. Jestliže by kto zbodl nepřietele na harci, tomu má ten kuoň býti
          dán; a ktož by ten kuoň lapil, tomu jedna kopa grošuov dána býti má od
          toho, ktož onoho zbodl, ač chce a bude chtieti ten kuoň jmieti.
        </p>
        <p>
          Item. Bude-li se na koho doptáno, že by jma vězně na koláči pustil
          nebo holdy vybíral bez povolenie našich hajtmanóv na to vydaných,
          takoví budú kázáni, jakož na to slušie, právem vojenským.
        </p>
        <p>
          Item. K osazení ponuocek v noci okolo vozuov a v branách aby od
          každého vozu kromě komorních a špižierních po jednom bylo vydáváno.
          Pakli by bylo pilné potřebie, aby bylo viece vydáno vedlé rozkázanie
          hajtmanuov. A ktož by zanetbal toho učiniti, ten každý aby dva groše
          dal pokuty tomu hajtmanu, kterýž ponuocky neb varty osazuje.
        </p>
        <p>
          Item. Také, jakož jest rozkázáno, jakož vína, piva i jiné potřebné
          věci do vojsky mají voženy a nošeny býti, příkazujem všem, aby těm,
          ktož by vozili nebo nosili, nebylo na cestách ani u vojskách bráno,
          ani kterakžkoli překáženo. Pakli by ktokolivěk jim překazil nebo bral,
          takový bude kázán, jakož na lúpežníka slušie.
        </p>
        <p>
          Item. Hajtmané, kteříž budú jmenováni nad jiezdnými a pěšími i k
          zpravování a kladení vozuov, těch aby všickni poslušní byli, nad kýmž
          budú ustaveni, a nikterakž se jim neprotivili, ani se s nimi potýkali
          řečí ani skutkem. Pakli by kto, svévolně z poslušenstvie těch
          hajtmanuav vytrhna se, chtěl své vuole požívati, nad takovým poruštěno
          bude tak, že se jím jiní kázati budú.
        </p>
        <p>
          Item. Chcem tomu, aby žádný písařóm vojenským nepřekážel, ani na ně
          kto kterým právem sahal, leč by v čem nešlechetném shledán byl, to aby
          před se hajtmané vzeli a v to nahlédli.
        </p>
        <p>
          Item. Kterýž by koli písař vojenský byl usazen od kteréhokoli pána neb
          hajtmana nebo od měst času vojenského neb bojovnieho, když by
          žoldnéřem žold vydáván byl, ten aby měl od kopy jeden groš, buďto že
          by placeno bylo na poli neb na hradě nebo na městě nebo na kterékoli
          posádce neb při obležení zámku některého. V tom aby mu nižádný odporen
          nebyl, dokudž by ta válka stála, kromě když by placeny byly škody, od
          těch aby nic ho nebral, neb k tomu práva žádného nemá, což by se škod
          dotýkalo.
        </p>
        <p>
          Item. Při bitunciech kterýchkoli má písař vojenský seděti a s hajtmany
          to děliti a vedlé nich v tom má diel jmieti, točíšto od kopy každé po
          1 gr. a též i od holduov má jmieti po 1 gr.
        </p>
        <p>
          Item. Když by který žoldnéř, vezma řádné odpuštěnie z příčin hodných,
          postavil miesto sebe jiného pacholka hodného, ten, kterýž odjíti má,
          aby dal písaři zápisného 1 gr. a nový žoldnéř přistupuje aby dal puol
          groše.
        </p>
        <p>
          Item. Každý setník neb padesátník nebo rotymajstr, kteréž by kolivěk
          pod sebú měl, ten aby před písaře všechny přivedl, když by jim měl
          žold dáván býti; a tu všeliký neb každý desátník aby své dráby osobně
          před písařem okázal, i když by ponuocky neb varty osazovány měly býti.
          Pakli by kto písaři toho odporen byl, má býti kázán od hajtmanuov jako
          neposlušný.
        </p>
        <p>
          Item. Písař vojenský má zbroj a samostřiely ohledovali vždy jednu v
          měsieci, aby byli tak nalezeni, jakž sú vyšli. Pakli by kto tomu
          odpieral, k tomu má hleděno býti jako k neposlušnému.
        </p>
        <p>
          Item. Na tažení, na picování nebo kdežkolivěk na potkání, kdežto
          silnější houf neb rota mdlejší rotu postihne nebo potká, aby silnější
          mdlejším nebrali a nikterakž nepřekáželi, ale u pokoji nechali. Pakli
          by přes toto rozkázanie kteříkoli silnější mdlejším co pobrali neb
          překazili, takoví budú kázáni jako lúpežníci.
        </p>
        <p>
          Item. Kdež se již vojska položie, aby žádný doluov, jimž hebauf
          řiekají, nekopal ani dělal, neb takový proto kázán bude.
        </p>
        <p>
          Item. Včelám aby žádný nepřekážel ani vydieral, nebo takovým nebude
          odpuštěno.
        </p>
        <p>
          Item. Když vojska lehnú, a že by v noci vzhuoru bylo trúbeno neb
          voláno, aby každý s svú braní na plac běžel a nikam jinam. Pakli by
          nepřietelé kde k vozóm přilnuli, tehdy se tam mají obrátiti.
        </p>
        <p>
          Item. Mezi vozy aby opatrně a s pilností ohně nietili a pálili, tak
          aby se žádnému škoda nestala a nedála.
        </p>
        <p>
          Item. Kdežkolivěk, buď to na přátelském neb ne na přátelském, kdež se
          ženy s uzly a šaty vynesú a na nich i pří nich sedmi, aby jimi žádný
          nehýbal, ani těm ženám co bral, ani jich přebledoval. Pakli jim přesto
          kto bráti bude, takový bude kázán jako jiný lúpežník.
        </p>
        <p>
          Item. Jestliže jsú mezi kterými pány, rytieři, zemany, šlechtici nebo
          městy neb kýmžkoli která záštie, kyselosti nebo nelibosti,
          kterakžkolivěk buďto prvé před tiemto polem anebo nynie na poli
          vzniklé a povstalé, ty všecky aby přestaly a nebyly od
        </p>
        <p>
          žádného na tom poli zdvíhány a spomínány, aniž které pomsty o to
          činěny, až domuov z pole vrácenie. Ale bylo-li by kde potřebie, buďto
          na hard neb u šturmu, aby sobě takoví a všickni jiní vespolek
          pomáhali, takových kyselostí a záští zlým nikterakž nespomínajíce.
          Pakli by kto přes toto naše přikázanie usvědčen byl, takový bude kázán
          právem vojenským.
        </p>
        <p>
          Item. O mlýniech přikážu jem, aby žádného nepálili, nebořili ani
          kazili, ani kterých mlýnských želez brali, tak aby tu ku potřebě všech
          našich vojsk mohlo mleno býti. Pakli by kto proti tomu učinil, budeť
          jemu bez milosti ruka uťata. Též také jinde ve dvořiech neb v
          chalupách, zvláště v přátelských, aby žádných zámkuov, řetězuov neb
          jiných želez kterýchžkolivěk, jakožto šínuov s kol neb hřebíkuov s
          bran nesbíjeli neb nevybíjeli a nebrali; a také na poli s pluhuov
          želez neboli s jiných příprav aby nebrali.
        </p>
        <p>
          Item. Kdež se táhne po přátelském, aby takové nekřesťanské záhuby se
          chudým lidem nedály, ani překáženo bylo. Chalup aby nevybíjeli,
          dobytka ani koní aby jim nezajímali, ani ven z vojska nevodili. A žen
          ovšem aby na pokoji vždy nechali, jim nepřekážejíc. Také kdež se
          vojsko klade, aby chalup a dvoruov lidem netrhali, ani bořili, a
          takových nekřesťanských záhub aby nad lidmi nečinili.
        </p>
        <p>
          Item. Komuž by který kuoň utekl jiezdný, buďto na poli neb kdežkoli,
          ten kuoň ktož bude moci lapiti, aby lapil, a ktož jej polapí, tomu buď
          jeden groš dán a od vozníka puol groše.
        </p>
        <p>
          Item. Rybníkuov malých, ani velikých, ani také haltéřuov žádný aby
          nekopal, ani také v nich lovil, ani jich spúštěl, leč by komu hajtmané
          rozkázali.
        </p>
        <p>
          Item. Pitie před vojskem ať jsú šenkována a osobami od hajtmanuov na
          to zřiezenými ať jsú sazena A .netoliko pitie, ale i chléb bud sazen,
          i jiné potřeby, jakožto obrok koňský, tak aby se všem spravedlivé
          dálo.
        </p>
        <p>
          Item. Jestliže by se kto toho dopustil, aneb přes to učinil, což se
          tuto nahoře vypisuje, a na těch chudým lidem překážel, aneb ty věci
          bral a sobě schoval aneb krčmářům zastavoval, dával, prodával, aneb
          komu jinému, takový i ti, ktož by od nich co kupovali neb přijímali,
          pro to budú trestáni jakožto lúpežníci.
        </p>
        <p>
          Item. U každého vozu aby byli dva vozataje a aby měli lebku a pavézu;
          a pod vozem aby bylo prkno a řetěz, A při každém vozu aby byla jedna
          hákovnice se vší přípravú a dvě sekyře, dvě lopatě, dvě kratci, dvě
          motyce, dva rýče a taras s berlú a jedno kopie s hákem a s
          praporečkem.
        </p>
        <p>
          Item. Aby před každým řádem vozuov, když se táhne, šli s motykami,
          kratcemi, rajči, lopatami a s sekyrami, bylo-li by kde cest potřebie
          opravováti; a odtud aby neodcházeli pod vsazením do řetězuov za tři
          dni.
        </p>
      </Col>
      <Col md={6}>
        <p>
          Nell&apos;anno del Signore 1413, l&apos;illustre memoria del re
          Venceslao di Boemia, allorché, a causa dell&apos;opposizione del
          signore Puota di Skála contro Sua Maestà Reale, ordinò l&apos;assedio
          del castello del suddetto signore, comandò che questi articoli
          sottoscritti e leggi militari fossero messi per iscritto dal rinomato
          scudiero Hájek di Hodětín, ciambellano del Regno di Boemia, a
          beneficio dei futuri boemi bellicosi, affinché sapessero come condursi
          nell&apos;esercito; e ordinò che fossero letti dagli scribi militari
          nell&apos;accampamento dinanzi al suddetto castello, affinché tutti li
          osservassero sotto le pene scritte di seguito. E così, nel nome di
          Dio, hanno inizio:
        </p>

        <p>
          In primo luogo, tutti i comandanti, i loro subordinati e coloro posti
          sotto il loro comando siano diligenti nelle funzioni divine, e non sia
          tollerato alcun disordine nell&apos;accampamento, affinché il Signore
          Iddio non sia provocato all&apos;ira.
        </p>
        <p>
          Item. Tutti i giochi indecenti e disordinati, in particolare i dadi,
          le carte e le bocce, siano proibiti nell&apos;accampamento, poiché la
          loro tolleranza conduce a molti mali, quali la negligenza nei turni di
          guardia e nei posti di vedetta, e altre cose dannose per
          l&apos;esercito e per le persone che vi si dedicano. Se qualcuno si
          dedichi a questi giochi nonostante il divieto, sarà condotto in catene
          dinanzi all&apos;esercito per quattro giorni e dovrà pagare dieci
          grossi all&apos;ufficiale da noi nominato, senza alcuna clemenza.
        </p>
        <p>
          Item. Ogni bestemmia e linguaggio osceno cesseranno e desisteranno. Se
          qualcuno bestemmia e ne viene riconosciuto colpevole, dovrà camminare
          in catene dinanzi all&apos;esercito per quattro giorni.
        </p>

        <p>
          Item. Nessuna prostituzione sarà tollerata nell&apos;accampamento, né
          dinanzi all&apos;esercito né nei suoi dintorni; tali donne dissolute
          saranno scacciate senza clemenza dal prevosto militare. Se il prevosto
          trascura questo dovere, sarà considerato disobbediente. Se qualcuno si
          macchia di tale maleficio, riceverà un soldo senza clemenza per mezzo
          della punizione corporale.
        </p>
        <p>
          Item. Se qualcuno commette violenza contro una fanciulla o un giovane
          e ne viene riconosciuto colpevole, sarà messo a morte senza clemenza.
        </p>
        <p>
          Item. Nessuna chiesa o monastero sarà saccheggiato o incendiato, salvo
          per ordine dei comandanti designati. Pertanto, gli oggetti sacri quali
          paramenti, calici, campane, libri e altri ornamenti ecclesiastici, e
          soprattutto il Corpo di Cristo, non saranno toccati né sottratti.
          Chiunque saccheggi una chiesa avrà la mano mozzata. Se qualcuno prende
          il Corpo di Cristo con un&apos;arma o alcuno dei Suoi sacramenti e lo
          profana, sarà arso senza clemenza.
        </p>

        <p>
          Item. Se qualcuno abbatte un altare o danneggia le immagini nelle
          chiese e nei monasteri, o strappa e distrugge le immagini sulle
          colonne lungo le strade, sarà punito con adeguata severità secondo il
          diritto militare.
        </p>
        <p>
          Item. Se qualcuno, in territorio amico, prende beni diversi dal
          modesto cibo per sé e dal foraggio per i cavalli, sarà punito come un
          ladrone.
        </p>
        <p>
          Item. Nessuno prenderà cavalli, vacche o altro bestiame, né indumenti,
          né altri beni pertinenti all&apos;economia domestica in territorio
          amico; chi lo farà sarà punito come un ladrone.
        </p>
        <p>
          Item. Se qualcuno inizia una rissa nell&apos;accampamento, sarà
          debitamente punito.
        </p>
        <p>
          Item. Se qualcuno sguaina la propria arma contro un altro, gli sarà
          mozzata la mano senza clemenza.
        </p>

        <p>
          Item. Se qualcuno uccide un altro nell&apos;accampamento o dinanzi
          all&apos;esercito nel corso di una rissa, sarà decapitato senza
          clemenza.
        </p>
        <p>
          Item. Tutti i fanti marceranno nei propri ranghi sotto stendardi e
          bandiere come ordinato dai comandanti designati. Se qualcuno si separa
          dai propri ranghi senza il comando e la volontà dei signori
          comandanti, sarà punito come si conviene.
        </p>
        <p>
          Item. Parimenti, nessun cavaliere si allontanerà in alcun luogo, ma
          marcerà ordinatamente nei propri ranghi come ordinato dai comandanti
          designati. Se qualcuno, di propria volontà, si separa in qualsiasi
          direzione e viene catturato o subisce alcun danno, non ce ne faremo
          carico né compenseremo alcun danno da lui subito. Gli altri nobili e i
          nostri leali amici tratteranno i loro servitori nel medesimo modo,
          salvo che i comandanti ordinino a qualcuno di cavalcare in un luogo
          determinato, nel qual caso egli sarà esente da colpa.
        </p>

        <p>
          Item. Coloro che cavalcano in avanguardia con i carri di
          approvvigionamento siano debitamente organizzati e non si separino dai
          propri ranghi. Se qualcuno si separa dai propri ranghi, i conducenti
          dei carri di approvvigionamento prenderanno i loro cavalli e non li
          restituiranno ad alcuno fino al ritorno all&apos;accampamento, e per
          ciascun cavallo riscuoteranno dieci grossi, senza mostrare clemenza né
          perdono alcuno. Parimenti, ai fanti saranno confiscate le balestre
          qualora si allontanino dai propri ranghi senza il permesso dei
          comandanti, e non saranno loro restituite fino al ritorno
          all&apos;accampamento, quando ciascun balestriere pagherà cinque
          grossi.
        </p>
        <p>
          Item. Nei giorni in cui ai ranghi spetta cavalcare o marciare dietro
          ai carri, nessuno si allontanerà né si disperderà, ma rimarrà con
          l&apos;esercito fino a che tutte le truppe non si saranno sistemate.
          Se qualcuno disobbedisce a quest&apos;ordine, sarà punito come
          comandato e ordinato dai comandanti designati, poiché tale
          disobbedienza potrebbe cagionare disonore e danno, cosa che non
          tollereremmo.
        </p>
        <p>
          Item. Quando spetta a una schiera condurre la marcia, la schiera
          seguente non si muoverà finché la prima non abbia disposto i propri
          carri. Se qualcuno si separa con i propri carri e si inserisce nella
          colonna di un&apos;altra schiera, sarà punito secondo le consuetudini
          del diritto militare.
        </p>

        <p>
          Item. Se qualcuno, sia cavaliere o fante, si separa e cerca di
          ottenere vantaggi personali nonostante i nostri ordini, o interferisce
          laddove i nostri comandanti hanno già provveduto, sarà punito per
          consiglio del nostro consiglio e dei nobili che sono con noi o
          designati a tale scopo.
        </p>
        <p>
          Item. Nessuno appicchi fuoco alcuno, salvo per ordine dei nostri
          comandanti designati. In particolare, se un castello viene espugnato,
          non sarà dato alle fiamme senza la volontà e l&apos;ordine dei
          medesimi comandanti. Se qualcuno appicca il fuoco nonostante ciò, sarà
          arso senza clemenza.
        </p>
        <p>
          Item. Quando, per volontà di Dio, i nemici siano catturati in
          battaglia o in un castello, tutti saranno consegnati ai nostri
          comandanti regi.
        </p>
        <p>
          Item. Se qualcuno, con la conoscenza e il permesso dei comandanti,
          cattura prigionieri cavalcando da solo, agiremo secondo il nostro
          consiglio.
        </p>
        <p>
          Item. Se qualcuno abbatte un nemico in combattimento, gli sarà dato il
          cavallo del nemico; e chiunque catturi il cavallo riceverà una kopa di
          grossi da colui che ha abbattuto il nemico, qualora voglia e intenda
          tenere il cavallo.
        </p>

        <p>
          Item. Se si scopre che qualcuno ha rilasciato un prigioniero dalla
          gogna o ha riscosso tributi senza il permesso dei nostri comandanti
          designati, sarà punito secondo il diritto militare come si conviene.
        </p>
        <p>
          Item. Per la disposizione delle sentinelle notturne intorno ai carri e
          presso le porte, sarà assegnata una persona per ciascun carro, ad
          eccezione dei carri della camera e dei carri di approvvigionamento. Se
          vi sia maggiore necessità, se ne assegneranno di più secondo
          l&apos;ordine dei comandanti. Chiunque trascuri tale dovere pagherà
          un&apos;ammenda di due grossi al comandante preposto alle guardie e
          alle sentinelle.
        </p>
        <p>
          Item. Poiché è stato ordinato che vino, birra e altri
          approvvigionamenti necessari siano portati e trasportati
          all&apos;esercito, comandiamo a tutti di non sottrarre nulla a coloro
          che trasportano o portano tali approvvigionamenti per le strade o
          nell&apos;accampamento, né di ostacolarli in alcun modo. Se qualcuno
          li ostacola o sottrae loro alcunché, sarà punito come un ladrone.
        </p>
        <p>
          Item. I comandanti designati sopra la cavalleria e la fanteria e
          preposti alla disposizione dei carri saranno obbediti da tutti coloro
          posti sotto il loro comando, e nessuno si opporrà ad essi né
          contenderà con essi a parole o con i fatti. Se qualcuno
          deliberatamente disobbedisce a questi comandanti e agisce di propria
          volontà, sarà punito a esempio degli altri.
        </p>

        <p>
          Item. Decretiamo che nessuno interferisca con gli scribi militari, né
          alcuno intraprenda azione legale contro di essi, salvo che siano
          trovati colpevoli di qualche misfatto, nel qual caso i comandanti si
          assumeranno l&apos;onere di indagare.
        </p>
        <p>
          Item. Qualsiasi scriba militare nominato da qualsivoglia signore,
          comandante o città in tempo di guerra o di conflitto, al momento del
          pagamento del soldo ai mercenari, riceverà un grosso per kopa
          (sessanta grossi), sia che il pagamento avvenga in campo, in un
          castello, in una città, o in qualsiasi presidio o durante un assedio.
          Nessuno si opporrà a ciò fintantoché la guerra perduri, eccetto quando
          vengano pagati i danni; da questi lo scriba non prenderà nulla, poiché
          non ha alcun diritto su quanto concerne i danni.
        </p>
        <p>
          Item. In qualsiasi rassegna, lo scriba militare siederà e ripartirà i
          compiti con i comandanti, e ne avrà una quota, ossia un grosso per
          kopa, e parimenti un grosso per ciascun tributo riscosso.
        </p>
        <p>
          Item. Quando un mercenario, avendo ricevuto regolare congedo per
          valide ragioni, designa un altro uomo idoneo in suo luogo, il
          mercenario uscente pagherà allo scriba un grosso per la registrazione,
          e il nuovo mercenario subentrante pagherà mezzo grosso.
        </p>

        <p>
          Item. Ciascun capitano, luogotenente o sergente, chiunque abbia sotto
          di sé, condurrà tutti i propri uomini dinanzi allo scriba al momento
          del pagamento del soldo; e ciascun sergente presenterà personalmente i
          propri uomini dinanzi allo scriba quando si debbano assegnare guardie
          o sentinelle. Se qualcuno si oppone allo scriba in ciò, sarà punito
          dai comandanti come disobbediente.
        </p>
        <p>
          Item. Lo scriba militare ispezionerà le armature e le balestre una
          volta al mese per accertarsi che siano nelle medesime condizioni in
          cui furono consegnate. Se qualcuno rifiuta tale ispezione, sarà
          considerato disobbediente.
        </p>
        <p>
          Item. Durante le marce, le rassegne o qualsiasi incontro, quando una
          schiera più forte incontra o sorpassa una più debole, la più forte non
          sottrarrà nulla alla più debole né la ostacolerà, ma la lascerà in
          pace. Se una schiera più forte sottrae o ostacola la più debole
          nonostante quest&apos;ordine, sarà punita come ladrone.
        </p>
        <p>
          Item. Quando gli eserciti sono accampati, nessuno scaverà né creerà
          trincee, dette <Cit>hebauf</Cit>, poiché tali azioni saranno punite.
        </p>
        <p>
          Item. Nessuno disturberà né deprederà gli alveari, poiché tali azioni
          non saranno perdonate.
        </p>

        <p>
          Item. Quando gli eserciti si accampano per la notte e si ode il suono
          di una tromba o un grido nella notte, ciascuno correrà al luogo
          designato con le proprie armi e in nessun altro luogo. Se i nemici
          attaccano i carri, ci si volgerà in quella direzione.
        </p>
        <p>
          Item. I fuochi saranno accesi e mantenuti con cautela e diligenza fra
          i carri, affinché non si arrechi danno alcuno.
        </p>
        <p>
          Item. Ovunque ci si trovi, sia in territorio amico sia non amico, se
          donne con fagotti e indumenti si presentano e siedono presso di essi,
          nessuno le disturberà, né sottrarrà loro alcunché, né le maltratterà.
          Se qualcuno sottrae loro alcunché nonostante quest&apos;ordine, sarà
          punito come un ladrone.
        </p>
        <p>
          Item. Se vi sono rancori, animosità o dissapori fra signori,
          cavalieri, nobili, città o chiunque altro, sorti prima di questa
          campagna o nel corso di essa, tutti dovranno cessare e non essere
          menzionati né perseguiti sul campo fino al ritorno a casa dal campo.
          Tuttavia, ove ve ne sia necessità, sia in combattimento sia durante un
          assalto, tali persone e tutti gli altri si aiuteranno reciprocamente
          senza richiamare tali rancori e animosità. Se qualcuno viene
          riconosciuto colpevole di aver disobbedito a quest&apos;ordine, sarà
          punito secondo il diritto militare.
        </p>

        <p>
          Item. Riguardo ai mulini, comando che nessuno li incendi, li demolisca
          o li danneggi, né prenda alcun ferro da mulino, affinché possano
          essere utilizzati per le necessità di tutti i nostri eserciti. Se
          qualcuno agisce in contrasto con quest&apos;ordine, gli sarà mozzata
          la mano senza clemenza. Parimenti, in altri luoghi quali fattorie o
          casali, specialmente quelli amici, non si prenderanno né rimuoveranno
          lucchetti, catene o altri ferri di qualsivoglia genere, quali
          cerchioni di ruote o chiodi dalle porte; e non si prenderanno ferri
          dagli aratri o da altre attrezzature nei campi.
        </p>
        <p>
          Item. Quando si marcia per territorio amico, tale incristiana
          devastazione non sarà inflitta alla povera gente, né essa sarà
          ostacolata. I casali non saranno saccheggiati, né il bestiame o i
          cavalli saranno presi o condotti via dall&apos;esercito. Le donne
          saranno sempre lasciate in pace e non disturbate. Inoltre, laddove
          l&apos;esercito si accampa, i casali e le masserie non saranno
          abbattuti né demoliti, e tale incristiana devastazione non sarà
          inflitta alla gente.
        </p>
        <p>
          Item. Se il cavallo di un cavaliere fugge, sia in campo sia altrove,
          chiunque possa catturarlo lo farà, e a colui che lo cattura sarà dato
          un grosso e mezzo grosso dal carrettiere.
        </p>

        <p>
          Item. Nessuno scaverà né pescherà in alcuno stagno, piccolo o grande,
          né li prosciugherà, salvo per ordine dei comandanti.
        </p>
        <p>
          Item. Le bevande saranno servite dinanzi all&apos;esercito da persone
          designate dai comandanti, e non soltanto le bevande, ma anche il pane
          e altre necessità, quale il foraggio per i cavalli, saranno
          distribuiti equamente a tutti.
        </p>
        <p>
          Item. Se qualcuno agisce in contrasto con questi ordini e ostacola la
          povera gente, o prende tali beni e li trattiene per sé o li consegna
          agli osti, li vende o li dà a chiunque altro, tali persone e coloro
          che acquistano o ricevono da essi saranno puniti come ladroni.
        </p>
        <p>
          Item. Ciascun carro avrà due conducenti, i quali avranno un elmo e una
          pavese; e sotto il carro vi saranno un&apos;asse e una catena. Ciascun
          carro sarà inoltre dotato di un archibugio a gancio con tutto
          l&apos;equipaggiamento necessario, due asce, due pale, due zappe, due
          picconi, due rastrelli, una barriera con un palo, e una lancia con un
          gancio e un piccolo vessillo.
        </p>
        <p>
          Item. Quando i carri sono in marcia, uomini con zappe, pale, rastrelli
          e asce marceranno in testa a ciascuna fila di carri per riparare le
          strade ove necessario; e non abbandoneranno tale incarico sotto pena
          di tre giorni in catene.
        </p>
      </Col>
    </Row>
  </>
)
