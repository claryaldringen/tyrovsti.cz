import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { HeadExtended } from '../components/HeadExtended'
import { LANG_EN } from '../shared/constants'
import { ImageWithTitle } from '../components/ImageWithTitle'

const Page = () => {
  return (
    <>
      <HeadExtended
        lang={LANG_EN}
        title="Joachim Meyer, fechtbuch (MS Bibl. 2465)"
      />
      <Container>
        <Row>
          <Col className="text">
            <Row>
              <Col>
                <h1>Fechtbuch Joachima Meyera (MS Bibl. 2465)</h1>
                <p>
                  <b>MS Bibl. 2465</b> je německý fechtbuch sepsaný Jocahimem
                  Meyerem roku 1561. Originál je v současnosti uložen ve
                  sbírkách Bavorského národního muzea v Mnichově v Německu.
                  Tento rukopis, který může být Meyerovým nejstarším dílem, byl
                  vytvořen pro Georga Johanna II., hraběte Falckého z Veldenzu.
                  Od poloviny 20. století se věřilo, že je ztracen, ale Olivier
                  Dupuis v červnu 2021 oznámil, že jej znovu nalezl.
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
                  Vom Kempffenn Vnnd Fechtenn Im harnasch zu Fus kürtzlich
                  beschrüben
                </h4>
                <p>
                  Die weil des kempffenn manchlej Artt ist / so kann mann Auch
                  khein gewüß Regell gebenn Dann Ein Ider dem Ein kampf württ
                  ausgepotten hatt disen fort¬ theill / das Er Im mag Erdencken
                  was Er weis das Im diensttlich ist Es sej mit seltzam wechrenn
                  oder sampt listige behennde forteill / dann der dem / der
                  kampff Ausgebotten würdt / gübtt die wechr / die mag Er
                  machenn wie Er will <br /> Zuu Einem Exempell / Es solenn zwen
                  mit Einander kempffen vnd der Ein Wechr lincks der Annder
                  Rechts. Nun der Recht gett dem lincken Aůsgebotten / So last
                  der linck die Wechr machenn auff dise Weis / Nemlich zwej
                  scharpffer Rapir / vnd zwen scharpffer dolchen / Dornach zwo
                  R. armschirleinn Iden Einen / nemlich Am rechten arm / die
                  weill Er linck ist / vnnd Arm Ein Jdenn Armgezeig Imwendig am
                  gebüg Ein scherpffe spitz / so lanng wann Einer denn selben
                  Arm / Ein wenig biege / das Er sich selbes sticht <br /> Do
                  sie nun Auff gestimbttenn blatz khumen vnnd vm die Wehren
                  laßenn / so thut nun Jder sein R. armschin Ann / An sein
                  rechten Arm zu welchen Arm sie geordinirtt sindt / Als sie nun
                  sollenn Ann kampff thretten so khann sich der recht nit
                  wechrenn dann Als baldt Er denn Arm biegett so sticht Er sich
                  selber / darzu
                </p>
              </Col>
              <Col md={6}>
                <h4>O pěším boji a boji ve zbroji, stručně popsáno</h4>
                <p>
                  Protože boj má mnoho způsobů, nelze stanovit žádné pevné
                  pravidlo. Kdo má být vyzván k boji, má tu výhodu, že si může
                  promyslet, co mu nejlépe poslouží – ať už neobvyklé zbraně
                  nebo lstivá a obratná výhoda. Neboť ten, kdo je k boji vyzván,
                  určuje zbraně a může si je zvolit, jak chce.
                  <br />
                  Například: Mají spolu bojovat dva lidé a jeden je levák a
                  druhý pravák. Pravák vyzve leváka. Levák tedy zvolí zbraně
                  takto: Dva ostré rapíry a dvě ostré dýky. Dále dvě nátepní
                  zbroje (ararmschirleinn), každý jednu na pravé paži, protože
                  levák má pravou ruku méně zručnou, a v každé této nátepní
                  zbroji je uvnitř hrot, který, když někdo paži jen trochu ohne,
                  ho bodne.
                  <br />
                  Když tedy přijdou na místo boje a mají nasadit zbroj, každý si
                  nasadí svou nátepní zbroj na pravou paži, jak je určeno.
                  Jakmile mají vstoupit do boje, pravák se nemůže ubránit –
                  jakmile jen trochu ohne paži, sám sebe bodne.
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
                  darzu ist im sein lincker arm blös / darin Er den dolchen
                  fiertt sich zu schießen der Linck aber / helt sein Rechtenn
                  arm stranke mit dem dolchen zur versatzung / vnnd wehrtt sich
                  mit der Lincken / also württ der recht geschedigt mehr von Im
                  / denn vom findt <br /> Aus disem Exempell Ist leichtlich zu
                  mercken das alweg der den bestenn fortheill hatt der die wechr
                  last machenn oder gübtt <br /> Diß hab ich dorumb Erzelt /
                  Auff das sich Ein Jder der Einem Anndern Ein kampff wolte
                  annbietten Auff solchenn list bedacht sej / vnnd nit Also Im
                  zorn Erauß schawe / sonnder mit gdnig sich darzů anbietten /
                  wie dann solches auch zu gelaßen mag werdenn / das Jren zwen
                  Eins werden Im harnascht oder blos oder mit ausgethruckten
                  wehren zu kempffen. Was Aber das fechtenn oder kempffen mit
                  bloßenn leib / belangt vnnd was für forteill vnnd wie die zu
                  brauhen sindt Ist bis her Im Rapir vnnd Anndern wehren gelehrt
                  / vnnd gnugsam begriffen will jetzt alein die fortheill Im
                  harnascht fechten wie die zu brauchen sindt / sezen vnnd ist
                  zu mercken das gewönlich drej wehr Im harnasch bebraucht
                  werden / Als Ein spis vnnd Ein schwertt Auch Ein dolchen /
                  oder Ein dolchen unnd Ein sebell vmb gegürtt / vnnd Ein
                  schwertt
                </p>
              </Col>
              <Col md={6}>
                <p>
                  Navíc má svou levou paži holou, ve které drží dýku, aby se
                  mohl bránit. Levák však pevně drží svou pravou paži s dýkou k
                  obraně a bojuje levou paží. Tak utrpí pravák větší škodu od
                  sebe samého než od protivníka.
                  <br />
                  Z tohoto příkladu je snadné poznat, že vždy má nejlepší výhodu
                  ten, kdo nechá zbraně vyrobit nebo je poskytuje. To jsem
                  vyprávěl proto, aby si každý, kdo chce někomu nabídnout boj,
                  dobře promyslel takové léčky a nejednal unáhleně ve vzteku,
                  nýbrž aby se k tomu odhodlal s rozvahou a klidem – tak, jak se
                  to také obvykle praktikovalo, že se dva dohodnou, zda budou
                  bojovat v plné zbroji, nebo bez ní, nebo se zbraněmi, které si
                  sami zvolí.
                  <br />
                  Co se týče samotného boje beze zbroje a různých výhod a
                  způsobů jejich využití, to bylo dosud dostatečně vysvětleno
                  při rapíru a jiných zbraních a je jasně pochopeno. Teď chci
                  pouze popsat výhody v boji v plné zbroji, jak je využít a jak
                  je postavit. A je třeba poznamenat, že se obvykle používají
                  tři zbraně při boji v brnění: kopí a meč, také dýka – nebo
                  dýka a šavle u pasu a meč.
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
                  Die Erst ordnug der wechren Ist dise Im harnasch zu fechten.
                  Nemlich Ein Spis vnnd Ein schwertt / vnnd Ein kempff degen
                  oder Ein dolchen / oder auch Ein schilt Also Im Anngreiffen
                  hatt mann den schilt vnnd spis gebraucht <br /> vnnd habenn
                  mit dem Spies gearbteittett / ob Einer denn Anndern fellenn
                  zwischen die bein / vnnd miedenn / oder habenn mit dem spis
                  geschoßenn vnd dem schutzs nach gefolgett / dan Es In groß
                  übung geweßen vor zeitten mit dem Spis schießenn / dornach
                  wann sie die Spis verschoßenn / habenn sie zum schwerter
                  grieffen vnnd ferner zum dolchen oder kampff degen <br /> Ich
                  will aber die Annder ordnung für mich nemen zu Erkhleren
                  daraus man zimlich lehren wirt wie es vmb das kempffen zu fus
                  gescheffen Ist / vnnd will Auch drej fordheilischer
                  künstlicher wechr für mich nemenn / Als zum Erstenn Ein
                  schwerdtt welches soll Also sein obenn der knopff soll haben
                  fier zecken neben herum die fünft obenn aus / die soll nit
                  lang sein sonnder kunpf das sie nott leiden mag Ittem dz
                  kreutz soll sein wie Ein maurerhamer / die spitz vnnd kling
                  Eckehtig <br />
                  vnnd das soll alles von gantzem Eisen geschmitt sein vnnd die
                  ortt woll gestehelt
                </p>
              </Col>
              <Col md={6}>
                <p>
                  První uspořádání zbraní pro boj v plné zbroji je toto: kopí a
                  meč a bojový tesák nebo dýka, případně také štít. Při útoku se
                  používá štít a kopí a pracuje se s kopím – například jestli se
                  jednomu podaří druhého srazit mezi nohy nebo se mu vyhnout,
                  nebo jestli se s kopím hází a pak následuje kryt, protože v
                  dřívějších časech bylo velkým uměním házet kopí. Poté, co kopí
                  odhodili, sáhli po meči a dále po dýce nebo bojovém tesáku.
                  <br />
                  Já však chci pro sebe vzít jiné uspořádání, abych ukázal, jak
                  se má bojovat pěšky, a chci také jmenovat tři výhodné, uměle
                  vyrobené zbraně. První z nich je meč, který má mít nahoře
                  hlavici se čtyřmi hroty po stranách a pátým nahoře, který nemá
                  být dlouhý, ale spíše kompaktní, aby vydržel nárazy. Záštita
                  má být jako zednické kladivo, špička a čepel mají být hranaté.
                  A to vše má být vykováno z jednoho kusu železa a hrot dobře
                  zakalený.
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
                  Es soll Auch fein geschmeidig gemacht sein / das ein man woll
                  freien mag / die leng / noch eines Idenn woll gefalen <br />{' '}
                  Ittem der sebell soll starck sein Ein gute schneidt Aber doch
                  nit gar zu schwer <br /> Der dolch soll driefach sein / dz
                  drej klingen Inn Einander sindt / Als wan man drej spicknadel
                  Im einander steckett / vnd die Reren sollenn Auff Einander
                  schließenn vnnd mit federn zugericht sein / das / so man Eine
                  thruckt Ein spis ledig württ / denn braucht man Also wan Einer
                  zwischen Ein fuge kumpt / so thrent man Im sie / das Ein weitt
                  loch giebt Als dan druckt Er denn selbenn Ersten dolchen las /
                  so Ist dan die Ander spitz khleiner vnd Raner / domit sticht
                  Er Inn das vorig loch / welches denn will thieffer geht dan
                  das Erste / so Er merck das Es in leib ganngen ist / lest Er
                  die feder las vnd last Im die spitz sterk welche jener nit
                  baldt ziehen kann / der dolchen gehertt zu brauchen wann du
                  Inn geworffen hast <br /> Ittem so es Ein gefalt khann Er den
                  dolchen woll fürfach machenn / Er soll Aber gemacht sein das
                  die federn nit mercklich sind / Auff das wehrs Inn schranckenn
                  bringt / sein gegen partt nit leichlich mag Auff thun / Er
                  aber soll sich zuuor geibt darin machen / dann der die wehr
                  gübt kann sich darin übenn nach seim gefallenn / vnnd
                  sonderlich fordell / darin suchenn / welches der Annder nit so
                  baldt Im schrancken Ersehenn oder
                </p>
              </Col>
              <Col md={6}>
                <p>
                  Meč má být také pěkně ohebný, aby ho člověk mohl dobře
                  ovládat, a délka i provedení mají každému vyhovovat.
                  <br />
                  Šavle má být pevná, s dobrou čepelí, ale nemá být příliš
                  těžká.
                  <br />
                  Dýka má být trojitá, se třemi čepelemi zasazenými do sebe –
                  jako kdyby člověk zasunul tři špejle do sebe. Hrany těchto tří
                  čepelí se mají uzavírat na sebe a být spojeny pružinami tak,
                  aby když se jedna část stiskne, jedna z čepelí se vysune. To
                  se používá tehdy, když člověk zasáhne spáru – pak čepel
                  roztrhne spáru a vytvoří velký otvor. <br />
                  Když pak uvolní první část dýky, druhý hrot je menší a
                  štíhlejší a může proniknout do vzniklého otvoru, který jde
                  hlouběji než první. Když člověk ucítí, že je čepel v těle,
                  uvolní pružinu a nechá vysunout silnější hrot, který protivník
                  jen tak nevytáhne.
                  <br />
                  Dýka se používá, jakmile ji protivník dostane do těla. Pokud
                  se zbraň zadrhne, dýka se snadno opět uvolní a dá se znovu
                  použít. Musí být ale zhotovena tak, aby pružiny nebyly vidět,
                  aby při pohledu na zbraň nebyly patrné a protivník ji jen
                  těžko rozeznal.
                  <br />
                  Ten, kdo tuto zbraň používá, by si ji měl předem dobře
                  nacvičit a hledat v ní svou výhodu, protože protivník ji tak
                  rychle ve zbrani nerozezná ani nepoužije.
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
                  thun das Er dich nit mit Ein donerschlag übereill / vnnd las
                  Inn vorver¬ thobenn / vnnd merck wenn Er dür Ein schlag thut
                  das du Im den ver¬ sezest zwischen dein beidt hendt / vnd
                  schaw ob du im megest Annsetzenn <br />
                  Zum anndern hab Acht das dür nit angesezt weret / so dür Aber
                  angesezt ist Ann dein linck so thrit mit dem lincken zu Ruck
                  oder sez dein knopff auf dein brust vnnd Erlang der ortt / vnd
                  sez Im auch ann / vnd thring von dür / Ittem wenn Er weitt vm
                  sich ficht / so Reise Im nach mit dem ortt zur blöß / merck
                  die blöße sindt dise / do man hin stehen oder Ansezen soll /
                  das vüsier / vnnd vnnder die vhsen die knikel Inn die handt
                  Ittem zwischenn die bein / Außwendig zum handtschuch hinein /
                  vnd wo der harnasch gelenck hatt / Merck das du nit zu Einer
                  weitern blöße greifest / so du Ein nahere blöße magst haben /
                  zum letzstenn die finger Lösenn nemlich wo dich Einer
                  Ergreiffe / so schaw das du Im Ein finger kanst
                </p>
              </Col>
              <Col>
                <p>
                  Dbej na to, aby tě nepřekvapil drtivým úderem, a nech ho
                  nejprve udeřit naprázdno. Pamatuj si, že když on udeří, máš mu
                  to zachytit mezi svýma rukama – a sleduj, zda mu můžeš zasadit
                  úder.
                  <br />
                  Dále dávej pozor, aby tě nezaskočil nasazením hrotu. Pokud
                  však už ti byl hrot nasazen na tvou levou stranu, ustup levou
                  nohou vzad nebo přilož hlavici meče na svou hruď a umísti hrot
                  proti soupeři. Potom mu ho také nasaď a tlač ho od sebe.
                  <br />A když on kolem sebe prudce seká, pohybuj hrotem meče
                  proti jeho odkrytým místům. Pamatuj, že odkrytá místa jsou
                  tato: hledí, pod podpažím, kolena, ruce, mezi nohama, zvenčí
                  do rukavice a tam, kde má zbroj klouby. Pamatuj, abys neútočil
                  po vzdálenějších odkrytích, když můžeš zasáhnout blíž. A
                  nakonec: uvolni jeho prsty, totiž tam, kde tě někdo uchopí,
                  tak se dívej, zda mu můžeš vzít jeden prst a sevření rozlomit
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
                  ledig machen / denn brich Im übersich / Ittem Annbrich /
                  gemecht stos / Bein bruch oder knüstos / Zum Erstenn will ich
                  das harnasch fechten Exempels weis durch gehenn / darnach die
                  forteill der vorgemelten wehren sezenn Im Anthretten nim dein
                  schwertt Inn die oberhut mit dem beidt nebenn deim haupt /
                  vnnd greiff mit der Lincken handt dein kling In der mit / dz
                  die spitz dem man Inn sein gesicht steh / thrit Also zu Im /
                  das dein Lincker fus Alzeit vorstehe sej nit zu goch / vnnd
                  schaw ob du Im sein vorgesezten fus megest Erlanngen / so thu
                  als weltest Im zum gesicht stehenn / las Inn des die recht
                  handt vom hefft / vnndt kum domit der Lincken handt zu hielff
                  vnnd schlag Inn mit dem knopff / zum kopff / oder zu seim
                  Lincken arm / versezt Er dür denn schlag zwischen sein beidt
                  hendt / so las vm den kopf Faren / vnnd schlag Im vonn deiner
                  Rechtenn / zu seim knibien oder Enckel Ittem gehe Inn der ober
                  hutt zu Im wie vor / vnnd hab Acht ob Er dür Annsezenn oder
                  stehenn woll / so sez im vor deiner Lincken hanndt ab /
                  schlechtt Er dür dann von obenn / so versezt Im denn schlag /
                  zwischen dein beidt handt stich Inndes ausen über seinn arm /
                  vnd sez Im Ann drißell / als baltt du befindest
                </p>
              </Col>
              <Col>
                <p>
                  Osvoboď se a případně mu zlom postoj. Také do něj vejdi úderem
                  do slabin, prolomením nohy nebo kloubu.
                  <br />
                  Za prvé chci projít příklady boje ve zbroji a poté popíšu
                  výhody výše zmíněných zbraní.
                  <br />
                  Při vstupu do boje vezmi svůj meč do horního střehu (Oberhut)
                  , obě ruce vedle hlavy, a levou rukou uchop čepel uprostřed
                  tak, aby hrot mířil protivníkovi do obličeje. Takto postupuj k
                  němu, aby tvá levá noha byla vždy vepředu – ne příliš daleko.
                  A dívej se, zda můžeš dosáhnout na jeho přední nohu. Tak se
                  tvař, jako bys chtěl zasáhnout jeho obličej, pak uvolni pravou
                  ruku z jílce a přidej ji levé ruce ku pomoci a udeř ho hlavicí
                  meče do hlavy nebo do jeho levé paže. Pokud zachytí tvůj úder
                  mezi svýma rukama, nech (meč) projet kolem hlavy a udeř ho z
                  tvé pravé strany na jeho koleno nebo kotník.
                  <br />
                  Dále jdi k němu v horním střehu (Oberhut) jako předtím a dávej
                  pozor, zda chce zasadit úder nebo bodnout – pak mu jej odtlač
                  levou rukou. Pokud pak udeří shora, zachyť jeho úder mezi
                  oběma rukama a přitom bodni zvenčí přes jeho paži na jeho
                  hrdlo.
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
                  das dein ort hafft so schlag dein beidt vnder dein Recht
                  ahsell vnd las in nit ab khumen sonnder dring für dich / Ittem
                  gehe in der ober hutt zu Im stich Im zu seinn visir wertt Er
                  so sez im ann / an sein Linck Achsell thring für dich hin /
                  hab acht als baldt Er sich ledig[en] will das du Inn dein
                  gewicht nach Ereilest mit Ringen / werffen / oder stoßen / Inn
                  fornen ann sein visir / merck so du Einem / hast Anngesezt so
                  las Inn nit ab kumen / so khann Er nit Ar¬ beitten / Die ander
                  hutt halt dein schwertt mit dem gefes neben deiner rechten
                  hüfft / fast die klingen mit der Lincken hanndt Inn der mit /
                  das dein ortt gegen dem mann stehe / denn Linck fus alzeitt
                  vor / thritt also zu Im sticht Er so sez ab von der handt /
                  schlecht Er so entpfang den streich zwischen dein beidt hendt
                  Inn die klingen Inndes hab acht wenn Er schlecht / vnnd thritt
                  mit dem Rechtenn zu dür / so versez wie gelertt / vnnd far mit
                  dem knopf Inn sein kniebüg / will Er denn fus zucken so sez Im
                  ann vnder sein Rehte vhsenn oder wo du khannst / vnnd thring
                  von dür <br /> oder far mit dem knopff auff vmb sein hals
                  vnndt thritt mit dem Rehten hinder sein bein vnnd würff Inn{' '}
                  <br /> Ittem v[er]sez Im sein schlag aus der hutt vnd far auff
                  mit dem gehilz / vnnd stich Im zum thrisell oder zu denn
                  blößen bej den
                </p>
              </Col>
              <Col>
                <p>
                  Když tvůj hrot drží pevně, udeř oběma rukama pod svou pravou
                  paži a nenech ho odtáhnout, ale tlač proti němu. Také z
                  horního střehového postavení jdi k němu a bodni ho do hledí.
                  Když se brání, zasaď mu úder na jeho levé podpaží a tlač ho od
                  sebe pryč. Dávej pozor, jakmile se bude chtít vyprostit, abys
                  ho ihned zastihl svým těžištěm – zápasem, stržením nebo úderem
                  – přímo do jeho hledí. Pamatuj: když někoho zasáhneš, nenech
                  ho uniknout, pak nebude moci pracovat.
                  <br />
                  Další střehové postavení: drž svůj meč s jílcem vedle své
                  pravé kyčle a levou rukou uchop čepel uprostřed, aby hrot
                  směřoval proti protivníkovi. Levá noha vždy vpředu. Přistup k
                  němu tak, aby když bodá, odrazil jsi to rukou, a když seká,
                  zachyť jeho úder mezi své ruce do čepele. Dávej pozor, když se
                  odtahuje a dělá krok pravou nohou – odraž podle naučeného a
                  zasáhni ho hlavicí do jeho kolenního kloubu.
                  <br />
                  Když pak ucukne nohou, zasaď ho pod jeho pravé rameno nebo
                  tam, kam můžeš, a tlač ho od sebe pryč. Nebo hlavicí obejmi
                  jeho krk, krokni pravou nohou za něj a sraz ho k zemi. Také
                  odraž jeho úder ze střehu a rychle zvedni rukojeť a bodni ho
                  do hrdla nebo do odkrytých míst u
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
                  gelennckenn. Ittem sez im denn stich ab / vnnd du desgleichen
                  / vnnd so offt du Im angesezt hast / so schlag dein knopff
                  vnnder die vchsenn so du dein forteil E¬ sichest / Annsezenn
                  sündt vier Eins Ins gesicht / ann thrisell Ittem ann die Linck
                  vchsenn oder vnnder die Reht achtsell <br /> vnnd merck so du
                  Im an dj Linck ansezest / so kum mit dem Lincken fus vor sez
                  du Im vnder die recht Achsell / so thritt mit dem rechten vor
                  / weitter soltu alweg so du anngesezt hast übersich thrinngen
                  / so Er Aber kurczer ist dann du / so senck dein gehils
                  vnndersich bis zu der hüfft / vnnd thring Also übersich von
                  dür / last Er dür die seitten so stos Inn ann die hauben / do
                  ist Er am krenckesten / so offt du ansezest so schaw das du Im
                  woll In die Ring sezest / wenn du recht ansezest vnd recht
                  dringst so kan Er nitt woll arbeitten Bruch Ittem hatt dür
                  Einer angesezt / so stich oben über sein Rechten arm hinein
                  vnder seim schwertt durch thruck dein knopff vndersich gegen
                  der Erden / als baldt Er ledig lest / so schies dein schwertt
                  vor dür hin vnder seim rechten durch / vnd mit deinn rechten
                  fus hinder sein Lincken vnnd greiff mit der Lincken hanndt an
                  sein haubenn vnd würff Inn / in eill hindersich. Ittem stich
                  Im Inn handschuh am der vergesezsten handt / vnd fier Inn
                  herum oder stich Im vnnder seim Lincken Arm auff über sein
                  schwerdt thruck mit dem knopff übersich vnnd sez Im Ann Ittem
                  von denn
                </p>
              </Col>
              <Col>
                <p>
                  kloubů. Také odraž jeho bodnutí a ty udělej totéž. A tak
                  často, jak mu zasadíš úder, udeř hlavicí pod podpaží, když
                  vidíš svou výhodu. Cíle jsou čtyři: jeden do obličeje, druhý
                  do hrdla, třetí do levého podpaží a čtvrtý pod pravé rameno.
                  <br />
                  Pamatuj: když mu zasadíš úder z levé strany, přistup levou
                  nohou dopředu a zasáhni ho pod pravé rameno, pak pravou nohou
                  zase vpřed. Dále – kdykoliv zasadíš úder, vždy tlač přes něj,
                  a jestliže je menší než ty, spusť rukojeť dolů k jeho boku a
                  tlač přes něj a pryč od sebe. Když se ale stáhne do boku, udeř
                  ho do helmy, tam je nejzranitelnější.
                  <br />
                  A tak často, jak mu zasadíš úder, dívej se, abys ho dobře
                  zasadil do sevření, protože když to provedeš správně a pevně,
                  nemůže dobře bojovat. Když ti ale zasadí úder on, bodni mu
                  přes jeho pravou paži pod jeho meč, tlač hlavicí dolů k zemi a
                  jakmile se uvolní, prostrč svůj meč vpřed pod jeho pravou paži
                  a pravou nohou mu vklouzni za jeho levou nohu, levou rukou
                  uchop jeho helmu a hoď ho rychle za sebe.
                  <br />
                  Také bodni ho do rukavice na jeho méně chráněné ruce a otoč ho
                  nebo bodni pod jeho levé rameno přes jeho meč, tlač hlavicí
                  přes něj a zasaď mu úder.
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
                  Ringenn merck Ann welcher seitten Er dür hatt Anngesezt / so
                  greiff sein kling mit teiner Lüncken hendt thring Also von dür
                  Inndes zuck ab / vnnd Ruck Inn zu dür vnnd Erwische in mit der
                  rechten hanndt / sein rechte handt / vnd Ruck In zu dür vnd
                  begreif sein leib vnnd heb übersich / vnnd Er heb In vnd
                  schlag Im die fies vndenn Aus vnd würff In von dür / Ittem
                  sticht Einer auff dich / so stich mit Im gleich hinein auff
                  sein linck seitten / vnnd ÿm stich fang sein kling zu deiner
                  vnnd fahr mit deim knopff vnnden durch beidt Arm / vnnd schlag
                  übersich so mus Er laßenn Ittem hab Acht welche henndt du Im
                  Erwischen megest die Ruck zu dür / vnnd mit der Anndern hanndt
                  greiff Im seinen Elenpogenn / vnnd Him48 Im das gewicht / vnnd
                  Inn Allen thrits bis nit zu goch / Auff das du Ein sattenn
                  stanndt habest / Ittem so du einen geworffenn hast / fellt Er
                  so fall mit zu seiner Rechtenn vnnd müt dem Rechtten Knie
                  zwischenn sein beidt bein / vnd mit der lincken handt vm sein
                  hals / so du Inn gewis gefast hast / so Ruck dein dolchen /
                  greift Er zu dem dolchen / so stich Im zur handt vnd Ruck mit
                  wüder / bis du dein forteil beßer Ersehen hast Ittem Ein
                  Anders nim sein rechten Arm zwischen dem bein / vnnd leg dich
                  Auff Inn zwerchs vnd haltt dein bein fast zu
                </p>
              </Col>
              <Col>
                <p>
                  Při zápasu si všímej, ze které strany na tebe zaútočil – pak
                  uchop jeho čepel svou levou rukou, tlač od sebe a přitom ho
                  stáhni k sobě a chyť ho pravou rukou za jeho pravou ruku.
                  Přitáhni ho k sobě, uchop ho kolem těla a zvedni ho přes sebe.
                  Když ho zvedneš, udeř mu nohy zespodu a shoď ho pryč od sebe.
                  <br />
                  Když někdo bodá proti tobě, bodni s ním současně dovnitř na
                  jeho levé straně a při jeho bodnutí zachyť jeho čepel svou
                  čepelí. Potom hlavicí zespodu mezi oběma pažemi udeř a zasáhni
                  přes něj – tak ho donutíš to pustit.
                  <br />
                  Také si všímej, kterou rukou ho můžeš nejlépe uchopit a
                  stáhnout k sobě. Druhou rukou uchop jeho loket a získej nad
                  ním kontrolu. Při všech těchto krocích nenechávej své nohy
                  příliš úzké, abys měl pevný postoj.
                  <br />
                  Když už ho srazíš, padne-li, padni s ním na jeho pravou
                  stranu, s pravým kolenem mezi jeho nohama a s levou rukou
                  kolem jeho krku – jakmile ho máš pevně sevřeného, vytáhni svou
                  dýku. Když on sáhne po své dýce, bodni ho do ruky a strhni mu
                  ji, dokud nezískáš lepší výhodu.
                  <br />
                  Další způsob: uchop jeho pravou paži mezi jeho nohama, polož
                  se na něj napříč a drž svou nohu pevně u něj.
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
                  zusamen vnnd streck dich fast vnnd greüff mit deiner lüncken
                  handt An sin lincken Arm / vnnd helt denn fast / vnnd Arbeitt
                  mit dem degen wie hernach folgen wirtt
                </p>
                <h4>Wie mann die drey vor gemelten wechr brauchen soll</h4>
                <p>
                  Merck Im Erstenn Anthritt gehe In der oberhutt zu Im vnnd
                  stell dich mit geberdenn Als woltest In zum gesicht stehen thu
                  es nit sonder schlag od[er] haw vonn oben nider nach sein knie
                  bucklen thriffest oder nit so far behendt mit denn henden
                  übersich vnnd schlag Inn mit dem bickell / zum kopff / Außen
                  über seinen Rechtenn Arm / oder schlag In auff sein gelenck
                  des nechst das dir werden mag / zuck bechenndt vmb dein kopff
                  vnnd las die Reht fahren vor der lincken hanndt vnnd greüff
                  domit hünder deiner lincken Inn die klingen vnnd schlag vonn
                  deiner Rechten Ein mittelschlag nach sein helm / Es sej mit
                  dem bickell oder hawer / oder mit dem klos / Er greüff dein
                  bindt wüder mitt deiner Rechttenn hanndt vnnd thritt wüder zu
                  Ruck daß du dich wüder Erhalest / vnnd hab fleißig Acht das Er
                  dür khein streich geb Auch las dür mitt Annsezenn sonder weich
                  Im kreis so viel es leiden will
                </p>
              </Col>
              <Col>
                <p>
                  Přitiskni se k němu a napni se pevně a uchop jeho levou paži
                  svou levou rukou a drž ji pevně. A potom pracuj s tesákem
                  (nebo mečem), jak bude dále popsáno.
                </p>
                <h4>Jak se mají používat ty tři dříve zmíněné zbraně</h4>
                <p>
                  Pamatuj: při prvním útoku jdi k němu z horního střehu a dělej,
                  jako bys mu chtěl mířit do obličeje – ale neudělej to, místo
                  toho ho udeř nebo sekej shora dolů na jeho kolenní kloub. Ať
                  už se trefíš nebo ne, pohybuj se rychle rukama přes něj a udeř
                  ho hlavicí do hlavy, zvenčí přes jeho pravou paži, nebo ho
                  udeř na kloub, který se ti nejvíc nabídne.
                  <br />
                  Potom stáhni prudce ruce zpět kolem své hlavy a nech pravou
                  ruku projet před levou rukou, uchop levou rukou zezadu jeho
                  čepel a udeř pravou rukou střední úder na jeho helmu – buď
                  hlavicí, čepelí nebo křížem záštity.
                  <br />
                  Když on tvůj úder zachytí, odpověz pravou rukou a ustup zpět,
                  abys získal znovu rovnováhu. Dávej si velký pozor, aby ti
                  nemohl zasadit úder, a nepouštěj se hned do protiútoku, ale
                  ustupuj do kruhu tolik, kolik je potřeba.
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
                  Merck thritt Inn der ober hutt zu Im / fas dein bündt nahett
                  bej dem knopf vnnd greif mit der linncken hanndt In die
                  klingen beim kreutz vnnd stich Im knefftiglich zu seim visier
                  / zuck wüder An dich vnnd stich mit sterck / vonn vnnden zu
                  seim gemecht / domit Er dür nit zu nahe khum / Ruck dein wehr
                  wüder ab / vnnd greüff mit der Lincken hanndt Inn das Erßette
                  theill deiner klingen dringt Er auff dich so weich zuu Ruck /
                  domit machestu Inn Endthrist vnnd württ baldt schlagen / so
                  las dich nit Er lanngenn sonnder weich aus / hatt Er
                  geschlagen so hab Achtung In dem Er sich verfelt so las die
                  Recht hanndt Ab / vnnd khum domit der lincken zu hilff vnnd
                  schlag Inn zum helm oder zum nechstenn gelüdt / hatt Er Aber
                  nit geschlagenn so schlag Inn zum knüe oder Enckell versezt Er
                  so fahr Auff mit den Armen / schlag Im zu dem obernn gelennck
                  / vnnd Ergreüff dein beidt wüder / so du aber demschlag Ja nit
                  kanst entgehenn so versez den obenn zwischen dein beidt hendt
                  in die klingen / würff Inndes denn knopff über dein Lincke
                  Achsell / vnd far mit der Lincken handt Auff vnd kum mit der
                  Rechten der Lincken zu hilff so kum¬ mestu zu schlagen Ehe Er
                  sich Erhalt
                </p>
              </Col>
              <Col>
                <h4>Druhý kus</h4>
                <p>
                  Pamatuj: při vstupu do horního střehu přistup k němu a uchop
                  svůj meč těsně u hlavice a levou rukou uchop čepel u kříže.
                  Bodni ho prudce do hledí. Pak rychle stáhni meč zpět k sobě a
                  bodni silně zdola do jeho slabin, aby se ti nedostal příliš
                  blízko.
                  <br />
                  Poté stáhni zbraň zpět a levou rukou uchop první třetinu
                  čepele. Když se na tebe tlačí, ustup zpět – tím ho odradíš a
                  donutíš ho brzy k úderu. Nedovol mu, aby tě zasáhl, ale uhýbej
                  stranou.
                  <br />
                  Když on zasáhne a přitom se vychýlí, uvolni pravou ruku a
                  pomoz si levou rukou a udeř ho do helmy nebo do nejbližšího
                  odkrytého místa.
                  <br />
                  Když však on neudeří, udeř ho do kolena nebo kotníku. Když se
                  brání, pokračuj a udeř ho do horního kloubu. A znovu uchop obě
                  ruce, ale když se nemůžeš úderu vyhnout, odraž ho nahoře mezi
                  oběma rukama do čepele a přehoď hlavici přes své levé rameno.
                  Přitom levou rukou zvedej a pravou jí pomáhej – tak ho
                  zasáhneš dřív, než se vzpamatuje.
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
                  Merck Wann Er zu dür thrit inn der Ober hutt sticht oder
                  schlecht Er so setz Ab von deiner Lincken handt / vnnd im
                  Absaz Ergreiff sein cling zu der deinen vnd far mit dem bint
                  vnden durch vnd thrit mit dem Rechten hinder sein Lincken vnd
                  wirf in
                </p>
              </Col>
              <Col>
                <p>
                  Pamatuj: když proti tobě přistupuje z horního střehu a bodá
                  nebo seče, odraž to levou rukou. A při tom odražení uchop jeho
                  čepel proti své a protlač ji spodem a přistup pravou nohou za
                  jeho levou a shoď ho.
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
                  Ittem schlecht Er vnnden so sennck denn knopff vnndersich
                  gegenn der Erdenn vnnd versez zwischenn dein beidt henndt /
                  Inn dem Er wüder Auff zeicht so fahr mit deim knopff vonn
                  vnnden Auff zum gemecht / vnd wend Inndes die Linck henndt
                  übersich gegenn seinn herkhumenden streich vnd sez im den Ab
                  vnn fahr Auff mit dem gehils vnnd stich Im über sein Rechten
                  Arm Ein zum gesicht vnnd sez im Ann <br />
                  Ittem gehe zum mann Inn der vnder hutt / vnnd stich im von
                  vndenn zum ge¬ sicht / schecht oder sticht Er vnndes / so sez
                  ab / vnnd las die Recht hanndt vom binndt vnnd würff das
                  hinder dich / khum mit der Rechten der Lincken zu hilff vnnd
                  schlag vonn vnnden Auff mit dem bickell zwischenn sein bein
                  zum gerecht Ruck Als baldt mit beiden henden übersich vm den
                  kopff vnnd schlag zu denn obern blößenn <br />
                  Ittem thritt zu Im In der vnnder hutt zuck vnnd thraw Im denn
                  stich / In¬ des las dein binndt fahrenn / vnnd thrit vm sein
                  Linck greüff mit bej¬ denn hennden Inn dein khleing / vnnd
                  würff Im denn bürkell Inn die hüfft vnder seim Burckenn
                  geschmeidt mit sterck In die Ring
                </p>
              </Col>
              <Col>
                <p>
                  A když on seče zespoda, spusť svou hlavici dolů k zemi a odraž
                  jeho úder mezi oběma rukama. Když se znovu zvedne, udeř svou
                  hlavicí zdola vzhůru do jeho slabin a přitom levou rukou odraž
                  jeho přicházející úder. Potom odraž jeho úder a rychle zvedni
                  rukojeť a bodni ho přes jeho pravou paži do obličeje a zasaď
                  ho.
                  <br />
                  Dále přistup k protivníkovi z dolního střehu a bodni ho zdola
                  do obličeje. Když on seká nebo bodá, odraž to a uvolni pravou
                  ruku z úchopu a hoď ho za sebe. Přitom pravou rukou pomoz levé
                  a udeř zdola hlavicí mezi jeho nohy do slabin. Potom ihned
                  oběma rukama obejmi jeho hlavu a udeř ho do horních odkrytých
                  míst.
                  <br />
                  Také přistup k němu z dolního střehu, stáhni se a lákej ho k
                  bodnutí. Přitom uvolni úchop a přistup za jeho levý bok.
                  Obejmni ho oběma rukama a vhoď mu svůj loket do boku pod jeho
                  brnění a silou ho vtáhni do sevření.
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
                  Ittem stich Im auß der vnnder hutt / zum gemecht / zuck wüder
                  vnnd las dein binnd fachrenn aus der Rechten hanndt vnnd
                  greüff domit Inn die klingen schlecht Er / so nim mit deinem
                  gehils Aus von der Rechten gegen seiner lincken Im außnemen
                  las dein gehils / vmb den kopff fahren / vnd schlag Im zu seim
                  für gesezten kniebüg / thritt behenndt Ein thrit hinder sich /
                  domitt du dich Erhalst vnd dein bindt wüder Ergreüffest <br />
                  Aus düsenn bis hieher geschrübenn stuckenn ist hoffich gnug
                  v[er]stendig wie mann die schleg soll zu werck brinngen / vnnd
                  ist zu mercken das sich Einer hüetten soll so viel Er kann vor
                  Annsezenn oder Rinngenn er habe Inn dann zum Erstenn sehr
                  geschwecht mit donerschlegenn als zum Enckell / zur knibüg /
                  zu denn gelennckenn Ann Armbüg vnd Annderen blößenn / wann Er
                  Also Er midett ist vnnd mit schlegenn geschwecht / Als dann
                  greüff ann mit annsezenn <br /> zuuor soltu Im nit sthenn /
                  sonder Imer algemechlich weichen vnd In verzoblen laßenn /
                  doch Aber wo du Ein fortheill Ersehest das der nit vnfrucht
                  barlich versaumett werde <br />
                </p>
              </Col>
              <Col>
                <p>
                  Dále ho bodni z dolního střehu do slabin, pak rychle stáhni
                  zpět a uvolni úchop pravou rukou a uchop jeho čepel. Když on
                  seká, použij svou rukojeť z pravé strany proti jeho levé a při
                  vyražení nech rukojeť projet kolem jeho hlavy a udeř ho do
                  jeho předního kolenního kloubu. Rychle udělej krok zpět, abys
                  získal rovnováhu a znovu pevně uchopil svou zbraň.
                  <br />
                  Z těchto dosud popsaných částí je dostatečně jasné, jak je
                  třeba údery provádět. A je třeba si pamatovat, že se máš co
                  nejvíce vyhýbat přímému úderu nebo zápasu, dokud ho nejprve
                  neoslabíš silnými ranami – například do kotníků, kolen, kloubů
                  paží a jiných odkrytých míst. Když je takto otřesen a oslaben
                  údery, pak ho teprve přistupuj uchopit a zasáhnout.
                  <br />
                  Předtím však nestůj proti němu přímo, ale vždy se trochu
                  odchyluj a nech ho znejistit, ale zároveň sleduj každou
                  příležitost, aby nebyla zbytečně promarněna.
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
                  Ittem jetz thritt zu Im mit Annsetzenn mit stehen aus der
                  obenn hutt vnnd stich mit krafft Inn sein visier / heutt Er
                  übersich vnd will Absetzen so zuck nebenn Ab / vnnd stich Inn
                  vnder sein Lincken Arm / schaw daß du satt stenndest vnnd dich
                  nit überwegest dem gewicht noch / merck als baldt dein ortt
                  hefft Ann Rüngen so schlag dein gehüls vnder dein Rechte
                  ühsenn dring Inn vor dür hin oder sez im vnder den Rechten
                  vchsen vnnd schlag den knopff vnder dein linck vhsenn an /
                  vnnd dring von dir vnd las in nit abkumen vnnd zeich mit der
                  Rehten den sebell vnnd arbeitt Im zum gelencken / oder mit
                  vnnder hewenn <br />
                  Ittem thu als woltestu Inn mit dem klos / für das visier
                  schlagenn als baldt du merckest das Er aussentt zuuer sezenn
                  zwischenn sein beidt henndt so zuck bechenndt Ab / vnnd sez Im
                  vnder die Recht vhsenn / vnnd merck wenn du Einer Also
                  Ergreiffest mit ansezen vnnder die Reht vhsenn vnnd auch mit
                  deinem sampff vnder dein Linck vhsen wüe vor gelertt / mit was
                  listen dz gesichticht <br /> so mag er sein Sebell nit
                  geziehenn das ist auch der fortheill mit dem Sebell
                </p>
              </Col>
              <Col>
                <p>
                  Dále přistup k němu a zasáhni ho pevným postavením z horního
                  střehu a bodni silou do jeho hledí. Když se brání a snaží se
                  tvůj úder odrazit, stáhni se stranou a bodni ho pod jeho levé
                  rameno. Dávej si pozor, abys pevně stál a nepřeklonil se
                  příliš dopředu ani dozadu. Pamatuj, jakmile tvůj hrot pevně
                  zasáhne při sevření, udeř svou rukojetí pod jeho pravé podpaží
                  a tlač ho před sebe nebo ho udeř pod jeho pravé podpaží a udeř
                  hlavicí pod své levé podpaží a tlač ho od sebe a nenech ho z
                  toho uniknout. Pak vytáhni pravou rukou šavli a zasáhni ho do
                  kloubu nebo spodním sekem.
                  <br />
                  Také dělej, jako bys mu chtěl zasáhnout obličej záštitou, a
                  jakmile poznáš, že chce odrazit úder mezi oběma rukama, rychle
                  stáhni úder zpět a udeř ho pod jeho pravé podpaží. Pamatuj, že
                  když někoho takto uchopíš a zasáhneš pod jeho pravé podpaží a
                  zároveň svou rukou pod své levé podpaží, jak bylo dříve
                  ukázáno – s jakou lstí to uděláš – pak on nemůže vytáhnout
                  svou šavli. A to je také výhoda šavle.
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
                  clingenn hinder seim kreutz Ergreüff sein schwerdt zu dem
                  deinem vnnd fachr mit dem knopff In sein kneikel / Rucke zu
                  dür vnnd stos mit der Lincken hanndt vonn dür
                </p>
              </Col>
              <Col>
                <p>
                  A když on seče směrem na koleno, odraž to svou čepelí za jeho
                  záštitu, uchop jeho meč proti svému a udeř hlavicí do jeho
                  kolenní jamky. Přitáhni ho k sobě a levou rukou ho odtlač pryč
                  od sebe.
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
                  Ittem stich mit Im gleich hinein vonn deiner Rechten gegenn
                  seinner Linncken mit deim ortt woll über seinn schwerdt / vnnd
                  Ergreüff sein schwerdt zu dem deinen / las die Recht hanndt Ab
                  vnnd greiff sein Lincken Elenpogenn Ruck denn übersich zu dür
                  Auff dein Linck seitten für thritt Inn mit deim Linckenn fus
                  so felt Er <br />
                  Ittem Im zu thritt stell dich mit geberdenn Als woltest Im
                  stehenn zuck Aber Ann dich vnnd las dein binndt über dein
                  Lincken Arm fahrenn / vnnd schlag Im Ein Bundtschlag oder
                  streich zu seiner Rechtenn Achsell / vnnd merck Als baldt Er
                  Auff fertt zuuersezenn so volfüer denn streich mit der
                  Linncken hanndt vnnd greiff Inndes mit der Rechtenn hanndt
                  vnndenn durch dein schwertt vnnd begreüff domit sein Recht /
                  zuck Inn zu dür vnnd kum mit der lincken hanndt sampt dem
                  schwerdt der Rechtenn zu hilff brüch oder würff Inn noch
                  deinem gefallem <br />
                  Ittem schlag Inn mitt dem binndt zum kopff Inn dem schlag las
                  deinn hanndt ab vnnd greüff mitt der selbenn hanndt Ann sein
                  Rechtenn Elenpogen für thritt Inn mitt dem Lincken fus vnnd
                  stos vonn dür
                </p>
              </Col>
              <Col>
                <p>
                  Také bodni současně s ním směrem z tvé pravé strany proti jeho
                  levé, přičemž tvůj hrot míří dobře nad jeho meč. Uchop jeho
                  meč proti svému, uvolni pravou ruku a uchop jeho levý loket.
                  Potom ho prudce přitáhni přes sebe na svou levou stranu a při
                  tom přistup levou nohou – tak padne.
                  <br />
                  Dále, když k němu přistupuješ, dělej, jako bys mu chtěl
                  zasáhnout přímo, ale pak rychle stáhni zbraň k sobě a nech
                  svůj úchop projet přes tvou levou paži a udeř ho úderem nebo
                  seknutím na jeho pravé rameno. Dávej pozor: jakmile on začne
                  odrážet, dokonči úder levou rukou a mezitím pravou rukou
                  přiveď svůj meč dolů a uchop jeho pravou ruku. Přitáhni ho k
                  sobě a levou rukou spolu s mečem pravé ruky mu dej „pomoc“ –
                  zlom ho nebo ho shoď, podle potřeby.
                  <br />
                  Také ho udeř úchopem do hlavy a při tom úderu uvolni ruku a
                  uchop tou samou rukou jeho pravý loket. Při tom přistup levou
                  nohou a odtlač ho od sebe.
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
                  Ittem wann du Inn geschwecht hast mit donerschlegenn wie obenn
                  gelertt so fas dein schwerdt wie nechst Inn die ober hutt vnnd
                  stich Im oben Ein Im stich las die Recht hanndt vom binndt
                  vnnd zeich denn Sebell / Als baldt Er seinen auch zeicht so
                  hawe Im zur hanndt vnnd folg baldt zu Im mit dem Sebell vonn
                  vnnden Auff Ann seine Arm vnnd thritt mitt dem Rechten fus
                  hinder sein lincken vnnd stos mit dem knopff für sein hals
                  oder Ann sein Achsell oder Aber fus gesicht so felt Er <br />
                  Ittem hastu dein beüdt wecht gezogenn / so thritt zu Im mit
                  dem Rechten fus vor vnnd denn Sebell halt in der Rehten hanndt
                  dein schwerdt Inn der lincken zum stich thritt vnnd stich Im
                  Obenn hinein zum gesicht vnnd fachr mit dem Sebell vonn vnnden
                  auff zwischenn dür vnnd Im zur vorsazung zucke Inndes daß
                  schwerdt obenn vm / vnnd stich Im zum gemecht / greüfft Er mit
                  der lincken hanndt nach dem schwerdt / so las fachren vnnd
                  greiff mit deiner Lüncken sein lünnck hanndt Ruck die zur vnnd
                  stos mit dem Sebell auff sein gelenck vnnd thrit mit dem
                  Rechtenn für sein Lincken / wendt dich auff dein Linck seitten
                  vnd würff In über dein Recht bein / oder brüch Im sein arm /
                  last Er aber die Recht handt ab vnd
                </p>
              </Col>
              <Col>
                <p>
                  Dále, když ho oslabíš silnými údery, jak bylo dříve popsáno,
                  uchop svůj meč v horním střehu a bodni mu shora. Při bodnutí
                  uvolni pravou ruku z úchopu a vytáhni šavli. Jakmile on také
                  tasí, sekej mu na ruku a okamžitě pokračuj šavlí zespoda
                  vzhůru na jeho paži. Přistup pravou nohou za jeho levou a udeř
                  hlavicí do jeho krku, do podpaží nebo do obličeje – tak padne.
                  <br />
                  Dále, když už jsi vytáhl obě zbraně, přistup k němu pravou
                  nohou vpřed. Šavli drž v pravé ruce a meč v levé ruce k
                  bodnutí. Přistup a bodni ho shora do obličeje a udeř šavlí
                  zespoda vzhůru mezi sebe a jeho paži, aby ses připravil k
                  dalšímu kroku. Přitom nech meč projet shora a bodni ho do
                  slabin. Když on levou rukou sahá po tvém meči, uvolni úchop a
                  levou rukou uchop jeho levou ruku, strhni ji k sobě a udeř
                  šavlí do jeho kloubu. Přistup pravou nohou za jeho levou, otoč
                  se na svou levou stranu a shoď ho přes svou pravou nohu – nebo
                  mu zlom paži.
                  <br />
                  Když on však pravou ruku uvolní a
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
                  greifft nach seim Sebell oder nach deim schwerdt / so Ergreüff
                  Im sein Rechten hanndt mit deiner Linckenn Ruck die zu dür
                  Reüb Im die vndersich vmb vnnd stos mit dem Sebell auff sein
                  gelennck am Elenpogenn vnd brüch Im denn arm <br />
                  Ittem so du vonn deim schwerdt werest kumen so vnnder gehen
                  Inn mit deim Sebel vnnd Ergreüff mit deiner lincken hanndt
                  sein schwerts klüngen würdt die vnnder dein Linck vchsenn /
                  oder halt die fest vonn dür vnnd haw Im zur hanndt lest Er dz
                  schwerdt vnnd greüfft zum Sebell so stich Im mit dem Sebell
                  außen In den hendtschuch Ruck nit wüder sonnder stos mit dem
                  gehils Inn sein gesicht vnnd hinder thritt Inn so felt Er{' '}
                  <br />
                  Ittem hest Im sein schwerdt Ergrüffenn vnnd Er will denn
                  Sebell ziehenn so hawe Im zur hanndt oder las sein schwerdt
                  vnnd Ergreiff sein Recht hannd Ruck die zu dür vnnd stich oder
                  stos In mit dem sebels knopff auff sein gelennck <br />
                  Summa mit dem schwerdt soltu Im thrennen sein geschmidt / mitt
                  dem Bückell oder hawer die knübüg oder fügenn / vnnd müt dem
                  klos lemen / vnnd die gelenck vnnd glüder brechenn vnd bochen
                  / Ittem domit annsetzen / So dür aber deinn
                </p>
              </Col>
              <Col>
                <p>
                  když sahá po své šavli nebo po tvém meči, uchop jeho pravou
                  ruku svou levou, přitáhni ji k sobě, otoč ji dolů a udeř šavlí
                  do jeho kloubu na lokti a zlom mu paži.
                  <br />
                  Dále, když se dostaneš pryč od svého meče, jdi k němu se šavlí
                  a levou rukou uchop jeho čepel, která je pod tvým levým
                  podpažím, nebo ji pevně drž od sebe a udeř mu na ruku. Když
                  pustí meč a sáhne po šavli, bodni ho šavlí zvenčí do rukavice.
                  Nenechávej to být – udeř hlavicí šavle do jeho obličeje a
                  okamžitě ustup vzad, tak padne.
                  <br />
                  Dále, když jsi mu uchopil jeho meč a on chce tasit šavli,
                  sekej mu na ruku nebo pusť jeho meč a uchop jeho pravou ruku.
                  Přitáhni ji k sobě a bodni nebo udeř hlavicí šavle do jeho
                  kloubu.
                  <br />
                  Shrnutí: s mečem mu máš rozsekat brnění, hlavicí nebo záštitou
                  zasáhnout kolenní klouby a nohy, s křížem (záštitou) podlomit
                  a klouby a údy lámat a ohýbat, a s tím také přistupovat k
                  sevření.
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
                  schwerdt genumen oder wie du daruon werest kumen soltu mit dem
                  Sebell arbeitten vnnd mit Ringenn zu Im nachenn vnnd mit dem
                  knopff vn¬ der / die augen steßenn / vnnd schawe das du Im Ein
                  bein megest beschlißenn oder für threttenn <br />
                  Ittem so du vonn deim schwerdt khumen werest vnnd dein gegenn
                  parth hett beide wechr gezogenn / so halt dich Inn der vnnder
                  hutt vnnd wartt mit der Rechtenn hanndt ob du Im sein schwerdt
                  megest Ergreüffen vnnd mit dem Sebell wartt seines streichs /
                  vnnd schaw ob du Im seinen schwanck megest ab gewünnen bej
                  seim Lincken Elenpogen denn dolchenn soltu nitt Ruckenn du
                  habest Inn dan geworffenn <br />
                  Wann du Inn geworffenn hast so fanng mit deim Lincken kny sein
                  Rechten arm vnnd mit der Linckenn hanndt für sein hals / vnnd
                  greüff mit der Rechtenn sein Linck vnnd kum mit der Lincken
                  der Rechten hanndt zu hilff / vnnd zeih dein degenn vnnd
                  arbeitt zwischenn denn fügen wo du am schedlichstenn
                  vermeinest / wann du Im dann die fügen gthrent hast / so
                  thrucke Ein feder las / vnnd stich mit der kleinern klingenn
                  zwischen
                </p>
              </Col>
              <Col>
                <p>
                  Když ti byl meč vzat nebo jsi se od něj musel vzdálit, pracuj
                  šavlí a zápasem – přistup k němu a hlavicí udeř pod oči.
                  Sleduj, zda mu dokážeš sevřít nohu nebo mu ji podkopnout a
                  podrazit.
                  <br />
                  Dále, když jsi přišel o svůj meč a protivník má obě zbraně
                  vytažené, drž se v dolním střehu a čekej pravou rukou, jestli
                  mu dokážeš uchopit jeho meč, a se šavlí čekej jeho úderu.
                  Sleduj, zda můžeš získat výhodu proti jeho levému lokti –
                  dýkou bys teď neměl bojovat, pokud ho už nemáš shozeného.
                  <br />
                  Když ho srazíš, zachyť jeho pravou paži svým levým kolenem a
                  levou rukou mu přitlač krk. Pravou rukou uchop jeho levou a
                  levou rukou pomoz pravé. Pak vytáhni svou dýku a pracuj mezi
                  klouby tam, kde to považuješ za nejnebezpečnější. A když mu
                  takto klouby přerušíš, stiskni pružinu a bodni menší čepelí
                  mezi
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
                  die gethrente fügen <br /> Ittem las denn dolchenn gar las mit
                  allenn spietzen vnnd Arbeüdt mit deim kleinern zum helm wo Er
                  offenn ist <br /> Wo an¬ dene blößenn zu finden sündt ist vor
                  gelert wordenn50 Ittem felt Er auff denn bauch so fall Im auff
                  die gelennck seines arms mit deinem knÿ vnnd brich Im die arm
                  / Ittem fall im auf dz schlos am Rucken <br />
                  Ittem hastu Inn geworffenn / so stich Erdenn aus vnnd fill Im
                  sein vüsier oder schneidt Etwas aus seim wappenn Rock / vnnd
                  verstopff Im sein visier. Ittem arbeitt mit dem dolchen zum
                  gemecht oder zwischenn den Fügen oder stos Inn für sein hertz
                  oder ann die gelennck wo die sindt <br />
                  Lastlich soll man merckenn dieweill sich zugethragenn / das
                  bis weillen In Ettlichenn wehren gleiche stuck sindt für die
                  hanndt gelauffen / hab ichs kurze halbenn / wo es Inn Einer
                  Wechr gesez / Inn der anndern ausgelaßenn / so es an nachteill
                  dem verstenndt hett geschechen kenen / domit ich nit Ein ding
                  offt setz wergeblich / auch dieweill das fechtenn also
                  geschaffenn das Ein Erfarner diser kunst / sein fortheill auch
                  Inn vnbekannten wechren soll Er sehen / hab ichs dachin
                  gericht / vnnd Ein wechr mit dem anndern verfast / auff dz so
                  einer
                </p>
              </Col>
              <Col>
                <p>
                  oddělené klouby. Dále nech dýku zcela volnou se všemi hroty a
                  pracuj její menší čepelí k helmě, kde je otevřená. Kde se
                  nacházejí další odkrytá místa, bylo už dříve popsáno.
                  <br />
                  Když padne na břicho, padni na jeho klouby paže svým kolenem a
                  zlom mu paži. Také mu padni na západky brnění na zádech.
                  <br />
                  Když ho shodíš, bodni ho do země a naplň mu hledí nebo mu
                  vyřízni něco z jeho wappenrocku (kabátce s erbem) a zacpi mu
                  hledí. Potom pracuj dýkou do slabin nebo mezi klouby nebo
                  bodni před jeho srdce nebo do kloubů, kde jsou nejslabší.
                  <br />
                  Nakonec je třeba si uvědomit, že během všech těchto cvičení a
                  zápasů se některé techniky v různých zbraních opakují – proto
                  jsem je sepsal stručně, aby se stejné věci zbytečně
                  neopakovaly. Také protože je šerm a boj veden tak, že zkušený
                  v tomto umění by měl vidět svou výhodu i u neznámých zbraní,
                  proto jsem to všechno sepsal tak, aby byla jedna zbraň
                  propojena s druhou – aby tak každý
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
                  Concordiren / als was Einer Im schwerdt für stuck gelehrnt die
                  selbenn auch Im dusackenn versuchtt / Ittem was Einer Im
                  dusackenn gelertt auch Inns Rapir firtt / her¬ wüderumb aus
                  dem Rapür Inn dusackenn / Ittem die Rinngen vnnd grüff Im
                  dolchen Inn das harnasch Fechtten / Also haltt es sich auch
                  Inn lenngern wechrenn als stennglen / helparttenn vnnd spies /
                  wehr diser Regell folgett / württ dises buchs nutz / vnnd mein
                  fleis woll spienen werdenn <br /> Wie Es mechr zur lechr dann
                  zur züer gemacht Ist
                </p>
              </Col>
              <Col>
                <p>
                  kdo se chce cvičit a sladit jednu zbraň s druhou – tedy co se
                  naučí u meče, ať to zkusí i s dusakem. Také co se naučí s
                  dusakem, ať to přenese k rapíru, a z rapíru zpět k dusaku.
                  Stejně tak zápas a chvaty s dýkou do boje v brnění. Takto to
                  platí i pro delší zbraně, jako jsou hole, halapartny a kopí.
                  Kdo se bude řídit tímto pravidlem, ten z této knihy získá
                  užitek a mé úsilí mu bude prospěšné. Jak je to více určeno k
                  učení než k pouhému předvádění.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page
