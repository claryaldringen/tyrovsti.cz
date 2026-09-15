import React from 'react'
import { Col, Row } from 'reactstrap'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const IntroduzioneOrdinanzeTedesche = () => (
  <Row>
    <Col>
      <p>
        Gli avversari degli hussiti impararono il loro modo di combattere
        direttamente in guerra. Secondo Max Jähns vi furono costretti: chi
        voleva opporre all&apos;artiglieria una propria artiglieria aveva
        bisogno di carri, e chi voleva espugnare un forte dei carri nemico
        doveva affidare il peso principale del combattimento alla fanteria.
        <Qt
          publication={PUBLICATIONS.JAHNS1889}
          href="https://archive.org/details/geschichtederkr00jhgoog/page/303/mode/1up"
        />{' '}
        Nei paesi tedeschi il forte dei carri si legò così strettamente
        all&apos;esercito che la parola <i>Wagenburg</i> veniva spesso usata per
        indicare l&apos;esercito in generale. Le ordinanze coeve sul forte dei
        carri (<i>Wagenburgordnungen</i>) sono perciò per lo più anche ordinanze
        militari (<i>Heerordnungen</i>).
        <Qt
          publication={PUBLICATIONS.JAHNS1889}
          href="https://archive.org/details/geschichtederkr00jhgoog/page/304/mode/1up"
        />{' '}
        Secondo Toman, le menzioni di carri armati alla maniera hussita
        compaiono nelle deliberazioni degli stati dei paesi vicini a partire
        dalla sconfitta di Ústí nad Labem (Aussig) del 1426. All&apos;inizio,
        però, sono molto concise e si limitano a elencare ciò che si deve
        portare in campo con i carri.
        <Qt
          publication={PUBLICATIONS.TOMAN}
          href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:175a8bf2-68d6-4f59-b376-5f0d3fe627ee"
        />
      </p>
      <p>
        Il forte dei carri non era tuttavia l&apos;unico tema. Secondo Toman,
        durante le guerre hussite dalle consultazioni delle diete imperiali
        scaturirono tre ordinanze militari generali per le spedizioni progettate
        in Boemia. Trattano della preparazione della campagna, della disciplina
        nell&apos;esercito e della ripartizione dell&apos;artiglieria. Le
        proposte dei principi elettori del 1426 sono a suo avviso soltanto un
        povero tentativo, la risoluzione di Francoforte del 1427 costituisce già
        un&apos;ordinanza compiuta di 48 articoli e la terza ordinanza fu
        emanata dalla dieta di Norimberga nel 1431.
        <Qt
          publication={PUBLICATIONS.TOMAN}
          href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:8b817ac0-57b2-408e-83e4-6a2585b6ccc2"
        />
        <Qt
          publication={PUBLICATIONS.TOMAN}
          href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:b20c2763-1196-4237-b865-63d45ed3cb7c"
        />
      </p>
      <p>
        Maximilian von Wulf osserva che, per quanto riguarda il forte dei carri,
        le ordinanze degli anni 1428–1450 si limitano all&apos;equipaggiamento
        dei carri. A suo avviso, la risoluzione di Norimberga del 1428 contiene
        in assoluto le prime disposizioni sui carri da guerra delle leve
        imperiali. Solo da un&apos;epoca successiva si sono conservate ordinanze
        più dettagliate, che descrivono anche la marcia e l&apos;accampamento
        del forte dei carri.
        <Qt
          publication={PUBLICATIONS.WULF1889}
          href="https://www.digitale-sammlungen.de/de/view/bsb11551340?page=12"
        />{' '}
        Secondo Wulf, il quadro più vivo di un forte dei carri in marcia e
        accampato è offerto dalle ordinanze del margravio Albrecht Achille.
        <Qt
          publication={PUBLICATIONS.WULF1889}
          href="https://www.digitale-sammlungen.de/de/view/bsb11551340?page=13"
        />
      </p>
      <p>
        Come fonte per l&apos;arte militare hussita, entrambi gli autori
        considerano le ordinanze più tarde con riserva. Toman ritiene le
        ordinanze della prima metà del secolo fonti dirette. Per quelle più
        tarde avverte che vi si riflettono i cambiamenti dell&apos;ultimo quarto
        del secolo – il perfezionamento dell&apos;artiglieria e i modelli
        svizzeri e dei Paesi Bassi nell&apos;impiego della fanteria. Tuttavia vi
        trova molti elementi preziosi fondati su antiche tradizioni, soprattutto
        riguardo alle manovre con i carri e agli accorgimenti tecnici, sui quali
        le fonti più antiche tacciono.
        <Qt
          publication={PUBLICATIONS.TOMAN}
          href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:93623095-6ff0-44b0-b4cd-e22e76c52925"
        />{' '}
        Wulf va ancora oltre: secondo lui alle ordinanze più tarde manca
        qualsiasi nesso necessario con il modello hussita. Possono quindi
        servire soltanto a confermare e spiegare le scarse notizie dirette
        sull&apos;arte militare hussita, non come prova.
        <Qt
          publication={PUBLICATIONS.WULF1889}
          href="https://www.digitale-sammlungen.de/de/view/bsb11551340?page=13"
        />
      </p>
      <p>&nbsp;</p>
    </Col>
  </Row>
)
