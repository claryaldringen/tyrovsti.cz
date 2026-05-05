import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const KutnohorskaBourka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="kutnohorska-bourka" />
        <h4>
          Kutnohorská hornická bouře (1494–1496)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Hornická bouře v Kutné Hoře v letech 1494–1496 byla rozsáhlým
          povstáním horníků královského horního města proti zhoršujícím se
          pracovním podmínkám, snižování mezd a změnám v hornickém právu (
          <i>báňském řádu</i>), které provedla královská kancelář Vladislava II.
          Jagellonského. Patří mezi nejvýznamnější sociální konflikty pozdně
          středověkých Čech a zároveň ukazuje meze královské politiky v klíčovém
          centru produkce stříbra — kutnohorské Vlašské mincovny a Kaňku, jež
          dlouhodobě financovaly chod českého státu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Vzpoura_kutnohorsk%C3%BDch_hav%C3%AD%C5%99%C5%AF_(1496)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Kutná Hora byla po staletí druhým nejvýznamnějším městem v Čechách a
          klíčovým producentem evropského stříbra. Ve druhé polovině 15. století
          se však kutnohorská těžba dostávala do strukturální krize — výnosy
          slábly s prohlubujícími se šachtami, rostly náklady na čerpání spodní
          vody a evropský trh se stříbrem začal být zaplavován stříbrem z nově
          otevřených dolů ve Schwazu, Jáchymově a později z potosínského a
          mexického dovozu. Mzdy kutnohorských <i>perkmistrů</i> a{' '}
          <i>nákladníků</i> klesaly, což se promítalo do životních podmínek
          horníků (<i>havířů</i>) i podpovrchových dělníků (<i>topičů</i> a{' '}
          <i>tlučců</i>).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Kutn%C3%A1_Hora"
          />
        </p>
        <p>
          V roce <b>1494</b> královská komora pod správou nejvyššího mincmistra
          rozhodla o reformě výplatního systému — místo dosavadního týdenního
          šichtovního systému zavedla měsíční vyplácení a snížila pevnou mzdu o
          přibližně desetinu s tím, že rozdíl měl být pokryt podílem z
          vytěženého stříbra (<i>verkového podílu</i>). Pro horníky to znamenalo
          přesun rizika z těžaře na ně samotné. Odpor proti tzv.{' '}
          <i>novému rejstříku</i> propukl na podzim 1494 nejprve formou stávky.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Vzpoura_kutnohorsk%C3%BDch_hav%C3%AD%C5%99%C5%AF_(1496)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Průběh</h5>
        <p>
          Stávka horníků se na podzim 1494 rozšířila po celém kutnohorském
          revíru, zastavila těžbu na Kaňku, v Trpolci a v dalších šachtách,
          ochromila výrobu Vlašské mincovny a vyvolala ozbrojené šarvátky mezi
          havíři a městskou hotovostí. Horníci shromážděni na vrchu Špimberku a
          později u kostela sv. Trojice u Hor Kuten formulovali stížnostní
          listy, které byly předány královské kanceláři. Vladislav II.
          Jagellonský vyslal do Kutné Hory komisaře a pokusil se o smírná
          jednání, jež však opakovaně ztroskotala — král byl pod tlakem horního
          stavu a šlechtických věřitelů a nemohl ustoupit v zásadní otázce
          výplatního systému.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Vzpoura_kutnohorsk%C3%BDch_hav%C3%AD%C5%99%C5%AF_(1496)"
          />
        </p>
        <p>
          V roce <b>1496</b> přerostla stávka v otevřené ozbrojené povstání:
          horníci ovládli městské brány, obsadili část mincovny a pokusili se
          získat podporu venkovského lidu na Čáslavsku a Kouřimsku. Královské
          vojsko pod nejvyšším mincmistrem <b>Benešem z Veitmile</b> a se
          souhlasem horních šlechtických rodů Kutnou Horu obsadilo a povstání
          tvrdě potlačilo. Vůdci hornické bouře byli zatčeni a v letech
          1496–1497 popraveni — podle některých pramenů bylo popraveno až deset
          hlavních organizátorů, další desítky byly potrestány vyhoštěním z
          města a zabavením majetku.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Vzpoura_kutnohorsk%C3%BDch_hav%C3%AD%C5%99%C5%AF_(1496)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Výsledek</h5>
        <p>
          Povstání bylo potlačeno a nový výplatní systém zaveden, hornická krize
          se však tím nevyřešila — kutnohorská těžba pokračovala v úpadku po
          celé 16. století. Z dlouhodobého hlediska představovala bouře
          1494–1496 první z řady sociálních konfliktů v českých horních městech
          a ukázala napětí mezi rostoucími finančními nároky jagellonského dvora
          a strukturálním poklesem příjmů z kutnohorského stříbra. Ve
          střednědobém horizontu vedla k posílení role nejvyššího mincmistra a
          královských komisařů v hornické správě a k oslabení autonomie
          kutnohorské městské rady.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Kutn%C3%A1_Hora"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Primární prameny</h5>
        <p>
          Hlavním vyprávěcím pramenem k hornické bouři jsou{' '}
          <b>Staří letopisové čeští</b> v záznamech ad annos 1494–1497, kteří
          stručně líčí stávku, ozbrojené střety v městě, zákrok královského
          mincmistra Beneše z Veitmile i následné popravy vůdců. Záznamy se
          zachovaly v několika rukopisných tradicích a vyšly ve Fontes rerum
          Bohemicarum (FRB).
          <Qt
            publication={PUBLICATIONS.STARI_LETOPISOVE}
            href="https://archive.org/details/scriptorumrerum02unkngoog"
          />
        </p>
        <p>
          Pro vnitřní obraz kutnohorské obce je nezastupitelný{' '}
          <b>Mikuláš Dačický z Heslova</b> a jeho <i>Paměti</i> (sepsané v
          letech 1575–1626 na základě rodinné letopisné tradice). Dačický čerpal
          z rodových zápisků otce Bartoše Dačického (kutnohorského městského
          písaře 16. století) i ze ztracených „kutnohorských letopisů&ldquo;;
          pro bouři 1494–1496 podává jak jméno popraveného předáka{' '}
          <i>Matěje haviře</i>, tak detaily o městské hotovosti.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://kramerius5.nkp.cz/"
          />
        </p>
        <p>
          Úřední dokumentaci tvoří kutnohorské městské knihy a manuálníky 90.
          let 15. století (uložené ve Státním okresním archivu Kutná Hora) a
          horní řády ze 70. let 15. století (tzv. <i>Václavské horní právo</i>,
          vydané J. A. Kohoutem v 19. století). Listiny Vladislava II. týkající
          se reformy báňského řádu jsou zachyceny ve Sněmech českých a v
          Národním archivu (fond Stará manipulace).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://kramerius.lib.cas.cz/search/?q=sn%C4%9Bmy+%C4%8Desk%C3%A9"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Kutnohorská hornická bouře byla výlučně vnitropolitickým a sociálním
          konfliktem, jehož potlačení provedlo královské vojsko bez nasazení
          mezinárodních žoldnéřských kontingentů. České městské hotovosti a
          šlechtické bandériální oddíly, které se na potlačení podílely, byly
          shromážděny z přímých služebných závazků koruně, nikoli formou
          žoldnéřského najímání. Kutnohorská bouře tak ilustruje nikoli válečné,
          nýbrž domácí policejní použití české vojenské síly konce 15. století —
          formáty a velikosti polních rot však zhruba odpovídají těm, jež v téže
          době sloužily v Uhrách proti Osmanům.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Vzpoura_kutnohorsk%C3%BDch_hav%C3%AD%C5%99%C5%AF_(1496)"
          />
        </p>
      </Col>
    </Row>
  </>
)
