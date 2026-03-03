import React from 'react'
import Link from 'next/link'
import { LINKS, SOCIALS } from '../cz/OProjektu'
import { Col, Row } from 'reactstrap'
import { SocialLinks } from '../../SocialLinks/SocialLinks'

export const UeberDasProjekt = () => (
  <>
    <h2>Über das Projekt</h2>
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
    <h3>Wir bieten an</h3>
    <h4>Vorträge und Präsentationen</h4>
    <p>
      Wir bieten die folgenden Präsentationen, Vorträge und Reden an. Länge und
      Inhalt können an die Anforderungen des Publikums angepasst werden, in der
      Regel 45 – 90 Minuten.
    </p>
    <Row>
      <Col xs={12} md={6}>
        <p>
          <h6>
            Von Nekmíř nach Lipany: Die hussitische Kriegführung im Kontext
          </h6>
          Im 15. Jahrhundert versetzten die Hussiten Mitteleuropa in Angst und
          Schrecken. Werfen wir einen Blick darauf, woher dieses Phänomen kam
          und – noch wichtiger – wie es das Militärwesen in Mitteleuropa
          beeinflusste.
          <ul>
            <li>Die Entwicklung der Kriegführung in Europa</li>
            <li>
              Das Kriegswesen in den böhmischen Ländern vor der hussitischen
              Revolution
            </li>
            <li>Die Ursachen der Hussitenkriege</li>
            <li>Waffen und Rüstungen hussitischer Krieger und ihrer Feinde</li>
            <li>Die Entwicklung der hussitischen Taktik und Kriegskunst</li>
            <li>
              Die Rolle von Kavallerie, Infanterie, Artillerie und Wagenburg
            </li>
            <li>Die wichtigsten Feldzüge und Schlachten</li>
            <li>Epilog</li>
          </ul>
        </p>
      </Col>
      <Col xs={12} md={6}>
        <p>
          <h6>
            Von Lipany nach Mohács: Das böhmische Kriegswesen nach den
            Hussitenkriegen
          </h6>
          Nach den Hussitenkriegen waren die Böhmen die begehrtesten Söldner
          Europas. Dennoch sahen sie sich weiterhin den Herausforderungen ihrer
          Gegner und der militärischen Entwicklung gegenüber.
          <ul>
            <li>Die Entwicklung der Kriegführung in Europa</li>
            <li>
              Das Kriegswesen in den böhmischen Ländern vor der hussitischen
              Revolution
            </li>
            <li>Die Neuerungen der hussitischen Kriegführung</li>
            <li>
              Die Entwicklung der Taktik während der böhmisch-ungarischen Kriege
            </li>
            <li>Böhmische Söldner in ganz Europa</li>
            <li>
              Ein Vergleich böhmischer, schweizerischer, englischer und
              deutscher (Landsknechte) Soldaten
            </li>
            <li>Epilog: Nach Mohács</li>
          </ul>
        </p>
      </Col>
    </Row>
    Bei Bedarf ist es möglich, sich auf nur einen der Vortragspunkte zu
    konzentrieren und diesen zu vertiefen, beispielsweise die Rolle der
    Infanterie, Manöver mit einer Wagenburg, Heeresordnungen usw.
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
