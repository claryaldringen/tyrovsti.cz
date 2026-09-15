import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const RisoluzioneFrancoforte1427 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="risoluzione-di-francoforte-1427" />
        <h4>
          Risoluzione degli stati imperiali a Francoforte, poco prima del
          4&nbsp;maggio 1427
          {draft && <DraftBadge />}
        </h4>
        <p>Traduzione provvisoria, non ancora revisionata.</p>
        <p>
          La risoluzione fu adottata dagli stati imperiali alla dieta di
          Francoforte poco prima del 4&nbsp;maggio 1427. Con essa preparavano
          una spedizione che nell&apos;estate dello stesso anno doveva invadere
          la Boemia da quattro lati – da Norimberga, dalla Sassonia, dalla
          Slesia e dall&apos;Austria.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:85a1bfc6-5719-4321-af1f-69d710256207"
          />
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=50"
          />{' '}
          Toman la annovera fra le tre ordinanze militari scaturite durante le
          guerre hussite dalle consultazioni delle diete imperiali e la
          definisce al tempo stesso una ripartizione dell&apos;artiglieria. A
          differenza delle proposte dei principi elettori del 1426, che egli
          chiama un povero tentativo, essa costituisce a suo avviso un insieme
          compiuto.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:8b817ac0-57b2-408e-83e4-6a2585b6ccc2"
            note="pp. 17–18"
          />{' '}
          Nell&apos;agosto del 1427 l&apos;esercito imperiale avanzò poi fino a
          Stříbro e Tachov, dove in gran parte si diede alla fuga senza
          affrontare il nemico.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:85a1bfc6-5719-4321-af1f-69d710256207"
            note="pp. 186–187"
          />
        </p>
        <p>
          Palacký pubblicò il testo secondo la copia di Andrea di Ratisbona.
          <Qt
            publication={PUBLICATIONS.PALACKY_UB1}
            href="https://archive.org/details/urkundlichebeitr01pala/page/503/mode/1up"
          />{' '}
          I <i>Deutsche Reichstagsakten</i> lo stampano secondo la copia di
          Strasburgo e riportano le varianti di altre nove copie e
          dell&apos;opera di Windecke sull&apos;imperatore Sigismondo.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=50"
          />{' '}
          Toman scrive, è vero, di pubblicare l&apos;ordinanza secondo i DRA,
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:b20c2763-1196-4237-b865-63d45ed3cb7c"
          />{' '}
          ma il suo testo corrisponde all&apos;edizione di Palacký con
          l&apos;ortografia adattata. Le aggiunte e le varianti dei DRA sono
          riportate fra parentesi quadre.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:07788646-e407-45ca-b68f-57db1da6fdee"
          />{' '}
          Le copie differiscono sostanzialmente in diversi punti. Come luogo di
          raduno, il testo principale dei DRA indica Norimberga, mentre la copia
          di Andrea di Ratisbona e la maggior parte delle altre indicano Eger
          (Cheb).
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=51"
          />{' '}
          Dell&apos;articolo 2 sui capitani, la copia di Andrea riporta al suo
          posto soltanto le prime parole e aggiunge il testo completo alla fine.
          Secondo la copia di Magdeburgo, questo articolo fu inserito
          nell&apos;ordinanza solo in un secondo momento.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=50"
            note="pp. 34–35"
          />{' '}
          Gli articoli 26 e 41 mancano nel testo principale dei DRA; per contro,
          l&apos;articolo su Passavia, assente nella copia di Andrea, non si
          trova nemmeno in Toman.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=54"
            note="pp. 38 e 40"
          />{' '}
          Differiscono anche alcune quantità di armi. Secondo il testo
          principale dei DRA, per esempio, l&apos;arcivescovo di Magonza deve
          portare quattro cannoni a camera e 22 archibugi invece di sei e
          trenta.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=55"
          />
        </p>
        <p>
          Note di traduzione: le parentesi quadre nella traduzione corrispondono
          alle parentesi di Toman nell&apos;originale. La lezione{' '}
          <Cit>Risenberg</Cit> nell&apos;articolo 1, che Toman riporta fra
          parentesi, non l&apos;ho trovata nei DRA; il testo principale ha
          Norimberga e una delle copie aggiunge Freiberg in Misnia.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=51"
          />
          <br />
          Nell&apos;articolo 16 Toman ha <Cit>aust ziehen</Cit>, i DRA in questo
          punto <Cit>sunst ziehen</Cit>. Traduco secondo i DRA con{' '}
          <Cit>muovere altrimenti</Cit>.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=53"
          />
          <br />
          <Cit>Toressen [tarassen]</Cit> nell&apos;articolo 17 lo traduco con{' '}
          <Cit>taras</Cit>, cioè sbarramenti mobili. Poiché la parola si trova
          fra cannoni, dardi e scale, potrebbe trattarsi anche di tarasnice.
          <br />
          Secondo una nota dei DRA, <Cit>fromm</Cit> nell&apos;articolo 20
          significa <Cit>di retta fede</Cit>.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=53"
          />
          <br />
          La parola <Cit>herre</Cit> nell&apos;articolo 21 la traduco secondo il
          contesto e la lezione dei DRA (<Cit>here</Cit>) con{' '}
          <Cit>eserciti</Cit>.
          <br />
          Secondo una nota dei DRA, un <Cit>renner</Cit> nell&apos;articolo 22 è
          un famiglio a cavallo, uno stalliere o un messaggero a cavallo.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=54"
          />
          <br />
          Il significato di <Cit>verdingen</Cit> nell&apos;articolo 30 è
          incerto; lo traduco con <Cit>prendere sotto protezione pattuita</Cit>.
          <br />
          <Cit>Niederlande</Cit> nell&apos;articolo 40 è molto probabilmente la
          Bassa Baviera, ma non è certo.
          <br />
          Armi: traduco <Cit>tarasbuchsen</Cit> con tarasnice,{' '}
          <Cit>kammerbuchsen</Cit> con cannoni a camera, <Cit>hantbuchsen</Cit>{' '}
          con archibugi e <Cit>steinbüchsen</Cit> con bombarde, cioè cannoni che
          tirano palle di pietra.
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
            Innanzitutto, che i nostri signori principi elettori, tutti i
            principi, conti, signori, liberi, cavalieri, scudieri, città e tutti
            gli altri che, a lode e onore di Dio, a rafforzamento della santa
            fede cristiana, a conservazione della santa Chiesa romana e a
            conforto di tutti i cristiani, vogliono seguire, marciare e agire
            contro gli eretici in Boemia e contro coloro che stanno dalla loro
            parte e prestano loro aiuto, e resistere a tali eretici ecc.,
            debbano trovarsi e giungere a Eger [Risenberg] o nel luogo più
            vicino nei dintorni la domenica, festa dei santi Pietro e Paolo, in
            particolare coloro ai quali spetta di marciarvi.
          </li>
          <li>
            I capitani della spedizione saranno: [se tutti e tre gli
            arcivescovi, di Magonza, di Colonia e di Treviri, verranno di
            persona, capitano sarà l&apos;arcivescovo di Colonia; se egli non
            verrà, l&apos;arcivescovo di Treviri; se non verrà nessuno dei due,
            capitano sarà e rimarrà l&apos;arcivescovo di Magonza, qualora vi
            giunga. E chi di loro diverrà capitano prenderà con sé uno o più
            degli altri principi secolari, secondo il bisogno, e si accorderà
            con loro su un altro capitano; e colui sul quale si accorderanno
            sarà e rimarrà capitano insieme al suddetto capitano, e nessuno
            dovrà opporvisi.]
          </li>
          <li>
            I principi sui quali ci si è accordati come capitani possono
            prendere con sé sei o più, otto uomini onesti, se lo riterranno
            necessario ecc., fra altri principi e signori che vi giungeranno.
            Costoro stabiliranno, disporranno, ordineranno e organizzeranno come
            si debba marciare e seguire, e comanderanno e ordineranno ciò che
            occorre fare. E tutti coloro che seguiranno, marceranno e
            giungeranno, nessuno escluso, dovranno essere pienamente obbedienti
            a questi principi o ai loro delegati e attenersi ai loro ordini
            senza alcuna obiezione.
          </li>
          <li>
            Ognuno marci a proprie spese e con i propri viveri, senza danno per
            altre persone. Ma dove non si è nelle città e si è in campo, si può
            prendere senza malizia una ragionevole quantità di fieno e paglia.
            Se non lo si può avere altrimenti, sia foraggio sia cibo, né
            acquistare, lo si può prendere dove lo si trova, e lo si deve pagare
            onestamente secondo il giudizio dei capitani o di coloro che essi
            manderanno a tal fine.
          </li>
          <li>
            Ogni principe, conte, signore e città deve provvedere a un mercato,
            e in particolare coloro che risiedono e hanno possedimenti al
            confine boemo, affinché venga portato tutto ciò che occorre; e tali
            fornitori devono essere al sicuro da chiunque e rimanere illesi.
          </li>
          <li>
            Se inoltre qualcuno prende i beni altrui contro la volontà del
            proprietario o compie rapine, gli si tagli la testa senza grazia; e
            chi ruba, anche a lui sia fatta giustizia. E nessuno deve impedirlo
            né opporvisi, né di persona né per mezzo di altri.
          </li>
          <li>
            Inoltre nessuna donna, [nessun giocatore] né altra gentaglia,
            comunque si chiami, deve marciare con l&apos;esercito o seguirlo.
          </li>
          <li>
            Ognuno deve confessarsi almeno una volta alla settimana, e ogni
            principe, capitano ecc. deve indurvi i suoi uomini e far sì che
            ascoltino la messa nei giorni in cui possono averla, e che Dio sia
            servito con umiltà, devozione e ogni diligenza.
          </li>
          <li>
            Chi deliberatamente e intenzionalmente bestemmia o maledice o
            insulta un&apos;altra persona sia chiuso pubblicamente alla gogna
            fino alla grazia dei capitani, oppure sia cacciato subito,
            spogliato, con fruste o verghe.
          </li>
          <li>
            Chi deliberatamente sguaina o estrae spada, coltello, ascia o altra
            arma contro un altro perda una mano senza grazia. Se però ferisce
            qualcuno, gli sia tagliata la testa.
          </li>
          <li>
            Se sorgono tumulti, discordie o risse fra principi, signori, città o
            altri, i detti capitani possono chiamare altri principi o chiunque
            altro non coinvolto nella questione; oppure, se non possono
            occuparsene di persona, possono mandare altri al loro posto. Costoro
            giudicheranno la questione, e come la decideranno e giudicheranno,
            così resterà e sarà osservato fermamente e inviolabilmente.
          </li>
          <li>
            Nessuno nel paese di Boemia deve cavalcare, andare o condurre carri
            con uomini in cerca di foraggio o di altro, a meno che non sia
            presente il vessillo mandato a tal fine dai capitani, o per ordine
            dei capitani ecc.; e nessuno deve incendiare o appiccare fuoco in
            quel paese, a meno che non lo ordinino i capitani o non sia presente
            il vessillo a ciò destinato.
          </li>
          <li>
            Nessuno deve assassinare o uccidere alcuna persona senza giusta
            causa, eccetto i veri eretici e coloro che stanno dalla loro parte e
            prestano loro aiuto, sotto la suddetta pena capitale.
          </li>
          <li>
            Quando i capitani o i loro delegati concedono un salvacondotto,
            tutti devono rispettarlo sotto la suddetta pena.
          </li>
          <li>
            Chi riceve dai capitani o dai loro delegati l&apos;ordine di fare la
            guardia, stare in vedetta o uscire a cavallo deve obbedire senza
            obiezioni.
          </li>
          <li>
            Nessuno deve levare il campo né andare avanti o indietro, a meno che
            non sia presente il vessillo a ciò destinato. E quando i capitani
            ordinano di andare avanti o indietro o di muovere altrimenti
            all&apos;assalto, alla battaglia, alla corsa o a restare fermi, si
            deve obbedire in tutto.
          </li>
          <li>
            Ogni principe elettore e le città devono provvedere che vengano con
            loro carpentieri e tiratori e che siano portati cannoni, polvere,
            pietre, dardi, taras (?), scale e altre buone armi.
          </li>
          <li>
            Ogni principe elettore deve mandare e condurre, a piedi o sui carri,
            duecento tiratori dalle sue città e dal suo paese, eccetto gli
            arcivescovi di Treviri e di Colonia, ciascuno dei quali deve
            condurre cento tiratori.
          </li>
          <li>
            I principi elettori devono entrare da un lato, il duca di Sassonia
            da un altro, gli Slesiani dal terzo e il duca d&apos;Austria dal
            quarto, e tutto ciò deve avvenire in un solo giorno.
          </li>
          <li>
            Inviare messaggeri ai signori boemi e agli altri che sono ancora di
            retta fede, per sapere se anch&apos;essi vogliano scendere in campo,
            e accordarsi con loro nel modo migliore.
          </li>
          <li>
            Tutti gli altri eserciti devono anch&apos;essi attendere se i
            capitani concordati mandino loro messaggio di raggiungerli, e devono
            obbedire loro ecc. Se questi eserciti si trovano in difficoltà o
            hanno bisogno dei capitani con il loro esercito, devono mandare loro
            un messaggio, e i capitani devono allora raggiungerli e aiutarli e
            consigliarli con tutte le forze.
          </li>
          <li>
            Ogni signore deve disporre con i suoi uomini che nessuno, cavaliere
            o scudiero, abbia più di un ragazzo o di un famiglio a cavallo, ma
            che tutti siano uomini atti alle armi e armati, eccetto i principi e
            i conti.
          </li>
          <li>
            Provvedere affinché questo accordo sia proclamato a tutti una, tre o
            quattro volte o quante volte sarà necessario, perché gli si
            obbedisca, ognuno sappia attenervisi e non agisca contro di esso.
          </li>
          <li>
            Ogni signore deve promettere e disporre nel suo esercito che
            ciascuno prometta al proprio capitano con la mano e con la bocca di
            osservare pienamente tutte queste cose e articoli di questo accordo,
            sulla propria fede e onore e sotto pena.
          </li>
          <li>
            Ogni principe, conte, signore, cavaliere e scudiero, e anche ogni
            città, paese e castello, città, mercati, territori, pertinenze e
            strade, in particolare di coloro che partecipano a questa causa
            marciando o prestando aiuto, devono, finché sono lontani da casa,
            essere al sicuro, illesi e lasciati in pace da tutti, di qualunque
            stato, dignità o condizione siano. E se nonostante ciò qualcuno
            subisce un danno, noi altri principi elettori, principi, signori e
            città dobbiamo unanimemente schierarci, aiutare e consigliare contro
            l&apos;autore del danno, uno o più, affinché al danneggiato sia resa
            soddisfazione e risarcimento. E dobbiamo considerare e tenere tali
            aggressori come banditi, e perciò non concedere loro alcuna grazia,
            né dare loro salvacondotto né permettere che sia dato, ma mettere le
            mani sulla loro persona e sui loro beni come su quelli di un uomo
            dannoso e riconosciuto colpevole.
          </li>
          <li>
            Ogni signore, città e anche altri devono in quel tempo mantenere la
            pace e non compiere incursioni.
          </li>
          <li>
            Nessun principe, signore o città deve addurre scuse né sottrarsi
            alla spedizione richiamandosi a un altro, alla sua negligenza o a
            qualsiasi altra cosa; la spedizione deve invece avere pieno
            svolgimento e successo.
          </li>
          <li>
            I signori, con l&apos;aiuto delle città, devono provvedere che,
            quando marceranno, i castelli o le città più vicini nel paese di
            Boemia che sono cristiani siano occupati e presidiati per la guerra
            quotidiana, affinché gli eretici non ricevano alcun sostegno e non
            siano loro forniti né portati rifornimenti.
          </li>
          <li>
            Ogni vescovo deve ordinare a ecclesiastici e laici di servire Dio
            per questa causa in un giorno stabilito della settimana; e chi non
            lo facesse sia severamente punito.
          </li>
          <li>
            Nessun principe o signore deve nel paese di Boemia prendere sotto
            protezione pattuita (?), rappresentare, proteggere o custodire beni,
            mercati, villaggi o territori, né permetterlo ai suoi uomini, né
            cercarvi alcun vantaggio sugli altri nel cibo, nel foraggio o in
            altre cose. Ma se qualcuno trova foraggio o cibo prima degli altri,
            può prenderne quanto gli occorre per quella volta e poi lasciarvi
            accedere anche gli altri.
          </li>
          <li>
            Nessuno deve cavalcare, andare con carri o mandare a prendere
            bestiame per il cibo, se non per ordine del capitano; allora tutti i
            signori devono mandare uomini a tal fine, organizzare la cosa con
            ordine, disporla di comune accordo e dividere tale cibo in parti
            uguali.
          </li>
          <li>
            Se vengono conquistati castelli, città, mercati o fortezze, o se si
            arrendono, se ne disponga secondo il giudizio dei capitani e di
            coloro che sono stati loro assegnati, o della maggioranza di essi, e
            li si volga a buon uso.
          </li>
          <li>
            I prigionieri catturati da chi è sceso in campo con il proprio
            signore a spese, soldo e viveri del signore devono essere consegnati
            e dati a quel signore senza obiezioni. Chi invece, cavaliere,
            scudiero o città, è andato in Boemia a proprie spese, con i propri
            viveri e a proprio rischio e ha catturato prigionieri, può tenerli
            per sé o farne ciò che vuole.
          </li>
          <li>
            Chi fra i signori vuole allontanarsi a cavallo dall&apos;esercito
            non avrà né pace né salvacondotto, a meno che non abbia dai capitani
            [un contrassegno], un attestato o una lettera.
          </li>
          <li>
            Chi commette un reato ed è riconosciuto colpevole, o fugge per
            questo, non avrà salvacondotto nelle terre, città, mercati o
            territori di alcun signore né altrove; anzi, lo si perseguirà
            ovunque secondo la pena sopra scritta.
          </li>
          <li>
            I due signori e arcivescovi di Treviri e di Colonia devono portare
            ciascuno 4 tarasnice, 20 archibugi, ciascuno 10 000 dardi e ciascuno
            200 dardi incendiari, con polvere, pietre e attrezzatura secondo il
            bisogno, e ciascuno tre maestri bombardieri.
          </li>
          <li>
            L&apos;arcivescovo di Magonza 6 cannoni a camera e 30 archibugi, 4
            tarasnice, 10 000 dardi, polvere, pietre e attrezzatura secondo il
            bisogno; inoltre 200 dardi incendiari e tre maestri bombardieri.
          </li>
          <li>
            Il conte palatino del Reno deve portare o mandare altrettanta
            attrezzatura quanto l&apos;arcivescovo di Magonza, e in più una
            grande bombarda che tira una pietra di un quintale e mezzo. Inoltre
            tre maestri bombardieri.
          </li>
          <li>
            Il margravio di Brandeburgo una grande bombarda, 4 tarasnice, 20
            archibugi, 10 000 dardi, 200 dardi incendiari, polvere, pietre e
            altro necessario. Inoltre i suoi maestri bombardieri.
          </li>
          <li>
            I signori di Baviera nella Bassa Terra (?) una bombarda che tira una
            pietra di due quintali, 4 piccole bombarde, 22 archibugi, 10 000
            dardi, 200 dardi incendiari, polvere, pietre e altro necessario.
            Inoltre i loro maestri bombardieri.
          </li>
          <li>
            Il duca Giovanni di Baviera un grande cannone, 4 tarasnice, 20
            archibugi, 10 000 dardi, pietre, polvere e altro necessario e
            attrezzatura a sufficienza. Inoltre i suoi maestri bombardieri.
          </li>
          <li>
            I vescovi di Bamberga e di Würzburg devono portare cannoni piccoli e
            grandi con dardi, polvere e attrezzatura, per quanto possono, e
            ciascuno 4 maestri bombardieri.
          </li>
          <li>
            La città di Norimberga una grande bombarda che tira una pietra di
            due quintali, 6 piccole bombarde, 12 tarasnice, 60 archibugi, 20 000
            dardi, 600 dardi incendiari e inoltre attrezzatura secondo il
            bisogno. Inoltre sei maestri bombardieri.
          </li>
          <li>
            Ratisbona una buona grande bombarda e inoltre piccoli cannoni,
            polvere, attrezzatura ecc. secondo le sue possibilità, e in più i
            suoi maestri bombardieri.
          </li>
          <li>
            Quelli di Eger una bombarda e altri cannoni, polvere, dardi e
            attrezzatura secondo le loro possibilità, con i loro maestri
            bombardieri.
          </li>
          <li>
            Quelli di Elbogen, il burgravio e la città, devono venire con le
            loro forze e portare una grande bombarda e altri cannoni grandi e
            piccoli, polvere, pietre e dardi, attrezzatura secondo le loro
            possibilità, con i loro maestri bombardieri.
          </li>
          <li>
            Inoltre ogni città deve avere cannoni, polvere, pietre e
            attrezzatura secondo le sue possibilità.
          </li>
          <li>
            Se in questo accordo si trovasse qualche mancanza, i capitani della
            spedizione possono correggerla.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
