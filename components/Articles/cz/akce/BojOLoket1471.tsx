import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const BojOLoket1471 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="boj-o-loket-1471" />
        <h4>
          Boj o&nbsp;Loket a&nbsp;záští na bayreuthské a&nbsp;ašské hranici
          (1471){draft && <DraftBadge />}
        </h4>
        <p>
          Po smrti Jiřího z&nbsp;Poděbrad <b>22. března 1471</b> se
          v&nbsp;období bezvládí a&nbsp;volby nového českého krále otevřela na
          západočesko-hornofalckém pomezí řada lokálních konfliktů. Centrem
          sporů se stal královský hrad <b>Loket</b> (něm. <i>Ellbogen</i>),
          o&nbsp;jehož ovládnutí usilovalo více aktérů – Šlikové, Gutštejnové
          a&nbsp;markrabě Albrecht&nbsp;Achilles z&nbsp;Brandenburska-Ansbachu.
          Souběžně probíhala drobnější záští na bayreuthsko-ašské hranici
          spojená se Cedvicem a&nbsp;Plavenskými.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://cs.wikipedia.org/wiki/Loket_(m%C4%9Bsto)"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Kontext</h5>
        <p>
          Loket byl od 13. století jedním z&nbsp;nejdůležitějších královských
          hradů v&nbsp;západních Čechách – sídlem loketského kraje
          a&nbsp;klíčovým opěrným bodem nad řekou Ohří. Od počátku 15. století
          byl opakovaně dáván v&nbsp;zástavu; <b>Kašpar Šlik</b> (zemřel 1449)
          získal Loket roku 1434 a&nbsp;jeho potomci hrad drželi jako rodové
          sídlo. Po Kašparově smrti se mezi jeho dědici – zejména{' '}
          <b>Matyášem Šlikem</b> – a&nbsp;dalšími aktéry rozhořely spory
          o&nbsp;rozsah šlikovských zástavních práv. Po Jiřího smrti se
          aktivovala jak gutštejnská, tak markrabská strana, neboť
          Albrecht&nbsp;Achilles už dříve usiloval o&nbsp;rozšíření vlivu
          Hohenzollernů přes ašské pomezí do Čech.
        </p>
        <p>
          V&nbsp;Aši a&nbsp;na bayreuthsko-ašské hranici působila stará rodová
          dynastie <b>z&nbsp;Cedvic</b> (něm. <i>Zedtwitz</i>), držící Aš jako
          české léno; její příslušníci byli klanově propojeni s&nbsp;Plavenskými
          a&nbsp;s&nbsp;Viršperky. Markraběcí ansbašská a&nbsp;bayreuthská
          strana viděla v&nbsp;zázemí Cedvicu příležitost pronikat do
          chebsko-loketského pomezí, zatímco česká strana se pokoušela cedvické
          léno udržet pod kontrolou české koruny.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          V&nbsp;průběhu roku <b>1471</b> Šlikové opevnili Loket a&nbsp;jeho
          městskou obec proti případnému gutštejnskému i&nbsp;markrabskému
          tlaku; loketská rada uzavřela ochranné úmluvy s&nbsp;chebskou obcí
          a&nbsp;s&nbsp;některými západočeskými pány. Současně docházelo
          k&nbsp;menším výpadům z&nbsp;Bayreuthu a&nbsp;z&nbsp;ansbašského
          zázemí přes Aš do horního Poohří. Akce měly povahu drobných
          pohraničních střetů – přepady kupců, výpalné z&nbsp;menších vsí
          a&nbsp;spory o&nbsp;mýta –, jejichž podrobnou rekonstrukci vyžadují
          primární prameny (Jánský 2003).
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
        <p>
          Po volbě <b>Vladislava&nbsp;II. Jagellonského</b> českým králem
          (27.&nbsp;května 1471) a&nbsp;po jeho korunovaci ve sv. Vítu
          (22.&nbsp;srpna 1471) se západočeské poměry postupně stabilizovaly.
          Šlikové si Loket udrželi jako zástavní pány, gutštejnská opozice byla
          odsunuta na druhý plán a&nbsp;markraběcí pokusy se omezily na lokální
          tlak v&nbsp;ašsko-bayreuthském regionu.
        </p>
        <h5>Účastníci a&nbsp;důsledky</h5>
        <p>
          Spor demonstroval, jak křehká byla pozice královské moci v&nbsp;době
          přechodu mezi panovníky. Pro Šliky znamenal rok 1471 upevnění rodové
          pozice na Lokti – panství drželi až do Bílé hory. Páni z&nbsp;Cedvic
          si i&nbsp;v&nbsp;dalších letech udrželi ašské léno a&nbsp;zůstali
          aktivními protihráči chebských i&nbsp;bayreuthských zájmů. Pro
          česko-bavorský a&nbsp;česko-franský pohraniční prostor zapadá rok 1471
          do série lokálních záští, která navazovala na bocklerskou éru
          a&nbsp;na něž bezprostředně navázal útok kolovratsko-volfštejnského
          klanu na Chebsko v&nbsp;témže roce.
          <Qt
            publication={PUBLICATIONS.JANSKY}
            href="https://drive.google.com/file/d/1H5ukNtdLcbdo6u_3axUC2f5bBr2GV5en/view"
          />
        </p>
      </Col>
    </Row>
  </>
)
