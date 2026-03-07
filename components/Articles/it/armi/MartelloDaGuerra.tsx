import React from 'react'
import { Col, Row } from 'reactstrap'
import { ImageWithTitle } from '../../../ImageWithTitle'

export const MartelloDaGuerra = () => (
  <>
    <Row>
      <Col>
        <h1>Martello da guerra</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Introduzione</h4>
        <p>
          Con lo sviluppo dell&apos;armatura a piastre e l&apos;ascesa della
          fanteria come principale forza combattente nel corso del XIV e XV
          secolo, anche la progettazione delle armi in asta per la fanteria si
          evolse — nel contesto ceco note come <i>kúsy</i> — combinando
          variamente la possibilità di colpi di punta, di taglio o di
          schiacciamento.
        </p>
        <p>
          I martelli da guerra intorno alla metà del XV secolo hanno una forma
          relativamente semplice, con un becco corto e massiccio (bec-de-corbin)
          e anche un punzone corto e massiccio rispetto ai martelli successivi,
          come il martello di Lucerna. Allo stesso modo, il rivetto centrale non
          era ancora allungato in punte.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="DP7063.jpeg"
        width={665}
        height={1130}
        title="Fig. 1: Martello da guerra a due mani per combattimento a piedi, Germania, intorno al 1440."
      />
      <ImageWithTitle
        md={4}
        src="DP-15647-026.jpg"
        width={1376}
        height={1920}
        title="Fig. 2: Martello da guerra a una mano, Francia, intorno al 1450."
      />
      <ImageWithTitle
        md={4}
        src="1977-167-466-pma2017.jpg"
        width={1920}
        height={2560}
        title="Fig. 3: Martello di Lucerna, Svizzera, 1500."
      />
    </Row>
    <Row>
      <Col md={4}>
        Figura 1: Martello a due mani dal Worcester Art Museum, Germania, intorno
        al 1440.
        <table>
          <tbody>
            <tr>
              <th>Lunghezza della parte conservata:&nbsp;</th>
              <td>105,4 cm</td>
            </tr>
            <tr>
              <th>Peso:&nbsp;</th>
              <td>2041,1 g</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </Col>
      <Col md={4}>
        Figura 2: Martello a una mano dal Metropolitan Museum of Art di New York,
        Francia, intorno al 1450.
        <table>
          <tbody>
            <tr>
              <th>Lunghezza:&nbsp;</th>
              <td>65,5 cm</td>
            </tr>
            <tr>
              <th>Peso:&nbsp;</th>
              <td>1474,2 g</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </Col>
      <Col md={4}>
        Figura 3: Martello di Lucerna dal Philadelphia Museum of Art, Svizzera,
        1500.
        <table>
          <tbody>
            <tr>
              <th>Altezza della testa:&nbsp;</th>
              <td>48,6 cm</td>
            </tr>
            <tr>
              <th>Lunghezza della testa:&nbsp;</th>
              <td>21,3 cm</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Ricostruzione</h4>
        <p>
          Per la ricostruzione, abbiamo scelto il martello di Worcester per la
          sua datazione. Una caratteristica interessante di questo martello è che
          la sua testa è fissata al manico non con rivetti, ma con coppie di viti
          a testa quadrata. La lunghezza della replica è di 220 cm e il suo peso
          è di 2847 g. La replica è stata realizzata da Vojtěch Jelínek.
        </p>
      </Col>
      <Row>
        <ImageWithTitle
          src="145352114_2454233218217244_1239154704725255175_n.jpg"
          width={1885}
          height={1414}
          title=""
        />
        <ImageWithTitle
          src="144900516_2454233258217240_4835566531118336875_n.jpg"
          width={1920}
          height={1440}
          title=""
        />
        <ImageWithTitle
          src="144989261_2454233191550580_7533405486375892515_n.jpg"
          width={1724}
          height={1293}
          title=""
        />
      </Row>
      <Row>
        <ImageWithTitle
          src="145095620_2454233278217238_3303663509323734164_n.jpg"
          width={1920}
          height={1440}
          title=""
        />
        <ImageWithTitle
          src="145159907_2454233381550561_6076649610687634798_n.jpg"
          width={1920}
          height={1440}
          title=""
        />
        <ImageWithTitle
          src="145234376_2454233334883899_8417551400168761453_n.jpg"
          width={1920}
          height={1440}
          title=""
        />
      </Row>
      <Row>
        <ImageWithTitle
          src="145239776_2454233311550568_8570324239103713777_n.jpg"
          width={1920}
          height={1440}
          title=""
        />
        <ImageWithTitle
          src="145323233_2454233174883915_8456973728614592166_n.jpg"
          width={1920}
          height={1440}
          title=""
        />
        <ImageWithTitle
          src="145347606_2454233238217242_4854487319947455893_n.jpg"
          width={1920}
          height={1440}
          title=""
        />
      </Row>
    </Row>
  </>
)
