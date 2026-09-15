import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const RadVevodyAlbrechtaRakouskeho = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="rad-vojensky-vevody-albrechta-rakouskeho" />
        <h4>
          Řád vojenský vévody Albrechta Rakouského, snad z 28. dubna 1431
          {draft && <DraftBadge />}
        </h4>
        <p>Pracovní překlad, zatím bez odborné korektury.</p>
        <p>
          Řád zachycuje, na čem se vévoda Albrecht Rakouský, markrabě moravský,
          dohodl se stavy své země proti husitům. Dochoval se v současném opisu
          v archivu na zámku Riedeck a vydal ho Franz Kurz roku 1825.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n425/mode/1up"
          />{' '}
          Listina uvádí jen den, sobotu před svátkem sv.&nbsp;Filipa a Jakuba,
          rok ale chybí. Kurz ji kladl do roku 1426, Toman jeho důvody považuje
          za velmi slabé a řád klade do roku 1431.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:42a87718-e110-422e-b07f-62cf7e140be0"
          />{' '}
          Kurz se opíral mimo jiné o to, že Lipold Krajíř, jmenovaný zde
          nejvyšším hejtmanem pro případ, že by hraběti ze Schaumbergu zabránila
          nemoc, skutečně velel rakouskému vojsku proti husitům v bitvě na
          počátku roku 1427.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n309/mode/1up"
          />{' '}
          Toman naopak upozorňuje, že podle norimberských usnesení z března 1431
          se měla říšská vojska sejít koncem června u českých hranic a rakouská
          výprava v týchž dnech u Laa, že vévoda Albrecht v dubnu 1431 držel
          sněm ve Vídni a že podle jeho listu z 24.&nbsp;května 1431 měl k
          výpravě toho roku jít každý desátý muž. Za nejvážnější důvod pokládá,
          že řád počítá s vozy vyzbrojenými po českém způsobu i s propracovaným
          poměrem lidu a vozů, jejich členěním a velením, kdežto do roku 1426
          nenachází v sousedních zemích po strojení vozů žádnou stopu.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:b4edeec9-0e14-4db0-957c-efc3bb2adb88"
          />
        </p>
        <p>
          Tomanův otisk má oproti Kurzovu vydání upravený pravopis (např.{' '}
          <Cit>und</Cit> místo <Cit>vnd</Cit>, <Cit>ein</Cit> místo{' '}
          <Cit>ain</Cit>), je rozdělen do očíslovaných článků a na několika
          místech se od Kurze odchyluje. V čl.&nbsp;3 má{' '}
          <Cit>unter denselben Landleuten und ihren Holden</Cit>, Kurz však{' '}
          <Cit>vnder denselben Lanndlewten von Iren Holden</Cit>, tedy jde o
          zemany, kteří ze svých poddaných nemohou postavit každého desátého
          muže.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n426/mode/1up"
          />{' '}
          V čl.&nbsp;14 Toman vynechal, že pokutu platí úředník{' '}
          <Cit>demselben vnsern gnedigen Herren</Cit>, tedy vévodovi. Místo
          Tomanova <Cit>ubernarund (sic)</Cit> v čl.&nbsp;13 má Kurz{' '}
          <Cit>vberuarund</Cit>, tedy přestoupili.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n429/mode/1up"
          />{' '}
          Tomanova čtení <Cit>fein Kundschaft</Cit> v čl.&nbsp;15 a{' '}
          <Cit>Wipen</Cit> v čl.&nbsp;22 jsou tiskové chyby, Kurz má{' '}
          <Cit>sein kuntschaft</Cit> a <Cit>wissen</Cit>.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n430/mode/1up"
          />
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n433/mode/1up"
          />{' '}
          Překlad se v těchto místech řídí Kurzem.
        </p>
        <p>
          Poznámky k překladu: <Cit>Landschaft</Cit> překládám jako{' '}
          <Cit>stavy</Cit>, <Cit>Landleute</Cit> jako <Cit>zemany</Cit>, tedy
          držitele statků v zemi, duchovní i světské, a <Cit>Holden</Cit> a{' '}
          <Cit>Hindersessen</Cit> jako <Cit>poddané</Cit> a <Cit>podsedky</Cit>.
          <br />
          <Cit>Gäst</Cit> v čl.&nbsp;16 jsou podle Kurzovy vysvětlivky cizinci,
          kteří mají statky v Rakousích.
          <br />
          Význam slova <Cit>Schesslir</Cit> v čl.&nbsp;4 se mi nepodařilo
          ověřit, podle souvislosti jde o druh přilby. Nejisté je také{' '}
          <Cit>Schiessjoppen</Cit> (snad vycpávaná kazajka střelce),{' '}
          <Cit>Mässl</Cit> v čl.&nbsp;6 (snad odměrka na prach) a{' '}
          <Cit>gediegens Fleisch</Cit> v čl.&nbsp;8. Tato místa jsou v překladu
          označena otazníkem.
          <br />
          Obrat <Cit>ein Abschlag thun</Cit> a slovo <Cit>ausgesten</Cit> (u
          něhož už Kurz připojil „sic“) v čl.&nbsp;11 a 12 překládám podle
          smyslu.
          <br />V čl.&nbsp;19 má Toman <Cit>an etlich Ursach</Cit>, Kurz{' '}
          <Cit>an ydlich vrsach</Cit>. Předložka <Cit>an</Cit> zde znamená{' '}
          <Cit>bez</Cit>, překládám tedy <Cit>bez řádné příčiny</Cit>.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <p>
          <i>
            Hernach ist vormerkt ein Ordnung, der unser gnädiger Herr Herzog
            Albrecht, Herzog zu Österreich und Markgraf zu Merhern x, und die
            Landschaft seines Lands wider die Ketzer von Pöheim sind überein
            worden.
          </i>
        </p>
        <ol>
          <li>
            Von erst, aus der Landschaft sechs Person aus den Landleuten sind
            benennt worden, dass sie daraus ein obristen Haubtman gedächten zu
            erwählen und zu benennen, hat dieselb Landschaft darauf gedacht, und
            gemeingleich Graf Johansen von Schaumberg benennet, dass ihn der
            zumal gefiel zu ein Haubtmann, ob ihn sein Krankheit nicht irret.
            Wurd ihn aber sein Krankheit daran verhindern, so gefall ihnen wohl,
            dass unser gnädiger Herr Herrn Leupolte von Kreyg zu einem obristen
            Haubtmann nähme; gefiel aber seiner Gnaden einer aus den andern
            vieren bass, dem wöllen sie auch gern gehorsam sein.
          </li>
          <li>
            Von erst, dass aus der Pauerschaft allenthalben im Land die
            stärkisten und wehrlichsten, und auch die bass geschickisten Leut
            genommen werdent, und dass allweg die zehentist Person gesessner
            Leut werd aufgebracht und erwält, und dass die neun Person denselben
            zehentisten mit Zehrung und andern Notdurften versorgen und
            ausrichten soll, dass derselb Zehner in dieselb Reis nichts
            pflichtig soll sein zu leiden, denn als hernach geschrieben steht.
            Und sullen derselben Zehner zwainzig Person ein guten starken
            Gereiswagen mit einer Deichsel, vier Pferden und dreien Pretten
            haben, und darzu ein Ketten, die fünfzehen Schuh lang sei mit ein
            Ring und eim Hacken an dem andern Ort daran. Und soll mit Speis und
            andern Notdurften, die darzu gehörent, wohl zugericht sein, als
            hernach begriffen ist.
          </li>
          <li>
            Aber nachdem meniger geistlicher und wertleicher Herrn und Landleut
            Holden und Hindersessen enthalb Tunnaw zu menigern malen von den
            Feinden fast verprennt und verderbt sein worden, ob denn durch
            solcher Beschwerung willen einer oder meniger unter denselben
            Landleuten und ihren Holden ungefährlich die zehentist Person als
            viel Person, die ein Wagen prächten, nicht aufbringen, mochten, und
            sunder nach solchem Verderben, als menigern ihr Pferd und ander ihr
            Gut ist genommen worden: dass der oder die dannoch ihr Holden, als
            sie der meist mügen, ungefährlich aufbringen, und das setzt man in
            ihr Treu und Gewissen, und dass den solcher Abgang dem andern oder
            denselben Landleuten wider die Pön und den Fall in der Ordnung
            begriffen, nicht zu Schaden chomme, sonder ihr halben unschädlich
            sei.
          </li>
          <li>
            Item so ist begriffen und beredt worden, dass dieselben zwanzig
            Erwält&apos; ihr eigen Wehr und Harnasch auf ihr selbs Geld haben
            sollen. Doch welich das nicht vermochten, den sullen die andern, die
            daheim bleibend, darinne zu statten kommen: und dass derselber
            zwanzig Person drei Büchsenschützen, acht Armbstschützen, vier mit
            Spiessen, vier mit Drischeln sein; und soll jeder darzu haben ein
            Schwert oder ein Messer, einen geringen Eisenhut oder ein Schesslir,
            ein Pantzir oder ein Schiessjoppen und zween Plechhandschuh.
          </li>
          <li>
            Item es ist auch beredt worden, ob die zehentist Person, die also
            von den neun aufbracht unt erwält wurd, icht Weingarten, Aecker oder
            Wiesmahd hiet, dem sullen die neun zusammt der obgemeldt und hernach
            beschrieben Zehrung und Zurichtung in sein Abwesen seinen Erib, was
            er der hat, helfen zu pauen, und die Nutz daraus zu fechsen.
          </li>
          <li>
            Item es soll jeder Püchsenschütz haben ein Pfund Pulver, Pleikugel
            ein Pfund schwer, und darzu ein Ladeisen und Mässl; und die
            Armbrustschützen soll ihr jeder zehn Geschoss in seim Köcher haben.
          </li>
          <li>
            Item, dass unter denselben zwanzig Person eine der andern Hauptmann,
            und einer ihr Führmann sei.
          </li>
          <li>
            Item, dass jeder Wagen werd gespeist gen den Feinden von erst mit
            Prod für vier Schilling Pfennig, Käs für sechzig Pfennig, ein Seiten
            Pecheinfleisch (Geräuchertes); gediegens Fleisch auf ein Vierteil
            eins Rinds, und mit ein Eimer Weins; und soll man dieselben Speise
            nicht angreifen noch zehrn, nur wo man nicht Nahrung findet, da mag
            man die gezehru und genutzen.
          </li>
          <li>
            Item so ist beredt worden, dass man einer jeden Person, die in das
            Feld ziehen wirdet, auf ein Moneid sechs Schilling Pfennig geben
            soll, also dass die ein Haubtmann des Wagens inhabe, und sie denn
            mit Wissen der andern auf ihr aller Notdurft, und besunder umb Speis
            ausgebe, und damit handeln soll nach dem Pesten und Treuisten, als
            er dann versteht.
          </li>
          <li>
            Item, dass allweg über zehen Wägen und das Volk, das darauf ist, ein
            Haubtmann werd gesetzt, und dass auch über fünfzig Wägen und das
            Volk darauf ein Haubtmann, und darnach über hundert Wägen auch ein
            Haubtman werd gegeben und gesetzt, und dass also hinfür nach der
            Menge der Wägen und des Volks, als viel des wird, Haubtleut gesetzt
            und gemacht werden, und dass denn ein obrister Haubtmann, wer der
            wird, die Haubtleut über die zehen Wägen und über die fünfzig, und
            über die hundert Wägen ordnen und setzen soll, damit der Zeug desto
            ordentlicher zugericht und geschickt werde.
          </li>
          <li>
            Item ob einer under den Landleuten über die zwainzig Person, die bei
            einem Wagen sein wurden, ein oder etlich seiner Holden übrig hiet,
            die soll er einem andern oder menigen seiner Nachbauren, die nit
            erfolgen und von ihre Holden kein Wagen mügen gehaben, zuteilen,
            damit der oder die auch ein Wagen bestellen, als oben geschrieben
            steht. Wär aber, dass einer ungefährlich von sein übrigen Holden
            nicht ein Nachpauern darzu mocht gehaben, so soll er denselben sein
            Holden dennoch ein Abschlag thun, nach Inhaltung der Ordnung, und
            die dann ihm die andern sein Holden mittheiln, damit die nach
            derselben Ordnung ausgesten.
          </li>
          <li>
            Item ob einer auch under den Landleuten geistlich oder wertleicher
            hinder zehen Holden hiet, und nicht die zehentist Person daraus
            gehaben mocht, so soll er ein andern seiner Nachpauren ungefährlich
            zu ihm nehmen, damit er und derselb sein Nachpauer auch die
            zehentist Person aufbringen, und die dem obristen Haubtmann
            zuschicken, damit von wehrlichen Leuten, und die zu dem Streit sind
            geschickt, auch Niemand ausgeste nach Ausweisung der ehegenannten
            Ordnung.
          </li>
          <li>
            Gescheh aber, dass einer oder meniger under den Preleten, Herren,
            Rittern, Knechten, Pfarrern und auch Burgern, die Holden auf dem
            Land habent, einer oder meniger ihr Holden nach laut der Ordnung zu
            solchem Zug nicht ausprächten: als oft sie das ubernarund (sic)
            wissentlich gemacht wurden, so soll ihr jeder für itlichen derselben
            seiner Holden, den er nicht ausprächt hat, zweiunddreissig Pfund
            Pfenning verfallen sein; derselben Summ Pfenning sullen denn unserm
            genadigen Herren, dem Herzogen, zwei Theil gefallen, die denn ferrer
            zu dem gemein Nutz des Zugs sollen gewendet werden, und der
            dritt&apos; Theil soll eim obristen Haubtmann, wer der wird,
            gepüren.
          </li>
          <li>
            Wär aber, dass ein Amtmann von Saumniswegen durch Freundschaft,
            Gunst oder Gab willen oder sust listigleich etlicher seins Herrn
            Holden uberhub, und die nicht ausprächt nach laut der Ordnung, und
            dass das ahn desselben seins Herrn Wissen und Willen gescheh, der
            soll von jeder Person, die er also überhebt, zehen Pfund Pfenning
            geben, die denn auch in gemein Nutz sullen gekehrt werden, und soll
            darzu an Leib werden gepüsst.
          </li>
          <li>
            Item so ist beredt worden, dass unser gnädiger Herr in allen
            Vierteiln Lands und in den Pfarrn bestellen und seinen Amtleuten
            emphehlen soll, dass sie sich erfahrn und auch fein Kundschaft
            haben, ob indert einer under den Landleuten, Geistlicher oder
            Wertlicher, funden wird, der sein Leut, einen oder menigern nach
            Inhaltung der Ordnung nicht genz ausbrächt, den oder dieselben, die
            nicht auspracht sind, sullen denn dieselben Amtleut, den er das
            emphehlen wird, lauter in Geschrift bringen und die unserm gnädigen
            Herrn dem Herzogen angeben, damit solich Ungehorsam nach der
            ehgenannten Ordnung und Pön gestraft werden.
          </li>
          <li>
            Item von der Gäst Güter wegen, Geistlicher und Wertleicher, ist
            geraten worden, dass unser gnädiger Herre von Österreich zu
            igleichen Vierteil zween darzu geb und schaff, die derselben Gäst
            Leut auch nach Begreifung der Ordnung ausbringen. Wär aber, dass
            jemand under den Gästen nicht Holden, sunder liegund Güter und Land
            hiet, darauf soll unser gnädiger Herr gedenken, damit sie von
            denselben ihren Gütern leiden als ander Leut im Land nach Inhaltung
            der Ordnung.
          </li>
          <li>
            Item so hat sich die Landschaft gemeinigleich unserm gnädigen Herrn
            dem Herzogen gewilligt und verfangen, dass ihm die Landleut all, wer
            vor Jugend und Alter mag, in eigner Person und auf ihr eigen Zehrung
            und Schäden ein ganz Moneit zu Dienst wider die ungläubigen Ketzer
            innerlands oder ausserlands reiten und dienen wollen nach ihrem
            Vermögen, doch ob sie in demselben Moneit von Haus aus in das Heer
            zu ziehen, oder süst in ander Weg von den Feinden icht Schaden
            nehmen wurden, dass sie unser Herr gnädigleich bedenk nach seiner
            Gnaden, denn nach Ausgang des Moneit soll er ihn für redlich und
            ritterlich Schäden stehn, der sie nehment von den Feinden nach
            Geschäft seiner Gnaden und seines obristen Haubtmanns, und ihn
            darumb Schädenbrief geben nach seins Hof Sitt und Gewohnheit, als er
            ihn dann in der Reis vor Prag geben hat, sie derselben Schäden zu
            entrichten nach seiner Rät Rat und Erkanntnuss.
          </li>
          <li>
            Item hat sich unser gnädiger Herr, der Herzog, gegen der Landschaft
            verfangen, ob einer oder meniger under den Landleuten im Feld
            abgiengen und nicht Sun hinder ihn liessen, dass er die Lehen, die
            sie jetzt von ihm zu Lehen habent, ihrn Töchtern und andern nächsten
            Freunden von Gnaden leihen wölle.
          </li>
          <li>
            Wär aber, dass sich jemand von edeln Leuten an etlich Ursach daheim
            enthielten und nicht aufprechen: wenn das wissentlich gemacht wird,
            den oder dieselben ungehorsamen soll unser gnädiger Herr an Leib und
            an Gut swerlichen bessern, und soll sich dawider Niemants insetzen,
            noch dawider reden in kein Weise.
          </li>
          <li>
            Item so ist unsers gnädigen Herrn des Herzogen ernstliche Meinung,
            als sein Gnad der Landschaft selber geoffent und mündlich gesagt und
            emphohlen hat, dass aller Krieg, Unwillen und Feindschaft, so ein
            Landmann zu dem andern hat oder gehaben mag, von dem heuntigen Tag,
            das ist an Samstag vor sanct Philipps und sanct Jacobs Tag, gänzlich
            aufgehebt und angesten soll, unz dass unser gnädiger Herr wieder aus
            dem Feld kumpt und darnach uber vierzehn Tag, also dass in der Zeit
            einer mit dem andern in Ungüten und Unwillen gar nichts soll ze
            schaffen haben; und nach Ausgang derselben Zeit hat denn einer zu
            dem andern icht ze sprechen, der mag das thun mit eim Rechten.
          </li>
          <li>
            Item dass derselb unser gnädiger Herr bestell in dem Heer ein frein
            Markt also, dass man seinem Heer Speis und Tränk und ander Notdurft
            zuführen mug, damit die Fuhrleut sicher und frei vor allermeniglich
            ab und zu dem heer chommen und gefahren mügen; und ob jemand solich
            Fuhrleut wider den Aufsatz beraubt oder hindert in kein Weise, der
            oder die sullen an Leib und an Gut gestraft werden ahn alle Gnad.
          </li>
          <li>
            Item von der Pauerschaft wegen aufzebringen ist beredt worden, dass
            all Präleten, Herren, Ritter und Knecht, Pfarrer und auch Burger,
            die Holden auf dem Land haben, all diese ihr Holden selber nach
            Inhaltung der Ordnung fürderlich ufbringen sullen, also, dass die
            Landleut geistleich und werntleich in den undern Vierteiln enhalb
            und hie dieshalb Tunnau sich zu eigner Person und mit ihren Dienern
            und Holden zu unserm gnädigen Herrn dem Herzogen auf dem Samstag
            nach St Johanns Tag zu Sunbenden schierist kunftig gen Laa fügen,
            und dass denn ein iglich sein Leut und Holden und dartzu sein
            gereisig Volk, was des ein jeder für sich selber haben wird, angeben
            soll; damit er dasselbig ferrer wiss&apos; zu ordnen. Was aber
            Landleut in den obern Vierteiln enhalb und hie dieshalb der Tunnau
            gesessen sein, die sullen mit ihrem gereisigen Volk und ihren Holden
            zu Egenburg chommen, zu Graf Johansen vom Schaumberg, Herrn
            Reinprechten von Wallsee und andern Landleuten, die oberhalb der
            Enns herab daselbs hin gen Egenburg chommen werdent, die denn ihr
            Volk und Leut, was des ihr jeder haben wird, auch den Anwelden, die
            man darzu schaffen wirdet, in Geschrift angeben süllen, damit man
            des ein Wipen hab, und dass ferrer mug geordnen und geschicken.
          </li>
          <li>
            Item von Püchsen und anders Gezeugs wegen zu dem Streit, das sull
            unser gnädiger herr selber bedenken zu ordnen.
            <Qt
              publication={PUBLICATIONS.TOMAN}
              href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:836fba53-31c7-4c13-b4c1-73b844d6ff3a"
            />
            <Qt
              publication={PUBLICATIONS.KURZ1825}
              href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n425/mode/1up"
            />
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <p>
          <i>
            Zde je zaznamenán řád, na kterém se náš milostivý pán vévoda
            Albrecht, vévoda rakouský a markrabě moravský atd., a stavy jeho
            země usnesli proti kacířům z Čech.
          </i>
        </p>
        <ol>
          <li>
            Nejprve: když bylo stavům jmenováno šest osob ze zemanů, aby z nich
            uvážily volbu a jmenování nejvyššího hejtmana, stavy to uvážily a
            jednomyslně jmenovaly hraběte Jana ze Schaumbergu, neboť ten se jim
            za hejtmana zamlouval nejvíce, pokud mu v tom nezabrání jeho nemoc.
            Kdyby mu však nemoc v tom zabránila, jsou srozuměny s tím, aby náš
            milostivý pán vzal za nejvyššího hejtmana pana Lipolda z Kreygu;
            zamlouval-li by se však Jeho Milosti více některý z ostatních čtyř,
            budou i jemu rády poslušny.
          </li>
          <li>
            Dále, aby byli po celé zemi vybráni ze sedláků ti nejsilnější, k
            boji nejschopnější a také nejzručnější lidé, a aby byl vždy postaven
            a vybrán každý desátý z usedlých lidí, a aby ostatních devět tohoto
            desátého opatřilo stravou a jinými potřebami a vypravilo ho tak, aby
            na té výpravě nemusel nést nic jiného, než co je psáno níže. A
            dvacet takových desátých mužů má mít jeden dobrý silný vůz na
            výpravu s ojí, čtyřmi koňmi a třemi prkny, a k tomu řetěz, který ať
            je patnáct stop dlouhý, s kruhem na jednom a hákem na druhém konci.
            A vůz má být dobře vypraven stravou a jinými potřebami, které k tomu
            patří, jak je popsáno níže.
          </li>
          <li>
            Protože však poddané a podsedky mnoha duchovních i světských pánů a
            zemanů za Dunajem nepřátelé mnohokrát těžce vypálili a zpustošili:
            kdyby tedy pro takovou tíseň jeden nebo více z těchto zemanů nemohl
            ze svých poddaných poctivě postavit každého desátého muže, tolik
            osob, kolik by obsadilo vůz, zvláště po takové zkáze, kdy mnohým
            byli pobráni koně a jiný majetek, ať ten nebo ti přesto poctivě
            postaví ze svých poddaných tolik, kolik nejvíce mohou, a to se klade
            na jejich věrnost a svědomí; a aby jim ani ostatním zemanům takový
            úbytek nebyl na škodu vzhledem k pokutě a propadnutí, které řád
            stanoví, nýbrž aby jim byl bez újmy.
          </li>
          <li>
            Dále bylo ujednáno a dohodnuto, že těchto dvacet vybraných má mít
            vlastní zbraň a zbroj za své vlastní peníze. Kdo by na to však
            neměl, tomu mají ostatní, kteří zůstanou doma, v tom pomoci. A z
            těchto dvaceti osob mají být tři střelci z pušek, osm střelců z
            kuší, čtyři s kopími a čtyři s cepy; a každý má mít k tomu meč nebo
            tesák, lehký železný klobouk nebo přilbu (?), pancíř nebo vycpávanou
            kazajku (?) a dvě plechové rukavice.
          </li>
          <li>
            Dále bylo také ujednáno: má-li desátý muž, kterého takto devět
            ostatních postavilo a vybralo, nějakou vinici, pole nebo louku, mají
            mu ti devět kromě výše uvedené a níže popsané stravy a výbavy za
            jeho nepřítomnosti pomoci obdělávat jeho dědictví, co ho má, a
            sklidit z něho úrodu.
          </li>
          <li>
            Dále má mít každý střelec z pušky jednu libru prachu, olověné kule o
            váze jedné libry a k tomu nabiják a odměrku (?); a každý ze střelců
            z kuše má mít v toulci deset střel.
          </li>
          <li>
            Dále, aby z těchto dvaceti osob byl jeden hejtmanem ostatních a
            jeden jejich vozatajem.
          </li>
          <li>
            Dále, aby byl každý vůz na cestu proti nepřátelům zpočátku zásoben
            chlebem za čtyři šilinky feniků, sýrem za šedesát feniků, jedním
            bokem uzeného masa; masem (?) na čtvrtinu hovězího a jedním vědrem
            vína; a na tuto stravu se nemá sahat ani ji jíst, leda tam, kde se
            nenajde potrava, tam ji smějí sníst a užít.
          </li>
          <li>
            Dále bylo ujednáno, že se každé osobě, která potáhne do pole, dá na
            měsíc šest šilinků feniků, a to tak, že je bude mít u sebe hejtman
            vozu a s vědomím ostatních je vydá na potřeby všech, zejména na
            stravu, a má s nimi naložit co nejlépe a nejpoctivěji, jak rozumí.
          </li>
          <li>
            Dále, aby byl vždy nad deset vozů a lid, který na nich je, ustanoven
            hejtman, a také nad padesát vozů a lid na nich hejtman, a potom nad
            sto vozů též aby byl dán a ustanoven hejtman, a aby tak dále podle
            množství vozů a lidu, kolik ho bude, byli ustanovováni hejtmané; a
            aby pak nejvyšší hejtman, ať jím bude kdokoli, hejtmany nad deseti,
            nad padesáti a nad sto vozy určil a ustanovil, aby bylo vojsko tím
            spořádaněji připraveno a vypraveno.
          </li>
          <li>
            Dále, kdyby některý ze zemanů měl jednoho nebo několik svých
            poddaných navíc nad dvacet osob, které by připadly na jeden vůz, má
            je přidělit jinému nebo několika svým sousedům, kteří nedosáhnou
            počtu a ze svých poddaných nemohou vypravit žádný vůz, aby i ten
            nebo ti vypravili vůz, jak je psáno výše. Kdyby však některý pro své
            přebývající poddané poctivě nenašel souseda, má těmto svým poddaným
            přesto uložit podíl (?) podle znění řádu, a ostatní jeho poddaní ať
            se s nimi o něj rozdělí, aby ani oni podle téhož řádu nezůstali
            stranou.
          </li>
          <li>
            Dále, kdyby některý ze zemanů, duchovní nebo světský, měl méně než
            deset poddaných a nemohl z nich postavit desátého muže, má k sobě
            poctivě přibrat jiného ze svých sousedů, aby on a tento jeho soused
            také postavili desátého muže a poslali ho nejvyššímu hejtmanovi, aby
            se podle znění výše jmenovaného řádu nikdo z lidí schopných a
            zdatných k boji nevyhnul.
          </li>
          <li>
            Kdyby se však stalo, že jeden nebo více z prelátů, pánů, rytířů,
            panošů, farářů a také měšťanů, kteří mají poddané na venkově, podle
            znění řádu nevypravili na takové tažení jednoho nebo více svých
            poddaných: kolikrát by se prokázalo, že to přestoupili, má každý z
            nich za každého takového poddaného, kterého nevypravil, propadnout
            dvaatřicet liber feniků; z této sumy mají připadnout dva díly našemu
            milostivému pánu vévodovi, a ty se pak mají dále obrátit k obecnému
            užitku tažení, a třetí díl má náležet nejvyššímu hejtmanovi, ať jím
            bude kdokoli.
          </li>
          <li>
            Kdyby však některý úředník z nedbalosti, pro přátelství, přízeň nebo
            dar či jinak lstivě ušetřil některé poddané svého pána a nevypravil
            je podle znění řádu, a stalo se to bez vědomí a vůle jeho pána, ten
            má za každou osobu, kterou takto ušetřil, dát témuž našemu
            milostivému pánu deset liber feniků, které se také mají obrátit k
            obecnému užitku, a má být k tomu potrestán na těle.
          </li>
          <li>
            Dále bylo ujednáno, že náš milostivý pán má ve všech čtvrtích země a
            ve farnostech zařídit a svým úředníkům nařídit, aby se vyptávali a
            zjišťovali, zda by se někde našel některý ze zemanů, duchovní či
            světský, který by své lidi, jednoho nebo více, podle znění řádu
            zcela nevypravil; ty, kteří nejsou vypraveni, mají pak tito
            úředníci, jimž to nařídí, řádně sepsat a udat našemu milostivému
            pánu vévodovi, aby taková neposlušnost byla potrestána podle výše
            jmenovaného řádu a pokuty.
          </li>
          <li>
            Dále bylo stran statků cizinců, duchovních i světských, uváženo, aby
            náš milostivý pán rakouský v každé čtvrti k tomu dal a ustanovil dva
            muže, kteří by i lidi těchto cizinců vypravili podle znění řádu.
            Kdyby však některý z cizinců neměl poddané, nýbrž nemovité statky v
            zemi, má na to náš milostivý pán pamatovat, aby i oni ze svých
            statků nesli břemeno jako ostatní lidé v zemi podle znění řádu.
          </li>
          <li>
            Dále se stavy jednomyslně našemu milostivému pánu vévodovi uvolily a
            zavázaly, že mu všichni zemané, komu to mládí a stáří dovolí, budou
            osobně, na vlastní náklad a škodu, po celý měsíc sloužit, jezdit a
            bojovat proti nevěřícím kacířům v zemi i mimo zemi podle svých
            možností; kdyby však v tomto měsíci při tažení z domova do vojska
            nebo jinak utrpěli od nepřátel nějakou škodu, ať na ně náš pán podle
            své milosti milostivě pamatuje; po uplynutí toho měsíce jim však má
            ručit za poctivé a rytířské škody, které utrpí od nepřátel z rozkazu
            Jeho Milosti a jeho nejvyššího hejtmana, a vydat jim na to listy o
            škodách podle zvyku a obyčeje svého dvora, jak jim je vydal při
            tažení před Prahu, a tyto škody jim nahradit podle rady a uznání
            svých rádců.
          </li>
          <li>
            Dále se náš milostivý pán vévoda zavázal stavům: kdyby jeden nebo
            více zemanů v poli padlo a nezanechalo po sobě syna, že léna, která
            od něho nyní drží, z milosti propůjčí jejich dcerám a jiným
            nejbližším příbuzným.
          </li>
          <li>
            Kdyby se však někdo z urozených bez řádné příčiny zdržel doma a
            nevytáhl: jakmile se to prokáže, má náš milostivý pán toho nebo ty
            neposlušné těžce potrestat na těle i na statku, a nikdo se proti
            tomu nemá stavět ani to jakkoli rozmlouvat.
          </li>
          <li>
            Dále je vážnou vůlí našeho milostivého pána vévody, jak Jeho Milost
            stavům sama oznámila, ústně řekla a nařídila, aby veškeré války,
            nevole a nepřátelství, které má jeden zeman vůči druhému nebo mít
            může, ode dneška, totiž od soboty před svátkem svatého Filipa a
            svatého Jakuba, zcela ustaly a byly odloženy, dokud se náš milostivý
            pán nevrátí z pole, a potom ještě čtrnáct dní, takže v té době nemá
            mít jeden s druhým ve zlém a v nevoli vůbec nic co činit; a má-li
            pak po uplynutí této doby jeden vůči druhému nějaký nárok, může jej
            uplatnit právní cestou.
          </li>
          <li>
            Dále, aby náš milostivý pán zřídil ve vojsku svobodný trh tak, aby
            bylo možno jeho vojsku přivážet jídlo, pití a jiné potřeby a aby
            vozkové mohli přede všemi bezpečně a volně přijíždět do vojska i z
            něho odjíždět; a kdyby někdo takové vozky proti tomuto ustanovení
            oloupil nebo jakkoli zdržoval, ten nebo ti mají být potrestáni na
            těle a statku bez jakékoli milosti.
          </li>
          <li>
            Dále bylo stran sedláků, kteří se mají postavit, ujednáno, že
            všichni preláti, páni, rytíři a panoši, faráři a také měšťané, kteří
            mají poddané na venkově, mají všechny tyto své poddané sami podle
            znění řádu neprodleně postavit, a to tak, že zemané, duchovní i
            světští, v dolních čtvrtích za Dunajem i na této straně Dunaje se
            mají osobně se svými služebníky a poddanými dostavit k našemu
            milostivému pánu vévodovi do Laa nejbližší sobotu po svátku svatého
            Jana o letním slunovratu, a aby pak každý udal své lidi a poddané a
            k tomu svůj jízdní lid, co ho kdo sám za sebe bude mít, aby je mohl
            dále rozdělit. Zemané usedlí v horních čtvrtích za Dunajem i na této
            straně Dunaje však mají přijít se svým jízdním lidem a se svými
            poddanými do Eggenburgu k hraběti Janovi ze Schaumbergu, panu
            Reinprechtovi z Wallsee a dalším zemanům, kteří tam do Eggenburgu
            přijdou shora od Enže; ti pak mají svůj lid a lidi, co kdo bude mít,
            udat písemně i zmocněncům, kteří k tomu budou určeni, aby se o tom
            vědělo a mohlo se to dále rozdělit a uspořádat.
          </li>
          <li>
            Dále co se týče pušek a jiného válečného náčiní k boji, to má náš
            milostivý pán sám uvážit a uspořádat.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
