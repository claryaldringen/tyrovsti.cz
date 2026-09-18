import { Col, Row } from 'reactstrap'
import React from 'react'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'

export const KonecRodu = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="konec-rodu" />
        <h4>Poslední Týřovští (1701–1771)</h4>
        <p>
          Kočkův rodokmen končí prodejem Chříče a smrtí Michala Antonína roku
          1705. Osudy poslední generace rodu sledoval August Sedláček v hesle
          Ottova slovníku naučného, z něhož vychází tato kapitola.
        </p>
        <p>
          Vdova po Vojtěchu Ignácovi, Kateřina Magdalena, držela v letech 1696
          až 1697 Trnovou, roku 1703 koupila Malou Chyšku a zemřela 31. července
          1708. Z dcer se Polyxena Lidmila roku 1710 provdala za Václava
          Popovského ze Šarfenbachu na Oblajovicích.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="Str. 154"
          />
        </p>
        <p>
          Nejstarší ze tří bratří, Jan Vilém, držel Dolní Nerestce a Krsice a
          zanechal jedinou dceru Josefu Annu; jeho vdova, rozená Příchovská, se
          roku 1713 znovu vdala. František Pavel měl nejprve Myskovice a od roku
          1704 Vlčkovice a Bořetice. Od roku 1703 byl ženat s Annou Markétou
          Hrobčickou, ovdovělou Malovcovou z Chýnova, a zemřel kolem roku 1717
          bez dětí.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="Str. 154"
          />
        </p>
        <p>
          Michal Antonín, jemuž při dělení připadly Chříč a Kožlany, se 1.
          listopadu 1700 oženil s Marií Konstancií hraběnkou ze Sporcku, paní na
          Radeníně. Zemřel už 14. února 1705 ve věku osmadvaceti let; vdova se
          znovu provdala za Karla Josefa Voračického z Paběnic a zemřela roku
          1735. Z manželství vzešly dcery Marie Konstancie (1701–1722) a Marie
          Anna (narozena 1704, roku 1755 provdaná za Jana Františka svobodného
          pána z Fünfkirchen) a pohrobek Jan Michal.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="Str. 154"
          />
        </p>
        <p>
          Jan Michal, poslední mužský potomek rodu, zdědil po strýci Františkovi
          Vlčkovice a roku 1729 koupil Neustupov. Téhož roku se stal radou nad
          apelacemi a brzy nato zemským soudcem; roku 1737 je uváděn jako{' '}
          <Cit>
            Herr auf Boretic, Neu-Stupov und Vlckovic, kais. Rath,
            Hoflehnrechts-Beisitzer und königl. Hauptmann des Bechiner Kreises
          </Cit>{' '}
          a v kalendáři svatého Vojtěcha figuruje ještě roku 1768.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="Str. 154"
          />
          <Qt publication={PUBLICATIONS.MERAVIGLIA} note="Str. 39–40" />
          Kolem roku 1759{' '}
          <Cit>
            upadl v hypochondrickou nemoc, pro kterou byl pod poručenstvím
          </Cit>
          ; jeho statky byly téhož roku prodány. Manželka Antonie Josefa
          hraběnka z Millesima zemřela 29. listopadu 1771.{' '}
          <Cit>Kdy Jan, poslední po meči, zemřel, není známo.</Cit>
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="Str. 154"
          />
        </p>
        <p>
          Krev rodu však žila dál po přeslici. Kateřina, podle Sedláčka snad
          sestra Jana na Chříči, byla provdána za Kryštofa Jindřicha Krakovského
          z Kolovrat, a Lidmila Týřovská za jeho vnuka Bernarta Alexandra
          Krakovského; obě byly, jak Sedláček napsal roku 1906,{' '}
          <Cit>prabáby nynějších hrabat z Kolovrat</Cit>.
          <Qt
            publication={PUBLICATIONS.OTTO25}
            href="https://kramerius5.nkp.cz/view/uuid:7e11fe20-043e-11e5-95ff-5ef3fc9bb22f?page=uuid:c0908a40-1452-11e5-ac49-005056825209"
            note="Str. 154"
          />
        </p>
      </Col>
    </Row>
  </>
)
