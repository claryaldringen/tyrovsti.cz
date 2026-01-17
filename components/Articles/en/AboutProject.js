import React from 'react'
import Link from 'next/link'
import { LINKS, SOCIALS } from '../cz/OProjektu'
import { Col, Row } from 'reactstrap'
import { SocialLinks } from '../../SocialLinks/SocialLinks'

export const AboutProject = () => (
  <>
    <h2>About the project</h2>
    <p>
      We are engaged in the reconstruction (so-called reenactment) of the
      courtyard and the companion&nbsp;
      <Link href="/tyrovsti-z-einsiedlu/jost-z-einsiedlu">
        Jobst of Einsiedl
      </Link>
      , personal secretary to King George of Poděbrady, dated approximately
      between the years 1450 - 1470.
    </p>
    <p>
      Our aim is to introduce the general public to various aspects of life in
      second half of 15th century Bohemia and present the unique cultural and
      historical development in Bohemia after the Hussite wars.
    </p>
    <p>
      The reconstructions are based on the available written, iconographic and
      archeological sources, especially from western Bohemia. We strive for
      maximum historical fidelity with regard to the technology used and the
      information available. We try to stick as much as possible to the
      materials and crops available and used at the time. All our garments and
      shoes are handmade, some of them from handwoven fabrics. The weapon parts
      and clothing accessories we use are also handmade replicas of surviving
      originals.
    </p>
    <p>
      We also cooperate with other societies that are similarly focused in terms
      of dates. Among them are&nbsp;
      <a href={LINKS[0]} target="_blank" rel="noreferrer">
        Rattenschwanz
      </a>
      ,&nbsp;
      <a rel="noreferrer" href={LINKS[1]} target="_blank">
        Praga Jagellonica 1471
      </a>
      ,&nbsp;
      <a href={LINKS[2]} rel="noreferrer" target="_blank">
        Slánská rota
      </a>{' '}
      et al.
    </p>
    <h3>We offer</h3>
    <h4>Talks and presentations</h4>
    <p>
      We offer the following presentations, talks and speeches. We can adapt
      length and content to the audience requirements, usually 45 - 90 minutes.
    </p>
    <Row>
      <Col xs={12} md={6}>
        <p>
          <h6>From Nekmíř to Lipany: Hussite Warfare in Context</h6>
          In the 15th century, the Hussites terrorized Central Europe.
          Let&apos;s take a look at where this phenomenon came from and, more
          importantly, how it influenced military affairs in Central Europe.
          <ul>
            <li>The Development of Warfare in Europe</li>
            <li>Warfare in Czech Lands before the Hussite Revolution</li>
            <li>The Causes of the Hussite Wars</li>
            <li>Arms and Armour of Hussite Warriors and Their Enemies</li>
            <li>The Development of Hussite Tactics and Military Art</li>
            <li>The Role of Cavalry, Infantry, Artillery and Wagenburg</li>
            <li>The Most Important Campaigns and Battles</li>
            <li>Epilogue</li>
          </ul>
        </p>
      </Col>
      <Col xs={12} md={6}>
        <p>
          <h6>
            From Lipany to Mohács: Czech-Style Warfare after the Hussite Wars
          </h6>
          After the Hussite Wars, Czechs were the most sought-after mercenaries
          in Europe. However, they continued to face challenges posed by their
          opponents and military developments.
          <ul>
            <li>The Development of Warfare in Europe</li>
            <li>Warfare in Czech Lands before the Hussite Revolution</li>
            <li>The Innovations of Hussite Warfare</li>
            <li>The Development of Tactics during Czech-Hungarian Wars</li>
            <li>Czech Mercenaries across Europe</li>
            <li>
              A Comparison of Czech, Swiss, English and German (Landsknechts)
              Soldiers
            </li>
            <li>Epilogue: After Mohács</li>
          </ul>
        </p>
      </Col>
    </Row>
    If necessary, it is possible to focus on only one of the points of the
    lecture and elaborate on it, for example, the role of infantry, maneuvers
    with a wagon fortification, military orders, etc.
    <h3>Contact</h3>
    <Row>
      <Col>
        <p>
          Týřovští z.s.
          <br />
          Karla Čapka 1393 <br />
          266 01 Beroun
          <br />
          Czechia <br />
          IN: 24090956 <br />
          Email: <a href="mailto:info@tyrovsti.cz">info@tyrovsti.cz</a>
        </p>
      </Col>
      <Col>
        <SocialLinks items={SOCIALS} iconSize={24} />
      </Col>
    </Row>
  </>
)
