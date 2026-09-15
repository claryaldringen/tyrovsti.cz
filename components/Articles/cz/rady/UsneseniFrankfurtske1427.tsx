import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const UsneseniFrankfurtske1427 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="usneseni-frankfurtske-1427" />
        <h4>
          Usnesení říšských stavů ve Frankfurtu z&nbsp;doby krátce před
          4.&nbsp;květnem 1427
          {draft && <DraftBadge />}
        </h4>
        <p>Pracovní překlad, zatím bez odborné korektury.</p>
        <p>
          Usnesení přijali říšští stavové na sněmu ve Frankfurtu krátce před
          4.&nbsp;květnem 1427. Připravovali jím výpravu, která měla v&nbsp;létě
          téhož roku vtrhnout do Čech ze čtyř stran – od Norimberka, ze Saska,
          ze Slezska a z&nbsp;Rakous.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:85a1bfc6-5719-4321-af1f-69d710256207"
          />
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=50"
          />{' '}
          Toman ho řadí mezi tři vojenské řády, které za husitských válek vzešly
          z&nbsp;porad na říšských sněmech, a označuje ho zároveň za rozvrh
          střelby. Na rozdíl od návrhů kurfiřtů z&nbsp;roku 1426, které nazývá
          chudým pokusem, podle něj tvoří úplný celek.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:8b817ac0-57b2-408e-83e4-6a2585b6ccc2"
            note="Str. 17–18"
          />{' '}
          Říšské vojsko pak v&nbsp;srpnu 1427 přitáhlo ke Stříbru a Tachovu a
          u&nbsp;Tachova se větším dílem dalo na útěk, aniž se s&nbsp;nepřítelem
          utkalo.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:85a1bfc6-5719-4321-af1f-69d710256207"
            note="Str. 186–187"
          />
        </p>
        <p>
          Palacký text vydal podle opisu Ondřeje Řezenského.
          <Qt
            publication={PUBLICATIONS.PALACKY_UB1}
            href="https://archive.org/details/urkundlichebeitr01pala/page/503/mode/1up"
          />{' '}
          <i>Deutsche Reichstagsakten</i> ho otiskují podle štrasburského opisu
          a uvádějí odchylky devíti dalších opisů a Windeckova spisu o císaři
          Zikmundovi.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=50"
          />{' '}
          Toman sice píše, že řád otiskuje podle DRA,
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:b20c2763-1196-4237-b865-63d45ed3cb7c"
          />{' '}
          jeho znění ale odpovídá Palackého vydání s&nbsp;upraveným pravopisem.
          Doplňky a odchylná čtení z&nbsp;DRA uvádí v&nbsp;hranatých závorkách.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:07788646-e407-45ca-b68f-57db1da6fdee"
          />{' '}
          Opisy se v&nbsp;několika bodech podstatně liší. Jako místo shromáždění
          uvádí hlavní text DRA Norimberk, opis Ondřeje Řezenského a většina
          ostatních Cheb.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=51"
          />{' '}
          Z&nbsp;článku 2 o hejtmanech má Ondřejův opis na jeho místě jen první
          slova a celé znění připojuje až na konec. Podle magdeburského opisu
          byl tento článek do řádu vložen dodatečně.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=50"
            note="Str. 34–35"
          />{' '}
          Články 26 a 41 hlavní text DRA nemá, naopak článek o Pasově, který
          v&nbsp;Ondřejově opisu chybí, nenajdeme ani u&nbsp;Tomana.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=54"
            note="Str. 38 a 40"
          />{' '}
          Liší se i některé počty zbraní. Mohučský arcibiskup má například podle
          hlavního textu DRA přivézt čtyři komorové pušky a 22 ručnic místo
          šesti a třiceti.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=55"
          />
        </p>
        <p>
          Poznámky k&nbsp;překladu: Hranaté závorky v&nbsp;překladu odpovídají
          Tomanovým závorkám v&nbsp;originálu. Čtení <Cit>Risenberg</Cit>{' '}
          v&nbsp;článku 1, které Toman uvádí v&nbsp;závorce, jsem v&nbsp;DRA
          nenašel; hlavní text tam má Norimberk a jeden z&nbsp;opisů přidává
          Freiberg v&nbsp;Míšni.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=51"
          />
          <br />
          V&nbsp;článku 16 má Toman <Cit>aust ziehen</Cit>, DRA na tomto místě{' '}
          <Cit>sunst ziehen</Cit>. Překládám podle DRA jako{' '}
          <Cit>jinak táhnout</Cit>.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=53"
          />
          <br />
          <Cit>Toressen [tarassen]</Cit> v&nbsp;článku 17 překládám jako{' '}
          <Cit>tarasy</Cit>, tedy přenosné zátarasy. Protože slovo stojí mezi
          puškami, šípy a žebříky, může jít i o tarasnice.
          <br />
          <Cit>Fromm</Cit> v&nbsp;článku 20 znamená podle poznámky DRA{' '}
          <Cit>pravověrný</Cit>.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=53"
          />
          <br />
          Slovo <Cit>herre</Cit> v&nbsp;článku 21 překládám podle souvislosti a
          podle čtení DRA (<Cit>here</Cit>) jako <Cit>vojska</Cit>.
          <br />
          <Cit>Renner</Cit> v&nbsp;článku 22 je podle poznámky DRA jízdní nebo
          stájový pacholek, případně jízdní posel.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=54"
          />
          <br />
          Význam slova <Cit>verdingen</Cit> v&nbsp;článku 30 je nejistý;
          překládám ho jako <Cit>brát ve smluvní ochranu</Cit>.
          <br />
          <Cit>Niederlande</Cit> v&nbsp;článku 40 je nejspíš Dolní Bavorsko,
          jisté to ale není.
          <br />
          Zbraně: <Cit>tarasbuchsen</Cit> překládám jako tarasnice,{' '}
          <Cit>kammerbuchsen</Cit> jako komorové pušky, <Cit>hantbuchsen</Cit>{' '}
          jako ručnice a <Cit>steinbüchsen</Cit> jako kamenné pušky, tedy pušky
          střílející kamenné koule.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <ol>
          <li>
            Zum ersten, dass unser herrn, die kurfürsten, alle fürsten, grafen,
            herrn, freien, ritter, knecht, städte, und all ander, die gott zu
            lobe und zu ehren, dem heiligen christenglauben zu stärkunge, die
            heilige römischen kirchen zu behalten und allen christenmenschen zu
            trost folgen, ziehen und thuen wollen wider die ketzer zu Beheim und
            die es mit ihn halten und den zulegung thuen, und denselben ketzern
            zu widerstehen etc. sollen sein und kommen gein Eger [Risenberg]
            oder an das nehst dorumb auf den sonntag sant Peters und sant Pauls
            tag, besunder die den daruf geboret zu ziehen.
          </li>
          <li>
            Item die haubtleute des zogs schullen sein: [würden die drei
            erzbischof von Meincz, Coln und Trier iglicher selber kommen, so
            soll der erzbischof von Coln ein hauptmann sein; oder ob der nit
            käme, der erzbischof von Triere; würde auch der keiner kömmen, so
            soll das sein der erzbischof zu Meincz und bleiben, oder der all dar
            käme. Und welcher unter den ein hauptmann sein würdet, soll von den
            andern werntlichen fursten einen oder mehr, wie note sin würdet, an
            sich nehmen, und mit den noch eins hauptmanns überkommen, und
            welichs die also überkommen würden in einem hauptmann, der soll das
            mit sulchem vorgenannten hauptmann sein und bleiben und darwider
            nicht sprechen.]
          </li>
          <li>
            Item der fürsten, der man zu hauptleuten ist überkommen, sollen und
            mögen zu ihn nehmen sechs oder mehr, achte redelich, ob sie des ein
            notdurft bedeuchte etc. Aus andern fürsten, herren, die dar kämen,
            und die sollen setzen, machen, ordiniren und schicken, wie man
            ziehen und folgen sollde, auch zu bestellen und heissen zu thunde,
            als des not zu thunde ist, und alle die, die also folgen, ziehen und
            kommen, niemand ausgenommen, sollen denselben fürsten oder ihrer
            gewalt ganz gehorsam sein und gewarten, ahne alle widerrede.
          </li>
          <li>
            Item menglich soll ziehen uf sein selbs eigen köste und zehrunge,
            andern leuten ahne schaden. Doch wo man nit in städten und zu felde
            ist, mag man nehmen ein zemlich notdurft von heu und stroh
            ungefärlich; ob man das auch nicht gehaben möchte, es wäre futter
            oder speise, oder ze kauf bekomen, so mag man das wohl nehmen, wo
            man das mag gehaben, und man soll das redlich bezahlen nach der
            hauptleute, oder wen die dorzu schicken würden, erkentnisse.
          </li>
          <li>
            Ein iglicher fürste, graf, herre und stadt sollen bestellen feilen
            kauf und sunderlich die, die an Beheimer lande sitzen und haben,
            dass notdurft zugefuhrt werde von allem dem, des not ist, und
            dieselben zufuhrer sullent für menglich sicher sein und
            unbeschädiget beleiben.
          </li>
          <li>
            Item wär dorüber jemand das sein nehm wider seinen willen oder
            raubte, dem soll man ohn gnade sein haubte abhauen, und wer da
            stiehlet, dem soll auch sein recht geschehen, und das soll niemand
            wehren, noch sich darwider setzen, thuen oder schicken, gethan
            werden.
          </li>
          <li>
            Item es soll auch keine frau, [spieler], noch kein ander pueberei,
            wie die genannt werden, mit ziehen oder nachfolgen.
          </li>
          <li>
            Item ein iglicher soll zum minsten all wochen einmal beichten, und
            ein iglich fürste, hauptmann etc. soll darzu die seinen halten, und
            messe hören, welichs tags sie die mögen gehaben, und dass do bei
            gotte demütiglich, inniglichen und mit ganzem fleiss gedienet werde.
          </li>
          <li>
            Item wer auch frevelich mit ufsatz swüre oder bos flüchte thäte gen
            einem andern menschen oder schulte, den sall man offentlichen
            sliessen in einem pranger, bis auf der hauptleute genade, oder soll
            den zu stund ausjagen blöss mit geiseln oder gärten.
          </li>
          <li>
            Item wer auch sein swert, messer, beile oder ander wehre oder waffen
            über einen andern zückte oder ruckte frevelich, der soll ane gnade
            ein hand verloren han. Wäre aber, dass er darzu jemand wundete, dem
            soll das haupt abgehauen werden.
          </li>
          <li>
            Item ob auch aufläufe, zwietracht oder stösse wörden under fürsten,
            herren, städten oder andern, so mögent obgenannt hauptmann zu ihn
            nehmen ander fürsten, oder wen sie sust wollten, die das nicht
            angieng, oder solich hauptleut mugent an ihr selbs statt, ob sie des
            nicht gewarten möchten, andere zu denselben schicken oder geben, und
            söllen solich sach richten, und wie es dieselben also geschedet und
            gerichtet hätten, dobei soll es beleiben, stete und unverbruchlichen
            gehalten werden.
          </li>
          <li>
            Item niemand soll im lande zu Beheim mit volk nach futter oder icht
            reiten, gehn oder fahren, es sei dann dabei die banier, die von den
            haubtleuten davon geschickt ist oder der haubtleute geheisse etc.,
            und niemand soll in demselben lande brennen oder anstossen, es werde
            es dann von den haubtleuten geheissen, oder es sei dann auch dobei
            die banier, die darzu ist gescheiden.
          </li>
          <li>
            Item auch soll niemand keinen menschen morden oder abthun ohn
            redliche sach, es sei dann auf den rechten ketzern und die es mit
            ihn halten und ihn zulegunge thun, bei der obgenannten pöne des
            hals.
          </li>
          <li>
            Item wenn die hauptleute oder ihr mächtige gewalt geleit geben, das
            soll von meniglich gehalten werden bei der obgenannten pöne.
          </li>
          <li>
            Item wem die hauptleute oder ihr mächtige gewalt wachen, warten oder
            reiten gebieten, der soll des gehorsam sein ahn alle widerrede.
          </li>
          <li>
            Item es soll auch niemand aufbrechen, fur- oder nachziehen, es sei
            dann dabei die banier, die darzu geschickt, und wenn die hauptleut
            heissen fur- oder nachziehen oder aust ziehen zu storme, zum streit,
            zum laufen oder zum stehen, der soll des alles gehorsam sein.
          </li>
          <li>
            Item iglicher kurfürste und städte sollen bestellen mitzukommen
            zimmerleute, schutzen, buchsen, pulver, stein, pfeil, toressen
            [tarassen], leitern und ander gut wehre.
          </li>
          <li>
            Item iglicher kürfürste soll zu fuss oder zu wagen schicken und
            bringen zwei hundert schützen aus seinen städten und lande,
            ausgescheiden die erzbischöfe von Trier und von Colne, der soll
            iglicher hundert schützen bringen.
          </li>
          <li>
            Item dass die kürfürsten an einem ende, der herzog von Sachsen am
            andern, die us der Slesien am dritten, der herzog von Österreich am
            vierden enden einziehen, und dass das alles zugehe auf einen tag.
          </li>
          <li>
            Item die behemischen herren und die andern, die noch fromm sein, zu
            besenden, ob die auch wollten ein feld machen, und mit zu überkommen
            nach dem allerpesten.
          </li>
          <li>
            Item alle andern herre sollen auch warten, ob ihn die hauptleute,
            der man überkommen ist, botschaft thäten, bei sie zu kommen und ihn
            gehorsam sein etc. Worden auch dieselben herre also gedrungen, oder
            dass sie der hauptleut mit ihrem herre notdurftig worden, so sollen
            sie ihn botschaft thun, und die hauptleut schullen darauf bei sie
            kommen und ihn helfen und raten mit ganzer kraft.
          </li>
          <li>
            Item dass iglicher herr mit den seinen bestelle, dass keiner, er sei
            ritter oder knecht, mehre hab, denn einen knaben oder renner, sunder
            als wehrhaftige und gewappent leute, ausgeschieden die fürsten und
            grafen.
          </li>
          <li>
            Item zu versorgen, dass dieser vertrag einmale, drei oder vier, oder
            wie oft sein not würdet, jedermann verkundet werden, dass man dem
            gehörsam sei, und dass ein iglicher sich darnach wisse zu richten
            und darwider nit komme.
          </li>
          <li>
            Item dass ein iglicher herre glob und bestelle in seinem heere, dass
            jedermann alle sölich sache und stücke dies vertragens globe seinem
            hauptmann mit hande und munde zu halten gänzlich bei treuen und
            ehren und bei der pöne.
          </li>
          <li>
            Item eins iglichen fürsten, grafen, herren, ritters und knechtes,
            und auch einer iglicher stadt, lande und sloss, städte, märkte,
            gebiete, zugehorung und strassen, besunder der, die zu diesen sachen
            thäten zogen oder hülfen, sollen, dieweil sie nicht inländisch
            wären, sicher sein, unbeschädiget beliben und gelassen werden von
            allermeniglich, weliches staates, würdigkeit oder wesen der oder die
            sin oder wären. Und ob einer also uber das beschädiget wörde, wider
            den beschädiger, einen oder mehr, sollen wir andern kürfürsten,
            fürsten, herren und städte einträchtiglich sein, helfen und raten,
            also dass dem, der also beschädiget werde, wandel und ausrichtung
            widerfahre, und wir söllen sölich übergreifer für verwiesete leute
            haben, halten und durch des willen ihnen keinerlei genad zulegen,
            sie geleiten oder geleiten lassen, sunder zu ihrn leibe und gute
            griefen als zu einem schädlichen und ubersagten mann.
          </li>
          <li>
            Item ein iglicher herr, stadt und auch andre sollen die zeit friede
            halten und keinen zugriff thuen.
          </li>
          <li>
            Item sich soll kein fürste, herre oder stadt mit behelfen
            entschuldigen oder des zogen entreten durch oder mit dem andern
            durch seiner sumenisse oder keinerlei sachen willen, sunder der zog
            soll ganzen vorgang haben und gewinnen.
          </li>
          <li>
            Item die herren mit hülfe der städte sollen bestellen, wann sie
            heraus ziehen, dass dann die nächsten sloss oder städte im lande
            Böheim gelegen, die christen sein, besetzt und bestallt werden zu
            täglichem kriege, also dass den ketzern kein ferderung geschehe,
            notdurft zugelegt oder zugeführt werde.
          </li>
          <li>
            Item dass ein iglich bischofe gebiet geistlichen und weltlichen,
            gott zu dienen umb die sach auf nämlich tag in der wochen, und wer
            des nicht thäte, dass der swerlich gebüsset werde.
          </li>
          <li>
            Item es soll kein fürste oder herre keinerlei guter, märkte, dörfer
            oder gebiete im lande zu Beheim verdingen, vertreten, schützen oder
            behüten, oder das zu thunde den seinen gestatten, oder eincherlei
            fürteil für den andern an speise oder futter do inne süchen oder
            sust in keinen andern sachen; fünde aber jemand futter oder speise
            für den andern, davon mag er sein notdurft auf dasmal nehmen, und
            darnach einen andern ouch zulassen.
          </li>
          <li>
            Item es soll niemand nach keinerlei viehe umb willen der speise
            reiten, fahren oder senden, es sei denn mit des hauptmann geheiss,
            dann soll man von allen herren darzu schicken, das eigenlich
            ordiniren, und also darnach einträchtiglich bestellen, und solich
            spise nach gleicher anzahl theilen.
          </li>
          <li>
            Item worden auch keinerlei sloss, städte, märkte oder vesten
            gewunnen, oder die sich ergeben worden, damit soll man es halten
            nach der hauptleut und der, die zu ihnen geschickt oder gegeben
            worden, erkenntnisse oder des mehren theils under ihn, und zu gute
            wenden.
          </li>
          <li>
            Was auch ein jederman, der mit seinem herrn zu felde käme auf des
            herrn koste, versolden und zehrunge, gefangen gewönnen, die soll er
            demselben seinem herrn antworten und geben ahn widerrede. Was auch
            er sei, ritter oder knecht oder städte, der oder die auf ihr eigene
            köste, zehrung und ebenteuer gen Beheim zügen, gefangen ankämen, die
            mögen ihn sölich gefangen selber halten, oder damit thuen nach ihrem
            willen.
          </li>
          <li>
            Item wer auch von den herren aus dem heere reiten wollte, der soll
            weder fried noch geleit haben, er hat dann der hauptleute [zeichen],
            kundschaft oder brief.
          </li>
          <li>
            Item wer auch verbreche überführe oder schuldig, oder darumb
            flüchtig würde, derselbe soll in keines herrn lande, städten,
            märkten, gebieten oder an keinen enden geleit haben, sunder man soll
            dem gedenken nach innehalt der pöne an allen enden, als oben
            geschrieben steht.
          </li>
          <li>
            Item die zween herren und erzbischöfe von Triere und von Colne
            sollen iglicher bringen IIII tarasbuchsen, XX hantbuchsen, und
            iglicher X<sup>m</sup> pfeil, und iglicher II<sup>c</sup>{' '}
            feuerpfeil, und darzu pulvers, stein und zeugs darzu ein notdurft,
            und iglicher drei büchsenmeister.
          </li>
          <li>
            Item der erzbischofe von Meincz VI kammerbuchsen und XXX
            hantbüchsen, IIII tarasbüchsen, X<sup>m</sup> pfeil, pulver, stein
            und gezeugs darzu ein notdurft; item II<sup>c</sup> feuerpfeile und
            drei buchsenmeister.
          </li>
          <li>
            Item glich soviel soll der pfalzgraf bei Reyne bringen oder schicken
            an allen gezeugen als der erzbischofe zu Meincz, und darüber ein
            gross steinbüchsen, die da schiesst anderthalben zenten. Item drei
            büchsenmeister.
          </li>
          <li>
            Item der markgraf von Brandeburg ein gross steinbüchsen, IIII
            taresbüchsen, XX hantbüchsen, X<sup>m</sup> pfeil, II<sup>c</sup>{' '}
            feuerpfeil, pulver, steine und andere notdurft. Item sein
            büchsenmeister.
          </li>
          <li>
            Item die herren von Beyeren im Niederlande ein steinbüchsen, die da
            schiesst zwei zentner, IIII kleine steinbuchsen, XXII hantbuchsen, X
            <sup>m</sup> pfeil, II<sup>c</sup> feuerpfeil, pulver, stein und
            ander notdurft. Item sein büchsenmeister.
          </li>
          <li>
            Item herzog Johanns von Beiern ein gross büchsen, IIII taresbuchsen,
            XX hantbuchsen, X<sup>m</sup> pfeil, stein, pulver und ander
            notdurft und gezeugs genüg. Item sein buchsenmeister.
          </li>
          <li>
            Item die bischöfe von Babenberg und von Wirczburg sullen bringen
            buchsein klein und gross mit pfeilen, pulver und gezeuge, so sie
            mächtilichst mögen, und iglicher IIII buchsenmeister.
          </li>
          <li>
            Item die stadt Nürenberg ein gross steinbuchsen, die da schiesst auf
            II zentner, VI klein steinbüchsen, XII taresbuchsen, LX hantbuchsen,
            XX<sup>m</sup> pfeil, VI<sup>c</sup> feuerpfeil und darzu gezeugs
            ein notdurft. Item sechs büchsenmeister.
          </li>
          <li>
            Item Regensburgk ein gut gross steinbuchsen und fürter kleinbuchsen,
            pulver, gezeug etc. nach ihrem vermögen, und darzu ihre
            buchsenmeister.
          </li>
          <li>
            Item die von Eger ein steinbuchs und sust buchsen, pulver, pfeil und
            gezeug nach ihrem vermügen mit ihren buchsenmeistern.
          </li>
          <li>
            Item die von Elnpogen, der burggraf und die stadt süllen kommen mit
            ihrer macht und bringen ein gross steinbuchsen und ander buchsen,
            gross und klein, pulver, stein und pfeil, gezeugs nach ihrem
            vermügen mit ihren buchsenmeistern.
          </li>
          <li>
            Item fürbass iglich stadt soll haben buchsen, pulver, stein und
            gezeug nach ihrem vermögen.
          </li>
          <li>
            Item ob icht geprechens in diesem vertrage funden würde, den mögen
            die hauptleute des zoges bessern.
            <Qt
              publication={PUBLICATIONS.TOMAN}
              href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:07788646-e407-45ca-b68f-57db1da6fdee"
            />
            <Qt
              publication={PUBLICATIONS.DRA9}
              href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=51"
            />
            <Qt
              publication={PUBLICATIONS.PALACKY_UB1}
              href="https://archive.org/details/urkundlichebeitr01pala/page/503/mode/1up"
            />
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <ol>
          <li>
            Zaprvé, že naši páni kurfiřti, všechna knížata, hrabata, páni,
            svobodní, rytíři, panoši, města a všichni ostatní, kteří chtějí Bohu
            ke chvále a ke cti, k posílení svaté křesťanské víry, k zachování
            svaté římské církve a pro útěchu všech křesťanů táhnout a jednat
            proti kacířům v Čechách a proti těm, kdo s nimi drží a poskytují jim
            pomoc, a těmto kacířům se postavit atd., se mají dostavit do Chebu
            [Risenberg] nebo na nejbližší místo v okolí na neděli, svátek
            svatého Petra a Pavla, zvláště ti, jimž přísluší tam táhnout.
          </li>
          <li>
            Hejtmany výpravy mají být: [přijdou-li všichni tři arcibiskupové,
            mohučský, kolínský a trevírský, osobně, má být hejtmanem arcibiskup
            kolínský; nepřijde-li on, arcibiskup trevírský; nepřijde-li ani
            jeden z nich, má jím být a zůstat arcibiskup mohučský, přijde-li
            tam. A kdo z nich bude hejtmanem, má k sobě přibrat jednoho nebo
            více z ostatních světských knížat, jak bude třeba, a dohodnout se s
            nimi ještě na jednom hejtmanovi; a na kom se takto dohodnou, ten má
            být a zůstat hejtmanem spolu s oním hejtmanem a nemá proti tomu nic
            namítat.]
          </li>
          <li>
            Knížata, na nichž se dohodli jako na hejtmanech, mohou k sobě
            přibrat šest nebo více, osm poctivých mužů, bude-li se jim to zdát
            potřebné atd., z jiných knížat a pánů, kteří tam přijdou. Ti mají
            ustanovit, určit, nařídit a uspořádat, jak se má táhnout a
            postupovat, a také zařídit a přikázat, co je třeba učinit. A
            všichni, kdo takto půjdou, potáhnou a přijdou, nikoho nevyjímaje,
            mají být těmto knížatům nebo jejich zmocněncům naprosto poslušni a
            řídit se jimi bez jakýchkoli námitek.
          </li>
          <li>
            Každý má táhnout na vlastní náklad a stravu, bez škody jiným lidem.
            Kde však nejsou ve městech a jsou v poli, smějí si bez zlého úmyslu
            vzít přiměřenou potřebu sena a slámy. Kdyby to však nebylo možné
            získat, ať jde o píci, nebo o jídlo, ani koupit, smějí si to vzít,
            kde to lze dostat, a mají to poctivě zaplatit podle uvážení hejtmanů
            nebo těch, koho k tomu hejtmani vyšlou.
          </li>
          <li>
            Každý kníže, hrabě, pán a město má zajistit trh, a zvláště ti, kdo
            sídlí a mají statky při české hranici, aby bylo přiváženo vše, čeho
            je třeba; a tito dovozci mají být přede všemi v bezpečí a zůstat
            nepoškozeni.
          </li>
          <li>
            Kdo by nad to někomu vzal jeho majetek proti jeho vůli nebo loupil,
            tomu má být bez milosti sťata hlava; a kdo krade, i s tím má být
            naloženo podle práva. A nikdo tomu nemá bránit ani se proti tomu
            stavět, ať sám, nebo prostřednictvím jiných.
          </li>
          <li>
            Také nemá táhnout ani následovat žádná žena, [hráč] ani žádná jiná
            chátra, ať se nazývá jakkoli.
          </li>
          <li>
            Každý se má nejméně jednou týdně vyzpovídat a každý kníže, hejtman
            atd. má k tomu své lidi vést a dbát, aby slyšeli mši, ve které dny
            ji mohou mít, a aby přitom bylo Bohu slouženo pokorně, zbožně a s
            veškerou pílí.
          </li>
          <li>
            Kdo by svévolně a úmyslně klel nebo zle proklínal jiného člověka
            nebo mu nadával, toho mají veřejně zavřít do pranýře až do milosti
            hejtmanů, nebo ho ihned vyhnat obnaženého biči nebo metlami.
          </li>
          <li>
            Kdo by také svévolně tasil nebo vytrhl proti jinému meč, nůž, sekeru
            nebo jinou zbraň, má bez milosti přijít o ruku. Kdyby však někoho
            zranil, má mu být sťata hlava.
          </li>
          <li>
            Kdyby došlo k srocení, rozepřím nebo potyčkám mezi knížaty, pány,
            městy nebo jinými, mohou jmenovaní hejtmani přibrat jiná knížata
            nebo kohokoli jiného, koho se věc netýká; nebo mohou tito hejtmani,
            nemohou-li se tomu sami věnovat, vyslat místo sebe jiné. Ti mají věc
            rozsoudit, a jak ji rozhodnou a rozsoudí, tak má zůstat a být pevně
            a neporušitelně dodržováno.
          </li>
          <li>
            Nikdo v české zemi nemá s lidmi jet, jít ani vozit pro píci nebo pro
            cokoli jiného, leda by byla přitom korouhev, kterou k tomu vyslali
            hejtmani, nebo na rozkaz hejtmanů atd.; a nikdo nemá v této zemi
            pálit ani zakládat požáry, leda by to přikázali hejtmani nebo by
            byla přitom korouhev, která je k tomu určena.
          </li>
          <li>
            Nikdo také nemá bez řádné příčiny vraždit nebo zabíjet žádného
            člověka, leda skutečné kacíře a ty, kdo s nimi drží a poskytují jim
            pomoc, pod výše uvedeným trestem ztráty hrdla.
          </li>
          <li>
            Dají-li hejtmani nebo jejich zmocněnci glejt, mají ho všichni
            dodržovat pod výše uvedeným trestem.
          </li>
          <li>
            Komu hejtmani nebo jejich zmocněnci přikážou držet stráž, být na
            hlídce nebo vyjet, ten má bez námitek poslechnout.
          </li>
          <li>
            Nikdo také nemá vytáhnout ani jet napřed nebo vzadu, leda by byla
            přitom korouhev, která je k tomu určena. A když hejtmani přikážou
            táhnout napřed nebo vzadu nebo jinak táhnout ke szteči, do bitvy,
            běžet nebo stát, má ve všem poslechnout.
          </li>
          <li>
            Každý kurfiřt a města mají zařídit, aby s nimi přišli tesaři,
            střelci a aby přivezli pušky, prach, kamení, šípy, tarasy (?),
            žebříky a jiné dobré zbraně.
          </li>
          <li>
            Každý kurfiřt má pěšky nebo na vozech vyslat a přivést dvě stě
            střelců ze svých měst a země, vyjma arcibiskupy trevírského a
            kolínského, z nichž každý má přivést sto střelců.
          </li>
          <li>
            Kurfiřti mají vtáhnout na jednom konci, vévoda saský na druhém,
            Slezané na třetím a vévoda rakouský na čtvrtém, a to vše má
            proběhnout v jeden den.
          </li>
          <li>
            K českým pánům a ostatním, kteří jsou ještě pravověrní, vyslat
            posly, zda by také chtěli vytáhnout do pole, a dohodnout se s nimi
            co nejlépe.
          </li>
          <li>
            Všechna ostatní vojska mají také vyčkávat, zda je hejtmani, na nichž
            se dohodli, nevyzvou, aby k nim přišla, a mají je poslouchat atd.
            Kdyby se tato vojska dostala do tísně nebo kdyby potřebovala
            hejtmany s jejich vojskem, mají jim poslat zprávu a hejtmani mají
            poté k nim přijít a celou silou jim pomoci a radit.
          </li>
          <li>
            Každý pán má se svými lidmi zařídit, aby nikdo, ať rytíř, nebo
            panoš, neměl víc než jednoho pacholíka nebo jízdního pacholka, ale
            aby to byli samí bojeschopní a ozbrojení lidé, vyjma knížata a
            hrabata.
          </li>
          <li>
            Zajistit, aby tato úmluva byla všem ohlášena jednou, třikrát,
            čtyřikrát nebo tak často, jak bude třeba, aby se jí poslouchalo, aby
            každý věděl, jak se jí řídit, a nejednal proti ní.
          </li>
          <li>
            Každý pán má slíbit a ve svém vojsku zařídit, aby každý svému
            hejtmanovi rukou a ústy slíbil, že všechny tyto věci a články této
            úmluvy bude zcela dodržovat na svou věrnost a čest a pod trestem.
          </li>
          <li>
            Každý kníže, hrabě, pán, rytíř a panoš a také každé město, země a
            hrad, města, trhy, území, příslušenství a cesty, zvláště těch, kdo
            se na této věci podílejí tažením nebo pomocí, mají být po dobu, kdy
            jsou mimo domov, v bezpečí, nepoškozeni a ponecháni v pokoji ode
            všech, ať jsou jakéhokoli stavu, důstojnosti či postavení. A kdyby
            přesto někdo utrpěl škodu, máme my ostatní kurfiřti, knížata, páni a
            města proti škůdci, jednomu či více, jednomyslně stát, pomáhat a
            radit, aby poškozenému bylo učiněno zadost a dostal náhradu. A
            takové útočníky máme mít a držet za vypovězené, a proto jim
            neprokazovat žádnou milost, nedávat jim glejt ani ho nedovolit
            dávat, nýbrž sáhnout na jejich život a statky jako na škodlivého a
            usvědčeného člověka.
          </li>
          <li>
            Každý pán, město i ostatní mají po tu dobu zachovávat mír a
            nepodnikat žádné přepady.
          </li>
          <li>
            Žádný kníže, pán ani město se nemá vymlouvat ani se z výpravy
            vyvazovat poukazem na jiného, na jeho liknavost nebo na jakoukoli
            jinou věc, nýbrž výprava má mít plný průběh a zdar.
          </li>
          <li>
            Páni mají s pomocí měst zařídit, aby až vytáhnou, byly nejbližší
            hrady nebo města ležící v české zemi, která jsou křesťanská,
            obsazena a opatřena posádkou pro každodenní válku, aby kacíři
            nedostali žádnou podporu a nebyly jim dodávány ani přiváženy
            potřeby.
          </li>
          <li>
            Každý biskup má nařídit duchovním i světským, aby v určitý den v
            týdnu sloužili Bohu za tuto věc; a kdo by to neučinil, má být přísně
            potrestán.
          </li>
          <li>
            Žádný kníže ani pán nemá v české zemi žádné statky, trhy, vesnice
            nebo území brát ve smluvní ochranu (?), zastávat, chránit nebo
            opatrovat, ani to dovolit svým lidem, ani tam hledat jakoukoli
            výhodu před ostatními v jídle či píci nebo v jiných věcech. Najde-li
            však někdo píci nebo jídlo dříve než ostatní, smí si z toho vzít, co
            pro tu chvíli potřebuje, a potom k tomu pustit i jiné.
          </li>
          <li>
            Nikdo nemá jet, vozit ani posílat pro dobytek kvůli jídlu, leda na
            rozkaz hejtmana; pak mají všichni páni k tomu vyslat lidi, řádně to
            uspořádat, jednomyslně zařídit a takové jídlo rozdělit rovným dílem.
          </li>
          <li>
            Kdyby byly dobyty jakékoli hrady, města, trhy nebo tvrze, nebo kdyby
            se vzdaly, má se s nimi naložit podle rozhodnutí hejtmanů a těch,
            kdo jim byli přiděleni, nebo podle většiny z nich, a obrátit je k
            dobrému užitku.
          </li>
          <li>
            Koho by kdokoli, kdo přišel se svým pánem do pole na pánův náklad,
            žold a stravu, zajal, toho má tomuto svému pánovi bez námitek vydat
            a odevzdat. Kdo by však, ať rytíř, panoš nebo města, táhl do Čech na
            vlastní náklad, stravu a riziko a zajal zajatce, smí si takové
            zajatce ponechat nebo s nimi naložit podle své vůle.
          </li>
          <li>
            Kdo by z pánů chtěl z vojska odjet, nemá mít mír ani glejt, leda by
            měl od hejtmanů [znamení], osvědčení nebo list.
          </li>
          <li>
            Kdo by se provinil a byl usvědčen a shledán vinným, nebo kvůli tomu
            uprchl, nemá mít glejt v zemi, městech, trzích a územích žádného
            pána ani nikde jinde, nýbrž má na něj být všude pamatováno podle
            trestu, jak je výše napsáno.
          </li>
          <li>
            Oba páni a arcibiskupové trevírský a kolínský mají každý přivézt 4
            tarasnice, 20 ručnic, každý 10 000 šípů a každý 200 zápalných šípů,
            k tomu prach, kamení a náčiní podle potřeby, a každý tři puškaře.
          </li>
          <li>
            Arcibiskup mohučský 6 komorových pušek a 30 ručnic, 4 tarasnice, 10
            000 šípů, prach, kamení a náčiní podle potřeby; dále 200 zápalných
            šípů a tři puškaře.
          </li>
          <li>
            Právě tolik všeho náčiní má přivézt nebo poslat falckrabě rýnský
            jako arcibiskup mohučský, a navíc jednu velkou kamennou pušku, která
            střílí kámen o váze půldruhého centu. Dále tři puškaře.
          </li>
          <li>
            Markrabě braniborský jednu velkou kamennou pušku, 4 tarasnice, 20
            ručnic, 10 000 šípů, 200 zápalných šípů, prach, kamení a jiné
            potřeby. Dále své puškaře.
          </li>
          <li>
            Páni bavorští v Dolní zemi (?) jednu kamennou pušku, která střílí
            kámen o váze dvou centů, 4 malé kamenné pušky, 22 ručnic, 10 000
            šípů, 200 zápalných šípů, prach, kamení a jiné potřeby. Dále své
            puškaře.
          </li>
          <li>
            Vévoda Jan Bavorský jednu velkou pušku, 4 tarasnice, 20 ručnic, 10
            000 šípů, kamení, prach a jiné potřeby a dostatek náčiní. Dále své
            puškaře.
          </li>
          <li>
            Biskupové bamberský a würzburský mají přivézt pušky malé i velké se
            šípy, prachem a náčiním, jak nejvíce mohou, a každý 4 puškaře.
          </li>
          <li>
            Město Norimberk jednu velkou kamennou pušku, která střílí kámen o
            váze dvou centů, 6 malých kamenných pušek, 12 tarasnic, 60 ručnic,
            20 000 šípů, 600 zápalných šípů a k tomu náčiní podle potřeby. Dále
            šest puškařů.
          </li>
          <li>
            Řezno jednu dobrou velkou kamennou pušku a dále malé pušky, prach,
            náčiní atd. podle svých možností a k tomu své puškaře.
          </li>
          <li>
            Chebští jednu kamennou pušku a jiné pušky, prach, šípy a náčiní
            podle svých možností se svými puškaři.
          </li>
          <li>
            Loketští, purkrabí i město, mají přijít se svou mocí a přivézt jednu
            velkou kamennou pušku a jiné pušky, velké i malé, prach, kamení a
            šípy, náčiní podle svých možností se svými puškaři.
          </li>
          <li>
            Dále má každé město mít pušky, prach, kamení a náčiní podle svých
            možností.
          </li>
          <li>
            Kdyby se v této úmluvě našel nějaký nedostatek, mohou ho hejtmani
            výpravy napravit.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
