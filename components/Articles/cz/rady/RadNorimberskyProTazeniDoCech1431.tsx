import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const RadNorimberskyProTazeniDoCech1431 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="usneseni-norimberske-o-radu-pro-tazeni-do-cech"
        />
        <h4>
          Usnesení norimberské ze dne 9.–10. března 1431 o řádu pro tažení do
          Čech
          {draft && <DraftBadge />}
        </h4>
        <p>Pracovní překlad, zatím bez odborné korektury.</p>
        <p>
          Oba texty vzešly z jednání říšského sněmu v Norimberku v únoru a
          březnu 1431, na kterém se připravovala velká výprava do Čech. Řád o
          tom, jak se má vojsko chovat (část a), datuje edice{' '}
          <i>Deutsche Reichstagsakten</i> k 9. nebo 10.&nbsp;březnu 1431.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=552"
          />{' '}
          Rozpis pušek a šípů, které měla dodat jednotlivá knížata a města (část
          b), otiskuje jako samostatný dokument a klade ho mezi 19.&nbsp;únor a
          13.–14.&nbsp;březen 1431.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=534"
          />{' '}
          Podle řádu se mělo vypravit sedm vojsk, každé s vlastní vozovou
          hradbou. V létě 1431 přitáhlo německé vojsko k Domažlicím ve třech
          vojscích s tolika vozovými hradbami.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:d18f904a-5b56-4200-a699-2fa149ff1335"
          />{' '}
          Toman soudil, že tento řád stejně jako německé řády z let 1426 a 1427
          i Hodětínův řád čerpal z českých vojenských řádů, které se
          nedochovaly, a ne přímo ze Žižkova řádu.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:498388aa-b7b4-45f9-9284-38220dbccebe"
          />{' '}
          Max Jähns viděl v ustanovení, že knížata mají mít u svých vojsk
          přísedící a vykonavatele trestů (čl. 24), první náběh k vojenskému
          soudnímu řádu.
          <Qt
            publication={PUBLICATIONS.JAHNS1889}
            href="https://archive.org/details/geschichtederkr00jhgoog/page/305/mode/1up"
          />
        </p>
        <p>
          Toman převzal text z Palackého edice podle rukopisu pražského
          kapitulního archivu
          <Qt
            publication={PUBLICATIONS.PALACKY_UB2}
            href="https://archive.org/details/urkundlichebeitr02pala/page/194/mode/1up"
          />{' '}
          a v hranatých závorkách doplnil články a čtení z{' '}
          <i>Deutsche Reichstagsakten</i>. V kulatých závorkách jsou jeho
          vysvětlivky, v části b) také slova a článek, které v této edici
          chybějí.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:d42e7297-de19-4587-83aa-febe945fea69"
            note="Str. 411 a 413"
          />{' '}
          <i>Deutsche Reichstagsakten</i> vycházejí z jiných opisů a liší se i
          na místech, která Toman nevyznačil. V článku 4 jmenují navíc bavorské
          vévody a hraběte z Württemberka, v článku 5 vévody brunšvické (Toman
          má vévodkyni), knížata při moři a mladého markraběte braniborského a v
          článku 7 místo německého mistra velmistra z Prus.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=553"
          />{' '}
          V rozpisu uvádějí navíc město Windsheim a u několika měst jiné počty
          šípů, například u Ulmu 6000, u Mohuče, Špýru a Heilbronnu 3000.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=536"
            note="Str. 520–521"
          />{' '}
          V posledním článku mají <Cit>nút angeslagen</Cit>, tedy knížata a
          města, která v rozpisu uvedena <i>nejsou</i>, kdežto Toman čte{' '}
          <Cit>mit angeslagen</Cit>. Překlad se v tomto článku drží edice.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=538"
          />
        </p>
        <p>
          Poznámky k překladu: <Cit>Buchse</Cit> překládám obecně jako pušku,{' '}
          <Cit>steinbuchse</Cit> jako kamennou pušku (střílí kamenné koule),{' '}
          <Cit>kammerbuchse</Cit> jako komorovou pušku a <Cit>tarrasbuchse</Cit>{' '}
          jako tarasnici. Velikost koule text udává přirovnáním: jako hlava (
          <Cit>als ein haupt</Cit>), nebo jako koule na kuželky (
          <Cit>bosskaule</Cit>, <Cit>bosskugel</Cit>). Mohučský, kolínský,
          trevírský a magdeburský arcibiskup jsou v textu označeni jen jako
          biskupové a v překladu to ponechávám.
          <br />
          <Cit>Rennbanner</Cit> (čl. 18) je korouhev předvoje, která podle
          Jähnse zahajovala pochod.
          <Qt
            publication={PUBLICATIONS.JAHNS1889}
            href="https://archive.org/details/geschichtederkr00jhgoog/page/304/mode/1up"
          />{' '}
          <Cit>Stroffer</Cit> (čl. 24) je vykonavatel trestů, Jähns ho
          ztotožňuje s profousem.
          <Qt
            publication={PUBLICATIONS.JAHNS1889}
            href="https://archive.org/details/geschichtederkr00jhgoog/page/305/mode/1up"
          />{' '}
          U slova <Cit>burnen</Cit> (čl. 20) vydavatel{' '}
          <i>Deutsche Reichstagsakten</i> váhá, zda jde o vypálení cejchu, nebo
          o upálení.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=555"
          />{' '}
          <Cit>Für pfil</Cit> (čl. 36) jsou podle edice zápalné šípy (
          <i>fúrpfil</i>). Kolik jich má připadnout na tisíc obyčejných šípů,
          text neuvádí.
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
            Toto je ustanovení, jak se má ve vojscích chovat, jak je dále psáno.
          </i>
        </p>
        <ol>
          <li>
            Všichni, kdo přijdou do vojska, se mají předem vyzpovídat, přijmout
            tělo Boží a chovat se bohabojně.
          </li>
          <li>
            Biskup mohučský, biskup kolínský, biskup trevírský a falckrabě
            rýnský mají mít jedno vojsko a jednu vozovou hradbu a zřídit svůj
            šik.
          </li>
          <li>
            Druhé: vévoda saský, lantkrabě durynský a lantkrabě hesenský mají
            také mít jedno vojsko a jednu vozovou hradbu a zřídit svůj šik.
          </li>
          <li>
            Markrabě braniborský, biskup würzburský, biskup bamberský, hrabata a
            rytířstvo ze Švábska a co přijde z Franků, ti mají také mít jedno
            vojsko a jednu vozovou hradbu a zřídit svůj šik.
          </li>
          <li>
            Biskup magdeburský, biskup hildesheimský, biskup halberstadtský,
            vévodkyně brunšvická a markrabě braniborský za Marku, ti mají zřídit
            jedno vojsko a jednu vozovou hradbu se svým šikem.
          </li>
          <li>
            Říšská města mají mít jedno vojsko a jednu vozovou hradbu, zřídit
            svůj šik a se svým lidem se připojit ke knížeti, ke kterému budou
            chtít, a učinit to tak, aby to bylo dobře zařízeno.
          </li>
          <li>
            Knížata a páni ze Slezska a z Lužice, šest měst a německý mistr z
            Prus mají mít jedno vojsko a jednu vozovou hradbu a zřídit šik.
          </li>
          <li>
            Všichni vévodové rakouští mají mít jedno vojsko a vozovou hradbu a
            zřídit svůj šik.
          </li>
          <li>
            A když se knížata, páni a města se svými vojsky sejdou v zemi České,
            mají zřídit svůj šik a vozovou hradbu a učinit to nejlepší, jak se
            na tom shodnou.
          </li>
          <li>
            Pěší nebo ozbrojence, které přivede kterýkoli kníže, pán nebo město,
            ti mají mít stejným dílem napůl pušky a napůl kuše, se šípy, olovem,
            prachem a vším, co k tomu patří.
          </li>
          <li>
            Nad deset pěších se má ustanovit jeden hejtman, nad sto jeden
            hejtman a nad tisíc jeden hejtman.
          </li>
          <li>
            Kdyby se kdokoli dopustil takového zla, že by z boje utekl nebo ze
            země České odjel, odešel či odvezl se bez vůle nebo vědomí svých
            hejtmanů, ten nebo ti mají být i se svými ženami a dětmi navěky
            vyhnáni a všechen jejich majetek propadá.
          </li>
          <li>
            [Také každý, kdo do vojsk veze potraviny, pití nebo zboží, ať je to
            cokoli, má být cestou do vojsk i z nich bezpečný a chráněný přede
            všemi, nikoho nevyjímaje, bez úskoku. A kdo by proti tomu jednal a
            oloupil ho nebo mu překážel, ten nebo ti mají přijít o hrdlo a žádná
            milost jim nemá pomoci.]
          </li>
          <li>
            Také mají knížata a páni zřídit ve vojsku trh, jak je obvyklé, a kdo
            by proti tomu jednal, má přijít o hrdlo.
          </li>
          <li>
            [Také každý vůz, který se přiveze do vojska, má být silný a dobrý a
            má mít železný řetěz 15 stop dlouhý a 2 fošny (prkna). A každý
            vozový pacholek má mít cep, rýč a podobné potřeby.]
          </li>
          <li>
            Také se žádný kníže ani město nemá položit před žádné město ani hrad
            a dobývat ho útokem déle než jednu noc, leda s vědomím a vůlí všech
            knížat, pánů a měst.
          </li>
          <li>
            Také se má zařídit, aby až se páni sejdou, táhlo jedno vojsko jeden
            den vpředu a druhé za ním [a potom každý den jedno vojsko vpředu a
            druhé za ním], jak to bude rozumné a pohodlné a jak se na tom
            shodnou.
          </li>
          <li>
            Také má každé vojsko zřídit své ozbrojence [korouhev předvoje]. Kdo
            by od korouhve odjel nebo odvezl se bez hejtmanovy vůle, tomu nebo
            těm se mají vzít koně nebo vozy a rozdělit jako kořist a nikdo se za
            ně nemá přimlouvat, aby byli ve vojsku tím poslušnější a zůstávali u
            korouhve.
          </li>
          <li>
            Nikdo nemá ve vojsku hrát. Kdo by to učinil, tomu se má useknout
            ruka.
          </li>
          <li>
            Nikdo nemá ve vojsku mít nevěstku. Kdo to učiní, toho mají upálit
            (?).
          </li>
          <li>
            Kdo tasí nůž a někoho zraní, tomu se má useknout ruka. Je-li to však
            nebezpečná rána nebo někoho zabije, má se to soudit podle práva.
          </li>
          <li>
            Také se ve vojsku nemá troubit. Až se však zatroubí, má se každý
            připravit a přijít na místo, kam bude poslán.
          </li>
          <li>
            Kdo krade nebo někomu bere, co je jeho, ať ve vojsku, nebo před
            vojskem, kdekoli se to stane, ať je to zbroj, kůň nebo cokoli
            jiného, toho mají oběsit a žádná milost mu nemá pomoci.
          </li>
          <li>
            Také má každý kníže, pán a město mít a ustanovit ve svém vojsku
            zvláštní přísedící, kteří by, kdyby před ně přišla žaloba, o ní
            soudili a nalezli, co je právo, a mít u sebe svého vykonavatele
            trestů, aby, bude-li třeba, hned rozsoudili.
          </li>
          <li>
            Kdyby se také někdo ve vojsku s druhým znesvářil, v jakékoli věci,
            nemá mu to vyčítat ani mu to nijak oplácet, nýbrž má to snášet po
            dobrém a nechat být, dokud se nevrátí domů.
          </li>
          <li>
            Také se má zařídit, že kdyby ve vojsku vzniklo srocení, nikdo se k
            tomu nemá ozbrojit a nikdo tam nemá běžet kromě těch, kdo tam budou
            vysláni. Každý kníže, pán a město mají k tomu vyslat dva, a tolik,
            na kolika se shodnou, aby tam přišli, srocení utišili a výtržnostem
            zabránili.
          </li>
          <li>
            Také má mít každé vojsko čtyři nebo pět dobře učených kněží, kteří
            budou lidu kázat a učit ho, jak se má chovat a bojovat za svatou
            křesťanskou víru, jak nejlépe to dokážou.
          </li>
          <li>
            Také se žádné vojsko nemá bez vůle a vědomí nejvyššího hejtmana
            odvažovat v žádné věci něco provádět, zabírat nebo činit.
          </li>
          <li>
            [Také se žádný kníže, pán nebo město ani nikdo jiný nemá ujímat
            žádných měst, městeček, vsí ani čehokoli jiného, aby je zastával
            nebo hájil, leda s vědomím a vůlí hejtmanů.
          </li>
          <li>
            Také má být každý poslušen hejtmana. A kdyby kdokoli tuto poslušnost
            porušil, toho nebo ty má hejtman potrestat podle toho, jak k
            porušení poslušnosti došlo, a nikdo se jich nemá nijak zastávat.]
          </li>
        </ol>
        <h5>b)</h5>
        <p>
          <i>Toto je rozpis pušek a výstroje, které se mají mít.</i>
        </p>
        <ol>
          <li>
            Vévoda saský má mít 14 kamenných pušek do boje, jednu velkou pušku a
            k tomu 12&nbsp;000 šípů.
          </li>
          <li>
            Lantkrabě durynský 8 pušek (a jednu velkou pušku) a 6000
            [10&nbsp;000] šípů.
          </li>
          <li>
            Markrabě braniborský 7 pušek [do boje], jednu velkou pušku a 6000
            šípů.
          </li>
          <li>
            Vévoda Albrecht a děti vévody Arnošta z Rakous mají mít tolik pušek,
            velkých i malých, kolik jich potřebují a mohou mít, a k tomu navíc
            ke střelivu [svých střelců] 12&nbsp;000 šípů.
          </li>
          <li>
            Biskup salcburský 6 pušek, z nichž každá střílí [kouli velkou] jako
            hlava, a 6000 šípů.
          </li>
          <li>
            Biskup pasovský 4 pušky, z nichž každá střílí jako hlava, a 6000
            šípů.
          </li>
          <li>
            Vévoda Ludvík (hrabě z) Mortain 4 pušky téže velikosti, jednu velkou
            pušku a 6000 šípů.
          </li>
          <li>
            Vévoda Arnošt a vévoda Vilém Bavorští 8 komorových pušek, z nichž
            každá střílí jako koule na kuželky, a 6000 šípů.
          </li>
          <li>
            Vévoda Jindřich Bavorský jednu velkou pušku, 6 malých [komorových
            pušek] a k tomu tři, [které] střílejí jako hlava, a 6000 šípů.
          </li>
          <li>
            Vévoda Jan 2 malé pušky [komorové pušky], jednu velkou pušku a 3000
            [4000] šípů.
          </li>
          <li>
            Vévoda Ota s falckrabětovou zemí v Bavorsku 2 pušky, které střílejí
            velké jako hlava, a 3000 šípů.
          </li>
          <li>
            (Biskup mohučský 4 pušky, z nichž každá střílí jako hlava, 6 malých
            a 6000 šípů.)
          </li>
          <li>
            [Biskup würzburský 4 pušky, z nichž každá střílí jako hlava, 6
            komorových pušek a 6000 šípů.]
          </li>
          <li>
            Biskup bamberský 2 pušky, které střílejí jako hlava, a 4 komorové
            pušky [a 4000 šípů].
          </li>
          <li>Biskup augšpurský 6000 šípů.</li>
          <li>
            Biskup z Anstatu [Eichstättu] jednu pušku, která střílí jako hlava,
            tři malé [tři komorové pušky] a 6000 šípů.
          </li>
          <li>
            Lužice, šest měst a všechna knížata, páni a města ve Slezsku mají
            mít tolik pušek do boje, napůl [a jiných pušek] malých i velkých, a
            vézt je s sebou, kolik je v jejich kraji potřeba a kolik unesou.
            Mají se v tom sami rozepsat a zatížit podle slušnosti, neboť jejich
            možnosti [zde] neznáme.
          </li>
          <li>
            Norimberští mají mít svou [jednu] velkou pušku, 4 kamenné pušky, 4
            komorové pušky a 6000 šípů.
          </li>
          <li>
            [Řezenští 2 pušky, které střílejí jako hlava, 4 komorové pušky a
            šest tisíc šípů.]
          </li>
          <li>
            Rothenburští 2 velké pušky [kamenné pušky], 2 komorové pušky, 3000
            [4000] šípů.
          </li>
          <li>
            Dinkelsbühlští 1 kamennou pušku, 2 komorové pušky, 2000 [1500] šípů.
          </li>
          <li>
            Weißenburští jednu kamennou pušku, 2 komorové pušky, 2000 šípů.
          </li>
          <li>Nördlingenští 2 komorové pušky, 2 kamenné pušky, 3000 šípů.</li>
          <li>Cheb jednu velkou pušku, 6 komorových pušek, 6000 šípů.</li>
          <li>
            Loket 2 kamenné pušky, které střílejí [velké] jako hlava, 3000 šípů.
          </li>
          <li>
            Augšpurk 7 komorových pušek [kamenných pušek], které střílejí jako
            koule na kuželky, 6000 šípů.
          </li>
          <li>Ulm 6 kamenných pušek téže velikosti, 1000 šípů.</li>
          <li>Gmünd dvě pušky téže velikosti, 1000 šípů.</li>
          <li>
            Erfurt jednu velkou pušku, 8 kamenných pušek, které střílejí jako
            hlava, 10&nbsp;000 šípů.
          </li>
          <li>Schweinfurt jednu kamennou pušku, 2000 [1500] šípů.</li>
          <li>
            Frankfurt 6000 šípů.
            <br />
            Mohuč 6000 šípů.
            <br />
            Worms 3000 šípů.
            <br />
            Špýr 4000 šípů.
            <br />
            Hall [Halle] 4000 šípů.
            <br />
            Esslingen 4000 šípů.
            <br />
            Heilbronn 4000 šípů.
            <br />
            Lindava 4000 šípů.
            <br />
            Schaffhausen 4000 šípů.
            <br />
            Basilej 6000 šípů.
            <br />
            Hagenau 4000 [3000] šípů.
            <br />
            Wimpfen 3000 šípů.
            <br />
            Kostnice 6000 šípů.
            <br />
            Ravensburg 3000 [4000] šípů.
            <br />
            Biberach 3000 šípů.
            <br />
            Memmingen 3000 šípů.
            <br />
            Giengen 3000 [2000] šípů.
            <br />
            Überlingen 4000 šípů.
            <br />
            Štrasburk 6000 šípů.
            <br />
            Colmar 3000 šípů.
            <br />
            Schlettstadt 3000 šípů.
          </li>
          <li>[Biskup magdeburský 4 kamenné pušky, 4000 šípů.</li>
          <li>
            Biskup naumburský 2 kamenné pušky, dvě tarasnice a tři tisíce šípů.
          </li>
          <li>Biskup merseburský 2 kamenné pušky, 3000 šípů.</li>
          <li>
            Každý kníže a město, kteří jsou výše zapsáni, mají ke svým puškám
            vézt kamení a jiné potřeby, které k nim patří, a opatřit je také
            puškaři, jak bude třeba. A mají také svým střelcům dát dostatek šípů
            navíc k počtu šípů, který je každému zvlášť výše zapsán.
          </li>
          <li>
            Každý kníže a město, kterým je takto zapsáno mít šípy, mají ke
            každému tisíci vézt také zápalné šípy.
          </li>
          <li>
            Také mají všechna ostatní knížata a města, která zde nejsou
            rozepsána na pušky a výstroj, přivézt s sebou komorové pušky, které
            střílejí velké jako koule na kuželky, kolik jich nejvíce mohou mít
            atd.]
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
