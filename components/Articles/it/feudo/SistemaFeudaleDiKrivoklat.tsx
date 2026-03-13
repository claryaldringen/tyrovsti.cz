import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const SistemaFeudaleDiKrivoklat = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="krivoklat-feudal-system" />
        <h3>Křivokl&aacute;t{draft && <DraftBadge />}</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Le origini del sistema feudale di Křivokl&aacute;t possono essere
          fatte risalire con certezza al regno di Giovanni di Lussemburgo
          (specificamente dopo il 1337), dal quale datano i pi&ugrave; antichi
          documenti sopravvissuti che stabiliscono le condizioni del rapporto
          feudale e l&apos;estensione della propriet&agrave; cui era legato
          l&apos;obbligo feudale. Il maggior numero di questi documenti risale
          al tempo di Venceslao IV.
          <Qt publication={PUBLICATIONS.RAZIM1} note="Str. 22" />
        </p>
        <p>
          Inizialmente, i feudi erano concessi solo per la durata della vita del
          titolare; in seguito divennero ereditari, esclusivamente attraverso la
          linea maschile. Una vedova poteva detenere un feudo solo con esplicito
          permesso regio, a condizione che un uomo giurasse di assumere gli
          obblighi di servizio per suo conto. A un vassallo non era consentito
          vendere, gravare o assegnare come dote il proprio feudo senza il
          consenso del re &mdash; qualsiasi tale transazione era nulla.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          Alla morte del vassallo, il feudo era ereditato da figli e nipoti, che
          erano tenuti a pagare una tassa chiamata <i>laudemium</i>, presentarsi
          al burgravio entro un anno (o al capitano, se non era disponibile un
          burgravio) e prestare il giuramento vassallatico. Se questo termine
          veniva superato, il feudo ritornava al re come decaduto. Ci&ograve;
          avvenne a Majirkov ze Sence nel 1389 e a Valent z Kounova nel 1567,
          che aveva acquistato un feudo a Kounov dal magistrato di Kněževes,
          Havel, per 700 sessanta di grossi nel 1558, ma non lo registr&ograve;
          nei libri feudali n&eacute; and&ograve; a prestare giuramento sotto la
          torre di Křivokl&aacute;t, e pertanto il feudo fu confiscato a favore
          dell&apos;arciduca Ferdinando nel 1567.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          I vassalli ricevevano il loro feudo prestando giuramento alle porte di
          ferro sotto la torre quadrata del portone. Venivano poi condotti nella
          sala dei cavalieri, dove venivano annunciati i loro doveri e veniva
          consegnato un forziere per conservare l&apos;armatura e altri
          equipaggiamenti. In tale occasione, i vassalli presentavano al
          capitano un cappello adornato con un pennacchio (mit Federpusch).
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          I registri feudali dovevano essere tenuti nei libri feudali, istituiti
          a Křivokl&aacute;t nel 1454, ma i vassalli spesso garantivano inoltre
          le proprie registrazioni nei registri del tribunale. Nel 1560,
          l&apos;arciduca Ferdinando ordin&ograve; a Šternberk con lettera
          aperta di convocare tutti i vassalli al castello con i loro documenti.
          Dopo aver esaminato tutti i documenti, i vassalli furono istruiti ad
          attenersi esclusivamente ai libri feudali e a non cercare alcuna
          giurisdizione diversa da quella del capitano di Křivokl&aacute;t. Da
          quel momento, ai vassalli non fu pi&ugrave; permesso di fare
          registrazioni nei registri del tribunale; ciononostante, abbiamo prove
          che continuarono a trascurare i libri feudali e registrarono solo nei
          registri del tribunale.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          Perch&eacute; si insisteva che i libri feudali fossero tenuti in ogni
          castello &egrave; spiegato da un registro del tribunale del 1479:{' '}
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
          Un feudo poteva essere estinto o per <i>fellonia</i>, cio&egrave;
          violazione della fedelt&agrave; &mdash; se un vassallo non prestava
          giuramento in tempo, insultava la persona del sovrano, trascurava i
          suoi doveri o commetteva qualche altro crimine &mdash; o per
          commutazione del servizio (ad es. Hedčany), sia gratuitamente, come
          ricompensa per fedele servizio, o dietro pagamento. Il re non poteva
          commutare un feudo da solo senza il permesso dei signori, per la
          ragione che un feudo non era puramente un bene della camera
          (appartenente al re) ma un bene territoriale (appartenente allo
          stato).
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          La distruzione di un bene concesso in feudo non estingueva
          l&apos;obbligo di servizio, ma lo riduceva soltanto. Quando i villaggi
          di P&iacute;stný, Okrouhl&iacute;k, Š&iacute;m&iacute;n e Olešek
          furono completamente bruciati durante le guerre hussite, gli obblighi
          legati a essi passarono ai detentori delle terre rimaste dai villaggi
          abbandonati.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
        <p>
          Le dispute feudali erano gestite da un tribunale feudale speciale, che
          giudicava in modo indipendente, sebbene i cacciatori e i guardiaboschi
          avessero la propria giuria separata.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 109" /> Questo
          tribunale era composto da 12 vassalli che servivano come giudici
          giurati o assessori. L&apos;attore e il convenuto sceglievano ciascuno
          6 vassalli come giudici.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
          Cos&igrave; Jan z Tyter testimoni&ograve; nel 1456 davanti al
          tribunale:{' '}
          <Cit>
            Kdyz nas 12 manow a sluzebnikow sedlo na sud k rozkazani pana Alse
            Holickeho (ze Sternberka), sudili sme o dedictvi v Sadlne a to
            prisudili sme Drahonovi.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          Dopo la morte di Aleš Holick&yacute; ze Šternberka (+1455), il
          tribunale feudale cess&ograve; di funzionare, e cos&igrave; i vassalli
          (nobili) si rivolsero al tribunale del paese, mentre i guardiaboschi
          rimasero sotto il tribunale del castello: quando nel 1454 Dorota z
          Chýnavy convoc&ograve; i guardiaboschi V&aacute;clav Panoška e Jan
          Rybša davanti al tribunale, sostenendo che detenevano illegalmente il
          suo feudo di guardiaboschi, il burgravio Jan z Kozojed scrisse al
          tribunale che{' '}
          <Cit>
            ti hajni k soudu dvorskemu neprinaleži a maji od starodavna svuj
            zvlastni soud na Besedici.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          Una delle ultime sessioni del tribunale feudale nel XV secolo ebbe
          luogo quando i fratelli Jindřich e Jan Bornové ze Slabec convocarono
          Jan Drahon nel 1456 per un feudo a Sadlno. A quel tempo, il
          governatore del paese Jiř&iacute; z Poděbrad ordin&ograve; a ciascuna
          parte di radunare 6 servitori (vassalli) per la propria causa.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          Nel 1460, fu ordinato che tutti i servitori regi comuni (vassalli) e i
          magistrati di villaggio dei villaggi regi dovessero essere giudicati
          in tutte le questioni di debiti, feudi, danni e dispute davanti al
          giudice del tribunale, mentre le guardie, i guardiani della torre e i
          portinai dei castelli regi dovessero essere giudicati per questioni
          minori davanti al burgravio del loro castello. <br />
          Tuttavia, quando nel 1479 Jan Drahon ze Sadlna convoc&ograve; Šulek ze
          Slovic davanti al tribunale per un maniero a Panoš&iacute;
          &Uacute;jezd, l&apos;attore fu informato che non poteva essere
          giudicato contro gli ordini del suo burgravio.
          <br />
          Parimenti, Kateřina V&aacute;clavkov&aacute; z Panoš&iacute;ho
          &Uacute;jezda fu istruita dal tribunale nel 1487 a cercare
          l&apos;accusato Jan Babtista presso il tribunale del castello.
        </p>
        <p>
          Nel 1529, sorsero tre dispute contemporaneamente: il mugnaio Daniel
          nello stagno sotto Rakovn&iacute;k rispose al consiglio comunale che
          non aveva nulla a che fare con loro, ma secondo un documento del re
          Vladislao era responsabile solo verso il capitano del castello.
          V&aacute;clav Strojetick&yacute; na Chř&iacute;ci ebbe una disputa con
          i vassalli di Hlohovice per dei prati, e Jindřich Krakovsk&yacute; si
          scontr&ograve; con il capitano per le foreste.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 110" />
        </p>
        <p>
          Solo allora il capitano Albrecht z Vřesovic scrisse al tribunale che
          era necessario ristabilire il tribunale feudale cosicch&eacute; i
          vassalli potessero ottenere giustizia senza doversi recare al
          tribunale ogni volta. Nessuno sapeva da chi o in che modo il tribunale
          dovesse essere costituito, poich&eacute; non erano stati conservati
          registri e nessuno ricordava pi&ugrave;. Il rapporto nota inoltre che{' '}
          <Cit>
            osoby rytirske sluzeb manskych nekonaji, sedmi i osmi nebozatky
            statek osadili a ta sluzby zastavati musi.
          </Cit>
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 111" />
        </p>
        <p>
          Il giudice capo V&aacute;clav Bezdruzick&yacute; investig&ograve;
          questa istanza e nel 1531 scrisse ai consigli della Camera di Boemia
          che{' '}
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
          Il seguente inventario degli obblighi di servizio si basava sulla
          descrizione dei vassalli di Hr&aacute;dek Křivokl&aacute;t del 1552,
          integrata da molte altre fonti.
          <Qt publication={PUBLICATIONS.KOCKA} note="Str. 112" />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Feudi di servizio</h4>
        <ol>
          <li>
            Všetaty, 5 manieri, e il villaggio di Loučko ad essi annesso. Il
            titolare era tenuto, su ordine del burgravio, a recarsi al castello
            a cavallo e rimanervi per tutto il tempo necessario. Non doveva
            ricevere altro che vitto e bevande.
          </li>
          <li>
            Hlivonědy e Ježovce, villaggi interi (entrambi poi fusi con
            Petrovice). Il titolare di entrambi i feudi doveva inviare due
            cavalieri corazzati al castello, nello stesso modo descritto per
            Všetaty.
          </li>
          <li>
            Hracholusky, un villaggio con una fortezza e un maniero demaniale.
            Il titolare doveva presentarsi al castello in armatura completa e
            rimanervi per tutto il tempo che i signori comandavano. Gli venivano
            dati vitto e bevande.
          </li>
          <li>
            Slovice, un villaggio con una fortezza e un maniero demaniale;
            Sadlno, un maniero demaniale; nel 1431 fu aggiunto il villaggio di
            Smrk. Il vassallo, insieme a un compagno, doveva presentarsi al
            castello in armatura di ferro completa.
          </li>
          <li>
            Vlč&iacute; Hora, una fortezza e un maniero demaniale; doveva
            equipaggiare un uomo corazzato per il castello (parte della terra
            incolta fu poi assegnata a Lubná, un&apos;altra parte a Hvozd).
          </li>
          <li>
            Přič&iacute;na, un maniero demaniale chiamato Dětřichovsk&yacute;
            con doppio arativo e fattorie contadine. Il signore doveva
            trasportare il fieno del secondo raccolto al magazzino del castello.
            C&apos;erano anche quattro coloni che per diritto custodivano i
            prigionieri al castello.
          </li>
          <li>
            Trtice, una fortezza, un maniero demaniale e un villaggio; il
            titolare doveva presentarsi al castello in armatura e fare
            ci&ograve; che i signori comandavano.
          </li>
          <li>
            Hnidousy, due manieri demaniali. Il signore doveva servire al
            castello in armatura di ferro e, inoltre, tenere pronto un segugio
            per il re.
          </li>
          <li>
            Hedčany, un maniero demaniale, fattorie contadine, foreste e un
            ruscello. Il titolare doveva presentarsi al castello con una
            balestra; l&igrave;, i dardi dovevano essere fabbricati per lui a
            spese regie.
          </li>
          <li>
            Kozlany, un maniero demaniale con 1 lano e un ruscello. Il vassallo
            doveva servire al castello con una balestra; i dardi dovevano essere
            fabbricati per lui a spese regie.
          </li>
          <li>
            Plavec, una fortezza con un maniero demaniale, e Šiškov (Čižkov), un
            villaggio. Il titolare, insieme a un compagno, doveva presentarsi al
            castello in armatura con balestre e rimanervi per tutto il tempo che
            i signori comandavano. Gli venivano dati solo vitto e bevande.
          </li>
          <li>
            Březnice, un maniero demaniale; dal 1474 anche fattorie contadine.
            Il feudo fu commutato nel 1527 (vedi Hedčany).
          </li>
          <li>
            Kolešov Velk&yacute;, 11 fattorie contadine con 10 lani di terra
            arabile. Il signore doveva presentarsi al castello in armatura di
            ferro completa. Commutato nel 1529 (vedi Hedčany).
          </li>
          <li>
            Skalka, una casa presso il castello di Křivokl&aacute;t con prati
            sottostanti, 8 lani nel villaggio di Chřašťany, e l&apos;intero
            villaggio di Kalubice. Il vassallo, insieme a due compagni, doveva
            presentarsi al castello; oltre a vitto e bevande, nient&apos;altro
            era fornito. Nel 1411 erano gi&agrave; divisi.
          </li>
          <li>
            Chřašťany, 8 lani di terra arabile. Il signore doveva presentarsi al
            castello in armatura di ferro e rimanervi per tutto il tempo che i
            signori comandavano.
          </li>
          <li>
            Př&iacute;lepy, 5 fattorie contadine. Il titolare doveva fornire 6
            nuove balestre ogni anno e inviare permanentemente 4 balestrieri al
            castello. Non dovevano ricevere altro che vestiario e calzature.
          </li>
          <li>
            Žehrovice, un maniero con un lano. Il titolare doveva inviare un
            uomo corazzato al castello e rimanervi per tutto il tempo che i
            signori comandavano.
          </li>
          <li>
            L&iacute;šná. Il signore doveva servire al castello in armatura.
            Riconcesso nel 1552 insieme alle terre incolte di Okrouhl&iacute;k e
            Řebř&iacute;k a Jiř&iacute;k Mn&iacute;škovsk&yacute; z Entenšlanka,
            che doveva servire al castello con un cavallo, secondo
            necessit&agrave;, in armatura anteriore e posteriore con gorgiera,
            in gonna di maglia e bracciale, con un pikelhube, un&apos;arma da
            fuoco e una lancia da cinghiale, come si addice a un balestriere a
            cavallo.
          </li>
          <li>
            Krakov, un maniero demaniale, con i villaggi di Rouš&iacute;nov,
            Š&iacute;py e Všesulov annessi. Il signore doveva presentarsi al
            castello con 4 lancieri. Nel 1363 quest&apos;obbligo fu trasferito
            al castello di Krakovec, ma fu commutato nel 1497.
          </li>
          <li>
            Chříč, una fortezza con un maniero demaniale e fattorie contadine.
            Il vassallo doveva presentarsi al castello in armatura di ferro e
            fare ci&ograve; che i signori comandavano.
          </li>
          <li>
            Kounov e Lhota. Il re Venceslao nel 1402 diede a Jaroslav z Nevida 8
            lani meno un quarto a Kounov e 12 lani abbandonati a Lhotka,
            affinch&eacute; servisse al castello con un cavallo corazzato e una
            balestra.
          </li>
          <li>
            Ruda e Lhota (Česk&aacute;), villaggi interi. Il signore, insieme a
            un compagno, doveva presentarsi al castello in armatura di ferro e
            rimanervi per tutto il tempo che i signori comandavano.
          </li>
          <li>
            Krušovice, un maniero demaniale con 2 lani di terra arabile. Il
            titolare, su comando, doveva presentarsi al castello con una
            balestra, e l&igrave; i dardi dovevano essere fabbricati per lui.
          </li>
          <li>
            Žilina, un maniero demaniale il cui titolare doveva presentarsi al
            castello con una balestra e fare ci&ograve; che i signori
            comandavano.
          </li>
          <li>
            Okrouhl&iacute;k, altrimenti noto come Bornov (anticamente una
            fortezza presso Unhost). Il signore doveva accendere fuochi davanti
            all&apos;esercito. Questo insolito obbligo di servizio richiede una
            spiegazione. Gi&agrave; il cronista Dalimil registra che i sovrani
            boemi, quando invitati alla corte imperiale in Germania, facevano
            accendere fuochi davanti a loro. Il re Venceslao IV, invitato a
            Norimberga nel 1370, fece accendere grandi fuochi in due luoghi al
            suo arrivo, seguendo la consuetudine dei suoi antenati, per
            annunciare la sua venuta, poich&eacute; sin dai tempi antichi i re
            avevano il diritto di arrivare tra fiamme e fuoco. I principi e
            borghesi tedeschi, avvertiti dal fuoco dell&apos;avvicinarsi del re,
            gli andavano incontro. Il secondo accendifuoco era a Městečko.
          </li>
          <li>
            &Uacute;jezd Panoš&iacute;, tre manieri demaniali. Due erano tenuti
            nel 1508 da Bořen ze Slabec, con l&apos;obbligo che, qualora
            scoppiasse una guerra, doveva presentarsi al castello su
            convocazione del capitano e restare per 4 settimane; trascorso tale
            tempo, se ancora necessario, doveva rimanere e ricevere paga da
            soldato.
            <br />
            Uno di questi manieri era tenuto nel 1552 da Jan Kfel&iacute;ř ze
            Žaksova, che era obbligato a presentarsi con una balestra e fare
            ci&ograve; che i signori comandavano.
            <br />
            Il secondo maniero (Kubovsk&yacute;) era tenuto da Jiř&iacute;k
            Kfel&iacute;ř con lo stesso obbligo. Il terzo maniero
            (Jir&aacute;škovsk&yacute;), con 1 1/2 lani, era tenuto da
            Mikul&aacute;š ze Vlenec con lo stesso obbligo.
          </li>
          <li>
            Senec, un villaggio con una fortezza e un maniero demaniale. Nel
            1389, l&apos;obbligo di Ot&iacute;k Majirkov fu rinnovato: su
            comando del burgravio, doveva presentarsi al castello con una
            balestra. Tuttavia, V&aacute;clav Chotek na Senci dichiar&ograve;
            nel 1581 che il suo obbligo era di presentarsi al castello in un
            mantello rosso e berretto giallo su un cavallo bianco, e di mirare
            una balestra scarica caricata con un dado da pomolo verso il re
            mentre entrava nel castello.
          </li>
          <li>
            Hradkov (oggi Hradečko). Il re Luigi nel 1525 concesse il villaggio
            abbandonato di Hradkov come feudo a Martin z Kozlova: ogni volta che
            il re veniva a Křivokl&aacute;t e lo richiedeva, il titolare doveva
            presentarsi al castello con 2 cavalli e servire l&igrave; fino alla
            partenza del re. Vitto, foraggio e altre necessit&agrave; erano
            forniti a spese regie.
          </li>
        </ol>
        Il cancelliere nel 1552 not&ograve; che alcuni signori avevano
        dichiarato di aver gi&agrave; commutato i loro feudi.
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Feudi di lavoro</h4>
        <ol>
          <li>
            Budy, sotto il castello. Nel 1457, una casa feudale e alcuni prati
            chiamati Ležice, insieme a 5 lani e un piccolo possidente; ma nel
            1552 un villaggio, i cui coloni calavano vini e altre bevande
            preziose nelle cantine del castello. Gli veniva dato vitto al
            castello. C&apos;era anche un uomo che doveva andare a Častonice per
            i messaggeri.
          </li>
          <li>
            Městečko, presso il castello. Questi uomini trasportavano legna alla
            birreria anno dopo anno, quando cos&igrave; ordinato. Ce n&apos;era
            anche uno che doveva portare al castello ci&ograve; che veniva
            acquistato nella citt&agrave; di Rakovn&iacute;k. Un altro doveva
            portare sulle spalle 4 sessanta di uova da Rakovn&iacute;k ogni
            sabato; per la camminata riceveva 4 uova. C&apos;era una terra
            incolta dove un tempo viveva Jan Rudl&iacute;k. Il suo titolare era
            obbligato, quando la regina giaceva nel suo puerperio con il giovane
            re, a portare usignoli a cantare sotto le sue finestre. Un altro
            aveva il dovere, qualora qualcuno commettesse un omicidio o qualche
            misfatto nel feudo, di prendere possesso dei beni del colpevole e
            assicurarsi che tutto fosse preservato. Jakub Čarda aveva
            l&apos;obbligo di cavalcare con il re e accendere fuochi ovunque il
            re comandasse. Gli doveva essere dato un cavallo bianco e abiti
            rossi (vedi Okrouhl&iacute;k). Altri dovevano trasportare al
            castello ci&ograve; che il maestro di cucina acquistava per la
            carne. Tutti erano obbligati &mdash; l&apos;accendifuoco tra loro
            &mdash; a trasportare bestiame da un maniero all&apos;altro, a
            partecipare alle cacce, a catturare selvaggina nociva e a
            trasportare reti.
          </li>
          <li>
            Roztoky. C&apos;erano due guardiani e un uomo ben insediato che
            doveva trasportare legna per l&apos;essicazione del malto al
            maltificio. C&apos;erano anche due birrai che dovevano produrre
            birra al castello quando i signori cos&igrave; ordinavano. Inoltre,
            c&apos;erano due guardiaboschi o funzionari che sorvegliavano le
            foreste &mdash; lunghe 1/3 di miglio e larghe 2 miglia &mdash; e
            aiutavano il cancelliere forestale a riscuotere le entrate. Un altro
            doveva trasportare al castello ci&ograve; che il cuoco acquistava
            per la carne. Un uccellatore consegnava un sessanta di cinciallegre
            ogni domenica, dalla domenica dopo San Pietro fino a San Venceslao,
            e 2 scoiattoli fino a Carnevale. A Pasqua consegnava un gallo
            cedrone; doveva anche catturare astori e raccogliere sparvieri
            quando i signori lo comandavano. C&apos;era anche un podere
            riservato al cuoco del castello. Sopra il villaggio, a
            Ryb&aacute;ři, c&apos;erano due traghettatori che dovevano
            trasportare messaggeri, cani e reti al castello gratuitamente. Erano
            inoltre obbligati a rifornire il castello di pesce.
          </li>
          <li>
            La citt&agrave; di Zbečno. Alcuni dovevano spazzare il castello e
            pulire le torri. Altri dovevano riscaldare la grande sala del
            castello dal giorno di San Gallo al giorno di San Giorgio. Uno
            doveva fabbricare pale per la pulizia del castello e carriole per
            trasportare il letame. Tre battitori dovevano partecipare alle cacce
            su comando dei signori. C&apos;erano anche 4 pescatori, ciascuno dei
            quali consegnava pesce del valore di 14 denari ogni venerd&igrave;.
            Uno consegnava un gallo cedrone per la tavola del burgravio a
            Pasqua. C&apos;erano anche uccellatori che consegnavano un sessanta
            di cinciallegre e cardellini ogni domenica dal giorno di San Pietro
            fino a San Venceslao, e tanti scoiattoli quanti erano i giorni di
            Carnevale. Separatamente, c&apos;era un cacciatore di selvaggina.
            Uno riforniva la cucina del castello anno dopo anno con 2 mannaie e
            un&apos;ascia per la carne. Se qualcuna di queste si rompeva, doveva
            farne una di ricambio immediatamente. Un uomo di nome Havl&uacute;
            doveva fornire quattro barelle per trasportare pietre e 11 pale del
            tipo usato per raschiare e pulire il castello. Per queste
            necessit&agrave;, la legna doveva essere trasportata per lui. Uno
            doveva consegnare per la tavola del burgravio tanti scoiattoli
            quante erano le domeniche di Carnevale.
          </li>
          <li>
            S&yacute;kořice. I coloni dovevano partecipare alle cacce e
            sorvegliare le porte anteriori o centrali quando cos&igrave;
            ordinato dai signori. Durante la terza stagione degli amori e il
            bramito dei cervi, dovevano riparare e ungere i carri insieme a
            quelli di Bukov&aacute;, caricare le reti sui carri, trasportarle
            nei terreni di caccia e asciugarle. In primavera, quando i galli
            cedroni si esibivano, e in autunno, quando i cervi bramivano,
            dovevano fare la guardia per una settimana alla volta.
          </li>
          <li>
            Račice. Questi dovevano consegnare 12 vasi e 12 lampade ogni
            settimana e portarli sulle spalle. Uno aveva il diritto di andare a
            caccia con i guardiani della torre per i cinghiali.
          </li>
          <li>
            &Uacute;jezd nad Zbečnem. Questi dovevano trasportare o carreggiare
            selvaggina in qualsiasi momento i signori comandassero. C&apos;era
            un fuochista per la grande sala del castello. Un altro era un
            battitore, che doveva partecipare alle cacce.
          </li>
          <li>
            Bukov&aacute;. Qui c&apos;erano battitori e addetti alle reti che
            per diritto dovevano partecipare alle cacce, ungere i carri,
            trasportare e asciugare teli e reti, e circondare la selvaggina
            nociva nelle battute di caccia. C&apos;erano anche tre guardiaboschi
            che sorvegliavano le foreste di Bukov&aacute;; queste foreste erano
            lunghe 7/4 di miglio e larghe 2 miglia.
          </li>
          <li>
            Branov. Quattro portinai dovevano sorvegliare le porte anteriori in
            continuazione, alternandosi a coppie. Tre balestrieri dovevano
            partecipare alle cacce o presentarsi al castello con le balestre.
            C&apos;erano anche due messaggeri che portavano lettere nella
            regione di Plzeň, nella regione della Vltava e in altri distretti.
          </li>
          <li>
            Nezabudice. Nel villaggio c&apos;erano due fornai che dovevano
            cuocere il pane al castello. Uno doveva essere presente al castello
            con una balestra scarica, e il burgravio stesso avrebbe fatto
            fabbricare le corde per lui. Il re Vladislao nel 1500 permise ai
            titolari del maniero demaniale e della taverna di non pagare altri
            tributi che 2 capponi alla vigilia di Natale, o 15 grossi per
            ciascuno.
          </li>
          <li>
            Lašovice. C&apos;era un guardiaboschi che sorvegliava le foreste di
            Bukov&aacute;, e un messaggero che portava lettere nella regione di
            Žatec.
          </li>
          <li>
            Rys&iacute;n. C&apos;era un messaggero che portava lettere fino a
            Kadaň e in tutta la regione di Žatec.
          </li>
          <li>
            Pustověty. C&apos;erano tre balestrieri &mdash; Jan, Běluch e
            Albrecht Bořen &mdash; che dovevano essere al castello con le loro
            balestre e fare ci&ograve; che e quando i signori comandavano.
          </li>
          <li>
            Vnice (M&iacute;ce), un borgo. In esso c&apos;era un servitore che
            consegnava 12 coppe da bere ogni domenica per la tavola del
            burgravio. Un altro consegnava una brocca d&apos;acqua o 2 secchi
            ogni domenica. Un podere era abbandonato; da esso un bottaio doveva
            cerchiare botti, fusti, brocche e altri recipienti.
          </li>
          <li>
            Častonice, un villaggio intero ben insediato. In esso, tutti erano
            messaggeri per Praga e oltre Praga, in qualsiasi regione e
            ogniqualvolta i signori comandavano. C&apos;era anche un cacciatore
            che per diritto doveva inseguire la selvaggina. (Pi&ugrave; tardi
            trasportavano tutte le provviste per i cani alla loggia di caccia a
            Skalka presso il castello.)
          </li>
          <li>
            Lužn&aacute;. Una magistratura libera con 2 lani e due dipendenti,
            uno macellaio, l&apos;altro fornaio. Ad essa erano annessi un mulino
            libero, una taverna, un giardino di 4 strychy e il prato Hvozdec
            (1348). Da questo, venivano consegnate 4 lepri ogni Natale (nel
            1552, due vassalli che consegnavano ciascuno 2 lepri). Il magistrato
            deteneva anche un lano da guardiaboschi, dal quale doveva servire i
            funzionari come sorvegliante forestale. Inoltre, deteneva mezzo lano
            di terra arabile, per il quale era obbligato a fornire pane ai
            pescatori e ai cacciatori quando lo Stagno Reale sotto il villaggio
            veniva pescato.
            <br />
            Alcuni coloni erano obbligati durante il bramito a separare i cervi
            in calore. In cambio, avevano il diritto di abbattere legname per le
            loro necessit&agrave; in una foresta designata (un bosco di abeti).
            Questo luogo &egrave; ancora chiamato l&apos;Abetaia dei Vassalli.
            La riserva di caccia adiacente porta il nome Radura della
            Selvaggina. Era un prato forestale (piuttosto una radura) dove si
            tagliava il fieno per nutrire la selvaggina in inverno.
          </li>
          <li>
            Hlohovice. In esse c&apos;erano 9 servitori che dovevano essere
            presenti al castello con le balestre ogniqualvolta cos&igrave;
            ordinato, e fare ci&ograve; che i signori comandavano. In
            particolare, sorvegliavano i galli cedroni durante l&apos;esibizione
            primaverile e i cervi durante il bramito autunnale. C&apos;era anche
            un maniero demaniale, con un mulino e una fucina annessi. Il re
            Vladislao nel 1497 conferm&ograve; gli antichi diritti dei vassalli:
            ogniqualvolta sorgeva la necessit&agrave;, dovevano inviare un uomo
            armato al castello. Ovunque cavalcassero o camminassero, non
            pagavano n&eacute; pedaggi n&eacute; dazi di mercato. Dovevano
            essere giudicati solo al tribunale feudale del castello e non
            dovevano mai essere separati da quel castello, poich&eacute; i loro
            antenati si erano volontariamente sottoposti a questo servizio. Nel
            1714, tutti gli obblighi feudali furono commutati al feudo di
            Kv&iacute;tkov con una taverna.
          </li>
          <li>
            Hlohovičky. Un villaggio ben insediato con 11 servitori che dovevano
            essere presenti al castello con le balestre, sorvegliare il castello
            o svolgere altri compiti, cavalcare o marciare ovunque i signori
            comandavano. Non era necessario alcun pagamento per questo,
            poich&eacute; erano obbligati a farlo per diritto. (Commutato dallo
            status feudale nel 1527; vedi Hedčany).
          </li>
          <li>
            Otročíněves: questi vassalli dovevano pagare quattro carrettieri
            (cio&egrave; fornire quattro carri).
          </li>
          <li>
            &Uacute;jezd Panoš&iacute;, un villaggio grande e ben insediato. In
            esso c&apos;erano 17 vassalli (scudieri, da cui il nome del
            villaggio), che dovevano essere presenti al castello con le balestre
            quando cos&igrave; ordinato e fare ci&ograve; che i signori
            comandavano. Non dovevano ricevere nulla oltre alle loro provviste.
            <br />
            Il capitano Oulička testimoni&ograve; nel 1566 che i dipendenti di
            &Uacute;jezd avevano da tempi antichi ricevuto 48 pagnotte di pane e
            8 piccoli grossi settimanalmente, ma il signore Šternberk (1560)
            aveva abolito questa indennit&agrave;.
            <br />
            &Egrave; facile calcolare che originariamente c&apos;erano 16
            vassalli, ciascuno dei quali riceveva 3 pagnotte e mezzo grosso.
            <br />
            Il cancelliere del registro, avendo compilato gli obblighi di
            servizio nel 1552, aggiunse: Ci sono molti altri obblighi di
            servizio, ma i registri sono piuttosto danneggiati e non &egrave;
            stato possibile decifrarli completamente; pertanto questi sono stati
            omessi, sebbene la memoria umana di questi obblighi perduri ancora.
            <br />
            L&apos;inventario si concludeva poi con l&apos;aggiunta: Ci sono
            ancora 5 villaggi che non hanno altro obbligo di servizio che quello
            di fare la guardia al castello. Li conosciamo per nome, e sono:
          </li>
          <li>
            Zavidov. Una taverna libera e un lano di terra arabile, che era
            stato distribuito tra dieci uomini sotto diritto enfiteutico.
          </li>
          <li>
            Hostokryje. Una fattoria contadina con un lano di terra arabile
            (venduta a Přič&iacute;na nel 1481).
          </li>
          <li>Novosedly. Un villaggio intero.</li>
          <li>
            Kalubice. Un villaggio intero; i poderi sono solo piccoli
            appezzamenti e casupole (vedi Skalka). I coloni nel 1550 erano
            governati dai libri enfiteutici, ma qualsiasi cosa fosse ordinata
            dalla signoria, erano obbligati a eseguirla.
          </li>
          <li>
            Pavl&iacute;kov. Una magistratura libera con 3 lani e un maniero
            demaniale con 1 lano. <br />
            Il capitano Albrecht z Vřesovic propose alla Camera di Boemia nel
            1529 che il servizio di portinai e guardiani fosse abolito. Sarebbe
            stato meglio convertire gli obblighi dei vassalli in un pagamento
            regolare, e avrebbero preferito pagare una somma decorosa con cui
            mantenere uomini permanenti e di provata lealt&agrave;. In tempi di
            disordini, il capitano non poteva sapere se coloro che arrivavano
            per il turno di guardia fossero guardiani o traditori.
            <br />
            La proposta di Vřesovec fu in parte attuata da Šternberk e in parte
            solo durante il capitanato di Kapl&iacute;ř (1640). Gli obblighi di
            servizio che il cancelliere non pot&eacute; decifrare dai registri
            danneggiati sono stati trovati altrove:
          </li>
          <li>
            Maniero di Kunšův (sotto Všetaty). Con 1 lano. Il titolare era
            obbligato a inviare una persona idonea per una settimana a
            sorvegliare l&apos;esibizione degli uccelli e vigilare sulla
            selvaggina nelle foreste.
          </li>
          <li>
            Hředle. Una magistratura con tre lani di terra arabile; ad essa
            annessi una taverna autorizzata, un macellaio e un fornaio.
            L&apos;obbligo di servizio non &egrave; noto.
          </li>
          <li>
            Kněževes. Una magistratura con 1 lano e 9 jitra, una taverna libera,
            un macellaio con un banco di carne e un fornaio. Ogni volta che
            sorgeva una necessit&agrave; importante, il magistrato era obbligato
            a tenere un cavallo da sella.
          </li>
          <li>
            Chlum. Il magistrato pagava 3 grossi per i messaggeri inviati
            all&apos;estero.
          </li>
          <li>
            Mlečice. Una magistratura con un lano di terra arabile e 2 piccoli
            possidenti.
          </li>
          <li>
            Sv&iacute;narov. Una magistratura e un maniero demaniale con 2 lani.
          </li>
          <li>
            Myslice. (1383 un mulino, 1543 un maniero, 1610 un traghetto sotto
            il castello di T&yacute;řov.) Il titolare consegnava pesce di fiume
            del valore di 3 grossi ogni venerd&igrave;, teneva un segugio con
            cui cercava la selvaggina e informava gli addetti alle reti e i
            battitori di Broumy dove dovevano riunirsi.
          </li>
          <li>
            Broumy: gli addetti alle reti e i battitori dovevano servire durante
            le cacce.
          </li>
          <li>
            Hudlice, un villaggio intero. Due erano obbligati a servire come
            funzionari o guardiaboschi e a sorvegliare le foreste, che erano
            lunghe 5/4 di miglio e larghe un miglio. Quattordici uomini
            insediati dovevano partecipare alle cacce.
          </li>
          <li>
            Svojet&iacute;n. Un uomo insediato (Hans Porth) era obbligato
            durante le cacce a nutrire i servitori e i cani del signore con
            provviste adeguate.
          </li>
          <li>
            Certe boscaglie sotto lo stagno del castello di N&iacute;zbor, con
            un giardino di luppolo abbandonato e 24 strychy di terra arabile,
            erano una concessione dei re di Boemia (un documento del re Carlo
            del circa 1370).
          </li>
          <li>
            Chýnava. Non pagano nulla; tutti i coloni si limitano a sorvegliare
            le foreste.
          </li>
          <li>
            Bezděkov (Doln&iacute;). Tre uomini insediati servivano come
            funzionari sulle foreste, che erano lunghe e larghe 2 miglia.
          </li>
          <li>
            Vaš&iacute;rov: cinque uomini insediati erano obbligati a servire
            come funzionari forestali e riscuotere le entrate. Sotto il loro
            ufficio le foreste erano lunghe e larghe 2 miglia. Erano inoltre
            obbligati a sorvegliare i falciatori e i lavoranti nel prato
            chiamato &bdquo;Ptýné&ldquo;, per assicurarsi che lavorassero
            correttamente.
          </li>
          <li>
            Rakovn&iacute;k. I borghesi erano obbligati, da tempo immemorabile,
            a fornire uomini e cavalli per le cacce regie e a prestare la
            biancheria da letto per i cortigiani regi al castello.
          </li>
          <li>
            Strašec&iacute;. I coloni partecipavano da tempi antichi alle cacce
            e fornivano i carri necessari per il trasporto di reti e teli.
            Poich&eacute; i tempi e i capitani cambiano, nel 1549 fu redatto un
            documento per questo.
          </li>
          <li>
            Žatec. I borghesi consegnavano mezzo barile di vino da ogni vigneto
            a Křivokl&aacute;t dal 1399. Nel 1611 questo fu cambiato in un
            pagamento annuo di 25 sessanta di grossi.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
