import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const PolskoTureckaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="polsko-turecka-valka" />
        <h4>
          Polsko-turecká válka o černomořské porty (1485–1503)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Polsko-turecká válka let 1485–1503 (pol. <i>Wojna polsko-turecka</i>)
          byla dlouhým nízkointenzivním konfliktem mezi polsko-litevským státem
          a Osmanskou říší o ovládnutí severozápadního Černomoří, především o
          moldavské přístavy Kilii a Akermán (dnešní Bilhorod-Dnistrovskyj).
          Válka se prolnula s vazalstvím Moldavského knížectví, vpády krymských
          Tatarů a velkou polskou bukovinskou výpravou Jana Olbrachta roku 1497.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_polsko-turecka_(1485%E2%80%931503)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Sultán Bajezid II. dobyl <b>14. července 1484</b> moldavskou Kilii a
          později <b>9. srpna 1484</b> také Akermán. Tím Osmané přerušili
          tradiční polskou obchodní cestu do Černomoří a uzavřeli Moldavsko v
          geopolitické pasti. Moldavský vévoda Štěpán Veliký oficiálně přijal v
          září 1485 v Kolomyji polskou lenní svrchovanost z rukou Kazimíra IV.
          Jagellonského a tím se válka stala spojeneckou povinností Polska.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Polish%E2%80%93Ottoman_War_(1485%E2%80%931503)"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          V září 1485 vpadlo osmanské vojsko podporované krymskými Tatary do
          Moldavska. Štěpán Veliký zvítězil <b>16. listopadu 1485</b> v bitvě u
          Catlabugy a později <b>6. března 1486</b> u Šeptelnic; přesto se mu
          nepodařilo přístavy znovu získat. V dalších letech se konflikt
          omezoval na pohraniční nájezdy a šarvátky. Velkou polskou bukovinskou
          výpravu zorganizoval roku 1497 polský král Jan I. Olbracht s asi 80
          000 muži; tažení skončilo katastrofou v Kozminském lese (pol.{' '}
          <i>Kozminský les</i>) <b>26. října 1497</b>, kde moldavské oddíly
          Štěpána Velikého společně s Tatary rozdrtily ustupující polskou
          armádu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_polsko-turecka_(1485%E2%80%931503)"
          />
        </p>
        <p>
          Po katastrofě v Kozminském lese reagovali Osmané a Tataři velkými
          odvetnými vpády. V letech 1498–1500 procházely tatarské a osmanské
          oddíly Podolím, Haličí a dolním Polskem až k Sandoměři, Lvovu a
          Přemyšli. Polská obrana se opírala o lokální polní hejtmany a o
          najímané žoldnéřské roty. Mírová jednání s Vysokou portou se táhla
          několik let; teprve <b>1503</b> bylo v Konstantinopoli uzavřeno
          příměří, které potvrdilo osmanskou držbu Kilie a Akermánu a polskou
          ztrátu přístupu k Černému moři.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Polish%E2%80%93Ottoman_War_(1485%E2%80%931503)"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Polsko-turecká válka 1485–1503 měla pro Jagellonský dvůr trpkou
          bilanci: ztráta moldavských přístavů byla definitivní, hospodářské
          ztráty z přerušení dálkového obchodu citelné a politická prestiž
          Polska oslabená. Štěpán Veliký se po roce 1497 odklonil od polského
          tábora a obnovil přímý vztah s Osmanskou říší. Pro vývoj polské armády
          však konflikt znamenal důležitou školu — vedl k pozdějšímu rozvoji
          takzvané <i>obrony potocznej</i>, stálého pohraničního vojska na
          jihovýchodní hranici Polska.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_polsko-turecka_(1485%E2%80%931503)"
          />
        </p>
        <h5>Primární prameny / Pohled starších kronik</h5>
        <p>
          Polský oficiální narativ k bukovinské výpravě roku 1497 vytvořil
          Marcin Kromer ve svých{' '}
          <i>De origine et rebus gestis Polonorum libri XXX</i> (kn. XXX, vyd.
          Basilej 1555). Kromer čerpal z dvorských pramenů kanceláře Jana I.
          Olbrachta a kriticky líčí katastrofu v <i>Kozminském lese</i>{' '}
          <b>26. října 1497</b>, ztrátu obozu i Štěpána Velikého jako bývalého
          spojence.
          <Qt
            publication={PUBLICATIONS.KROMER}
            href="https://www.bsb-muenchen-digital.de/~web/web1008/bsb10080831/images/index.html"
          />
        </p>
        <p>
          Z osmanské strany je nejvzácnějším dobovým svědectvím{' '}
          <i>Pamiętniki janczara</i> (Kronika sultánské janičářské stráže)
          Konstantina Michajloviče z Ostrovice, srbského zajatce, jenž v letech
          1462–1463 sloužil v sultánově gardě Mehmeda II. a později působil v
          Polsku. Jeho kronika sepsaná na konci 15. století popisuje osmanskou
          výpravu na Kilii a Akermán <b>1484</b> z bezprostřední vojenské
          zkušenosti. Doplňující polský pohled přináší <i>Kronika polska</i>{' '}
          Marcina Bielského (Kraków 1551, kn. IV).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://polona.pl/item/pamietniki-janczara-czyli-kronika-turecka-konstantego-z-ostrowicy-napisana-miedzy,Nzg2NDc1OTU/"
          />
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://polona.pl/item/kronika-marcina-bielskiego,NzM5MzcwMzc/"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          V počátečních fázích války hráli čeští a moravští žoldnéři spíše
          okrajovou roli; jednalo se o vzdálené bojiště, jehož ekonomika byla
          orientována na polské poklady. Situace se změnila v souvislosti s
          bukovinskou výpravou roku 1497. Polský sněm tehdy najal větší
          žoldnéřské oddíly z celé střední Evropy a v jejich středu byly i české
          roty, mezi nimiž působili veteráni slezských a uherských tažení.
          Bukovinská katastrofa <b>26. října 1497</b> postihla i tyto české
          kontingenty; část mužů padla v Kozminském lese, jiní v dalších letech
          přešli k <i>obroně potocznej</i> a podíleli se na obraně Podolí proti
          tatarským vpádům.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_polsko-turecka_(1485%E2%80%931503)"
          />
        </p>
      </Col>
    </Row>
  </>
)
