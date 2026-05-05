import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const HildesheimskaKolegiatniZasti = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="hildesheimska-kolegiatni-zasti" />
        <h4>
          Hildesheimská kolegiátní záští (1519–1523)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Hildesheimská kolegiátní záští (něm. <i>Hildesheimer Stiftsfehde</i>)
          bylo ozbrojeným sporem mezi biskupstvím Hildesheim pod biskupem Janem
          IV. Sasko-Lauenburským a sousedními welfskými vévodstvími
          Brunšvicko-Wolfenbüttel a Brunšvicko-Calenberg. Konflikt probíhal v
          letech 1519–1523 v dolnosaském regionu a stal se jednou z posledních
          velkých knížecích záští před nástupem reformace a selské války.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Hildesheimer_Stiftsfehde"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Biskupství Hildesheim ztratilo v 14. a 15. století velkou část
          někdejších panství zástavami sousedním welfským vévodům. Když se
          biskupem stal energický Jan IV. Sasko-Lauenburský (zvolen roku 1503),
          zahájil systematickou politiku zpětného vykupování zástav. Welfští
          vévodové Jindřich II. Mladší Brunšvicko-Wolfenbüttelský a Erich I.
          Brunšvicko-Calenberský odmítali výkup uznat a snažili se držbu
          zastavených hradů zachovat. Spor o legitimní výkon zástavních smluv
          eskaloval roku 1519 v otevřený ozbrojený konflikt.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Hildesheim_Diocesan_Feud"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Biskup Jan IV. získal podporu vévody Jindřicha I.
          Brunšvicko-Lüneburského, jehož synovec Vilém ml. mu poskytl polní
          oddíly. Záští začalo na jaře 1519 vzájemnými výpady; rozhodující
          střetnutí přišlo
          <b> 28. června 1519</b> v bitvě u Soltau. Spojenci Hildesheimu zde
          rozdrtili wolfenbüttelské vojsko Jindřicha II. Mladšího, který sám
          padl do zajetí. Bitva u Soltau bývá označována za jednu z posledních
          velkých čistě rytířských polních bitev v Říši, a zároveň za první
          větší nasazení polního dělostřelectva v dolnosaském prostoru.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Hildesheimer_Stiftsfehde"
          />
        </p>
        <p>
          Vojenský úspěch však neznamenal politické vítězství. Welfští vévodové
          se obrátili na říšský dvorský soud (něm. <i>Reichskammergericht</i>) a
          na nového císaře Karla V. Soud potvrdil platnost staré zástavní držby
          a roku 1521 vydal proti biskupství říšskou klatbu. Hildesheim byl
          izolován; spojenec vévoda Jindřich Lüneburský musel kvůli klatbě
          uprchnout do Francie.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Hildesheim_Diocesan_Feud"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Quedlinburský recess <b>13. května 1523</b> ukončil spor zcela ve
          prospěch welfských vévodů. Biskupství Hildesheim přišlo o čtyři pětiny
          svého teritoria, které připadly Brunšvicku-Wolfenbüttelu a
          Brunšvicku-Calenbergu; biskupovi zbylo jen tzv. <i>Kleines Stift</i> s
          městem Hildesheim a několika hrady. Tento stav vydržel až do roku
          1643, kdy westfálský mír část území vrátil. Pro Welfy znamenala záští
          definitivní upevnění mocenského postavení v dolnosaském prostoru.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Hildesheimer_Stiftsfehde"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Diplomatickou páteř konfliktu tvoří listiny shromážděné v{' '}
          <i>Urkundenbuch des Hochstifts Hildesheim und seiner Bischöfe</i>, sv.
          6 (vyd. H. Hoogeweg, Hannover 1911), zahrnujícím i text
          quedlinburského recessu 13. května 1523. Klíčový welfský pohled podává{' '}
          <b>Hans Heinrich von Wolfframsdorff</b> ve své{' '}
          <i>Chronik des Hochstifts Hildesheim</i> sepsané kolem roku 1530,
          dochované v rukopisu hildesheimské kapitulní knihovny.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://archive.org/search?query=Hoogeweg+Hochstift+Hildesheim"
          />
        </p>
        <p>
          Soudní akta wormského a norimberského sněmu, na nichž byla
          projednávána říšská klatba na Hildesheim, jsou součástí{' '}
          <i>Reichstagsakten unter Kaiser Karl V.</i>, sv. 2–3 (Gotha 1896),
          edice A. Wrede.
          <Qt publication={PUBLICATIONS.WIKI} href="https://www.dmgh.de/" />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Přímá účast českých žoldnéřských oddílů v hildesheimské záští není v
          pramenech doložena. Konflikt se odehrával v dolnosaském regionu, mimo
          dosah obvyklých rekrutačních os česko-bavorských a česko-saských
          kondotiérů. Welfská a hildesheimská strana získávaly posily zejména z
          řad domácích lén, hesenských a šlesvických oddílů; Wolfenbüttel pak
          najímal landsknechty v dolnosaském a dolnorýnském prostoru. České
          kontingenty, které se v téže době objevují v armádách braniborských a
          saských knížat, do tohoto tažení vyslány nebyly. Bitva u Soltau a
          obléhací operace záští tedy patří k těm konfliktům přelomu 15. a 16.
          století, ve kterých se česká vojenská tradice prakticky neprojevila.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Hildesheimer_Stiftsfehde"
          />
        </p>
      </Col>
    </Row>
  </>
)
