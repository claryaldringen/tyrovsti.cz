import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const PovstaniSlovenskychHornichMest = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="povstani-slovenskych-hornich-mest" />
        <h4>
          Povstání slovenských horníků v Banské Bystrici (1525–1526)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Povstání horníků v hornouherských horních městech (něm.{' '}
          <i>Bergarbeiteraufstand in Neusohl</i>, maď.{' '}
          <i>besztercebányai bányászfelkelés</i>) v letech 1525–1526 patřilo k
          největším hornickým vzpourám pozdně středověké Evropy. Centrem byla
          Banská Bystrica (něm. <i>Neusohl</i>) — sídlo měďné společnosti rodu
          Thurzo a augšpurského bankéřského domu Fugger. Vzpoura probíhala ve
          stínu uherské krize, která vedla k bitvě u Moháče, a stala se jedním z
          prvních velkých kapitálových konfliktů ve střední Evropě.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/Beszterceb%C3%A1nya"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Banská Bystrica byla od roku 1494 sídlem tzv.{' '}
          <i>Ungarischer Handel</i> — společného podniku uherského magnáta Jana
          Thurzo a augšpurského Jakoba Fuggera. Společnost ovládala těžbu mědi a
          stříbra v hornouherských horních městech (Banská Bystrica, Kremnica,
          Banská Štiavnica, Ľubietová, Špania Dolina) a držela monopol na vývoz
          uherské mědi do Středomoří a Antverp. Roku 1521 bylo zavedeno
          proplácení mezd ve znehodnocené drobné minci místo v plnohodnotných
          groších a zavedeny nové „šichtmistrovské&ldquo; odvody. Hornická obec,
          organizovaná v silných bratrstvech, vystoupila proti tomu otevřeným
          odporem.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/Beszterceb%C3%A1nya"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Otevřená vzpoura propukla na podzim 1525. Horníci v Banské Bystrici a
          okolních hornických osadách odmítli sjet do dolů, dobyli správní
          budovy společnosti a vyhnali fuggerovské úředníky. Vzpoura se přelila
          do Kremnice, Banské Štiavnice a Ľubietové. Vůdcem povstání se stal
          hornický předák Šebastián Tylo. Na jaře 1526 podporovala uherská
          královská kancelář pod králem Ludvíkem II. jednání mezi povstalci a
          fuggerovsko-thurzovskou společností; jednání ovšem nepřinesla
          výsledek. Po porážce uherského vojska u Moháče <b>29. srpna 1526</b>{' '}
          byly hornouherské poměry na několik měsíců paralyzovány — povstalci na
          čas drželi de facto kontrolu nad městy.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Banska_Bystrica"
          />
        </p>
        <p>
          Po nástupu Ferdinanda I. Habsburského a jeho stabilizaci v Uhrách se
          vrátil i ozbrojený nátlak. V říjnu 1526 — či krátce poté — byly do
          Banské Bystrice vyslány královské oddíly podporované fuggerovskou
          hotovostí; vůdcové povstání včetně Tyla byli zatčeni a ve velké
          veřejné popravě v Banské Bystrici v letech 1526–1527 popraveni. Asi
          padesát rebelů bylo sťato, další desítky odsouzeny na galeje nebo
          vypovězeny. Hornická bratrstva musela přistoupit na předchozí mzdové
          podmínky.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/Beszterceb%C3%A1nya"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Povstání skončilo vojenskou porážkou hornické obce a posílením
          fuggerovsko-thurzovského monopolu. Z hlediska sociálních dějin však
          šlo o první velký konflikt mezi raně novověkým mezinárodním kapitálem
          a námezdně pracující hornickou obcí na území střední Evropy. Ferdinand
          I. události využil k rozšíření královské kontroly nad horními městy —
          postupně přiměl Fuggery snížit podíl ve společnosti a do roku 1546
          přenesl těžbu pod přímou habsburskou komorní správu. Banská Bystrica
          se zachovala jako přední evropské měďné centrum až do 17. století.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Banska_Bystrica"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Klíčové prameny tvoří <b>banskobystrické městské knihy</b> a registra
          společnosti <i>Ungarischer Handel</i> (kopie ve Fuggerově archivu v
          Augsburgu — Fürstlich und Gräflich Fuggersches Familien- und
          Stiftungsarchiv, Dillingen, Fasc. 2.1.6 a násl.). Banskobystrický
          archiv (Štátny archív v Banskej Bystrici) uchovává úřední
          korespondenci s fuggerovsko-thurzovskou kanceláří, mzdové listy a
          soudní zápisy o popravách 1526–1527.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://www.minv.sk/?statny-archiv-v-banskej-bystrici"
          />
        </p>
        <p>
          Pro vyprávěcí vrstvu zachycují uherskou krizi let 1525–1526
          pokračovatelé Bonfiniho — zejména <b>István Brodarics</b> v{' '}
          <i>
            De conflictu Hungarorum cum Solymano Turcarum imperatore ad Mohach
            historia verissima
          </i>{' '}
          (Krakov 1527), který sám zažil dvorské poměry před Moháčem a okrajově
          se zmiňuje o paralyzování horních měst. Bonfiniho <i>Decades</i> v
          jejich pokračování (vyd. Sambucus 1568) přidávají rámcový obraz
          hornouherských sociálních konfliktů.
          <Qt
            publication={PUBLICATIONS.BONFINI}
            href="https://mek.oszk.hu/04200/04231/"
          />
        </p>
        <p>
          Listiny Ferdinanda I. týkající se zákroku proti horníkům (říjen
          1526–leden 1527) jsou edovány v <i>Magyar Történelmi Tár</i> a v
          rakouských <i>Regesta imperii</i> (Wien). Soudní záznamy o popravě
          Šebastiána Tyla a dalších předáků se zachovaly v Banské Bystrici a
          byly částečně publikovány ve slovenské edici{' '}
          <i>Pamätné knihy banskobystrické</i> (Bratislava 1956).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/Beszterceb%C3%A1nya"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Hornická obec banskobystrického prostoru byla po staletí etnicky
          smíšená — kromě Slováků, Němců a Maďarů zahrnovala silnou příměs Čechů
          a Moravanů, kteří přicházeli za prací z Krušnohoří a z
          moravsko-uherské hranice. Část účastníků vzpoury byla tedy přímo
          českého a moravského původu. V ozbrojené pacifikaci roku 1526 však
          vystupovaly především domácí uherské oddíly Ferdinandových stoupenců a
          fuggerovská soukromá hotovost; samostatné polní kontingenty z Čech zde
          doloženy nejsou. Spojení s českým prostředím se v události projevuje
          hlavně v personální, nikoliv vojenské rovině.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/Beszterceb%C3%A1nya"
          />
        </p>
      </Col>
    </Row>
  </>
)
