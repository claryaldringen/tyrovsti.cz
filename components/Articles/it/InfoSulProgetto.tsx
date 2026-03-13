import React from 'react'
import Link from 'next/link'
import { LINKS, SOCIALS } from '../cz/OProjektu'
import { Col, Row } from 'reactstrap'
import { SocialLinks } from '../../SocialLinks/SocialLinks'
import { ArticleProps } from '../../../types'
import { DraftBadge } from '../../DraftBadge'

export const InfoSulProgetto = ({ draft }: ArticleProps) => (
  <>
    <h2>Il progetto{draft && <DraftBadge />}</h2>
    <p>
      Ci occupiamo della ricostruzione (cosiddetto reenactment) della corte e
      del seguito di&nbsp;
      <Link href="/tyrovsky-di-einsiedl/jobst-di-einsiedl">
        Jobst von Einsiedl
      </Link>
      , segretario personale del re Giorgio di Poděbrady, datato
      approssimativamente tra il 1450 e il 1470.
    </p>
    <p>
      Il nostro obiettivo è presentare al pubblico i vari aspetti della vita
      nella Boemia della seconda metà del XV secolo e illustrare lo sviluppo
      culturale e storico unico della Boemia dopo le guerre hussite.
    </p>
    <p>
      Le ricostruzioni si basano sulle fonti scritte, iconografiche e
      archeologiche disponibili, in particolare dalla Boemia occidentale. Ci
      impegniamo per la massima fedeltà storica, tenendo conto delle tecnologie
      utilizzate e delle informazioni disponibili. Cerchiamo di attenerci il più
      possibile ai materiali e alle colture disponibili e utilizzati
      all&apos;epoca. Tutti i nostri abiti e le nostre calzature sono fatti a
      mano, alcuni anche con tessuti tessuti a mano. Anche le parti delle armi e
      gli accessori di abbigliamento che utilizziamo sono repliche artigianali
      di originali sopravvissuti.
    </p>
    <p>
      Collaboriamo anche con altre associazioni che hanno un orientamento
      cronologico simile. Tra queste ci sono&nbsp;
      <a href={LINKS[0]} target="_blank" rel="noreferrer">
        Rattenschwanz
      </a>
      ,&nbsp;
      <a rel="noreferrer" href={LINKS[1]} target="_blank">
        Praga Jagellonica 1471
      </a>
      ,&nbsp;
      <a href={LINKS[2]} rel="noreferrer" target="_blank">
        Slánská rota
      </a>{' '}
      e altri.
    </p>
    <h3>Contatti</h3>
    <Row>
      <Col>
        <p>
          Týřovští z.s.
          <br />
          Karla Čapka 1393 <br />
          266 01 Beroun
          <br />
          Repubblica Ceca <br />
          P. IVA: 24090956 <br />
          Email: <a href="mailto:info@tyrovsti.cz">info@tyrovsti.cz</a>
        </p>
      </Col>
      <Col>
        <SocialLinks items={SOCIALS} iconSize={24} />
      </Col>
    </Row>
  </>
)
