import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const VegetiusUeberDieWagenburgCgm356 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="vegetius-ueber-die-wagenburg-cgm-356" />
        <h4>
          Vegetius über die Wagenburg aus der Handschrift Cgm 356, Ende des 15.
          Jahrhunderts
          {draft && <DraftBadge />}
        </h4>
        <p>
          Arbeitstranskription und -übersetzung, noch nicht fachlich geprüft.
        </p>
        <p>
          Der Text steht in der Handschrift Cgm 356 der Bayerischen
          Staatsbibliothek in München, einem anonymen Feuerwerks- und
          Büchsenmeisterbuch. Die ganze Handschrift schrieb eine Hand in
          bairischer Mundart mit einigen ostschwäbischen Anklängen; ihre
          Herkunft ist unbekannt, und die Wasserzeichen des Papiers weisen in
          das letzte Jahrzehnt des 15. Jahrhunderts.
          <Qt
            publication={PUBLICATIONS.SCHNEIDER1973}
            href="https://handschriftenportal.de/search?hspobjectid=HSP-ab1f2e94-505c-3efe-ae59-e996710ab174"
            note="S. 46–47"
          />{' '}
          Der Katalog führt den Text als <i>Wagenburgordnung</i>.
          <Qt
            publication={PUBLICATIONS.SCHNEIDER1973}
            href="https://handschriftenportal.de/search?hspobjectid=HSP-ab1f2e94-505c-3efe-ae59-e996710ab174"
            note="S. 48"
          />{' '}
          Tatsächlich beruht er auf den Kapiteln 22–25 und 27 des ersten Buches
          der <i>Epitoma rei militaris</i> des Vegetius in der deutschen
          Übersetzung Ludwig Hohenwangs, wie sie aus dem Augsburger Druck von
          etwa 1475 bekannt ist. Hohenwang gibt in diesen Kapiteln das römische
          Heerlager als <i>wagenburg</i> wieder; deshalb ist im Text von den
          Toren <i>praetoria</i> und <i>decumana</i>, von Kohorten und Zenturien
          die Rede.
          <Qt
            publication={PUBLICATIONS.HOHENWANG}
            href="https://www.digitale-sammlungen.de/de/view/bsb00038208?page=40"
          />{' '}
          Der Schreiber der Handschrift hat Hohenwangs Text stellenweise gekürzt
          und verändert und an das Ende des Kapitels über die Befestigung der
          Wagenburg einen Zusatz angefügt, der im Druck fehlt. Neben Hauen und
          Schaufeln verlangt er Beile, Flegel, Sensen und Sicheln und für jeden
          Wagen in der Wagenburg einen 24 Schuh langen Spieß mit Haken, einen
          böhmischen Drischel mit eisernen Zinken und zwei Hakenbüchsenschützen.
          <Qt
            publication={PUBLICATIONS.HOHENWANG}
            href="https://www.digitale-sammlungen.de/de/view/bsb00038208?page=41"
          />
          <Qt
            publication={PUBLICATIONS.CGM356}
            href="https://www.digitale-sammlungen.de/de/view/bsb00135889?page=195"
            note="S. 192"
          />{' '}
          Würdinger hat den Inhalt dieser Seiten als Auszug aus einem
          Feuerwerksbuch vom Ende des 15. Jahrhunderts in neuerem Deutsch
          wiedergegeben.
          <Qt
            publication={PUBLICATIONS.WURDINGER2}
            href="https://www.digitale-sammlungen.de/de/view/bsb11684126?page=407"
          />
        </p>
        <p>
          Hinweise zu Transkription und Übersetzung: Abkürzungen sind aufgelöst,
          die Schreibung der Handschrift ist beibehalten, <i>u</i> mit
          übergesetztem Zeichen wird als <i>ü</i> wiedergegeben. Zweifelhafte
          Lesungen wurden am Druck Hohenwangs überprüft.
          <br />
          <Cit>Ritter</Cit> entspricht hier wie bei Hohenwang dem lateinischen{' '}
          <i>miles</i> und wird mit <Cit>Soldaten</Cit> übersetzt. Beim Graben
          bedeutet <Cit>hoch</Cit> die Tiefe; <Cit>spitz</Cit> ist die
          Schlachtreihe, <Cit>auffbietter</Cit> der Ausrufer (Hohenwang:{' '}
          <i>büttel</i>), <Cit>getüll stecken</Cit> sind Palisadenpfähle und{' '}
          <Cit>beichel</Cit> Beile.
          <br />
          Das als <i>x</i> gelesene Zahlzeichen hat im Kapitel über die
          Befestigung an fünf Stellen dieselbe Form. Hohenwangs Druck nennt für
          den rechten Graben eine Breite von 12 und eine Tiefe von 9 Schuh und
          nach dem Aufschütten der Erde eine Tiefe von 13 und eine Breite von 12
          Schuh. Den ersten Graben gibt er mit 9 Schuh Breite und 7 Schuh Tiefe
          an, die Handschrift mit 7 oder 8 und 6 Schuh. Würdinger las in der
          Handschrift 10 Fuß. Bei den zehntausend Schritten stimmt die
          Handschrift mit dem Druck überein.
          <Qt
            publication={PUBLICATIONS.HOHENWANG}
            href="https://www.digitale-sammlungen.de/de/view/bsb00038208?page=43"
          />
          <br />
          Die Wendung <Cit>an die wege</Cit> im Kapitel über die Befestigung hat
          im Druck keine Entsprechung, ihr Sinn ist unsicher.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <h5>Aber von der wagenpurg</h5>
        <p>
          Aber die wagenpurg voran, so die feind nahet sein, süllen an einer
          sichern stat gemacht werden, besunder do holtz genüg und futer genüg
          ist und auch wassers genüg ist. Und ob lenger do zu bleyben sey, so
          sol erwelt werden gesuntheit der stat. Es ist zu hütten, das kein
          nahender perg sey bey der wagenpurg, also daz die feind den perg nit
          ein nemen und in belegern. Auch daz das feld mit guss wasser nit gewon
          sey zu überwessern, von welhem das heer ungemach leyden müst. Auch
          nach der zal reitter und knecht und auch des zeugs, so zu inne gehört
          sein, die wagenpurg zu bewaren, nit daz die mengin des folcks
          bezwungen werd in ein engin oder die wenig in ein weittin mer dan not
          ist sich auss zu brayten etc.
          <Qt
            publication={PUBLICATIONS.CGM356}
            href="https://www.digitale-sammlungen.de/de/view/bsb00135889?page=193"
            note="S. 190"
          />
        </p>
        <h5>Von der wagenpurg</h5>
        <p>
          Unter weile gefiert wagenpurg, zu zeitten dreyeket und zu zeitten halb
          sinwel, dar nach die statt oder notturfft haischet, sein die wagenpurg
          zu machen. Aber daz tor, daz man heist pretoriam, sol eintweders gegen
          der sunne auffgang stan oder gegen der stat, do man dan die feind
          sicht. Ist aber sach, das man im zug ist, so sol es an den tail sehen,
          da hin dan der zeug ziehen wil, auff welhem sy dan die erste cohortes,
          daz ist der erst hauff, gezelt, paner und zaichen geordnet. Aber die
          port, die man heist decumanam, die ist nach der port, die dan pretoria
          heist, und ist die port, durch welche die straff wirdige ritter zu der
          pen gefürt werden etc.
          <Qt
            publication={PUBLICATIONS.CGM356}
            href="https://www.digitale-sammlungen.de/de/view/bsb00135889?page=194"
            note="S. 191"
          />
        </p>
        <h5>Wie man die wagenpurg beware sol</h5>
        <p>
          Der wagenpurg bewarung ist mangerlay, aber besunder dreyerlei. Wan ist
          das grosse nott nit bezwingt, so sol man die wagenpurg mit wasen umb
          machen oder mit ertreich, und auss dem wirt gemacht gleich als ein
          maur dreyer schüch hoch, also das vornen an ein grab wirt und das
          ertreich hin ein an die wege geworffen von dem, so die wasen hin dan
          genomen sind. Wirt dar nach ein grab siben oder acht schüch brayt und
          wirt sechs schüch hoch. Aber da man die feind am meisten besorgt, so
          sol der recht grab der wagenpurg bewart werden, also das er x schüch
          brayt sey und x schüch hoch nach der linien, als man dan spricht, x
          schüch. Auch auff die graben der wagenpurg sol man gut zeün machen,
          und das ertreich, das dan hin und her auss graben wirt, sol man zu
          samen tragen. Das selb ertreich bringt in die höch des grabes fier
          schüch. Also wirt der grab x schüch hoch und x schüch brayt, zu
          welchem man haben müss getüll stecken von starcken holtz, die dan die
          trabanten oder fuss knecht gewon sein zu tragen, dar zu hawen und
          schauffel und auch gute beichel, gut flegel, sensen und sichel genüg.
          Item auff yettlichem wagen, der dan an der wagenpurg stet, ein langen
          spiess, der xxiiij schüch lang sey und forne ein scharpffs eysen, daz
          gut stechen sey, und ein hacken an dem eysen, und ein Behemische
          dryschel mit eysnen zencken, und auch auff yettlichem wagen zwen haken
          büchsen schützen mit irem zeug, wan es mag gesein etc.
          <Qt
            publication={PUBLICATIONS.CGM356}
            href="https://www.digitale-sammlungen.de/de/view/bsb00135889?page=195"
            note="S. 192"
          />
        </p>
        <h5>Wie man die wagenpurg beware sol so der feind nahet ist</h5>
        <p>
          Wan sölichs gering ist, wa nit feind sein, die wagenpurg zu bewaren.
          So aber der feind zu statt, so sol der ganz gereisig zeug und der halb
          tayl der fuss knecht ab zu treiben den einbruch an eine spitz geordnet
          werden, und die andern nach in graben machen und die wagenpurg
          bewaren. Und durch den auffbietter gezaigt werden, welche erste
          centuria, welche andre, welche dritte ein yettlichs werck vol bracht
          hab. Dar nach wirt von den centuriones geheissen daz beschawet und
          gemessen, und die sölichs mit sawmnuss getan haben, werdent gestrafft.
          Dar umb zu solicher gewonheit ist zu ordnen der new ritter, wan
          sölichs not aischet, das die wagenpurg on irrung und behend mügen
          bewart und versehen werden etc.
        </p>
        <h5>Von römischer bewarung reitter und fuss knecht</h5>
        <p>
          Darumb ist alte gewonheit beliben, und durch die auffsetzung Augusti
          und auch Adriani wirt gepoten, das zu dreyen maln in dem monet die
          reitter und auch die fuss knecht spacieren gefürt würden, wan mit dem
          wort wirt sölichs übung bedeut. Also die fuss knecht wurden geheissen
          zu gen und wider keren in die wagenpurg geharnascht und gerüst mit
          allerlay wer x tausent schritt, also das sy ein tail des wegs mit
          lauffen vol prachten. Auch die reitter getaylt in turmas und
          geharnascht vol brachten so vil wegs, also daz sy nach reyttlicher
          ordnung zu zeitten nach volgten und zu zeitten wichen und mit wider
          lauff gleich mit einer ungestiem wider umb kerten. Aber nit alain in
          dem feld, sunder auch in tellern und hohen stetten auff und ab zu
          steigen wart yettweder spitz bezwungen, dar um daz kein sach beschehen
          möcht, das dann streng vest ritter mit steter übung vor nit hettend
          erlernet etc.
          <Qt
            publication={PUBLICATIONS.CGM356}
            href="https://www.digitale-sammlungen.de/de/view/bsb00135889?page=196"
            note="S. 193"
          />
        </p>
      </Col>
      <Col md={6}>
        <h5>Weiter von der Wagenburg</h5>
        <p>
          Die Wagenburg soll vor allem dann, wenn die Feinde nahen, an einem
          sicheren Ort angelegt werden, besonders dort, wo genug Holz, genug
          Futter und auch genug Wasser ist. Und wenn man länger dort bleiben
          soll, soll ein gesunder Ort gewählt werden. Man muss sich hüten, dass
          kein naher Berg bei der Wagenburg ist, damit die Feinde den Berg nicht
          einnehmen und sie belagern. Auch dass das Feld nicht von Sturzwasser
          überschwemmt zu werden pflegt, wodurch das Heer Ungemach leiden
          müsste. Auch soll die Wagenburg nach der Zahl der Reiter und Knechte
          und des zu ihnen gehörigen Trosses befestigt werden, damit nicht die
          Menge des Volkes in einen engen Raum gezwängt werde oder die Wenigen
          sich in einem weiten Raum mehr als nötig ausbreiten usw.
        </p>
        <h5>Von der Wagenburg</h5>
        <p>
          Die Wagenburgen werden bald viereckig, bald dreieckig und bald
          halbrund angelegt, je nachdem es der Ort oder die Notwendigkeit
          erfordert. Das Tor aber, das man <i>praetoria</i> nennt, soll entweder
          gegen Sonnenaufgang stehen oder gegen den Ort, von dem aus man die
          Feinde sieht. Ist man aber auf dem Zug, so soll es nach der Seite
          sehen, wohin das Heer ziehen will, und dahinter werden die ersten
          Kohorten, das ist der erste Haufen, die Zelte, Banner und Feldzeichen
          aufgestellt. Das Tor aber, das man <i>decumana</i> nennt, liegt hinter
          dem Tor, das <i>praetoria</i> heißt, und ist das Tor, durch das die
          straffälligen Soldaten zur Strafe geführt werden usw.
        </p>
        <h5>Wie man die Wagenburg befestigen soll</h5>
        <p>
          Die Befestigung der Wagenburg ist mancherlei, besonders aber
          dreierlei. Wenn keine große Not drängt, soll man die Wagenburg mit
          Rasen oder mit Erde umgeben, und daraus wird gleichsam eine Mauer von
          drei Schuh Höhe gemacht, so dass vorne ein Graben entsteht und die
          Erde nach innen (?) geworfen wird von dort, wo die Rasen weggenommen
          wurden. Danach wird ein Graben von sieben oder acht Schuh Breite und
          sechs Schuh Tiefe gemacht. Wo man aber die Feinde am meisten
          befürchtet, soll die Wagenburg mit dem rechten Graben befestigt
          werden, so dass er x Schuh breit und x Schuh tief ist, nach der Linie,
          wie man sagt, x Schuh. Auch soll man auf den Gräben der Wagenburg gute
          Zäune machen und die Erde, die hin und her aus dem Graben ausgehoben
          wird, zusammentragen; diese Erde bringt die Höhe des Grabens um vier
          Schuh. So wird der Graben x Schuh tief und x Schuh breit. Dazu muss
          man Palisadenpfähle aus starkem Holz haben, die die Trabanten oder
          Fußknechte zu tragen gewohnt sind, dazu Hauen und Schaufeln und auch
          gute Beile, gute Flegel, Sensen und Sicheln genug. Ferner auf jedem
          Wagen, der in der Wagenburg steht, einen langen Spieß, der 24 Schuh
          lang sein soll, vorne mit einem scharfen Eisen, das gut zum Stechen
          ist, und einem Haken an dem Eisen, und einen böhmischen Drischel mit
          eisernen Zinken, und auch auf jedem Wagen zwei Hakenbüchsenschützen
          mit ihrem Zeug, wenn es sein kann usw.
        </p>
        <h5>Wie man die Wagenburg befestigen soll, wenn der Feind naht</h5>
        <p>
          Die Wagenburg zu befestigen ist leicht, wo keine Feinde sind. Ist aber
          der Feind zur Stelle, so soll die ganze Reiterei und die Hälfte der
          Fußknechte in Schlachtordnung aufgestellt werden, um den Angriff
          abzuwehren, und die anderen sollen hinter ihnen Gräben ziehen und die
          Wagenburg befestigen. Und durch den Ausrufer soll bekanntgegeben
          werden, welche Zenturie als erste, welche als zweite und welche als
          dritte ihre Arbeit vollendet hat. Danach lassen die Zenturionen alles
          besichtigen und vermessen, und die, die es säumig getan haben, werden
          bestraft. Darum sind die neuen Soldaten zu solcher Gewohnheit
          anzuhalten, damit die Wagenburg, wenn es die Not erfordert, ohne
          Verwirrung und rasch befestigt und versehen werden kann usw.
        </p>
        <h5>Von der römischen Übung der Reiter und Fußknechte</h5>
        <p>
          Darum ist die alte Gewohnheit geblieben, und durch die Verordnung des
          Augustus und auch des Hadrian wird geboten, dass dreimal im Monat die
          Reiter und auch die Fußknechte zum Spazieren geführt werden, denn mit
          diesem Wort wird eine solche Übung bezeichnet. Die Fußknechte mussten
          nämlich geharnischt und mit allerlei Waffen gerüstet zehntausend
          Schritte gehen und in die Wagenburg zurückkehren, so dass sie einen
          Teil des Weges im Lauf zurücklegten. Auch die Reiter, in turmae
          geteilt und geharnischt, legten ebenso viel Weg zurück, und zwar so,
          dass sie nach reiterlicher Ordnung bald nachsetzten, bald wichen und
          dann mit einem ungestümen Gegenlauf wieder umkehrten. Und nicht nur im
          Feld, sondern auch in Tälern und an hohen Orten wurde jede
          Schlachtreihe gezwungen, auf- und abzusteigen, damit nichts geschehen
          könnte, was tapfere, feste Soldaten nicht zuvor durch stete Übung
          erlernt hätten usw.
        </p>
      </Col>
    </Row>
  </>
)
