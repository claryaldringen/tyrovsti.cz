import React from 'react'
import { Col, Row } from 'reactstrap'
import { ImageWithTitle } from '../../ImageWithTitle'
import { ArticleProps } from '../../../types'
import { DraftBadge } from '../../DraftBadge'

export const Fechthandbuch = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <h1>
          Fechtbuch von Joachim Meyer (MS Bibl. 2465){draft && <DraftBadge />}
        </h1>
        <p>
          <b>MS Bibl. 2465</b> ist ein deutsches Fechthandbuch, das 1561 von
          Joachim Meyer verfasst wurde. Das Original befindet sich derzeit in
          den Sammlungen des Bayerischen Nationalmuseums in München. Diese
          Handschrift, die möglicherweise Meyers frühestes Werk ist, wurde für
          Georg Johann II., Pfalzgraf von Veldenz, angefertigt. Seit Mitte des
          20. Jahrhunderts galt sie als verschollen, doch Olivier Dupuis gab im
          Juni 2021 bekannt, dass er sie wiederentdeckt hatte.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_101r.jpg"
        width={888}
        height={630}
        title="103r"
        md={12}
      />
      <Col md={6}>
        <h4>
          Vom Kempffenn Vnnd Fechtenn Im harnasch zu Fus kürtzlich beschrüben
          {draft && <DraftBadge />}
        </h4>
        <p>
          Die weil des kempffenn manchlej Artt ist / so kann mann Auch khein
          gewüß Regell gebenn Dann Ein Ider dem Ein kampf württ ausgepotten hatt
          disen fort&shy;theill / das Er Im mag Erdencken was Er weis das Im
          diensttlich ist Es sej mit seltzam wechrenn oder sampt listige
          behennde forteill / dann der dem / der kampff Ausgebotten würdt /
          gübtt die wechr / die mag Er machenn wie Er will <br /> Zuu Einem
          Exempell / Es solenn zwen mit Einander kempffen vnd der Ein Wechr
          lincks der Annder Rechts. Nun der Recht gett dem lincken Aůsgebotten /
          So last der linck die Wechr machenn auff dise Weis / Nemlich zwej
          scharpffer Rapir / vnd zwen scharpffer dolchen / Dornach zwo R.
          armschirleinn Iden Einen / nemlich Am rechten arm / die weill Er linck
          ist / vnnd Arm Ein Jdenn Armgezeig Imwendig am gebüg Ein scherpffe
          spitz / so lanng wann Einer denn selben Arm / Ein wenig biege / das Er
          sich selbes sticht <br /> Do sie nun Auff gestimbttenn blatz khumen
          vnnd vm die Wehren laßenn / so thut nun Jder sein R. armschin Ann / An
          sein rechten Arm zu welchen Arm sie geordinirtt sindt / Als sie nun
          sollenn Ann kampff thretten so khann sich der recht nit wechrenn dann
          Als baldt Er denn Arm biegett so sticht Er sich selber / darzu
        </p>
      </Col>
      <Col md={6}>
        <h4>Vom Fußkampf und Fechten im Harnisch, kurz beschrieben</h4>
        <p>
          Da der Kampf vielerlei Arten hat, kann man keine feste Regel geben.
          Wer zum Kampf herausgefordert wird, hat den Vorteil, dass er sich
          ausdenken kann, was ihm am dienlichsten ist – seien es ungewöhnliche
          Waffen oder listige und geschickte Vorteile. Denn wer herausgefordert
          wird, bestimmt die Waffen und darf sie wählen, wie er will.
          <br />
          Zum Beispiel: Zwei Männer sollen miteinander kämpfen, und der eine ist
          Linkshänder, der andere Rechtshänder. Der Rechtshänder fordert den
          Linkshänder heraus. Der Linkshänder bestimmt daher die Waffen wie
          folgt: zwei scharfe Rapiere und zwei scharfe Dolche. Dazu zwei
          Armschienen (armschirleinn), eine für jeden am rechten Arm, da der
          Linkshänder mit der rechten Hand weniger geschickt ist, und in jeder
          Armschiene an der Beuge eine scharfe Spitze, sodass sich derjenige,
          der diesen Arm auch nur ein wenig beugt, selbst sticht.
          <br />
          Wenn sie am bestimmten Platz eintreffen und die Waffen erhalten, legt
          jeder seine Armschiene am rechten Arm an, wie angeordnet. Wenn sie nun
          zum Kampf antreten sollen, kann sich der Rechtshänder nicht wehren –
          sobald er den Arm beugt, sticht er sich selbst.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_101v.jpg"
        width={884}
        height={628}
        title="103v"
        md={12}
      />
      <Col md={6}>
        <p>
          darzu ist im sein lincker arm blös / darin Er den dolchen fiertt sich
          zu schießen der Linck aber / helt sein Rechtenn arm stranke mit dem
          dolchen zur versatzung / vnnd wehrtt sich mit der Lincken / also württ
          der recht geschedigt mehr von Im / denn vom findt <br /> Aus disem
          Exempell Ist leichtlich zu mercken das alweg der den bestenn fortheill
          hatt der die wechr last machenn oder gübtt <br /> Diß hab ich dorumb
          Erzelt / Auff das sich Ein Jder der Einem Anndern Ein kampff wolte
          annbietten Auff solchenn list bedacht sej / vnnd nit Also Im zorn
          Erauß schawe / sonnder mit gdnig sich darzů anbietten / wie dann
          solches auch zu gelaßen mag werdenn / das Jren zwen Eins werden Im
          harnascht oder blos oder mit ausgethruckten wehren zu kempffen. Was
          Aber das fechtenn oder kempffen mit bloßenn leib / belangt vnnd was
          für forteill vnnd wie die zu brauhen sindt Ist bis her Im Rapir vnnd
          Anndern wehren gelehrt / vnnd gnugsam begriffen will jetzt alein die
          fortheill Im harnascht fechten wie die zu brauchen sindt / sezen vnnd
          ist zu mercken das gewönlich drej wehr Im harnasch bebraucht werden /
          Als Ein spis vnnd Ein schwertt Auch Ein dolchen / oder Ein dolchen
          unnd Ein sebell vmb gegürtt / vnnd Ein schwertt
        </p>
      </Col>
      <Col md={6}>
        <p>
          Zudem ist sein linker Arm bloß, mit dem er den Dolch zur Verteidigung
          führt. Der Linkshänder aber hält seinen rechten Arm steif mit dem
          Dolch zum Versetzen und wehrt sich mit der linken Hand. So erleidet
          der Rechtshänder mehr Schaden von sich selbst als vom Gegner.
          <br />
          Aus diesem Beispiel ist leicht zu erkennen, dass immer derjenige den
          besten Vorteil hat, der die Waffen bestimmt oder wählt. Ich habe dies
          erzählt, damit jeder, der einem anderen einen Kampf anbieten will, auf
          solche Listen bedacht sei und nicht im Zorn vorschnell handle, sondern
          mit Bedacht die Herausforderung anbiete – ebenso wie es auch üblich
          sein kann, dass zwei sich einigen, ob sie im Harnisch oder bloß oder
          mit bestimmten Waffen kämpfen.
          <br />
          Was das Fechten oder Kämpfen ohne Rüstung betrifft und welche Vorteile
          es gibt und wie sie anzuwenden sind, ist bisher im Rapier und anderen
          Waffen gelehrt und hinreichend dargelegt worden. Ich will jetzt allein
          die Vorteile im Harnischfechten beschreiben, wie sie anzuwenden sind.
          Und es ist zu beachten, dass gewöhnlich drei Waffen im Harnisch
          gebraucht werden: ein Spieß und ein Schwert, dazu ein Dolch – oder ein
          Dolch und ein Säbel umgegürtet, und ein Schwert.
          <br />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_102r.jpg"
        width={887}
        height={631}
        title="104r"
        md={12}
      />
      <Col md={6}>
        <p>
          Die Erst ordnug der wechren Ist dise Im harnasch zu fechten. Nemlich
          Ein Spis vnnd Ein schwertt / vnnd Ein kempff degen oder Ein dolchen /
          oder auch Ein schilt Also Im Anngreiffen hatt mann den schilt vnnd
          spis gebraucht <br /> vnnd habenn mit dem Spies gearbteittett / ob
          Einer denn Anndern fellenn zwischen die bein / vnnd miedenn / oder
          habenn mit dem spis geschoßenn vnd dem schutzs nach gefolgett / dan Es
          In groß übung geweßen vor zeitten mit dem Spis schießenn / dornach
          wann sie die Spis verschoßenn / habenn sie zum schwerter grieffen vnnd
          ferner zum dolchen oder kampff degen <br /> Ich will aber die Annder
          ordnung für mich nemen zu Erkhleren daraus man zimlich lehren wirt wie
          es vmb das kempffen zu fus gescheffen Ist / vnnd will Auch drej
          fordheilischer künstlicher wechr für mich nemenn / Als zum Erstenn Ein
          schwerdtt welches soll Also sein obenn der knopff soll haben fier
          zecken neben herum die fünft obenn aus / die soll nit lang sein
          sonnder kunpf das sie nott leiden mag Ittem dz kreutz soll sein wie
          Ein maurerhamer / die spitz vnnd kling Eckehtig <br />
          vnnd das soll alles von gantzem Eisen geschmitt sein vnnd die ortt
          woll gestehelt
        </p>
      </Col>
      <Col md={6}>
        <p>
          Die erste Ordnung der Waffen zum Fechten im Harnisch ist diese: ein
          Spieß und ein Schwert und ein Kampfdegen oder ein Dolch, oder auch ein
          Schild. Beim Angriff benutzte man den Schild und den Spieß und
          arbeitete mit dem Spieß – etwa ob man dem anderen zwischen die Beine
          fahren und ausweichen konnte, oder ob man den Spieß warf und dem Wurf
          nachfolgte, denn in früheren Zeiten war das Spießwerfen sehr
          gebräuchlich. Nachdem sie die Spieße verschossen hatten, griffen sie
          zum Schwert und dann zum Dolch oder Kampfdegen.
          <br />
          Ich will aber eine andere Ordnung darlegen, aus der man hinreichend
          lernen wird, wie es mit dem Fußkampf bestellt ist, und will auch drei
          vorteilhafte, kunstvolle Waffen benennen. Die erste davon ist ein
          Schwert, das folgendermaßen sein soll: Der Knauf soll oben vier Zacken
          ringsum haben und die fünfte oben heraus, die nicht lang, sondern
          gedrungen sein soll, damit sie Schläge aushalten kann. Das Kreuz soll
          geformt sein wie ein Maurerhammer, und die Spitze und Klinge sollen
          eckig sein. Und das alles soll aus einem Stück Eisen geschmiedet sein
          mit der Spitze gut gehärtet.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_102v.jpg"
        width={887}
        height={631}
        title="104v"
        md={12}
      />
      <Col md={6}>
        <p>
          Es soll Auch fein geschmeidig gemacht sein / das ein man woll freien
          mag / die leng / noch eines Idenn woll gefalen <br /> Ittem der sebell
          soll starck sein Ein gute schneidt Aber doch nit gar zu schwer <br />{' '}
          Der dolch soll driefach sein / dz drej klingen Inn Einander sindt /
          Als wan man drej spicknadel Im einander steckett / vnd die Reren
          sollenn Auff Einander schließenn vnnd mit federn zugericht sein / das
          / so man Eine thruckt Ein spis ledig württ / denn braucht man Also wan
          Einer zwischen Ein fuge kumpt / so thrent man Im sie / das Ein weitt
          loch giebt Als dan druckt Er denn selbenn Ersten dolchen las / so Ist
          dan die Ander spitz khleiner vnd Raner / domit sticht Er Inn das vorig
          loch / welches denn will thieffer geht dan das Erste / so Er merck das
          Es in leib ganngen ist / lest Er die feder las vnd last Im die spitz
          sterk welche jener nit baldt ziehen kann / der dolchen gehertt zu
          brauchen wann du Inn geworffen hast <br /> Ittem so es Ein gefalt
          khann Er den dolchen woll fürfach machenn / Er soll Aber gemacht sein
          das die federn nit mercklich sind / Auff das wehrs Inn schranckenn
          bringt / sein gegen partt nit leichlich mag Auff thun / Er aber soll
          sich zuuor geibt darin machen / dann der die wehr gübt kann sich darin
          übenn nach seim gefallenn / vnnd sonderlich fordell / darin suchenn /
          welches der Annder nit so baldt Im schrancken Ersehenn oder
        </p>
      </Col>
      <Col md={6}>
        <p>
          Das Schwert soll auch so geschmeidig gemacht sein, dass ein Mann es
          frei führen kann, und seine Länge soll jedem Mann genehm sein.
          <br />
          Der Säbel soll stark sein, mit einer guten Schneide, aber nicht zu
          schwer.
          <br />
          Der Dolch soll dreifach sein, mit drei ineinander geschachtelten
          Klingen – als ob man drei Spicknadeln ineinandersteckt. Die Klingen
          sollen aufeinander schließen und mit Federn versehen sein, sodass beim
          Drücken eine Klinge freigegeben wird. Dies wird benutzt, wenn man in
          eine Fuge kommt – dann reißt man sie auf und es entsteht ein weites
          Loch. <br />
          Wenn dann der erste Teil des Dolches losgelassen wird, ist die zweite
          Spitze kleiner und schlanker und kann in das zuvor geschaffene Loch
          eindringen, was tiefer geht als das erste. Wenn man spürt, dass die
          Klinge in den Leib gedrungen ist, lässt man die Feder los und lässt
          die stärkere Spitze heraustreten, die der Gegner nicht leicht
          herausziehen kann.
          <br />
          Der Dolch wird benutzt, nachdem der Gegner niedergeworfen wurde. Wenn
          die Waffe stecken bleibt, kann der Dolch leicht befreit und wieder
          benutzt werden. Er muss aber so gefertigt sein, dass die Federn nicht
          sichtbar sind, sodass sie bei der Betrachtung der Waffe nicht
          auffallen und der Gegner sie kaum erkennen kann.
          <br />
          Wer diese Waffe führt, soll vorher gründlich damit üben und seinen
          Vorteil darin suchen, da der Gegner sie im Eifer des Gefechts nicht
          schnell erkennen oder anwenden wird.
          <br />
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_103r.jpg"
        width={887}
        height={631}
        title="105r"
        md={12}
      />
      <Col>
        <p>
          thun das Er dich nit mit Ein donerschlag übereill / vnnd las Inn
          vorver&shy;thobenn / vnnd merck wenn Er dür Ein schlag thut das du Im
          den ver&shy;sezest zwischen dein beidt hendt / vnd schaw ob du im
          megest Annsetzenn <br />
          Zum anndern hab Acht das dür nit angesezt weret / so dür Aber angesezt
          ist Ann dein linck so thrit mit dem lincken zu Ruck oder sez dein
          knopff auf dein brust vnnd Erlang der ortt / vnd sez Im auch ann / vnd
          thring von dür / Ittem wenn Er weitt vm sich ficht / so Reise Im nach
          mit dem ortt zur blöß / merck die blöße sindt dise / do man hin stehen
          oder Ansezen soll / das vüsier / vnnd vnnder die vhsen die knikel Inn
          die handt Ittem zwischenn die bein / Außwendig zum handtschuch hinein
          / vnd wo der harnasch gelenck hatt / Merck das du nit zu Einer weitern
          blöße greifest / so du Ein nahere blöße magst haben / zum letzstenn
          die finger Lösenn nemlich wo dich Einer Ergreiffe / so schaw das du Im
          Ein finger kanst
        </p>
      </Col>
      <Col>
        <p>
          Achte darauf, dass er dich nicht mit einem Donnerschlag überrascht,
          und lass ihn zuerst vergeblich schlagen. Merke: Wenn er dir einen
          Schlag versetzt, fange ihn zwischen deinen beiden Händen auf – und
          sieh zu, ob du ihm ansetzen kannst.
          <br />
          Ferner achte darauf, dass dir nicht angesetzt wird. Wenn dir aber an
          deine linke Seite angesetzt wird, tritt mit dem linken Fuß zurück oder
          setze den Knauf deines Schwerts auf deine Brust und richte die Spitze
          auf den Gegner. Setze sie ihm ebenfalls an und dränge ihn von dir.
          <br />
          Und wenn er weit um sich ficht, folge ihm mit der Spitze zu seinen
          Blößen. Merke: Die Blößen sind diese, wohin man stechen oder ansetzen
          soll: das Visier, unter die Achseln, die Knöchel, die Hände, zwischen
          die Beine, von außen in den Handschuh hinein, und wo der Harnisch
          Gelenke hat. Merke, dass du nicht nach einer entfernteren Blöße
          greifst, wenn du eine nähere haben kannst. Und zuletzt: Die Finger
          lösen, nämlich wo dich einer ergreift, sieh zu, ob du ihm einen Finger
          fassen und den Griff brechen kannst.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_103v.jpg"
        width={887}
        height={631}
        title="105v"
        md={12}
      />
      <Col>
        <p>
          ledig machen / denn brich Im übersich / Ittem Annbrich / gemecht stos
          / Bein bruch oder knüstos / Zum Erstenn will ich das harnasch fechten
          Exempels weis durch gehenn / darnach die forteill der vorgemelten
          wehren sezenn Im Anthretten nim dein schwertt Inn die oberhut mit dem
          beidt nebenn deim haupt / vnnd greiff mit der Lincken handt dein kling
          In der mit / dz die spitz dem man Inn sein gesicht steh / thrit Also
          zu Im / das dein Lincker fus Alzeit vorstehe sej nit zu goch / vnnd
          schaw ob du Im sein vorgesezten fus megest Erlanngen / so thu als
          weltest Im zum gesicht stehenn / las Inn des die recht handt vom hefft
          / vnndt kum domit der Lincken handt zu hielff vnnd schlag Inn mit dem
          knopff / zum kopff / oder zu seim Lincken arm / versezt Er dür denn
          schlag zwischen sein beidt hendt / so las vm den kopf Faren / vnnd
          schlag Im vonn deiner Rechtenn / zu seim knibien oder Enckel Ittem
          gehe Inn der ober hutt zu Im wie vor / vnnd hab Acht ob Er dür
          Annsezenn oder stehenn woll / so sez im vor deiner Lincken hanndt ab /
          schlechtt Er dür dann von obenn / so versezt Im denn schlag / zwischen
          dein beidt handt stich Inndes ausen über seinn arm / vnd sez Im Ann
          drißell / als baltt du befindest
        </p>
      </Col>
      <Col>
        <p>
          Befreie dich und brich ihm, wenn möglich, den Stand. Schlage auch ins
          Gemächt, brich ihm das Bein oder versetze ihm einen Kniestoß.
          <br />
          Zuerst will ich das Harnischfechten beispielhaft durchgehen und dann
          die Vorteile der vorgenannten Waffen darlegen.
          <br />
          Beim Antritt nimm dein Schwert in die Oberhut, beide Hände neben dem
          Haupt, und greife mit der linken Hand die Klinge in der Mitte, sodass
          die Spitze dem Gegner ins Gesicht zeigt. Tritt so auf ihn zu, dass
          dein linker Fuß stets vorne ist – nicht zu hastig. Und sieh zu, ob du
          seinen vorgesetzten Fuß erreichen kannst. Dann tu so, als wolltest du
          ihm ins Gesicht stechen, lass die rechte Hand vom Heft und bringe sie
          der linken Hand zur Hilfe, und schlage ihm mit dem Knauf auf den Kopf
          oder seinen linken Arm. Fängt er deinen Schlag zwischen seinen beiden
          Händen auf, so lass das Schwert um den Kopf fahren und schlage ihm von
          deiner Rechten auf sein Knie oder seinen Knöchel.
          <br />
          Ferner gehe in der Oberhut auf ihn zu wie zuvor und achte darauf, ob
          er dir ansetzen oder stechen will – dann setze ihm mit deiner linken
          Hand ab. Schlägt er dir dann von oben, so fange seinen Schlag zwischen
          deinen beiden Händen auf und stich indes von außen über seinen Arm und
          setze ihm an die Kehle.
          <br />
        </p>
      </Col>
    </Row>

    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_104r.jpg"
        width={887}
        height={631}
        title="106r"
        md={12}
      />
      <Col>
        <p>
          das dein ort hafft so schlag dein beidt vnder dein Recht ahsell vnd
          las in nit ab khumen sonnder dring für dich / Ittem gehe in der ober
          hutt zu Im stich Im zu seinn visir wertt Er so sez im ann / an sein
          Linck Achsell thring für dich hin / hab acht als baldt Er sich
          ledig[en] will das du Inn dein gewicht nach Ereilest mit Ringen /
          werffen / oder stoßen / Inn fornen ann sein visir / merck so du Einem
          / hast Anngesezt so las Inn nit ab kumen / so khann Er nit
          Ar&shy;beitten / Die ander hutt halt dein schwertt mit dem gefes neben
          deiner rechten hüfft / fast die klingen mit der Lincken hanndt Inn der
          mit / das dein ortt gegen dem mann stehe / denn Linck fus alzeitt vor
          / thritt also zu Im sticht Er so sez ab von der handt / schlecht Er so
          entpfang den streich zwischen dein beidt hendt Inn die klingen Inndes
          hab acht wenn Er schlecht / vnnd thritt mit dem Rechtenn zu dür / so
          versez wie gelertt / vnnd far mit dem knopf Inn sein kniebüg / will Er
          denn fus zucken so sez Im ann vnder sein Rehte vhsenn oder wo du
          khannst / vnnd thring von dür <br /> oder far mit dem knopff auff vmb
          sein hals vnndt thritt mit dem Rehten hinder sein bein vnnd würff Inn{' '}
          <br /> Ittem v[er]sez Im sein schlag aus der hutt vnd far auff mit dem
          gehilz / vnnd stich Im zum thrisell oder zu denn blößen bej den
        </p>
      </Col>
      <Col>
        <p>
          Wenn deine Spitze festhält, schlage mit beiden Händen unter deine
          rechte Achsel und lass ihn nicht loskommen, sondern dringe vorwärts.
          Gehe auch in der Oberhut auf ihn zu und stich ihm zum Visier. Wehrt er
          ab, so setze ihm an die linke Schulter und dringe vorwärts. Achte
          darauf, dass du ihn, sobald er sich befreien will, mit deinem Gewicht
          durch Ringen, Werfen oder Stoßen bedrängst – direkt gegen sein Visier.
          Merke: Wenn du einem angesetzt hast, lass ihn nicht loskommen, dann
          kann er nicht arbeiten.
          <br />
          Die zweite Hut: Halte dein Schwert mit dem Gefäß neben deiner rechten
          Hüfte und fasse die Klinge mit der linken Hand in der Mitte, sodass
          die Spitze zum Gegner zeigt. Der linke Fuß immer vorn. Tritt so auf
          ihn zu: Sticht er, so setze ihm mit der Hand ab; schlägt er, so fange
          den Streich zwischen deinen beiden Händen in der Klinge auf. Achte
          derweil, wenn er schlägt, und tritt mit dem rechten Fuß zu dir,
          versetze wie gelehrt und fahre mit dem Knauf in seine Kniekehle.
          <br />
          Will er den Fuß zurückziehen, so setze ihm unter seine rechte Achsel
          an oder wo du kannst, und dränge ihn von dir. Oder fahre mit dem Knauf
          um seinen Hals, tritt mit dem rechten Fuß hinter sein Bein und wirf
          ihn. Versetze ihm auch seinen Schlag aus der Hut und fahre mit dem
          Gehilz auf und stich ihm zur Kehle oder zu den Blößen bei den
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_104v.jpg"
        width={887}
        height={631}
        title="106v"
        md={12}
      />
      <Col>
        <p>
          gelennckenn. Ittem sez im denn stich ab / vnnd du desgleichen / vnnd
          so offt du Im angesezt hast / so schlag dein knopff vnnder die vchsenn
          so du dein forteil E&shy;sichest / Annsezenn sündt vier Eins Ins
          gesicht / ann thrisell Ittem ann die Linck vchsenn oder vnnder die
          Reht achtsell <br /> vnnd merck so du Im an dj Linck ansezest / so kum
          mit dem Lincken fus vor sez du Im vnder die recht Achsell / so thritt
          mit dem rechten vor / weitter soltu alweg so du anngesezt hast
          übersich thrinngen / so Er Aber kurczer ist dann du / so senck dein
          gehils vnndersich bis zu der hüfft / vnnd thring Also übersich von dür
          / last Er dür die seitten so stos Inn ann die hauben / do ist Er am
          krenckesten / so offt du ansezest so schaw das du Im woll In die Ring
          sezest / wenn du recht ansezest vnd recht dringst so kan Er nitt woll
          arbeitten Bruch Ittem hatt dür Einer angesezt / so stich oben über
          sein Rechten arm hinein vnder seim schwertt durch thruck dein knopff
          vndersich gegen der Erden / als baldt Er ledig lest / so schies dein
          schwertt vor dür hin vnder seim rechten durch / vnd mit deinn rechten
          fus hinder sein Lincken vnnd greiff mit der Lincken hanndt an sein
          haubenn vnd würff Inn / in eill hindersich. Ittem stich Im Inn
          handschuh am der vergesezsten handt / vnd fier Inn herum oder stich Im
          vnnder seim Lincken Arm auff über sein schwerdt thruck mit dem knopff
          übersich vnnd sez Im Ann Ittem von denn
        </p>
      </Col>
      <Col>
        <p>
          Gelenken. Setze ihm auch den Stich ab, und tu du desgleichen. So oft
          du ihm angesetzt hast, schlage deinen Knauf unter die Achseln, sobald
          du deinen Vorteil siehst. Es gibt vier Ansetzpunkte: einer ins
          Gesicht, einer an die Kehle, einer an die linke Achsel oder unter die
          rechte Schulter.
          <br />
          Merke: Wenn du ihm an die linke Seite ansetzt, komme mit dem linken
          Fuß vor; setzt du ihm unter die rechte Schulter an, so tritt mit dem
          rechten Fuß vor. Ferner sollst du, wann immer du angesetzt hast, stets
          aufwärts dringen. Ist er aber kleiner als du, so senke dein Gehilz
          abwärts bis zur Hüfte und dringe dann aufwärts von dir. Lässt er dir
          die Seite offen, so stoße ihm an die Haube, denn dort ist er am
          schwächsten.
          <br />
          Wann immer du ansetzt, achte darauf, dass du die Spitze gut in die
          Ringe setzt; denn wenn du recht ansetzt und recht dringst, kann er
          nicht gut arbeiten. <br />
          Gegenmaßnahme: Hat dir einer angesetzt, so stich von oben über seinen
          rechten Arm hinein unter seinem Schwert durch, drücke deinen Knauf
          abwärts gegen die Erde. Sobald er loslässt, schieße dein Schwert unter
          seinem rechten Arm durch, tritt mit deinem rechten Fuß hinter seinen
          linken, greife mit der linken Hand an seine Haube und wirf ihn eilends
          rückwärts.
          <br />
          Stich ihm auch in den Handschuh der vorgesetzten Hand und führe ihn
          herum, oder stich ihm unter seinem linken Arm aufwärts über sein
          Schwert, drücke mit dem Knauf aufwärts und setze ihm an. Auch von den
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_105r.jpg"
        width={887}
        height={631}
        title="107r"
        md={12}
      />
      <Col>
        <p>
          Ringenn merck Ann welcher seitten Er dür hatt Anngesezt / so greiff
          sein kling mit teiner Lüncken hendt thring Also von dür Inndes zuck ab
          / vnnd Ruck Inn zu dür vnnd Erwische in mit der rechten hanndt / sein
          rechte handt / vnd Ruck In zu dür vnd begreif sein leib vnnd heb
          übersich / vnnd Er heb In vnd schlag Im die fies vndenn Aus vnd würff
          In von dür / Ittem sticht Einer auff dich / so stich mit Im gleich
          hinein auff sein linck seitten / vnnd ÿm stich fang sein kling zu
          deiner vnnd fahr mit deim knopff vnnden durch beidt Arm / vnnd schlag
          übersich so mus Er laßenn Ittem hab Acht welche henndt du Im Erwischen
          megest die Ruck zu dür / vnnd mit der Anndern hanndt greiff Im seinen
          Elenpogenn / vnnd Him Im das gewicht / vnnd Inn Allen thrits bis nit
          zu goch / Auff das du Ein sattenn stanndt habest / Ittem so du einen
          geworffenn hast / fellt Er so fall mit zu seiner Rechtenn vnnd müt dem
          Rechtten Knie zwischenn sein beidt bein / vnd mit der lincken handt vm
          sein hals / so du Inn gewis gefast hast / so Ruck dein dolchen /
          greift Er zu dem dolchen / so stich Im zur handt vnd Ruck mit wüder /
          bis du dein forteil beßer Ersehen hast Ittem Ein Anders nim sein
          rechten Arm zwischen dem bein / vnnd leg dich Auff Inn zwerchs vnd
          haltt dein bein fast zu
        </p>
      </Col>
      <Col>
        <p>
          Zum Ringen merke: Von welcher Seite er dir angesetzt hat, greife seine
          Klinge mit deiner linken Hand und dringe sie so von dir; ziehe indes
          zurück und reiße ihn zu dir. Ergreife mit der rechten Hand seine
          rechte Hand, ziehe ihn zu dir, umfasse seinen Leib und hebe aufwärts.
          Wenn du ihn hebst, schlage ihm die Füße von unten weg und wirf ihn von
          dir.
          <br />
          Ferner, sticht einer auf dich, so stich gleichzeitig auf seine linke
          Seite hinein, und fange im Stich seine Klinge gegen deine und fahre
          mit deinem Knauf von unten durch beide Arme und schlage aufwärts,
          sodass er loslassen muss.
          <br />
          Achte auch darauf: Welche Hand du ihm ergreifen kannst, die ziehe zu
          dir, und mit der anderen Hand greife seinen Ellbogen und nimm ihm das
          Gleichgewicht. Bei all diesen Schritten tritt nicht zu hastig, damit
          du einen festen Stand hast.
          <br />
          Ferner, wenn du einen geworfen hast und er fällt, so falle mit ihm auf
          seine rechte Seite, mit deinem rechten Knie zwischen seinen beiden
          Beinen und der linken Hand um seinen Hals. Sobald du ihn sicher
          gefasst hast, ziehe deinen Dolch. Greift er nach dem Dolch, so stich
          ihm in die Hand und ziehe ihn zurück, bis du deinen Vorteil besser
          erkennst.
          <br />
          Eine andere Art: Nimm seinen rechten Arm zwischen seinen Beinen, lege
          dich quer auf ihn und halte deine Beine fest zusammen.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_105v.jpg"
        width={887}
        height={631}
        title="107v"
        md={12}
      />
      <Col>
        <p>
          zusamen vnnd streck dich fast vnnd greüff mit deiner lüncken handt An
          sin lincken Arm / vnnd helt denn fast / vnnd Arbeitt mit dem degen wie
          hernach folgen wirtt
        </p>
        <h4>Wie mann die drey vor gemelten wechr brauchen soll</h4>
        <p>
          Merck Im Erstenn Anthritt gehe In der oberhutt zu Im vnnd stell dich
          mit geberdenn Als woltest In zum gesicht stehen thu es nit sonder
          schlag od[er] haw vonn oben nider nach sein knie bucklen thriffest
          oder nit so far behendt mit denn henden übersich vnnd schlag Inn mit
          dem bickell / zum kopff / Außen über seinen Rechtenn Arm / oder schlag
          In auff sein gelenck des nechst das dir werden mag / zuck bechenndt
          vmb dein kopff vnnd las die Reht fahren vor der lincken hanndt vnnd
          greüff domit hünder deiner lincken Inn die klingen vnnd schlag vonn
          deiner Rechten Ein mittelschlag nach sein helm / Es sej mit dem
          bickell oder hawer / oder mit dem klos / Er greüff dein bindt wüder
          mitt deiner Rechttenn hanndt vnnd thritt wüder zu Ruck daß du dich
          wüder Erhalest / vnnd hab fleißig Acht das Er dür khein streich geb
          Auch las dür mitt Annsezenn sonder weich Im kreis so viel es leiden
          will
        </p>
      </Col>
      <Col>
        <p>
          und strecke dich fest, und greife mit deiner linken Hand seinen linken
          Arm und halte ihn fest, und arbeite mit dem Degen, wie nachfolgend
          beschrieben wird.
        </p>
        <h4>Wie man die drei vorgenannten Waffen gebrauchen soll</h4>
        <p>
          Merke: Beim ersten Antritt gehe in der Oberhut auf ihn zu und stelle
          dich mit Gebärden, als wolltest du ihm ins Gesicht stechen, tu es aber
          nicht – sondern schlage oder haue von oben herab auf seine
          Kniescheibe. Ob du triffst oder nicht, fahre behände mit den Händen
          aufwärts und schlage ihm mit dem Pickel auf den Kopf, von außen über
          seinen rechten Arm, oder schlage ihm auf das nächste Gelenk, das du
          erreichen kannst.
          <br />
          Ziehe schnell um deinen Kopf und lass die rechte Hand vor der linken
          gleiten, greife damit hinter deiner linken in die Klinge und schlage
          von deiner Rechten einen Mittelschlag nach seinem Helm – sei es mit
          dem Pickel, der Schneide oder dem Knauf.
          <br />
          Er ergreift dein Band; mit deiner rechten Hand tritt wieder zurück,
          damit du dein Gleichgewicht wiedererlangst, und achte sorgfältig
          darauf, dass er dir keinen Streich versetzt. Lass dich auch nicht auf
          Ansetzen ein, sondern weiche im Kreis, so weit es geht.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_106r.jpg"
        width={887}
        height={631}
        title="108r"
        md={12}
      />
      <Col>
        <h4>Das annder Stuck</h4>
        <p>
          Merck thritt Inn der ober hutt zu Im / fas dein bündt nahett bej dem
          knopf vnnd greif mit der linncken hanndt In die klingen beim kreutz
          vnnd stich Im knefftiglich zu seim visier / zuck wüder An dich vnnd
          stich mit sterck / vonn vnnden zu seim gemecht / domit Er dür nit zu
          nahe khum / Ruck dein wehr wüder ab / vnnd greüff mit der Lincken
          hanndt Inn das Erßette theill deiner klingen dringt Er auff dich so
          weich zuu Ruck / domit machestu Inn Endthrist vnnd württ baldt
          schlagen / so las dich nit Er lanngenn sonnder weich aus / hatt Er
          geschlagen so hab Achtung In dem Er sich verfelt so las die Recht
          hanndt Ab / vnnd khum domit der lincken zu hilff vnnd schlag Inn zum
          helm oder zum nechstenn gelüdt / hatt Er Aber nit geschlagenn so
          schlag Inn zum knüe oder Enckell versezt Er so fahr Auff mit den Armen
          / schlag Im zu dem obernn gelennck / vnnd Ergreüff dein beidt wüder /
          so du aber demschlag Ja nit kanst entgehenn so versez den obenn
          zwischen dein beidt hendt in die klingen / würff Inndes denn knopff
          über dein Lincke Achsell / vnd far mit der Lincken handt Auff vnd kum
          mit der Rechten der Lincken zu hilff so kum&shy;mestu zu schlagen Ehe
          Er sich Erhalt
        </p>
      </Col>
      <Col>
        <h4>Das zweite Stück</h4>
        <p>
          Merke: Tritt in der Oberhut auf ihn zu, fasse dein Band nahe beim
          Knauf und greife mit der linken Hand in die Klinge beim Kreuz, und
          stich ihm kräftig (knefftiglich) zum Visier. Ziehe wieder an dich
          zurück und stich mit Stärke von unten nach seinem Gemächt, damit er
          dir nicht zu nahe komme.
          <br />
          Dann ziehe deine Waffe zurück und greife mit der linken Hand in das
          erste Drittel deiner Klinge. Dringt er auf dich ein, so weiche zurück
          – dadurch lockst du ihn in ein Überbinden und er wird bald schlagen.
          Lass dich nicht erreichen, sondern weiche aus. Hat er geschlagen und
          verfehlt, so lass die rechte Hand los und bringe sie der linken zur
          Hilfe, und schlage ihm auf den Helm oder das nächste Glied.
          <br />
          Hat er aber nicht geschlagen, so schlage ihm aufs Knie oder den
          Knöchel. Versetzt er, so fahre mit beiden Armen auf, schlage ihm auf
          das obere Gelenk und ergreife deinen Griff wieder mit beiden Händen.
          <br />
          Kannst du aber dem Schlag wahrhaftig nicht entgehen, so fange ihn oben
          zwischen deinen beiden Händen in der Klinge auf und wirf indes den
          Knauf über deine linke Schulter und fahre mit der linken Hand auf und
          bringe die rechte der linken zur Hilfe. So kommst du zum Schlag, bevor
          er sich wieder erholt.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_106v.jpg"
        width={887}
        height={631}
        title="108v"
        md={12}
      />
      <Col>
        <p>
          Merck Wann Er zu dür thrit inn der Ober hutt sticht oder schlecht Er
          so setz Ab von deiner Lincken handt / vnnd im Absaz Ergreiff sein
          cling zu der deinen vnd far mit dem bint vnden durch vnd thrit mit dem
          Rechten hinder sein Lincken vnd wirf in
        </p>
      </Col>
      <Col>
        <p>
          Merke: Wenn er in der Oberhut auf dich zutritt und sticht oder
          schlägt, so setze mit deiner linken Hand ab. Beim Absetzen ergreife
          seine Klinge gegen deine und führe sie mit dem Band von unten durch,
          und tritt mit deinem rechten Fuß hinter seinen linken und wirf ihn.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_107r.jpg"
        width={887}
        height={631}
        title="109r"
        md={12}
      />
      <Col>
        <p>
          Ittem schlecht Er vnnden so sennck denn knopff vnndersich gegenn der
          Erdenn vnnd versez zwischenn dein beidt henndt / Inn dem Er wüder Auff
          zeicht so fahr mit deim knopff vonn vnnden Auff zum gemecht / vnd wend
          Inndes die Linck henndt übersich gegenn seinn herkhumenden streich vnd
          sez im den Ab vnn fahr Auff mit dem gehils vnnd stich Im über sein
          Rechten Arm Ein zum gesicht vnnd sez im Ann <br />
          Ittem gehe zum mann Inn der vnder hutt / vnnd stich im von vndenn zum
          ge&shy;sicht / schecht oder sticht Er vnndes / so sez ab / vnnd las
          die Recht hanndt vom binndt vnnd würff das hinder dich / khum mit der
          Rechten der Lincken zu hilff vnnd schlag vonn vnnden Auff mit dem
          bickell zwischenn sein bein zum gerecht Ruck Als baldt mit beiden
          henden übersich vm den kopff vnnd schlag zu denn obern blößenn <br />
          Ittem thritt zu Im In der vnnder hutt zuck vnnd thraw Im denn stich /
          In&shy;des las dein binndt fahrenn / vnnd thrit vm sein Linck greüff
          mit bej&shy;denn hennden Inn dein khleing / vnnd würff Im denn bürkell
          Inn die hüfft vnder seim Burckenn geschmeidt mit sterck In die Ring
        </p>
      </Col>
      <Col>
        <p>
          Ferner, schlägt er von unten, so senke den Knauf abwärts gegen die
          Erde und versetze zwischen deinen beiden Händen. Wenn er sein Schwert
          wieder aufzieht, fahre mit deinem Knauf von unten aufwärts zum Gemächt
          und wende indes die linke Hand aufwärts gegen seinen ankommenden
          Streich und setze ihm den ab, und fahre auf mit dem Gehilz und stich
          ihm über seinen rechten Arm ins Gesicht und setze ihm an.
          <br />
          Gehe auch in der Unterhut auf den Mann zu und stich ihm von unten zum
          Gesicht. Schlägt oder sticht er von unten, so setze ab und lass die
          rechte Hand vom Band und wirf es hinter dich. Bringe die rechte der
          linken zur Hilfe und schlage von unten auf mit dem Pickel zwischen
          seine Beine zum Gemächt. Reiße sogleich mit beiden Händen aufwärts um
          den Kopf und schlage zu den oberen Blößen.
          <br />
          Tritt auch in der Unterhut auf ihn zu, zucke und drohe ihm den Stich.
          Lass indes dein Band fahren und tritt um seine linke Seite, greife mit
          beiden Händen in deine Klinge und wirf ihm den Pickel in die Hüfte
          unter seinem Brustharnisch mit Kraft in die Ringe.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_107v.jpg"
        width={887}
        height={631}
        title="109v"
        md={12}
      />
      <Col>
        <p>
          Ittem stich Im auß der vnnder hutt / zum gemecht / zuck wüder vnnd las
          dein binnd fachren aus der Rechten hanndt vnnd greüff domit Inn die
          klingen schlecht Er / so nim mit deinem gehils Aus von der Rechten
          gegen seiner lincken Im außnemen las dein gehils / vmb den kopff
          fahren / vnd schlag Im zu seim für gesezten kniebüg / thritt behenndt
          Ein thrit hinder sich / domitt du dich Erhalst vnd dein bindt wüder
          Ergreüffest <br />
          Aus düsenn bis hieher geschrübenn stuckenn ist hoffich gnug
          v[er]stendig wie mann die schleg soll zu werck brinngen / vnnd ist zu
          mercken das sich Einer hüetten soll so viel Er kann vor Annsezenn oder
          Rinngenn er habe Inn dann zum Erstenn sehr geschwecht mit
          donerschlegenn als zum Enckell / zur knibüg / zu denn gelennckenn Ann
          Armbüg vnd Annderen blößenn / wann Er Also Er midett ist vnnd mit
          schlegenn geschwecht / Als dann greüff ann mit annsezenn <br /> zuuor
          soltu Im nit sthenn / sonder Imer algemechlich weichen vnd In
          verzoblen laßenn / doch Aber wo du Ein fortheill Ersehest das der nit
          vnfrucht barlich versaumett werde <br />
        </p>
      </Col>
      <Col>
        <p>
          Stich ihm auch aus der Unterhut zum Gemächt, ziehe zurück und lass
          dein Band aus der rechten Hand fahren und greife damit in die Klinge.
          Schlägt er, so nimm es mit deinem Gehilz auf, von deiner Rechten gegen
          seine Linke. Beim Aufnehmen lass dein Gehilz um den Kopf fahren und
          schlage ihm in seine vorgesetzte Kniekehle. Tritt behände einen
          Schritt zurück, damit du dein Gleichgewicht bewahrst und deinen Griff
          wieder ergreifst.
          <br />
          Aus den bisher beschriebenen Stücken ist hinreichend zu verstehen, wie
          man die Schläge ins Werk setzen soll. Und es ist zu merken, dass man
          sich so gut wie möglich vor dem Ansetzen oder Ringen hüten soll, bis
          man den Gegner zuerst mit Donnerschlägen stark geschwächt hat – an den
          Knöcheln, Kniekehlen, Gelenken am Armbug und anderen Blößen. Wenn er
          so ermüdet und durch Schläge geschwächt ist, dann greife mit Ansetzen
          an.
          <br />
          Zuvor sollst du ihm nicht standhalten, sondern stets allmählich
          weichen und ihn sich erschöpfen lassen; doch wo du einen Vorteil
          siehst, lass ihn nicht ungenutzt verstreichen.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_108r.jpg"
        width={887}
        height={631}
        title="110r"
        md={12}
      />
      <Col>
        <p>
          Ittem jetz thritt zu Im mit Annsetzenn mit stehen aus der obenn hutt
          vnnd stich mit krafft Inn sein visier / heutt Er übersich vnd will
          Absetzen so zuck nebenn Ab / vnnd stich Inn vnder sein Lincken Arm /
          schaw daß du satt stenndest vnnd dich nit überwegest dem gewicht noch
          / merck als baldt dein ortt hefft Ann Rüngen so schlag dein gehüls
          vnder dein Rechte ühsenn dring Inn vor dür hin oder sez im vnder den
          Rechten vchsen vnnd schlag den knopff vnder dein linck vhsenn an /
          vnnd dring von dir vnd las in nit abkumen vnnd zeich mit der Rehten
          den sebell vnnd arbeitt Im zum gelencken / oder mit vnnder hewenn{' '}
          <br />
          Ittem thu als woltestu Inn mit dem klos / für das visier schlagenn als
          baldt du merckest das Er aussentt zuuer sezenn zwischenn sein beidt
          henndt so zuck bechenndt Ab / vnnd sez Im vnder die Recht vhsenn /
          vnnd merck wenn du Einer Also Ergreiffest mit ansezen vnnder die Reht
          vhsenn vnnd auch mit deinem sampff vnder dein Linck vhsen wüe vor
          gelertt / mit was listen dz gesichticht <br /> so mag er sein Sebell
          nit geziehenn das ist auch der fortheill mit dem Sebell
        </p>
      </Col>
      <Col>
        <p>
          Tritt nun auf ihn zu und setze ihm aus der Oberhut mit festem Stand
          an, und stich mit Kraft in sein Visier. Wehrt er aufwärts ab und will
          absetzen, so zucke seitwärts und stich ihm unter seinen linken Arm.
          Achte darauf, dass du fest stehst und dein Gewicht nicht
          überbalancierst. Merke: Sobald deine Spitze im Ringen festhält,
          schlage dein Gehilz unter deine rechte Achsel und dringe ihn vor dir
          her, oder setze ihm unter die rechte Achsel an und schlage den Knauf
          unter deine linke Achsel und dringe ihn von dir und lass ihn nicht
          loskommen. Dann ziehe den Säbel mit der rechten Hand und arbeite an
          seinen Gelenken oder mit Unterhieben.
          <br />
          Tu auch so, als wolltest du ihm mit dem Knauf vors Visier schlagen.
          Sobald du merkst, dass er ansetzt, zwischen seinen beiden Händen zu
          versetzen, so zucke behände zurück und setze ihm unter die rechte
          Achsel an. Und merke: Wenn du ihn so ergreifst mit Ansetzen unter die
          rechte Achsel und auch mit deinem Arm unter deine linke Achsel, wie
          zuvor gelehrt – mit welcher List dies geschieht – so kann er seinen
          Säbel nicht ziehen. Und das ist auch der Vorteil mit dem Säbel.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_108v.jpg"
        width={887}
        height={631}
        title="110v"
        md={12}
      />
      <Col>
        <p>
          Ittem schlecht Er dür zum kneÿ / so versetz Inn die mit deiner
          clingenn hinder seim kreutz Ergreüff sein schwerdt zu dem deinem vnnd
          fachr mit dem knopff In sein kneikel / Rucke zu dür vnnd stos mit der
          Lincken hanndt vonn dür
        </p>
      </Col>
      <Col>
        <p>
          Und wenn er dir aufs Knie schlägt, versetze mit der Mitte deiner
          Klinge hinter seinem Kreuz, ergreife sein Schwert gegen deines und
          fahre mit dem Knauf in seine Kniekehle. Ziehe ihn zu dir und stoße ihn
          mit der linken Hand von dir.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_109r.jpg"
        width={887}
        height={631}
        title="111r"
        md={12}
      />
      <Col>
        <p>
          Ittem stich mit Im gleich hinein vonn deiner Rechten gegenn seinner
          Linncken mit deim ortt woll über seinn schwerdt / vnnd Ergreüff sein
          schwertt zu dem deinen / las die Recht hanndt Ab vnnd greiff sein
          Lincken Elenpogenn Ruck denn übersich zu dür Auff dein Linck seitten
          für thritt Inn mit deim Linckenn fus so felt Er <br />
          Ittem Im zu thritt stell dich mit geberdenn Als woltest Im stehenn
          zuck Aber Ann dich vnnd las dein binndt über dein Lincken Arm fahrenn
          / vnnd schlag Im Ein Bundtschlag oder streich zu seiner Rechtenn
          Achsell / vnnd merck Als baldt Er Auff fertt zuuersezenn so volfüer
          denn streich mit der Linncken hanndt vnnd greiff Inndes mit der
          Rechtenn hanndt vnndenn durch dein schwertt vnnd begreüff domit sein
          Recht / zuck Inn zu dür vnnd kum mit der lincken hanndt sampt dem
          schwerdt der Rechtenn zu hilff brüch oder würff Inn noch deinem
          gefallem <br />
          Ittem schlag Inn mitt dem binndt zum kopff Inn dem schlag las deinn
          hanndt ab vnnd greüff mitt der selbenn hanndt Ann sein Rechtenn
          Elenpogen für thritt Inn mitt dem Lincken fus vnnd stos vonn dür
        </p>
      </Col>
      <Col>
        <p>
          Stich auch gleichzeitig mit ihm hinein, von deiner Rechten gegen seine
          Linke, mit deiner Spitze gut über sein Schwert. Ergreife sein Schwert
          gegen deines, lass die rechte Hand los und greife seinen linken
          Ellbogen. Ziehe ihn aufwärts zu dir auf deine linke Seite und tritt
          mit deinem linken Fuß vor – so fällt er.
          <br />
          Ferner stelle dich beim Zutritt mit Gebärden, als wolltest du ihn
          stechen, ziehe aber an dich zurück und lass dein Band über deinen
          linken Arm gleiten und schlage ihm einen Bundtschlag oder Streich zu
          seiner rechten Schulter. Merke: Sobald er auffährt zum Versetzen,
          vollführe den Streich mit der linken Hand und greife indes mit der
          rechten Hand von unten durch dein Schwert und ergreife damit seine
          rechte Hand. Ziehe ihn zu dir und bringe die linke Hand samt dem
          Schwert der rechten zur Hilfe – brich ihn oder wirf ihn nach deinem
          Gefallen.
          <br />
          Schlage ihm auch mit dem Band auf den Kopf. Beim Schlag lass deine
          Hand los und greife mit derselben Hand seinen rechten Ellbogen, tritt
          mit dem linken Fuß vor und stoße ihn von dir.
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_109v.jpg"
        width={887}
        height={631}
        title="111v"
        md={12}
      />
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_110r.jpg"
        width={887}
        height={631}
        title="112r"
        md={12}
      />
      <Col>
        <p>
          Ittem wann du Inn geschwecht hast mit donerschlegenn wie obenn gelertt
          so fas dein schwertt wie nechst Inn die ober hutt vnnd stich Im oben
          Ein Im stich las die Recht hanndt vom binndt vnnd zeich denn Sebell /
          Als baldt Er seinen auch zeicht so hawe Im zur hanndt vnnd folg baldt
          zu Im mit dem Sebell vonn vnnden Auff Ann seine Arm vnnd thritt mitt
          dem Rechten fus hinder sein lincken vnnd stos mit dem knopff für sein
          hals oder Ann sein Achsell oder Aber fus gesicht so felt Er <br />
          Ittem hastu dein beüdt wecht gezogenn / so thritt zu Im mit dem
          Rechten fus vor vnnd denn Sebell halt in der Rehten hanndt dein
          schwertt Inn der lincken zum stich thritt vnnd stich Im Obenn hinein
          zum gesicht vnnd fachr mit dem Sebell vonn vnnden auff zwischenn dür
          vnnd Im zur vorsazung zucke Inndes daß schwertt obenn vm / vnnd stich
          Im zum gemecht / greüfft Er mit der lincken hanndt nach dem schwerdt /
          so las fachren vnnd greiff mit deiner Lüncken sein lünnck hanndt Ruck
          die zur vnnd stos mit dem Sebell auff sein gelenck vnnd thrit mit dem
          Rechtenn für sein Lincken / wendt dich auff dein Linck seitten vnd
          würff In über dein Recht bein / oder brüch Im sein arm / last Er aber
          die Recht handt ab vnd
        </p>
      </Col>
      <Col>
        <p>
          Ferner, wenn du ihn mit Donnerschlägen wie zuvor gelehrt geschwächt
          hast, so fasse dein Schwert wie vorhin in die Oberhut und stich ihm
          von oben hinein. Beim Stich lass die rechte Hand vom Band und ziehe
          den Säbel. Sobald er seinen auch zieht, so haue ihm zur Hand und folge
          ihm rasch mit dem Säbel von unten auf an seinen Arm. Tritt mit dem
          rechten Fuß hinter seinen linken und stoße mit dem Knauf vor seinen
          Hals oder an seine Schulter oder aber ins Gesicht – so fällt er.
          <br />
          Ferner, hast du beide Waffen gezogen, so tritt mit dem rechten Fuß
          vor. Den Säbel halte in der rechten Hand, dein Schwert in der linken
          zum Stich. Tritt vor und stich ihm von oben ins Gesicht und fahre mit
          dem Säbel von unten auf zwischen dir und ihm zur Versatzung. Zucke
          indes das Schwert von oben um und stich ihm zum Gemächt. Greift er mit
          der linken Hand nach dem Schwert, so lass es fahren und greife mit
          deiner linken seine linke Hand, ziehe sie zu dir und stoße mit dem
          Säbel auf sein Gelenk. Tritt mit dem rechten Fuß vor seinen linken,
          wende dich auf deine linke Seite und wirf ihn über dein rechtes Bein –
          oder brich ihm den Arm.
          <br />
          Lässt er aber die rechte Hand los und
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_110v.jpg"
        width={887}
        height={631}
        title="112v"
        md={12}
      />
      <Col>
        <p>
          greifft nach seim Sebell oder nach deim schwerdt / so Ergreüff Im sein
          Rechten hanndt mit deiner Linckenn Ruck die zu dür Reüb Im die
          vndersich vmb vnnd stos mit dem Sebell auff sein gelennck am
          Elenpogenn vnd brüch Im denn arm <br />
          Ittem so du vonn deim schwerdt werest kumen so vnnder gehen Inn mit
          deim Sebel vnnd Ergreüff mit deiner lincken hanndt sein schwerts
          klüngen würdt die vnnder dein Linck vchsenn / oder halt die fest vonn
          dür vnnd haw Im zur hanndt lest Er dz schwerdt vnnd greüfft zum Sebell
          so stich Im mit dem Sebell außen In den hendtschuch Ruck nit wüder
          sonnder stos mit dem gehils Inn sein gesicht vnnd hinder thritt Inn so
          felt Er <br />
          Ittem hest Im sein schwerdt Ergrüffenn vnnd Er will denn Sebell
          ziehenn so hawe Im zur hanndt oder las sein schwerdt vnnd Ergreiff
          sein Recht hannd Ruck die zu dür vnnd stich oder stos In mit dem
          sebels knopff auff sein gelennck <br />
          Summa mit dem schwerdt soltu Im thrennen sein geschmidt / mitt dem
          Bückell oder hawer die knübüg oder fügenn / vnnd müt dem klos lemen /
          vnnd die gelenck vnnd glüder brechenn vnd bochen / Ittem domit
          annsetzen / So dür aber deinn
        </p>
      </Col>
      <Col>
        <p>
          greift nach seinem Säbel oder nach deinem Schwert, so ergreife seine
          rechte Hand mit deiner linken, ziehe sie zu dir, drehe sie abwärts um
          und stoße mit dem Säbel auf sein Gelenk am Ellbogen und brich ihm den
          Arm.
          <br />
          Ferner, bist du von deinem Schwert getrennt worden, so gehe mit deinem
          Säbel auf ihn zu und ergreife mit deiner linken Hand die Klinge seines
          Schwerts. Klemme sie unter deine linke Achsel oder halte sie fest von
          dir und haue ihm zur Hand. Lässt er das Schwert und greift zum Säbel,
          so stich ihm mit dem Säbel von außen in den Handschuh. Ziehe nicht
          zurück, sondern stoße mit dem Gehilz in sein Gesicht und bringe ihn
          zum Stolpern rückwärts – so fällt er.
          <br />
          Ferner, hast du sein Schwert ergriffen und er will den Säbel ziehen,
          so haue ihm zur Hand oder lass sein Schwert los und ergreife seine
          rechte Hand. Ziehe sie zu dir und stich oder stoße ihn mit dem Knauf
          des Säbels auf sein Gelenk.
          <br />
          Zusammenfassend: Mit dem Schwert sollst du ihm die Rüstungsfugen
          auftrennen; mit dem Pickel oder der Schneide die Kniescheiben und
          Fugen schlagen; und mit dem Knauf lähmen, die Gelenke und Glieder
          brechen und hämmern, und ihm damit ansetzen. Wenn dir aber dein
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_111r.jpg"
        width={887}
        height={631}
        title="113r"
        md={12}
      />
      <Col>
        <p>
          schwerdt genumen oder wie du daruon werest kumen soltu mit dem Sebell
          arbeitten vnnd mit Ringenn zu Im nachenn vnnd mit dem knopff
          vn&shy;der / die augen steßenn / vnnd schawe das du Im Ein bein megest
          beschlißenn oder für threttenn <br />
          Ittem so du vonn deim schwerdt khumen werest vnnd dein gegenn parth
          hett beide wechr gezogenn / so halt dich Inn der vnnder hutt vnnd
          wartt mit der Rechtenn hanndt ob du Im sein schwerdt megest Ergreüffen
          vnnd mit dem Sebell wartt seines streichs / vnnd schaw ob du Im seinen
          schwanck megest ab gewünnen bej seim Lincken Elenpogen denn dolchenn
          soltu nitt Ruckenn du habest Inn dan geworffenn <br />
          Wann du Inn geworffenn hast so fanng mit deim Lincken kny sein Rechten
          arm vnnd mit der Linckenn hanndt für sein hals / vnnd greüff mit der
          Rechtenn sein Linck vnnd kum mit der Lincken der Rechten hanndt zu
          hilff / vnnd zeih dein degenn vnnd arbeitt zwischenn denn fügen wo du
          am schedlichstenn vermeinest / wann du Im dann die fügen gthrent hast
          / so thrucke Ein feder las / vnnd stich mit der kleinern klingenn
          zwischen
        </p>
      </Col>
      <Col>
        <p>
          Schwert genommen wurde oder du davon getrennt bist, sollst du mit dem
          Säbel arbeiten und dich mit Ringen ihm nähern und mit dem Knauf unter
          die Augen stoßen, und sieh zu, ob du ihm ein Bein stellen oder
          vortreten kannst.
          <br />
          Ferner, bist du von deinem Schwert getrennt und dein Gegner hat beide
          Waffen gezogen, so halte dich in der Unterhut und warte mit der
          rechten Hand, ob du sein Schwert ergreifen kannst, und mit dem Säbel
          warte auf seinen Streich. Sieh zu, ob du ihm den Schwung abnehmen
          kannst bei seinem linken Ellbogen. Den Dolch sollst du nicht ziehen,
          bis du ihn geworfen hast.
          <br />
          Wenn du ihn geworfen hast, fange mit deinem linken Knie seinen rechten
          Arm und lege deine linke Hand vor seinen Hals. Greife mit der rechten
          seine linke Hand und bringe die linke der rechten Hand zur Hilfe.
          Ziehe dann deinen Degen und arbeite zwischen den Fugen, wo du es am
          schädlichsten meinst. Wenn du ihm die Fugen aufgetrennt hast, drücke
          eine Feder los und stich mit der kleineren Klinge zwischen
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_111v.jpg"
        width={887}
        height={631}
        title="113v"
        md={12}
      />
      <Col>
        <p>
          die gethrente fügen <br /> Ittem las denn dolchenn gar las mit allenn
          spietzen vnnd Arbeüdt mit deim kleinern zum helm wo Er offenn ist{' '}
          <br /> Wo an&shy;dene blößenn zu finden sündt ist vor gelert wordenn50
          Ittem felt Er auff denn bauch so fall Im auff die gelennck seines arms
          mit deinem knÿ vnnd brich Im die arm / Ittem fall im auf dz schlos am
          Rucken <br />
          Ittem hastu Inn geworffenn / so stich Erdenn aus vnnd fill Im sein
          vüsier oder schneidt Etwas aus seim wappenn Rock / vnnd verstopff Im
          sein visier. Ittem arbeitt mit dem dolchen zum gemecht oder zwischenn
          den Fügen oder stos Inn für sein hertz oder ann die gelennck wo die
          sindt <br />
          Lastlich soll man merckenn dieweill sich zugethragenn / das bis
          weillen In Ettlichenn wehren gleiche stuck sindt für die hanndt
          gelauffen / hab ichs kurze halbenn / wo es Inn Einer Wechr gesez / Inn
          der anndern ausgelaßenn / so es an nachteill dem verstenndt hett
          geschechen kenen / domit ich nit Ein ding offt setz wergeblich / auch
          dieweill das fechtenn also geschaffenn das Ein Erfarner diser kunst /
          sein fortheill auch Inn vnbekannten wechren soll Er sehen / hab ichs
          dachin gericht / vnnd Ein wechr mit dem anndern verfast / auff dz so
          einer
        </p>
      </Col>
      <Col>
        <p>
          die aufgetrennten Fugen. Ferner lass den Dolch ganz los mit allen
          Spitzen und arbeite mit der kleineren Klinge am Helm, wo er offen ist.
          Wo andere Blößen zu finden sind, ist zuvor gelehrt worden.
          <br />
          Fällt er auf den Bauch, so falle ihm mit deinem Knie auf die Gelenke
          seines Arms und brich ihm die Arme. Falle ihm auch auf die Schnallen
          der Rüstung am Rücken.
          <br />
          Hast du ihn geworfen, so stich Erde auf und fülle ihm sein Visier,
          oder schneide etwas aus seinem Wappenrock und verstopfe ihm sein
          Visier. Arbeite dann mit dem Dolch zum Gemächt oder zwischen den Fugen
          oder stoße ihm vors Herz oder an die Gelenke, wo diese sind.
          <br />
          Zuletzt sei bemerkt, dass es zuweilen vorkommt, dass in verschiedenen
          Waffen gleiche Stücke vorkommen. Der Kürze halber habe ich sie, wo sie
          in einer Waffe dargelegt wurden, in der anderen ausgelassen, sofern
          dies ohne Nachteil für das Verständnis geschehen konnte – damit ich
          nicht dasselbe unnötig wiederhole. Da auch die Fechtkunst so
          beschaffen ist, dass ein Erfahrener dieser Kunst seinen Vorteil auch
          in unbekannten Waffen erkennen soll, habe ich es so eingerichtet, dass
          eine Waffe mit der anderen verbunden ist, sodass wer
        </p>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle
        src="fechtbuch/MS_Bibl._2465_112r.jpg"
        width={887}
        height={631}
        title="114r"
        md={12}
      />
      <Col>
        <p>
          sich zur übung begebenn will / vnnd Ein wehr mit dem anndern
          Concordiren / als was Einer Im schwerdt für stuck gelehrnt die selbenn
          auch Im dusackenn versuchtt / Ittem was Einer Im dusackenn gelertt
          auch Inns Rapir firtt / her&shy;wüderumb aus dem Rapür Inn dusackenn /
          Ittem die Rinngen vnnd grüff Im dolchen Inn das harnasch Fechtten /
          Also haltt es sich auch Inn lenngern wechrenn als stennglen /
          helparttenn vnnd spies / wehr diser Regell folgett / württ dises buchs
          nutz / vnnd mein fleis woll spienen werdenn <br /> Wie Es mechr zur
          lechr dann zur züer gemacht Ist
        </p>
      </Col>
      <Col>
        <p>
          sich üben und eine Waffe mit der anderen in Einklang bringen will –
          sodass man, was man im Schwert an Stücken gelernt hat, auch im Dusack
          versucht; und was man im Dusack gelernt hat, auch ins Rapier
          überträgt, und umgekehrt aus dem Rapier in den Dusack. Ebenso die
          Ringer und Griffe mit dem Dolch ins Harnischfechten. So verhält es
          sich auch bei längeren Waffen wie Stangen, Hellebarden und Spießen.
          Wer dieser Regel folgt, wird dieses Buch nützlich finden, und mein
          Fleiß wird wohl belohnt werden. Wie es mehr zur Lehre als zur Zier
          gemacht ist.
        </p>
      </Col>
    </Row>
  </>
)
