import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const LandshutskaDedickaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="landshutska-dedicka-valka" />
        <h4>Landshutská dědická válka (1503–1505){draft && <DraftBadge />}</h4>
        <p>
          Landshutská dědická válka (něm. <i>Landshuter Erbfolgekrieg</i>, též{' '}
          <i>bayrischer Krieg</i> nebo <i>pfälzischer Krieg</i>) byla posledním
          velkým vnitrobavorským konfliktem mezi dvěma větvemi rodu Wittelsbachů
          – mnichovskou a&nbsp;landshutskou, k&nbsp;nimž se přidala spojenecká
          Falc. Trvala formálně od dubna 1504 do dubna 1505, urovnána byla
          kolínským arbitrážním výrokem
          <b> 30. července 1505</b>. Pro české vojenství představuje ojedinělý
          moment: do bojů se na obou stranách zapojily kontingenty čítající
          dohromady 10&nbsp;000 až 12&nbsp;000 českých žoldnéřů
          a&nbsp;rozhodující bitva u&nbsp;Schönbergu (Wenzenbachu){' '}
          <b>12. září 1504</b> bývá v&nbsp;literatuře označována za{' '}
          <i>labutí píseň husitské vojenské tradice</i> – poslední velký střet,
          v&nbsp;němž bylo nasazeno české pěší vojsko se starou taktikou
          pavézníků a&nbsp;vozové hradby.
          <Qt
            publication={PUBLICATIONS.SLADKOVSKA}
            href="https://rukovet.cms.flu.cas.cz/static/Odkazy_upload/HT_16_2009.pdf"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Dynastické pozadí a&nbsp;testament Jiřího Bohatého</h5>
        <p>
          Bavorsko-landshutské vévodství (tzv. Dolní Bavorsko) tvořilo
          v&nbsp;druhé polovině 15. století nejbohatší část wittelsbašských
          držav. Jiří Bohatý (Georg der Reiche, 1455–1503), poslední mužský
          představitel landshutské linie, byl švagrem českého krále Vladislava
          II. Jagellonského – jeho manželka Hedvika byla Vladislavovou sestrou.
          Jiří neměl mužského dědice, jen jedinou dceru Alžbětu (1478–1504),
          provdanou v&nbsp;roce 1499 za svého bratrance{' '}
          <b>Ruprechta Falckého</b>, syna kurfiřta Filipa.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Roku <b>1496</b> sepsal Jiří testament, jímž odkázal celé vévodství
          dceři Alžbětě a&nbsp;jejímu manželovi. Tím se dostal do dvojího
          rozporu: na straně jedné porušil říšské právo, podle něhož mohlo
          vévodství v&nbsp;mužské linii dědit pouze mužského pokrevního
          příbuzného, na druhé straně obešel wittelsbašské dědické smlouvy
          z&nbsp;let 1392 a&nbsp;1450, podle nichž mělo dědictví při vymření
          mužské linie připadnout druhé wittelsbašské větvi –
          bavorsko-mnichovské. Proti testamentu se proto okamžitě postavil
          bavorsko-mnichovský vévoda <b>Albrecht IV. Moudrý</b> a&nbsp;po Jiřího
          smrti (<b>1. prosince 1503</b> v&nbsp;Ingolstadtu) i&nbsp;římský král
          <b> Maxmilián I.</b>
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Maxmilián zpočátku vystupoval jako prostředník a&nbsp;na začátku roku
          1504 předložil několik kompromisních návrhů na mírové řešení. Ruprecht
          je všechny odmítl a&nbsp;jeho hejtmané obsadili rezidence{' '}
          <b>Landshut</b> a&nbsp;<b>Burghausen</b>, kde bylo uloženo pověstné
          bohatství zemřelého vévody. Mírové řešení bylo tím prakticky
          vyloučeno. <b>17. dubna 1504</b> válka formálně propukla, Maxmilián
          vyhlásil nad Ruprechtem a&nbsp;Alžbětou říšskou klatbu a&nbsp;
          <b>23. dubna 1504</b> udělil v&nbsp;léno celé landshutské dědictví
          Albrechtovi&nbsp;IV. a&nbsp;jeho bratru Wolfgangovi.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Strany konfliktu</h5>
        <p>
          Konflikt byl od počátku nepoměrný co do počtu spojenců, ale vyrovnaný
          co do financí. <b>Albrecht IV.</b> shromáždil koalici říšských knížat
          v&nbsp;čele s&nbsp;Maxmiliánem; patřily k&nbsp;ní{' '}
          <b>Švábský spolek</b>, vévoda württemberský, lantkrabě hesenský, město{' '}
          <b>Norimberk</b>, braniborský markrabě Friedrich a&nbsp;jeho synové
          Kazimír a&nbsp;Jiří, Alexander von Zweibrücken-Veldenz a&nbsp;řada
          drobnějších říšských knížat. Albrechtovo vojsko dosahovalo síly
          přibližně <b>60&nbsp;000 mužů</b>, Maxmilián postavil dalších asi{' '}
          <b>10&nbsp;000</b> mužů říšského a&nbsp;tyrolského dvorského vojska.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          <b>Ruprecht Falcký</b> a&nbsp;jeho otec kurfiřt <b>Filip Falcký</b>{' '}
          oproti tomu shromáždili menší, ale finančně dobře zajištěnou armádu
          opírající se o&nbsp;landshutské bohatství a&nbsp;o&nbsp;rozsáhlý nábor
          profesionálních pěších kontingentů. K&nbsp;jejich spojencům patřily
          falcké dvorské vojsko, biskupové <b>würzburský</b>, <b>bamberský</b>{' '}
          a&nbsp;<b>eichstättský</b>, lantkrabě <b>Johann von Leuchtenberg</b>,
          Albrecht von Landenberg, hrabě <b>Wilhelm von Henneberg</b>, hrabě{' '}
          <b>Hugo z&nbsp;Montfortu a&nbsp;Bregenzu</b>, Bernhard III. hrabě
          z&nbsp;Ebersteinu, Jörg hrabě limburský a&nbsp;svobodní páni
          Leonstein, Traun, Stauff a&nbsp;Hutten. K&nbsp;hlavním vojevůdcům
          patřili <b>Georg von Rosenberg</b>, <b>Georg von Wispeck</b>, purkrabí
          v&nbsp;Chamu <b>Ludwig von Habsperg</b> a&nbsp;především vicedom Horní
          Falce <b>Ludwig von Eyb</b>, který jako logistická osa celé operace
          vedl většinu jednání s&nbsp;českou stranou. Falcká pole vystavila do
          bojů asi <b>30&nbsp;000 mužů</b>, větší část tvořili čeští žoldnéři.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Boje se odehrávaly na třech bojištích: v&nbsp;<b>Horním</b> a&nbsp;
          <b>Dolním Bavorsku</b>, v&nbsp;<b>Horní Falci</b> s&nbsp; přesahem do
          Frank a&nbsp;v&nbsp;<b>Porýní</b> s&nbsp;<b>Alsaskem</b>. Pro českou
          účast jsou klíčová první dvě bojiště, kde se Češi v&nbsp;Ruprechtových
          službách pohybovali v&nbsp;největších počtech.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Tažení duben–červen 1504</h5>
        <p>
          Ruprecht zahájil tažení <b>20. dubna 1504</b> v&nbsp;Ambergu; k&nbsp;
          <b>1. květnu</b> byl s&nbsp;vojskem u&nbsp;<b>Neuburgu nad Dunajem</b>
          , odkud podnikal výpady do okolí a&nbsp;dobyl Rain an der Donau.
          Albrecht zatím obsadil Ingolstadt (21. května) a&nbsp;<b>7. června</b>{' '}
          slavnostně vstoupil do Braunau, které předtím odmítlo vpustit
          Ruprechtova hejtmana Wispecka. V&nbsp;tomto období se v&nbsp;
          <b>Chamu</b> – tradičním shromaždišti najatých Čechů – soustředily
          první kontingenty z&nbsp;Čech; další shromaždiště vznikla ve{' '}
          <b>Furth im Wald</b>, později v&nbsp;<b>Kötzingu</b>.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Již v&nbsp;průběhu května 1504 se objevily první zprávy o&nbsp;
          bojových akcích, kde rozhodující úlohu sehráli čeští žoldnéři –
          například při dobytí <b>Chamu</b>. Hrabě Hugo Montfort požadoval
          <b> 22. května</b> po Ludwigu von Eyb dva až tři tisíce českých pěších
          na pomoc obraně Neuburgu, Eyb však naléhal na Ruprechta, aby uvolnil
          peníze pro Čechy, kteří v&nbsp;Chamu zaháleli a&nbsp;hrozili
          zběhnutím. <b>Jetřich z&nbsp;Gutštejna</b> v&nbsp;těchto týdnech
          dokonce vyhrožoval, že přejde na Albrechtovu stranu, pokud Ruprecht
          neuvolní finance.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Koncem června vypukly boje o&nbsp;<b>Landau</b>. Na obraně se podílel
          Ruprechtův hejtman Georg von Rosenberg a&nbsp;téměř
          <b> 300 Čechů</b>. Když se obrana dostala do potíží, vojsko se potají
          stáhlo, vyrabovalo město a&nbsp;na odchod jej zapálilo;
          <b> 1. července</b> město pokořil Albrecht, znovu vyraboval a&nbsp;
          vypálil. Ruprecht v&nbsp;tomto období pobýval u&nbsp;Dingolfingu, kam
          si nechal povolat <b>2&nbsp;300 Čechů</b> z&nbsp;Neuburgu nad Dunajem.
          Norimberk měl v&nbsp;květnu ve svém vojsku <b>450 českých</b> jezdců,
          k&nbsp;nimž se v&nbsp;červnu připojilo dalších <b>1&nbsp;170 Čechů</b>
          ; při taženích Norimberčanů a&nbsp;Čechů docházelo k&nbsp;řevnivostem
          se smrtelnými následky. Téměř celou druhou polovinu července se
          Norimberští neúspěšně pokoušeli dobýt <b>Neumarkt</b>, kde se na
          obraně významně podílela skupina českých žoldnéřů – Ruprecht jim za to
          nechal vyplatit dvojnásobný žold.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          K&nbsp;důležitým dílčím střetnutím patřila šarvátka u&nbsp;
          <b>Altdorfu</b> u&nbsp;Landshutu <b>13. července 1504</b>, kde
          Albrechtův oddíl porazil falcké vojsko a&nbsp;kde mladý{' '}
          <b>Götz z&nbsp;Berlichingenu</b> přišel kulkou z&nbsp;hákovnice
          o&nbsp;pravou ruku, kterou si později nechal nahradit slavnou železnou
          protézou. <b>9. července</b> Albrecht opustil Landau a&nbsp;vytáhl
          k&nbsp;<b>Landshutu</b>, kde proti němu zaujal obranu Ruprecht. Boj se
          odehrál před branami města – Landshut byl uhájen, ale za cenu velkých
          ztrát žoldnéřů, takže ve funkci vrchního hejtmana vystřídal Wispecka{' '}
          <b>Georg von Rosenberg</b>. V&nbsp;dolním Bavorsku a&nbsp;Horní Falci
          hořely vsi v&nbsp; rozsáhlém měřítku – odhady uvádějí přes 300
          zničených falckých sídel. Mezi 1., 21. a&nbsp;23. červencem se
          v&nbsp;Landshutu odehrály vážné šarvátky mezi českými žoldnéři
          a&nbsp;německými landsknechty, které vojsko dále oslabily.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/War_of_the_Succession_of_Landshut"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Tažení srpen 1504, smrt Ruprechta a&nbsp;obležení Sulzbachu</h5>
        <p>
          V&nbsp;srpnu se v&nbsp;Chamu nashromáždilo zhruba{' '}
          <b>3&nbsp;000 pěších</b> a&nbsp;<b>400 jezdců</b>. Mezi hlavní verbíře
          patřili Anarch von Wildenfels, Philipp von Flersheim, Hans Nothaft,
          Bernhard Stöckel, Jörg Plankenfelser, Philipp von Feilitsch
          a&nbsp;Christoph von Thein. <b>2. srpna</b> bylo dvěma vojsky obleženo
          město <b>Schwandorf</b>; falcké oddíly Ludwiga von Eyb se
          u&nbsp;Schwandorfu spojily s&nbsp;českými žoldnéři, kteří přitáhli od
          Waldmünchen pod vedením <b>Heřmana Janovského z&nbsp;Janovic</b>,
          <b> Albrechta ze&nbsp;Šternberka</b> a&nbsp;některého z&nbsp;
          <b>Dobrohostů z&nbsp;Ronšperka</b> na Horšovském Týně. Schwandorf se
          nezmohl na výpalné a&nbsp;byl vyrabován i&nbsp;vypálen.{' '}
          <b>15. srpna</b> vytáhli Češi k&nbsp;<b>Lengenfeldu</b> a&nbsp;
          <b>Kallmünzu</b>;<b> 10. srpna</b> u&nbsp;Neuburgu nad Dunajem padlo
          100 (jiné prameny 200) českých pěších do zajetí Albrechtova vojevůdce
          hraběte Andrease von Sonnenberga. Mezi <b>14.–28. srpnem</b> obléhalo
          falcké vojsko <b>Braunau</b>; po jeho dobytí tvořili Češi velkou část
          obranné posádky.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          <b>20. srpna 1504</b> – nedlouho před rozhodující bitvou – zemřel
          v&nbsp;Landshutu vévoda <b>Ruprecht</b>. Vládu převzala vdova
          <b> Alžběta</b>, do funkce vrchního velitele se vrátil Wispeck.
          Maxmilián se o&nbsp;Ruprechtově smrti dozvěděl <b>25. srpna</b>{' '}
          a&nbsp;ihned se přesunul do Donauwörthu k&nbsp;poradám se spojenci.
          Také falckrabě Filip pokračoval v&nbsp;boji a&nbsp;v&nbsp;náboru
          českých žoldnéřů.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          <b>29. srpna</b> oblehlo pod velením Ludwiga von Eyb české vojsko
          o&nbsp;síle <b>9&nbsp;000 mužů</b> město <b>Sulzbach</b>;
          ve&nbsp;vojsku byli váleční podnikatelé <b>Jan z&nbsp;Weitmile</b>,{' '}
          <b>Jindřich</b> a&nbsp; <b>Jetřich z&nbsp;Gutštejna</b> a&nbsp;
          <b>Albrecht ze&nbsp;Šternberka</b>; soudobé prameny uvádějí dokonce
          14&nbsp;000 vojáků. Albrecht měl české vojsko u&nbsp;Sulzbachu
          odrazit, ale obléhání bylo <b>5. září</b> ukončeno bez výsledku. Pohyb
          falckých jednotek ohrozil nedaleké říšské město <b>Řezno</b>.{' '}
          <b>4. září</b> zveřejnil Maxmilián své rozhodnutí osobně táhnout proti
          českým žoldnéřům.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Maxmilián byl o&nbsp;pohybu Čechů dobře informován. Věděl, že v&nbsp;
          <b>Českých Budějovicích</b> se shromáždilo dalších{' '}
          <b>6&nbsp;000 bojovníků</b> pod velením Georga von Rosenberga,
          táhnoucích přes Tachov a&nbsp;Waldmünchen, s&nbsp;asi 200 vozy;
          k&nbsp;nim se měl připojit Wispeck s&nbsp;1&nbsp;500 jezdci.{' '}
          <b>8.–9. září</b> se v&nbsp;Erasbachu u&nbsp;Berchingu sešikovalo
          spojenecké vojsko: 790 jezdců a&nbsp;2&nbsp;500 pěších markraběte
          braniborského a&nbsp;jeho synů, 700 norimberských pěších se 150
          českými jezdci a&nbsp;200 jezdců vévody Ericha Brunšvického.{' '}
          <b>10. září</b> se spojenci přesunuli k&nbsp;Hemau, falcké vojsko
          a&nbsp;čeští žoldnéři se srotili u&nbsp;Řezna; téhož dne uzavřel
          falckrabě Filip příměří s&nbsp;Maxmiliánem v&nbsp;Porýní, čímž bylo
          tamní bojiště uzavřeno.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Bitva u&nbsp;Schönbergu 12. září 1504</h5>
        <p>
          Hlavní bitva, v&nbsp;starší literatuře označovaná jako{' '}
          <i>bitva u&nbsp;Schönbergu</i> (podle blízkého zámku),{' '}
          <i>u&nbsp;Wenzenbachu</i> (podle obce na bojišti), <i>u&nbsp;Řezna</i>{' '}
          či <i>na Hafenreuthském poli</i>, v&nbsp;německy psaných pramenech
          rovněž <i>böhmische Schlacht</i> (česká bitva), se odehrála{' '}
          <b>12. září 1504</b> severovýchodně od Řezna.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          České vojsko v&nbsp;síle asi <b>3&nbsp;000 pěších</b> a&nbsp;
          <b>900 jezdců</b> obsadilo den předtím zámek Schönberg a&nbsp;
          připojenou ves Wenzenbach a&nbsp;mířilo na ústup k&nbsp;Chamu, když se
          před ním zjevila Maxmiliánova plná polní síla. Vojevůdce{' '}
          <b>Georg von Wispeck</b> ihned opustil bojiště s&nbsp;600 (podle
          jiných pramenů 1&nbsp;600) jezdci a&nbsp;odjel směrem k&nbsp;Neuburgu
          – část pramenů hodnotí tento manévr jako útěk a&nbsp;zradu, jiné jako
          pokus zachránit jádro jezdectva. Na bojišti zůstala pěchota pod
          velením polního hejtmana <b>Matyáše Libáka z&nbsp;Radovesic</b>.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Češi se rozvinuli na vyvýšenině na <b>Hafenreuthském poli</b> mezi
          dvěma lesíky u&nbsp;obce <b>Wenzenbach</b>, ve třech zástupech. První
          řadu tvořili <b>pavézníci</b>, jejichž velké štíty byly spojeny
          řetězy; v&nbsp;jejich krytu stáli žoldnéři s&nbsp;ručnicemi, meči
          a&nbsp;kopími. Za jejich zády 800 mužů narychlo stavělo
          <b> vozovou hradbu</b> na sousedním návrší u&nbsp;<b>Hühnerbucklu</b>,
          která však nebyla před útokem dobudována. Maxmiliánovo spojenecké
          vojsko čítalo přibližně <b>4&nbsp;000 pěších</b> a&nbsp;
          <b>1&nbsp;200 jezdců</b>, podporovaných polním dělostřelectvem.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Bitvu zahájil úvodní útok markraběte <b>Kazimíra Braniborského</b> se
          400 jezdci a&nbsp;8 polními děly. Pavézníci útok odrazili, vyřítili se
          zpoza svých štítů, vrhli se na jezdce a&nbsp;přiměli je k&nbsp;ústupu.
          Mezitím přitáhly Maxmiliánovy další posily –<b> 4&nbsp;000 pěších</b>,
          mezi nimi i&nbsp;landsknechtský pluk
          <b> Georga von Frundsberga</b> vyzbrojený polními hadicemi
          a&nbsp;mušketami. Spojenecké vojsko se zformovalo do tří křídel: pravé
          tvořili jezdci s&nbsp;markrabětem braniborským (osobně velel král
          Maxmilián), střed pěchota s&nbsp;lehkými děly, levé jezdci
          s&nbsp;vévodou brunšvickým a&nbsp;Hannsem Obernitzem; pěšáci měli
          udeřit zepředu, jezdci ze stran.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Češi zůstali na svém místě a&nbsp;kopími se pokoušeli odrážet útoky
          jezdců i&nbsp;pěchoty. Při jednom z&nbsp;útoků vévody brunšvického
          přišel král Maxmilián jen zázrakem o&nbsp;život. Kyrysníci ze stran
          strhli pavézy a&nbsp;landsknechti využili průlomu, aby pronikli
          k&nbsp;nedokončené vozové hradbě. Dobové německé kroniky líčí české
          bojovníky obrazem{' '}
          <i>
            &bdquo;hieben sie wie die wilden Schweine, ihr Geschrei war
            grausamlich&ldquo;
          </i>{' '}
          – sekali jako divočáci, jejich křik byl strašný; v&nbsp;jiném místě{' '}
          <i>
            &bdquo;wehren sich wahrhaft ritterlich, wie Löwen kämpften die
            Böhmen&ldquo;
          </i>
          . Po prolomení čela se Češi rozprchli buď za vozovou hradbu, nebo do
          blízkého lesa. Bitva trvala podle kronik necelé dvě hodiny.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Ztráty byly drtivé: <b>1&nbsp;600</b> až{' '}
          <b>2&nbsp;500 padlých Čechů</b> (jednotlivé prameny uvádějí
          1&nbsp;490, 1&nbsp;600, 1&nbsp;620, 1&nbsp;800 i&nbsp;2&nbsp;500),{' '}
          <b>600</b> až <b>800 zajatých</b> (rovněž 700 i&nbsp;735)
          a&nbsp;přibližně <b>200–250 ukořistěných vozů</b>. Norimberčané si
          z&nbsp;bojiště odvezli 7 českých korouhví, Štrasburčané 4. Spojenci
          ztratili pouze asi
          <b> 200 mužů</b>. Sám hejtman Libák se z&nbsp;bitvy probil bez zranění
          a&nbsp;bez zajetí. Část uprchlých Čechů, jak uvádějí dobové prameny,
          byla zamordována venkovským obyvatelstvem. Tím byla válka pro
          Maxmiliána v&nbsp;Horní Falci fakticky vyhrána.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Po bitvě – Řezno, Kufstein a&nbsp;rozpad falckého vojska</h5>
        <p>
          Maxmilián a&nbsp;Albrecht odjeli po bitvě do Řezna, kam byli odvedeni
          i&nbsp;čeští zajatci. Předvedeni před krále byli vyzváni odpovědět,
          zda by raději volili boj na život a&nbsp;na smrt, či zda stojí
          o&nbsp;zajetí; jejich odpověď zněla, že do bitvy nešli
          z&nbsp;přesvědčení, ale z&nbsp;nutnosti. Maxmilián patřičně ocenil
          jejich mužnost, a&nbsp;ačkoli <b>17. září</b> formálně rozhodl vykázat
          je ze země, žádný zajatec ze země vykázán nebyl. <b>22. září</b> bylo
          všem zajatcům odebráno vyzbrojení i&nbsp; peníze pod přísahou, že se
          za pět týdnů na určeném místě dostaví. Od 12. do 16. září bylo 650
          zajatců shromážděno v&nbsp;domě řezenského světícího biskupa. Poté se
          velká část přesunula do Straubingu (16. října, 10. listopadu
          a&nbsp;30. listopadu byli zajatci kontrolováni); po několikanásobném
          dostavování byli s&nbsp; konečnou platností <b>15. dubna 1505</b>{' '}
          propuštěni bez výkupného na čestné slovo. Pohled na propouštění
          poražených Čechů, považovaných za obratné a&nbsp;zkušené bojovníky,
          byl ve své době vnímán jako velkorysý rytířský akt.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Wispeck po bitvě dorazil do Regenstaufu, doplnil své vojsko posádkou
          hradu Lengenfeld a&nbsp;v&nbsp;Neuburgu vyčkával na posily
          z&nbsp;Čech. Plenil okolí Ingolstadtu a&nbsp;cestou na Landshut dobyl
          Vohburg, kde dokonce zajal Albrechtova hejtmana Andrease von
          Sonnenberga. Falcká kasa v&nbsp;Landshutu se však vyprazdňovala
          a&nbsp;žoldnéřům končilo služebné období; čeští žoldnéři se začali
          hromadně vracet domů. Jen ze Šternberkových lidí odešlo asi 300 mužů.{' '}
          <b>10. listopadu</b> shořel neopatrností žoldnéřů Burghausen. Heřman
          Janovský dokonce kvůli nedoplatkům vyhlásil Falci válku.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Od <b>1. října</b> obléhal Maxmilián tyrolskou pevnost <b>Kufstein</b>
          , jejíž posádku tvořili rovněž čeští žoldnéři pod velením hejtmana
          Wampolda. Maxmilián nasadil moderní bombardy a&nbsp;po
          několikatýdenním obléhání pevnost dobyl; mezi zajatci bylo mnoho
          Čechů, kteří byli popraveni. Velitele pevnosti{' '}
          <b>Hanse Pinzenauera</b> nechal popravit jako odstrašující příklad.
          Kolem poloviny října se Wispeck po nezdařeném tažení vrátil do
          Landshutu, mezitím se původní spojenecké vojsko rozpadlo – braniborský
          markrabě, Norimberští a&nbsp;Švábové opustili Maxmiliána, který
          s&nbsp;Albrechtem pokračoval k&nbsp;Mnichovu.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          <b>9. prosince 1504</b> falcké vojsko obléhalo <b>Vilshofen</b>; po
          několikadenním boji a&nbsp;protiakci ze Straubingu se hejtmané stáhli
          a&nbsp;<b>18. prosince</b> dorazili s&nbsp;kořistí do Landshutu.
          V&nbsp;průběhu prosince a&nbsp;ledna 1505 Wispeck postupně vyplácel
          velké podnikatele – Albrechta ze Šternberka, Jana z&nbsp;Weitmile
          a&nbsp;bratry Gutštejny. V&nbsp;<b>únoru 1505</b> bylo uzavřeno
          dočasné příměří, <b>13. dubna</b> král vyzval zemi k&nbsp;míru
          a&nbsp;ohlásil květnový říšský sněm v&nbsp;Kolíně nad Rýnem. Falcká
          strana vyklidila Landshut, Burghausen a&nbsp;Braunau.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kolínský arbitrážní výrok 30. července 1505</h5>
        <p>
          <b>Kolínský arbitrážní výrok</b> z&nbsp;<b>30. července 1505</b> (něm.{' '}
          <i>Kölner Schiedsspruch</i>) přiřkl většinu landshutského dědictví
          bavorsko-mnichovskému vévodovi Albrechtovi&nbsp;IV. Ten tak sjednotil
          pod jednou vládou Bavorsko-Mnichov a&nbsp;Bavorsko-Landshut
          a&nbsp;položil základ Bavorska v&nbsp;jeho pozdější novověké podobě.
          Část území v&nbsp;Horní Falci připadla jako odškodnění synům Ruprechta
          a&nbsp;Alžběty – <b>Otovi Jindřichovi</b> a&nbsp;<b>Filipovi</b> –
          a&nbsp;dala vznik tzv. <b>Mladé Falci</b> (<i>Pfalz-Neuburg</i>)
          s&nbsp;centrem v&nbsp;Neuburgu nad Dunajem. Maxmilián&nbsp;I. získal
          za svou podporu tyrolské državy <b>Kufstein</b>, <b>Kitzbühel</b>{' '}
          a&nbsp;
          <b>Rattenberg</b>, město Norimberk pak rozšíření svého území
          o&nbsp;některé statky východně od města.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Český kontingent – počty, profalcká strana a&nbsp;diplomacie</h5>
        <p>
          Češi sloužili na obou stranách, ale jejich nejvýznamnější nasazení
          bylo na falcké straně. Celkový počet Čechů ve falckých službách se
          odhaduje na <b>10&nbsp;000 až 12&nbsp;000 bojovníků</b>. Albrecht měl
          o&nbsp;Čechy zájem od počátku: již <b>4.–5. února 1504</b> jednali
          jeho vyslanci v&nbsp;<b>Sušici</b>, <b>Klatovech</b> a&nbsp;
          <b>Domažlicích</b> o&nbsp;naverbování
          <b> 6&nbsp;000 českých pěšáků</b>; za českou stranu vyjednávali
          kancléř von Smichau, <b>Jan Klenovský z&nbsp;Klenové</b>,{' '}
          <b>Otík Kamýcký ze&nbsp;Stropčic</b>, jakýsi Pokorný,{' '}
          <b>Heřman Janovský z&nbsp;Janovic</b> a&nbsp;Lukavský. Pro Albrechtovu
          stranu měl být získán i&nbsp;<b>Václav Vlček z&nbsp;Čenova</b>,
          považovaný za nejlepšího českého hejtmana své doby (který ovšem už
          neuměl jezdit na koni a&nbsp;musel být vožen na voze). Jednání
          ztroskotala na nedostatku financí. Český král Vladislav&nbsp;II.
          verbování pro Albrechta podpořil a&nbsp;na petropavelském sněmu{' '}
          <b>29. června 1504</b> byl vznesen oficiální požadavek pomoci
          Albrechtovi.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Skutečně rozsáhlý nábor však zorganizovala silná{' '}
          <b>profalcká strana</b> na Vladislavově dvoře, kterou tvořili{' '}
          <b>Vilém z&nbsp;Pernštejna</b>, <b>Jan ze&nbsp;Šelmberka</b>,{' '}
          <b>Bohuš Kostka z&nbsp;Postupic</b> a&nbsp;po dosti komplikovaných
          jednáních také kancléř <b>Albrecht Libštejnský z&nbsp;Kolovrat</b>;
          falčtí vyslanci Anarch von Wildenfels, Philipp von Feilitsch
          a&nbsp;Christoph von Thein mu nabídli za vstřícnost půjčku 10&nbsp;000
          zlatých. Vladislav nikdy otevřeně nepodpořil verbování pro Falc, ale
          fakticky toleroval jednání v&nbsp;Plzeňském a&nbsp;Klatovském kraji.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Žoldnéřští podnikatelé a&nbsp;ekonomika náboru</h5>
        <p>
          Verbování probíhalo formou dohody mezi <b>vojenským podnikatelem</b>{' '}
          (zpravidla šlechtic-kondotiér) a&nbsp;<b>válečníkem</b> (najímatelem).
          Smlouva (<i>Werbebrief</i> / <i>Schadenbrief</i>) určovala počet,
          délku služby (obvykle 3 měsíce), žold, výzbrojné a&nbsp;záruky pro
          <b> záškodné</b> (náhradu škod). Žoldnéři byli organizováni do{' '}
          <b>rot</b> v&nbsp;čele s&nbsp;rotmistrem; rota čítala 10–20 mužů
          s&nbsp;1–5 pavézníky; několik rot tvořilo prapor v&nbsp;čele
          s&nbsp;hejtmanem. Pavézníci nesli velké štíty a&nbsp;chodili
          s&nbsp;pomocníky-pacholky (<i>Knaben</i>), kteří jim štíty pomáhali
          nosit. Standardní vůz vozové hradby měl posádku zhruba 20 mužů:
          2&nbsp;pacholci, 8&nbsp;střelců s&nbsp;ručnicemi či kušemi,
          8&nbsp;mužů s&nbsp;halapartnami, cepy nebo kopími a&nbsp;
          2&nbsp;pavézníci na ochranu mezer mezi vozy.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Měsíční žold pěšího činil <b>4 zlaté rýnské</b> (1 zlatý za týden),
          jezdce <b>8 zlatých</b>, vůz měl v&nbsp;týdenním účtování
          2&nbsp;zlaté. Rotmistr s&nbsp;koněm dostával 2&nbsp;zlaté týdně.
          Záškodné se vyplácelo z&nbsp;listinného soupisu sepsaného při odvodu
          (kupř. u&nbsp;jedné roty s&nbsp;300 pěšími a&nbsp;15 vozy činilo
          jednorázově 17 zlatých, u&nbsp;jiné s&nbsp;238 pěšími a&nbsp;12 vozy
          47 zlatých). Žoldnéři byli najímáni ve&nbsp; shromaždištích na
          pohraničí – <b>Cham</b>, <b>Furth im Wald</b>, <b>Kötzing</b>,{' '}
          <b>Tachov</b>, <b>Weiden</b> a&nbsp;<b>Pernov</b>.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          K&nbsp;největším českým vojenským podnikatelům na Ruprechtově straně
          patřili bratři <b>Jindřich</b> a&nbsp; <b>Jetřich z&nbsp;Gutštejna</b>
          , kteří v&nbsp;průběhu války naverbovali tisíce mužů. Podle nedatované
          účetní cedule z&nbsp;roku 1504 obdržel Jindřich{' '}
          <b>7&nbsp;600 zlatých</b> za 1&nbsp;000 pěších a&nbsp;300 jezdců,
          Jetřich <b>6&nbsp;000 zlatých</b> za 1&nbsp;000 pěších a&nbsp;100
          jezdců, <b>Jan z&nbsp;Weitmile</b> <b>6&nbsp;800 zlatých</b> za
          1&nbsp;000 pěších a&nbsp;200 jezdců, stejně tak{' '}
          <b>Albrecht ze&nbsp;Šternberka</b> <b>6&nbsp;800 zlatých</b> za
          1&nbsp;000 pěších a&nbsp;200 jezdců;{' '}
          <b>Heřman Janovský z&nbsp;Janovic</b> 1&nbsp;442 zlatých za 300
          pěších, <b>Jan Klášterský z&nbsp;Valdštejna</b> 700 pěších bez uvedené
          částky a&nbsp;některý z&nbsp;<b>Dobrohostů z&nbsp;Ronšperka</b> 300
          pěších a&nbsp;200 jezdců. Vilém Rous z&nbsp;Lipna a&nbsp;Heřman
          Janovský byli za své žoldnéře placeni ještě
          <b> 15. srpna 1504</b> v&nbsp;Tachově – za 32 jezdců a&nbsp;300 pěšáků
          a&nbsp;za dalších 131 mustrovaných v&nbsp;Neuburgu měsíční částku 564
          zlatých.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          V&nbsp;dlužní listině falckraběte Fridricha z&nbsp;
          <b>20. května 1505</b> figurují jako ručitelé Jan
          z&nbsp;Leuchtenberka, Jindřich z&nbsp;Gutštejna, Jan z&nbsp;Weitmile
          a&nbsp;Georg von Rosenberg za dluh{' '}
          <b>2&nbsp;496 zlatých rýnských a&nbsp;63 landshutských feniků</b> pro
          žoldnéřské velitele <b>Václava ze&nbsp;Šumburka</b>,
          <b> Vojtěcha Veselického</b>, <b>Václava Weyra</b>,{' '}
          <b>Jorga Polenreutera</b>, <b>Ctibora Dívčického ze&nbsp;Sudoměře</b>,
          <b> Brikcího Fremuta ze&nbsp;Stropčic</b>, <b>Jana z&nbsp;Hofu</b>,{' '}
          <b>Ctibora Netunického z&nbsp;Nebílov</b> a&nbsp;{' '}
          <b>Volfganga Žďárského z&nbsp;Chrástu</b>; většina z&nbsp;nich
          pocházela ze západních, jižních a&nbsp;jihozápadních Čech. Vyplácení
          mělo proběhnout v&nbsp;únoru v&nbsp;Tachově na radnici.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Matyáš Libák z&nbsp;Radovesic – polní hejtman u&nbsp;Schönbergu</h5>
        <p>
          Vrchním polním hejtmanem českého kontingentu u&nbsp;Schönbergu byl{' '}
          <b>Matyáš Libák z&nbsp;Radovesic</b>. Falckrabě jej najal na
          doporučení své profalcké klientely – Pernštejna, Šelmberka
          a&nbsp;Kostky z&nbsp;Postupic. Libák nabídl naverbovat
          <b> 1&nbsp;000 mužů</b> z&nbsp;Čech, Moravy, Slezska a&nbsp;Uher;
          podle Ruprechtova dopisu Ludwigu von Eyb z&nbsp;
          <b>27. července 1504</b> měl přijít s&nbsp;50 jezdci a&nbsp;naverbovat
          dalších 2&nbsp;000 pěších, žold měl činit <b>100 zlatých měsíčně</b>{' '}
          a&nbsp;<b>1&nbsp;000 zlatých na výzbroj</b>, služba na 3 měsíce
          s&nbsp;nástupem v&nbsp;Tachově. K&nbsp;<b>20. srpnu 1504</b> dorazilo
          do Bavorska <b>4&nbsp;000 jezdců a&nbsp;pěších</b>; k&nbsp;Libákovým
          jednotkám se v&nbsp;Horní Falci připojily oddíly{' '}
          <b>Albrechta ze&nbsp;Šternberka</b>, <b>Jetřicha</b> a&nbsp;
          <b>Jindřicha z&nbsp;Gutštejna</b>, <b>Jana z&nbsp;Weitmile</b>,
          <b> Heřmana Janovského z&nbsp;Janovic</b>,{' '}
          <b>Viléma Rouse z&nbsp;Lipna</b>,{' '}
          <b>Jana Svojanovského z&nbsp;Boskovic</b> a&nbsp;
          <b>Jana Mezeřického z&nbsp;Lomnice</b>; společně tito páni{' '}
          <b>5. září</b> ukončili obléhání Sulzbachu.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Libák měl venkovský původ v&nbsp;rodu středočeských zemanů
          z&nbsp;Radovesic. Mezi jeho předky patřil Libák, jenž byl účastníkem
          a&nbsp;zajatcem bitvy u&nbsp;Grunwaldu 1410, a&nbsp;
          <b>Václav Libák z&nbsp;Vrbčan</b>, hejtman polního sirotčího vojska
          a&nbsp;člen kutnohorské městské rady. Majetkově patřily Libákům od
          roku 1450 <b>Onomyšl</b> (Matěj Libák), k&nbsp; roku 1493{' '}
          <b>Přestavlky</b> (Matyáš), po roce 1493 <b>Smrkovice</b>,{' '}
          <b>Ohnišťany</b>, <b>Chomutice</b>, <b>Loučná Hora</b>,{' '}
          <b>Lhota Ohnišťská</b> a&nbsp;
          <b>Nevratice</b> (vše prodal roku 1518 Vilémovi z&nbsp;Pernštejna),
          dále <b>Miletínek</b> a&nbsp;v&nbsp;roce 1519 hrad i&nbsp;panství{' '}
          <b>Pecka</b>. Byl rovněž majitelem podílu na kutnohorském cínovém dole{' '}
          <b>Vosel</b>. Politicky byl Libák důležitou postavou na dvoře
          Vladislava II.: v&nbsp;letech 1510–1518 zastával osm let úřad{' '}
          <b>královského prokurátora</b>. Zemřel někdy před rokem 1524.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Libák se z&nbsp;bitvy u&nbsp;Schönbergu probil bez zranění, ale jeho
          hejtmanování se přesto stalo předmětem soudního sporu. V&nbsp;roce{' '}
          <b>1505</b> jej Albrecht ze&nbsp;Šternberka nařkl,{' '}
          <i>
            &bdquo;že by on pan Libák hejtmanství svému a&nbsp;šikování při té
            bitvě, kdež loni v&nbsp;Bavořích u&nbsp;falckrabie byla, dosti
            neučinil&ldquo;
          </i>
          . Mezi svědky uvedl Jana Horáka z&nbsp;Jilemnice, Jana Holého od Hory,
          Mikuláše Kopystu od Hory, Jiříka Holého z&nbsp;Hořovic, Blažka Houdka
          z&nbsp;Dašic, Martina Říhova syna z&nbsp;Radnic a&nbsp;Martina Vlčka
          z&nbsp;Úřečic. Poslední čtyři jmenovaní byli bývalí zajatci od
          Schönbergu. Soud nicméně dopadl pro Libáka příznivě: bylo
          konstatováno, že{' '}
          <i>
            &bdquo;jest on Libák vozy šikoval, lidi do bitvy vedl, je řiedil
            a&nbsp;při té bitvě od počátku až do konce byl, všemu dosti činil,
            což takovému hejtmanu v&nbsp;takové potřebě příleží učiniti&ldquo;
          </i>
          .
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Po válce zůstal Libák důležitou spojkou mezi Falcí a&nbsp;českými
          zeměmi. Od konce září 1504 zastupoval falckou stranu při jednáních
          v&nbsp;Praze (<b>svatojeronýmský sněm</b>), v&nbsp;říjnu odjel do
          Ambergu na poradu s&nbsp;Ludwigem von Eyb, na začátku ledna 1505 byl
          mezi pečetiteli plzeňské úmluvy o&nbsp;česko-falckých lenních
          záležitostech. Vstoupil do oficiální falcké služby na pět let
          s&nbsp;ročním platem <b>300 rýnských zlatých</b> (žádal 500 jako
          Gutštejnové, ale neuspěl). Spory o&nbsp;žold ho ovšem neopouštěly:
          v&nbsp;listopadu 1504 figuroval na seznamu válečníků
          s&nbsp;nezaplacenými žoldy, v&nbsp;<b>roce 1506</b> se soudil
          s&nbsp;Jindřichem a&nbsp;Jetřichem z&nbsp;Gutštejna a&nbsp;Janem
          z&nbsp;Weitmile o&nbsp;<b>3&nbsp;004 rýnských zlatých</b>, ještě
          v&nbsp;<b>roce 1518</b> jej žaloval Jiřík Slovák z&nbsp;Jílavy
          o&nbsp;104 zlatých. Roku <b>1511</b> byl jako královský posel do
          Polska zajat svým bývalým spolubojovníkem{' '}
          <b>Heřmanem Janovským z&nbsp;Janovic</b>; po propuštění se však
          s&nbsp;ním smířil a&nbsp;přimlouval se za něj u&nbsp;panovníka.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Řezenský seznam zajatců z&nbsp;bitvy u&nbsp;Schönbergu</h5>
        <p>
          V&nbsp;době pobytu českých žoldnéřů v&nbsp;Řezně (12. září až
          přibližně 16. září, poté v&nbsp;Straubingu) vznikl{' '}
          <b>Řezenský seznam zajatců</b>, uložený dnes v&nbsp;Bayerisches
          Hauptstaatsarchiv München, oddělení <i>Kurbayern Äußeres Archiv</i>,
          signatura <b>1227, fol. 115 ff.</b> Jde o&nbsp;naprosto unikátní
          pramen pro výzkum českého žoldnéřství přelomu středověku
          a&nbsp;novověku – v&nbsp;celé pramenné základně 15. a&nbsp;16. století
          má srovnatelnou hodnotu jen seznam zajatců z&nbsp;bitvy
          u&nbsp;Želenice 1438.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Seznam je zapsán <b>ve&nbsp;staročeštině</b>, což je v&nbsp; německy
          psaných archivních pramenech mimořádně vzácné. Začíná formulací{' '}
          <i>
            &bdquo;Item muzuowe na tyto laystra popsani, kterziz gsu porazieni
            w&nbsp;ten cztwrtek po matze buozii narozenii letha pocztu
            tissieczieho pietisteho cztwrteho.&ldquo;
          </i>{' '}
          Obsahuje <b>630 jmen</b>, z&nbsp;čehož <b>563 pěšáků</b> a&nbsp;
          <b>67 pacholat</b>, organizovaných do <b>26 rot</b> o&nbsp;2 až 76
          mužích. Na konci je uvedena&nbsp;
          <i>suma piessich puolssiesta sta a&nbsp;vi</i> (556) a&nbsp;
          <i>pacholat lx a&nbsp;v</i> (65), s&nbsp;celkovým údajem 612 –
          aritmetická chyba autora oproti 621 vyplývajícímu ze součtu.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Autorem byl patrně sám jeden ze zajatců – písař ovládající spisovnou
          češtinu. Mezi zajatci jsou doloženi tři písaři:{' '}
          <b>Jan písař z&nbsp;Příbrami</b> (rota 1, č. 13),{' '}
          <b>Jiřík Holý písař z&nbsp;Prahy</b> (rota 13, č. 44) a&nbsp;
          <b>Šimon písař z&nbsp;Brodu Německého</b> (rota 19, č. 28). Seznam
          vznikl pravděpodobně jako evidence totožnosti propuštěných, podle níž
          bylo kontrolováno, zda se zajatci dostavují v&nbsp; určené lhůtě –
          nejen pro případné výkupné, ale jako organizační pojistka rytířského
          závazku.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          <b>Geografické rozložení</b> zajatců potvrzuje těžiště náboru
          v&nbsp;západních a&nbsp;jižních Čechách: nejvíce mužů pocházelo
          z&nbsp;<b>Berouna</b> (16), <b>Plzeňska</b>, <b>Klatovska</b>,
          <b> Tachovska</b> a&nbsp;<b>Domažlicka</b>; výraznější je
          i&nbsp;zastoupení Kolínska, Pardubicka, Hradce Králové
          a&nbsp;jihočeských obcí (České Budějovice, Strakonice, Pelhřimov). Ze
          Slovenska jsou doložení bojovníci z&nbsp;
          <b>Bánovec n.&nbsp;Bebravou</b> a&nbsp;<b>Banské Štiavnice</b>, jeden
          zajatec pochází z&nbsp;polské Čenstochové. Drobně jsou zastoupena
          i&nbsp;moravská města.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
        <p>
          Po skončené bitvě byli čeští žoldnéři podle hierarchie společenského
          postavení v&nbsp;Maxmiliánových účetních ceduliích vedeni jako{' '}
          <b>plnohodnotní bojovníci</b> – Šternberkovi rotmistři dostali
          v&nbsp;Chamu mezi 19. a&nbsp;26. zářím za své muže, ať padlé či
          zajaté, řádný měsíční žold. Heřman Janovský a&nbsp;Vilém Rous obdrželi
          pro své zajaté žoldnéře dokonce <b>dvojnásobný žold</b> (1 měsíc, 184
          zl. za 46 zajatců), což zahrnovalo zřejmě i&nbsp;záškodné. Ovšem ne
          vždy se tato částka skutečně dostala k&nbsp;zajatcům – například{' '}
          <b>Bohuslav Loský z&nbsp;Rabštejna</b>, rotmistr Jetřicha
          z&nbsp;Gutštejna a&nbsp;jeden ze zajatců v&nbsp;Schönbergu, se ještě
          roku 1511 soudil s&nbsp;Jetřichem z&nbsp;Gutštejna o&nbsp;
          <b>2&nbsp;400 rýnských zlatých</b> za tříměsíční službu.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Význam pro české vojenství</h5>
        <p>
          Bitva u&nbsp;Schönbergu se stala v&nbsp;historiografii i&nbsp;
          v&nbsp;literatuře symbolem konce velké éry českého žoldnéřství
          v&nbsp;Říši. Pavézníci, kteří se pokusili útok bez ochrany vozové
          hradby, nemohli proti modernější vojenské technice landsknechtů
          s&nbsp;hadicemi, mušketami a&nbsp;polním dělostřelectvem dlouhodobě
          obstát. Husitská vojenská tradice tím dosáhla zenitu a&nbsp;pomalu
          vyprchávala – nahrazoval ji systém najímaných pluků landsknechtů,
          jejichž symbolem se stal právě v&nbsp;této bitvě angažovaný Georg von
          Frundsberg, počátek nejslavnější landsknechtské kariéry 16. století.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Schlacht_bei_Wenzenbach"
          />
        </p>
        <p>
          V&nbsp;české paměti se Wenzenbach uchoval jako trauma – Aleš Jirásek
          mu věnoval kapitolu v&nbsp;románové epopeji{' '}
          <i>V&nbsp;cizích službách</i> (1962). František Palacký v&nbsp;
          <i>Dějinách národu českého</i> uvedl v&nbsp;souvislosti s&nbsp;bitvou
          pověstný odsudek německého velení (kterážto interpretace ovšem nemá
          oporu v&nbsp;dobových pramenech). Otakar Frankenberger v&nbsp;
          <i>Husitském válečnictví po Lipanech</i> (1960) považuje Schönberg za
          ukončení dějin české vozové hradby jako rozhodujícího prvku polního
          boje. Komplexní zpracování z&nbsp;hlediska sociologického,
          prosopografického i&nbsp; archivního přinesly pro otázku Schönbergu
          monografie Uweho <b>Trespa</b> <i>Söldner aus Böhmen</i> (Paderborn
          2004), stať <b>Armina Gugaua</b> <i>Die Schlacht bei Schönberg</i>{' '}
          (in:{' '}
          <i>
            Der Landshuter Erbfolgekrieg. An der Wende vom Mittelalter zur
            Neuzeit
          </i>
          , ed. R. Ebneth – P. Schmid, Regensburg 2004) a&nbsp;především studie
          Kamily <b>Sladkovské</b>{' '}
          <i>Česká účast ve válce o&nbsp;dědictví landshutské roku 1504</i>{' '}
          (Husitský Tábor 16, 2009, s. 145–244), která bitvu, Řezenský seznam
          i&nbsp;Libákovu osobu zpracovala systematicky a&nbsp;o&nbsp;kterou se
          toto pojednání převážně opírá.
          <Qt publication={PUBLICATIONS.SLADKOVSKA} />
        </p>
      </Col>
    </Row>
  </>
)
