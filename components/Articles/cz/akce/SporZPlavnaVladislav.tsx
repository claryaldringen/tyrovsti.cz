import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const SporZPlavnaVladislav = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="spor-z-plavna-vladislav" />
        <h4>
          Spory pánů z&nbsp;Plavna o&nbsp;Plavno, Bečov a&nbsp;Kynžvart (1481+)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Plavenští z&nbsp;Plavna (něm. <i>Reuß von Plauen</i>) patřili
          k&nbsp;nejmocnějším pohraničním rodům na pomezí Vogtlandu, Saska
          a&nbsp;západních Čech. V&nbsp;80.&nbsp;a&nbsp;90. letech 15. století
          vedli rozsáhlou sérii sporů o&nbsp;svou državu Plavno,
          o&nbsp;západočeské hrady <b>Bečov</b> a&nbsp;<b>Kynžvart</b>{' '}
          a&nbsp;o&nbsp;okolní léna proti rodu Pluhů z&nbsp;Rabštejna,
          Wittelsbachům a&nbsp;dalším sousedům. Tyto rozdrobené konflikty
          zapadají do širšího obrazu Vladislavovy slabé zemské vlády, kde drobné
          regionální záští bylo trvalou součástí krajinné politiky.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Plaven%C5%A1t%C3%AD_z_Plavna"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Plavno bylo původně říšským fojtstvím a&nbsp;v&nbsp;průběhu 14.
          a&nbsp;15. století se postupně stalo lénem české koruny. Páni
          z&nbsp;Plavna získali v&nbsp;západních Čechách značné statky — Bečov
          nad Teplou, Kynžvart, Andělskou Horu a&nbsp;další pevnosti. Tato
          pozice z&nbsp;nich učinila trvalé hráče v&nbsp;chebsko-loketské
          oblasti, ale také je zatahovala do sporů se sousedy.{' '}
          <b>Jindřich&nbsp;IV. z&nbsp;Plavna</b>, hejtman a&nbsp;později
          nejvyšší kancléř Království českého, byl klíčovou postavou těchto
          sporů — opakovaně se dostával do konfliktu s&nbsp;Pluhy
          z&nbsp;Rabštejna i&nbsp;s&nbsp;wittelsbašskými falckraběty, kteří měli
          vlastní zájmy v&nbsp;chebském pomezí.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Jind%C5%99ich_IV._z_Plavna"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Spory probíhaly v&nbsp;klasickém pohraničním formátu — opovědní listy,
          vzájemné nájezdy, obležení malých pevností, výpalné a&nbsp;okupace
          lén. Konkrétní průběh není v&nbsp;dostupných českých wiki zdrojích
          podrobně rozepsán; rámcově lze říci, že Plavenští v&nbsp;letech 1481
          a&nbsp;dál opakovaně bojovali o&nbsp;držbu Bečova a&nbsp;Kynžvartu,
          a&nbsp;to jak proti svým rivalům, tak proti zástavním držitelům, kteří
          se těchto hradů zmocnili v&nbsp;dřívějších desetiletích. Vladislavova
          slabá zemská vláda neměla prostředky tyto spory rozhodnout, a&nbsp;tak
          se konflikty táhly s&nbsp;přerušeními desítky let a&nbsp;byly řešeny
          především dílčími smíry a&nbsp;sňatkovou politikou.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Plaven%C5%A1t%C3%AD_z_Plavna"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Plavenští si v&nbsp;průběhu 80. a&nbsp;90. let svou pozici
          v&nbsp;západních Čechách spíše upevnili — Jindřich&nbsp;IV.
          z&nbsp;Plavna se stal nejvyšším kancléřem Království českého
          a&nbsp;jeho rod patřil k&nbsp;nejvlivnějším šlechtickým rodům
          jagellonské éry. Bečov a&nbsp;Kynžvart se však pohybovaly mezi různými
          držiteli a&nbsp;teprve v&nbsp;průběhu 16. století se definitivně
          stabilizovaly. Detailní rekonstrukce jednotlivých incidentů by
          vyžadovala práci s&nbsp;regionálními archivy a&nbsp;saskými prameny —
          z&nbsp;rámcových přehledů ve&nbsp;wiki ji nelze provést.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Plaven%C5%A1t%C3%AD_z_Plavna"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Plavenské spory s&nbsp;Pluhy a&nbsp;Wittelsbachy jsou doloženy
          především v&nbsp;
          <b>slezských a&nbsp;vogtlandských listinných souborech</b>:{' '}
          <i>Codex diplomaticus Saxoniae regiae</i> (II. řada, sv. III–IV)
          zveřejnil opovědní listy a&nbsp;smírčí výroky mezi rody z&nbsp;Plavna
          a&nbsp;Pluhy z&nbsp;přelomu osmdesátých let 15. století. Z&nbsp;těchto
          pramenů lze rekonstruovat hranice sporných lén kolem Bečova
          a&nbsp;Kynžvartu i&nbsp;jména hejtmanů, kteří v&nbsp;jednotlivých
          taženích veleli plavenským družinám.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Plaven%C5%A1t%C3%AD_z_Plavna"
          />
        </p>
        <p>
          <b>Staří letopisové čeští</b> ad annum 1481 a&nbsp;ad annum 1483
          zaznamenávají dílčí střety v&nbsp;západních Čechách a&nbsp;připomínají
          Vladislavovy pokusy o&nbsp;zemský mír; letopisná zmínka je však úsečná
          a&nbsp;nesleduje konflikt v&nbsp;úplnosti.
          <Qt
            publication={PUBLICATIONS.STARI_LETOPISOVE}
            href="https://archive.org/details/staricesti"
          />
        </p>
        <p>
          <b>August Sedláček</b> v&nbsp;
          <i>Hradech, zámcích a&nbsp;tvrzích Království českého</i>, sv.&nbsp;X
          (Plzeňsko a&nbsp;Loketsko) a&nbsp;sv.&nbsp;XI (Chebsko
          a&nbsp;Loketsko), shromáždil chronologii držby Bečova, Kynžvartu
          a&nbsp;Andělské Hory s&nbsp;odkazy na chebský archiv (Kürschnerovy
          excerpty), na zápisy v&nbsp;deskách dvorských a&nbsp;na opovědní listy
          v&nbsp;saských archivech. Sedláčkova kompilace je digitalizována na
          archive.org a&nbsp;tvoří prakticky jediný česky přístupný badatelský
          přehled.
          <Qt
            publication={PUBLICATIONS.SEDLACEK1}
            href="https://archive.org/details/sedlacek-hrady"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Spory plavenského typu byly typickou živnou půdou pro regionální
          žoldnéřskou hotovost — západočeští páni a&nbsp;jejich družiny se
          v&nbsp;těchto pohraničních záštích udržovali ve&nbsp;válečné kondici
          a&nbsp;tytéž rody se v&nbsp;jiných obdobích objevují na bojištích
          bavorské a&nbsp;landshutské války. Konkrétní hejtmani ani družiny
          známí ze zahraničních konfliktů zde však nejsou doloženi a&nbsp;akce
          má v&nbsp;časové ose především hodnotu kontextu — ukazuje, jak se
          z&nbsp;západočeského pomezí v&nbsp;druhé polovině 15. století stala
          oblast trvalého ozbrojeného neklidu, z&nbsp;níž se rekrutovali
          profesionální žoldnéři pro říšské služby.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Plaven%C5%A1t%C3%AD_z_Plavna"
          />
        </p>
      </Col>
    </Row>
  </>
)
