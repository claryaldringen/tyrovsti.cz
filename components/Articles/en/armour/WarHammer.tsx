import React from 'react'
import { Col, Row } from 'reactstrap'
import { ImageWithTitle } from '../../../ImageWithTitle'

export const WarHammer = () => (
  <>
    <Row>
      <Col>
        <h1>War Hammer</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Introduction</h4>
        <p>
          With the development of plate armour and the rise of infantry as the
          main fighting force during the 14th and 15th centuries, the design of
          infantry polearms also evolved — in the Czech context known as{' '}
          <i>kúsy</i> — variously combining the possibility of thrusting,
          cutting or crushing blows.
        </p>
        <p>
          War hammers from around the mid-15th century are of a relatively
          simple shape, with a short, massive beak (bec-de-corbin) and also a
          short, massive spike compared to later hammers, such as the Lucerne
          hammer. Likewise, the central rivet was not yet drawn out into points.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={4}
        src="DP7063.jpeg"
        width={665}
        height={1130}
        title="Fig. 1: Two-handed war hammer for foot combat, Germany, around 1440."
      />
      <ImageWithTitle
        md={4}
        src="DP-15647-026.jpg"
        width={1376}
        height={1920}
        title="Fig. 2: One-handed war hammer, France, around 1450."
      />
      <ImageWithTitle
        md={4}
        src="1977-167-466-pma2017.jpg"
        width={1920}
        height={2560}
        title="Fig. 3: Lucerne hammer, Switzerland, 1500."
      />
    </Row>
    <Row>
      <Col md={4}>
        Figure 1: Two-handed hammer from the Worcester Art Museum, Germany,
        around 1440.
        <table>
          <tbody>
            <tr>
              <th>Length of surviving part:&nbsp;</th>
              <td>105.4 cm</td>
            </tr>
            <tr>
              <th>Weight:&nbsp;</th>
              <td>2041.1 g</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </Col>
      <Col md={4}>
        Figure 2: One-handed hammer from the Metropolitan Museum of Art in New
        York, France, around 1450.
        <table>
          <tbody>
            <tr>
              <th>Length:&nbsp;</th>
              <td>65.5 cm</td>
            </tr>
            <tr>
              <th>Weight:&nbsp;</th>
              <td>1474.2 g</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </Col>
      <Col md={4}>
        Figure 3: Lucerne hammer from the Philadelphia Museum of Art,
        Switzerland, 1500.
        <table>
          <tbody>
            <tr>
              <th>Head height:&nbsp;</th>
              <td>48.6 cm</td>
            </tr>
            <tr>
              <th>Head length:&nbsp;</th>
              <td>21.3 cm</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </Col>
    </Row>
    <Row>
      <Col>
        <h4>Reconstruction</h4>
        <p>
          For the reconstruction, we chose the hammer from Worcester given its
          dating. An interesting feature of this hammer is that its head is
          attached to the shaft not with rivets, but with pairs of screws with
          square heads. The length of the replica is 220 cm and its weight is
          2847 g. The replica was made by Vojtěch Jelínek.
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
