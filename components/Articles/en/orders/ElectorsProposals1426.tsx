import { Col, Row } from 'reactstrap'
import React from 'react'
import { Cit } from '../../../Citation'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const ElectorsProposals1426 = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="electors-proposals-1426" />
        <h4>Proposals of the Electors at Nuremberg, June 1426, Article 17</h4>
        <p>
          The proposals were drawn up by the electors at their meeting in
          Nuremberg between 7 and 10&nbsp;June 1426. They deal with how to
          prepare and conduct the campaign against the Hussites, how to muster
          the people and who is to contribute to the campaign, as well as with
          the safety of the participants and compensation for their losses.
          Rules of military discipline appear only in Article 17, and even
          there, according to Toman, only in abridged form without details.
          Toman took the article from the <i>Deutsche Reichstagsakten</i> and
          divided it into paragraphs a–g himself.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:8b817ac0-57b2-408e-83e4-6a2585b6ccc2"
          />{' '}
          The text survives only in an 18th-century paper copy in the Breslau
          State Archive, which does not name its exemplar, and the editor
          corrected numerous misreadings in it. An older calendar of Upper
          Lusatian charters and Grünhagen both placed it in 1422.
          <Qt
            publication={PUBLICATIONS.DRA8}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833356?page=483"
          />{' '}
          Toman&apos;s transcription differs from the edition mainly in
          spelling. The only difference in substance is in paragraph b), where
          Toman reads <Cit>fährde</Cit> and the edition <Cit>vehede</Cit>, that
          is, a feud. At this point the translation follows the edition.
          According to the editor, the ban on taking common women along with the
          army also appears in the Frankfurt ordinance of 1427.
          <Qt
            publication={PUBLICATIONS.DRA8}
            href="https://www.digitale-sammlungen.de/de/view/bsb11833356?page=486"
          />
        </p>
        <p>
          Translation notes: I translate the words{' '}
          <Cit>wenn die hussen zusammenkommen werden</Cit> literally. They
          could, however, also be understood more loosely as the mustering of
          the armies against the Hussites.
          <br />
          The editor explains the phrase{' '}
          <Cit>umme niemands willen vorsehen</Cit> as to pardon or forgive;
          hence “not be remitted for anyone&apos;s sake”.
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
            It shall be proclaimed, when the Hussites gather, that everyone is
            to obey the captains at the places to which they have been assigned,
          </li>
          <li>
            and to live peaceably with one another; and should there be any feud
            or ill will between anyone, it shall be wholly stilled and settled
            until each party returns to its own lands and home.
          </li>
          <li>
            And whoever commits a misdeed shall be punished by the captain under
            whom he serves, according to the circumstances of the case; and no
            one under whose command such an offender is shall protect him, but
            shall help to see that he is punished.
          </li>
          <li>Dice games shall not be permitted, and</li>
          <li>
            no common women shall be let into the army, especially when marching
            into the field.
          </li>
          <li>
            Should any woman, maidservant or virgin be raped, whoever did it
            shall be punished without any mercy, as is fitting.
          </li>
          <li>
            Nor shall anyone insult by word or deed the others who ride on such
            a campaign, whether they come from the towns or elsewhere; whoever
            does so nonetheless shall be punished as is fitting, and such
            punishment shall not be remitted for anyone&apos;s sake.
          </li>
        </ol>
      </Col>
    </Row>
  </>
)
