import React from 'react'
import Link from 'next/link'
import { LINKS, SOCIALS } from '../cz/OProjektu'
import { Col, Row } from 'reactstrap'
import { SocialLinks } from '../../SocialLinks/SocialLinks'

export const InfoSulProgetto = () => (
  <>
    <h2>Il progetto</h2>
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
    <h3>Offriamo</h3>
    <h4>Conferenze e presentazioni</h4>
    <p>
      Offriamo le seguenti presentazioni, conferenze e discorsi. Possiamo
      adattare la durata e il contenuto alle esigenze del pubblico, di solito da
      45 a 90 minuti.
    </p>
    <Row>
      <Col xs={12} md={6}>
        <p>
          <h6>Da Nekmíř a Lipany: la guerra hussita nel contesto</h6>
          Nel XV secolo, gli hussiti terrorizzarono l&apos;Europa centrale.
          Diamo uno sguardo a dove è nato questo fenomeno e, soprattutto, come
          ha influenzato gli affari militari in Europa centrale.
          <ul>
            <li>Lo sviluppo della guerra in Europa</li>
            <li>La guerra nelle terre ceche prima della rivoluzione hussita</li>
            <li>Le cause delle guerre hussite</li>
            <li>Armi e armature dei guerrieri hussiti e dei loro nemici</li>
            <li>Lo sviluppo della tattica e dell&apos;arte militare hussita</li>
            <li>
              Il ruolo della cavalleria, della fanteria, dell&apos;artiglieria e
              del Wagenburg
            </li>
            <li>Le campagne e le battaglie più importanti</li>
            <li>Epilogo</li>
          </ul>
        </p>
      </Col>
      <Col xs={12} md={6}>
        <p>
          <h6>
            Da Lipany a Mohács: la guerra alla boema dopo le guerre hussite
          </h6>
          Dopo le guerre hussite, i cechi erano i mercenari più ricercati in
          Europa. Tuttavia, continuarono ad affrontare le sfide poste dai loro
          avversari e dagli sviluppi militari.
          <ul>
            <li>Lo sviluppo della guerra in Europa</li>
            <li>La guerra nelle terre ceche prima della rivoluzione hussita</li>
            <li>Le innovazioni della guerra hussita</li>
            <li>Lo sviluppo della tattica durante le guerre ceco-ungheresi</li>
            <li>I mercenari cechi in tutta Europa</li>
            <li>
              Un confronto tra soldati cechi, svizzeri, inglesi e tedeschi
              (Lanzichenecchi)
            </li>
            <li>Epilogo: dopo Mohács</li>
          </ul>
        </p>
      </Col>
    </Row>
    Se necessario, è possibile concentrarsi su un solo punto della conferenza e
    approfondirlo, ad esempio il ruolo della fanteria, le manovre con la
    fortificazione di carri, gli ordini militari, ecc.
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
