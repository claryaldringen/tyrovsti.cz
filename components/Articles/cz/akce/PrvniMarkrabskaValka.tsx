import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const PrvniMarkrabskaValka = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="prvni-markrabska-valka" />
        <h4>První markraběcí válka (1449–1453){draft && <DraftBadge />}</h4>
        <p>
          První markraběcí válka (něm. <i>Erster Markgrafenkrieg</i>) byla
          ozbrojeným konfliktem mezi braniborsko-ansbašským markrabětem
          Albrechtem III. Achillem z hohenzollernské dynastie a říšským městem
          Norimberkem, k němuž se přidalo téměř třicet dalších švábských a
          franských měst. Spor je možno chápat jako součást širšího vzepětí
          říšských měst proti knížecí a šlechtické moci, které se ve stejné době
          projevilo i rozsáhlejší jihoněmeckou městskou válkou. Boje se
          odehrávaly ve dvou vlnách v letech <b>1449–1450</b> a po dílčím
          příměří znovu v letech <b>1452–1453</b>.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Erster_Markgrafenkrieg"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Albrecht Achilles, mladší bratr braniborského kurfiřta Fridricha II.,
          vládl jako kníže ve franských územích Hohenzollernů (Ansbach a od roku
          1457 i Bayreuth). Snažil se obnovit někdejší pravomoci říšského
          fojtství nad Norimberkem, jež hohenzollernská linie ztratila v 15.
          století poté, co se město vykoupilo z purkrabské pravomoci. Norimberk
          v té době patřil k nejbohatším a nejlidnatějším říšským městům a
          odmítal uznat jakákoli markraběcí práva nad svým územím a celní
          výsadou.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Albrecht_Achilles"
          />
        </p>
        <p>
          Bezprostřední záminkou se stal spor o městská cla a o ochranu kupců na
          markraběcích zemských stezkách. Po vzájemných záštích a několika
          potyčkách v okolí Norimberka vyhlásil Albrecht Achilles městu v
          červenci <b>1449</b> formální záští. Norimberk se obratem spojil se
          švábským městským spolkem; do koalice vstoupila města jako Augšpurk,
          Ulm, Norimberk samotný, Rotenburg, Dinkelsbühl, Nördlingen, Schwäbisch
          Hall, Memmingen a další. Markrabě naopak získal podporu většiny
          říšských knížat, mimo jiné kurfiřtů mohučského a falckého, biskupů
          würzburského a bamberského a vévody Albrechta III.
          Bavorsko-mnichovského.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Erster_Markgrafenkrieg"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          V první fázi v letech <b>1449–1450</b> probíhaly především drobné
          kořistné výpady, plenění vesnic a obchodních konvojů a ničení mlýnů a
          tvrzí. Klíčovým polním střetnutím se stala bitva u Pillenreuthu (něm.{' '}
          <i>Schlacht bei Pillenreuth</i>) <b>11. března 1450</b>, kde
          norimberské městské vojsko porazilo Albrechtův oddíl. Ztráty
          markraběcí strany se podle dobových udání pohybovaly v řádu několika
          set padlých a desítek zajatých rytířů. Norimberk po vítězství
          kontroloval vlastní zázemí a mohl pokračovat v záštích proti
          markraběcím statkům.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Erster_Markgrafenkrieg"
          />
        </p>
        <p>
          Pod tlakem císaře Fridricha III. a kurfiřtů uzavřely strany{' '}
          <b>22. června 1450</b> v Bambergu příměří. Spory však pokračovaly a v
          roce <b>1452</b> přerostly v druhou fázi otevřených bojů. V této etapě
          získal Albrecht převahu, vypálil řadu vesnic v okolí Norimberka a
          zatlačil městský spolek do defenzivy. <b>27. dubna 1453</b> byl v Lauf
          an der Pegnitz uzavřen mírový protokol; konečná norimberská dohoda
          potvrzená císařem následovala v roce <b>1453</b>. Mír v podstatě
          potvrdil status quo: markrabě nezískal pravomoc nad Norimberkem, ale
          město muselo zaplatit válečné odškodnění a uznat některé Albrechtovy
          zemské nároky v okolních franských oblastech.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/First_Margrave_War"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          První markraběcí válka neskončila rozhodnutím ve prospěch ani jedné ze
          stran, Albrecht Achilles si jí však získal v Říši pověst jednoho z
          nejschopnějších knížecích vojevůdců a aktivně vystupoval i v dalších
          říšských konfliktech, mimo jiné v bavorské válce roku 1462, kde byl
          naopak poražen Ludvíkem IX. Bavorsko-landshutským v bitvě u Giengenu.
          Pro říšská města se válka stala varováním, že bez sevřené spojenecké
          organizace nedokáží dlouhodobě čelit knížecí koalici. Tato zkušenost
          živila vznik širšího městského spolku, který v letech 1449–1450
          souběžně sváděl tzv. jihoněmeckou městskou válku.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Erster_Markgrafenkrieg"
          />
        </p>
        <h5>Primární prameny</h5>
        <p>
          Klíčovým dobovým pramenem je <b>Sigmund Meisterlin</b> ve své{' '}
          <i>Chronik der Reichsstadt Nürnberg</i> (něm. původní redakce 1488),
          jež v narativní podobě zachycuje pillenreuthskou bitvu i průběh
          norimberského tažení; edice vyšla jako součást{' '}
          <i>Chroniken der deutschen Städte</i>, sv. 3 (Lipsko 1864).
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://archive.org/search?query=Burkhard+Zink+Augsburg+Chronik"
          />
        </p>
        <p>
          Diplomatický rámec dokumentují <i>Reichstagsakten ältere Reihe</i>,
          sv. 19 (jednání norimberského a frankfurtského sněmu 1450), v edici
          Mnichovské bavorské akademie a digitalizované v rámci dMGH; obsahují
          listinné podklady k bamberskému příměří a k císařské intervenci
          Fridricha III.
          <Qt publication={PUBLICATIONS.WIKI} href="https://www.dmgh.de/" />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Doložená přítomnost českých žoldnéřských oddílů na žádné ze stran
          první markraběcí války není v dostupných pramenech jednoznačně
          potvrzena. Albrecht Achilles využíval především franskou a švábskou
          šlechtu a její drobné družiny; norimberský spolek najímal posádky z
          říšského prostoru a v menší míře z italských kondotiérských kruhů.
          Najímání českých husitských kapitánů a jejich vozových rot do říšských
          služeb (typu Jana Zelenky či Holického ze Šternberka ve službách
          saských vévodů) je z pramenů doloženo až v pozdějším období po roce
          1454; pro období 1449–1453 systematické české kontingenty na
          jihoněmeckém bojišti chybí. Drobné individuální zápisy českých
          šlechticů ve službě jednotlivých franských pánů nelze vyloučit, ale v
          ucelenější podobě se čeští kondotiéři v tomto regionu objevují až
          později u dvora Ludvíka IX. Bavorsko-landshutského a v bavorských
          válkách 60. let 15. století.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://de.wikipedia.org/wiki/Erster_Markgrafenkrieg"
          />
        </p>
      </Col>
    </Row>
  </>
)
