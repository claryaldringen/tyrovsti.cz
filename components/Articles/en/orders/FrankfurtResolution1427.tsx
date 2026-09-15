import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const FrankfurtResolution1427 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="frankfurt-resolution-1427" />
        <h4>
          Resolution of the Imperial Estates at Frankfurt, Shortly before
          4&nbsp;May 1427
          {draft && <DraftBadge />}
        </h4>
        <p>Working translation, not yet reviewed.</p>
        <p>
          The resolution was adopted by the imperial estates at the diet in
          Frankfurt shortly before 4&nbsp;May 1427. It prepared a campaign that
          was to invade Bohemia from four sides in the summer of the same year –
          from Nuremberg, Saxony, Silesia and Austria.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:85a1bfc6-5719-4321-af1f-69d710256207"
          />
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=50"
          />{' '}
          Toman counts it among the three military ordinances that emerged from
          the deliberations of the imperial diets during the Hussite Wars, and
          calls it at the same time an artillery allocation. Unlike the
          electors&apos; proposals of 1426, which he calls a poor attempt, it
          forms in his view a complete whole.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:8b817ac0-57b2-408e-83e4-6a2585b6ccc2"
            note="pp. 17–18"
          />{' '}
          In August 1427 the imperial army then advanced to Stříbro and Tachov,
          where most of it took flight without engaging the enemy.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:85a1bfc6-5719-4321-af1f-69d710256207"
            note="pp. 186–187"
          />
        </p>
        <p>
          Palacký published the text from the copy of Andreas of Regensburg.
          <Qt
            publication={PUBLICATIONS.PALACKY_UB1}
            href="https://archive.org/details/urkundlichebeitr01pala/page/503/mode/1up"
          />{' '}
          The <i>Deutsche Reichstagsakten</i> print it from the Strasbourg copy
          and record the variants of nine further copies and of Windecke&apos;s
          work on Emperor Sigismund.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=50"
          />{' '}
          Although Toman writes that he prints the ordinance after the DRA,
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:b20c2763-1196-4237-b865-63d45ed3cb7c"
          />{' '}
          his text in fact corresponds to Palacký&apos;s edition with modernised
          spelling. He gives additions and variant readings from the DRA in
          square brackets.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:07788646-e407-45ca-b68f-57db1da6fdee"
          />{' '}
          The copies differ substantially in several points. As the place of
          assembly, the main text of the DRA names Nuremberg, while the copy of
          Andreas of Regensburg and most of the others name Eger (Cheb).
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=51"
          />{' '}
          Of article 2 on the captains, Andreas&apos;s copy has only the first
          words in their place and appends the full text at the end. According
          to the Magdeburg copy, this article was inserted into the ordinance
          later.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=50"
            note="pp. 34–35"
          />{' '}
          Articles 26 and 41 are missing from the main text of the DRA; on the
          other hand, the article on Passau, which is absent from Andreas&apos;s
          copy, is not found in Toman either.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=54"
            note="pp. 38 and 40"
          />{' '}
          Some numbers of weapons also differ. According to the main text of the
          DRA, for example, the archbishop of Mainz is to bring four chamber
          guns and 22 hand guns instead of six and thirty.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=55"
          />
        </p>
        <p>
          Translation notes: Square brackets in the translation correspond to
          Toman&apos;s brackets in the original. The reading{' '}
          <Cit>Risenberg</Cit> in article 1, which Toman gives in brackets, I
          have not found in the DRA; the main text there has Nuremberg, and one
          of the copies adds Freiberg in Meissen.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=51"
          />
          <br />
          In article 16 Toman has <Cit>aust ziehen</Cit>, the DRA at this point{' '}
          <Cit>sunst ziehen</Cit>. I translate after the DRA as{' '}
          <Cit>otherwise to march</Cit>.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=53"
          />
          <br />
          <Cit>Toressen [tarassen]</Cit> in article 17 I translate as{' '}
          <Cit>tarras</Cit>, i.e. portable barricades. As the word stands among
          guns, arrows and ladders, tarras guns may also be meant.
          <br />
          According to a note in the DRA, <Cit>fromm</Cit> in article 20 means{' '}
          <Cit>orthodox</Cit>.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=53"
          />
          <br />
          The word <Cit>herre</Cit> in article 21 I translate from the context
          and after the DRA reading (<Cit>here</Cit>) as <Cit>armies</Cit>.
          <br />
          According to a note in the DRA, a <Cit>renner</Cit> in article 22 is a
          mounted servant or groom, or a mounted messenger.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=54"
          />
          <br />
          The meaning of <Cit>verdingen</Cit> in article 30 is uncertain; I
          translate it as <Cit>to take under contracted protection</Cit>.
          <br />
          <Cit>Niederlande</Cit> in article 40 is most likely Lower Bavaria, but
          this is not certain.
          <br />
          Weapons: I translate <Cit>tarasbuchsen</Cit> as tarras guns,{' '}
          <Cit>kammerbuchsen</Cit> as chamber guns, <Cit>hantbuchsen</Cit> as
          hand guns and <Cit>steinbüchsen</Cit> as stone guns, i.e. guns firing
          stone balls.
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
            First, that our lords the electors, all princes, counts, lords,
            freemen, knights, squires, towns and all others who, to the praise
            and honour of God, to the strengthening of the holy Christian faith,
            to the preservation of the holy Roman Church and for the comfort of
            all Christians, wish to follow, march and act against the heretics
            in Bohemia and those who side with them and give them support, and
            to resist those heretics etc., shall be and come to Eger [Risenberg]
            or to the nearest place round about on Sunday, the feast of Saints
            Peter and Paul, especially those whom it befits to march there.
          </li>
          <li>
            The captains of the campaign shall be: [if all three archbishops, of
            Mainz, Cologne and Trier, come in person, the archbishop of Cologne
            shall be captain; if he does not come, the archbishop of Trier; if
            neither of them comes, the archbishop of Mainz shall be and remain
            captain, if he comes there. And whichever of them becomes captain
            shall take to himself one or more of the other secular princes, as
            need be, and agree with them on one more captain; and whomever they
            thus agree upon shall be and remain captain together with the
            aforesaid captain, and shall not speak against it.]
          </li>
          <li>
            The princes agreed upon as captains may take to themselves six or
            more, eight honest men, if they deem it necessary etc., from other
            princes and lords who come there. These shall set, make, ordain and
            arrange how the army shall march and follow, and also order and
            command what needs to be done. And all who thus follow, march and
            come, no one excepted, shall be wholly obedient to these princes or
            their deputies and attend to them without any objection.
          </li>
          <li>
            Everyone shall march at his own cost and provisions, without harm to
            other people. But where they are not in towns and are in the field,
            they may take a reasonable need of hay and straw without ill intent.
            If it cannot be had otherwise, be it fodder or food, nor obtained by
            purchase, they may take it wherever it can be had, and shall pay for
            it honestly at the discretion of the captains or of those whom the
            captains send for the purpose.
          </li>
          <li>
            Every prince, count, lord and town shall provide a market,
            especially those who reside and hold lands on the Bohemian border,
            so that everything needed is brought in; and these suppliers shall
            be safe from everyone and remain unharmed.
          </li>
          <li>
            If, in addition, anyone takes another&apos;s property against his
            will or robs, he shall be beheaded without mercy; and whoever steals
            shall also receive justice. And no one shall prevent this or oppose
            it, either himself or through others.
          </li>
          <li>
            Likewise no woman, [gambler] or other riff-raff, whatever they may
            be called, shall march with the army or follow it.
          </li>
          <li>
            Everyone shall confess at least once a week, and every prince,
            captain etc. shall keep his men to it and see that they hear mass on
            whatever days they can have it, and that God be served humbly,
            devoutly and with all diligence.
          </li>
          <li>
            Whoever wantonly and deliberately swears or utters evil curses
            against another person or insults him shall be publicly locked in
            the pillory until the captains show mercy, or be driven out at once,
            stripped, with whips or rods.
          </li>
          <li>
            Whoever wantonly draws or pulls a sword, knife, axe or other weapon
            against another shall lose a hand without mercy. But if he wounds
            someone, he shall be beheaded.
          </li>
          <li>
            If riots, discord or quarrels arise among princes, lords, towns or
            others, the said captains may take other princes or anyone else not
            involved in the matter; or, if the captains cannot attend to it
            themselves, they may send others in their stead. These shall judge
            the matter, and as they decide and judge it, so it shall stand and
            be kept firmly and inviolably.
          </li>
          <li>
            No one in the land of Bohemia shall ride, walk or drive with men for
            fodder or anything else, unless the banner sent for that purpose by
            the captains is present, or on the captains&apos; order etc.; and no
            one shall burn or set fire in that land unless ordered by the
            captains or unless the banner designated for it is present.
          </li>
          <li>
            No one shall murder or kill any person without just cause, except
            the true heretics and those who side with them and give them
            support, under the aforesaid penalty of death.
          </li>
          <li>
            When the captains or their deputies grant safe-conduct, everyone
            shall respect it under the aforesaid penalty.
          </li>
          <li>
            Whomever the captains or their deputies order to keep watch, stand
            guard or ride out shall obey without objection.
          </li>
          <li>
            No one shall break camp or ride ahead or behind unless the banner
            assigned for it is present. And when the captains order the men to
            move ahead or behind or otherwise to march to an assault, to battle,
            to run or to stand, they shall obey in all of this.
          </li>
          <li>
            Every elector and the towns shall arrange for carpenters and
            shooters to come along and to bring guns, powder, stones, arrows,
            tarras (?), ladders and other good weapons.
          </li>
          <li>
            Every elector shall send and bring, on foot or on wagons, two
            hundred shooters from his towns and land, except the archbishops of
            Trier and Cologne, each of whom shall bring one hundred shooters.
          </li>
          <li>
            The electors shall invade at one end, the duke of Saxony at another,
            the Silesians at the third and the duke of Austria at the fourth,
            and all this shall take place on one day.
          </li>
          <li>
            To send envoys to the Bohemian lords and the others who are still
            orthodox, to ask whether they too would take the field, and to come
            to the best possible agreement with them.
          </li>
          <li>
            All other armies shall also wait to see whether the captains agreed
            upon send them word to come to them, and shall obey them etc. If
            these armies are hard pressed, or if they need the captains with
            their army, they shall send them word, and the captains shall then
            come to them and help and advise them with all their strength.
          </li>
          <li>
            Every lord shall arrange with his men that no one, whether knight or
            squire, has more than one boy or mounted servant, but that all are
            fighting men and armed, princes and counts excepted.
          </li>
          <li>
            To ensure that this agreement is proclaimed to everyone once, three
            or four times, or as often as needed, so that it is obeyed, that
            everyone knows how to follow it and does not act against it.
          </li>
          <li>
            Every lord shall pledge and arrange in his army that everyone
            pledges to his captain by hand and mouth to keep all these matters
            and articles of this agreement completely, on his faith and honour
            and under penalty.
          </li>
          <li>
            Every prince, count, lord, knight and squire, and also every town,
            land and castle, towns, markets, territories, appurtenances and
            roads, especially of those who take part in this cause by marching
            or by helping, shall, while they are away from home, be safe,
            unharmed and left in peace by everyone, of whatever estate, dignity
            or condition. And if anyone is nevertheless harmed, we the other
            electors, princes, lords and towns shall unanimously stand, help and
            advise against the offender, one or more, so that the injured party
            receives redress and compensation. And we shall hold and regard such
            transgressors as outlaws, and for that reason grant them no grace,
            neither give them safe-conduct nor allow it to be given, but seize
            their persons and goods as those of a harmful and convicted man.
          </li>
          <li>
            Every lord, town and others shall keep the peace during this time
            and make no raids.
          </li>
          <li>
            No prince, lord or town shall make excuses or withdraw from the
            campaign by pointing to another, to his negligence or to anything
            else; rather the campaign shall proceed fully and succeed.
          </li>
          <li>
            With the help of the towns, the lords shall arrange that, when they
            march out, the nearest castles or towns in the land of Bohemia that
            are Christian are occupied and garrisoned for daily warfare, so that
            the heretics receive no support and no supplies are delivered or
            brought to them.
          </li>
          <li>
            Every bishop shall order clergy and laity to serve God for this
            cause on a set day of the week; and whoever does not do so shall be
            severely punished.
          </li>
          <li>
            No prince or lord shall in the land of Bohemia take any estates,
            markets, villages or territories under contracted protection (?),
            represent, protect or guard them, or allow his men to do so, nor
            seek any advantage over others there in food or fodder or in any
            other matter. But if someone finds fodder or food before the others,
            he may take from it what he needs for the time being and then let
            others at it too.
          </li>
          <li>
            No one shall ride, drive or send for cattle for food unless by the
            captain&apos;s order; then all the lords shall send men for this,
            organise it properly, arrange it unanimously and divide such food in
            equal shares.
          </li>
          <li>
            If any castles, towns, markets or fortresses are won, or if they
            surrender, they shall be dealt with according to the judgment of the
            captains and of those assigned to them, or of the majority among
            them, and put to good use.
          </li>
          <li>
            Whatever prisoners are taken by anyone who came to the field with
            his lord at the lord&apos;s cost, pay and provisions, he shall hand
            over and give to that lord without objection. But whoever, whether
            knight, squire or towns, marched to Bohemia at his own cost,
            provisions and risk and took prisoners, may keep such prisoners
            himself or do with them as he pleases.
          </li>
          <li>
            Whoever among the lords wishes to ride away from the army shall have
            neither peace nor safe-conduct, unless he has the captains&apos;
            [token], attestation or letter.
          </li>
          <li>
            Whoever commits an offence and is convicted and found guilty, or
            flees because of it, shall have no safe-conduct in any lord&apos;s
            land, towns, markets or territories, or anywhere else; rather he
            shall be dealt with everywhere according to the penalty written
            above.
          </li>
          <li>
            The two lords and archbishops of Trier and Cologne shall each bring
            4 tarras guns, 20 hand guns, each 10,000 arrows and each 200 fire
            arrows, with powder, stones and equipment as needed, and each three
            gunmasters.
          </li>
          <li>
            The archbishop of Mainz 6 chamber guns and 30 hand guns, 4 tarras
            guns, 10,000 arrows, powder, stones and equipment as needed; also
            200 fire arrows and three gunmasters.
          </li>
          <li>
            The Count Palatine of the Rhine shall bring or send just as much of
            all equipment as the archbishop of Mainz, and in addition one great
            stone gun that shoots a stone of one and a half hundredweight. Also
            three gunmasters.
          </li>
          <li>
            The margrave of Brandenburg one great stone gun, 4 tarras guns, 20
            hand guns, 10,000 arrows, 200 fire arrows, powder, stones and other
            necessities. Also his gunmasters.
          </li>
          <li>
            The lords of Bavaria in the Lower Land (?) one stone gun that shoots
            a stone of two hundredweight, 4 small stone guns, 22 hand guns,
            10,000 arrows, 200 fire arrows, powder, stones and other
            necessities. Also their gunmasters.
          </li>
          <li>
            Duke John of Bavaria one great gun, 4 tarras guns, 20 hand guns,
            10,000 arrows, stones, powder and other necessities and enough
            equipment. Also his gunmasters.
          </li>
          <li>
            The bishops of Bamberg and Würzburg shall bring guns small and large
            with arrows, powder and equipment, as much as they are able, and
            each 4 gunmasters.
          </li>
          <li>
            The city of Nuremberg one great stone gun that shoots a stone of two
            hundredweight, 6 small stone guns, 12 tarras guns, 60 hand guns,
            20,000 arrows, 600 fire arrows and equipment as needed. Also six
            gunmasters.
          </li>
          <li>
            Regensburg one good great stone gun and further small guns, powder,
            equipment etc. according to its means, and in addition its
            gunmasters.
          </li>
          <li>
            Those of Eger one stone gun and other guns, powder, arrows and
            equipment according to their means, with their gunmasters.
          </li>
          <li>
            Those of Elbogen, the burgrave and the town, shall come with their
            force and bring one great stone gun and other guns large and small,
            powder, stones and arrows, equipment according to their means, with
            their gunmasters.
          </li>
          <li>
            Furthermore every town shall have guns, powder, stones and equipment
            according to its means.
          </li>
          <li>
            If any shortcoming is found in this agreement, the captains of the
            campaign may amend it.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
