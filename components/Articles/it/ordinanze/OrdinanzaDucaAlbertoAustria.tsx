import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const OrdinanzaDucaAlbertoAustria = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="ordinanza-militare-del-duca-albrecht-d-austria"
        />
        <h4>
          Ordinanza militare del duca Albrecht d&apos;Austria, probabilmente del
          28 aprile 1431
          {draft && <DraftBadge />}
        </h4>
        <p>Traduzione provvisoria, non ancora revisionata.</p>
        <p>
          L&apos;ordinanza registra quanto il duca Albrecht d&apos;Austria,
          margravio di Moravia, concordò con gli stati della sua terra contro
          gli hussiti. Si è conservata in una copia coeva nell&apos;archivio del
          castello di Riedeck e fu pubblicata da Franz Kurz nel 1825.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n425/mode/1up"
          />{' '}
          Il documento indica soltanto il giorno, il sabato precedente la festa
          dei santi Filippo e Giacomo, ma non l&apos;anno. Kurz lo datò al 1426;
          Toman ritiene le sue ragioni molto deboli e colloca l&apos;ordinanza
          nel 1431.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:42a87718-e110-422e-b07f-62cf7e140be0"
          />{' '}
          Kurz si basava tra l&apos;altro sul fatto che Leopold Krajíř, qui
          nominato capitano supremo nel caso in cui la malattia impedisse al
          conte di Schaumberg, comandò effettivamente l&apos;esercito austriaco
          contro gli hussiti in una battaglia all&apos;inizio del 1427.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n309/mode/1up"
          />{' '}
          Toman fa invece notare che secondo le risoluzioni di Norimberga del
          marzo 1431 gli eserciti imperiali dovevano radunarsi alla fine di
          giugno presso il confine boemo e la spedizione austriaca negli stessi
          giorni presso Laa, che il duca Albrecht tenne una dieta a Vienna
          nell&apos;aprile 1431 e che, secondo una sua lettera del
          24&nbsp;maggio 1431, quell&apos;anno doveva partire per la campagna un
          uomo su dieci. Come ragione più importante indica il fatto che
          l&apos;ordinanza prevede già carri armati alla maniera boema e un
          rapporto ben elaborato tra uomini e carri, con la loro articolazione e
          il loro comando, mentre prima del 1426 nei paesi vicini non trova
          alcuna traccia dell&apos;allestimento di carri.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:b4edeec9-0e14-4db0-957c-efc3bb2adb88"
          />
        </p>
        <p>
          Rispetto all&apos;edizione di Kurz, il testo di Toman ha
          un&apos;ortografia adattata (ad es. <Cit>und</Cit> invece di{' '}
          <Cit>vnd</Cit>, <Cit>ein</Cit> invece di <Cit>ain</Cit>), è diviso in
          articoli numerati e in diversi punti si discosta da Kurz.
          All&apos;art.&nbsp;3 Toman riporta{' '}
          <Cit>unter denselben Landleuten und ihren Holden</Cit>, Kurz invece{' '}
          <Cit>vnder denselben Lanndlewten von Iren Holden</Cit>: si tratta
          dunque di proprietari che non riescono a fornire un uomo su dieci tra
          i propri sudditi.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n426/mode/1up"
          />{' '}
          All&apos;art.&nbsp;14 Toman ha omesso che il funzionario paga la multa{' '}
          <Cit>demselben vnsern gnedigen Herren</Cit>, cioè al duca. Al posto di{' '}
          <Cit>ubernarund (sic)</Cit> di Toman all&apos;art.&nbsp;13, Kurz ha{' '}
          <Cit>vberuarund</Cit>, cioè hanno trasgredito.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n429/mode/1up"
          />{' '}
          Le letture di Toman <Cit>fein Kundschaft</Cit> all&apos;art.&nbsp;15 e{' '}
          <Cit>Wipen</Cit> all&apos;art.&nbsp;22 sono refusi; Kurz ha{' '}
          <Cit>sein kuntschaft</Cit> e <Cit>wissen</Cit>.
          <Qt
            publication={PUBLICATIONS.KURZ1825}
            href="https://archive.org/details/bub_gb_8eEpAAAAYAAJ/page/n430/mode/1up"
            note="pp. 419 e 422"
          />{' '}
          In questi punti la traduzione segue Kurz.
        </p>
        <p>
          Note di traduzione: rendo <Cit>Landschaft</Cit> con <Cit>stati</Cit>,{' '}
          <Cit>Landleute</Cit> con <Cit>proprietari terrieri</Cit>, cioè i
          membri degli stati che possiedono beni nella terra, ecclesiastici e
          laici, e <Cit>Holden</Cit> e <Cit>Hindersessen</Cit> con{' '}
          <Cit>sudditi</Cit> e <Cit>coloni</Cit>.
          <br />
          Secondo la glossa di Kurz, i <Cit>Gäst</Cit> all&apos;art.&nbsp;16
          sono stranieri che possiedono beni in Austria.
          <br />
          Non sono riuscito a verificare il significato di <Cit>
            Schesslir
          </Cit>{' '}
          all&apos;art.&nbsp;4; dal contesto si tratta di un tipo di elmo.
          Incerti sono anche <Cit>Schiessjoppen</Cit> (forse una giubba
          imbottita da tiratore), <Cit>Mässl</Cit> all&apos;art.&nbsp;6 (forse
          un misurino per la polvere) e <Cit>gediegens Fleisch</Cit>{' '}
          all&apos;art.&nbsp;8. Questi punti sono segnati nella traduzione con
          un punto interrogativo.
          <br />
          L&apos;espressione <Cit>ein Abschlag thun</Cit> e la parola{' '}
          <Cit>ausgesten</Cit> (a cui già Kurz aggiunse &laquo;sic&raquo;) agli
          artt.&nbsp;11 e 12 sono tradotte secondo il senso.
          <br />
          All&apos;art.&nbsp;19 Toman ha <Cit>an etlich Ursach</Cit>, Kurz{' '}
          <Cit>an ydlich vrsach</Cit>. La preposizione <Cit>an</Cit> significa
          qui <Cit>senza</Cit>, per cui traduco{' '}
          <Cit>senza giustificato motivo</Cit>.
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
            Qui è registrata un&apos;ordinanza sulla quale il nostro grazioso
            signore il duca Albrecht, duca d&apos;Austria e margravio di Moravia
            ecc., e gli stati della sua terra si sono accordati contro gli
            eretici di Boemia.
          </i>
        </p>
        <ol>
          <li>
            Innanzitutto: quando agli stati furono proposte sei persone tra i
            proprietari terrieri, affinché tra esse valutassero l&apos;elezione
            e la nomina di un capitano supremo, gli stati deliberarono e
            nominarono all&apos;unanimità il conte Johann di Schaumberg, poiché
            egli era loro il più gradito come capitano, purché la sua malattia
            non glielo impedisca. Se però la malattia glielo impedisse, sono
            d&apos;accordo che il nostro grazioso signore prenda come capitano
            supremo il signor Leopold di Kreyg; se invece a Sua Grazia fosse più
            gradito uno degli altri quattro, obbediranno volentieri anche a lui.
          </li>
          <li>
            Inoltre, che in tutta la terra si prendano tra i contadini gli
            uomini più forti, più atti alle armi e anche più abili, e che in
            ogni caso sia levato e scelto un uomo su dieci tra la gente
            stanziale, e che gli altri nove provvedano quel decimo di vitto e di
            altre necessità e lo equipaggino, in modo che in questa spedizione
            non sia tenuto a sopportare altro che quanto è scritto di seguito. E
            venti di questi uomini devono avere un buon carro robusto da
            spedizione con un timone, quattro cavalli e tre assi, e inoltre una
            catena lunga quindici piedi con un anello a un&apos;estremità e un
            gancio all&apos;altra. E il carro deve essere ben fornito di vitto e
            delle altre necessità che vi appartengono, come è descritto di
            seguito.
          </li>
          <li>
            Ma poiché i sudditi e i coloni di molti signori ecclesiastici e
            laici e di proprietari terrieri al di là del Danubio sono stati più
            volte gravemente incendiati e devastati dai nemici: se dunque, a
            causa di tale gravame, uno o più di questi proprietari non potessero
            in buona fede fornire tra i loro sudditi un uomo su dieci, tante
            persone quante ne occuperebbero un carro, specialmente dopo tale
            rovina, quando a molti sono stati tolti i cavalli e altri beni,
            costui o costoro forniscano comunque in buona fede tra i propri
            sudditi quanti più possono, e ciò è rimesso alla loro lealtà e
            coscienza; e tale mancanza non rechi danno né a loro né agli altri
            proprietari riguardo alla pena e alla multa stabilite
            nell&apos;ordinanza, ma sia per loro senza pregiudizio.
          </li>
          <li>
            Inoltre è stato stabilito e concordato che questi venti prescelti
            debbano avere armi e armatura proprie a proprie spese. Chi però non
            ne avesse i mezzi, deve essere aiutato dagli altri che restano a
            casa. E di queste venti persone devono esserci tre archibugieri,
            otto balestrieri, quattro con lance e quattro con correggiati; e
            ciascuno deve avere inoltre una spada o un coltellaccio, un leggero
            cappello di ferro o un elmo (?), una cotta di maglia o una giubba
            imbottita (?) e due guanti di piastre.
          </li>
          <li>
            Inoltre è stato anche concordato: se il decimo uomo, levato e scelto
            in questo modo dai nove, possiede una vigna, dei campi o un prato, i
            nove, oltre al vitto e all&apos;equipaggiamento sopra menzionati e
            descritti di seguito, devono aiutarlo durante la sua assenza a
            coltivare il suo patrimonio, quanto ne possiede, e a raccoglierne i
            frutti.
          </li>
          <li>
            Inoltre ogni archibugiere deve avere una libbra di polvere, palle di
            piombo del peso di una libbra e inoltre una bacchetta e un misurino
            (?); e ciascuno dei balestrieri deve avere dieci dardi nella
            faretra.
          </li>
          <li>
            Inoltre, che di queste venti persone una sia capitano delle altre e
            una il loro conducente.
          </li>
          <li>
            Inoltre, che ogni carro sia rifornito per la marcia contro i nemici,
            all&apos;inizio, di pane per quattro scellini di denari, formaggio
            per sessanta denari, un lato di carne affumicata; carne (?) pari a
            un quarto di bue e un secchio di vino; e queste provviste non devono
            essere toccate né consumate, se non dove non si trovi da mangiare;
            lì le si può consumare e utilizzare.
          </li>
          <li>
            Inoltre è stato concordato che a ogni persona che andrà in campo si
            diano sei scellini di denari al mese, in modo che il capitano del
            carro li tenga presso di sé e li spenda, con il consenso degli
            altri, per le necessità di tutti e specialmente per il vitto, e ne
            faccia uso nel modo migliore e più fedele che sa.
          </li>
          <li>
            Inoltre, che in ogni caso sia posto un capitano su dieci carri e
            sugli uomini che vi stanno, e anche un capitano su cinquanta carri e
            sugli uomini che vi stanno, e poi anche su cento carri sia dato e
            posto un capitano, e che così via, secondo il numero dei carri e
            degli uomini, quanti saranno, si nominino capitani; e che poi un
            capitano supremo, chiunque egli sia, disponga e nomini i capitani
            sui dieci, sui cinquanta e sui cento carri, affinché l&apos;esercito
            sia allestito e inviato in modo tanto più ordinato.
          </li>
          <li>
            Inoltre, se uno dei proprietari terrieri avesse uno o più dei suoi
            sudditi in eccedenza oltre le venti persone che spettano a un carro,
            deve assegnarli a un altro o a più dei suoi vicini che non
            raggiungono il numero e non possono allestire un carro con i propri
            sudditi, affinché anche costui o costoro forniscano un carro, come è
            scritto sopra. Se però qualcuno in buona fede non trovasse un vicino
            per i suoi sudditi in eccedenza, deve comunque imporre a questi suoi
            sudditi una quota (?) secondo l&apos;ordinanza, e gli altri suoi
            sudditi devono poi dividerla con loro, affinché neppure essi restino
            esclusi secondo la stessa ordinanza.
          </li>
          <li>
            Inoltre, se uno dei proprietari terrieri, ecclesiastico o laico,
            avesse meno di dieci sudditi e non potesse fornire tra essi il
            decimo uomo, deve associarsi in buona fede un altro dei suoi vicini,
            affinché egli e questo suo vicino forniscano anch&apos;essi il
            decimo uomo e lo inviino al capitano supremo, affinché nessuno degli
            uomini atti e idonei al combattimento si sottragga, secondo la
            suddetta ordinanza.
          </li>
          <li>
            Se però accadesse che uno o più dei prelati, signori, cavalieri,
            scudieri, parroci e anche borghesi che hanno sudditi in campagna non
            inviassero a tale spedizione uno o più dei loro sudditi secondo
            l&apos;ordinanza: ogni volta che fosse provato che hanno
            trasgredito, ciascuno di loro deve pagare trentadue libbre di denari
            per ogni suddito che non ha inviato; di tale somma due parti devono
            spettare al nostro grazioso signore il duca, da destinare poi
            all&apos;utilità comune della spedizione, e la terza parte deve
            spettare al capitano supremo, chiunque egli sia.
          </li>
          <li>
            Se invece un funzionario, per negligenza, per amicizia, favore o in
            cambio di un dono, o altrimenti con astuzia, esentasse alcuni
            sudditi del suo signore e non li inviasse secondo l&apos;ordinanza,
            e ciò avvenisse senza la conoscenza e la volontà del suo signore,
            egli deve dare allo stesso nostro grazioso signore dieci libbre di
            denari per ogni persona così esentata, che devono anch&apos;esse
            essere destinate all&apos;utilità comune, e deve inoltre essere
            punito nel corpo.
          </li>
          <li>
            Inoltre è stato concordato che il nostro grazioso signore disponga
            in tutti i quartieri della terra e nelle parrocchie, e ordini ai
            suoi funzionari, che si informino e raccolgano notizie se da qualche
            parte si trovi un proprietario terriero, ecclesiastico o laico, che
            non abbia inviato interamente la sua gente, uno o più uomini,
            secondo l&apos;ordinanza; coloro che non sono stati inviati devono
            poi essere messi chiaramente per iscritto dai funzionari a cui egli
            lo ordina e denunciati al nostro grazioso signore il duca, affinché
            tale disobbedienza sia punita secondo la suddetta ordinanza e pena.
          </li>
          <li>
            Inoltre, riguardo ai beni degli stranieri, ecclesiastici e laici, si
            è ritenuto opportuno che il nostro grazioso signore d&apos;Austria
            designi e incarichi in ogni quartiere due persone che facciano
            partire secondo l&apos;ordinanza anche la gente di questi stranieri.
            Se però uno degli stranieri non avesse sudditi, ma beni immobili
            nella terra, il nostro grazioso signore deve provvedere affinché
            anch&apos;essi sostengano il carico per questi loro beni come gli
            altri abitanti della terra, secondo l&apos;ordinanza.
          </li>
          <li>
            Inoltre gli stati si sono all&apos;unanimità dichiarati disposti e
            impegnati verso il nostro grazioso signore il duca a che tutti i
            proprietari terrieri, per quanto la giovinezza e la vecchiaia lo
            consentano, cavalchino e servano di persona, a proprie spese e a
            proprio rischio, per un mese intero contro gli eretici infedeli
            dentro o fuori la terra secondo le loro possibilità; se però in quel
            mese subissero qualche danno dai nemici nel viaggio da casa
            all&apos;esercito o in altro modo, il nostro signore ne tenga
            graziosamente conto secondo la sua grazia; dopo la fine del mese,
            invece, egli deve rispondere loro dei danni onesti e cavallereschi
            che subiranno dai nemici per ordine di Sua Grazia e del suo capitano
            supremo, e rilasciare loro per questo lettere di danno secondo
            l&apos;uso e la consuetudine della sua corte, come le rilasciò loro
            nella spedizione davanti a Praga, e risarcire loro tali danni
            secondo il consiglio e il giudizio dei suoi consiglieri.
          </li>
          <li>
            Inoltre il nostro grazioso signore il duca si è impegnato verso gli
            stati: se uno o più proprietari terrieri morissero in campo senza
            lasciare un figlio, egli per grazia concederà i feudi che ora
            tengono da lui alle loro figlie e agli altri parenti più prossimi.
          </li>
          <li>
            Se però qualcuno dei nobili, senza giustificato motivo, restasse a
            casa e non partisse: non appena ciò sia provato, il nostro grazioso
            signore deve punire severamente costui o costoro nel corpo e nei
            beni, e nessuno deve opporsi a ciò né parlarne contro in alcun modo.
          </li>
          <li>
            Inoltre è ferma volontà del nostro grazioso signore il duca, come
            Sua Grazia ha egli stesso comunicato, detto a voce e ordinato agli
            stati, che ogni guerra, malanimo e inimicizia che un proprietario
            terriero abbia o possa avere verso un altro cessino e siano sospesi
            del tutto a partire da oggi, cioè dal sabato precedente la festa di
            san Filippo e san Giacomo, finché il nostro grazioso signore non
            torni dal campo e per quattordici giorni dopo, cosicché in quel
            tempo nessuno abbia nulla a che fare con un altro in malanimo e
            rancore; e se, trascorso tale tempo, uno ha qualche pretesa verso un
            altro, la può far valere per via di diritto.
          </li>
          <li>
            Inoltre, che il nostro grazioso signore istituisca
            nell&apos;esercito un mercato libero, in modo che si possano portare
            al suo esercito cibo, bevande e altre necessità, e affinché i
            carrettieri possano andare e venire dall&apos;esercito sicuri e
            liberi davanti a tutti; e se qualcuno derubasse o ostacolasse in
            qualsiasi modo tali carrettieri contro questa disposizione, costui o
            costoro devono essere puniti nel corpo e nei beni senza alcuna
            grazia.
          </li>
          <li>
            Inoltre, riguardo alla leva dei contadini, è stato concordato che
            tutti i prelati, signori, cavalieri e scudieri, parroci e anche
            borghesi che hanno sudditi in campagna devono levare essi stessi
            senza indugio tutti questi loro sudditi secondo l&apos;ordinanza, in
            modo che i proprietari terrieri, ecclesiastici e laici, dei
            quartieri inferiori al di là e al di qua del Danubio si presentino
            di persona con i loro servitori e sudditi al nostro grazioso signore
            il duca a Laa il prossimo sabato dopo la festa di san Giovanni al
            solstizio d&apos;estate, e che ciascuno dichiari poi la sua gente e
            i suoi sudditi e inoltre la sua gente a cavallo, quanta ciascuno ne
            avrà per sé, affinché egli la possa ordinare ulteriormente. I
            proprietari terrieri stanziati nei quartieri superiori al di là e al
            di qua del Danubio devono invece venire con la loro gente a cavallo
            e i loro sudditi a Eggenburg, dal conte Johann di Schaumberg, dal
            signor Reinprecht di Wallsee e dagli altri proprietari che verranno
            giù fin là a Eggenburg da oltre l&apos;Enns; costoro devono poi
            dichiarare per iscritto la loro gente e i loro uomini, quanti
            ciascuno ne avrà, anche ai procuratori che saranno incaricati a tal
            fine, affinché se ne abbia conoscenza e si possa ulteriormente
            ordinare e inviare.
          </li>
          <li>
            Inoltre, quanto ad archibugi e ad altro equipaggiamento bellico per
            il combattimento, il nostro grazioso signore deve considerarlo e
            ordinarlo egli stesso.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
