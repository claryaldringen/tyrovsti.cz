import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const VegetiusOVozoveHradbeCgm356 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="vegetius-o-vozove-hradbe-cgm-356" />
        <h4>
          Vegetiovo učení o vozové hradbě z rukopisu Cgm 356, konec 15. století
          {draft && <DraftBadge />}
        </h4>
        <p>Pracovní přepis a překlad, zatím bez odborné korektury.</p>
        <p>
          Text je zapsán v rukopisu Cgm 356 Bavorské státní knihovny v Mnichově,
          anonymní knize o ohňostrojích a puškařství. Celý rukopis psala jedna
          ruka bavorským nářečím s východošvábskými rysy, jeho původ není znám a
          vodoznaky papíru ukazují na poslední desetiletí 15. století.
          <Qt
            publication={PUBLICATIONS.SCHNEIDER1973}
            href="https://handschriftenportal.de/search?hspobjectid=HSP-ab1f2e94-505c-3efe-ae59-e996710ab174"
            note="Str. 46–47"
          />{' '}
          Katalog text vede jako řád vozové hradby (<i>Wagenburgordnung</i>).
          <Qt
            publication={PUBLICATIONS.SCHNEIDER1973}
            href="https://handschriftenportal.de/search?hspobjectid=HSP-ab1f2e94-505c-3efe-ae59-e996710ab174"
            note="Str. 48"
          />{' '}
          Ve skutečnosti vychází z kapitol 22–25 a 27 první knihy Vegetiova
          spisu <i>Epitoma rei militaris</i> v německém překladu Ludwiga
          Hohenwanga, jak ho známe z augsburského tisku asi z roku 1475.
          Hohenwang v těchto kapitolách překládá římský vojenský tábor jako
          vozovou hradbu (<i>wagenburg</i>), a proto se v textu mluví o bránách{' '}
          <i>praetoria</i> a <i>decumana</i>, o kohortách a setninách.
          <Qt
            publication={PUBLICATIONS.HOHENWANG}
            href="https://www.digitale-sammlungen.de/de/view/bsb00038208?page=40"
          />{' '}
          Pisatel rukopisu Hohenwangův text místy zkrátil a změnil a na konec
          kapitoly o opevnění vozové hradby připojil dodatek, který v tisku
          není. Vedle motyk a lopat žádá sekery, cepy, kosy a srpy a na každý
          vůz ve vozové hradbě kopí dlouhé 24 stop s hákem, český cep s
          železnými hroty a dva střelce z hákovnic.
          <Qt
            publication={PUBLICATIONS.HOHENWANG}
            href="https://www.digitale-sammlungen.de/de/view/bsb00038208?page=41"
          />
          <Qt
            publication={PUBLICATIONS.CGM356}
            href="https://www.digitale-sammlungen.de/de/view/bsb00135889?page=195"
            note="Str. 192"
          />{' '}
          Obsah těchto stran převyprávěl do moderní němčiny Würdinger jako
          ukázku z knihy o ohňostrojích z konce 15. století.
          <Qt
            publication={PUBLICATIONS.WURDINGER2}
            href="https://www.digitale-sammlungen.de/de/view/bsb11684126?page=407"
          />
        </p>
        <p>
          Poznámky k přepisu a překladu: Zkratky rozepisuji, pravopis ponechávám
          podle rukopisu a <i>u</i> s nadepsaným znaménkem přepisuji jako{' '}
          <i>ü</i>. Sporná čtení jsem ověřoval podle Hohenwangova tisku.
          <br />
          Slovo <Cit>ritter</Cit> zde podle Hohenwanga odpovídá latinskému{' '}
          <i>miles</i>, překládám ho proto jako <Cit>vojáci</Cit>. U příkopu
          znamená <Cit>hoch</Cit> hloubku, <Cit>spitz</Cit> je šik,{' '}
          <Cit>auffbietter</Cit> vyvolávač (Hohenwang má <i>büttel</i>),{' '}
          <Cit>getüll stecken</Cit> kůly na palisádu a <Cit>beichel</Cit>{' '}
          sekery.
          <br />
          Číslovku, kterou čtu jako <i>x</i>, má rukopis v kapitole o opevnění
          na pěti místech ve stejné podobě. Hohenwangův tisk uvádí u řádného
          příkopu šířku 12 a hloubku 9 stop a po navršení zeminy hloubku 13 a
          šířku 12 stop. První příkop podle něj měří 9 stop do šířky a 7 do
          hloubky, kdežto rukopis má 7 nebo 8 a 6 stop. Würdinger v rukopisu
          četl 10 stop. U deseti tisíc kroků se rukopis s tiskem shoduje.
          <Qt
            publication={PUBLICATIONS.HOHENWANG}
            href="https://www.digitale-sammlungen.de/de/view/bsb00038208?page=43"
          />
          <br />
          Obrat <Cit>an die wege</Cit> v kapitole o opevnění nemá v tisku obdobu
          a jeho smysl je nejistý.
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
            note="Str. 190"
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
            note="Str. 191"
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
            note="Str. 192"
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
            note="Str. 193"
          />
        </p>
      </Col>
      <Col md={6}>
        <h5>Dále o vozové hradbě</h5>
        <p>
          Vozová hradba se má stavět především tehdy, když se blíží nepřítel, na
          bezpečném místě, zvláště tam, kde je dost dřeva, dost píce a také dost
          vody. A má-li se tam zůstat déle, má se vybrat zdravé místo. Je třeba
          dbát, aby u vozové hradby nebyl blízký kopec, aby ho nepřítel
          neobsadil a vozovou hradbu neoblehl. Také aby pole nebývalo
          zaplavováno přívalovou vodou, od níž by vojsko muselo trpět nesnáze.
          Také se má vozová hradba opevnit podle počtu jezdců a pěších a také
          výstroje, která k nim patří, aby nebylo množství lidu vtěsnáno do
          úzkého prostoru nebo aby se malý počet nerozprostřel na širokém
          prostoru víc, než je nutné atd.
        </p>
        <h5>O vozové hradbě</h5>
        <p>
          Vozové hradby se stavějí někdy čtvercové, někdy trojúhelníkové a někdy
          půlkruhové, podle toho, co si místo nebo potřeba žádá. Brána, které se
          říká <i>praetoria</i>, má stát buď proti východu slunce, nebo proti
          místu, odkud je vidět nepřítele. Je-li však vojsko na pochodu, má
          hledět na tu stranu, kam chce vojsko táhnout, a za ní se rozestaví
          první kohorty, to jest první houf, stany, praporce a znamení. Brána,
          které se říká <i>decumana</i>, je za branou, které se říká{' '}
          <i>praetoria</i>, a je to brána, kterou jsou vojáci hodní trestu
          vyváděni k potrestání atd.
        </p>
        <h5>Jak se má vozová hradba opevnit</h5>
        <p>
          Opevnění vozové hradby je mnohé, zvláště však trojí. Když nedoléhá
          velká nouze, má se vozová hradba obehnat drny nebo zeminou a z toho se
          udělá jakoby zeď tři stopy vysoká, takže vpředu vznikne příkop, a
          zemina se nahází dovnitř (?) z místa, odkud byly drny vzaty. Potom se
          udělá příkop sedm nebo osm stop široký a šest stop hluboký. Kde se
          však nepřítele nejvíce obávají, má se vozová hradba opevnit řádným
          příkopem, aby byl x stop široký a x stop hluboký pod čarou, jak se
          říká, x stop. Také se mají na příkopech vozové hradby udělat dobré
          ploty a zemina, která se z příkopu sem a tam vykope, se má snést
          dohromady. Tato zemina přidá výšce příkopu čtyři stopy. Tak bude
          příkop x stop hluboký a x stop široký. K tomu je třeba mít kůly na
          palisádu ze silného dřeva, které trabanti nebo pěší pacholci obvykle
          nosí, dále motyky a lopaty a také dobré sekery, dobré cepy, kosy a
          srpy v dostatečném množství. Dále na každém voze, který stojí ve
          vozové hradbě, dlouhé kopí, které má být 24 stop dlouhé a má mít
          vpředu ostré železo dobré k bodání a na železe hák, a český cep s
          železnými hroty a také na každém voze dva střelce z hákovnic s jejich
          výstrojí, je-li to možné atd.
        </p>
        <h5>Jak se má vozová hradba opevnit, když se blíží nepřítel</h5>
        <p>
          Opevnit vozovou hradbu je snadné tam, kde nejsou nepřátelé. Je-li však
          nepřítel nablízku, má se celá jízda a polovina pěších pacholků seřadit
          do šiku, aby odrazili útok, a ostatní za nimi mají kopat příkopy a
          opevňovat vozovou hradbu. A vyvolávač má oznámit, která setnina
          dokončila své dílo jako první, která jako druhá a která jako třetí.
          Potom setníci dají vše prohlédnout a změřit a ti, kdo pracovali
          liknavě, jsou potrestáni. Proto je třeba nové vojáky vést k takovému
          zvyku, aby vozovou hradbu, když to nouze žádá, mohli opevnit a
          zajistit bez zmatku a rychle atd.
        </p>
        <h5>O římském cvičení jezdců a pěších</h5>
        <p>
          Proto zůstal starý zvyk a nařízením Augusta i Hadriána se přikazuje,
          aby jezdci i pěší pacholci byli třikrát do měsíce vyváděni na
          procházku, neboť tímto slovem se takové cvičení označuje. Pěší
          pacholci totiž dostávali rozkaz jít v plné zbroji a vystrojení všemi
          zbraněmi deset tisíc kroků a vrátit se do vozové hradby, přičemž část
          cesty urazili během. Také jezdci, rozdělení do turm a v plné zbroji,
          urazili stejný kus cesty, a to tak, že podle jezdeckého řádu jednou
          pronásledovali, jindy ustupovali a pak se zase prudkým protiútokem
          obraceli. A nejen v poli, ale i v údolích a na vysokých místech musel
          každý šik stoupat nahoru a dolů, aby se nemohlo stát nic, co by se
          stateční a pevní vojáci předtím neustálým cvičením nenaučili atd.
        </p>
      </Col>
    </Row>
  </>
)
