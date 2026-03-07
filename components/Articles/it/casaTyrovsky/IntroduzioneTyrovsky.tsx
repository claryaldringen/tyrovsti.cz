import React from 'react'
import { Col, Row } from 'reactstrap'
import { ImageWithTitle } from '../../../ImageWithTitle'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'

export const IntroduzioneTyrovsky = () => (
  <>
    <Row>
      <Col md={6}>
        <h1>Týřovský di Einsiedl</h1>
        <p>
          Il nome della famiglia deriva dal castello di Týřov, che il fondatore
          della casata, Jobst von Einsiedl, ottenne in pegno dal re Giorgio di
          Poděbrady.
        </p>
        <p>
          La loro origine viene poi ricondotta alla cittadina di Mnichov nel
          distretto di Cheb, chiamata Einsiedl in tedesco.
        </p>
        <p>
          Il fondatore della famiglia, Jobst von Einsiedl (dal 1460 cavaliere
          di Týřov), in qualità di segretario tedesco del governatore e poi re
          Giorgio di Poděbrady, fu coinvolto nella più alta politica boema,
          anzi imperiale. I suoi discendenti, tuttavia, non raggiunsero tale
          fama e importanza e si annoveravano tra la piccola nobiltà al confine
          tra Rakovník e Kralovice. L&apos;ultimo membro della famiglia fu Jan
          Michal, che ricoprì la carica di consigliere regionale e per breve
          tempo anche quella di giudice, ma poi si ammalò di ipocondria, cosicché
          i suoi possedimenti furono prima posti sotto tutela e infine venduti
          nel 1759. Non sappiamo nemmeno quando morì.
          <Qt publication={PUBLICATIONS.HALADA} note="Page 156" />
        </p>
        <p>
          Furono legati da vincoli familiari con i Krakovský di Kolovrat,
          Kokořovec di Kokořov, Malovec di Chýnov, Sporck e con i Klenovský di
          Janovice, tra le altre famiglie boeme.
          <Qt publication={PUBLICATIONS.HALADA} note="Page 156" />
        </p>
      </Col>
      <ImageWithTitle
        md={6}
        width={1244}
        height={1600}
        src="erb.png"
        title="Stemma della famiglia Týřovský"
      />
    </Row>
  </>
)
