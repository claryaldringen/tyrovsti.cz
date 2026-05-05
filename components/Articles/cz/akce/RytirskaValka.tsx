import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const RytirskaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="rytirska-valka" />
        <h4>
          Rytířská válka — Sickingenovo povstání (1522–1523)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Rytířská válka (něm. <i>Pfälzischer Ritteraufstand</i>, též{' '}
          <i>Sickingenfehde</i>) byla vzpoura části říšského svobodného
          rytířstva pod vedením Franze von Sickingen, podporovaná humanistou
          Ulrichem von Hutten. Konflikt v letech 1522–1523 byl posledním velkým
          pokusem nižší říšské šlechty přepsat poměry mocenských knížat a stavů;
          jeho porážka u Landstuhlu definitivně ukončila politickou roli
          rytířského stavu v Říši a uvolnila prostor knížecímu absolutismu 16.
          století.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Pf%C3%A4lzischer_Ritteraufstand"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Franz von Sickingen byl jeden z nejmocnějších říšských rytířů své doby
          — disponoval řetězem hradů ve Falci, vlastními oddíly landsknechtů a
          rozsáhlou bankovní sítí; sloužil císaři Maxmiliánovi I. i mladému
          Karlu V. v jeho italských taženích. Pod vlivem Ulricha von Huttena a
          luterské reformace přešel kolem roku 1521 do opozice vůči duchovním
          knížatům. Pokus o reformační program „služby rytířstva&ldquo;, v němž
          měl reformovaný stav nahradit knížecí mocenská centra, se opíral o
          předpoklad, že rytíři jsou přirozenými ochránci říšské svobody.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Knights%27_Revolt"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Sickingen otevřel válku v srpnu 1522 záští proti trevírskému
          arcibiskupovi-kurfiřtovi Richardu von Greiffenklau.{' '}
          <b>27. srpna 1522</b> oblehl s vojskem o síle asi 5 000 mužů město
          Trevír. Útok však ztroskotal — arcibiskup Richard se osobně postavil
          do čela obrany, městské obyvatelstvo zůstalo věrné vrchnosti, a po
          sedmi dnech musel Sickingen <b>14. září 1522</b> obléhání zrušit.
          Trevírský neúspěch měl politicky katastrofální dopad: knížata uznala v
          Sickingenovi přímou hrozbu a uzavřela proti němu trojspolek — kurfiřt
          trevírský, kurfiřt-falckrabě Ludvík V. a hesenský lankrabě Filip I.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Pf%C3%A4lzischer_Ritteraufstand"
          />
        </p>
        <p>
          Knížecí spolek zahájil ofenzivu na jaře 1523. Sickingen se stáhl na
          svůj hrad Landstuhl (Nanstein) v Pfälzer Wald. Knížata přivezla těžké
          obléhací dělostřelectvo — jeden z prvních systematických případů
          použití velkých kusů proti rytířskému hradu — a po několika dnech
          ostřelování srovnala hradby se zemí. Sickingen byl vážně zraněn
          padajícím trámem, vzdal pevnost <b>7. května 1523</b> a téhož dne v
          podzemním krytu zemřel zraněním. Spojenci pak zlikvidovali další
          Sickingenovy hrady; Ulrich von Hutten uprchl do Švýcarska, kde téhož
          roku zemřel u Curychu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Knights%27_Revolt"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Sickingenova porážka znamenala konec rytířské vzpoury jako politického
          nástroje. Říšské rytířstvo bylo nuceno přijmout přímou podřízenost
          císaři, ztratilo pravomoc samostatně vést záští a v dalších
          desetiletích se proměnilo v servisní šlechtu vázanou na říšský dvůr a
          knížecí soudy. Použití těžkých dělostřeleckých kusů proti Landstuhlu
          se stalo modelem pro likvidaci pozdně středověkých rytířských sídel —
          schopnost odolat moderní obléhací technice už tato sídla neměla.
          Krátce po skončení konfliktu vypukla v jižním Německu velká selská
          válka, jejíž potlačení definitivně dokončilo přesun moci z rytířského
          a městského do knížecího stavu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Pf%C3%A4lzischer_Ritteraufstand"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Pro rekonstrukci konfliktu jsou klíčové <b>Sickingenovy listy</b>{' '}
          (něm. <i>Briefe Franz von Sickingens</i>) shromážděné v moderní edici
          H. Ulmanna a uložené v Bavorském hlavním státním archivu i v
          mannheimském Generallandesarchivu; jejich raně novověký výtah pořídil
          opat <b>Johannes Trithemius</b> ve své <i>Annales Hirsaugienses</i>{' '}
          (sepsáno před 1516, tisk Sankt Gallen 1690), kde popisuje Sickingenovy
          výpravy z hlediska duchovních knížat.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://www.digitale-sammlungen.de/"
          />
        </p>
        <p>
          Reformační perspektivu konfliktu zaznamenal <b>Sebastian Franck</b> v{' '}
          <i>Chronica, Zeytbuch und Geschychtbibel</i> (Štrasburk 1531), který
          věnuje samostatnou pasáž obležení Trevíru, pádu Landstuhlu a smrti
          Sickingenově. Polní deník Filipa Hesenského k tažení 1523 je dochován
          v Marburském státním archivu.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://www.digitale-sammlungen.de/de/details/bsb11200080"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Účast českých žoldnéřských oddílů v rytířské válce není v dochovaných
          pramenech doložena. Sickingenovy formace tvořili téměř výhradně
          porýnští a falčtí rytíři s vlastním klientelárním ozbrojeným lidem;
          obléhací armády knížat Trevíru, Falce a Hesenska se opíraly o domácí
          lény a o porýnské landsknechty. Konflikt probíhal v geograficky úzce
          vymezeném prostoru západní Říše, mimo dosah obvyklých rekrutačních os
          česko-bavorských a česko-saských. Ulrich von Hutten, který v
          reformační propagandě slovní podporu „české svobody&ldquo; čas od času
          zmiňoval, neměl žádné praktické spojení s českou utrakvistickou ani
          vojenskou stranou. Český vliv v rytířské válce zůstává tedy pouze v
          rovině obecného říšského žoldnéřského trhu, nikoli v podobě
          konkrétních doložených oddílů.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Pf%C3%A4lzischer_Ritteraufstand"
          />
        </p>
      </Col>
    </Row>
  </>
)
