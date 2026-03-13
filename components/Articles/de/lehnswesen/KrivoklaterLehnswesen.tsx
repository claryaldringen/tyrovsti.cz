import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const KrivoklaterLehnswesen = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="krivoklat-feudal-system" />
        <h3>Křivoklát{draft && <DraftBadge />}</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Die Ursprünge des Křivokláter Lehnswesens lassen sich zuverlässig auf
          die Regierungszeit Johanns von Luxemburg (insbesondere nach 1337)
          zurückführen, aus der die frühesten erhaltenen Urkunden stammen, die
          die Bedingungen des Lehnsverhältnisses und den Umfang des Besitzes, an
          den die Lehnspflicht gebunden war, festlegten. Die größte Anzahl
          dieser Urkunden stammt aus der Zeit Wenzels IV.
          <Qt publication={PUBLICATIONS.RAZIM1} note="Str. 22" />
        </p>
        <p>
          Ursprünglich wurden Lehen nur auf Lebenszeit des Inhabers vergeben;
          später wurden sie erblich, ausschließlich über die männliche Linie.
          Eine Witwe konnte ein Lehen nur mit ausdrücklicher königlicher
          Genehmigung halten, sofern ein Mann den Eid leistete, die
          Dienstpflichten in ihrem Namen zu übernehmen. Ein Vasall durfte sein
          Lehngut ohne Zustimmung des Königs nicht verkaufen, belasten oder als
          Mitgift vergeben — jede solche Transaktion war nichtig.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          Nach dem Tod des Vasallen wurde das Lehen von Söhnen und Enkeln
          geerbt, die eine als <i>Laudemium</i> bezeichnete Gebühr entrichten,
          sich innerhalb eines Jahres beim Burggrafen (oder beim Hauptmann,
          falls kein Burggraf verfügbar war) melden und den Vasalleneid leisten
          mussten. Wurde diese Frist versäumt, fiel das Lehen als verwirkt an
          den König zurück. Dies geschah 1389 mit Majirkov ze Sence und 1567 mit
          Valent z Kounova, der 1558 ein Lehngut in Kounov vom Kneževeser
          Schulzen Havel für 700 Schock Groschen gekauft hatte, es aber
          versäumte, es in die Lehnsbücher eintragen zu lassen oder zum
          Eidschwur unter den Turm auf Křivoklát zu kommen, weshalb das Gut 1567
          an Erzherzog Ferdinand verfiel.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          Die Vasallen empfingen ihr Lehen, indem sie am eisernen Tor unter dem
          viereckigen Torturm den Eid leisteten. Anschließend wurden sie in den
          Rittersaal geführt, wo ihnen ihre Pflichten verkündet und eine Truhe
          zur Aufbewahrung von Rüstung und anderen Ausrüstungsgegenständen
          übergeben wurde. Bei dieser Gelegenheit überreichten die Vasallen dem
          Hauptmann einen mit einem Federbusch (mit Federpusch) geschmückten
          Hut.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          Die Lehnsaufzeichnungen sollten in den Lehnsregistern geführt werden,
          die 1454 auf Křivoklát eingerichtet wurden, doch die Vasallen
          sicherten ihre Einträge häufig zusätzlich in den Gerichtsregistern.
          1560 befahl Erzherzog Ferdinand Šternberk durch offenen Brief, alle
          Vasallen aufzufordern, mit ihren Urkunden auf der Burg zu erscheinen.
          Nach Prüfung aller Dokumente wurden die Vasallen angewiesen, sich
          ausschließlich an die Lehnsbücher zu halten und keine andere
          Gerichtsbarkeit als die des Křivokláter Hauptmanns zu suchen. Von da
          an war es den Vasallen nicht mehr gestattet, Einträge in den
          Gerichtsregistern vorzunehmen; dennoch haben wir Belege dafür, dass
          sie die Lehnsbücher weiterhin vernachlässigten und nur in den
          Gerichtsregistern eintrugen.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          Warum darauf bestanden wurde, dass an jeder Burg Lehnsbücher geführt
          werden, erklärt eine Gerichtsaufzeichnung von 1479:{' '}
          <Cit>
            Zjistilo se, ze mnoho dedin manskych bylo jiz od koruny ceske
            odtrzeno, jeden druhemu dediny prodavaje, druhemu listy kralovske
            vydava bez povoleni kralova; kdyz pak listove ztrati se, tu manske
            dediny vyjdou z pameti a za svobodne se vydavaji. Tak sluzba kralova
            hyne a urad dvorsky chudne.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          Ein Lehen konnte entweder durch <i>Felonie</i>, also Treubruch — wenn
          ein Vasall den Eid nicht rechtzeitig leistete, die Person des
          Landesherrn beleidigte, seine Pflichten vernachlässigte oder ein
          anderes Vergehen beging — oder durch Ablösung des Dienstes (z. B.
          Hedčany) beendet werden, sei es unentgeltlich, als Belohnung für treue
          Dienste oder gegen Bezahlung. Der König konnte ein Lehen nicht
          eigenmächtig ohne Erlaubnis der Herren ablösen, da ein Lehen kein
          reines Kammergut (dem König gehörend), sondern ein Landesgut (dem
          Staat gehörend) war.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          Die Zerstörung eines als Lehen vergebenen Gutes hob die Dienstpflicht
          nicht auf, sondern verringerte sie lediglich. Als die Dörfer Pístný,
          Okrouhlík, Šimín und Olešek während der Hussitenkriege vollständig
          niedergebrannt wurden, gingen die daran geknüpften Pflichten auf die
          Inhaber der Ländereien über, die von den verlassenen Dörfern
          verblieben waren.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          Lehnsstreitigkeiten wurden von einem besonderen Lehnsgericht
          behandelt, das unabhängig urteilte, wobei Jäger und Förster ihre
          eigene gesonderte Gerichtsbarkeit hatten.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 109" /> Dieses Gericht
          bestand aus 12 Vasallen, die als vereidigte Richter oder Schöffen
          dienten. Der Kläger und der Beklagte wählten jeweils 6 Vasallen als
          Richter.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
          So bezeugte Jan z Tyter 1456 vor dem Gericht:{' '}
          <Cit>
            Kdyz nas 12 manow a sluzebnikow sedlo na sud k rozkazani pana Alse
            Holickeho (ze Sternberka), sudili sme o dedictvi v Sadlne a to
            prisudili sme Drahonovi.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          Nach dem Tod von Aleš Holický ze Šternberka (+1455) hörte das
          Lehnsgericht auf zu funktionieren, und so wandten sich die (edlen)
          Vasallen an das Landgericht, während die Förster unter dem Burggericht
          verblieben: Als Dorota z Chýnavy 1454 die Förster Václav Panoška und
          Jan Rybša vor Gericht lud und behauptete, sie hielten unrechtmäßig ihr
          Förstergut, schrieb der Burggraf Jan z Kozojed an das Gericht, dass{' '}
          <Cit>
            ti hajni k soudu dvorskemu neprinaleži a maji od starodavna svuj
            zvlastni soud na Besedici.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          Eine der letzten Sitzungen des Lehnsgerichts im 15. Jahrhundert fand
          statt, als die Brüder Jindřich und Jan Bornové ze Slabec 1456 Jan
          Drahon wegen eines Gutes in Sadlno vorluden. Damals ordnete der
          Landesverweser Jiří z Poděbrad an, dass jede Partei 6 Dienstleute
          (Vasallen) für ihre Sache zusammenstelle.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          1460 wurde angeordnet, dass alle gemeinsamen königlichen Dienstleute
          (Vasallen) und Dorfschulzen königlicher Dörfer in allen Schuld-,
          Güter-, Schadens- und Streitangelegenheiten vor dem Hofrichter
          verhandelt werden sollten, während Wächter, Turmwächter und Torwärter
          königlicher Burgen für geringfügige Angelegenheiten vor dem Burggrafen
          ihrer Burg verhandelt werden sollten. <br />
          Als jedoch Jan Drahon ze Sadlna 1479 Šulek ze Slovic wegen eines
          Gutshofs in Panošín Újezd vor das Gericht lud, wurde dem Kläger
          mitgeteilt, dass er nicht gegen die Anordnungen seines Burggrafen
          verhandelt werden könne.
          <br />
          Ebenso wurde Kateřina Václavková z Panošího Újezda 1487 vom Gericht
          angewiesen, den Beklagten Jan Baptista beim Burggericht zu suchen.
        </p>
        <p>
          1529 entstanden gleichzeitig drei Streitigkeiten: Der Müller Daniel im
          Teich unterhalb von Rakovník antwortete dem Stadtrat, er habe mit ihm
          nichts zu tun, sondern sei nach einer Urkunde König Vladislavs nur dem
          Burghauptmann verantwortlich. Václav Strojetický na Chříči hatte einen
          Streit mit den Vasallen von Hlohovic über Wiesen, und Jindřich
          Krakovský geriet mit dem Hauptmann über Wälder aneinander.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          Erst daraufhin schrieb der Hauptmann Albrecht z Vřesovic an das
          Gericht, dass das Lehnsgericht wiederhergestellt werden müsse, damit
          die Vasallen zu ihrem Recht kommen könnten, ohne jedes Mal zum
          Hofgericht gehen zu müssen. Niemand wusste, von wem oder auf welche
          Weise das Gericht besetzt werden sollte, da keine Aufzeichnungen
          erhalten geblieben waren und sich niemand mehr erinnerte. Der Bericht
          vermerkt auch, dass{' '}
          <Cit>
            osoby rytirske sluzeb manskych nekonaji, sedmi i osmi nebozatky
            statek osadili a ta sluzby zastavati musi.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          Der Oberstrichter Václav Bezdružický untersuchte diese Eingabe und
          schrieb 1531 an die Räte der Böhmischen Kammer, dass{' '}
          <Cit>
            poradek pri soude manskem na Krivoklatě stejny jest jako na
            Karlstejne, Hluboke, a Zvikove. Totiz puvod (zalobce) pohani sesti
            sluzebníky (many) strany sve spravedlnosti k osazeni soudu a pohnany
            tez sesti k roku od uredniku desk dvorskych polozenemu; a tech 12
            soudcu zahajice soud, strany slyseli a nalez ucinili aneb strany na
            mocne smluvce (ubrmany) podali. Take pani soudu dvorskeho (aby) many
            pred soud na Krivoklat podavali a teprve kdyz tam porovnani nebyli,
            tehdy od purkreabi k urednikum dvorskym obehnani byli. Ale hajni
            krivoklatsti od starodavna na Besedici zvlastni svuj soud mivali.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          Das folgende Verzeichnis der Dienstpflichten basierte auf der
          Beschreibung der Vasallen des Hrádek Křivoklát von 1552, ergänzt aus
          vielen anderen Quellen.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Dienstlehen</h4>
        <ol>
          <li>
            Všetaty, 5 Gutshöfe, und das dazugehörige Dorf Loučko. Der Inhaber
            war verpflichtet, auf Befehl des Burggrafen zu Pferd auf die Burg zu
            reiten und dort zu verbleiben, solange es die Notwendigkeit
            erforderte. Er sollte nichts anderes als Speise und Trank erhalten.
          </li>
          <li>
            Hlivojedy und Jezevce, ganze Dörfer (beide später mit Petrovice
            zusammengelegt). Der Inhaber beider Güter hatte zwei gepanzerte
            Reiter zur Burg zu entsenden, in derselben Weise wie für Všetaty
            beschrieben.
          </li>
          <li>
            Hracholusky, ein Dorf mit einer Feste und einem Gutshof. Der Inhaber
            hatte in voller Rüstung auf der Burg zu erscheinen und dort zu
            verbleiben, solange die Herren es befahlen. Er erhielt Speise und
            Trank.
          </li>
          <li>
            Slovice, ein Dorf mit einer Feste und einem Gutshof; Sadlno, ein
            Gutshof; 1431 wurde das Dorf Smrk hinzugefügt. Der Vasall hatte
            zusammen mit einem Begleiter in voller Eisenrüstung auf der Burg zu
            erscheinen.
          </li>
          <li>
            Vlčí Hora, eine Feste und ein Gutshof; hatte einen gerüsteten Mann
            für die Burg auszurüsten (ein Teil der Wüstung wurde später Lubná
            zugewiesen, ein anderer Teil Hvozd).
          </li>
          <li>
            Příčina, ein Gutshof namens Dětřichovský mit doppelter Hufe und
            Bauernhöfen. Der Herr hatte Grummet zum Speicher auf der Burg zu
            fahren. Es gab auch vier angesessene Pächter, die von Rechts wegen
            Gefangene auf der Burg bewachten.
          </li>
          <li>
            Trtice, eine Feste, ein Gutshof und ein Dorf; der Inhaber hatte in
            Rüstung auf der Burg zu erscheinen und zu tun, was die Herren
            befahlen.
          </li>
          <li>
            Hnidousy, zwei Gutshöfe. Der Herr hatte auf der Burg in Eisenrüstung
            zu dienen und darüber hinaus einen Schweißhund für den König
            bereitzuhalten.
          </li>
          <li>
            Hedčany, ein Gutshof, Bauernhöfe, Wälder und ein Bach. Der Inhaber
            hatte mit einer Armbrust zur Burg zu kommen; dort sollten Bolzen für
            ihn auf königliche Kosten gefertigt werden.
          </li>
          <li>
            Kožlany, ein Gutshof mit 1 Hufe und einem Bach. Der Vasall hatte mit
            einer Armbrust auf der Burg zu dienen; Bolzen sollten für ihn auf
            königliche Kosten gefertigt werden.
          </li>
          <li>
            Plavec, eine Feste mit einem Gutshof, und Šiškov (Čižkov), ein Dorf.
            Der Inhaber hatte zusammen mit einem Begleiter in Rüstung mit
            Armbrüsten auf der Burg zu erscheinen und dort zu verbleiben,
            solange die Herren es befahlen. Er erhielt nur Speise und Trank.
          </li>
          <li>
            Březnice, ein Gutshof; ab 1474 auch Bauernhöfe. Das Lehen wurde 1527
            abgelöst (siehe Hedčany).
          </li>
          <li>
            Kolesov Velký, 11 Bauernhöfe mit 10 Hufen Ackerland. Der Herr hatte
            sich in voller Eisenrüstung auf der Burg einzufinden. 1529 abgelöst
            (siehe Hedčany).
          </li>
          <li>
            Skalka, ein Haus bei der Burg Křivoklát mit Wiesen darunter, 8 Hufen
            im Dorf Chraštany und das ganze Dorf Kalubice. Der Vasall hatte
            zusammen mit zwei Begleitern zur Burg zu kommen; außer Speise und
            Trank wurde nichts bereitgestellt. Bis 1411 waren diese bereits
            aufgeteilt.
          </li>
          <li>
            Chraštany, 8 Hufen Ackerland. Der Herr hatte in Eisenrüstung auf der
            Burg zu erscheinen und dort zu verbleiben, solange die Herren es
            befahlen.
          </li>
          <li>
            Přílepy, 5 Bauernhöfe. Der Inhaber hatte jedes Jahr 6 neue Armbrüste
            zu liefern und dauerhaft 4 Armbrustschützen zur Burg zu entsenden.
            Sie sollten nichts anderes als Kleidung und Schuhe erhalten.
          </li>
          <li>
            Žehrovice, ein Gutshof mit einer Hufe. Der Inhaber hatte einen
            gerüsteten Mann zur Burg zu entsenden und dort zu verbleiben,
            solange die Herren es befahlen.
          </li>
          <li>
            Lišná. Der Herr hatte in Rüstung auf der Burg zu dienen. 1552
            zusammen mit den Wüstungen Okrouhlík und Řebřík an Jiřík Mniškovský
            z Entenšlanka neu verliehen, der mit einem Pferd auf der Burg zu
            dienen hatte, nach Bedarf, in Vorder- und Hinterzeug mit Gorget, in
            einem Kettenpanzerrock und Armschutz, mit einer Pickelhaube, einer
            Handfeuerwaffe und einem Saufeder, wie es sich für einen berittenen
            Armbrustschützen gehört.
          </li>
          <li>
            Krakov, ein Gutshof, mit den dazugehörigen Dörfern Rousinov, Šípy
            und Všesulov. Der Herr hatte mit 4 Lanzenreitern zur Burg zu kommen.
            1363 wurde diese Pflicht auf die Burg Krakovec übertragen, aber 1497
            abgelöst.
          </li>
          <li>
            Chříč, eine Feste mit einem Gutshof und Bauernhöfen. Der Vasall
            hatte in Eisenrüstung auf der Burg zu erscheinen und zu tun, was die
            Herren befahlen.
          </li>
          <li>
            Kounov und Lhota. König Wenzel gab 1402 Jaroslav z Nevida 8 Hufen
            weniger ein Viertel in Kounov und 12 wüste Hufen in Lhotka, damit er
            mit einem gepanzerten Pferd und einer Armbrust auf der Burg diene.
          </li>
          <li>
            Ruda und Lhota (Česká), ganze Dörfer. Der Herr hatte zusammen mit
            einem Begleiter in Eisenrüstung auf der Burg zu erscheinen und dort
            zu verbleiben, solange die Herren es befahlen.
          </li>
          <li>
            Krušovice, ein Gutshof mit 2 Hufen Ackerland. Der Inhaber hatte auf
            Befehl mit einer Armbrust zur Burg zu kommen, und dort sollten
            Bolzen für ihn gefertigt werden.
          </li>
          <li>
            Žilina, ein Gutshof, dessen Inhaber mit einer Armbrust zur Burg zu
            kommen und zu tun hatte, was die Herren befahlen.
          </li>
          <li>
            Okrouhlík, auch Bornov genannt (ehemals eine Feste bei Unhošť). Der
            Herr hatte vor dem Heer Feuer zu setzen. Diese ungewöhnliche
            Dienstpflicht bedarf der Erklärung. Bereits der Chronist Dalimil
            berichtet, dass die böhmischen Herrscher, wenn sie an den
            kaiserlichen Hof in Deutschland geladen waren, Feuer vor sich setzen
            ließen. König Wenzel IV., 1370 nach Nürnberg geladen, ließ bei
            seiner Ankunft nach dem Brauch seiner Vorfahren an zwei Stellen
            große Feuer entzünden, um seine Ankunft anzukündigen, denn seit
            alters her haben Könige das Recht, in Flammen und Feuer einzuziehen.
            Die deutschen Fürsten und Bürger, durch das Feuer auf die Annäherung
            des Königs aufmerksam gemacht, ritten ihm entgegen. Der zweite
            Feuersetzer befand sich in Městečko.
          </li>
          <li>
            Újezd Panošín, drei Gutshöfe. Zwei wurden 1508 von Bořen ze Slabec
            gehalten, mit der Pflicht, dass er im Falle eines Krieges auf
            Vorladung des Hauptmanns zur Burg zu kommen und 4 Wochen zu bleiben
            hatte; nach dieser Zeit sollte er, falls er noch gebraucht würde,
            bleiben und Soldatensold erhalten.
            <br />
            Einen dieser Gutshöfe hielt 1552 Jan Kfelíř ze Žakšova, der
            verpflichtet war, mit einer Armbrust zu kommen und zu tun, was die
            Herren befahlen.
            <br />
            Den zweiten Gutshof (Kubovský) hielt Jiřík Kfelíř mit derselben
            Pflicht. Den dritten Gutshof (Jiráškový), mit 1 1/2 Hufen, hielt
            Mikuláš ze Vlenec mit derselben Pflicht.
          </li>
          <li>
            Senec, ein Dorf mit einer Feste und einem Gutshof. 1389 wurde die
            Pflicht Otík Majirkovs erneuert: auf Befehl des Burggrafen hatte er
            sich mit einer Armbrust auf der Burg einzufinden. Václav Chotek na
            Senci erklärte jedoch 1581, seine Pflicht bestehe darin, sich auf
            der Burg in einem roten Mantel und einer gelben Mütze auf einem
            weißen Pferd einzufinden und eine ungespannte Armbrust, beladen mit
            einem Knaufbolzen, auf den König zu richten, wenn dieser in die Burg
            einritt.
          </li>
          <li>
            Hrádkov (heute Hradečko). König Ludwig verlieh 1525 das wüste Dorf
            Hrádkov als Lehen an Martin z Kozlova: sooft der König nach
            Křivoklát kam und es erforderte, hatte sich der Inhaber mit 2
            Pferden auf der Burg einzufinden und dort zu dienen, bis der König
            abreiste. Speise, Futter und andere Notwendigkeiten sollten auf
            königliche Kosten bereitgestellt werden.
          </li>
        </ol>
        Der Schreiber vermerkte 1552, dass einige Herren erklärt hatten, ihre
        Lehen seien bereits abgelöst.
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Robotlehen</h4>
        <ol>
          <li>
            Budy, unterhalb der Burg. 1457 ein Lehnshaus und einige Wiesen
            namens Ležice, zusammen mit 5 Hufen und einem Häusler; doch 1552 ein
            Dorf, dessen Siedler Weine und andere edle Getränke in die
            Burgkeller hinabließen. Sie erhielten auf der Burg zu essen. Es gab
            auch einen Mann, der nach Častonice zu den Boten gehen sollte.
          </li>
          <li>
            Městečko, bei der Burg. Diese Männer fuhren Jahr für Jahr Holz zur
            Brauerei, wenn es so befohlen wurde. Es gab auch einen, der alles,
            was in der Stadt Rakovník eingekauft wurde, zur Burg bringen sollte.
            Ein anderer hatte jeden Samstag 4 Schock Eier aus Rakovník auf dem
            Rücken zu bringen; für den Gang erhielt er 4 Eier. Es gab eine
            Wüstung, wo einst Jan Rudlík lebte. Deren Inhaber war verpflichtet,
            wenn die Königin mit dem jungen König im Wochenbett lag,
            Nachtigallen herbeizutreiben, die unter ihren Fenstern singen
            sollten. Ein anderer hatte die Pflicht, wenn jemand auf dem Gut
            einen Mord oder ein Vergehen beging, den Besitz des Schuldigen in
            Besitz zu nehmen und dafür zu sorgen, dass alles erhalten blieb.
            Jakub Čarda hatte die Pflicht, mit dem König zu reiten und Feuer zu
            setzen, wo immer der König es befahl. Ihm sollte ein weißes Pferd
            und rote Gewänder gegeben werden (siehe Okrouhlík). Andere hatten
            alles zur Burg zu fahren, was der Küchenmeister für Fleisch
            einkaufte. Alle waren verpflichtet — der Feuersetzer unter ihnen —,
            Vieh von einem Gut zum anderen zu treiben, auf Jagden zu gehen,
            schädliches Wild zu fangen und Netze zu transportieren.
          </li>
          <li>
            Roztoky. Es gab zwei Wächter und einen wohlbestallten Mann, der Holz
            zum Malzdarren zum Malzhaus fahren sollte. Es gab auch zwei Brauer,
            die auf der Burg Bier brauen sollten, wenn die Herren es so
            befahlen. Zusätzlich gab es zwei Förster oder Amtleute, die die
            Wälder bewachten — 1/3 Meile lang und 2 Meilen breit — und dem
            Waldschreiber bei der Erhebung der Einkünfte halfen. Ein anderer
            hatte alles zur Burg zu fahren, was der Koch für Fleisch einkaufte.
            Ein Vogelsteller lieferte jeden Sonntag ein Schock Meisen, vom
            Sonntag nach dem Peterstag bis zum Wenzelstag, und 2 Eichhörnchen
            bis Fasching. Zu Ostern lieferte er einen Auerhahn; er sollte auch
            Habichte fangen und Sperber sammeln, wenn die Herren es befahlen. Es
            gab auch ein Gut, das für den Burgkoch bestimmt war. Oberhalb des
            Dorfes, in Rybáři, gab es zwei Fährleute, die Boten, Hunde und Netze
            kostenlos zur Burg transportieren sollten. Sie waren auch
            verpflichtet, die Burg mit Fisch zu versorgen.
          </li>
          <li>
            Die Stadt Zbečno. Einige sollten die Burg fegen und die Türme
            reinigen. Andere sollten den großen Saal auf der Burg vom Gallustag
            bis zum Georgstag heizen. Einer sollte Schaufeln zum Reinigen der
            Burg und Karren zum Mistfahren herstellen. Drei Treiber sollten auf
            Befehl der Herren auf die Jagd gehen. Es gab auch 4 Fischer, von
            denen jeder jeden Freitag Fisch im Wert von 14 Pfennig lieferte.
            Einer lieferte zu Ostern einen Auerhahn für die Tafel des
            Burggrafen. Es gab auch Vogelsteller, die jeden Sonntag vom
            Peterstag bis zum Wenzelstag ein Schock Meisen und Stieglitze
            lieferten, und so viele Eichhörnchen, wie es Tage im Fasching gab.
            Gesondert gab es einen Wildjäger. Einer versorgte die Burgküche Jahr
            für Jahr mit 2 Hackbeilen und einer Fleischaxt. Sollte eines davon
            zerbrechen, musste er sofort Ersatz schaffen. Ein Mann namens Havlu
            hatte vier Tragen zum Steintransport und 11 Schaufeln der Art, wie
            man sie zum Sauberhalten der Burg benutzte, bereitzustellen. Für
            diese Zwecke sollte ihm Holz gefahren werden. Einer hatte für die
            Tafel des Burggrafen so viele Eichhörnchen zu liefern, wie es
            Sonntage im Fasching gab.
          </li>
          <li>
            Sýkořice. Die Siedler sollten auf Jagden gehen und das vordere oder
            mittlere Tor bewachen, wenn es die Herren so befahlen. Während der
            dritten Brunftzeit und der Hirschbrunst sollten sie zusammen mit
            denen aus Buková die Wagen reparieren und schmieren, Netze auf die
            Wagen laden, sie zu den Jagdgründen fahren und sie trocknen. Im
            Frühling, wenn die Auerhähne balzten, und im Herbst, wenn die
            Hirsche röhrten, sollten sie jeweils eine Woche lang Wache halten.
          </li>
          <li>
            Račice. Diese hatten jede Woche 12 Töpfe und 12 Lampen zu liefern
            und auf dem Rücken zu tragen. Einer hatte das Recht, mit den
            Turmwächtern auf Wildschweinjagd zu gehen.
          </li>
          <li>
            Újezd nad Zbečnem. Diese hatten jederzeit Wild zu tragen oder zu
            fahren, wenn die Herren es befahlen. Es gab einen Heizer für den
            großen Saal auf der Burg. Ein anderer war Treiber, der auf Jagden
            gehen sollte.
          </li>
          <li>
            Buková. Hier gab es Treiber und Netzwarte, die von Rechts wegen auf
            Jagden gehen, Wagen schmieren, Tücher und Netze fahren und trocknen
            und schädliches Wild in den Jagdründen einkreisen sollten. Es gab
            auch drei Förster, die die Wälder von Buková bewachten; diese Wälder
            waren 7/4 Meilen lang und 2 Meilen breit.
          </li>
          <li>
            Branov. Vier Torwächter sollten die vorderen Tore ständig bewachen,
            wobei sie sich paarweise abwechselten. Drei Armbrustschützen sollten
            auf Jagden gehen oder mit Armbrüsten zur Burg kommen. Es gab auch
            zwei Boten, die Briefe in die Pilsner Region, die Moldau-Region und
            andere Bezirke trugen.
          </li>
          <li>
            Nezabudice. Im Dorf gab es zwei Bäcker, die auf der Burg Brot backen
            sollten. Einer sollte mit einer ungespannten Armbrust auf der Burg
            anwesend sein, und der Burggraf selbst würde Sehnen für ihn
            anfertigen lassen. König Vladislav erlaubte 1500 den Inhabern des
            Gutshofes und der Schenke, keine anderen Abgaben zu zahlen als 2
            Kapaunen an Heiligabend oder 15 Groschen für jeden.
          </li>
          <li>
            Lašovice. Es gab einen Förster, der die Wälder von Buková bewachte,
            und einen Boten, der Briefe in die Žatecer Region trug.
          </li>
          <li>
            Rýšín. Es gab einen Boten, der Briefe bis nach Kadaň und durch die
            gesamte Žatecer Region trug.
          </li>
          <li>
            Pustověty. Es gab drei Armbrustschützen — Jan, Běluch und Albrecht
            Bořen —, die mit ihren Armbrüsten auf der Burg zu sein und zu tun
            hatten, was und wann immer die Herren es befahlen.
          </li>
          <li>
            Vnice (Mice), ein Weiler. Darin gab es einen Dienstmann, der jeden
            Sonntag 12 Trinkbecher für die Tafel des Burggrafen lieferte. Ein
            anderer lieferte jeden Sonntag einen Wasserkrug oder 2 Eimer. Eine
            Stelle war wüst; von ihr sollte ein Küfer Fässer, Bottiche, Krüge
            und andere Gefäße bereifen.
          </li>
          <li>
            Častonice, ein wohlbesiedeltes ganzes Dorf. Darin waren alle Boten
            nach Prag und über Prag hinaus, in welche Regionen auch immer und
            wann immer die Herren es befahlen. Es gab auch einen Jäger, der von
            Rechts wegen Wild jagen sollte. (Später fuhren sie alle Vorräte für
            die Hunde zum Jagdhaus bei Skalka nahe der Burg.)
          </li>
          <li>
            Lužná. Ein freies Schulzengut mit 2 Hufen und zwei Abhängigen, einem
            Metzger und einem Bäcker. Dazu gehörten eine freie Mühle, eine
            Schenke, ein Garten von 4 Strychy und die Wiese Hvozdec (1348).
            Davon wurden zu Weihnachten 4 Hasen geliefert (1552 zwei Vasallen,
            die je 2 Hasen lieferten). Der Schulze hielt auch eine Förster-Hufe,
            von der aus er den Amtleuten als Waldaufseher zu dienen hatte.
            Darüber hinaus hielt er eine halbe Hufe Ackerland, wofür er
            verpflichtet war, den Fischern und Jägern Brot bereitzustellen, wenn
            der Königliche Teich unterhalb des Dorfes befischt wurde.
            <br />
            Einige Siedler waren verpflichtet, während der Brunft brünstige
            Hirsche auseinanderzutreiben. Im Gegenzug hatten sie das Recht, in
            einem bestimmten Wald (einem Tannenwald) Holz für ihren Bedarf zu
            fällen. Dieser Ort heißt noch heute die Vasallentanne. Das
            angrenzende Wildgehege trägt den Namen Wildlichtung. Es war eine
            Waldwiese (eher eine Lichtung), auf der Heu zum Füttern des Wildes
            im Winter gemäht wurde.
          </li>
          <li>
            Hlohovice. In ihnen gab es 9 Dienstleute, die auf Befehl mit
            Armbrüsten auf der Burg anwesend zu sein und zu tun hatten, was die
            Herren befahlen. Insbesondere bewachten sie Auerhähne während der
            Frühjahrsbalz und Hirsche während der Herbstbrunft. Es gab auch
            einen Gutshof, dem eine Mühle und eine Schmiede angehörten. König
            Vladislav bestätigte 1497 die alten Rechte der Vasallen: sooft sich
            die Notwendigkeit ergab, hatten sie einen bewaffneten Mann zur Burg
            zu entsenden. Wohin sie auch ritten oder gingen, zahlten sie weder
            Zölle noch Marktgebühren. Sie sollten nur vor dem Lehnsgericht auf
            der Burg verhandelt werden und durften nie von dieser Burg getrennt
            werden, denn ihre Vorfahren hatten sich freiwillig diesem Dienst
            unterworfen. 1714 wurden alle Lehnspflichten auf das Gut Kvítkov mit
            einer Schenke umgelegt.
          </li>
          <li>
            Hlohovičky. Ein wohlbesiedeltes Dorf mit 11 Dienstleuten, die mit
            Armbrüsten auf der Burg anwesend zu sein, die Burg zu bewachen oder
            andere Aufgaben zu erfüllen hatten, und zu reiten oder zu
            marschieren hatten, wohin die Herren es befahlen. Eine Bezahlung war
            dafür nicht nötig, da sie von Rechts wegen dazu verpflichtet waren.
            (1527 vom Lehnsstatus abgelöst; siehe Hedčany).
          </li>
          <li>
            Otročiněves: Diese Vasallen hatten vier Fuhrleute zu bezahlen (d. h.
            vier Wagen bereitzustellen).
          </li>
          <li>
            Újezd Panošín, ein großes, wohlbesiedeltes Dorf. In ihm gab es 17
            Vasallen (Panošen, daher der Name des Dorfes), die auf Befehl mit
            Armbrüsten auf der Burg anwesend zu sein und zu tun hatten, was die
            Herren befahlen. Sie sollten nichts außer ihrer Verpflegung
            erhalten.
            <br />
            Der Hauptmann Oulička bezeugte 1566, dass die Abhängigen von Újezd
            seit alters her wöchentlich 48 Laib Brot und 8 kleine Groschen
            erhalten hatten, doch Herr Šternberk (1560) hatte diese Zulage
            abgeschafft.
            <br />
            Es lässt sich leicht berechnen, dass es ursprünglich 16 Vasallen
            gab, von denen jeder 3 Laib und einen halben Groschen erhielt.
            <br />
            Der Registerschreiber, der die Dienstpflichten 1552 zusammengestellt
            hatte, fügte hinzu: Es gibt noch einige mehr Dienstpflichten, doch
            die Register sind etwas beschädigt und konnten nicht vollständig
            entziffert werden; daher wurden diese ausgelassen, obwohl die
            menschliche Erinnerung an diese Pflichten noch fortbesteht.
            <br />
            Das Verzeichnis schloss dann mit dem Zusatz: Es gibt noch 5 Dörfer,
            die keine andere Dienstpflicht haben, als Wachdienst auf der Burg zu
            verrichten. Wir kennen sie namentlich, und zwar sind es:
          </li>
          <li>
            Zavidov. Eine freie Schenke und eine Hufe Ackerland, die unter zehn
            Männer nach Erbpachtrecht verteilt worden war.
          </li>
          <li>
            Hostokryje. Ein Bauernhof mit einer Hufe Ackerland (1481 an Příčina
            verkauft).
          </li>
          <li>Novosedly. Ein ganzes Dorf.</li>
          <li>
            Kalubice. Ein ganzes Dorf; die Besitzungen sind nur kleine Parzellen
            und Häuschen (siehe Skalka). Die Siedler richteten sich 1550 nach
            den Erbpachtbüchern, doch was von der Herrschaft angeordnet wurde,
            waren sie verpflichtet auszuführen.
          </li>
          <li>
            Pavlíkov. Ein freies Schulzengut mit 3 Hufen und ein Gutshof mit 1
            Hufe. <br />
            Der Hauptmann Albrecht z Vřesovic schlug der Böhmischen Kammer 1529
            vor, den Dienst der Torwächter und Wächter abzuschaffen. Es wäre
            besser, die Pflichten der Vasallen in eine regelmäßige Zahlung
            umzuwandeln, und sie würden lieber eine anständige Summe zahlen, von
            der ständige und bewährte treue Männer unterhalten werden könnten.
            In Zeiten der Unruhe konnte der Hauptmann nicht wissen, ob
            diejenigen, die zum Wachdienst eintrafen, Wächter oder Verräter
            waren.
            <br />
            Vřesovecs Vorschlag wurde teilweise von Šternberk umgesetzt und
            teilweise erst unter der Hauptmannschaft von Kaplíř (1640). Die
            Dienstpflichten, die der Schreiber aus den beschädigten Registern
            nicht entziffern konnte, wurden andernorts gefunden:
          </li>
          <li>
            Kunšův Dvůr (unterhalb von Všetaty). Mit 1 Hufe. Der Inhaber war
            verpflichtet, eine geeignete Person für eine Woche zu entsenden, um
            die Vogelbalz zu bewachen und in den Wäldern über das Wild zu
            wachen.
          </li>
          <li>
            Hředle. Ein Schulzengut mit drei Hufen Ackerland; dazu eine
            privilegierte Schenke, ein Metzger und ein Bäcker. Die Dienstpflicht
            ist nicht bekannt.
          </li>
          <li>
            Kněževes. Ein Schulzengut mit 1 Hufe und 9 Jitra, eine freie
            Schenke, ein Metzger mit einer Fleischbank und ein Bäcker. Sooft
            sich eine wichtige Notwendigkeit ergab, war der Schulze
            verpflichtet, ein Reitpferd bereitzuhalten.
          </li>
          <li>
            Chlum. Der Schulze zahlte 3 Groschen für ins Ausland entsandte
            Boten.
          </li>
          <li>
            Mlečice. Ein Schulzengut mit einer Hufe Ackerland und 2 Häuslern.
          </li>
          <li>Svínárov. Ein Schulzengut und ein Gutshof mit 2 Hufen.</li>
          <li>
            Myslice. (1383 eine Mühle, 1543 ein Gutshof, 1610 eine Fähre
            unterhalb der Burg Týřov.) Der Inhaber lieferte jeden Freitag
            Flussfisch im Wert von 3 Groschen, hielt einen Schweißhund, mit dem
            er nach Wild suchte, und informierte die Netzwarte und Treiber in
            Broumy, wo sie sich versammeln sollten.
          </li>
          <li>
            Broumy: Die Netzwarte und Treiber hatten während der Jagden zu
            dienen.
          </li>
          <li>
            Hudlice, ein ganzes Dorf. Zwei waren verpflichtet, als Amtleute oder
            Förster zu dienen und die Wälder zu beaufsichtigen, die 5/4 Meilen
            lang und eine Meile breit waren. Vierzehn angesessene Männer sollten
            auf Jagden gehen.
          </li>
          <li>
            Svojetín. Ein angesessener Mann (Hans Porth) war verpflichtet,
            während der Jagden die Diener und Hunde des Herrn mit ordentlicher
            Verpflegung zu versorgen.
          </li>
          <li>
            Gewisses Buschland unterhalb des Teiches bei der Burg Nižbor, mit
            einem wüsten Hopfengarten und 24 Strychy Ackerland, war eine
            Verleihung der böhmischen Könige (eine Urkunde König Karls von um
            1370).
          </li>
          <li>
            Chýňava. Sie zahlen nichts; alle Siedler bewachen lediglich die
            Wälder.
          </li>
          <li>
            Bezděkov (Dolní). Drei angesessene Männer dienten als Amtleute über
            die Wälder, die 2 Meilen lang und breit waren.
          </li>
          <li>
            Vašírov: Fünf angesessene Männer waren verpflichtet, als
            Waldamtleute zu dienen und Einkünfte zu erheben. Unter ihrem Amt
            waren die Wälder 2 Meilen lang und breit. Sie waren auch
            verpflichtet, die Mäher und Arbeiter auf der Wiese namens
            &bdquo;Ptýně&ldquo; zu beaufsichtigen, um sicherzustellen, dass sie
            ordentlich arbeiteten.
          </li>
          <li>
            Rakovník. Die Bürger waren seit Menschengedenken verpflichtet, für
            königliche Jagden Männer und Pferde bereitzustellen und Bettwäsche
            für die königlichen Höflinge zur Burg zu leihen.
          </li>
          <li>
            Stráčecí. Die Siedler gingen seit alters her auf Jagden und stellten
            die nötigen Wagen zum Transport von Netzen und Tuch bereit. Da sich
            Zeiten und Hauptleute ändern, wurde 1549 darüber eine Urkunde
            ausgestellt.
          </li>
          <li>
            Žatec. Die Bürger lieferten seit 1399 ein halbes Fass Wein von jedem
            Weinberg nach Křivoklát. 1611 wurde dies in eine jährliche Zahlung
            von 25 Schock Groschen umgewandelt.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
