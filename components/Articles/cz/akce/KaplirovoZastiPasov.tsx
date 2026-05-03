import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const KaplirovoZastiPasov = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="kaplirovo-zasti-pasov" />
        <h4>
          Záští Mikuláše Kaplíře z Vimperka s pasovským biskupem (1458–1460)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Mikuláš Kaplíř ze Sulevic, pán na Vimperku a jeden z nejvýznamnějších
          českých kondotiérů 15. století, vedl spolu se svým bratrem Petrem
          Kaplířem v letech 1458 až 1460 ozbrojené záští proti pasovskému
          biskupovi Oldřichovi III. z Nußdorfu. Spor je typickou ukázkou
          pohraniční šlechtické záští mezi českou pošumavskou šlechtou a
          bavorsko-rakouskými preláty a v dochovaných pasovských pramenech je
          označován jako{' '}
          <i>
            „zerstörerischer Einfall der Ritter Nikolaus und Peter Kappler aus
            dem böhmischen Winterberg&ldquo;
          </i>{' '}
          (zničující vpád rytířů Mikuláše a Petra Kaplíře z českého Vimperka).
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Mikuláš Kaplíř ze Sulevic, který Vimperk získal koncem 50. let 15.
          století (král Jiří z Poděbrad mu spolu s bratrem Petrem panství
          potvrdil), ovládal opěrný bod nad Zlatou stezkou — důležitou obchodní
          cestou spojující Pasov s Prachaticemi. Již roku 1454 mu Ladislav
          Pohrobek udělil právo vybírat clo na Zlaté stezce. Kontrola nad
          provozem stezky a celními poplatky byla tradičně předmětem sporů mezi
          pánem Vimperka, prachatickými měšťany a pasovským biskupstvím, kterému
          Prachatice patřily jako léno. Po nástupu Oldřicha III. z Nußdorfu na
          pasovský stolec roku 1451 se vztahy postupně zhoršovaly a v letech
          1458–1459 přerostly do otevřeného nepřátelství.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Kaplířové využili své vimperské družiny i najatých žoldnéřů k
          přepadávání pasovských obchodníků na Zlaté stezce a k loupežným
          výpadům proti biskupským vesnicím v podhůří Šumavy. Ve dvou hlavních
          taženích roku 1458 a 1459 zasáhli zejména okolí Waldkirchenu —
          biskupského trhového městečka na hlavní větvi Zlaté stezky.
          Zablokovali část solného obchodu směřujícího z Pasova do Prachatic,
          čímž biskupství způsobili významné finanční ztráty. Vimperský hrad
          sloužil jako základna a sklad lupu a stal se shromaždištěm
          pohraničních záškodníků.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <p>
          Pasovský biskup Oldřich III. z Nußdorfu — který zároveň zastával úřad
          císařského kancléře u Fridricha III. a důvěrného rádce vévody Ludvíka
          IX. Bavorsko-landshutského — odpovídal vlastními výpady proti
          vimperskému panství a snažil se získat podporu rakouských hejtmanů a
          bavorského vévody. Bezprostřední odpovědí na Kaplířovy vpády bylo
          opevnění Waldkirchenu: Oldřich nechal roku 1460 obehnat městečko
          mohutnou kruhovou hradbou v délce přibližně jednoho kilometru — byl to
          jediný trh v celém pasovském knížectví, který dostal kompletní
          hradební opevnění, a vznikl výhradně jako reakce na české vpády ze
          strany Kaplířových družin.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
        <p>
          Spor však nebylo možné lokálně rozhodnout a postupně se vplétal do
          širších diplomatických jednání mezi králem Jiřím z Poděbrad a
          sousedními říšskými knížaty. Roku 1460 byl Kaplíř v rámci nájmu vévody
          Ludvíka IX. Bavorsko-landshutského zaměstnán proti markraběti
          Albrechtovi III. Achillovi v bavorské válce, kde sám velel kontingentu
          asi 900 mužů, čímž se těžiště jeho aktivit přesunulo z pošumavské
          hranice do středních Frank. Tím se akutní fáze spor s Pasovem částečně
          utlumila, byť konkrétní mírová smlouva uzavřena nebyla.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Spor nebyl nikdy formálně urovnán. Po Kaplířově smrti pokračoval pod
          jeho dědici a posléze pod novými majiteli Vimperka — Petr Kaplíř byl
          podle pozdější tradice biskupem dokonce vojensky poražen. Bavorští
          spojenci pasovského biskupa pak <b>18. září 1468</b> dobyli a vypálili
          dosud neopevněné město Vimperk. Pasovský biskup zopakoval roku 1468
          tažení proti Jiřímu z Poděbrad — Tresp dokládá, že Oldřich III.
          poskytl vojenský kontingent obojím protihusitským křížovým výpravám
          (1458/59 i 1468). Vimperk přesto zůstal trvalou hrozbou pro Zlatou
          stezku a pro pasovský solný obchod ještě po několik dalších
          desetiletí.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Záští bylo vedeno především osobní družinou bratrů Mikuláše a Petra
          Kaplířových ze Sulevic a jejich najatými oddíly. Mikuláš Kaplíř patřil
          mezi nejvýznamnější české kondotiéry své generace, schopné v krátké
          době postavit oddíl o síle několika set až tisíce mužů — později u
          vévody Ludvíka IX. doložen kontingent asi 900 bojovníků. Jeho
          vimperští žoldnéři byli zkušení ve válce v hornatém terénu Šumavy a v
          boji proti opevněným biskupským vesnicím a městečkům. Vimperský
          přepadový oddíl tvořil jednu z nejmobilnějších skupin v celém
          česko-bavorském pohraničí.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00161.html"
          />
        </p>
        <p>
          Vedle Kaplířů se v menší míře v pohraničních akcích angažovala i další
          západočeská a jihočeská šlechta, mimo jiné Janovicové z Janovic a
          Rýzmberka, kteří měli vlastní kondotty schopné rychlé mobilizace.
          Kaplířova vimperská základna sloužila jako sběrné místo žoldnéřů,
          kteří mezi tažením do Bavor a Frank přečkávali kratší období na české
          straně hranice. Tresp poznamenává, že právě v letech 1458–1462 dosáhl
          proces přesunu české žoldnéřské kondotty z místních (pohraničních)
          operací do velkých říšských konfliktů svého vrcholu — Kaplířovo záští
          je toho jedním z klasických příkladů.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/de/fs1/object/display/bsb00045259_00164.html"
          />
        </p>
      </Col>
    </Row>
  </>
)
