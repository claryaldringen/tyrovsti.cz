import React from 'react'
import { Col, Row } from 'reactstrap'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const IntroduzioneOrdinanzeCeche = ({ draft }: ArticleProps) => (
  <>
    <h1>Ordinanze e scritti militari cechi{draft && <DraftBadge />}</h1>
    <Row>
      <Col>
        <p>
          Tra gli scritti medievali che ci offrono uno sguardo sulle condizioni
          della guerra dell&apos;epoca vi sono le cosiddette ordinanze militari.
          Venivano solitamente redatte prima di una campagna specifica e
          trattavano originariamente soprattutto questioni disciplinari e
          organizzative. Di queste, relativamente poche sono sopravvissute fino
          al XV secolo. Tra le più note vi è l&apos;
          <i>Ordinanza militare di Federico I Barbarossa</i> del 1158. La più
          antica ordinanza militare degli svizzeri è la cosiddetta{' '}
          <i>Sempacherbrief</i>, redatta a Zurigo nel 1393. Queste due ordinanze
          divennero la base e il modello per la maggior parte degli scritti
          successivi di questa natura nelle aree germaniche.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:fd18f7bc-3cb3-4d13-a2c4-1cd3a9878f2d"
          />{' '}
          Tralasciando la discussa datazione della cosiddetta Ordinanza di
          Hodětín (che i vari studiosi collocano tra il 1413 e il 1431), il
          primo tentativo di introdurre un&apos;ordinanza militare a pieno
          titolo fu compiuto da Jan Hvězda z Vícemilice nell&apos;ottobre 1421 a
          Praga. Questa ordinanza, tuttavia, non ci è pervenuta ed è nota
          unicamente grazie a una menzione nella Cronaca hussita di Lorenzo di
          Březová
          <Qt publication={PUBLICATIONS.VAVRINEC} note="p. 259–260" />:{' '}
          <i>
            che durante le spedizioni militari nessuno dovesse tornare
            dall&apos;esercito senza il consenso degli hetman (capitani), né, se
            fosse giunto il momento, abbandonare la battaglia sotto pena della
            perdita della vita e dei beni, per alcuna consuetudine.
          </i>
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:956e3859-9fca-4287-93f8-4c33d455d0f3"
          />
        </p>
        <p>
          Dopo la metà del XV secolo, il numero e la qualità delle ordinanze
          militari boeme e tedesche aumentarono, non occupandosi più soltanto di
          questioni disciplinari e organizzative, ma anche di tattica militare e
          dell&apos;arte della guerra. L&apos;opera culminante a questo riguardo
          è senza dubbio il{' '}
          <i>
            Manuale di Václav Vlček z Čenov per il re Vladislao, su come
            disporre le formazioni di cavalleria, fanteria e carri
          </i>
          , mentre tra le ordinanze tedesche meritano attenzione gli scritti di
          Albrecht III Achille.
        </p>
        <p>
          In questa sede ho cercato di presentare tutti gli scritti e i
          documenti cechi del XV secolo relativi alla scienza militare
          contemporanea.
        </p>
      </Col>
    </Row>
  </>
)
