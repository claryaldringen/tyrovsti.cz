import React from 'react'
import { Col, Row } from 'reactstrap'
import { ArticleProps } from '../../../../types'
import { DraftBadge } from '../../../DraftBadge'
import { Qt } from '../../../Quote/Qt'
import { PUBLICATIONS } from '../../../../shared/constants'

export const CzechMilitaryOrdersIntro = ({ draft }: ArticleProps) => (
  <>
    <h1>Czech military orders and writings{draft && <DraftBadge />}</h1>
    <Row>
      <Col>
        <p>
          Among the medieval writings that give us a glimpse into the conditions
          of warfare of the time are the so-called military orders. They were
          usually written before a particular campaign and originally dealt
          mainly with disciplinary and organisational matters. Relatively few of
          them survive from before the 15th century. Among the best known is the{' '}
          <i>Military Order of Frederick I Barbarossa</i> from 1158. The oldest
          military order of the Swiss is the so-called <i>Sempacherbrief</i>,
          which was written in Zurich in 1393. These two orders became the basis
          and model for most later writings of this nature in the German areas.
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:fd18f7bc-3cb3-4d13-a2c4-1cd3a9878f2d"
          />{' '}
          Leaving aside the disputed dating of the so-called Hodětín Order
          (various scholars place it between 1413 and 1431), the first attempt
          to introduce a full-fledged military order was made by Jan Hvězda of
          Vícemilice in October 1421 in Prague. This order, however, has not
          survived and is only recorded in a mention in the Hussite Chronicle of
          Lawrence of Březová
          <Qt publication={PUBLICATIONS.VAVRINEC} note="p. 259–260" />:{' '}
          <i>
            that during military expeditions no one should return from the army
            without the will of the hetmans (captains), nor, if it came to it,
            steal from the battle under loss of throat and estates by any
            custom.
          </i>
          <Qt
            publication={PUBLICATIONS.TOMAN}
            href="https://kramerius5.nkp.cz/view/uuid:0723c370-14ea-11dd-959f-000d606f5dc6?page=uuid:956e3859-9fca-4287-93f8-4c33d455d0f3"
          />
        </p>
        <p>
          After the middle of the 15th century, the number and quality of
          Bohemian and German military orders increased, no longer concerned
          only with disciplinary and organisational matters, but also with
          military tactics and the art of war. The culminating work in this
          respect is undoubtedly{' '}
          <i>
            Václav Vlček of Čenov&apos;s handbook to king Vladislaus, how to
            make formations of cavalry, infantry and wagons
          </i>
          , while among the German orders it is worth noting the writings of
          Albrecht III. Achilles.
        </p>
        <p>
          Here I have attempted to present all the Czech writings and records of
          the 15th century relating to contemporary military science.
        </p>
      </Col>
    </Row>
  </>
)
