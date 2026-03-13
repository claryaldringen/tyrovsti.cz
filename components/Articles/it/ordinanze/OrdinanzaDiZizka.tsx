import { Col, Row } from 'reactstrap'
import Link from 'next/link'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const OrdinanzaDiZizka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="the-so-called-zizkas-military-order" />
        <h4>
          La cosiddetta Ordinanza militare di Žižka{draft && <DraftBadge />}
        </h4>
        <p>
          La trascrizione è stata tratta dal sito didattico{' '}
          <Link href="https://www.digladior.cz/historicky-serm/zizkuv-vojensky-rad/">
            Digladior
          </Link>
        </p>
        <p>
          La cosiddetta Ordinanza militare di Žižka, conservatasi in una copia
          calligrafica della seconda metà del XVI secolo, non è purtroppo
          datata. Anche la sua denominazione tradizionale non è del tutto
          corretta. Si tratta, in realtà, dell&apos;atto fondativo, della
          dichiarazione programmatica e del codice disciplinare dell&apos;Unione
          della Boemia orientale di Žižka, in particolare della sua componente
          militare. Fu probabilmente redatta nella prima metà di settembre del
          1423, sebbene non si possa escludere del tutto una datazione alla
          prima metà di novembre del medesimo anno. Il testo si apre con i
          quattro Articoli di Praga, seguiti dall&apos;elenco dei firmatari, e
          prosegue con disposizioni organizzative, prevalentemente di carattere
          disciplinare.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <p>
          Z milosti a z daru Otce a Pána Boha všemohoucího uvěřivše a přijevše
          osvícení jisté, stálé, ohlášené a důvodné pravdy a zákona Božího:
        </p>
        <p>
          Nejprvé, abychom slovu Božímu svobodu dali v kázaní všudy, žádného
          místa nevymlouvajíce, a to v svých srdcích míle přijímajíce, skutečně
          plnili a drželi, potom i jiné k tomu vedli a učili.
        </p>
        <p>
          Druhé, abychme tělo a krev Pána našeho Ježíše Krista, Boha
          všemohoucího, všickni přijímali s bázní, s náboženstvím a s
          poctivostí, staří i mladí, dítky hned po křtu, a potom vždy dítky,
          žádných osob nevyměňujíce, je k tomu raději nutili a pudili, nejméně v
          neděli každý tejden.
        </p>
        <p>
          Třetí, abychme kněžstvo přivedli a uvedli k životu syna Božího, Pána
          Jezu Krista, a k životu apoštolskému, a nadání jich a zboží
          svatokupectví rušili a zkazili s pomocí Boží.
        </p>
        <p>
          Čtvrté, abychme sami na sobě napřed i v sobě hříchy smrtelné i všední
          stavovali, rušili a kazili; potom na králích, na knížatech i na
          páních, na měšťanech, na řemeslnících, na robotěžích i na všech lidech
          mužského i ženského pohlaví a pokolení, žádných osob nevyměňujíce,
          starých ani mladých, a vždy s pomocí Pána Boha všemohoucího.
        </p>
        <p>
          A kdož by těchto kusuov a artikuluov svrchu psaných držeti a jich
          skutečně vésti i plniti nechtěl, jich pomáhati hájiti a brániti, toho,
          žádného nevymíně, aniž chcme trpěti na poli mezi sebou i u vojště s
          Boží pomocí a na hradích, na tvrzech, v městech, v městečkách
          hrazených i otevřených, ve vsích i ve dvořích, žádného miesta
          nevyměňujíce ani vymlouvajíce, ale nevynímajíce, všecky všudy
          napomínati, raditi, puditi, honiti k tomu dobrému s pomocí Pána Boha
          našeho.
        </p>
        <p>
          A protož hnuti jsouce duchem dobrým, vědúce a rozomějíce, že všecky
          tohoto světa věci jsou padúcí a minulé, ale pravda Pána Jezu Krista,
          Boha všemohoucího, zůstává na věky:
        </p>
        <p>
          My, Jan bratr Žižka z Kalichu, Jan Roháč z Dubě, Aleš z Rysmburka a z
          Vřešťova, Jan z Počtajna na Žampachu, Boček z Kunstatu a odjinud z
          Jevišovic, Bartoš a Bernart, bratří z Valečova, Bartoš, Jan, Martin,
          bratří z Vysoké; a my, purgmistři a konšelé i všecky obce města Hradce
          nad Labem a Čáslavi; my, Beneš z Mokrovús, Jaroslav z Kalichu, Václav
          Ho ryna z Honbic, Křišťan z Žernosek, Frencl z Litožnic, Jíra z
          Řečice, Jan z Studené; a my, purgmistr a konšelé i všecka obec města
          Jaroměře; my, Zdislav Zeman, Vavřinec Polák z Paňova, Blažek z Kralup,
          Jakub z Březové, Petřík Královec z Příbramě, Jan z Domažlic, Jan z
          Tehova, Martin z Borovnice, Havel Orebský; a my, purgmistr a konšelé i
          všecka obec města Dvora; a my, Chústník z Košová, Ondřej z Studené,
          Šárka z Slavného, Kříž Setník, Beneš Setník, Mikát Brada Odraný, Aleš
          z Hostačova, Polévka z Hošťky, Mikuláš Orebský, Veta z Chlumčan,
          Litobor z Trubče, Linhart z Sleze, Beneš z Horošovic, Jan Baštín,
          Mařík Velek Šeňk, Jíra Roh, Mikuláš Brada, hejtmané, páni, rytíři,
          panoši, purgmistři, konšelé i všecky obce panské, rytířské, panošské,
          městské, žádných nevyměňujíce ani vymlouvajíce; my všichni svrchu
          psaní ke všem i všech prosíme, řádně napomínajíce přikazujeme i chceme
          tomu, aby řádné poslušenství bylo; nebo skrze neposlušenství a neřádné
          vejtržky se veliké škody i jsme brávali na bratřích i na statcích a
          hanbu často od nepřátel Božích a našich trpěli. Již s pomocí Boží a
          vaší i všech věrných míníce se toho vystříci těmito obyčeji:
        </p>
        <p>
          Nejprvé, když bychom chtěli vytrhnúti z města kterého, neboli kde se
          hnouti chtěli z miesta, kdež bychom polem leželi, no aby nižádný
          napřed nejezdil k městu ani šel, aniž se vezl, sobě místa aneb hospody
          zastávat, ani se kde polem klad bez dopuštění a rozkázaní města
          jmenovaného od jmenovaných starších hejtmanuov, kteříž na to a k tomu
          vydáni a jmenováni budou. A jestliže by se kdo jinde položil a vytrhl
          neboli postavil bez rozkázaní těch starších, chtěli bychom pomstiti a
          popraviti nad ním i nad takovým, i k jeho statku i k jeho hrdlu,
          jakožto k neposlušným, buď kdož buď, kteréhožkoli řádu, žádných osob
          nevynímajíce.
        </p>
        <p>
          A když by se chtěli hnouti z toho místa, kdež by polem leželi, s
          dopuštěním a rozkázáním těch starších jmenovaných aby vytrhli na pole,
          kdež by místo podobné a hodné bylo k tomu, a tu sebe zčekali, aby se
          všecko vojsko hnulo z stanoviště.
        </p>
        <p>
          A žádný aby nezapaloval, buď ani kde jinde pálil, kdybychme táhli nebo
          leželi, jedno ti, ješto k tomu vydáni a ustaveni budou, a to pod
          velikou pokutou, aby toho žádní jiní nečinili.
        </p>
        <p>
          Potom, než by se ihned z města hnuli, prvé než by které věci činili a
          rozkázali, aby se nejprv Pánu Bohu modlili, kleknouc a padnouc před
          tělem Božím a před tváří Boží, když vytržení bude z vojska anebo z
          města, aby Pán Buoh všemohoucí ráčil svou pomoc dáti a tu svou při
          svátou provésti k své svaté chvále a k rozmnožení toho dobrého a
          věrným k spasení a ku pomoci.
        </p>
        <p>
          Pak potom lidi aby šikovali nebo zřídili, každou rotu pod své korúhve,
          heslo aby bylo pověděno, a potom aby se hned i hnuli a tak táhli,
          která napřed rota bude šikována ten den pod svejmi korúhvemi; a jiní
          aby se v ně nemísili, ani jim překáželi, ani se kam odtrhali. Jakož
          komu kde a jakž které roty nebo korúhve šikovány budou, aby tak táhli
          v svém šiku a pohromadě, jedni k druhejm se nemísejíce, a to opatrně,
          napřed i nazad i na stranách vojska ostříhajíce i sami sebe, jakož
          komu kde od starších poručeno bude.
        </p>
        <p>
          A jestliže by Buoh neuchoval, že by kterou škodu vzeli skrze jich
          neopatrnosti a zmeškání které neb těch hejtmanův u vojště, neboli na
          vartách nebo na poli neb v strážech, kdež jim poručeno bude a svěřeno
          od starších a od obcí, žádných osob nevyměňujíce, mínieť i chtie nad
          námi hejtmané i všecky obce k nim toho zříti i jim k hrdlóm popraviti,
          i k statkuom, a pomstiti, buď kníže, pán nebo ktožkolivěk, žádných
          osob nevyměňujíce, ani vymlouvajíce.
        </p>
        <p>
          Ale jestliže by kde Pán Buoh dal nepřátely přemoci a porazili, města,
          tvrze, hradu dobyti, táhnouce polem nebo polem ležíce, kterých kořistí
          dobyti: aby ten vzatek a ty kořisti sneseny, svedeny, svezeny a na
          hromadu skladeny byly, kdež by bylo tomu místo ukázáno a jmenováno od
          starších, buďto mnoho nebo málo. A k tomu aby byli vydáni a voleni
          starší ze všech obcí, los panských, rytířských, městčích i
          robotěncuov, aby věrně způsobili ty věci chudým i bohatým, a
          spravedlivě, jakž na koho sluší, rozdány a rozděleny byly, aby nižádný
          sám sobě nebral, ani co kdo zachoval. Jestli pak že by co kto vzal
          neboli zachoval, a to bylo usvědčeno dobrejm, svědomím, k tomu
          takovému chtěli by popraviti, k jeho hrdlu i k statku, buď kdož buď,
          žádných osob nevynímajíce, jakožto k zloději Božímu a obecnému, jakož
          se jest stalo Achanovi pro čepici dcer královských a pro plášť, neboli
          jinou smrtí, buďto kníže, pán, rytíř nebo panoše, měštěnín, řemeslník
          nebo sedlák, i žádného nevymlouvajíce ani k vosobám hledíce a zříce, s
          pomocí Boží takovým činiti nad nimi pomstu.
        </p>
        <p>
          Dále sváruov, křikuov a potrhání aby žádných nebylo u vojště ani mezi
          námi.
        </p>
        <p>
          Jestliže by kdo koho bil, ranil, ochromil nebo zabil, bud nad ním
          pomstěno podlé zákona Božího, jako Pán Buoh dopustí, žádného
          nevyměňujíce ani k vosobám zříce.
        </p>
        <p>
          Dále vězte, že kdo by se kolivěk kradl nebo šel nebo jel aneb vezl od
          nás z vojsky, když bychom polem táhli nebo leželi, bez odpuštění
          starších jmenovaných svrchu, a znamení jistého nebude míti, buď kníže,
          pán, rytíř, panoše, měštěnín, řemeslník nebo robotěž nebo
          kterýžkolivěk člověk, a byl by popaden, že chtí k jeho hrdlu i k
          statku popraviti jakožto nad zlodějem nevěrným, jenž se krade od pře
          Boží a věrných bratří z vojsky, kdež vojsko bude nebo leží.
        </p>
        <p>
          Také nechcem trpěti mezi sebou nevěrných, neposlušných, lhářuov,
          zlodějův, kostkářův, loupežníkuov, plundréřuov, opilcuov, lajcí,
          smilníkuov, cizoložníkuov, smilnic a cizoložnic i všech zjevných
          hříšníkuov a hříšnic; ty všeckny z sebe chcme puditi a honiti, nad
          nimi popravovati s pomocí Trojice svaté vedlé zákona Božího.
        </p>
        <p>
          Míníť také bratr Žižka i jiní páni, hejtmané, rytíři, panoše, měšťané,
          řemeslníci i robotěži svrchu psaní a jmenovaní, i všecky obce s pomocí
          Boží a obecní ze všech neřáduov trestati i biti, trestáním honiti,
          mrskati, biti i zabíjeti, stínati, věšeti, topiti, páliti i všemi
          pomstami mstíti, kteréž pomsty na zlé slušejí vedlé zákona Božího,
          nižádných osob nevynímajíce ze všech stavuov, mužského i ženského
          pohlaví.
        </p>
        <p>
          A tak budeme-li zachovávali, činiti a plniti artikule svrchu psané a
          spasitelné. Pán Buoh bude s námi svú svatů milostí a pomocí, neb to
          přísluší k boji Božímu tak činiti, dobře, křesťansky, v lásce zřízeni,
          v bázni Boží živu bejti, své žádosti, potřeby i naděje v Pánu Bohu
          setrvale bez pochybení položiti, čekajíce od něho věčné odplaty.
        </p>
        <p>
          I prosímeť vás, milé obce, ve všech a ze všech krajin, knížat, pánuov,
          rytířuov, panoší, měšťanuov, řemeslníkuov, robotěžuov, sedlákuov i
          lidí všech stavuov a zvláště napřed všech věrných Čechuov, abyste se k
          tomu dobrému svolili a nám toho radní a pomocní byli. A my vám zase
          též držeti, plniti i mstíti chceme, pro milého Pána Boha, pro jeho
          svaté umučení, pro vysvobození pravdy zákona Božího, svátých a jich
          zvelebení, ku pomoci věrným církvi svaté a zvláště jazyka českého i
          slovanského, i všeho křesťanství, ku pozdvižení věrným a ku potupě
          neústupným a zjevným kacířuom a pokrytým i zloškvrníkům, aby to Pán
          Buoh všemohoucí nám i vám ráčil svou pomoc dáti a zvítěziti nad
          nepřáteli svými i našimi, a za nás i s vámi bojovali svou mocí a
          neodlučovati nás své svaté milosti. Amen.
        </p>
        <p>
          Budiž Pán Buoh s námi i s vámi, v nichž jste, a kdež se líbí Trojici
          svaté! A toho pro lepší svědomí a potvrzení a jistotu s větší pilností
          vedlé duchovenství nad bídný rozum světa tohoto, my svrchu psaní s
          dobrým rozmyslem vědomě, dobrou volí k tomuto zápisu a listu
          svolujeme, a svolujeme jej skutečně držeti a zachovati i ostříhati s
          pomocí nestvořené a na věky požehnané Trojice svaté. Amen.
        </p>
        <p>Tak Pán Buoh dej!</p>
      </Col>
      <Col md={6}>
        <p>
          Per grazia e dono del Padre e Signore Dio onnipotente, avendo creduto
          e accolto l&apos;illuminazione della verità certa, costante,
          proclamata e fondata e della legge di Dio:
        </p>
        <p>
          In primo luogo, affinché diamo libertà alla parola di Dio nella
          predicazione ovunque, senza escludere alcun luogo, e accogliendola con
          amore nei nostri cuori, la adempiamo e la osserviamo realmente, e poi
          conduciamo e istruiamo anche gli altri a fare altrettanto.
        </p>
        <p>
          In secondo luogo, affinché tutti riceviamo il corpo e il sangue del
          Signore nostro Gesù Cristo, Dio onnipotente, con timore, devozione e
          rispetto, vecchi e giovani, i fanciulli subito dopo il battesimo, e
          poi sempre i fanciulli, senza escludere alcuna persona, anzi
          esortandoli e costringendoli a ciò, almeno ogni domenica di ogni
          settimana.
        </p>
        <p>
          In terzo luogo, affinché ricondurremo e guideremo il clero alla vita
          del Figlio di Dio, il Signore Gesù Cristo, e alla vita apostolica, e
          con l&apos;aiuto di Dio aboliremo e distruggeremo le loro prebende e i
          beni della simonia.
        </p>
        <p>
          In quarto luogo, affinché prima di tutto aboliamo e distruggiamo in
          noi stessi i peccati mortali e veniali, e poi tra i re, i principi, i
          signori, i borghesi, gli artigiani, i contadini e tutta la gente, di
          sesso maschile e femminile, giovani e vecchi, sempre con l&apos;aiuto
          di Dio onnipotente.
        </p>
        <p>
          E chiunque non volesse osservare, adempiere e attuare questi punti e
          articoli sopra scritti, né aiutare a difenderli e proteggerli, costui,
          senza eccezione alcuna, non intendiamo tollerarlo in campo tra noi né
          nell&apos;esercito, con l&apos;aiuto di Dio, né nei castelli, nelle
          fortezze, nelle città, nelle cittadine fortificate e aperte, nei
          villaggi e nelle fattorie, senza escludere né giustificare alcun
          luogo, ma senza eccezione alcuna, ammonendo, consigliando, incitando e
          incalzando tutti e ovunque verso il bene, con l&apos;aiuto del Signore
          Dio nostro.
        </p>
        <p>
          E pertanto, mossi da spirito buono, sapendo e comprendendo che tutte
          le cose di questo mondo sono caduche e transitorie, ma la verità del
          Signore Gesù Cristo, Dio onnipotente, permane in eterno:
        </p>
        <p>
          Noi, Jan fratello Žižka di Kalich, Jan Roháč di Dubě, Aleš di Rysmburk
          e di Vřešťov, Jan di Počtajna su Žampach, Boček di Kunstát e altrove
          di Jevišovice, Bartoš e Bernart, fratelli di Valečov, Bartoš, Jan,
          Martin, fratelli di Vysoká; e noi, borgomastri e consiglieri e tutte
          le comunità delle città di Hradec nad Labem e Čáslav; noi, Beneš di
          Mokrovousy, Jaroslav di Kalich, Václav Horina di Honbice, Křišťan di
          Žernoseky, Frencl di Litožnice, Jíra di Řečice, Jan di Studená; e noi,
          borgomastro e consiglieri e tutta la comunità della città di Jaroměř;
          noi, Zdislav Zeman, Vavřinec Polák di Paňov, Blažek di Kralupy, Jakub
          di Březová, Petřík Královec di Příbram, Jan di Domažlice, Jan di
          Tehov, Martin di Borovnice, Havel Orebský; e noi, borgomastro e
          consiglieri e tutta la comunità della città di Dvůr; e noi, Chústník
          di Košov, Ondřej di Studená, Šárka di Slavný, Kříž capitano, Beneš
          capitano, Mikát Brada Odraný, Aleš di Hostačov, Polévka di Hošťka,
          Mikuláš Orebský, Veta di Chlumčan, Litobor di Trubče, Linhart di Slez,
          Beneš di Horošovice, Jan Baštín, Mařík Velek Šeňk, Jíra Roh, Mikuláš
          Brada, capitani, signori, cavalieri, scudieri, borgomastri,
          consiglieri e tutte le comunità nobiliari, cavalleresche, scudieresche
          e cittadine, senza escludere né giustificare alcuno; noi tutti, sopra
          scritti, a tutti e ciascuno chiediamo e ordiniamo, debitamente
          ammonendo, e vogliamo che vi sia debita obbedienza; poiché a causa
          della disobbedienza e delle azioni disordinate abbiamo spesso subito
          gravi danni nei fratelli e nei beni, e abbiamo spesso patito vergogna
          dai nemici di Dio e nostri. Con l&apos;aiuto di Dio, vostro e di tutti
          i fedeli, intendiamo premunirci da ciò con queste disposizioni:
        </p>
        <p>
          In primo luogo, quando volessimo partire da qualsiasi città, ovvero
          muoverci dal luogo dove siamo accampati, nessuno cavalchi avanti verso
          la città né vi si rechi, né vi si faccia trasportare per riservarsi un
          posto o un alloggio, né si accampi in alcun luogo senza il permesso e
          l&apos;ordine degli anziani capitani designati e nominati a tale
          scopo. E se qualcuno si accampasse o si spostasse senza l&apos;ordine
          di tali anziani, intendiamo punirlo e farlo giustiziare, lui e
          chiunque faccia altrettanto, confiscandogli i beni e la vita, come si
          conviene ai disobbedienti, chiunque egli sia, di qualsiasi ordine,
          senza eccezione di persona.
        </p>
        <p>
          E quando vorranno muoversi dal luogo dove sono accampati, con il
          permesso e l&apos;ordine dei suddetti anziani, si portino in campo, in
          un luogo adatto e conveniente, e là si attendano a vicenda, affinché
          l&apos;intero esercito si muova dalla posizione.
        </p>
        <p>
          E nessuno appicchi fuoco, né incendi altrove, mentre siamo in marcia o
          accampati, salvo coloro che a ciò sono designati e preposti, e ciò
          sotto severa pena, affinché nessun altro lo faccia.
        </p>
        <p>
          Poi, prima di partire immediatamente dalla città, prima di compiere o
          ordinare qualsivoglia azione, si preghi anzitutto il Signore Iddio,
          inginocchiandosi e prostrandosi dinanzi al corpo di Dio e al cospetto
          di Dio, al momento della partenza dall&apos;esercito o dalla città,
          affinché il Signore Iddio onnipotente si degni di concedere il suo
          aiuto e di condurre a compimento la sua santa causa, a sua santa
          gloria, per l&apos;accrescimento del bene e per la salvezza e
          l&apos;aiuto dei fedeli.
        </p>
        <p>
          Si disponga e si ordini quindi la truppa, ogni compagnia sotto le
          proprie insegne, si comunichi la parola d&apos;ordine, e poi ci si
          metta subito in marcia, con la compagnia schierata quel giorno in
          testa sotto le proprie insegne; e gli altri non si mescolino ad essa,
          né la ostacolino, né si distacchino. Come e dove le compagnie e le
          insegne saranno schierate, così si marci nella propria formazione e
          compatti, senza mescolarsi gli uni agli altri, e ciò con prudenza,
          sorvegliando il fronte, le retrovie e i fianchi dell&apos;esercito e
          sé stessi, secondo quanto ordinato dagli anziani a ciascuno.
        </p>
        <p>
          E se Iddio non ce ne preservi, qualora si subisca danno per negligenza
          o inadempienza dei capitani nell&apos;esercito, ovvero nelle guardie,
          in campo o nelle sentinelle, dove è stato loro ordinato e affidato
          dagli anziani e dalle comunità, senza eccezione di persona, i capitani
          e tutte le comunità intendono e vogliono indagare e far giustiziare
          coloro che ne sono responsabili, confiscando loro i beni e la vita, e
          far vendetta, sia esso principe, signore o chiunque altro, senza
          eccezione né giustificazione di persona.
        </p>
        <p>
          Ma qualora il Signore Iddio conceda di sopraffare e sconfiggere i
          nemici, di espugnare città, fortezze e castelli, marciando in campo o
          restando accampati, e di conquistare bottino di qualsiasi sorta: tale
          bottino e tali prede siano raccolti, radunati, trasportati e ammassati
          nel luogo indicato e designato dagli anziani, sia molto o poco. E a
          tale scopo siano designati ed eletti anziani da tutte le comunità,
          dalla nobiltà, dalla cavalleria, dai cittadini e dai contadini,
          affinché distribuiscano con onestà tali beni ai poveri e ai ricchi, e
          siano equamente ripartiti e divisi secondo quanto spetta a ciascuno,
          sicché nessuno prenda per sé, né alcuno trattenga alcunché. Se poi
          qualcuno prendesse o trattenesse qualcosa, e ciò fosse provato con
          buona coscienza, si intende farlo giustiziare, confiscandogli la vita
          e i beni, chiunque egli sia, senza eccezione di persona, come ladro di
          Dio e della comunità, così come accadde ad Acan per il copricapo delle
          figlie del re e per il mantello, ovvero con altra morte, sia esso
          principe, signore, cavaliere o scudiero, borghese, artigiano o
          contadino, senza giustificare né riguardare alcuna persona, eseguendo
          con l&apos;aiuto di Dio tale vendetta sopra di loro.
        </p>
        <p>
          Inoltre, non vi siano contese, clamori né risse nell&apos;esercito né
          fra di noi.
        </p>
        <p>
          Se qualcuno percuota, ferisca, storpi o uccida un altro, sia punito
          secondo la legge di Dio, come il Signore dispone, senza eccezione né
          riguardo di persona.
        </p>
        <p>
          Sappiate inoltre che chiunque si allontani furtivamente, a piedi, a
          cavallo o su carro, dal nostro esercito, mentre siamo in marcia o
          accampati, senza il permesso dei suddetti anziani e senza un segno di
          riconoscimento certo, sia esso principe, signore, cavaliere, scudiero,
          borghese, artigiano, contadino o qualsiasi altro uomo, e venga
          catturato, sarà giustiziato, confiscandogli la vita e i beni, come
          ladro infedele che si sottrae alla causa di Dio e dei fratelli fedeli
          dall&apos;esercito, ovunque l&apos;esercito si trovi o sia accampato.
        </p>
        <p>
          Parimenti, non intendiamo tollerare fra noi gli infedeli, i
          disobbedienti, i bugiardi, i ladri, i giocatori d&apos;azzardo, i
          briganti, i saccheggiatori, gli ubriaconi, gli impostori, i
          fornicatori, gli adulteri, le fornicatrici e le adultere, e tutti i
          peccatori e le peccatrici manifesti; tutti costoro intendiamo
          scacciare e allontanare da noi, facendoli giustiziare con l&apos;aiuto
          della Santa Trinità secondo la legge di Dio.
        </p>
        <p>
          Il fratello Žižka e gli altri signori, capitani, cavalieri, scudieri,
          borghesi, artigiani e contadini sopra scritti e nominati, e tutte le
          comunità con l&apos;aiuto di Dio e della collettività, intendono
          punire e colpire ogni disordine, incalzando con castighi, frustando,
          percuotendo e uccidendo, decapitando, impiccando, annegando, bruciando
          e vendicandosi con tutte le punizioni che spettano ai malvagi secondo
          la legge di Dio, senza eccezione di persona alcuna, di qualsiasi
          condizione, di sesso maschile o femminile.
        </p>
        <p>
          E così, se osserveremo, attueremo e adempiremo gli articoli sopra
          scritti e salvifici, il Signore Iddio sarà con noi con la sua santa
          grazia e il suo aiuto, poiché alla battaglia di Dio si addice agire
          così, rettamente, cristianamente, disposti nella carità, vivendo nel
          timore di Dio, riponendo saldamente e senza esitazione i nostri
          desideri, le nostre necessità e le nostre speranze nel Signore Iddio,
          attendendo da Lui l&apos;eterna ricompensa.
        </p>
        <p>
          Vi preghiamo altresì, care comunità, di tutte e da tutte le regioni,
          principi, signori, cavalieri, scudieri, borghesi, artigiani, contadini
          e genti di ogni condizione, e specialmente anzitutto tutti i fedeli
          Boemi, affinché acconsentiate a questo bene e ci siate di consiglio e
          di aiuto. E noi in cambio vogliamo del pari osservare, adempiere e far
          giustizia, per l&apos;amato Signore Iddio, per la sua santa passione,
          per la liberazione della verità della legge di Dio, dei santi e della
          loro glorificazione, in aiuto ai fedeli della santa Chiesa e
          specialmente della lingua ceca e slava, e di tutta la cristianità, per
          l&apos;elevazione dei fedeli e per l&apos;umiliazione degli eretici
          ostinati e manifesti, degli ipocriti e dei corrotti, affinché il
          Signore Iddio onnipotente si degni di concedere a noi e a voi il suo
          aiuto e la vittoria sui nemici suoi e nostri, e combatta per noi e con
          voi con la sua potenza, e non ci separi dalla sua santa grazia. Amen.
        </p>
        <p>
          Sia il Signore Iddio con noi e con voi, ovunque voi siate, e ovunque
          piaccia alla Santa Trinità! E per migliore coscienza e conferma e
          certezza, con maggiore diligenza secondo lo spirito al di sopra della
          misera ragione di questo mondo, noi sopra scritti, con buona
          deliberazione, consapevolmente e di buona volontà, acconsentiamo a
          questo atto e documento, e acconsentiamo a osservarlo, mantenerlo e
          custodirlo realmente, con l&apos;aiuto dell&apos;increata e in eterno
          benedetta Santa Trinità. Amen.
        </p>
        <p>Così conceda il Signore Iddio!</p>
      </Col>
    </Row>
  </>
)
