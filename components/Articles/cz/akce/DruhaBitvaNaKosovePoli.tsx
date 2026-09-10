import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const DruhaBitvaNaKosovePoli = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="druha-bitva-na-kosove-poli" />
        <h4>Druhá bitva na Kosově poli (1448){draft && <DraftBadge />}</h4>
        <p>
          Druhá bitva na Kosově poli se odehrála ve dnech{' '}
          <b>17. – 20. října 1448</b> mezi vojskem uherského zemského správce
          Jánose Hunyadiho a osmanskou armádou sultána Murada II. Třídenní
          střetnutí skončilo těžkou porážkou křesťanského vojska a definitivně
          uzavřelo Hunyadiho velkou ofenzivní strategii proti Osmanům na
          Balkáně.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Second_Battle_of_Kosovo"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Po katastrofě u Varny roku 1444 zůstaly Uhry bez krále; János Hunyadi
          byl roku 1446 zvolen zemským správcem (gubernátorem) jménem
          nezletilého Ladislava Pohrobka. V září 1448 vytáhl Hunyadi v čele
          uherské, valašské a žoldnéřské armády na jih s cílem spojit se s
          albánskými oddíly Skanderbega a porazit Osmany v otevřené polní bitvě.
          Srbský despota Đurađ Branković, formálně Hunyadiho spojenec, se k
          tažení odmítl připojit, dokonce zdržoval Hunyadiho průchod svým územím
          a osmanského sultána varoval o postupu křesťanského vojska. Branković
          byl Hunyadim za to označen za zrádce a jeho državy v Uhrách byly
          konfiskovány.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/John_Hunyadi"
          />
        </p>
        <h5>Sestava křesťanského vojska</h5>
        <p>
          Hunyadiho armáda měla podle různých dobových odhadů 22 000 až 30 000
          mužů. Jádro tvořila uherská šlechtická jízda a královská tělesná
          stráž; pravému křídlu velel chorvatský bán Franko Talovac, levému
          Michael Szilágyi (Hunyadiho švagr). Klíčovou součástí byl asi 10
          000členný kontingent valašské jízdy pod vojvodou Vladislavem II.
          Pěchotní páteř představovaly oddíly německých a českých žoldnéřů s
          ručnicemi a vozovou hradbou; jejich síla je pramenně odhadována na
          několik tisíc mužů. Hunyadi vedl střed osobně.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Second_Battle_of_Kosovo"
          />
        </p>
        <h5>Sestava osmanské armády</h5>
        <p>
          Osmanské vojsko v síle 40 000 až 60 000 mužů vedl osobně sultán Murad
          II.; ve středu byly janičářské pluky a polní dělostřelectvo, chráněné
          palisádami a vozovou hradbou. Pravému křídlu, složenému převážně z
          anatolských sipáhů, velel šestnáctiletý sultánův syn Mehmed (budoucí
          dobyvatel Konstantinopole). Levému křídlu, tvořenému rumelskými
          oddíly, velel beglerbeg Karaca Paša a další tureckí beji.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Second_Battle_of_Kosovo"
          />
        </p>
        <h5>Průběh bitvy – první den (17. října 1448)</h5>
        <p>
          První den proběhly přestřelky a sondovací útoky lehké jízdy a
          osmanských akindžiů; bitva nezačala vzájemným hlavním nárazem. Obě
          armády nocovaly v polních táborech vzdálených od sebe pouze několik
          set metrů.
        </p>
        <h5>Druhý den (18. – 19. října 1448)</h5>
        <p>
          Druhého dne se rozhořela hlavní bitva. Hunyadi vyrazil s těžkou jízdou
          středu i s křídly proti osmanské linii; jeho útok na pravé křídlo
          zatlačil rumelské oddíly, ale narazil na pevný šik janičářů krytých
          dělostřelectvem a vozovou hradbou ve středu. Levé křídlo pod Szilágyim
          si udrželo pozice proti Mehmedovým anatolským sipáhům. Boj se přes
          celý den nerozhodl; osmanské zálohy a vyšší početnost však Hunyadiho
          oddíly opotřebovávaly.
        </p>
        <h5>Třetí den a porážka (20. října 1448)</h5>
        <p>
          Třetího dne zradili valašští spojenci pod Vladislavem II. a stáhli se
          z bojiště. Osmané prolomili linie a křesťanský šik se zhroutil;
          uherská jízda se dala na ústup. Pěchota v opevněném vozovém táboře – v
          jádru čeští a němečtí žoldnéři – kladla úporný odpor ještě řadu hodin,
          než byla v opevnění zničena. Hunyadi s několika věrnými unikl z
          bojiště a prchal severozápadně. V Srbsku byl však zajat a uvězněn
          srbským despotou Đurađem Brankovićem; propuštěn byl až po složení
          výkupného ve výši 100 000 zlatých florinů a po vydání území Görgényi a
          hradu Világos do brankovićových rukou.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Second_Battle_of_Kosovo"
          />
        </p>
        <h5>Pramenné podání</h5>
        <p>
          Hlavní vyprávění o bitvě podává Antonio Bonfini v{' '}
          <i>Rerum Hungaricarum decades</i>; uvádí 8 000 padlých křižáků a 30
          000 padlých Turků. Byzantský historik Laonikos Chalkokondylés
          zaznamenal 4 000 osmanských a 17 000 křesťanských obětí, kdežto
          anonymní konstantinopolský pramen píše o ztrátách křižáků kolem 6 000
          – 7 000 mužů. Hunyadiho vlastní vidění bitvy pak přebírá uherský
          kronikář Johannes Thuróczy. Aeneas Silvius Piccolomini se k bitvě
          vyjadřoval v souvislosti s úvahami o nové křížové výpravě.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Antonio_Bonfini"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Porážka znamenala konec velkých uherských ofenziv proti Osmanům na
          Balkáně. Hunyadi se napříště soustředil na obranu Uher; jeho další
          velký úspěch přišel až při obraně Bělehradu roku 1456, kde rozdrtil
          Mehmedovu armádu pod hradbami srbské pevnosti, ale o několik týdnů
          později zemřel na mor. Pro křesťanské mocnosti znamenala porážka na
          Kosovu 1448 ztrátu naděje na rychlé vytlačení Osmanů z Evropy a
          urychlila cestu k pádu Konstantinopole 29. května 1453.
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Součástí Hunyadiho vojska byl značný kontingent českých a moravských
          žoldnéřů – odhady dobových pramenů hovoří o několika tisících mužů.
          Bojovali jako pěchota vyzbrojená palnými zbraněmi a chráněná pavézami
          a vozovou hradbou v centru sestavy. Právě tato česká pěchota kladla v
          opevněném táboře poslední odpor osmanským janičářům po valašské zradě
          a podle osmanských i uherských pramenů byla téměř beze zbytku pobita.
          Bonfini podává obraz českých střelců, kteří se před padnutím stříleli
          ze svých povozů ještě v okamžiku, kdy byli osmanskými oddíly
          obklíčeni.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://en.wikipedia.org/wiki/Second_Battle_of_Kosovo"
          />
        </p>
      </Col>
    </Row>
  </>
)
