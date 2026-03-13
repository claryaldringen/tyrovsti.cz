import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle/ImageWithTitle'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const Copricapo = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="copricapo" />
        <h3>Copricapo{draft && <DraftBadge />}</h3>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Cappuccio</h4>
        <p>
          <i>Kápě</i>,&nbsp;<i>kapicě</i>,&nbsp;<i>kapicze</i> deriva, così come{' '}
          <i>čepice</i> (berretto), dalla parola latino-medievale
          <i> capa</i>,<i> cappa</i>. Era chiamato anche <i>kukla</i> o
          <i> kuklička</i>, che originava dal latino <i>cucalla</i>, e nelle
          fonti scritte viene ulteriormente indicato come <i>capucium</i>,
          <i> chuchla</i>,<i> cucala</i>,<i> capye</i>. Il cappuccio poteva
          essere indossato in vari modi: normalmente sulle spalle, dove poteva
          essere completato da un cappello o da un elmo, oppure poteva essere
          posto sulla testa con l&apos;apertura per il viso rivolta verso
          l&apos;alto, indossato come un berretto. Per la Boemia post-hussita
          possiamo rintracciare tre tipi principali di cappucci: con coda, senza
          coda e a nappe, quest&apos;ultimo popolare anche nei territori
          tedeschi.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Cappuccio con coda</h5>
        <p>
          Questi cappucci erano popolari soprattutto prima delle guerre hussite,
          come si può osservare nel <i>Codice di Gelnhausen</i> (1400-1408) o
          nella
          <i> Bibbia di Olomouc</i> (1417). Dato che una coda più lunga si
          osserva principalmente su individui vestiti lussuosamente, essa poteva
          rappresentare la buona condizione sociale del suo proprietario. Ciò
          corrisponderebbe anche all&apos;evento registrato nella cronaca di
          Vavřinec di Březová, quando i Taboriti tagliarono le lunghe code dei
          cappucci appartenenti ad artigiani e borghesi praghesi, che
          simboleggiavano così l&apos;intemperanza e il lusso da essi
          condannati.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> Parimenti, nel{' '}
          <i>Codice di Jena</i> (1490-1510), un sacerdote è raffigurato con una
          magnifica pelliccia, molti anelli e scarpe con lunghe punte, e indossa
          un cappuccio con una coda lunga e massiccia.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="knez.jpg"
        width={832}
        height={1270}
        title="Un sacerdote con un cappuccio dalla coda massiccia. Estratto dal Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="kape-cip-jk.jpg"
        width={240}
        height={320}
        title="Un cappuccio con coda indossato sulla testa attraverso l'apertura per il viso. Estratto dal Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        md={4}
        src="kape-s-cipem-rt.jpg"
        width={360}
        height={480}
        title="Un cappuccio con coda drappeggiato sulla spalla. Estratto dalla Cronaca di Richental (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Cappuccio senza coda</h5>
        <p>
          Il semplice cappuccio senza coda era il tipo di cappuccio più diffuso
          nella Boemia post-hussita. Poteva essere indossato sotto un elmo o
          insieme a un cappello. Un tale{' '}
          <Cit>kuklu modrou, kterou míval do vojny</Cit> (cappuccio blu, che era
          solito portare in guerra) fu lasciato da Zikmund Jirconis di Poříč nel
          1455.
          <Qt
            publication={PUBLICATIONS.WINTER}
            href="https://kramerius5.nkp.cz/view/uuid:4405cb90-ee14-11dd-bfdc-000d606f5dc6?page=uuid:68f3aba0-fe2a-11e6-97b4-5ef3fc9ae867"
          />{' '}
          Esistono moltissime raffigurazioni di questi cappucci sia da fonti
          ceche che tedesche.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="Jensky_kodex_Zizka.jpg"
        width={640}
        height={921}
        title="Semplici cappucci si possono osservare su Jan Žižka alla testa dell'esercito e sul portabandiera nella raffigurazione del Codice di Jena. Il cappuccio di Jan Žižka è completato da un cappello."
      />
      <ImageWithTitle
        md={3}
        src="kape-rt.jpg"
        width={240}
        height={320}
        title="Un semplice cappuccio indossato sulla testa attraverso l'apertura per il viso in un estratto dalla Cronaca di Richental (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="zasedani1.jpg"
        width={480}
        height={640}
        title="Semplici cappucci neri indossati sulla testa attraverso l'apertura per il viso sono portati da uno dei consiglieri e dallo scrivano nell'estratto dal Libro commemorativo di Olomouc (1430-1492)."
      />
      <ImageWithTitle
        md={3}
        src="richenthal1.jpg"
        width={480}
        height={641}
        title="Due degli uomini armati che conducono Jan Hus al rogo indossano cappucci senza coda sotto i loro elmi di ferro. Il soldato davanti ha un cappuccio molto piccolo, mentre quello dietro ne ha uno con smerlature decorative. Estratto dalla Cronaca di Richental (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Cappuccio a nappe</h5>
        <p>
          Questo tipo era popolare nei territori tedeschi, inclusa la Boemia di
          quell&apos;epoca. Poteva essere indossato anche sotto un elmo, come
          mostrano i disegni e dipinti del celebre pittore Albrecht Dürer
          (1471-1528). Al collo poteva essere allacciato con bottoni per
          ottenere una forma più anatomica. Le sue nappe potevano anche essere
          tagliate in modo decorativo, come si può osservare, ad esempio, nel
          ritratto del maestro di zecca di Kutná Hora Hans Harsdorfer del 1484.
          Vale la pena notare che Albrecht Dürer e Hans Harsdorfer erano amici.
          <Qt publication={PUBLICATIONS.PATALA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="kape2-jensky-kodex.jpg"
        width={240}
        height={320}
        title="Un cappuccio a nappe indossato da un cavaliere leggero. Questi cappucci si incontrano frequentemente nelle raffigurazioni tedesche di cavalieri leggeri. Estratto dal Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        title="Un lussuoso cappuccio con bottoni e nappe tagliate in modo decorativo, indossato sulla testa attraverso l'apertura per il viso. Ritratto di Hans Harsdorfer, Norimberga, 1484."
        src="hans-harsdorffer.jpg"
        width={800}
        height={986}
      />
      <ImageWithTitle
        md={3}
        title="Un cappuccio a nappe indossato sulla testa attraverso l'apertura per il viso nell'autoritratto di Albrecht Dürer del 1498."
        src="durer.jpg"
        width={1920}
        height={2424}
      />
      <ImageWithTitle
        md={3}
        title="Sant'Eustachio indossa un decorativo cappuccio a nappe intorno al collo. Estratto dalla Pala Paumgartner, 1500."
        src="oltar.jpg"
        width={240}
        height={320}
      />
    </Row>
    <Row>
      <Col>
        <h4>Cappello</h4>
        <p>
          <i>Klobúk</i>,<i> klouček</i>,<i> koblúček</i>,<i> kobek</i>,
          <i> kobek</i>,<i> klouček</i>,<i> koláče</i>. Oltre a designare il
          copricapo, il termine indicava anche un elmo. La forma più comune era
          quella in cui la calotta seguiva naturalmente la testa e la tesa era
          piegata o arrotolata verso l&apos;alto. Raffigurazioni di un tale
          cappello si trovano, ad esempio, nell&apos;<i>Antologia di Krumlov</i>{' '}
          (1420)
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> così come 70 anni dopo
          nel <i>Codice di Jena</i> (1490-1510), e confermato archeologicamente
          da un ritrovamento dall&apos;Irlanda.
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> La calotta poteva anche
          essere appiattita, di forma conica o appuntita. Parimenti, la tesa
          poteva essere variamente sagomata: piatta e rotonda, come i cappelli
          contemporanei, arrotolata verso l&apos;alto come menzionato sopra,
          piegata verso l&apos;alto con una o più fessure, oppure completamente
          assente. A differenza dei cappucci, sembra che i cappelli fossero
          spesso foderati con tessuto diverso o pelliccia.
        </p>
        <p>
          Una corporazione autonoma dei cappellai fu istituita nella Città Nuova
          di Praga il <b>2 aprile 1446</b>. Dai loro statuti si può desumere che
          producevano cappelli di pelliccia di castoro e feltro.
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=10&bookid=821&page=453"
          />{' '}
          Dalla conferma degli articoli della corporazione dei cappellai nella
          Città Vecchia l&apos;<b>11 agosto 1489</b>, si apprende che oltre ai
          cappelli di castoro, un maestro doveva essere in grado di produrre un
          cappello di pelo di lepre <Cit>obú stranú vlasitý</Cit> (peloso su
          entrambi i lati), un cappello riccio e, oltre ai cappelli, anche
          feltro da calzolaio e uno stivale, presumibilmente feltrato alla
          maniera dei valenki.
          <Qt
            publication={PUBLICATIONS.ARCHIV14}
            href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=10&bookid=821&page=488"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Cappello con calotta arrotondata e tesa arrotolata</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={2}
        title="Ritrovamento di un cappello dall'Irlanda, datato al XIV-XV secolo."
        src="klobouk-irsko.jpg"
        width={564}
        height={423}
      />
      <ImageWithTitle
        md={2}
        src="klobouk-krumlovsky-sbornik.jpg"
        width={338}
        height={438}
        title="Un cappello con calotta arrotondata e tesa arrotolata nell'Antologia di Krumlov, intorno al 1420."
      />
      <ImageWithTitle
        md={2}
        src="Jensky_kodex_Zizka.jpg"
        width={640}
        height={920}
        title="Un cappello con calotta arrotondata e tesa arrotolata sulla testa di Jan Žižka, Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        md={2}
        title="Un cappello con calotta arrotondata e tesa arrotolata. Estratto dalla Cronaca di Richental (1470-1480)."
        src="klobouk-richental.jpg"
        width={240}
        height={320}
      />
      <ImageWithTitle
        md={2}
        title="Un cappello con calotta arrotondata e tesa arrotolata, foderato di pelliccia. Estratto dal Libro giuridico di Brno di Václav di Jihlava (1446)."
        src="vaclav-z-jihlavy.jpg"
        width={240}
        height={320}
      />

      <ImageWithTitle
        md={2}
        title="Riunione del consiglio cittadino raffigurata nell'iniziale del Libro giuridico di Brno di Václav di Jihlava (1446). Sulle teste dei consiglieri si possono vedere cappelli con calotta sia arrotondata che piatta, foderati di pelliccia."
        src="Zasedani.jpg"
        width={399}
        height={356}
      />
    </Row>
    <Row>
      <Col>
        <h5>Cappello con tesa rialzata senza fessure</h5>
        <p>
          La maggior parte di questi cappelli ha una calotta piatta
          nell&apos;iconografia, sebbene si possano trovare eccezioni, come
          quello nel Codice di Jena, vedi immagine sotto.
        </p>
      </Col>
    </Row>
    <Row className="row">
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-richental2.jpg"
        width={240}
        height={320}
        title="Un cappello con calotta piatta e tesa rialzata senza fessure, estratto dalla Cronaca di Richental (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-jensky-kodex.jpg"
        width={240}
        height={320}
        title="Un cappello con calotta arrotondata e tesa rialzata senza fessure, estratto dal Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-richental.jpg"
        width={240}
        height={320}
        title="Cappelli con calotta piatta e tesa rialzata senza fessure, foderati di pelliccia, estratto dalla Cronaca di Richental (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-jensky-kodex3.jpg"
        width={240}
        height={320}
        title="Un cappello con calotta piatta e tesa rialzata, foderato di pelliccia, estratto dal Codice di Jena (1490-1510)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Cappello con tesa rialzata con fessure</h5>
        <p>
          Vale la pena notare che anche quando un cappello ha una sola fessura,
          questa non si trova mai al centro della fronte, bensì sul lato della
          testa.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="rovny-klobouk-jensky-kodex2.jpg"
        width={240}
        height={319}
        title="Cappelli foderati di pelliccia con tesa rialzata e una singola fessura in un estratto dal Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="klobouk-2-jensky.jpg"
        width={239}
        height={320}
        title="Un cappello con tesa rialzata e due fessure in un estratto dal Codice di Jena (1490-1510)."
      />
      <ImageWithTitle
        md={3}
        src="klobouk-2-richental.jpg"
        width={240}
        height={320}
        title="Un cappello con tesa rialzata e due fessure in un estratto dalla Cronaca di Richental (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        src="klobouk-3-richental.jpg"
        width={240}
        height={320}
        title="Un cappello con tesa rialzata e molteplici fessure in un estratto dalla Cronaca di Richental (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <h5>Altri tipi di cappelli</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        src="klobouk-a-rt.jpg"
        width={240}
        height={320}
        title="Un cappello con tesa leggermente abbassata, un gioiello e un ornamento a piuma in un estratto dalla Cronaca di Richental (1470-1480)."
      />
      <ImageWithTitle
        md={3}
        title="Un cappello con tesa leggermente rialzata in un estratto dal Codice di Jena (1490-1510)."
        src="klobouk-b-jk.jpg"
        width={360}
        height={480}
      />

      <ImageWithTitle
        md={3}
        src="klobouk-bez-dynka-jk.jpg"
        width={360}
        height={480}
        title="Un cappello senza tesa in un estratto dal Codice di Jena (1490-1510)."
      />

      <ImageWithTitle
        md={3}
        title="Un cappello con calotta piatta e sezione posteriore della tesa rialzata, decorato con un nastro. Estratto dalla Cronaca di Richental (1470-1480)."
        src="klobouk-c-rt.jpg"
        width={240}
        height={320}
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        title="Un cappello con calotta piatta e sezione anteriore della tesa rialzata, tenuta in posizione da un nastro. Tali cappelli appaiono molto frequentemente nelle raffigurazioni di San Giacomo, dove sono inoltre decorati con una conchiglia di San Giacomo. Estratto dalla Cronaca di Richental (1470-1480)."
        src="klobouk-d-rt.jpg"
        width={239}
        height={320}
      />
      <ImageWithTitle
        md={4}
        title="Un cappello con calotta piatta e tesa piatta in un estratto dal Libro commemorativo di Olomouc (1430)."
        src="klobouk-e-opk.jpg"
        width={240}
        height={320}
      />
      <ImageWithTitle
        md={4}
        title="Un cappello in un estratto dalla Cronaca di Richental (1470-1480)."
        src="klobouk-f-rt.jpg"
        width={240}
        height={320}
      />
    </Row>
    <Row>
      <Col>
        <h4>Berretti</h4>
        <p>
          Uno dei tipi più comuni di copricapo era il berretto, che costituiva
          circa un quarto di tutti i copricapi
          <Qt publication={PUBLICATIONS.FEYFRLIKOVA} /> ed è probabilmente
          nascosto sotto il nome d&apos;epoca <i>čepice</i> (berretto).
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={3}
        title="Un uomo con un berretto rosso in un estratto dalla Pala d'altare di Zátoň (dopo il 1440)."
        src="baret-zaton.jpg"
        width={1440}
        height={1920}
      />
      <ImageWithTitle
        md={3}
        title="Un uomo con un berretto rosso in un estratto dal Codice di Jena (1490-1510)."
        src="kape-jensky-kodex.jpg"
        width={240}
        height={320}
      />
      <ImageWithTitle
        md={3}
        title="Un mercante con un berretto in un estratto dal Codice di Jena (1490-1510)."
        src="baret-jk.jpg"
        width={480}
        height={640}
      />
      <ImageWithTitle
        md={3}
        title="Due uomini con berretti in un estratto dalla Cronaca di Richental (1470-1480)."
        src="baret-rt.jpg"
        width={481}
        height={640}
      />
    </Row>
  </>
)
