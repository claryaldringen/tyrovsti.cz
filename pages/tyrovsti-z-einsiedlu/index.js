import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { JindrichTyrovsky } from '../../components/Articles/cz/tyrovsti/JindrichTyrovsky'
import { JostTyrovsky } from '../../components/Articles/cz/tyrovsti/JostTyrovsky'
import { Sources } from '../../components/Quote/Sources'
import { Erb } from '../../components/Articles/cz/tyrovsti/Erb'

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
          <Erb />
          <Sources />
        </Col>
      </Row>
    </Container>
  </>
)

export default Page
