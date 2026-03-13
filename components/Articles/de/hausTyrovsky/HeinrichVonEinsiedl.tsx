import { Col, Row } from 'reactstrap'
import { ImageWithTitle } from '../../../ImageWithTitle'
import React from 'react'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const HeinrichVonEinsiedl = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="henry-of-einsiedl" />
        <h4>
          Jindřich (Heinrich) Týřovský von Einsiedl (um 1466–1556)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Jobst starb 1474, doch sein letzter Wille konnte nicht in die
          Landtafeln eingetragen werden, da er erst nach seinem Tod versiegelt
          wurde. Der überlebende Sohn Jindřich (Heinrich), der sich stets nur
          als Henrich unterzeichnete, war noch nicht volljährig und stand daher
          unter der Vormundschaft von Litvín von Klinštejn, einem Rat des
          Kammergerichts, der noch 1491 seinen Namen mit Týřov schrieb. Ab 1494
          erteilte Jindřich selbst bereits die Genehmigung zum Verkauf von
          Lehngütern in Mlečice. Anmerkung: Die Robotlehnsleute in Mlečice und
          Zavidov waren stets zum Dienst an Křivoklát verpflichtet, konnten aber
          als Untertanen auf dem Gut Týřov ihr Eigentum nur mit Zustimmung ihres
          Herrn – des Inhabers von Týřov – verkaufen.
        </p>
        <p>
          Im Jahr 1500 verhandelte das Kammergericht einen Streit zwischen
          Jindřich und Jan von Gutštejn über den Erzabbau, auf den Gutštejns
          Schmelzer Ota angeblich einen Anspruch hatte.
        </p>
        <p>
          Jindřich war ein hervorragender Wirtschafter. In kurzer Zeit erwarb er
          Gutshöfe in Nezabudice und Panošín Újezd, die Dörfer Hřebečníky,
          Skryje, Tytry und Novosedly und ließ den Gutshof Myslice errichten. In
          Kožlany ließ er die Kirche wieder aufbauen, die seit den
          Hussitenkriegen verfallen war, und kaufte dort zwei verödete
          Bauernhöfe mit Einkünften, die viele Jahre lang zu Krakovec gehört
          hatten, von Jindřich Albrecht von Kolovrat.
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:2aeaba53-5238-4dde-bdff-90260eb8a2d2"
          />{' '}
          1503 kaufte er die Wüstung Sadlno und das Gut Slabce, mit dem
          ebenfalls eine Lehnspflicht gegenüber Křivoklát verbunden war, und
          Jindřich musste daher bei Bedarf{' '}
          <Cit>sám druhý na hrad přijeti ve všem holým železe.</Cit> (mit einem
          Begleiter in voller Rüstung auf die Burg kommen.)
        </p>
        <p>
          Während des Krieges von 1505 gegen die Herren Šlik stellte er 4 Mann
          und 1 Wagen. In jenem Jahr verklagte ihn auch Ambrož Chodaur von
          Loket, da er Jindřich für Getreide bezahlt hatte, das anschließend
          nicht geliefert wurde. 1509 gehörte er zu den böhmischen Adligen, die
          in Brünn auf die Ankunft König Vladislavs aus Trnava warteten, doch
          sie reisten bald wieder ab, da der König immer wieder nicht eintraf.
          Jindřich löste dann 1513 vor dem Kammergericht einen Streit seines
          Dieners Rovný von Zavidov mit Jindřich Tuchorský von Tuchořice.
        </p>
        <p>
          Der Oberstkanzler des Königreichs Böhmen, Adam von Hradec, erwirkte
          1524 von König Ludwig die Erlaubnis, Týřov mit allem Zubehör
          einzulösen. Sobald Adam die Auslösesumme hinterlegt hätte, sollte
          Jindřich das Gut unverzüglich übergeben. Jindřich, der eine Urkunde
          König Georgs vorlegte, wonach er zu Lebzeiten von niemandem ausgelöst
          werden könne, übergab die Burg nicht, und da Adam 1531 starb und
          Jindřich ihn somit überlebte, verfiel der Eintrag. 1525 wurde Jindřich
          Týřovský von Jan Pečkovský von Pečkovice vor das Kammergericht
          geladen, weil er versäumt hatte, bei einem anderen Gericht auszusagen.
        </p>
        <p>
          In der Zwischenzeit traf Jindřich ein schweres Unglück. Mit seiner
          Frau Kateřina Řesanská von Kadov hatte er 4 Söhne, nämlich Jan,
          Albrecht, Jobst und Jiřík. Der letztgenannte nahm am Feldzug gegen die
          Türken teil und wurde 1526 in der Schlacht bei Mohács gefangen
          genommen. Der Vater, der ihn freikaufen wollte, musste Týřov 1528 an
          Jáchym von Malcany verpfänden, an den die Bürger von Pilsen 1530 einen
          Brief schickten.
        </p>
        <p>
          Lorenz Šlik nutzte Jindřichs Notlage aus und erwirkte von König
          Ferdinand die Erlaubnis, das Gut Týřov auszulösen. Dies konnte jedoch
          nur im Einvernehmen mit Jindřich geschehen, der sich wiederum auf
          König Georgs Urkunde berief, nicht einwilligte, 375 Schock Groschen
          von Petr Cíl von Svojšice, 350 Schock Groschen von Zikmund Beřkovský
          von Šebířov und 230 Schock Groschen von Slavibor von Všechlapy borgte
          und 1532 Týřov auslöste.
        </p>
        <p>
          Aus den genannten Summen ergibt sich, dass Týřov für 1000 Schock
          Groschen verpfändet war. Als Jindřich seine Gläubiger nicht
          befriedigen konnte, verkaufte er das Dorf Novosedly, den Gutshof
          Nezabudice und Gutshöfe in Panošín Újezd und verpfändete zusätzlich
          den Gutshof Kouřimec sowie die Dörfer Mlečice, Hřebečníky, Skryje und
          Tytry.
        </p>
        <p>
          Zikmund Beřkovský lud Jindřich wegen der Schuld bereits 1531 vor
          Gericht, doch Jindřich ignorierte drei Vorladungen, sodass ein
          Haftbefehl gegen ihn erlassen wurde und Beřkovský Jindřichs Güter
          beschlagnahmte – 2 Bauernhöfe in Kožlany und einen Teich oberhalb der
          Stadt, den er ablassen wollte. Jindřich kam ihm jedoch zuvor und ließ
          ihn selbst ab.
        </p>
        <p>
          Nach Jiříks Rückkehr nach Böhmen setzten sich die böhmischen Stände
          beim König dafür ein, dass Jiříks Dienst entlohnt werde.
        </p>
        <p>
          Erhebliche Schwierigkeiten bereiteten Jindřich seine widerspenstigen
          Söhne, die ständig wegen Schlägereien vor Gericht standen. Albrecht
          und Jiřík kamen 1536 in das Wirtshaus des Jiřík Čapek in Rakovník, wo
          sie Jiřík von Bobrovice, den Herrn von Děkov, antrafen. Als Bobrovice
          auf der Galerie mit dem Wirt sprach, warf Albrecht seinen Mantel ab,
          griff zum Schwert und stach Bobrovice in die Seite. Der Wirt wies
          Albrecht zurecht, und er hörte auf. Dann stachen Petr Krašovský und
          Jiřík Týřovský Bobrovice mit Jagdmessern in die Seite und wollten ihn
          ermorden. Bobrovice war so schwer verletzt, dass er nicht einmal die
          Treppe hinunterkommen konnte.
        </p>
        <p>
          Albrecht, Jiřík und Jobst töteten 1542 grundlos in Pilsen Petr
          Chlumčanský; Jiřík verwundete 1544 Václav von Martinice auf der
          Straße; derselbe Jiřík sprach 1548 beim Bader über Bořivoj Pešík von
          Komárov und nannte ihn einen Erzlügner, und bei einem Fest in Liblín
          1555 beleidigte er Bohuslav Zvíkovský, indem er ihn einen Erzlügner
          nannte. Während des Streits stürzte sich Jiřík mit einem Schwert auf
          Bohuslav und wollte mit ihm kämpfen. Albrecht geriet 1554 in
          Hřebečníky mit Jan von Lobkowitz aneinander, der in Notwehr Albrecht
          durch beide Beine schoss.
        </p>
        <p>
          Auch Vater Jindřich hatte mit Gerichten zu tun. 1536 lud ihn Erhart
          Kfelíř wegen Schäden von 100 Schock Groschen vor, weil seine
          (Jindřichs) Leute angeblich mit Handfeuerwaffen durch die Wälder
          gegangen seien und in der Umgebung von Týřov Wild geschossen hätten.
          1544 lud Mikuláš Pešík von Komárov Jindřich wegen 3 Tiernetzen und
          eines eibenholzfarbenen Pferdes vor, die er von Mikulášs verstorbenem
          Bruder Jan geliehen und nicht zurückgegeben hatte. Bemerkenswert ist,
          dass Mikuláš und Jindřich in irgendeiner Weise verwandt waren.
        </p>
        <p>
          Als Lorenz Šlik erkannte, dass er Jindřich nicht überleben und das Gut
          Týřov nicht erleben würde, übertrug er 1545 mit königlicher Erlaubnis
          sein Recht an Týřov auf Václav Mašťovský von Strojetice, der sofort
          auf alle Jagdrechte verzichtete, und dafür rechnete ihm der König 100
          Schock Groschen auf Týřov an und erlaubte ihm, Wälder nur für die
          Bedürfnisse der Burg zu fällen, und gewährte ihm das Recht, vom
          Křivokláter Hauptmann jährlich 2 Hirsche, 4 Rehe und 2 Wildschweine zu
          erbitten, doch Kleinwild durfte er frei jagen. Die Pfandschaft von
          Týřov wurde auf Lebenszeit des Mašťovský und seiner Söhne vereinbart.
        </p>
        <p>
          1554 erwirkte Mašťovský vom König und den böhmischen Ständen, dass der
          Anfangssumme weitere 100 Schock Groschen hinzugefügt wurden, und Jan
          der Ältere von Lobkowitz auf Zbiroh erhielt die Erlaubnis, das Dorf
          Mlečice, das er als Pfand hielt, als Erbgut zu erwerben.
        </p>
        <p>
          Jindřich war 1546 Kreishauptmann; 1545 verkaufte er Slabce mit Sadlno
          und 1555 den Gutshof Myslice. Nachdem er sein Eigentum unter seinen
          Söhnen aufgeteilt hatte, zog er 1556 nach Jince, das Mikuláš Pešík von
          Komárov gehörte, wo er am 19. Februar 1556 starb und in der dortigen
          Kirche St. Nikolaus begraben liegt.
          <Qt publication={PUBLICATIONS.KOCKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        md={{ size: 6, offset: 3 }}
        src="nahrobek.jpg"
        width={1062}
        height={1920}
        title="Grabstein von Jindřich Týřovský in der Kirche St. Nikolaus in Jince."
      />
    </Row>
  </>
)
