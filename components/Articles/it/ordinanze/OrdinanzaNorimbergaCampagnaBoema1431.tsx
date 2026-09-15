import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const OrdinanzaNorimbergaCampagnaBoema1431 = ({
  draft,
}: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="risoluzione-di-norimberga-sull-ordinanza-per-la-campagna-in-boemia"
        />
        <h4>
          Risoluzione di Norimberga del 9–10 marzo 1431 sull&apos;ordinanza per
          la campagna in Boemia
          {draft && <DraftBadge />}
        </h4>
        <p>Traduzione provvisoria, non ancora revisionata.</p>
        <p>
          Entrambi i testi nacquero dalle trattative della dieta imperiale di
          Norimberga del febbraio e marzo 1431, che preparava una grande
          spedizione in Boemia. L&apos;ordinanza su come l&apos;esercito debba
          comportarsi (parte a) è datata dall&apos;edizione dei{' '}
          <i>Deutsche Reichstagsakten</i> al 9 o 10&nbsp;marzo 1431.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=552"
          />{' '}
          La ripartizione dei cannoni e delle frecce che i singoli principi e le
          città dovevano fornire (parte b) vi è pubblicata come documento a sé e
          collocata tra il 19&nbsp;febbraio e il 13–14&nbsp;marzo 1431.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=534"
          />{' '}
          Secondo l&apos;ordinanza dovevano partire sette eserciti, ciascuno con
          il proprio forte dei carri. Nell&apos;estate del 1431 l&apos;esercito
          tedesco giunse effettivamente a Domažlice, in tre eserciti con
          altrettanti forti dei carri.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:d18f904a-5b56-4200-a699-2fa149ff1335"
          />{' '}
          Toman riteneva che questa ordinanza, come le ordinanze tedesche del
          1426 e del 1427 e l&apos;ordinanza di Hodětín, attingesse a ordinanze
          militari ceche non conservate, e non direttamente all&apos;ordinanza
          di Žižka.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:498388aa-b7b4-45f9-9284-38220dbccebe"
          />{' '}
          Max Jähns vide nella disposizione secondo cui i principi devono tenere
          presso i loro eserciti degli scabini e un esecutore delle pene (art.
          24) il primo accenno a un ordinamento della giustizia militare.
          <Qt
            publication={PUBLICATIONS.JAHNS1889}
            href="https://archive.org/details/geschichtederkr00jhgoog/page/305/mode/1up"
          />
        </p>
        <p>
          Toman riprese il testo dall&apos;edizione di Palacký, basata su un
          manoscritto dell&apos;Archivio capitolare di Praga,
          <Qt
            publication={PUBLICATIONS.PALACKY_UB2}
            href="https://archive.org/details/urkundlichebeitr02pala/page/194/mode/1up"
          />{' '}
          e aggiunse tra parentesi quadre articoli e lezioni tratti dai{' '}
          <i>Deutsche Reichstagsakten</i>. Tra parentesi tonde si trovano le sue
          spiegazioni e, nella parte b), anche parole e un articolo che mancano
          in quell&apos;edizione.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:d42e7297-de19-4587-83aa-febe945fea69"
          />
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:a59e6d13-c4d5-4059-8ec4-1f8ec3ea48db"
          />{' '}
          I <i>Deutsche Reichstagsakten</i> si basano su altre copie e
          differiscono anche in punti che Toman non ha segnalato.
          Nell&apos;articolo 4 nominano inoltre i duchi di Baviera e il conte
          del Württemberg, nell&apos;articolo 5 i duchi di Brunswick (Toman ha
          una duchessa), i principi della costa e il giovane margravio di
          Brandeburgo, e nell&apos;articolo 7 il gran maestro di Prussia invece
          del maestro tedesco.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=553"
          />{' '}
          Nella ripartizione elencano inoltre la città di Windsheim e per
          diverse città indicano un numero diverso di frecce, per esempio 6000
          per Ulma e 3000 per Magonza, Spira e Heilbronn.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=536"
          />
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=537"
          />{' '}
          Nell&apos;ultimo articolo leggono <Cit>nút angeslagen</Cit>, cioè i
          principi e le città che <i>non</i> figurano nella ripartizione, mentre
          Toman legge <Cit>mit angeslagen</Cit>. In questo articolo la
          traduzione segue l&apos;edizione.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=538"
          />
        </p>
        <p>
          Note di traduzione: rendo <Cit>buchse</Cit> in generale con cannone,{' '}
          <Cit>steinbuchse</Cit> con bombarda (spara palle di pietra),{' '}
          <Cit>kammerbuchse</Cit> con cannone a camera e <Cit>tarrasbuchse</Cit>{' '}
          con tarasnice. La grandezza della palla è indicata per confronto:
          grande come una testa (<Cit>als ein haupt</Cit>) o come una boccia da
          birilli (<Cit>bosskaule</Cit>, <Cit>bosskugel</Cit>). Gli arcivescovi
          di Magonza, Colonia, Treviri e Magdeburgo sono chiamati nel testo
          soltanto vescovi e lo mantengo nella traduzione.
          <br />
          Il <Cit>Rennbanner</Cit> (art. 18) è il vessillo
          dell&apos;avanguardia, che secondo Jähns apriva la marcia.
          <Qt
            publication={PUBLICATIONS.JAHNS1889}
            href="https://archive.org/details/geschichtederkr00jhgoog/page/304/mode/1up"
          />{' '}
          Lo <Cit>Stroffer</Cit> (art. 24) è l&apos;esecutore delle pene; Jähns
          lo identifica con il prevosto.
          <Qt
            publication={PUBLICATIONS.JAHNS1889}
            href="https://archive.org/details/geschichtederkr00jhgoog/page/305/mode/1up"
          />{' '}
          Per la parola <Cit>burnen</Cit> (art. 20) l&apos;editore dei{' '}
          <i>Deutsche Reichstagsakten</i> esita tra la marchiatura a fuoco e il
          rogo.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=555"
          />{' '}
          Le <Cit>für pfil</Cit> (art. 36) sono secondo l&apos;edizione frecce
          incendiarie (<i>fúrpfil</i>). Quante debbano spettare a ogni mille
          frecce ordinarie, il testo non lo dice.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=538"
          />
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <h5>a)</h5>
        <p>
          <i>
            Das ist die begreifunge, wie man sich in den heeren halden sall, als
            hernoch stehet geschrieben.
          </i>
        </p>
        <ol>
          <li>
            Item alle die, die in das heer kommen, sullin vore beichten und
            gottis leichenam empfoen und sich gottlichin halden.
          </li>
          <li>
            Item der bischof von Mencz, der bischof von Kölln, der bischof von
            Tryren, der pfalzgrafe vom Reyne sullin ein herr und ein wagenburg
            haben und ihren streit bestellen.
          </li>
          <li>
            Das ander der herzog von Sachsen, der lantgrafe von Doringin, der
            lantgrafe von Hessen, sullen auch ein heer und ein wagenburg haben
            und ihren streit bestellen.
          </li>
          <li>
            Item der markgrafe von Brandenburg, der bischof von Wirczburg, der
            bischof von Bobinberg, die grafin und ritterschaft von Swabin und
            was aus dem lande der Franken kummen, die sullin auch ein heer und
            ein wagenburg haben und ihren streit bestellen.
          </li>
          <li>
            Item der bischof von Maitburg, der bischof von Hildesheim, der
            bischof von der Halberstadt, die herzoginne von Brawnesczweyk und
            der markgrafe von Brandeburg von der Marke wegen, die sullin ein
            heer und eine wagenburg bestellen mit ihrem streite.
          </li>
          <li>
            Item die reichsstädte sullin ein heer und ein wagenburg haben, und
            ihren streit bestellen, und sich mit ihrem vulke zu einem fursten
            halden, zu welchim sie wollen und thuen das recht, das es wohl
            bestellt sei.
          </li>
          <li>
            Item die fursten, herrn aus der Slezia und Lowsicz und die VI städte
            und der deutsche meister von Prewssen sullin ein heer und ein
            wagenburg haben und bestellen einen streit.
          </li>
          <li>
            Item alle herzoge von Osterreich sullen ein heer und wagenburg haben
            und ihren streit bestellen.
          </li>
          <li>
            Und wenne die fursten, herrn und städte zusammen kommen mit ihren
            heeren in das land zu Behemin, so sullen sie denne ihren streit und
            wagenburg bestellin und das beste thuen, wie des sie eines werdin.
          </li>
          <li>
            Item was ein itzlicher furste, hirre ader stadt fussgänger oder
            wappener brenget, die sollen gleich halb buchsen und halb armbrost
            haben mit pfeilen, blei, pulver und was dorzu gehöret.
          </li>
          <li>
            Also sall man uber X fussganger einen hauptmann geben, und uber
            hundert einen hauptmann, uber tausint einen hauptmann.
          </li>
          <li>
            Wer das, dass jemand so ubel tete, wer der wär, und von dem streite
            fliehen wurde, ader aus dem lande zu Behemin rette (reite), gienge
            oder fuhre ane seiner hauptleute willin ader wissin, der ader die,
            ehre weib und kinder sullin ewiglichen vortreben sein und all ihr
            gut ist verloren.
          </li>
          <li>
            [Auch soll ein jeglicher, der in die heere führet spise, trank,
            kaufmannschaft, welicherlei das ist, zu und ab von den heeren sicher
            und fehlig sein vor aller menglich, niemand usgenommen, ohne
            gefährde, und wer dawider täte und sie beraubete oder verhinderte,
            der oder die sollent ihren lib verloren haben und soll kein gnad
            helfen.]
          </li>
          <li>
            Ouch so sullen die fursten und herrn einen markt bestellen in dem
            heer, als das gewohnlich ist, und wer doweder täte, der soll seinen
            leib verloren haben.
          </li>
          <li>
            [Ouch solle ein jeglich wagen, den man in das heer bringet, stark
            und gut sin, und soll ein isin kettin haben 15 schuh lang, und 2
            dielen (pretter); und jeglich wagenknecht soll ein flegel haben,
            grabschufel und solich notdurft.]
          </li>
          <li>
            Auch so sall kein furste ader stadt sich vor keine stadt oder burg
            legen, die zu notigen mit stormen länger denne eine nacht, is sei
            denne mit wissen und mit willen aller fursten, herrn und städte.
          </li>
          <li>
            Auch sall man bestellin, wenne die herrn zusammen kommen, dass ein
            heer einen tag vor ziehe und das ander hernoch, [und darnoch alle
            tage ein heer vor, das ander noch], also das redelich und
            bequemlichen ist, und als man des eines wird.
          </li>
          <li>
            Ouch soll ein itzlichs heer seine wäppener bestellen [rennbanner],
            welchir der von dem panierhen reitet ader fähret ahn des hauptmannes
            willen, denne ader den sall man seine pferde ader wagen nehmen, und
            sall das beuten, und do sall niemand umbreden, uf das, dass man
            dister gehorsamer in dem heer sei, und bei dem paniere bleiben.
          </li>
          <li>
            Item so sall niemand in dem heer spelen; wer das täte, dem sall man
            eine hand abe slohen.
          </li>
          <li>
            Item so sall niemand eine gemeine fraue do haben; wer das thuet, den
            sall man burnen.
          </li>
          <li>
            Item wer ein messer gewinnet, und einen wundt, dem sall man eine
            hand abe slohen; ist dies aber eine fährliche wunde, ader tödt
            einen, das sall man richten nach rechte.
          </li>
          <li>
            Auch sall man in dem heer nicht besaunen; besunder wenne man
            besaunet, so soll ein itzlicher bereit werdin, und an die statt
            kommen, do her hin wird geschicket.
          </li>
          <li>
            Item wer da stehlet ader jemande das seine nimmt, is sei in dem
            heer, ader vor dem heer, wo das geschiet, is were harnusch ader
            pferdt, ader welchirlei das wäre, den sall man hängen, und ihm sall
            keine gnade helfen.
          </li>
          <li>
            Ouch sall itzlicher furste, hirre, stadt in ihrem heer sunderliche
            schöppen dorzu haben und bestellen, ab eine klage vor sie käme, die
            darober richten und finden sullin, was do recht sei, und ihren
            stroffer dorbei haben, als das not wäre, dorober zu richten all zu
            hand.
          </li>
          <li>
            Wär is auch, ob jemande im heer wurde mit dem andern zwetrachtig,
            welchirlei das wäre, der sall is dem andern nicht ofrucken noch
            gedenken in keinem wege, besunderer sall das gutlichen halden und
            lossin bestan bis zu seiner behausunge.
          </li>
          <li>
            Auch sall man bestellen, ab ein oflauf in dem heer wurde, dass sich
            niemand dorzu woppen sall, und auch niemand dorzu laufen sall;
            besunder denne, die dorzu geschicket werden, also itzlichen fursten,
            herrn und städten dorzu zweene schicken sullin, und also viel dorzu,
            bis man eines wird, die dorzu kamen und den oflauf understehen und
            unfuge bewaren.
          </li>
          <li>
            Item so sall ein itzlich heer vier oder funfe wohl gelehrte pfaffen
            haben, die dem volke predigen, und lehren, wie man sich halden sall,
            und um den heiligen christenlichen glauben streiten sall, so man das
            allerbeste ausgerichten kann.
          </li>
          <li>
            Item sich sall auch kein heer in keinerlei sache unterwinden,
            auszurichten und einzunehmen, ader zu thuen ahn des obirsten
            hauptmanns willen und wissen.
          </li>
          <li>
            [Item sich soll auch kein furst, herre oder stadt oder sust jemand
            keiner städte, märkt, dörfer oder anderlei annehmen, die zu
            versprechen oder zu vertedingen, es si dann mit wissen und willen
            der houptlut.
          </li>
          <li>
            Auch soll ein jeglicher dem houptmann gehorsam sin, und solich
            gehorsam von jemand, wer der wer, gebrochen wurde, den oder die soll
            der houptmann stroffen nach dem und der bruch der gehorsams
            geschehen wär, und des soll sich niemand annehmen in kein wise.]
            <Qt
              publication={PUBLICATIONS.TOMAN}
              href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:673c4b4b-5004-4603-8f48-92fee1d07f23"
            />
            <Qt
              publication={PUBLICATIONS.PALACKY_UB2}
              href="https://archive.org/details/urkundlichebeitr02pala/page/198/mode/1up"
            />
            <Qt
              publication={PUBLICATIONS.DRA9}
              href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=553"
            />
          </li>
        </ol>
        <h5>b)</h5>
        <p>
          <i>
            Das ist der anschlag der büchsen und des gezeuges, das man haben
            sall.
          </i>
        </p>
        <ol>
          <li>
            Item der herzog von Sachsen soll haben XIIII steinbuchsen zu dem
            streite und eine grosse buchse und dorzu XII<sup>m</sup> pfeile.
          </li>
          <li>
            Item der landgrafe von Doringen VIII buchsen (und eine grosse
            buchse) und VI<sup>m</sup> [10.000] pfeile.
          </li>
          <li>
            It. der markgrafe von Brandenburg VII buchsen [zum strit] und eine
            grosse buchse und VI<sup>m</sup> pfeile.
          </li>
          <li>
            It. Herzog Albrecht und herzog Erinsteskind von Osterreich sullen
            haben so viel buchsen, gross und kleine, also sie der bedurfen und
            gehaben mogen, dorzu obir die geschoss [schutzen] XII<sup>m</sup>{' '}
            pfeile.
          </li>
          <li>
            It. der bischof von Salczburg VI buchsen, itzliche die scheisst als
            [gross als] ein haupt, und VI<sup>m</sup> pfeile.
          </li>
          <li>
            It. der bischof von Passaw IIII buchsen, der itzliche scheisst als
            ein haupt, und VI<sup>m</sup> pfeile.
          </li>
          <li>
            It. herzog Lodewig Mortain IIII buchsen in der vorgenannten mosse
            und eine grosse buchse und VI<sup>m</sup> pfeile.
          </li>
          <li>
            It. herzog Ernest, herzog Wilhelm von Beyeren VIII kammerbuchsen,
            dass eine scheisst als eine bosskaule, und VI<sup>m</sup> pfeile.
          </li>
          <li>
            Herzog Heynrich von Beyeren eine grosse buchse, VI kleine
            [kammerbuchsen], und sust dreie [die als] gross als ein haupt
            schiessen, und VI<sup>m</sup> pfeile.
          </li>
          <li>
            It. herzog Hanns II kleine buchsen [kammerbuchsen], eine grosse
            buchse und III [IV]<sup>m</sup> pfeile.
          </li>
          <li>
            It. herzog Otto mit des pfalzgrafen land zu Beyeren II buchsen, die
            gross schiessen als ein haupt, III<sup>m</sup> pfeile.
          </li>
          <li>
            (It. der bischof von Mencz IIII buchsen, der itzliche als ein haupt
            scheisst, und VI kleine und VI<sup>m</sup> pfeile.)
          </li>
          <li>
            [It. der bischof von Wirtzpurg 4 buchsen, der itzliche schiesse als
            ein heubt, 6 kammerbuchsen, und 6000 pfil.]
          </li>
          <li>
            It. der bischof von Bobemberg II buchsen, die do schiessen als ein
            haupt, und IIII kammerbuchsen [und 4000 pfil].
          </li>
          <li>
            It. der bischof von Aussburg VI<sup>m</sup> pfeile.
          </li>
          <li>
            It. der bischof von Anstat [Eystetten] eine buchse, die do scheisst
            als ein haupt, drei kleine [drie kammerbuchsen] und VI<sup>m</sup>{' '}
            pfeile.
          </li>
          <li>
            It. die Lusacia und die VI städte und alle fürsten in der Silesia,
            herren und städte sullen so viel buchsen haben zum streite, halb
            [sust andere buchsen] klein und gross mit en fuhren, als an ehren
            ort not ist und sie getragen mögen, und sullen sich dorin selbist
            anslohen und beladen nach redlichkeit, wenne wir ihr vermogen[s hie]
            nicht wissin.
          </li>
          <li>
            It. die von Nurenberg sullen haben ihre [eine] grosse buchse, IIII
            steinbuchsen, IIII kammerbuchsen, VI<sup>m</sup> pfeile.
          </li>
          <li>
            [Item die von Regensburg 2 buchsen, die da schiessen als ein heubt,
            4 kammerbuchsen und sechstusend pfil.]
          </li>
          <li>
            It. die von Ratenburg [Rotenburg] II grosse buchsen [steinbuchsen],
            II kammerbuchsen, III<sup>m</sup> [4000] pfeile.
          </li>
          <li>
            It. die von Dingspugel [Dinckelsbuel] I steinbuchse, II
            kammerbuchsen, II<sup>m</sup> [1500] pfeile.
          </li>
          <li>
            It. die von Weisenburg ein steinbuchse, II kammerbuchsen, II
            <sup>m</sup> pfeile.
          </li>
          <li>
            It. die von Furdelingen [Nordlingen] II kammerbuchsen, II
            steinbuchsen, III<sup>m</sup> pfeile.
          </li>
          <li>
            It. Egern eine grosse buchse, VI kammerbuchsen, VI<sup>m</sup>{' '}
            pfeile.
          </li>
          <li>
            It. der Elbogen II steinbuchsen, die do schiessen als [gross als]
            ein haupt, III<sup>m</sup> pfeile.
          </li>
          <li>
            Ausburg VII kammerbuchsen [steinbuchsen], die schiessen als ein
            bosskaule, VI<sup>m</sup> pfeile.
          </li>
          <li>
            Ulmm VI steinbuchsen in derselben mosse, I<sup>m</sup> pfeile.
          </li>
          <li>
            Gemünd zwei buchsen in derselben mosse, I<sup>m</sup> pfeile.
          </li>
          <li>
            Erfurt eine grosse buchse, VIII steinbuchsen, die do schiessen als
            ein haupt, X<sup>m</sup> pfeile.
          </li>
          <li>
            Sweinfurt ein steinbuchse, II<sup>m</sup> [1500] pfeile.
          </li>
          <li>
            Franckefurt VI<sup>m</sup> pfeile.
            <br />
            Mencz VI<sup>m</sup> „
            <br />
            Bormss [Wormss] III<sup>m</sup> „
            <br />
            Speyrer IIII<sup>m</sup> „
            <br />
            Hill [Halle] IIII<sup>m</sup> „
            <br />
            Esslingen IIII<sup>m</sup> „
            <br />
            Hu[ey]lbronn IIII<sup>m</sup> „
            <br />
            Lindaw IIII<sup>m</sup> „
            <br />
            Schaffhausen IIII<sup>m</sup> „
            <br />
            Paszel VI<sup>m</sup> „
            <br />
            Hagnaw IIII<sup>m</sup> „ [3000]
            <br />
            Wympfen III<sup>m</sup> „
            <br />
            Custenicz VI<sup>m</sup> „
            <br />
            Rabelsburg [Ravensburg] III<sup>m</sup> „ [4000]
            <br />
            Bibbrach III<sup>m</sup> „
            <br />
            Mommingen III<sup>m</sup> „
            <br />
            Snygen [Gyngen] III<sup>m</sup> „ [2000]
            <br />
            Uberlingen IIII<sup>m</sup> „
            <br />
            Strossburg VI<sup>m</sup> „
            <br />
            Collmar III<sup>m</sup> „
            <br />
            Sleczstat III<sup>m</sup> „
          </li>
          <li>[Item der bischof von Meydeburg 4 steinbuchsen, 4000 pfil.</li>
          <li>
            Item der bischof von Nuwenburg 2 steinbuchsen und zwei
            tarrasbuchsen, und dreitusent pfil.
          </li>
          <li>Item der bischof von Merszburg 2 steinbuchsen, 3000 pfil.</li>
          <li>
            Item iglich furste und städte, die vorgeschrieben stehen, sollen zu
            solichen ihren buchsen furen lassen stein und ander noitdurft, die
            darzu gehoret, und die auch mit buchsenmeistern bewahren, als sich
            das noch noitdorft geburt, und sollen auch sust ihren schutzen eine
            güte notdurft pfile geben über soliche anzahl der pfil, die einen
            jeglichen insunderheit in vorgerürter weis geschrieben sin.
          </li>
          <li>
            Item ein jeglich furste und stadt, den also pfil zu haben
            zugeschrieben sin, sullent zu jeglichem tusend für pfil mit führen
            lossen.
          </li>
          <li>
            Es sullen ouch sust alle fürsten und städte, die hie mit büssen und
            gezüge mit angeslagen sin, kammerbuchsen, die schiessen als gross
            als ein bosskugel, mit ihn bringen und führen lassen, so sie derein
            meisteil gehaben mögen etc.]
            <Qt
              publication={PUBLICATIONS.TOMAN}
              href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:a59e6d13-c4d5-4059-8ec4-1f8ec3ea48db"
            />
            <Qt
              publication={PUBLICATIONS.PALACKY_UB2}
              href="https://archive.org/details/urkundlichebeitr02pala/page/201/mode/1up"
            />
            <Qt
              publication={PUBLICATIONS.DRA9}
              href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=535"
            />
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <h5>a)</h5>
        <p>
          <i>
            Questa è la disposizione su come ci si debba comportare negli
            eserciti, come è scritto qui di seguito.
          </i>
        </p>
        <ol>
          <li>
            Tutti coloro che vengono nell&apos;esercito devono prima
            confessarsi, ricevere il Corpo del Signore e comportarsi
            devotamente.
          </li>
          <li>
            Il vescovo di Magonza, il vescovo di Colonia, il vescovo di Treviri
            e il conte palatino del Reno devono avere un esercito e un forte dei
            carri e ordinare il loro schieramento.
          </li>
          <li>
            Il secondo: il duca di Sassonia, il langravio di Turingia e il
            langravio d&apos;Assia devono avere anch&apos;essi un esercito e un
            forte dei carri e ordinare il loro schieramento.
          </li>
          <li>
            Il margravio di Brandeburgo, il vescovo di Würzburg, il vescovo di
            Bamberga, i conti e la cavalleria di Svevia e ciò che viene dalla
            terra di Franconia devono avere anch&apos;essi un esercito e un
            forte dei carri e ordinare il loro schieramento.
          </li>
          <li>
            Il vescovo di Magdeburgo, il vescovo di Hildesheim, il vescovo di
            Halberstadt, la duchessa di Brunswick e il margravio di Brandeburgo
            per la Marca devono allestire un esercito e un forte dei carri con
            il loro schieramento.
          </li>
          <li>
            Le città imperiali devono avere un esercito e un forte dei carri,
            ordinare il loro schieramento e unirsi con la loro gente al principe
            che vorranno, e farlo in modo che tutto sia ben ordinato.
          </li>
          <li>
            I principi e i signori di Slesia e di Lusazia, le Sei Città e il
            maestro tedesco di Prussia devono avere un esercito e un forte dei
            carri e ordinare uno schieramento.
          </li>
          <li>
            Tutti i duchi d&apos;Austria devono avere un esercito e un forte dei
            carri e ordinare il loro schieramento.
          </li>
          <li>
            E quando i principi, i signori e le città si riuniranno con i loro
            eserciti nella terra di Boemia, dovranno ordinare il loro
            schieramento e il forte dei carri e fare del loro meglio, come si
            accorderanno.
          </li>
          <li>
            I fanti o gli armati che un principe, un signore o una città porta
            devono avere in parti uguali metà armi da fuoco e metà balestre, con
            frecce, piombo, polvere e quanto vi appartiene.
          </li>
          <li>
            Si deve porre un capitano su ogni dieci fanti, un capitano su ogni
            cento e un capitano su ogni mille.
          </li>
          <li>
            Se qualcuno, chiunque egli sia, facesse il male di fuggire dalla
            battaglia o di uscire a cavallo, a piedi o su un carro dalla terra
            di Boemia senza la volontà o la conoscenza dei suoi capitani, costui
            o costoro, con le loro mogli e i loro figli, siano banditi per
            sempre e tutti i loro beni siano perduti.
          </li>
          <li>
            [Inoltre chiunque porti negli eserciti cibo, bevande o merci di
            qualsiasi genere deve essere sicuro e protetto nell&apos;andare e
            nel tornare dagli eserciti da chiunque, nessuno escluso, senza
            inganno. E chi agisse contro questo e lo derubasse o lo ostacolasse,
            costui o costoro perdano la vita e nessuna grazia li salvi.]
          </li>
          <li>
            Inoltre i principi e i signori devono istituire un mercato
            nell&apos;esercito, come è consuetudine, e chi agisse contro questo
            perda la vita.
          </li>
          <li>
            [Inoltre ogni carro che si porta nell&apos;esercito deve essere
            robusto e buono e avere una catena di ferro lunga 15 piedi e 2
            tavole (assi); e ogni carrettiere deve avere un correggiato, una
            vanga e simili cose necessarie.]
          </li>
          <li>
            Inoltre nessun principe né città deve porsi davanti a una città o a
            un castello e stringerlo d&apos;assedio con assalti per più di una
            notte, se non con la conoscenza e la volontà di tutti i principi,
            signori e città.
          </li>
          <li>
            Inoltre si deve disporre che, quando i signori si riuniscono, un
            esercito marci avanti un giorno e l&apos;altro dietro [e poi ogni
            giorno un esercito avanti e l&apos;altro dietro], come sarà
            ragionevole e comodo e come ci si accorderà.
          </li>
          <li>
            Inoltre ogni esercito deve designare i suoi armati [vessillo
            dell&apos;avanguardia]. Chi si allontana a cavallo o su un carro dal
            vessillo senza la volontà del capitano, a costui o costoro si
            tolgano i cavalli o i carri e li si divida come bottino, e nessuno
            interceda per loro, affinché nell&apos;esercito si sia tanto più
            obbedienti e si resti presso il vessillo.
          </li>
          <li>
            Nessuno deve giocare nell&apos;esercito; a chi lo fa si tagli una
            mano.
          </li>
          <li>
            Nessuno deve tenervi una donna pubblica; chi lo fa sia bruciato (?).
          </li>
          <li>
            A chi estrae un coltello e ferisce qualcuno si tagli una mano; se
            però è una ferita pericolosa o uccide qualcuno, lo si giudichi
            secondo il diritto.
          </li>
          <li>
            Inoltre nell&apos;esercito non si deve suonare la tromba; ma quando
            la si suona, ognuno si prepari e venga nel luogo dove sarà mandato.
          </li>
          <li>
            Chi ruba o toglie a qualcuno ciò che è suo, nell&apos;esercito o
            davanti all&apos;esercito, dovunque accada, che si tratti di
            armatura, di cavallo o di qualsiasi altra cosa, sia impiccato e
            nessuna grazia lo salvi.
          </li>
          <li>
            Inoltre ogni principe, signore e città deve avere e nominare nel
            proprio esercito degli scabini appositi che, se davanti a loro
            giunge una querela, la giudichino e trovino ciò che è giusto, e
            tenere con sé il proprio esecutore delle pene, affinché, se
            necessario, si giudichi subito.
          </li>
          <li>
            Se qualcuno nell&apos;esercito entrasse in discordia con un altro,
            per qualsiasi motivo, non glielo rinfacci né glielo serbi in alcun
            modo, ma lo sopporti bonariamente e lasci stare finché non sarà
            tornato a casa.
          </li>
          <li>
            Inoltre si deve disporre che, se nell&apos;esercito scoppia un
            tumulto, nessuno si armi per questo e nessuno vi accorra, eccetto
            coloro che vi saranno mandati: ogni principe, signore e città deve
            mandarne due, e tanti quanti si concorderà, che vi giungano, sedino
            il tumulto e impediscano i disordini.
          </li>
          <li>
            Inoltre ogni esercito deve avere quattro o cinque sacerdoti ben
            istruiti, che predichino al popolo e gli insegnino come comportarsi
            e combattere per la santa fede cristiana, nel miglior modo
            possibile.
          </li>
          <li>
            Inoltre nessun esercito deve intraprendere in alcuna cosa
            un&apos;azione, occupare o fare qualcosa senza la volontà e la
            conoscenza del capitano supremo.
          </li>
          <li>
            [Inoltre nessun principe, signore o città, né alcun altro, deve
            prendere sotto di sé città, borghi, villaggi o altro per difenderli
            o tutelarli, se non con la conoscenza e la volontà dei capitani.
          </li>
          <li>
            Inoltre ognuno deve obbedire al capitano, e se qualcuno, chiunque
            egli sia, violasse tale obbedienza, il capitano punisca costui o
            costoro secondo il modo in cui è avvenuta la violazione
            dell&apos;obbedienza, e nessuno prenda in alcun modo le loro parti.]
          </li>
        </ol>
        <h5>b)</h5>
        <p>
          <i>
            Questa è la ripartizione dei cannoni e dell&apos;equipaggiamento che
            si devono avere.
          </i>
        </p>
        <ol>
          <li>
            Il duca di Sassonia deve avere 14 bombarde per la battaglia, un
            grande cannone e inoltre 12&nbsp;000 frecce.
          </li>
          <li>
            Il langravio di Turingia 8 cannoni (e un grande cannone) e 6000
            [10&nbsp;000] frecce.
          </li>
          <li>
            Il margravio di Brandeburgo 7 cannoni [per la battaglia], un grande
            cannone e 6000 frecce.
          </li>
          <li>
            Il duca Albrecht e i figli del duca Ernst d&apos;Austria devono
            avere tanti cannoni, grandi e piccoli, quanti ne occorrono e ne
            possono avere, e inoltre, oltre alle munizioni [dei loro tiratori],
            12&nbsp;000 frecce.
          </li>
          <li>
            Il vescovo di Salisburgo 6 cannoni, ciascuno dei quali spara [una
            palla grande] come una testa, e 6000 frecce.
          </li>
          <li>
            Il vescovo di Passavia 4 cannoni, ciascuno dei quali spara come una
            testa, e 6000 frecce.
          </li>
          <li>
            Il duca Ludovico (conte di) Mortain 4 cannoni della stessa
            grandezza, un grande cannone e 6000 frecce.
          </li>
          <li>
            Il duca Ernst e il duca Wilhelm di Baviera 8 cannoni a camera,
            ciascuno dei quali spara come una boccia da birilli, e 6000 frecce.
          </li>
          <li>
            Il duca Heinrich di Baviera un grande cannone, 6 piccoli [cannoni a
            camera] e inoltre tre [che] sparano grandi come una testa, e 6000
            frecce.
          </li>
          <li>
            Il duca Hans 2 piccoli cannoni [cannoni a camera], un grande cannone
            e 3000 [4000] frecce.
          </li>
          <li>
            Il duca Otto con la terra del conte palatino in Baviera 2 cannoni
            che sparano grandi come una testa, e 3000 frecce.
          </li>
          <li>
            (Il vescovo di Magonza 4 cannoni, ciascuno dei quali spara come una
            testa, 6 piccoli e 6000 frecce.)
          </li>
          <li>
            [Il vescovo di Würzburg 4 cannoni, ciascuno dei quali spara come una
            testa, 6 cannoni a camera e 6000 frecce.]
          </li>
          <li>
            Il vescovo di Bamberga 2 cannoni che sparano come una testa e 4
            cannoni a camera [e 4000 frecce].
          </li>
          <li>Il vescovo di Augusta 6000 frecce.</li>
          <li>
            Il vescovo di Anstat [Eichstätt] un cannone che spara come una
            testa, tre piccoli [tre cannoni a camera] e 6000 frecce.
          </li>
          <li>
            La Lusazia, le Sei Città e tutti i principi, signori e città di
            Slesia devono avere tanti cannoni per la battaglia, metà [e altri
            cannoni] piccoli e grandi, e portarli con sé, quanti ne occorrono
            nella loro regione e quanti ne possono sostenere. Devono tassarsi e
            gravarsi da sé secondo equità, poiché [qui] non conosciamo i loro
            mezzi.
          </li>
          <li>
            I cittadini di Norimberga devono avere il loro [un] grande cannone,
            4 bombarde, 4 cannoni a camera e 6000 frecce.
          </li>
          <li>
            [I cittadini di Ratisbona 2 cannoni che sparano come una testa, 4
            cannoni a camera e seimila frecce.]
          </li>
          <li>
            I cittadini di Rothenburg 2 grandi cannoni [bombarde], 2 cannoni a
            camera, 3000 [4000] frecce.
          </li>
          <li>
            I cittadini di Dinkelsbühl 1 bombarda, 2 cannoni a camera, 2000
            [1500] frecce.
          </li>
          <li>
            I cittadini di Weißenburg una bombarda, 2 cannoni a camera, 2000
            frecce.
          </li>
          <li>
            I cittadini di Nördlingen 2 cannoni a camera, 2 bombarde, 3000
            frecce.
          </li>
          <li>
            Cheb (Eger) un grande cannone, 6 cannoni a camera, 6000 frecce.
          </li>
          <li>
            Loket (Elbogen) 2 bombarde che sparano [grandi] come una testa, 3000
            frecce.
          </li>
          <li>
            Augusta 7 cannoni a camera [bombarde] che sparano come una boccia da
            birilli, 6000 frecce.
          </li>
          <li>Ulma 6 bombarde della stessa grandezza, 1000 frecce.</li>
          <li>Gmünd due cannoni della stessa grandezza, 1000 frecce.</li>
          <li>
            Erfurt un grande cannone, 8 bombarde che sparano come una testa,
            10&nbsp;000 frecce.
          </li>
          <li>Schweinfurt una bombarda, 2000 [1500] frecce.</li>
          <li>
            Francoforte 6000 frecce.
            <br />
            Magonza 6000 frecce.
            <br />
            Worms 3000 frecce.
            <br />
            Spira 4000 frecce.
            <br />
            Hall [Halle] 4000 frecce.
            <br />
            Esslingen 4000 frecce.
            <br />
            Heilbronn 4000 frecce.
            <br />
            Lindau 4000 frecce.
            <br />
            Sciaffusa 4000 frecce.
            <br />
            Basilea 6000 frecce.
            <br />
            Hagenau 4000 [3000] frecce.
            <br />
            Wimpfen 3000 frecce.
            <br />
            Costanza 6000 frecce.
            <br />
            Ravensburg 3000 [4000] frecce.
            <br />
            Biberach 3000 frecce.
            <br />
            Memmingen 3000 frecce.
            <br />
            Giengen 3000 [2000] frecce.
            <br />
            Überlingen 4000 frecce.
            <br />
            Strasburgo 6000 frecce.
            <br />
            Colmar 3000 frecce.
            <br />
            Sélestat (Schlettstadt) 3000 frecce.
          </li>
          <li>[Il vescovo di Magdeburgo 4 bombarde, 4000 frecce.</li>
          <li>
            Il vescovo di Naumburg 2 bombarde, due tarasnice e tremila frecce.
          </li>
          <li>Il vescovo di Merseburg 2 bombarde, 3000 frecce.</li>
          <li>
            Ogni principe e città sopra elencati devono far portare con i loro
            cannoni pietre e le altre cose necessarie che vi appartengono,
            fornirli anche di bombardieri, come richiede la necessità, e dare
            inoltre ai loro tiratori una buona scorta di frecce oltre al numero
            di frecce assegnato sopra a ciascuno.
          </li>
          <li>
            Ogni principe e città cui sono così assegnate frecce devono far
            portare con ogni migliaio anche frecce incendiarie.
          </li>
          <li>
            Inoltre tutti gli altri principi e città che qui non sono tassati
            per cannoni ed equipaggiamento devono portare e far portare con sé
            cannoni a camera che sparano grandi come una boccia da birilli,
            quanti più ne possono avere, ecc.]
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
