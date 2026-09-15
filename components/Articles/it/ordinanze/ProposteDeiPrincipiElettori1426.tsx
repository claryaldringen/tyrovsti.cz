import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const ProposteDeiPrincipiElettori1426 = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="proposte-dei-principi-elettori-1426" />
        <h4>
          Proposte dei principi elettori a Norimberga del giugno 1426, articolo
          17
          {draft && <DraftBadge />}
        </h4>
        <p>Traduzione provvisoria, non ancora revisionata.</p>
        <p>
          Le proposte furono redatte dai principi elettori durante la loro
          riunione a Norimberga tra il 7 e il 10&nbsp;giugno 1426. Vi si tratta
          di come preparare e condurre la spedizione contro gli hussiti, di come
          radunare la gente e di chi debba contribuire alla spedizione, nonché
          della sicurezza dei partecipanti e del risarcimento dei loro danni. Le
          regole della disciplina militare compaiono soltanto nell&apos;articolo
          17, e anche lì, secondo Toman, solo in forma di estratto senza
          particolari. Toman lo riprese dai <i>Deutsche Reichstagsakten</i> e lo
          suddivise egli stesso nei paragrafi a–g.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:8b817ac0-57b2-408e-83e4-6a2585b6ccc2"
          />{' '}
          Il testo si è conservato soltanto in una copia cartacea del XVIII
          secolo nell&apos;Archivio di Stato di Breslavia, che non indica il
          proprio modello, e l&apos;editore vi ha corretto numerosi errori di
          lettura. Un più antico regesto dei documenti dell&apos;Alta Lusazia e
          Grünhagen lo collocavano nel 1422.
          <Qt
            publication={PUBLICATIONS.DRA8}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833356?page=483"
          />{' '}
          La trascrizione di Toman differisce dall&apos;edizione soprattutto
          nella grafia. L&apos;unica differenza di sostanza è nel paragrafo b),
          dove Toman legge <Cit>fährde</Cit> e l&apos;edizione <Cit>vehede</Cit>
          , cioè faida. In questo punto la traduzione segue l&apos;edizione.
          Secondo l&apos;editore, il divieto di condurre meretrici con
          l&apos;esercito compare anche nell&apos;ordinanza di Francoforte del
          1427.
          <Qt
            publication={PUBLICATIONS.DRA8}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833356?page=486"
          />
        </p>
        <p>
          Note di traduzione: traduco alla lettera le parole{' '}
          <Cit>wenn die hussen zusammenkommen werden</Cit>, che però si possono
          intendere anche più liberamente come il radunarsi degli eserciti
          contro gli hussiti.
          <br />
          L&apos;editore spiega l&apos;espressione{' '}
          <Cit>umme niemands willen vorsehen</Cit> come condonare, perdonare.
          <Qt
            publication={PUBLICATIONS.DRA8}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833356?page=486"
          />
        </p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <ol type="a">
          <li>
            Item dass man ausrufen hat, wenn die hussen zusammenkommen werden,
            dass itzlicher den hauptleüten an den enden, do sie beschieden
            worden, gehorsam zu sein.
          </li>
          <li>
            und friedlichen unter enander zu leben, und wär einige fährde adir
            unwillen zwischen jemands, die soll gänzlichen gestillet, gefredet
            sin, bis itzliche parteie wieder zu sinen landen und heimwärts
            kummet,
          </li>
          <li>
            und wer ouch eine missethat thäte, dem soll der hauptmann, under dem
            her ist, strafen nach gelegenheit der sachen, und soll auch keiner,
            unter des befehlnisse solicher missethätiger wäre, ihn beschirmen,
            sunder behulfen darzu sein, dass der bestrafet werde.
          </li>
          <li>Item soll man kein würfelspil gestattin, und</li>
          <li>
            keine gemeine frauen, besondere auch, wenn man zu felde ziehet, in
            das heer lassen.
          </li>
          <li>
            Wäre dass einige fraue, magd odir jungfraue genotzüget würde, wer
            das thäte, den sall man strafen ahn alle gnade, als sich das gebürt.
          </li>
          <li>
            So soll auch niemand den anderen, die sulchen zog riten, sie wären
            von städten oder andere, schmähen mit worten oder werken; wer das
            dorobir thäte, der sulde gestraft werden als sich gebüret, und
            soliche strafunge soll umme niemands willen vorsehen werden.
            <Qt
              publication={PUBLICATIONS.TOMAN}
              href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:b36b7bcb-2d06-43ab-b8f8-a51501e7fe19"
            />
            <Qt
              publication={PUBLICATIONS.DRA8}
              href="https://www.digitale-sammlungen.de/de/view/bsb11833356?page=486"
            />
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <ol type="a">
          <li>
            Si proclami, quando gli hussiti si raduneranno, che ciascuno
            obbedisca ai capitani nei luoghi ai quali è stato assegnato
          </li>
          <li>
            e viva in pace con gli altri; e se tra qualcuno vi fosse una faida o
            un risentimento, questi dovrà essere del tutto sopito e pacificato
            finché ciascuna parte non ritorni nelle proprie terre e a casa.
          </li>
          <li>
            E chi commettesse un misfatto sia punito dal capitano sotto il quale
            si trova, secondo le circostanze; e nessuno, sotto il cui comando si
            trovasse un tale malfattore, lo protegga, ma aiuti affinché sia
            punito.
          </li>
          <li>Non si permetta il gioco dei dadi e</li>
          <li>
            non si lascino entrare meretrici nell&apos;esercito, soprattutto
            quando si marcia in campo.
          </li>
          <li>
            Se una donna, una serva o una vergine venisse violentata, chi lo
            avesse fatto sia punito senza alcuna grazia, come si conviene.
          </li>
          <li>
            Nessuno oltraggi con parole o con atti gli altri che partecipano a
            tale spedizione, siano essi delle città o altri; chi nondimeno lo
            facesse sia punito come si conviene, e tale pena non sia condonata
            per riguardo a nessuno.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
