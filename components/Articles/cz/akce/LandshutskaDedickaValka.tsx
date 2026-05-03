import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const LandshutskaDedickaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="landshutska-dedicka-valka" />
        <h4>Landshutská dědická válka (1503–1505){draft && <DraftBadge />}</h4>
        <p>
          Landshutská dědická válka byla posledním velkým vnitrobavorským
          konfliktem mezi dvěma větvemi rodu Wittelsbachů – mnichovskou
          a&nbsp;landshutskou. Vypukla po smrti vévody Jiřího Bohatého
          Bavorsko-landshutského a&nbsp;týkala se otázky, zda jeho dědictví
          připadne podle ustanovení dědické smlouvy bavorsko-mnichovskému
          vévodovi Albrechtovi IV., nebo dceři zemřelého Alžbětě a&nbsp;jejímu
          manželovi falckraběti Ruprechtovi.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Landshuter_Erbfolgekrieg"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Vévoda Jiří Bohatý zemřel <b>1. prosince 1503</b> bez mužského dědice.
          V&nbsp;rozporu s&nbsp;wittelsbašskými dědickými smlouvami z&nbsp;roku
          1392 a&nbsp;1450, které ukládaly přechod vévodství na druhou větev
          rodu při vymření mužské linie, odkázal Jiří svým testamentem
          z&nbsp;roku 1496 dědictví dceři Alžbětě a&nbsp;jejímu manželovi
          falckraběti Ruprechtovi z&nbsp;Falce. Proti tomu se postavil
          bavorsko-mnichovský vévoda Albrecht IV., podporovaný římským králem
          Maxmiliánem I. Maxmilián zpočátku vystupoval jako prostředník, po
          neúspěchu jednání ovšem postavil Albrechta do role legitimního dědice.
          Spor přerostl do otevřené války, do níž se zapojily Falc, Hesensko,
          Norimberk, švábská říšská města a&nbsp;řada říšských knížat.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/War_of_the_Succession_of_Landshut"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Boje probíhaly především na území dolního Bavorska, v&nbsp;Horní Falci
          a&nbsp;v&nbsp;okolí Norimberka. Falcká strana shromáždila vojsko
          o&nbsp;síle přibližně 30&nbsp;000 mužů, opírala se o&nbsp;hrady
          a&nbsp;města landshutského vévodství a&nbsp;byla podporována Francií,
          Čechami a&nbsp;Bádenskem; v&nbsp;poli ji velel{' '}
          <b>Jiří z&nbsp;Wirsbergu</b> (Georg von Wisbeck). Albrecht IV.
          postavil do pole asi 60&nbsp;000 mužů a&nbsp;Maxmilián I. dalších
          přibližně 10&nbsp;000 mužů říšského a&nbsp;tyrolského dvorského
          vojska. Bavorsko se ocitlo v&nbsp;téměř celorepublikové mobilizaci.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00210.html"
          />
        </p>
        <p>
          K&nbsp;důležitým dílčím střetnutím patřila šarvátka u&nbsp;Altdorfu
          poblíž Landshutu <b>13. července 1504</b>, kde porazil Albrechtův
          oddíl falcké vojsko a&nbsp;kde mladý <b>Götz z&nbsp;Berlichingenu</b>
          přišel kulkou z&nbsp;hákovnice o&nbsp;pravou ruku, kterou si později
          nechal nahradit slavnou železnou protézou. V&nbsp;dolním Bavorsku
          a&nbsp;Horní Falci hořely vsi v&nbsp;rozsáhlém měřítku – odhady
          uvádějí přes 300 zničených falckých sídel.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/War_of_the_Succession_of_Landshut"
          />
        </p>
        <p>
          Rozhodující střetnutí přinesla bitva u&nbsp;Wenzenbachu severně od
          Řezna <b>12. září 1504</b>. Říšské vojsko vedené králem Maxmiliánem I.
          a&nbsp;vévodou Albrechtem IV. zde porazilo falcko-českou armádu pod
          velením Jiřího z&nbsp;Wirsbergu. V&nbsp;bitvě na falcké straně padla
          velká část českého žoldnéřského kontingentu odhadovaného na několik
          tisíc mužů; následný masakr zajatců českou stranou před bitvou
          a&nbsp;protiakce říšského vojska po prolomení falcké linie patří
          k&nbsp;nejkrvavějším epizodám pozdně středověkých střetnutí
          v&nbsp;říšské oblasti. V&nbsp;Wenzenbachu mělo dojít také
          k&nbsp;legendární epizodě, při níž byl mladý{' '}
          <b>Georg von Frundsberg</b>
          pasován Maxmiliánem na rytíře přímo na bojišti – počátek nejslavnější
          landsknechtské kariéry 16. století.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Schlacht_bei_Wenzenbach"
          />
        </p>
        <p>
          Po Wenzenbachu se falcká strana ocitla v&nbsp;defenzivě. Falckrabě
          Ruprecht zemřel <b>20. srpna 1504</b> ještě před bitvou na úplavici,
          Alžběta jej následovala v&nbsp;září téhož roku. Boje pokračovaly
          menšími střetnutími a&nbsp;obléháními až do roku 1505. Falcká strana
          se opírala především o&nbsp;hrady v&nbsp;Horní Falci a&nbsp;o&nbsp;
          tyrolskou pevnost <b>Kufstein</b>, kterou Maxmilián I. po
          několikatýdenním obléhání s&nbsp;těžkým dělostřelectvem dobyl
          v&nbsp;říjnu 1504; nasadil zde své moderní bombardy a&nbsp;nechal
          velitele Hanse Pinzenauera s&nbsp;posádkou popravit jako odstrašující
          příklad.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00210.html"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          <b>Kolínský arbitrážní výrok</b> z&nbsp;<b>30. července 1505</b>{' '}
          přiřkl většinu landshutského dědictví bavorsko-mnichovskému vévodovi
          Albrechtovi IV. Ten tak sjednotil pod jednou vládou Bavorsko-Mnichov
          a&nbsp;Bavorsko-Landshut a&nbsp;položil základ Bavorska v&nbsp;jeho
          pozdější novověké podobě. Část území v&nbsp;Horní Falci připadla jako
          odškodnění synům Ruprechta a&nbsp;Alžběty Otovi Jindřichovi a&nbsp;
          Filipovi a&nbsp;dala vznik tzv. Mladé Falci (Pfalz-Neuburg)
          s&nbsp;centrem v&nbsp;Neuburgu nad Dunajem. Maxmilián I. získal za
          svou podporu tyrolské državy <b>Kufstein</b>, <b>Kitzbühel</b> a&nbsp;
          <b>Rattenberg</b>, město Norimberk pak rozšíření svého území
          o&nbsp;některé statky východně od města.
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Češi sloužili na obou stranách, ale jejich nejvýznamnější nasazení
          bylo na falcké straně. Falckrabě Ruprecht a&nbsp;jeho otec kurfiřt
          Filip Falcký najali v&nbsp;Čechách rozsáhlé žoldnéřské oddíly
          navazující na tradici služby Wittelsbachům z&nbsp;dob bavorské války
          1459–1463. Nábory probíhaly především v&nbsp;západních a&nbsp;jižních
          Čechách, mezi veliteli najdeme potomky rodů, které sloužily už
          Ludvíkovi IX. Bohatému – pány z&nbsp;Ronšperka, z&nbsp;Janovic, ze
          Šternberka a&nbsp;další. Český král Vladislav II. Jagellonský
          oficiálně v&nbsp;konfliktu zachoval neutralitu, ale fakticky toleroval
          verbování v&nbsp;Plzeňském a&nbsp;Klatovském kraji.
          <Qt
            publication={PUBLICATIONS.TRESP}
            href="https://digi20.digitale-sammlungen.de/en/fs1/object/display/bsb00045259_00210.html"
          />
        </p>
        <p>
          V&nbsp;bitvě u&nbsp;Wenzenbachu utrpěli čeští žoldnéři těžké ztráty.
          Současná zpravodajská literatura zaznamenává údaje o&nbsp;několika
          tisících padlých nebo pobitých zajatcích, byť přesná čísla jsou
          předmětem diskuze. Wenzenbach se v&nbsp;české paměti uchoval jako
          trauma a&nbsp;jako jeden z&nbsp;mezníků konce velké éry českého
          žoldnéřství v&nbsp;Říši; v&nbsp;pozdějších desetiletích už čeští
          kondotiéři nehráli v&nbsp;říšských konfliktech někdejší dominantní
          roli a&nbsp;jejich místo postupně přebraly landsknechtské formace
          nového typu, jejichž symbolem se stal právě v&nbsp;této bitvě pasovaný
          Georg von Frundsberg.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Schlacht_bei_Wenzenbach"
          />
        </p>
      </Col>
    </Row>
  </>
)
