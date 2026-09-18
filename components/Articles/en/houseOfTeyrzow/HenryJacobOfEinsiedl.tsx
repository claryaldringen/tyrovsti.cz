import { Col, Row } from 'reactstrap'
import React from 'react'
import { PUBLICATIONS } from '../../../../shared/constants'
import { Qt } from '../../../Quote/Qt'
import { Cit } from '../../../Citation'

export const HenryJacobOfEinsiedl = () => (
  <>
    <Row>
      <Col>
        <div className="anchor" id="henry-jacob-of-einsiedl" />
        <h4>Jindřich Jakub (Henry Jacob) Týřovský of Einsiedl (died 1618)</h4>
        <p>
          Jindřich Jakub, the son of Jiřík who resided at Hřebečníky, took
          possession of the Chříč estate in 1609 immediately after his
          kinsman&apos;s death. In order to free himself of debt, he sold the
          stronghold of Hřebečníky and the village of Novosedly, pledged Milíčov
          and sold the wood with the meadow called Chrustina. He did not,
          however, have the estate inventoried, nor did he enter his
          kinsman&apos;s will into the land tables.
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:dab901de-288a-4ad7-9ecc-ad96381e5e5a"
            note="p. 313–314"
          />
        </p>
        <p>
          Maxmilián Krakovský at Šípy, the former maternal uncle of Jan, took
          advantage of this: he summoned Jindřich Jakub before the court and in
          1616 took possession of the Chříč estate himself, in order to preserve
          it and prevent the creditors from taking everything. Týřovský
          resisted, but within a year came to a settlement with him and took
          over Chříč and Milíčov again himself.
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:7e24d610-e020-4b49-94be-10a7485249aa"
            note="p. 314, 409"
          />
        </p>
        <p>
          He had also clashed with Maxmilián in person before. In 1611 he was
          riding from Chříč through Šípy and, at the request of Karel Krakovský,
          stopped in front of the stronghold for a cup of wine. Maxmilián came
          out of the stronghold with a rapier and let loose a torrent of abuse
          at him; a fierce brawl followed, in which Týřovský wrested the rapier
          from Maxmilián and rode off in haste. A wager with Karel Vtelenský of
          Hluboš, who came to Chříč in 1616, ended in much the same way:
          Jindřich Jakub challenged him for a hundred ducats that he would not
          shoot the finial off the roof of the manor house within ten shots.
          Vtelenský shot the finial down, but Týřovský refused him the stake,
          then rode to Hluboš and took from his lodging a standing striking
          clock worth 50 schocks.
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:50879103-7288-45c7-893a-4458b2578dce"
            note="p. 423–424"
          />
        </p>
        <p>
          For the people of Kožlany he achieved what his kinsman had striven for
          in vain. In 1612 he obtained for them from King Matthias a charter for
          two annual fairs with a toll on cattle – the first on St
          Lawrence&apos;s day, the second on St Matthew&apos;s, with an
          eight-day market peace – and he himself supplemented it with a series
          of privileges. He allowed them to buy for the use of the community a
          manor with one or two hides of fields and to build themselves a town
          hall in which they would pass judgement over local people and
          outsiders alike, with appeal to Prague Castle; the school was to
          remain under the authority of the burgomaster and the aldermen, who
          would themselves appoint both the schoolmaster and the town scribe.
          The inhabitants could freely make wills and sell their farmsteads,
          brew beer by turns in the communal brewery and sell it by the measure
          or cart it elsewhere, trade in salt, pitch and iron, elect their own
          forester for the communal wood, and they were left the hunting of
          hares and the catching of fish and crayfish in the brooks. In return
          they had to work two days a year from every rateable house on the
          Chříč demesne and to assist their lord in the fishing of the great
          Týřov pond.
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:b93e7a10-7bce-49f4-9a31-552d048ab2ee"
            note="p. 369–370"
          />
        </p>
        <p>
          In economic matters he was enterprising – in 1614 he opened an alum
          and sulphur works near Chříč. He was the regional captain of the
          Rakovník district, and during the revolt of the Bohemian estates
          against King Ferdinand in 1618 he fielded four horsemen and twenty-six
          armed men on foot. He died in the summer of the same year. He was
          buried in the church at Milíčov, which he had previously had enlarged,
          and his tombstone is still there with the inscription{' '}
          <Cit>
            Leta 1618 dne 20. juli umřel pan Jindřich Jakub Tejřovský z Einsidle
            pán na Chříči, Dubjanech a Březsku, hejtman kraje Rakovnického.
          </Cit>
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:7e24d610-e020-4b49-94be-10a7485249aa"
            note="p. 314, 410"
          />
        </p>
        <p>
          With his wife Dorota Újezdecká he had a son, Adam Jindřich, and a
          daughter, Dorota Polyxena. Both were minors at their father&apos;s
          death, and the maiden Dorota Týřovská, the unprovided-for sister of
          the deceased, was appointed their guardian; in 1621 she gave up the
          guardianship in favour of Bohuslav Jiří Krakovský at Šípy and Opálka,
          a counsellor of the chamber court.
          <Qt
            publication={PUBLICATIONS.KOCKA1}
            href="https://kramerius5.nkp.cz/view/uuid:cbd24070-4608-11ed-b64c-005056827e52?page=uuid:7e24d610-e020-4b49-94be-10a7485249aa"
            note="p. 314"
          />
        </p>
      </Col>
    </Row>
  </>
)
