import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { Cit } from '../../../Citation'

export const Erb = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="erb" />
        <h4>Erb</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Popis erbu Týřovských se u jednotlivých autorů značně liší. August
          Sedláček v Českomoravské heraldice píše, že{' '}
          <Cit>
            z Enzidle Týřovští měli štít křížem rozdělený v 1. a 4. poli napříč
            děleném nahoře černého orla v bílém, ve zpod v bílém tři pruhy
            pošikem, v 2. a 3. poli modrém tři duty bílé špičkami k sobě a na
            tři strany se rozbíhající, nad štítem dvě helmy s přikryvadly
            modrými a bílými s poprsím muže v modrém oděvu se zlatým lemováním,
            levou s přikr. červenými a bílými s vysokým červeným kloboukem s
            bílou ohnutou střechou a (černou) kytou.
          </Cit>
          {/*
          &nbsp; Jiná literatura uvádí, že{' '}
          <Cit>
            měli jednou polcený a dvakrát dělený štít, takže byl štít rozdělen
            na šest polí. V 1. a 4. stříbrném poli měli černého dvouhlavého
            orla, ve 2. a 5. modrém poli byla tři stříbrná pera špicemi k sobě a
            na tři strany se rozbíhající, ve 3. a 6. stříbrném poli byla dvě
            šikmá červená břevna. Týřovští měli dva klenoty, a to pravý nad
            modro-stříbrnými přikryvadly s poprsím muže v modrém oděvu se zlatým
            lemováním držící nad hlavou zlatou korunu a dále levý klenot nad
            červeno-stříbrnými přikryvadly, který tvořil vysoký červený klobouk
            se stříbrnou ohnutou střechou a černou kytou.
          </Cit>{' '}
          a další, že Týřovští měli v pravém klenotu vyrůstající černě oděnou
          pannu, která držela nad hlavou zlatou korunu. Rovněž se v literatuře
          lze setkat s tvrzením, že zmíněné šikmé pruhy byly černé.
        </p>
        */}
        </p>
        <p>Rudolf Jan Meraviglia-Crivelli zase v Der Böhmische Adel uvádí:</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          <Cit>
            Wappen: Gespalten und zweimal geteilt; 1. u. 2. in Silber ein
            schwarzer Doppeladler; 2. u. 5. in Blau drei silberne, in Deichsel
            gestellte Straussenfedern; 3. u. 6. in Silber zwei rothe
            Schrägrechtsbalken. - Zwei Helme: I aus der Helmrone, eine
            schwarzgekleidete Jungfrau mit offenen goldenen Haar, welche sich
            mit beiden Händen eine goldene Krone auf das Haupt setzt; Decken:
            blau-silbern - II. hoher, rother Heidenhut mit weissem Stulp und
            oben mit sieben schwarzen Hahnenfedern besteckt; Decken:
            Roth-silbern.
          </Cit>
        </p>
      </Col>
      <Col>
        <p>
          Erb: Půlený a dvakrát dělený; V 1. a 2. stříbrném poli černá dvouhlavá
          orlice; V 2. a 5. modrém poli tři stříbrná pštrosí pera zasazená do
          oje; V 3. a 6. stříbrném poli dvě červená šikmá břevna. - Dvě přilby:
          I. z koruny přilby černě oděná dívka s rozevlátými zlatými vlasy,
          která si oběma rukama klade na hlavu zlatou korunu; přikrývadla:
          modro-stříbrná - II. vysoký, červený pohanský klobouk s bílou krempou
          a nahoře zdobený sedmi černými kohoutími pery; přikrývadla:
          červeno-stříbrná
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Zdá se, že zmíněné pruhy se časem osamostatnily do vlastního pole a
          tak se z původního čtvrceného štítu stal štít dělený na šest polí. Z
          dochovaných vyhotovení erbu je také jasné, že v levém klenotu se
          nachází korunovaná panna.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="nahrobek.jpg"
        width={1062}
        height={1920}
        title="Nejstarší vyobrazení erbu Týřovských z roku 1556 je na náhrobku Jindřicha Týřovského v kostele sv. Mikuláše v Jincích."
      />
      <ImageWithTitle
        md={4}
        src="erb-cranach.jpg"
        width={852}
        height={1057}
        title="Erb Týřovských v erbovníku Lucase Cranacha mladšího z roku 1565. Zdá se, že Cranach namaloval erb z pohledu pozorovatele místo nositele, tj. prohodil strany."
      />
      <ImageWithTitle
        md={4}
        src="erb-pecet.jpg"
        width={655}
        height={652}
        title="Erb Týřovských na pečeti z roku 1616."
      />
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="erb-nahrobek-milicov.jpg"
        width={900}
        height={675}
        title="Erb Týřovských na náhrobku Jakuba Jindřicha Týřovského z Einsidlu z roku 1618."
      />
      <ImageWithTitle
        md={4}
        src="erb-stahlavy.jpg"
        width={315}
        height={589}
        title="Erb Doroty Polyxeny Kateřiny Kokořovské z Kokořova, rozené Týřovské z Einsidlu, na reliéfu na kostele sv. Vojtěcha ve Šťáhlavech, mezi lety 1637 - 1640"
      />
      <ImageWithTitle
        md={4}
        src="erb-oltar-milicov.jpg"
        width={640}
        height={480}
        title="Erb Týřovských na kartuši z oltáře kostela sv. Petra v Okovech v Milíčově z roku 1665."
      />
    </Row>
  </>
)
