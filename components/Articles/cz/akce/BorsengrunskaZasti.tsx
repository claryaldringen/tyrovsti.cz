import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BorsengrunskaZasti = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="borsengrunska-zasti" />
        <h4>Boršengrýnská záští (1450–1454){draft && <DraftBadge />}</h4>
        <p>
          Boršengrýnská záští (něm. <i>Borschengrüner Fehde</i>) je souhrnné
          označení pro řadu pohraničních ozbrojených sporů mezi rody Gutštejnů,
          pány z Plavna (něm. <i>von Plauen</i>), městem Cheb a dalšími držiteli
          západočeských a hornofalckých panství v letech 1450–1454. Jádrem sporu
          byly spory o hranice panství a o loupeživou činnost na
          chebsko-bavorském pomezí, jež bylo pro obchodní cesty mezi
          Norimberkem, Chebem a vnitřními Čechami klíčovou tepnou. Konflikt
          vyvrcholil v srpnu 1452 chebskou polní akcí proti hradu Boršengrýn
          (něm. <i>Borschengrün</i>) a jeho dělostřeleckým rozbořením, podle
          něhož dostalo celé záští své jméno.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Bor%C5%A1egr%C3%BDn"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Geografický a politický kontext</h5>
        <p>
          Hrad Boršengrýn ležel na pomezí chebského a kynžvartského panství
          (dnes katastr Dolního Žandova). V první polovině 15. století se jeho
          držba několikrát měnila — v letech 1426–1437 jej držel Mikuláš Fras,
          později rytíř Valdenroder a před rokem 1450 Bedřich z Failče. Sousední
          panství Kynžvart spravoval od přelomu čtyřicátých a padesátých let
          mocný durynsko-saský magnát Heinrich II. z Plavna (Heinrich II. von
          Plauen), nejvyšší míšeňský purkrabí, jenž v západních Čechách udržoval
          rozsáhlé državy. Druhým hlavním aktérem západočeského pomezí byl rod
          Gutštejnů, držitelů hornofalckých a chebských statků. Cheb sám
          fungoval jako říšské zástavní město, jež se houževnatě bránilo územním
          nárokům okolních pánů.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Gut%C5%A1tejn"
          />
        </p>
        <h5>Předehra a počátek záští</h5>
        <p>
          Bezvládí v Českém království po smrti Albrechta II. (1439) a oslabení
          královské moci vedlo na západočeském pomezí k vlně pohraničních záští
          — místních válek vedených podle říšského zvykového práva o pohledávky
          a hranice. V letech 1450–1451 se rozhořely spory mezi Heinrichem II. z
          Plavna a Chebem o sporné úseky kynžvartského panství a o ochranu kupců
          na cestě z Norimberku do Chebu. Souběžně vedli členové rozvětveného
          rodu Gutštejnů (zejména Mikuláš Junior z Gutštejna) řadu sporů s
          drobnými chebskými a hornofalckými vlastníky o porušování svobod
          tržních cest. Tyto dílčí spory se postupně překrývaly a vytvořily
          souvislé ozbrojené prostředí, v němž se z Boršengrýnu stal jeden z
          lupičských opěrných bodů.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Gut%C5%A1tejn"
          />
        </p>
        <h5>Obsazení Boršengrýnu (1452)</h5>
        <p>
          Roku <b>1452</b> obsadil Heinrich II. z Plavna Boršengrýn jako součást
          svého kynžvartského panství a posadil tam vlastního hejtmana Hanuše
          Edlmana. Obsazení hradu zájmově zasahovalo do chebských obchodních
          cest a Edlmanovy oddíly byly Chebem obviňovány z loupežení vůči
          chebským kupcům.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Bor%C5%A1egr%C3%BDn"
          />
        </p>
        <h5>Dobytí a pobořeni hradu (srpen 1452)</h5>
        <p>
          Cheb formálně vyhlásil vůči Heinrichovi z Plavna záští a v{' '}
          <b>srpnu 1452</b> vyrazil s městskou hotovostí, najatým
          dělostřelectvem a žoldnéřským kontingentem proti Boršengrýnu. Po
          týdenním obléhání a soustavné kanonádě byl hrad dobyt a Edlmanova
          posádka rozprášena. Cheb hrad následně pobořil a od té doby již nikdy
          nebyl obnoven — tvoří dnes pouze zříceninu. Tento dělostřelecký podnik
          patří k pozoruhodným ukázkám pozdně středověkého městského
          dělostřelectva nasazeného v polní (nikoliv obranné) roli.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Bor%C5%A1egr%C3%BDn"
          />
        </p>
        <h5>Další průběh a ukončení záští</h5>
        <p>
          Pobořením Boršengrýna konflikt neskončil. Heinrich II. z Plavna
          pokračoval v dílčích výpadech proti chebským državám, do sporu se
          mezitím zapojily i sousední rody — Gutštejnové, páni z Plassenburgu —
          a markrabě braniborský Albrecht III. Achilles vystupoval jako
          rozhodčí. Ke konečnému uzavření míru došlo v průběhu roku 1454
          rozhodčím výrokem norimberského sněmu a ojedinělými dílčími smírčími
          listinami. Záští formálně ukončil i nástup Ladislava Pohrobka jako
          českého krále (korunován 28. října 1453), jenž se aktivně zasazoval o
          uklidnění poměrů na západočeském pomezí při obnově zemské vlády.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Gut%C5%A1tejn"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          <b>Franz Kürschner</b> ve své monografii <i>Jobst von Einsiedel</i>
          (Vídeň 1864) zveřejnil výňatky z chebského městského archivu, které
          zachycují vyhlášení záští mezi Chebem a Heinrichem II. z Plavna, jména
          hejtmanů a údaje o městské hotovosti i dělostřelectvu nasazeném při
          dobytí Boršengrýna v srpnu 1452. Kürschnerovy excerpty jsou pro tento
          konflikt jediným systematicky vydaným souborem chebských listin a
          tvoří základ pozdějších kompilací.
          <Qt
            publication={PUBLICATIONS.KURSCHNER}
            href="https://books.google.com/books?id=anO6h3vnx8kC"
          />
        </p>
        <p>
          <b>August Sedláček</b> v{' '}
          <i>Hradech, zámcích a tvrzích Království českého</i>, sv. X (Plzeňsko)
          a sv. XI (Chebsko a Loketsko), shrnul držitelské dějiny Boršengrýna od
          poloviny 14. století do jeho pobořeni v roce 1452 a Kynžvartu v rukou
          Heinricha II. z Plavna. Sedláček excerpoval listinné zápisy z
          chebského archivu (zčásti přes Kürschnera) a doplnil je z
          gutštejnských a plavenských listin v saských archivech. Svazky
          digitalizovány na archive.org.
          <Qt
            publication={PUBLICATIONS.SEDLACEK1}
            href="https://archive.org/details/hrady-zamky-tvrze-1-chrudimsko"
          />
        </p>
        <p>
          <b>Bartošek z Drahonic</b> ve své <i>Cronice</i> zaznamenal řadu
          západočeských pohraničních záští z let 1440–1443, což tvoří
          chronologický předstupeň boršengrýnských událostí; jeho text je v
          edici Fontes Rerum Bohemicarum, sv. V, dostupný na archive.org. Pro
          samotný rok 1452 se Bartoškovo svědectví již nedochovalo (kronika
          končí rokem 1443), ale narativní rámec západočeského pohraničního
          násilí poskytuje právě jeho text.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Barto%C5%A1ek_z_Drahonic"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Boršengrýnská záští je doloženě česko-bavorský pohraniční konflikt s
          významnou účastí domácích českých sil. Chebská strana operovala
          najatými žoldnéři z chebského zázemí, hornofalckými profesionály a
          dílčími kontingenty z Plzeňska — k explicitnímu doložení jednotlivých
          jmen v dochovaných pramenech však schází systematická edice. Na straně
          Heinricha II. z Plavna působily jeho saské, durynské i západočeské
          oddíly, jejichž jádro však pocházelo z míšeňského purkrabství.
          Zapojení rodu Gutštejnů (Mikuláš Junior z Gutštejna) přivádělo do hry
          typický český pohraniční žoldnéřský živel — rytířské družiny obvyklé
          na západě Čech. Konflikt do osy mezinárodních válek poloviny 15.
          století patří jako lokální, ale symptomatický příklad — ukazuje, jak
          český západ sloužil jako odrazový prostor pro pohraniční žoldnéřskou
          činnost a jak místní rody dokázaly v krátké době mobilizovat polní i
          obléhací prostředky.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Gut%C5%A1tejn"
          />
        </p>
      </Col>
    </Row>
  </>
)
