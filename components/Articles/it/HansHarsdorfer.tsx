import { Col, Row } from 'reactstrap'
import React from 'react'
import { PUBLICATIONS } from '../../../shared/constants'
import { Qt } from '../../Quote/Qt'
import { ImageWithTitle } from '../../ImageWithTitle'

export const HansHarsdorfer = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="hans-harsdorfer" />
        <h4>Hans (II) Harsdorfer (ca. 1450–1511)</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Hans Harsdorfer proveniva dalla famiglia patrizia norimberghese degli
          Harsdorfer, le cui origini risalgono al 1377, quando due fratelli,
          Heinrich e Friedrich Harsdorfer, si trasferirono dalle loro tenute a
          Norimberga, dove ottennero la cittadinanza e iniziarono a dedicarsi
          al commercio nel settore minerario e metallurgico. Divennero così
          cosiddetti borghesi armoriali, tanto più notevoli per aver portato con
          sé il loro stemma in città. Questo stemma, che raffigura una torre
          d&apos;argento su una collina a tre cime su campo rosso, sarebbe
          stato loro concesso già nel 1203 dal re dei Romani Filippo di Svevia,
          quando gli antenati della famiglia si distinsero durante la campagna
          di Filippo in Italia, dove conquistarono una torre sulla cima di una
          collina.
          <Qt publication={PUBLICATIONS.VONHARSDORF} />
        </p>
        <p>
          Il padre di Hans, Anton Harsdorfer, sposò Barbara Fritz, borghese di
          Plzeň, con la quale ebbe due figli, Hans e Kateřina. Anton acquistò
          la tenuta di Malesice, che era stata alienata dal monastero di
          Kladruby durante le guerre hussite. Anton Harsdorfer morì il{' '}
          <b>12 marzo 1462</b> e fu sepolto nella Cattedrale di San Bartolomeo
          a Plzeň. Malesice fu ereditata dai suoi due figli, con Kateřina che
          vendette la sua parte al fratello Hans il 30 marzo 1474 per 1.000
          fiorini.
          <Qt
            publication={PUBLICATIONS.ENCYKLOPEDIEPLZEN}
            href="https://encyklopedie.plzen.eu/home-mup/?acc=profil_osobnosti&load=4600"
          />
        </p>
      </Col>
      <ImageWithTitle
        src="wappen_4.png"
        width={550}
        height={432}
        title="Stemma della famiglia secondo J. A. Siebmacher (1605)"
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="hans-harsdorffer.jpg"
        width={800}
        height={986}
        title="Ritratto di Hans Harsdorfer, probabilmente di Michael Wolgemut, 1484"
      />
      <Col>
        <p>
          Hans Harsdorfer nacque tra il 1450{' '}
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          e il 1460{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          a Malesice o a Plzeň. Come già menzionato, nel 1474 divenne unico
          proprietario di Malesice, con il cui nome si faceva anche chiamare.
          L&apos;<b>11 settembre 1481</b> sposò Margareta, della famiglia
          patrizia armoriale norimberghese dei Nützel. Fu imprenditore minerario
          e metallurgico dell&apos;azienda di famiglia, attiva dal 1460.
          Inizialmente commerciava solo in minerali importati dalle miniere
          boeme. I contatti diplomatici con il re di Boemia Vladislao II
          Jagellone, a seguito delle rivolte dei minatori di Kutná Hora e della
          scoperta di frodi finanziarie alla zecca nel 1496, gli valsero la
          carica di Maestro Supremo della Zecca e la partecipazione alla Dieta
          di Praga del 1497.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />
        </p>
        <p>
          Fece arredare sontuosamente la Cappella dei Santi Venceslao e
          Ladislao nella Corte Italiana, compresi tre pale d&apos;altare
          riccamente decorate, che a quanto pare commissionò direttamente a una
          bottega pittorica di Norimberga. La cappella fu (ri)consacrata il{' '}
          <b>20 luglio 1497</b> in occasione della visita del re Vladislao II.
          <Qt publication={PUBLICATIONS.VONHARSDORF} /> Durante il suo periodo
          a Kutná Hora fece anche ricostruire a caro prezzo la casa del Maestro
          della Zecca e acquisì lussuose bilance da orafo custodite in un
          cofanetto decorato, il cui coperchio esterno raffigura una battaglia
          di uomini selvaggi e il lato interno mostra due uomini armati che
          reggono gli stemmi suoi e di sua moglie Margareta.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          Lui e sua moglie donarono inoltre alla cappella una casula ornata con
          ricami raffiguranti scene della Vita della Vergine e dell&apos;Infanzia
          di Cristo. Durante l&apos;epoca barocca, i ricami furono ritagliati,
          cuciti su un nuovo supporto e incorniciati in oro.
          <Qt
            publication={PUBLICATIONS.CMSKH}
            href="https://www.cms-kh.cz/textil-a-odevy"
          />{' '}
          Nel 1499 chiese al re di essere esonerato dal suo incarico per
          dedicarsi interamente agli affari, poiché dopo la morte dello zio
          Endres Harsdörffer aveva ereditato i suoi feudi e le sue tenute, il
          castello di Eschenbach, una fonderia di rame e un maglio a Enzendorf
          (oggi parte di Hartenstein nella Bassa Franconia).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          Vladislao accolse la richiesta e in un documento del novembre 1499 gli
          garantì la protezione di tutti i suoi beni nel territorio della Corona
          di Boemia.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="oltar_kaple_ceskych_kralu.jpg"
        width={1706}
        height={1280}
        title="Pala d'altare sinistra nella Cappella dei Santi Venceslao e Ladislao – la Vergine Maria tra gli Apostoli"
      />
      <ImageWithTitle
        src="kh_kaple.jpg"
        width={640}
        height={480}
        title="Pala d'altare destra nella Cappella dei Santi Venceslao e Ladislao"
      />
      <ImageWithTitle
        src="goldwage.jpg"
        width={550}
        height={394}
        title="Bilancia da orafo di Hans Harsdorfer"
      />
      <ImageWithTitle
        src="mincmistruvdum.jpeg"
        width={600}
        height={800}
        title="La casa del Maestro della Zecca nel complesso della Corte Italiana a Kutná Hora"
      />
    </Row>
    <Row>
      <Col>
        <p>
          Così Hans Harsdorfer lasciò Kutná Hora il <b>5 aprile 1499</b>,
          <Qt publication={PUBLICATIONS.VONHARSDORF} /> si trasferì a
          Norimberga e nel 1501 entrò nel consiglio cittadino (nel quale
          servivano ereditariamente membri delle famiglie del suocero Nützel e
          del cognato Stromer), e nel 1505 fu eletto borgomastro anziano.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />
          Tuttavia, non perse mai di vista i suoi interessi in Boemia. Nel 1502
          procurò quattro obici per Petr di Rožmberk, e in una causa a
          Norimberga nel marzo 1512 si menziona che aveva fatto fabbricare
          armature per Jan di Valdštejn per cinquanta fanti e venti cavalieri,
          il che costituiva una commissione militare considerevole. Per Plzeň
          lavorò come esperto finanziario e, tra le altre cose, consigliò come
          gestire le finanze dopo l&apos;incendio della città nel 1507.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          Il consiglio cittadino lo inviò in missioni diplomatiche presso il re
          Vladislao,{' '}
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          per il quale acquistò un dipinto della Madonna di Albrecht Dürer per
          45 fiorini e lo consegnò al re nel 1504 come dono ufficiale della
          città di Norimberga. Sembra che fosse legato a Dürer da
          un&apos;amicizia personale, poiché Dürer nella sua lettera del{' '}
          <b>7 febbraio 1506</b> lo fece salutare calorosamente come suo amico.
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          Nella Guerra di successione di Landshut divenne uno dei tre
          comandanti sul campo di Norimberga. Morì senza eredi il{' '}
          <b>14 gennaio 1511</b> a Norimberga
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jan_Horstoffar#%C5%BDivot_a_kari%C3%A9ra"
          />{' '}
          e, conforme al suo desiderio, fu sepolto a Plzeň, nella Cattedrale di
          San Bartolomeo.{' '}
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />
        </p>
        <p>
          Oltre alle opere sopra menzionate, Hans Harsdorfer fu il promotore
          della creazione di altre opere d&apos;arte, come la cosiddetta Arca
          di Rábí, una pala d&apos;altare che secondo alcune fonti era destinata
          direttamente come dono per Půta Švihovský di Rýzmberk
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />{' '}
          e secondo altre fu originariamente realizzata per la Chiesa di San
          Giorgio a Malesice insieme a un ostensorio.
          <Qt
            publication={PUBLICATIONS.ENCYKLOPEDIEPLZEN}
            href="https://encyklopedie.plzen.eu/home-mup/?acc=profil_osobnosti&load=4601"
          />
          Acquistò inoltre oggetti liturgici e tessili per la cappella di
          Aquisgrana, dove il re di Boemia deteneva il diritto di patronato, e
          grazie alla sua mediazione l&apos;artista di corte reale, l&apos;intagliatore
          Hanuš (probabilmente membro della bottega Spiess, Hans Scholler di
          Norimberga), ricevette una somma considerevole di denaro, che
          apparentemente servì a pagare la magnifica pala d&apos;altare per la
          cappella del castello di Křivoklát — la commissione più
          rappresentativa che Vladislao II Jagellone avesse fatto realizzare in
          Boemia nei primi anni del suo regno.
          <Qt
            publication={PUBLICATIONS.NOVINKY}
            href="https://www.novinky.cz/clanek/kultura-triumfalni-navrat-kralovskeho-mincmistra-do-kutne-hory-155480"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={8}
        src="rabska-archa.jpg"
        width={1744}
        height={1200}
        title="Pala d'altare di San Giorgio dalla chiesa del castello della Santissima Trinità a Rábí, la cosiddetta Arca di Rábí"
      />
      <ImageWithTitle
        src="oltar-krivoklat.jpg"
        width={1600}
        height={2400}
        title="La pala d'altare di Křivoklát, 1480–1490"
      />
    </Row>
  </>
)
