import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BerlichingenovaZasti = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="berlichingenova-zasti" />
        <h4>
          Záští Götze z Berlichingenu (1512–1517){draft && <DraftBadge />}
        </h4>
        <p>
          Götz (Gottfried) z Berlichingenu, zvaný <i>Götz se železnou rukou</i>{' '}
          (něm. <i>Götz mit der eisernen Hand</i>), byl franský rytíř a
          žoldnéřský hejtman, jehož série soukromých záští v letech 1512–1517
          patřila k posledním klasickým ukázkám rytířské svépomoci v Říši.
          Berlichingen, který přišel o pravou ruku roku 1504 v landshutské
          dědické válce a nahradil ji proslulou železnou protézou, vedl
          opakované konflikty proti norimberským měšťanům, biskupu bamberskému,
          mohučskému arcibiskupovi a dalším říšským knížatům. Jeho memoáry
          (sepsané kolem roku 1567) představují unikátní pramen pro pochopení
          rytířského válečnictví na sklonku středověku.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/G%C3%B6tz_von_Berlichingen"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Götz se narodil kolem roku <b>1480</b> na hradě Jagsthausen ve
          Francích jako jedenácté dítě rytíře Kiliana z Berlichingenu. Výcvik
          získal ve službách markraběte Fridricha IV. Braniborsko-ansbašského a
          brzy se osamostatnil jako velitel polních oddílů. Při obléhání
          Landshutu v září 1504, ve službách falckraběte Ruprechta v landshutské
          dědické válce, mu kulka z polní hákovnice rozdrtila pravé předloktí.
          Lékař v Heilbronnu mu protézu zhotovil podle šlechtických návrhů;
          existují celkem dvě dochované verze protézy, obě s mechanickými prsty
          schopnými svírat meč i kopí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/G%C3%B6tz_von_Berlichingen"
          />
        </p>
        <h5>Průběh záští</h5>
        <p>
          První velké záští vedl Götz proti norimberským měšťanům v letech{' '}
          <b>1512–1514</b> ve sporu o nezaplacený dluh kolínského krejčího,
          který se uchýlil pod ochranu Norimberka. Berlichingen unesl několik
          norimberských kupců, vyplenil zboží na cestě do Lipska a vynutil si
          výkupné odhadem 8 400 zlatých. Norimberk si stěžoval u císaře
          Maxmiliána I., který nad Götzem vyhlásil říšský acht; Berlichingen se
          však uchýlil pod ochranu mohučského arcibiskupa Albrechta
          Braniborského a později pod ochranu hraběte Františka ze Sickingenu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/G%C3%B6tz_von_Berlichingen"
          />
        </p>
        <p>
          Druhé velké záští bylo namířeno proti biskupu bamberskému Jiřímu III.
          Šaumberskému v letech <b>1513–1516</b>. Berlichingen v něm vystupoval
          jako mstitel za bratra rytíře Hanse Talhofera; v rámci kampaně dobyl
          několik biskupských tvrzí a získal výkupné odhadem 2 000 zlatých.
          Spory s biskupem se táhly i do roku 1516, kdy se Götz formálně
          podřídil říšskému soudu, ale výkupné si ponechal. Třetí záští, proti
          městu Kolín, bylo ukončeno smírnou smlouvou roku <b>1517</b>;
          Berlichingen už od něj získal odhadem 4 000 zlatých výkupného a uznal
          nadřazenost říšského soudu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/G%C3%B6tz_von_Berlichingen"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Götzova série záští reprezentuje vrchol a zároveň labutí píseň
          klasického rytířského válečnictví v Říši. Po roce 1517 se říšský
          systém uzemnil — Norimberk a další velká města získala faktickou
          podporu císařských orgánů a soukromá záští byla stále tvrději
          potlačována. Götz sice dále sloužil jako hejtman v selské válce 1525
          (na straně povstalců, byť nedobrovolně), v turecké válce 1542 a v osmé
          italské válce 1543, ale jeho éra rytířské svépomoci definitivně
          skončila s reformními zákony Karla V. Jeho memoáry, dochované v
          rukopisu z poslední čtvrtiny 16. století, ovlivnily i pozdější
          literární zpracování (Goetheho drama z roku 1773).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/G%C3%B6tz_von_Berlichingen"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Stěžejním pramenem je vlastní Götzova autobiografie{' '}
          <i>Lebens-Beschreibung Herrn Götzens von Berlichingen</i> (sepsána
          kolem roku 1567 z pamětí, dochována v rukopise jagsthausenského
          archivu, prvotisk vydal Wolfgang Gotthelf Pistorius v Norimberku{' '}
          <b>1731</b>). Zachycuje detailně norimberské záští 1512–1514,
          bamberský konflikt i landshutské obléhání 1504, kde přišel o ruku.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://www.digitale-sammlungen.de/de/details/bsb10437330"
          />
        </p>
        <p>
          Listinné podklady k císařské klatbě a smírným smlouvám obsahují{' '}
          <i>Reichstagsakten Mittlere Reihe</i> (jednání kolínského sněmu 1512 a
          augšpurského 1518); listy Albrechta Braniborského a Sickingenovy
          ochranné dopisy jsou v <i>Archivum Selectum</i> mohučské kapituly.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://www.dmgh.de/de/fs1/object/display/bsb00000761_meta:titlePage.html"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Götzova záští se odehrávala v jihoněmeckém prostoru, který byl
          tradičně prostoupen českými a moravskými žoldnéřskými oddíly.
          Berlichingenova protéza vznikla rok po skončení landshutské dědické
          války, jejímž vleklým bavorským bojištěm prošla i řada českých
          rotmistrů — kontinuita kondotiérského prostředí byla v této oblasti
          přímá a doložená. Sám Götz sloužil v první polovině 16. století v
          Pasově a v bavorských oddílech, kde se podle pramenů opakovaně
          potkával s českými hejtmany navazujícími na bocklerskou éru z období
          bavorské války a válek 70. a 80. let. Mezi jeho příležitostné
          spolubojovníky patřili veteráni jihoněmecké městské války, kteří v 90.
          letech 15. století sloužili u Wittelsbachů. Tyto vazby ukazují, že
          česká žoldnéřská tradice nepřetržitě fungovala v jihoněmeckém prostoru
          až do reformačního rozhraní 20. let 16. století — Berlichingenův svět
          byl jejich přirozeným pracovním prostorem.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/G%C3%B6tz_von_Berlichingen"
          />
        </p>
      </Col>
    </Row>
  </>
)
