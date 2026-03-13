import { Col, Row } from 'reactstrap'
import Link from 'next/link'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const ZizkasOrdnung = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="the-so-called-zizkas-military-order" />
        <h4>Die sogenannte Žižka-Militärordnung{draft && <DraftBadge />}</h4>
        <p>
          Die Transkription wurde von der Schulwebseite{' '}
          <Link href="https://www.digladior.cz/historicky-serm/zizkuv-vojensky-rad/">
            Digladior
          </Link>{' '}
          übernommen.
        </p>
        <p>
          Die sogenannte Žižka-Militärordnung, die in einer kalligraphischen
          Abschrift aus der zweiten Hälfte des 16. Jahrhunderts erhalten ist,
          ist leider nicht datiert. Auch ihre herkömmliche Bezeichnung ist nicht
          ganz zutreffend. Tatsächlich handelt es sich um die Gründungsurkunde,
          eine programmatische Erklärung und den Disziplinarkodex von Žižkas
          ostböhmischem Bund, vor allem seiner militärischen Komponente. Sie
          entstand wahrscheinlich in der ersten Septemberhälfte 1423, obwohl
          eine Entstehung in der ersten Novemberhälfte 1423 nicht völlig
          ausgeschlossen werden kann. Sie beginnt mit den vier Prager Artikeln,
          gefolgt von einer Liste der Unterzeichner, und setzt sich dann mit
          organisatorischen Maßnahmen, insbesondere disziplinarischer Natur,
          fort.
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
          Durch die Gnade und Gabe des Vaters und Herrn, des allmächtigen
          Gottes, im Glauben und in der Annahme der Erleuchtung der gewissen,
          beständigen, verkündeten und begründeten Wahrheit und des Gesetzes
          Gottes:
        </p>
        <p>
          Erstens, lasst uns dem Worte Gottes Freiheit in der Predigt überall
          gewähren, ohne einen Ort auszuschließen, und es in unseren Herzen
          freudig annehmend, es wahrhaftig erfüllen und bewahren, sodann andere
          dazu anleiten und belehren.
        </p>
        <p>
          Zweitens, lasst uns alle den Leib und das Blut unseres Herrn Jesus
          Christus, des allmächtigen Gottes, mit Ehrfurcht, Frömmigkeit und Ehre
          empfangen, Alt und Jung, Kinder sogleich nach der Taufe und dann stets
          die Kinder, ohne eine Person auszuschließen, sie dazu drängend und
          antreibend, mindestens jeden Sonntag einer jeden Woche.
        </p>
        <p>
          Drittens, lasst uns die Geistlichkeit zum Leben des Sohnes Gottes, des
          Herrn Jesus Christus, und zum apostolischen Leben führen und
          hinleiten, und mit Gottes Hilfe ihre Pfründen und die Güter der
          Simonie abschaffen und vernichten.
        </p>
        <p>
          Viertens, lasst uns zuerst die Tod- und lässlichen Sünden in uns
          selbst abstellen und vernichten, sodann bei Königen, Fürsten, Herren,
          Bürgern, Handwerkern, Bauern und allen Menschen männlichen und
          weiblichen Geschlechts, Jung und Alt, stets mit der Hilfe des
          allmächtigen Gottes.
        </p>
        <p>
          Und wer immer diese oben geschriebenen Punkte und Artikel nicht
          halten, führen und erfüllen will, nicht helfen will, sie zu
          verteidigen und zu schützen, den wollen wir nicht dulden im Felde
          unter uns noch im Heerlager mit Gottes Hilfe, noch in Burgen,
          Festungen, Städten, befestigten und offenen Städtchen, in Dörfern und
          Höfen, ohne einen Ort auszuschließen oder zu entschuldigen, sondern
          alle überall ermahnen, beraten, antreiben und zum Guten drängen mit
          der Hilfe unseres Herrn Gottes.
        </p>
        <p>
          Und daher, bewegt von einem guten Geist, wissend und verstehend, dass
          alle Dinge dieser Welt vergänglich und vorübergehend sind, aber die
          Wahrheit des Herrn Jesus Christus, des allmächtigen Gottes, in
          Ewigkeit besteht:
        </p>
        <p>
          Wir, Jan Bruder Žižka von Kalich, Jan Roháč von Dubě, Aleš von
          Rysmburk und Vřešťov, Jan von Počtajna auf Žampach, Boček von Kunstát
          und anderwärts von Jevišovice, Bartoš und Bernart, Brüder von Valečov,
          Bartoš, Jan, Martin, Brüder von Vysoká; und wir, Bürgermeister und
          Ratsherren und alle Gemeinden der Städte Hradec nad Labem und Čáslav;
          wir, Beneš von Mokrovousy, Jaroslav von Kalich, Václav Horina von
          Honbice, Křišťan von Žernoseky, Frencl von Litožnice, Jíra von Řečice,
          Jan von Studená; und wir, Bürgermeister und Ratsherren und die ganze
          Gemeinde der Stadt Jaroměř; wir, Zdislav Zeman, Vavřinec Polák von
          Paňov, Blažek von Kralupy, Jakub von Březová, Petřík Královec von
          Příbram, Jan von Domažlice, Jan von Tehov, Martin von Borovnice, Havel
          Orebský; und wir, Bürgermeister und Ratsherren und die ganze Gemeinde
          der Stadt Dvůr; und wir, Chústník von Košov, Ondřej von Studená, Šárka
          von Slavný, Kříž Hauptmann, Beneš Hauptmann, Mikát Brada Odraný, Aleš
          von Hostačov, Polévka von Hošťka, Mikuláš Orebský, Veta von Chlumčan,
          Litobor von Trubče, Linhart von Slez, Beneš von Horošovice, Jan
          Baštín, Mařík Velek Šeňk, Jíra Roh, Mikuláš Brada, Hauptleute, Herren,
          Ritter, Knappen, Bürgermeister, Ratsherren und alle adligen,
          ritterlichen, knappschaftlichen und städtischen Gemeinden, ohne
          jemanden auszuschließen oder zu entschuldigen; wir alle, oben
          Geschriebene, an alle und jeden, bitten und ermahnen ordnungsgemäß,
          befehlen und wollen, dass gebührender Gehorsam herrsche; denn durch
          Ungehorsam und ungebührliche Handlungen haben wir oft großen Schaden
          an unseren Brüdern und an Gütern genommen und oft Schmach von den
          Feinden Gottes und den unsrigen erlitten. Mit Gottes Hilfe und der
          Euren und aller Getreuen gedenken wir dies zu meiden durch folgende
          Gebräuche:
        </p>
        <p>
          Erstens, wenn wir aus irgendeiner Stadt aufbrechen wollen oder uns von
          dem Ort bewegen wollen, wo wir gelagert haben, so soll niemand
          vorausreiten noch zur Stadt gehen noch fahren, um sich einen Platz
          oder eine Herberge zu sichern, noch soll sich jemand ohne Erlaubnis
          und Befehl der genannten älteren Hauptleute, die dafür bestellt und
          benannt werden, irgendwo lagern. Und wenn sich jemand anderswo lagert
          oder aufbricht oder aufstellt ohne den Befehl dieser Ältesten, so
          wollen wir ihn bestrafen und richten, an seinem Gut und an seinem
          Leben, als Ungehorsamen, wer es auch sei, welchen Standes auch immer,
          ohne jemanden auszunehmen.
        </p>
        <p>
          Und wenn sie von jenem Ort, wo sie gelagert haben, aufbrechen wollen,
          sollen sie mit Erlaubnis und auf Befehl der genannten Ältesten ins
          Feld ziehen, zu einem geeigneten und würdigen Ort, und dort
          aufeinander warten, bis das ganze Heer von der Stellung aufgebrochen
          ist.
        </p>
        <p>
          Und niemand soll Feuer legen oder anderswo brennen, solange wir
          marschieren oder lagern, außer denen, die dafür bestellt und
          eingesetzt sind, und dies unter schwerer Strafe, damit niemand anderes
          dies tue.
        </p>
        <p>
          Sodann, bevor sie sogleich aus der Stadt aufbrechen, bevor sie
          irgendwelche Dinge tun oder befehlen, sollen sie zuerst zum Herrn Gott
          beten, kniend und sich verneigend vor dem Leibe Gottes und vor dem
          Angesicht Gottes, wenn der Aufbruch aus dem Heerlager oder aus der
          Stadt erfolgt, auf dass der allmächtige Herr Gott seine Hilfe gewähren
          und seine heilige Sache zu seinem heiligen Ruhme und zur Mehrung des
          Guten und zum Heil und zur Hilfe der Getreuen durchführen möge.
        </p>
        <p>
          Sodann sollen sie die Leute ordnen und aufstellen, jede Rotte unter
          ihre Fahnen, die Losung soll ausgegeben werden, und dann sollen sie
          sogleich aufbrechen und marschieren, die Rotte, die an jenem Tage
          unter ihren Fahnen aufgestellt ist, voran; und andere sollen sich
          nicht unter sie mischen, noch sie behindern, noch sich irgendwohin
          absondern. Wie es auch sei, und wie die Rotten oder Fahnen aufgestellt
          sind, so sollen sie in ihrer Formation und beisammen marschieren, ohne
          sich untereinander zu vermischen, und dies vorsichtig, vorne und
          hinten und an den Seiten des Heeres wachend und auf sich selbst
          achtend, wie es einem jeden von den Ältesten befohlen wird.
        </p>
        <p>
          Und wenn Gott nicht schützt und sie Schaden erleiden durch ihre
          Nachlässigkeit oder die Nachlässigkeit der Hauptleute im Lager oder
          auf Wachposten oder im Felde oder bei den Wachen, wo es ihnen von den
          Ältesten und den Gemeinden befohlen und anvertraut wurde, ohne
          jemanden auszunehmen, so gedenken die Hauptleute und alle Gemeinden
          dies zu untersuchen und sie an Leib und Gut zu richten und zu
          bestrafen, sei es ein Fürst, Herr oder wer auch immer, ohne jemanden
          auszunehmen oder zu entschuldigen.
        </p>
        <p>
          Doch wenn Gott uns erlaubt, die Feinde zu überwinden und zu schlagen,
          Städte, Festungen, Burgen zu erobern und durchs Feld zu marschieren
          oder zu lagern, welche Beute auch genommen wird, so soll sie
          zusammengetragen, gesammelt, herangefahren und aufgehäuft werden, wo
          ein Platz von den Ältesten angezeigt und benannt wird, sei es viel
          oder wenig. Dafür sollen Älteste aus allen Gemeinden erwählt und
          bestellt werden, aus den adligen, ritterlichen und bürgerlichen
          Ständen, um diese Dinge den Armen und Reichen redlich zuzuteilen, und
          gerecht, wie es einem jeden gebührt, so dass niemand für sich selbst
          nehme noch etwas behalte. Wenn jemand etwas nimmt oder behält und dies
          mit gutem Gewissen erwiesen wird, so soll ein solcher gerichtet
          werden, an Leib und Gut, wer es auch sei, ohne jemanden auszunehmen,
          als ein Dieb gegen Gott und die Gemeinschaft, wie es Achan geschah
          wegen der Haube der Königstöchter und des Mantels, oder durch jede
          andere Todesart, sei es ein Fürst, Herr, Ritter, Knappe, Bürger,
          Handwerker oder Bauer, ohne jemanden auszuschließen oder zu
          entschuldigen, mit Gottes Hilfe also Vergeltung zu üben.
        </p>
        <p>
          Ferner soll es keine Streitigkeiten, kein Geschrei und keine
          Raufereien im Lager noch unter uns geben.
        </p>
        <p>
          Wenn jemand einen anderen schlägt, verwundet, verstümmelt oder tötet,
          so soll er gerächt werden nach dem Gesetz Gottes, wie der Herr es
          zulässt, ohne jemanden auszunehmen oder zu entschuldigen.
        </p>
        <p>
          Ferner wisset, dass wer immer sich davonstiehlt, geht, reitet oder
          fährt von uns aus dem Heere, wenn wir marschieren oder lagern, ohne
          Erlaubnis der oben genannten Ältesten und ohne ein bestimmtes Zeichen,
          sei es ein Fürst, Herr, Ritter, Knappe, Bürger, Handwerker oder Bauer,
          und gefangen wird, so soll er gerichtet werden an Leib und Gut, als
          ein treuloser Dieb, der sich von Gottes Sache und den treuen Brüdern
          aus dem Heere stiehlt, wo das Heer auch steht oder liegt.
        </p>
        <p>
          Auch wollen wir unter uns nicht dulden Untreue, Ungehorsame, Lügner,
          Diebe, Spieler, Räuber, Plünderer, Trunkenbolde, Betrüger, Ehebrecher,
          Hurer und alle offenkundigen Sünder und Sünderinnen; diese alle wollen
          wir von uns treiben und jagen, sie richten mit der Hilfe der Heiligen
          Dreifaltigkeit nach dem Gesetz Gottes.
        </p>
        <p>
          Bruder Žižka und andere Herren, Hauptleute, Ritter, Knappen, Bürger,
          Handwerker und Bauern, oben geschrieben und genannt, mitsamt allen
          Gemeinden mit Gottes Hilfe und gemeiner Hilfe, gedenken alle Unordnung
          zu bestrafen und zu züchtigen, zu jagen, zu peitschen, zu schlagen und
          zu töten, zu enthaupten, zu hängen, zu ertränken, zu verbrennen und
          mit allen gebührenden Strafen zu vergelten, die den Bösen nach dem
          Gesetz Gottes zustehen, ohne jemanden auszunehmen aus allen Ständen,
          männlichen und weiblichen Geschlechts.
        </p>
        <p>
          Und wenn wir also die oben geschriebenen und heilsamen Artikel
          bewahren, tun und erfüllen, so wird der Herr Gott mit uns sein mit
          seiner heiligen Gnade und Hilfe, denn es gehört zum Kampf Gottes, so
          zu handeln, gut, christlich, in Liebe geordnet, in der Furcht Gottes
          zu leben, unsere Wünsche, Bedürfnisse und Hoffnungen beständig und
          ohne Zweifel auf den Herrn Gott zu setzen, von ihm die ewige Belohnung
          erwartend.
        </p>
        <p>
          Wir bitten euch auch, liebe Gemeinden, aus allen Regionen, Fürsten,
          Herren, Ritter, Knappen, Bürger, Handwerker, Bauern und Menschen aller
          Stände, besonders zuerst alle treuen Böhmen, diesem Guten zuzustimmen
          und uns dabei hilfreich und beratend zur Seite zu stehen. Und wir
          wollen euch ebenso halten, erfüllen und rächen, um des lieben Herrn
          Gottes willen, um seines heiligen Leidens willen, zur Befreiung der
          Wahrheit des Gesetzes Gottes, der Heiligen und ihrer Verherrlichung,
          zur Hilfe der Getreuen der heiligen Kirche, besonders der böhmischen
          und slawischen Völker und der ganzen Christenheit, zur Erhebung der
          Getreuen und zur Demütigung der Hartnäckigen und offenen Ketzer und
          Heuchler und Übelgesinnten, auf dass der allmächtige Herr Gott uns und
          euch seine Hilfe gewähre und den Sieg über seine und unsere Feinde,
          und für uns und mit euch kämpfe mit seiner Macht und uns nicht von
          seiner heiligen Gnade trenne. Amen.
        </p>
        <p>
          Möge der Herr Gott mit uns und mit euch sein, wo immer ihr seid, und
          wo es der Heiligen Dreifaltigkeit gefällt! Und zu besserem Gewissen
          und Bestätigung und Sicherheit mit größerem Fleiß gemäß der
          Geistlichkeit über den elenden Verstand dieser Welt, stimmen wir, die
          oben Geschriebenen, mit gutem Bedacht, wissentlich und guten Willens
          dieser Urkunde und diesem Brief zu, und stimmen zu, ihn wahrhaftig zu
          halten und zu bewahren mit der Hilfe der unerschaffenen und in
          Ewigkeit gesegneten Heiligen Dreifaltigkeit. Amen.
        </p>
        <p>So gebe es der Herr Gott!</p>
      </Col>
    </Row>
  </>
)
