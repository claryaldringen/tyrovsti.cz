import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const DozsovoPovstani = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="dozsovo-povstani" />
        <h4>Selské povstání Györgye Dózsi (1514){draft && <DraftBadge />}</h4>
        <p>
          Selské povstání Györgye Dózsi (maď. <i>Dózsa-féle parasztfelkelés</i>,
          něm. <i>Aufstand des György Dózsa</i>) bylo největší rolnické povstání
          střední Evropy přelomu středověku a raného novověku. Vzniklo na jaře
          roku 1514 z protiturecké křížové výpravy svolané ostřihomským
          arcibiskupem Tamásem Bakóczem a změnilo se v rozsáhlý ozbrojený
          konflikt mezi uherskými poddanými a jejich pány. Vůdcem povstání byl
          sikulský drobný šlechtic a žoldnéřský důstojník György Dózsa, který se
          proslavil v bojích proti Turkům a stal se symbolem uherské rolnické
          revolty.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/D%C3%B3zsa-f%C3%A9le_parasztfelkel%C3%A9s"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Papež Lev X. vyhlásil <b>9. dubna 1514</b> bullou <i>Sacratissima</i>{' '}
          křížovou výpravu proti Turkům a pověřil ostřihomského arcibiskupa
          Tamáse Bakócze jejím organizováním v Uhrách. Bakócz dne{' '}
          <b>16. dubna 1514</b> v Budíně formálně bullu vyhlásil a začal v Pešti
          shromažďovat dobrovolníky — především z řad poddaných, kteří při
          účasti na výpravě získávali odpustky a dočasné osvobození od
          poddanských povinností. Velení nad takto shromážděným vojskem o síle
          asi 40 000 mužů bylo svěřeno Dózsovi <b>24. dubna 1514</b>. Nečekaný
          rozsah náboru a útěky poddaných z panství vyvolaly nesouhlas šlechty;
          někteří páni začali povolávat své poddané zpět násilím a hrozit jim
          ztrátou pozemků. Tím se z protiturecké výpravy rychle stalo sociální
          povstání.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Gy%C3%B6rgy_D%C3%B3zsa"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Pod tlakem šlechty Bakócz dne <b>15. května 1514</b> nábor zastavil,
          ale Dózsa rozkaz neuposlechl. Místo toho nasměroval své vojsko proti
          uherské šlechtě a začal dobývat panská sídla. Povstalci v průběhu
          května a června ovládli rozsáhlou oblast od Stoličného Bělehradu po
          Tisu; dobyli Cegléd, Békés, Csanád a Lippu, vyplenili desítky panství
          a popravili řadu šlechticů — nejznámější obětí byl čanádský biskup
          Mikuláš Csáky, jehož povstalci zajali v bitvě u Nagylaku{' '}
          <b>23. května 1514</b> a po dobytí Csanádu narazili na kůl.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/D%C3%B3zsa-f%C3%A9le_parasztfelkel%C3%A9s"
          />
        </p>
        <p>
          Sedmihradský vévoda Jan Zápolský povolal mobilizaci stoliční hotovosti
          a vytáhl proti Dózsovi se silou kolem 20 000 mužů, k níž se připojily
          oddíly Štěpána Báthoryho. Rozhodující bitva proběhla u Temešváru{' '}
          <b>15. července 1514</b>: Dózsa byl po několikahodinovém boji poražen,
          jeho vojsko rozprášeno a on sám zajat při útěku. Trest, který
          následoval, byl mimořádně brutální i na poměry doby: Dózsa byl{' '}
          <b>20. července 1514</b> v Temešváru posazen na rozžhavený železný
          trůn, korunován rozžhavenou železnou korunou a hořícím žezlem; zatímco
          zaživa hořel, byli k němu přivedeni jeho hladovějící spolubojovníci a
          donuceni ujídat z jeho masa. Dózsa zemřel při tomto výkonu; jeho
          mladší bratr Gergely Dózsa byl přesto rovněž popraven čtvrcením.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Gy%C3%B6rgy_D%C3%B3zsa"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Po porážce u Temešváru následoval rozsáhlý postih povstalců.
          Šlechtický sněm v Budíně schválil v říjnu 1514 tzv. Werbőcziho zákoník
          (<i>Tripartitum</i>) — kodex zemského práva, který formálně potvrdil
          dědičné poddanství uherské selské vrstvy a zakotvil přísný
          majetkoprávní řád oddělující šlechtu od poddaných. Tento stav v Uhrách
          de facto trval až do roku 1848. Povstání zároveň dlouhodobě oslabilo
          schopnost Uher mobilizovat lidové síly proti osmanskému tlaku — přímo
          souvisí s pozdější katastrofou u Moháče 1526. Postava Dózsi se v 19.
          století stala uherským národním a revolučním symbolem.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Gy%C3%B6rgy_D%C3%B3zsa"
          />
        </p>
        <h5>Primární prameny / Pohled starších kronik</h5>
        <p>
          Dózsovo povstání má neobvyklé štěstí mezi uherskými událostmi 16.
          století — bylo bezprostředně zpracováno literárním pramenem nejvyšší
          kvality. Sedmihradský humanistický básník Stephanus Taurinus (Stefan
          Stieröxel) sepsal hned roku <b>1519</b> latinskou epickou báseň{' '}
          <i>Stauromachia, id est cruciatorum servile bellum</i> (Vídeň 1519,
          tisk Hieronymus Vietor) v pěti zpěvech, jež je nejstarším a
          nejpodrobnějším vyprávěním o průběhu povstání i o brutální popravě
          Györgye Dózsi v Temešváru. Taurinus byl současníkem a měl přístup k
          přímým svědkům události.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/Stephanus_Taurinus"
          />
        </p>
        <p>
          Pokračovatelé Bonfiniho kroniky (zejména anonymní autor pátých dekád
          ve frankfurtském vydání 1581, tradičně přičítaný Mikuláši Olahovi a
          dalším) zařadili povstání do narativu jagellonského období jako přímou
          předzvěst moháckého úpadku.
          <Qt
            publication={PUBLICATIONS.BONFINI}
            href="https://en.wikipedia.org/wiki/Antonio_Bonfini"
          />
        </p>
        <p>
          V druhé polovině 16. století zpracoval události sedmihradský dějepisec
          Antun Vrančić (Antonius Wrancius) ve svých{' '}
          <i>De rebus gestis Hungarorum</i>, dochovaných v rukopisech a vydaných
          teprve v 19. století; Vrančić zdůrazňuje sociální rozměr povstání a
          jeho vliv na oslabení uherské obranné kapacity před Moháčem.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Antun_Vran%C4%8Di%C4%87"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Dózsovo povstání bylo zcela vnitrouherskou záležitostí — boj se
          odehrával mezi uherskými poddanými a uherskou šlechtou na území
          Uherského království a obě strany konfliktu mobilizovaly výhradně
          domácí síly. Záznamy o účasti českých nebo moravských žoldnéřů na
          žádné ze stran chybí, a vzhledem k charakteru povstání by jejich
          nasazení bylo i politicky problematické. Konflikt je v přehledu
          vojenských akcí relevantní spíše jako významný politický kontext
          období: ovlivnil uherský postoj k tureckým válkám následujících let a
          tím nepřímo osudy mnoha českých kondotiérů, kteří v Uhrách v desátých
          a dvacátých letech 16. století sloužili.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://hu.wikipedia.org/wiki/D%C3%B3zsa-f%C3%A9le_parasztfelkel%C3%A9s"
          />
        </p>
      </Col>
    </Row>
  </>
)
