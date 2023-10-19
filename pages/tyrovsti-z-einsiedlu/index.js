import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { JindrichTyrovsky } from '../../components/Articles/cz/tyrovsti/JindrichTyrovsky'
import { Source, Sources } from '../../components/Sources'
import { JostTyrovsky } from '../../components/Articles/cz/tyrovsti/JostTyrovsky'

const Page = () => (
  <>
    <HeadExtended title="Týřovští z Einsiedlu" />
    <Container>
      <Row>
        <Col className="text">
          <Row>
            <Col>
              <h1>Týřovští z Einsiedlu</h1>
              <p>
                Odvozují své rodové jméno od hradu Týřova či jinak Tejřova,
                takže se vyskytuje jak varianta Týřovští tak Tejřovští.
              </p>
              <p>
                Jejich původ je pak odvozen od obce Mnichov v okrese Cheb, který
                se německy nazývá Einsiedl. Různým fonetickým přepisem pak
                vznikly používané vyrianty z Einsiedlu/e, z Einsidlu/e, z
                Ensiedlu/e, z Ensidlu/e, z Einzidlu/e či z Enzidlu/e.
              </p>
            </Col>
          </Row>
          <JostTyrovsky />
          <JindrichTyrovsky />
          <Sources>
            <Source
              name="Jobst von Einsiedel und seine Correspondenz mit der Stadt Eger. Aus dem Archive der Stadt Eger"
              author="Franz Kürschner"
              city="Vídeň"
              year={1868}
            />
            <Source
              name="Dějiny Rakovnicka"
              author="Václav Kočka"
              city="Rakovník"
              year={2009}
            />
            <Source
              name="Zbytky register králů římských a českých z let 1361-1480"
              author="August Sedláček"
              city="Praha"
              year={1914}
            />
            <Source
              name="Erby české, moravské a slezské šlechty"
              author="Jan Pelant"
              city="Praha"
              year={2013}
            />
            <Source
              name="Söldner aus Böhmen: im Dienst deutscher Fürsten: Kriegsgeschäft und Heeresorganisation im 15. Jahrhundert"
              author="Uwe Tresp"
              city="Paderborn"
              year={2004}
            />
            <Source
              name="Kronika česko-bavorské hranice III"
              author="Jiří Jánský"
              city="Domažlice"
              year={2003}
            />
            <Source
              name="PODĚBRADOVÉ Rod českomoravských pánů, kladských hrabat a slezských knížat"
              author="Ondřej Felcman, Radek Fukala, Vladimír Hrubý, Jarosław Malicki, Karel Müller, František Musil, Miroslav Plaček, Jaroslav Šůla, Martin Šandera, Marek Vařeka"
              city="Praha"
              year={2008}
            />
          </Sources>
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
