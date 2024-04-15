import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../../components/HeadExtended'
import { Sources } from '../../components/Quote/Sources'
import { ImageWithTitle } from '../../components/ImageWithTitle'
import { LANG_EN, PUBLICATIONS } from '../../shared/constants'
import { Qt } from '../../components/Quote/Qt'
import { JobstOfEinsiedl } from '../../components/Articles/en/houseOfTeyrzow/JobstOfEinsiedl'

const Page = () => (
  <>
    <HeadExtended title="Týřovský of Einsiedl" image="erb.png" />
    <Container>
      <Row>
        <Col className="text">
          <Row>
            <Col md={6}>
              <h1>Týřovský of Einsiedl</h1>
              <p>
                They derive their family name from the castle of Týřov, which
                the founder of the family Jobst of Einsiedl obtained as a pledge
                from King George of Poděbrady
              </p>
              <p>
                Their origin is then traced back to the town of Mnichov in the
                district of Cheb, which is called Einsiedl in German.
              </p>
              <p>
                The founder of the family, Jobst of Einsidl (from the year 1460
                knight of Týřov) as the German secretary to the administrator
                and later king George of Poděbrady, was involved in the highest
                Czech, indeed imperial politics. His descendants, however, did
                not achieve such renown and significance and ranked among the
                minor nobility on the border of Rakovník and Kralovice. The last
                member of the family was Jan Michal, who held the office of a
                regional councilor and briefly also a judge, but then he fell
                ill with hypochondria, so his estates were first under
                guardianship, but eventually were sold in 1759. We do not even
                know when he died.
                <Qt publication={PUBLICATIONS.HALADA} note="Page 156" />
              </p>
            </Col>
            <ImageWithTitle
              md={6}
              width={1244}
              height={1600}
              hei
              src="erb.png"
              title="Coat of arms of the Týřov family"
            />
          </Row>
          <JobstOfEinsiedl />
          <Sources />
        </Col>
      </Row>
    </Container>
  </>
)

export const getStaticProps = () => ({
  props: {
    lang: LANG_EN,
    dest: '/tyrovsti-z-einsiedlu',
  },
})

export default Page
