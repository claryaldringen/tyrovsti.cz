import { Col, Row } from 'reactstrap'
import React from 'react'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const OrdinanzaCarriFrancoforte = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="ordinanza-dei-carri-di-francoforte" />
        <h4>
          Ordinanza dei carri di Francoforte del 1444{draft && <DraftBadge />}
        </h4>
        <p>Traduzione di PhDr. Zdeňka Kopková, revisione di Daniel Burger.</p>
        <p>&nbsp;</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <p>
          Ouch haben wir fürgenommen und lüte bestallt mit der wagenburge dem
          volk zu widerstehn, und sollen tusent wagen, iglicher mit zwein
          starken knechten, die wohl gefahren können, und vier starken wagen-
          hengsten, wohl gemähnet und gestallt, mit leitern, zäunen, starken
          lüssen [leisten], halb mit leinem tuch gedeckt, und unden zwischen den
          zwein achsen an der langwide ein stark brett an ketten hangen,
          gestalt, dass man das anhenken und abthun möge, wann man will; und
          sollen je zween wagen ein ketten haben, die acht ellen lang sei, mit
          einem ring und einem hacken, dass man die an und abthün möge, wann man
          will; und sollen zu iglichen wagen zwo handbüchsen, und zu iglicher
          handbüchsen zum minsten sechzig bleiklötz, und zu zwein wagen ein
          kammerbüchs und darzu zum minsten dreissig stein, als gross als ein
          haupt ist, und zu iglichem wagen zween flegel, die beslagen und mit
          ketten angehenkt sind, zwoo gleen [gleven] und hacken daran, drei
          setztartschen von borten mit stecken hinden daran, ein schufel, ein
          haue und ein bickel gehören, und darumb so wollent uwer wagen also
          zustellen, und auch stein, pulver, blei und pfeil, so ihr meiste
          mögent mit uch bringen. <br />
          Dat. ut supra.
        </p>
      </Col>
      <Col md={6}>
        <p>
          E noi abbiamo disposto e arruolato uomini con il forte dei carri per
          resistere al nemico, e vi dovranno essere mille carri, ciascuno con
          due serventi robusti capaci di guidare bene, e quattro robusti
          stalloni da tiro, ben criniti e formati, con scale, steccati, rinforzi
          solidi, coperti a metà con tela di lino, e sotto, tra i due assi, sul
          fianco longitudinale un&apos;asse robusta dovrà pendere da catene,
          disposta in modo che possa essere agganciata e rimossa quando si
          desideri; e ogni due carri dovranno avere una catena, lunga otto
          braccia, con un anello e un gancio, cosicché possa essere agganciata e
          rimossa quando si desideri; e a ciascun carro due archibugi portatili,
          e per ciascun archibugio almeno sessanta proiettili di piombo, e per
          ogni due carri un cannone a camera e almeno trenta pietre delle
          dimensioni di una testa, e a ciascun carro due correggiati cerchiati
          di ferro e fissati con catene, due ronconi con ganci, tre pavesi fissi
          con tavole e picchetti sul retro, una pala, una zappa e un piccone;
          pertanto equipaggiate i vostri carri in tal modo, e portate con voi
          anche pietre, polvere, piombo e dardi, in tutta la quantità che potete
          trasportare.
        </p>
      </Col>
    </Row>
  </>
)
