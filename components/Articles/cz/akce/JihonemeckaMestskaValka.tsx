import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const JihonemeckaMestskaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="jihonemecka-mestska-valka" />
        <h4>Jihoněmecká městská válka (1449–1450){draft && <DraftBadge />}</h4>
        <p>
          Jihoněmecká městská válka (něm. <i>Süddeutscher Städtekrieg</i>) byla
          rozsáhlým ozbrojeným konfliktem let <b>1449–1450</b> mezi spolkem
          švábských, franských a okolních říšských měst na straně jedné a
          koalicí říšských knížat a šlechty v čele s braniborsko-ansbašským
          markrabětem Albrechtem III. Achillem na straně druhé. Konflikt
          probíhal souběžně s první markraběcí válkou a byl jejím rozšířením o
          další knížata, biskupy a říšská města jižního Německa. Šlo o jeden z
          největších městských střetů pozdně středověké Říše.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/S%C3%BCddeutscher_St%C3%A4dtekrieg"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Říšská města jižního Německa od poloviny 14. století opakovaně
          uzavírala obranné spolky, jejichž cílem bylo chránit obchodní stezky,
          městská cla a městské svobody proti rostoucímu tlaku zemských knížat.
          K nejvýznamnějším patřil Švábský městský spolek (
          <i>Schwäbischer Städtebund</i>) a jeho franský protějšek. Ve 40.
          letech 15. století se napětí stupňovalo: knížata a biskupové se
          snažili obnovit svrchovaná práva na celá městská zázemí, zatímco města
          trvala na svém bezprostředním vztahu k císaři.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/S%C3%BCddeutscher_St%C3%A4dtekrieg"
          />
        </p>
        <p>
          Bezprostřední záminkou byla zápletka kolem Norimberka a markraběte
          Albrechta Achilla v létě <b>1449</b>. K Norimberku se obratem
          připojilo přes dvě desítky měst (mj. Augšpurk, Ulm, Schwäbisch Hall,
          Rotenburg, Dinkelsbühl, Nördlingen, Memmingen, Heilbronn, Esslingen,
          Reutlingen, Schwäbisch Gmünd a další). Knížecí koalice zahrnovala
          markraběte Albrechta Achilla, kurfiřta falckého Fridricha I.,
          würzburského biskupa, bamberského biskupa, eichstättského biskupa,
          vévodu Albrechta III. Bavorsko-mnichovského a řadu hraběcích a
          rytířských rodů.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/South_German_Cities%27_War"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Boje se rozvinuly do podoby kořistných záští a četných drobných
          potyček. Knížecí oddíly opakovaně přepadaly konvoje městských kupců a
          plenily vesnice patřící městům, města naopak vysílala ozbrojené
          výpravy proti knížecím statkům, mlýnům a obchodním vesnicím v zázemí
          panství. Klíčovou polní bitvou byla porážka markraběcího vojska v
          bitvě u Pillenreuthu <b>11. března 1450</b>, kde norimberští odrazili
          Albrechtův útok na předměstí. Z dalších střetnutí lze zmínit boje u
          Esslingenu, šarvátky u Rotenburgu nad Tauberem a četné záští na území
          würzburského biskupství.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Schlacht_bei_Pillenreuth"
          />
        </p>
        <p>
          Polní vojska měst čítala podle dobových odhadů několik tisíc
          ozbrojenců, mezi nimiž tvořily významný podíl střelecké roty a jezdci
          najatí ze sousedních zemí. Knížecí strana stavěla převážně rytířskou
          hotovost doplněnou o pěší kontingenty z biskupství. Dlouhodobé záští
          však oslabovaly především ekonomiku obou stran a ničily venkovské
          obyvatelstvo. Pod tlakem císařských poslů a zprostředkování dalších
          kurfiřtů byla v průběhu roku <b>1450</b> uzavřena řada dílčích smluv a
          koncem téhož roku vstoupilo v platnost obecné příměří.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/S%C3%BCddeutscher_St%C3%A4dtekrieg"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Jihoněmecká městská válka skončila v zásadě bez vítěze. Knížatům se
          nepodařilo získat pravomoc nad říšskými městy a městům se naopak
          nepodařilo prosadit rozšíření svých zemských pravomocí. Mírové smlouvy
          potvrzovaly stav před válkou s drobnými územními a celními ústupky.
          Konflikt však zásadně poznamenal hospodářství regionu — řada vesnic
          byla zničena, obchod přerušen a městské finance vyčerpány. Zkušenost z
          války vedla k dočasnému posílení městských spolků, ale dlouhodobě
          ukázala jejich strukturální slabost vůči koordinované knížecí
          politice. V dalším půlstoletí se tato dynamika promítla do druhé
          markraběcí války (1552–1555) a do postupné územní konsolidace říšských
          knížat.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/S%C3%BCddeutscher_St%C3%A4dtekrieg"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Augšpurský kronikář <b>Burkhard Zink</b> ve své <i>Chronik</i> (kniha
          III, ad annum 1449–1450) jako přímý současník popisuje augšpurské
          válečné rady, vyzbrojování městských oddílů i zprávy o pillenreuthské
          bitvě; edice in <i>Chroniken der deutschen Städte</i>, sv. 5 (Lipsko
          1866).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://archive.org/details/diechronikende02histuoft"
          />
        </p>
        <p>
          Norimberský pohled poskytuje <b>Sigmund Meisterlin</b> v{' '}
          <i>Chronik der Reichsstadt Nürnberg</i>, kterou později využil i{' '}
          <b>Hartmann Schedel</b> ve své <i>Liber chronicarum</i> (Norimberk
          1493), kde zmiňuje konflikt jako součást soudobých říšských dějin;
          digitalizováno BSB.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://www.digitale-sammlungen.de/de/details/bsb00034024"
          />
        </p>
        <p>
          Listinný materiál k jednáním knížat a měst je shromážděn v{' '}
          <i>Reichstagsakten ältere Reihe</i>, sv. 19 (dMGH).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://www.dmgh.de/de/fs1/object/display/bsb00000761_meta:titlePage.html"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Z dostupných pramenů nevyplývá žádný systematický český žoldnéřský
          podíl na bojích jihoněmecké městské války v letech 1449–1450. Města
          najímala především švýcarské a tyrolské pěší střelce a hejtmany z
          frankofonního a italského prostoru; knížecí strana se opírala o domácí
          rytířstvo. Najímání bývalých husitských velitelů a jejich vozových rot
          do říšských služeb v jižním Německu je doloženo až po roce <b>1454</b>{' '}
          v souvislosti s pruskou válkou, saskou bratrskou válkou (1450–1451 a
          1455) a později ve službách Wittelsbachů. Pro jihoněmeckou městskou
          válku je tedy český žoldnéřský element pouze marginální či nepřímý —
          případní jednotlivci sloužili rozptýleně v knížecích a městských
          družinách.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/South_German_Cities%27_War"
          />
        </p>
      </Col>
    </Row>
  </>
)
