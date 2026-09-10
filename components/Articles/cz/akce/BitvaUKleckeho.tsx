import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BitvaUKleckeho = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="bitva-u-kleckeho" />
        <h4>
          Tatarský vpád a bitva u Kleckého (5. srpna 1506)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Bitva u Kleckého (pol. <i>bitwa pod Kleckiem</i>, bělor.{' '}
          <i>bitva pad Kleckam</i>) byla rozhodujícím střetem mezi
          litevsko-polským vojskem pod velením knížete Michaela Lvoviče
          Glinského a krymsko-tatarskými oddíly bratří Bitiho a Burnaše Geraje,
          synů krymského chána Mengliho I. Geraje. K bitvě došlo{' '}
          <b>5. srpna 1506</b> u městečka Klecka v dnešním Bělorusku a stala se
          klíčovou epizodou Glinského kariéry — drtivé vítězství upevnilo jeho
          postavení nejmocnějšího muže Litvy v posledních měsících vlády
          velkoknížete Alexandra Jagellonského.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Bitwa_pod_Kleckiem"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          V létě roku 1506 podnikl krymský chanát mohutný kořistný vpád na území
          Litevského velkoknížectví. Tatarské oddíly v síle odhadem 20 000 mužů
          přešly Dněpr a začaly plenit jihovýchodní pohraničí; jejich jádro
          směřovalo k Lidě, Slucku a Novogrodku. Velkokníže Alexandr Jagellonský
          byl v té době těžce nemocný a pobýval ve Vilně, kde připravoval sněm;
          obranou země pověřil maršálka dvora Michaela Glinského, který se právě
          vrátil z lázní v Brně a měl pověst nejschopnějšího vojevůdce litevské
          služby.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Kletsk"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Glinski shromáždil vojsko o síle přibližně 7 000 jezdců — jádro
          tvořila litevská šlechta, knížecí družiny a najaté oddíly z polských a
          moravských zemí. K vojsku se připojili i bratři Glinského Vasilij a
          Ivan, příslušníci přední polské šlechty a zkušení bojovníci z
          volyňských knížectví. Glinski postupoval rychle proti tatarským
          oddílům, které byly v té době rozptýlené po pohraničí ve čtyřech
          proudech kořistění. K rozhodující bitvě došlo <b>5. srpna 1506</b> v
          ranních hodinách na pravém břehu řeky Lan u Klecka. Glinski rozdělil
          vojsko na dva sbory: hlavní sbor velel osobně, druhý svěřil rytíři
          Andřeji z Drozdova.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Bitwa_pod_Kleckiem"
          />
        </p>
        <p>
          Tataři vedení bratry Bitim a Burnašem Geraji se opřeli o tradiční
          taktiku rychlých výpadů a předstíraných ústupů, ale Glinski včas
          přesunul své dělostřelectvo a střelce na příhodné vyvýšení nad řekou.
          Po několikahodinové dělostřelecké přípravě a kontaktním boji u brodu
          se tatarské řady zhroutily; část oddílů byla zatlačena do bažin u řeky
          Laně, kde se utopila. Bitva trvala asi šest hodin a skončila úplnou
          porážkou tatarského vojska. Padlo přes 3 000 Tatarů, mnohem víc se
          jich utopilo nebo zemřelo na útěku; Glinski osvobodil přibližně 40 000
          litevských a běloruských zajatců, kteří měli být odvedeni do otroctví.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Schlacht_bei_Klezk"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Vítězství u Kleckého bylo nejvýznamnějším litevským úspěchem proti
          krymským Tatarům první poloviny 16. století a krátkodobě zastavilo
          jejich vpády na sever. Pro Glinského znamenalo vrchol kariéry: po
          bitvě se stal nesporným hrdinou království, ale také cílem
          intenzivních útoků protivníků v čele s Janem Zaberezinským. Velkokníže
          Alexandr zemřel <b>19. srpna 1506</b>, pouhé dva týdny po bitvě, a na
          trůn nastoupil jeho bratr Zikmund I. Starý, který Glinskému z
          politických důvodů odepřel úřad vrchního maršálka. Spor mezi Glinským
          a novým velkoknížetem se tak stal přímou příčinou vzpoury, která
          vypukla už v roce 1507.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Kletsk"
          />
        </p>
        <h5>Primární prameny / Pohled starších kronik</h5>
        <p>
          Nejpodrobnějším narativním pramenem o bitvě je{' '}
          <i>Kronika polska, litewska, żmodzka i wszystkiej Rusi</i> Macieje
          Stryjkowského (Königsberg 1582, kn. XXIII). Stryjkowski líčí Glinského
          příchod z Brna, mobilizaci litevské hotovosti, rozdělení vojska na
          pravém břehu Lanu i šestihodinový boj s rozprášením Tatarů do bažin.
          Litevsko-běloruský pohled doplňuje <i>Bychowiecova kronika</i>{' '}
          (Kronika Bychowca, vyd. v PSRL sv. 32), která uvádí 40 000
          osvobozených zajatců a klade Glinského vítězství do souvislosti s jeho
          pozdější vzpourou.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://polona.pl/item/kronika-polska-litewska-zmodzka-i-wszystkiej-rusi,NzkzNTk3MTM/"
          />
          <Qt
            publication={PUBLICATIONS.BYCHOWIEC}
            href="https://en.wikipedia.org/wiki/Bychowiec_Chronicle"
          />
        </p>
        <p>
          Polskou perspektivu přináší{' '}
          <i>De origine et rebus gestis Polonorum</i> Marcina Kromera (lib.
          XXX), který staví Glinského do role obránce Litvy a předestírá
          tragický paradox jeho pozdějšího přechodu do moskevské služby. Kratší,
          ale dobový zápis o bitvě se nachází i v <i>Kronice polské</i> Marcina
          Bielského (Kraków 1551, kn. IV).
          <Qt
            publication={PUBLICATIONS.KROMER}
            href="https://www.bsb-muenchen-digital.de/~web/web1008/bsb10080831/images/index.html"
          />
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://polona.pl/item/kronika-marcina-bielskiego,NzM5MzcwMzc/"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Přímá účast českých a moravských žoldnéřů u Kleckého je pravděpodobně
          okrajová. Glinski sám pobýval před vpádem v Brně a měl rozsáhlé
          kontakty na moravskou a slezskou šlechtu — v jeho doprovodu se uvádějí
          osobní strážci a několik dvořanů, kteří mohli pocházet z tohoto
          prostředí. Hlavní bojový kontingent však tvořila litevská a ruténská
          šlechta s tatarskou pomocnou jízdou, takže česká stopa v bitvě je
          spíše stopou jednotlivců než organizovaných polních oddílů. Glinského
          pozdější vzpoura roku 1507–1508 a jeho přechod do moskevské služby
          měly na české kondotiérské prostředí mnohem hmatatelnější dopad — řada
          veteránů Kleckého boje pak sloužila proti Litvě a Polsku v moskevském
          žoldu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Bitwa_pod_Kleckiem"
          />
        </p>
      </Col>
    </Row>
  </>
)
