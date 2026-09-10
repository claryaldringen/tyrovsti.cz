import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BojeUNyrska1467 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="boje-u-nyrska-1467" />
        <h4>
          Boje u&nbsp;Nýrska s&nbsp;bocklerskými křižáky (1467)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Boje u&nbsp;Nýrska v&nbsp;<b>roce 1467</b> tvořily úvodní fázi
          ozbrojeného střetu mezi obhájci pohraničního Klatovska a&nbsp;skupinou
          bavorsko-falckých pánů, jejichž jádrem byli příslušníci právě
          ustaveného spolku jednorožce — tzv. <i>bocklerů</i>. Jednalo se
          o&nbsp;sled drobných potyček a&nbsp;přepadů, který vyvrcholil
          otevřenou polní bitvou <b>22. září 1467</b>, kdy královský klatovský
          hejtman <b>Racek Janovský z&nbsp;Janovic</b> rozhodným úderem
          rozprášil křižácký kontingent vedený rytířem označovaným českými
          prameny jako Kyvolf.
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
          Po vyhlášení papežské křížové výpravy proti Jiřímu z&nbsp;Poděbrad
          směřovala hlavní vlna říšského tlaku přes Šumavu na Klatovsko.
          K&nbsp;mnichovskému vévodovi Albrechtovi IV. se neodvážil otevřeně
          připojit nikdo z&nbsp;významných říšských knížat — pouze landshutský
          vévoda Ludvík IX. Bohatý vyslal omezený kontingent. Jeho doplněním se
          stali bocklerští páni a&nbsp;spojenecké družiny z&nbsp;Bavorského
          lesa, jejichž shromaždištěm bylo okolí <i>Zwieselu</i> a&nbsp;Furthu
          im Wald. Hrad <b>Pajrek</b> nad Nýrskem, držený Rackem Janovským,
          kontroloval zásadní průchod ze Šumavy do bavorského Zwieselu
          a&nbsp;stal se přirozeným ohniskem české obrany.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Bitva_u_N%C3%BDrska"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Bavorští křižáci postupovali přes Železnou Rudu a&nbsp;Nýrsko směrem
          do nitra Klatovska. Racek Janovský z&nbsp;Janovic vedl proti nim
          drobnou pohraniční válku po několik týdnů: vlastní manská jízda,
          oddíly měšťanů z&nbsp;Klatov a&nbsp;Domažlic a&nbsp;královští žoldnéři
          přepadávali předvojové oddíly nepřítele a&nbsp;narušovali jeho
          zásobování. Hlavní polní střetnutí se odehrálo <b>22. září 1467</b>{' '}
          přímo u&nbsp;Nýrska. Křižáci byli na hlavu poraženi: jejich velitel
          Kyvolf padl v&nbsp;boji, do českého zajetí se podle některých zpráv
          dostalo až dva tisíce bavorských rytířů a&nbsp;pěšáků a&nbsp;bohatá
          kořist pomohla nahradit škody, které křižáci způsobili při svém vpádu.
          Město Nýrsko bylo při ústupu vypáleno.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Bitva_u_N%C3%BDrska"
          />
        </p>
        <h5>Účastníci a&nbsp;důsledky</h5>
        <p>
          Na české straně bojovali Racek Janovský z&nbsp;Janovic se svou
          rýzmberskou manskou jízdou, klatovští a&nbsp;domažličtí měšťané,
          pošumavská zemská hotovost a&nbsp;královští žoldnéři vyslaní Jiřím
          z&nbsp;Poděbrad. Na bavorské straně stáli rytíř Kyvolf, drobní
          falcko-bavorští páni z&nbsp;okolí Chamu a&nbsp;Zwieselu
          a&nbsp;křižáčtí dobrovolníci pod papežským praporem.
          K&nbsp;bocklerskému jádru patřil mimo jiné <b>Sebastian Pflug</b>,
          který v&nbsp;následujících letech vystoupil v&nbsp;dalších bavorských
          akcích proti Jiřímu z&nbsp;Poděbrad i&nbsp;v&nbsp;tažení proti
          Tachovu.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <p>
          Vítězství u&nbsp;Nýrska zastavilo postup křížové výpravy
          v&nbsp;jihozápadních Čechách a&nbsp;upevnilo Jiřího pozici mezi českou
          katolickou šlechtou. Drobní zemané, kteří v&nbsp;okolí zvažovali
          přechod ke katolické opozici, se po porážce Bavorů stáhli; část
          odbojné šlechty byla nucena Jiřího uznat. Z&nbsp;hlediska bocklerské
          strany šlo o&nbsp;první otevřenou ukázku, že drobné křižácké družiny
          nestačí na koordinovanou obranu české pohraniční hotovosti — důležitá
          lekce, kterou bockleři zaplatili ztrátou jádra svého velení
          v&nbsp;dalších střetnutích na obou stranách hranice.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
      </Col>
    </Row>
  </>
)
