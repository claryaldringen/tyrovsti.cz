import { Col, Row } from 'reactstrap'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const IstruzioneDifesaCarri = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div
          className="anchor"
          id="istruzione-del-margravio-sulla-difesa-del-forte-dei-carri"
        />
        <h4>
          Istruzione del margravio Albrecht del 15 maggio 1475 sulla difesa del
          forte dei carri
          {draft && <DraftBadge />}
        </h4>
        <p>Traduzione di PhDr. Zdeňka Kopková</p>
        <p>
          L&apos;istruzione risale al periodo in cui l&apos;esercito imperiale
          marciava in soccorso di Neuss, assediata dal duca di Borgogna Carlo il
          Temerario, e il margravio Albrecht Achille era tra i suoi principali
          comandanti. Il testo di questa pagina segue Toman, che lo riprese da
          Joseph Würdinger. Würdinger datò l&apos;istruzione al 15 maggio 1475
          citando l&apos;archivio di Norimberga e non la riporta nella
          formulazione originale, ma in una rielaborazione nel tedesco del XIX
          secolo.
          <Qt
            publication={PUBLICATIONS.WURDINGER2}
            href="https://www.digitale-sammlungen.de/de/view/bsb11684126?page=411"
          />{' '}
          La formulazione originale dello stesso ordine fu pubblicata da Felix
          Priebatsch tra i documenti relativi al consiglio di guerra del 25
          aprile 1475, sulla base di una copia conservata nell&apos;archivio
          cittadino di Strasburgo. In essa il margravio Albrecht è menzionato in
          terza persona, come maestri dei carri sono nominati Lutz Schott e
          Köckeritz e l&apos;ordine tiene conto anche del tiro dalla città di
          Zons sul Reno.
          <Qt
            publication={PUBLICATIONS.PRIEBATSCH2}
            href="https://archive.org/details/politischecorres02albr/page/143/mode/1up"
          />
        </p>

        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <ol>
          <li>
            Man soll Graben und Bollwerk um die Wagenburg bessern, Büchsen und
            andere Geschoss an die vier Seiten vertheilen, die Pferde aus der
            äusseren Zeile entfernen.
          </li>
          <li>
            Zu jedem Wagen sechs Mann zu Fuss bestellen, von dem reisigen Zeug
            soll ein Viertheil vor den Wagen bleiben, die übrigen zur
            Vertheilung in die Wagenburg geschickt werden.
          </li>
          <li>
            An jegliches der zwei Thore kommen 1000 Mann Fussvolk mit einigen
            Reitern. An jedes äussere Eck der Wagenburg 500 Fussknecht, die da
            auf beiden Seiten, wo es Not wird, zur Wehre sind bis auf das andere
            Eck, das gegen sie herauf dient.
          </li>
          <li>
            Zwei tausend sollen mitten auf dem Platz in der Wagenburg mit den
            andern Haufen bleiben, und von da aus, wo es Not thut, zu Hilfe
            eilen.
          </li>
          <li>
            Die Wartleut sollen sich mit dem Feind in kein Scharmützel
            einlassen.
          </li>
          <li>
            Hat ein Viertheil der Büchsen- und Armbrustschützen abge- schossen,
            soll das andere warten, bis das erste wieder geladen, oder die Armst
            gespannt hat.
          </li>
          <li>
            Der Obersthauptmann und die ihm zugegebenen vier Hauptleut sollen
            mit dem frühesten herumreiten, und wo es Not thut, die Leute zur
            Wehr bringen.
          </li>
          <li>
            (Zur Verfolgung des abgetriebenen Feindes werden besondere
            Abtheilungen bestimmt.)
            <Qt
              publication={PUBLICATIONS.TOMAN}
              href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:d9b9294a-9488-4e4f-961e-1984eba3e4fd"
            />
            <Qt
              publication={PUBLICATIONS.WURDINGER2}
              href="https://www.digitale-sammlungen.de/de/view/bsb11684126?page=411"
            />
            <Qt
              publication={PUBLICATIONS.PRIEBATSCH2}
              href="https://archive.org/details/politischecorres02albr/page/143/mode/1up"
            />
          </li>
        </ol>
      </Col>
      <Col md={6}>
        <ol>
          <li>
            È necessario migliorare il fossato e la fortificazione (bastione)
            intorno al forte dei carri; distribuire cannoni e altri proiettili
            sui quattro lati e rimuovere i cavalli dalla fila esterna.
          </li>
          <li>
            Assegnare sei uomini a piedi a ciascun carro; un quarto della
            cavalleria dovrà rimanere davanti ai carri, il resto dovrà essere
            inviato al forte dei carri per la distribuzione.
          </li>
          <li>
            A ciascuna delle due porte, 1.000 fanti con alcuni cavalieri
            dovranno presentarsi. A ciascun angolo esterno del forte dei carri,
            500 fanti, i quali dovranno tenersi pronti alla difesa su entrambi i
            lati dove necessario, fino all&apos;altro angolo che serve di fronte
            a loro sopra.
          </li>
          <li>
            Duemila uomini dovranno rimanere con le altre truppe al centro della
            piazza all&apos;interno del forte dei carri e da lì accorrere in
            aiuto ovunque ve ne sia necessità.
          </li>
          <li>
            Le sentinelle non dovranno ingaggiare alcuna scaramuccia con il
            nemico.
          </li>
          <li>
            Quando un quarto degli archibugieri e dei balestrieri avrà sparato,
            l&apos;altro quarto dovrà attendere fino a che il primo non abbia
            ricaricato o teso nuovamente la balestra.
          </li>
          <li>
            Il comandante supremo e i quattro capitani a lui assegnati dovranno
            cavalcare in perlustrazione al più presto e, dove ve ne sia
            necessità, condurre gli uomini alla difesa.
          </li>
          <li>
            (Distaccamenti speciali sono designati per l&apos;inseguimento del
            nemico respinto.)
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
