import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const SchlesischerBeschluss1429 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="silesian-resolution-1429" />
        <h4>
          Schlesischer Beschluss über die Aufstellung der Wagen vom Mai 1429
          {draft && <DraftBadge />}
        </h4>
        <p>Arbeitsübersetzung, noch nicht fachlich geprüft.</p>
        <p>
          Nach Toman vereinbarte König Sigmund mit den schlesischen Fürsten eine
          Ordnung für die Aufstellung der Wagen und ließ sie in deutscher
          Übersetzung an die Fürsten und Städte des Reiches versenden. Erhalten
          ist sie als Beilage eines Schreibens vom 23.&nbsp;Mai 1429, in dem Ulm
          Nördlingen über die Zusammenkunft der Städte mit den königlichen Räten
          am 8.&nbsp;Mai in Ehingen berichtete, bei der die Städte die Ordnung
          erhielten.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:e4297c33-ec66-4340-8470-3edba8f333cb"
          />{' '}
          Im Ulmer Schreiben heißt die Ordnung{' '}
          <Cit>
            anschlag und ordnung der wagenburgen, als die denne unser herre der
            küng und och die herren uß der Schlesien hand
          </Cit>
          . Die Ordnung selbst ist undatiert, die Edition der{' '}
          <i>Deutschen Reichstagsakten</i> setzt sie daher nur vor den
          23.&nbsp;Mai 1429.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=329"
          />{' '}
          Von der Einteilung des Volkes nach Zehnern, Hunderten und Tausenden
          (Art.&nbsp;12) schrieben nach derselben Edition schon die Breslauer
          Gesandten am 18.&nbsp;April aus Pressburg an ihre Stadt.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=330"
          />
        </p>
        <p>
          Toman hält diese Ordnung für den schlagendsten Beweis dafür, dass die
          deutschen Wagenordnungen auf tschechischen Quellen beruhen. Sie
          enthält nämlich Wörter, die die deutschen Schreiber nicht verstanden.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:e4297c33-ec66-4340-8470-3edba8f333cb"
          />{' '}
          <Cit>Fassonswise</Cit> deutet er als tschechisch „ve způsobu fasuňku“
          (nach Art eines <i>fasuněk</i>), <Cit>gethariast</Cit> als tschechisch{' '}
          <i>zatarasený</i> (verbarrikadiert) und das unverständliche{' '}
          <Cit>sels</Cit> als Schreibfehler für <Cit>felde</Cit>, also „vom
          Felde her“, das heißt an der Außenseite der Wagenburg.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:862e7cdb-74ed-4129-8a6d-5d37bad30b81"
          />
        </p>
        <p>
          Toman druckte die Ordnung in normalisierter Schreibung und nummerierte
          die Artikel selbst. In eckigen Klammern fügte er die Lesarten und
          Zusätze einer zweiten, bei Windecke überlieferten Abschrift hinzu.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:510b0e1c-c8a8-4287-8850-64220be509e7"
          />{' '}
          Die Edition der <i>Deutschen Reichstagsakten</i> beruht auf der
          Abschrift in den Nördlinger Akten des Schwäbischen Städtebundes. Im
          Vergleich mit ihr hat Toman die Artikel 14 und 15 vertauscht und liest
          in Artikel 17 <Cit>dem volke</Cit> statt <Cit>dem folge</Cit>.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=330"
          />
        </p>
        <p>
          Anmerkungen zur Übersetzung: Nach Toman gehören zu einem Wagen
          insgesamt 18 Mann: sechs Armbrustschützen, zwei Büchsenschützen, vier
          Mann mit Hakenspießen (<Cit>haken</Cit>), vier Flegler und zwei
          Fuhrleute; Windeckes Lesart 48 passt dazu nicht.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:510b0e1c-c8a8-4287-8850-64220be509e7"
          />{' '}
          Die Edition der <i>Deutschen Reichstagsakten</i> erklärt{' '}
          <Cit>kilhoven</Cit> als eiserne, keilförmig zugespitzte Hacke zum
          Loshauen des mürben Gesteins, <Cit>in fassonswise</Cit> als Wagen, auf
          den man viel aufladen kann, <Cit>gethariast</Cit> als
          „verbarrikadiert“, und anders als Toman denkt sie bei <Cit>sels</Cit>{' '}
          an Seil oder Riemen. <Cit>Howfnicze</Cit> ist nach der Edition die
          tschechische <i>houfnice</i> (Haubitze), <Cit>huldung</Cit> (in der
          Edition <Cit>huldnung</Cit>) bedeutet wohl das Verhältnis eines Holden
          oder Dienstmannes.
          <Qt
            publication={PUBLICATIONS.DRA9}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=330"
          />{' '}
          Unsichere Stellen: <Cit>hacken</Cit> kann Äxte wie Hacken bedeuten;
          Windeckes <Cit>eine messung wit</Cit> in Artikel 4 bleibt unübersetzt;
          in Artikel 6 ist das Wort „Wagen“ eine Deutung; der Sinn von Artikel
          13 und vom Ende des Artikels 12 (<Cit>uf den andern sehe</Cit>) ist
          unsicher. Das Wort <Cit>(klötz)</Cit> in Artikel 1 steht nicht in der
          Edition der <i>Deutschen Reichstagsakten</i>.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <ol>
          <li>
            Item zu einem stritwagen söllen gehören sechs schutzen, und zu
            jetlichem armbrost vier schock pfile, zween mann mit handbuchsen, zu
            jeglicher vier schock kugelin (klötz) und pulvers gnüg; vier mann
            mit haken, vier mann mit drischeln, zwo hacken, zwo schufeln, zwo
            kilhoven oder grabschit [schufeln].
          </li>
          <li>
            Item zu jetlichem [wagen] vier stark hengst, welcher aber nit
            starker pferd [hengest] hant, der nehm sünst sechs; dass doch
            jeglicher wagen zween fürmann habe [wohl] gewappent.
          </li>
          <li>
            Item die schufeln, grabschit und hacken dörfen nit [hon] sunder
            lüte, sunder wird man ihr dörfen, so nimmt man sie [wohl] aus dem
            hufen, da lut genug sin werden. Summa zu einem wagen 18 [48] person,
            die sich von dem wagen nit sullen scheiden, es si denne mit des
            hauptmanns geheiss [und auch sine willen].
          </li>
          <li>
            Item sölicher starker wagen soll sin in fassonswise [eine messung
            wit] mit hohen leitern, gethariast von dem sels [felde] zwischen den
            leitern und under den leitern mit [guten] hangenden brettern an
            starken widen oder ketten.
          </li>
          <li>
            Item zu jetlichem wagen sullen ketten sein, dieselben zu binden, ob
            es sin not wird [not sin wurde.]
          </li>
          <li>
            Item allwegen zu fünf soll sein ein steinbuchs genannt howfnicze,
            und zu jetlicher ein schock stein zum mindsten und pulvers gnüg; und
            zu denselben [derselben] buchsen und ihren steinen muss man einen
            besunder wagen hon.
          </li>
          <li>
            Item man muss och uf denselben wagen kein spis legen, sunder ein
            statt darauf lassen, darin man [der lut] wurfstein leget.
          </li>
          <li>
            Item was übriger lut seind über befehlung der wägen [die bestellung
            der wagen], die sullen alle ihr wehre [gewehre] haben und thun nach
            geheiss des hoptmanns.
          </li>
          <li>
            Item viel sache und befehlung [bestellung] mag man darzu thun, die
            da nit zu schriben, sunder nach gelegenheit der lute und ordnung
            uszerichten sind, als man denne für ögen sehen wird [also man das
            fur ougen sehen].
          </li>
          <li>
            Item ehe man zu felde uszucht, dass danne alle obgeschrieben stucke
            bereit seiend.
          </li>
          <li>
            Item zu allen obgeschrieben sachen sullen lute auserkorn sein, die
            alle ding besehent und ordnent, dass das vollkumelich zugehe.
          </li>
          <li>
            Item es soll unter dem volk eine söliche ordnung sein, dass je zehn
            mann einen hoptmann haben, und hundert einen, und tusend einen, und
            also immer mehr für sich bis uf den obersten hoptmann, als man der
            lute genügig haben wird, die söliche sache und schickung wohl ordnen
            können, und dass je ein hoptmann uf den andern sehe, als denn [dann]
            ein gewohnheit ist.
          </li>
          <li>Item man soll underston, dass alle huldung obsi.</li>
          <li>Item dass jedermann uf si mit seim selbs libe.</li>
          <li>
            Item wer aber von alter und krankheit selber nit geziehen möcht, der
            möcht einen andern an sein statt bestellen.
          </li>
          <li>
            Item wer sich in den obgeschrieben sachen ungehorsam finden liesse,
            zu des lieb und gut man grifen soll, als zu einem zuleger und helfer
            der ketzer, ohn all gefährde.
          </li>
          <li>
            Item dass reisige pferit [dass man reisig volk] zu ross ufbringen
            soll, so man meist mag, und dass man dem volke [fussvolk] och
            gereisig lüte in die wagenburg zuschicken sülle.
          </li>
          <li>
            Item och süllen die fürsten, herren und städt gross und kleine
            buchsen und anderen gezüge mit ihn bringen, so sie meist mügen.
            <Qt
              publication={PUBLICATIONS.TOMAN}
              href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:510b0e1c-c8a8-4287-8850-64220be509e7"
            />
            <Qt
              publication={PUBLICATIONS.DRA9}
              href="https://www.digitale-sammlungen.de/de/view/bsb11833357?page=329"
            />
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <ol>
          <li>
            Zu einem Streitwagen sollen sechs Schützen gehören und zu jeder
            Armbrust vier Schock Bolzen, zwei Mann mit Handbüchsen, zu jeder
            vier Schock Kugeln (Klötze) und genug Pulver; vier Mann mit Haken,
            vier Mann mit Dreschflegeln, zwei Äxte, zwei Schaufeln, zwei
            Keilhauen oder Grabscheite [Schaufeln].
          </li>
          <li>
            Zu jedem [Wagen] vier starke Hengste; wer aber keine starken Pferde
            [Hengste] hat, der nehme stattdessen sechs; und jeder Wagen soll
            zwei [gut] bewaffnete Fuhrleute haben.
          </li>
          <li>
            Für die Schaufeln, Grabscheite und Äxte braucht man keine besonderen
            Leute [zu haben]; braucht man sie aber, so nimmt man sie [wohl] aus
            dem Haufen, wo Leute genug sein werden. Insgesamt 18 [48] Personen
            zu einem Wagen, die sich nicht vom Wagen entfernen sollen, es sei
            denn auf Geheiß des Hauptmanns [und auch mit seinem Willen].
          </li>
          <li>
            Ein solcher starker Wagen soll nach Art eines <i>fasuněk</i> [eine
            messung wit] sein, mit hohen Leitern, vom Felde her zwischen den
            Leitern und unter den Leitern mit [guten] hängenden Brettern an
            starken Weiden oder Ketten verbarrikadiert.
          </li>
          <li>
            Zu jedem Wagen sollen Ketten gehören, um die Wagen zu verbinden,
            wenn es nötig wird.
          </li>
          <li>
            Auf je fünf (Wagen) soll eine Steinbüchse, genannt Haubitze, kommen,
            und zu jeder mindestens ein Schock Steine und genug Pulver; und für
            diese Büchsen und ihre Steine muss man einen besonderen Wagen haben.
          </li>
          <li>
            Auf diese Wagen darf man auch keine Speise laden, sondern soll eine
            Stelle darauf freilassen, wo man [die Leute] Wurfsteine hinlegt.
          </li>
          <li>
            Die Leute, die über die Besetzung der Wagen hinaus übrig sind,
            sollen alle ihre Waffen haben und nach dem Geheiß des Hauptmanns
            handeln.
          </li>
          <li>
            Viele Dinge und Anordnungen kann man noch hinzufügen, die sich nicht
            aufschreiben lassen, sondern nach den Umständen der Leute und der
            Ordnung einzurichten sind, wie man es dann vor Augen sehen wird.
          </li>
          <li>
            Bevor man ins Feld auszieht, sollen alle oben geschriebenen Stücke
            bereit sein.
          </li>
          <li>
            Für alle oben geschriebenen Dinge sollen Leute ausgewählt werden,
            die alles besichtigen und anordnen, damit es vollständig geschieht.
          </li>
          <li>
            Unter dem Volk soll eine solche Ordnung sein, dass je zehn Mann
            einen Hauptmann haben, und hundert einen, und tausend einen, und so
            immer weiter hinauf bis zum obersten Hauptmann, soweit man genug
            Leute hat, die solche Sachen und Anordnungen gut einrichten können;
            und dass je ein Hauptmann auf den anderen achte, wie es üblich ist.
          </li>
          <li>
            Man soll danach trachten, dass alle Holdschaftsverhältnisse ruhen
            (?).
          </li>
          <li>Dass jedermann persönlich ausziehe.</li>
          <li>
            Wer aber wegen Alter und Krankheit nicht selbst ziehen kann, der
            möge einen anderen an seiner Stelle bestellen.
          </li>
          <li>
            Wer sich in den oben geschriebenen Dingen ungehorsam zeigt, an
            dessen Leib und Gut soll man greifen wie an einen Anhänger und
            Helfer der Ketzer, ohne alle Arglist.
          </li>
          <li>
            Dass man so viele berittene Pferde [so viel berittenes Volk] wie
            möglich aufbringe und dass man dem Volk [Fußvolk] auch berittene
            Leute in die Wagenburg schicke.
          </li>
          <li>
            Auch sollen die Fürsten, Herren und Städte große und kleine Büchsen
            und anderes Gerät mitbringen, so viel sie nur können.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
