import React from 'react'
import { Col, Row } from 'reactstrap'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const GermanMilitaryOrdersIntro = () => (
  <Row>
    <Col>
      <p>
        The opponents of the Hussites learned their way of fighting in the war
        itself. According to Max Jähns, they were forced to: anyone who wanted
        to set artillery of their own against artillery needed wagons, and
        anyone who wanted to take an enemy wagon fort had to leave the brunt of
        the fighting to the infantry.
        <Qt
          publication={PUBLICATIONS.JAHNS1889}
          href="https://archive.org/details/geschichtederkr00jhgoog/page/303/mode/1up"
        />{' '}
        In the German lands the wagon fort thus became so closely bound up with
        the army that the word <i>Wagenburg</i> was often used for the army as
        such. The wagon fort ordinances of the period (<i>Wagenburgordnungen</i>
        ) are therefore mostly army ordinances (<i>Heerordnungen</i>) as well.
        <Qt
          publication={PUBLICATIONS.JAHNS1889}
          href="https://archive.org/details/geschichtederkr00jhgoog/page/304/mode/1up"
        />{' '}
        According to Toman, references to wagons armed in the Hussite manner
        appear in the resolutions of the estates of the neighbouring lands from
        the defeat at Ústí nad Labem (Aussig) in 1426 onwards. At first,
        however, they are very brief and merely list what is to be taken into
        the field with the wagons.
        <Qt
          publication={PUBLICATIONS.TOMAN}
          href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:175a8bf2-68d6-4f59-b376-5f0d3fe627ee"
        />
      </p>
      <p>
        The wagon fort was not the only subject, however. According to Toman,
        three general military ordinances for the planned campaigns into Bohemia
        emerged from the deliberations of the imperial diets during the Hussite
        wars. They deal with the preparation of the campaign, discipline in the
        army and the allocation of artillery. The electors&apos; proposals of
        1426 are in his view merely a poor attempt, the Frankfurt resolution of
        1427 already forms a complete ordinance of 48 articles, and the third
        ordinance was issued by the Nuremberg diet in 1431.
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
        Maximilian von Wulf observes that, as far as the wagon fort is
        concerned, the ordinances of 1428–1450 are limited to the equipment of
        the wagons. In his view, the Nuremberg resolution of 1428 contains the
        very earliest provisions on the war wagons of the imperial levies. Only
        from a later period have more detailed ordinances survived that also
        describe the march and encampment of the wagon fort.
        <Qt
          publication={PUBLICATIONS.WULF1889}
          href="https://www.digitale-sammlungen.de/de/view/bsb11551340?page=12"
        />{' '}
        According to Wulf, the most vivid picture of a wagon fort on the march
        and in camp is given by the ordinances of Margrave Albrecht Achilles.
        <Qt
          publication={PUBLICATIONS.WULF1889}
          href="https://www.digitale-sammlungen.de/de/view/bsb11551340?page=13"
        />
      </p>
      <p>
        As a source for Hussite warfare, both authors treat the later ordinances
        with reservation. Toman regards the ordinances from the first half of
        the century as direct sources. As for the later ones, he points out that
        they reflect the changes of the last quarter of the century – improved
        artillery and Swiss and Netherlandish models in the use of infantry.
        Even so, he finds much of value in them that rests on old traditions,
        above all on manoeuvring with wagons and on technical aids, about which
        the older sources are silent.
        <Qt
          publication={PUBLICATIONS.TOMAN}
          href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:93623095-6ff0-44b0-b4cd-e22e76c52925"
        />{' '}
        Wulf goes even further: in his view the later ordinances lack any
        necessary connection with the Hussite model. They can therefore serve
        only to confirm and explain the scanty direct reports on Hussite
        warfare, not as proof.
        <Qt
          publication={PUBLICATIONS.WULF1889}
          href="https://www.digitale-sammlungen.de/de/view/bsb11551340?page=13"
        />
      </p>
      <p>&nbsp;</p>
    </Col>
  </Row>
)
