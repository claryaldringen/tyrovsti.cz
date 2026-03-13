import { Col, Row } from 'reactstrap'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const OrdinanzaCarriNorimberga = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="ordinanza-dei-carri-di-norimberga" />
        <h4>
          Ordinanza dei carri di Norimberga del 1450{draft && <DraftBadge />}
        </h4>
        <p>Traduzione di PhDr. Zdeňka Kopková.</p>
        <p>
          Fu stampata in <i>Chroniken der deutschen Städte</i>, Nürnberg, II,
          alle pagine da 252 a 254. Vi si menziona la spedizione contro Spalt,
          che si concluse nel giugno 1450.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <b>Von dem zeug der wagenburg.</b>
        <ol>
          <li>
            Item darnach steht geschrieben, was man wägen und karren mitgenommen
            hat, die zu der wagenburg gehören, wenn man ausgezogen ist.
          </li>
          <li>
            Item man hat zu dem ersten mitgenommen 2 wagenpüchsen, die
            Widersteinin genannt, darzu 50 stein, die hat man geladen auf 3
            wägen, und{' '}
            <span className="note" title="In the original tamsail">
              darmseil
            </span>{' '}
            darzu; und an die zween püchsenwägen 16 pferd, und an ein jeden
            steinwagen 4 pferd.
          </li>
          <li>
            Item mer hat mitgenommen 3 wägen, darauf da lagen 3 püchsen mit
            einem kreuz, und auf jedlichem wagen 15 stein; an jedlichem wagen 4
            pferd.
          </li>
          <li>
            Item mer hat mitgenommen 2 karrenpüchsen mit zweien kreuzen, an
            einem karren 3 pferd, und zu jedlicher püchsen 25 stein, die soll
            man besunder legen auf einen wagen und 3 pferd daran.
          </li>
          <li>
            Item mer hat mitgenommen 7 karrenpüchsen mit einem kreuz, und an ein
            jedlichem karren pferd, und zu jedlicher püchsen 25 stein, die soll
            man besunder legen auf ein wagen und 4 pferd daran.
          </li>
          <li>
            Item mer hat mitgeführt 2 schermpüchsen auf karren, zu jedli- chem
            karren 20 pleikugeln, gezeichnet mit zwei strolen, die kugeln in
            ihrem trüchlein; an jedem karren 3 pferd.
          </li>
          <li>
            Item mer 4 karren mit pleipüchsen, die schiessen pleikugeln als die
            taubeneier; an jedlichem karren 2 pferd.
          </li>
          <li>
            Item wer aber, dass man her reisen wollt mit brennen oder feld zu
            slahen, so hat man nit als viel zeugs genommen als vor; sunder der
            püchsen soll man dester minner mit nehmen, ob es an ein treffen
            gieng, als vor <i>Spalt</i>, aber der stein hat man am halbteil
            genug.
          </li>
          <li>
            Item zum ersten hat man mitgenommen 2 wägen mit pulver und hauspfeil
            und feuerpfeil und feuerkugeln, an einem wagen 4 pferd.
          </li>
          <li>Item ein wagen mit pafesen und daran 4 pferd.</li>
          <li>
            Item zween wagen mit leitern, lang und kurz, bei 7, und an eim wagen
            4 pferd.
          </li>
          <li>Item zwei wägen mit mauerbanken, an einem wagen 4 pferd.</li>
          <li>
            Item man hat auch einem jedlichen geschrieben wagen geben ein ketten
            bei 1½ kloftern lang, ob man wollt ein wagenburg schliessen; und die
            ketten beschreib man, wenn man sie leiht, dass man sie wiss an ihm
            zu fordern.
          </li>
          <li>
            Item man hat auch einem jedlichen viertelmeister hie heim ge- sendt
            von der stadt zeug 25 spiess und 25 helmparten, dass sie die ihren
            hauptleuten antworteten oder liehen, ob man auszug, dass einer eim
            ein wehr liehe, der keine hätt oder gehaben möcht, als vor
            geschrieben ist.
          </li>
          <li>
            Item mer was bestellt zu einem jeden wagen ein grosse plahen, und
            wenn man auszohe, dass man die mitführet, ob sein not geschehe, dass
            man darein lüde.
          </li>
          <li>
            Item mer hat man bestellt zu jedem wagen, der an dem sold war, ein
            grosse lagelen; und wenn man auszohe, so musst sie der wagen- mann
            füllen mit wasser und auf den wagen legen, wann der wein was gar
            teuer; auch was bei einem jeden wagen ein haue und ein schaufel.
          </li>
          <li>Item dieselben wägen sammten sich am markt und den bott auf</li>
          <li>
            Item mer hätt bestellt bretter, und wenn man auszoch, so mussten sie
            die bretter an die wägen hängen, und welcher sie nicht anhieng, dem
            gab man dieselben wochen kein sold.
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <b>Sull&apos;equipaggiamento del forte dei carri.</b>
        <ol>
          <li>
            Qui di seguito è scritto quali carri e carretti furono portati
            appresso, appartenenti al forte dei carri, quando ci mettemmo in
            marcia.
          </li>
          <li>
            Innanzitutto, portammo con noi 2 cannoni su carro chiamati{' '}
            <i>Widersteinin</i>, più 50 pietre, le quali furono caricate su tre
            carri, e fune di budello per accompagnarli; e per entrambi i carri
            dei cannoni 16 cavalli, e per ciascun carro di pietre quattro
            cavalli.
          </li>
          <li>
            Inoltre, portammo con noi tre carri sui quali giacevano tre cannoni
            con una croce, e su ciascun carro 15 pietre; per ciascun carro 4
            cavalli.
          </li>
          <li>
            Inoltre, portammo due cannoni a camera su carretti con due croci,
            per ciascun carretto 3 cavalli, e per ciascun cannone 25 pietre, le
            quali devono essere caricate separatamente su un carro, e 3 cavalli
            per esso.
          </li>
          <li>
            Inoltre, portammo sette cannoni a camera su carretti con una croce,
            e per ciascun carretto un cavallo, e per ciascun cannone 25 pietre,
            le quali devono essere caricate separatamente su un carro, e 4
            cavalli per esso.
          </li>
          <li>
            Inoltre, portammo con noi due cannoni a scudo su carretti, per
            ciascun carretto 20 palle di piombo, contrassegnate con due frecce;
            le palle nella loro cassettina; per ciascun carretto tre cavalli.
          </li>
          <li>
            Inoltre, 4 carretti con cannoni a piombo che sparano palle di piombo
            delle dimensioni di uova di piccione; per ciascun carretto due
            cavalli.
          </li>
          <li>
            Tuttavia, se si desiderava procedere per saccheggiare o dare
            battaglia in campo aperto, non si portava tanto equipaggiamento
            quanto prima; piuttosto, si dovevano portare meno cannoni, nel caso
            si giungesse a uno scontro come davanti a Spalt, ma la metà delle
            pietre è sufficiente.
          </li>
          <li>
            Innanzitutto, portammo con noi due carri con polvere, dardi da
            balestra, frecce incendiarie e palle di fuoco, per ciascun carro
            quattro cavalli.
          </li>
          <li>Un carro con pavesi e quattro cavalli per esso.</li>
          <li>
            Due carri con scale, lunghe e corte, circa 7, e per ciascun carro
            quattro cavalli.
          </li>
          <li>
            Due carri con sponde laterali in legno pieno, per ciascun carro
            quattro cavalli.
          </li>
          <li>
            A ciascun carro registrato fu inoltre consegnata una catena lunga
            circa 1&frac12; tese (circa 2,6 m), nel caso si desiderasse chiudere
            il forte dei carri; e le catene venivano registrate al momento del
            prestito, cosicché si sapesse da chi reclamarle.
          </li>
          <li>
            A ciascun quartiermastro furono inoltre inviate dalla città 25 lance
            e 25 alabarde, le quali dovevano essere consegnate o prestate ai
            loro capitani al momento della marcia, cosicché un uomo potesse
            prestare un&apos;arma a un altro che non ne avesse o non potesse
            procurarsene una, come scritto sopra.
          </li>
          <li>
            Inoltre, per ciascun carro fu ordinato un grande telone, da portare
            appresso durante la marcia, in caso di necessità, per caricarvi
            merci.
          </li>
          <li>
            Inoltre, per ciascun carro che era a soldo fu ordinata una grande
            botte; e durante la marcia, il conducente del carro doveva riempirla
            d&apos;acqua e collocarla sul carro, poiché il vino era molto
            costoso; inoltre, ciascun carro era dotato di una zappa e di una
            pala.
          </li>
          <li>
            Questi stessi carri si radunavano al mercato e venivano comandati
            (non sappiamo da chi, il nome è mancante).
          </li>
          <li>
            Inoltre, furono ordinate assi, e durante la marcia dovevano
            appendere le assi ai carri, e chiunque non le appendesse non
            riceveva paga per quella settimana.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
