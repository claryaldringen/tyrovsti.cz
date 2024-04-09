import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { JindrichTyrovsky } from '../../components/Articles/cz/tyrovsti/JindrichTyrovsky'
import { JostTyrovsky } from '../../components/Articles/cz/tyrovsti/JostTyrovsky'
import { Sources } from '../../components/Quote/Sources'
import { Erb } from '../../components/Articles/cz/tyrovsti/Erb'
import { ImageWithTitle } from '../../components/ImageWithTitle'
import { PUBLICATIONS } from '../../shared/constants'
import { Qt } from '../../components/Quote/Qt'
import { Rozrod } from '../../components/Articles/cz/tyrovsti/Rozrod'

const Page = () => (
  <>
    <HeadExtended title="Týřovští z Einsiedlu" image="erb.png" />
    <Container>
      <Row>
        <Col className="text">
          <Row>
            <Col md={6}>
              <h1>Týřovští z Einsiedlu</h1>
              <p>
                Odvozují své rodové jméno od hradu Týřova či jinak Tejřova,
                takže se vyskytuje jak varianta Týřovští tak Tejřovští.
              </p>
              <p>
                Jejich původ je pak odvozen od obce Mnichov v okrese Cheb, který
                se německy nazývá Einsiedl. Různým fonetickým přepisem pak
                vznikly používané varianty z Einsiedlu/e, z Einsidlu/e, z
                Ensiedlu/e, z Ensidlu/e, z Einzidlu/e či z Enzidlu/e.
              </p>
              <p>
                Zakladatel rodu Jošt z Einsidlu (od roku 1460 rytíř z Týřova)
                jako německý sekretář správce a pozdějšího krále Jiřího z
                Poděbrad zasahoval do nejvyšší české, potažmo říšské politiky.
                Jeho potomci však již takového věhlasu a významu nedosáhli a
                zařadili se mezi drobnou šlechtu na pomezí Rakovnicka a
                Kralovicka. Posledním členem rodu byl Jan Michal, který zastával
                úřad zemského rady a krátce i soudce, ale potom onemocněl
                hypochondrií, takže jeho statky byly nejprve pod poručenskou
                správou, ale nakonec byly v roce 1759 prodány. Nevíme dokonce
                ani kdy zemřel.
                <Qt publication={PUBLICATIONS.HALADA} note="Str. 156" />
              </p>
            </Col>
            <ImageWithTitle
              md={6}
              width={1244}
              height={1600}
              hei
              src="erb.png"
              title="Erb Týřovských"
            />
          </Row>
          <Rozrod />
          <JostTyrovsky />
          <JindrichTyrovsky />
          <Erb />
          <Sources />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
7403
