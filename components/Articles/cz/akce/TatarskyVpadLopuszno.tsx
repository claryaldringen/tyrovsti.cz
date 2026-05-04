import { Col, Row } from 'reactstrap'
import React from 'react'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'

export const TatarskyVpadLopuszno = ({ draft }: ArticleProps) => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="tatarsky-vpad-lopuszno" />
        <h4>
          Tatarský vpád na Volyň a bitva u Lopuszna / Wiśniowce (1512)
          {draft && <DraftBadge />}
        </h4>
        <p>
          Bitva u Lopuszna (pol. <i>bitwa pod Wiśniowcem</i>) z{' '}
          <b>28. dubna 1512</b> byla rozhodujícím střetem mezi spojeným
          polsko-litevským vojskem pod velením velkohejtmana koruny Mikuláše
          Kamieneckého a velkohejtmana litevského knížete Konstantina Ivanoviče
          Ostrožského a krymsko-tatarským oddílem vedeným syny chána Mengliho I.
          Geraje. Bitva představuje jeden z největších úspěchů polsko-litevského
          vojska proti krymským Tatarům první poloviny 16. století a definitivně
          potvrdila Konstantina Ostrožského jako nejvýznamnějšího vojevůdce
          východní fronty.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Bitwa_pod_Wi%C5%9Bniowcem"
          />
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <h5>Předehra</h5>
        <p>
          Na jaře roku 1512 podnikli krymští Tataři rozsáhlý kořistný vpád na
          Volyň a do Haliče. Oddíl o síle odhadem 24 000 mužů, vedený několika
          syny chána Mengliho I. Geraje, překročil Dněstr a začal plenit okolí
          Lvova, Brzežan a Krzemence. Hlavním cílem bylo nahnání zajatců a
          dobytka před návratem na Krym; Tataři se proto rozdělili do řady
          menších plenivých čet, které pročesávaly jednotlivá panství.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Konstanty_Ostrogski"
          />
        </p>
        <h5>Průběh</h5>
        <p>
          Polský velkohejtman Mikuláš Kamienecki shromáždil korunní oddíly o
          síle asi 4 000 jezdců, k nimž se rychle připojil litevský velkohejtman
          Konstantin Ostrožský s dalšími 2 000 muži, převážně knížecími
          družinami a oddíly volyňských a kyjevských šlechticů. Spojené vojsko
          dohromady čítalo asi 6 000 mužů a bylo tak početně značně slabší než
          tatarský oddíl. Kamienecki s Ostrožským se rozhodli využít rozptýlení
          Tatarů a překvapit jejich hlavní tábor během shromažďování zajatců na
          zpáteční cestě.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Bitwa_pod_Wi%C5%9Bniowcem"
          />
        </p>
        <p>
          K rozhodující bitvě došlo <b>28. dubna 1512</b> u Wiśniowce na Volyni,
          jen pár kilometrů od Lopuszna. Polsko-litevské vojsko udeřilo za
          úsvitu na tatarský tábor, kde byli kromě bojovníků i tisíce zajatců a
          obrovské stádo dobytka. Po několikahodinovém boji byly tatarské oddíly
          rozprášeny, podle Bielského kroniky padlo asi 10 000 Tatarů a stejný
          počet jich zahynul při útěku přes řeku. Polsko-litevské vojsko
          osvobodilo přibližně 16 000 zajatců, kteří měli být odvedeni na
          otrokářský trh v Kaffě.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Konstanty_Ostrogski"
          />
        </p>
        <h5>Výsledek</h5>
        <p>
          Vítězství u Lopuszna mělo bezprostřední strategický efekt: krymský
          chanát na několik let omezil rozsah svých nájezdů a Polsko-Litva si
          dočasně vydechlo na jihovýchodní hranici. Konstantin Ostrožský byl
          oslavován jako vrchní obránce země a získal několik dalších panství
          jako odměnu od krále Zikmunda I. Mikuláš Kamienecki potvrdil své
          postavení nejschopnějšího korunního hejtmana a obdržel doživotní
          starostenství v Krakově. Význam bitvy přesahoval rok 1512 — stala se
          modelovým příkladem efektivní kombinace polské těžké jízdy a
          litevsko-ruténských pomocných oddílů, který se opakoval i v pozdějších
          taženích.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Bitwa_pod_Wi%C5%9Bniowcem"
          />
        </p>
        <h5>Primární prameny / Pohled starších kronik</h5>
        <p>
          Nejvýznamnějším dobovým narativem o bitvě u Wiśniowce je{' '}
          <i>Kronika polska</i> Marcina Bielského (Kraków 1551, kn. IV). Bielski
          podává konkrétní čísla padlých Tatarů (asi 10 000) i počty
          osvobozených zajatců (16 000) — údaje, které se z jeho podání dostaly
          do veškeré pozdější polské tradice. Pohled doplňuje{' '}
          <i>De origine et rebus gestis Polonorum libri XXX</i> Marcina Kromera
          (lib. XXX), který bitvu líčí v souvislosti s tažením velkohejtmana
          Mikuláše Kamieneckého a klade důraz na Ostrožského roli jako
          obnoveného vrchního obránce východní fronty.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://polona.pl/item/kronika-marcina-bielskiego,NzM5MzcwMzc/"
          />
          <Qt
            publication={PUBLICATIONS.KROMER}
            href="https://www.bsb-muenchen-digital.de/~web/web1008/bsb10080831/images/index.html"
          />
        </p>
        <p>
          Litevsko-běloruskou rovinu zachycuje <i>Bychowiecova kronika</i> (vyd.
          v <i>Polnoye Sobranie Russkikh Letopisey</i>, sv. 32), jež k datu{' '}
          <b>28. dubna 1512</b> zaznamenává Ostrožského spojení s polským
          velkohejtmanem a osvobození zajatců určených k odvozu do Kaffy. Maciej
          Stryjkowski v <i>Kronice polské, litewské, žmuďské</i> (1582, kn.
          XXIII) přejímá Bielského čísla a doplňuje topografické podrobnosti o
          souběžných pomocných oddílech volyňských knížat.
          <Qt
            publication={PUBLICATIONS.BYCHOWIEC}
            href="https://en.wikipedia.org/wiki/Bychowiec_Chronicle"
          />
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://polona.pl/item/kronika-polska-litewska-zmodzka-i-wszystkiej-rusi,NzkzNTk3MTM/"
          />
        </p>
        <h5>Účast českých žoldnéřů</h5>
        <p>
          Účast českých nebo moravských žoldnéřů u Lopuszna není doložena.
          Polsko-litevské vojsko bylo zcela složeno z domácích zdrojů — korunní
          jízdy, knížecích družin a šlechtických oddílů z Volyně a Kyjevštiny.
          Krátké tažení proti rychle se přesouvajícím tatarským jednotkám
          nemohlo být obsazováno smluvenými žoldnéřskými rotami; při hlavním
          úderu se tradičně využívaly vlastní mobilizační rezervy. Bitva tak
          nepatří do okruhu konfliktů, kde by čeští žoldnéři představovali
          relevantní vojenský prvek.
          <Qt
            publication={PUBLICATIONS.WIKI}
            href="https://pl.wikipedia.org/wiki/Konstanty_Ostrogski"
          />
        </p>
      </Col>
    </Row>
  </>
)
