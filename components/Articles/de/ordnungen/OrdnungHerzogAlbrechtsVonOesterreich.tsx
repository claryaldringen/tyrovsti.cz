import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const OrdnungHerzogAlbrechtsVonOesterreich = ({
  draft,
}: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="duke-albrecht-of-austrias-military-order" />
        <h4>
          Militärordnung Herzog Albrechts von Österreich, wohl vom 28. April
          1431
          {draft && <DraftBadge />}
        </h4>
        <p>Arbeitsübersetzung, noch nicht fachlich geprüft.</p>
        <p>
          Die Ordnung hält fest, worauf sich Herzog Albrecht von Österreich,
          Markgraf von Mähren, mit den Ständen seines Landes gegen die Hussiten
          geeinigt hat. Sie ist in einer gleichzeitigen Abschrift im Archiv des
          Schlosses Riedeck überliefert und wurde 1825 von Franz Kurz
          herausgegeben.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n425/mode/1up"
          />{' '}
          Das Schriftstück nennt nur den Tag, den Samstag vor dem Fest der
          heiligen Philippus und Jakobus, nicht aber das Jahr. Kurz setzte es in
          das Jahr 1426; Toman hält seine Gründe für sehr schwach und datiert
          die Ordnung auf 1431.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:42a87718-e110-422e-b07f-62cf7e140be0"
          />{' '}
          Kurz stützte sich unter anderem darauf, dass Leopold Krajíř (Kraygd),
          der hier für den Fall, dass den Grafen von Schaumberg Krankheit
          verhindert, zum obersten Hauptmann bestimmt wird, das österreichische
          Heer tatsächlich in einer Schlacht gegen die Hussiten zu Beginn des
          Jahres 1427 befehligte.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n309/mode/1up"
          />{' '}
          Toman weist dagegen darauf hin, dass sich nach den Nürnberger
          Beschlüssen vom März 1431 die Reichsheere Ende Juni nahe der
          böhmischen Grenze und das österreichische Aufgebot in denselben Tagen
          bei Laa sammeln sollten, dass Herzog Albrecht im April 1431 in Wien
          einen Landtag hielt und dass nach seinem Brief vom 24.&nbsp;Mai 1431
          in jenem Jahr jeder zehnte Mann ausziehen sollte. Als gewichtigsten
          Grund nennt er, dass die Ordnung bereits mit nach böhmischer Art
          gerüsteten Wagen und mit einem ausgebildeten Verhältnis von Mannschaft
          und Wagen, deren Gliederung und Befehl rechnet, während er in den
          Nachbarländern vor 1426 keine Spur einer Wagenrüstung findet.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:b4edeec9-0e14-4db0-957c-efc3bb2adb88"
          />
        </p>
        <p>
          Gegenüber der Ausgabe von Kurz hat Tomans Abdruck eine angepasste
          Schreibweise (z.&nbsp;B. <Cit>und</Cit> statt <Cit>vnd</Cit>,{' '}
          <Cit>ein</Cit> statt <Cit>ain</Cit>), ist in nummerierte Artikel
          gegliedert und weicht an mehreren Stellen von Kurz ab. In Art.&nbsp;3
          steht bei Toman <Cit>unter denselben Landleuten und ihren Holden</Cit>
          , bei Kurz jedoch{' '}
          <Cit>vnder denselben Lanndlewten von Iren Holden</Cit>; es geht also
          um Landleute, die aus ihren Holden nicht jeden zehnten Mann aufbringen
          können.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n426/mode/1up"
          />{' '}
          In Art.&nbsp;14 hat Toman ausgelassen, dass der Amtmann die Strafe{' '}
          <Cit>demselben vnsern gnedigen Herren</Cit>, also dem Herzog, zahlt.
          Statt Tomans <Cit>ubernarund (sic)</Cit> in Art.&nbsp;13 hat Kurz{' '}
          <Cit>vberuarund</Cit>, also übertreten.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n429/mode/1up"
          />{' '}
          Tomans Lesungen <Cit>fein Kundschaft</Cit> in Art.&nbsp;15 und{' '}
          <Cit>Wipen</Cit> in Art.&nbsp;22 sind Druckfehler; Kurz hat{' '}
          <Cit>sein kuntschaft</Cit> und <Cit>wissen</Cit>.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n430/mode/1up"
            note="S. 419 und 422"
          />{' '}
          An diesen Stellen folgt die Übersetzung Kurz.
        </p>
        <p>
          Übersetzungshinweise: <Cit>Landschaft</Cit> gebe ich mit{' '}
          <Cit>Stände</Cit> wieder, <Cit>Landleute</Cit> belasse ich als{' '}
          <Cit>Landleute</Cit> (landsässige Mitglieder der Stände, geistliche
          wie weltliche), <Cit>Holden</Cit> und <Cit>Hindersessen</Cit> als{' '}
          <Cit>Untertanen</Cit> und <Cit>Hintersassen</Cit>.
          <br />
          Die <Cit>Gäst</Cit> in Art.&nbsp;16 sind nach der Erläuterung von Kurz
          Ausländer, die in Österreich begütert sind.
          <br />
          Die Bedeutung von <Cit>Schesslir</Cit> in Art.&nbsp;4 konnte ich nicht
          überprüfen; dem Zusammenhang nach handelt es sich um eine Art Helm.
          Unsicher sind auch <Cit>Schiessjoppen</Cit> (wohl ein gefütterter
          Schützenrock), <Cit>Mässl</Cit> in Art.&nbsp;6 (wohl ein Pulvermaß)
          und <Cit>gediegens Fleisch</Cit> in Art.&nbsp;8. Diese Stellen sind in
          der Übersetzung mit einem Fragezeichen gekennzeichnet.
          <br />
          Die Wendung <Cit>ein Abschlag thun</Cit> und das Wort{' '}
          <Cit>ausgesten</Cit> (bei dem schon Kurz „sic“ vermerkt) in
          Art.&nbsp;11 und 12 übersetze ich nach dem Sinn.
          <br />
          In Art.&nbsp;19 hat Toman <Cit>an etlich Ursach</Cit>, Kurz{' '}
          <Cit>an ydlich vrsach</Cit>. Die Präposition <Cit>an</Cit> bedeutet
          hier <Cit>ohne</Cit>; ich übersetze daher{' '}
          <Cit>ohne triftigen Grund</Cit>.
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
            Hier ist eine Ordnung verzeichnet, auf die sich unser gnädiger Herr
            Herzog Albrecht, Herzog von Österreich und Markgraf von Mähren usw.,
            und die Stände seines Landes gegen die Ketzer aus Böhmen geeinigt
            haben.
          </i>
        </p>
        <ol>
          <li>
            Erstens: Als den Ständen sechs Personen aus den Landleuten benannt
            worden waren, damit sie daraus die Wahl und Ernennung eines obersten
            Hauptmanns erwögen, haben die Stände darüber beraten und einmütig
            Graf Johann von Schaumberg benannt, da er ihnen als Hauptmann am
            meisten gefiel, sofern ihn seine Krankheit nicht behindert. Sollte
            ihn aber seine Krankheit daran hindern, so sind sie damit
            einverstanden, dass unser gnädiger Herr Herrn Leopold von Kreyg zum
            obersten Hauptmann nehme; gefiele Seiner Gnaden aber einer der
            übrigen vier besser, so wollen sie auch diesem gern gehorsam sein.
          </li>
          <li>
            Ferner, dass im ganzen Land aus der Bauernschaft die stärksten,
            wehrhaftesten und auch geschicktesten Leute genommen werden und dass
            jeweils der zehnte Mann der ansässigen Leute aufgeboten und
            ausgewählt wird, und dass die übrigen neun diesen Zehnten mit
            Verpflegung und anderem Bedarf versorgen und ausrüsten, sodass er
            auf diesem Feldzug nichts anderes zu tragen verpflichtet ist als
            das, was unten geschrieben steht. Und zwanzig solcher Zehntmänner
            sollen einen guten, starken Reisewagen mit einer Deichsel, vier
            Pferden und drei Brettern haben, dazu eine Kette von fünfzehn Schuh
            Länge mit einem Ring an dem einen und einem Haken an dem anderen
            Ende. Und der Wagen soll mit Speise und anderem dazugehörigem Bedarf
            gut ausgestattet sein, wie unten beschrieben ist.
          </li>
          <li>
            Da aber die Untertanen und Hintersassen vieler geistlicher und
            weltlicher Herren und Landleute jenseits der Donau vielfach von den
            Feinden schwer verbrannt und verwüstet worden sind: Sollte daher
            einer oder mehrere dieser Landleute wegen solcher Bedrängnis aus
            ihren Untertanen redlicherweise nicht jeden zehnten Mann aufbringen
            können, so viele Personen, wie einen Wagen besetzen würden,
            besonders nach solchem Verderben, da vielen ihre Pferde und ihr
            übriges Gut genommen worden sind, so sollen der oder die dennoch
            redlicherweise aus ihren Untertanen so viele aufbringen, wie sie nur
            können, und das wird ihrer Treue und ihrem Gewissen anheimgestellt;
            und ein solcher Ausfall soll weder ihnen noch den übrigen Landleuten
            hinsichtlich der in der Ordnung festgesetzten Strafe und Buße zum
            Schaden gereichen, sondern ihnen unschädlich sein.
          </li>
          <li>
            Ferner ist festgelegt und vereinbart worden, dass diese zwanzig
            Ausgewählten ihre eigenen Waffen und Harnische auf eigene Kosten
            haben sollen. Wer das aber nicht vermag, dem sollen die anderen, die
            daheim bleiben, darin beistehen. Und von diesen zwanzig Personen
            sollen drei Büchsenschützen, acht Armbrustschützen, vier mit Spießen
            und vier mit Dreschflegeln sein; und jeder soll dazu ein Schwert
            oder ein Messer haben, einen leichten Eisenhut oder einen Helm (?),
            einen Panzer oder einen gefütterten Rock (?) und zwei
            Plattenhandschuhe.
          </li>
          <li>
            Ferner ist auch vereinbart worden: Hat der zehnte Mann, der auf
            diese Weise von den neun aufgeboten und ausgewählt wurde, einen
            Weingarten, Äcker oder eine Wiese, so sollen ihm die neun außer der
            oben erwähnten und unten beschriebenen Verpflegung und Ausrüstung
            während seiner Abwesenheit sein Erbe, was er davon hat, bestellen
            helfen und den Ertrag daraus einbringen.
          </li>
          <li>
            Ferner soll jeder Büchsenschütze ein Pfund Pulver, Bleikugeln von
            einem Pfund Gewicht und dazu einen Ladestock und ein Maß (?) haben;
            und jeder der Armbrustschützen soll zehn Bolzen in seinem Köcher
            haben.
          </li>
          <li>
            Ferner, dass von diesen zwanzig Personen einer Hauptmann der anderen
            und einer ihr Fuhrmann sei.
          </li>
          <li>
            Ferner, dass jeder Wagen für den Zug gegen die Feinde anfangs mit
            Brot für vier Schilling Pfennig, Käse für sechzig Pfennig, einer
            Seite Rauchfleisch, Fleisch (?) im Umfang eines Viertels eines
            Rindes und einem Eimer Wein versorgt werde; und diese Speise soll
            man weder anrühren noch verzehren, außer wo man keine Nahrung
            findet, dort darf man sie verzehren und nutzen.
          </li>
          <li>
            Ferner ist vereinbart worden, dass man jeder Person, die ins Feld
            zieht, für einen Monat sechs Schilling Pfennig geben soll, und zwar
            so, dass sie der Hauptmann des Wagens in Verwahrung hat und sie dann
            mit Wissen der anderen für ihrer aller Bedarf und besonders für
            Speise ausgibt und damit so gut und getreu umgeht, wie er es
            versteht.
          </li>
          <li>
            Ferner, dass jeweils über zehn Wagen und die Mannschaft darauf ein
            Hauptmann gesetzt werde, ebenso über fünfzig Wagen und die
            Mannschaft darauf ein Hauptmann und danach über hundert Wagen
            ebenfalls ein Hauptmann gegeben und gesetzt werde, und dass so
            weiter nach der Zahl der Wagen und der Mannschaft, wie viel es sein
            wird, Hauptleute gesetzt und bestellt werden; und dass dann ein
            oberster Hauptmann, wer es auch sei, die Hauptleute über die zehn,
            die fünfzig und die hundert Wagen ordne und setze, damit das Heer
            desto ordentlicher ausgerüstet und ausgesandt werde.
          </li>
          <li>
            Ferner: Hätte einer der Landleute über die zwanzig Personen hinaus,
            die zu einem Wagen gehören, einen oder mehrere seiner Untertanen
            übrig, so soll er sie einem oder mehreren seiner Nachbarn zuteilen,
            die die Zahl nicht erreichen und aus ihren Untertanen keinen Wagen
            aufbringen können, damit auch der oder die einen Wagen stellen, wie
            oben geschrieben steht. Fände aber einer für seine übrigen
            Untertanen redlicherweise keinen Nachbarn, so soll er diesen seinen
            Untertanen dennoch einen Anteil (?) nach dem Inhalt der Ordnung
            auferlegen, und seine übrigen Untertanen sollen ihn dann mit ihnen
            teilen, damit auch sie nach derselben Ordnung nicht ausgenommen
            bleiben.
          </li>
          <li>
            Ferner: Hätte einer der Landleute, geistlich oder weltlich, weniger
            als zehn Untertanen und könnte daraus nicht den zehnten Mann
            aufbringen, so soll er redlicherweise einen anderen seiner Nachbarn
            zu sich nehmen, damit er und dieser Nachbar gemeinsam den zehnten
            Mann aufbringen und ihn dem obersten Hauptmann zusenden, damit von
            den wehrhaften und zum Kampf tauglichen Leuten nach dem Inhalt der
            vorgenannten Ordnung niemand ausbleibe.
          </li>
          <li>
            Geschähe es aber, dass einer oder mehrere der Prälaten, Herren,
            Ritter, Knechte, Pfarrer und auch Bürger, die Untertanen auf dem
            Land haben, einen oder mehrere ihrer Untertanen nicht nach dem Laut
            der Ordnung zu diesem Zug aufböten: So oft ihnen nachgewiesen würde,
            dass sie dies übertreten haben, soll jeder von ihnen für jeden
            solchen Untertanen, den er nicht aufgeboten hat, zweiunddreißig
            Pfund Pfennig verfallen sein; von dieser Summe sollen unserem
            gnädigen Herrn, dem Herzog, zwei Teile zufallen, die weiter zum
            gemeinen Nutzen des Zuges verwendet werden sollen, und der dritte
            Teil soll dem obersten Hauptmann, wer es auch sei, gebühren.
          </li>
          <li>
            Wäre es aber, dass ein Amtmann aus Säumnis, aus Freundschaft, Gunst
            oder um einer Gabe willen oder sonst arglistig einige Untertanen
            seines Herrn verschonte und sie nicht nach dem Laut der Ordnung
            aufböte, und geschähe das ohne Wissen und Willen seines Herrn, so
            soll er für jede Person, die er so verschont hat, demselben unserem
            gnädigen Herrn zehn Pfund Pfennig geben, die ebenfalls dem gemeinen
            Nutzen zugewendet werden sollen, und er soll dazu am Leib gestraft
            werden.
          </li>
          <li>
            Ferner ist vereinbart worden, dass unser gnädiger Herr in allen
            Vierteln des Landes und in den Pfarren anordnen und seinen Amtleuten
            befehlen soll, dass sie sich erkundigen und Nachricht einziehen, ob
            irgendwo einer der Landleute, geistlich oder weltlich, gefunden
            wird, der seine Leute, einen oder mehrere, nicht vollständig nach
            dem Inhalt der Ordnung aufgeboten hat; den oder die, die nicht
            aufgeboten sind, sollen dann die Amtleute, denen er es befiehlt,
            genau schriftlich festhalten und unserem gnädigen Herrn, dem Herzog,
            anzeigen, damit solcher Ungehorsam nach der vorgenannten Ordnung und
            Strafe bestraft werde.
          </li>
          <li>
            Ferner ist wegen der Güter der Ausländer, geistlicher und
            weltlicher, geraten worden, dass unser gnädiger Herr von Österreich
            in jedem Viertel zwei dazu bestimme und bestelle, die auch die Leute
            dieser Ausländer nach dem Inhalt der Ordnung aufbieten. Hätte aber
            einer der Ausländer keine Untertanen, sondern liegende Güter im
            Land, so soll unser gnädiger Herr darauf bedacht sein, dass auch sie
            von diesen ihren Gütern wie andere Leute im Land nach dem Inhalt der
            Ordnung ihren Teil tragen.
          </li>
          <li>
            Ferner haben sich die Stände einmütig gegenüber unserem gnädigen
            Herrn, dem Herzog, bereit erklärt und verpflichtet, dass ihm alle
            Landleute, soweit Jugend und Alter es zulassen, persönlich, auf
            eigene Kosten und eigenen Schaden, einen ganzen Monat lang gegen die
            ungläubigen Ketzer innerhalb oder außerhalb des Landes nach ihrem
            Vermögen reiten und dienen wollen; sollten sie aber in diesem Monat
            auf dem Zug von daheim ins Heer oder sonst auf andere Weise von den
            Feinden Schaden nehmen, so möge unser Herr ihrer nach seiner Gnade
            gnädig gedenken; nach Ablauf des Monats aber soll er ihnen für
            redliche und ritterliche Schäden einstehen, die sie auf Befehl
            Seiner Gnaden und seines obersten Hauptmanns von den Feinden
            erleiden, ihnen darüber Schadensbriefe nach Sitte und Gewohnheit
            seines Hofes geben, wie er sie ihnen auf dem Zug vor Prag gegeben
            hat, und ihnen diese Schäden nach Rat und Erkenntnis seiner Räte
            ersetzen.
          </li>
          <li>
            Ferner hat sich unser gnädiger Herr, der Herzog, gegenüber den
            Ständen verpflichtet: Sollten einer oder mehrere der Landleute im
            Feld umkommen und keinen Sohn hinterlassen, so will er die Lehen,
            die sie jetzt von ihm zu Lehen haben, ihren Töchtern und anderen
            nächsten Verwandten aus Gnade verleihen.
          </li>
          <li>
            Wäre es aber, dass sich jemand von den Edelleuten ohne triftigen
            Grund daheim aufhielte und nicht auszöge: Sobald das nachgewiesen
            wird, soll unser gnädiger Herr den oder die Ungehorsamen an Leib und
            Gut schwer strafen, und niemand soll sich dem entgegenstellen oder
            auf irgendeine Weise dagegen reden.
          </li>
          <li>
            Ferner ist es der ernste Wille unseres gnädigen Herrn, des Herzogs,
            wie Seine Gnaden den Ständen selbst eröffnet, mündlich gesagt und
            befohlen hat, dass aller Krieg, Unwille und Feindschaft, die ein
            Landmann gegen den anderen hat oder haben mag, vom heutigen Tag an,
            nämlich vom Samstag vor dem Tag der heiligen Philippus und Jakobus,
            gänzlich aufgehoben und eingestellt sein soll, bis unser gnädiger
            Herr wieder aus dem Feld zurückkehrt, und danach noch vierzehn Tage,
            sodass in dieser Zeit keiner mit dem anderen im Bösen und im
            Unwillen etwas zu schaffen haben soll; und hat nach Ablauf dieser
            Zeit einer gegen den anderen einen Anspruch, so mag er ihn auf dem
            Rechtsweg verfolgen.
          </li>
          <li>
            Ferner, dass unser gnädiger Herr im Heer einen freien Markt
            einrichte, sodass man seinem Heer Speise, Trank und anderen Bedarf
            zuführen kann, und damit die Fuhrleute vor jedermann sicher und frei
            zum Heer und von ihm fahren können; und sollte jemand solche
            Fuhrleute entgegen dieser Bestimmung berauben oder auf irgendeine
            Weise behindern, so sollen der oder die an Leib und Gut ohne alle
            Gnade gestraft werden.
          </li>
          <li>
            Ferner ist wegen des Aufgebots der Bauernschaft vereinbart worden,
            dass alle Prälaten, Herren, Ritter und Knechte, Pfarrer und auch
            Bürger, die Untertanen auf dem Land haben, alle diese ihre
            Untertanen selbst nach dem Inhalt der Ordnung unverzüglich aufbieten
            sollen, und zwar so, dass sich die Landleute, geistlich und
            weltlich, in den unteren Vierteln jenseits und diesseits der Donau
            persönlich mit ihren Dienern und Untertanen am nächsten Samstag nach
            dem Johannistag zur Sonnwende bei unserem gnädigen Herrn, dem
            Herzog, in Laa einfinden, und dass dann ein jeder seine Leute und
            Untertanen und dazu sein berittenes Volk, so viel ein jeder für sich
            haben wird, angeben soll, damit er es weiter zu ordnen weiß. Die
            Landleute aber, die in den oberen Vierteln jenseits und diesseits
            der Donau ansässig sind, sollen mit ihrem berittenen Volk und ihren
            Untertanen nach Eggenburg kommen, zu Graf Johann von Schaumberg,
            Herrn Reinprecht von Wallsee und anderen Landleuten, die von
            oberhalb der Enns herab dorthin nach Eggenburg kommen werden; diese
            sollen dann ihr Volk und ihre Leute, so viel ein jeder haben wird,
            auch den Bevollmächtigten, die man dazu bestellen wird, schriftlich
            angeben, damit man davon Kenntnis habe und es weiter ordnen und
            aussenden könne.
          </li>
          <li>
            Ferner soll unser gnädiger Herr die Büchsen und anderes Kriegsgerät
            für den Kampf selbst bedenken und ordnen.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
