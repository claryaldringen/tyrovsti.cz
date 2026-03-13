import { Col, Row } from 'reactstrap'
import React from 'react'
import { ImageWithTitle } from '../../ImageWithTitle/ImageWithTitle'
import { ArticleProps } from '../../../types'
import { DraftBadge } from '../../DraftBadge'

export const LavoroDiPiedi = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="footwork-or-manoeuvres" />
        <h4>Lavoro di piedi, ovvero le manovre{draft && <DraftBadge />}</h4>
        <p>
          Lo scopo di questo breve articolo è fornire una panoramica del lavoro
          di piedi, ossia le manovre essenziali per un ingaggio sicuro e
          riuscito con un avversario nel combattimento a cavallo (
          <i>Rossfechten</i>). Il lavoro di piedi qui descritto si basa su
          manoscritti equestri contemporanei e sull&apos;applicazione logica
          della biomeccanica all&apos;arte del combattimento a cavallo.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Manovre</h5>
      </Col>
    </Row>
    <Row>
      <ImageWithTitle md={2} src="haunches-in.png" width={512} height={960} />
      <Col>
        <h6>Travers (Anche in dentro)</h6>
        <p>
          Il cavallo è piegato con i posteriori verso l&apos;interno. Il cavallo
          viene guidato dall&apos;esterno posteriore. Ciò consente una maggiore
          manovrabilità laterale e una migliore stima delle distanze. È una
          posizione sia di avvicinamento che di attacco. È inoltre
          l&apos;approccio meno minaccioso per i cavalli e aiuterà a prevenire
          aggressioni indesiderate tra i cavalli.
        </p>
        <p>
          Nota: il cavallo dovrebbe essere sempre piegato verso
          l&apos;avversario.
        </p>
      </Col>
      <ImageWithTitle src="travers-in-to-attck.png" width={832} height={712} />
    </Row>
    <Row>
      <ImageWithTitle md={2} src="shoulder-in.png" width={512} height={960} />
      <Col>
        <h6>Spalla in dentro</h6>
        <p>
          In questa posizione il cavallo è ancora piegato nella stessa direzione
          (verso l&apos;avversario), ma si muove sul posteriore interno. Questa
          manovra viene utilizzata in difesa per annullare un colpo o per
          eludere la mira dell&apos;avversario.
        </p>
        <p>
          Nota: il cavallo dovrebbe essere sempre piegato verso
          l&apos;avversario.
        </p>
      </Col>
      <ImageWithTitle src="shoulder-in-to-evade.png" width={884} height={758} />
    </Row>
    <Row>
      <ImageWithTitle src="volte.png" width={602} height={666} />
      <Col>
        <h6>Piroetta</h6>
        <p>
          Dal travers, il cavallo rallenta il movimento in avanti dei posteriori
          e muove la spalla in un cerchio stretto. È ideale per assumere la
          posizione corretta o per ripetere un ingaggio.
        </p>
      </Col>
    </Row>
  </>
)
