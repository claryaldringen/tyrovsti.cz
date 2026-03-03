import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../ImageWithTitle/ImageWithTitle'

export const PraceNohou = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="prace-nohou-neboli-manívry" />
        <h4>Práce nohou neboli manévry</h4>
        <p>
          Účelem tohoto krátkého článku je poskytnout přehled o práci nohou, tj.
          manévrech, které jsou při šermu na koni (<i>Rossfechten</i>) nezbytné
          pro bezpečný a úspěšný souboj se soupeřem. Zde popsaná práce nohou
          vychází z dobových jezdeckých rukopisů a logické aplikace biomechaniky
          na umění šermu na koni.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Manévry</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle md={2} src="haunches-in.png" width={512} height={960} />
      <Col>
        <h6>Travers (dovnitř záď)</h6>
        <p>
          Kůň je ohnutý zadními končetinami dovnitř. Kůň bude řídit z vnější
          zadní strany. To umožňuje větší boční manévrovatelnost a odhad
          vzdálenosti. Jedná se o pozici pro nájezd i útok. Je to také nejméně
          ohrožující přístup ke koním a pomůže zabránit nežádoucí agresi koní.
        </p>
        <p>Upozornění: Váš kůň by měl být vždy ohnut směrem k soupeři.</p>
      </Col>
      <ImageWithTitle src="travers-in-to-attck.png" width={832} height={712} />
    </Row>
    <Row>
      <ImageWithTitle md={2} src="shoulder-in.png" width={512} height={960} />
      <Col>
        <h6>Dovnitř plec</h6>
        <p>
          V této pozici je kůň stále ohnutý stejným směrem (k vašemu soupeři),
          ale jede vnitřní zádí. Tento manévr se používá v obraně, abyste
          zrušili úder nebo unikli soupeřově míře.
        </p>
        <p>Upozornění: Váš kůň by měl být vždy ohnut směrem k soupeři.</p>
      </Col>
      <ImageWithTitle src="shoulder-in-to-evade.png" width={884} height={758} />
    </Row>
    <Row>
      <ImageWithTitle src="volte.png" width={602} height={666} />
      <Col>
        <h6>Pirueta</h6>
        <p>
          Z traversu kůň zpomalí pohyb zadních končetin vpřed a pohybuje ramenem
          dokola v těsném kruhu. To je ideální pro zaujetí správné pozice či pro
          opakování střetu.
        </p>
      </Col>
    </Row>
  </>
)
