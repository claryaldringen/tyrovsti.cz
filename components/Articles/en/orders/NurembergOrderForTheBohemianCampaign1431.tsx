import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const NurembergOrderForTheBohemianCampaign1431 = ({
  draft,
}: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="nuremberg-resolution-on-the-order-for-the-campaign-into-bohemia"
        />
        <h4>
          Nuremberg Resolution of 9–10 March 1431 on the Order for the Campaign
          into Bohemia
          {draft && <DraftBadge />}
        </h4>
        <p>Working translation, not yet reviewed.</p>
        <p>
          Both texts came out of the negotiations of the Imperial Diet in
          Nuremberg in February and March 1431, which was preparing a great
          expedition into Bohemia. The order on how the army is to conduct
          itself (part a) is dated by the edition of the{' '}
          <i>Deutsche Reichstagsakten</i> to 9 or 10 March 1431.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=552"
          />{' '}
          The schedule of guns and arrows to be supplied by the individual
          princes and cities (part b) is printed there as a separate document
          and placed between 19 February and 13–14 March 1431.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=534"
          />{' '}
          According to the order, seven armies were to set out, each with its
          own wagon fort. In the summer of 1431 the German army did advance on
          Domažlice, in three armies with as many wagon forts.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:d18f904a-5b56-4200-a699-2fa149ff1335"
          />{' '}
          Toman believed that this order, like the German orders of 1426 and
          1427 and Hodětín&apos;s order, drew on Czech military orders that have
          not survived, rather than directly on Žižka&apos;s order.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:498388aa-b7b4-45f9-9284-38220dbccebe"
          />{' '}
          Max Jähns saw in the provision that the princes are to keep assessors
          and an executor of punishments with their armies (art. 24) the first
          step towards a code of military justice.
          <Qt
            publication={PUBLICATIONS.JAHNS1889}
            href="https://archive.org/details/geschichtederkr00jhgoog/page/305/mode/1up"
          />
        </p>
        <p>
          Toman took the text from Palacký&apos;s edition, based on a manuscript
          in the Prague Chapter Archive,
          <Qt
            publication={PUBLICATIONS.PALACKY_UB2}
            href="https://archive.org/details/urkundlichebeitr02pala/page/194/mode/1up"
          />{' '}
          and added articles and readings from the{' '}
          <i>Deutsche Reichstagsakten</i> in square brackets. The round brackets
          contain his explanations and, in part b), also words and an article
          that are missing from that edition.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:d42e7297-de19-4587-83aa-febe945fea69"
          />
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:a59e6d13-c4d5-4059-8ec4-1f8ec3ea48db"
          />{' '}
          The <i>Deutsche Reichstagsakten</i> are based on other copies and
          differ even in places that Toman did not mark. In article 4 they also
          name the dukes of Bavaria and the count of Württemberg, in article 5
          the dukes of Brunswick (Toman has a duchess), the princes by the sea
          and the young margrave of Brandenburg, and in article 7 the Grand
          Master of Prussia instead of the German Master.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=553"
          />{' '}
          In the schedule they additionally list the town of Windsheim and give
          different numbers of arrows for several cities, for example 6,000 for
          Ulm and 3,000 for Mainz, Speyer and Heilbronn.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=536"
          />
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=537"
          />{' '}
          In the last article they read <Cit>nút angeslagen</Cit>, i.e. the
          princes and cities that are <i>not</i> listed in the schedule, whereas
          Toman reads <Cit>mit angeslagen</Cit>. In this article the translation
          follows the edition.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=538"
          />
        </p>
        <p>
          Translation notes: I translate <Cit>buchse</Cit> generally as gun,{' '}
          <Cit>steinbuchse</Cit> as stone gun (firing stone balls),{' '}
          <Cit>kammerbuchse</Cit> as chamber gun and <Cit>tarrasbuchse</Cit> as
          tarras gun. The size of the ball is given by comparison: as big as a
          head (<Cit>als ein haupt</Cit>) or as a skittle ball (
          <Cit>bosskaule</Cit>, <Cit>bosskugel</Cit>). The archbishops of Mainz,
          Cologne, Trier and Magdeburg are called merely bishops in the text,
          and I keep this in the translation.
          <br />
          <Cit>Rennbanner</Cit> (art. 18) is the banner of the vanguard, which
          according to Jähns opened the march.
          <Qt
            publication={PUBLICATIONS.JAHNS1889}
            href="https://archive.org/details/geschichtederkr00jhgoog/page/304/mode/1up"
          />{' '}
          <Cit>Stroffer</Cit> (art. 24) is the executor of punishments; Jähns
          identifies him with the provost.
          <Qt
            publication={PUBLICATIONS.JAHNS1889}
            href="https://archive.org/details/geschichtederkr00jhgoog/page/305/mode/1up"
          />{' '}
          For the word <Cit>burnen</Cit> (art. 20) the editor of the{' '}
          <i>Deutsche Reichstagsakten</i> hesitates between branding and burning
          at the stake.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=555"
          />{' '}
          <Cit>Für pfil</Cit> (art. 36) are fire arrows according to the edition
          (<i>fúrpfil</i>). The text does not say how many of them are to go
          with every thousand ordinary arrows.
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
            This is the provision on how one is to conduct oneself in the
            armies, as written below.
          </i>
        </p>
        <ol>
          <li>
            All who come into the army shall first make confession, receive the
            Body of the Lord and conduct themselves in a godly manner.
          </li>
          <li>
            The bishop of Mainz, the bishop of Cologne, the bishop of Trier and
            the Count Palatine of the Rhine shall have one army and one wagon
            fort and set up their battle array.
          </li>
          <li>
            The second: the duke of Saxony, the landgrave of Thuringia and the
            landgrave of Hesse shall also have one army and one wagon fort and
            set up their battle array.
          </li>
          <li>
            The margrave of Brandenburg, the bishop of Würzburg, the bishop of
            Bamberg, the counts and knighthood of Swabia and whatever comes from
            the land of Franconia shall also have one army and one wagon fort
            and set up their battle array.
          </li>
          <li>
            The bishop of Magdeburg, the bishop of Hildesheim, the bishop of
            Halberstadt, the duchess of Brunswick and the margrave of
            Brandenburg on behalf of the Mark shall set up one army and one
            wagon fort with their battle array.
          </li>
          <li>
            The imperial cities shall have one army and one wagon fort, set up
            their battle array and join with their people whichever prince they
            wish, and do this properly, so that it is well arranged.
          </li>
          <li>
            The princes and lords of Silesia and Lusatia, the six towns and the
            German Master of Prussia shall have one army and one wagon fort and
            set up a battle array.
          </li>
          <li>
            All the dukes of Austria shall have one army and wagon fort and set
            up their battle array.
          </li>
          <li>
            And when the princes, lords and cities come together with their
            armies in the land of Bohemia, they shall set up their battle array
            and wagon fort and do the best, as they agree.
          </li>
          <li>
            Whatever foot soldiers or men-at-arms any prince, lord or city
            brings shall have in equal share half guns and half crossbows, with
            arrows, lead, powder and whatever belongs to them.
          </li>
          <li>
            A captain shall be appointed over every ten foot soldiers, a captain
            over every hundred and a captain over every thousand.
          </li>
          <li>
            If anyone, whoever he may be, should do so ill as to flee from
            battle, or ride, walk or drive out of the land of Bohemia without
            the will or knowledge of his captains, he or they, together with
            their wives and children, shall be banished for ever and all their
            property is forfeit.
          </li>
          <li>
            [Also everyone who brings food, drink or goods of whatever kind into
            the armies shall be safe and protected on the way to and from the
            armies from everyone, no one excepted, without guile. And whoever
            acts against this and robs or hinders him, he or they shall forfeit
            their lives and no mercy shall help them.]
          </li>
          <li>
            Also the princes and lords shall set up a market in the army, as is
            customary, and whoever acts against it shall forfeit his life.
          </li>
          <li>
            [Also every wagon brought into the army shall be strong and good and
            have an iron chain 15 feet long and 2 planks (boards); and every
            wagon servant shall have a flail, a spade and such necessities.]
          </li>
          <li>
            Also no prince or city shall lay siege to any town or castle and
            press it with assaults for longer than one night, unless with the
            knowledge and will of all the princes, lords and cities.
          </li>
          <li>
            It shall also be arranged that, when the lords come together, one
            army marches ahead one day and the other behind [and thereafter
            every day one army ahead, the other behind], as is reasonable and
            convenient and as they agree.
          </li>
          <li>
            Also every army shall appoint its men-at-arms [vanguard banner].
            Whoever rides or drives away from the banner without the
            captain&apos;s will shall have his horses or wagons taken and shared
            out as booty, and no one shall intercede for him, so that people are
            all the more obedient in the army and stay with the banner.
          </li>
          <li>
            No one shall gamble in the army; whoever does so shall have a hand
            cut off.
          </li>
          <li>
            No one shall keep a common woman there; whoever does so shall be
            burned (?).
          </li>
          <li>
            Whoever draws a knife and wounds someone shall have a hand cut off;
            but if it is a dangerous wound or he kills someone, it shall be
            judged according to law.
          </li>
          <li>
            Also no trumpets shall be blown in the army; but when the trumpet is
            blown, everyone shall make ready and come to the place to which he
            is sent.
          </li>
          <li>
            Whoever steals or takes from someone what is his, whether in the
            army or in front of the army, wherever it happens, be it armour or a
            horse or anything else, shall be hanged and no mercy shall help him.
          </li>
          <li>
            Also every prince, lord and city shall have and appoint special
            assessors in their army who, if a complaint is brought before them,
            shall judge it and find what is right, and shall have their executor
            of punishments with them, so that, if necessary, judgement can be
            carried out at once.
          </li>
          <li>
            If anyone in the army should fall out with another, over whatever
            matter, he shall not reproach him with it or bear it against him in
            any way, but shall bear it amicably and let it rest until he is back
            home.
          </li>
          <li>
            It shall also be arranged that, if a riot breaks out in the army, no
            one shall arm himself for it and no one shall run there except those
            who are sent: every prince, lord and city shall send two for this,
            and as many as are agreed, who shall go there, quell the riot and
            prevent disorder.
          </li>
          <li>
            Also every army shall have four or five well-learned priests who
            shall preach to the people and teach them how to conduct themselves
            and fight for the holy Christian faith, as best they can.
          </li>
          <li>
            Also no army shall undertake anything in any matter, carry it out,
            seize anything or act without the will and knowledge of the supreme
            captain.
          </li>
          <li>
            [Also no prince, lord or city, nor anyone else, shall take under his
            protection any towns, market towns, villages or anything else in
            order to defend or answer for them, unless with the knowledge and
            will of the captains.
          </li>
          <li>
            Also everyone shall be obedient to the captain, and if anyone,
            whoever he may be, breaks this obedience, the captain shall punish
            him or them according to how the breach of obedience occurred, and
            no one shall take their side in any way.]
          </li>
        </ol>
        <h5>b)</h5>
        <p>
          <i>This is the schedule of guns and equipment that are to be had.</i>
        </p>
        <ol>
          <li>
            The duke of Saxony shall have 14 stone guns for battle, one great
            gun and in addition 12,000 arrows.
          </li>
          <li>
            The landgrave of Thuringia 8 guns (and one great gun) and 6,000
            [10,000] arrows.
          </li>
          <li>
            The margrave of Brandenburg 7 guns [for battle], one great gun and
            6,000 arrows.
          </li>
          <li>
            Duke Albrecht and the children of Duke Ernst of Austria shall have
            as many guns, great and small, as they need and can have, and in
            addition to the ammunition [of their shooters] 12,000 arrows.
          </li>
          <li>
            The bishop of Salzburg 6 guns, each of which shoots [a ball as big]
            as a head, and 6,000 arrows.
          </li>
          <li>
            The bishop of Passau 4 guns, each of which shoots as a head, and
            6,000 arrows.
          </li>
          <li>
            Duke Ludwig (count of) Mortain 4 guns of the same size, one great
            gun and 6,000 arrows.
          </li>
          <li>
            Duke Ernst and Duke Wilhelm of Bavaria 8 chamber guns, each of which
            shoots as a skittle ball, and 6,000 arrows.
          </li>
          <li>
            Duke Heinrich of Bavaria one great gun, 6 small [chamber guns] and
            also three [that] shoot as big as a head, and 6,000 arrows.
          </li>
          <li>
            Duke Hans 2 small guns [chamber guns], one great gun and 3,000
            [4,000] arrows.
          </li>
          <li>
            Duke Otto with the Count Palatine&apos;s land in Bavaria 2 guns that
            shoot as big as a head, and 3,000 arrows.
          </li>
          <li>
            (The bishop of Mainz 4 guns, each of which shoots as a head, 6 small
            ones and 6,000 arrows.)
          </li>
          <li>
            [The bishop of Würzburg 4 guns, each of which shoots as a head, 6
            chamber guns and 6,000 arrows.]
          </li>
          <li>
            The bishop of Bamberg 2 guns that shoot as a head and 4 chamber guns
            [and 4,000 arrows].
          </li>
          <li>The bishop of Augsburg 6,000 arrows.</li>
          <li>
            The bishop of Anstat [Eichstätt] one gun that shoots as a head,
            three small ones [three chamber guns] and 6,000 arrows.
          </li>
          <li>
            Lusatia, the six towns and all the princes, lords and cities in
            Silesia shall have as many guns for battle, half [and other guns]
            small and great, and take them along, as are needed in their region
            and as they can bear. They shall assess and burden themselves
            fairly, since we do not know their means [here].
          </li>
          <li>
            The citizens of Nuremberg shall have their [one] great gun, 4 stone
            guns, 4 chamber guns and 6,000 arrows.
          </li>
          <li>
            [The citizens of Regensburg 2 guns that shoot as a head, 4 chamber
            guns and six thousand arrows.]
          </li>
          <li>
            The citizens of Rothenburg 2 great guns [stone guns], 2 chamber
            guns, 3,000 [4,000] arrows.
          </li>
          <li>
            The citizens of Dinkelsbühl 1 stone gun, 2 chamber guns, 2,000
            [1,500] arrows.
          </li>
          <li>
            The citizens of Weißenburg one stone gun, 2 chamber guns, 2,000
            arrows.
          </li>
          <li>
            The citizens of Nördlingen 2 chamber guns, 2 stone guns, 3,000
            arrows.
          </li>
          <li>Cheb (Eger) one great gun, 6 chamber guns, 6,000 arrows.</li>
          <li>
            Loket (Elbogen) 2 stone guns that shoot [as big] as a head, 3,000
            arrows.
          </li>
          <li>
            Augsburg 7 chamber guns [stone guns] that shoot as a skittle ball,
            6,000 arrows.
          </li>
          <li>Ulm 6 stone guns of the same size, 1,000 arrows.</li>
          <li>Gmünd two guns of the same size, 1,000 arrows.</li>
          <li>
            Erfurt one great gun, 8 stone guns that shoot as a head, 10,000
            arrows.
          </li>
          <li>Schweinfurt one stone gun, 2,000 [1,500] arrows.</li>
          <li>
            Frankfurt 6,000 arrows.
            <br />
            Mainz 6,000 arrows.
            <br />
            Worms 3,000 arrows.
            <br />
            Speyer 4,000 arrows.
            <br />
            Hall [Halle] 4,000 arrows.
            <br />
            Esslingen 4,000 arrows.
            <br />
            Heilbronn 4,000 arrows.
            <br />
            Lindau 4,000 arrows.
            <br />
            Schaffhausen 4,000 arrows.
            <br />
            Basel 6,000 arrows.
            <br />
            Hagenau 4,000 [3,000] arrows.
            <br />
            Wimpfen 3,000 arrows.
            <br />
            Constance 6,000 arrows.
            <br />
            Ravensburg 3,000 [4,000] arrows.
            <br />
            Biberach 3,000 arrows.
            <br />
            Memmingen 3,000 arrows.
            <br />
            Giengen 3,000 [2,000] arrows.
            <br />
            Überlingen 4,000 arrows.
            <br />
            Strasbourg 6,000 arrows.
            <br />
            Colmar 3,000 arrows.
            <br />
            Sélestat (Schlettstadt) 3,000 arrows.
          </li>
          <li>[The bishop of Magdeburg 4 stone guns, 4,000 arrows.</li>
          <li>
            The bishop of Naumburg 2 stone guns, two tarras guns and three
            thousand arrows.
          </li>
          <li>The bishop of Merseburg 2 stone guns, 3,000 arrows.</li>
          <li>
            Every prince and city listed above shall have stones and other
            necessities belonging to their guns carried along, and provide them
            with gunners as need requires. And they shall also give their
            shooters a good supply of arrows over and above the number of arrows
            written for each of them individually above.
          </li>
          <li>
            Every prince and city to whom arrows are thus assigned shall have
            fire arrows carried along with every thousand.
          </li>
          <li>
            Also all other princes and cities that are not assessed here for
            guns and equipment shall bring and have carried along chamber guns
            that shoot as big as a skittle ball, as many as they can possibly
            have, etc.]
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
