import { Col, Row } from 'reactstrap'
import React from 'react'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'

export const GliUltimiTyrovsky = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="gli-ultimi-tyrovsky" />
        <h4>Gli ultimi Týřovský (1701–1771)</h4>
        <p>
          L&apos;albero genealogico di Kočka termina con la vendita di Chříč e
          la morte di Michal Antonín nel 1705. Le vicende dell&apos;ultima
          generazione della famiglia furono seguite da August Sedláček nella
          voce dell&apos;Ottův slovník naučný, dalla quale prende le mosse
          questo capitolo.
        </p>
        <p>
          La vedova di Vojtěch Ignác, Kateřina Magdalena, tenne negli anni
          1696–1697 Trnová, nel 1703 comprò Malá Chyška e morì il 31 luglio
          1708. Delle figlie, Polyxena Lidmila sposò nel 1710 Václav Popovský di
          Šarfenbach, signore di Oblajovice.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="p. 154"
          />
        </p>
        <p>
          Il maggiore dei tre fratelli, Jan Vilém, tenne Dolní Nerestce e Krsice
          e lasciò un&apos;unica figlia, Josefa Anna; la sua vedova, nata
          Příchovská, si risposò nel 1713. František Pavel ebbe dapprima
          Myskovice e dal 1704 Vlčkovice e Bořetice. Dal 1703 era sposato con
          Anna Markéta Hrobčická, vedova Malovcová di Chýnov, e morì intorno al
          1717 senza figli.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="p. 154"
          />
        </p>
        <p>
          Michal Antonín, al quale nella divisione toccarono Chříč e Kožlany,
          sposò il 1° novembre 1700 Marie Konstancie contessa di Sporck, signora
          di Radenín. Morì già il 14 febbraio 1705 all&apos;età di ventotto
          anni; la vedova si risposò con Karel Josef Voračický di Paběnice e
          morì nel 1735. Dal matrimonio nacquero le figlie Marie Konstancie
          (1701–1722) e Marie Anna (nata nel 1704, sposata nel 1755 con Jan
          František barone di Fünfkirchen) e il postumo Jan Michal.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="p. 154"
          />
        </p>
        <p>
          Jan Michal, ultimo discendente maschio della famiglia, ereditò dallo
          zio František Vlčkovice e nel 1729 comprò Neustupov. Nello stesso anno
          divenne consigliere del tribunale d&apos;appello e poco dopo giudice
          del tribunale del paese; nel 1737 è indicato come{' '}
          <Cit>
            Herr auf Boretic, Neu-Stupov und Vlckovic, kais. Rath,
            Hoflehnrechts-Beisitzer und königl. Hauptmann des Bechiner Kreises
          </Cit>{' '}
          (signore di Bořetice, Neustupov e Vlčkovice, consigliere imperiale,
          assessore del tribunale feudale di corte e capitano regio della
          regione di Bechyně) e nel calendario di sant&apos;Adalberto figura
          ancora nel 1768.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="p. 154"
          />
          <Qt publication={PUBLICATIONS.MERAVIGLIA} note="p. 39–40" />
          Intorno al 1759{' '}
          <Cit>
            upadl v hypochondrickou nemoc, pro kterou byl pod poručenstvím
          </Cit>{' '}
          (cadde in una malattia ipocondriaca, per la quale fu posto sotto
          tutela); le sue tenute furono vendute nello stesso anno. La moglie
          Antonie Josefa contessa di Millesimo morì il 29 novembre 1771.{' '}
          <Cit>Kdy Jan, poslední po meči, zemřel, není známo.</Cit> (Quando Jan,
          l&apos;ultimo della linea maschile, sia morto, non è noto.)
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="p. 154"
          />
        </p>
        <p>
          Il sangue della famiglia continuò però a vivere per linea femminile.
          Kateřina, secondo Sedláček forse sorella di Jan di Chříč, fu sposata a
          Kryštof Jindřich Krakovský di Kolovrat, e Lidmila Týřovská a suo
          nipote Bernart Alexandr Krakovský; entrambe furono, come Sedláček
          scrisse nel 1906, <Cit>prabáby nynějších hrabat z Kolovrat</Cit> (le
          bisnonne degli attuali conti di Kolovrat).
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="p. 154"
          />
        </p>
      </Col>
    </Row>
  </>
)
