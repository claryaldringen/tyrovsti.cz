import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const EinungZuGrottkau = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="einung-zu-grottkau" />
        <h4>
          Einung der schlesischen Fürsten, Mannen und Städte zu Grottkau (1421
          oder 1427)
          {draft && <DraftBadge />}
        </h4>
        <p>Arbeitsübersetzung, noch nicht fachlich geprüft.</p>
        <p>
          Die Einung gegen die Hussiten schlossen die schlesischen Fürsten
          zusammen mit den Landen und Städten Breslau und Schweidnitz-Jauer. Sie
          regelt die Besetzung der Grenzburgen mit Reiterei, das gemeinsame
          Vorgehen bei einem Einfall in Schlesien, die Ausrüstung der Wagen und
          die Verteilung der Büchsen und zählt schließlich auf, was auf die
          Heerfahrt mitzunehmen ist. Die Urkunde trägt keine Jahreszahl, sie ist
          nur <Cit>am Donnerstag in der Quatemberwoche vor Michaelis</Cit>{' '}
          datiert. Palacký druckte sie nach Grünhagens Edition zum
          18.&nbsp;September 1421 ab.
          <Qt
            publication={PUBLICATIONS.PALACKY_UB1}
            href="https://archive.org/details/urkundlichebeitr01pala/page/149/mode/1up"
          />{' '}
          Grünhagen verbindet sie mit dem Fürstentag zu Grottkau an diesem Tag
          und betont ihren ausgesprochen defensiven Charakter.
          <Qt
            publication={PUBLICATIONS.GRUNHAGEN1872}
            href="https://archive.org/details/bub_gb_s0kJAAAAQAAJ/page/n69/mode/1up"
          />{' '}
          Toman meint dagegen, die Urkunde gehöre in eine spätere Zeit,
          vielleicht in das Jahr 1427. Er hält sie eher für eine ausführlichere
          Ausgestaltung des Bundes derselben Fürstentümer vom 14.&nbsp;Februar
          1427, und eine so große Zahl von Büchsen erscheint ihm für 1421 ganz
          unwahrscheinlich.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:175a8bf2-68d6-4f59-b376-5f0d3fe627ee"
          />
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:85a1bfc6-5719-4321-af1f-69d710256207"
          />
        </p>
        <p>
          Übersetzungshinweise: Unklare Wörter deute ich nach Grünhagens
          Nacherzählung der Urkunde.
          <Qt
            publication={PUBLICATIONS.GRUNHAGEN1872}
            href="https://archive.org/details/bub_gb_s0kJAAAAQAAJ/page/n70/mode/1up"
          />{' '}
          Die <Cit>landzocht</Cit> ist nach ihm eine Kette zur Verbindung der
          beiden Wagenhälften, <Cit>czoë</Cit> sind Gabeln und{' '}
          <Cit>pisschullen</Cit> Handfeuerwaffen. <Cit>Tarrasssteinbüchsen</Cit>{' '}
          erklärt er als Geschütze zum Auflegen im Gegensatz zu den
          Handfeuerwaffen. Auch die Bestimmung der Fürsten übernehme ich von
          Grünhagen: Herzog Kaske ist Kasimir von Auschwitz, Bernhard ist
          Bernhard von Falkenberg und Przemek ist Primko von Troppau.
          <Qt
            publication={PUBLICATIONS.GRUNHAGEN1872}
            href="https://archive.org/details/bub_gb_s0kJAAAAQAAJ/page/n69/mode/1up"
          />{' '}
          Die Wörter <Cit>kriptücher</Cit>, <Cit>lythische schilde</Cit>,{' '}
          <Cit>poffeysen</Cit> und <Cit>fusseysen</Cit> lasse ich unübersetzt.
          Grünhagen gibt sie nur in neuerer Schreibung wieder (
          <i>Halstragseln, lüttische Schilde (?), Puffeisen, Fußeisen</i>), ihre
          Bedeutung ist unsicher.
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <p>Einigung mann vnd stete vnd der fürsten in der Slesia.</p>
        <p>
          Off den tag zue Grottkaw haben sich die fürsten und lande u. stete
          Breslaw Swednitz u. Jawer sich eyntrechtiglich geeynet u. beslossen
          wider die kätzer in Behem, also hienoch stehet geschreben:
        </p>
        <p>
          Zum irsten die festen an den grentzen vff eine landwer zu besetzen,
          also: Item hertzog Johannes von Monsterberg u. land u. stete Breslaw,
          Swidnitz und Jawer sullen 230 pferde legen uff das Smedewerg
          (Schmiedeberg), off den Schetzler (Schatzler), vf Swartzenwalde
          (Schwarzwaldau) u. vf Conradswalde (bei Grüssau). Item der bischof 70
          pferde. Hertz. Ruprecht von Löbin vnd Ludwig sein bruder 35 pferdt, h.
          Ludwig vom Brige 60 pferdt und h. Conrad Canthner 60 pferdt sullen sie
          kein Brawnaw legen. Item so sullen die von Ratibor Jegerdorff selbir
          mit 50 pferden besetzen. Item h. Bolcke von Teschen 30 pf. und der
          junge h. Bolco 25 pf. in die Ostra legen. H. Bernhard mit 30 pf., h.
          Kaske mit 20 pf., und der weisse h. Conrad mit 20 pf. sollen h.
          Przemken helfen, wo her der helfe am notlichsten dann wird bedürfen,
          uff 1/4 jar. Item zu welchen vnder den besatzten slossen die ketzer
          zuziehen würden, den sullen die andern von den besatzten slossen zur
          hulffe kommen. Item ap sie swach weren vnd den fürsten hinder sich
          schreiben wörden, so hat iglich furste vff sein mit gantzer macht, die
          her vor jugent vnd von alder vffbrengen mag, ein feld wieder die
          ketzer zu machen, dass sullen auch thun mann vnd stete. Item dozu sol
          iglich furste in das schicken, das is an im nicht dorffe gebrechen,
          nach des bundes lawt und auch land vnd stete.
        </p>
        <p>
          Item ap es sich geburte, welch furste odir land adir stad seine macht
          dem andern entzihn vnd den bund brechen welde, den wellen die andern
          vorclagen vor dem bobiste, vor dem cardinal vnd vor dem römischen
          konige, vnd werde zurathe, wie sie es an jm gehaben konnen, en zu
          holffen vnd den bunden in seinen würden zu halden.
        </p>
        <p>
          Item ap die kätzer in die Slesie zien werden, so sal iglich furste
          land vnd stete, die im lande sein, mit gantzer macht vff sein, sam
          jederman gesessin ist, vnd en enkegen zien, ein feld zu machen, beide
          aus landen vnd steten etc. Item iglich furste sal bestellen in seinen
          landen vnd steten, das 10 gebawer einen waijn haben mit irer were vnd
          speise vff drei monden. Nemlich itzlich waijn sol haben eine kethe,
          die man nennt eine landzocht, zwey brethe, zwey grabescheit, eine
          schauffel, zwu czoë, eine haue adir zwu. Vnd itzlicher sal seine beste
          were mit jm nemen, also spisse, armbroste vnd suste so er beste mag.
          Das sullen auch tun die obgenante lande vnd stete. Item itzlicher
          furste sal seine stete heissen mete nemen weren so sie beste mögen vnd
          ouch die lannt. Item itzlich furste sal mit jm nemen bochsen, nachdeme
          also es im ist angeslagen. Item die Sweidnitzer land vnd stete sullen
          mit jn nemen eine grosse bochse, 15 tarrasssteinbüchsen vnd 100
          pisschullen. Item die andern fursten vnd land vnd stete werden och
          mete nemen iglicher nach seinem anslage. Summa summarum der bochsen,
          20 grosse bochsen, domete man mawren fellen mag, 300
          tarrasssteinbüchsen, 2000 pisschullen.
        </p>
        <p>
          Ussrichtung vnd gerethe in die herfart zu habin: capelan mit eynem
          ornat, messebuch, lichte, kelich, wein, ampullen alterstein. Gelt,
          wein, byr, fleisch, speck, seitenfleisch, schmaltz, fysche, putter,
          behmische kese, cleine kese, saltz, tyschlag, hant tücher, kessel,
          dreifuss, würze, vnsletlichte, wichsinne stöckel, spisse, exsse,
          grabescheit, haulkin, muldin, schauffeln, schlegel, kriptücher, pfele,
          strenge, futterstricke, getzelt mit stangen vnd sinem gerethe,
          futtersecke, hobir vnd ein moss dorzu, hulzyne kannen, kopperinne
          tringgefese, lythische schilde, pfannen, tringtoppen, roste,
          brantreithe, schutzemeister, balbirer, czymmerleuthe, bochsenmeister,
          bochsen, pulver, poffeysen, kawlin, fusseysen, eiserne flegel, erbis,
          zugemüse.
        </p>
        <p>
          Am dornstage in der quatertempora vor Michaelis.
          <Qt
            publication={PUBLICATIONS.PALACKY_UB1}
            href="https://archive.org/details/urkundlichebeitr01pala/page/149/mode/1up"
            note="Nr. 140, S. 149–151"
          />
        </p>
      </Col>
      <Col md={6}>
        <p>Einung der Mannen und Städte und der Fürsten in Schlesien.</p>
        <p>
          Auf dem Tag zu Grottkau haben sich die Fürsten und die Lande und
          Städte Breslau, Schweidnitz und Jauer einträchtig geeinigt und
          beschlossen gegen die Ketzer in Böhmen, wie hiernach geschrieben
          steht:
        </p>
        <p>
          Zum ersten, die Festen an den Grenzen zu einer Landwehr zu besetzen,
          und zwar so: Herzog Johann von Münsterberg und die Lande und Städte
          Breslau, Schweidnitz und Jauer sollen 230 Pferde nach Schmiedeberg,
          auf Schatzlar, nach Schwarzwaldau und nach Konradswaldau bei Grüssau
          legen. Ferner der Bischof 70 Pferde. Herzog Ruprecht von Lüben und
          Ludwig, sein Bruder, 35 Pferde, Herzog Ludwig von Brieg 60 Pferde und
          Herzog Konrad der Kantner 60 Pferde sollen sie nach Braunau legen.
          Ferner sollen die von Ratibor Jägerndorf selbst mit 50 Pferden
          besetzen. Ferner sollen Herzog Bolko von Teschen 30 Pferde und der
          junge Herzog Bolko 25 Pferde nach Ostrau legen. Herzog Bernhard mit 30
          Pferden, Herzog Kaske mit 20 Pferden und der weiße Herzog Konrad mit
          20 Pferden sollen Herzog Przemek helfen, wo er der Hilfe am nötigsten
          bedürfen wird, auf ein Vierteljahr. Ferner: Welche der besetzten
          Burgen die Ketzer angreifen, der sollen die anderen von den besetzten
          Burgen zu Hilfe kommen. Ferner: Wären sie schwach und schrieben sie
          die Fürsten um Hilfe an, so soll jeder Fürst mit ganzer Macht
          aufbrechen, die er von Jung und Alt aufbringen kann, und den Ketzern
          im Feld entgegentreten; dasselbe sollen auch Mannen und Städte tun.
          Ferner soll jeder Fürst dazu beitragen, dass es an ihm nicht fehle,
          nach dem Wortlaut des Bundes, und ebenso Lande und Städte.
        </p>
        <p>
          Ferner: Sollte es geschehen, dass ein Fürst oder Land oder eine Stadt
          den anderen seine Macht entziehen und den Bund brechen wollte, den
          wollen die anderen vor dem Papst, vor dem Kardinal und vor dem
          römischen König verklagen und beraten, wie sie ihn dazu bringen
          können, ihnen zu helfen und den Bund in seiner Geltung zu halten.
        </p>
        <p>
          Ferner: Wenn die Ketzer nach Schlesien ziehen, soll jeder Fürst, jedes
          Land und jede Stadt, die im Land sind, mit ganzer Macht aufbrechen,
          wie ein jeder gesessen ist, ihnen entgegenziehen und ein Feld machen,
          sowohl aus den Landen als aus den Städten usw. Ferner soll jeder Fürst
          in seinen Landen und Städten bestellen, dass je 10 Bauern einen Wagen
          haben mit ihren Waffen und Speise auf drei Monate. Und zwar soll jeder
          Wagen eine Kette haben, die man Landzocht nennt, zwei Bretter, zwei
          Grabscheite, eine Schaufel, zwei Gabeln, eine Haue oder zwei. Und
          jeder soll seine beste Waffe mitnehmen, also Spieße, Armbrüste und
          sonst, was er am besten vermag. Dasselbe sollen auch die oben
          genannten Lande und Städte tun. Ferner soll jeder Fürst seine Städte
          heißen, Waffen mitzunehmen, so gut sie können, und ebenso das Land.
          Ferner soll jeder Fürst Büchsen mitnehmen, so wie es ihm auferlegt
          ist. Ferner sollen Land und Städte Schweidnitz eine große Büchse, 15
          Tarassteinbüchsen und 100 Pischullen mitnehmen. Ferner werden auch die
          anderen Fürsten, Lande und Städte mitnehmen, jeder nach seinem
          Anschlag. Summe der Büchsen: 20 große Büchsen, mit denen man Mauern
          fällen kann, 300 Tarassteinbüchsen, 2000 Pischullen.
        </p>
        <p>
          Ausrüstung und Gerät, die man auf die Heerfahrt haben soll: ein Kaplan
          mit einem Ornat, Messbuch, Kerzen, Kelch, Wein, Messkännchen,
          Altarstein. Geld, Wein, Bier, Fleisch, Speck, Seitenfleisch, Schmalz,
          Fische, Butter, böhmische Käse, kleine Käse, Salz, Tischlaken,
          Handtücher, Kessel, Dreifüße, Gewürze, Unschlittkerzen, Wachsstöcke,
          Spieße, Äxte, Grabscheite, Haken, Mulden, Schaufeln, Schlegel,
          kriptücher, Pfähle, Stränge, Futterstricke, ein Zelt mit Stangen und
          seinem Zubehör, Futtersäcke, Hafer und ein Maß dazu, hölzerne Kannen,
          kupferne Trinkgefäße, lythische schilde, Pfannen, Trinktöpfe, Roste,
          Brandreiten, Schützenmeister, Barbiere, Zimmerleute, Büchsenmeister,
          Büchsen, Pulver, poffeysen, Kugeln, fusseysen, eiserne Flegel, Erbsen,
          Gemüse.
        </p>
        <p>Am Donnerstag in der Quatemberwoche vor Michaelis.</p>
      </Col>
    </Row>
  </>
)
