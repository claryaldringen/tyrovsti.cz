import React from 'react'
import Link from 'next/link'
import { LINKS, SOCIALS } from '../cz/OProjektu'
import { Col, Row } from 'reactstrap'
import { SocialLinks } from '../../SocialLinks/SocialLinks'
import { ArticleProps } from '../../../types'
import { DraftBadge } from '../../DraftBadge'

export const UeberDasProjekt = ({ draft }: ArticleProps) => (
  <>
    <h2>Über das Projekt{draft && <DraftBadge />}</h2>
    <p>
      Wir beschäftigen uns mit der Rekonstruktion (dem sogenannten Reenactment)
      des Hofstaats und des Begleiters&nbsp;
      <Link href="/tyrovsti-z-einsiedlu/jost-z-einsiedlu">
        Jobst von Einsiedl
      </Link>
      , des persönlichen Sekretärs König Georgs von Podiebrad, datiert ungefähr
      zwischen die Jahre 1450 – 1470.
    </p>
    <p>
      Unser Ziel ist es, die breite Öffentlichkeit mit verschiedenen Aspekten
      des Lebens in Böhmen in der zweiten Hälfte des 15. Jahrhunderts vertraut
      zu machen und die einzigartige kulturelle und historische Entwicklung in
      Böhmen nach den Hussitenkriegen darzustellen.
    </p>
    <p>
      Die Rekonstruktionen basieren auf den verfügbaren schriftlichen,
      ikonographischen und archäologischen Quellen, insbesondere aus Westböhmen.
      Wir streben nach größtmöglicher historischer Treue in Bezug auf die
      verwendete Technologie und die verfügbaren Informationen. Wir versuchen,
      uns so weit wie möglich an die damals verfügbaren und verwendeten
      Materialien und Rohstoffe zu halten. Alle unsere Kleidungsstücke und
      Schuhe sind handgefertigt, einige davon aus handgewebten Stoffen. Die von
      uns verwendeten Waffenteile und Kleidungsaccessoires sind ebenfalls
      handgefertigte Repliken erhaltener Originale.
    </p>
    <p>
      Wir arbeiten auch mit anderen Vereinigungen zusammen, die sich in
      zeitlicher Hinsicht ähnlich ausrichten. Dazu gehören&nbsp;
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
      u. a.
    </p>
    <h3>Kontakt</h3>
    <Row>
      <Col>
        <p>
          Týřovští z.s.
          <br />
          Karla Čapka 1393 <br />
          266 01 Beroun
          <br />
          Tschechien <br />
          IN: 24090956 <br />
          E-Mail: <a href="mailto:info@tyrovsti.cz">info@tyrovsti.cz</a>
        </p>
      </Col>
      <Col>
        <SocialLinks items={SOCIALS} iconSize={24} />
      </Col>
    </Row>
  </>
)
