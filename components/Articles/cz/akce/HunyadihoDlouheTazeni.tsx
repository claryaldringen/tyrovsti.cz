import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const HunyadihoDlouheTazeni = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="hunyadiho-dlouhe-tazeni" />
        <h4>
          Dlouhé tažení Jánose Hunyadiho na Balkán (1443 – 1444)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Tzv. <i>Dlouhé tažení</i> bylo protiosmanské zimní tažení uherského
          krále Vladislava I. (Vladislava III. Jagellonského) a sedmihradského
          vojevůdce Jánose Hunyadiho do nitra Balkánu v letech 1443 až 1444.
          Křesťanská armáda postoupila přes Srbsko a Bulharsko hluboko za
          Balkánské hory, dosáhla několika polních vítězství a přiměla
          osmanského sultána Murada II. uzavřít mírovou smlouvu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Long_campaign"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Po skončení uherské občanské války (1440 – 1442) a Hunyadiho úspěších
          proti osmanským nájezdům v jižních Uhrách – zejména v bitvě u Sibině
          (Hermannstadtu) 22. března 1442, kdy Hunyadi rozdrtil oddíly bega
          Mezida – vyhlásil papež Evžen IV. v bule z 1. ledna 1443 křížovou
          výpravu proti Osmanům. Na Květnou neděli roku 1443 bylo na sněmu v
          Budíně oficiálně vyhlášeno tažení; uvádí se síla okolo 40 000 mužů,
          většinou Maďarů, k nimž se připojily oddíly polské, srbské, valašské a
          kontingent německých a českých žoldnéřů. Hlavní silou výpravy byl
          Hunyadi, formálně v čele zůstal král Vladislav I.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Long_campaign"
          />
        </p>
        <h5>Postup do nitra Balkánu</h5>
        <p>
          V polovině října 1443 přešla křesťanská armáda Dunaj u Bělehradu;
          Hunyadi velel předvoji, k němu se ve Smederevu připojil srbský despota
          Đurađ Branković. Vojsko postoupilo údolím Moravy a obsadilo Niš. V
          bitvě u Niše počátkem listopadu 1443 porazil Hunyadi sloučené oddíly
          rumelského beglerbega Kasima Paši a Turahana Bega; oba turečtí
          velitelé uprchli do Sofie. Téměř současně rozdrtil Hunyadi v bitvě u
          Aleksinaca další osmanský sbor – podle dobových údajů utrpěli Osmané
          ztrátu 2 000 padlých a 4 000 zajatých.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Ni%C5%A1_(1443)"
          />
        </p>
        <h5>Bitva u Zlatice (12. prosince 1443)</h5>
        <p>
          Po obsazení Sofie pokračovalo vojsko přes Balkánské pohoří k průsmyku
          Zlatica (Zlatitsa). 12. prosince 1443 zde narazilo na hlavní osmanskou
          armádu vedenou samotným sultánem Muradem II. Průsmyk byl zatarasen
          velkými balvany a pokácenými kmeny; v tuhé zimě, sněhu a mrazu se
          křesťanské oddíly nedokázaly probít obrannou linií janičářů a děl.
          Vladislav a Hunyadi zavelili k ústupu; vojska kryla zpáteční pochod
          vozovými hradbami.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Zlatitsa"
          />
        </p>
        <h5>Bitva u Kunoviče a návrat</h5>
        <p>
          Při zpáteční cestě v lednu 1444 odrazila křesťanská armáda osmanský
          protiútok v bitvě u Kunoviče (Kunovica). V přepadu zde Uhři zajali
          Mahmuda Bega, sultánova zetě a bratra velkovezíra Çandarlı Halila
          Paši; tento zajatec se později stal páčidlem mírových jednání. Koncem
          ledna se vojsko vrátilo do Bělehradu, v únoru 1444 dorazilo do Budína,
          kde bylo vítáno jako hrdinové. Tažení trvalo zhruba čtyři měsíce a
          vstoupilo do dějin pod jménem <i>hosszú hadjárat</i> – Dlouhé tažení.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Long_campaign"
          />
        </p>
        <h5>Mírová jednání a smlouva ze Segedínu</h5>
        <p>
          Murad II., zaměstnaný současně válkou v Anatolii proti karamanskému
          beylik, navrhl mír. Diplomatickým prostředníkem se stala sultánova
          manželka Mara Branković, dcera srbského despoty; 6. března 1444
          vyslala otci posla a započala jednání. Vladislav 24. dubna 1444
          vypravil do Edirne uherského posla Stojku Gisdaniče. Po souběžných
          rozhovorech v Edirne a Segedíně byl 15. srpna 1444 v Segedíně
          ratifikován desetiletý mír; Murad obnovil srbskou despotovinu pod
          Brankovićem (vrácena Smederevo a další pevnosti) a Mahmud Beg byl
          propuštěn za výkupné 70 000 dukátů.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Treaty_of_Szeged"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Dlouhé tažení vrátilo na čas křesťanským mocnostem iniciativu na
          Balkáně, obnovilo Srbsko jako nárazníkový stát a posílilo prestiž
          Hunyadiho i Vladislava v Evropě. Vytvořilo také předpoklady pro novou
          křížovou výpravu, kterou vzápětí prosadil papežský legát Giuliano
          Cesarini argumentem, že přísaha daná „nevěřícím“ není závazná. Tato
          výprava záhy vyústila v neúspěšné tažení a katastrofu u Varny 10.
          listopadu 1444.
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Hunyadiho armáda zahrnovala vedle uherských a sedmihradských oddílů
          také kontingent najatých českých a moravských žoldnéřů, vyzbrojených a
          cvičených v husitské tradici – s ručnicemi, pavézami a bojovými vozy.
          Tito vojáci tvořili pěchotní jádro vojska a podíleli se na úspěšném
          vedení polních bitev v Srbsku i na obraně tábora při ústupu přes
          Balkánské hory v prosinci 1443. Vozová hradba kryla křesťanské
          jednotky během ústupu od Zlatice a opět při bitvě u Kunoviče.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Long_campaign"
          />
        </p>
      </Col>
    </Row>
  </>
)
