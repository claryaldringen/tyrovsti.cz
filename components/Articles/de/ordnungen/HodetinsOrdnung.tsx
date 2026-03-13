import { Col, Row } from 'reactstrap'
import React from 'react'
import Link from 'next/link'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const HodetinsOrdnung = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="the-so-called-military-order-of-jan-hajek-of-hodetin"
        />
        <h4>
          Die sogenannte Militärordnung des Jan Hájek von Hodětín
          {draft && <DraftBadge />}
        </h4>
        <p>
          Die Transkription wurde von der Schulwebseite{' '}
          <Link href="https://www.digladior.cz/historicky-serm/vojenske-zrizeni-dle-vaclava-iv/">
            Digladior
          </Link>{' '}
          übernommen.
        </p>
        <p>
          Die Datierung und Urheberschaft dieses Werkes sind umstritten. Obwohl
          die Einleitung der Ordnung das Jahr 1413 angibt und Jan Hájek von
          Hodětín, den Unterkämmerer König Wenzels IV., als Verfasser nennt,
          wurde die Entstehung dieser Ordnung im Jahre 1413 bereits von Palacký
          und Toman in Frage gestellt. Jan Durdík neigte zu der Ansicht, dass
          der ursprüngliche Text in jenem Jahr entstand, jedoch nur seine
          überarbeitete Fassung bis heute erhalten geblieben ist, was seiner
          Meinung nach durch den Artikel belegt wird, der die Plünderung von
          Kirchen und Klöstern verbietet und laut ihm auf Erfahrungen aus der
          Zeit der Hussitenkriege zurückgeht. Darüber hinaus fällt auf, wie
          genau die Arbeit mit der Wagenburg hier beschrieben wird. Die
          Entstehung der Ordnung wird daher eher auf das Jahr 1431 datiert.
          Leider ist das Originalmanuskript nicht erhalten geblieben, da es beim
          Brand des Altstädter Rathauses im Mai 1945 zerstört wurde. Heute ist
          es dank jüngerer Abschriften und Editionen bekannt.
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
          Im Jahre des Herrn 1413 ließ der ruhmreichen Gedenkens König Wenzel
          von Böhmen, als er wegen des Widerstandes des Herrn Puota von Skála
          gegen Seine Königliche Majestät die Belagerung der Burg des
          vorgenannten Herrn befahl, diese unterschriebenen Punkte und
          Kriegsgesetze durch den angesehenen Knappen Hájek von Hodětín, den
          Unterkämmerer des Königreichs Böhmen, für die künftigen kriegerischen
          Böhmen niederschreiben, damit sie sich im Heere zu verhalten wüssten;
          und er ließ sie von den Heeresschreibern im Lager vor der vorgenannten
          Burg verlesen, damit sie von allen unter den unten aufgeführten
          Strafen eingehalten würden. Und so beginnen sie im Namen Gottes:
        </p>

        <p>
          Erstens, alle Hauptleute, ihre Untergebenen und die ihnen Anvertrauten
          sollen im Gottesdienst eifrig sein, und keinerlei Unordnung im Lager
          dulden, damit der Herr Gott nicht erzürnt werde.
        </p>
        <p>
          Item. Alle unanständigen und ungebührlichen Spiele, insbesondere
          Würfel, Karten und Kegeln, sollen im Lager verboten sein, da ihre
          Duldung zu vielem Übel führt, wie Nachlässigkeit auf den Wachen und
          Posten und anderen schädlichen Dingen für das Heer und die Personen,
          die spielen. Wer trotz des Verbots solche Spiele betreibt, soll vier
          Tage lang in Ketten vor dem Heer hergeführt werden und muss dem von
          uns eingesetzten Beamten ohne Gnade zehn Groschen zahlen.
        </p>
        <p>
          Item. Alles Fluchen und unzüchtige Reden soll aufhören und unterlassen
          werden. Wer flucht und überführt wird, muss vier Tage in Ketten vor
          dem Heer hergehen.
        </p>

        <p>
          Item. Keinerlei Hurerei soll im Lager, vor dem Heer oder um das Heer
          herum geduldet werden, sondern solche lasterhaften Weiber sollen ohne
          Gnade vom Heeresrichter vertrieben werden. Wenn der Richter diese
          Pflicht vernachlässigt, soll er als ungehorsam betrachtet werden. Wer
          sich dieses Lasters schuldig macht, soll ohne Gnade durch Leibesstrafe
          gezüchtigt werden.
        </p>
        <p>
          Item. Wer einer Jungfrau oder einem Jüngling Gewalt antut und
          überführt wird, soll ohne Gnade mit dem Tode bestraft werden.
        </p>
        <p>
          Item. Keine Kirchen oder Klöster sollen geplündert oder verbrannt
          werden, es sei denn auf Befehl der dafür eingesetzten Hauptleute.
          Daher sollen heilige Gegenstände wie Messgewänder, Kelche, Glocken,
          Bücher und andere Kirchenzierden, und insbesondere der Leib Christi,
          nicht berührt oder genommen werden. Wer eine Kirche plündert, dem soll
          die Hand abgehauen werden. Wer den Leib Christi mit einer Waffe nimmt
          oder irgendein Sakrament entweiht, soll ohne Gnade verbrannt werden.
        </p>

        <p>
          Item. Wer einen Altar zerstört oder Bilder in Kirchen und Klöstern
          beschädigt oder Bilder an Wegsäulen abreißt und zerstört, soll mit
          angemessener Strafe nach dem Kriegsrecht gezüchtigt werden.
        </p>
        <p>
          Item. Wer auf befreundetem Gebiet etwas anderes als bescheidene
          Nahrung für sich und Futter für die Pferde nimmt, soll als Räuber
          bestraft werden.
        </p>
        <p>
          Item. Niemand soll auf befreundetem Gebiet Pferde, Kühe oder anderes
          Vieh und Kleidung oder andere zur Hauswirtschaft gehörige Dinge
          nehmen; ein solcher soll als Räuber bestraft werden.
        </p>
        <p>
          Item. Wer einen Streit im Lager beginnt, soll angemessen bestraft
          werden.
        </p>
        <p>
          Item. Wer seine Waffe gegen einen anderen zieht, dem soll die Hand
          ohne Gnade abgehauen werden.
        </p>

        <p>
          Item. Wer jemanden im Lager oder vor dem Heer in einem Streit tötet,
          soll ohne Gnade enthauptet werden.
        </p>
        <p>
          Item. Alles Fußvolk soll in seinen Reihen unter Fahnen und Bannern
          marschieren, wie es die dafür eingesetzten Hauptleute befehlen. Wer
          ohne Befehl und Willen der Herren Hauptleute aus seiner Reihe
          ausbricht, soll angemessen bestraft werden.
        </p>
        <p>
          Item. Ebenso soll kein Reiter irgendwohin reiten, sondern
          ordnungsgemäß in seiner Reihe marschieren, wie es die eingesetzten
          Hauptleute befehlen. Wer eigenmächtig auf irgendeine Seite ausbricht
          und dabei gefangen wird oder Schaden erleidet, für den wollen wir
          nicht einstehen, noch den Schaden ersetzen. Andere Edelleute und
          unsere treuen Freunde sollen mit solchen Dienern ebenso verfahren, es
          sei denn, die Hauptleute befehlen jemandem, irgendwohin zu reiten,
          dann soll er ohne Schuld sein.
        </p>

        <p>
          Item. Diejenigen, die mit den Versorgungswagen vorausreiten, sollen
          ordnungsgemäß aufgestellt werden und nicht aus ihren Reihen
          ausbrechen. Wer aus seiner Reihe ausbricht, dem sollen die
          Versorgungswagenlenker das Pferd abnehmen und es niemandem vor der
          Rückkehr ins Lager zurückgeben, und von jedem Pferd sollen zehn
          Groschen einbehalten werden, ohne Gnade oder Verzeihung. Ebenso soll
          dem Fußvolk die Armbrust abgenommen werden, wenn es ohne Erlaubnis der
          Hauptleute die Reihe verlässt, und sie soll erst im Lager
          zurückgegeben werden, gegen Zahlung von fünf Groschen pro Armbrust.
        </p>
        <p>
          Item. An den Tagen, an denen die Reihen hinter den Wagen reiten oder
          marschieren sollen, soll niemand umherstreifen oder sich zerstreuen,
          sondern beim Heer bleiben, bis alle Truppen gelagert sind. Wer diesem
          Befehl nicht gehorcht, soll bestraft werden, wie es die eingesetzten
          Hauptleute befehlen und anordnen, denn solcher Ungehorsam könnte
          Schande und Schaden verursachen, was wir nicht dulden wollen.
        </p>
        <p>
          Item. Wenn eine Truppe den Vormarsch beginnt, soll die nächste sich
          nicht bewegen, bis die erste ihre Wagen aufgestellt hat. Wer mit
          seinen Wagen ausbricht und in eine andere Reihe eindringt, soll nach
          dem üblichen Kriegsrecht bestraft werden.
        </p>

        <p>
          Item. Wer, ob zu Pferd oder zu Fuß, eigenmächtig ausbricht und
          entgegen unserem Befehl eigene Beute machen will oder dort stört, wo
          unsere Hauptleute bereits Beute gemacht haben, soll auf Rat unseres
          Rates und der Edelleute bestraft werden, die bei uns sind oder dafür
          eingesetzt wurden.
        </p>
        <p>
          Item. Niemand soll Feuer legen, es sei denn auf Befehl unserer
          eingesetzten Hauptleute. Insbesondere wenn eine Burg erobert wird,
          soll sie nicht ohne den Willen und Befehl derselben Hauptleute
          angezündet werden. Wer trotzdem Feuer legt, soll ohne Gnade verbrannt
          werden.
        </p>
        <p>
          Item. Wenn, so Gott will, Feinde auf dem Feld in der Schlacht oder in
          einer Burg gefangen werden, sollen sie alle unseren königlichen
          Hauptleuten übergeben werden.
        </p>
        <p>
          Item. Wer mit Wissen und Erlaubnis der Hauptleute auf einem Streifzug
          Gefangene macht und herbeiführt, mit dem werden wir gemäß unserem Rat
          verfahren.
        </p>
        <p>
          Item. Wer einen Feind im Gefecht niedersticht, dem soll das Pferd des
          Feindes gegeben werden; und wer das Pferd einfängt, dem soll ein
          Schock Groschen von demjenigen gegeben werden, der den Feind
          niedergestochen hat, sofern er das Pferd behalten will.
        </p>

        <p>
          Item. Wer überführt wird, einen Gefangenen aus dem Stock freigelassen
          oder ohne Erlaubnis unserer eingesetzten Hauptleute Tribute
          eingetrieben zu haben, soll nach dem Kriegsrecht angemessen bestraft
          werden.
        </p>
        <p>
          Item. Zur Besetzung der Nachtwachen um die Wagen und an den Toren soll
          von jedem Wagen, außer den Kammer- und Vorratswagen, eine Person
          abgestellt werden. Wenn größere Not herrscht, sollen auf Befehl der
          Hauptleute mehr abgestellt werden. Wer diese Pflicht versäumt, soll
          eine Strafe von zwei Groschen an den Hauptmann zahlen, der die Wachen
          und Posten einsetzt.
        </p>
        <p>
          Item. Da befohlen wurde, dass Wein, Bier und andere notwendige Vorräte
          dem Heer zugeführt werden sollen, befehlen wir allen, denjenigen, die
          diese Vorräte auf den Straßen oder im Lager befördern, nichts
          wegzunehmen oder sie in irgendeiner Weise zu behindern. Wer sie
          behindert oder ihnen etwas wegnimmt, soll als Räuber bestraft werden.
        </p>
        <p>
          Item. Hauptleute, die über die Reiterei und das Fußvolk eingesetzt und
          mit der Anordnung der Wagen betraut sind, sollen von allen
          Untergebenen befolgt werden, und niemand soll sich ihnen widersetzen
          oder mit ihnen in Wort oder Tat streiten. Wer eigenmächtig den
          Gehorsam gegenüber diesen Hauptleuten verweigert und auf eigenen
          Willen besteht, soll als abschreckendes Beispiel für andere bestraft
          werden.
        </p>

        <p>
          Item. Wir verfügen, dass niemand die Heeresschreiber behindern soll,
          noch soll jemand rechtliche Schritte gegen sie unternehmen, es sei
          denn, sie werden einer Missetat überführt, in welchem Falle die
          Hauptleute die Sache untersuchen sollen.
        </p>
        <p>
          Item. Jeder Heeresschreiber, der von irgendeinem Herrn, Hauptmann oder
          einer Stadt in Kriegs- oder Kampfzeiten eingesetzt wird, soll, wenn
          den Söldnern der Sold ausgezahlt wird, einen Groschen pro Schock
          (sechzig Groschen) erhalten, ob die Zahlung im Feld, auf einer Burg,
          in einer Stadt oder in irgendeiner Garnison oder bei einer Belagerung
          erfolgt. Niemand soll ihm dies verwehren, solange der Krieg dauert,
          außer bei der Auszahlung von Schadensersatz; davon soll der Schreiber
          nichts nehmen, da er kein Recht auf das hat, was den Schadenersatz
          betrifft.
        </p>
        <p>
          Item. Bei jeder Musterung soll der Heeresschreiber anwesend sein und
          die Pflichten mit den Hauptleuten teilen, und er soll einen Anteil
          daran haben, nämlich einen Groschen pro Schock, und ebenso einen
          Groschen von jedem eingetriebenen Tribut.
        </p>
        <p>
          Item. Wenn ein Söldner nach ordnungsgemäßer Beurlaubung aus triftigen
          Gründen einen anderen tüchtigen Mann an seine Stelle setzt, soll der
          Abreisende dem Schreiber einen Groschen für die Eintragung zahlen, und
          der neu eintretende Söldner soll einen halben Groschen zahlen.
        </p>

        <p>
          Item. Jeder Hundertschaftsführer, Fünfziger oder Rottmeister, wer auch
          immer unter ihm steht, soll alle seine Leute vor den Schreiber
          bringen, wenn der Sold ausgezahlt werden soll; und jeder Zehner soll
          seine Knechte persönlich vor dem Schreiber vorführen, auch wenn Wachen
          oder Posten besetzt werden sollen. Wer sich dem Schreiber hierin
          widersetzt, soll von den Hauptleuten als ungehorsam bestraft werden.
        </p>
        <p>
          Item. Der Heeresschreiber soll die Rüstung und Armbrüste einmal im
          Monat überprüfen, um sicherzustellen, dass sie sich im selben Zustand
          befinden wie bei der Ausgabe. Wer diese Überprüfung verweigert, soll
          als ungehorsam betrachtet werden.
        </p>
        <p>
          Item. Auf Märschen, bei der Fouragierung oder bei jeder Begegnung,
          wenn ein stärkerer Haufen auf einen schwächeren trifft oder ihn
          einholt, soll der stärkere dem schwächeren nichts wegnehmen oder ihn
          in irgendeiner Weise behindern, sondern ihn in Frieden lassen. Wenn
          eine stärkere Truppe trotz dieses Befehls einer schwächeren etwas
          wegnimmt oder sie behindert, soll sie als Räuber bestraft werden.
        </p>
        <p>
          Item. Wenn die Heere gelagert sind, soll niemand Gräben ausheben oder
          anlegen, die als <Cit>Hebauf</Cit> bekannt sind, denn solche
          Handlungen werden bestraft.
        </p>
        <p>
          Item. Niemand soll Bienenstöcke stören oder ausrauben, denn solche
          Handlungen werden nicht verziehen.
        </p>

        <p>
          Item. Wenn die Heere sich niederlegen und in der Nacht die Trompete
          ertönt oder gerufen wird, soll jeder mit seinen Waffen zum bestimmten
          Platz laufen und nirgendwohin sonst. Wenn Feinde die Wagen angreifen,
          sollen sie sich dorthin wenden.
        </p>
        <p>
          Item. Zwischen den Wagen sollen Feuer vorsichtig und sorgfältig
          angezündet und unterhalten werden, damit kein Schaden entsteht.
        </p>
        <p>
          Item. Wo auch immer, ob auf befreundetem oder nicht befreundetem
          Gebiet, wenn Frauen mit Bündeln und Kleidung erscheinen und bei ihnen
          sitzen, soll niemand sie stören, ihnen etwas wegnehmen oder sie
          misshandeln. Wer trotz dieses Befehls von ihnen nimmt, soll als Räuber
          bestraft werden.
        </p>
        <p>
          Item. Wenn es unter irgendwelchen Herren, Rittern, Edelleuten, Städten
          oder sonstigen Personen irgendwelche Feindschaften, Bitterkeiten oder
          Missfallen gibt, gleich ob sie vor diesem Feldzug oder während
          desselben entstanden sind, so sollen sie alle aufhören und auf diesem
          Felde nicht erwähnt oder geahndet werden bis zur Heimkehr vom Felde.
          Jedoch wenn es nötig ist, sei es im Gefecht oder beim Sturm, sollen
          solche Personen und alle anderen einander helfen, ohne solche
          Feindschaften und Bitterkeiten in Erinnerung zu rufen. Wer überführt
          wird, diesen Befehl zu missachten, soll nach dem Kriegsrecht bestraft
          werden.
        </p>

        <p>
          Item. Betreffend die Mühlen befehle ich, dass niemand sie verbrennen,
          zerstören oder beschädigen soll, noch Mühleneisen nehmen, damit sie
          für die Bedürfnisse aller unserer Heere mahlen können. Wer gegen
          diesen Befehl handelt, dem soll ohne Gnade die Hand abgehauen werden.
          Ebenso sollen an anderen Orten wie Höfen oder Hütten, besonders
          befreundeten, keine Schlösser, Ketten oder andere Eisen, wie Radreifen
          oder Nägel von Toren, abgenommen oder entfernt werden; und keine
          Pflugschare oder andere Geräte sollen vom Felde genommen werden.
        </p>
        <p>
          Item. Beim Marsch durch befreundetes Gebiet soll den armen Leuten
          keine solche unchristliche Verwüstung zugefügt werden, noch sollen sie
          behindert werden. Hütten sollen nicht geplündert, Vieh und Pferde
          nicht weggetrieben werden. Frauen sollen stets in Frieden gelassen und
          nicht belästigt werden. Auch wo das Heer lagert, sollen Hütten und
          Bauernhöfe nicht abgerissen oder zerstört werden, und solche
          unchristliche Verwüstung soll den Menschen nicht zugefügt werden.
        </p>
        <p>
          Item. Wenn einem Reiter ein Pferd entläuft, ob im Felde oder anderswo,
          soll es einfangen, wer es kann, und wer es einfängt, soll einen
          Groschen erhalten und vom Wagenknecht einen halben Groschen.
        </p>

        <p>
          Item. Niemand soll in irgendwelchen Teichen, kleinen oder großen,
          graben oder fischen, noch sie ablassen, es sei denn auf Befehl der
          Hauptleute.
        </p>
        <p>
          Item. Getränke sollen vor dem Heer durch von den Hauptleuten
          eingesetzte Personen ausgeschenkt werden, und nicht nur Getränke,
          sondern auch Brot und andere Bedarfsgüter, wie Pferdefutter, sollen
          gerecht an alle verteilt werden.
        </p>
        <p>
          Item. Wer gegen diese Befehle handelt und die armen Leute behindert,
          oder diese Dinge nimmt und für sich behält oder sie Wirten verpfändet,
          verkauft oder anderen gibt, solche Personen und diejenigen, die von
          ihnen kaufen oder empfangen, sollen als Räuber bestraft werden.
        </p>
        <p>
          Item. Jeder Wagen soll zwei Fahrer haben, und sie sollen einen Helm
          und eine Pavese haben; und unter dem Wagen soll ein Brett und eine
          Kette sein. Jeder Wagen soll auch eine Hakenbüchse mit aller nötigen
          Ausrüstung, zwei Äxte, zwei Schaufeln, zwei Hacken, zwei Spitzhacken,
          zwei Rechen, eine Schranke mit einer Stange und einen Spieß mit Haken
          und einem kleinen Fähnlein haben.
        </p>
        <p>
          Item. Wenn die Wagen marschieren, sollen vor jeder Wagenreihe Leute
          mit Hacken, Schaufeln, Rechen und Äxten vorausgehen, um Wege
          auszubessern, wenn nötig; und sie sollen diese Pflicht nicht
          verlassen, bei Strafe von drei Tagen in Ketten.
        </p>
      </Col>
    </Row>
  </>
)
