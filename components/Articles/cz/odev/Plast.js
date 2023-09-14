import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../../ImageWithTitle/ImageWithTitle'

export const Plast = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="plast" />
        <h4>Plášt</h4>
      </Col>
    </Row>
    <Row>
      <Col>
        <p>
          Plášť byl velice oblíbeným mužským a ženským typem svrchního oděvu.
          Střihově se velice lišil a názvy jednotlivých typů střihů značně
          splývají, takže je dnes poměrně těžké rozlišit, o který konkrétní typ
          oděvu se jednalo. Můžeme se tak setkat s pojmy <i>plášček</i>,
          <i>pláščík</i> v lucemburském období se mu začalo říkat <i>klok</i>,
          <i>kloček</i>, z francouzského tvaru <i>cloque</i>, latinsky
          <i>clanis</i>, dále latinsky <i>pelicio</i>, německy{' '}
          <i>tasselmantel</i>, <i>mantl</i> a <i>mantlík</i>. Nejčastěji se
          setkáváme s plášti půlkruhového střihu, nošen byl ale také
          třičvrtěkruhový. Délka pláště byla proměnlivá a mohl mít celou paletu
          barev, ale jednoznačně převažovala modrá, zelená, růžová a šedá barva.
        </p>
        <p>
          Plášť se nejčastěji spínal na hrudi pod bradou. Mohla k tomu sloužit
          ozdobná přezka zvaná <i>agrafa</i>, jejíž tvar, barevnost a zdobení
          měly náboženský význam, proto se často setkáváme s agrafou
          kosočtvercového tvaru, která je zdobena drahými kameny rozmístěnými do
          tvaru kříže, případně mohou být její vrcholy zakončeny perlami,
          připomínajícími lilii. Půlkruhový plášť sepnutý agrafou nacházíme
          nejčastěji na vyobrazení Panny Marie. Dále byly pláště spínány šňůrkou
          či řemínkem, nebo ozdobným napříč položeným pruhem nebo také, zejména
          u kratších plášťů, na tři knoflíky pod bradou či častěji na rameni.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="agrafa.jpg"
        width={234}
        height={558}
        title="Dlouhý plášť sepnutý agrafou na výřezu z Ukřižování z Nových Sadů, 1440."
      />
      <ImageWithTitle
        src="plastspruhem.jpg"
        width={408}
        height={840}
        title="Dlouhé pláště sepnuté pruhem látky, Křivoklátský oltář, pravděpodobně 1483."
      />
      <ImageWithTitle
        src="plast-knofliky.jpg"
        width={487}
        height={423}
        title="Kratší plášť sepnutý třemi knoflíky vepředu na obraze sv. Rocha italské provenience, 1480."
        href="svroch.jpeg"
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="plast-rameno-jensky1.jpg"
        width={414}
        height={738}
        title="Kratší plášť sepnutý na rameni, výřez z Jenského kodexu (1490-1510)."
      />
      <ImageWithTitle
        src="plast-rameno-jensky2.jpg"
        width={342}
        height={742}
        title="Kratší plášť sepnutý na rameni, výřez z Jenského kodexu (1490-1510)."
      />
      <ImageWithTitle
        src="plast-rameno-richental.jpg"
        width={386}
        height={756}
        title="Plášť sepnutý knoflíky na rameni, výřez z Richentalovy kroniky (1470-1480)."
      />
    </Row>
    <Row>
      <Col>
        <p>
          Další skupinu plášťů tvoří pláště, dnes některými badateli označované
          umělým výrazem <i>plášťová tunika</i>. Spadají sem zejména dva typy
          plášťů: První, který svým tvarem připomíná italský oděv <i>giornea</i>{' '}
          a druhý, který má průstřihy na ruce a spíše se blíží <i>sukni</i> či
          západoevropské <i>houppelande</i>.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="giornea1.jpg"
        width={1400}
        height={1908}
        title={
          <>
            Norimberský krejčí Hans Frumann zhotovuje vrapy na plášti typu{' '}
            <i>giornea</i>, stránka z Domácí knihy norimberské nadace dvanácti
            bratří, 1446.
          </>
        }
      />
      <ImageWithTitle
        src="bocni-richental.jpg"
        width={390}
        height={520}
        title={
          <>
            Plášť typu <i>giornea</i>, výřez z Richentalovy kroniky (1470-1480).
          </>
        }
      />
      <ImageWithTitle
        src="pltunika2.jpg"
        width={626}
        height={1048}
        title="Plášť s průstřihy na ruce, výřez z Jenského kodexu (1490-1510)"
      />
      <ImageWithTitle
        src="pltunika1.jpg"
        width={420}
        height={1008}
        title="Plášť s průstřihy na ruce, výřez z Jenského kodexu (1490-1510)"
      />
    </Row>
  </>
)
