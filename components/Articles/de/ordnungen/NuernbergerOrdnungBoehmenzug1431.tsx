import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const NuernbergerOrdnungBoehmenzug1431 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="nuremberg-resolution-on-the-order-for-the-campaign-into-bohemia"
        />
        <h4>
          Nürnberger Beschluss vom 9./10. März 1431 über die Ordnung für den Zug
          nach Böhmen
          {draft && <DraftBadge />}
        </h4>
        <p>Arbeitsübersetzung, noch nicht fachlich geprüft.</p>
        <p>
          Beide Texte gingen aus den Verhandlungen des Nürnberger Reichstags im
          Februar und März 1431 hervor, auf dem ein großer Zug nach Böhmen
          vorbereitet wurde. Die Ordnung, wie man sich im Heer halten soll (Teil
          a), datiert die Edition der <i>Deutschen Reichstagsakten</i> auf den
          9. oder 10.&nbsp;März 1431.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=552"
          />{' '}
          Den Anschlag der Büchsen und Pfeile, die die einzelnen Fürsten und
          Städte stellen sollten (Teil b), druckt sie als eigenes Stück und
          setzt ihn zwischen den 19.&nbsp;Februar und den 13./14.&nbsp;März
          1431.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=534"
          />{' '}
          Nach der Ordnung sollten sieben Heere ausziehen, jedes mit seiner
          eigenen Wagenburg. Im Sommer 1431 zog das deutsche Heer tatsächlich
          vor Taus (Domažlice), und zwar in drei Heeren mit ebenso vielen
          Wagenburgen.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:d18f904a-5b56-4200-a699-2fa149ff1335"
          />{' '}
          Toman meinte, diese Ordnung habe ebenso wie die deutschen Ordnungen
          von 1426 und 1427 und die Ordnung Hodětíns aus tschechischen
          Kriegsordnungen geschöpft, die sich nicht erhalten haben, und nicht
          unmittelbar aus der Ordnung Žižkas.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:498388aa-b7b4-45f9-9284-38220dbccebe"
          />{' '}
          Max Jähns sah in der Bestimmung, dass die Fürsten in ihren Heeren
          Schöffen und einen Stroffer halten sollen (Art. 24), den ersten Ansatz
          zu einer Kriegsgerichtsordnung.
          <Qt
            publication={PUBLICATIONS.JAHNS1889}
            href="https://archive.org/details/geschichtederkr00jhgoog/page/305/mode/1up"
          />
        </p>
        <p>
          Toman übernahm den Text aus Palackýs Edition nach einer Handschrift
          des Prager Kapitelarchivs
          <Qt
            publication={PUBLICATIONS.PALACKY_UB2}
            href="https://archive.org/details/urkundlichebeitr02pala/page/194/mode/1up"
          />{' '}
          und ergänzte in eckigen Klammern Artikel und Lesarten aus den{' '}
          <i>Deutschen Reichstagsakten</i>. In runden Klammern stehen seine
          Erläuterungen, in Teil b) auch Wörter und ein Artikel, die in dieser
          Edition fehlen.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:d42e7297-de19-4587-83aa-febe945fea69"
            note="S. 411 und 413"
          />{' '}
          Die <i>Deutschen Reichstagsakten</i> beruhen auf anderen Abschriften
          und weichen auch an Stellen ab, die Toman nicht gekennzeichnet hat. In
          Artikel 4 nennen sie zusätzlich die Herzöge von Bayern und den Grafen
          von Württemberg, in Artikel 5 die Herzöge von Braunschweig (Toman hat
          eine Herzogin), die Fürsten an der See und den jungen Markgrafen von
          Brandenburg und in Artikel 7 statt des Deutschmeisters den Hochmeister
          von Preußen.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=553"
          />{' '}
          Im Anschlag führen sie zusätzlich die Stadt Windsheim auf und nennen
          bei mehreren Städten andere Pfeilzahlen, etwa 6000 für Ulm und 3000
          für Mainz, Speyer und Heilbronn.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=536"
            note="S. 520–521"
          />{' '}
          Im letzten Artikel lesen sie <Cit>nút angeslagen</Cit>, also die
          Fürsten und Städte, die im Anschlag <i>nicht</i> veranschlagt sind,
          während Toman <Cit>mit angeslagen</Cit> liest. In diesem Artikel folgt
          die Übersetzung der Edition.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=538"
          />
        </p>
        <p>
          Anmerkungen zur Übersetzung: <Cit>Buchse</Cit> gebe ich allgemein mit
          Büchse wieder, <Cit>steinbuchse</Cit> mit Steinbüchse (sie verschießt
          Steinkugeln), <Cit>kammerbuchse</Cit> mit Kammerbüchse und{' '}
          <Cit>tarrasbuchse</Cit> mit Tarrasbüchse. Die Größe der Kugel wird
          durch einen Vergleich angegeben: so groß wie ein Kopf (
          <Cit>als ein haupt</Cit>) oder wie eine Kegelkugel (
          <Cit>bosskaule</Cit>, <Cit>bosskugel</Cit>). Die Erzbischöfe von
          Mainz, Köln, Trier und Magdeburg heißen im Text nur Bischöfe; das
          behalte ich in der Übersetzung bei.
          <br />
          <Cit>Rennbanner</Cit> (Art. 18) ist das Banner der Vorhut, das nach
          Jähns den Marsch eröffnete.
          <Qt
            publication={PUBLICATIONS.JAHNS1889}
            href="https://archive.org/details/geschichtederkr00jhgoog/page/304/mode/1up"
          />{' '}
          <Cit>Stroffer</Cit> (Art. 24) ist der Vollstrecker der Strafen; Jähns
          setzt ihn mit dem Profos gleich.
          <Qt
            publication={PUBLICATIONS.JAHNS1889}
            href="https://archive.org/details/geschichtederkr00jhgoog/page/305/mode/1up"
          />{' '}
          Beim Wort <Cit>burnen</Cit> (Art. 20) schwankt der Herausgeber der{' '}
          <i>Deutschen Reichstagsakten</i> zwischen dem Einbrennen eines
          Brandmals und dem Verbrennen.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=555"
          />{' '}
          <Cit>Für pfil</Cit> (Art. 36) sind nach der Edition Feuerpfeile (
          <i>fúrpfil</i>). Wie viele auf je tausend gewöhnliche Pfeile kommen
          sollen, sagt der Text nicht.
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
            Dies ist die Bestimmung, wie man sich in den Heeren halten soll, wie
            hernach geschrieben steht.
          </i>
        </p>
        <ol>
          <li>
            Alle, die in das Heer kommen, sollen zuvor beichten, den Leib des
            Herrn empfangen und sich gottesfürchtig halten.
          </li>
          <li>
            Der Bischof von Mainz, der Bischof von Köln, der Bischof von Trier
            und der Pfalzgraf bei Rhein sollen ein Heer und eine Wagenburg haben
            und ihre Schlachtordnung bestellen.
          </li>
          <li>
            Das zweite: Der Herzog von Sachsen, der Landgraf von Thüringen und
            der Landgraf von Hessen sollen ebenfalls ein Heer und eine Wagenburg
            haben und ihre Schlachtordnung bestellen.
          </li>
          <li>
            Der Markgraf von Brandenburg, der Bischof von Würzburg, der Bischof
            von Bamberg, die Grafen und die Ritterschaft von Schwaben und was
            aus dem Land Franken kommt, sollen ebenfalls ein Heer und eine
            Wagenburg haben und ihre Schlachtordnung bestellen.
          </li>
          <li>
            Der Bischof von Magdeburg, der Bischof von Hildesheim, der Bischof
            von Halberstadt, die Herzogin von Braunschweig und der Markgraf von
            Brandenburg wegen der Mark sollen ein Heer und eine Wagenburg mit
            ihrer Schlachtordnung bestellen.
          </li>
          <li>
            Die Reichsstädte sollen ein Heer und eine Wagenburg haben, ihre
            Schlachtordnung bestellen und sich mit ihrem Volk zu einem Fürsten
            halten, zu welchem sie wollen, und es so machen, dass es gut
            bestellt ist.
          </li>
          <li>
            Die Fürsten und Herren aus Schlesien und der Lausitz, die Sechs
            Städte und der Deutschmeister von Preußen sollen ein Heer und eine
            Wagenburg haben und eine Schlachtordnung bestellen.
          </li>
          <li>
            Alle Herzöge von Österreich sollen ein Heer und eine Wagenburg haben
            und ihre Schlachtordnung bestellen.
          </li>
          <li>
            Und wenn die Fürsten, Herren und Städte mit ihren Heeren im Land
            Böhmen zusammenkommen, sollen sie ihre Schlachtordnung und Wagenburg
            bestellen und das Beste tun, wie sie sich darüber einig werden.
          </li>
          <li>
            Die Fußknechte oder Gewappneten, die ein Fürst, Herr oder eine Stadt
            bringt, sollen zu gleichen Teilen halb Büchsen und halb Armbrüste
            haben, mit Pfeilen, Blei, Pulver und was dazu gehört.
          </li>
          <li>
            Man soll über je zehn Fußknechte einen Hauptmann setzen, über
            hundert einen Hauptmann und über tausend einen Hauptmann.
          </li>
          <li>
            Wenn jemand, wer er auch sei, so übel handelte, dass er aus der
            Schlacht flöhe oder ohne Willen oder Wissen seiner Hauptleute aus
            dem Land Böhmen ritte, ginge oder führe, der oder die sollen samt
            ihren Frauen und Kindern auf ewig vertrieben sein, und all ihr Gut
            ist verloren.
          </li>
          <li>
            [Auch soll jeder, der Speise, Trank oder Kaufmannsware welcher Art
            auch immer in die Heere führt, auf dem Weg zu den Heeren und von
            ihnen sicher und geschützt sein vor jedermann, niemand ausgenommen,
            ohne Arglist. Und wer dagegen handelt und sie beraubt oder
            behindert, der oder die sollen ihr Leben verwirkt haben, und keine
            Gnade soll ihnen helfen.]
          </li>
          <li>
            Auch sollen die Fürsten und Herren im Heer einen Markt einrichten,
            wie es üblich ist, und wer dagegen handelt, soll sein Leben verwirkt
            haben.
          </li>
          <li>
            [Auch soll jeder Wagen, den man in das Heer bringt, stark und gut
            sein und eine eiserne Kette von 15 Schuh Länge und 2 Dielen
            (Bretter) haben; und jeder Wagenknecht soll einen Dreschflegel, eine
            Grabschaufel und dergleichen Notdurft haben.]
          </li>
          <li>
            Auch soll sich kein Fürst und keine Stadt vor eine Stadt oder Burg
            legen, um sie länger als eine Nacht mit Stürmen zu bedrängen, es sei
            denn mit Wissen und Willen aller Fürsten, Herren und Städte.
          </li>
          <li>
            Auch soll man anordnen, dass, wenn die Herren zusammenkommen, ein
            Heer einen Tag voranzieht und das andere hinterher [und danach alle
            Tage ein Heer voran, das andere hinterher], wie es vernünftig und
            bequem ist und wie man sich darüber einig wird.
          </li>
          <li>
            Auch soll jedes Heer seine Gewappneten bestellen [Rennbanner]. Wer
            ohne Willen des Hauptmanns vom Banner wegreitet oder wegfährt, dem
            oder denen soll man die Pferde oder Wagen nehmen und als Beute
            verteilen, und niemand soll sich für sie verwenden, damit man im
            Heer desto gehorsamer sei und beim Banner bleibe.
          </li>
          <li>
            Niemand soll im Heer spielen; wer das tut, dem soll man eine Hand
            abschlagen.
          </li>
          <li>
            Niemand soll dort eine gemeine Frau haben; wer das tut, den soll man
            brennen (?).
          </li>
          <li>
            Wer ein Messer zieht und jemanden verwundet, dem soll man eine Hand
            abschlagen; ist es aber eine lebensgefährliche Wunde oder tötet er
            jemanden, so soll man nach Recht richten.
          </li>
          <li>
            Auch soll man im Heer nicht posaunen; wenn man aber posaunt, soll
            sich jeder bereit machen und an den Ort kommen, an den er geschickt
            wird.
          </li>
          <li>
            Wer stiehlt oder jemandem das Seine nimmt, sei es im Heer oder vor
            dem Heer, wo es auch geschieht, sei es Harnisch oder Pferd oder was
            auch immer, den soll man hängen, und keine Gnade soll ihm helfen.
          </li>
          <li>
            Auch soll jeder Fürst, Herr und jede Stadt in ihrem Heer eigene
            Schöffen haben und bestellen, die, wenn eine Klage vor sie kommt,
            darüber richten und finden sollen, was Recht ist, und ihren Stroffer
            dabeihaben, damit, wenn es nötig ist, sogleich gerichtet werde.
          </li>
          <li>
            Wenn auch jemand im Heer mit einem anderen in Zwietracht geriete, in
            welcher Sache auch immer, so soll er es dem anderen weder vorwerfen
            noch nachtragen, sondern es gütlich halten und ruhen lassen, bis er
            wieder zu Hause ist.
          </li>
          <li>
            Auch soll man anordnen, dass, wenn im Heer ein Auflauf entsteht,
            sich niemand dazu wappnen und niemand dazulaufen soll außer denen,
            die dazu geschickt werden: Jeder Fürst, Herr und jede Stadt sollen
            dazu zwei schicken und so viele, wie man vereinbart, die dazukommen,
            den Auflauf stillen und Unfug verhüten.
          </li>
          <li>
            Auch soll jedes Heer vier oder fünf wohlgelehrte Priester haben, die
            dem Volk predigen und es lehren, wie man sich halten und für den
            heiligen christlichen Glauben streiten soll, so gut man es nur
            ausrichten kann.
          </li>
          <li>
            Auch soll sich kein Heer ohne Willen und Wissen des obersten
            Hauptmanns unterstehen, in irgendeiner Sache etwas auszurichten,
            einzunehmen oder zu tun.
          </li>
          <li>
            [Auch soll kein Fürst, Herr oder keine Stadt oder sonst jemand
            Städte, Märkte, Dörfer oder anderes annehmen, um sie zu verteidigen
            oder zu vertreten, es sei denn mit Wissen und Willen der Hauptleute.
          </li>
          <li>
            Auch soll jeder dem Hauptmann gehorsam sein. Und wenn dieser
            Gehorsam von jemandem, wer er auch sei, gebrochen würde, soll der
            Hauptmann den oder die strafen, je nachdem, wie der Bruch des
            Gehorsams geschehen ist, und niemand soll sich ihrer in irgendeiner
            Weise annehmen.]
          </li>
        </ol>
        <h5>b)</h5>
        <p>
          <i>
            Dies ist der Anschlag der Büchsen und des Zeugs, das man haben soll.
          </i>
        </p>
        <ol>
          <li>
            Der Herzog von Sachsen soll 14 Steinbüchsen für die Schlacht haben,
            eine große Büchse und dazu 12&nbsp;000 Pfeile.
          </li>
          <li>
            Der Landgraf von Thüringen 8 Büchsen (und eine große Büchse) und
            6000 [10&nbsp;000] Pfeile.
          </li>
          <li>
            Der Markgraf von Brandenburg 7 Büchsen [für die Schlacht], eine
            große Büchse und 6000 Pfeile.
          </li>
          <li>
            Herzog Albrecht und die Kinder Herzog Ernsts von Österreich sollen
            so viele Büchsen haben, große und kleine, wie sie brauchen und haben
            können, und dazu über das Geschoss [ihrer Schützen] hinaus
            12&nbsp;000 Pfeile.
          </li>
          <li>
            Der Bischof von Salzburg 6 Büchsen, von denen jede [so groß] wie ein
            Kopf schießt, und 6000 Pfeile.
          </li>
          <li>
            Der Bischof von Passau 4 Büchsen, von denen jede wie ein Kopf
            schießt, und 6000 Pfeile.
          </li>
          <li>
            Herzog Ludwig (Graf von) Mortain 4 Büchsen in derselben Größe, eine
            große Büchse und 6000 Pfeile.
          </li>
          <li>
            Herzog Ernst und Herzog Wilhelm von Bayern 8 Kammerbüchsen, von
            denen jede wie eine Kegelkugel schießt, und 6000 Pfeile.
          </li>
          <li>
            Herzog Heinrich von Bayern eine große Büchse, 6 kleine
            [Kammerbüchsen] und dazu drei, [die] so groß wie ein Kopf schießen,
            und 6000 Pfeile.
          </li>
          <li>
            Herzog Hans 2 kleine Büchsen [Kammerbüchsen], eine große Büchse und
            3000 [4000] Pfeile.
          </li>
          <li>
            Herzog Otto mit dem pfalzgräflichen Land in Bayern 2 Büchsen, die so
            groß wie ein Kopf schießen, und 3000 Pfeile.
          </li>
          <li>
            (Der Bischof von Mainz 4 Büchsen, von denen jede wie ein Kopf
            schießt, 6 kleine und 6000 Pfeile.)
          </li>
          <li>
            [Der Bischof von Würzburg 4 Büchsen, von denen jede wie ein Kopf
            schießt, 6 Kammerbüchsen und 6000 Pfeile.]
          </li>
          <li>
            Der Bischof von Bamberg 2 Büchsen, die wie ein Kopf schießen, und 4
            Kammerbüchsen [und 4000 Pfeile].
          </li>
          <li>Der Bischof von Augsburg 6000 Pfeile.</li>
          <li>
            Der Bischof von Anstat [Eichstätt] eine Büchse, die wie ein Kopf
            schießt, drei kleine [drei Kammerbüchsen] und 6000 Pfeile.
          </li>
          <li>
            Die Lausitz, die Sechs Städte und alle Fürsten, Herren und Städte in
            Schlesien sollen so viele Büchsen für die Schlacht haben, halb [und
            sonst andere Büchsen] klein und groß, und mit sich führen, wie es in
            ihrer Gegend nötig ist und wie sie es tragen können. Sie sollen sich
            darin selbst nach Billigkeit veranschlagen und belasten, da wir ihr
            Vermögen [hier] nicht kennen.
          </li>
          <li>
            Die Nürnberger sollen ihre [eine] große Büchse, 4 Steinbüchsen, 4
            Kammerbüchsen und 6000 Pfeile haben.
          </li>
          <li>
            [Die Regensburger 2 Büchsen, die wie ein Kopf schießen, 4
            Kammerbüchsen und sechstausend Pfeile.]
          </li>
          <li>
            Die Rothenburger 2 große Büchsen [Steinbüchsen], 2 Kammerbüchsen,
            3000 [4000] Pfeile.
          </li>
          <li>
            Die Dinkelsbühler 1 Steinbüchse, 2 Kammerbüchsen, 2000 [1500]
            Pfeile.
          </li>
          <li>
            Die Weißenburger eine Steinbüchse, 2 Kammerbüchsen, 2000 Pfeile.
          </li>
          <li>Die Nördlinger 2 Kammerbüchsen, 2 Steinbüchsen, 3000 Pfeile.</li>
          <li>Eger eine große Büchse, 6 Kammerbüchsen, 6000 Pfeile.</li>
          <li>
            Elbogen 2 Steinbüchsen, die [so groß] wie ein Kopf schießen, 3000
            Pfeile.
          </li>
          <li>
            Augsburg 7 Kammerbüchsen [Steinbüchsen], die wie eine Kegelkugel
            schießen, 6000 Pfeile.
          </li>
          <li>Ulm 6 Steinbüchsen in derselben Größe, 1000 Pfeile.</li>
          <li>Gmünd zwei Büchsen in derselben Größe, 1000 Pfeile.</li>
          <li>
            Erfurt eine große Büchse, 8 Steinbüchsen, die wie ein Kopf schießen,
            10&nbsp;000 Pfeile.
          </li>
          <li>Schweinfurt eine Steinbüchse, 2000 [1500] Pfeile.</li>
          <li>
            Frankfurt 6000 Pfeile.
            <br />
            Mainz 6000 Pfeile.
            <br />
            Worms 3000 Pfeile.
            <br />
            Speyer 4000 Pfeile.
            <br />
            Hall [Halle] 4000 Pfeile.
            <br />
            Esslingen 4000 Pfeile.
            <br />
            Heilbronn 4000 Pfeile.
            <br />
            Lindau 4000 Pfeile.
            <br />
            Schaffhausen 4000 Pfeile.
            <br />
            Basel 6000 Pfeile.
            <br />
            Hagenau 4000 [3000] Pfeile.
            <br />
            Wimpfen 3000 Pfeile.
            <br />
            Konstanz 6000 Pfeile.
            <br />
            Ravensburg 3000 [4000] Pfeile.
            <br />
            Biberach 3000 Pfeile.
            <br />
            Memmingen 3000 Pfeile.
            <br />
            Giengen 3000 [2000] Pfeile.
            <br />
            Überlingen 4000 Pfeile.
            <br />
            Straßburg 6000 Pfeile.
            <br />
            Colmar 3000 Pfeile.
            <br />
            Schlettstadt 3000 Pfeile.
          </li>
          <li>[Der Bischof von Magdeburg 4 Steinbüchsen, 4000 Pfeile.</li>
          <li>
            Der Bischof von Naumburg 2 Steinbüchsen, zwei Tarrasbüchsen und
            dreitausend Pfeile.
          </li>
          <li>Der Bischof von Merseburg 2 Steinbüchsen, 3000 Pfeile.</li>
          <li>
            Jeder Fürst und jede Stadt, die oben verzeichnet stehen, sollen zu
            ihren Büchsen Steine und andere Notdurft, die dazu gehört, mitführen
            lassen und sie auch mit Büchsenmeistern versehen, wie es die
            Notdurft erfordert, und sollen ihren Schützen außerdem genug Pfeile
            geben über die Zahl der Pfeile hinaus, die jedem einzeln oben
            zugeschrieben ist.
          </li>
          <li>
            Jeder Fürst und jede Stadt, denen so Pfeile zugeschrieben sind,
            sollen zu jedem Tausend Feuerpfeile mitführen lassen.
          </li>
          <li>
            Auch sollen alle anderen Fürsten und Städte, die hier für Büchsen
            und Zeug nicht veranschlagt sind, Kammerbüchsen, die so groß wie
            eine Kegelkugel schießen, mitbringen und mitführen lassen, so viele
            sie nur haben können usw.]
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
