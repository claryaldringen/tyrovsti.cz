import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const DobytiPajreka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="dobyti-pajreka-1471-1472" />
        <h4>
          Bitva u Nýrska a dobytí Pajreka (1467 a 1472){draft && <DraftBadge />}
        </h4>
        <p>
          Pajrek (něm. <i>Bayereck</i>, „bavorský roh&ldquo;) byl český
          pohraniční hrad nad Nýrskem, založený roku 1356 pány z Janovic — jeho
          jméno nepřímo odkazuje na to, že stál „na bavorském rohu&ldquo;
          Šumavy. V klíčové fázi pozdní vlády Jiřího z Poděbrad jej držel
          královský klatovský hejtman Racek Janovský z Janovic, který odtud roku
          1467 úspěšně odrazil bavorský křižácký vpád v bitvě u Nýrska a nakonec
          po jeho smrti hrad roku 1472 padl do rukou bavorských spojenců
          papežské strany.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Pajrek"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra: papežská klatba a bavorské tažení</h5>
        <p>
          Dne <b>23. prosince 1466</b> prohlásil papež Pavel II. Jiřího z
          Poděbrad za kacíře, sesadil ho z trůnu a vyhlásil proti husitským
          Čechám křížovou výpravu. Z říšských knížat byl ochoten výpravu
          vojensky podpořit pouze vévoda Ludvík IX. Bavorsko-landshutský, neboť
          doufal, že po případném pádu Jiřího získá český trůn. Ludvíkova
          výprava směřovala přes Šumavu do oblasti Klatovska, kde se
          shromaždovala jednotka tzv. <i>křižáků</i> pod velením rytíře
          označovaného českými prameny jako Kyvolf.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Bitva_u_N%C3%BDrska"
          />
        </p>
        <p>
          Hrad Pajrek nad Nýrskem kontroloval pohraniční přechod ze Šumavy do
          bavorského Zwieselu a v té době jej spolu s tvrzí v Horním Nýrsku
          držel Racek Janovský z Janovic — klatovský královský hejtman a aktivní
          kondotiér ve službách Jiřího z Poděbrad. Pajrek se tak stal opěrným
          bodem české obrany proti bavorskému křižáckému vpádu, nikoli
          loupežnickým hnízdem, jak jej někdy chybně líčí starší literatura.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Pajrek"
          />
        </p>
        <h5>Bitva u Nýrska 22. září 1467</h5>
        <p>
          Dne <b>22. září 1467</b> se u Nýrska, několik kilometrů od hradu
          Pajreka, střetlo královské vojsko vedené Rackem Janovským z Janovic s
          bavorskými křižáky. Rackovo vojsko tvořila jeho vlastní manská jízda,
          oddíly měšťanů z Klatov a z Domažlic a oddíl královských žoldnéřů.
          Křižáci byli na hlavu poraženi: jejich velitel Kyvolf padl v boji a do
          českého zajetí se dostalo údajně až dva tisíce bavorských rytířů a
          pěšáků. Bohatá kořist nahradila škody, které křižáci způsobili při
          svém vpádu — město Nýrsko bylo při ústupu vypáleno.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Bitva_u_N%C3%BDrska"
          />
        </p>
        <p>
          Vítězství u Nýrska mělo strategický význam: zastavilo postup křížové
          výpravy v jihozápadních Čechách a upevnilo Jiřího pozici mezi českou
          katolickou šlechtou. Drobní zemané v okolí, kteří zvažovali přechod ke
          katolické opozici, se po porážce Bavorů stáhli; část odbojné šlechty
          byla nucena Jiřího uznat. Nýrská bitva tak patří mezi důležité — byť
          dnes méně známé — vojenské úspěchy závěrečné fáze poděbradské éry.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Bitva_u_N%C3%BDrska"
          />
        </p>
        <h5>Po Rackově smrti: dobytí a vypálení Pajreka 1472</h5>
        <p>
          Racek Janovský zastával v roce 1468 ještě úřad klatovského hejtmana,
          ale brzy poté zemřel. Pozůstalá vdova Barbora z Běšína prodala roku
          1470 svou výbavu o hodnotě 250 kop a polovinu hradu Pajreka s
          příslušenstvím Mikuláši z Běšína. Hrad zůstal v rodinných rukou, ale
          bez Rackovy přítomnosti ztratil hlavní obranný význam.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Pajrek"
          />
        </p>
        <p>
          V červnu 1472 podnikli Bavoři další vpád do jihozápadních Čech. Na
          rozdíl od roku 1467 už proti nim nestál Racek Janovský s královskými
          oddíly. Bavorský velitel Prakendorfer (něm. <i>Prackendorfer</i>)
          Pajrek dobyl, hrad vypálil a Rackova syna (pravděpodobně Václava)
          odvezl do bavorského zajetí. Pajrek po tomto dobytí ztratil vojenský
          význam a postupně chátral.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Pajrek"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Pajrek po roce 1472 zůstal částečně zachovalou ruinou bez vojenského
          významu. Roku 1512 panství koupil Jindřich Kostomlatský z Vřesovic a
          po jeho popravě roku 1520 hrad postupně pustl; v písemnostech z roku
          1556 už je veden jako „pustý zámek&ldquo;. Bavorské tažení proti hradu
          z roku 1472 bylo posledním významným zásahem bavorského vévody do
          jihozápadních Čech v rámci protihusitských křížových výprav — papežský
          pokus o svržení Jiřího z Poděbrad vojenskou cestou se po Jiřího smrti
          v březnu 1471 a po nástupu Vladislava Jagellonského beztak vyčerpal.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Pajrek"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Z české strany se obrany Pajreka a bitvy u Nýrska 1467 účastnily
          především vlastní oddíly Racka Janovského z Janovic, manská jízda jeho
          domění, městské pěší kontingenty z Klatov a Domažlic a oddíly
          královských žoldnéřů ve službách Jiřího z Poděbrad. Janovicové patřili
          mezi nejvýraznější jihočesko-pošumavské kondotiérské rody — Racek se
          vedle úřadu klatovského hejtmana podílel na vícero taženích za hranice
          (mj. ve službách wittelsbašských knížat) a jeho příbuzný Racek z
          Janovic a na Rýzmberku patřil k stálým kondotiérům Ludvíka IX.
          Bavorsko-landshutského.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <p>
          Bitva u Nýrska je pozoruhodná i tím, že proti sobě stáli dva typy
          vojska, které se v jiných říšských konfliktech vyskytovaly bok po
          boku: na jedné straně český kondotiérský oddíl s těžkou jízdou,
          městskou pěchotou a střelci, na druhé bavorská zemská hotovost
          doplněná o křižácké dobrovolníky pod papežským praporem. Rackův
          velitelský úspěch demonstroval, že česká taktika husitského dědictví —
          koordinace pěchoty, jezdectva a střelců v defenzivně vedeném střetu —
          zůstává po čtyřiceti letech od Lipan stále účinnější než klasický
          rytířský útok.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
      </Col>
    </Row>
  </>
)
