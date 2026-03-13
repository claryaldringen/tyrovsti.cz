import React from 'react'
import { Col, Row } from 'reactstrap'
import { ArticleProps } from '../../../types'
import { DraftBadge } from '../../DraftBadge'

export const Bibliography = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <h1>Sources{draft && <DraftBadge />}</h1>
        <h2>Primary</h2>
        <h3>Bohemian</h3>
        <ul>
          <li>
            <a
              href="https://www.trinity-art.cz/_pracovni/mestske_knihy_kodex_VJ.pdf"
              target="_blank"
            >
              Památná kniha olomoucká (Memorial Book of Olomouc)
            </a>
          </li>
          <li>
            <a
              href="https://upload.wikimedia.org/wikipedia/commons/d/d9/Freska_v_chr%C3%A1mu_sv._Barbory%28Kutn%C3%A1_Hora%29_1.JPG"
              target="_blank"
            >
              Fresco from the Minters&apos; Chapel, Cathedral of St Barbara,
              Kutná Hora
            </a>
          </li>
          <li>
            <a
              href="https://cs.wikipedia.org/wiki/Svatoji%C5%99sk%C3%BD_olt%C3%A1%C5%99"
              target="_blank"
            >
              St George Altarpiece (Svatojiřský oltář)
            </a>
          </li>
          <li>
            <a
              href="https://cs.wikipedia.org/wiki/Puchnerova_archa"
              target="_blank"
            >
              Puchner Ark Altarpiece (Puchnerova archa)
            </a>
          </li>
          <li>
            <a
              href="https://cs.wikipedia.org/wiki/Olt%C3%A1%C5%99n%C3%AD_k%C5%99%C3%ADdla_z_Roudn%C3%ADk"
              target="_blank"
            >
              Altarpiece Wings from Roudníky (Oltářní křídla z Roudník)
            </a>
          </li>
          <li>
            <a
              href="https://www.manuscriptorium.com/apps/index.php?direct=record&pid=AIPDIG-MJ____S_2746______1PETHXE-cs"
              target="_blank"
            >
              Kutná Hora Bible (Kutnohorská Bible)
            </a>
          </li>
          <li>
            <a
              href="https://www.manuscriptorium.com/apps/index.php?direct=record&pid=AIPDIG-NMP___IV_B_24_____3TQMIOE-cs"
              target="_blank"
            >
              Antithesis Christi et Antichristi (Jena Codex)
            </a>
          </li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3>German</h3>
        <ul>
          <li>
            <a
              href="https://www.manuscriptorium.com/apps/index.php?direct=record&pid=AIPDIG-NKCR__VII_A_18____4BZSZD5-cs"
              target="_blank"
            >
              Chronicon Concilii Constantiensis (Small Richental Chronicle)
            </a>
          </li>
          <li>
            <a
              href="https://www.nuernberger-hausbuecher.de/index.php?do=query&mo=3&vo=317&rs=2"
              target="_blank"
            >
              Die Hausbücher der Nürnberger Zwölfbrüderstiftungen
            </a>
          </li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col>
        <h2>Secondary</h2>
        <ul>
          <li>
            <a
              href="https://is.muni.cz/th/lch5n/disertace_text.pdf"
              target="_blank"
            >
              Leather Production in the Czech Lands in the Middle Ages
              (Kožedělná výroba v českých zemích ve středověku)
            </a>
          </li>
          <li>
            <a
              href="https://dspace.cuni.cz/bitstream/handle/20.500.11956/92944/DPTX_2014_2_11210_0_436502_0_166872.pdf?sequence=1&isAllowed=y"
              target="_blank"
            >
              The Transformation of Clothing Styles during the Hussite Wars
              (Proměna stylu odívání v průběhu husitských válek)
            </a>
          </li>
          <li>
            <a
              href="https://dspace.cuni.cz/bitstream/handle/20.500.11956/44950/BPTX_2011_1__0_286060_0_115140.pdf?sequence=1&isAllowed=y"
              target="_blank"
            >
              The Rakovník Altarpiece (Rakovnický oltář)
            </a>
          </li>
          <li>
            <a
              href="https://sources.cms.flu.cas.cz/src/index.php?s=v&cat=10&bookid=821&page=438"
              target="_blank"
            >
              Articles of Prague Guilds (Artikule cechů pražských)
            </a>
          </li>
          <li>
            <a
              href="https://theses.cz/id/x0mt06/Bakalsk_prce_Severov.pdf"
              target="_blank"
            >
              Fresco Decoration of Žirovnice Castle (Fresková výmalba zámku v
              Žirovnici)
            </a>
          </li>
          <li>
            <a
              href="https://rukovet.cms.flu.cas.cz/static/Odkazy_upload/HT_16_2009.pdf"
              target="_blank"
            >
              Proceedings of the Hussite Museum in Tábor (Battle of Schönberg
              1504)
            </a>
          </li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col>
        <h3>Armour</h3>
        <ul>
          <li>
            <a href="https://www.esbirky.cz/predmet/4570704" target="_blank">
              Pavise with David and Goliath, mid-15th century
            </a>
          </li>
          <li>
            <a href="https://www.esbirky.cz/predmet/6174123" target="_blank">
              Pavise with St George, after mid-15th century
            </a>
          </li>
          <li>
            <a href="https://www.esbirky.cz/predmet/30448024" target="_blank">
              Altarpiece from Jeníkov, c. 1460
            </a>
          </li>
          <li>
            <a href="https://www.esbirky.cz/predmet/3511007" target="_blank">
              Pavise with St Wenceslas, 1470–1480
            </a>
          </li>
          <li>
            <a href="https://www.esbirky.cz/predmet/10078847" target="_blank">
              Sculpture of St George, 1470s–1480s
            </a>
          </li>
          <li>
            <a href="https://www.esbirky.cz/predmet/10078861" target="_blank">
              Sculpture of St Michael, 1470s–1480s
            </a>
          </li>
          <li>
            <a href="https://www.esbirky.cz/predmet/19629807" target="_blank">
              Epitaph with a Crucifixion Scene, 1480–1490
            </a>
          </li>
          <li>
            <a href="https://www.esbirky.cz/predmet/6174106" target="_blank">
              Pavise with St George, after 1480
            </a>
          </li>
          <li>
            <a href="https://www.esbirky.cz/predmet/125421" target="_blank">
              Epitaph of Jiřík of Sudoměř, 1495
            </a>
          </li>
          <li>
            <a href="https://www.esbirky.cz/predmet/7507557" target="_blank">
              Sallet, late 15th century
            </a>
          </li>
          <li>
            <a href="https://www.esbirky.cz/predmet/7507941" target="_blank">
              Jousting Helm (Stechhelm), late 15th century
            </a>
          </li>
          <li>
            <a
              href="https://upload.wikimedia.org/wikipedia/commons/9/95/Kostel_Charvatce_-_N%C3%A1hrobek_Vil%C3%A9ma_z_Ilburku.JPG"
              target="_blank"
            >
              Tombstone of Vilém of Ilburk, after 1489
            </a>
          </li>
          <li>
            <a href="https://www.esbirky.cz/predmet/7592512" target="_blank">
              Double-sided Panel Painting of the Capture of Christ, c. 1500
            </a>
          </li>
          <li>
            <a href="https://www.esbirky.cz/predmet/3510952" target="_blank">
              Epitaph of Půta Švihovský of Rýzmberk, 1504
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  </>
)
