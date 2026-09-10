import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BocklerskaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="bocklerska-valka" />
        <h4>Bocklerská válka (1467–1469){draft && <DraftBadge />}</h4>
        <p>
          Bocklerská válka (Böcklerkrieg) byl konflikt mezi rytířským spolkem
          jednorožce – tzv. <i>Böcklerbund</i> – a&nbsp;mladým
          bavorsko-mnichovským vévodou Albrechtem IV. Spolek byl založen{' '}
          <b>30. srpna 1466</b> na turnaji v&nbsp;Řezně 41 bavorskými rytíři,
          kteří se odlišovali znakem jednorohého kozlíka (Bock) zavěšeným na
          řetězu kolem krku – odtud lidové označení <i>bocklerové</i>. Konflikt
          měl výrazný česko-bavorský přesah, neboť řada bocklerů pocházela
          z&nbsp;rodů usazených na česko-bavorském pomezí a&nbsp;v&nbsp;jejich
          oddílech sloužili čeští žoldnéři.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/B%C3%B6cklerkrieg"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Po smrti vévody Albrechta III. v&nbsp;roce 1460 a&nbsp;po krátké
          regentské vládě se v&nbsp;Bavorsku-Mnichově prosazoval mladý vévoda
          Albrecht IV. Jeho politika centralizace zemské moci a&nbsp;omezování
          staré rytířské svobody, zejména výsadního práva záští a&nbsp;vlastních
          turnajů, narážela na odpor části bavorské šlechty. Bezprostřední
          záminkou pro vznik spolku byl spor o&nbsp;kontrolu nad statky
          Bavorského lesa a&nbsp;regenstaufského fojtství. K&nbsp;prvním
          a&nbsp;nejvýraznějším členům patřili <b>Hans z&nbsp;Degenbergu</b>{' '}
          jako mluvčí spolku, dále <b>Johann Staufer z&nbsp;Ernfelsu</b>,{' '}
          <b>Niclas z&nbsp;Abensbergu</b> a&nbsp;
          <b>Sebastian Pflug z&nbsp;Rabensteinu</b>. Dočasně k&nbsp;bocklerům
          přistoupil i&nbsp;vévodův mladší bratr Kryštof Silný, což Albrechta
          IV. přivedlo k&nbsp;rozhodnutí postavit se spolku ozbrojeně.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <p>
          Spolek hledal podporu u&nbsp;sousedů: u&nbsp;císaře Friedricha III.,
          u&nbsp;sousedního vévody bavorsko-landshutského Ludvíka IX. Bohatého
          a&nbsp;u&nbsp;českých pánů ze Šumavy a&nbsp;Plzeňska. Císař Friedrich
          III. však nakonec stál v&nbsp;této věci na straně mnichovské knížecí
          moci a&nbsp;<b>28. října 1467</b> na řezenském říšském sněmu formálně
          rozpustil spolek císařským reskriptem. Bockleři jeho rozhodnutí
          neuznali a&nbsp;přešli do otevřené opozice.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/B%C3%B6cklerkrieg"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Otevřené boje měly povahu drobné záštní války: vzájemné nájezdy,
          vypalování vsí, zajímání kupců a&nbsp;menší obléhání hradů
          a&nbsp;tvrzí v&nbsp;pohraničním pásu mezi Šumavou a&nbsp;dolním
          Bavorskem. Bocklerové se opírali o&nbsp;síť opevněných sídel – zejména
          o&nbsp;degenberská panství v&nbsp;Bavorském lese –
          a&nbsp;o&nbsp;podporu sousedních pánů z&nbsp;Čech. Vévoda Albrecht IV.
          odpovídal nasazením vlastního dvorského žoldnéřského vojska, zemských
          oddílů i&nbsp;dělostřelectva, jež se ukázalo jako rozhodující
          prostředek proti starým hradním fortifikacím.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/B%C3%B6cklerkrieg"
          />
        </p>
        <p>
          Hlavní vojenské tažení proběhlo mezi{' '}
          <b>listopadem 1468 a&nbsp;lednem 1469</b>. Albrechtova armáda –
          posílená o&nbsp;oddíly landshutského vévody Ludvíka IX. Bohatého –
          během několika týdnů dobyla klíčové bocklerské pevnosti: hrady{' '}
          <b>Falkenfels</b>, <b>Kollnburg</b>, <b>Saldenburg</b> a&nbsp;klášter{' '}
          <b>Rinchnach</b>. Začátkem ledna 1469 byly všechny degenberské državy
          obsazeny a&nbsp;bocklerský odpor v&nbsp;dolním Bavorsku se zlomil.
          Hans z&nbsp;Degenbergu, hlavní mluvčí spolku, byl nucen kapitulovat
          a&nbsp;přijmout vévodovy podmínky.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Spolek jednorožce byl počátkem roku 1469 fakticky rozpuštěn
          a&nbsp;jeho členové byli nuceni se podrobit vévodské autoritě.
          Albrecht IV. využil výsledku k&nbsp;dalšímu posílení zemské vlády
          a&nbsp;k&nbsp;omezení rytířské soudní imunity. Pro českou šlechtu
          v&nbsp;pohraničí znamenal výsledek konec snadných možností výnosné
          žoldnéřské služby a&nbsp;záští na bavorské straně. Tradice
          jednorožského hesla se však nepřerušila: o&nbsp;dvacet let později,
          v&nbsp;letech 1489–1493, část stejných rodů vystoupila znovu jako
          <i> Löwlerbund</i> proti Albrechtovi IV. a&nbsp;definitivně padla
          mnichovským mírem 10. dubna 1493.
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          V&nbsp;bocklerských řadách sloužili čeští páni a&nbsp;žoldnéři
          z&nbsp;rodů usazených na česko-bavorském pomezí, mezi nimi příslušníci
          pánů z&nbsp;Ronšperka, z&nbsp;Janovic na Rýzmberku, z&nbsp;Gutštejna
          a&nbsp;dalších. Někteří z&nbsp;nich už předtím sloužili ve velkých
          žoldnéřských oddílech vévody Ludvíka IX. Bohatého během bavorské války
          1459–1463 a&nbsp;v&nbsp;bocklerské válce navázali na své staré vazby
          v&nbsp;Bavorsku, byť tentokrát na opačné straně, než stál jejich
          předchozí zaměstnavatel.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <p>
          Účast Čechů v&nbsp;tomto konfliktu měla typicky drobnou, partyzánskou
          povahu odpovídající celkovému charakteru bocklerské války: malé jízdní
          oddíly v&nbsp;síle desítek mužů, přepady transportů a&nbsp;nájezdy
          přes šumavské průsmyky kolem Železné Rudy a&nbsp;Furthu im Wald.
          Skutečnost, že se Albrechtovo dělostřelectvo ukázalo rozhodujícím
          prostředkem proti hradům bocklerů, znamenala pro českou účast novou
          zkušenost: tradiční drobné záští už nestačilo čelit modernizovanému
          polnímu vojsku knížete. Po skončení války se část velitelů přesunula
          do jiných říšských konfliktů, mimo jiné do služeb pasovského biskupa,
          do záští Břeňka z&nbsp;Ronšperka 1475–1476 a&nbsp;později do
          landshutské dědické války.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1PkndLKuxe_e_ZmkPsNKzePwv8c0ROk1_/view"
          />
        </p>
      </Col>
    </Row>
  </>
)
