import { Col, Row } from 'reactstrap'
import { ImageWithTitle } from '../../../ImageWithTitle'
import React from 'react'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const EnricoDiEinsiedl = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="enrico-di-einsiedl" />
        <h4>
          Jindřich (Enrico) Týřovský di Einsiedl (c. 1466–1556)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Jobst morì nel 1474, ma il suo ultimo testamento non poté essere
          iscritto nelle tavole del paese perché fu sigillato solo dopo la sua
          morte. Il figlio superstite Jindřich (Enrico), che firmava sempre solo
          come Henrich, non era ancora maggiorenne, e così rimase sotto la
          tutela di Litvín di Klinštejn, consigliere del tribunale camerale, che
          ancora nel 1491 scriveva il suo nome con Týřov. Dal 1494, Jindřich
          stesso concedeva già il permesso per la vendita di possedimenti
          feudali a Mlečice. Nota: i vassalli con obblighi lavorativi a Mlečice
          e Zavidov erano sempre tenuti a servire Křivoklát, ma come sudditi
          della tenuta di Týřov potevano vendere le loro proprietà solo con il
          consenso del loro signore — il detentore di Týřov.
        </p>
        <p>
          Nel 1500, il tribunale camerale esaminò una disputa tra Jindřich e Jan
          di Gutštejn riguardo all&apos;estrazione mineraria, alla quale il
          fonditore di Gutštejn, Ota, avrebbe avuto diritto.
        </p>
        <p>
          Jindřich fu un eccellente amministratore. In breve tempo, acquistò
          poderi a Nezabudice e Panošín Újezd, i villaggi di Hřebečníky, Skryje,
          Tytry e Novosedly, e costruì il podere di Myslice. A Kožlany, restaurò
          la chiesa, che era in rovina fin dalle guerre hussite, e comprò due
          fattorie contadine abbandonate con rendite ivi situate, che per molti
          anni erano appartenute a Krakovec, da Jindřich Albrecht di Kolovrat.
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:2aeaba53-5238-4dde-bdff-90260eb8a2d2"
          />{' '}
          Nel 1503, comprò il terreno abbandonato di Sadlno e la tenuta di
          Slabce, alla quale era legato anche un obbligo feudale verso
          Křivoklát, e Jindřich doveva quindi, in caso di bisogno,{' '}
          <Cit>sám druhý na hrad přijeti ve všem holým železe.</Cit>{' '}
          (presentarsi al castello con un compagno, in armatura completa.)
        </p>
        <p>
          Durante la guerra del 1505 condotta contro i signori Šlik, schierò 4
          uomini e 1 carro. Quell&apos;anno, Ambrož Chodaur di Loket citò anche
          Jindřich in giudizio, avendo pagato Jindřich per del grano che non era
          stato successivamente consegnato. Nel 1509, fu tra i nobili boemi in
          attesa a Brno dell&apos;arrivo del re Vladislao da Trnava, ma presto
          se ne andarono di nuovo perché il re continuava a non arrivare.
          Jindřich poi nel 1513 risolse davanti al tribunale camerale una
          disputa del suo servitore Rovný di Zavidov con Jindřich Tuchorský di
          Tuchořice.
        </p>
        <p>
          Il Gran Cancelliere del Regno di Boemia, Adam di Hradec, ottenne dal
          re Luigi nel 1524 il permesso di riscattare Týřov con tutte le sue
          pertinenze. Ogni volta che Adam avesse depositato la somma di
          riscatto, Jindřich era tenuto a consegnare immediatamente la tenuta.
          Jindřich, che produsse un documento del re Giorgio attestante che non
          poteva essere riscattato da nessuno durante la sua vita, non cedette
          il castello, e poiché Adam morì nel 1531 e Jindřich gli sopravvisse,
          la registrazione decadde. Nel 1525, Jindřich Týřovský fu convocato al
          tribunale camerale da Jan Pečkovský di Pečkovice per non aver
          testimoniato presso un altro tribunale.
        </p>
        <p>
          Nel frattempo, una grave calamità colpì Jindřich. Con la moglie
          Kateřina Řesanská di Kadov, ebbe 4 figli, ovvero Jan, Albrecht, Jobst
          e Jiřík. L&apos;ultimo di questi partecipò alla campagna contro i
          turchi e nel 1526 fu catturato nella battaglia di Mohács. Il padre,
          che desiderava riscattarlo, dovette impegnare Týřov nel 1528 a Jáchym
          di Malcany, al quale i cittadini di Plzeň inviarono una lettera nel
          1530.
        </p>
        <p>
          Lorenc Šlik approfittò della difficoltà di Jindřich e ottenne dal re
          Ferdinando il permesso di riscattare la tenuta di Týřov. Tuttavia, ciò
          poteva avvenire solo previo accordo con Jindřich, il quale invocò
          nuovamente il documento del re Giorgio, non acconsentì, prese in
          prestito 375 sexagene di grossi da Petr Cíl di Svojšice, 350 sexagene
          di grossi da Zikmund Beřkovský di Šebířov e 230 sexagene di grossi da
          Slavibor di Všechlapy, e nel 1532 riscattò Týřov.
        </p>
        <p>
          Dalle suddette somme, risulta che Týřov era impegnato per 1000
          sexagene di grossi. Quando Jindřich non poté soddisfare i suoi
          creditori, vendette il villaggio di Novosedly, il podere di Nezabudice
          e i poderi di Panošín Újezd, e in aggiunta impegnò il podere di
          Kouřimec, i villaggi di Mlečice, Hřebečníky, Skryje e Tytry.
        </p>
        <p>
          Zikmund Beřkovský convocò Jindřich in tribunale per il debito già nel
          1531, ma Jindřich ignorò tre citazioni, cosicché fu emesso un mandato
          di cattura nei suoi confronti e Beřkovský sequestrò le proprietà di
          Jindřich — 2 fattorie contadine a Kožlany e uno stagno sopra la città,
          che intendeva prosciugare. Jindřich, tuttavia, lo prevenne e lo
          prosciugò egli stesso.
        </p>
        <p>
          Dopo il ritorno di Jiřík in Boemia, gli stati boemi intercedettero
          presso il re affinché il servizio di Jiřík fosse retribuito.
        </p>
        <p>
          Notevoli difficoltà furono causate a Jindřich dai suoi figli
          indisciplinati, che comparivano costantemente in tribunale per risse.
          Albrecht e Jiřík giunsero nel 1536 alla locanda di Jiřík Čapek a
          Rakovník, dove trovarono Jiřík di Bobrovice, signore di Děkov. Quando
          Bobrovice stava parlando sulla galleria con il locandiere, Albrecht si
          tolse la veste, afferrò una spada e pugnalò Bobrovice nel fianco. Il
          locandiere rimproverò Albrecht e questi si fermò. Poi Petr Krašovský e
          Jiřík Týřovský pugnalarono Bobrovice con coltelli da caccia nel fianco
          e volevano assassinarlo. Bobrovice fu così gravemente ferito che non
          poté neppure scendere le scale.
        </p>
        <p>
          Albrecht, Jiřík e Jobst uccisero senza motivo nel 1542 a Plzeň Petr
          Chlumčanský; Jiřík nel 1544 ferì Václav di Martinice sulla strada; lo
          stesso Jiřík nel 1548 parlò dal barbiere di Bořivoj Pešík di Komárov,
          chiamandolo arcibugiardo, e a un banchetto a Liblín nel 1555 insultò
          Bohuslav Zvíkovský, chiamandolo arcibugiardo. Durante il litigio,
          Jiřík si scagliò contro Bohuslav con una spada e voleva combatterlo.
          Albrecht nel 1554 si scontrò a Hřebečníky con Jan di Lobkovice, che
          per legittima difesa sparò ad Albrecht attraverso entrambe le gambe.
        </p>
        <p>
          Anche il padre Jindřich ebbe a che fare con i tribunali. Nel 1536,
          Erhart Kfelíř lo citò per danni di 100 sexagene di grossi, perché i
          suoi (di Jindřich) uomini avrebbero attraversato le foreste con armi
          da fuoco e abbattuto selvaggina nei dintorni di Týřov. Nel 1544,
          Mikuláš Pešík di Komárov citò Jindřich per 3 reti per animali e un
          cavallo dal manto color tasso, che aveva preso in prestito dal defunto
          fratello di Mikuláš, Jan, e non restituito. È interessante notare che
          Mikuláš e Jindřich erano imparentati in qualche modo.
        </p>
        <p>
          Quando Lorenc Šlik vide che non avrebbe sopravvissuto a Jindřich e non
          avrebbe vissuto abbastanza per ottenere la tenuta di Týřov, nel 1545,
          con il permesso del re, trasferì il suo diritto su Týřov a Václav
          Mašťovský di Strojetice, che rinunciò immediatamente a tutti i diritti
          di caccia, e in cambio il re gli accreditò 100 sexagene di grossi
          sulla somma di Týřov e gli permise di abbattere alberi nelle foreste
          solo per le necessità del castello e gli concesse il diritto di
          richiedere annualmente al capitano di Křivoklát 2 cervi, 4 caprioli e
          2 cinghiali, ma poteva cacciare liberamente la piccola selvaggina. Il
          pegno di Týřov fu concordato per la durata della vita di Mašťovský e
          dei suoi figli.
        </p>
        <p>
          Nel 1554, Mašťovský ottenne dal re e dagli stati boemi che ulteriori
          100 sexagene di grossi fossero accreditate alla somma iniziale, e Jan
          il Vecchio di Lobkovice di Zbiroh ottenne il permesso di acquistare il
          villaggio di Mlečice, che deteneva in pegno, come proprietà
          ereditaria.
        </p>
        <p>
          Jindřich fu capitano regionale nel 1546; nel 1545 vendette Slabce con
          Sadlno e nel 1555 il podere di Myslice. Dopo aver diviso la sua
          proprietà tra i figli, nel 1556 si trasferì a Jince, che apparteneva a
          Mikuláš Pešík di Komárov, dove il 19 febbraio 1556 morì ed è sepolto
          nella locale chiesa di San Nicola.
          <Qt publication={PUBLICATIONS.KOCKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={{ size: 6, offset: 3 }}
        src="nahrobek.jpg"
        width={1062}
        height={1920}
        title="Lapide di Jindřich Týřovský nella chiesa di San Nicola a Jince."
      />
    </Row>
  </>
)
