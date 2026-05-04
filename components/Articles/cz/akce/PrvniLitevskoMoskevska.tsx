import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const PrvniLitevskoMoskevska = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="prvni-litevsko-moskevska" />
        <h4>
          První litevsko-moskevská válka (1492–1494)
          {draft && <DraftBadge />}
        </h4>
        <p>
          První litevsko-moskevská válka let 1492–1494 byla úvodním z řady
          konfliktů mezi Velkoknížectvím litevským a Velkoknížectvím moskevským
          o ruské země podél horního toku Oky a Dněpru. Vypukla bezprostředně po
          smrti polského krále a litevského velkoknížete{' '}
          <b>Kazimíra IV. Jagellonského</b> dne <b>7. června 1492</b> a využila
          slabosti přechodu moci v jagellonské monarchii. Skončila tzv. Věčným
          mírem v Moskvě roku <b>1494</b>, jehož součástí byla územní cese
          významné části litevského pohraničí ve prospěch{' '}
          <b>Ivana III. Vasiljeviče</b>.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_litewsko-moskiewska_(1492%E2%80%931494)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Po sjednocení severovýchodní Rusi pod Moskvou v sedmdesátých a
          osmdesátých letech 15. století (anexe Novgorodu 1478, Tveru 1485)
          obrátil Ivan III. svou pozornost k západní hranici, kde litevské
          velkoknížectví drželo rozsáhlá rusky mluvící území podél Dněpru, Desny
          a horní Oky. Pohraniční knížata z rodů Vorotynských, Odojevských,
          Belevských a Mosalských — drobní vládci na pomezí — využila slabosti
          litevského dvora a počínaje rokem 1487 přecházela postupně se svými
          panstvími do moskevské služby. Tento proces, často provázený drobnými
          šarvátkami, je v polské historiografii znám jako „přerušovaná
          válka&ldquo; (<i>wojna podjazdowa</i>) a tvořil bezprostřední předehru
          otevřeného konfliktu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Muscovite%E2%80%93Lithuanian_War_(1492%E2%80%931494)"
          />
        </p>
        <p>
          Smrt Kazimíra IV. <b>7. června 1492</b> a rozdělení jagellonské
          monarchie — Polské království připadlo Janu Albrechtovi, Litva
          mladšímu Alexandrovi Jagellonskému — vytvořily ideální okamžik pro
          moskevský úder. Ivan III. neformálně podporoval pohraniční knížata,
          aby přešla pod Moskvu, a v srpnu 1492 vyslal pravidelná moskevská
          vojska k obsazení strategicky významných pevností.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Litauisch-Russischer_Krieg_(1492%E2%80%931494)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Průběh</h5>
        <p>
          Moskevská strategie spočívala v rychlém postupu menších kontingentů,
          které se opíraly o místní podporu pohraničních knížat. V srpnu a září
          1492 obsadil Ivan III. Mceńsk a Ljubutsk, na podzim padl Vorotynsk a v
          zimě 1492–1493 i Mosalsk a Serpejsk. <b>Federko Obolenskij</b> a{' '}
          <b>Vasilij Patrikejev</b>, velitelé moskevských oddílů, využili
          litevské nepřítomnosti a obsadili rozsáhlé úseky horního toku Oky.
          Litevská odpověď byla zpožděná a roztříštěná: Alexandr Jagellonský
          shromáždil litevskou hotovost teprve na jaře 1493, pokus o
          protiofenzivu k Mceńsku skončil pod hradem Ljubutsk porážkou
          litevského předvoje pod knížetem Semjonem Vorotynským.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_litewsko-moskiewska_(1492%E2%80%931494)"
          />
        </p>
        <p>
          Litevské velení nemělo dostatek sil k velké polní bitvě, neboť velká
          část litevské šlechty odmítala v této době vystoupit bez podpory
          polské strany. V průběhu roku 1493 se proto začala vést mírová
          jednání. Ivan III. nabídl Alexandrovi sňatek se svou dcerou{' '}
          <b>Helenou Ivanovnou</b> jako zástěrku územních ústupků a smlouva byla
          uzavřena na počátku roku 1494 — formálně označena jako{' '}
          <i>Věčný mír</i> a podepsaná v Moskvě <b>5. února 1494</b>.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Muscovite%E2%80%93Lithuanian_War_(1492%E2%80%931494)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Výsledek</h5>
        <p>
          Mírová smlouva z roku 1494 znamenala citelné územní ztráty pro Litvu.
          Litva uznala moskevskou svrchovanost nad Vorotynskem, Odojevskem,
          Belevskem, Mceńskem, Ljubutskem a několika dalšími pohraničními
          knížectvími — celkem území o rozloze přes 80 000 čtverečních
          kilometrů. Ivan III. získal titul „velkokníže veškeré Rusi&ldquo; (
          <i>государь всея Руси</i>), který Alexandr Jagellonský formálně uznal.
          Sňatek Heleny Ivanovny s Alexandrem se uskutečnil v únoru 1495 v Litvě
          a měl zajistit klid na hranicích, ve skutečnosti však Ivan III.
          využíval jejího postavení k vměšování do litevské politiky a jako
          záminky pro novou válku už v roce 1500.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Litauisch-Russischer_Krieg_(1492%E2%80%931494)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Primární prameny / Pohled starších kronik</h5>
        <p>
          Polský pohled zachytil Jan Długosz v posledních partiích svých{' '}
          <i>Annales</i> (lib. XII, <i>ad annum</i> 1492), které byly dokončeny
          krátce před autorovou smrtí v květnu 1480 — Długosz tedy stačil popsat
          pouze předehru války a smrt Kazimíra IV. Pokračování událostí let
          1492–1494 podává <i>De origine et rebus gestis Polonorum libri XXX</i>{' '}
          Marcina Kromera (kniha XXX, vydáno 1555). Kromer přejímá Długoszovu
          látku, doplňuje ji výslechy pamětníků a podrobnostmi o moskevské
          diplomatické taktice Ivana III.
          <Qt
            publication={PUBLICATIONS.DLUGOSZ}
            href="https://www.dbc.wroc.pl/dlibra/publication/8128"
          />
          <Qt
            publication={PUBLICATIONS.KROMER}
            href="https://www.bsb-muenchen-digital.de/~web/web1008/bsb10080831/images/index.html"
          />
        </p>
        <p>
          Z ruské strany dochovává nejstarší zápisy o tažení moskevských oddílů
          k Mceńsku a Vorotynsku <i>Voskresenský letopis</i> (
          <i>Voskresenskaja letopis</i>, vyd. v PSRL sv. VIII) a kompilační{' '}
          <i>Kronika polská, litevská, žmuďská a vší Rusi</i> Macieje
          Stryjkowského z roku 1582 (kn. XX), jež staví na Bychowcovi i na ústní
          paměti volyňské šlechty.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Voskresensk_Chronicle"
          />
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://polona.pl/item/kronika-polska-litewska-zmodzka-i-wszystkiej-rusi,NzkzNTk3MTM/"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Účast českých kondotiérů v první litevsko-moskevské válce byla omezená
          — válka probíhala převážně formou drobných pohraničních výprav a
          šarvátek pod vedením místních pohraničních knížat. Profesionalizace
          litevského vojska a najímání většího počtu pěších žoldnéřů z Polska,
          ze Slezska a z Čech začaly až za Alexandra Jagellonského a zejména za
          Zikmunda I. Starého — masivní nasazení českých pěšáků s píkami a
          hákovnicemi je doloženo až ve druhé válce (1500–1503), kdy u řeky
          Vedroši roku <b>1500</b> stáli proti moskevskému přesilovému tlaku.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Wojna_litewsko-moskiewska_(1492%E2%80%931494)"
          />
        </p>
        <p>
          V průběhu let 1492–1494 jsou doloženy pouze ojedinělé žoldnéřské roty
          najímané ve Slezsku a v Krakově. Větší organizované české kontingenty
          se v jagellonských službách proti Moskvě objevují až po prohrané bitvě
          u Vedroši roku 1500, kdy se profesionalizace žoldnéřského vojska stala
          pro Litvu nezbytností. Mnozí veteráni, kteří později bojovali u Orši
          roku 1514, prošli svou první mladickou službou právě v severovýchodním
          pohraničí v devadesátých letech 15. století.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Muscovite%E2%80%93Lithuanian_War_(1492%E2%80%931494)"
          />
        </p>
      </Col>
    </Row>
  </>
)
