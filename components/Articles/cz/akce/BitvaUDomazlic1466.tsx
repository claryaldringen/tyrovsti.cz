import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BitvaUDomazlic1466 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="bitva-u-domazlic-1466" />
        <h4>
          Bitva u&nbsp;Domažlic — odražení bavorsko-falckých křižáků (1466)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Bitva u&nbsp;Domažlic z&nbsp;<b>roku 1466</b> patří mezi první
          ozbrojené střety na česko-bavorské hranici, které vypukly
          bezprostředně po vyhlášení papežské klatby nad Jiřím z&nbsp;Poděbrad.
          Šlo o&nbsp;menší pohraniční střetnutí, v&nbsp;němž domažlická hotovost
          a&nbsp;královské oddíly odrazily nájezd shromážděných
          bavorsko-falckých křižáckých dobrovolníků. Akce předcházela velkým
          tažením bocklerské éry a&nbsp;ukázala, že obrana jihozápadních Čech se
          opírala o&nbsp;trvalou pohotovost manské hotovosti chodských vsí
          a&nbsp;královských měst.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Domažlice byly královským městem strážícím průchod přes Český les ve
          směru na Furth im Wald a&nbsp;Cham. Chodské vsi v&nbsp;okolí města
          měly tradiční povinnost zemské stráže (<i>custodia limitis</i>)
          a&nbsp;tvořily páteř pohraniční obrany. Po vyhlášení papežské klatby
          v&nbsp;prosinci 1465 a&nbsp;po sesazení Jiřího z&nbsp;trůnu počátkem
          roku 1466 začaly v&nbsp;sousedním Bavorsku a&nbsp;Horní Falci vznikat
          drobné křižácké družiny — zčásti tvořené říšskými dobrovolníky, zčásti
          najatými žoldnéři, kteří hledali kořist v&nbsp;husitských Čechách.
          Hlavní vlna říšského tlaku ještě nepřišla — vévoda Ludvík IX.
          Bavorsko-landshutský vystoupil otevřeně až v&nbsp;roce 1467 —
          a&nbsp;tak se nájezd 1466 odehrál v&nbsp;režii lokálních
          falcko-bavorských pánů.
        </p>
        <h5>Průběh</h5>
        <p>
          Křižácký oddíl postupoval přes Český les směrem na Domažlicko
          s&nbsp;cílem vyplenit pomezní vsi a&nbsp;narušit zásobovací cesty mezi
          Klatovskem a&nbsp;Plzeňskem. Domažlická městská hotovost
          ve&nbsp;spolupráci s&nbsp;chodskými vsemi a&nbsp;s&nbsp;královskými
          oddíly se postavila vetřelcům na okrajových polích u&nbsp;Domažlic.
          Boj měl povahu typického pohraničního střetu: jezdecká přestřelka,
          krátký úder do shromážděné rytířské jízdy a&nbsp;rozprášení křižáckých
          řad mezi pomezní lesy. České oddíly využily znalosti terénu
          a&nbsp;zachytily prchající nepřátele na lesních cestách směrem
          k&nbsp;Furthu.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <h5>Účastníci a&nbsp;důsledky</h5>
        <p>
          Z&nbsp;české strany se bitvy zúčastnili domažličtí měšťané, chodská
          manská hotovost a&nbsp;královské oddíly z&nbsp;klatovského hejtmanství
          — tehdy v&nbsp;rukou <b>Racka Janovského z&nbsp;Janovic</b>, který
          o&nbsp;rok později porazil další křižáckou výpravu v&nbsp;bitvě
          u&nbsp;Nýrska. Z&nbsp;bavorské strany šlo o&nbsp;volné spojení
          falcko-bavorských pánů a&nbsp;říšských dobrovolníků pod papežským
          praporem. Odražení nájezdu mělo psychologický dopad: ukázalo, že
          drobné křižácké výpady přes pomezí nemohou prolomit kombinovanou
          obranu městské pěchoty, manské jízdy a&nbsp;královských oddílů. Akce
          z&nbsp;roku 1466 tak předznamenala rozhodující bitvu u&nbsp;Nýrska
          v&nbsp;září 1467 a&nbsp;potvrdila, že hlavní tlak proti husitským
          Čechám bude muset přijít až s&nbsp;nasazením celé bavorské zemské
          hotovosti pod vévodou Ludvíkem IX.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <p>
          Z&nbsp;hlediska velkých dějin papežské křížové výpravy proti Jiřímu
          z&nbsp;Poděbrad jde o&nbsp;epizodu, z&nbsp;hlediska česko-bavorského
          pomezí však o&nbsp;důležitý doklad toho, že obrana jihozápadních Čech
          v&nbsp;letech 1466–1468 vycházela z&nbsp;dlouho budované sítě
          královských hejtmanství v&nbsp;Klatovech, Domažlicích a&nbsp;Plzni
          a&nbsp;ze stálé pohotovosti chodské hotovosti. Účast Čechů
          v&nbsp;tomto konfliktu měla přirozeně obrannou povahu — na rozdíl od
          pozdějších záští, kdy čeští páni vystupovali ofenzivně na bavorské
          straně.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Domažlice"
          />
        </p>
      </Col>
    </Row>
  </>
)
