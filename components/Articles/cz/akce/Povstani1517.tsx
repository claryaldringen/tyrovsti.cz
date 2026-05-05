import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const Povstani1517 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="povstani-1517" />
        <h4>
          Povstání nižší šlechty proti Zikmundu z Lobkovic (1517)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Povstání nižší šlechty proti pánu z Lobkovic v roce 1517 představuje
          vyústění několikaletého stavovského sporu mezi rytířstvem (zemany) a
          panským stavem v Českém království. Konflikt vyrůstal z nerovnováhy,
          kterou vneslo do zemského práva Vladislavské zřízení zemské z roku
          1500, a vrcholil otevřenou hrozbou ozbrojeného střetu pod nejvyšším
          hofmistrem Zikmundem z Lobkovic, oporou panské strany. Spor byl
          nakonec urovnán mírovou cestou tzv. Svatováclavskou smlouvou.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Svatov%C3%A1clavsk%C3%A1_smlouva"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Vladislavské zřízení zemské bylo přijato českým zemským sněmem v roce{' '}
          <b>1500</b> jako první tištěný kodex zemského práva v Koruně české.
          Zřízení formálně potvrdilo silné postavení panského stavu na úkor
          královské moci i nižší šlechty: omezilo přístup zemanů ke zemským
          úřadům, vyloučilo královská města z účasti na sněmování bez souhlasu
          pánů a posílilo soudní pravomoci panských zemských soudů. Mladší pán
          Zikmund z Lobkovic byl v období 1503–1517 nejvyšším hofmistrem Českého
          království a v očích nižší šlechty se stal symbolem panské nadvlády. K
          napjeté situaci přispívala i dlouhodobá nepřítomnost krále Vladislava
          II. (od roku 1490 sídlil převážně v Budíně) a pokračující slabá vláda
          jeho syna Ludvíka po roce 1516.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Vladislavsk%C3%A9_z%C5%99%C3%ADzen%C3%AD_zemsk%C3%A9"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          V letech 1515–1517 sílila nespokojenost rytířstva s tím, jak panský
          stav prosazoval své stavovské zájmy přes zemský sněm. Roku <b>1517</b>{' '}
          přerostlo napětí v otevřenou krizi: nižší šlechta v čele s rytířem
          Albrechtem Rendlem z Oušavy a několika východočeskými zemany si
          stěžovala u krále Ludvíka Jagellonského, shromáždila v Praze ozbrojené
          hotovosti a hrozila tažením proti Zikmundu z Lobkovic, kterého
          obviňovala ze zneužívání úřadu a omezování stavovských práv. Zikmund
          se uchýlil pod ochranu králova rady a zorganizoval vlastní panské
          hotovosti; v Praze a okolí se shromáždilo několik tisíc zemanů a
          panských oddílů, mezi nimi i najatí žoldnéřští hejtmani. Hrozba
          otevřeného boje v ulicích hlavního města byla reálná.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Svatov%C3%A1clavsk%C3%A1_smlouva"
          />
        </p>
        <p>
          Zprostředkování se ujali nejvyšší úředníci a smírné mediátorské komise
          sestavené z představitelů obou stran. Po několikatýdenním jednání byla{' '}
          <b>24. října 1517</b> v Praze uzavřena tzv. Svatováclavská smlouva,
          která komplexně řešila spor mezi pány, rytíři a královskými městy.
          Smlouva byla pojmenována podle data uzavření v týdnu svatého Václava
          (svátek 28. září) a v zemském znění byla vyhlášena na sněmu v
          Olomouci.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Svatov%C3%A1clavsk%C3%A1_smlouva"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Svatováclavská smlouva představuje jedno z nejvýznamnějších
          stavovských ujednání v dějinách Českého království. Hlavní body:
          rytířský stav získal rovný přístup k zemským úřadům dříve vyhrazeným
          pánům, královská města byla vyloučena z politické účasti na sněmu (s
          výjimkou daňových a celních otázek), byla přesně vymezena pravomoc
          zemských soudů a městských rychtářů a stanoveny soudní instance pro
          spory mezi šlechtou a městy. Smlouva ukončila otevřenou krizi, ale
          zároveň utvrdila dvoustavovský charakter politické správy království:
          stavovství pánů a rytířů mělo i nadále nadřazené postavení nad městy.
          V dlouhodobém měřítku smlouva přispěla k oslabování postavení
          královských měst v 16. století a vytvořila prostředí, v němž později
          rostla šlechtická opozice proti Habsburkům.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Svatov%C3%A1clavsk%C3%A1_smlouva"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Klíčovým pramenem pro stavovskou krizi 1517 a Svatováclavskou smlouvu
          jsou <b>Sněmy české</b> (ed. Antonín Gindely, díl I, Praha 1877;
          kramerius NK ČR), které obsahují plné znění smlouvy z 24. října 1517 i
          přípravná jednání pražských sjezdů 1515–1517. Listiny a stavovské
          opovědi jsou vydány ve <b>Vladislavském zřízení zemském</b> (vyd.
          Hermenegild Jireček, Praha 1882).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://kramerius.lib.cas.cz/search/?q=sn%C4%9Bmy+%C4%8Desk%C3%A9"
          />
        </p>
        <p>
          Z vyprávěcích pramenů líčí spor <b>Staří letopisové čeští</b> v
          záznamech ad annos 1515–1517 a později <b>Václav Hájek z Libočan</b> v{' '}
          <i>Kronice české</i> (1541), který stavovský rozkol vykládá jako
          příklad slabosti jagellonské vlády. Pro obraz pražského pobytu
          stavovských hotovostí v září–říjnu 1517 jsou důležité staroměstské
          městské knihy (AHMP) a manuálníky kanceláře nejvyššího hofmistra.
          <Qt
            publication={PUBLICATIONS.STARI_LETOPISOVE}
            href="https://archive.org/details/scriptorumrerum02unkngoog"
          />
        </p>
        <p>
          Pro právní rozměr smlouvy je nezastupitelná{' '}
          <b>Vladislavské zřízení zemské</b> (1500) v původním tisku — dostupné
          v digitalizovaných fondech NK ČR (kramerius) a v Národním archivu.
          Edice listin souvisejících se sporem o pravomoci pánů, rytířů a měst
          vyšly ve sbírce <i>Archivu českého</i> (sv. VI–VIII, vyd. František
          Palacký).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://kramerius5.nkp.cz/"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Konflikt byl výhradně vnitročeský — obě strany sporu mobilizovaly
          domácí stavovské hotovosti a najímaly profesionální hejtmany pro
          případ otevřených bojů v ulicích Prahy. Mezi povolanými veliteli se
          podle dobových zpráv objevili veteráni z bavorské, švábské a
          landshutské války i příslušníci tradičních žoldnéřských rodů z
          východních Čech a jižní Moravy. Otevřený boj se nakonec neuskutečnil,
          takže nasazení žoldnéřů zůstalo na úrovni hotovostní přípravy a
          demonstrace síly. Pražská konfrontace 1517 však ilustruje, že česká
          žoldnéřská tradice měla v zemi i v dobách kvazimíru přímou politickou
          váhu — najatí velitelé byli reálnou součástí stavovské politiky a
          jejich odhadovaná síla ovlivňovala průběh diplomatických jednání.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Vladislavsk%C3%A9_z%C5%99%C3%ADzen%C3%AD_zemsk%C3%A9"
          />
        </p>
      </Col>
    </Row>
  </>
)
