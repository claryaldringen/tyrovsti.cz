import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const NemeckaSelskaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="nemecka-selska-valka" />
        <h4>Německá selská válka (1524–1525){draft && <DraftBadge />}</h4>
        <p>
          Německá selská válka (něm. <i>Deutscher Bauernkrieg</i>) byla rozsáhlá
          rolnická vzpoura v jižním a středním Německu v letech 1524–1525. Šlo o
          největší masové povstání v Říši před francouzskou revolucí; podle
          různých odhadů povstalo až 300 000 sedláků a městské chudiny. Válka
          splynula s reformačním kvasem a byla krvavě potlačena spojeneckými
          oddíly Švábského spolku, saských a hesenských knížat. Mezi politické
          důsledky patří definitivní podřízení venkovské společnosti knížecí
          vrchnosti a rozkol luterské reformace s radikálním křídlem.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Deutscher_Bauernkrieg"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Strukturální napětí v jihoněmeckém venkově narůstalo již od konce 15.
          století — komutace robotních povinností, zápas o lesy a obecní
          pastviny, zostřování poddanských dávek a šíření tzv. římského práva.
          Lokální vzpoury (např. <i>Bundschuh</i> 1493 a 1517 a{' '}
          <i>Armer Konrad</i> ve Württembersku 1514) předpovídaly velký výbuch.
          Reformační kázání Martina Luthera, ale ještě radikálněji Tomáše
          Müntzera a Andrease Karlstadta, daly vzpouře teologický rámec.
          Bezprostředním zápalem se v létě 1524 stal odpor poddaných hraběte
          Sigmunda von Lupfen ve Stühlingenu, kteří odmítli sbírat hlemýždí
          ulity pro hraběnčino vyšívání a zformovali první selský svaz.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/German_Peasants%27_War"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Z původní hornoschwarzwaldské vzpoury se hnutí během několika měsíců
          rozšířilo přes Horní Švábsko, Franky, Durynsko, Sasko, Tyroly,
          Salcbursko a Alsasko. <b>V březnu 1525</b> formulovali horní Švábové v
          Memmingenu tzv. Dvanáct artikulí — programový spis žádající volbu
          farářů, zrušení nevolnictví, omezení dávek a obnovení obecních práv.
          Ozbrojené selské svazy (<i>Haufen</i>) o síle několika tisíc mužů
          obsazovaly města a ničily kláštery — padl Weinsberg, Heilbronn,
          Würzburg, Bamberg, část tyrolských biskupských sídel. V Durynsku
          stanul v čele radikálního křídla kazatel Tomáš Müntzer.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/N%C4%9Bmeck%C3%A1_selsk%C3%A1_v%C3%A1lka"
          />
        </p>
        <p>
          Knížecí protiofenzíva začala koncem března 1525. Velitel Švábského
          spolku Jiří Truchsess z Waldburgu, zvaný <i>Bauernjörg</i>, rozdrtil
          jihošvábské oddíly v bitvě u Wurzachu <b>14. dubna 1525</b> a u
          Leipheimu <b>4. dubna 1525</b>. Hlavní franské síly byly rozdrceny u
          Königshofenu (na Tauberu) <b>2. června 1525</b>. Klíčová bitva proti
          Müntzerově skupině se odehrála <b>15. května 1525</b> u Frankenhausenu
          — sjednocené oddíly hesenského lankraběte Filipa I. a saských vévodů
          zde za několik hodin zničily přes 5 000 sedláků; Müntzer byl zajat a
          po mučení popraven. Tyroly a Salcbursko byly pacifikovány do podzimu
          1525. Celkové ztráty selských oddílů odhadují prameny na 70 000 až 100
          000 mrtvých.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Deutscher_Bauernkrieg"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Vojenská porážka byla totální. Knížata využila vzpouru k posílení
          správních a daňových pravomocí; venkovská společnost na další tři
          staletí přijala podobu pevně vázaného poddanství. Martin Luther v
          přímé reakci napsal proti sedlákům spis{' '}
          <i>Wider die räuberischen und mörderischen Rotten der Bauern</i>, čímž
          se rozešel s radikálním křídlem reformace. Celá řada svobodných
          říšských měst ztratila politickou autonomii ve prospěch okolních
          knížat a Švábský spolek dosáhl vrcholu své moci, který udržel ještě
          desetiletí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/German_Peasants%27_War"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Programovým dokumentem hnutí jsou{' '}
          <b>Dvanáct artikulí horních Švábů</b> (něm.{' '}
          <i>Die zwölf Artikel der Bauernschaft in Schwaben</i>), formulované v
          Memmingenu v březnu 1525 zřejmě <b>Sebastianem Lotzerem</b> a tištěné
          v desítkách dobových vydání. Doplňkový{' '}
          <i>Bundesordnung der Bauernschaft</i> (1525) sestavil pravděpodobně
          augšpurský humanista <b>Petr Gasser</b>.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://www.digitale-sammlungen.de/de/details/bsb00012810"
          />
        </p>
        <p>
          Knížecí stranu reprezentují Lutherovy spisy{' '}
          <i>
            Ermahnung zum Frieden auf die zwölf Artikel der Bauerschaft in
            Schwaben
          </i>{' '}
          (duben 1525) a{' '}
          <i>Wider die räuberischen und mörderischen Rotten der Bauern</i>{' '}
          (květen 1525), oba v původních wittenberských tiscích. Narativní popis
          tažení v Durynsku zaznamenal mansfeldský kronikář <b>Heinrich Hus</b>{' '}
          (asi 1490–1554) ve své <i>Chronik der Mansfelder Grafschaft</i>,
          dochované v rukopise.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://www.digitale-sammlungen.de/de/details/bsb00084025"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Hlavní jádro selské války bylo od českých zemí geograficky vzdálené,
          ale dvě oblasti se přímo dotýkají českého kontextu. V Horních a
          Dolních Lužicích vypukly menší poddanské vzpoury inspirované německým
          hnutím; potlačila je vrchnost saských kurfiřtů a v Lužicích zemská
          hotovost stavů. Jednotlivá ohniska se objevila i v Krušnohoří, mj. ve
          vazbě na hornické nepokoje v Jáchymově. Z vojenského hlediska tvořila
          spolková a knížecí vojska potlačující povstání jihoněmecké
          landsknechty pod českobavorskými a dolnorakouskými hejtmany; doložené
          české kontingenty však v této válce neoperovaly. Spojení Čech se
          selskou válkou zůstalo politicky nepřímé — utrakvistická šlechta a
          města sledovala události se znepokojením, ale s ohledem na vlastní
          stavovský zájem nikoliv se sympatií k povstalcům.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/N%C4%9Bmeck%C3%A1_selsk%C3%A1_v%C3%A1lka"
          />
        </p>
      </Col>
    </Row>
  </>
)
