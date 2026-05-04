import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BitvaUVarny = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="bitva-u-varny" />
        <h4>Bitva u Varny (1444){draft && <DraftBadge />}</h4>
        <p>
          Bitva u Varny se odehrála <b>10. listopadu 1444</b> u stejnojmenného
          města na pobřeží Černého moře v dnešním Bulharsku. Křesťanské vojsko
          uherského a polského krále Vladislava I. (Vladislava III.
          Jagellonského) a sedmihradského vojevůdce Jánose Hunyadiho zde utrpělo
          zdrcující porážku od osmanské armády sultána Murada II. V bitvě padl i
          král Vladislav.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Varna"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Po úspěších Dlouhého tažení a uzavření segedínského míru z léta 1444
          přesvědčili papežský legát kardinál Giuliano Cesarini, benátská
          diplomacie a další zastánci křížové výpravy uherského krále Vladislava
          I., aby mír porušil a vytáhl proti Osmanům znovu. Cesarini
          argumentoval, že přísaha daná „nevěřícím“ není teologicky závazná.
          Plán počítal s blokádou úžin spojeným benátsko-papežským loďstvem, jež
          mělo zabránit přesunu hlavní osmanské armády z Anatolie do Evropy. Z
          Uher vytáhlo vojsko v září 1444.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Crusade_of_Varna"
          />
        </p>
        <h5>Selhání blokády a setkání armád</h5>
        <p>
          Křesťanské vojsko v počtu zhruba 16 až 20 tisíc mužů postoupilo přes
          Vidin a Nikopolis k černomořskému pobřeží; cestou se k němu připojilo
          asi 4 000 valašských jezdců pod synem vojvody Vlada II. Drákuly
          Mirceou. Plánované sevření osmanské armády však selhalo – Murad II.
          převedl mezi 16. a 20. říjnem 1444 hlavní síly z Anatolie přes Bospor,
          podle dobových pramenů s pomocí janovských a benátských lodí, které
          přijaly úplatek 1 dukát za každého převezeného vojáka. U Varny tak
          Vladislav narazil na osmanské vojsko odhadované na 50 až 60 tisíc
          mužů.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Varna"
          />
        </p>
        <h5>Sestava křesťanské armády</h5>
        <p>
          Vojsko se rozvinulo do oblouku čelem k Osmanům. Střed tvořily dvě
          korouhve s celkem 3 500 muži královské tělesné stráže a najatých
          královských žoldnéřů; za nimi stála valašská jízda jako záloha. Pravé
          křídlo (asi 6 500 mužů v pěti korouhvích) vedl varadínský biskup Jan
          de Dominis; jednotlivými prapory veleli kardinál Cesarini v čele
          německých žoldnéřů, biskup egerský Šimon Rozgonyi a chorvatský bán
          Franko Talovac. Levé křídlo (asi 5 000 mužů) tvořili Sedmihraďané,
          Bulhaři a uherští magnáti pod velením Michala Szilágyiho. V týlu stála
          vozová hradba s 300 až 600 českými a ruskými (rusínskými) žoldnéři pod
          hejtmanem Janem Čejkou (Ceyka), v každém voze 7 – 10 mužů s puškami a
          houfnicemi.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Varna"
          />
        </p>
        <h5>Průběh bitvy</h5>
        <p>
          Sultán Murad II. řídil bitvu z náspu uprostřed osmanského středu; po
          stranách veleli Şehabeddin Paša a beg Karaca, anatolské oddíly měl pod
          sebou kromě jiných i čtrnáctiletý Mehmed (budoucí dobyvatel
          Konstantinopole). Anatolské sipáhy útokem rozbily na Hunyadiho pravém
          křídle německé žoldnéře a v marastu u jezera Varna padl kardinál
          Cesarini i biskup Rozgonyi a Jan de Dominis. Hunyadi následně
          protiútokem zatlačil osmanské levé křídlo a beg Karaca padl. Mladý
          král Vladislav se však v rozhodující chvíli pokusil o osobní útok na
          sultánovu gardu janičářů s pouhými 500 polsko-uherskými jezdci; podle
          osmanských zpráv ho srazil z koně janičár Kodja Hazar a setnul mu
          hlavu, kterou pak Murad nechal vystavit. Smrt panovníka rozvrátila
          křesťanské linie. Hunyadi se s částí oddílů probil z bojiště. Vozová
          hradba a její obránci kladli odpor, ale byli pobiti.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Varna"
          />
        </p>
        <h5>Padlí magnáti</h5>
        <p>
          Křesťanská strana ztratila v bitvě podle dobových odhadů přes 15 000
          mužů. Mezi padlými byli kromě krále Vladislava I. kardinál Giuliano
          Cesarini (jeho tělo nebylo nalezeno), Stephen III. Báthory, biskup
          Šimon Rozgonyi, biskup Jan de Dominis a další uherští a polští
          velmoži. Na osmanské straně padli mimo jiné beg Karaca; ztráty Osmanů
          byly těžké, ale výrazně menší než křesťanské.
        </p>
        <h5>Pramenné podání bitvy</h5>
        <p>
          Hlavní vyprávění o bitvě podávají Filippo Buonaccorsi (Callimachus) v
          díle <i>Historia de rege Vladislao seu clade Varnensi</i> (rkp. konec
          15. století, tisk 1519), Jan Długosz v{' '}
          <i>Annales seu cronicae incliti Regni Poloniae</i> a Antonio Bonfini v{' '}
          <i>Rerum Hungaricarum decades</i>; osmanskou perspektivu přinesly
          anonymní turecké kroniky tzv. <i>Gazavat Sultan Murad</i>. Aeneas
          Silvius Piccolomini s bitvou pracoval ve svých listech a v díle{' '}
          <i>De Europa</i>. Kvůli rozporům mezi prameny zůstává Vladislavova
          smrt (zda padl v boji nebo byl zajat a popraven později) dodnes
          předmětem diskusí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://archive.org/details/jbc.bj.uj.edu.pl.NDIGSTDR009201"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Porážka u Varny ukončila velký pokus zatlačit Osmany z Balkánu zpět do
          Asie a otevřela jim cestu k dalšímu rozšiřování v jihovýchodní Evropě.
          Uhry zůstaly bez krále a moc fakticky převzala šlechtická rada s
          Hunyadim, který byl roku 1446 zvolen zemským správcem (gubernátorem)
          jménem nezletilého Ladislava Pohrobka. Křížová myšlenka proti Osmanům
          přesto pokračovala až do druhé bitvy na Kosově poli roku 1448. O devět
          let později padla Konstantinopol.
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Vladislavova armáda zahrnovala vedle uherských, polských a valašských
          oddílů také najaté české a moravské žoldnéře, kteří se osvědčili již
          během Dlouhého tažení. Bojovali v pěším šiku krytém pavézami a
          bojovými vozy a tvořili obranu vozové hradby v týlu sestavy pod
          hejtmanem Janem Čejkou. Vůz byl posádkou 7 – 10 mužů, vyzbrojených
          ručnicemi, kušemi a houfnicemi. Po smrti krále utrpěla i jejich část
          vojska těžké ztráty; dobové prameny uvádějí, že obránci vozové hradby
          byli téměř bez výjimky pobiti. Přeživší se s Hunyadim probili zpět do
          Uher.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Battle_of_Varna"
          />
        </p>
      </Col>
    </Row>
  </>
)
